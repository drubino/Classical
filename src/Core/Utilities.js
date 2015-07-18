/** An assortment of useful functions for basic type checking and data manipulation. */
var Classical;
(function (Classical) {
    var Utilities;
    (function (Utilities) {
        //#region Variables
        //The toString function from the base object. 
        //It's taken from the base object to avoid overrides.
        var toString = Object.prototype.toString;
        //The Array.slice function.
        var slice = Array.prototype.slice;
        //#endregion Variables
        //#region areEqual
        //Returns true if two objects are equal; false otherwise.
        function areEqual(first, second) {
            if (isDefined(first) && isDefined(first.equals))
                return first.equals(second);
            if (isDefined(second) && isDefined(second.equals))
                return second.equals(first);
            return first === second;
        }
        Utilities.areEqual = areEqual;
        //#endregion areEqual
        //#region argumentsToArray
        //Converts the arguments of a function to an array.
        function argumentsToArray(args) {
            return slice.call(args, 0);
        }
        Utilities.argumentsToArray = argumentsToArray;
        //#endregion argumentsToArray
        //#region coalesce
        //Returns the value if it is not null or undefined; returns the alternative otherwise.
        function coalesce(value, alternative) {
            return isNullOrUndefined(value) ? alternative : value;
        }
        Utilities.coalesce = coalesce;
        //#endregion coalesce
        //#region extend
        //Extends the destination with the source.
        //The destination is returned for chaining.
        function extend(destination, source) {
            Classical.Assert.isDefined(destination);
            Classical.Assert.isDefined(source);
            for (var property in source) {
                destination[property] = source[property];
            }
            return destination;
        }
        Utilities.extend = extend;
        //#endregion extend
        //#region format
        //A template based string formating.
        //Util.format(Here's the {0} for {1}, 'template', 'formatting');
        function format(template) {
            var inputs = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                inputs[_i - 1] = arguments[_i];
            }
            Classical.Assert.isDefined(template, 'The template is not defined.');
            var result = '', current, lookAhead, startIndex = 0, endIndex, inTemplate = false, length = template.length, maxIndex = length - 1, inputIndex, inputValue;
            for (var i = 0, length = template.length; i < length; i++) {
                current = template[i];
                if (!inTemplate && current === '{') {
                    lookAhead = i <= maxIndex ? template[i + 1] : '';
                    if (lookAhead === '{') {
                        endIndex = i;
                        result += template.substr(startIndex, endIndex - startIndex + 1);
                        startIndex = i + 2;
                        i++;
                    }
                    else {
                        inTemplate = true;
                        endIndex = i - 1;
                        result += template.substr(startIndex, endIndex - startIndex + 1);
                        startIndex = i + 1;
                    }
                }
                else if (inTemplate && current === '}') {
                    inTemplate = false;
                    endIndex = i - 1;
                    inputIndex = +template.substr(startIndex, endIndex - startIndex + 1);
                    Classical.Assert.isFalse(isNaN(inputIndex), 'The template is not formatted correctly.');
                    Classical.Assert.isFalse(inputIndex > maxIndex, 'The template contains an index that is out of bounds.');
                    inputValue = inputs[inputIndex];
                    result += isDefined(inputValue) ? inputValue.toString() : '';
                    startIndex = i + 1;
                }
                else if (!inTemplate && current === '}') {
                    lookAhead = i <= maxIndex ? template[i + 1] : '';
                    Classical.Assert.isTrue(lookAhead === '}', 'The template contains a closing bracket without an opening bracket.');
                    endIndex = i;
                    result += template.substr(startIndex, endIndex - startIndex + 1);
                    startIndex = i + 2;
                    i++;
                }
            }
            Classical.Assert.isFalse(inTemplate, 'The template contains an opening bracket without a closing bracket.');
            if (!inTemplate && startIndex <= maxIndex) {
                endIndex = maxIndex;
                result += template.substr(startIndex, endIndex - startIndex + 1);
            }
            return result;
        }
        Utilities.format = format;
        //#endregion format
        //#region titleCase
        //Returns a string with the first letter of each word capitalized unless it is explicitly excluded.
        //Excluded words are ignored if they are the first word of the title.
        function titleCase(title) {
            var exclude = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                exclude[_i - 1] = arguments[_i];
            }
            if (!title)
                return title;
            title = title.trim();
            var hasPeriod = title[title.length - 1] === '.';
            if (hasPeriod)
                title = title.substr(0, title.length - 1);
            var words = title.split(' ').query()
                .where(function (w) { return w && w.length > 0; }), excludeQuery = exclude.query(), excludedWords = words
                .dictionary(function (w) { return w; }, function (w) { return excludeQuery
                .hasAny(function (ex) { return ex === w; }); });
            title = words
                .aggregate(function (a, b) { return a + (a === '' ? properCaseWord(b) : (' ' +
                (excludedWords.getValue(b) ? b : properCaseWord(b)))); }, '');
            if (hasPeriod)
                title += '.';
            return title;
        }
        Utilities.titleCase = titleCase;
        function properCaseWord(word) {
            return word.charAt(0).toUpperCase() +
                word.substring(1).toLowerCase();
        }
        //#endregion titleCase
        //#region sentenceCase
        //Returns a string with the first word of the sentence capitalized.
        //The sentence is also guaranteed to end in a period. Empty sentences are ignored.
        function sentenceCase(sentence) {
            var ignore = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                ignore[_i - 1] = arguments[_i];
            }
            if (!sentence)
                return sentence;
            sentence = sentence.trim();
            var hasPeriod = sentence[sentence.length - 1] === '.';
            if (hasPeriod)
                sentence = sentence.substr(0, sentence.length - 1);
            var words = sentence.split(' ').query()
                .where(function (w) { return w && w.length > 0; }), excludeQuery = ignore.query(), excludedWords = words
                .dictionary(function (w) { return w; }, function (w) { return excludeQuery
                .hasAny(function (ex) { return ex === w; }); });
            sentence = words
                .aggregate(function (a, b) { return a + (a === '' ? properCaseWord(b) :
                (' ' + (excludedWords.getValue(b) ? b : b.toLowerCase()))); }, '');
            return sentence + '.';
        }
        Utilities.sentenceCase = sentenceCase;
        //#endregion sentenceCase
        //#region getPropertyNames
        //Returns the properties of the object and all of its prototypes
        function getPropertyNames(value) {
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
        Utilities.getPropertyNames = getPropertyNames;
        //#endregion getPropertyNames
        //#region isNull
        //Returns True if a value is null; False otherwise.
        function isNull(value) {
            return value === null;
        }
        Utilities.isNull = isNull;
        //#endregion isNull
        //#region isUndefined
        //Returns True if a value is undefined; False otherwise.
        function isUndefined(value) {
            return value === undefined;
        }
        Utilities.isUndefined = isUndefined;
        //#endregion isUndefined
        //#region isNullOrUndefined
        //Returns True if a value is null or undefined; False otherwise.
        function isNullOrUndefined(value) {
            return value == null;
        }
        Utilities.isNullOrUndefined = isNullOrUndefined;
        //#endregion isNullOrUndefined
        //#region isDefined
        //Returns True if a value is not null and not undefined; False otherwise.
        function isDefined(value) {
            return !isNullOrUndefined(value);
        }
        Utilities.isDefined = isDefined;
        //#endregion isDefined
        //#region isNumber
        //Returns True if the value is a number or Number Object; False otherwise.
        function isNumber(value) {
            return toString.call(value) === '[object Number]';
        }
        Utilities.isNumber = isNumber;
        //#endregion isNumber
        //#region isNaN
        //Returns True if the value is NaN; False otherwise.
        function isNaN(value) {
            return isNumber(value) && window['isNaN'](value);
        }
        Utilities.isNaN = isNaN;
        //#endregion isNaN
        //#region isInfinity
        //Returns True if the value is Infinity or -Infinity, or the object equivalents; False otherwise.
        function isInfinity(value) {
            return isNumber(value) && !Utilities.isNaN(value) && !isFinite(value);
        }
        Utilities.isInfinity = isInfinity;
        //#endregion isInfinity
        //#region isInteger
        //Returns True if the value is a whole number, positive or negative. The following values are not considered integers: null, undefined, NaN, Infinity, -Infinity.
        function isInteger(value) {
            return isDefined(value) &&
                isNumber(value) &&
                value % 1 === 0;
        }
        Utilities.isInteger = isInteger;
        //#endregion isInteger
        //#region isString
        //Returns True if the value is a string or String Object; False otherwise.
        function isString(value) {
            return toString.call(value) === '[object String]';
        }
        Utilities.isString = isString;
        //#endregion isString
        //#region isBoolean
        //Returns True if the value is a boolean or Boolean Object; False otherwise.
        function isBoolean(value) {
            return toString.call(value) === '[object Boolean]';
        }
        Utilities.isBoolean = isBoolean;
        //#endregion isBoolean
        //#region isTrue
        //Returns True if the value is true; False otherwise.
        function isTrue(value) {
            if (!isBoolean(value))
                return false;
            return value == true;
        }
        Utilities.isTrue = isTrue;
        //#endregion isTrue
        //#region isTruthy
        //Returns True if the value is truthy; False otherwise.
        function isTruthy(value) {
            return value ? true : false;
        }
        Utilities.isTruthy = isTruthy;
        //#endregion isTruthy
        //#region isFalse
        //Returns True if the value is false; False otherwise.
        function isFalse(value) {
            if (!isBoolean(value))
                return false;
            return value == false;
        }
        Utilities.isFalse = isFalse;
        //#endregion isFalse
        //#region isFalsy
        //Returns True if the value is truthy; False otherwise.
        function isFalsy(value) {
            return value ? false : true;
        }
        Utilities.isFalsy = isFalsy;
        //#endregion isFalsy
        //#region isObject
        //Returns True if the value is a non-null Object; False otherwise.
        function isObject(value) {
            return !isNull(value) && typeof (value) === 'object';
        }
        Utilities.isObject = isObject;
        //#endregion isObject
        //#region isEmptyObject
        //Returns true if the value is an empty object; false otherwise.
        function isEmptyObject(value) {
            return isObject(value) &&
                objectToString.call(value) === objectToStringValue &&
                !hasAdditionalProperties(value);
        }
        Utilities.isEmptyObject = isEmptyObject;
        //Inspired by: http://stackoverflow.com/questions/8024149/is-it-possible-to-get-the-non-enumerable-inherited-property-names-of-an-object
        function hasAdditionalProperties(value) {
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
        var objectProperties = null;
        //#endregion isEmptyObject
        //#region isArray
        //Returns True if the value is an array; False otherwise.
        function isArray(value) {
            return toString.call(value) === '[object Array]';
        }
        Utilities.isArray = isArray;
        //#endregion isArray
        //#region isFunction
        //Returns True if the value is a function; False otherwise.
        function isFunction(value) {
            return typeof (value) === 'function';
        }
        Utilities.isFunction = isFunction;
    })(Utilities = Classical.Utilities || (Classical.Utilities = {}));
})(Classical || (Classical = {}));
//# sourceMappingURL=Utilities.js.map