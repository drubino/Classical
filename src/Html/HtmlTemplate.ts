
//#region Enums

module Classical.Html.Template {

    //#region Import

    import b = Classical.Binding;
    import bc = Classical.Binding.Collections;

    //#endregion Import

    //## EnumGenerators
}

//#endregion Enums

//#region Interfaces

module Classical.Html.Template {

    //#region Import

    import b = Classical.Binding;
    import bc = Classical.Binding.Collections;

    //#endregion Import

    //#region ICssConfig

    //Example
    export interface ICssConfig {
        x?: string;
        xBinder?: b.IBinder<b.PropertyUpdate<string>>;
    }

    export class Css {
        _parent: Elements.HtmlElement;
        _config: ICssConfig;

        constructor(config: ICssConfig) {
            this._config = config;
        }
    }

    //#endregion ICssConfig
    //## InterfaceGenerators
}

//#endregion Interfaces

//#region Configs

module Classical.Html.Template {

    //#region Imports

    import b = Classical.Binding;
    import bc = Classical.Binding.Collections;

    //#endregion Imports

    //#region IHtmlNodeConfig

    export interface IHtmlNodeConfig { }

    //#endregion IHtmlNodeConfig

    //#region ITextConfig

    export interface ITextNodeConfig extends IHtmlNodeConfig {
        text?: string;
        textBinder?: b.IBinder<b.PropertyUpdate<string>>;
    }

    //#endregion ITextConfig

    //#region IHtmlElementConfig

    export interface IHtmlElementConfig extends IHtmlNodeConfig {
        //## HtmlElementConfigProperties

        /** 
        * A handler for the initialization event.
        * The initialization event are fired when the element and all of its children have been initialized.
        * Initialization means that the config has been processed and the bindings have been set.
        */
        initializationHandler?: (element: Elements.HtmlElement) => void;
    }

    //#endregion IHtmlElementConfig

    //#region IHtmlElementContainerConfig

    export interface IHtmlElementContainerConfig extends IHtmlElementConfig {
        text?: string;
        textBinder?: b.IBinder<b.PropertyUpdate<string>>;
        child?: Elements.HtmlNode;
        children?: Elements.HtmlNode[];
        childrenBinder?: b.IBinder<bc.CollectionUpdate<Elements.HtmlNode>>;

        //## HtmlElementContainerConfigProperties
    }

    //#endregion IHtmlElementContainerConfig
    //## ConfigGenerators
}

//#endregion Configs

//#region Elements

module Classical.Html.Template.Elements {

    //#region Imports

    import events = Classical.Events;
    import b = Classical.Binding;
    import bc = Classical.Binding.Collections;
    import u = Classical.Utilities;

    //#endregion Imports

    //#region HtmlNode

    export class HtmlNode {

        //#region Fields

        private _config: IHtmlNodeConfig;
        private _element: Node;
        private _elementName: string;
        private _observer: MutationObserver;
        private _isInitialized: boolean;
        private _initialization: IEvent<HtmlNode, any>;

        /** 
        * Protected: Denotes that the DOM node is undergoing a binding update.
        */
        private _updating = false;

        //#endregion Fields

        //#region Properties

        /** 
        * Returns the parent element, that contains this element as a child.
        * @returns The parent containing element of the current element.
        */
        get parent(): HtmlElementContainer {
            if (!this.element)
                return null;

            return <HtmlElementContainer>HtmlNode.getHtmlNode(
                this.element.parentNode);
        }

        /** 
        * Returns the DOM node wrapped by the HtmlNode.
        * @returns The DOM node wrapped by the HtmlNode.
        */
        get element(): Node {
            return this._element;
        }

        /** 
        * Returns the name of the underlying DOM element. 
        * This name is used as the argument to document.createElement to create the underlying DOM node.
        * @returns the name of the underlying DOM element. 
        */
        get elementName(): string {
            return this._elementName;
        }

