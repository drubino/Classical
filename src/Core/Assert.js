/**
 Assert contains a collection of functions which can each be used to construct a proposition about that application.
 If that proposition is false, an exception is thrown containing a message and a stack trace.
 @seealso Classical.Assert.Exception
*/
var Classical;
(function (Classical) {
    var Assert;
    (function (Assert) {
        var u = Classical.Utilities;
        //throws an exception declaring a class as static.
        //This should be called from the classes constructor.
        function staticClass() {
            builder(false, 'Static classes cannot be instantiated.');
        }
        Assert.staticClass = staticClass;
        //Throws an exception if the value is null or undefined.
        function isDefined(value, message) {
            builder(u.isDefined(value), message, 'The value is either null or undefined.');
        }
        Assert.isDefined = isDefined;
        //Throws an exception if the value is not null or undefined.
        function nullOrUndefined(value, message) {
            builder(u.isNullOrUndefined(value), message, 'The value is either null or undefined.');
        }
        Assert.nullOrUndefined = nullOrUndefined;
        //Asserts that the boolean expression evaluates to true.
        function isTrue(expression, message) {
            builder(expression === true, message, 'The expression was not True.');
        }
        Assert.isTrue = isTrue;
        //Asserts that the boolean expression evaluates to true.
        function isFalse(expression, message) {
            builder(expression === false, message, 'The expression was not False.');
        }
        Assert.isFalse = isFalse;
        //Asserts that the system is in an invalid state.
        function isInvalid(message) {
            builder(false, message, 'The system is in an invalid state.');
        }
        Assert.isInvalid = isInvalid;
        //Asserts that a method has not been implemented.
        //It must be called like this to avoid specifying a return type:
        //  throw Assert.newImplemented();
        //Even without the 'throw', an exception will be thrown.
        function notImplemented(message) {
            throw new Exception(u.coalesce(message, 'The method has not been been implemented.'));
        }
        Assert.notImplemented = notImplemented;
        //Asserts that the boolean expression evaluates to true.
        function builder(expression, message, defaultMessage) {
            if (expression === false)
                throw new Exception(u.coalesce(message, defaultMessage));
        }
        /**
         A message along with a stack trace that is intended to be thrown to indicate an error.
        */
        var Exception = (function () {
            //#endregion Fields
            //#region Constructor
            function Exception(message) {
                if (!message) {
                    message = 'An exception was encountered.';
                }
                else {
                    if (message[message.length - 1] !== '.')
                        message += '.';
                }
                this.message = message;
                this.setStackTrace();
            }
            //#endregion Constructor
            //#region Base Class Overrides
            Exception.prototype.toString = function () {
                return this.message + '\n' + this.stackTrace;
            };
            //#endregion Base Class Overrides
            //#region Methods
            //Protected.
            Exception.prototype.setStackTrace = function () {
                var error = new Error();
                if (error.stack) {
                    this.stackTrace = error.stack.toString();
                    return;
                }
                function getStackTrace(f) {
                    return !f ? [] :
                        getStackTrace(f.caller).concat([f.toString().split('(')[0].substring(9) + '(' + f.arguments.join(',') + ')']);
                }
                var stackTrace = getStackTrace(arguments.callee.caller);
                this.stackTrace = '';
                for (var i = 0; i < stackTrace.length; i++)
                    this.stackTrace += (stackTrace[i] + '\n');
            };
            return Exception;
        })();
        Assert.Exception = Exception;
    })(Assert = Classical.Assert || (Classical.Assert = {}));
})(Classical || (Classical = {}));
//# sourceMappingURL=Assert.js.map