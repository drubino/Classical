
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
module Classical.Expression {

    //#region Imports

    import u = Classical.Utilities;
    import Assert = Classical.Assert;

    //#endregion Imports

    //#region Ajax

    class Ajax {

        //#region createXmlHttpRequest

        static createXmlHttpRequest(): XMLHttpRequest {
            if (typeof XMLHttpRequest !== 'undefined') {
                return new XMLHttpRequest();
            }
            var versions = [
                "MSXML2.XmlHttp.5.0",
                "MSXML2.XmlHttp.4.0",
                "MSXML2.XmlHttp.3.0",
                "MSXML2.XmlHttp.2.0",
                "Microsoft.XmlHttp"
            ];

            var xhr;
            for (var i = 0; i < versions.length; i++) {
                try {
                    xhr = new ActiveXObject(versions[i]);
                    break;
                } catch (e) {
                }
            }
            return xhr;
        }

        //#endregion createXmlHttpRequest

        //#region get

        static get(url: string, callback: Function, data: any, async: boolean = false): void {
            var query = new Array<string>();
            for (var key in data) {
                query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
            }
            Ajax.send(url + '?' + query.join('&'), callback, 'GET', null, async);
        }

        //#endregion get

        //#region post

        static post(url: string, callback: Function, data: any, async: boolean = false): void {
            var query = [];
            for (var key in data) {
                query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
            }
            Ajax.send(url, callback, 'POST', query.join('&'), async);
        }

        //#endregion post

        //#region send

        static send(url: string, callback: Function, method: string, data: any, async: boolean = false): void {
            var x = Ajax.createXmlHttpRequest();
            x.open(method, url, async);
            x.onreadystatechange = function () {
                if (x.readyState == 4) {
                    callback(x.responseText)
                }
            };
            if (method == 'POST') {
                x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            }
            x.send(data)
        }

        //#endregion send
    }

    //#endregion Ajax

    //#region getProperty

    //TODO: Document valid property selectors for TypeScript for both overloads
    export function getProperty<TInstance>(instance: TInstance, selector: (instance: TInstance) => any): string;
    export function getProperty<TInstance>(selector: (instance: TInstance) => any): string;

    //For overload resolution only
    export function getProperty(arg1: any, arg2?: any): string {
        var selector: Function = arg1;
        if (arguments.length > 1)
            selector = arg2;

        var matches = propertyPattern.exec(selector.toString());
        Assert.isDefined(matches,
            'The property selector was not properly defined.');

        var property =
            matches.slice().query()
                .skip(1).firstOrDefault(m => u.isDefined(m));

        Assert.isDefined(property,
            'The property selector was not properly defined.');

        return property;
    }

    //#region Variables

    //The set of JavaScript identifiers is MUCH larger than what we currently support:
    //http://stackoverflow.com/questions/1661197/valid-characters-for-javascript-variable-names.
    var space = '\\s*';
    var identifierPattern = '[_$a-zA-Z][_$a-zA-Z0-9]*';
    var stringSingleQuotePattern = "'(([^'\\\\\]|\\\\[btnvfr'\\\\\])*)'";
    var stringDoubleQuotePattern = '"(([^"\\\\\]|\\\\[btnvfr"\\\\\])*)"';
    var stringPattern = '(?:' + stringSingleQuotePattern + '|' + stringDoubleQuotePattern + ')';
    var propertySelector = identifierPattern + space + '\\.' + space + '(' + identifierPattern + ')';
    var propertyAccessor = identifierPattern + space + '\\[' + space + stringPattern + space + '\\]';
    var functionStart = '^' + space + 'function' + space + '\\([^\\)]*\\)' + space + '{' + space + '(?:return)?' + space + '(?:';
    var functionEnd = ')' + space + ';?' + space + '}' + space + '$';
    var propertyPatternString = functionStart + propertySelector + '|' + propertyAccessor + '|' + stringPattern + functionEnd;
    var propertyPattern = new RegExp(propertyPatternString);

    //#endregion Variables

    //#endregion getProperty

    //#region getArguments

    export function getArguments(func: Function): Array<string> {
        Assert.isDefined(func,
            'The function was not specified.');

        var functionString = func.toString();
        var argumentString =
            functionPattern.exec(functionString).slice()
                .query().skip(1).singleOrDefault();

        Assert.isDefined(argumentString,
            'The arguments of the function cannot be parsed.');

        if (argumentString.length === 0)
            return [];

        return argumentString
            .split(argumentSpacePattern).query()
            .select(a => a.trim())
            .array();
    }

    //#region Variables

    var functionPattern = /^[\s]*function[\s]*(?:[_$a-zA-Z][_$a-zA-Z0-9]*)*\(([^\)]*)\)/;
    var argumentSpacePattern = /\s*,\s*/

    //#endregion Variables

    //#endregion getArguments
    
    //#region getScripts

    export function getScripts(): IQueryable<string> {
        return getScriptsByClass();
    }

    //#endregion getScripts

    //#region getScriptsByClass

    export function getScriptsByClass(...classes: string[]): IQueryable<string> {
        var args = ['script'];
        for (var i = 0; i < classes.length; i++)
            args[i + 1] = classes[i];

        var scriptElements = <NodeList>getElementByClass.apply(this, args);
        var scriptContents = new Array<string>();

        for (var i = 0; i < scriptElements.length; i++) {
            var node = <HTMLScriptElement>scriptElements[i];
            var source = node.src;
            if (source) {
                var content = '';
                Ajax.get(source, function (d) {
                    content += d;
                }, {});
                scriptContents.add(content);
            }
            else {
                scriptContents.add(node.innerHTML);
            }
        }

        return scriptContents.query();
    }

    //#endregion getScriptsByClass

    //#region getElementsByClass

    export function getElementByClass(elementName: string, ...classes: string[]): NodeList {
        Assert.isDefined(elementName);

        var selectorArray = classes
            .query()
            .distinct()
            .select(c => Utilities.format('{0}.{1}', elementName, c)).array();

        var selectors = selectorArray.join(', ');
        var nodeList = document.querySelectorAll(selectors);

        return nodeList;
    }

    //#endregion getElementsByClass
} 