//#region IFunction

/**
 Defines the core JavaScript function. IFunction and Function are equivalent. 
 @remarks 
    This interface was created as an alias so that Function can refer to 
    the notion of a function in the reflection library.
*/
interface IFunction extends Function { }

//#endregion IFunction

//#region Collections

/**
 The core set of collections defined in Classical.
*/
module Classical.Collections {

    //#region Imports

    import u = Classical.Utilities;
    import a = Classical.Aspects;

    //#endregion Imports

    //#region Variables

    //The buckets numbers for the hashTable in DictionaryBase.
    //The number of buckets is approximately 2^(index + 3), and it is guaranteed to be prime.
    var numberOfBuckets: number[] = [7, 13, 23, 43, 83, 163, 317, 631, 1259, 2503, 5003, 9973, 19937, 39869, 79699, 159389, 318751, 637499, 1274989, 2549951, 5099893, 10199767, 20399531, 40799041, 81598067, 163196129, 326392249, 652784471];

    //#endregion Variables

    //#region Dictionary

    //A dictionary is a mapping between unique keys and arbitrary values.
    //Keys must implement getHashCode and equals from the IObject interface.
    export class Dictionary<TKey, TValue>
        implements IEnumerable<KeyValuePair<TKey, TValue>> {

        //#region Fields

        private _hashTable: Object;
        private _bucketIndex: number;
        private _numberOfBuckets: number;
        private _numberOfElements: number;
        private _initialCapacity: number;

        //#endregion Fields

        //#region Properties

        //Returns a sequence containing the keys of the dictionary.
        get keys(): IEnumerable<TKey> {
            return new DictionaryKeyCollection<TKey, TValue>(this);
        }

        //Returns a sequence containing the values of the dictionary.
        get values(): IEnumerable<TValue> {
            return this.query().select(pair => pair.value);
        }

        //#endregion Properties

        //#region Constructor

        //Builds a new dictionary.
        //The capacity a lower bound on the capacity is the number of elements that can be stored without rebalancing.
        constructor(capacity?: number) {
            this._initialCapacity = u.coalesce(capacity, 0);
            this.clear();
        }

        //#endregion Constructor

        //#region IEnumerable Members

        getEnumerator(): IEnumerator<KeyValuePair<TKey, TValue>> {
            return new DictionaryEnumerator<TKey, TValue>(this);
        }

        //Returns an IEnumerable implementation that is queryable.
        query(): IQueryable<KeyValuePair<TKey, TValue>> {
            return new Queryable<KeyValuePair<TKey, TValue>>(this);
        }

        //Enumerates the collection
        forEach(operation: (item: KeyValuePair<TKey, TValue>) => void): void {
            forEach(this, operation);
        }

        //Returns a JavaScript array.
        array(): KeyValuePair<TKey, TValue>[] {
            var array: any[] = [];
            <any>this.forEach(
                pair => { array.add(pair); });
            return array;
        }

        //#endregion IEnumerable Members

        //#region Methods

        //Adds a key-value pair to the dictionary.
        //If it exists, the existing value will be overwritten.
        //The key can be null, but not undefined.
        //If the key does not have .equals and .getHashCode methods, they will be added with reference semantics.
        add(key: TKey, value: TValue): Dictionary<TKey, TValue> {
            Assert.isDefined(key, 'The key is null or undefined.');

            var added = this.addWithoutRebalancing(this._hashTable, this._numberOfBuckets, {
                key: key,
                value: value
            });

            if (added) this._numberOfElements++;
            this.rebalanceIfNecessary();
            return this;
        }

        //Removes a key from the dictionary.
        remove(key: TKey): Dictionary<TKey, TValue> {
            var elements = this.getElements(key);
            var pair =
                this.getPair(
                    elements,
                    this._hashTable,
                    this._numberOfBuckets,
                    key);

            if (u.isDefined(pair)) {
                elements.remove(pair);
                this._numberOfElements--;
            }

            return this;
        }

        //Returns the value of the key if it exists; undefined otherwise.
        getValue(key: TKey): TValue {
            var keyAny = <any>key;
            if (u.isNullOrUndefined(key) ||
                !keyAny.equals || !keyAny.getHashCode)
                return undefined;

            var elements = this.getElements(key);
            if (elements === undefined)
                return undefined;

            for (var i = 0, elementsLength = elements.length; i < elementsLength; i++) {
                var pair = elements[i];
                if ((<any>pair.key).equals(key))
                    return pair.value;
            }

            return undefined;
        }

        //Returns true if the dictionary contains the specified key; False otherwise.
        containsKey(key: TKey): boolean {
            var keyAny = <any>key;
            if (u.isNullOrUndefined(key) ||
                !keyAny.equals || !keyAny.getHashCode)
                return false;

            var elements = this.getElements(key);
            return u.isDefined(
                this.getPair(
                    elements,
                    this._hashTable,
                    this._numberOfBuckets,
                    key));
        }

        //Removes all items from the dictionary.
        clear(): void {
            this._hashTable = {};
            this._numberOfElements = 0;
            var bucketIndex = DictionaryUtilities.capacityToBucketIndex(this._initialCapacity);

            this._bucketIndex = bucketIndex;
            this._numberOfBuckets = DictionaryUtilities.getNumberOfBuckets(bucketIndex);
        }

        //Counts the number of elements in the dictionary.
        count(): number {
            return this._numberOfElements;
        }

        //#endregion Methods

        //#region Utilities

        private getIndex(key: TKey): number {
            return (<any>key).getHashCode() % this._numberOfBuckets;
        }

        private getElements(key: TKey): KeyValuePair<TKey, TValue>[] {
            var index = this.getIndex(key);
            return <KeyValuePair<TKey, TValue>[]>this._hashTable[index];
        }

        private getPair(
            elements: KeyValuePair<TKey, TValue>[],
            hashTable: Object,
            numberOfBuckets: number,
            key: TKey):
            KeyValuePair<TKey, TValue> {

            if (elements === undefined)
                return null;

            var current: KeyValuePair<TKey, TValue>;
            for (var i = 0, elementsLength = elements.length; i < elementsLength; i++) {
                current = elements[i];
                if ((<any>current.key).equals(key))
                    return current;
            }

            return null;
        }

        private addWithoutRebalancing(
            hashTable: Object,
            numberOfBuckets: number,
            pair: KeyValuePair<TKey, TValue>,
            checkForExistance: boolean = true):
            boolean {

            var keyHashCode = (<any>pair.key).getHashCode() % numberOfBuckets;
            var elements = <KeyValuePair<TKey, TValue>[]>hashTable[keyHashCode];
            if (elements === undefined) {
                elements = [];
                hashTable[keyHashCode] = elements;
            }

            if (checkForExistance) {
                var foundPair = this.getPair(
                    elements,
                    hashTable,
                    numberOfBuckets,
                    pair.key);

                if (u.isDefined(foundPair)) {
                    foundPair.value = pair.value;
                    return false;
                }
            }

            elements.push(pair);
            return true;
        }

        private rebalanceIfNecessary(): void {
            if (this._numberOfElements > (DictionaryUtilities.loadFactor * this._numberOfBuckets))
                this.rebalance();
        }

        private rebalance(): void {
            var currentBucketIndex = this._bucketIndex,
                currentNumberOfBuckets = this._numberOfBuckets,
                currentHashTable = this._hashTable,
                nextBucketIndex = currentBucketIndex + 1,
                nextNumberOfBuckets = DictionaryUtilities.getNumberOfBuckets(nextBucketIndex),
                nextHashTable = {},
                elements: KeyValuePair<TKey, TValue>[];

            for (var i = 0; i < currentNumberOfBuckets; i++) {
                elements = <KeyValuePair<TKey, TValue>[]>currentHashTable[i];
                if (u.isDefined(elements)) {
                    for (var j = 0, elementsLength = elements.length; j < elementsLength; j++) {
                        this.addWithoutRebalancing(nextHashTable, nextNumberOfBuckets, elements[j], false);
                    }
                }
            }

            this._bucketIndex = nextBucketIndex;
            this._numberOfBuckets = nextNumberOfBuckets;
            this._hashTable = nextHashTable;
        }

        //#endregion Utilities
    }

    //#endregion Dictionary

    //#region DictionaryUtilities

    class DictionaryUtilities {
        static loadFactor = 2;

        constructor() {
            Assert.staticClass();
        }

        //Gets the number of buckets for the nth reordering, always a prime number.
        static getNumberOfBuckets(numberOfRebalances: number): number {
            var result = numberOfBuckets[numberOfRebalances];
            Assert.isDefined(result, 'The maximum size for a Dictionary has been exceeded.');

            return result;
        }

        //Returns the bucketIndex closest to matching the specified capacity.
        static capacityToBucketIndex(capacity: number) {
            var bucketValue: number = capacity / DictionaryUtilities.loadFactor,
                currentBucketValue: number;
            for (var i = 0, length = numberOfBuckets.length; i < length; i++) {
                currentBucketValue = numberOfBuckets[i];
                if (currentBucketValue > bucketValue)
                    return i;
            }

            Assert.isInvalid('The capacity is too large for the dictionary.');
        }
    }

    //#endregion DictionaryUtilities

    //#region DictionaryEnumerator

    class DictionaryEnumerator<TKey, TValue>
        implements IEnumerator<KeyValuePair<TKey, TValue>> {

        private _index = -1;
        private _hashTable: Dictionary<TKey, TValue>;
        private _numberOfBuckets: number;
        private _bucketIndex: number;
        private _elements: KeyValuePair<TKey, TValue>[];

        constructor(dictionary: Dictionary<TKey, TValue>) {
            Assert.isDefined(dictionary);
            this._hashTable = (<any>dictionary)._hashTable;
            this._numberOfBuckets = (<any>dictionary)._numberOfBuckets;
            this._bucketIndex = 0;
            this._elements = this._hashTable[this._bucketIndex];
        }

        get current(): KeyValuePair<TKey, TValue> {
            return this._elements[this._index];
        }

        moveNext(): boolean {
            var bucketIndex = this._bucketIndex,
                numberOfBuckets = this._numberOfBuckets,
                elements = this._elements,
                hashTable = this._hashTable;

            if (u.isDefined(elements)) {
                this._index++;
                if (this._index < elements.length)
                    return true;

                this._elements = undefined;
                elements = this._elements;
            }

            if (bucketIndex + 1 >= numberOfBuckets)
                return false;

            for (var i = this._bucketIndex + 1; i < numberOfBuckets; i++) {
                elements = hashTable[i];
                if (u.isDefined(elements)) {
                    this._elements = elements;
                    this._bucketIndex = i;
                    this._index = 0;
                    return true;
                }
            }

            return false;
        }
    }

    //#endregion DictionaryEnumerator

    //#region DictionaryKeyCollection