        /**
        * Returns the textContent of the element.
        * Note: this is different from the text property of the HtmlElementContainer config, 
        * which provides access to the first text node of the element.
        * The two are the same for elements that have one and only one Text node.  
        */
        get text(): string {
            return this._element.textContent;
        }

        /**
        * Sets the textContent of the element.
        * Note: this is different from the text property of the HtmlElementContainer config, 
        * which provides access to the first text node of the element.
        * Setting the text here will remove all DOM nodes from the element and relace them with a single text node. 
        */
        set text(value: string) {
            this._element.textContent = value;
        }

        //#endregion Properties

        //#region Constructor

        /** 
        * Initializes a new HtmlNode.
        * @param [config] The configuration properties for the HtmlNode.
        * @param [elementName] The name of the underlying element.
        */
        constructor(elementName: string, config: IHtmlNodeConfig) {
            this._config = config || {};
            this._elementName = elementName;
        }

        //#endregion Constructor

        //#region Methods

        //#region getConfig

        /** 
        * Returns the config for the HtmlNode.
        * @param [TConfig] The type of config used to initialize the HtmlNode.
        * @returns The config for the HtmlNode.
        */
        getConfig<TConfig extends IHtmlNodeConfig>() {
            return <TConfig>this._config;
        }

        //#endregion getConfig

        //#region getElement

        /** 
        * Returns the DOM node wrapped by the HtmlNode.
        * @param [TNode] The type of wrapped by the HtmlNode.
        * @returns The DOM node wrapped by the HtmlNode.
        */
        getElement<TNode extends Node>() {
            return <TNode>this.element;
        }

        //#endregion getElement

        //#region createElement

        /** 
        * Protected.
        * Creates the DOM node that is decorated by the associated Classical.Html element.
        * @returns the DOM node that is decorated by the element.
        */
        createElement(document: Document): Node {
            return document.createElement(this._elementName);
        }

        //#endregion createElement

        //#region initialize

