
//#region IHashable

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

//#endregion IHashable

//#region IObject

/**
 IObject defines what it means to be a classical object.
 @remarks 
    The core JavaScript Object implements IObject.
    All Objects implement IHashable so they can be used as keys in Dictionaries.
 @seealso IHashable, Classical.Collections.Dictionary
*/
interface IObject extends IHashable {

    //Returns True if the object is of the specified type.
    //type, in this context, is the constructor of an object.
    is(type: Function): boolean;

    //Casts the object to the specified type.
    as<TObject>(): TObject;

    //Returns the Type of anobject.
    getType(): Classical.Reflection.Type;

    //This is not defined by us: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/watch
    watch(property: string, handler: (property: string, oldValue: any, newValue: any) => void): void;
}

//#endregion IObject

//#region Object

/**
 The core JavaScript object.
 @remarks 
    Object implements IObject.
    All Objects implement IHashable so they can be used as keys in Dictionaries.
 @seealso IObject, IHashable, Classical.Collections.Dictionary
*/
interface Object extends IObject { }

//#endregion Object

//#region String

/**
 The core JavaScript string.
 @remarks 
    String implements IObject.
    All Objects implement IHashable so strings can be used as keys in Dictionaries.
 @seealso IObject, IHashable, Classical.Collections.Dictionary
*/
interface String extends IObject { }

//#endregion String

//#region Number

/**
 The core JavaScript number.
 @remarks 
    Number implements IObject.
    All Objects implement IHashable so numbers can be used as keys in Dictionaries.
 @seealso IObject, IHashable, Classical.Collections.Dictionary
*/
interface Number extends IObject { }

//#endregion Number

//#region Boolean

/**
 The core JavaScript boolean.
 @remarks 
    Boolean implements IObject.
    All Objects implement IHashable so booleans can be used as keys in Dictionaries.
 @seealso IObject, IHashable, Classical.Collections.Dictionary
*/
interface Boolean extends IObject { }

//#endregion Boolean

/** The core module of Classical.js */
module Classical { }