    class DictionaryKeyCollection<TKey, TValue>
        implements IEnumerable<TKey> {

        //#region Fields

        private _dictionary: Dictionary<TKey, TValue>;

        //#endregion Fields

        //#region Constructor

        constructor(dictionary: Dictionary<TKey, TValue>) {
            Assert.isDefined(dictionary);
            this._dictionary = dictionary;
        }

        //#endregion Constructor

        //#region IEnumerable Members

        getEnumerator(): IEnumerator<TKey> {
            return new DictionaryKeyEnumerator(this._dictionary);
        }

        query(): IQueryable<TKey> {
            return new Queryable<TKey>(this);
        }

        forEach(operation: (item: TKey) => void): void {
            forEach(this, operation);
        }

        array(): TKey[] {
            var array: TKey[] = new Array<TKey>();
            this.forEach(pair => array.add(pair));
            return array;
        }

        count(): number {
            return this._dictionary.count();
        }

        //#endregion IEnumerable Members
    }

    //#endregion //DictionaryKeyCollection

    //#region DictionaryKeyEnumerator

    class DictionaryKeyEnumerator<TKey, TValue>
        implements IEnumerator<TKey> {

        private _dictionaryEnumerator: IEnumerator<KeyValuePair<TKey, TValue>>;

        constructor(dictionary: Dictionary<TKey, TValue>) {
            Assert.isDefined(dictionary);
            this._dictionaryEnumerator = dictionary.getEnumerator();
        }

        get current(): TKey {
            return this._dictionaryEnumerator.current.key;
        }

        moveNext(): boolean {
            return this._dictionaryEnumerator.moveNext();
        }
    }

    //#endregion DictionaryKeyEnumerator

    //#region KeyValuePair

    export class KeyValuePair<TKey, TValue> {
        key: TKey;
        value: TValue;

        constructor(key: TKey, value: TValue) {
            this.key = key;
            this.value = value;
        }
    }

    //#endregion KeyValuePair

    //#region Utilities

    function forEach<T>(items: IEnumerable<T>, operation: (item?: T) => void) {
        var enumerator = items.getEnumerator(),
            current: T;

        while (enumerator.moveNext()) {
            var current = enumerator.current;
            operation.bind(current)(current);
        }
    }

    //#endregion Utilities
}

//#endregion Collections

//#region typeOf

/**
 Used to obtain the Classical.Reflection.Type object for a function.
 @param ctor {IFunction} The constructor function of the Type.
 @returns {Classical.Reflection.Type} Returns the Classical.Reflection.Type object for the representing function.
*/
function typeOf(ctor: IFunction): Classical.Reflection.Type {
    return Classical.Reflection.Type.getType(ctor);
}

//#endregion typeOf

//#region moduleOf

/**
 Used to obtain the Classical.Reflection.Module object for a function.
 @param ctor {IFunction} The constructor function of the Type.
 @return {Classical.Reflection.Module} Returns the Classical.Reflection.Module object for the representing function.
*/
function moduleOf(ctor: IFunction): Classical.Reflection.Module {
    var type = typeOf(ctor);
    if (!type) return null;

    return Classical.Reflection.Module.getModule(type);
}

//#endregion moduleOf

//#region Null

function Null() { return null };

//#endregion Null

//#region Undefined

function Undefined() { return undefined };

//#endregion Undefined

/**
 You can use reflection to get the type from an existing object and invoke its methods or access its fields and properties.
*/
module Classical.Reflection {

    //#region Imports

    import u = Classical.Utilities;
    import c = Classical.Collections;
    import a = Classical.Aspects;

    //#endregion Imports

    //#region isEnum

    /**
     Returns true if the object is an enumeration type; False otherwise.
     @param enumCandidate {any} THe object to check if it's an enumeration.
     @returns {boolean} True if the object is an enumeration type; False otherwise.
     @remarks An Enum(short for ENumeration) is a special {Classical.Reflection.Type} that consists only of a set of named constants.
    */
    export function isEnum(enumCandidate: any): boolean {
        if (!u.isObject(enumCandidate))
            return false;
        
        var propertyNames = Object.getOwnPropertyNames(enumCandidate);
        var numberProperties = propertyNames.query().where(p => {
            var match = p.match(/[0-9]+/);
            return match && match.length === 1
        });
        var numberPropertiesCount = numberProperties.count();
        if (numberPropertiesCount == 0 || (numberPropertiesCount * 2 !== propertyNames.length))
            return false;

        numberProperties.forEach(n => {
            if (!enumCandidate[n])
                return false;
        });

        return true;
    }

    //#endregion isEnum

    //#region Interfaces

    /**
     Defines an object that is a member of a Module. 
    */
    export interface IModuleMember {
        declaringModule: Module;
    }

    /**
     Defines an object that is a member of a Type. 
    */
    export interface ITypeMember {
        declaringType: Type;
    }

    /**
     Defines an object that is a member of a Method. 
    */
    export interface IMethodMember {
        declaringMethod: Method;
    }

    //#endregion Interfaces

    //#region Modifier

    /**
     An enumeration of the various properties that apply to the 
     language construct metadata described by the reflection api. 
     @seealso 
        Classical.Reflection.Type.getProperties, 
        Classical.Reflection.Type.getMethods
    */
    export enum Modifier {
        Public,
        Protected,
        Private,
        Instance,
        Static,
    }

    /**
     The public modifier
     @seealso Classical.Reflection.Modifier
    */
    export var Public = Modifier.Public;

    /**
     The protected modifier
     @seealso Classical.Reflection.Modifier
    */
    export var Protected = Modifier.Protected;

    /**
     The private modifier
     @seealso Classical.Reflection.Modifier
    */
    export var Private = Modifier.Private;

    /**
     The instance modifier
     @seealso Classical.Reflection.Modifier
    */
    export var Instance = Modifier.Instance;

    /**
     The static modifier
     @seealso Classical.Reflection.Modifier
    */
    export var Static = Modifier.Static;

    var defaultModifier = [Public, Instance];

    //#endregion Modifier

    //#region LanguageConstruct

    /**
     LanguageConstruct is the base class of all Classical.Reflection classes.
     It provides the base methods and properties that all other Classical.Reflections classes share.
    */
    export class LanguageConstruct {

        //#region Properties

        //#region name

        /**
         Gets the name of the current construct
         @returns {string} The name of the current construct
        */
        public get name(): string {
            throw Assert.notImplemented();
        }

        //#endregion name

        //#region fullName

        /**
         Gets the fully qualified name of the construct, including its Classical.Reflection.Module.
         @returns {string} The fully qualified name of the construct, including its Classical.Reflection.Module.
         @seealso Module
        */
        public get fullName(): string {
            throw Assert.notImplemented();
        }

        //#endregion fullName

        //#region isPublic

        /**
         Returns true if the construct is declared public; False otherwise.
         @returns {boolean} True if the construct is construct is declared public; False otherwise.
        */
        public get isPublic(): boolean {
            throw Assert.notImplemented();
        }

        //#endregion isPublic

        //#region isProtected

        /**
         Returns true if the construct is declared protected; False otherwise.
         @returns {boolean} True if the construct is construct is declared protected; False otherwise.
         @remarks Since in JavaScript, there is not a notion of protected, we introduced a naming convention to decide if it is protected. If the name of starts with '$' it is deemed protected.
        */
        public get isProtected(): boolean {
            throw Assert.notImplemented();
        }

        //#endregion isProtected

        //#region isPrivate

        /**
         Returns true if the construct is declared private; False otherwise.
         @returns {boolean} True if the construct is construct is declared private; False otherwise.
         @remarks Since in JavaScript, there is not a notion of private, we introduced a naming convention to decide if it is private. If the name of starts with '_' it is deemed private.
        */
        public get isPrivate(): boolean {
            throw Assert.notImplemented();
        }

        //#endregion isPrivate

        //#region isStatic

        /**
         Returns true if the construct is static; False otherwise.
         @returns {boolean} True if the construct is static; False otherwise.
        */
        public get isStatic(): boolean {
            throw Assert.notImplemented();
        }

        //#endregion isStatic

        //#region isInstance
        
        /**
         Returns true if the construct is bound to an instance; False otherwise.
         @returns {boolean} True if the construct is bound to an instance; False otherwise.
        */
        public get isInstance(): boolean {
            throw Assert.notImplemented();
        }

        //#endregion isInstance

        //#endregion Properties

        //#region Constructors
        
        /**
         Initializes a new instance of the LanguageConstruct class.
         @param password {number} The password required to instantiate a LanguageConstruct class.
         @remarks We include a password as a parameter so that the LanguageConstruct class cannot be instantiated freely. This should be done by the system.
        */
        constructor(password: number) {
            Assert.isTrue(password === constructorPassword,
                'You do not have permission to create instances of this type.');
        }

        //#endregion Constructors
    }

    //#endregion LanguageConstruct

    //#region Module

    /**
     A description of the metadata associated within a module.
     @extends Classical.Reflection.LanguageConstruct
     @seealso getModule
    */
    export class Module extends LanguageConstruct {

        //#region Fields

        private _name: string;
        private _fullName;
        private _scope: any;
        private _base: Module;
        private _modules: IEnumerable<Module>;
        private _types: IEnumerable<Type>;
        private _functions: IEnumerable<Function>;
        private _variables: IEnumerable<Variable>;

        //#endregion Fields

        //#region Properties

        //#region name

        /**
         Gets the name of the current construct
         @returns {string} The name of the current construct.
        */
        get name(): string {
            return this._name;
        }

        //#endregion name

        //#region fullName

        /**
         Gets the fully qualified name of the construct, including its Classical.Reflection.Module.
         @returns {string} The fully qualified name of the construct, including its Classical.Reflection.Module.
        */
        get fullName(): string {
            return this._fullName;
        }

        //#endregion fullName

        //#region isPublic

        /**
         Returns true if the construct is declared public; False otherwise.
         @returns {boolean} True if the construct is construct is declared public; False otherwise.
        */
        get isPublic(): boolean {
            return true;
        }

        //#endregion isPublic

        //#region isProtected

        /**
         Returns true if the construct is declared protected; False otherwise.
         @returns {boolean} True if the construct is construct is declared protected; False otherwise.
         @remarks Since in JavaScript, there is not a notion of protected, we introduced a naming convention to decide if it is protected. If the name of starts with '$' it is deemed protected.
        */
        get isProtected(): boolean {
            return false;
        }

        //#endregion isProtected

        //#region isPrivate

        /**
         Returns true if the construct is declared private; False otherwise.
         @returns {boolean} True if the construct is construct is declared private; False otherwise.
         @remarks Since in JavaScript, there is not a notion of private, we introduced a naming convention to decide if it is private. If the name of starts with '_' it is deemed private.
        */
        get isPrivate(): boolean {
            return false;
        }

        //#endregion isPrivate

        //#region isStatic

        /**
         Returns true if the construct is static; False otherwise.
         @returns {boolean} True if the construct is static; False otherwise.
        */
        get isStatic(): boolean {
            throw 'isStatic is not valid for a Type.';
        }

        //#endregion isStatic

        //#region isInstance

        /**
         Returns true if the construct is bound to an instance; False otherwise.
         @returns {boolean} True if the construct is bound to an instance; False otherwise.
        */
        get isInstance(): boolean {
            throw 'isInstance is not valid for a Type.';
        }

        //#endregion isInstance

        //#region scope

        /**
         Returns the module definition of the Module.
         @returns {any} The scope of the Module.
         @remarks This is the underlying JavaScript module definition.
        */
        get scope(): any {
            return this._scope;
        }

        //#endregion scope

        //#region moduleValue

