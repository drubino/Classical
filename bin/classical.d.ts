/**
 Hash constains the functions for generating hash codes for JavaScript primitives.
 @seealso Boolean, Number, String
*/
declare module Classical.Hash {
    function forBoolean(key: boolean): number;
    function forNumber(key: number, seed?: number): number;
    /**
     JavaScript Implementation of MurmurHash3 (r136) (as of May 20, 2011)
     @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
     @see http://github.com/garycourt/murmurhash-js
     @author <a href="mailto:aappleby@gmail.com">Austin Appleby</a>
     @see http://sites.google.com/site/murmurhash/
     @param [key] {string} The string to hash.
     @param [seed?] {number} A positive integer seed to generate the hash.
     @return {number} 32-bit positive integer hash
     @remarks
        Null checking is excluded for performance.
        The string must be ASCII only.
        The default seed is 37.
    */
    function forString(key: string, seed?: number): number;
}
declare var global: any;
/**
 The module that performs manipulation of native JavaScript objects.
 @remarks This is the first module of Classical to be initialized.
 @seealso Object, String, Number, Boolean, Array
 @private
*/
declare module Classical._Native {
}
/** An assortment of useful functions for basic type checking and data manipulation. */
declare module Classical.Utilities {
    function areEqual(first: any, second: any): boolean;
    function argumentsToArray<T>(args: IArguments): Array<T>;
    function coalesce<T>(value: T, alternative: T): T;
    function extend(destination: any, source: any): any;
    function format(template: string, ...inputs: any[]): string;
    function titleCase(title: string, ...exclude: Array<string>): string;
    function sentenceCase(sentence: string, ...ignore: Array<string>): string;
    function getPropertyNames(value: any): Array<string>;
    function isNull(value: any): boolean;
    function isUndefined(value: any): boolean;
    function isNullOrUndefined(value: any): boolean;
    function isDefined(value: any): boolean;
    function isNumber(value: any): boolean;
    function isNaN(value: any): boolean;
    function isInfinity(value: any): boolean;
    function isInteger(value: any): boolean;
    function isString(value: any): boolean;
    function isBoolean(value: any): boolean;
    function isTrue(value: any): boolean;
    function isTruthy(value: any): boolean;
    function isFalse(value: any): boolean;
    function isFalsy(value: any): boolean;
    function isObject(value: any): boolean;
    function isEmptyObject(value: any): boolean;
    function isArray(value: any): boolean;
    function isFunction(value: any): boolean;
}
/**
 Assert contains a collection of functions which can each be used to construct a proposition about that application.
 If that proposition is false, an exception is thrown containing a message and a stack trace.
 @seealso Classical.Assert.Exception
*/
declare module Classical.Assert {
    function staticClass(): void;
    function isDefined(value: any, message?: string): void;
    function nullOrUndefined(value: any, message?: string): void;
    function isTrue(expression: boolean, message?: string): void;
    function isFalse(expression: boolean, message?: string): void;
    function isInvalid(message?: string): void;
    function notImplemented(message?: string): Exception;
    /**
     A message along with a stack trace that is intended to be thrown to indicate an error.
    */
    class Exception {
        message: string;
        stackTrace: string;
        constructor(message?: string);
        toString(): string;
        setStackTrace(): void;
    }
}
/**
 Declares that a hash code can be created for the object.
 A hash code is a permenanet, non-unqiue but well-distributed
 integer that is associated with the object.=
 @remarks
     An object implementing IHashable can be used as a key in a dictionary.
     IObject implements IHashable so all objects can be used as keys in dictionaries.
     This is also true for booleans, numbers and strings.
 @seealso Classical.Collections.Dictionary
*/
interface IHashable {
    equals(other: any): boolean;
    getHashCode(): number;
}
/**
 IObject defines what it means to be a classical object.
 @remarks
    The core JavaScript Object implements IObject.
    All Objects implement IHashable so they can be used as keys in Dictionaries.
 @seealso IHashable, Classical.Collections.Dictionary
*/
interface IObject extends IHashable {
    is(type: Function): boolean;
    as<TObject>(): TObject;
    getType(): Classical.Reflection.Type;
    watch(property: string, handler: (property: string, oldValue: any, newValue: any) => void): void;
}
/**
 The core JavaScript object.
 @remarks
    Object implements IObject.
    All Objects implement IHashable so they can be used as keys in Dictionaries.
 @seealso IObject, IHashable, Classical.Collections.Dictionary
*/
interface Object extends IObject {
}
/**
 The core JavaScript string.
 @remarks
    String implements IObject.
    All Objects implement IHashable so strings can be used as keys in Dictionaries.
 @seealso IObject, IHashable, Classical.Collections.Dictionary
*/
interface String extends IObject {
}
/**
 The core JavaScript number.
 @remarks
    Number implements IObject.
    All Objects implement IHashable so numbers can be used as keys in Dictionaries.
 @seealso IObject, IHashable, Classical.Collections.Dictionary
*/
interface Number extends IObject {
}
/**
 The core JavaScript boolean.
 @remarks
    Boolean implements IObject.
    All Objects implement IHashable so booleans can be used as keys in Dictionaries.
 @seealso IObject, IHashable, Classical.Collections.Dictionary
*/
interface Boolean extends IObject {
}
/** The core module of Classical.js */
declare module Classical {
}
/**
 Defines the core JavaScript function. IFunction and Function are equivalent.
 @remarks
    This interface was created as an alias so that Function can refer to
    the notion of a function in the reflection library.
*/
interface IFunction extends Function {
}
/**
 The core set of collections defined in Classical.
*/
declare module Classical.Collections {
    class Dictionary<TKey, TValue> implements IEnumerable<KeyValuePair<TKey, TValue>> {
        private _hashTable;
        private _bucketIndex;
        private _numberOfBuckets;
        private _numberOfElements;
        private _initialCapacity;
        keys: IEnumerable<TKey>;
        values: IEnumerable<TValue>;
        constructor(capacity?: number);
        getEnumerator(): IEnumerator<KeyValuePair<TKey, TValue>>;
        query(): IQueryable<KeyValuePair<TKey, TValue>>;
        forEach(operation: (item: KeyValuePair<TKey, TValue>) => void): void;
        array(): KeyValuePair<TKey, TValue>[];
        add(key: TKey, value: TValue): Dictionary<TKey, TValue>;
        remove(key: TKey): Dictionary<TKey, TValue>;
        getValue(key: TKey): TValue;
        containsKey(key: TKey): boolean;
        clear(): void;
        count(): number;
        private getIndex(key);
        private getElements(key);
        private getPair(elements, hashTable, numberOfBuckets, key);
        private addWithoutRebalancing(hashTable, numberOfBuckets, pair, checkForExistance?);
        private rebalanceIfNecessary();
        private rebalance();
    }
    class KeyValuePair<TKey, TValue> {
        key: TKey;
        value: TValue;
        constructor(key: TKey, value: TValue);
    }
}
/**
 Used to obtain the Classical.Reflection.Type object for a function.
 @param ctor {IFunction} The constructor function of the Type.
 @returns {Classical.Reflection.Type} Returns the Classical.Reflection.Type object for the representing function.
*/
declare function typeOf(ctor: IFunction): Classical.Reflection.Type;
/**
 Used to obtain the Classical.Reflection.Module object for a function.
 @param ctor {IFunction} The constructor function of the Type.
 @return {Classical.Reflection.Module} Returns the Classical.Reflection.Module object for the representing function.
*/
declare function moduleOf(ctor: IFunction): Classical.Reflection.Module;
declare function Null(): any;
declare function Undefined(): any;
/**
 You can use reflection to get the type from an existing object and invoke its methods or access its fields and properties.
*/
declare module Classical.Reflection {
    /**
     Returns true if the object is an enumeration type; False otherwise.
     @param enumCandidate {any} THe object to check if it's an enumeration.
     @returns {boolean} True if the object is an enumeration type; False otherwise.
     @remarks An Enum(short for ENumeration) is a special {Classical.Reflection.Type} that consists only of a set of named constants.
    */
    function isEnum(enumCandidate: any): boolean;
    /**
     Defines an object that is a member of a Module.
    */
    interface IModuleMember {
        declaringModule: Module;
    }
    /**
     Defines an object that is a member of a Type.
    */
    interface ITypeMember {
        declaringType: Type;
    }
    /**
     Defines an object that is a member of a Method.
    */
    interface IMethodMember {
        declaringMethod: Method;
    }
    /**
     An enumeration of the various properties that apply to the
     language construct metadata described by the reflection api.
     @seealso
        Classical.Reflection.Type.getProperties,
        Classical.Reflection.Type.getMethods
    */
    enum Modifier {
        Public = 0,
        Protected = 1,
        Private = 2,
        Instance = 3,
        Static = 4,
    }
    /**
     The public modifier
     @seealso Classical.Reflection.Modifier
    */
    var Public: Modifier;
    /**
     The protected modifier
     @seealso Classical.Reflection.Modifier
    */
    var Protected: Modifier;
    /**
     The private modifier
     @seealso Classical.Reflection.Modifier
    */
    var Private: Modifier;
    /**
     The instance modifier
     @seealso Classical.Reflection.Modifier
    */
    var Instance: Modifier;
    /**
     The static modifier
     @seealso Classical.Reflection.Modifier
    */
    var Static: Modifier;
    /**
     LanguageConstruct is the base class of all Classical.Reflection classes.
     It provides the base methods and properties that all other Classical.Reflections classes share.
    */
    class LanguageConstruct {
        /**
         Gets the name of the current construct
         @returns {string} The name of the current construct
        */
        name: string;
        /**
         Gets the fully qualified name of the construct, including its Classical.Reflection.Module.
         @returns {string} The fully qualified name of the construct, including its Classical.Reflection.Module.
         @seealso Module
        */
        fullName: string;
        /**
         Returns true if the construct is declared public; False otherwise.
         @returns {boolean} True if the construct is construct is declared public; False otherwise.
        */
        isPublic: boolean;
        /**
         Returns true if the construct is declared protected; False otherwise.
         @returns {boolean} True if the construct is construct is declared protected; False otherwise.
         @remarks Since in JavaScript, there is not a notion of protected, we introduced a naming convention to decide if it is protected. If the name of starts with '$' it is deemed protected.
        */
        isProtected: boolean;
        /**
         Returns true if the construct is declared private; False otherwise.
         @returns {boolean} True if the construct is construct is declared private; False otherwise.
         @remarks Since in JavaScript, there is not a notion of private, we introduced a naming convention to decide if it is private. If the name of starts with '_' it is deemed private.
        */
        isPrivate: boolean;
        /**
         Returns true if the construct is static; False otherwise.
         @returns {boolean} True if the construct is static; False otherwise.
        */
        isStatic: boolean;
        /**
         Returns true if the construct is bound to an instance; False otherwise.
         @returns {boolean} True if the construct is bound to an instance; False otherwise.
        */
        isInstance: boolean;
        /**
         Initializes a new instance of the LanguageConstruct class.
         @param password {number} The password required to instantiate a LanguageConstruct class.
         @remarks We include a password as a parameter so that the LanguageConstruct class cannot be instantiated freely. This should be done by the system.
        */
        constructor(password: number);
    }
    /**
     A description of the metadata associated within a module.
     @extends Classical.Reflection.LanguageConstruct
     @seealso getModule
    */
    class Module extends LanguageConstruct {
        private _name;
        private _fullName;
        private _scope;
        private _base;
        private _modules;
        private _types;
        private _functions;
        private _variables;
        /**
         Gets the name of the current construct
         @returns {string} The name of the current construct.
        */
        name: string;
        /**
         Gets the fully qualified name of the construct, including its Classical.Reflection.Module.
         @returns {string} The fully qualified name of the construct, including its Classical.Reflection.Module.
        */
        fullName: string;
        /**
         Returns true if the construct is declared public; False otherwise.
         @returns {boolean} True if the construct is construct is declared public; False otherwise.
        */
        isPublic: boolean;
        /**
         Returns true if the construct is declared protected; False otherwise.
         @returns {boolean} True if the construct is construct is declared protected; False otherwise.
         @remarks Since in JavaScript, there is not a notion of protected, we introduced a naming convention to decide if it is protected. If the name of starts with '$' it is deemed protected.
        */
        isProtected: boolean;
        /**
         Returns true if the construct is declared private; False otherwise.
         @returns {boolean} True if the construct is construct is declared private; False otherwise.
         @remarks Since in JavaScript, there is not a notion of private, we introduced a naming convention to decide if it is private. If the name of starts with '_' it is deemed private.
        */
        isPrivate: boolean;
        /**
         Returns true if the construct is static; False otherwise.
         @returns {boolean} True if the construct is static; False otherwise.
        */
        isStatic: boolean;
        /**
         Returns true if the construct is bound to an instance; False otherwise.
         @returns {boolean} True if the construct is bound to an instance; False otherwise.
        */
        isInstance: boolean;
        /**
         Returns the module definition of the Module.
         @returns {any} The scope of the Module.
         @remarks This is the underlying JavaScript module definition.
        */
        scope: any;
        /**
         Returns the underlying module definition.
         @returns {any} The module definition of the Module.
         @remarks This is the underlying JavaScript module definition.
        */
        moduleValue: any;
        /**
         Initializes a new instance of the Module class.
         @param password {number} The password required to instantiate a LanguageConstruct class.
         @param name {string} The name of the Module.
         @param scope {any} The module definition of the Module.
         @param base? {Classical.Reflection.Module} The base Module of the current Module(if any).
         @remarks We include a password as a parameter so that the Module class cannot be instantiated freely. This should be done by the system.
        */
        constructor(password: number, name: string, scope: any, base?: Module);
        /**
         Returns all modules of the current Module.
         @returns {IQueryable<Classical.Reflection.Module>} All modules of the current Module.
        */
        getModules(): IQueryable<Module>;
        /**
         Returns all types of the current Module.
         @returns {IQueryable<Classical.Reflection.Type>} All types of the current Module.
         @seealso Classical.Reflection.Type
        */
        getTypes(): IQueryable<Type>;
        /**
         Returns all functions of the current Module.
         @returns {IQueryable<Classical.Reflection.Function>} All functions of the current Module.
         @seealso Classical.Reflection.Function
        */
        getFunctions(): IQueryable<Function>;
        /**
         Searches for the specified function with the specified name.
         @param name {string} The string containing the name of the function to get.
         @returns {Classical.Reflection.Function} An object that represents the function with the specified name; null otherwise.
         @seealso Classical.Reflection.Function
        */
        getFunction(name: string): Function;
        /**
         Returns all variables of the current Module.
         @returns {IQueryable<Classical.Reflection.Variable>} All variables of the current Module.
         @seealso Classical.Reflection.Variable
        */
        getVariables(): IQueryable<Variable>;
        /**
         Searches for the specified variable with the specified name.
         @param name {string} The string containing the name of the variable to get.
         @returns {Classical.Reflection.Variable} An object that represents the variable with the specified name; null otherwise.
         @seealso Classical.Reflection.Variable
        */
        getVariable(name: string): Variable;
        private _initializeModules();
        private _initializeTypes();
        private _initializeFunctions();
        private _initializeVariables();
        private _findModule(type);
        private static _global;
        private static _anonymous;
        private static _modules;
        /**
         Returns the global object represented as a Module.
         @returns {Classical.Reflection.Module} The global object represented as a Module.
        */
        static global: Module;
        /**
         Returns the anonymous Module.
         @returns {Classical.Reflection.Module} The anonymous Module.
         @remarks This special Module is for constructs that cannot be placed in any other Modules.
        */
        static anonymous: Module;
        /**
         Searches for the Module that has the specified Type.
         @returns The Module that has the specified Type.
         @remarks If the Module cannot be found for the specified Type, the anonymous Module will be returned.
         @seealso anonymous
        */
        static getModule(type: Type): Module;
        private static _isModule(moduleCandidate, moduleName?);
        private static _isType(typeCandidate);
    }
    /**
     A description of the metadata associated within a class.
     @seealso getType
    */
    class Type extends LanguageConstruct implements IModuleMember {
        private _ctor;
        private _base;
        private _module;
        private _name;
        private _properties;
        private _fields;
        private _methods;
        private _isSingleton;
        private _typeConstructor;
        /**
         Gets the parent type of the type, if defined; null otherwise.
         @returns {Classical.Reflection.Type} The parent type of the type, if defined; null otherwise.
        */
        base: Type;
        /**
         Gets the constructor of the type.
         @returns {IFunction} The constructor of the type.
        */
        constructorFunction: IFunction;
        /**
         Gets the constructor of the type.
         @returns {Classical.Reflection.Constructor} The constructor of the type.
        */
        constructorValue: Constructor;
        /**
         Gets the fully qualified name of the construct, including its Classical.Reflection.Module.
         @returns {string} The fully qualified name of the construct, including its Classical.Reflection.Module.
         @seealso Module
        */
        fullName: string;
        isNull: boolean;
        isUndefined: boolean;
        /**
         Returns true if the construct is declared public; False otherwise.
         @returns {boolean} True if the construct is construct is declared public; False otherwise.
        */
        isPublic: boolean;
        /**
         Returns true if the construct is declared protected; False otherwise.
         @returns {boolean} True if the construct is construct is declared protected; False otherwise.
         @remarks Since in JavaScript, there is not a notion of protected, we introduced a naming convention to decide if it is protected. If the name of starts with '$' it is deemed protected.
        */
        isProtected: boolean;
        /**
         Returns true if the construct is declared private; False otherwise.
         @returns {boolean} True if the construct is construct is declared private; False otherwise.
         @remarks Since in JavaScript, there is not a notion of private, we introduced a naming convention to decide if it is private. If the name of starts with '_' it is deemed private.
        */
        isPrivate: boolean;
        /**
         True if the Type is one of the primitive types; false otherwise.
         @returns {boolean} True if the Type is one of the primitive types; false otherwise.
        */
        isPrimitive: boolean;
        /**
         True if the Type is a singleton; false otherwise.
         @returns {boolean} True if the Type is a singleton; false otherwise.
        */
        isSingleton: any;
        /**
         Returns true if the construct is static; False otherwise.
         @returns {boolean} True if the construct is static; False otherwise.
        */
        isStatic: boolean;
        /**
         Returns true if the construct is bound to an instance; False otherwise.
         @returns {boolean} True if the construct is bound to an instance; False otherwise.
        */
        isInstance: boolean;
        /**
         Gets the name of the current construct
         @returns {string} The name of the current construct
         @remarks
            This is largely for debugging or record keeping.
            For Type equivalence, use the equals method.
        */
        name: string;
        /**
         Gets the Module that the Type belongs to.
         @returns {Classical.Reflection.Module} The Module that the Type belongs to.
         @seealso Classical.Reflection.Module
        */
        declaringModule: Module;
        /**
         Gets the prototype of the Type.
         @returns {any} The prototype of the Type.
        */
        prototype: any;
        /**
         Initializes a new instance of the Type class.
         @param password {number} The password required to instantiate a LanguageConstruct class.
         @param ctor {IFunction} The constructor of the Type.
         @param mod? {Classical.Reflection.Module} The declaring Module of the Type.
         @param singleton {boolean} True if the Type is a singleton; False otherwise.
         @remarks We include a password as a parameter so that the construct cannot be instantiated freely. This should be done by the system.
        */
        constructor(password: number, ctor: IFunction, mod?: Module, singleton?: boolean);
        /**
         Returns true if the current Type is equal to the specified object; False otherwise.
         @returns {boolean} True if the current Type is equal to the specified object; False otherwise.
        */
        equals(other: any): boolean;
        /**
         Returns a string representation of the Type.
         @returns {string A string representation of the Type.
        */
        toString(): string;
        create<TInstance>(...args: Array<any>): any;
        /**
         Serves as the default hash function.
         @returns {number} A has code for the current object.
        */
        getHashCode(): number;
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
        getFieldsOf(instance: any, ...options: Array<Modifier>): IQueryable<Field>;
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
        getFieldOf(instance: any, name: string, ...options: Array<Modifier>): Field;
        /**
         Returns the properties of the current Type using the specified modifiers.
         @param ...options {Array<Modifier} One or more Modifiers that specify how the search is conducted
         @returns {IQueryable<Classical.Reflection.Property>} The properties of the current Type using the specified modifiers.
         @seealso
            Classical.Reflection.Modifier
            Classical.Reflection.Property
        */
        getProperties(...options: Array<Modifier>): IQueryable<Property>;
        /**
         Searches for the specified property with the specified name using the specified modifiers.
         @param name {string} The string containing the name of the property to get.
         @param ...options {Array<Modifier} One or more Modifiers that specify how the search is conducted.
         @returns {Classical.Reflection.Property} The specified property with the specified name using the specified modifiers.
         @seealso
            Classical.Reflection.Modifier
            Classical.Reflection.Property
        */
        getProperty(name: string, ...options: Array<Modifier>): Property;
        /**
         Returns the methods of the current Type using the specified modifiers.
         @param ...options {Array<Modifier} One or more Modifiers that specify how the search is conducted.
         @returns {IQueryable<Classical.Reflection.Method>} The methods of the current Type using the specified modifiers.
         @seealso
            Classical.Reflection.Modifier
            Classical.Reflection.Method
        */
        getMethods(...options: Array<Modifier>): IQueryable<Method>;
        /**
         Searches for the specified method with the specified name using the specified modifiers.
         @param name {string} The string containing the name of the property to get.
         @param ...options {Array<Modifier} One or more Modifiers that specify how the search is conducted.
         @returns {Classical.Reflection.Method} The specified method with the specified name using the specified modifiers.
         @seealso
            Classical.Reflection.Modifier
            Classical.Reflection.Method
        */
        getMethod(name: string, ...options: Array<Modifier>): Method;
        /**
         Returns true if the Type is assignable to the other Type; false otherwise.
         @returns {boolean} True if the Type is assignable to the other Type; false otherwise.
        */
        isAssignableTo(other: Type): boolean;
        /**
         Returns true if the other Type is assignable to this Type; false otherwise.
         @returns {boolean} True if the other Type is assignable to this Type; false otherwise.
        */
        isAssignableFrom(other: Type): boolean;
        private _initializeFields(instance);
        private _initializeProperties();
        private _getStaticProperties();
        private _getInstanceProperties();
        private _getProperOptions(optionsList);
        private _isValidProperty(property, modifiers);
        /**
         Gets the Type object for null.
         @returns {Classical.Reflection.Type} The Type object for null.
        */
        static null: Type;
        /**
         Gets the Type object for undefined.
         @returns {Classical.Reflection.Type} The Type object for undefined.
        */
        static undefined: Type;
        /**
         Looks up or creates a type for the specified constructor.
         @returns {Classical.Reflection.Type} The type for the specified constructor.
        */
        static getType(ctor: IFunction): Type;
    }
    /**
     A description of the metadata associated within a property of a class.
     @extends Classical.Reflection.LanguageConstruct
    */
    class Property extends LanguageConstruct implements ITypeMember {
        private _name;
        private _declaringType;
        private _isStatic;
        private _canWrite;
        private _canRead;
        private _isMethod;
        private _isField;
        private _propertyDescriptor;
        private _initialPropertyDescriptor;
        private _propertyAspects;
        /**
         Gets the name of the current construct
         @returns {string} The name of the current construct.
        */
        name: string;
        /**
         Gets the fully qualified name of the construct, including its Classical.Reflection.Module.
         @returns {string} The fully qualified name of the construct, including its Classical.Reflection.Module.
        */
        fullName: string;
        /**
         Gets the type that declares the current property.
         @returns {Classical.Reflection.Type} The type that declares the current property.
        */
        declaringType: Type;
        /**
         Returns true if the construct is static; False otherwise.
         @returns {boolean} True if the construct is static; False otherwise.
        */
        isStatic: boolean;
        /**
         Returns true if the construct is declared public; False otherwise.
         @returns {boolean} True if the construct is construct is declared public; False otherwise.
        */
        isPublic: boolean;
        /**
         Returns true if the construct is declared protected; False otherwise.
         @returns {boolean} True if the construct is construct is declared protected; False otherwise.
         @remarks Since in JavaScript, there is not a notion of protected, we introduced a naming convention to decide if it is protected. If the name of starts with '$' it is deemed protected.
        */
        isProtected: boolean;
        /**
         Returns true if the construct is declared private; False otherwise.
         @returns {boolean} True if the construct is construct is declared private; False otherwise.
         @remarks Since in JavaScript, there is not a notion of private, we introduced a naming convention to decide if it is private. If the name of starts with '_' it is deemed private.
        */
        isPrivate: boolean;
        /**
         Gets a value indicating whether the property can be written to.
         @returns {boolean} True if the property can be written to; false otherwise.
        */
        canWrite: boolean;
        /**
         Gets a value indicating whether the property can be read.
         @returns {boolean} True if the property can be read; false otherwise.
        */
        canRead: boolean;
        /**
         Gets a value indicating whether the property is enumerable.
         @returns {boolean} True if the property is enumerable; false otherwise.
        */
        enumerable: boolean;
        /**
         Gets a value indicating whether the property is configurable.
         @returns {boolean} True if the property is configurable; false otherwise.
        */
        configurable: boolean;
        /**
         Gets a value indicating whether the property is a method.
         @returns {boolean} True if the property is a method, false otherwise.
         @remarks Since functions in JavaScript are first class objects, they can be treated like properties.
         @seealso Classical.Reflection.Method
        */
        isMethod: boolean;
        /**
         Gets a value indicating whether the property is a field.
         @returns {boolean} True if the property is a field, false otherwise.
         @seealso Classical.Reflection.Field
        */
        isField: boolean;
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
        constructor(password: number, name: string, declaringType: Type, propertyDescriptor: PropertyDescriptor, canRead: boolean, canWrite: boolean, isMethod: boolean, isField: boolean, isStatic: boolean);
        /**
         Returns the property value of a specified object.
         @param instance {any} The instance whose property value will be returned.
         @returns The property value of a specified object.
        */
        getValue(instance: any): any;
        /**
         Sets the property value of a specified object.
         @param instance {any} The instance whose property will be set.
         @param value {any} The value that the property will be set to.
        */
        setValue(instance: any, value: any): void;
        private getNewDescriptor(descriptor);
        toString(): string;
        /**
         Returns true if the property determined by the selector exists on the instance; false otherwise.
         @typeparam TInstance {any} The type of the instance to check the existence of the property for.
         @typeparam Tproperty {any} The type of the property to check the existence of.
         @param instance {TInstance} The instance to check the existence of the property for.
         @param selector {(instance: TInstance) => TProperty} The property to check the existence of.
         @returns {boolean} True if the property determined by the selector exists on the instance; false otherwise.
        */
        static exists<TInstance, TProperty>(instance: TInstance, selector: (instance: TInstance) => TProperty): boolean;
    }
    /**
     A description of the metadata associated within a field of a class.
     @extends Classical.Reflection.Property
    */
    class Field extends Property {
        /**
         Returns true if the construct is declared public; False otherwise.
         @returns {boolean} True if the construct is construct is declared public; False otherwise.
        */
        isPublic: boolean;
        /**
         Returns true if the construct is declared protected; False otherwise.
         @returns {boolean} True if the construct is construct is declared protected; False otherwise.
         @remarks Since in JavaScript, there is not a notion of protected, we introduced a naming convention to decide if it is protected. If the name of starts with '$' it is deemed protected.
        */
        isProtected: boolean;
        /**
         Returns true if the construct is declared private; False otherwise.
         @returns {boolean} True if the construct is construct is declared private; False otherwise.
         @remarks Since in JavaScript, there is not a notion of private, we introduced a naming convention to decide if it is private. If the name of starts with '_' it is deemed private.
        */
        isPrivate: boolean;
        /**
         Initializes a new instance of the Field class.
         @param password {number} The password required to instantiate a LanguageConstruct class.
         @param name {string} The name of the field.
         @param declaringType {Classical.Reflection.Type} The declaring Type of the field.
         @param isStatic {boolean} Value indicating if the field is static.
         @remarks We include a password as a parameter so that the construct cannot be instantiated freely. This should be done by the system.
        */
        constructor(password: number, name: string, declaringType: Type, isStatic: boolean);
        /**
         Returns the field value of a specified object.
         @param instance {any} The instance whose field value will be returned.
         @returns The field value of a specified object.
        */
        getValue(instance: any): any;
        /**
         Sets the field value of a specified object.
         @param instance {any} The instance whose field will be set.
         @param value {any} The value that the field will be set to.
        */
        setValue(instance: any, value: any): void;
    }
    /**
     A description of the metadata associated within a variable of a module.
     @extends Classical.Reflection.Property
    */
    class Variable extends Property implements IModuleMember {
        private _module;
        private _value;
        /**
         Gets the module that declares the current variable.
         @returns {Classical.Reflection.Module} The module that declares the current variable.
         @seealso Classical.Reflection.Module
        */
        declaringModule: Module;
        /**
         Gets the underlying value of the current variable.
         @returns {any} The underlying value of the current variable.
        */
        variableValue: any;
        /**
         Initializes a new instance of the Variable class.
         @param password {number} The password required to instantiate a Variable class.
         @param name {string} The name of the variable.
         @param mod {Classical.Reflection.Module} The declaring module of the variable.
         @param value {any} The underlying value of the variable.
         @remarks We include a password as a parameter so that the construct cannot be instantiated freely. This should be done by the system.
        */
        constructor(password: number, name: string, mod: Module, value: any);
    }
    /**
     A description of the metadata associated within a method of a class.
     @extends Classical.Reflection.Property
     @remarks
        In JavaScript methods are properties of type function.
        Therefore a Method is a Property.
    */
    class Method extends Property {
        private _initialFunction;
        private _underlyingFunction;
        private _parameters;
        private _methodAspects;
        /**
         Gets the underlying function value of the method.
         @returns {IFunction} The underlying function value of the method.
        */
        functionValue: IFunction;
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
        constructor(password: number, name: string, declaringType: Type, propertyDescriptor: PropertyDescriptor, canWrite: boolean, underlyingFunction: IFunction, isStatic: boolean);
        /**
         Invokes the method represented by the current instance, using the specified arguments.
         @param instance {any} The instance on which to invoke the method. If the method is static, the instance will be ignored.
         @param ...args {any[]} The argument list for the invoked method.
         @returns {any} The result of the invoked method.
         @remarks If this method is not static, an instance is required.
        */
        invoke(instance: any, ...args: any[]): any;
        /**
         Gets the parameters of the current method.
         @returns {IQueryable<Classical.Reflection.Parameter>} The parameters of the current method.
        */
        getParameters(): IQueryable<Parameter>;
        private _initializeParameters();
    }
    /**
     A description of the metadata associated within a constructor of a class.
     @extends Classical.Reflection.Method
    */
    class Constructor extends Method implements IModuleMember {
        /**
         Gets the declaring module of the constructor function.
         @returns {Classical.Reflection.Module} The declaring module of the constructor function.
        */
        declaringModule: Module;
        /**
         Initializes a new instance of the Constructor class.
         @param password {number} The password required to instantiate a Constructor class.
         @param name {string} The name of the constructor.
         @param declaringType {Classical.Reflection.Type} The declaring type of the constructor.
         @param propertyDescriptor {PropertyDescriptor} The underlying JavaScript PropertyDescriptor of the constructor.
         @param underlyingFunction {IFunction} The underlying function of the constructor.
         @remarks We include a password as a parameter so that the construct cannot be instantiated freely. This should be done by the system.
        */
        constructor(password: number, declaringType: Type, propertyDescriptor: PropertyDescriptor, underlyingFunction: IFunction);
    }
    /**
     A description of the metadata associated within a function of a module.
     @extends Classical.Reflection.Method
    */
    class Function extends Method implements IModuleMember {
        private _module;
        /**
         Gets the declaring module of the constructor function.
         @returns {Classical.Reflection.Module} The declaring module of the constructor function.
        */
        declaringModule: Module;
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
        constructor(password: number, name: string, canWrite: boolean, mod: Module, underlyingFunction: IFunction);
    }
    /**
     A description of the metadata associated within a parameter of a function.
    */
    class Parameter implements IMethodMember {
        private _name;
        private _position;
        private _declaringMethod;
        /**
         Gets the name of the parameter.
         @returns {string} The name of the parameter.
        */
        name: string;
        /**
         Gets the zero-based position of the parameter in the true parameter list.
         @return {number} The zero-based position of the parameter in the true parameter list.
        */
        position: number;
        /**
         Gets the declaring method of the parameter.
         @returns {number} The declaring method of the parameter.
        */
        declaringMethod: Method;
        /**
         Instantiates a new instance of the Parameter class.
         @param password {number} The password required to instantiate a Parameter class.
         @param name {string} The name of the parameter.
         @param position {number} The zero-based position of the parameter in the true parameter list.
         @param declaringMethod {Classical.Reflection.Method} The declaring method of the parameter.
         @remarks We include a password as a parameter so that the construct cannot be instantiated freely. This should be done by the system.
        */
        constructor(password: number, name: string, position: number, declaringMethod: Method);
        /**
         Gets the string representation of the parameter.
         @returns {string} The string representation of the parameter.
        */
        toString(): string;
    }
    /**
    * Gets all Modules currently loaded.
    * @returns {IQueryable<Classical.Reflection.Module>} All Modules currently loaded.
    */
    function getModules(): IQueryable<Module>;
    /**
    * Gets all Types in all Modules currently loaded.
    * @returns {IQueryable<Classical.Reflection.Type>} All Types in all Modules currently loaded.
    */
    function getTypes(): IQueryable<Type>;
    /**
     Attempts to find the field using the given selector.
     @typeparam TInstance {any} The type of the instance to find the field of.
     @typeparam TField {any} The type of the field to find.
     @param instance {TInstance} The instance to find the field of.
     @param selector {(instance: TInstance) => TField} The selector of the field to find.
     @returns {Classical.Reflection.Field} The Field using the given selector; Null otherwise.
     @remarks This function will always traverse the Type hierarchy to find the field. It take no advantage of the cache.
    */
    function findField<TInstance, TField>(instance: TInstance, selector: (instance: TInstance) => TField): Field;
    /**
     Attempts to find the property using the given selector.
     @typeparam TInstance {any} The type of the instance to find the property of.
     @typeparam TProperty {any} The type of the property to find.
     @param instance {TInstance} The instance to find the property of.
     @param selector {(instance: TInstance) => TProperty} The selector of the property to find.
     @returns {Classical.Reflection.Property} The Property using the given selector; Null otherwise.
     @remarks This function will always traverse the Type hierarchy to find the property. It take no advantage of the cache.
    */
    function findProperty<TInstance, TProperty>(instance: TInstance, selector: (instance: TInstance) => TProperty): Property;
    /**
     Attempts to find the method using the given selector.
     @typeparam TInstance {any} The type of the instance to find the method of.
     @typeparam TProperty {any} The type of the method to find.
     @param instance {TInstance} The instance to find the method of.
     @param selector {(instance: TInstance) => TProperty} The selector of the method to find.
     @returns {Classical.Reflection.Method} The Method using the given selector; Null otherwise.
     @remarks This function will always traverse the Type hierarchy to find the method. It take no advantage of the cache.
    */
    function findMethod<TInstance, TProperty>(instance: TInstance, selector: (instance: TInstance) => TProperty): Method;
    /**
     Attempts to find the variable using the given selector.
     @typeparam TInstance {any} The type of the instance to find the variable of.
     @typeparam TProperty {any} The type of the variable to find.
     @param instance {TInstance} The instance to find the variable of.
     @param selector {(instance: TInstance) => TProperty} The selector of the variable to find.
     @returns {Classical.Reflection.Variable} The Variable using the given selector; Null otherwise.
     @remarks This function will always traverse the Type hierarchy to find the variable. It take no advantage of the cache.
    */
    function findVariable<TInstance, TProperty>(instance: TInstance, selector: (instance: TInstance) => TProperty): Variable;
    /**
     Attempts to find the function using the given selector.
     @typeparam TInstance {any} The type of the instance to find the function of.
     @typeparam TProperty {any} The type of the function to find.
     @param instance {TInstance} The instance to find the function of.
     @param selector {(instance: TInstance) => TProperty} The selector of the variable to find.
     @returns {Classical.Reflection.Function} The Function using the given selector; Null otherwise.
     @remarks This function will always traverse the Type hierarchy to find the function. It take no advantage of the cache.
    */
    function findFunction<TInstance, TProperty>(instance: TInstance, selector: (instance: TInstance) => TProperty): Function;
    /**
     Attempts to find the static field using the given selector.
     @typeparam TType {any} The type to find the static field of.
     @param instance {TType} The instance to find the static field of.
     @param selector {(t: any) => any} The selector of the static field to find.
     @returns {Classical.Reflection.Field} The Field using the given selector; Null otherwise.
     @remarks This function will always traverse the Type hierarchy to find the static field. It take no advantage of the cache.
    */
    function findStaticField<TType extends IFunction>(t: TType, selector: (t: any) => any): Field;
    /**
     Attempts to find the static property using the given selector.
     @typeparam TType {any} The type to find the static property of.
     @param instance {TType} The instance to find the static property of.
     @param selector {(t: any) => any} The selector of the static property to find.
     @returns {Classical.Reflection.Property} The Property using the given selector; Null otherwise.
     @remarks This function will always traverse the Type hierarchy to find the static property. It take no advantage of the cache.
    */
    function findStaticProperty<TType extends IFunction>(t: TType, selector: (t: any) => any): Property;
    /**
     Attempts to find the static method using the given selector.
     @typeparam TType {any} The type to find the static method of.
     @param instance {TType} The instance to find the static method of.
     @param selector {(t: any) => any} The selector of the static method to find.
     @returns {Classical.Reflection.Method} The Method using the given selector; Null otherwise.
     @remarks This function will always traverse the Type hierarchy to find the static method. It take no advantage of the cache.
    */
    function findStaticMethod<TType extends IFunction>(t: TType, selector: (t: any) => any): Method;
}
/**
 A sequence of items that can be enumerated one at a time.
 IEnumerables serve to allow common functionality to be defined for
 collections like arrays, sets, dictionaries or more complex data
 structures that have still represent some kind of collection.
 @typeparam [T] The type of item in the sequence.
 @remarks
    An enumeration is not constrainted to be finite but
    it is assumed that they are unless otherwise specified.
*/
interface IEnumerable<T> extends IObject {
    getEnumerator(): IEnumerator<T>;
    forEach(operation: (item?: T) => void): void;
    query(): IQueryable<T>;
    array(): Array<T>;
    count(): number;
}
/**
 Defines an object which performs the enumeration for a particular implementation of IEnumerable.
 @typeparam [T] The type of item which is enumerated.
 @seealso IEnumerable<T>
*/
interface IEnumerator<T> extends IObject {
    current: T;
    moveNext(): boolean;
}
/**
 Defines an sequence with a getter.
 @typeparam [T] The type of item in the collection.
 @remarks
    The get method cannot assumed to be fast though by convention is it implemented to be when possible.
    It is safe to assume that retrieving an object using the get method requires a traversal of the collection.
*/
interface IAccessibleCollection<T> extends IEnumerable<T> {
    get(index: number): T;
}
/**
 Defines a collection that can be used for storing and retrieving objects.
 @typeparam [T] The type of item in the collection.
 @remarks Array<T> implemements ICollection.
 @seealso Array<T>
*/
interface ICollection<T> extends IAccessibleCollection<T> {
    add(item: T): ICollection<T>;
    addRange(items: IEnumerable<T>): ICollection<T>;
    remove(item: T): ICollection<T>;
    removeAt(index: number): ICollection<T>;
    clear(): ICollection<T>;
    set(index: number, item: T): ICollection<T>;
}
/**
 Defines a lazily executed query that performs a computation on a sequence of data.
 @typeparam [T] The type of item being queried.
 @remarks
    Not all methods of IQueryable are lazily executed.
    In particular, methods which don't return IQueryables
    are expected to have executed the query.
*/
interface IQueryable<T> extends IEnumerable<T> {
    forEach(operation: (item: T) => void): IQueryable<T>;
    cast<TElement>(): IQueryable<TElement>;
    where(predicate: (item: T) => boolean): IQueryable<T>;
    select<TSelected>(selector: (item: T) => TSelected): IQueryable<TSelected>;
    selectMany<TSelected>(selector: (item: T) => IEnumerable<TSelected>): IQueryable<TSelected>;
    orderBy<TSelected>(selector: (item: T) => TSelected, comparison?: (first: TSelected, second: TSelected) => number): IQueryable<T>;
    orderByDescending<TSelected>(selector: (item: T) => TSelected, comparison?: (first: TSelected, second: TSelected) => number): IQueryable<T>;
    aggregate<TAccumulate>(accumulator: (first: TAccumulate, second: T) => TAccumulate, seed?: TAccumulate): TAccumulate;
    sum(selector?: (item: T) => number): number;
    max(selector?: (item: T) => number): number;
    min(selector?: (item: T) => number): number;
    first(predicate?: (item: T) => boolean): T;
    firstOrDefault(predicate?: (item: T) => boolean): T;
    last(predicate?: (item: T) => boolean): T;
    lastOrDefault(predicate?: (item: T) => boolean): T;
    single(predicate?: (item: T) => boolean): T;
    singleOrDefault(predicate?: (item: T) => boolean): T;
    skip(count: number): IQueryable<T>;
    take(count: number): IQueryable<T>;
    at(index: number): T;
    concat(other: IEnumerable<T>): IQueryable<T>;
    hasAny(predicate?: (item: T) => boolean): boolean;
    hasNone(predicate?: (item: T) => boolean): boolean;
    distinct(): IQueryable<T>;
    reverse(): IQueryable<T>;
    dictionary<TKey, TValue>(keySelector: (item: T) => TKey, valueSelector: (item: T) => TValue): Classical.Collections.Dictionary<TKey, TValue>;
    execute(): IQueryable<T>;
    result(): Array<T>;
}
/**
 The core JavaScript array.
 @remarks
    Array implements IObject, ICollection<T> and IEnumerable<T>.
    All Objects implement IHashable so arrays can be used as keys in Dictionaries.
 @seealso IObject, ICollection<T> and IEnumerable<T>, IHashable, Classical.Collections.Dictionary
*/
interface Array<T> extends ICollection<T>, IEnumerable<T> {
}
/**
 The core set of collections defined in Classical.
*/
declare module Classical.Collections {
    /**
     An accessible collection that is immutable.
     @typeparam [T] Type parameter of the class
    */
    class ImmutableCollection<T> implements IAccessibleCollection<T> {
        private _get;
        constructor(elements: IEnumerable<T>);
        get(index: number): T;
        getEnumerator(): IEnumerator<T>;
        query(): IQueryable<T>;
        forEach(operation: (item: T) => void): void;
        array(): Array<T>;
        count(): number;
    }
    /**
     Defines a lazily executed query that performs a computation on a sequence of data.
     @typeparam [T] The type of item being queried.
     @remarks
        Not all methods of IQueryable are lazily executed.
        In particular, methods which don't return IQueryables
        are expected to have executed the query.
    */
    class Queryable<T> implements IQueryable<T> {
        _enumerable: IEnumerable<T>;
        constructor(enumerable: IEnumerable<T>);
        toString(): string;
        getEnumerator(): IEnumerator<T>;
        query(): Queryable<T>;
        array(): T[];
        count(): number;
        forEach(operation: (item?: T) => void): void;
        forEach(operation: (item: T) => void): IQueryable<T>;
        cast<TElement>(): IQueryable<TElement>;
        where(predicate: (item: T) => boolean): IQueryable<T>;
        select<TSelected>(selector: (item: T) => TSelected): IQueryable<TSelected>;
        selectMany<TSelected>(selector: (item: T) => IEnumerable<TSelected>): IQueryable<TSelected>;
        orderBy<TSelected>(selector: (item: T) => TSelected, comparison?: (first: TSelected, second: TSelected) => number): IQueryable<T>;
        orderByDescending<TSelected>(selector: (item: T) => TSelected, comparison?: (first: TSelected, second: TSelected) => number): IQueryable<T>;
        aggregate<TAccumulate>(accumulator: (first: TAccumulate, second: T) => TAccumulate, seed?: TAccumulate): TAccumulate;
        sum(selector?: (item: T) => number): number;
        max(selector?: (item: T) => number): number;
        min(selector?: (item: T) => number): number;
        hasNone(predicate?: (item: T) => boolean): boolean;
        hasAny(predicate?: (item: T) => boolean): boolean;
        first(predicate?: (item: T) => boolean): T;
        firstOrDefault(predicate?: (item: T) => boolean): T;
        last(predicate?: (item: T) => boolean): T;
        lastOrDefault(predicate?: (item: T) => boolean): T;
        single(predicate?: (item: T) => boolean): T;
        singleOrDefault(predicate?: (item: T) => boolean): T;
        skip(count: number): IQueryable<T>;
        take(count: number): IQueryable<T>;
        at(index: number): T;
        concat(other: IEnumerable<T>): IQueryable<T>;
        distinct(): IQueryable<T>;
        reverse(): IQueryable<T>;
        dictionary<TKey, TValue>(keySelector: (item: T) => TKey, valueSelector: (item: T) => TValue): Dictionary<TKey, TValue>;
        execute(): IQueryable<T>;
        result(): Array<T>;
        private coalescePredicate(predicate);
    }
    /**
     A collection of utilities for working with objects that implement IEnumerable<T>
     @seealso IEnumerable<T>
    */
    module Enumerable {
        function empty<T>(): IEnumerable<T>;
        function range(end: number): IEnumerable<number>;
        function range(start: number, end: number): IEnumerable<number>;
        function range(start: number, increment: number, end: number): IEnumerable<number>;
        function forEach<T>(items: IEnumerable<T>, operation: (item?: T) => void): void;
    }
}
/**
 Provides methods which extract expressions from JavaScript code.
 @remarks Currently we support extracting the property name from a lambda selector and extracting the arguments from a function.
 @seealso Classical.Reflection
 @example
    import e = Classical.Expression;

    var obj = { property: 'value' };
    e.getProperty(obj, o => o.property); //returns 'property'

    var func = function(a: string, b: string) { return a + b; }
    e.getArguments(func); //['a', 'b']
*/
declare module Classical.Expression {
    function getProperty<TInstance>(instance: TInstance, selector: (instance: TInstance) => any): string;
    function getProperty<TInstance>(selector: (instance: TInstance) => any): string;
    function getArguments(func: Function): Array<string>;
    function getScripts(): IQueryable<string>;
    function getScriptsByClass(...classes: string[]): IQueryable<string>;
    function getElementByClass(elementName: string, ...classes: string[]): NodeList;
}
/**
 Description of an event which can subscribed to.
 @typeparam [THost] The object which hosts the event.
 @typeparam [TInformation] The information required to respond to the event.
*/
interface IEvent<THost, TInformation> extends IObject {
    subscribe(registration: (host: THost, info: TInformation) => void): void;
    unsubscribe(registration: (host: THost, info: TInformation) => void): void;
    execute(info: TInformation): void;
    clear(): void;
    count(): number;
}
/**
 An event in which subscribers can provide a response through their registration.
 @typeparam [THost] The object which hosts the event.
 @typeparam [TInformation] The information required to respond to the event.
 @typeparam [TResponse] The type of response required from subscribers.
*/
interface IRequest<THost, TInformation, TResponse> extends IObject {
    subscribe(registration: (host: THost, info: TInformation) => TResponse): void;
    unsubscribe(registration: (host: THost, info: TInformation) => TResponse): void;
    execute(info: TInformation): IEnumerable<TResponse>;
    clear(): void;
    count(): number;
}
declare module Classical.Events {
    /**
     Description of an event which can subscribed to.
     @typeparam [THost] The object which hosts the event.
     @typeparam [TInformation] The information required to respond to the event.
    */
    class Event<THost, TInformation> implements IEvent<THost, TInformation> {
        _subscribers: Array<(host: THost, info: TInformation) => void>;
        _host: THost;
        constructor(host: THost);
        subscribe(registration: (host: THost, info: TInformation) => void): void;
        unsubscribe(registration: (host: THost, info: TInformation) => void): void;
        execute(info?: TInformation): void;
        clear(): void;
        count(): number;
    }
    /**
     An event in which subscribers can provide a response through their registration.
     @typeparam [THost] The object which hosts the event.
     @typeparam [TInformation] The information required to respond to the event.
     @typeparam [TResponse] The type of response required from subscribers.
    */
    class Request<THost, TInformation, TResponse> implements IRequest<THost, TInformation, TResponse> {
        _subscribers: Array<(host: THost, info: TInformation) => TResponse>;
        _host: THost;
        constructor(host: THost);
        subscribe(registration: (host: THost, info: TInformation) => TResponse): void;
        unsubscribe(registration: (host: THost, info: TInformation) => TResponse): void;
        execute(info: TInformation): IEnumerable<TResponse>;
        clear(): void;
        count(): number;
    }
    /**
     An request in which subscribers vote with numerical values for the host to tally.
     @typeparam [THost] The object which hosts the event.
     @typeparam [TInformation] The information required to respond to the event.
    */
    class TallyRequest<THost, TInformation> extends Request<THost, TInformation, number> {
        constructor(host: THost);
        tally(info: TInformation): number;
    }
    /**
     An request in which subscribers vote with boolean values for the host to count.
     @typeparam [THost] The object which hosts the event.
     @typeparam [TInformation] The information required to respond to the event.
    */
    class VoteRequest<THost, TInformation> extends Request<THost, TInformation, boolean> {
        _undecidedResult: boolean;
        constructor(host: THost, undecidedResult?: boolean);
        subscribe(registration: (host: THost, info: TInformation) => boolean): void;
        poll(info: TInformation): boolean;
    }
    /**
     A vote request where the result must be unanimous.
     @typeparam [THost] The object which hosts the event.
     @typeparam [TInformation] The information required to respond to the event.
    */
    class UnanimousVoteRequest<THost, TInformation> extends VoteRequest<THost, TInformation> {
        constructor(host: THost, undecidedResult?: boolean);
        poll(info: TInformation): boolean;
    }
}
declare function bind<TModel, TProperty>(model: TModel, selector: (obj: TModel) => TProperty): Classical.Binding.IBinder<Classical.Binding.PropertyUpdate<TProperty>>;
/**
 The objects and interfaces used to create objects that can be bound to each other
 in the sense that when one updates so too does the other.
 @seealso Classical.Binding.Collections
*/
declare module Classical.Binding {
    /**
     Defines an object that can be synchronized with or bound to another object.
     @typeparam [TTargetUpdate] {Update} The type of update consumed by the synchronizable object.
     @remarks
        Every object implementing ISynchronizable is meant to have a Synchronizer associated with it.
     @seealso Classical.Binding.Synchronizer
    */
    interface ISynchronizable<TTargetUpdate extends Update> extends IObject {
        hasTarget(target: ISynchronizable<TTargetUpdate>): boolean;
        hasSource(source: ISynchronizable<any>): boolean;
        bind(binder: IBinder<TTargetUpdate>): void;
        bind(binder: IComplexBinder<TTargetUpdate>): void;
        unbind(source: ISynchronizable<any>): boolean;
        track(registration: (update: Array<TTargetUpdate>, source: any) => void): any;
        apply(updates: IEnumerable<TTargetUpdate>): void;
        detach(): void;
    }
    /**
     An update that can be performed on an ISynchronizable object.
     @remarks
        Updates are converted between types to facilitate binding across types.
        Updates also store their sources so there is an audit trail for objects they have been applied to.
     @seealso Classical.Binding.Synchronizer.
    */
    class Update {
        private _sources;
        constructor(sources: IEnumerable<any>);
        hasSource(source: any): boolean;
        addSource(source: any): void;
        transferSourcesTo<TUpdate extends Update>(update: TUpdate): TUpdate;
    }
    /**
     Defines the manner in which two objects are synchronized.
     @typeparam [TTargetUpdate] {Update} The type of update consumed by a synchronizable object.
    */
    interface IBinder<TTargetUpdate extends Update> extends IObject {
        source: ISynchronizable<Update>;
        converter?: IConverter<any, TTargetUpdate>;
        init?: (target: ISynchronizable<TTargetUpdate>, source: ISynchronizable<Update>) => void;
    }
    /**
     Defines the manner in which one object is synchronized with multiple sources.
     @typeparam [TTargetUpdate] {Update} The type of update consumed by a synchronizable object.
    */
    interface IComplexBinder<TTargetUpdate extends Update> extends IObject {
        sources: Array<ISynchronizable<Update>>;
        converter: IAggregator<any, TTargetUpdate>;
    }
    /**
     Defines an object that converts data between two types.
     @typeparam [TSourceValue] The type of value to convert from.
     @typeparam [TTargetValue] The type of value to convert to.
    */
    interface IConverter<TSourceValue, TTargetValue> extends IObject {
        convert(source: TSourceValue): TTargetValue;
        convertBack?(target: TTargetValue): TSourceValue;
    }
    /**
     Defines an object that aggregates a sequence into a single value.
     @typeparam [TSourceValue] The type of data to aggregate.
     @typeparam [TTargetValue] The type of data returned by the aggregation.
    */
    interface IAggregator<TSourceValue, TTargetValue> extends IObject {
        convert(sources: IEnumerable<TSourceValue>): TTargetValue;
    }
    /**
     A utility class which performs most of the heavy lifting of the binding system.
     @typeparam [TTargetUpdate] {Update} The type of update consumed by the synchronizable object associated with the synchronizer.
     @remarks
        All synchronizable objects are meant to store a reference to a synchronizer.
        They should decorate every method of the synchronizer except apply.
     @seealso Classical.Binding.Synchronizer
    */
    class Synchronizer<TTargetUpdate extends Update> implements ISynchronizable<TTargetUpdate> {
        private _updateDepth;
        private _updates;
        private _target;
        private _binders;
        private _onUpdateEvent;
        target: ISynchronizable<TTargetUpdate>;
        updates: Array<TTargetUpdate>;
        updateDepth: number;
        constructor(target: ISynchronizable<TTargetUpdate>);
        hasTarget(target: ISynchronizable<TTargetUpdate>): boolean;
        hasSource(source: ISynchronizable<any>): boolean;
        bind(binder: IBinder<TTargetUpdate>): void;
        bind(binder: IComplexBinder<TTargetUpdate>): void;
        unbind(source: ISynchronizable<any>): boolean;
        apply(updates: IEnumerable<TTargetUpdate>): void;
        track(registration: (update: Array<TTargetUpdate>, source: any) => void): void;
        detach(): void;
        add(update: TTargetUpdate): void;
        filter(updates: IEnumerable<TTargetUpdate>): Array<TTargetUpdate>;
        sync(immediate?: boolean): boolean;
        syncStart(): void;
        private _createComplexBinding(binder);
        private _executeUpdates(groupUpdate);
        private _executeOnUpdate(updates);
    }
    /**
     A property whose value can be bound to other objects.
     @typeparam [TValue] The type of the property value.
     @remarks
        Properties are not meant to be explicitly added to classes.
        They gain their utility by replacing simple properties on the object
        through the bind method.
     @seealso bind
    */
    class Property<TValue> implements ISynchronizable<PropertyUpdate<TValue>> {
        updating: boolean;
        private _value;
        private _synchronizer;
        value: TValue;
        constructor(value?: TValue);
        toString(): string;
        hasTarget(target: ISynchronizable<PropertyUpdate<TValue>>): boolean;
        hasSource(source: ISynchronizable<any>): boolean;
        bind(source: Property<TValue>): any;
        bind(sources: Array<ISynchronizable<Update>>, selector: (sources: Array<any>) => TValue): any;
        bind(propertyBinder: IPropertyBinder<TValue>): any;
        bind(binder: IBinder<PropertyUpdate<TValue>>): any;
        bind(binder: IComplexBinder<PropertyUpdate<TValue>>): void;
        unbind(partner: ISynchronizable<any>): boolean;
        track(registration: (update: Array<PropertyUpdate<TValue>>, source: Property<TValue>) => void): void;
        apply(updates: IEnumerable<PropertyUpdate<TValue>>): void;
        detach(): void;
        private _createComplexBinder(sources, selector);
        private _sourceToBinder(source);
    }
    /**
     A property whose value can be bound to other objects. Updates will not be applied until explicitly accepted or reflected.
     @typeparam [TValue] The type of the property value.
     @remarks
        This property is a solution to the problem that arises when an object is bound to a form, and the form is cancelled.
        An object composed of confirmation propreties can have its state accepted or rejected, much like the form.
     @seealso Classical.Binding.Property
    */
    class ConfirmationProperty<TValue> extends Property<TValue> {
        private _newValue;
        private hasAccepted;
        value: TValue;
        newValue: TValue;
        private synchronizer;
        constructor(value?: TValue);
        apply(updates: IEnumerable<PropertyUpdate<TValue>>): void;
        accept(): void;
        reject(): void;
        private _getValue();
        private _setValue(value);
    }
    /**
     Defines the manner in which two binding properties are synchronized.
     @typeparam [TValue] The type of the target property value.
    */
    interface IPropertyBinder<TValue> extends IObject {
        property: Property<any>;
        converter: IConverter<any, TValue>;
    }
    /**
     A specialized update used as a convenience when synchronizing two binding properties.
     The properties can have different value types.
     @typeparam [TValue] The type of the property value.
    */
    class PropertyUpdate<TValue> extends Update {
        value: TValue;
        constructor(value: TValue, sources?: IEnumerable<any>);
    }
    /**
     @internal
    */
    function _getProperty<T>(obj: any, propertyName: string): Property<T>;
    /**
     @internal
    */
    function _setProperty<T>(obj: any, propertyName: string, value: T): void;
    /**
     @internal
    */
    function _propertyBinderToBinder<TValue>(propertyBinder: IPropertyBinder<TValue>): IBinder<PropertyUpdate<TValue>>;
}
/**
 A set of collections which can be bound to each other.
 @seealso Classical.Binding
*/
declare module Classical.Binding.Collections {
    /**
     A collection whose items can be bound and synchronized with other objects.
     @typeparam [T] The type of item in the collection.
    */
    class Collection<T> implements ICollection<T>, ISynchronizable<CollectionUpdate<T>> {
        private _items;
        private _synchronizer;
        constructor(items?: IEnumerable<T>);
        getEnumerator(): IEnumerator<T>;
        forEach(operation: (item?: T) => void): void;
        query(): IQueryable<T>;
        array(): Array<T>;
        count(): number;
        add(item: T): ICollection<T>;
        private _add(update);
        addRange(items: IEnumerable<T>): ICollection<T>;
        remove(item: T): ICollection<T>;
        private _remove(update);
        removeAt(index: number): ICollection<T>;
        private _removeAt(update);
        clear(): ICollection<T>;
        get(index: number): T;
        set(index: number, item: T): ICollection<T>;
        private _set(update);
        hasTarget(target: ISynchronizable<CollectionUpdate<T>>): boolean;
        hasSource(source: ISynchronizable<any>): boolean;
        bind(source: Collection<T>): void;
        bind(collectionBinder: ICollectionBinder<T>): void;
        bind(sources: Array<ISynchronizable<Update>>, selector: (sources: Array<any>) => any): any;
        bind(binder: IBinder<CollectionUpdate<T>>): void;
        bind(binder: IComplexBinder<CollectionUpdate<T>>): void;
        unbind(source: ISynchronizable<any>): boolean;
        track(registration: (update: Array<CollectionUpdate<T>>, source: any) => void): void;
        apply(updates: IEnumerable<CollectionUpdate<T>>): void;
        detach(): void;
        toString(): string;
        private _createComplexBinder(sources, selector);
        private _sourceToBinder(source);
        private _collectionBinderToBinder(collectionBinder);
        private _applyAdd(updates);
        private _applySet(updates);
        private _applyRemove(updates);
        private _applyRemoveAt(updates);
    }
    /**
     Defines the manner in which two binding collections are synchronized.
     @typeparam [T] The type of item in the target collection.
    */
    interface ICollectionBinder<T> extends IObject {
        collection: Collection<any>;
        converter?: IConverter<any, T>;
    }
    /**
     A specialized update used as a convenience when synchronizing two binding collections.
     @typeparam [TValue] The type of the property value.
    */
    class CollectionUpdate<T> extends Update {
        type: CollectionUpdateType;
        oldValue: T;
        newValue: T;
        index: number;
        constructor(sources?: IEnumerable<any>);
        create(type: CollectionUpdateType, oldValue: T, newValue: T, index: number): CollectionUpdate<T>;
    }
    enum CollectionUpdateType {
        Add = 0,
        Set = 1,
        Remove = 2,
        RemoveAt = 3,
    }
}
declare module Classical.Aspects {
    class Aspect {
    }
    class PropertyAspect extends Aspect {
        ApplyAspect(property: Reflection.Property): void;
        protected IsFirstAspect(property: Reflection.Property): boolean;
        static onGetValue(property: Reflection.Property, additionalFunc: (p: Reflection.Property) => void): OnGetValueAspect;
        static onSetValue(property: Reflection.Property, additionalFunc: (p: Reflection.Property, value: any) => void): OnSetValueAspect;
        static removeAspect(property: Classical.Reflection.Property, propertyAspect: PropertyAspect): boolean;
        static removeAllAspects(property: Reflection.Property): void;
        private static AddAspectToProperty(property, propertyAspect);
        private static ApplyAllAspects(property);
        private static getNewDescriptor(descriptor);
    }
    class OnGetValueAspect extends PropertyAspect {
        private _onGetValueFunction;
        constructor(onEntryFunction: (p: Reflection.Property) => void);
        ApplyAspect(property: Reflection.Property): void;
    }
    class OnSetValueAspect extends PropertyAspect {
        private _onSetValueFunction;
        constructor(onSetValueFunction: (p: Reflection.Property, value: any) => void);
        ApplyAspect(property: Reflection.Property): void;
    }
    class MethodAspect extends Aspect {
        ApplyAspect(method: Reflection.Method): void;
        protected IsFirstAspect(method: Reflection.Method): boolean;
        static onEntry(method: Classical.Reflection.Method, additionalFunc: (m: Reflection.Method) => void): MethodAspect;
        static onExit(method: Classical.Reflection.Method, additionalFunc: (m: Reflection.Method, returnValue: any) => void): MethodAspect;
        static onException(method: Classical.Reflection.Method, additionalFunc: (m: Reflection.Method, e: any) => void, reThrowException?: boolean): MethodAspect;
        static removeAspect(method: Classical.Reflection.Method, methodAspect: MethodAspect): boolean;
        static removeAllAspects(method: Reflection.Method): void;
        private static AddAspectToMethod(method, methodAspect);
        private static ApplyAllAspects(method);
    }
}
