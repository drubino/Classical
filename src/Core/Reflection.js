//#region IFunction
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
//#endregion IFunction
//#region Collections
/**
 The core set of collections defined in Classical.
*/
var Classical;
(function (Classical) {
    var Collections;
    (function (Collections) {
        //#region Imports
        var u = Classical.Utilities;
        //#endregion Imports
        //#region Variables
        //The buckets numbers for the hashTable in DictionaryBase.
        //The number of buckets is approximately 2^(index + 3), and it is guaranteed to be prime.
        var numberOfBuckets = [7, 13, 23, 43, 83, 163, 317, 631, 1259, 2503, 5003, 9973, 19937, 39869, 79699, 159389, 318751, 637499, 1274989, 2549951, 5099893, 10199767, 20399531, 40799041, 81598067, 163196129, 326392249, 652784471];
        //#endregion Variables
        //#region Dictionary
        //A dictionary is a mapping between unique keys and arbitrary values.
        //Keys must implement getHashCode and equals from the IObject interface.
        var Dictionary = (function () {
            //#endregion Properties
            //#region Constructor
            //Builds a new dictionary.
            //The capacity a lower bound on the capacity is the number of elements that can be stored without rebalancing.
            function Dictionary(capacity) {
                this._initialCapacity = u.coalesce(capacity, 0);
                this.clear();
            }
            Object.defineProperty(Dictionary.prototype, "keys", {
                //#endregion Fields
                //#region Properties
                //Returns a sequence containing the keys of the dictionary.
                get: function () {
                    return new DictionaryKeyCollection(this);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Dictionary.prototype, "values", {
                //Returns a sequence containing the values of the dictionary.
                get: function () {
                    return this.query().select(function (pair) { return pair.value; });
                },
                enumerable: true,
                configurable: true
            });
            //#endregion Constructor
            //#region IEnumerable Members
            Dictionary.prototype.getEnumerator = function () {
                return new DictionaryEnumerator(this);
            };
            //Returns an IEnumerable implementation that is queryable.
            Dictionary.prototype.query = function () {
                return new Collections.Queryable(this);
            };
            //Enumerates the collection
            Dictionary.prototype.forEach = function (operation) {
                forEach(this, operation);
            };
            //Returns a JavaScript array.
            Dictionary.prototype.array = function () {
                var array = [];
                this.forEach(function (pair) { array.add(pair); });
                return array;
            };
            //#endregion IEnumerable Members
            //#region Methods
            //Adds a key-value pair to the dictionary.
            //If it exists, the existing value will be overwritten.
            //The key can be null, but not undefined.
            //If the key does not have .equals and .getHashCode methods, they will be added with reference semantics.
            Dictionary.prototype.add = function (key, value) {
                Classical.Assert.isDefined(key, 'The key is null or undefined.');
                var added = this.addWithoutRebalancing(this._hashTable, this._numberOfBuckets, {
                    key: key,
                    value: value
                });
                if (added)
                    this._numberOfElements++;
                this.rebalanceIfNecessary();
                return this;
            };
            //Removes a key from the dictionary.
            Dictionary.prototype.remove = function (key) {
                var elements = this.getElements(key);
                var pair = this.getPair(elements, this._hashTable, this._numberOfBuckets, key);
                if (u.isDefined(pair)) {
                    elements.remove(pair);
                    this._numberOfElements--;
                }
                return this;
            };
            //Returns the value of the key if it exists; undefined otherwise.
            Dictionary.prototype.getValue = function (key) {
                var keyAny = key;
                if (u.isNullOrUndefined(key) ||
                    !keyAny.equals || !keyAny.getHashCode)
                    return undefined;
                var elements = this.getElements(key);
                if (elements === undefined)
                    return undefined;
                for (var i = 0, elementsLength = elements.length; i < elementsLength; i++) {
                    var pair = elements[i];
                    if (pair.key.equals(key))
                        return pair.value;
                }
                return undefined;
            };
            //Returns true if the dictionary contains the specified key; False otherwise.
            Dictionary.prototype.containsKey = function (key) {
                var keyAny = key;
                if (u.isNullOrUndefined(key) ||
                    !keyAny.equals || !keyAny.getHashCode)
                    return false;
                var elements = this.getElements(key);
                return u.isDefined(this.getPair(elements, this._hashTable, this._numberOfBuckets, key));
            };
            //Removes all items from the dictionary.
            Dictionary.prototype.clear = function () {
                this._hashTable = {};
                this._numberOfElements = 0;
                var bucketIndex = DictionaryUtilities.capacityToBucketIndex(this._initialCapacity);
                this._bucketIndex = bucketIndex;
                this._numberOfBuckets = DictionaryUtilities.getNumberOfBuckets(bucketIndex);
            };
            //Counts the number of elements in the dictionary.
            Dictionary.prototype.count = function () {
                return this._numberOfElements;
            };
            //#endregion Methods
            //#region Utilities
            Dictionary.prototype.getIndex = function (key) {
                return key.getHashCode() % this._numberOfBuckets;
            };
            Dictionary.prototype.getElements = function (key) {
                var index = this.getIndex(key);
                return this._hashTable[index];
            };
            Dictionary.prototype.getPair = function (elements, hashTable, numberOfBuckets, key) {
                if (elements === undefined)
                    return null;
                var current;
                for (var i = 0, elementsLength = elements.length; i < elementsLength; i++) {
                    current = elements[i];
                    if (current.key.equals(key))
                        return current;
                }
                return null;
            };
            Dictionary.prototype.addWithoutRebalancing = function (hashTable, numberOfBuckets, pair, checkForExistance) {
                if (checkForExistance === void 0) { checkForExistance = true; }
                var keyHashCode = pair.key.getHashCode() % numberOfBuckets;
                var elements = hashTable[keyHashCode];
                if (elements === undefined) {
                    elements = [];
                    hashTable[keyHashCode] = elements;
                }
                if (checkForExistance) {
                    var foundPair = this.getPair(elements, hashTable, numberOfBuckets, pair.key);
                    if (u.isDefined(foundPair)) {
                        foundPair.value = pair.value;
                        return false;
                    }
                }
                elements.push(pair);
                return true;
            };
            Dictionary.prototype.rebalanceIfNecessary = function () {
                if (this._numberOfElements > (DictionaryUtilities.loadFactor * this._numberOfBuckets))
                    this.rebalance();
            };
            Dictionary.prototype.rebalance = function () {
                var currentBucketIndex = this._bucketIndex, currentNumberOfBuckets = this._numberOfBuckets, currentHashTable = this._hashTable, nextBucketIndex = currentBucketIndex + 1, nextNumberOfBuckets = DictionaryUtilities.getNumberOfBuckets(nextBucketIndex), nextHashTable = {}, elements;
                for (var i = 0; i < currentNumberOfBuckets; i++) {
                    elements = currentHashTable[i];
                    if (u.isDefined(elements)) {
                        for (var j = 0, elementsLength = elements.length; j < elementsLength; j++) {
                            this.addWithoutRebalancing(nextHashTable, nextNumberOfBuckets, elements[j], false);
                        }
                    }
                }
                this._bucketIndex = nextBucketIndex;
                this._numberOfBuckets = nextNumberOfBuckets;
                this._hashTable = nextHashTable;
            };
            return Dictionary;
        })();
        Collections.Dictionary = Dictionary;
        //#endregion Dictionary
        //#region DictionaryUtilities
        var DictionaryUtilities = (function () {
            function DictionaryUtilities() {
                Classical.Assert.staticClass();
            }
            //Gets the number of buckets for the nth reordering, always a prime number.
            DictionaryUtilities.getNumberOfBuckets = function (numberOfRebalances) {
                var result = numberOfBuckets[numberOfRebalances];
                Classical.Assert.isDefined(result, 'The maximum size for a Dictionary has been exceeded.');
                return result;
            };
            //Returns the bucketIndex closest to matching the specified capacity.
            DictionaryUtilities.capacityToBucketIndex = function (capacity) {
                var bucketValue = capacity / DictionaryUtilities.loadFactor, currentBucketValue;
                for (var i = 0, length = numberOfBuckets.length; i < length; i++) {
                    currentBucketValue = numberOfBuckets[i];
                    if (currentBucketValue > bucketValue)
                        return i;
                }
                Classical.Assert.isInvalid('The capacity is too large for the dictionary.');
            };
            DictionaryUtilities.loadFactor = 2;
            return DictionaryUtilities;
        })();
        //#endregion DictionaryUtilities
        //#region DictionaryEnumerator
        var DictionaryEnumerator = (function () {
            function DictionaryEnumerator(dictionary) {
                this._index = -1;
                Classical.Assert.isDefined(dictionary);
                this._hashTable = dictionary._hashTable;
                this._numberOfBuckets = dictionary._numberOfBuckets;
                this._bucketIndex = 0;
                this._elements = this._hashTable[this._bucketIndex];
            }
            Object.defineProperty(DictionaryEnumerator.prototype, "current", {
                get: function () {
                    return this._elements[this._index];
                },
                enumerable: true,
                configurable: true
            });
            DictionaryEnumerator.prototype.moveNext = function () {
                var bucketIndex = this._bucketIndex, numberOfBuckets = this._numberOfBuckets, elements = this._elements, hashTable = this._hashTable;
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
            };
            return DictionaryEnumerator;
        })();
        //#endregion DictionaryEnumerator
        //#region DictionaryKeyCollection
        var DictionaryKeyCollection = (function () {
            //#endregion Fields
            //#region Constructor
            function DictionaryKeyCollection(dictionary) {
                Classical.Assert.isDefined(dictionary);
                this._dictionary = dictionary;
            }
            //#endregion Constructor
            //#region IEnumerable Members
            DictionaryKeyCollection.prototype.getEnumerator = function () {
                return new DictionaryKeyEnumerator(this._dictionary);
            };
            DictionaryKeyCollection.prototype.query = function () {
                return new Collections.Queryable(this);
            };
            DictionaryKeyCollection.prototype.forEach = function (operation) {
                forEach(this, operation);
            };
            DictionaryKeyCollection.prototype.array = function () {
                var array = new Array();
                this.forEach(function (pair) { return array.add(pair); });
                return array;
            };
            DictionaryKeyCollection.prototype.count = function () {
                return this._dictionary.count();
            };
            return DictionaryKeyCollection;
        })();
        //#endregion //DictionaryKeyCollection
        //#region DictionaryKeyEnumerator
        var DictionaryKeyEnumerator = (function () {
            function DictionaryKeyEnumerator(dictionary) {
                Classical.Assert.isDefined(dictionary);
                this._dictionaryEnumerator = dictionary.getEnumerator();
            }
            Object.defineProperty(DictionaryKeyEnumerator.prototype, "current", {
                get: function () {
                    return this._dictionaryEnumerator.current.key;
                },
                enumerable: true,
                configurable: true
            });
            DictionaryKeyEnumerator.prototype.moveNext = function () {
                return this._dictionaryEnumerator.moveNext();
            };
            return DictionaryKeyEnumerator;
        })();
        //#endregion DictionaryKeyEnumerator
        //#region KeyValuePair
        var KeyValuePair = (function () {
            function KeyValuePair(key, value) {
                this.key = key;
                this.value = value;
            }
            return KeyValuePair;
        })();
        Collections.KeyValuePair = KeyValuePair;
        //#endregion KeyValuePair
        //#region Utilities
        function forEach(items, operation) {
            var enumerator = items.getEnumerator(), current;
            while (enumerator.moveNext()) {
                var current = enumerator.current;
                operation.bind(current)(current);
            }
        }
    })(Collections = Classical.Collections || (Classical.Collections = {}));
})(Classical || (Classical = {}));
//#endregion Collections
//#region typeOf
/**
 Used to obtain the Classical.Reflection.Type object for a function.
 @param ctor {IFunction} The constructor function of the Type.
 @returns {Classical.Reflection.Type} Returns the Classical.Reflection.Type object for the representing function.
*/
function typeOf(ctor) {
    return Classical.Reflection.Type.getType(ctor);
}
//#endregion typeOf
//#region moduleOf
/**
 Used to obtain the Classical.Reflection.Module object for a function.
 @param ctor {IFunction} The constructor function of the Type.
 @return {Classical.Reflection.Module} Returns the Classical.Reflection.Module object for the representing function.
*/
function moduleOf(ctor) {
    var type = typeOf(ctor);
    if (!type)
        return null;
    return Classical.Reflection.Module.getModule(type);
}
//#endregion moduleOf
//#region Null
function Null() { return null; }
;
//#endregion Null
//#region Undefined
function Undefined() { return undefined; }
;
//#endregion Undefined
/**
 You can use reflection to get the type from an existing object and invoke its methods or access its fields and properties.
*/
var Classical;
(function (Classical) {
    var Reflection;
    (function (Reflection) {
        //#region Imports
        var u = Classical.Utilities;
        var c = Classical.Collections;
        //#endregion Imports
        //#region isEnum
        /**
         Returns true if the object is an enumeration type; False otherwise.
         @param enumCandidate {any} THe object to check if it's an enumeration.
         @returns {boolean} True if the object is an enumeration type; False otherwise.
         @remarks An Enum(short for ENumeration) is a special {Classical.Reflection.Type} that consists only of a set of named constants.
        */
        function isEnum(enumCandidate) {
            if (!u.isObject(enumCandidate))
                return false;
            var propertyNames = Object.getOwnPropertyNames(enumCandidate);
            var numberProperties = propertyNames.query().where(function (p) {
                var match = p.match(/[0-9]+/);
                return match && match.length === 1;
            });
            var numberPropertiesCount = numberProperties.count();
            if (numberPropertiesCount == 0 || (numberPropertiesCount * 2 !== propertyNames.length))
                return false;
            numberProperties.forEach(function (n) {
                if (!enumCandidate[n])
                    return false;
            });
            return true;
        }
        Reflection.isEnum = isEnum;
        //#endregion Interfaces
        //#region Modifier
        /**
         An enumeration of the various properties that apply to the
         language construct metadata described by the reflection api.
         @seealso
            Classical.Reflection.Type.getProperties,
            Classical.Reflection.Type.getMethods
        */
        (function (Modifier) {
            Modifier[Modifier["Public"] = 0] = "Public";
            Modifier[Modifier["Protected"] = 1] = "Protected";
            Modifier[Modifier["Private"] = 2] = "Private";
            Modifier[Modifier["Instance"] = 3] = "Instance";
            Modifier[Modifier["Static"] = 4] = "Static";
        })(Reflection.Modifier || (Reflection.Modifier = {}));
        var Modifier = Reflection.Modifier;
        /**
         The public modifier
         @seealso Classical.Reflection.Modifier
        */
        Reflection.Public = Modifier.Public;
        /**
         The protected modifier
         @seealso Classical.Reflection.Modifier
        */
        Reflection.Protected = Modifier.Protected;
        /**
         The private modifier
         @seealso Classical.Reflection.Modifier
        */
        Reflection.Private = Modifier.Private;
        /**
         The instance modifier
         @seealso Classical.Reflection.Modifier
        */
        Reflection.Instance = Modifier.Instance;
        /**
         The static modifier
         @seealso Classical.Reflection.Modifier
        */
        Reflection.Static = Modifier.Static;
        var defaultModifier = [Reflection.Public, Reflection.Instance];
        //#endregion Modifier
        //#region LanguageConstruct
        /**
         LanguageConstruct is the base class of all Classical.Reflection classes.
         It provides the base methods and properties that all other Classical.Reflections classes share.
        */
        var LanguageConstruct = (function () {
            //#endregion isInstance
            //#endregion Properties
            //#region Constructors
            /**
             Initializes a new instance of the LanguageConstruct class.
             @param password {number} The password required to instantiate a LanguageConstruct class.
             @remarks We include a password as a parameter so that the LanguageConstruct class cannot be instantiated freely. This should be done by the system.
            */
            function LanguageConstruct(password) {
                Classical.Assert.isTrue(password === constructorPassword, 'You do not have permission to create instances of this type.');
            }
            Object.defineProperty(LanguageConstruct.prototype, "name", {
                //#region Properties
                //#region name
                /**
                 Gets the name of the current construct
                 @returns {string} The name of the current construct
                */
                get: function () {
                    throw Classical.Assert.notImplemented();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LanguageConstruct.prototype, "fullName", {
                //#endregion name
                //#region fullName
                /**
                 Gets the fully qualified name of the construct, including its Classical.Reflection.Module.
                 @returns {string} The fully qualified name of the construct, including its Classical.Reflection.Module.
                 @seealso Module
                */
                get: function () {
                    throw Classical.Assert.notImplemented();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LanguageConstruct.prototype, "isPublic", {
                //#endregion fullName
                //#region isPublic
                /**
                 Returns true if the construct is declared public; False otherwise.
                 @returns {boolean} True if the construct is construct is declared public; False otherwise.
                */
                get: function () {
                    throw Classical.Assert.notImplemented();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LanguageConstruct.prototype, "isProtected", {
                //#endregion isPublic
                //#region isProtected
                /**
                 Returns true if the construct is declared protected; False otherwise.
                 @returns {boolean} True if the construct is construct is declared protected; False otherwise.
                 @remarks Since in JavaScript, there is not a notion of protected, we introduced a naming convention to decide if it is protected. If the name of starts with '$' it is deemed protected.
                */
                get: function () {
                    throw Classical.Assert.notImplemented();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LanguageConstruct.prototype, "isPrivate", {
                //#endregion isProtected
                //#region isPrivate
                /**
                 Returns true if the construct is declared private; False otherwise.
                 @returns {boolean} True if the construct is construct is declared private; False otherwise.
                 @remarks Since in JavaScript, there is not a notion of private, we introduced a naming convention to decide if it is private. If the name of starts with '_' it is deemed private.
                */
                get: function () {
                    throw Classical.Assert.notImplemented();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LanguageConstruct.prototype, "isStatic", {
                //#endregion isPrivate
                //#region isStatic
                /**
                 Returns true if the construct is static; False otherwise.
                 @returns {boolean} True if the construct is static; False otherwise.
                */
                get: function () {
                    throw Classical.Assert.notImplemented();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LanguageConstruct.prototype, "isInstance", {
                //#endregion isStatic
                //#region isInstance
                /**
                 Returns true if the construct is bound to an instance; False otherwise.
                 @returns {boolean} True if the construct is bound to an instance; False otherwise.
                */
                get: function () {
                    throw Classical.Assert.notImplemented();
                },
                enumerable: true,
                configurable: true
            });
            return LanguageConstruct;
        })();
        Reflection.LanguageConstruct = LanguageConstruct;
        //#endregion LanguageConstruct
        //#region Module
        /**
         A description of the metadata associated within a module.
         @extends Classical.Reflection.LanguageConstruct
         @seealso getModule
        */
        var Module = (function (_super) {
            __extends(Module, _super);
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
            function Module(password, name, scope, base) {
                _super.call(this, password);
                if (base && base != Module.global)
                    this._fullName = u.format("{0}.{1}", base.fullName, name);
                else
                    this._fullName = name;
                this._name = name;
                this._scope = scope;
                this._base = base;
            }
            Object.defineProperty(Module.prototype, "name", {
                //#endregion Fields
                //#region Properties
                //#region name
                /**
                 Gets the name of the current construct
                 @returns {string} The name of the current construct.
                */
                get: function () {
                    return this._name;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Module.prototype, "fullName", {
                //#endregion name
                //#region fullName
                /**
                 Gets the fully qualified name of the construct, including its Classical.Reflection.Module.
                 @returns {string} The fully qualified name of the construct, including its Classical.Reflection.Module.
                */
                get: function () {
                    return this._fullName;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Module.prototype, "isPublic", {
                //#endregion fullName
                //#region isPublic
                /**
                 Returns true if the construct is declared public; False otherwise.
                 @returns {boolean} True if the construct is construct is declared public; False otherwise.
                */
                get: function () {
                    return true;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Module.prototype, "isProtected", {
                //#endregion isPublic
                //#region isProtected
                /**
                 Returns true if the construct is declared protected; False otherwise.
                 @returns {boolean} True if the construct is construct is declared protected; False otherwise.
                 @remarks Since in JavaScript, there is not a notion of protected, we introduced a naming convention to decide if it is protected. If the name of starts with '$' it is deemed protected.
                */
                get: function () {
                    return false;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Module.prototype, "isPrivate", {
                //#endregion isProtected
                //#region isPrivate
                /**
                 Returns true if the construct is declared private; False otherwise.
                 @returns {boolean} True if the construct is construct is declared private; False otherwise.
                 @remarks Since in JavaScript, there is not a notion of private, we introduced a naming convention to decide if it is private. If the name of starts with '_' it is deemed private.
                */
                get: function () {
                    return false;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Module.prototype, "isStatic", {
                //#endregion isPrivate
                //#region isStatic
                /**
                 Returns true if the construct is static; False otherwise.
                 @returns {boolean} True if the construct is static; False otherwise.
                */
                get: function () {
                    throw 'isStatic is not valid for a Type.';
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Module.prototype, "isInstance", {
                //#endregion isStatic
                //#region isInstance
                /**
                 Returns true if the construct is bound to an instance; False otherwise.
                 @returns {boolean} True if the construct is bound to an instance; False otherwise.
                */
                get: function () {
                    throw 'isInstance is not valid for a Type.';
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Module.prototype, "scope", {
                //#endregion isInstance
                //#region scope
                /**
                 Returns the module definition of the Module.
                 @returns {any} The scope of the Module.
                 @remarks This is the underlying JavaScript module definition.
                */
                get: function () {
                    return this._scope;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Module.prototype, "moduleValue", {
                //#endregion scope
                //#region moduleValue
                /**
                 Returns the underlying module definition.
                 @returns {any} The module definition of the Module.
                 @remarks This is the underlying JavaScript module definition.
                */
                get: function () {
                    return this.scope;
                },
                enumerable: true,
                configurable: true
            });
            //#endregion Constructors
            //#region Methods
            //#region getModules
            /**
             Returns all modules of the current Module.
             @returns {IQueryable<Classical.Reflection.Module>} All modules of the current Module.
            */
            Module.prototype.getModules = function () {
                if (!this._modules)
                    this._modules = this._initializeModules();
                return this._modules.array().query();
            };
            //#endregion getModules
            //#region getTypes
            /**
             Returns all types of the current Module.
             @returns {IQueryable<Classical.Reflection.Type>} All types of the current Module.
             @seealso Classical.Reflection.Type
            */
            Module.prototype.getTypes = function () {
                if (!this._types)
                    this._types = this._initializeTypes();
                return this._types.array().query();
            };
            //#endregion getTypes
            //#region getFunctions
            /**
             Returns all functions of the current Module.
             @returns {IQueryable<Classical.Reflection.Function>} All functions of the current Module.
             @seealso Classical.Reflection.Function
            */
            Module.prototype.getFunctions = function () {
                if (!this._functions)
                    this._functions = this._initializeFunctions();
                return this._functions.array().query();
            };
            //#endregion getFunctions
            //#region getFunction
            /**
             Searches for the specified function with the specified name.
             @param name {string} The string containing the name of the function to get.
             @returns {Classical.Reflection.Function} An object that represents the function with the specified name; null otherwise.
             @seealso Classical.Reflection.Function
            */
            Module.prototype.getFunction = function (name) {
                Classical.Assert.isDefined(name);
                return this.getFunctions.apply(this).query().singleOrDefault(function (p) { return p.name === name; });
            };
            //#endregion getFunction
            //#region getVariables
            /**
             Returns all variables of the current Module.
             @returns {IQueryable<Classical.Reflection.Variable>} All variables of the current Module.
             @seealso Classical.Reflection.Variable
            */
            Module.prototype.getVariables = function () {
                if (!this._variables)
                    this._variables = this._initializeVariables();
                return this._variables.array().query();
            };
            //#endregion getVariables
            //#region getVariable
            /**
             Searches for the specified variable with the specified name.
             @param name {string} The string containing the name of the variable to get.
             @returns {Classical.Reflection.Variable} An object that represents the variable with the specified name; null otherwise.
             @seealso Classical.Reflection.Variable
            */
            Module.prototype.getVariable = function (name) {
                Classical.Assert.isDefined(name);
                return this.getVariables.apply(this).query().singleOrDefault(function (p) { return p.name === name; });
            };
            //#endregion getVariable
            //#endregion Methods
            //#region Utilities
            //#region _initializeModules
            Module.prototype._initializeModules = function () {
                var initializedModules = [];
                var scope = this.scope;
                if (!scope)
                    return initializedModules;
                var moduleProperties = Object.getOwnPropertyNames(scope);
                for (var i = 0; i < moduleProperties.length; i++) {
                    var modulePropertyName = moduleProperties[i];
                    var moduleProperty = scope[modulePropertyName];
                    if (Module._isModule(moduleProperty, modulePropertyName)) {
                        var obj = moduleProperty;
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
            };
            //#endregion _initializeModules
            //#region _initializeTypes
            Module.prototype._initializeTypes = function () {
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
                        var ctor = property;
                        var type = types.getValue(ctor);
                        if (type === undefined) {
                            type = new Type(constructorPassword, ctor, this);
                            types.add(ctor, type);
                        }
                        else if (!type._module) {
                            type._module = this;
                        }
                        initializedTypes.add(type);
                    }
                }
                return initializedTypes;
            };
            //#endregion _initializeTypes
            //#region _initializeFunctions
            Module.prototype._initializeFunctions = function () {
                var initializedFunctions = [];
                var scopeProperties = Object.getOwnPropertyNames(this._scope);
                for (var i = 0; i < scopeProperties.length; i++) {
                    var propertyName = scopeProperties[i];
                    var property = this._scope[propertyName];
                    if (!Module._isType(property) && u.isFunction(property)) {
                        var func = new Function(constructorPassword, propertyName, true, this, property);
                        initializedFunctions.add(func);
                    }
                }
                return initializedFunctions;
            };
            //#endregion _initializeFunctions
            //#region _initializeVariables
            Module.prototype._initializeVariables = function () {
                var initializedVariables = new Array();
                var scopeProperties = Object.getOwnPropertyNames(this._scope).query().where(function (p) { return p !== '_hashCode'; }).array();
                for (var i = 0; i < scopeProperties.length; i++) {
                    var propertyName = scopeProperties[i];
                    var property = this._scope[propertyName];
                    if (!u.isFunction(property) && !Module._isModule(property)) {
                        var variable = new Variable(constructorPassword, propertyName, this, property);
                        initializedVariables.add(variable);
                    }
                }
                return initializedVariables;
            };
            //#endregion _initializeVariables
            //#region _findModule
            Module.prototype._findModule = function (type) {
                var _this = this;
                var foundType = false;
                this.getTypes().forEach(function (t) {
                    if (t === type)
                        foundType = true;
                    else
                        t._module = _this;
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
            };
            Object.defineProperty(Module, "global", {
                //#endregion Fields
                //#region Properties
                //#region global
                /**
                 Returns the global object represented as a Module.
                 @returns {Classical.Reflection.Module} The global object represented as a Module.
                */
                get: function () {
                    if (!Module._global) {
                        Module._global = new Module(constructorPassword, 'Global', global);
                        modules.add(global, Module._global);
                    }
                    return Module._global;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Module, "anonymous", {
                //#endregion global
                //#region anonymous
                /**
                 Returns the anonymous Module.
                 @returns {Classical.Reflection.Module} The anonymous Module.
                 @remarks This special Module is for constructs that cannot be placed in any other Modules.
                */
                get: function () {
                    if (!Module._anonymous)
                        Module._anonymous = new Module(constructorPassword, 'Anonymous', Classical.Anonymous);
                    return Module._anonymous;
                },
                enumerable: true,
                configurable: true
            });
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
            Module.getModule = function (type) {
                Classical.Assert.isDefined(type);
                if (type._module)
                    return type._module;
                var foundModule = Module.global._findModule(type);
                if (foundModule) {
                    type._module = foundModule;
                    return foundModule;
                }
                type._module = Module.anonymous;
                return Module._anonymous;
            };
            //#endregion getModule
            //#endregion Methods
            //#region Utilities
            //#region _isModule
            Module._isModule = function (moduleCandidate, moduleName) {
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
            };
            //#endregion _isModule
            //#region _isType
            Module._isType = function (typeCandidate) {
                return typeCandidate === Object ||
                    (u.isFunction(typeCandidate) &&
                        u.isDefined(typeCandidate.prototype) &&
                        !u.isEmptyObject(typeCandidate.prototype));
            };
            return Module;
        })(LanguageConstruct);
        Reflection.Module = Module;
        //#endregion Module
        //#region Type
        /**
         A description of the metadata associated within a class.
         @seealso getType
        */
        var Type = (function (_super) {
            __extends(Type, _super);
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
            function Type(password, ctor, mod, singleton) {
                if (singleton === void 0) { singleton = false; }
                _super.call(this, password);
                this._base = null;
                this._name = null;
                this._ctor = ctor;
                this._isSingleton = singleton;
                this._typeConstructor = new Constructor(password, this, undefined, ctor);
                //TODO: If the module is not provided add it to the Native Module(Current Classical.Native);
                if (mod)
                    this._module = mod;
            }
            Object.defineProperty(Type.prototype, "base", {
                //#endregion Fields
                //#region Properties
                //#region base
                /**
                 Gets the parent type of the type, if defined; null otherwise.
                 @returns {Classical.Reflection.Type} The parent type of the type, if defined; null otherwise.
                */
                get: function () {
                    if (this._base === null) {
                        var prototype = Object.getPrototypeOf(this.constructorFunction.prototype);
                        if (prototype == null || Classical.Utilities.isFunction(!prototype.getType))
                            return null;
                        this._base = prototype.getType();
                    }
                    return this._base;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Type.prototype, "constructorFunction", {
                //#endregion base
                //#region constructorFunction
                /**
                 Gets the constructor of the type.
                 @returns {IFunction} The constructor of the type.
                */
                get: function () {
                    return this.constructorValue.functionValue;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Type.prototype, "constructorValue", {
                //#endregion constructorFunction
                //#region constructorValue
                /**
                 Gets the constructor of the type.
                 @returns {Classical.Reflection.Constructor} The constructor of the type.
                */
                get: function () {
                    return this._typeConstructor;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Type.prototype, "fullName", {
                //#endregion constructorValue
                //#region fullName
                /**
                 Gets the fully qualified name of the construct, including its Classical.Reflection.Module.
                 @returns {string} The fully qualified name of the construct, including its Classical.Reflection.Module.
                 @seealso Module
                */
                get: function () {
                    if (this.declaringModule && this.declaringModule !== Module.global)
                        return u.format("{0}.{1}", this.declaringModule.fullName, this.name);
                    else
                        return this.name;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Type.prototype, "isNull", {
                //#endregion fullName
                //#region isNull
                get: function () { return false; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Type.prototype, "isUndefined", {
                //#endregion isNull
                //#region isUndefined
                get: function () { return false; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Type.prototype, "isPublic", {
                //#endregion isUndefined
                //#region isPublic
                /**
                 Returns true if the construct is declared public; False otherwise.
                 @returns {boolean} True if the construct is construct is declared public; False otherwise.
                */
                get: function () {
                    return !this.isPrivate && !this.isProtected;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Type.prototype, "isProtected", {
                //#endregion isPublic
                //#region isProtected
                /**
                 Returns true if the construct is declared protected; False otherwise.
                 @returns {boolean} True if the construct is construct is declared protected; False otherwise.
                 @remarks Since in JavaScript, there is not a notion of protected, we introduced a naming convention to decide if it is protected. If the name of starts with '$' it is deemed protected.
                */
                get: function () {
                    return this.name.indexOf('$') === 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Type.prototype, "isPrivate", {
                //#endregion isProtected
                //#region isPrivate
                /**
                 Returns true if the construct is declared private; False otherwise.
                 @returns {boolean} True if the construct is construct is declared private; False otherwise.
                 @remarks Since in JavaScript, there is not a notion of private, we introduced a naming convention to decide if it is private. If the name of starts with '_' it is deemed private.
                */
                get: function () {
                    return this.name.indexOf('_') === 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Type.prototype, "isPrimitive", {
                //#endregion isPrivate
                //#region isPrimitive
                /**
                 True if the Type is one of the primitive types; false otherwise.
                 @returns {boolean} True if the Type is one of the primitive types; false otherwise.
                */
                get: function () {
                    return this === typeOf(Boolean) ||
                        this === typeOf(String) ||
                        this === typeOf(Number);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Type.prototype, "isSingleton", {
                //#endregion isPrimitive
                //#region isSingleton
                /**
                 True if the Type is a singleton; false otherwise.
                 @returns {boolean} True if the Type is a singleton; false otherwise.
                */
                get: function () { return this._isSingleton; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Type.prototype, "isStatic", {
                //#endregion isSingleton
                //#region isStatic
                /**
                 Returns true if the construct is static; False otherwise.
                 @returns {boolean} True if the construct is static; False otherwise.
                */
                get: function () {
                    throw 'isStatic is not valid for a Type.';
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Type.prototype, "isInstance", {
                //#endregion isStatic
                //#region isInstance
                /**
                 Returns true if the construct is bound to an instance; False otherwise.
                 @returns {boolean} True if the construct is bound to an instance; False otherwise.
                */
                get: function () {
                    throw 'isInstance is not valid for a Type.';
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Type.prototype, "name", {
                //#endregion isInstance
                //#region name
                /**
                 Gets the name of the current construct
                 @returns {string} The name of the current construct
                 @remarks
                    This is largely for debugging or record keeping.
                    For Type equivalence, use the equals method.
                */
                get: function () {
                    if (this._name === null) {
                        if (this._ctor === undefined) {
                            this._name = 'Undefined';
                        }
                        else if (this._ctor === null) {
                            this._name = 'Null';
                        }
                        else {
                            var name = this._ctor.name;
                            if (u.isNullOrUndefined(name)) {
                                var match = this._ctor.toString().match(/\s([\w\d]+)\(/);
                                if (match && match.length > 1)
                                    name = match[1];
                            }
                            if (u.isNullOrUndefined(name))
                                name = "`Anonymous";
                            this._name = name;
                        }
                    }
                    return this._name;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Type.prototype, "declaringModule", {
                //#endregion name
                //#region declaringModule
                /**
                 Gets the Module that the Type belongs to.
                 @returns {Classical.Reflection.Module} The Module that the Type belongs to.
                 @seealso Classical.Reflection.Module
                */
                get: function () {
                    if (!this._module)
                        this._module = Module.getModule(this);
                    return this._module;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Type.prototype, "prototype", {
                //#endregion declaringModule
                //#region prototype
                /**
                 Gets the prototype of the Type.
                 @returns {any} The prototype of the Type.
                */
                get: function () {
                    return this._ctor.prototype;
                },
                enumerable: true,
                configurable: true
            });
            //#endregion Constructor
            //#region Base Class Overrides
            //#region equals
            /**
             Returns true if the current Type is equal to the specified object; False otherwise.
             @returns {boolean} True if the current Type is equal to the specified object; False otherwise.
            */
            Type.prototype.equals = function (other) {
                if (u.isNullOrUndefined(other) ||
                    !other.is(Type))
                    return false;
                var otherType = other;
                return this.constructorFunction === otherType.constructorFunction;
            };
            //#endregion equals
            //#region toString
            /**
             Returns a string representation of the Type.
             @returns {string A string representation of the Type.
            */
            Type.prototype.toString = function () {
                return this.name;
            };
            //#endregion toString
            //#endregion Base Class Overrides
            //#region Methods
            //#region create
            Type.prototype.create = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i - 0] = arguments[_i];
                }
                return this.constructorFunction(args);
            };
            //#endregion create
            //#region getHashCode
            /**
             Serves as the default hash function.
             @returns {number} A has code for the current object.
            */
            Type.prototype.getHashCode = function () {
                return this._ctor.getHashCode();
            };
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
            Type.prototype.getFieldsOf = function (instance) {
                var _this = this;
                var options = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    options[_i - 1] = arguments[_i];
                }
                if (!u.isDefined(instance))
                    return [].query();
                Classical.Assert.isDefined(instance);
                if (instance.getType && Classical.Utilities.isFunction(instance.getType)) {
                    var instanceType = instance.getType();
                    if (instanceType !== this)
                        throw 'The instance passed in is not of type ' + this.name;
                }
                var fields = this._initializeFields(instance);
                options = this._getProperOptions(options);
                return fields.array().query().where(function (f) { return _this._isValidProperty(f, options); }).distinct();
            };
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
            Type.prototype.getFieldOf = function (instance, name) {
                var options = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    options[_i - 2] = arguments[_i];
                }
                Classical.Assert.isDefined(name);
                var args = [instance, options];
                return this.getFieldsOf.apply(this, args).query().singleOrDefault(function (f) { return f.name === name; });
            };
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
            Type.prototype.getProperties = function () {
                var _this = this;
                var options = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    options[_i - 0] = arguments[_i];
                }
                if (this.isNull || this.isUndefined)
                    return [].query();
                if (!this._properties)
                    this._initializeProperties();
                options = this._getProperOptions(options);
                return this._properties.array().query().where(function (p) { return _this._isValidProperty(p, options); }).distinct();
            };
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
            Type.prototype.getProperty = function (name) {
                var options = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    options[_i - 1] = arguments[_i];
                }
                Classical.Assert.isDefined(name);
                return this.getProperties.apply(this, options).query().singleOrDefault(function (p) { return p.name === name; });
            };
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
            Type.prototype.getMethods = function () {
                var options = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    options[_i - 0] = arguments[_i];
                }
                return this.getProperties.apply(this, options)
                    .where(function (p) { return p.isMethod; }).cast();
            };
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
            Type.prototype.getMethod = function (name) {
                var options = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    options[_i - 1] = arguments[_i];
                }
                Classical.Assert.isDefined(name);
                return this.getMethods.apply(this, options).query().singleOrDefault(function (m) { return m.name === name; });
            };
            //#endregion getMethod
            //#region isAssignableTo
            /**
             Returns true if the Type is assignable to the other Type; false otherwise.
             @returns {boolean} True if the Type is assignable to the other Type; false otherwise.
            */
            Type.prototype.isAssignableTo = function (other) {
                var ctor = this.constructorFunction, otherCtor = other.constructorFunction, prototype = null;
                while (Classical.Utilities.isDefined(ctor)) {
                    if (ctor === otherCtor)
                        return true;
                    prototype = Object.getPrototypeOf(ctor.prototype);
                    if (Classical.Utilities.isDefined(prototype))
                        ctor = prototype['constructor'];
                    else
                        ctor = null;
                }
                return false;
            };
            //#endregion isAssignableTo
            //#region isAssignableFrom
            /**
             Returns true if the other Type is assignable to this Type; false otherwise.
             @returns {boolean} True if the other Type is assignable to this Type; false otherwise.
            */
            Type.prototype.isAssignableFrom = function (other) {
                if (u.isNullOrUndefined(other))
                    return false;
                return other.isAssignableTo(this);
            };
            //#endregion isAssignableFrom
            //#endregion Methods
            //#region Utilities
            //#region _initializeFields
            Type.prototype._initializeFields = function (instance) {
                var fields = new Array();
                Object.getOwnPropertyNames(instance).forEach(function (property) {
                    var propertyDescriptor = Object.getOwnPropertyDescriptor(instance, property);
                    var getter = propertyDescriptor.get;
                    var setter = propertyDescriptor.set;
                    if (!Classical.Utilities.isDefined(getter) && !Classical.Utilities.isDefined(setter) && !Classical.Utilities.isFunction(propertyDescriptor.value))
                        fields.add(new Field(constructorPassword, property, typeOf(instance.constructor), false));
                });
                return fields;
            };
            //#endregion _initializeFields
            //#region _initializeProperties
            Type.prototype._initializeProperties = function () {
                var properties = new Array();
                var instance = this._ctor.prototype;
                properties.addRange(this._getStaticProperties());
                properties.addRange(this._getInstanceProperties());
                var baseType = this.base;
                if (Classical.Utilities.isDefined(baseType)) {
                    var baseTypeProperties = baseType.getProperties();
                    var propertiesToRemove = new Array();
                    properties.forEach(function (p) {
                        var baseTypeProperty = baseTypeProperties.singleOrDefault(function (prop) { return prop.name == p.name; });
                        if (baseTypeProperty) {
                            p._declaringType = baseTypeProperty.declaringType;
                            propertiesToRemove.add(p);
                        }
                    });
                    propertiesToRemove.forEach(function (p) {
                        properties.remove(p);
                    });
                    properties.addRange(baseTypeProperties);
                }
                this._properties = properties;
            };
            //#endregion _initializeProperties
            //#region _getStaticProperties
            Type.prototype._getStaticProperties = function () {
                var _this = this;
                var properties = new Array();
                var instance = this._ctor.prototype;
                Object.getOwnPropertyNames(this._ctor).forEach(function (property) {
                    var propertyDescriptor = Object.getOwnPropertyDescriptor(_this._ctor, property);
                    var getter = propertyDescriptor.get;
                    var setter = propertyDescriptor.set;
                    if (Classical.Utilities.isDefined(getter) || Classical.Utilities.isDefined(setter))
                        properties.add(new Property(constructorPassword, property, typeOf(instance.constructor), propertyDescriptor, Classical.Utilities.isDefined(getter), Classical.Utilities.isDefined(setter), false, false, true));
                    else if (Classical.Utilities.isFunction(propertyDescriptor.value))
                        properties.add(new Method(constructorPassword, property, typeOf(instance.constructor), propertyDescriptor, propertyDescriptor.writable, propertyDescriptor.value, true));
                    else if (!Classical.Utilities.isDefined(getter) && !Classical.Utilities.isDefined(setter))
                        properties.add(new Field(constructorPassword, property, typeOf(instance.constructor), true));
                });
                return properties;
            };
            //#endregion _getStaticProperties
            //#region _getInstanceProperties
            Type.prototype._getInstanceProperties = function () {
                var properties = new Array();
                var instance = this._ctor.prototype;
                Object.getOwnPropertyNames(instance).forEach(function (property) {
                    var propertyDescriptor = Object.getOwnPropertyDescriptor(instance, property);
                    var getter = propertyDescriptor.get;
                    var setter = propertyDescriptor.set;
                    if (Classical.Utilities.isDefined(getter) || Classical.Utilities.isDefined(setter))
                        properties.add(new Property(constructorPassword, property, typeOf(instance.constructor), propertyDescriptor, Classical.Utilities.isDefined(getter), Classical.Utilities.isDefined(setter), false, false, false));
                    else if (Classical.Utilities.isFunction(propertyDescriptor.value))
                        properties.add(new Method(constructorPassword, property, typeOf(instance.constructor), propertyDescriptor, propertyDescriptor.writable, propertyDescriptor.value, false));
                    else if (!Classical.Utilities.isDefined(getter) && !Classical.Utilities.isDefined(setter))
                        properties.add(new Field(constructorPassword, property, typeOf(instance.constructor), true));
                });
                return properties.query();
            };
            //#endregion _getInstanceProperties
            //#region _getProperOptions
            Type.prototype._getProperOptions = function (optionsList) {
                if (!optionsList || optionsList.length === 0)
                    return defaultModifier;
                var options = optionsList.query().distinct().array().query();
                var result = options.array();
                if (options.hasNone(function (o) { return o === Modifier.Public; }) && options.hasNone(function (o) { return o === Modifier.Protected; }) && options.hasNone(function (o) { return o === Modifier.Private; }))
                    result.add(Modifier.Public);
                if (options.hasNone(function (o) { return o === Modifier.Static; }) && options.hasNone(function (o) { return o === Modifier.Instance; }))
                    result.add(Modifier.Instance);
                return result;
            };
            //#endregion _getProperOptions
            //#region _isValidProperty
            Type.prototype._isValidProperty = function (property, modifiers) {
                var modifierQuery = modifiers.query();
                var accessModifiers = modifierQuery.where(function (m) { return m !== Modifier.Instance && m !== Modifier.Static; });
                var isValidAccessor = false;
                accessModifiers.forEach(function (m) {
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
                if (modifierQuery.hasAny(function (m) { return m === Modifier.Instance; }))
                    return isValidAccessor && !property.isStatic;
                else if (modifierQuery.hasAny(function (m) { return m === Modifier.Static; }))
                    return isValidAccessor && property.isStatic;
                return false;
            };
            Object.defineProperty(Type, "null", {
                //#endregion _isValidProperty
                //#endregion Utilities
                //#region Static Members
                //#region Properties
                //#region null
                /**
                 Gets the Type object for null.
                 @returns {Classical.Reflection.Type} The Type object for null.
                */
                get: function () {
                    return nullType;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Type, "undefined", {
                //#endregion null
                //#region undefined
                /**
                 Gets the Type object for undefined.
                 @returns {Classical.Reflection.Type} The Type object for undefined.
                */
                get: function () {
                    return undefinedType;
                },
                enumerable: true,
                configurable: true
            });
            //#endregion undefined
            //#endregion Properties
            //#region Methods
            /**
             Looks up or creates a type for the specified constructor.
             @returns {Classical.Reflection.Type} The type for the specified constructor.
            */
            Type.getType = function (ctor) {
                Classical.Assert.isDefined(ctor, 'The Type constructor was not specified.');
                Classical.Assert.isTrue(u.isFunction(ctor), 'The constructor must be a function.');
                if (ctor != global.Null && ctor != global.Undefined) {
                    var type = types.getValue(ctor);
                    if (!type) {
                        type = new Type(constructorPassword, ctor);
                        types.add(ctor, type);
                    }
                    return type;
                }
                else if (ctor === global.Null) {
                    return Type.null;
                }
                else if (ctor === global.Undefined) {
                    return Type.undefined;
                }
            };
            return Type;
        })(LanguageConstruct);
        Reflection.Type = Type;
        //#endregion Type
        //#region Null
        var Null = (function (_super) {
            __extends(Null, _super);
            function Null(password, ctor) {
                _super.call(this, password, ctor, null, true);
            }
            Object.defineProperty(Null.prototype, "isNull", {
                get: function () { return true; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Null.prototype, "declaringModule", {
                get: function () { return Module.global; },
                enumerable: true,
                configurable: true
            });
            return Null;
        })(Type);
        //#endregion Null
        //#region Undefined
        var Undefined = (function (_super) {
            __extends(Undefined, _super);
            function Undefined(password, ctor) {
                _super.call(this, password, ctor, null, true);
            }
            Object.defineProperty(Undefined.prototype, "isUndefined", {
                get: function () { return true; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Undefined.prototype, "declaringModule", {
                get: function () { return Module.global; },
                enumerable: true,
                configurable: true
            });
            return Undefined;
        })(Type);
        //#endregion Undefined
        //#region Property
        /**
         A description of the metadata associated within a property of a class.
         @extends Classical.Reflection.LanguageConstruct
        */
        var Property = (function (_super) {
            __extends(Property, _super);
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
            function Property(password, name, declaringType, propertyDescriptor, canRead, canWrite, isMethod, isField, isStatic) {
                _super.call(this, password);
                this._name = name;
                this._declaringType = declaringType;
                this._isStatic = isStatic;
                this._canWrite = canWrite;
                this._canRead = canRead;
                this._isMethod = isMethod;
                this._isField = isField;
                this._propertyDescriptor = propertyDescriptor;
                this._initialPropertyDescriptor = this.getNewDescriptor(propertyDescriptor);
                this._propertyAspects = new Array();
            }
            Object.defineProperty(Property.prototype, "name", {
                //#endregion Fields
                //#region Properties
                //#region name
                /**
                 Gets the name of the current construct
                 @returns {string} The name of the current construct.
                */
                get: function () {
                    return this._name;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Property.prototype, "fullName", {
                //#endregion name
                //#region fullName
                /**
                 Gets the fully qualified name of the construct, including its Classical.Reflection.Module.
                 @returns {string} The fully qualified name of the construct, including its Classical.Reflection.Module.
                */
                get: function () {
                    return Classical.Utilities.format('{0}.{1}', this.declaringType.fullName, this.name);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Property.prototype, "declaringType", {
                //#endregion fullName
                //#region declaringType
                /**
                 Gets the type that declares the current property.
                 @returns {Classical.Reflection.Type} The type that declares the current property.
                */
                get: function () {
                    return this._declaringType;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Property.prototype, "isStatic", {
                //#endregion declaringType
                //#region isStatic
                /**
                 Returns true if the construct is static; False otherwise.
                 @returns {boolean} True if the construct is static; False otherwise.
                */
                get: function () {
                    return this._isStatic;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Property.prototype, "isPublic", {
                //#endregion isStatic
                //#region isPublic
                /**
                 Returns true if the construct is declared public; False otherwise.
                 @returns {boolean} True if the construct is construct is declared public; False otherwise.
                */
                get: function () {
                    return !this.isPrivate && !this.isProtected;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Property.prototype, "isProtected", {
                //#endregion isPublic
                //#region isProtected
                /**
                 Returns true if the construct is declared protected; False otherwise.
                 @returns {boolean} True if the construct is construct is declared protected; False otherwise.
                 @remarks Since in JavaScript, there is not a notion of protected, we introduced a naming convention to decide if it is protected. If the name of starts with '$' it is deemed protected.
                */
                get: function () {
                    return this.name.indexOf('$') === 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Property.prototype, "isPrivate", {
                //#endregion isProtected
                //#region isPrivate
                /**
                 Returns true if the construct is declared private; False otherwise.
                 @returns {boolean} True if the construct is construct is declared private; False otherwise.
                 @remarks Since in JavaScript, there is not a notion of private, we introduced a naming convention to decide if it is private. If the name of starts with '_' it is deemed private.
                */
                get: function () {
                    return this.name.indexOf('_') === 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Property.prototype, "canWrite", {
                //#endregion isPrivate
                //#region canWrite
                /**
                 Gets a value indicating whether the property can be written to.
                 @returns {boolean} True if the property can be written to; false otherwise.
                */
                get: function () {
                    return this._canWrite;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Property.prototype, "canRead", {
                //#endregion canWrite
                //#region canRead
                /**
                 Gets a value indicating whether the property can be read.
                 @returns {boolean} True if the property can be read; false otherwise.
                */
                get: function () {
                    return this._canRead;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Property.prototype, "enumerable", {
                //#endregion canRead
                //#region enumerable
                /**
                 Gets a value indicating whether the property is enumerable.
                 @returns {boolean} True if the property is enumerable; false otherwise.
                */
                get: function () {
                    return !!(this._propertyDescriptor && this._propertyDescriptor.enumerable);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Property.prototype, "configurable", {
                //#endregion enumerable
                //#region configurable
                /**
                 Gets a value indicating whether the property is configurable.
                 @returns {boolean} True if the property is configurable; false otherwise.
                */
                get: function () {
                    return !!(this._propertyDescriptor && this._propertyDescriptor.configurable);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Property.prototype, "isMethod", {
                //#endregion configurable
                //#region isMethod
                /**
                 Gets a value indicating whether the property is a method.
                 @returns {boolean} True if the property is a method, false otherwise.
                 @remarks Since functions in JavaScript are first class objects, they can be treated like properties.
                 @seealso Classical.Reflection.Method
                */
                get: function () {
                    return this._isMethod;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Property.prototype, "isField", {
                //#endregion isMethod
                //#region isField
                /**
                 Gets a value indicating whether the property is a field.
                 @returns {boolean} True if the property is a field, false otherwise.
                 @seealso Classical.Reflection.Field
                */
                get: function () {
                    return this._isField;
                },
                enumerable: true,
                configurable: true
            });
            //#endregion Constructors
            //#region Methods
            //#region getValue
            /**
             Returns the property value of a specified object.
             @param instance {any} The instance whose property value will be returned.
             @returns The property value of a specified object.
            */
            Property.prototype.getValue = function (instance) {
                Classical.Assert.isDefined(instance);
                if (!this.canRead)
                    throw new Error('The property cannot be read.');
                if (this.isStatic)
                    return this.declaringType.constructorFunction[this.name];
                var type = typeOf(instance.constructor);
                var property = type.getProperty(this.name);
                if (Classical.Utilities.isNullOrUndefined(property))
                    throw Classical.Utilities.format('The property does not exist on type {0}.', type.name);
                var instanceType = instance.getType();
                if (instanceType && instanceType.constructorFunction !== instance.constructor) {
                    var prototype = instanceType.prototype;
                    while (prototype) {
                        if (instanceType.constructorFunction === prototype.constructor) {
                            return prototype[this.name];
                        }
                        var prototypeType = prototype.getType();
                        if (prototypeType)
                            prototype = prototypeType.prototype;
                        else
                            prototype = undefined;
                    }
                }
                return instance[this.name];
            };
            //#endregion getValue
            //#region setValue
            /**
             Sets the property value of a specified object.
             @param instance {any} The instance whose property will be set.
             @param value {any} The value that the property will be set to.
            */
            Property.prototype.setValue = function (instance, value) {
                Classical.Assert.isDefined(instance);
                if (this.isStatic) {
                    this.declaringType.constructorFunction[this.name] = value;
                    return;
                }
                var type = typeOf(instance.constructor);
                var property = type.getProperty(this.name);
                if (Classical.Utilities.isNullOrUndefined(property))
                    throw Classical.Utilities.format('The property does not exist on type {0}.', type.name);
                else if (!this.canWrite)
                    throw 'The property cannot be written to.';
                instance[this.name] = value;
            };
            //#endregion setValue
            //#endregion Methods
            //#region Utilities
            //#region getNewDescriptor
            Property.prototype.getNewDescriptor = function (descriptor) {
                if (!descriptor)
                    return descriptor;
                // Need this method because we can't keep a reference to the actual PropertyDescriptor if we want to update it with Aspects.
                if (descriptor.get || descriptor.set)
                    return { configurable: descriptor.configurable, enumerable: descriptor.enumerable, get: descriptor.get, set: descriptor.set };
                else
                    return { configurable: descriptor.configurable, enumerable: descriptor.enumerable, writable: descriptor.writable, value: descriptor.value };
            };
            //#endregion getNewDescriptor
            //#endregion Utilities
            //#region Base Class Overrides
            Property.prototype.toString = function () {
                return this.name;
            };
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
            Property.exists = function (instance, selector) {
                Classical.Assert.isDefined(instance);
                Classical.Assert.isDefined(selector);
                var propertyName = Classical.Expression.getProperty(selector);
                if (instance.getType) {
                    var instanceType = instance.getType();
                    var property = instanceType.getProperty(propertyName);
                    if (property)
                        return true;
                }
                return false;
            };
            return Property;
        })(LanguageConstruct);
        Reflection.Property = Property;
        //#endregion Property
        //#region Field
        /**
         A description of the metadata associated within a field of a class.
         @extends Classical.Reflection.Property
        */
        var Field = (function (_super) {
            __extends(Field, _super);
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
            function Field(password, name, declaringType, isStatic) {
                _super.call(this, password, name, declaringType, null, true, true, false, true, isStatic);
            }
            Object.defineProperty(Field.prototype, "isPublic", {
                //#region Properties
                //#region isPublic
                /**
                 Returns true if the construct is declared public; False otherwise.
                 @returns {boolean} True if the construct is construct is declared public; False otherwise.
                */
                get: function () {
                    return !this.isPrivate && !this.isProtected;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Field.prototype, "isProtected", {
                //#endregion isPublic
                //#region isProtected
                /**
                 Returns true if the construct is declared protected; False otherwise.
                 @returns {boolean} True if the construct is construct is declared protected; False otherwise.
                 @remarks Since in JavaScript, there is not a notion of protected, we introduced a naming convention to decide if it is protected. If the name of starts with '$' it is deemed protected.
                */
                get: function () {
                    return this.name.indexOf('$') === 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Field.prototype, "isPrivate", {
                //#endregion isProtected
                //#region isPrivate
                /**
                 Returns true if the construct is declared private; False otherwise.
                 @returns {boolean} True if the construct is construct is declared private; False otherwise.
                 @remarks Since in JavaScript, there is not a notion of private, we introduced a naming convention to decide if it is private. If the name of starts with '_' it is deemed private.
                */
                get: function () {
                    return this.name.indexOf('_') === 0;
                },
                enumerable: true,
                configurable: true
            });
            //#endregion Constructors
            //#region Methods
            //#region getValue
            /**
             Returns the field value of a specified object.
             @param instance {any} The instance whose field value will be returned.
             @returns The field value of a specified object.
            */
            Field.prototype.getValue = function (instance) {
                Classical.Assert.isDefined(instance);
                if (this.isStatic)
                    return this.declaringType.constructorFunction[this.name];
                var type = typeOf(instance.constructor);
                var property = type.getProperty(this.name);
                if (Classical.Utilities.isNullOrUndefined(property))
                    throw Classical.Utilities.format('The property does not exist on type {0}.', type.name);
                else if (!property.canRead)
                    throw 'The property cannot be read.';
                var instanceType = instance.getType();
                if (instanceType && instanceType.constructorFunction !== instance.constructor) {
                    var prototype = instanceType.prototype;
                    while (prototype) {
                        if (instanceType.constructorFunction === prototype.constructor) {
                            return prototype[this.name];
                        }
                        var prototypeType = prototype.getType();
                        if (prototypeType)
                            prototype = prototypeType.prototype;
                        else
                            prototype = undefined;
                    }
                }
                return instance[this.name];
            };
            //#endregion getValue
            //#region setValue
            /**
             Sets the field value of a specified object.
             @param instance {any} The instance whose field will be set.
             @param value {any} The value that the field will be set to.
            */
            Field.prototype.setValue = function (instance, value) {
                Classical.Assert.isDefined(instance);
                if (this.isStatic) {
                    this.declaringType.constructorFunction[this.name] = value;
                    return;
                }
                var type = typeOf(instance.constructor);
                var property = type.getProperty(this.name);
                if (Classical.Utilities.isNullOrUndefined(property))
                    throw Classical.Utilities.format('The property does not exist on type {0}.', type.name);
                else if (!property.canWrite)
                    throw 'The property cannot be written to.';
                instance[this.name] = value;
            };
            return Field;
        })(Property);
        Reflection.Field = Field;
        //#endregion Field
        //#region Variable
        /**
         A description of the metadata associated within a variable of a module.
         @extends Classical.Reflection.Property
        */
        var Variable = (function (_super) {
            __extends(Variable, _super);
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
            function Variable(password, name, mod, value) {
                Classical.Assert.isDefined(mod);
                _super.call(this, password, name, null, null, true, true, false, false, true);
                this._module = mod;
                this._value = value;
            }
            Object.defineProperty(Variable.prototype, "declaringModule", {
                //#endregion Fields
                //#region Properties
                //#region declaringModule
                /**
                 Gets the module that declares the current variable.
                 @returns {Classical.Reflection.Module} The module that declares the current variable.
                 @seealso Classical.Reflection.Module
                */
                get: function () {
                    return this._module;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Variable.prototype, "variableValue", {
                //#endregion declaringModule
                //#region variableValue
                /**
                 Gets the underlying value of the current variable.
                 @returns {any} The underlying value of the current variable.
                */
                get: function () {
                    return this._value;
                },
                enumerable: true,
                configurable: true
            });
            return Variable;
        })(Property);
        Reflection.Variable = Variable;
        //#endregion Variable
        //#region Method
        /**
         A description of the metadata associated within a method of a class.
         @extends Classical.Reflection.Property
         @remarks
            In JavaScript methods are properties of type function.
            Therefore a Method is a Property.
        */
        var Method = (function (_super) {
            __extends(Method, _super);
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
            function Method(password, name, declaringType, propertyDescriptor, canWrite, underlyingFunction, isStatic) {
                _super.call(this, password, name, declaringType, propertyDescriptor, true, canWrite, true, false, isStatic);
                this._underlyingFunction = underlyingFunction;
                this._initialFunction = underlyingFunction;
                this._methodAspects = new Array();
            }
            Object.defineProperty(Method.prototype, "functionValue", {
                //#endregion Fields
                //#region Properties
                //#region functionValue
                /**
                 Gets the underlying function value of the method.
                 @returns {IFunction} The underlying function value of the method.
                */
                get: function () {
                    return this._underlyingFunction;
                },
                enumerable: true,
                configurable: true
            });
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
            Method.prototype.invoke = function (instance) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                if (this.isStatic)
                    return this.declaringType.constructorFunction[this.name].apply(null, args);
                Classical.Assert.isDefined(instance);
                var type = typeOf(instance.constructor);
                var method = type.getMethod(this.name);
                if (Classical.Utilities.isNullOrUndefined(method))
                    throw Classical.Utilities.format('The method does not exist on type {0}.', type.name);
                return instance[this.name].apply(instance, args);
            };
            //#endregion invoke
            //#region getParameters
            /**
             Gets the parameters of the current method.
             @returns {IQueryable<Classical.Reflection.Parameter>} The parameters of the current method.
            */
            Method.prototype.getParameters = function () {
                if (!this._parameters)
                    this._parameters = this._initializeParameters();
                return this._parameters.array().query();
            };
            //#endregion getParameters
            //#endregion Methods
            //#region Utilities
            //#region _initializeParameters
            Method.prototype._initializeParameters = function () {
                var initializedParameters = new Array();
                var parameterNames = Classical.Expression.getArguments(this._underlyingFunction);
                for (var i = 0; i < parameterNames.length; i++) {
                    var parameterName = parameterNames[i];
                    var parameter = new Parameter(constructorPassword, parameterName, i, this);
                    initializedParameters.add(parameter);
                }
                return initializedParameters;
            };
            return Method;
        })(Property);
        Reflection.Method = Method;
        //#endregion Method
        //#region Constructor
        /**
         A description of the metadata associated within a constructor of a class.
         @extends Classical.Reflection.Method
        */
        var Constructor = (function (_super) {
            __extends(Constructor, _super);
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
            function Constructor(password, declaringType, propertyDescriptor, underlyingFunction) {
                _super.call(this, constructorPassword, 'constructor', declaringType, propertyDescriptor, false, underlyingFunction, false);
            }
            Object.defineProperty(Constructor.prototype, "declaringModule", {
                //#region Properties
                //#region declaringModule
                /**
                 Gets the declaring module of the constructor function.
                 @returns {Classical.Reflection.Module} The declaring module of the constructor function.
                */
                get: function () {
                    return this.declaringType.declaringModule;
                },
                enumerable: true,
                configurable: true
            });
            return Constructor;
        })(Method);
        Reflection.Constructor = Constructor;
        //#endregion Constructor
        //#region Function
        /**
         A description of the metadata associated within a function of a module.
         @extends Classical.Reflection.Method
        */
        var Function = (function (_super) {
            __extends(Function, _super);
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
            function Function(password, name, canWrite, mod, underlyingFunction) {
                _super.call(this, password, name, null, null, canWrite, underlyingFunction, true);
                Classical.Assert.isDefined(mod);
                this._module = mod;
            }
            Object.defineProperty(Function.prototype, "declaringModule", {
                //#endregion Fields
                //#region Properties
                //#region declaringModule
                /**
                 Gets the declaring module of the constructor function.
                 @returns {Classical.Reflection.Module} The declaring module of the constructor function.
                */
                get: function () {
                    return this._module;
                },
                enumerable: true,
                configurable: true
            });
            return Function;
        })(Method);
        Reflection.Function = Function;
        //#endregion Function
        //#region Parameter
        /**
         A description of the metadata associated within a parameter of a function.
        */
        var Parameter = (function () {
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
            function Parameter(password, name, position, declaringMethod) {
                Classical.Assert.isTrue(password === constructorPassword, 'You do not have permission to create instances of this type.');
                Classical.Assert.isDefined(declaringMethod);
                this._name = name;
                this._position = position;
                this._declaringMethod = declaringMethod;
            }
            Object.defineProperty(Parameter.prototype, "name", {
                //#endregion Fields
                //#region Properties
                //#region name
                /**
                 Gets the name of the parameter.
                 @returns {string} The name of the parameter.
                */
                get: function () {
                    return this._name;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Parameter.prototype, "position", {
                //#endregion name
                //#region position
                /**
                 Gets the zero-based position of the parameter in the true parameter list.
                 @return {number} The zero-based position of the parameter in the true parameter list.
                */
                get: function () {
                    return this._position;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Parameter.prototype, "declaringMethod", {
                //#endregion position
                //#region declaringMethod
                /**
                 Gets the declaring method of the parameter.
                 @returns {number} The declaring method of the parameter.
                */
                get: function () {
                    return this._declaringMethod;
                },
                enumerable: true,
                configurable: true
            });
            //#endregion Constructors
            //#region Base Class Overrides
            /**
             Gets the string representation of the parameter.
             @returns {string} The string representation of the parameter.
            */
            Parameter.prototype.toString = function () {
                return this.name;
            };
            return Parameter;
        })();
        Reflection.Parameter = Parameter;
        //#endregion Parameter
        //#region Initialization
        //The global dictionaries of modules and types for runtime caching.
        var modules = new c.Dictionary(5000);
        var types = new c.Dictionary(5000);
        //A password used to manage private constructors
        var constructorPassword = Math.random();
        var nullType = new Null(constructorPassword, global.Null);
        var undefinedType = new Undefined(constructorPassword, global.Undefined);
        var allModules;
        var allTypes;
        //#endregion Initialization
        //#region getModules
        /**
        * Gets all Modules currently loaded.
        * @returns {IQueryable<Classical.Reflection.Module>} All Modules currently loaded.
        */
        function getModules() {
            if (allModules)
                return allModules;
            var globalModule = Module.global;
            var loadedModules = getModulesFromModule(globalModule);
            allModules = loadedModules.query();
            return allModules;
        }
        Reflection.getModules = getModules;
        //#endregion getModules
        //#region getModulesFromModule
        /**
         Gets the modules belonging to the specified Module.
         @param mod {Classical.Reflection.Module} The module to get the modules from.
         @returns {IEnumerable<Classical.Reflection.Module>} The modules belonging to the specified Module.
        */
        function getModulesFromModule(mod) {
            var modules = new Array();
            modules.add(mod);
            mod.getModules().forEach(function (m) {
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
        function getTypes() {
            if (allTypes)
                return allTypes;
            var globalModule = Module.global;
            var loadedTypes = getTypesFromModule(globalModule);
            allTypes = loadedTypes.query();
            return allTypes;
        }
        Reflection.getTypes = getTypes;
        /**
         Gets all types from the specified Module.
         @param mod {Classical.Reflection.Module} The module to get all types from.
         @returns {IEnumerable<Classical.Reflection.Type>} All types from the specified Module.
        */
        function getTypesFromModule(mod) {
            var types = new Array();
            types.addRange(mod.getTypes());
            mod.getModules().forEach(function (m) {
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
        function findField(instance, selector) {
            Classical.Assert.isDefined(instance);
            Classical.Assert.isDefined(selector);
            var fieldName = Classical.Expression.getProperty(selector);
            if (instance.getType) {
                var instanceType = instance.getType();
                var field = instanceType.getFieldOf(instance, fieldName, Modifier.Instance, Modifier.Public, Modifier.Private, Modifier.Protected);
                if (field)
                    return field;
            }
            var t = typeOf(instance.constructor);
            var field = t.getFieldOf(instance, fieldName, Modifier.Instance, Modifier.Public, Modifier.Private, Modifier.Protected);
            return field;
        }
        Reflection.findField = findField;
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
        function findProperty(instance, selector) {
            Classical.Assert.isDefined(instance);
            Classical.Assert.isDefined(selector);
            var propertyName = Classical.Expression.getProperty(selector);
            if (instance.getType) {
                var instanceType = instance.getType();
                var property = instanceType.getProperty(propertyName, Modifier.Instance, Modifier.Public, Modifier.Private, Modifier.Protected);
                if (property)
                    return property;
            }
            var t = typeOf(instance.constructor);
            var properties = t._getInstanceProperties();
            var property = properties.singleOrDefault(function (p) { return p.name === propertyName; });
            if (property)
                return property;
            var baseType = t.base;
            while (baseType) {
                properties = baseType._getInstanceProperties();
                property = properties.singleOrDefault(function (p) { return p.name === propertyName; });
                if (property)
                    return property;
                baseType = baseType.base;
            }
            if (!property) {
                var objectInstance = instance;
                while (objectInstance) {
                    var propertyDescriptor = Object.getOwnPropertyDescriptor(instance, propertyName);
                    var foundProperty;
                    if (propertyDescriptor) {
                        var getter = propertyDescriptor.get;
                        var setter = propertyDescriptor.set;
                        if (Classical.Utilities.isDefined(getter) || Classical.Utilities.isDefined(setter))
                            foundProperty = new Property(constructorPassword, propertyName, typeOf(instance.constructor), propertyDescriptor, Classical.Utilities.isDefined(getter), Classical.Utilities.isDefined(setter), false, false, false);
                        else if (Classical.Utilities.isFunction(propertyDescriptor.value))
                            foundProperty = new Method(constructorPassword, propertyName, typeOf(instance.constructor), propertyDescriptor, propertyDescriptor.writable, propertyDescriptor.value, false);
                        else if (!Classical.Utilities.isDefined(getter) && !Classical.Utilities.isDefined(setter))
                            foundProperty = new Field(constructorPassword, propertyName, typeOf(instance.constructor), true);
                    }
                    if (foundProperty)
                        return foundProperty;
                    objectInstance = Object.getPrototypeOf(objectInstance);
                }
            }
            return null;
        }
        Reflection.findProperty = findProperty;
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
        function findMethod(instance, selector) {
            var property = findProperty(instance, selector);
            if (property && property.isMethod)
                return property;
            return null;
        }
        Reflection.findMethod = findMethod;
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
        function findVariable(instance, selector) {
            Classical.Assert.isDefined(instance);
            Classical.Assert.isDefined(selector);
            var variableName = Classical.Expression.getProperty(selector);
            var foundModule = getModules().firstOrDefault(function (m) { return m.scope === instance; });
            if (foundModule) {
                var foundVariable = foundModule.getVariable(variableName);
                if (foundVariable)
                    return foundVariable;
                var moduleScope = foundModule.scope;
                var initializedVariables = new Array();
                var scopeProperties = Object.getOwnPropertyNames(moduleScope).query().where(function (p) { return p !== '_hashCode'; }).array();
                for (var i = 0; i < scopeProperties.length; i++) {
                    var propertyName = scopeProperties[i];
                    if (propertyName !== variableName)
                        continue;
                    var property = moduleScope[propertyName];
                    if (!u.isFunction(property) && !Classical.Reflection.Module._isModule(property)) {
                        var variable = new Variable(constructorPassword, propertyName, this, property);
                        initializedVariables.add(variable);
                    }
                }
                return initializedVariables.query().singleOrDefault(function (v) { return v.name === variableName; });
            }
            return null;
        }
        Reflection.findVariable = findVariable;
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
        function findFunction(instance, selector) {
            Classical.Assert.isDefined(instance);
            Classical.Assert.isDefined(selector);
            var functionName = Classical.Expression.getProperty(selector);
            var foundModule = getModules().firstOrDefault(function (m) { return m.scope === instance; });
            if (foundModule) {
                var foundFunction = foundModule.getFunction(functionName);
                if (foundFunction)
                    return foundFunction;
                var moduleScope = foundModule.scope;
                var initializedFunctions = new Array();
                var scopeProperties = Object.getOwnPropertyNames(moduleScope).query().where(function (p) { return p !== '_hashCode'; }).array();
                for (var i = 0; i < scopeProperties.length; i++) {
                    var propertyName = scopeProperties[i];
                    if (propertyName !== functionName)
                        continue;
                    var property = moduleScope[propertyName];
                    if (!Classical.Reflection.Module._isType(property) && u.isFunction(property)) {
                        var func = new Function(constructorPassword, propertyName, true, this, property);
                        initializedFunctions.add(func);
                    }
                }
                return initializedFunctions.query().singleOrDefault(function (v) { return v.name === functionName; });
            }
            return null;
        }
        Reflection.findFunction = findFunction;
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
        function findStaticField(t, selector) {
            Classical.Assert.isDefined(t);
            Classical.Assert.isDefined(selector);
            var fieldName = Classical.Expression.getProperty(selector);
            var field = null;
            Object.getOwnPropertyNames(t).forEach(function (property) {
                if (property === fieldName) {
                    var propertyDescriptor = Object.getOwnPropertyDescriptor(t, property);
                    var getter = propertyDescriptor.get;
                    var setter = propertyDescriptor.set;
                    if (!Classical.Utilities.isDefined(getter) && !Classical.Utilities.isDefined(setter) && !Classical.Utilities.isFunction(propertyDescriptor.value))
                        field = new Field(constructorPassword, property, typeOf(t), true);
                }
            });
            return field;
        }
        Reflection.findStaticField = findStaticField;
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
        function findStaticProperty(t, selector) {
            Classical.Assert.isDefined(t);
            Classical.Assert.isDefined(selector);
            var propertyName = Classical.Expression.getProperty(selector);
            var functionType = typeOf(t);
            var property = functionType.getProperty(propertyName, Modifier.Static, Modifier.Public, Modifier.Private, Modifier.Protected);
            if (property)
                return property;
            var staticProperties = functionType._getStaticProperties().query();
            property = staticProperties.where(function (p) { return p.name === propertyName; }).singleOrDefault();
            return property;
        }
        Reflection.findStaticProperty = findStaticProperty;
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
        function findStaticMethod(t, selector) {
            var property = findStaticProperty(t, selector);
            if (property && property.isMethod)
                return property;
            return null;
        }
        Reflection.findStaticMethod = findStaticMethod;
    })(Reflection = Classical.Reflection || (Classical.Reflection = {}));
})(Classical || (Classical = {}));
//# sourceMappingURL=reflection.js.map