        /**
         Returns the underlying module definition.
         @returns {any} The module definition of the Module.
         @remarks This is the underlying JavaScript module definition.
        */
        get moduleValue(): any {
            return this.scope;
        }

        //#endregion moduleValue

        //#endregion Properties

        //#region Constructors

        /**
         Initializes a new instance of the Module class.
         @param password {number} The password required to instantiate a LanguageConstruct class.
         @param name {string} The name of the Module.
         @param scope {any} The module definition of the Module.
         @param base? {Classical.Reflection.Module} The base Module of the current Module(if any).
         @remarks We include a password as a parameter so that the Module class cannot be instantiated freely. This should be done by the system.
        */
        constructor(password: number, name: string, scope: any, base?: Module) {
            super(password);

            if (base && base != Module.global)
                this._fullName = u.format("{0}.{1}", base.fullName, name);
            else
                this._fullName = name;

            this._name = name;
            this._scope = scope;
            this._base = base;
        }

        //#endregion Constructors

        //#region Methods

        //#region getModules

        /**
         Returns all modules of the current Module.
         @returns {IQueryable<Classical.Reflection.Module>} All modules of the current Module.
        */
        getModules(): IQueryable<Module> {
            if (!this._modules)
                this._modules = this._initializeModules();

            return this._modules.array().query();
        }

        //#endregion getModules

        //#region getTypes

        /**
         Returns all types of the current Module.
         @returns {IQueryable<Classical.Reflection.Type>} All types of the current Module.
         @seealso Classical.Reflection.Type
        */
        getTypes(): IQueryable<Type> {
            if (!this._types)
                this._types = this._initializeTypes();

            return this._types.array().query();
        }

        //#endregion getTypes

        //#region getFunctions

        /**
         Returns all functions of the current Module.
         @returns {IQueryable<Classical.Reflection.Function>} All functions of the current Module.
         @seealso Classical.Reflection.Function
        */
        getFunctions(): IQueryable<Function> {
            if (!this._functions)
                this._functions = this._initializeFunctions();

            return this._functions.array().query();
        }

        //#endregion getFunctions

        //#region getFunction

        /**
         Searches for the specified function with the specified name.
         @param name {string} The string containing the name of the function to get.
         @returns {Classical.Reflection.Function} An object that represents the function with the specified name; null otherwise.
         @seealso Classical.Reflection.Function
        */
        getFunction(name: string): Function {
            Assert.isDefined(name);

            return (<IQueryable<Function>>this.getFunctions.apply(this)).query().singleOrDefault(p => p.name === name);
        }

        //#endregion getFunction

        //#region getVariables

        /**
         Returns all variables of the current Module.
         @returns {IQueryable<Classical.Reflection.Variable>} All variables of the current Module.
         @seealso Classical.Reflection.Variable
        */
        getVariables(): IQueryable<Variable> {
            if (!this._variables)
                this._variables = this._initializeVariables();

            return this._variables.array().query();
        }

        //#endregion getVariables

        //#region getVariable

        /**
         Searches for the specified variable with the specified name.
         @param name {string} The string containing the name of the variable to get.
         @returns {Classical.Reflection.Variable} An object that represents the variable with the specified name; null otherwise.
         @seealso Classical.Reflection.Variable
        */
        getVariable(name: string): Variable {
            Assert.isDefined(name);

            return (<IQueryable<Variable>>this.getVariables.apply(this)).query().singleOrDefault(p => p.name === name);
        }

        //#endregion getVariable

        //#endregion Methods

        //#region Utilities

        //#region _initializeModules

        private _initializeModules(): IEnumerable<Module> {
            var initializedModules = [];
            var scope = this.scope;
            if (!scope)
                return initializedModules;

            var moduleProperties = Object.getOwnPropertyNames(scope);

            for (var i = 0; i < moduleProperties.length; i++) {
                var modulePropertyName = moduleProperties[i];
                var moduleProperty = scope[modulePropertyName];

                if (Module._isModule(moduleProperty, modulePropertyName)) {
                    var obj = <Object>moduleProperty;
                    if (Object.isFrozen(obj))
                        continue;

                    var newModule = modules.getValue(obj);
                    if (newModule === undefined) {
                        newModule = new Module(constructorPassword, modulePropertyName, moduleProperty, this);
                        modules.add(obj, newModule);
                    }

                    initializedModules.add(newModule);
                }
            }

            return initializedModules;
        }

        //#endregion _initializeModules

        //#region _initializeTypes

        private _initializeTypes(): IEnumerable<Type> {
            var initializedTypes = [];
            var scopeProperties = Object.getOwnPropertyNames(this._scope);

            for (var i = 0; i < scopeProperties.length; i++) {
                var propertyName = scopeProperties[i];

                if (propertyName == 'constructor' || propertyName.indexOf('_') === 0)
                    continue;

                var property = this._scope[propertyName];
                if (property === Null || property === Undefined)
                    continue;

                if (Module._isType(property)) {
                    var ctor = <IFunction>property;
                    var type = types.getValue(ctor);
                    if (type === undefined) {
                        type = new Type(constructorPassword, ctor, this);
                        types.add(ctor, type);
                    }
                    else if (!(<any>type)._module) {
                        (<any>type)._module = this;
                    }

                    initializedTypes.add(type);
                }
            }

            return initializedTypes;
        }

        //#endregion _initializeTypes

        //#region _initializeFunctions

        private _initializeFunctions(): IEnumerable<Function> {
            var initializedFunctions = [];
            var scopeProperties = Object.getOwnPropertyNames(this._scope);

            for (var i = 0; i < scopeProperties.length; i++) {
                var propertyName = scopeProperties[i];
                var property = this._scope[propertyName];

                if (!Module._isType(property) && u.isFunction(property)) {
                    var func = new Function(constructorPassword, propertyName, true, this, <IFunction>property);
                    initializedFunctions.add(func);
                }
            }

            return initializedFunctions;
        }

        //#endregion _initializeFunctions

        //#region _initializeVariables

        private _initializeVariables(): IEnumerable<Variable> {
            var initializedVariables = new Array<Variable>();
            var scopeProperties = Object.getOwnPropertyNames(this._scope).query().where(p => p !== '_hashCode').array();

            for (var i = 0; i < scopeProperties.length; i++) {
                var propertyName = scopeProperties[i];
                var property = this._scope[propertyName];

                if (!u.isFunction(property) && !Module._isModule(property)) {
                    var variable = new Variable(constructorPassword, propertyName, this, property);
                    initializedVariables.add(variable);
                }
            }

            return initializedVariables;
        }

        //#endregion _initializeVariables

        //#region _findModule

        private _findModule(type: Type): Module {
            var foundType = false;

            this.getTypes().forEach(t => {
                if (t === type)
                    foundType = true;
                else
                    (<any>t)._module = this;
            });

            if (foundType)
                return this;

            var modules = this.getModules().array();
            for (var i = 0; i < modules.length; i++) {
                var m = modules[i];
                var foundModule = m._findModule(type);

                if (foundModule !== null)
                    return foundModule;
            }

            return null;
        }

        //#endregion _findModule

        //#endregion Utilities

        //#region Static Members

        //#region Fields

        private static _global: Module;
        private static _anonymous: Module;
        private static _modules: IEnumerable<Module>;

        //#endregion Fields

        //#region Properties

        //#region global

        /**
         Returns the global object represented as a Module.
         @returns {Classical.Reflection.Module} The global object represented as a Module.
        */
        public static get global(): Module {
            if (!Module._global) {
                Module._global = new Module(constructorPassword, 'Global', global);
                modules.add(global, Module._global);
            }

            return Module._global;
        }

        //#endregion global

        //#region anonymous

        /**
         Returns the anonymous Module.
         @returns {Classical.Reflection.Module} The anonymous Module.
         @remarks This special Module is for constructs that cannot be placed in any other Modules.
        */
        public static get anonymous(): Module {
            if (!Module._anonymous)
                Module._anonymous = new Module(constructorPassword, 'Anonymous', (<any>Classical).Anonymous);

            return Module._anonymous;
        }

        //#endregion anonymous

        //#endregion Properties

        //#region Methods

        //#region getModule

        /**
         Searches for the Module that has the specified Type.
         @returns The Module that has the specified Type.
         @remarks If the Module cannot be found for the specified Type, the anonymous Module will be returned.
         @seealso anonymous
        */
        static getModule(type: Type): Module {
            Assert.isDefined(type);
            if ((<any>type)._module)
                return (<any>type)._module;

            var foundModule = Module.global._findModule(type);
            if (foundModule) {
                (<any>type)._module = foundModule;
                return foundModule;
            }

            (<any>type)._module = Module.anonymous;
            return Module._anonymous;
        }

        //#endregion getModule

        //#endregion Methods

        //#region Utilities

        //#region _isModule

        private static _isModule(moduleCandidate: any, moduleName?: string): boolean {
            if (isEnum(moduleCandidate) || !u.isObject(moduleCandidate) || !u.isEmptyObject(Object.getPrototypeOf(moduleCandidate)))
                return false;

            var ownProperties = Object.getOwnPropertyNames(moduleCandidate);

            for (var i = 0; i < ownProperties.length; i++) {
                var ownProperty = ownProperties[i];
                try {
                    var moduleProperty = moduleCandidate[ownProperty];
                }
                catch (e) {
                    continue;
                }
                if (this._isType(moduleProperty))
                    return true;
            }

            if (!moduleName)
                return false;

            return moduleName[0] === moduleName[0].toUpperCase();
        }

        //#endregion _isModule

        //#region _isType

        private static _isType(typeCandidate: any): boolean {
            return typeCandidate === Object ||
                (u.isFunction(typeCandidate) &&
                u.isDefined(typeCandidate.prototype) &&
                !u.isEmptyObject(typeCandidate.prototype));
        }

        //#endregion _isType

        //#endregion Utilities

        //#endregion Static Members
    }

    //#endregion Module

    //#region Type

    /**
     A description of the metadata associated within a class.
     @seealso getType
    */
    export class Type extends LanguageConstruct implements IModuleMember {

        //#region Fields

        private _ctor: IFunction;
        private _base: Type = null;
        private _module: Module;
        private _name: string = null;
        private _properties: IEnumerable<Property>;
        private _fields: IEnumerable<Field>;
        private _methods: IEnumerable<Method>;
        private _isSingleton;
        private _typeConstructor: Constructor;

        //#endregion Fields

        //#region Properties

        //#region base
        
        /**
         Gets the parent type of the type, if defined; null otherwise.
         @returns {Classical.Reflection.Type} The parent type of the type, if defined; null otherwise.
        */
        get base(): Type {
            if (this._base === null) {
                var prototype = Object.getPrototypeOf(this.constructorFunction.prototype);
                if (prototype == null || Utilities.isFunction(!prototype.getType))
                    return null;

                this._base = <Type>prototype.getType();
            }

            return this._base;
        }

        //#endregion base

        //#region constructorFunction
        
        /**
         Gets the constructor of the type.
         @returns {IFunction} The constructor of the type.
        */
        get constructorFunction(): IFunction {
            return this.constructorValue.functionValue;
        }

        //#endregion constructorFunction

        //#region constructorValue

