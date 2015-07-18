
/** An assortment of useful functions for basic type checking and data manipulation. */
module Classical.Utilities {

    //#region Variables

    //The toString function from the base object. 
    //It's taken from the base object to avoid overrides.
    var toString: Function = Object.prototype.toString;

    //The Array.slice function.
    var slice: Function = Array.prototype.slice;

    //#endregion Variables

    //#region areEqual

    //Returns true if two objects are equal; false otherwise.
    export function areEqual (first: any, second: any): boolean {
        if (isDefined(first) && isDefined(first.equals))
            return <boolean>first.equals(second);
        if (isDefined(second) && isDefined(second.equals))
            return <boolean>second.equals(first);

        return first === second;
    }

    //#endregion areEqual

    //#region argumentsToArray

    //Converts the arguments of a function to an array.
    export function argumentsToArray<T>(args: IArguments): Array<T> {
        return <Array<T>>slice.call(args, 0);
    }

    //#endregion argumentsToArray

    //#region coalesce

    //Returns the value if it is not null or undefined; returns the alternative otherwise.
    export function coalesce<T>(value: T, alternative: T): T {
        return isNullOrUndefined(value) ? alternative : value;
    }

    //#endregion coalesce

    //#region extend

    //Extends the destination with the source.
    //The destination is returned for chaining.
    export function extend(destination: any, source: any): any {
        Assert.isDefined(destination);
        Assert.isDefined(source);
            
        for (var property in source) {
            destination[property] = source[property];
        }
        return destination;
    }

    //#endregion extend

    //#region format

    //A template based string formating.
    //Util.format(Here's the {0} for {1}, 'template', 'formatting');
    export function format(template: string, ...inputs: any[]): string {
        Assert.isDefined(template, 'The template is not defined.');
        var result = '',
            current: string,
            lookAhead: string,
            startIndex = 0,
            endIndex: number,
            inTemplate = false,
            length = template.length,
            maxIndex = length - 1,
            inputIndex: number,
            inputValue: any;

        for (var i = 0, length = template.length; i < length; i++) {
            current = template[i];
            if (!inTemplate && current === '{') {
                lookAhead = i <= maxIndex ? template[i + 1] : '';
                if (lookAhead === '{') {
                    endIndex = i;
                    result += template.substr(startIndex, endIndex - startIndex + 1);
                    startIndex = i + 2;
                    i++;
                } else {
                    inTemplate = true;
                    endIndex = i - 1;
                    result += template.substr(startIndex, endIndex - startIndex + 1);
                    startIndex = i + 1;
                }
            } else if (inTemplate && current === '}') {
                inTemplate = false;
                endIndex = i - 1;

                inputIndex = +template.substr(startIndex, endIndex - startIndex + 1);
                Assert.isFalse(isNaN(inputIndex), 'The template is not formatted correctly.');
                Assert.isFalse(inputIndex > maxIndex, 'The template contains an index that is out of bounds.');
                    
                inputValue = inputs[inputIndex];
                result += isDefined(inputValue) ? inputValue.toString() : '';
                startIndex = i + 1;
            } else if (!inTemplate && current === '}') {
                lookAhead = i <= maxIndex ? template[i + 1] : '';
                Assert.isTrue(lookAhead === '}', 'The template contains a closing bracket without an opening bracket.');
                    
                endIndex = i;
                result += template.substr(startIndex, endIndex - startIndex + 1);
                startIndex = i + 2;
                i++;
            }
        }

        Assert.isFalse(inTemplate, 'The template contains an opening bracket without a closing bracket.');

        if (!inTemplate && startIndex <= maxIndex) { 
            endIndex = maxIndex;
            result += template.substr(startIndex, endIndex - startIndex + 1);
        }

        return result;
    }

    //#endregion format

    //#region titleCase

    //Returns a string with the first letter of each word capitalized unless it is explicitly excluded.
    //Excluded words are ignored if they are the first word of the title.
    export function titleCase(title: string, ...exclude: Array<string>) {
        if (!title) return title;
        title = title.trim();

        var hasPeriod = title[title.length - 1] === '.';
        if (hasPeriod)
            title = title.substr(0, title.length - 1);

        var words = title.split(' ').query()
                .where(w => w && w.length > 0),
            excludeQuery = exclude.query(),
            excludedWords = words
                .dictionary(w => w,
                w => excludeQuery
                    .hasAny(ex => ex === w));

        title = words
            .aggregate((a, b) => a + (
                a === '' ? properCaseWord(b) : (' ' +
                (excludedWords.getValue(b) ? b : properCaseWord(b)))
                ), '');

        if (hasPeriod)
            title += '.';

        return title;
    }

    function properCaseWord(word: string) {
        return word.charAt(0).toUpperCase() +
            word.substring(1).toLowerCase();
    }

    //#endregion titleCase

    //#region sentenceCase

    //Returns a string with the first word of the sentence capitalized.
    //The sentence is also guaranteed to end in a period. Empty sentences are ignored.
    export function sentenceCase(sentence: string, ...ignore: Array<string>) {
        if (!sentence) return sentence;
        sentence = sentence.trim();

        var hasPeriod = sentence[sentence.length - 1] === '.';
        if (hasPeriod)
            sentence = sentence.substr(0, sentence.length - 1);
        
        var words = sentence.split(' ').query()
                .where(w => w && w.length > 0),
            excludeQuery = ignore.query(),
            excludedWords = words
                .dictionary(w => w,
                w => excludeQuery
                    .hasAny(ex => ex === w));

        sentence = words
            .aggregate((a, b) => a + (
                a === '' ? properCaseWord(b) :
                (' ' + (excludedWords.getValue(b) ? b : b.toLowerCase()))
            ), '');

        return sentence + '.';
    }

