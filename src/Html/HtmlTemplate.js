//#region Enums
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
//#endregion Enums
//#region Interfaces
var Classical;
(function (Classical) {
    var Html;
    (function (Html) {
        var Template;
        (function (Template) {
            var Css = (function () {
                function Css(config) {
                    this._config = config;
                }
                return Css;
            })();
            Template.Css = Css;
        })(Template = Html.Template || (Html.Template = {}));
    })(Html = Classical.Html || (Classical.Html = {}));
})(Classical || (Classical = {}));
//#endregion Configs
//#region Elements
var Classical;
(function (Classical) {
    var Html;
    (function (Html) {
        var Template;
        (function (Template) {
            var Elements;
            (function (Elements) {
                //#region Imports
                var events = Classical.Events;
                var b = Classical.Binding;
                var bc = Classical.Binding.Collections;
                var u = Classical.Utilities;
                //#endregion Imports
                //#region HtmlNode
                var HtmlNode = (function () {
                    //#endregion Properties
                    //#region Constructor
                    /**
                    * Initializes a new HtmlNode.
                    * @param [config] The configuration properties for the HtmlNode.
                    * @param [elementName] The name of the underlying element.
                    */
                    function HtmlNode(elementName, config) {
                        /**
                        * Protected: Denotes that the DOM node is undergoing a binding update.
                        */
                        this._updating = false;
                        this._config = config || {};
                        this._elementName = elementName;
                    }
                    Object.defineProperty(HtmlNode.prototype, "parent", {
                        //#endregion Fields
                        //#region Properties
                        /**
                        * Returns the parent element, that contains this element as a child.
                        * @returns The parent containing element of the current element.
                        */
                        get: function () {
                            if (!this.element)
                                return null;
                            return HtmlNode.getHtmlNode(this.element.parentNode);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(HtmlNode.prototype, "element", {
                        /**
                        * Returns the DOM node wrapped by the HtmlNode.
                        * @returns The DOM node wrapped by the HtmlNode.
                        */
                        get: function () {
                            return this._element;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(HtmlNode.prototype, "elementName", {
                        /**
                        * Returns the name of the underlying DOM element.
                        * This name is used as the argument to document.createElement to create the underlying DOM node.
                        * @returns the name of the underlying DOM element.
                        */
                        get: function () {
                            return this._elementName;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(HtmlNode.prototype, "text", {
                        /**
                        * Returns the textContent of the element.
                        * Note: this is different from the text property of the HtmlElementContainer config,
                        * which provides access to the first text node of the element.
                        * The two are the same for elements that have one and only one Text node.
                        */
                        get: function () {
                            return this._element.textContent;
                        },
                        /**
                        * Sets the textContent of the element.
                        * Note: this is different from the text property of the HtmlElementContainer config,
                        * which provides access to the first text node of the element.
                        * Setting the text here will remove all DOM nodes from the element and relace them with a single text node.
                        */
                        set: function (value) {
                            this._element.textContent = value;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    //#endregion Constructor
                    //#region Methods
                    //#region getConfig
                    /**
                    * Returns the config for the HtmlNode.
                    * @param [TConfig] The type of config used to initialize the HtmlNode.
                    * @returns The config for the HtmlNode.
                    */
                    HtmlNode.prototype.getConfig = function () {
                        return this._config;
                    };
                    //#endregion getConfig
                    //#region getElement
                    /**
                    * Returns the DOM node wrapped by the HtmlNode.
                    * @param [TNode] The type of wrapped by the HtmlNode.
                    * @returns The DOM node wrapped by the HtmlNode.
                    */
                    HtmlNode.prototype.getElement = function () {
                        return this.element;
                    };
                    //#endregion getElement
                    //#region createElement
                    /**
                    * Protected.
                    * Creates the DOM node that is decorated by the associated Classical.Html element.
                    * @returns the DOM node that is decorated by the element.
                    */
                    HtmlNode.prototype.createElement = function (document) {
                        return document.createElement(this._elementName);
                    };
                    //#endregion createElement
                    //#region initialize
                    /**
                    * Initializes the element from the config.
                    * @param [document] The document used to create elements. If unspecified, the global document is used.
                    * @returns the decorated DOM node, with data and bindings set.
                    */
                    HtmlNode.prototype.initialize = function (document) {
                        var _this = this;
                        if (document === void 0) { document = global.document; }
                        if (this.isInitialized())
                            return this;
                        var element = this.createElement(document);
                        this._element = element;
                        elementMap.add(element, this);
                        this.configure(element, document);
                        if (!isTextNode(element)) {
                            this._observer = new MutationObserver(function (records) {
                                if (_this._updating) {
                                    _this._updating = false;
                                    return;
                                }
                                var record, propertyName, elementName, attributeName;
                                for (var recordIndex = 0, numberOfRecords = records.length; recordIndex < numberOfRecords; recordIndex++) {
                                    record = records[recordIndex];
                                    if (record.type == 'attributes') {
                                        attributeName = record.attributeName;
                                        elementName = contentMap.getValue(attributeName);
                                        //TODO:  Merge propertyMap and contentMap
                                        if (elementName)
                                            attributeName = elementName;
                                        propertyName = propertyMap.getValue(attributeName);
                                        if (!propertyName)
                                            propertyName = attributeName;
                                        _this[propertyName] = _this.element[attributeName];
                                    }
                                    else {
                                        var children = new bc.Collection([_this]), addedNodes = Array.prototype.slice.call(record.addedNodes), removedNodes = record.removedNodes, childNodes = _this._element.childNodes, childNode, child;
                                        for (var nodeIndex = 0, numberOfNodes = removedNodes.length; nodeIndex < numberOfNodes; nodeIndex++) {
                                            child = children.query().where(function (c) { return c.element == removedNodes[nodeIndex]; }).singleOrDefault();
                                            if (child)
                                                children.remove(child);
                                        }
                                        for (var nodeIndex = childNodes.length - 1; nodeIndex >= 0; nodeIndex--) {
                                            childNode = childNodes.item(nodeIndex);
                                            child = HtmlNode.getHtmlNode(childNode);
                                            children.set(nodeIndex, child);
                                            addedNodes.remove(childNode);
                                            if (addedNodes.length == 0)
                                                break;
                                        }
                                    }
                                }
                            });
                            this._observer.observe(this._element, {
                                attributes: true,
                                childList: true,
                                subtree: false
                            });
                        }
                        else {
                            this._observer = new MutationObserver(function (records) {
                                if (records.length === 0)
                                    return;
                                var textNode = _this;
                                textNode.text = _this._element.textContent;
                            });
                            this._observer.observe(this._element, {
                                characterData: true
                            });
                        }
                        this._noteInitialization();
                        return this;
                    };
                    /**
                    * Subscribes the handler to the initialization event.
                    * The initialized event fires when an element and all of its children have been initialized.
                    * [param] The handler for the event. The argument of the handler is the element that is initialized.
                    */
                    HtmlNode.prototype.initialization = function (handler) {
                        if (!this._initialization)
                            this._initialization = new events.Event(this);
                        this._initialization.subscribe(handler);
                    };
                    //#endregion initialization
                    //#region isInitialized
                    /**
                    * Returns True if the element and all of its children have been initialized; False otherwise.
                    * Initialization is the process of creating an element, pulling data from the config and setting up binding.
                    * @returns True if the node is initialized; False otherwise.
                    */
                    HtmlNode.prototype.isInitialized = function () {
                        return Classical.Utilities.isTruthy(this._isInitialized);
                    };
                    //#endregion isInitialized
                    //#region configure
                    /**
                    * Protected
                    * Configures the DOM node with data from the config.
                    * @param [element] The DOM node to configure.
                    * @param [document] The document used to create elements.
                    */
                    HtmlNode.prototype.configure = function (element, document) { };
                    //#endregion configure
                    //#endregion Methods
                    //#region Utilities
                    HtmlNode.prototype._noteInitialization = function () {
                        this._isInitialized = true;
                        var initialization = this._initialization;
                        if (initialization)
                            initialization.execute(null);
                    };
                    //#endregion Utilities
                    //#region Static Members
                    /**
                    * Return the decorator HtmlNode for the specified DOM Node, if one exists; creates a new one otherwise.
                    * @param [node] The node to find the corresponding HtmlNode for.
                    * @returns the HtmlNode decorator for the specified DOM Node.
                    */
                    HtmlNode.getHtmlNode = function (node) {
                        if (!node)
                            return null;
                        var htmlNode = elementMap.getValue(node);
                        if (htmlNode)
                            return htmlNode;
                        var type = node.nodeName;
                        var ctor = constructorMap.getValue(type);
                        Classical.Assert.isDefined(ctor, Classical.Utilities.format('The constructor for the HtmlNode decorating {0} could not be found.', type));
                        var htmlNode = (new ctor({}));
                        htmlNode.createElement = function () { return node; };
                        var childNodes = node.childNodes;
                        if (childNodes.length > 0) {
                            var childHtmlNodes = [];
                            for (var i = 0, length = childNodes.length; i < length; i++) {
                                var child = HtmlNode.getHtmlNode(childNodes.item(i));
                                if (child)
                                    childHtmlNodes.add(child);
                            }
                            var parentHtmlNode = htmlNode;
                            parentHtmlNode.children.addRange(childHtmlNodes);
                        }
                        htmlNode.initialize();
                        return htmlNode;
                    };
                    return HtmlNode;
                })();
                Elements.HtmlNode = HtmlNode;
                //#endregion HtmlNode
                //#region TextNode
                var TextNode = (function (_super) {
                    __extends(TextNode, _super);
                    //#endregion Properties
                    //#region Constructor
                    function TextNode(config) {
                        _super.call(this, 'text', config);
                    }
                    Object.defineProperty(TextNode.prototype, "textProperty", {
                        //#endregion Fields
                        //#region Properties
                        get: function () {
                            if (!this._textProperty)
                                initializeProperty(this, 'text', 'textContent');
                            return this._textProperty;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(TextNode.prototype, "text", {
                        get: function () {
                            return this.textProperty.value;
                        },
                        set: function (value) {
                            this.textProperty.value = value;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    //#endregion Constructor
                    //#region Base Class Overrides
                    //#region createElement
                    /**
                    * Protected.
                    * Returns a DOM text node.
                    * @returns A DOM text node.
                    */
                    TextNode.prototype.createElement = function () {
                        return document.createTextNode('');
                    };
                    //#endregion createElement
                    //#region configure
                    /**
                    * Protected
                    * Configures the DOM node with data from the config.
                    * @param [element] The DOM node to configure.
                    * @param [document] The document used to create elements.
                    */
                    TextNode.prototype.configure = function (element, document) {
                        _super.prototype.configure.call(this, element, document);
                        var config = this.getConfig();
                        setPropertyFromConfig(this, config, 'text', true);
                    };
                    return TextNode;
                })(HtmlNode);
                Elements.TextNode = TextNode;
                //#endregion TextNode
                //#region HtmlElement
                var HtmlElement = (function (_super) {
                    __extends(HtmlElement, _super);
                    //#region Fields
                    //## HtmlElementFields
                    //#endregion Fields
                    //#region Properties
                    //## HtmlElementProperties
                    //#endregion Properties
                    //#region Constructor
                    function HtmlElement(name, config) {
                        _super.call(this, name, config);
                    }
                    //#endregion Constructor
                    //#region Base Class Overrides
                    /**
                    * Protected
                    * Configures the DOM node with data from the config.
                    * @param [element] The DOM node to configure.
                    * @param [document] The document used to create elements.
                    */
                    HtmlElement.prototype.configure = function (element, document) {
                        _super.prototype.configure.call(this, element, document);
                        var config = this.getConfig();
                        //## HtmlElementSetConfigProperties
                        if (config.initializationHandler)
                            this.initialization(config.initializationHandler);
                    };
                    return HtmlElement;
                })(HtmlNode);
                Elements.HtmlElement = HtmlElement;
                //#endregion HtmlElement
                //#region HtmlElementContainer
                var HtmlElementContainer = (function (_super) {
                    __extends(HtmlElementContainer, _super);
                    //## HtmlElementContainerProperties
                    //#endregion Properties
                    //#region Constructor
                    function HtmlElementContainer(name, config) {
                        _super.call(this, name, config);
                    }
                    Object.defineProperty(HtmlElementContainer.prototype, "children", {
                        //## HtmlElementContainerFields
                        //#endregion Fields
                        //#region Properties
                        get: function () {
                            if (!this._children)
                                initializeChildrenProperty(this);
                            return this._children;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    //#endregion Constructor
                    //#region Base Class Overrides
                    //#region configure
                    /**
                    * Protected.
                    * Configures the DOM node with data from the config.
                    * @param [element] The DOM node to configure.
                    * @param [document] The document used to create elements.
                    */
                    HtmlElementContainer.prototype.configure = function (element, document) {
                        _super.prototype.configure.call(this, element, document);
                        var config = this.getConfig(), text = config.text, textBinder = config.textBinder, child = config.child, children = config.children || [], childrenBinder = config.childrenBinder, isTextDefined = Classical.Utilities.isDefined(text), isTextBinderDefined = Classical.Utilities.isDefined(textBinder), isChildDefined = Classical.Utilities.isDefined(child), isChildrenDefined = Classical.Utilities.isDefined(children), isChildrenBinderDefined = Classical.Utilities.isDefined(childrenBinder);
                        Classical.Assert.isFalse(isTextDefined && isTextBinderDefined, 'The text and textBinder properties cannot be specifed at the same time.');
                        Classical.Assert.isFalse(isChildrenDefined && isChildrenBinderDefined, 'The children and childrenBinder properties cannot be specifed at the same time.');
                        Classical.Assert.isFalse((isChildrenDefined || isChildrenBinderDefined) && isChildDefined, 'The child property is a shorthand for the first child of the children collection. Add it explicitly if you are specifying children.');
                        Classical.Assert.isFalse(isChildrenBinderDefined && (isTextDefined || isTextBinderDefined || isChildDefined), 'The text and child properties are children. If binding to the children of an element, specify all childing in the binding collection.');
                        if (isChildDefined)
                            children.unshift(child);
                        if (isTextBinderDefined)
                            children.unshift(Html.Template.text(textBinder));
                        if (isTextDefined)
                            children.unshift(Html.Template.text(text));
                        config.children = children;
                        config.childrenBinder = childrenBinder;
                        setChildrenPropertyFromConfig(this, config);
                        //## HtmlElementContainerSetConfigProperties
                        children.query().forEach(function (e) {
                            if (!e.isInitialized)
                                e.initialize(document);
                        });
                    };
                    //#endregion configure
                    //#region initialize
                    /**
                    * Initializes the element from the config.
                    * @param [document] The document used to create elements. If unspecified, the global document is used.
                    * @returns the decorated DOM node, with data and bindings set.
                    */
                    HtmlElementContainer.prototype.initialize = function (document) {
                        if (document === void 0) { document = global.document; }
                        if (this.isInitialized())
                            return this;
                        _super.prototype.initialize.call(this);
                        this.children.query().forEach(function (node) {
                            node.initialize();
                        });
                        var self = this;
                        this._childrenAreInitialized = true;
                        self._noteInitialization(true);
                        return this;
                    };
                    return HtmlElementContainer;
                })(HtmlElement);
                Elements.HtmlElementContainer = HtmlElementContainer;
                //#region Configuration
                var HtmlElementContainerPrototype = HtmlElementContainer.prototype;
                HtmlElementContainerPrototype._noteInitialization = function () {
                    if (!this._childrenAreInitialized)
                        return;
                    this._isInitialized = true;
                    var initialization = this._initialization;
                    if (initialization)
                        initialization.execute(null);
                };
                //#endregion Configuration
                //#endregion HtmlElementContainer
                //## ElementGenerators
                //#region Utilities
                //#region isTextNode
                function isTextNode(node) {
                    return node.nodeName === '#text';
                }
                //#endregion isTextNode
                //#region initializeProperty
                /**
                * Initializes the backing field of a lazily loaded property on an HtmlNode with the specified propertyName.
                */
                function initializeProperty(element, propertyName, htmlPropertyName) {
                    var bindingProperyName = propertyName + 'Property', fieldName = '_' + bindingProperyName, htmlElement = element.element, htmlValue = htmlElement[htmlPropertyName], property = new b.Property(element);
                    property['htmlValue'] = htmlValue;
                    //Delete me
                    if (!property.track)
                        console.log(property);
                    property.track(function (values, host) {
                        var value = values[0].value, currentHtmlValue = htmlElement[htmlPropertyName];
                        var valueWasNotChanged = false, htmlElementProperty = htmlElement[htmlPropertyName];
                        try {
                            if (currentHtmlValue !== value) {
                                htmlElement[htmlPropertyName] = value;
                                if (htmlElement[htmlPropertyName] !== value)
                                    valueWasNotChanged = true;
                            }
                        }
                        catch (ex) {
                            valueWasNotChanged = true;
                        }
                        if (valueWasNotChanged) {
                            property.value = htmlElement[htmlPropertyName];
                            Classical.Assert.isInvalid(Classical.Utilities.format('{0} is not a valid value for {1}.{2} in the current context.', value, element.getType().name, propertyName));
                        }
                    });
                    element[fieldName] = property;
                }
                //#endregion initializeProperty
                //#region initializeChildrenProperty
                /**
                * Initializes the backing field of the lazily loaded children property on an HtmlElementContainer with the specified propertyName.
                */
                function initializeChildrenProperty(element) {
                    var htmlElement = element.getElement(), htmlElementChildren = htmlElement.childNodes, htmlElementChildrenArray = Array.prototype.slice.call(htmlElementChildren), collectionProperty = new bc.Collection(htmlElementChildrenArray.map(function (node) {
                        return HtmlNode.getHtmlNode(node);
                    }));
                    collectionProperty.track(function (collection, info) {
                        collection.forEach(function (propertyUpdate) {
                            var action = propertyUpdate.type;
                            if (action.equals(bc.CollectionUpdateType.Add)) {
                                var oldChild = htmlElementChildren[propertyUpdate.index], newIndex = propertyUpdate.index, newItem = propertyUpdate.newValue, newElement = newItem.element;
                                if (!newElement) {
                                    newItem.initialize();
                                    newElement = newItem.element;
                                }
                                Classical.Assert.isTrue(htmlElementChildren.length <= newIndex, 'The index of the element to add is out of range of the HtmlNode.');
                                element._updating = true;
                                if (!oldChild)
                                    htmlElement.appendChild(newElement);
                                else
                                    htmlElement.replaceChild(newElement, oldChild);
                            }
                            else if (action.equals(bc.CollectionUpdateType.Remove)) {
                                var oldChild = htmlElementChildren[info.oldIndex];
                                Classical.Assert.isDefined(oldChild, 'The element to remove could not be found.');
                                element._updating = true;
                                htmlElement.removeChild(oldChild);
                            }
                            else {
                                Classical.Assert.isInvalid('The CollectionAction was not recognized.');
                            }
                        });
                    });
                    element['_children'] = collectionProperty;
                }
                //#endregion initializeProperty
                //#region setPropertyFromConfig
                /**
                * Sets the property of an element from the config file.
                */
                function setPropertyFromConfig(element, config, propertyName, isInitializable) {
                    var binderPropertyName = propertyName + 'Binder', bindingPropertyName = propertyName + 'Property', configValue = config[propertyName], configBinder = config[binderPropertyName], elementPropertyValue = element[propertyName];
                    //Kills the loop
                    if (!isInitializable || u.areEqual(elementPropertyValue, configValue))
                        return;
                    if (!configBinder &&
                        configValue !== undefined) {
                        element[propertyName] = configValue;
                    }
                    else if (configBinder) {
                        var property = element[bindingPropertyName];
                        property.bind(configBinder);
                    }
                }
                //#endregion setPropertyFromConfig
                //#region setChildrenPropertyFromConfig
                /**
                * Sets the children property of an element from the config file.
                */
                function setChildrenPropertyFromConfig(element, config) {
                    var children = config.children, childrenBinder = config.childrenBinder, childrenCollection = element.children;
                    if (children && !childrenBinder) {
                        childrenCollection.addRange(children);
                    }
                    else if (childrenBinder) {
                        childrenCollection.bind(childrenBinder);
                    }
                }
                //#endregion setChildrenPropertyFromConfig
                //#region getElementPropertyValue
                function getElementPropertyValue(element, propertyName) {
                    var propertyFieldName = '_' + propertyName, value = element[propertyFieldName];
                    if (value)
                        return value;
                    var id = element[propertyFieldName + 'ID'];
                    value = Template.wrap(id);
                    element[propertyFieldName] = value;
                    return value;
                }
                //#endregion getElementPropertyValue
                //#region setElementPropertyValue
                function setElementPropertyValue(element, propertyName, value) {
                    var propertyFieldName = '_' + propertyName, propertyFieldID = propertyFieldName + 'ID';
                    if (value)
                        element[propertyFieldID] = value.element.id;
                    else
                        element[propertyFieldID] = null;
                    element[propertyFieldName] = value;
                }
                //#endregion getElementPropertyValue
                //#region setElementPropertyFromConfig
                function setElementPropertyFromConfig(element, config, propertyName) {
                    var configPropertyName = propertyName + 'ID', configValue = config[configPropertyName];
                    element['_' + configPropertyName] = configValue;
                }
                //#endregion setElementPropertyFromConfig
                //#endregion Utilities
                //#region Variables
                var toString = Object.prototype.toString;
                var elementMap = new Classical.Collections.Dictionary(5000);
                var propertyMap = new Classical.Collections.Dictionary(50)
                    .add('textContent', 'text');
                //## PropertyMapGeneration
                var contentMap = new Classical.Collections.Dictionary(10);
                //## ContentMapGeneration
                var constructorMap = new Classical.Collections.Dictionary(150)
                    .add('#text', TextNode);
            })(Elements = Template.Elements || (Template.Elements = {}));
        })(Template = Html.Template || (Html.Template = {}));
    })(Html = Classical.Html || (Classical.Html = {}));
})(Classical || (Classical = {}));
//#endregion Elements
//#region Factory Methods
var Classical;
(function (Classical) {
    var Html;
    (function (Html) {
        var Template;
        (function (Template) {
            //#endregion Import
            //#region create
            /**
            Initializes the specified HtmlNode.
            @param [node] The node to initialize.
            returns a fully initialized HtmlNode.
            */
            function create(node, append, appendTo) {
                if (append === void 0) { append = true; }
                if (appendTo === void 0) { appendTo = null; }
                Classical.Assert.isDefined(node, 'The HtmlNode was not defined');
                if (node.isInitialized())
                    return;
                if (!append || appendTo) {
                    node.initialize();
                    if (appendTo)
                        appendTo.appendChild(node.element);
                    return node;
                }
                addToBody(node);
                return node;
            }
            Template.create = create;
            function addToBody(node) {
                if (!document.body) {
                    setInterval(function () { return addToBody(node); });
                    return;
                }
                node.initialize();
                document.body.appendChild(node.element);
            }
            /**
            * For overload resolution only.
            */
            function wrap(arg) {
                var element = arg;
                if (Classical.Utilities.isString(arg))
                    element = document.getElementById(arg);
                return Template.Elements.HtmlNode.getHtmlNode(element);
            }
            Template.wrap = wrap;
            function text(content) {
                if (!Classical.Utilities.isDefined(content))
                    content = '';
                if (Classical.Utilities.isString(content) || !content.source) {
                    if (!content.source)
                        content = content.toString();
                    return new Template.Elements.TextNode({ text: content });
                }
                return new Template.Elements.TextNode({ textBinder: content });
            }
            Template.text = text;
        })(Template = Html.Template || (Html.Template = {}));
    })(Html = Classical.Html || (Classical.Html = {}));
})(Classical || (Classical = {}));
//#endregion Factory Methods
//#region Utilities
var Classical;
(function (Classical) {
    var Html;
    (function (Html) {
        var Template;
        (function (Template) {
            //#endregion Import
            /**
            * An event that decorates native DOM events.
            */
            var HtmlElementEvent = (function () {
                //#endregion //Properties
                //#region Constructor
                function HtmlElementEvent(eventName, eventType, node) {
                    this._eventName = eventName;
                    this._eventType = eventType;
                    this._node = node;
                }
                Object.defineProperty(HtmlElementEvent.prototype, "node", {
                    //#endregion Fields
                    //#region Properties
                    get: function () {
                        return this._node;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElementEvent.prototype, "eventName", {
                    get: function () {
                        return this._eventName;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElementEvent.prototype, "eventType", {
                    get: function () {
                        return this._eventType;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElementEvent.prototype, "event", {
                    get: function () {
                        if (!this._event) {
                            this._event = document.createEvent(this._eventType);
                            this._event.initEvent(this._eventName, true, true);
                        }
                        return this._event;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElementEvent.prototype, "registrationMap", {
                    get: function () {
                        if (!this._registrationMap)
                            this._registrationMap = new Classical.Collections.Dictionary();
                        return this._registrationMap;
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion Constructor
                //#region IEvent Members
                //#region subscribe
                //Subscribe to an event by providing a registration.
                HtmlElementEvent.prototype.subscribe = function (registration) {
                    var _this = this;
                    Classical.Assert.isDefined(registration, 'The registration is not defined.');
                    var elementRegistration = function (domInfo) {
                        registration(_this.node, domInfo);
                    };
                    this.registrationMap.add(registration, elementRegistration);
                    //TODO: Remove cast when lib.ts is correct.
                    this.node.element.addEventListener(this._eventName, elementRegistration);
                };
                //#endregion subscribe
                //#region unsubscribe
                //Unsubscribe from an event by providing a registration.
                HtmlElementEvent.prototype.unsubscribe = function (registration) {
                    Classical.Assert.isDefined(registration, 'The registration is not defined.');
                    var map = this.registrationMap, elementRegistration = map.getValue(registration);
                    Classical.Assert.isDefined(elementRegistration, Classical.Utilities.format('The registration has not been subscribed to the {0} event.', this._eventName));
                    //TODO: Remove cast when lib.ts is correct.
                    this.node.element.removeEventListener(this._eventName, elementRegistration);
                    map.remove(registration);
                };
                //#endregion unsubscribe
                //#region execute
                //Execute the event for all the registered attendees.
                HtmlElementEvent.prototype.execute = function (info) {
                    this.node.element.dispatchEvent(this.event);
                };
                //#endregion execute
                //#region clear
                //Clears all subscribers from the event.
                //Note: This only works for handlers registered through this event.
                HtmlElementEvent.prototype.clear = function () {
                    var _this = this;
                    this.registrationMap.keys.query().forEach(function (registration) {
                        _this.unsubscribe(registration);
                    });
                };
                //#endregion clear
                //#region count
                //Counts the numbers of subscribers of the event.
                //Note: This only counts the handlers registered through this event.
                HtmlElementEvent.prototype.count = function () {
                    return this.registrationMap.count();
                };
                return HtmlElementEvent;
            })();
            Template.HtmlElementEvent = HtmlElementEvent;
        })(Template = Html.Template || (Html.Template = {}));
    })(Html = Classical.Html || (Classical.Html = {}));
})(Classical || (Classical = {}));
//#endregion Utilities 
//# sourceMappingURL=HtmlTemplate.js.map