        /**
         Gets the constructor of the type.
         @returns {Classical.Reflection.Constructor} The constructor of the type.
        */
        get constructorValue(): Constructor {
            return this._typeConstructor;
        }

        //#endregion constructorValue

        //#region fullName

        /**
         Gets the fully qualified name of the construct, including its Classical.Reflection.Module.
         @returns {string} The fully qualified name of the construct, including its Classical.Reflection.Module.
         @seealso Module
        */
        get fullName(): string {

            if (this.declaringModule && this.declaringModule !== Module.global)
                return u.format("{0}.{1}", this.declaringModule.fullName, this.name);
            else
                return this.name;
        }

        //#endregion fullName

        //#region isNull

        get isNull() { return false; }

        //#endregion isNull

        //#region isUndefined

        get isUndefined() { return false; }

        //#endregion isUndefined

        //#region isPublic

        /**
         Returns true if the construct is declared public; False otherwise.
         @returns {boolean} True if the construct is construct is declared public; False otherwise.
        */
        get isPublic(): boolean {
            return !this.isPrivate && !this.isProtected;
        }

        //#endregion isPublic

        //#region isProtected

        /**
         Returns true if the construct is declared protected; False otherwise.
         @returns {boolean} True if the construct is construct is declared protected; False otherwise.
         @remarks Since in JavaScript, there is not a notion of protected, we introduced a naming convention to decide if it is protected. If the name of starts with '$' it is deemed protected.
        */
        get isProtected(): boolean {
            return this.name.indexOf('$') === 0;
        }

        //#endregion isProtected

        //#region isPrivate

        /**
         Returns true if the construct is declared private; False otherwise.
         @returns {boolean} True if the construct is construct is declared private; False otherwise.
         @remarks Since in JavaScript, there is not a notion of private, we introduced a naming convention to decide if it is private. If the name of starts with '_' it is deemed private.
        */
        get isPrivate(): boolean {
            return this.name.indexOf('_') === 0;
        }

        //#endregion isPrivate

        //#region isPrimitive

        /**
         True if the Type is one of the primitive types; false otherwise.
         @returns {boolean} True if the Type is one of the primitive types; false otherwise.
        */
        public get isPrimitive(): boolean {
            return this === typeOf(Boolean) ||
                this === typeOf(String) ||
                this === typeOf(Number);
        }

        //#endregion isPrimitive

        //#region isSingleton

        /**
         True if the Type is a singleton; false otherwise.
         @returns {boolean} True if the Type is a singleton; false otherwise.
        */
        get isSingleton() { return this._isSingleton; }

        //#endregion isSingleton

        //#region isStatic

        /**
         Returns true if the construct is static; False otherwise.
         @returns {boolean} True if the construct is static; False otherwise.
        */
        public get isStatic(): boolean {
            throw 'isStatic is not valid for a Type.';
        }

        //#endregion isStatic

        //#region isInstance

        /**
         Returns true if the construct is bound to an instance; False otherwise.
         @returns {boolean} True if the construct is bound to an instance; False otherwise.
        */
        public get isInstance(): boolean {
            throw 'isInstance is not valid for a Type.';
        }

        //#endregion isInstance

        //#region name
        
        /**
         Gets the name of the current construct
         @returns {string} The name of the current construct
         @remarks 
            This is largely for debugging or record keeping.
            For Type equivalence, use the equals method.
        */
        get name(): string {
            if (this._name === null) {
                if (this._ctor === undefined) {
                    this._name = 'Undefined';
                }
                else if (this._ctor === null) {
                    this._name = 'Null';
                }
                else {
                    var name = (<any>this._ctor).name;
                    if (u.isNullOrUndefined(name)) {
                        var match = <string[]>this._ctor.toString().match(/\s([\w\d]+)\(/);
                        if (match && match.length > 1)
                            name = match[1];
                    }
                    if (u.isNullOrUndefined(name))
                        name = "`Anonymous";
                    this._name = name;
                }
            }

            return this._name;
        }

        //#endregion name

        //#region declaringModule

        /**
         Gets the Module that the Type belongs to.
         @returns {Classical.Reflection.Module} The Module that the Type belongs to.
         @seealso Classical.Reflection.Module
        */
        get declaringModule(): Module {
            if (!this._module)
                this._module = Module.getModule(this);

            return this._module;
        }

        //#endregion declaringModule

        //#region prototype
        
        /**
         Gets the prototype of the Type.
         @returns {any} The prototype of the Type.
        */
        get prototype(): any {
            return this._ctor.prototype;
        }

        //#endregion prototype

        //#endregion Properties

        //#region Constructor

        //Creates a Type, a wrapper around the constructor of a class.
        /**
         Initializes a new instance of the Type class.
         @param password {number} The password required to instantiate a LanguageConstruct class.
         @param ctor {IFunction} The constructor of the Type.
         @param mod? {Classical.Reflection.Module} The declaring Module of the Type.
         @param singleton {boolean} True if the Type is a singleton; False otherwise.
         @remarks We include a password as a parameter so that the construct cannot be instantiated freely. This should be done by the system.
        */
        constructor(password: number, ctor: IFunction, mod?: Module, singleton: boolean = false) {
            super(password);

            this._ctor = ctor;
            this._isSingleton = singleton;
            this._typeConstructor = new Constructor(password, this, undefined, ctor);

            //TODO: If the module is not provided add it to the Native Module(Current Classical.Native);
            if (mod)
                this._module = mod;
        }

        //#endregion Constructor

        //#region Base Class Overrides

        //#region equals

        /**
         Returns true if the current Type is equal to the specified object; False otherwise.
         @returns {boolean} True if the current Type is equal to the specified object; False otherwise.
        */
        equals(other: any): boolean {
            if (u.isNullOrUndefined(other) ||
                !other.is(Type))
                return false;

            var otherType = <Type>other;
            return this.constructorFunction === otherType.constructorFunction;
        }

        //#endregion equals

        //#region toString
        
        /**
         Returns a string representation of the Type.
         @returns {string A string representation of the Type.
        */
        toString(): string {
            return this.name;
        }

        //#endregion toString

        //#endregion Base Class Overrides

        //#region Methods

        //#region create

        create<TInstance>(...args: Array<any>): any {
            return this.constructorFunction(args);
        }

        //#endregion create

        //#region getHashCode

        /**
         Serves as the default hash function.
         @returns {number} A has code for the current object.
        */
        getHashCode(): number {
            return (<any>this._ctor).getHashCode();
        }

        //#endregion getHashCode

        //#region getFieldsOf

        /**
         Returns the fields of a specified instance using the specified Modifiers.
         @param instance {any} The instance to get the fields of.
         @param ...options {Array<Modifier} One or more Modifiers that specify how the search is conducted.
         @returns {IQueryable<Classical.Reflection.Field>} The fields of a specified instance using the specified Modifiers.
         @remarks Because of how Fields are generated, this requires an instance to find the fields of.
         @seealso 
            Classical.Reflection.Modifier
            Classical.Reflection.Field
        */
        getFieldsOf(instance: any, ...options: Array<Modifier>): IQueryable<Field> {
            if (!u.isDefined(instance))
                return [].query();

            Assert.isDefined(instance);

            if (instance.getType && Utilities.isFunction(instance.getType)) {
                var instanceType = instance.getType();
                if (instanceType !== this)
                    throw 'The instance passed in is not of type ' + this.name;
            }

            var fields = this._initializeFields(instance);
            options = this._getProperOptions(options);

            return fields.array().query().where(f => this._isValidProperty(f, options)).distinct();
        }

        //#endregion getFieldsOf

        //#region getFieldOf

        /**
         Searches for the specified field with the specified name using the specified modifiers.
         @param instance {any} The instance to get the fields of.
         @param name {string} The string containing the name of the field to get.
         @param ...options {Array<Modifier} One or more Modifiers that specify how the search is conducted.
         @returns {Classical.Reflection.Field} The specified field with the specified name using the specified modifiers.
         @remarks Because of how Fields are generated, this requires an instance to find the fields of.
         @seealso 
            Classical.Reflection.Modifier
            Classical.Reflection.Field
        */
        getFieldOf(instance: any, name: string, ...options: Array<Modifier>): Field {
            Assert.isDefined(name);

            var args = [instance, options];
            return (<IQueryable<Method>>this.getFieldsOf.apply(this, args)).query().singleOrDefault(f => f.name === name);
        }

        //#endregion getFieldOf

        //#region getProperties

        /**
         Returns the properties of the current Type using the specified modifiers.
         @param ...options {Array<Modifier} One or more Modifiers that specify how the search is conducted
         @returns {IQueryable<Classical.Reflection.Property>} The properties of the current Type using the specified modifiers.
         @seealso 
            Classical.Reflection.Modifier
            Classical.Reflection.Property
        */
        getProperties(...options: Array<Modifier>): IQueryable<Property> {
            if (this.isNull || this.isUndefined)
                return [].query();

            if (!this._properties)
                this._initializeProperties();

            options = this._getProperOptions(options);

            return this._properties.array().query().where(p => this._isValidProperty(p, options)).distinct();
        }

        //#endregion getProperties

        //#region getProperty

        /**
         Searches for the specified property with the specified name using the specified modifiers.
         @param name {string} The string containing the name of the property to get.
         @param ...options {Array<Modifier} One or more Modifiers that specify how the search is conducted.
         @returns {Classical.Reflection.Property} The specified property with the specified name using the specified modifiers.
         @seealso 
            Classical.Reflection.Modifier
            Classical.Reflection.Property
        */
        getProperty(name: string, ...options: Array<Modifier>): Property {
            Assert.isDefined(name);

            return (<IQueryable<Method>>this.getProperties.apply(this, options)).query().singleOrDefault(p => p.name === name);
        }

        //#endregion getProperty

        //#region getMethods

        /**
         Returns the methods of the current Type using the specified modifiers.
         @param ...options {Array<Modifier} One or more Modifiers that specify how the search is conducted.
         @returns {IQueryable<Classical.Reflection.Method>} The methods of the current Type using the specified modifiers.
         @seealso 
            Classical.Reflection.Modifier
            Classical.Reflection.Method
        */
        getMethods(...options: Array<Modifier>): IQueryable<Method> {
            return (<IQueryable<Method>>this.getProperties.apply(this, options))
                .where(p => p.isMethod).cast<Method>();
        }

        //#endregion getMethods

        //#region getMethod

        /**
         Searches for the specified method with the specified name using the specified modifiers.
         @param name {string} The string containing the name of the property to get.
         @param ...options {Array<Modifier} One or more Modifiers that specify how the search is conducted.
         @returns {Classical.Reflection.Method} The specified method with the specified name using the specified modifiers.
         @seealso 
            Classical.Reflection.Modifier
            Classical.Reflection.Method
        */
        getMethod(name: string, ...options: Array<Modifier>): Method {
            Assert.isDefined(name);

            return (<IQueryable<Method>>this.getMethods.apply(this, options)).query().singleOrDefault(m => m.name === name);
        }

        //#endregion getMethod

        //#region isAssignableTo
        
        /**
         Returns true if the Type is assignable to the other Type; false otherwise.
         @returns {boolean} True if the Type is assignable to the other Type; false otherwise.
        */
        isAssignableTo(other: Type): boolean {
            var ctor = this.constructorFunction,
                otherCtor = other.constructorFunction,
                prototype = null;

            while (Utilities.isDefined(ctor)) {
                if (ctor === otherCtor)
                    return true;

                prototype = Object.getPrototypeOf(ctor.prototype);
                if (Utilities.isDefined(prototype))
                    ctor = prototype['constructor'];
                else
                    ctor = null;
            }

            return false;
        }

        //#endregion isAssignableTo

        //#region isAssignableFrom
        
        /**
         Returns true if the other Type is assignable to this Type; false otherwise.
         @returns {boolean} True if the other Type is assignable to this Type; false otherwise.
        */
        isAssignableFrom(other: Type): boolean {
            if (u.isNullOrUndefined(other))
                return false;

            return other.isAssignableTo(this);
        }

        //#endregion isAssignableFrom

        //#endregion Methods

        //#region Utilities

        //#region _initializeFields

        private _initializeFields(instance: any): IEnumerable<Field> {
            var fields = new Array<Field>();

            Object.getOwnPropertyNames(instance).forEach((property) => {
                var propertyDescriptor = Object.getOwnPropertyDescriptor(instance, property);
                var getter = propertyDescriptor.get;
                var setter = propertyDescriptor.set;

                if (!Utilities.isDefined(getter) && !Utilities.isDefined(setter) && !Utilities.isFunction(propertyDescriptor.value))
                    fields.add(new Field(constructorPassword, property, typeOf(instance.constructor), false));
            });

            return fields;
        }

        //#endregion _initializeFields

        //#region _initializeProperties

        private _initializeProperties(): void {
            var properties = new Array<Property>();
            var instance = this._ctor.prototype;

            properties.addRange(this._getStaticProperties());
            properties.addRange(this._getInstanceProperties());

            var baseType = this.base;
            if (Utilities.isDefined(baseType)) {
                var baseTypeProperties = baseType.getProperties();
                var propertiesToRemove = new Array<Property>();

                properties.forEach(p => {
                    var baseTypeProperty = baseTypeProperties.singleOrDefault(prop => prop.name == p.name);
                    if (baseTypeProperty) {
                        (<any>p)._declaringType = baseTypeProperty.declaringType;
                        propertiesToRemove.add(p);
                    }
                });

                propertiesToRemove.forEach(p => {
                    properties.remove(p);
                });

                properties.addRange(baseTypeProperties);
            }

            this._properties = properties;
        }

        //#endregion _initializeProperties

        //#region _getStaticProperties

        private _getStaticProperties(): IEnumerable<Property> {
            var properties = new Array<Property>();
            var instance = this._ctor.prototype;

            Object.getOwnPropertyNames(this._ctor).forEach((property) => {
                var propertyDescriptor = Object.getOwnPropertyDescriptor(this._ctor, property);
                var getter = propertyDescriptor.get;
                var setter = propertyDescriptor.set;

                if (Utilities.isDefined(getter) || Utilities.isDefined(setter))
                    properties.add(new Property(constructorPassword, property, typeOf(instance.constructor), propertyDescriptor, Utilities.isDefined(getter), Utilities.isDefined(setter), false, false, true));
                else if (Utilities.isFunction(propertyDescriptor.value))
                    properties.add(new Method(constructorPassword, property, typeOf(instance.constructor), propertyDescriptor, propertyDescriptor.writable, <IFunction>propertyDescriptor.value, true));
                else if (!Utilities.isDefined(getter) && !Utilities.isDefined(setter))
                    properties.add(new Field(constructorPassword, property, typeOf(instance.constructor), true));
            });

            return properties;
        }

        //#endregion _getStaticProperties

        //#region _getInstanceProperties

        private _getInstanceProperties(): IEnumerable<Property> {
            var properties = new Array<Property>();
            var instance = this._ctor.prototype;

            Object.getOwnPropertyNames(instance).forEach((property) => {
                var propertyDescriptor = Object.getOwnPropertyDescriptor(instance, property);
                var getter = propertyDescriptor.get;
                var setter = propertyDescriptor.set;

                if (Utilities.isDefined(getter) || Utilities.isDefined(setter))
                    properties.add(new Property(constructorPassword, property, typeOf(instance.constructor), propertyDescriptor, Utilities.isDefined(getter), Utilities.isDefined(setter), false, false, false));
                else if (Utilities.isFunction(propertyDescriptor.value))
                    properties.add(new Method(constructorPassword, property, typeOf(instance.constructor), propertyDescriptor, propertyDescriptor.writable, <IFunction>propertyDescriptor.value, false));
                else if (!Utilities.isDefined(getter) && !Utilities.isDefined(setter))
                    properties.add(new Field(constructorPassword, property, typeOf(instance.constructor), true));
            });

            return properties.query();
        }

        //#endregion _getInstanceProperties

        //#region _getProperOptions

        private _getProperOptions(optionsList: Array<Modifier>): Array<Modifier> {
            if (!optionsList || optionsList.length === 0)
                return defaultModifier;

            var options = optionsList.query().distinct().array().query();
            var result = options.array();

            if (options.hasNone(o => o === Modifier.Public) && options.hasNone(o => o === Modifier.Protected) && options.hasNone(o => o === Modifier.Private))
                result.add(Modifier.Public);
            if (options.hasNone(o => o === Modifier.Static) && options.hasNone(o => o === Modifier.Instance))
                result.add(Modifier.Instance);

            return result;
        }

        //#endregion _getProperOptions

        //#region _isValidProperty

        private _isValidProperty(property: Property, modifiers: IEnumerable<Modifier>): boolean {
            var modifierQuery = modifiers.query();
            var accessModifiers = modifierQuery.where(m => m !== Modifier.Instance && m !== Modifier.Static);
            var isValidAccessor = false;

            accessModifiers.forEach(m => {
                switch (m) {
                    case Modifier.Public: {
                        if (property.isPublic)
                            isValidAccessor = true;

                        break;
                    }
                    case Modifier.Protected: {
                        if (property.isProtected)
                            isValidAccessor = true;

                        break;
                    }
                    case Modifier.Private: {
                        if (property.isPrivate)
                            isValidAccessor = true;

                        break;
                    }
                }
            });

            if (modifierQuery.hasAny(m => m === Modifier.Instance))
                return isValidAccessor && !property.isStatic;
            else if (modifierQuery.hasAny(m => m === Modifier.Static))
                return isValidAccessor && property.isStatic;

            return false;
        }

        //#endregion _isValidProperty

        //#endregion Utilities

        //#region Static Members

        //#region Properties

        //#region null

        /**
         Gets the Type object for null.
         @returns {Classical.Reflection.Type} The Type object for null.
        */
        public static get null(): Type {
            return nullType;
        }

        //#endregion null

        //#region undefined

        /**
         Gets the Type object for undefined.
         @returns {Classical.Reflection.Type} The Type object for undefined.
        */
        public static get undefined(): Type {
            return undefinedType;
        }

        //#endregion undefined

        //#endregion Properties

        //#region Methods
        
        /**
         Looks up or creates a type for the specified constructor.
         @returns {Classical.Reflection.Type} The type for the specified constructor.
        */
        static getType(ctor: IFunction): Type {
            Assert.isDefined(ctor, 'The Type constructor was not specified.');
            Assert.isTrue(u.isFunction(ctor), 'The constructor must be a function.');
            if (ctor != global.Null && ctor != global.Undefined) {
                var type = types.getValue(ctor);
                if (!type) {
                    type = new Type(constructorPassword, ctor);
                    types.add(ctor, type);
                }
                return type;
            } else if (ctor === global.Null) {
                return Type.null;
            } else if (ctor === global.Undefined) {
                return Type.undefined;
            }
        }

        //#endregion Methods

        //#endregion Static Members
    }