        /** 
        * Initializes the element from the config.
        * @param [document] The document used to create elements. If unspecified, the global document is used.
        * @returns the decorated DOM node, with data and bindings set.
        */
        initialize(document: Document = global.document): HtmlNode {
            if (this.isInitialized())
                return this;

            var element = this.createElement(document);
            this._element = element;
            elementMap.add(element, this);

            this.configure(element, document);
            if (!isTextNode(element)) {
                this._observer = new (<any>MutationObserver)((records: Array<MutationRecord>) => {
                    if (this._updating) {
                        this._updating = false;
                        return;
                    }

                    var record: MutationRecord,
                        propertyName: string,
                        elementName: string,
                        attributeName: string;

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
                            this[propertyName] = this.element[attributeName];
                        } else/*if (record.type === 'childList')*/ {
                            var children = new bc.Collection<HtmlNode>([this]),
                                addedNodes = <Node[]>Array.prototype.slice.call(record.addedNodes),
                                removedNodes = record.removedNodes,
                                childNodes = this._element.childNodes,
                                childNode: Node,
                                child: HtmlNode;

                            for (var nodeIndex = 0, numberOfNodes = removedNodes.length; nodeIndex < numberOfNodes; nodeIndex++) {
                                child = children.query().where(c => c.element == removedNodes[nodeIndex]).singleOrDefault();
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
            } else {
                this._observer = new (<any>MutationObserver)((records: Array<MutationRecord>) => {
                    if (records.length === 0)
                        return;

                    var textNode = <TextNode>this;
                    textNode.text = this._element.textContent;
                });
                this._observer.observe(this._element, {
                    characterData: true
                });
            }

            this._noteInitialization();
            return this;
        }

        //#endregion initialize

        //#region initialization

        /** 
        * Returns True if the node has been initialization; False otherwise. 
        * Loading is the process of creating an element, pulling data from the config and setting up binding.
        * @returns True if the node is loaded; False otherwise. 
        */
        initialization<TElement extends HtmlNode>(handler: (element: TElement) => void): void;

        /** 
        * Returns True if the node has been initialization; False otherwise. 
        * Loading is the process of creating an element, pulling data from the config and setting up binding.
        * @returns True if the node is loaded; False otherwise. 
        */
        initialization(handler: (element: HtmlElement) => void): void;

        /** 
        * Subscribes the handler to the initialization event.
        * The initialized event fires when an element and all of its children have been initialized.
        * [param] The handler for the event. The argument of the handler is the element that is initialized.
        */
        initialization(handler: (element: HtmlNode) => void): void {
            if (!this._initialization)
                this._initialization = new events.Event(this);

            this._initialization.subscribe(handler);
        }

        //#endregion initialization

        //#region isInitialized

        /** 
        * Returns True if the element and all of its children have been initialized; False otherwise. 
        * Initialization is the process of creating an element, pulling data from the config and setting up binding.
        * @returns True if the node is initialized; False otherwise. 
        */
        isInitialized(): boolean {
            return Utilities.isTruthy(this._isInitialized);
        }

        //#endregion isInitialized

        //#region configure

        /** 
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void { }

        //#endregion configure

        //#endregion Methods

        //#region Utilities

        private _noteInitialization() {
            this._isInitialized = true;

            var initialization = this._initialization; 
            if (initialization)
                initialization.execute(null);
        }

        //#endregion Utilities

        //#region Static Members

        /** 
        * Return the decorator HtmlNode for the specified DOM Node, if one exists; creates a new one otherwise.
        * @param [node] The node to find the corresponding HtmlNode for.
        * @returns the HtmlNode decorator for the specified DOM Node.
        */
        static getHtmlNode(node: Node): HtmlNode {
            if (!node)
                return null;

            var htmlNode: HtmlNode = elementMap.getValue(node);
            if (htmlNode)
                return htmlNode;

            var type = node.nodeName;
            var ctor: any = constructorMap.getValue(type);
            Assert.isDefined(ctor,
                Utilities.format(
                    'The constructor for the HtmlNode decorating {0} could not be found.',
                    type));

            var htmlNode = <HtmlNode>(new ctor({}));
            htmlNode.createElement = () => node;

            var childNodes = node.childNodes;
            if (childNodes.length > 0) {
                var childHtmlNodes: Array<HtmlNode> = [];
                for (var i = 0, length = childNodes.length; i < length; i++) {
                    var child = HtmlNode.getHtmlNode(childNodes.item(i));
                    if (child)
                        childHtmlNodes.add(child);
                }

                var parentHtmlNode = <HtmlElementContainer>htmlNode;
                parentHtmlNode.children.addRange(childHtmlNodes);
            }

            htmlNode.initialize();
            return htmlNode;
        }

        //#endregion Static Members
    }

    //#endregion HtmlNode

    //#region TextNode

    export class TextNode extends HtmlNode {

        //#region Fields

        private _textProperty: b.Property<string>;

        //#endregion Fields

        //#region Properties

        get textProperty(): b.Property<string> {
            if (!this._textProperty)
                initializeProperty(this, 'text', 'textContent');
            return this._textProperty;
        }

        get text(): string {
            return this.textProperty.value;
        }

        set text(value: string) {
            this.textProperty.value = value;
        }

        //#endregion Properties

        //#region Constructor

        constructor(config: ITextNodeConfig) {
            super('text', config);
        }

        //#endregion Constructor

        //#region Base Class Overrides

        //#region createElement

        /** 
        * Protected.
        * Returns a DOM text node.
        * @returns A DOM text node.
        */
        createElement(): Text {
            return document.createTextNode('');
        }

        //#endregion createElement

        //#region configure

        /** 
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void {
            super.configure(element, document);
            var config = this.getConfig<ITextNodeConfig>();
            setPropertyFromConfig(this, config, 'text', true);
        }

        //#endregion configure

        //#endregion Base Class Overrides
    }

    //#endregion TextNode

    //#region HtmlElement

    export class HtmlElement extends HtmlNode {

        //#region Fields

        //## HtmlElementFields

        //#endregion Fields

        //#region Properties

        //## HtmlElementProperties

        //#endregion Properties

        //#region Constructor

        constructor(name: string, config: IHtmlElementConfig) {
            super(name, config);
        }

        //#endregion Constructor

        //#region Base Class Overrides

        /** 
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void {
            super.configure(element, document);
            var config = this.getConfig<IHtmlElementConfig>();

            //## HtmlElementSetConfigProperties
            if (config.initializationHandler)
                this.initialization(config.initializationHandler);
        }
        
        //#endregion Base Class Overrides
    }

    //#endregion HtmlElement

    //#region HtmlElementContainer

    export class HtmlElementContainer
        extends HtmlElement {

        //#region Fields

        private _children: bc.Collection<HtmlNode>;
        private _childrenAreInitialized: boolean;
        //## HtmlElementContainerFields

        //#endregion Fields

        //#region Properties

        get children() {
            if (!this._children)
                initializeChildrenProperty(this);
            return this._children;
        }

        //## HtmlElementContainerProperties

        //#endregion Properties

        //#region Constructor

        constructor(name: string, config: IHtmlElementContainerConfig) {
            super(name, config);
        }

        //#endregion Constructor

        //#region Base Class Overrides

        //#region configure

        /** 
        * Protected. 
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void {
            super.configure(element, document);
            var config = this.getConfig<IHtmlElementContainerConfig>(),
                text = config.text,
                textBinder = config.textBinder,
                child = config.child,
                children = config.children || [],
                childrenBinder = config.childrenBinder,
                isTextDefined = Utilities.isDefined(text),
                isTextBinderDefined = Utilities.isDefined(textBinder),
                isChildDefined = Utilities.isDefined(child),
                isChildrenDefined = Utilities.isDefined(children),
                isChildrenBinderDefined = Utilities.isDefined(childrenBinder);

            Assert.isFalse(isTextDefined && isTextBinderDefined,
                'The text and textBinder properties cannot be specifed at the same time.');
            Assert.isFalse(isChildrenDefined && isChildrenBinderDefined,
                'The children and childrenBinder properties cannot be specifed at the same time.');
            Assert.isFalse((isChildrenDefined || isChildrenBinderDefined) && isChildDefined,
                'The child property is a shorthand for the first child of the children collection. Add it explicitly if you are specifying children.');
            Assert.isFalse(isChildrenBinderDefined && (isTextDefined || isTextBinderDefined || isChildDefined),
                'The text and child properties are children. If binding to the children of an element, specify all childing in the binding collection.');

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

            children.query().forEach(e => {
                if (!e.isInitialized)
                    e.initialize(document);
            });
        }

        //#endregion configure

        //#region initialize

        /** 
        * Initializes the element from the config.
        * @param [document] The document used to create elements. If unspecified, the global document is used.
        * @returns the decorated DOM node, with data and bindings set.
        */
        initialize(document: Document = global.document): HtmlNode {
            if (this.isInitialized())
                return this;

            super.initialize();
            this.children.query().forEach(node => {
                node.initialize();
            });

            var self: any = this;
            this._childrenAreInitialized = true;
            self._noteInitialization(true);
            return this;
        }

        //#endregion initialize

        //#endregion Base Class Overrides
    }

    //#region Configuration

    var HtmlElementContainerPrototype: any = HtmlElementContainer.prototype;

    HtmlElementContainerPrototype._noteInitialization = function () {
        if (!this._childrenAreInitialized)
            return;

        this._isInitialized = true;

        var initialization = <IEvent<any, any>>this._initialization;
        if (initialization)
            initialization.execute(null);
    }

    //#endregion Configuration

    //#endregion HtmlElementContainer

    //## ElementGenerators

    //#region Utilities

    //#region isTextNode

    function isTextNode(node: Node) {
        return node.nodeName === '#text';
    }

    //#endregion isTextNode

    //#region initializeProperty

    /**
    * Initializes the backing field of a lazily loaded property on an HtmlNode with the specified propertyName.
    */
    function initializeProperty(element: HtmlNode, propertyName: string, htmlPropertyName: string) {
        var bindingProperyName = propertyName + 'Property',
            fieldName = '_' + bindingProperyName,
            htmlElement = element.element,
            htmlValue = htmlElement[htmlPropertyName],
            property = new b.Property<HtmlNode>(element);
            property['htmlValue'] = htmlValue;

        //Delete me
        if (!property.track)
            console.log(property);

        property.track((values, host) => {
            var value = values[0].value,
                currentHtmlValue = htmlElement[htmlPropertyName];

            var valueWasNotChanged = false,
                htmlElementProperty = htmlElement[htmlPropertyName];
            try {
                if (currentHtmlValue !== value) {
                    htmlElement[htmlPropertyName] = value;
                    if (htmlElement[htmlPropertyName] !== value)
                        valueWasNotChanged = true;
                }
            } catch (ex) {
                valueWasNotChanged = true;
            }

            if (valueWasNotChanged) {
                property.value = htmlElement[htmlPropertyName];
                Assert.isInvalid(Utilities.format(
                    '{0} is not a valid value for {1}.{2} in the current context.',
                    value, element.getType().name, propertyName));
            }
        });

        element[fieldName] = property;
    }

    //#endregion initializeProperty

    //#region initializeChildrenProperty

    /**
    * Initializes the backing field of the lazily loaded children property on an HtmlElementContainer with the specified propertyName.
    */
    function initializeChildrenProperty(element: HtmlElementContainer) {
        var htmlElement = element.getElement<HTMLElement>(),
            htmlElementChildren = htmlElement.childNodes,
            htmlElementChildrenArray = <Node[]>Array.prototype.slice.call(htmlElementChildren),
            collectionProperty = new bc.Collection<HtmlNode>(htmlElementChildrenArray.map(node => {
                return HtmlNode.getHtmlNode(node);
            }));
        collectionProperty.track((collection, info) => {
            collection.forEach(propertyUpdate => {
                var action = propertyUpdate.type;
                if (action.equals(bc.CollectionUpdateType.Add)) {
                    var oldChild = htmlElementChildren[propertyUpdate.index],
                        newIndex = propertyUpdate.index,
                        newItem = propertyUpdate.newValue,
                        newElement = newItem.element;

                    if (!newElement) {
                        newItem.initialize();
                        newElement = newItem.element;
                    }

                    Assert.isTrue(htmlElementChildren.length <= newIndex,
                        'The index of the element to add is out of range of the HtmlNode.');

                    (<any>element)._updating = true;
                    if (!oldChild)
                        htmlElement.appendChild(newElement);
                    else
                        htmlElement.replaceChild(newElement, oldChild);

                } else if (action.equals(bc.CollectionUpdateType.Remove)) {
                    var oldChild = htmlElementChildren[info.oldIndex];
                    Assert.isDefined(oldChild,
                        'The element to remove could not be found.');

                    (<any>element)._updating = true;
                    htmlElement.removeChild(oldChild);
                } else {
                    Assert.isInvalid('The CollectionAction was not recognized.');
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
    function setPropertyFromConfig(element: HtmlNode, config: IHtmlNodeConfig, propertyName: string, isInitializable: boolean) {
        var binderPropertyName = propertyName + 'Binder',
            bindingPropertyName = propertyName + 'Property',
            configValue = config[propertyName],
            configBinder = <b.IBinder<any>>config[binderPropertyName],
            elementPropertyValue = element[propertyName];

        //Kills the loop
        if (!isInitializable || u.areEqual(elementPropertyValue, configValue))
            return;

        if (!configBinder &&
            configValue !== undefined) {
            element[propertyName] = configValue;
        } else if (configBinder) {
            var property = <b.Property<HtmlNode>>element[bindingPropertyName];
            property.bind(configBinder);
        }
    }

    //#endregion setPropertyFromConfig

    //#region setChildrenPropertyFromConfig

    /**
    * Sets the children property of an element from the config file. 
    */
    function setChildrenPropertyFromConfig(element: HtmlElementContainer, config: IHtmlElementContainerConfig) {
        var children = config.children,
            childrenBinder = config.childrenBinder,
            childrenCollection = element.children;

        if (children && !childrenBinder) {
            childrenCollection.addRange(children);
        } else if (childrenBinder) {
            childrenCollection.bind(childrenBinder);
        }
    }

    //#endregion setChildrenPropertyFromConfig

    //#region getElementPropertyValue

    function getElementPropertyValue<TElement extends HtmlElement>(element: HtmlElement, propertyName: string): TElement {
        var propertyFieldName = '_' + propertyName,
            value = element[propertyFieldName];
        if (value)
            return value;

        var id = element[propertyFieldName + 'ID'];
        value = wrap(id);

        element[propertyFieldName] = value;
        return <TElement>value;
    }

    //#endregion getElementPropertyValue

    //#region setElementPropertyValue

    function setElementPropertyValue(element: HtmlElement, propertyName: string, value: HtmlElement): void {
        var propertyFieldName = '_' + propertyName,
            propertyFieldID = propertyFieldName + 'ID';
        if (value)
            element[propertyFieldID] = (<HTMLElement>value.element).id;
        else
            element[propertyFieldID] = null;

        element[propertyFieldName] = value;
    }

    //#endregion getElementPropertyValue

    //#region setElementPropertyFromConfig

    function setElementPropertyFromConfig(element: HtmlNode, config: IHtmlNodeConfig, propertyName: string) {
        var configPropertyName = propertyName + 'ID',
            configValue = config[configPropertyName];

        element['_' + configPropertyName] = configValue;
    }

    //#endregion setElementPropertyFromConfig

    //#endregion Utilities

    //#region Variables

    var toString = Object.prototype.toString;

    var elementMap =
        new Collections.Dictionary<Node, HtmlNode>(5000);

    var propertyMap =
        new Collections.Dictionary<string, string>(50)
            .add('textContent', 'text')
    //## PropertyMapGeneration

    var contentMap =
        new Collections.Dictionary<string, string>(10)
    //## ContentMapGeneration
    
    var constructorMap =
        new Collections.Dictionary<string, Function>(150)
            .add('#text', TextNode)
    //## ConstructorMapGeneration

    //#endregion Variables
}

//#endregion Elements

//#region Factory Methods

module Classical.Html.Template {

    //#region Import

    import b = Classical.Binding;
    import bc = Classical.Binding.Collections;

    //#endregion Import

    //#region create

    /**
    Initializes the specified HtmlNode.
    @param [node] The node to initialize.
    returns a fully initialized HtmlNode. 
    */
    export function create<TNode extends Elements.HtmlNode>(
        node: TNode,
        append: boolean = true,
        appendTo: Node = null): TNode {

        Assert.isDefined(node, 'The HtmlNode was not defined');
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

    function addToBody<TNode extends Elements.HtmlNode>(node: TNode) {
        if (!document.body) {
            setInterval(() => addToBody(node));
            return;
        }

        node.initialize();
        document.body.appendChild(node.element);
    }

    //#endregion create

    //#region wrap

    /**
    * Decorates the specified element, or looks up the existing decorator.
    * @param [elementID] The id of the element to decorate.
    * @returns a decorated HTMLElement.
    */
    export function wrap(elementID: string): Elements.HtmlElement;

    /**
    * Decorates the specified element, or looks up the existing decorator.
    * @param [element] The element to decorate.
    * @returns a decorated HTMLElement.
    */
    export function wrap(element: HTMLElement): Elements.HtmlElement;

    /**
    * For overload resolution only.
    */
    export function wrap(arg: any): Elements.HtmlElement {
        var element: HTMLElement = arg;
        if (Utilities.isString(arg))
            element = document.getElementById(arg);

        return <Elements.HtmlElement>Elements.HtmlNode.getHtmlNode(element);
    }

    //#endregion wrap

    //#region text

    export function text(text: string): Elements.TextNode;
    export function text(textBinder: b.IBinder<b.PropertyUpdate<string>>): Elements.TextNode;
    export function text(content: any): Elements.TextNode {
        if (!Utilities.isDefined(content))
            content = '';
        if (Utilities.isString(content) || !content.source) {
            if (!content.source)
                content = content.toString();

            return new Elements.TextNode({ text: <string>content });
        }

        return new Elements.TextNode({ textBinder: <b.IBinder<b.PropertyUpdate<string>>>content });
    }

    //#endregion text

    //## ElementFactoryGenerators
}

//#endregion Factory Methods

//#region Utilities

module Classical.Html.Template {

    //#region Import

    import b = Classical.Binding;
    import bc = Classical.Binding.Collections;

    //#endregion Import

    /** 
    * An event that decorates native DOM events.
    */
    export class HtmlElementEvent<TNode extends Elements.HtmlNode, TInformation>
        implements IEvent<TNode, TInformation> {

        //#region Fields

        private _node: TNode;
        private _registrationMap: Collections.Dictionary<(node: TNode, info: TInformation) => void, Function>;
        private _eventType: string;
        private _eventName: string;
        private _event: Event;

        //#endregion Fields

        //#region Properties

        get node(): TNode {
            return this._node;
        }

        get eventName(): string {
            return this._eventName;
        }

        get eventType(): string {
            return this._eventType;
        }

        private get event(): Event {
            if (!this._event) {
                this._event = document.createEvent(this._eventType);
                this._event.initEvent(this._eventName, true, true);
            }

            return this._event;
        }

        private get registrationMap(): Collections.Dictionary<(node: TNode, info: TInformation) => void, Function> {
            if (!this._registrationMap)
                this._registrationMap = new Collections.Dictionary<(node: TNode, info: TInformation) => void, Function>();

            return this._registrationMap;
        }

        //#endregion //Properties

        //#region Constructor

        constructor(eventName: string, eventType: string, node: TNode) {
            this._eventName = eventName;
            this._eventType = eventType;
            this._node = node;
        }

        //#endregion Constructor

        //#region IEvent Members

        //#region subscribe

        //Subscribe to an event by providing a registration.
        subscribe(
            registration: (node: TNode, info: TInformation) => void): void {

            Assert.isDefined(registration,
                'The registration is not defined.');

            var elementRegistration: Function = (domInfo: TInformation) => {
                registration(this.node, domInfo);
            };

            this.registrationMap.add(registration, elementRegistration);

            //TODO: Remove cast when lib.ts is correct.
            this.node.element.addEventListener(this._eventName, <EventListener><any>elementRegistration);
        }

        //#endregion subscribe

        //#region unsubscribe

        //Unsubscribe from an event by providing a registration.
        unsubscribe(registration: (node: TNode, info: TInformation) => void): void {
            Assert.isDefined(registration,
                'The registration is not defined.');

            var map = this.registrationMap,
                elementRegistration = map.getValue(registration);
            Assert.isDefined(elementRegistration,
                Utilities.format('The registration has not been subscribed to the {0} event.', this._eventName));

            //TODO: Remove cast when lib.ts is correct.
            this.node.element.removeEventListener(this._eventName, <EventListener><any>elementRegistration);
            map.remove(registration);
        }

        //#endregion unsubscribe

        //#region execute

        //Execute the event for all the registered attendees.
        execute(info: TInformation): void {
            this.node.element.dispatchEvent(this.event);
        }

        //#endregion execute

        //#region clear

        //Clears all subscribers from the event.
        //Note: This only works for handlers registered through this event.
        clear(): void {
            this.registrationMap.keys.query().forEach(registration => {
                this.unsubscribe(registration);
            });
        }

        //#endregion clear

        //#region count

        //Counts the numbers of subscribers of the event.
        //Note: This only counts the handlers registered through this event.
        count(): number {
            return this.registrationMap.count();
        }

        //#endregion count

        //#endregion IEvent Members
    }
}

//#endregion Utilities