    //#endregion sentenceCase

    //#region getPropertyNames

    //Returns the properties of the object and all of its prototypes
    export function getPropertyNames(value): Array<string> {
        if (isNullOrUndefined(value))
            return [];
        if (!isObject(value))
            value = value.constructor.prototype;

        var properties = [];
        while (value) {
            properties.addRange(Object.getOwnPropertyNames(value));
            value = Object.getPrototypeOf(value);
        }

        return properties.query().distinct().array();
    }

    //#endregion getPropertyNames

    //#region isNull

    //Returns True if a value is null; False otherwise.
    export function isNull(value: any): boolean {
        return value === null;
    }

    //#endregion isNull

    //#region isUndefined

    //Returns True if a value is undefined; False otherwise.
    export function isUndefined(value: any): boolean {
        return value === undefined;
    }

    //#endregion isUndefined

    //#region isNullOrUndefined

    //Returns True if a value is null or undefined; False otherwise.
    export function isNullOrUndefined(value: any): boolean {
        return value == null;
    }

    //#endregion isNullOrUndefined

    //#region isDefined

    //Returns True if a value is not null and not undefined; False otherwise.
    export function isDefined(value: any): boolean {
        return !isNullOrUndefined(value);
    }

    //#endregion isDefined

    //#region isNumber

    //Returns True if the value is a number or Number Object; False otherwise.
    export function isNumber(value: any): boolean {
        return toString.call(value) === '[object Number]';
    }

    //#endregion isNumber

    //#region isNaN

    //Returns True if the value is NaN; False otherwise.
    export function isNaN(value: any): boolean {
        return isNumber(value) && window['isNaN'](value);
    }

    //#endregion isNaN

    //#region isInfinity

    //Returns True if the value is Infinity or -Infinity, or the object equivalents; False otherwise.
    export function isInfinity(value: any): boolean {
        return isNumber(value) && !Utilities.isNaN(value) && !isFinite(value);
    }

    //#endregion isInfinity

    //#region isInteger

    //Returns True if the value is a whole number, positive or negative. The following values are not considered integers: null, undefined, NaN, Infinity, -Infinity.
    export function isInteger(value: any) {
        return isDefined(value) &&
            isNumber(value) &&
            value % 1 === 0;
    }

    //#endregion isInteger

    //#region isString

    //Returns True if the value is a string or String Object; False otherwise.
    export function isString(value: any): boolean {
        return toString.call(value) === '[object String]';
    }

    //#endregion isString

    //#region isBoolean

    //Returns True if the value is a boolean or Boolean Object; False otherwise.
    export function isBoolean(value: any): boolean {
        return toString.call(value) === '[object Boolean]';
    }

    //#endregion isBoolean

    //#region isTrue

    //Returns True if the value is true; False otherwise.
    export function isTrue(value: any): boolean {
        if (!isBoolean(value))
            return false;

        return value == true;
    }

    //#endregion isTrue

    //#region isTruthy

    //Returns True if the value is truthy; False otherwise.
    export function isTruthy(value: any): boolean {
        return value ? true : false;
    }

    //#endregion isTruthy

    //#region isFalse

    //Returns True if the value is false; False otherwise.
    export function isFalse(value: any): boolean {
        if (!isBoolean(value))
            return false;

        return value == false;
    }

    //#endregion isFalse

    //#region isFalsy

    //Returns True if the value is truthy; False otherwise.
    export function isFalsy(value: any): boolean {
        return value ? false : true;
    }

    //#endregion isFalsy

    //#region isObject

    //Returns True if the value is a non-null Object; False otherwise.
    export function isObject(value: any): boolean {
        return !isNull(value) && typeof (value) === 'object';
    }

    //#endregion isObject

    //#region isEmptyObject

    //Returns true if the value is an empty object; false otherwise.
    export function isEmptyObject(value: any): boolean {
        return isObject(value) &&
            objectToString.call(value) === objectToStringValue &&
            !hasAdditionalProperties(value);
    } 

    //Inspired by: http://stackoverflow.com/questions/8024149/is-it-possible-to-get-the-non-enumerable-inherited-property-names-of-an-object
    function hasAdditionalProperties(value: any): boolean {
        if (!objectProperties)
            objectProperties = getPropertyNames({});

        while (value !== Object.prototype) {
            var currentProperties = Object.getOwnPropertyNames(value);
            for (var i = 0, length = currentProperties.length; i < length; i++) {
                var property = currentProperties[i];
                if (objectProperties.indexOf(property) < 0)
                    return true;
            }

            value = Object.getPrototypeOf(value);
        }

        return false;
    }

    var objectToString = {}.toString;
    var objectToStringValue = '[object Object]';
    var objectProperties: Array<string> = null;

    //#endregion isEmptyObject

    //#region isArray

    //Returns True if the value is an array; False otherwise.
    export function isArray(value: any): boolean {
        return toString.call(value) === '[object Array]';
    }

    //#endregion isArray

    //#region isFunction

    //Returns True if the value is a function; False otherwise.
    export function isFunction(value: any): boolean {
        return typeof(value) === 'function';
    }

    //#endregion isFunction
}