    //#endregion Type

    //#region Null

    class Null extends Type {

        get isNull() { return true; }
        get declaringModule() { return Module.global; }

        constructor(password: number, ctor: IFunction) {
            super(password, ctor, null, true);
        }
    }

    //#endregion Null

    //#region Undefined

    class Undefined extends Type {

        get isUndefined() { return true; }
        get declaringModule() { return Module.global; }

        constructor(password: number, ctor: IFunction) {
            super(password, ctor, null, true);
        }
    }

    //#endregion Undefined

    //#region Property

    /**
     A description of the metadata associated within a property of a class.
     @extends Classical.Reflection.LanguageConstruct
    */
    export class Property extends LanguageConstruct implements ITypeMember {

        //#region Fields

        private _name: string;
        private _declaringType: Type;
        private _isStatic: boolean;
        private _canWrite: boolean;
        private _canRead: boolean;
        private _isMethod: boolean;
        private _isField: boolean;
        private _propertyDescriptor: PropertyDescriptor;
        private _initialPropertyDescriptor: PropertyDescriptor;
        private _propertyAspects: Array<a.PropertyAspect>;

        //#endregion Fields

        //#region Properties

        //#region name

        /**
         Gets the name of the current construct
         @returns {string} The name of the current construct.
        */
        get name(): string {
            return this._name;
        }

        //#endregion name

        //#region fullName

        /**
         Gets the fully qualified name of the construct, including its Classical.Reflection.Module.
         @returns {string} The fully qualified name of the construct, including its Classical.Reflection.Module.
        */
        get fullName(): string {
            return Utilities.format('{0}.{1}', this.declaringType.fullName, this.name);
        }

        //#endregion fullName

        //#region declaringType

        /**
         Gets the type that declares the current property.
         @returns {Classical.Reflection.Type} The type that declares the current property.
        */
        get declaringType(): Type {
            return this._declaringType;
        }

        //#endregion declaringType

        //#region isStatic

        /**
         Returns true if the construct is static; False otherwise.
         @returns {boolean} True if the construct is static; False otherwise.
        */
        get isStatic(): boolean {
            return this._isStatic;
        }

        //#endregion isStatic

        //#region isPublic

        /**
         Returns true if the construct is declared public; False otherwise.
         @returns {boolean} True if the construct is construct is declared public; False otherwise.
        */
        get isPublic(): boolean {
            return !this.isPrivate && !this.isProtected;
        }

        //#endregion isPublic

        //#region isProtected

        /**
         Returns true if the construct is declared protected; False otherwise.
         @returns {boolean} True if the construct is construct is declared protected; False otherwise.
         @remarks Since in JavaScript, there is not a notion of protected, we introduced a naming convention to decide if it is protected. If the name of starts with '$' it is deemed protected.
        */
        get isProtected(): boolean {
            return this.name.indexOf('$') === 0;
        }

        //#endregion isProtected

        //#region isPrivate

        /**
         Returns true if the construct is declared private; False otherwise.
         @returns {boolean} True if the construct is construct is declared private; False otherwise.
         @remarks Since in JavaScript, there is not a notion of private, we introduced a naming convention to decide if it is private. If the name of starts with '_' it is deemed private.
        */
        get isPrivate(): boolean {
            return this.name.indexOf('_') === 0;
        }

        //#endregion isPrivate

        //#region canWrite

        /**
         Gets a value indicating whether the property can be written to.
         @returns {boolean} True if the property can be written to; false otherwise. 
        */
        get canWrite(): boolean {
            return this._canWrite;
        }

