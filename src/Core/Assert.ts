
/**
 Assert contains a collection of functions which can each be used to construct a proposition about that application. 
 If that proposition is false, an exception is thrown containing a message and a stack trace.
 @seealso Classical.Assert.Exception
*/
module Classical.Assert {

    import u = Classical.Utilities;

    //throws an exception declaring a class as static.
    //This should be called from the classes constructor.
    export function staticClass(): void {
        builder(false, 'Static classes cannot be instantiated.');
    }

    //Throws an exception if the value is null or undefined.
    export function isDefined(value: any, message?: string): void {
        builder(u.isDefined(value), 
            message, 'The value is either null or undefined.');
    }

    //Throws an exception if the value is not null or undefined.
    export function nullOrUndefined(value: any, message?: string): void {
        builder(u.isNullOrUndefined(value),
            message, 'The value is either null or undefined.');
    }

    //Asserts that the boolean expression evaluates to true.
    export function isTrue(expression: boolean, message?: string): void {
        builder(expression === true,
            message, 'The expression was not True.');
    }

    //Asserts that the boolean expression evaluates to true.
    export function isFalse(expression: boolean, message?: string): void {
        builder(expression === false,
            message, 'The expression was not False.');
    }

    //Asserts that the system is in an invalid state.
    export function isInvalid(message?: string): void {
        builder(false,
            message, 'The system is in an invalid state.');
    }

    //Asserts that a method has not been implemented.
    //It must be called like this to avoid specifying a return type:
    //  throw Assert.newImplemented();
    //Even without the 'throw', an exception will be thrown.
    export function notImplemented(message?: string): Exception {
        throw new Exception(u.coalesce(message, 'The method has not been been implemented.'));
    }

    //Asserts that the boolean expression evaluates to true.
    function builder(expression: boolean, message: string, defaultMessage?: string): void {
        if (expression === false)
            throw new Exception(<string>u.coalesce(
                message, defaultMessage));
    }

    /**
     A message along with a stack trace that is intended to be thrown to indicate an error.
    */
    export class Exception {

        //#region Fields

        message: string;
        stackTrace: string;

        //#endregion Fields

        //#region Constructor

        constructor(message?: string) {
            if (!message) {
                message = 'An exception was encountered.';
            } else {
                if (message[message.length - 1] !== '.')
                    message += '.';
            }

            this.message = message;
            this.setStackTrace();
        }

        //#endregion Constructor

        //#region Base Class Overrides

        toString(): string {
            return this.message + '\n' + this.stackTrace;
        }

        //#endregion Base Class Overrides

        //#region Methods

        //Protected.
        setStackTrace() {
            var error: any = new Error();
            if (error.stack) {
                this.stackTrace = error.stack.toString();
                return;
            }

            function getStackTrace(f): Array<string> {
                return !f ? [] :
                    getStackTrace(f.caller).concat([f.toString().split('(')[0].substring(9) + '(' + f.arguments.join(',') + ')']);
            }

            var stackTrace = getStackTrace(arguments.callee.caller);
            this.stackTrace = '';
            for (var i = 0; i < stackTrace.length; i++)
                this.stackTrace += (stackTrace[i] + '\n');
        }

        //#endregion Methods
    }
}