        //#endregion canWrite

        //#region canRead

        /**
         Gets a value indicating whether the property can be read.
         @returns {boolean} True if the property can be read; false otherwise. 
        */
        get canRead(): boolean {
            return this._canRead;
        }

        //#endregion canRead

        //#region enumerable

        /**
         Gets a value indicating whether the property is enumerable.
         @returns {boolean} True if the property is enumerable; false otherwise.
        */
        get enumerable(): boolean {
            return !!(this._propertyDescriptor && this._propertyDescriptor.enumerable);
        }

        //#endregion enumerable

        //#region configurable

        /**
         Gets a value indicating whether the property is configurable.
         @returns {boolean} True if the property is configurable; false otherwise.
        */
        get configurable(): boolean {
            return !!(this._propertyDescriptor && this._propertyDescriptor.configurable);
        }

        //#endregion configurable

        //#region isMethod

        /**
         Gets a value indicating whether the property is a method.
         @returns {boolean} True if the property is a method, false otherwise.
         @remarks Since functions in JavaScript are first class objects, they can be treated like properties.
         @seealso Classical.Reflection.Method
        */
        public get isMethod(): boolean {
            return this._isMethod;
        }

        //#endregion isMethod

        //#region isField

        /**
         Gets a value indicating whether the property is a field.
         @returns {boolean} True if the property is a field, false otherwise.
         @seealso Classical.Reflection.Field
        */
        get isField(): boolean {
            return this._isField;
        }

        //#endregion isField

        //#endregion Properties

        //#region Constructors

        /**
         Initializes a new instance of the Property class.
         @param password {number} The password required to instantiate a LanguageConstruct class.
         @param name {string} The name of the property.
         @param declaringType {Classical.Reflection.Type} The declaring Type of the property.
         @param propertyDescriptor {PropertyDescriptor} The underlying JavaScript PropertyDescriptor of the property.
         @param canRead {boolean} Value indicating if the property can be read.
         @param canWrite {boolean} Value indicating if the property can be written to.
         @param isMethod {boolean} Value indicating if the property is a method.
         @param isField {boolean} Value indicating if the property is a field.
         @param isStatic {boolean} Value indicating if the property is static.
         @remarks We include a password as a parameter so that the construct cannot be instantiated freely. This should be done by the system.
        */
        constructor(password: number, name: string, declaringType: Type, propertyDescriptor: PropertyDescriptor, canRead: boolean, canWrite: boolean, isMethod: boolean, isField: boolean, isStatic: boolean) {
            super(password);
            
            this._name = name;
            this._declaringType = declaringType;
            this._isStatic = isStatic;
            this._canWrite = canWrite;
            this._canRead = canRead;
            this._isMethod = isMethod;
            this._isField = isField;
            this._propertyDescriptor = propertyDescriptor;
            this._initialPropertyDescriptor = this.getNewDescriptor(propertyDescriptor);
            this._propertyAspects = new Array<a.PropertyAspect>();
        }

        //#endregion Constructors

        //#region Methods

        //#region getValue

        /**
         Returns the property value of a specified object.
         @param instance {any} The instance whose property value will be returned.
         @returns The property value of a specified object.
        */
        getValue(instance: any): any {
            Assert.isDefined(instance);

            if (!this.canRead)
                throw new Error('The property cannot be read.');
            if (this.isStatic)
                return this.declaringType.constructorFunction[this.name];

            var type = typeOf(instance.constructor);
            var property = type.getProperty(this.name);

            if (Utilities.isNullOrUndefined(property))
                throw Utilities.format('The property does not exist on type {0}.', type.name);

            var instanceType = <Type>instance.getType();

            if (instanceType && instanceType.constructorFunction !== instance.constructor) {
                var prototype = instanceType.prototype;
                while (prototype) {
                    if (instanceType.constructorFunction === prototype.constructor) {
                        return prototype[this.name];
                    }

                    var prototypeType = <Type>prototype.getType();
                    if (prototypeType)
                        prototype = prototypeType.prototype;
                    else
                        prototype = undefined;
                }
            }

            return instance[this.name];
        }

        //#endregion getValue

        //#region setValue

        /**
         Sets the property value of a specified object.
         @param instance {any} The instance whose property will be set.
         @param value {any} The value that the property will be set to.
        */
        setValue(instance: any, value: any): void {
            Assert.isDefined(instance);

            if (this.isStatic) {
                this.declaringType.constructorFunction[this.name] = value;
                return;
            }

            var type = typeOf(instance.constructor);
            var property = type.getProperty(this.name);

            if (Utilities.isNullOrUndefined(property))
                throw Utilities.format('The property does not exist on type {0}.', type.name);
            else if (!this.canWrite)
                throw 'The property cannot be written to.';

            instance[this.name] = value;
        }

        //#endregion setValue

        //#endregion Methods

        //#region Utilities

        //#region getNewDescriptor

        private getNewDescriptor(descriptor: PropertyDescriptor): PropertyDescriptor {
            if (!descriptor)
                return descriptor;

            // Need this method because we can't keep a reference to the actual PropertyDescriptor if we want to update it with Aspects.
            if (descriptor.get || descriptor.set)
                return { configurable: descriptor.configurable, enumerable: descriptor.enumerable, get: descriptor.get, set: descriptor.set };
            else
                return { configurable: descriptor.configurable, enumerable: descriptor.enumerable, writable: descriptor.writable, value: descriptor.value };
        }

        //#endregion getNewDescriptor

        //#endregion Utilities

        //#region Base Class Overrides

        toString(): string {
            return this.name;
        }

        //#endregion Base Class Overrides

        //#region Static Members

        /**
         Returns true if the property determined by the selector exists on the instance; false otherwise.
         @typeparam TInstance {any} The type of the instance to check the existence of the property for.
         @typeparam Tproperty {any} The type of the property to check the existence of.
         @param instance {TInstance} The instance to check the existence of the property for.
         @param selector {(instance: TInstance) => TProperty} The property to check the existence of.
         @returns {boolean} True if the property determined by the selector exists on the instance; false otherwise.
        */
        static exists<TInstance, TProperty>(instance: TInstance, selector: (instance: TInstance) => TProperty): boolean {
            Assert.isDefined(instance);
            Assert.isDefined(selector);

            var propertyName = Classical.Expression.getProperty(selector);
            if (instance.getType) {
                var instanceType = <Type>instance.getType();
                var property = instanceType.getProperty(propertyName);
                if (property)
                    return true;
            }

            return false;
        }

        //#endregion Static Members
    }

    //#endregion Property

    //#region Field

    /**
     A description of the metadata associated within a field of a class.
     @extends Classical.Reflection.Property
    */
    export class Field extends Property {

        //#region Properties

        //#region isPublic

        /**
         Returns true if the construct is declared public; False otherwise.
         @returns {boolean} True if the construct is construct is declared public; False otherwise.
        */
        get isPublic(): boolean {
            return !this.isPrivate && !this.isProtected;
        }

        //#endregion isPublic

        //#region isProtected

        /**
         Returns true if the construct is declared protected; False otherwise.
         @returns {boolean} True if the construct is construct is declared protected; False otherwise.
         @remarks Since in JavaScript, there is not a notion of protected, we introduced a naming convention to decide if it is protected. If the name of starts with '$' it is deemed protected.
        */
        get isProtected(): boolean {
            return this.name.indexOf('$') === 0;
        }

        //#endregion isProtected

        //#region isPrivate

        /**
         Returns true if the construct is declared private; False otherwise.
         @returns {boolean} True if the construct is construct is declared private; False otherwise.
         @remarks Since in JavaScript, there is not a notion of private, we introduced a naming convention to decide if it is private. If the name of starts with '_' it is deemed private.
        */
        get isPrivate(): boolean {
            return this.name.indexOf('_') === 0;
        }

        //#endregion isPrivate

        //#endregion Properties

        //#region Constructors

        /**
         Initializes a new instance of the Field class.
         @param password {number} The password required to instantiate a LanguageConstruct class.
         @param name {string} The name of the field.
         @param declaringType {Classical.Reflection.Type} The declaring Type of the field.
         @param isStatic {boolean} Value indicating if the field is static.
         @remarks We include a password as a parameter so that the construct cannot be instantiated freely. This should be done by the system.
        */
        constructor(password: number, name: string, declaringType: Type, isStatic: boolean) {
            super(password, name, declaringType, null, true, true, false, true, isStatic);
        }

        //#endregion Constructors

        //#region Methods

        //#region getValue

        /**
         Returns the field value of a specified object.
         @param instance {any} The instance whose field value will be returned.
         @returns The field value of a specified object.
        */
        getValue(instance: any): any {
            Assert.isDefined(instance);

            if (this.isStatic)
                return this.declaringType.constructorFunction[this.name];

            var type = typeOf(instance.constructor);
            var property = type.getProperty(this.name);

            if (Utilities.isNullOrUndefined(property))
                throw Utilities.format('The property does not exist on type {0}.', type.name);
            else if (!property.canRead)
                throw 'The property cannot be read.';

            var instanceType = <Type>instance.getType();

            if (instanceType && instanceType.constructorFunction !== instance.constructor) {
                var prototype = instanceType.prototype;
                while (prototype) {
                    if (instanceType.constructorFunction === prototype.constructor) {
                        return prototype[this.name];
                    }

                    var prototypeType = <Type>prototype.getType();
                    if (prototypeType)
                        prototype = prototypeType.prototype;
                    else
                        prototype = undefined;
                }
            }

            return instance[this.name];
        }

        //#endregion getValue

        //#region setValue

        /**
         Sets the field value of a specified object.
         @param instance {any} The instance whose field will be set.
         @param value {any} The value that the field will be set to.
        */
        setValue(instance: any, value: any): void {
            Assert.isDefined(instance);

            if (this.isStatic) {
                this.declaringType.constructorFunction[this.name] = value;
                return;
            }

            var type = typeOf(instance.constructor);
            var property = type.getProperty(this.name);

            if (Utilities.isNullOrUndefined(property))
                throw Utilities.format('The property does not exist on type {0}.', type.name);
            else if (!property.canWrite)
                throw 'The property cannot be written to.';

            instance[this.name] = value;
        }

        //#endregion setValue

        //#endregion Methods
    }

    //#endregion Field

    //#region Variable

    /**
     A description of the metadata associated within a variable of a module.
     @extends Classical.Reflection.Property
    */
    export class Variable extends Property implements IModuleMember {

        //#region Fields

        private _module: Module;
        private _value: any;

        //#endregion Fields

        //#region Properties

        //#region declaringModule

        /**
         Gets the module that declares the current variable.
         @returns {Classical.Reflection.Module} The module that declares the current variable.
         @seealso Classical.Reflection.Module
        */
        get declaringModule(): Module {
            return this._module;
        }

        //#endregion declaringModule

        //#region variableValue

        /**
         Gets the underlying value of the current variable.
         @returns {any} The underlying value of the current variable.
        */
        get variableValue(): any {
            return this._value;
        }

        //#endregion variableValue

        //#endregion Properties

        //#region Constructors

        /**
         Initializes a new instance of the Variable class.
         @param password {number} The password required to instantiate a Variable class.
         @param name {string} The name of the variable.
         @param mod {Classical.Reflection.Module} The declaring module of the variable.
         @param value {any} The underlying value of the variable.
         @remarks We include a password as a parameter so that the construct cannot be instantiated freely. This should be done by the system.
        */
        constructor(password: number, name: string, mod: Module, value: any) {
            Assert.isDefined(mod);
            super(password, name, null, null, true, true, false, false, true);

            this._module = mod;
            this._value = value;
        }

        //#endregion Constructors
    }

    //#endregion Variable

    //#region Method

    /**
     A description of the metadata associated within a method of a class.
     @extends Classical.Reflection.Property
     @remarks 
        In JavaScript methods are properties of type function. 
        Therefore a Method is a Property.
    */
    export class Method extends Property {

        //#region Fields

        private _initialFunction: IFunction;
        private _underlyingFunction: IFunction;
        private _parameters: IEnumerable<Parameter>;
        private _methodAspects: Array<a.MethodAspect>;

        //#endregion Fields

        //#region Properties

        //#region functionValue

        /**
         Gets the underlying function value of the method.
         @returns {IFunction} The underlying function value of the method.
        */
        get functionValue(): IFunction {
            return this._underlyingFunction;
        }

        //#endregion functionValue

        //#endregion Properties

        //#region Constructors

        /**
         Initializes a new instance of the Method class.
         @param password {number} The password required to instantiate a Method class.
         @param name {string} The name of the method.
         @param declaringType {Classical.Reflection.Type} The declaring type of the method.
         @param propertyDescriptor {PropertyDescriptor} The underlying JavaScript PropertyDescriptor of the method.
         @param canWrite {boolean} Value indicating if the property can be written to.
         @param underlyingFunction {IFunction} The underlying function of the method.
         @param isStatic {boolean} Value indicating if the method is static.
         @remarks We include a password as a parameter so that the construct cannot be instantiated freely. This should be done by the system.
        */
        constructor(password: number, name: string, declaringType: Type, propertyDescriptor: PropertyDescriptor, canWrite: boolean, underlyingFunction: IFunction, isStatic: boolean) {
            super(password, name, declaringType, propertyDescriptor, true, canWrite, true, false, isStatic);

            this._underlyingFunction = underlyingFunction;
            this._initialFunction = underlyingFunction;
            this._methodAspects = new Array<a.MethodAspect>();
        }

        //#endregion Constructors

        //#region Methods

        //#region invoke

        /**
         Invokes the method represented by the current instance, using the specified arguments.
         @param instance {any} The instance on which to invoke the method. If the method is static, the instance will be ignored.
         @param ...args {any[]} The argument list for the invoked method.
         @returns {any} The result of the invoked method.
         @remarks If this method is not static, an instance is required.
        */
        invoke(instance: any, ...args: any[]): any {
            if (this.isStatic)
                return this.declaringType.constructorFunction[this.name].apply(null, args);

            Assert.isDefined(instance);
            
            var type = typeOf(instance.constructor);
            var method = type.getMethod(this.name);

            if (Utilities.isNullOrUndefined(method))
                throw Utilities.format('The method does not exist on type {0}.', type.name);

            return instance[this.name].apply(instance, args);
        }

        //#endregion invoke

        //#region getParameters

        /**
         Gets the parameters of the current method.
         @returns {IQueryable<Classical.Reflection.Parameter>} The parameters of the current method.
        */
        getParameters(): IQueryable<Parameter> {
            if (!this._parameters)
                this._parameters = this._initializeParameters();

            return this._parameters.array().query();
        }

        //#endregion getParameters

        //#endregion Methods

        //#region Utilities

        //#region _initializeParameters

        private _initializeParameters(): IEnumerable<Parameter> {
            var initializedParameters = new Array<Parameter>();
            var parameterNames = Classical.Expression.getArguments(this._underlyingFunction);

            for (var i = 0; i < parameterNames.length; i++) {
                var parameterName = parameterNames[i];
                var parameter = new Parameter(constructorPassword, parameterName, i, this);
                initializedParameters.add(parameter);
            }

            return initializedParameters;
        }

        //#endregion _initializeParameters

        //#endregion Utilities
    }

    //#endregion Method

    //#region Constructor

    /**
     A description of the metadata associated within a constructor of a class.
     @extends Classical.Reflection.Method
    */
    export class Constructor extends Method implements IModuleMember {

        //#region Properties

        //#region declaringModule

        /**
         Gets the declaring module of the constructor function.
         @returns {Classical.Reflection.Module} The declaring module of the constructor function.
        */
        get declaringModule(): Module {
            return this.declaringType.declaringModule;
        }

        //#endregion declaringModule

        //#endregion Properties
        
        //#region Constructor

        /**
         Initializes a new instance of the Constructor class.
         @param password {number} The password required to instantiate a Constructor class.
         @param name {string} The name of the constructor.
         @param declaringType {Classical.Reflection.Type} The declaring type of the constructor.
         @param propertyDescriptor {PropertyDescriptor} The underlying JavaScript PropertyDescriptor of the constructor.
         @param underlyingFunction {IFunction} The underlying function of the constructor.
         @remarks We include a password as a parameter so that the construct cannot be instantiated freely. This should be done by the system.
        */
        constructor(password: number, declaringType: Type, propertyDescriptor: PropertyDescriptor, underlyingFunction: IFunction) {
            super(constructorPassword, 'constructor', declaringType, propertyDescriptor, false, underlyingFunction, false);
        }

        //#endregion Constructor

    }

    //#endregion Constructor

    //#region Function

    /**
     A description of the metadata associated within a function of a module.
     @extends Classical.Reflection.Method
    */
    export class Function extends Method implements IModuleMember {

        //#region Fields

        private _module: Module;

        //#endregion Fields

        //#region Properties

        //#region declaringModule

        /**
         Gets the declaring module of the constructor function.
         @returns {Classical.Reflection.Module} The declaring module of the constructor function.
        */
        get declaringModule(): Module {
            return this._module;
        }

        //#endregion declaringModule

        //#endregion Properties

        //#region Constructors

        /**
         Initializes a new instance of the Function class.
         @param password {number} The password required to instantiate a Function class.
         @param name {string} The name of the method.
         @param declaringType {Classical.Reflection.Type} The declaring type of the function.
         @param propertyDescriptor {PropertyDescriptor} The underlying JavaScript PropertyDescriptor of the function.
         @param canWrite {boolean} Value indicating if the property can be written to.
         @param mod {Classical.Reflection.Module} The module that the function belongs to.
         @param underlyingFunction {IFunction} The underlying JavaScript function of the function.
         @remarks We include a password as a parameter so that the construct cannot be instantiated freely. This should be done by the system.
        */
        constructor(password: number, name: string, canWrite: boolean, mod: Module, underlyingFunction: IFunction) {
            super(password, name, null, null, canWrite, underlyingFunction, true);
            Assert.isDefined(mod);

            this._module = mod;
        }

        //#endregion Constructors
    }

    //#endregion Function

    //#region Parameter

    /**
     A description of the metadata associated within a parameter of a function.
    */
    export class Parameter implements IMethodMember {

        //#region Fields

        private _name: string;
        private _position: number;
        private _declaringMethod: Method;

        //#endregion Fields

        //#region Properties

        //#region name

        /**
         Gets the name of the parameter.
         @returns {string} The name of the parameter.
        */
        get name(): string {
            return this._name;
        }

        //#endregion name

        //#region position

        /**
         Gets the zero-based position of the parameter in the true parameter list.
         @return {number} The zero-based position of the parameter in the true parameter list.
        */
        get position(): number {
            return this._position;
        }

        //#endregion position

        //#region declaringMethod

        /**
         Gets the declaring method of the parameter.
         @returns {number} The declaring method of the parameter.
        */
        get declaringMethod(): Method {
            return this._declaringMethod;
        }

        //#endregion declaringMethod

        //#endregion Properties

        //#region Constructors

        /**
         Instantiates a new instance of the Parameter class.
         @param password {number} The password required to instantiate a Parameter class.
         @param name {string} The name of the parameter.
         @param position {number} The zero-based position of the parameter in the true parameter list.
         @param declaringMethod {Classical.Reflection.Method} The declaring method of the parameter.
         @remarks We include a password as a parameter so that the construct cannot be instantiated freely. This should be done by the system.
        */
        constructor(password: number, name: string, position: number, declaringMethod: Method) {
            Assert.isTrue(password === constructorPassword,
                'You do not have permission to create instances of this type.');
            Assert.isDefined(declaringMethod);

            this._name = name;
            this._position = position;
            this._declaringMethod = declaringMethod;
        }

        //#endregion Constructors

        //#region Base Class Overrides

        /**
         Gets the string representation of the parameter.
         @returns {string} The string representation of the parameter.
        */
        toString(): string {
            return this.name;
        }

        //#endregion Base Class Overrides
    }

    //#endregion Parameter

    //#region Initialization

    //The global dictionaries of modules and types for runtime caching.
    var modules = new c.Dictionary<Object, Module>(5000);
    var types = new c.Dictionary<IFunction, Type>(5000);

    //A password used to manage private constructors
    var constructorPassword = Math.random();

    var nullType = new Null(constructorPassword, global.Null);
    var undefinedType = new Undefined(constructorPassword, global.Undefined); 
    var allModules: IQueryable<Module>;
    var allTypes: IQueryable<Type>;

    //#endregion Initialization

    //#region getModules

    /**
    * Gets all Modules currently loaded.
    * @returns {IQueryable<Classical.Reflection.Module>} All Modules currently loaded.
    */
    export function getModules(): IQueryable<Module> {
        if (allModules)
            return allModules;

        var globalModule = Module.global;
        var loadedModules = getModulesFromModule(globalModule);
        allModules = loadedModules.query();

        return allModules;
    }

    //#endregion getModules

    //#region getModulesFromModule

    /**
     Gets the modules belonging to the specified Module.
     @param mod {Classical.Reflection.Module} The module to get the modules from.
     @returns {IEnumerable<Classical.Reflection.Module>} The modules belonging to the specified Module.
    */
    function getModulesFromModule(mod: Module): IEnumerable<Module> {
        var modules = new Array<Module>();
        modules.add(mod);
        mod.getModules().forEach(m => {
            modules.addRange(getModulesFromModule(m));
        });

        return modules;
    }

    //#endregion getModulesFromModule

    //#region getTypes

    /**
    * Gets all Types in all Modules currently loaded.
    * @returns {IQueryable<Classical.Reflection.Type>} All Types in all Modules currently loaded.    
    */
    export function getTypes(): IQueryable<Type> {
        if (allTypes)
            return allTypes;

        var globalModule = Module.global;
        var loadedTypes = getTypesFromModule(globalModule);
        allTypes = loadedTypes.query();

        return allTypes;
    }

    /**
     Gets all types from the specified Module.
     @param mod {Classical.Reflection.Module} The module to get all types from.
     @returns {IEnumerable<Classical.Reflection.Type>} All types from the specified Module.
    */
    function getTypesFromModule(mod: Module): IEnumerable<Type> {
        var types = new Array<Type>();
        types.addRange(mod.getTypes());
        mod.getModules().forEach(m => {
            types.addRange(getTypesFromModule(m));
        });

        return types;
    }

    //#endregion //getTypes

    //#region findField
    
    /**
     Attempts to find the field using the given selector.
     @typeparam TInstance {any} The type of the instance to find the field of.
     @typeparam TField {any} The type of the field to find.
     @param instance {TInstance} The instance to find the field of.
     @param selector {(instance: TInstance) => TField} The selector of the field to find.
     @returns {Classical.Reflection.Field} The Field using the given selector; Null otherwise.
     @remarks This function will always traverse the Type hierarchy to find the field. It take no advantage of the cache.
    */
    export function findField<TInstance, TField>(instance: TInstance, selector: (instance: TInstance) => TField): Field {
        Assert.isDefined(instance);
        Assert.isDefined(selector);

        var fieldName = Classical.Expression.getProperty(selector);
        if (instance.getType) {
            var instanceType = <Type>instance.getType(); 
            var field = instanceType.getFieldOf(instance, fieldName, Modifier.Instance, Modifier.Public, Modifier.Private, Modifier.Protected);
            if (field)
                return field;
        }

        var t = typeOf(instance.constructor);
        var field = t.getFieldOf(instance, fieldName, Modifier.Instance, Modifier.Public, Modifier.Private, Modifier.Protected);
        return field;
    }

    //#endregion findField

    //#region findProperty

    /**
     Attempts to find the property using the given selector.
     @typeparam TInstance {any} The type of the instance to find the property of.
     @typeparam TProperty {any} The type of the property to find.
     @param instance {TInstance} The instance to find the property of.
     @param selector {(instance: TInstance) => TProperty} The selector of the property to find.
     @returns {Classical.Reflection.Property} The Property using the given selector; Null otherwise.
     @remarks This function will always traverse the Type hierarchy to find the property. It take no advantage of the cache.
    */
    export function findProperty<TInstance, TProperty>(instance: TInstance, selector: (instance: TInstance) => TProperty): Property {
        Assert.isDefined(instance);
        Assert.isDefined(selector);

        var propertyName = Classical.Expression.getProperty(selector);
        if (instance.getType) {
            var instanceType = <Type>instance.getType(); 
            var property = instanceType.getProperty(propertyName, Modifier.Instance, Modifier.Public, Modifier.Private, Modifier.Protected);
            if (property)
                return property;
        }

        var t = typeOf(instance.constructor);
        var properties = <IQueryable<Property>>(<any>t)._getInstanceProperties();
        var property = properties.singleOrDefault(p => p.name === propertyName);
        if (property)
            return property;

        var baseType = t.base;
        while (baseType) {
            properties = <IQueryable<Property>>(<any>baseType)._getInstanceProperties();
            property = properties.singleOrDefault(p => p.name === propertyName);
            if (property)
                return property;

            baseType = baseType.base;
        }

        if (!property) {
            var objectInstance: any = instance;

            while (objectInstance) {
                var propertyDescriptor = Object.getOwnPropertyDescriptor(instance, propertyName);
                var foundProperty: Property;

                if (propertyDescriptor) {
                    var getter = propertyDescriptor.get;
                    var setter = propertyDescriptor.set;

                    if (Utilities.isDefined(getter) || Utilities.isDefined(setter))
                        foundProperty = new Property(constructorPassword, propertyName, typeOf(instance.constructor), propertyDescriptor, Utilities.isDefined(getter), Utilities.isDefined(setter), false, false, false);
                    else if (Utilities.isFunction(propertyDescriptor.value))
                        foundProperty = new Method(constructorPassword, propertyName, typeOf(instance.constructor), propertyDescriptor, propertyDescriptor.writable, <IFunction>propertyDescriptor.value, false);
                    else if (!Utilities.isDefined(getter) && !Utilities.isDefined(setter))
                        foundProperty = new Field(constructorPassword, propertyName, typeOf(instance.constructor), true);
                }

                if (foundProperty)
                    return foundProperty;

                objectInstance = Object.getPrototypeOf(objectInstance);
            }
        }

        return null;
    }

    //#endregion findProperty

    //#region findMethod

    /**
     Attempts to find the method using the given selector.
     @typeparam TInstance {any} The type of the instance to find the method of.
     @typeparam TProperty {any} The type of the method to find.
     @param instance {TInstance} The instance to find the method of.
     @param selector {(instance: TInstance) => TProperty} The selector of the method to find.
     @returns {Classical.Reflection.Method} The Method using the given selector; Null otherwise.
     @remarks This function will always traverse the Type hierarchy to find the method. It take no advantage of the cache.
    */
    export function findMethod<TInstance, TProperty>(instance: TInstance, selector: (instance: TInstance) => TProperty): Method {
        var property = findProperty(instance, selector);

        if (property && property.isMethod)
            return <Method>property;

        return null;
    }

    //#endregion findMethod

    //#region findVariable

    /**
     Attempts to find the variable using the given selector.
     @typeparam TInstance {any} The type of the instance to find the variable of.
     @typeparam TProperty {any} The type of the variable to find.
     @param instance {TInstance} The instance to find the variable of.
     @param selector {(instance: TInstance) => TProperty} The selector of the variable to find.
     @returns {Classical.Reflection.Variable} The Variable using the given selector; Null otherwise.
     @remarks This function will always traverse the Type hierarchy to find the variable. It take no advantage of the cache.
    */
    export function findVariable<TInstance, TProperty>(instance: TInstance, selector: (instance: TInstance) => TProperty): Variable {
        Assert.isDefined(instance);
        Assert.isDefined(selector);

        var variableName = Classical.Expression.getProperty(selector);
        var foundModule = getModules().firstOrDefault(m => m.scope === instance);
        if (foundModule) {
            var foundVariable = foundModule.getVariable(variableName)
            if (foundVariable)
                return foundVariable;

            var moduleScope = foundModule.scope;
            var initializedVariables = new Array<Variable>();
            var scopeProperties = Object.getOwnPropertyNames(moduleScope).query().where(p => p !== '_hashCode').array();

            for (var i = 0; i < scopeProperties.length; i++) {
                var propertyName = scopeProperties[i];
                if (propertyName !== variableName)
                    continue;

                var property = moduleScope[propertyName];
                if (!u.isFunction(property) && !(<any>Classical.Reflection.Module)._isModule(property)) {
                    var variable = new Variable(constructorPassword, propertyName, this, property);
                    initializedVariables.add(variable);
                }
            }

            return initializedVariables.query().singleOrDefault(v => v.name === variableName);
        }

        return null;
    }

    //#endregion findVariable

    //#region findFunction

    /**
     Attempts to find the function using the given selector.
     @typeparam TInstance {any} The type of the instance to find the function of.
     @typeparam TProperty {any} The type of the function to find.
     @param instance {TInstance} The instance to find the function of.
     @param selector {(instance: TInstance) => TProperty} The selector of the variable to find.
     @returns {Classical.Reflection.Function} The Function using the given selector; Null otherwise.
     @remarks This function will always traverse the Type hierarchy to find the function. It take no advantage of the cache.
    */
    export function findFunction<TInstance, TProperty>(instance: TInstance, selector: (instance: TInstance) => TProperty): Function {
        Assert.isDefined(instance);
        Assert.isDefined(selector);

        var functionName = Classical.Expression.getProperty(selector);
        var foundModule = getModules().firstOrDefault(m => m.scope === instance);
        if (foundModule) {
            var foundFunction = foundModule.getFunction(functionName)
            if (foundFunction)
                return foundFunction;

            var moduleScope = foundModule.scope;
            var initializedFunctions = new Array<Function>();
            var scopeProperties = Object.getOwnPropertyNames(moduleScope).query().where(p => p !== '_hashCode').array();

            for (var i = 0; i < scopeProperties.length; i++) {
                var propertyName = scopeProperties[i];
                if (propertyName !== functionName)
                    continue;

                var property = moduleScope[propertyName];
                if(!(<any>Classical.Reflection.Module)._isType(property) && u.isFunction(property)) {
                    var func = new Function(constructorPassword, propertyName, true, this, <IFunction>property);
                    initializedFunctions.add(func);
                }
            }

            return initializedFunctions.query().singleOrDefault(v => v.name === functionName);
        }

        return null;
    }

    //#endregion findFunction

    //#region findStaticField

    /**
     Attempts to find the static field using the given selector.
     @typeparam TType {any} The type to find the static field of.
     @param instance {TType} The instance to find the static field of.
     @param selector {(t: any) => any} The selector of the static field to find.
     @returns {Classical.Reflection.Field} The Field using the given selector; Null otherwise.
     @remarks This function will always traverse the Type hierarchy to find the static field. It take no advantage of the cache.
    */
    export function findStaticField<TType extends IFunction>(t: TType, selector: (t: any) => any): Field {
        Assert.isDefined(t);
        Assert.isDefined(selector);

        var fieldName = Classical.Expression.getProperty(selector);
        var field: Field = null;
        Object.getOwnPropertyNames(t).forEach((property) => {
            if (property === fieldName) {
                var propertyDescriptor = Object.getOwnPropertyDescriptor(t, property);
                var getter = propertyDescriptor.get;
                var setter = propertyDescriptor.set;

                if (!Utilities.isDefined(getter) && !Utilities.isDefined(setter) && !Utilities.isFunction(propertyDescriptor.value))
                    field = new Field(constructorPassword, property, typeOf(t), true);
            }
        });

        return field;
    }

    //#endregion findStaticField

    //#region findStaticProperty
    
    /**
     Attempts to find the static property using the given selector.
     @typeparam TType {any} The type to find the static property of.
     @param instance {TType} The instance to find the static property of.
     @param selector {(t: any) => any} The selector of the static property to find.
     @returns {Classical.Reflection.Property} The Property using the given selector; Null otherwise.
     @remarks This function will always traverse the Type hierarchy to find the static property. It take no advantage of the cache.
    */
    export function findStaticProperty<TType extends IFunction>(t: TType, selector: (t: any) => any): Property {
        Assert.isDefined(t);
        Assert.isDefined(selector);

        var propertyName = Classical.Expression.getProperty(selector);
        var functionType = typeOf(t);
        var property = functionType.getProperty(propertyName, Modifier.Static, Modifier.Public, Modifier.Private, Modifier.Protected);
        if (property)
            return property;

        var staticProperties = <IQueryable<Property>>(<any>functionType)._getStaticProperties().query();
        property = staticProperties.where(p => p.name === propertyName).singleOrDefault();

        return property;
    }

    //#endregion findStaticProperty

    //#region findStaticMethod
    
    /**
     Attempts to find the static method using the given selector.
     @typeparam TType {any} The type to find the static method of.
     @param instance {TType} The instance to find the static method of.
     @param selector {(t: any) => any} The selector of the static method to find.
     @returns {Classical.Reflection.Method} The Method using the given selector; Null otherwise.
     @remarks This function will always traverse the Type hierarchy to find the static method. It take no advantage of the cache.
    */
    export function findStaticMethod<TType extends IFunction>(t: TType, selector: (t: any) => any): Method {
        var property = findStaticProperty(t, selector);
        if (property && property.isMethod)
            return <Method>property;

        return null;
    }

    //#endregion findStaticMethod
}