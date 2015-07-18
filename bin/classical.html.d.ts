declare module Classical.Html {
    /**
    * Property values for a.target
    */
    class AnchorTarget {
        /**
        * Value: '_self'
        * Load the response into the same HTML4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified [MDN].
        */
        static self: string;
        /**
        * Value: '_blank'
        * Load the response into a new unnamed HTML4 window or HTML5 browsing context [MDN].
        */
        static blank: string;
        /**
        * Value: '_parent'
        * _parent: Load the response into the HTML4 frameset parent of the current frame or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as _self [MDN].
        */
        static parent: string;
        /**
        * Value: '_top'
        * In HTML4: Load the response into the full, original window, canceling all other frames. In HTML5: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as _self [MDN].
        */
        static top: string;
    }
    /**
    * Property values for area.target
    */
    class AreaTarget {
        /**
        * Value: '_self'
        * Load the response into the same HTML4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified [MDN].
        */
        static self: string;
        /**
        * Value: '_blank'
        * Load the response into a new unnamed HTML4 window or HTML5 browsing context [MDN].
        */
        static blank: string;
        /**
        * Value: '_parent'
        * Load the response into the HMTL4 frameset parent of the current frame or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as _self [MDN].
        */
        static parent: string;
        /**
        * Value: '_top'
        * In HTML4: Load the response into the full, original window, canceling all other frames. In HTML5: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as _self [MDN].
        */
        static top: string;
    }
    /**
    * Property values for audio.preload
    */
    class AudioPreload {
        /**
        * Value: 'none'
        * Hints that either the author thinks that the user won't need to consult that audio or that the server wants to minimize its traffic; in others terms this hint indicates that the audio should not be cached; [MDN].
        */
        static none: string;
        /**
        * Value: 'metadata'
        * Hints that though the author thinks that the user won't need to consult that audio, fetching the metadata (e.g. length) is reasonable; [MDN].
        */
        static metadata: string;
        /**
        * Value: 'auto'
        * Hints that the user needs have priority; in others terms this hint indicated that, if needed, the whole audio could be downloaded, even if the user is not expected to use it; [MDN].
        */
        static auto: string;
    }
    /**
    * Property values for base.target
    */
    class BaseTarget {
        /**
        * Value: '_self'
        * Load the result into the same HTML4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified [MDN].
        */
        static self: string;
        /**
        * Value: '_blank'
        * Load the result into a new unnamed HTML4 window or HTML5 browsing context [MDN].
        */
        static blank: string;
        /**
        * Value: '_parent'
        * Load the result into the HTML4 frameset parent of the current frame or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as _self [MDN].
        */
        static parent: string;
        /**
        * Value: '_top'
        * In HTML4: Load the result into the full, original window, canceling all other frames. In HTML5: Load the result into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as _self [MDN].
        */
        static top: string;
    }
    /**
    * Property values for button.type
    */
    class ButtonType {
        /**
        * Value: 'submit'
        * The button submits the form data to the server. This is the default if the attribute is not specified, or if the attribute is dynamically changed to an empty or invalid value [MDN].
        */
        static submit: string;
        /**
        * Value: 'reset'
        * The button resets all the controls to their initial values [MDN].
        */
        static reset: string;
        /**
        * Value: 'button'
        * The button has no default behavior. It can have client-side scripts associated with the element's events, which are triggered when the events occur [MDN].
        */
        static button: string;
    }
    /**
    * Property values for form.autocomplete
    */
    class FormAutoComplete {
        /**
        * Value: 'off'
        * The user must explicitly enter a value into each field for every use, or the document provides its own auto-completion method; the browser does not automatically complete entries [MDN].
        */
        static off: string;
        /**
        * Value: 'on'
        * The browser can automatically complete values based on values that the user has entered during previous uses of the form [MDN].
        */
        static on: string;
    }
    /**
    * Property values for form.enctype
    */
    class FormEncodingType {
        /**
        * Value: 'application/x-www-form-urlencoded'
        * The default value if the attribute is not specified [MDN].
        */
        static applicationFormUrlEncoded: string;
        /**
        * Value: 'multipart/form-data'
        * Use this value if you are using an <input> element with the type attribute set to "file" [MDN].
        */
        static multipartFormData: string;
        /**
        * Value: 'text/plain'
        * Use this value for plain text [MDN].
        */
        static plainText: string;
    }
    /**
    * Property values for form.method
    */
    class FormMethod {
        /**
        * Value: 'post'
        * Corresponds to the HTTP POST method ; the data from the form is included in the body of the form and is sent to the server [MDN].
        */
        static post: string;
        /**
        * Value: 'get'
        * Corresponds to the HTTP GET method; the data from the form are appended to the action attribute URI, with a '?' as a separator, and the resulting URI is sent to the server. Use this method when the form has no side-effects and contains only ASCII characters [MDN].
        */
        static get: string;
    }
    /**
    * Property values for form.target
    */
    class FormTarget {
        /**
        * Value: '_self'
        * Load the response into the same HTML 4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified [MDN].
        */
        static self: string;
        /**
        * Value: '_blank'
        * Load the response into a new unnamed HTML 4 window or HTML5 browsing context [MDN].
        */
        static blank: string;
        /**
        * Value: '_parent'
        * Load the response into the HTML 4 frameset parent of the current frame or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as _self [MDN].
        */
        static parent: string;
        /**
        * Value: '_top'
        * HTML 4: Load the response into the full, original window, canceling all other frames. HTML5: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as _self [MDN].
        */
        static top: string;
    }
    /**
    * Property values for HtmlElement.direction.
    */
    class GlobalDirection {
        /**
        * Value: 'ltr'.
        * Means left to right and is to be used for languages that are written from the left to the right (like English) [MDN].
        */
        static leftToRight: string;
        /**
        * Value: 'rtl'.
        * Means right to left and is to be used for languages that are written from the right to the left (like Arabic) [MDN].
        */
        static rightToLeft: string;
        /**
        * Value: 'auto'.
        * Lets the user agent decides. It uses a basic algorithm as it parses the characters inside the element until it finds a character with a strong directionality, then apply that directionality to the whole element [MDN].
        */
        static auto: string;
    }
    /**
    * Property values for HtmlElement.dropZone.
    */
    class GlobalDropZone {
        /**
        * Value: 'copy'.
        * Indicates that dropping will create a copy of the element that was dragged [MDN].
        */
        static copy: string;
        /**
        * Value: 'move'.
        * Indicates that the element that was dragged will be moved to this new location [MDN].
        */
        static move: string;
        /**
        * Value: 'link'.
        * Creates a link to the dragged data. [MDN].
        */
        static link: string;
    }
    /**
    * Property values for iframe.sandbox
    */
    class InlineFrameSandbox {
        /**
        * Value: 'allow-same-origin'
        * Allows the content to be treated as being from its normal origin. If this keyword is not used, the embedded content is treated as being from a unique origin [MDN].
        */
        static allowSameOrigin: string;
        /**
        * Value: 'allow-top-navigation'
        * Allows the embedded browsing context to navigate (load) content to the top-level browsing context. If this keyword is not used, this operation is not allowed [MDN].
        */
        static allowTopNavigation: string;
        /**
        * Value: 'allow-forms'
        * Allows the embedded browsing context to submit forms. If this keyword is not used, this operation is not allowed [MDN].
        */
        static allowForms: string;
        /**
        * Value: 'allow-scripts'
        * Allows the embedded browsing context to run scripts (but not create pop-up windows). If this keyword is not used, this operation is not allowed [MDN].
        */
        static allowScripts: string;
    }
    /**
    * Property values for iframe.scrolling
    */
    class InlineFrameScrolling {
        /**
        * Value: 'auto'
        * Only when needed [MDN].
        */
        static auto: string;
        /**
        * Value: 'yes'
        * Always provide a scroll bar [MDN].
        */
        static yes: string;
        /**
        * Value: 'no'
        * Never provide a scoll bar [MDN].
        */
        static no: string;
    }
    /**
    * Property values for input.accept
    */
    class InputAccept {
        /**
        * Value: 'audio/*'
        * audio/* representing sound files HTML5 [MDN].
        */
        static audio: string;
        /**
        * Value: 'video/*'
        * video/* representing video files HTML5 [MDN].
        */
        static video: string;
        /**
        * Value: 'image/*'
        * image/* representing image files HTML5 [MDN].
        */
        static image: string;
    }
    /**
    * Property values for input.autocomplete
    */
    class InputAutoComplete {
        /**
        * Value: 'off'
        * The user must explicitly enter a value into this field for every use, or the document provides its own auto-completion method; the browser does not automatically complete the entry [MDN].
        */
        static off: string;
        /**
        * Value: 'on'
        * The browser can automatically complete the value based on values that the user has entered during previous uses [MDN].
        */
        static on: string;
    }
    /**
    * Property values for input.type
    */
    class InputType {
        /**
        * Value: 'button'
        * A push button with no default behavior [MDN].
        */
        static button: string;
        /**
        * Value: 'checkbox'
        * A check box. You must use the value attribute to define the value submitted by this item. Use the checked attribute to indicate whether this item is selected. You can also use the indeterminate attribute to indicate that the checkbox is in an indeterminate state (on most platforms, this draws a horizontal line across the checkbox) [MDN].
        */
        static checkbox: string;
        /**
        * Value: 'color'
        * HTML5 A control for specifying a color [MDN].
        */
        static color: string;
        /**
        * Value: 'email'
        * HTML5 A field for editing an e-mail address. The :valid and :invalid CSS pseudo-classes are applied as appropriate [MDN].
        */
        static email: string;
        /**
        * Value: 'hidden'
        * A control that is not displayed, but whose value is submitted to the server [MDN].
        */
        static hidden: string;
        /**
        * Value: 'image'
        * A graphical submit button. You must use the src attribute to define the source of the image and the alt attribute to define alternative text. You can use the height and width attributes to define the size of the image in pixels [MDN].
        */
        static image: string;
        /**
        * Value: 'number'
        * HTML5 A control for entering a floating point number [MDN].
        */
        static number: string;
        /**
        * Value: 'password'
        * A single-line text field whose value is obscured. Use the maxlength attribute to specify the maximum length of the value that can be entered [MDN].
        */
        static password: string;
        /**
        * Value: 'radio'
        * A radio button. You must use the value attribute to define the value submitted by this item. Use the checked attribute to indicate whether this item is selected by default. Radio buttons that have the same value for the name attribute are in the same "radio button group"; only one radio button in a group can be selected at one time [MDN].
        */
        static radio: string;
        /**
        * Value: 'range'
        * HTML5 A control for entering a number whose exact value is not important. This type control uses the following default values if the corresponding attributes are not specified:
        * min: 0
        * max: 100
        * value: min + (max-min)/2, or min if max is less than min
        * step: 1 [MDN].
        */
        static range: string;
        /**
        * Value: 'reset'
        * A button that resets the contents of the form to default values [MDN].
        */
        static reset: string;
        /**
        * Value: 'search'
        * HTML5 A single-line text field for entering search strings; line-breaks are automatically removed from the input value [MDN].
        */
        static search: string;
        /**
        * Value: 'submit'
        * A button that submits the form [MDN].
        */
        static submit: string;
        /**
        * Value: 'tel'
        * HTML5 A control for entering a telephone number; line-breaks are automatically removed from the input value, but no other syntax is enforced. You can use attributes such as pattern and maxlength to restrict values entered in the control. The :valid and :invalid CSS pseudo-classes are applied as appropriate [MDN].
        */
        static tel: string;
        /**
        * Value: 'text'
        * A single-line text field; line-breaks are automatically removed from the input value [MDN].
        */
        static text: string;
        /**
        * Value: 'url'
        * HTML5 A field for editing a URL. The user may enter a blank or invalid address. Line-breaks are automatically removed from the input value. You can use attributes such as pattern and maxlength to restrict values entered in the control. The :valid and :invalid CSS pseudo-classes are applied as appropriate [MDN].
        */
        static url: string;
    }
    /**
    * Property values for li.type
    */
    class ListItemType {
        /**
        * Value: 'a'
        * Lowercase letters [MDN].
        */
        static lowercase: string;
        /**
        * Value: 'A'
        * Uppercase letters [MDN].
        */
        static uppercase: string;
        /**
        * Value: 'i'
        * Lowercase Roman numerals [MDN].
        */
        static lowercaseRomanNumerals: string;
        /**
        * Value: 'I'
        * Uppercase Roman numerals [MDN].
        */
        static uppercaseRomanNumerals: string;
        /**
        * Value: '1'
        * Numbers [MDN].
        */
        static numbers: string;
    }
    /**
    * Used to indicate the kind of menu being declared [MDN].
    */
    class MenuType {
        /**
        * Value: 'context'
        * the commands of a context menu; the user can only interact with the commands if that context menu is activated [MDN].
        */
        static context: string;
        /**
        * Value: 'toolbar'
        * a list of active commands that the user can immediately interact with [MDN].
        */
        static toolbar: string;
        /**
        * Value: 'list'
        * an unordered list of items (each represented by an <li> element), each of which represents a command that the user can perform or activate, or, if the element has no li element children, flow content describing available commands [MDN].
        */
        static list: string;
    }
    /**
    *
    */
    class MetaHttpEquiv {
        /**
        * Value: 'command'
        * This pragma specifies the preferred stylesheet to be used on the page.
        * The content attribute must contains the id of a <link> element whose href attribute links to a CSS stylesheet, or the id of a <style> element which contains a CSS stylesheet [MDN].
        */
        static defaultStyle: string;
        /**
        * Value: 'refresh'
        * This pragma specifies:
        * the number of seconds until the page should be reloaded, if the content attribute contains only a positive integer number;
        * the number of seconds until the page should be redirected to another, if the content attribute contains a positive integer number followed by the string ';url=' and a valid URL [MDN].
        */
        static refresh: string;
    }
    /**
    * Property values for meta.name
    */
    class MetaName {
        /**
        * Value: 'application-name'
        * application-name, defining the name of the web application running in the webpage;
        *
        * Note:
        * Browsers may use this to identify the application. It is different from the <title> element, which usually consist of the application name but may also contain specific information like the document name or a status;
        * Simple webpages shouldn't define the application-name meta [MDN].
        */
        static applicationName: string;
        /**
        * Value: 'author'
        * author, defining, in a free format, the name of the author of the document; [MDN].
        */
        static author: string;
        /**
        * Value: 'description'
        * description, containing a short and accurate summary of the content of the page. Several browsers, among them Firefox and Opera, use this meta as the default description of the page when bookmarked; [MDN].
        */
        static description: string;
        /**
        * Value: 'generator'
        * generator, containing, in a free format, the identifier to the software that generated the page; [MDN].
        */
        static generator: string;
        /**
        * Value: 'keywords'
        * keywords, containing, as strings separated by commas, relevant words associated with the content of the page [MDN].
        */
        static keywords: string;
    }
    /**
    * Property values for textarea.wrap
    */
    class TextAreaWrap {
        /**
        * Value: 'cols'
        * hard: The browser automatically inserts line breaks (CR+LF) so that each line has no more than the width of the control; the cols attribute must be specified [MDN].
        */
        static cols: string;
    }
    /**
    * Property values for track.kind
    */
    class TrackKind {
        /**
        * Value: 'subtitles'
        * Subtitles provide translation of content that cannot be understood by the viewer. For example dialogue or text that is not English in an English language film.
        * Subtitles may contain additional content, usually extra background information. For example the text at the beginning of the Star Wars films, or the date, time, and location of a scene [MDN].
        */
        static subtitles: string;
        /**
        * Value: 'captions'
        * Closed captions provide a transcription and possibly a translation of audio.
        * It may include important non-verbal information such as music cues or sound effects. It may indicate the cue's source (e.g. music, text, character).
        * Suitable for users who are deaf or when the sound is muted [MDN].
        */
        static captions: string;
        /**
        * Value: 'descriptions'
        * Textual description of the video content.
        * Suitable for users who are blind or where the video cannot be seen [MDN].
        */
        static descriptions: string;
        /**
        * Value: 'chapters'
        * Chapter titles are intended to be used when the user is navigating the media resource [MDN].
        */
        static chapters: string;
        /**
        * Value: 'metadata'
        * Tracks used by scripts. Not visible to the user [MDN].
        */
        static metadata: string;
    }
    /**
    * Property values for ul.type
    */
    class UnorderedListType {
        /**
        * Value: 'circle'
        * circle, [MDN].
        */
        static circle: string;
        /**
        * Value: 'disc'
        * disc, [MDN].
        */
        static disc: string;
        /**
        * Value: 'square'
        * and square [MDN].
        */
        static square: string;
    }
    /**
    * Property values for ul.type
    */
    class VideoPreload {
        /**
        * Value: 'none'
        * none, [MDN].
        */
        static none: string;
        /**
        * Value: 'metadata'
        * metadata, [MDN].
        */
        static metadata: string;
        /**
        * Value: 'auto'
        * auto [MDN].
        */
        static auto: string;
    }
}
declare module Classical.Html {
    import b = Classical.Binding;
    interface ICssConfig {
        x?: string;
        xBinder?: b.IBinder<b.PropertyUpdate<string>>;
    }
    class Css {
        _parent: Elements.HtmlElement;
        _config: ICssConfig;
        constructor(config: ICssConfig);
    }
}
declare module Classical.Html {
    import b = Classical.Binding;
    import bc = Classical.Binding.Collections;
    interface IHtmlNodeConfig {
    }
    interface ITextNodeConfig extends IHtmlNodeConfig {
        text?: string;
        textBinder?: b.IBinder<b.PropertyUpdate<string>>;
    }
    interface IHtmlElementConfig extends IHtmlNodeConfig {
        classes?: string;
        classesBinder?: b.IBinder<b.PropertyUpdate<string>>;
        direction?: string;
        directionBinder?: b.IBinder<b.PropertyUpdate<string>>;
        draggable?: boolean;
        draggableBinder?: b.IBinder<b.PropertyUpdate<boolean>>;
        hidden?: boolean;
        hiddenBinder?: b.IBinder<b.PropertyUpdate<boolean>>;
        id?: string;
        idBinder?: b.IBinder<b.PropertyUpdate<string>>;
        language?: string;
        languageBinder?: b.IBinder<b.PropertyUpdate<string>>;
        spellCheck?: boolean;
        spellCheckBinder?: b.IBinder<b.PropertyUpdate<boolean>>;
        title?: string;
        titleBinder?: b.IBinder<b.PropertyUpdate<string>>;
        /**
        * The fullScreenChangeEvent event is executed when an element was turned to fullscreen mode or back to normal mode [MDN].
        * Specification: Full Screen
        * DOM Event Name: fullscreenchange
        */
        fullScreenChangeHandler?: (element: Elements.HtmlElement, info: Event) => void;
        /**
        * The fullScreenErrorEvent event is executed when it was impossible to switch to fullscreen mode for technical reasons or because the permission was denied [MDN].
        * Specification: Full Screen
        * DOM Event Name: fullscreenerror
        */
        fullScreenErrorHandler?: (element: Elements.HtmlElement, info: Event) => void;
        /**
        * The animationEndEvent event is executed when a CSS animation has completed [MDN].
        * Specification: CSS Animations
        * DOM Event Name: animationend
        */
        animationEndHandler?: (element: Elements.HtmlElement, info: AnimationEvent) => void;
        /**
        * The animationIterationEvent event is executed when a CSS animation is repeated [MDN].
        * Specification: CSS Animations
        * DOM Event Name: animationiteration
        */
        animationIterationHandler?: (element: Elements.HtmlElement, info: AnimationEvent) => void;
        /**
        * The animationStartEvent event is executed when a CSS animation has started [MDN].
        * Specification: CSS Animations
        * DOM Event Name: animationstart
        */
        animationStartHandler?: (element: Elements.HtmlElement, info: AnimationEvent) => void;
        /**
        * The transitionEndEvent event is executed when a CSS transition has completed [MDN].
        * Specification: CSS Transitions
        * DOM Event Name: transitionend
        */
        transitionEndHandler?: (element: Elements.HtmlElement, info: TransitionEvent) => void;
        /**
        * The gamepadConnectedEvent event is executed when a gamepad has been connected [MDN].
        * Specification: Gamepad
        * DOM Event Name: gamepadconnected
        */
        gamepadConnectedHandler?: (element: Elements.HtmlElement, info: Event) => void;
        /**
        * The gamepadDisconnectedEvent event is executed when a gamepad has been disconnected [MDN].
        * Specification: Gamepad
        * DOM Event Name: gamepaddisconnected
        */
        gamepadDisconnectedHandler?: (element: Elements.HtmlElement, info: Event) => void;
        /**
        * The compositionEndEvent event is executed when the composition of a passage of text has been completed or canceled [MDN].
        * Specification: DOM L3
        * DOM Event Name: compositionend
        */
        compositionEndHandler?: (element: Elements.HtmlElement, info: CompositionEvent) => void;
        /**
        * The compositionStartEvent event is executed when the composition of a passage of text is prepared (similar to keydown for a keyboard input, but works with other inputs such as speech recognition) [MDN].
        * Specification: DOM L3
        * DOM Event Name: compositionstart
        */
        compositionStartHandler?: (element: Elements.HtmlElement, info: CompositionEvent) => void;
        /**
        * The compositionUpdateEvent event is executed when a character is added to a passage of text being composed [MDN].
        * Specification: DOM L3
        * DOM Event Name: compositionupdate
        */
        compositionUpdateHandler?: (element: Elements.HtmlElement, info: CompositionEvent) => void;
        /**
        * The keyDownEvent event is executed when a key is pressed down [MDN].
        * Specification: DOM L3
        * DOM Event Name: keydown
        */
        keyDownHandler?: (element: Elements.HtmlElement, info: KeyboardEvent) => void;
        /**
        * The keyPressEvent event is executed when a key is pressed down and that key normally produces a character value (use input instead) [MDN].
        * Specification: DOM L3
        * DOM Event Name: keypress
        */
        keyPressHandler?: (element: Elements.HtmlElement, info: KeyboardEvent) => void;
        /**
        * The keyUpEvent event is executed when a key is released [MDN].
        * Specification: DOM L3
        * DOM Event Name: keyup
        */
        keyUpHandler?: (element: Elements.HtmlElement, info: KeyboardEvent) => void;
        /**
        * The clickEvent event is executed when a pointing device button has been pressed and released on an element [MDN].
        * Specification: DOM L3
        * DOM Event Name: click
        */
        clickHandler?: (element: Elements.HtmlElement, info: MouseEvent) => void;
        /**
        * The doubleClickEvent event is executed when a pointing device button is clicked twice on an element [MDN].
        * Specification: DOM L3
        * DOM Event Name: dblclick
        */
        doubleClickHandler?: (element: Elements.HtmlElement, info: MouseEvent) => void;
        /**
        * The mouseDownEvent event is executed when a pointing device button (usually a mouse) is pressed on an element [MDN].
        * Specification: DOM L3
        * DOM Event Name: mousedown
        */
        mouseDownHandler?: (element: Elements.HtmlElement, info: MouseEvent) => void;
        /**
        * The mouseEnterEvent event is executed when a pointing device is moved onto the element that has the listener attached [MDN].
        * Specification: DOM L3
        * DOM Event Name: mouseenter
        */
        mouseEnterHandler?: (element: Elements.HtmlElement, info: MouseEvent) => void;
        /**
        * The mouseLeaveEvent event is executed when a pointing device is moved off the element that has the listener attached [MDN].
        * Specification: DOM L3
        * DOM Event Name: mouseleave
        */
        mouseLeaveHandler?: (element: Elements.HtmlElement, info: MouseEvent) => void;
        /**
        * The mouseMoveEvent event is executed when a pointing device is moved over an element [MDN].
        * Specification: DOM L3
        * DOM Event Name: mousemove
        */
        mouseMoveHandler?: (element: Elements.HtmlElement, info: MouseEvent) => void;
        /**
        * The mouseOutEvent event is executed when a pointing device is moved off the element that has the listener attached or off one of its children [MDN].
        * Specification: DOM L3
        * DOM Event Name: mouseout
        */
        mouseOutHandler?: (element: Elements.HtmlElement, info: MouseEvent) => void;
        /**
        * The mouseOverEvent event is executed when a pointing device is moved onto the element that has the listener attached or onto one of its children [MDN].
        * Specification: DOM L3
        * DOM Event Name: mouseover
        */
        mouseOverHandler?: (element: Elements.HtmlElement, info: MouseEvent) => void;
        /**
        * The mouseUpEvent event is executed when a pointing device button is released over an element [MDN].
        * Specification: DOM L3
        * DOM Event Name: mouseup
        */
        mouseUpHandler?: (element: Elements.HtmlElement, info: MouseEvent) => void;
        /**
        * The wheelEvent event is executed when a wheel button of a pointing device is rotated in any direction [MDN].
        * Specification: DOM L3
        * DOM Event Name: wheel
        */
        wheelHandler?: (element: Elements.HtmlElement, info: WheelEvent) => void;
        /**
        * The contextMenuEvent event is executed when the right button of the mouse is clicked (before the context menu is displayed) [MDN].
        * Specification: HTML5
        * DOM Event Name: contextmenu
        */
        contextMenuHandler?: (element: Elements.HtmlElement, info: MouseEvent) => void;
        /**
        * The pointerLockChangeEvent event is executed when the pointer was locked or released [MDN].
        * Specification: Pointer Lock
        * DOM Event Name: pointerlockchange
        */
        pointerLockChangeHandler?: (element: Elements.HtmlElement, info: Event) => void;
        /**
        * The pointerLockErrorEvent event is executed when it was impossible to lock the pointer for technical reasons or because the permission was denied [MDN].
        * Specification: Pointer Lock
        * DOM Event Name: pointerlockerror
        */
        pointerLockErrorHandler?: (element: Elements.HtmlElement, info: Event) => void;
        /**
        * The blurEvent event is executed when an element has lost focus (does not bubble) [MDN].
        * Specification: DOM L3
        * DOM Event Name: blur
        */
        blurHandler?: (element: Elements.HtmlElement, info: FocusEvent) => void;
        /**
        * The focusEvent event is executed when an element has received focus (does not bubble) [MDN].
        * Specification: DOM L3
        * DOM Event Name: focus
        */
        focusHandler?: (element: Elements.HtmlElement, info: FocusEvent) => void;
        /**
        * The afterPrintEvent event is executed when the associated document has started printing or the print preview has been closed [MDN].
        * Specification: HTML5
        * DOM Event Name: afterprint
        */
        afterPrintHandler?: (element: Elements.HtmlElement, info: Event) => void;
        /**
        * The beforePrintEvent event is executed when the associated document is about to be printed or previewed for printing [MDN].
        * Specification: HTML5
        * DOM Event Name: beforeprint
        */
        beforePrintHandler?: (element: Elements.HtmlElement, info: Event) => void;
        /**
        * The dragEndEvent event is executed when a drag operation is being ended (by releasing a mouse button or hitting the escape key) [MDN].
        * Specification: HTML5
        * DOM Event Name: dragend
        */
        dragEndHandler?: (element: Elements.HtmlElement, info: DragEvent) => void;
        /**
        * The dragEnterEvent event is executed when a dragged element or text selection enters a valid drop target [MDN].
        * Specification: HTML5
        * DOM Event Name: dragenter
        */
        dragEnterHandler?: (element: Elements.HtmlElement, info: DragEvent) => void;
        /**
        * The dragEvent event is executed when an element or text selection is being dragged (every 350ms) [MDN].
        * Specification: HTML5
        * DOM Event Name: drag
        */
        dragHandler?: (element: Elements.HtmlElement, info: DragEvent) => void;
        /**
        * The dragLeaveEvent event is executed when a dragged element or text selection leaves a valid drop target [MDN].
        * Specification: HTML5
        * DOM Event Name: dragleave
        */
        dragLeaveHandler?: (element: Elements.HtmlElement, info: DragEvent) => void;
        /**
        * The dragOverEvent event is executed when an element or text selection is being dragged over a valid drop target (every 350ms) [MDN].
        * Specification: HTML5
        * DOM Event Name: dragover
        */
        dragOverHandler?: (element: Elements.HtmlElement, info: DragEvent) => void;
        /**
        * The dragStartEvent event is executed when the user starts dragging an element or text selection [MDN].
        * Specification: HTML5
        * DOM Event Name: dragstart
        */
        dragStartHandler?: (element: Elements.HtmlElement, info: DragEvent) => void;
        /**
        * The dropEvent event is executed when an element is dropped on a valid drop target [MDN].
        * Specification: HTML5
        * DOM Event Name: drop
        */
        dropHandler?: (element: Elements.HtmlElement, info: DragEvent) => void;
        /**
        * The loadEvent event is executed when a resource and its dependent resources have finished loading [MDN].
        * Specification: DOM L3
        * DOM Event Name: load
        */
        loadHandler?: (element: Elements.HtmlElement, info: UIEvent) => void;
        /**
        * The resizeEvent event is executed when the document view has been resized [MDN].
        * Specification: DOM L3
        * DOM Event Name: resize
        */
        resizeHandler?: (element: Elements.HtmlElement, info: UIEvent) => void;
        /**
        * The scrollEvent event is executed when the document view or an element has been scrolled [MDN].
        * Specification: DOM L3
        * DOM Event Name: scroll
        */
        scrollHandler?: (element: Elements.HtmlElement, info: UIEvent) => void;
        /**
        * The selectEvent event is executed when some text is being selected [MDN].
        * Specification: DOM L3
        * DOM Event Name: select
        */
        selectHandler?: (element: Elements.HtmlElement, info: UIEvent) => void;
        /**
        * The offlineBackOnlineEvent event is executed when the browser has gained access to the network (but particular websites might be unreachable) [MDN].
        * Specification: HTML5 offline
        * DOM Event Name: online
        */
        offlineBackOnlineHandler?: (element: Elements.HtmlElement, info: Event) => void;
        /**
        * The offlineEvent event is executed when the browser has lost access to the network [MDN].
        * Specification: HTML5 offline
        * DOM Event Name: offline
        */
        offlineHandler?: (element: Elements.HtmlElement, info: Event) => void;
        /**
        * The connectionCheckingEvent event is executed when the user agent is checking for an update, or attempting to download the cache manifest for the first time [MDN].
        * Specification: Offline
        * DOM Event Name: checking
        */
        connectionCheckingHandler?: (element: Elements.HtmlElement, info: Event) => void;
        /**
        * The connectionDownloadingEvent event is executed when the user agent has found an update and is fetching it, or is downloading the resources listed by the cache manifest for the first time [MDN].
        * Specification: Offline
        * DOM Event Name: downloading
        */
        connectionDownloadingHandler?: (element: Elements.HtmlElement, info: Event) => void;
        /**
        * The connectionErrorEvent event is executed when an error occurred while downloading the cache manifest or updating the content of the application [MDN].
        * Specification: Offline
        * DOM Event Name: error
        */
        connectionErrorHandler?: (element: Elements.HtmlElement, info: Event) => void;
        /**
        * The connectionNoUpdateEvent event is executed when the manifest hadn't changed [MDN].
        * Specification: Offline
        * DOM Event Name: noupdate
        */
        connectionNoUpdateHandler?: (element: Elements.HtmlElement, info: Event) => void;
        /**
        * The connectionObsoleteEvent event is executed when the manifest was found to have become a 404 or 410 page, so the application cache is being deleted [MDN].
        * Specification: Offline
        * DOM Event Name: obsolete
        */
        connectionObsoleteHandler?: (element: Elements.HtmlElement, info: Event) => void;
        /**
        * The connectionUpdateReadyEvent event is executed when the resources listed in the manifest have been newly redownloaded, and the script can use swapCache() to switch to the new cache [MDN].
        * Specification: Offline
        * DOM Event Name: updateready
        */
        connectionUpdateReadyHandler?: (element: Elements.HtmlElement, info: Event) => void;
        /**
        * The connectionCachedEvent event is executed when the resources listed in the manifest have been downloaded, and the application is now cached [MDN].
        * Specification: Offline
        * DOM Event Name: cached
        */
        connectionCachedHandler?: (element: Elements.HtmlElement, info: Event) => void;
        /**
        * The svgAbortEvent event is executed when page loading has been stopped before the SVG was loaded [MDN].
        * Specification: SVG
        * DOM Event Name: SVGAbort
        */
        svgAbortHandler?: (element: Elements.HtmlElement, info: Event) => void;
        /**
        * The svgBeginEvent event is executed when a SMIL animation element begins [MDN].
        * Specification: SVG
        * DOM Event Name: beginEvent
        */
        svgBeginHandler?: (element: Elements.HtmlElement, info: Event) => void;
        /**
        * The svgEndEvent event is executed when a SMIL animation element ends [MDN].
        * Specification: SVG
        * DOM Event Name: endEvent
        */
        svgEndHandler?: (element: Elements.HtmlElement, info: Event) => void;
        /**
        * The svgErrorEvent event is executed when an error has occurred before the SVG was loaded [MDN].
        * Specification: SVG
        * DOM Event Name: SVGError
        */
        svgErrorHandler?: (element: Elements.HtmlElement, info: Event) => void;
        /**
        * The svgLoadEvent event is executed when an SVG document has been loaded and parsed [MDN].
        * Specification: SVG
        * DOM Event Name: SVGLoad
        */
        svgLoadHandler?: (element: Elements.HtmlElement, info: Event) => void;
        /**
        * The svgRepeatEvent event is executed when a SMIL animation element is repeated [MDN].
        * Specification: SVG
        * DOM Event Name: repeatEvent
        */
        svgRepeatHandler?: (element: Elements.HtmlElement, info: Event) => void;
        /**
        * The svgResizeEvent event is executed when an SVG document is being resized [MDN].
        * Specification: SVG
        * DOM Event Name: SVGResize
        */
        svgResizeHandler?: (element: Elements.HtmlElement, info: Event) => void;
        /**
        * The svgScrollEvent event is executed when an SVG document is being scrolled [MDN].
        * Specification: SVG
        * DOM Event Name: SVGScroll
        */
        svgScrollHandler?: (element: Elements.HtmlElement, info: Event) => void;
        /**
        * The svgUnloadEvent event is executed when an SVG document has been removed from a window or frame [MDN].
        * Specification: SVG
        * DOM Event Name: SVGUnload
        */
        svgUnloadHandler?: (element: Elements.HtmlElement, info: Event) => void;
        /**
        * The svgZoomEvent event is executed when an SVG document is being zoomed [MDN].
        * Specification: SVG
        * DOM Event Name: SVGZoom
        */
        svgZoomHandler?: (element: Elements.HtmlElement, info: SVGZoomEvent) => void;
        /**
        * The webSocketErrorEvent event is executed when a WebSocket connection has been closed with prejudice (some data couldn't be sent for example) [MDN].
        * Specification: WebSocket
        * DOM Event Name: error
        */
        webSocketErrorHandler?: (element: Elements.HtmlElement, info: Event) => void;
        /**
        * The pageHideEvent event is executed when a session history entry is being traversed from [MDN].
        * Specification: HTML5
        * DOM Event Name: pagehide
        */
        pageHideHandler?: (element: Elements.HtmlElement, info: PageTransitionEvent) => void;
        /**
        * The pageShowEvent event is executed when a session history entry is being traversed to [MDN].
        * Specification: HTML5
        * DOM Event Name: pageshow
        */
        pageShowHandler?: (element: Elements.HtmlElement, info: PageTransitionEvent) => void;
        /**
        * The showEvent event is executed when a contextmenu event was fired on/bubbled to an element that has a contextmenu attribute [MDN].
        * Specification: HTML5
        * DOM Event Name: show
        */
        showHandler?: (element: Elements.HtmlElement, info: MouseEvent) => void;
        /**
        * The contentLoadedEvent event is executed when the document has finished loading (but not its dependent resources) [MDN].
        * Specification: HTML5
        * DOM Event Name: DOMContentLoaded
        */
        contentLoadedHandler?: (element: Elements.HtmlElement, info: Event) => void;
        /**
        * The hashChangeEvent event is executed when the fragment identifier of the URL has changed (the part of the URL after the #) [MDN].
        * Specification: HTML5
        * DOM Event Name: hashchange
        */
        hashChangeHandler?: (element: Elements.HtmlElement, info: Event) => void;
        /**
        * The popStateEvent event is executed when a session history entry is being navigated to (in certain cases) [MDN].
        * Specification: HTML5
        * DOM Event Name: popstate
        */
        popStateHandler?: (element: Elements.HtmlElement, info: PopStateEvent) => void;
        /**
        * The invalidEvent event is executed when a submittable element has been checked and doesn't satisfy its constraints [MDN].
        * Specification: HTML5
        * DOM Event Name: invalid
        */
        invalidHandler?: (element: Elements.HtmlElement, info: Event) => void;
        /**
        * The beforeUnloadEvent event is executed when   [MDN].
        * Specification: HTML5
        * DOM Event Name: beforeunload
        */
        beforeUnloadHandler?: (element: Elements.HtmlElement, info: BeforeUnloadEvent) => void;
        /**
        * The indexedDatabaseErrorEvent event is executed when a request caused an error and failed [MDN].
        * Specification: IndexedDB
        * DOM Event Name: error
        */
        indexedDatabaseErrorHandler?: (element: Elements.HtmlElement, info: Event) => void;
        /**
        * The visibilityChangeEvent event is executed when the content of a tab has become visible or has been hidden [MDN].
        * Specification: Page visibility
        * DOM Event Name: visibilitychange
        */
        visibilityChangeHandler?: (element: Elements.HtmlElement, info: Event) => void;
        /**
        * The requestLoadStartEvent event is executed when progress has begun [MDN].
        * Specifications: Progress , XMLHttpRequest
        * DOM Event Name: loadstart
        */
        requestLoadStartHandler?: (element: Elements.HtmlElement, info: ProgressEvent) => void;
        /**
        * The serverErrorEvent event is executed when an event source connection has been failed [MDN].
        * Specification: Server Sent Events
        * DOM Event Name: error
        */
        serverErrorHandler?: (element: Elements.HtmlElement, info: Event) => void;
        /**
        * The webStorageEvent event is executed when a storage area (localStorage or sessionStorage) has changed [MDN].
        * Specification: Web Storage
        * DOM Event Name: storage
        */
        webStorageHandler?: (element: Elements.HtmlElement, info: StorageEvent) => void;
        /**
        * The requestReadyStateChangeEvent event is executed when the readyState attribute of a document has changed [MDN].
        * Specification: XMLHttpRequest
        * DOM Event Name: readystatechange
        */
        requestReadyStateChangeHandler?: (element: Elements.HtmlElement, info: Event) => void;
        /**
        * The requestTimeoutEvent event is executed when   [MDN].
        * Specification: XMLHttpRequest
        * DOM Event Name: timeout
        */
        requestTimeoutHandler?: (element: Elements.HtmlElement, info: ProgressEvent) => void;
        /**
        * A handler for the initialization event.
        * The initialization event are fired when the element and all of its children have been initialized.
        * Initialization means that the config has been processed and the bindings have been set.
        */
        initializationHandler?: (element: Elements.HtmlElement) => void;
    }
    interface IHtmlElementContainerConfig extends IHtmlElementConfig {
        text?: string;
        textBinder?: b.IBinder<b.PropertyUpdate<string>>;
        child?: Elements.HtmlNode;
        children?: Elements.HtmlNode[];
        childrenBinder?: b.IBinder<bc.CollectionUpdate<Elements.HtmlNode>>;
        /**
        * The copyEvent event is executed when the text selection has been added to the clipboard [MDN].
        * Specification: Clipboard
        * DOM Event Name: copy
        */
        copyHandler?: (element: Elements.HtmlElementContainer, info: Event) => void;
        /**
        * The cutEvent event is executed when the text selection has been removed from the document and added to the clipboard [MDN].
        * Specification: Clipboard
        * DOM Event Name: cut
        */
        cutHandler?: (element: Elements.HtmlElementContainer, info: Event) => void;
        /**
        * The pasteEvent event is executed when data has been transfered from the system clipboard to the document [MDN].
        * Specification: Clipboard
        * DOM Event Name: paste
        */
        pasteHandler?: (element: Elements.HtmlElementContainer, info: Event) => void;
    }
    interface IAbbreviationElementConfig extends IHtmlElementContainerConfig {
    }
    interface IAddressElementConfig extends IHtmlElementContainerConfig {
    }
    interface IAnchorElementConfig extends IHtmlElementContainerConfig {
        href?: string;
        hrefBinder?: b.IBinder<b.PropertyUpdate<string>>;
        hrefLanguage?: string;
        hrefLanguageBinder?: b.IBinder<b.PropertyUpdate<string>>;
        relationship?: string;
        relationshipBinder?: b.IBinder<b.PropertyUpdate<string>>;
        target?: string;
        targetBinder?: b.IBinder<b.PropertyUpdate<string>>;
        type?: string;
        typeBinder?: b.IBinder<b.PropertyUpdate<string>>;
    }
    interface IAreaElementConfig extends IHtmlElementConfig {
        alternate?: string;
        alternateBinder?: b.IBinder<b.PropertyUpdate<string>>;
        coordinates?: string;
        coordinatesBinder?: b.IBinder<b.PropertyUpdate<string>>;
        href?: string;
        hrefBinder?: b.IBinder<b.PropertyUpdate<string>>;
        shape?: string;
        shapeBinder?: b.IBinder<b.PropertyUpdate<string>>;
        target?: string;
        targetBinder?: b.IBinder<b.PropertyUpdate<string>>;
    }
    interface IArticleElementConfig extends IHtmlElementContainerConfig {
    }
    interface IAsideElementConfig extends IHtmlElementContainerConfig {
    }
    interface IAudioElementConfig extends IHtmlElementContainerConfig {
        autoPlay?: boolean;
        autoPlayBinder?: b.IBinder<b.PropertyUpdate<boolean>>;
        buffered?: TimeRanges;
        bufferedBinder?: b.IBinder<b.PropertyUpdate<TimeRanges>>;
        controls?: boolean;
        controlsBinder?: b.IBinder<b.PropertyUpdate<boolean>>;
        loop?: boolean;
        loopBinder?: b.IBinder<b.PropertyUpdate<boolean>>;
        muted?: boolean;
        mutedBinder?: b.IBinder<b.PropertyUpdate<boolean>>;
        played?: TimeRanges;
        playedBinder?: b.IBinder<b.PropertyUpdate<TimeRanges>>;
        preload?: string;
        preloadBinder?: b.IBinder<b.PropertyUpdate<string>>;
        source?: string;
        sourceBinder?: b.IBinder<b.PropertyUpdate<string>>;
        volume?: number;
        volumeBinder?: b.IBinder<b.PropertyUpdate<number>>;
        /**
        * The audioCompleteEvent event is executed when the rendering of an OfflineAudioContext is terminated [MDN].
        * Specification: Web Audio API
        * DOM Event Name: complete
        */
        audioCompleteHandler?: (element: Elements.AudioElement, info: Event) => void;
        /**
        * The audioEndedEvent event is executed when   [MDN].
        * Specification: Web Audio API
        * DOM Event Name: ended
        */
        audioEndedHandler?: (element: Elements.AudioElement, info: Event) => void;
        /**
        * The audioProcessEvent event is executed when the input buffer of a ScriptProcessorNode is ready to be processed [MDN].
        * Specification: Web Audio API
        * DOM Event Name: audioprocess
        */
        audioProcessHandler?: (element: Elements.AudioElement, info: Event) => void;
        /**
        * The mediaCanPlayEvent event is executed when the user agent can play the media, but estimates that not enough data has been loaded to play the media up to its end without having to stop for further buffering of content [MDN].
        * Specification: HTML5 media
        * DOM Event Name: canplay
        */
        mediaCanPlayHandler?: (element: Elements.AudioElement, info: Event) => void;
        /**
        * The mediaCanPlayThroughEvent event is executed when the user agent can play the media, and estimates that enough data has been loaded to play the media up to its end without having to stop for further buffering of content [MDN].
        * Specification: HTML5 media
        * DOM Event Name: canplaythrough
        */
        mediaCanPlayThroughHandler?: (element: Elements.AudioElement, info: Event) => void;
        /**
        * The mediaDurationChangeEvent event is executed when the duration attribute has been updated [MDN].
        * Specification: HTML5 media
        * DOM Event Name: durationchange
        */
        mediaDurationChangeHandler?: (element: Elements.AudioElement, info: Event) => void;
        /**
        * The mediaEmptiedEvent event is executed when the media has become empty; for example, this event is sent if the media has already been loaded (or partially loaded), and the load() method is called to reload it [MDN].
        * Specification: HTML5 media
        * DOM Event Name: emptied
        */
        mediaEmptiedHandler?: (element: Elements.AudioElement, info: Event) => void;
        /**
        * The mediaEndedEvent event is executed when playback has stopped because the end of the media was reached [MDN].
        * Specification: HTML5 media
        * DOM Event Name: ended
        */
        mediaEndedHandler?: (element: Elements.AudioElement, info: Event) => void;
        /**
        * The mediaLoadedDataEvent event is executed when the first frame of the media has finished loading [MDN].
        * Specification: HTML5 media
        * DOM Event Name: loadeddata
        */
        mediaLoadedDataHandler?: (element: Elements.AudioElement, info: Event) => void;
        /**
        * The mediaLoadedMetadataEvent event is executed when the metadata has been loaded [MDN].
        * Specification: HTML5 media
        * DOM Event Name: loadedmetadata
        */
        mediaLoadedMetadataHandler?: (element: Elements.AudioElement, info: Event) => void;
        /**
        * The mediaPauseEvent event is executed when playback has been paused [MDN].
        * Specification: HTML5 media
        * DOM Event Name: pause
        */
        mediaPauseHandler?: (element: Elements.AudioElement, info: Event) => void;
        /**
        * The mediaPlayEvent event is executed when playback has begun [MDN].
        * Specification: HTML5 media
        * DOM Event Name: play
        */
        mediaPlayHandler?: (element: Elements.AudioElement, info: Event) => void;
        /**
        * The mediaPlayingEvent event is executed when playback is ready to start after having been paused or delayed due to lack of data [MDN].
        * Specification: HTML5 media
        * DOM Event Name: playing
        */
        mediaPlayingHandler?: (element: Elements.AudioElement, info: Event) => void;
        /**
        * The mediaRateChangeEvent event is executed when the playback rate has changed [MDN].
        * Specification: HTML5 media
        * DOM Event Name: ratechange
        */
        mediaRateChangeHandler?: (element: Elements.AudioElement, info: Event) => void;
        /**
        * The mediaSeekedEvent event is executed when a seek operation completed [MDN].
        * Specification: HTML5 media
        * DOM Event Name: seeked
        */
        mediaSeekedHandler?: (element: Elements.AudioElement, info: Event) => void;
        /**
        * The mediaSeekingEvent event is executed when a seek operation began [MDN].
        * Specification: HTML5 media
        * DOM Event Name: seeking
        */
        mediaSeekingHandler?: (element: Elements.AudioElement, info: Event) => void;
        /**
        * The mediaStalledEvent event is executed when the user agent is trying to fetch media data, but data is unexpectedly not forthcoming [MDN].
        * Specification: HTML5 media
        * DOM Event Name: stalled
        */
        mediaStalledHandler?: (element: Elements.AudioElement, info: Event) => void;
        /**
        * The mediaSuspendEvent event is executed when media data loading has been suspended [MDN].
        * Specification: HTML5 media
        * DOM Event Name: suspend
        */
        mediaSuspendHandler?: (element: Elements.AudioElement, info: Event) => void;
        /**
        * The mediaTimeUpdateEvent event is executed when the time indicated by the currentTime attribute has been updated [MDN].
        * Specification: HTML5 media
        * DOM Event Name: timeupdate
        */
        mediaTimeUpdateHandler?: (element: Elements.AudioElement, info: Event) => void;
        /**
        * The mediaVolumeChangeEvent event is executed when the volume has changed [MDN].
        * Specification: HTML5 media
        * DOM Event Name: volumechange
        */
        mediaVolumeChangeHandler?: (element: Elements.AudioElement, info: Event) => void;
        /**
        * The mediaWaitingEvent event is executed when playback has stopped because of a temporary lack of data [MDN].
        * Specification: HTML5 media
        * DOM Event Name: waiting
        */
        mediaWaitingHandler?: (element: Elements.AudioElement, info: Event) => void;
    }
    interface IBaseElementConfig extends IHtmlElementConfig {
        href?: string;
        hrefBinder?: b.IBinder<b.PropertyUpdate<string>>;
        target?: string;
        targetBinder?: b.IBinder<b.PropertyUpdate<string>>;
    }
    interface IBidirectionalIsolationElementConfig extends IHtmlElementContainerConfig {
    }
    interface IBidirectionalOverrideElementConfig extends IHtmlElementContainerConfig {
    }
    interface IBlockQuotationElementConfig extends IHtmlElementContainerConfig {
        citation?: string;
        citationBinder?: b.IBinder<b.PropertyUpdate<string>>;
    }
    interface IBodyElementConfig extends IHtmlElementContainerConfig {
        /**
        * The unloadEvent event is executed when the document or a dependent resource is being unloaded [MDN].
        * Specification: DOM L3
        * DOM Event Name: unload
        */
        unloadHandler?: (element: Elements.BodyElement, info: UIEvent) => void;
    }
    interface IBoldElementConfig extends IHtmlElementContainerConfig {
    }
    interface IButtonElementConfig extends IHtmlElementContainerConfig {
        autoFocus?: boolean;
        autoFocusBinder?: b.IBinder<b.PropertyUpdate<boolean>>;
        disabled?: boolean;
        disabledBinder?: b.IBinder<b.PropertyUpdate<boolean>>;
        formID?: string;
        name?: string;
        nameBinder?: b.IBinder<b.PropertyUpdate<string>>;
        type?: string;
        typeBinder?: b.IBinder<b.PropertyUpdate<string>>;
        value?: string;
        valueBinder?: b.IBinder<b.PropertyUpdate<string>>;
    }
    interface ICanvasElementConfig extends IHtmlElementContainerConfig {
        width?: number;
        widthBinder?: b.IBinder<b.PropertyUpdate<number>>;
        height?: number;
        heightBinder?: b.IBinder<b.PropertyUpdate<number>>;
    }
    interface ICitationElementConfig extends IHtmlElementContainerConfig {
    }
    interface ICodeElementConfig extends IHtmlElementContainerConfig {
    }
    interface IDataElementConfig extends IHtmlElementContainerConfig {
        value?: string;
        valueBinder?: b.IBinder<b.PropertyUpdate<string>>;
    }
    interface IDataListElementConfig extends IHtmlElementContainerConfig {
    }
    interface IDefinitionElementConfig extends IHtmlElementContainerConfig {
    }
    interface IDefinitionTermElementConfig extends IHtmlElementContainerConfig {
    }
    interface IDeletedTextElementConfig extends IHtmlElementContainerConfig {
        citation?: string;
        citationBinder?: b.IBinder<b.PropertyUpdate<string>>;
    }
    interface IDescriptionElementConfig extends IHtmlElementContainerConfig {
    }
    interface IDescriptionListElementConfig extends IHtmlElementContainerConfig {
    }
    interface IDetailsElementConfig extends IHtmlElementContainerConfig {
    }
    interface IDivisionElementConfig extends IHtmlElementContainerConfig {
    }
    interface IEmbedElementConfig extends IHtmlElementConfig {
        height?: string;
        heightBinder?: b.IBinder<b.PropertyUpdate<string>>;
        source?: string;
        sourceBinder?: b.IBinder<b.PropertyUpdate<string>>;
        width?: string;
        widthBinder?: b.IBinder<b.PropertyUpdate<string>>;
    }
    interface IEmbeddedObjectElementConfig extends IHtmlElementContainerConfig {
        data?: string;
        dataBinder?: b.IBinder<b.PropertyUpdate<string>>;
        formID?: string;
        height?: string;
        heightBinder?: b.IBinder<b.PropertyUpdate<string>>;
        name?: string;
        nameBinder?: b.IBinder<b.PropertyUpdate<string>>;
        type?: string;
        typeBinder?: b.IBinder<b.PropertyUpdate<string>>;
        width?: string;
        widthBinder?: b.IBinder<b.PropertyUpdate<string>>;
    }
    interface IEmphasisElementConfig extends IHtmlElementContainerConfig {
    }
    interface IFieldsetElementConfig extends IHtmlElementContainerConfig {
        disabled?: boolean;
        disabledBinder?: b.IBinder<b.PropertyUpdate<boolean>>;
        formID?: string;
    }
    interface IFigureElementConfig extends IHtmlElementContainerConfig {
    }
    interface IFigureCaptionElementConfig extends IHtmlElementContainerConfig {
    }
    interface IFooterElementConfig extends IHtmlElementContainerConfig {
    }
    interface IFormElementConfig extends IHtmlElementContainerConfig {
        acceptCharset?: string;
        acceptCharsetBinder?: b.IBinder<b.PropertyUpdate<string>>;
        action?: string;
        actionBinder?: b.IBinder<b.PropertyUpdate<string>>;
        autoComplete?: string;
        autoCompleteBinder?: b.IBinder<b.PropertyUpdate<string>>;
        encodingType?: string;
        encodingTypeBinder?: b.IBinder<b.PropertyUpdate<string>>;
        method?: string;
        methodBinder?: b.IBinder<b.PropertyUpdate<string>>;
        name?: string;
        nameBinder?: b.IBinder<b.PropertyUpdate<string>>;
        target?: string;
        targetBinder?: b.IBinder<b.PropertyUpdate<string>>;
        /**
        * The resetEvent event is executed when a form is reset [MDN].
        * Specifications: DOM L2, HTML5
        * DOM Event Name: reset
        */
        resetHandler?: (element: Elements.FormElement, info: Event) => void;
        /**
        * The submitEvent event is executed when a form is submitted [MDN].
        * Specifications: DOM L2, HTML5
        * DOM Event Name: submit
        */
        submitHandler?: (element: Elements.FormElement, info: Event) => void;
    }
    interface IHeadElementConfig extends IHtmlElementContainerConfig {
    }
    interface IHeaderElementConfig extends IHtmlElementContainerConfig {
    }
    interface IHeaderFiveElementConfig extends IHtmlElementContainerConfig {
    }
    interface IHeaderFourElementConfig extends IHtmlElementContainerConfig {
    }
    interface IHeaderOneElementConfig extends IHtmlElementContainerConfig {
    }
    interface IHeaderSixElementConfig extends IHtmlElementContainerConfig {
    }
    interface IHeaderThreeElementConfig extends IHtmlElementContainerConfig {
    }
    interface IHeaderTwoElementConfig extends IHtmlElementContainerConfig {
    }
    interface IHorizontalRuleElementConfig extends IHtmlElementConfig {
    }
    interface IImageElementConfig extends IHtmlElementConfig {
        alternate?: string;
        alternateBinder?: b.IBinder<b.PropertyUpdate<string>>;
        height?: number;
        heightBinder?: b.IBinder<b.PropertyUpdate<number>>;
        longDescription?: string;
        longDescriptionBinder?: b.IBinder<b.PropertyUpdate<string>>;
        source?: string;
        sourceBinder?: b.IBinder<b.PropertyUpdate<string>>;
        width?: number;
        widthBinder?: b.IBinder<b.PropertyUpdate<number>>;
        /**
        * The abortEvent event is executed when the loading of a resource has been aborted [MDN].
        * Specification: DOM L3
        * DOM Event Name: abort
        */
        abortHandler?: (element: Elements.ImageElement, info: UIEvent) => void;
        /**
        * The errorEvent event is executed when a resource failed to load [MDN].
        * Specification: DOM L3
        * DOM Event Name: error
        */
        errorHandler?: (element: Elements.ImageElement, info: UIEvent) => void;
    }
    interface IInlineFrameElementConfig extends IHtmlElementContainerConfig {
        height?: string;
        heightBinder?: b.IBinder<b.PropertyUpdate<string>>;
        name?: string;
        nameBinder?: b.IBinder<b.PropertyUpdate<string>>;
        scrolling?: string;
        scrollingBinder?: b.IBinder<b.PropertyUpdate<string>>;
        source?: string;
        sourceBinder?: b.IBinder<b.PropertyUpdate<string>>;
        width?: string;
        widthBinder?: b.IBinder<b.PropertyUpdate<string>>;
    }
    interface IInputElementConfig extends IHtmlElementConfig {
        type?: string;
        typeBinder?: b.IBinder<b.PropertyUpdate<string>>;
        accept?: string;
        acceptBinder?: b.IBinder<b.PropertyUpdate<string>>;
        autoComplete?: string;
        autoCompleteBinder?: b.IBinder<b.PropertyUpdate<string>>;
        autoFocus?: boolean;
        autoFocusBinder?: b.IBinder<b.PropertyUpdate<boolean>>;
        checked?: boolean;
        checkedBinder?: b.IBinder<b.PropertyUpdate<boolean>>;
        disabled?: boolean;
        disabledBinder?: b.IBinder<b.PropertyUpdate<boolean>>;
        formID?: string;
        height?: number;
        heightBinder?: b.IBinder<b.PropertyUpdate<number>>;
        listID?: string;
        max?: string;
        maxBinder?: b.IBinder<b.PropertyUpdate<string>>;
        min?: string;
        minBinder?: b.IBinder<b.PropertyUpdate<string>>;
        multiple?: boolean;
        multipleBinder?: b.IBinder<b.PropertyUpdate<boolean>>;
        name?: string;
        nameBinder?: b.IBinder<b.PropertyUpdate<string>>;
        pattern?: string;
        patternBinder?: b.IBinder<b.PropertyUpdate<string>>;
        placeHolder?: string;
        placeHolderBinder?: b.IBinder<b.PropertyUpdate<string>>;
        required?: boolean;
        requiredBinder?: b.IBinder<b.PropertyUpdate<boolean>>;
        size?: number;
        sizeBinder?: b.IBinder<b.PropertyUpdate<number>>;
        source?: string;
        sourceBinder?: b.IBinder<b.PropertyUpdate<string>>;
        step?: string;
        stepBinder?: b.IBinder<b.PropertyUpdate<string>>;
        value?: string;
        valueBinder?: b.IBinder<b.PropertyUpdate<string>>;
        width?: number;
        widthBinder?: b.IBinder<b.PropertyUpdate<number>>;
        /**
        * The changeEvent event is executed when an element loses focus and its value changed since gaining focus [MDN].
        * Specifications: DOM L2, HTML5
        * DOM Event Name: change
        */
        changeHandler?: (element: Elements.InputElement, info: Event) => void;
        /**
        * The inputEvent event is executed when the value of an element changes or the content of an element with the attribute contenteditable is modified [MDN].
        * Specification: HTML5
        * DOM Event Name: input
        */
        inputHandler?: (element: Elements.InputElement, info: Event) => void;
    }
    interface IInsertedElementConfig extends IHtmlElementContainerConfig {
        citation?: string;
        citationBinder?: b.IBinder<b.PropertyUpdate<string>>;
    }
    interface IItalicElementConfig extends IHtmlElementContainerConfig {
    }
    interface IKeyboardInputElementConfig extends IHtmlElementContainerConfig {
    }
    interface ILabelElementConfig extends IHtmlElementContainerConfig {
        formID?: string;
    }
    interface ILegendFieldElementConfig extends IHtmlElementContainerConfig {
    }
    interface ILineBreakElementConfig extends IHtmlElementConfig {
    }
    interface ILinkElementConfig extends IHtmlElementConfig {
        characterSet?: string;
        characterSetBinder?: b.IBinder<b.PropertyUpdate<string>>;
        href?: string;
        hrefBinder?: b.IBinder<b.PropertyUpdate<string>>;
        hrefLanguage?: string;
        hrefLanguageBinder?: b.IBinder<b.PropertyUpdate<string>>;
        media?: string;
        mediaBinder?: b.IBinder<b.PropertyUpdate<string>>;
        relationship?: string;
        relationshipBinder?: b.IBinder<b.PropertyUpdate<string>>;
        reverseRelationship?: string;
        reverseRelationshipBinder?: b.IBinder<b.PropertyUpdate<string>>;
        type?: string;
        typeBinder?: b.IBinder<b.PropertyUpdate<string>>;
    }
    interface IListItemElementConfig extends IHtmlElementContainerConfig {
        value?: number;
        valueBinder?: b.IBinder<b.PropertyUpdate<number>>;
        type?: string;
        typeBinder?: b.IBinder<b.PropertyUpdate<string>>;
    }
    interface IMainElementConfig extends IHtmlElementContainerConfig {
    }
    interface IMapElementConfig extends IHtmlElementContainerConfig {
        name?: string;
        nameBinder?: b.IBinder<b.PropertyUpdate<string>>;
    }
    interface IMarkElementConfig extends IHtmlElementContainerConfig {
    }
    interface IMetaElementConfig extends IHtmlElementConfig {
        content?: string;
        contentBinder?: b.IBinder<b.PropertyUpdate<string>>;
        httpEquiv?: string;
        httpEquivBinder?: b.IBinder<b.PropertyUpdate<string>>;
        name?: string;
        nameBinder?: b.IBinder<b.PropertyUpdate<string>>;
        scheme?: string;
        schemeBinder?: b.IBinder<b.PropertyUpdate<string>>;
    }
    interface INavigationElementConfig extends IHtmlElementContainerConfig {
    }
    interface INoScriptElementConfig extends IHtmlElementContainerConfig {
    }
    interface IOptionElementConfig extends IHtmlElementContainerConfig {
        disabled?: boolean;
        disabledBinder?: b.IBinder<b.PropertyUpdate<boolean>>;
        label?: string;
        labelBinder?: b.IBinder<b.PropertyUpdate<string>>;
        selected?: boolean;
        selectedBinder?: b.IBinder<b.PropertyUpdate<boolean>>;
        value?: string;
        valueBinder?: b.IBinder<b.PropertyUpdate<string>>;
    }
    interface IOptionsGroupElementConfig extends IHtmlElementContainerConfig {
        disabled?: boolean;
        disabledBinder?: b.IBinder<b.PropertyUpdate<boolean>>;
        label?: string;
        labelBinder?: b.IBinder<b.PropertyUpdate<string>>;
    }
    interface IOrderedListElementConfig extends IHtmlElementContainerConfig {
        compact?: boolean;
        compactBinder?: b.IBinder<b.PropertyUpdate<boolean>>;
        start?: number;
        startBinder?: b.IBinder<b.PropertyUpdate<number>>;
        type?: string;
        typeBinder?: b.IBinder<b.PropertyUpdate<string>>;
    }
    interface IParagraphElementConfig extends IHtmlElementContainerConfig {
    }
    interface IParameterElementConfig extends IHtmlElementConfig {
        name?: string;
        nameBinder?: b.IBinder<b.PropertyUpdate<string>>;
        type?: string;
        typeBinder?: b.IBinder<b.PropertyUpdate<string>>;
        value?: string;
        valueBinder?: b.IBinder<b.PropertyUpdate<string>>;
        valueType?: string;
        valueTypeBinder?: b.IBinder<b.PropertyUpdate<string>>;
    }
    interface IPreformattedElementConfig extends IHtmlElementContainerConfig {
    }
    interface IProgressElementConfig extends IHtmlElementContainerConfig {
        max?: number;
        maxBinder?: b.IBinder<b.PropertyUpdate<number>>;
        value?: number;
        valueBinder?: b.IBinder<b.PropertyUpdate<number>>;
        /**
        * The progressErrorEvent event is executed when progression has failed [MDN].
        * Specifications: Progress, XMLHttpRequest
        * DOM Event Name: error
        */
        progressErrorHandler?: (element: Elements.ProgressElement, info: ProgressEvent) => void;
        /**
        * The progressEvent event is executed when in progress [MDN].
        * Specifications: Progress, XMLHttpRequest
        * DOM Event Name: progress
        */
        progressHandler?: (element: Elements.ProgressElement, info: ProgressEvent) => void;
        /**
        * The progressLoadEndEvent event is executed when progress has stopped (after "error", "abort" or "load" have been dispatched) [MDN].
        * Specifications: Progress, XMLHttpRequest
        * DOM Event Name: loadend
        */
        progressLoadEndHandler?: (element: Elements.ProgressElement, info: ProgressEvent) => void;
    }
    interface IQuoteElementConfig extends IHtmlElementContainerConfig {
        citation?: string;
        citationBinder?: b.IBinder<b.PropertyUpdate<string>>;
    }
    interface IRootElementConfig extends IHtmlElementContainerConfig {
    }
    interface IRubyElementConfig extends IHtmlElementContainerConfig {
    }
    interface IRubyParenthesisElementConfig extends IHtmlElementContainerConfig {
    }
    interface IRubyPronunciationElementConfig extends IHtmlElementContainerConfig {
    }
    interface ISampleElementConfig extends IHtmlElementContainerConfig {
    }
    interface IScriptElementConfig extends IHtmlElementContainerConfig {
        async?: boolean;
        asyncBinder?: b.IBinder<b.PropertyUpdate<boolean>>;
        source?: string;
        sourceBinder?: b.IBinder<b.PropertyUpdate<string>>;
        type?: string;
        typeBinder?: b.IBinder<b.PropertyUpdate<string>>;
        defer?: boolean;
        deferBinder?: b.IBinder<b.PropertyUpdate<boolean>>;
        /**
        * The errorEvent event is executed when a resource failed to load [MDN].
        * Specification: DOM L3
        * DOM Event Name: error
        */
        errorHandler?: (element: Elements.ScriptElement, info: UIEvent) => void;
    }
    interface ISectionElementConfig extends IHtmlElementContainerConfig {
    }
    interface ISelectElementConfig extends IHtmlElementContainerConfig {
        autoFocus?: boolean;
        autoFocusBinder?: b.IBinder<b.PropertyUpdate<boolean>>;
        disabled?: boolean;
        disabledBinder?: b.IBinder<b.PropertyUpdate<boolean>>;
        formID?: string;
        multipleOptions?: boolean;
        multipleOptionsBinder?: b.IBinder<b.PropertyUpdate<boolean>>;
        name?: string;
        nameBinder?: b.IBinder<b.PropertyUpdate<string>>;
        required?: boolean;
        requiredBinder?: b.IBinder<b.PropertyUpdate<boolean>>;
        size?: number;
        sizeBinder?: b.IBinder<b.PropertyUpdate<number>>;
        /**
        * The changeEvent event is executed when an element loses focus and its value changed since gaining focus [MDN].
        * Specifications: DOM L2, HTML5
        * DOM Event Name: change
        */
        changeHandler?: (element: Elements.SelectElement, info: Event) => void;
    }
    interface ISmallElementConfig extends IHtmlElementContainerConfig {
    }
    interface ISourceElementConfig extends IHtmlElementContainerConfig {
        source?: string;
        sourceBinder?: b.IBinder<b.PropertyUpdate<string>>;
        type?: string;
        typeBinder?: b.IBinder<b.PropertyUpdate<string>>;
    }
    interface ISpanElementConfig extends IHtmlElementContainerConfig {
    }
    interface IStrikethroughElementConfig extends IHtmlElementContainerConfig {
    }
    interface IStrongElementConfig extends IHtmlElementContainerConfig {
    }
    interface IStyleElementConfig extends IHtmlElementContainerConfig {
        type?: string;
        typeBinder?: b.IBinder<b.PropertyUpdate<string>>;
        media?: string;
        mediaBinder?: b.IBinder<b.PropertyUpdate<string>>;
        disabledBinder?: b.IBinder<b.PropertyUpdate<boolean>>;
        /**
        * The errorEvent event is executed when a resource failed to load [MDN].
        * Specification: DOM L3
        * DOM Event Name: error
        */
        errorHandler?: (element: Elements.StyleElement, info: UIEvent) => void;
    }
    interface ISubscriptElementConfig extends IHtmlElementContainerConfig {
    }
    interface ISummaryElementConfig extends IHtmlElementContainerConfig {
    }
    interface ISuperscriptElementConfig extends IHtmlElementContainerConfig {
    }
    interface ITableElementConfig extends IHtmlElementContainerConfig {
    }
    interface ITableCaptionElementConfig extends IHtmlElementContainerConfig {
    }
    interface ITableColumnElementConfig extends IHtmlElementConfig {
        span?: number;
        spanBinder?: b.IBinder<b.PropertyUpdate<number>>;
    }
    interface ITableColumnGroupElementConfig extends IHtmlElementConfig {
        span?: number;
        spanBinder?: b.IBinder<b.PropertyUpdate<number>>;
        width?: string;
        widthBinder?: b.IBinder<b.PropertyUpdate<string>>;
    }
    interface ITableDataCellElementConfig extends IHtmlElementContainerConfig {
        columnSpan?: number;
        columnSpanBinder?: b.IBinder<b.PropertyUpdate<number>>;
        headers?: string;
        headersBinder?: b.IBinder<b.PropertyUpdate<string>>;
        rowSpan?: number;
        rowSpanBinder?: b.IBinder<b.PropertyUpdate<number>>;
        scope?: string;
        scopeBinder?: b.IBinder<b.PropertyUpdate<string>>;
    }
    interface ITableHeaderCellElementConfig extends IHtmlElementContainerConfig {
        columnSpan?: number;
        columnSpanBinder?: b.IBinder<b.PropertyUpdate<number>>;
        headers?: string;
        headersBinder?: b.IBinder<b.PropertyUpdate<string>>;
        rowSpan?: number;
        rowSpanBinder?: b.IBinder<b.PropertyUpdate<number>>;
    }
    interface ITableRowElementConfig extends IHtmlElementContainerConfig {
    }
    interface ITextAreaElementConfig extends IHtmlElementContainerConfig {
        autoFocus?: boolean;
        autoFocusBinder?: b.IBinder<b.PropertyUpdate<boolean>>;
        columns?: number;
        columnsBinder?: b.IBinder<b.PropertyUpdate<number>>;
        disabled?: boolean;
        disabledBinder?: b.IBinder<b.PropertyUpdate<boolean>>;
        formID?: string;
        maxLength?: number;
        maxLengthBinder?: b.IBinder<b.PropertyUpdate<number>>;
        name?: string;
        nameBinder?: b.IBinder<b.PropertyUpdate<string>>;
        placeHolder?: string;
        placeHolderBinder?: b.IBinder<b.PropertyUpdate<string>>;
        readOnly?: boolean;
        readOnlyBinder?: b.IBinder<b.PropertyUpdate<boolean>>;
        required?: boolean;
        requiredBinder?: b.IBinder<b.PropertyUpdate<boolean>>;
        rows?: number;
        rowsBinder?: b.IBinder<b.PropertyUpdate<number>>;
        selectionEndBinder?: b.IBinder<b.PropertyUpdate<number>>;
        selectionStartBinder?: b.IBinder<b.PropertyUpdate<number>>;
        wrap?: string;
        wrapBinder?: b.IBinder<b.PropertyUpdate<string>>;
        /**
        * The changeEvent event is executed when an element loses focus and its value changed since gaining focus [MDN].
        * Specifications: DOM L2, HTML5
        * DOM Event Name: change
        */
        changeHandler?: (element: Elements.TextAreaElement, info: Event) => void;
        /**
        * The inputEvent event is executed when the value of an element changes or the content of an element with the attribute contenteditable is modified [MDN].
        * Specification: HTML5
        * DOM Event Name: input
        */
        inputHandler?: (element: Elements.TextAreaElement, info: Event) => void;
    }
    interface ITitleElementConfig extends IHtmlElementContainerConfig {
    }
    interface ITrackElementConfig extends IHtmlElementContainerConfig {
        default?: boolean;
        defaultBinder?: b.IBinder<b.PropertyUpdate<boolean>>;
        kind?: string;
        kindBinder?: b.IBinder<b.PropertyUpdate<string>>;
        label?: string;
        labelBinder?: b.IBinder<b.PropertyUpdate<string>>;
        source?: string;
        sourceBinder?: b.IBinder<b.PropertyUpdate<string>>;
        sourceLanguage?: string;
        sourceLanguageBinder?: b.IBinder<b.PropertyUpdate<string>>;
    }
    interface IUnderlineElementConfig extends IHtmlElementContainerConfig {
    }
    interface IUnorderedListElementConfig extends IHtmlElementContainerConfig {
        compact?: boolean;
        compactBinder?: b.IBinder<b.PropertyUpdate<boolean>>;
        type?: string;
        typeBinder?: b.IBinder<b.PropertyUpdate<string>>;
    }
    interface IVariableElementConfig extends IHtmlElementContainerConfig {
    }
    interface IVideoElementConfig extends IHtmlElementContainerConfig {
        autoPlay?: boolean;
        autoPlayBinder?: b.IBinder<b.PropertyUpdate<boolean>>;
        buffered?: TimeRanges;
        bufferedBinder?: b.IBinder<b.PropertyUpdate<TimeRanges>>;
        controls?: boolean;
        controlsBinder?: b.IBinder<b.PropertyUpdate<boolean>>;
        height?: number;
        heightBinder?: b.IBinder<b.PropertyUpdate<number>>;
        loop?: boolean;
        loopBinder?: b.IBinder<b.PropertyUpdate<boolean>>;
        muted?: boolean;
        mutedBinder?: b.IBinder<b.PropertyUpdate<boolean>>;
        played?: TimeRanges;
        playedBinder?: b.IBinder<b.PropertyUpdate<TimeRanges>>;
        preload?: string;
        preloadBinder?: b.IBinder<b.PropertyUpdate<string>>;
        poster?: string;
        posterBinder?: b.IBinder<b.PropertyUpdate<string>>;
        source?: string;
        sourceBinder?: b.IBinder<b.PropertyUpdate<string>>;
        width?: number;
        widthBinder?: b.IBinder<b.PropertyUpdate<number>>;
        /**
        * The mediaCanPlayEvent event is executed when the user agent can play the media, but estimates that not enough data has been loaded to play the media up to its end without having to stop for further buffering of content [MDN].
        * Specification: HTML5 media
        * DOM Event Name: canplay
        */
        mediaCanPlayHandler?: (element: Elements.VideoElement, info: Event) => void;
        /**
        * The mediaCanPlayThroughEvent event is executed when the user agent can play the media, and estimates that enough data has been loaded to play the media up to its end without having to stop for further buffering of content [MDN].
        * Specification: HTML5 media
        * DOM Event Name: canplaythrough
        */
        mediaCanPlayThroughHandler?: (element: Elements.VideoElement, info: Event) => void;
        /**
        * The mediaDurationChangeEvent event is executed when the duration attribute has been updated [MDN].
        * Specification: HTML5 media
        * DOM Event Name: durationchange
        */
        mediaDurationChangeHandler?: (element: Elements.VideoElement, info: Event) => void;
        /**
        * The mediaEmptiedEvent event is executed when the media has become empty; for example, this event is sent if the media has already been loaded (or partially loaded), and the load() method is called to reload it [MDN].
        * Specification: HTML5 media
        * DOM Event Name: emptied
        */
        mediaEmptiedHandler?: (element: Elements.VideoElement, info: Event) => void;
        /**
        * The mediaEndedEvent event is executed when playback has stopped because the end of the media was reached [MDN].
        * Specification: HTML5 media
        * DOM Event Name: ended
        */
        mediaEndedHandler?: (element: Elements.VideoElement, info: Event) => void;
        /**
        * The mediaLoadedDataEvent event is executed when the first frame of the media has finished loading [MDN].
        * Specification: HTML5 media
        * DOM Event Name: loadeddata
        */
        mediaLoadedDataHandler?: (element: Elements.VideoElement, info: Event) => void;
        /**
        * The mediaLoadedMetadataEvent event is executed when the metadata has been loaded [MDN].
        * Specification: HTML5 media
        * DOM Event Name: loadedmetadata
        */
        mediaLoadedMetadataHandler?: (element: Elements.VideoElement, info: Event) => void;
        /**
        * The mediaPauseEvent event is executed when playback has been paused [MDN].
        * Specification: HTML5 media
        * DOM Event Name: pause
        */
        mediaPauseHandler?: (element: Elements.VideoElement, info: Event) => void;
        /**
        * The mediaPlayEvent event is executed when playback has begun [MDN].
        * Specification: HTML5 media
        * DOM Event Name: play
        */
        mediaPlayHandler?: (element: Elements.VideoElement, info: Event) => void;
        /**
        * The mediaPlayingEvent event is executed when playback is ready to start after having been paused or delayed due to lack of data [MDN].
        * Specification: HTML5 media
        * DOM Event Name: playing
        */
        mediaPlayingHandler?: (element: Elements.VideoElement, info: Event) => void;
        /**
        * The mediaRateChangeEvent event is executed when the playback rate has changed [MDN].
        * Specification: HTML5 media
        * DOM Event Name: ratechange
        */
        mediaRateChangeHandler?: (element: Elements.VideoElement, info: Event) => void;
        /**
        * The mediaSeekedEvent event is executed when a seek operation completed [MDN].
        * Specification: HTML5 media
        * DOM Event Name: seeked
        */
        mediaSeekedHandler?: (element: Elements.VideoElement, info: Event) => void;
        /**
        * The mediaSeekingEvent event is executed when a seek operation began [MDN].
        * Specification: HTML5 media
        * DOM Event Name: seeking
        */
        mediaSeekingHandler?: (element: Elements.VideoElement, info: Event) => void;
        /**
        * The mediaStalledEvent event is executed when the user agent is trying to fetch media data, but data is unexpectedly not forthcoming [MDN].
        * Specification: HTML5 media
        * DOM Event Name: stalled
        */
        mediaStalledHandler?: (element: Elements.VideoElement, info: Event) => void;
        /**
        * The mediaSuspendEvent event is executed when media data loading has been suspended [MDN].
        * Specification: HTML5 media
        * DOM Event Name: suspend
        */
        mediaSuspendHandler?: (element: Elements.VideoElement, info: Event) => void;
        /**
        * The mediaTimeUpdateEvent event is executed when the time indicated by the currentTime attribute has been updated [MDN].
        * Specification: HTML5 media
        * DOM Event Name: timeupdate
        */
        mediaTimeUpdateHandler?: (element: Elements.VideoElement, info: Event) => void;
        /**
        * The mediaVolumeChangeEvent event is executed when the volume has changed [MDN].
        * Specification: HTML5 media
        * DOM Event Name: volumechange
        */
        mediaVolumeChangeHandler?: (element: Elements.VideoElement, info: Event) => void;
        /**
        * The mediaWaitingEvent event is executed when playback has stopped because of a temporary lack of data [MDN].
        * Specification: HTML5 media
        * DOM Event Name: waiting
        */
        mediaWaitingHandler?: (element: Elements.VideoElement, info: Event) => void;
    }
    interface IWordBreakOpportunityElementConfig extends IHtmlElementContainerConfig {
    }
}
declare module Classical.Html.Elements {
    import b = Classical.Binding;
    import bc = Classical.Binding.Collections;
    class HtmlNode {
        private _config;
        private _element;
        private _elementName;
        private _observer;
        private _isInitialized;
        private _initialization;
        /**
        * Protected: Denotes that the DOM node is undergoing a binding update.
        */
        private _updating;
        /**
        * Returns the parent element, that contains this element as a child.
        * @returns The parent containing element of the current element.
        */
        parent: HtmlElementContainer;
        /**
        * Returns the DOM node wrapped by the HtmlNode.
        * @returns The DOM node wrapped by the HtmlNode.
        */
        element: Node;
        /**
        * Returns the name of the underlying DOM element.
        * This name is used as the argument to document.createElement to create the underlying DOM node.
        * @returns the name of the underlying DOM element.
        */
        elementName: string;
        /**
        * Returns the textContent of the element.
        * Note: this is different from the text property of the HtmlElementContainer config,
        * which provides access to the first text node of the element.
        * The two are the same for elements that have one and only one Text node.
        */
        /**
        * Sets the textContent of the element.
        * Note: this is different from the text property of the HtmlElementContainer config,
        * which provides access to the first text node of the element.
        * Setting the text here will remove all DOM nodes from the element and relace them with a single text node.
        */
        text: string;
        /**
        * Initializes a new HtmlNode.
        * @param [config] The configuration properties for the HtmlNode.
        * @param [elementName] The name of the underlying element.
        */
        constructor(elementName: string, config: IHtmlNodeConfig);
        /**
        * Returns the config for the HtmlNode.
        * @param [TConfig] The type of config used to initialize the HtmlNode.
        * @returns The config for the HtmlNode.
        */
        getConfig<TConfig extends IHtmlNodeConfig>(): TConfig;
        /**
        * Returns the DOM node wrapped by the HtmlNode.
        * @param [TNode] The type of wrapped by the HtmlNode.
        * @returns The DOM node wrapped by the HtmlNode.
        */
        getElement<TNode extends Node>(): TNode;
        /**
        * Protected.
        * Creates the DOM node that is decorated by the associated Classical.Html element.
        * @returns the DOM node that is decorated by the element.
        */
        createElement(document: Document): Node;
        /**
        * Initializes the element from the config.
        * @param [document] The document used to create elements. If unspecified, the global document is used.
        * @returns the decorated DOM node, with data and bindings set.
        */
        initialize(document?: Document): HtmlNode;
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
        * Returns True if the element and all of its children have been initialized; False otherwise.
        * Initialization is the process of creating an element, pulling data from the config and setting up binding.
        * @returns True if the node is initialized; False otherwise.
        */
        isInitialized(): boolean;
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
        private _noteInitialization();
        /**
        * Return the decorator HtmlNode for the specified DOM Node, if one exists; creates a new one otherwise.
        * @param [node] The node to find the corresponding HtmlNode for.
        * @returns the HtmlNode decorator for the specified DOM Node.
        */
        static getHtmlNode(node: Node): HtmlNode;
    }
    class TextNode extends HtmlNode {
        private _textProperty;
        textProperty: b.Property<string>;
        text: string;
        constructor(config: ITextNodeConfig);
        /**
        * Protected.
        * Returns a DOM text node.
        * @returns A DOM text node.
        */
        createElement(): Text;
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    class HtmlElement extends HtmlNode {
        private _classesProperty;
        private _directionProperty;
        private _draggableProperty;
        private _hiddenProperty;
        private _idProperty;
        private _languageProperty;
        private _spellCheckProperty;
        private _titleProperty;
        private _fullScreenChangeEvent;
        private _fullScreenErrorEvent;
        private _animationEndEvent;
        private _animationIterationEvent;
        private _animationStartEvent;
        private _transitionEndEvent;
        private _gamepadConnectedEvent;
        private _gamepadDisconnectedEvent;
        private _compositionEndEvent;
        private _compositionStartEvent;
        private _compositionUpdateEvent;
        private _keyDownEvent;
        private _keyPressEvent;
        private _keyUpEvent;
        private _clickEvent;
        private _doubleClickEvent;
        private _mouseDownEvent;
        private _mouseEnterEvent;
        private _mouseLeaveEvent;
        private _mouseMoveEvent;
        private _mouseOutEvent;
        private _mouseOverEvent;
        private _mouseUpEvent;
        private _wheelEvent;
        private _contextMenuEvent;
        private _pointerLockChangeEvent;
        private _pointerLockErrorEvent;
        private _blurEvent;
        private _focusEvent;
        private _afterPrintEvent;
        private _beforePrintEvent;
        private _dragEndEvent;
        private _dragEnterEvent;
        private _dragEvent;
        private _dragLeaveEvent;
        private _dragOverEvent;
        private _dragStartEvent;
        private _dropEvent;
        private _loadEvent;
        private _resizeEvent;
        private _scrollEvent;
        private _selectEvent;
        private _offlineBackOnlineEvent;
        private _offlineEvent;
        private _connectionCheckingEvent;
        private _connectionDownloadingEvent;
        private _connectionErrorEvent;
        private _connectionNoUpdateEvent;
        private _connectionObsoleteEvent;
        private _connectionUpdateReadyEvent;
        private _connectionCachedEvent;
        private _svgAbortEvent;
        private _svgBeginEvent;
        private _svgEndEvent;
        private _svgErrorEvent;
        private _svgLoadEvent;
        private _svgRepeatEvent;
        private _svgResizeEvent;
        private _svgScrollEvent;
        private _svgUnloadEvent;
        private _svgZoomEvent;
        private _webSocketErrorEvent;
        private _pageHideEvent;
        private _pageShowEvent;
        private _showEvent;
        private _contentLoadedEvent;
        private _hashChangeEvent;
        private _popStateEvent;
        private _invalidEvent;
        private _beforeUnloadEvent;
        private _indexedDatabaseErrorEvent;
        private _visibilityChangeEvent;
        private _requestLoadStartEvent;
        private _serverErrorEvent;
        private _webStorageEvent;
        private _requestReadyStateChangeEvent;
        private _requestTimeoutEvent;
        /**
        * This attribute is a space-separated list of the classes of the element. Classes allows CSS and Javascript to select and access specific elements via the class selectors or functions like the DOM method document.getElementsByClassName [MDN].
        */
        classesProperty: b.PropertyUpdate<string>;
        /**
        * This attribute is a space-separated list of the classes of the element. Classes allows CSS and Javascript to select and access specific elements via the class selectors or functions like the DOM method document.getElementsByClassName [MDN].
        */
        classes: string;
        /**
        * Html.GlobalDirection enumerates the values of this property.
        * This enumerated attribute indicates the directionality of the element's text. It can have the following values: ltr, rtl, auto [MDN].
        */
        directionProperty: b.PropertyUpdate<string>;
        /**
        * Html.GlobalDirection enumerates the values of this property.
        * This enumerated attribute indicates the directionality of the element's text. It can have the following values: ltr, rtl, auto [MDN].
        */
        direction: string;
        /**
        * This enumerated attribute indicates whether the element can be dragged, using the Drag and Drop API. The attribute must take a boolean value of either true or false [MDN].
        */
        draggableProperty: b.PropertyUpdate<boolean>;
        /**
        * This enumerated attribute indicates whether the element can be dragged, using the Drag and Drop API. The attribute must take a boolean value of either true or false [MDN].
        */
        draggable: boolean;
        /**
        * This Boolean attribute indicates that the element is not yet, or is no longer, relevant. For example, it can be used to hide elements of the page that can't be used until the login process has been completed. The browser won't render such elements [MDN].
        */
        hiddenProperty: b.PropertyUpdate<boolean>;
        /**
        * This Boolean attribute indicates that the element is not yet, or is no longer, relevant. For example, it can be used to hide elements of the page that can't be used until the login process has been completed. The browser won't render such elements [MDN].
        */
        hidden: boolean;
        /**
        * This attribute defines a unique identifier which must be unique to the entire document. Its purpose is to identify the element when linking, scripting, or styling [MDN].
        */
        idProperty: b.PropertyUpdate<string>;
        /**
        * This attribute defines a unique identifier which must be unique to the entire document. Its purpose is to identify the element when linking, scripting, or styling [MDN].
        */
        id: string;
        /**
        * This attribute participates in defining the language of the element, the language that non-editable elements are written in or the language that editable elements should be written in. The tag contains one single entry value in the format defines in the Tags for Identifying Languages (BCP47) IETF document. If the tag content is the empty string the language is set to unknown; if the tag content is not valid, regarding to BCP47, it is set to invalid [MDN].
        */
        languageProperty: b.PropertyUpdate<string>;
        /**
        * This attribute participates in defining the language of the element, the language that non-editable elements are written in or the language that editable elements should be written in. The tag contains one single entry value in the format defines in the Tags for Identifying Languages (BCP47) IETF document. If the tag content is the empty string the language is set to unknown; if the tag content is not valid, regarding to BCP47, it is set to invalid [MDN].
        */
        language: string;
        /**
        * This boolean attribute defines whether the element may be checked for spelling errors. It may have the following values [MDN].
        */
        spellCheckProperty: b.PropertyUpdate<boolean>;
        /**
        * This boolean attribute defines whether the element may be checked for spelling errors. It may have the following values [MDN].
        */
        spellCheck: boolean;
        /**
        * This attribute contains a text representing advisory information related to the element it belongs too. Such information can typically, but not necessarily, be presented to the user as a tooltip [MDN].
        */
        titleProperty: b.PropertyUpdate<string>;
        /**
        * This attribute contains a text representing advisory information related to the element it belongs too. Such information can typically, but not necessarily, be presented to the user as a tooltip [MDN].
        */
        title: string;
        /**
        * The fullScreenChangeEvent event is executed when an element was turned to fullscreen mode or back to normal mode [MDN].
        * Specification: Full Screen
        * DOM Event Name: fullscreenchange
        */
        fullScreenChangeEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
        /**
        * The fullScreenErrorEvent event is executed when it was impossible to switch to fullscreen mode for technical reasons or because the permission was denied [MDN].
        * Specification: Full Screen
        * DOM Event Name: fullscreenerror
        */
        fullScreenErrorEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
        /**
        * The animationEndEvent event is executed when a CSS animation has completed [MDN].
        * Specification: CSS Animations
        * DOM Event Name: animationend
        */
        animationEndEvent: HtmlElementEvent<Elements.HtmlElement, AnimationEvent>;
        /**
        * The animationIterationEvent event is executed when a CSS animation is repeated [MDN].
        * Specification: CSS Animations
        * DOM Event Name: animationiteration
        */
        animationIterationEvent: HtmlElementEvent<Elements.HtmlElement, AnimationEvent>;
        /**
        * The animationStartEvent event is executed when a CSS animation has started [MDN].
        * Specification: CSS Animations
        * DOM Event Name: animationstart
        */
        animationStartEvent: HtmlElementEvent<Elements.HtmlElement, AnimationEvent>;
        /**
        * The transitionEndEvent event is executed when a CSS transition has completed [MDN].
        * Specification: CSS Transitions
        * DOM Event Name: transitionend
        */
        transitionEndEvent: HtmlElementEvent<Elements.HtmlElement, TransitionEvent>;
        /**
        * The gamepadConnectedEvent event is executed when a gamepad has been connected [MDN].
        * Specification: Gamepad
        * DOM Event Name: gamepadconnected
        */
        gamepadConnectedEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
        /**
        * The gamepadDisconnectedEvent event is executed when a gamepad has been disconnected [MDN].
        * Specification: Gamepad
        * DOM Event Name: gamepaddisconnected
        */
        gamepadDisconnectedEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
        /**
        * The compositionEndEvent event is executed when the composition of a passage of text has been completed or canceled [MDN].
        * Specification: DOM L3
        * DOM Event Name: compositionend
        */
        compositionEndEvent: HtmlElementEvent<Elements.HtmlElement, CompositionEvent>;
        /**
        * The compositionStartEvent event is executed when the composition of a passage of text is prepared (similar to keydown for a keyboard input, but works with other inputs such as speech recognition) [MDN].
        * Specification: DOM L3
        * DOM Event Name: compositionstart
        */
        compositionStartEvent: HtmlElementEvent<Elements.HtmlElement, CompositionEvent>;
        /**
        * The compositionUpdateEvent event is executed when a character is added to a passage of text being composed [MDN].
        * Specification: DOM L3
        * DOM Event Name: compositionupdate
        */
        compositionUpdateEvent: HtmlElementEvent<Elements.HtmlElement, CompositionEvent>;
        /**
        * The keyDownEvent event is executed when a key is pressed down [MDN].
        * Specification: DOM L3
        * DOM Event Name: keydown
        */
        keyDownEvent: HtmlElementEvent<Elements.HtmlElement, KeyboardEvent>;
        /**
        * The keyPressEvent event is executed when a key is pressed down and that key normally produces a character value (use input instead) [MDN].
        * Specification: DOM L3
        * DOM Event Name: keypress
        */
        keyPressEvent: HtmlElementEvent<Elements.HtmlElement, KeyboardEvent>;
        /**
        * The keyUpEvent event is executed when a key is released [MDN].
        * Specification: DOM L3
        * DOM Event Name: keyup
        */
        keyUpEvent: HtmlElementEvent<Elements.HtmlElement, KeyboardEvent>;
        /**
        * The clickEvent event is executed when a pointing device button has been pressed and released on an element [MDN].
        * Specification: DOM L3
        * DOM Event Name: click
        */
        clickEvent: HtmlElementEvent<Elements.HtmlElement, MouseEvent>;
        /**
        * The doubleClickEvent event is executed when a pointing device button is clicked twice on an element [MDN].
        * Specification: DOM L3
        * DOM Event Name: dblclick
        */
        doubleClickEvent: HtmlElementEvent<Elements.HtmlElement, MouseEvent>;
        /**
        * The mouseDownEvent event is executed when a pointing device button (usually a mouse) is pressed on an element [MDN].
        * Specification: DOM L3
        * DOM Event Name: mousedown
        */
        mouseDownEvent: HtmlElementEvent<Elements.HtmlElement, MouseEvent>;
        /**
        * The mouseEnterEvent event is executed when a pointing device is moved onto the element that has the listener attached [MDN].
        * Specification: DOM L3
        * DOM Event Name: mouseenter
        */
        mouseEnterEvent: HtmlElementEvent<Elements.HtmlElement, MouseEvent>;
        /**
        * The mouseLeaveEvent event is executed when a pointing device is moved off the element that has the listener attached [MDN].
        * Specification: DOM L3
        * DOM Event Name: mouseleave
        */
        mouseLeaveEvent: HtmlElementEvent<Elements.HtmlElement, MouseEvent>;
        /**
        * The mouseMoveEvent event is executed when a pointing device is moved over an element [MDN].
        * Specification: DOM L3
        * DOM Event Name: mousemove
        */
        mouseMoveEvent: HtmlElementEvent<Elements.HtmlElement, MouseEvent>;
        /**
        * The mouseOutEvent event is executed when a pointing device is moved off the element that has the listener attached or off one of its children [MDN].
        * Specification: DOM L3
        * DOM Event Name: mouseout
        */
        mouseOutEvent: HtmlElementEvent<Elements.HtmlElement, MouseEvent>;
        /**
        * The mouseOverEvent event is executed when a pointing device is moved onto the element that has the listener attached or onto one of its children [MDN].
        * Specification: DOM L3
        * DOM Event Name: mouseover
        */
        mouseOverEvent: HtmlElementEvent<Elements.HtmlElement, MouseEvent>;
        /**
        * The mouseUpEvent event is executed when a pointing device button is released over an element [MDN].
        * Specification: DOM L3
        * DOM Event Name: mouseup
        */
        mouseUpEvent: HtmlElementEvent<Elements.HtmlElement, MouseEvent>;
        /**
        * The wheelEvent event is executed when a wheel button of a pointing device is rotated in any direction [MDN].
        * Specification: DOM L3
        * DOM Event Name: wheel
        */
        wheelEvent: HtmlElementEvent<Elements.HtmlElement, WheelEvent>;
        /**
        * The contextMenuEvent event is executed when the right button of the mouse is clicked (before the context menu is displayed) [MDN].
        * Specification: HTML5
        * DOM Event Name: contextmenu
        */
        contextMenuEvent: HtmlElementEvent<Elements.HtmlElement, MouseEvent>;
        /**
        * The pointerLockChangeEvent event is executed when the pointer was locked or released [MDN].
        * Specification: Pointer Lock
        * DOM Event Name: pointerlockchange
        */
        pointerLockChangeEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
        /**
        * The pointerLockErrorEvent event is executed when it was impossible to lock the pointer for technical reasons or because the permission was denied [MDN].
        * Specification: Pointer Lock
        * DOM Event Name: pointerlockerror
        */
        pointerLockErrorEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
        /**
        * The blurEvent event is executed when an element has lost focus (does not bubble) [MDN].
        * Specification: DOM L3
        * DOM Event Name: blur
        */
        blurEvent: HtmlElementEvent<Elements.HtmlElement, FocusEvent>;
        /**
        * The focusEvent event is executed when an element has received focus (does not bubble) [MDN].
        * Specification: DOM L3
        * DOM Event Name: focus
        */
        focusEvent: HtmlElementEvent<Elements.HtmlElement, FocusEvent>;
        /**
        * The afterPrintEvent event is executed when the associated document has started printing or the print preview has been closed [MDN].
        * Specification: HTML5
        * DOM Event Name: afterprint
        */
        afterPrintEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
        /**
        * The beforePrintEvent event is executed when the associated document is about to be printed or previewed for printing [MDN].
        * Specification: HTML5
        * DOM Event Name: beforeprint
        */
        beforePrintEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
        /**
        * The dragEndEvent event is executed when a drag operation is being ended (by releasing a mouse button or hitting the escape key) [MDN].
        * Specification: HTML5
        * DOM Event Name: dragend
        */
        dragEndEvent: HtmlElementEvent<Elements.HtmlElement, DragEvent>;
        /**
        * The dragEnterEvent event is executed when a dragged element or text selection enters a valid drop target [MDN].
        * Specification: HTML5
        * DOM Event Name: dragenter
        */
        dragEnterEvent: HtmlElementEvent<Elements.HtmlElement, DragEvent>;
        /**
        * The dragEvent event is executed when an element or text selection is being dragged (every 350ms) [MDN].
        * Specification: HTML5
        * DOM Event Name: drag
        */
        dragEvent: HtmlElementEvent<Elements.HtmlElement, DragEvent>;
        /**
        * The dragLeaveEvent event is executed when a dragged element or text selection leaves a valid drop target [MDN].
        * Specification: HTML5
        * DOM Event Name: dragleave
        */
        dragLeaveEvent: HtmlElementEvent<Elements.HtmlElement, DragEvent>;
        /**
        * The dragOverEvent event is executed when an element or text selection is being dragged over a valid drop target (every 350ms) [MDN].
        * Specification: HTML5
        * DOM Event Name: dragover
        */
        dragOverEvent: HtmlElementEvent<Elements.HtmlElement, DragEvent>;
        /**
        * The dragStartEvent event is executed when the user starts dragging an element or text selection [MDN].
        * Specification: HTML5
        * DOM Event Name: dragstart
        */
        dragStartEvent: HtmlElementEvent<Elements.HtmlElement, DragEvent>;
        /**
        * The dropEvent event is executed when an element is dropped on a valid drop target [MDN].
        * Specification: HTML5
        * DOM Event Name: drop
        */
        dropEvent: HtmlElementEvent<Elements.HtmlElement, DragEvent>;
        /**
        * The loadEvent event is executed when a resource and its dependent resources have finished loading [MDN].
        * Specification: DOM L3
        * DOM Event Name: load
        */
        loadEvent: HtmlElementEvent<Elements.HtmlElement, UIEvent>;
        /**
        * The resizeEvent event is executed when the document view has been resized [MDN].
        * Specification: DOM L3
        * DOM Event Name: resize
        */
        resizeEvent: HtmlElementEvent<Elements.HtmlElement, UIEvent>;
        /**
        * The scrollEvent event is executed when the document view or an element has been scrolled [MDN].
        * Specification: DOM L3
        * DOM Event Name: scroll
        */
        scrollEvent: HtmlElementEvent<Elements.HtmlElement, UIEvent>;
        /**
        * The selectEvent event is executed when some text is being selected [MDN].
        * Specification: DOM L3
        * DOM Event Name: select
        */
        selectEvent: HtmlElementEvent<Elements.HtmlElement, UIEvent>;
        /**
        * The offlineBackOnlineEvent event is executed when the browser has gained access to the network (but particular websites might be unreachable) [MDN].
        * Specification: HTML5 offline
        * DOM Event Name: online
        */
        offlineBackOnlineEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
        /**
        * The offlineEvent event is executed when the browser has lost access to the network [MDN].
        * Specification: HTML5 offline
        * DOM Event Name: offline
        */
        offlineEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
        /**
        * The connectionCheckingEvent event is executed when the user agent is checking for an update, or attempting to download the cache manifest for the first time [MDN].
        * Specification: Offline
        * DOM Event Name: checking
        */
        connectionCheckingEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
        /**
        * The connectionDownloadingEvent event is executed when the user agent has found an update and is fetching it, or is downloading the resources listed by the cache manifest for the first time [MDN].
        * Specification: Offline
        * DOM Event Name: downloading
        */
        connectionDownloadingEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
        /**
        * The connectionErrorEvent event is executed when an error occurred while downloading the cache manifest or updating the content of the application [MDN].
        * Specification: Offline
        * DOM Event Name: error
        */
        connectionErrorEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
        /**
        * The connectionNoUpdateEvent event is executed when the manifest hadn't changed [MDN].
        * Specification: Offline
        * DOM Event Name: noupdate
        */
        connectionNoUpdateEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
        /**
        * The connectionObsoleteEvent event is executed when the manifest was found to have become a 404 or 410 page, so the application cache is being deleted [MDN].
        * Specification: Offline
        * DOM Event Name: obsolete
        */
        connectionObsoleteEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
        /**
        * The connectionUpdateReadyEvent event is executed when the resources listed in the manifest have been newly redownloaded, and the script can use swapCache() to switch to the new cache [MDN].
        * Specification: Offline
        * DOM Event Name: updateready
        */
        connectionUpdateReadyEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
        /**
        * The connectionCachedEvent event is executed when the resources listed in the manifest have been downloaded, and the application is now cached [MDN].
        * Specification: Offline
        * DOM Event Name: cached
        */
        connectionCachedEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
        /**
        * The svgAbortEvent event is executed when page loading has been stopped before the SVG was loaded [MDN].
        * Specification: SVG
        * DOM Event Name: SVGAbort
        */
        svgAbortEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
        /**
        * The svgBeginEvent event is executed when a SMIL animation element begins [MDN].
        * Specification: SVG
        * DOM Event Name: beginEvent
        */
        svgBeginEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
        /**
        * The svgEndEvent event is executed when a SMIL animation element ends [MDN].
        * Specification: SVG
        * DOM Event Name: endEvent
        */
        svgEndEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
        /**
        * The svgErrorEvent event is executed when an error has occurred before the SVG was loaded [MDN].
        * Specification: SVG
        * DOM Event Name: SVGError
        */
        svgErrorEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
        /**
        * The svgLoadEvent event is executed when an SVG document has been loaded and parsed [MDN].
        * Specification: SVG
        * DOM Event Name: SVGLoad
        */
        svgLoadEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
        /**
        * The svgRepeatEvent event is executed when a SMIL animation element is repeated [MDN].
        * Specification: SVG
        * DOM Event Name: repeatEvent
        */
        svgRepeatEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
        /**
        * The svgResizeEvent event is executed when an SVG document is being resized [MDN].
        * Specification: SVG
        * DOM Event Name: SVGResize
        */
        svgResizeEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
        /**
        * The svgScrollEvent event is executed when an SVG document is being scrolled [MDN].
        * Specification: SVG
        * DOM Event Name: SVGScroll
        */
        svgScrollEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
        /**
        * The svgUnloadEvent event is executed when an SVG document has been removed from a window or frame [MDN].
        * Specification: SVG
        * DOM Event Name: SVGUnload
        */
        svgUnloadEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
        /**
        * The svgZoomEvent event is executed when an SVG document is being zoomed [MDN].
        * Specification: SVG
        * DOM Event Name: SVGZoom
        */
        svgZoomEvent: HtmlElementEvent<Elements.HtmlElement, SVGZoomEvent>;
        /**
        * The webSocketErrorEvent event is executed when a WebSocket connection has been closed with prejudice (some data couldn't be sent for example) [MDN].
        * Specification: WebSocket
        * DOM Event Name: error
        */
        webSocketErrorEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
        /**
        * The pageHideEvent event is executed when a session history entry is being traversed from [MDN].
        * Specification: HTML5
        * DOM Event Name: pagehide
        */
        pageHideEvent: HtmlElementEvent<Elements.HtmlElement, PageTransitionEvent>;
        /**
        * The pageShowEvent event is executed when a session history entry is being traversed to [MDN].
        * Specification: HTML5
        * DOM Event Name: pageshow
        */
        pageShowEvent: HtmlElementEvent<Elements.HtmlElement, PageTransitionEvent>;
        /**
        * The showEvent event is executed when a contextmenu event was fired on/bubbled to an element that has a contextmenu attribute [MDN].
        * Specification: HTML5
        * DOM Event Name: show
        */
        showEvent: HtmlElementEvent<Elements.HtmlElement, MouseEvent>;
        /**
        * The contentLoadedEvent event is executed when the document has finished loading (but not its dependent resources) [MDN].
        * Specification: HTML5
        * DOM Event Name: DOMContentLoaded
        */
        contentLoadedEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
        /**
        * The hashChangeEvent event is executed when the fragment identifier of the URL has changed (the part of the URL after the #) [MDN].
        * Specification: HTML5
        * DOM Event Name: hashchange
        */
        hashChangeEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
        /**
        * The popStateEvent event is executed when a session history entry is being navigated to (in certain cases) [MDN].
        * Specification: HTML5
        * DOM Event Name: popstate
        */
        popStateEvent: HtmlElementEvent<Elements.HtmlElement, PopStateEvent>;
        /**
        * The invalidEvent event is executed when a submittable element has been checked and doesn't satisfy its constraints [MDN].
        * Specification: HTML5
        * DOM Event Name: invalid
        */
        invalidEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
        /**
        * The beforeUnloadEvent event is executed when   [MDN].
        * Specification: HTML5
        * DOM Event Name: beforeunload
        */
        beforeUnloadEvent: HtmlElementEvent<Elements.HtmlElement, BeforeUnloadEvent>;
        /**
        * The indexedDatabaseErrorEvent event is executed when a request caused an error and failed [MDN].
        * Specification: IndexedDB
        * DOM Event Name: error
        */
        indexedDatabaseErrorEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
        /**
        * The visibilityChangeEvent event is executed when the content of a tab has become visible or has been hidden [MDN].
        * Specification: Page visibility
        * DOM Event Name: visibilitychange
        */
        visibilityChangeEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
        /**
        * The requestLoadStartEvent event is executed when progress has begun [MDN].
        * Specifications: Progress , XMLHttpRequest
        * DOM Event Name: loadstart
        */
        requestLoadStartEvent: HtmlElementEvent<Elements.HtmlElement, ProgressEvent>;
        /**
        * The serverErrorEvent event is executed when an event source connection has been failed [MDN].
        * Specification: Server Sent Events
        * DOM Event Name: error
        */
        serverErrorEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
        /**
        * The webStorageEvent event is executed when a storage area (localStorage or sessionStorage) has changed [MDN].
        * Specification: Web Storage
        * DOM Event Name: storage
        */
        webStorageEvent: HtmlElementEvent<Elements.HtmlElement, StorageEvent>;
        /**
        * The requestReadyStateChangeEvent event is executed when the readyState attribute of a document has changed [MDN].
        * Specification: XMLHttpRequest
        * DOM Event Name: readystatechange
        */
        requestReadyStateChangeEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
        /**
        * The requestTimeoutEvent event is executed when   [MDN].
        * Specification: XMLHttpRequest
        * DOM Event Name: timeout
        */
        requestTimeoutEvent: HtmlElementEvent<Elements.HtmlElement, ProgressEvent>;
        constructor(name: string, config: IHtmlElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    class HtmlElementContainer extends HtmlElement {
        private _children;
        private _childrenAreInitialized;
        private _copyEvent;
        private _cutEvent;
        private _pasteEvent;
        children: bc.Collection<HtmlNode>;
        /**
        * The copyEvent event is executed when the text selection has been added to the clipboard [MDN].
        * Specification: Clipboard
        * DOM Event Name: copy
        */
        copyEvent: HtmlElementEvent<Elements.HtmlElementContainer, Event>;
        /**
        * The cutEvent event is executed when the text selection has been removed from the document and added to the clipboard [MDN].
        * Specification: Clipboard
        * DOM Event Name: cut
        */
        cutEvent: HtmlElementEvent<Elements.HtmlElementContainer, Event>;
        /**
        * The pasteEvent event is executed when data has been transfered from the system clipboard to the document [MDN].
        * Specification: Clipboard
        * DOM Event Name: paste
        */
        pasteEvent: HtmlElementEvent<Elements.HtmlElementContainer, Event>;
        constructor(name: string, config: IHtmlElementContainerConfig);
        /**
        * Protected.
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
        /**
        * Initializes the element from the config.
        * @param [document] The document used to create elements. If unspecified, the global document is used.
        * @returns the decorated DOM node, with data and bindings set.
        */
        initialize(document?: Document): HtmlNode;
    }
    /**
    * The HTML <abbr> Element (or HTML Abbreviation Element) represents an abbreviation and optionally provides a full description for it. If present, the title attribute must contain this full description and nothing else [MDN].
    */
    class AbbreviationElement extends HtmlElementContainer {
        /**
        * Initializes a new AbbreviationElement'.
        */
        constructor(config: IAbbreviationElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <address> Element may be used by authors to supply contact information for its nearest <article> or <body> ancestor; in the latter case, it applies to the whole document [MDN].
    */
    class AddressElement extends HtmlElementContainer {
        /**
        * Initializes a new AddressElement'.
        */
        constructor(config: IAddressElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <a> Element (or the HTML Anchor Element) defines a hyperlink, the named target destination for a hyperlink, or both [MDN].
    */
    class AnchorElement extends HtmlElementContainer {
        private _hrefProperty;
        private _hrefLanguageProperty;
        private _relationshipProperty;
        private _targetProperty;
        private _typeProperty;
        /**
        * This is the single required attribute for anchors defining a hypertext source link. It indicates the link target, either a URL or a URL fragment. A URL fragment is a name preceded by a hash mark (#), which specifies an internal target location (an ID) within the current document. URLs are not restricted to Web (HTTP)-based documents. URLs might use any protocol supported by the browser. For example, file, ftp, and mailto work in most user agents.
        * Note: You can use the special fragment "top" to create a link back to the top of the page; for example <a href="#top">Return to top</a>. This behavior is specified by HTML5 [MDN].
        */
        hrefProperty: b.PropertyUpdate<string>;
        /**
        * This is the single required attribute for anchors defining a hypertext source link. It indicates the link target, either a URL or a URL fragment. A URL fragment is a name preceded by a hash mark (#), which specifies an internal target location (an ID) within the current document. URLs are not restricted to Web (HTTP)-based documents. URLs might use any protocol supported by the browser. For example, file, ftp, and mailto work in most user agents.
        * Note: You can use the special fragment "top" to create a link back to the top of the page; for example <a href="#top">Return to top</a>. This behavior is specified by HTML5 [MDN].
        */
        href: string;
        /**
        * This attribute indicates the language of the linked resource. It is purely advisory. Allowed values are determined by BCP47 for HTML5 and by RFC1766 for HTML4. Use this attribute only if the href attribute is present [MDN].
        */
        hrefLanguageProperty: b.PropertyUpdate<string>;
        /**
        * This attribute indicates the language of the linked resource. It is purely advisory. Allowed values are determined by BCP47 for HTML5 and by RFC1766 for HTML4. Use this attribute only if the href attribute is present [MDN].
        */
        hrefLanguage: string;
        /**
        * For anchors containing the href attribute, this attribute specifies the relationship of the target object to the link object. The value is a space-separated list of relationship values. The values and their semantics will be registered by some authority that might have meaning to the document author. The default relationship, if no other is given, is void. Use this attribute only if the href attribute is present [MDN].
        */
        relationshipProperty: b.PropertyUpdate<string>;
        /**
        * For anchors containing the href attribute, this attribute specifies the relationship of the target object to the link object. The value is a space-separated list of relationship values. The values and their semantics will be registered by some authority that might have meaning to the document author. The default relationship, if no other is given, is void. Use this attribute only if the href attribute is present [MDN].
        */
        relationship: string;
        /**
        * Html.AnchorTarget enumerates the values of this property.
        * This attribute specifies where to display the linked resource. In HTML4, this is the name of, or a keyword for, a frame. In HTML5, it is a name of, or keyword for, a browsing context (for example, tab, window, or inline frame). The following keywords have special meanings:  _self: Load the response into the same HTML4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified. _blank: Load the response into a new unnamed HTML4 window or HTML5 browsing context. _parent: Load the response into the HTML4 frameset parent of the current frame or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as _self. _top: In HTML4: Load the response into the full, original window, canceling all other frames. In HTML5: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as _self. Use this attribute only if the href attribute is present [MDN].
        */
        targetProperty: b.PropertyUpdate<string>;
        /**
        * Html.AnchorTarget enumerates the values of this property.
        * This attribute specifies where to display the linked resource. In HTML4, this is the name of, or a keyword for, a frame. In HTML5, it is a name of, or keyword for, a browsing context (for example, tab, window, or inline frame). The following keywords have special meanings:  _self: Load the response into the same HTML4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified. _blank: Load the response into a new unnamed HTML4 window or HTML5 browsing context. _parent: Load the response into the HTML4 frameset parent of the current frame or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as _self. _top: In HTML4: Load the response into the full, original window, canceling all other frames. In HTML5: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as _self. Use this attribute only if the href attribute is present [MDN].
        */
        target: string;
        /**
        * This attribute specifies the media type in the form of a MIME type for the link target. Generally, this is provided strictly as advisory information; however, in the future a browser might add a small icon for multimedia types. For example, a browser might add a small speaker icon when type is set to audio/wav. For a complete list of recognized MIME types, see http://www.w3.org/TR/html4/references.html#ref-MIMETYPES. Use this attribute only if the href attribute is present [MDN].
        */
        typeProperty: b.PropertyUpdate<string>;
        /**
        * This attribute specifies the media type in the form of a MIME type for the link target. Generally, this is provided strictly as advisory information; however, in the future a browser might add a small icon for multimedia types. For example, a browser might add a small speaker icon when type is set to audio/wav. For a complete list of recognized MIME types, see http://www.w3.org/TR/html4/references.html#ref-MIMETYPES. Use this attribute only if the href attribute is present [MDN].
        */
        type: string;
        /**
        * Initializes a new AnchorElement'.
        */
        constructor(config: IAnchorElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <area> element defines a hot-spot region on an image, and optionally associates it with a hypertext link. This element is used only within a <map> element [MDN].
    */
    class AreaElement extends HtmlElement {
        private _alternateProperty;
        private _coordinatesProperty;
        private _hrefProperty;
        private _shapeProperty;
        private _targetProperty;
        /**
        * A text string alternative to display on browsers that do not display images. The text should be phrased so that it presents the user with the same kind of choice as the image would offer when displayed without the alternative text. In HTML4, this attribute is required, but may be the empty string (""). In HTML5, this attribute is required only if the href attribute is used [MDN].
        */
        alternateProperty: b.PropertyUpdate<string>;
        /**
        * A text string alternative to display on browsers that do not display images. The text should be phrased so that it presents the user with the same kind of choice as the image would offer when displayed without the alternative text. In HTML4, this attribute is required, but may be the empty string (""). In HTML5, this attribute is required only if the href attribute is used [MDN].
        */
        alternate: string;
        /**
        * A set of values specifying the coordinates of the hot-spot region. The number and meaning of the values depend upon the value specified for the shape attribute. For a rect or rectangle shape, the coords value is two x,y pairs: left, top, right, and bottom. For a circle shape, the value is x,y,r where x,y is a pair specifying the center of the circle and r is a value for the radius. For a poly or polygon< shape, the value is a set of x,y pairs for each point in the polygon: x1,y1,x2,y2,x3,y3, and so on. In HTML4, the values are numbers of pixels or percentages, if a percent sign (%) is appended; in HTML5, the values are numbers of CSS pixels [MDN].
        */
        coordinatesProperty: b.PropertyUpdate<string>;
        /**
        * A set of values specifying the coordinates of the hot-spot region. The number and meaning of the values depend upon the value specified for the shape attribute. For a rect or rectangle shape, the coords value is two x,y pairs: left, top, right, and bottom. For a circle shape, the value is x,y,r where x,y is a pair specifying the center of the circle and r is a value for the radius. For a poly or polygon< shape, the value is a set of x,y pairs for each point in the polygon: x1,y1,x2,y2,x3,y3, and so on. In HTML4, the values are numbers of pixels or percentages, if a percent sign (%) is appended; in HTML5, the values are numbers of CSS pixels [MDN].
        */
        coordinates: string;
        /**
        * The hyperlink target for the area. Its value is a valid URL. In HTML4, either this attribute or the nohref attribute must be present in the element. In HTML5, this attribute may be omitted; if so, the area element does not represent a hyperlink [MDN].
        */
        hrefProperty: b.PropertyUpdate<string>;
        /**
        * The hyperlink target for the area. Its value is a valid URL. In HTML4, either this attribute or the nohref attribute must be present in the element. In HTML5, this attribute may be omitted; if so, the area element does not represent a hyperlink [MDN].
        */
        href: string;
        /**
        * The shape of the associated hot spot. The specifications for HTML 5 and HTML 4 define the values rect, which defines a rectangular region; circle, which defines a circular region; poly, which defines a polygon; and default, which indicates the entire region beyond any defined shapes. Many browsers, notably Internet Explorer 4 and higher, support circ, polygon, and rectangle as valid values for shape; these values are [MDN].
        */
        shapeProperty: b.PropertyUpdate<string>;
        /**
        * The shape of the associated hot spot. The specifications for HTML 5 and HTML 4 define the values rect, which defines a rectangular region; circle, which defines a circular region; poly, which defines a polygon; and default, which indicates the entire region beyond any defined shapes. Many browsers, notably Internet Explorer 4 and higher, support circ, polygon, and rectangle as valid values for shape; these values are [MDN].
        */
        shape: string;
        /**
        * Html.AreaTarget enumerates the values of this property.
        * This attribute specifies where to display the linked resource. In HTML4, this is the name of, or a keyword for, a frame. In HTML5, it is a name of, or keyword for, a browsing context (for example, tab, window, or inline frame). The following keywords have special meanings:  _self: Load the response into the same HTML4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified. _blank: Load the response into a new unnamed HTML4 window or HTML5 browsing context. _parent: Load the response into the HMTL4 frameset parent of the current frame or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as _self. _top: In HTML4: Load the response into the full, original window, canceling all other frames. In HTML5: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as _self. Use this attribute only if the href attribute is present [MDN].
        */
        targetProperty: b.PropertyUpdate<string>;
        /**
        * Html.AreaTarget enumerates the values of this property.
        * This attribute specifies where to display the linked resource. In HTML4, this is the name of, or a keyword for, a frame. In HTML5, it is a name of, or keyword for, a browsing context (for example, tab, window, or inline frame). The following keywords have special meanings:  _self: Load the response into the same HTML4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified. _blank: Load the response into a new unnamed HTML4 window or HTML5 browsing context. _parent: Load the response into the HMTL4 frameset parent of the current frame or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as _self. _top: In HTML4: Load the response into the full, original window, canceling all other frames. In HTML5: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as _self. Use this attribute only if the href attribute is present [MDN].
        */
        target: string;
        /**
        * Initializes a new AreaElement'.
        */
        constructor(config: IAreaElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <article> Element represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable, e.g., in syndication. This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment, an interactive widget or gadget, or any other independent item of content [MDN].
    */
    class ArticleElement extends HtmlElementContainer {
        /**
        * Initializes a new ArticleElement'.
        */
        constructor(config: IArticleElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <aside> Element represents a section of a page that consists of content that is tangentially related to the content around it, which could be considered separate from that content. Such sections are often represented as sidebars or as inserts. They often contain side explanations, like a glossary definition; more loosely related stuff, like advertisements; the biography of the author; or in web-applications, profile information or related blog links [MDN].
    */
    class AsideElement extends HtmlElementContainer {
        /**
        * Initializes a new AsideElement'.
        */
        constructor(config: IAsideElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <audio> element is used to represent sound content in documents. Added as part of HTML5, it may contain several audio sources, represented using the src attribute or the <source> element; the browser will choose the most suitable one. Fallback content for browser not supporting the <audio> element can be added too [MDN].
    */
    class AudioElement extends HtmlElementContainer {
        private _autoPlayProperty;
        private _bufferedProperty;
        private _controlsProperty;
        private _loopProperty;
        private _mutedProperty;
        private _playedProperty;
        private _preloadProperty;
        private _sourceProperty;
        private _volumeProperty;
        private _audioCompleteEvent;
        private _audioEndedEvent;
        private _audioProcessEvent;
        private _mediaCanPlayEvent;
        private _mediaCanPlayThroughEvent;
        private _mediaDurationChangeEvent;
        private _mediaEmptiedEvent;
        private _mediaEndedEvent;
        private _mediaLoadedDataEvent;
        private _mediaLoadedMetadataEvent;
        private _mediaPauseEvent;
        private _mediaPlayEvent;
        private _mediaPlayingEvent;
        private _mediaRateChangeEvent;
        private _mediaSeekedEvent;
        private _mediaSeekingEvent;
        private _mediaStalledEvent;
        private _mediaSuspendEvent;
        private _mediaTimeUpdateEvent;
        private _mediaVolumeChangeEvent;
        private _mediaWaitingEvent;
        /**
        * A Boolean attribute; if specified (even if the value is "false"!), the audio will automatically begin to play back as soon as it can do so without stopping to finish loading the data [MDN].
        */
        autoPlayProperty: b.PropertyUpdate<boolean>;
        /**
        * A Boolean attribute; if specified (even if the value is "false"!), the audio will automatically begin to play back as soon as it can do so without stopping to finish loading the data [MDN].
        */
        autoPlay: boolean;
        /**
        * An attribute you can read to determine which time ranges of the media have been buffered. This attribute contains a TimeRanges object [MDN].
        */
        bufferedProperty: b.PropertyUpdate<TimeRanges>;
        /**
        * An attribute you can read to determine which time ranges of the media have been buffered. This attribute contains a TimeRanges object [MDN].
        */
        buffered: TimeRanges;
        /**
        * If this attribute is present, the browser will offer controls to allow the user to control audio playback, including volume, seeking, and pause/resume playback [MDN].
        */
        controlsProperty: b.PropertyUpdate<boolean>;
        /**
        * If this attribute is present, the browser will offer controls to allow the user to control audio playback, including volume, seeking, and pause/resume playback [MDN].
        */
        controls: boolean;
        /**
        * A Boolean attribute; if specified, we will, upon reaching the end of the audio, automatically seek back to the start [MDN].
        */
        loopProperty: b.PropertyUpdate<boolean>;
        /**
        * A Boolean attribute; if specified, we will, upon reaching the end of the audio, automatically seek back to the start [MDN].
        */
        loop: boolean;
        /**
        * A Boolean attribute which indicates whether the audio will be initially silenced. Its default value is false, meaning that the audio will be played [MDN].
        */
        mutedProperty: b.PropertyUpdate<boolean>;
        /**
        * A Boolean attribute which indicates whether the audio will be initially silenced. Its default value is false, meaning that the audio will be played [MDN].
        */
        muted: boolean;
        /**
        * A TimeRanges object indicating all the ranges of the audio that have been played [MDN].
        */
        playedProperty: b.PropertyUpdate<TimeRanges>;
        /**
        * A TimeRanges object indicating all the ranges of the audio that have been played [MDN].
        */
        played: TimeRanges;
        /**
        * Html.AudioPreload enumerates the values of this property.
        * This enumerated attribute is intended to provide a hint to the browser about what the author thinks will lead to the best user experience. It may have one of the following values:  none: hints that either the author thinks that the user won't need to consult that audio or that the server wants to minimize its traffic; in others terms this hint indicates that the audio should not be cached; metadata: hints that though the author thinks that the user won't need to consult that audio, fetching the metadata (e.g. length) is reasonable; auto: hints that the user needs have priority; in others terms this hint indicated that, if needed, the whole audio could be downloaded, even if the user is not expected to use it; the empty string: which is a synonym of the auto value. If not set, its default value is browser-defined (i.e. each browser can choose its own default value), though the spec advises it to be set to metadata.  Usage notes:  The autoplay attribute has precedence over this one as if one wants to automatically play a audio, the browser will obviously need to download it. Setting both the autoplay and the preload attributes is allowed by the specification. The browser is not forced by the specification to follow the value of this attribute; it is a mere hint [MDN].
        */
        preloadProperty: b.PropertyUpdate<string>;
        /**
        * Html.AudioPreload enumerates the values of this property.
        * This enumerated attribute is intended to provide a hint to the browser about what the author thinks will lead to the best user experience. It may have one of the following values:  none: hints that either the author thinks that the user won't need to consult that audio or that the server wants to minimize its traffic; in others terms this hint indicates that the audio should not be cached; metadata: hints that though the author thinks that the user won't need to consult that audio, fetching the metadata (e.g. length) is reasonable; auto: hints that the user needs have priority; in others terms this hint indicated that, if needed, the whole audio could be downloaded, even if the user is not expected to use it; the empty string: which is a synonym of the auto value. If not set, its default value is browser-defined (i.e. each browser can choose its own default value), though the spec advises it to be set to metadata.  Usage notes:  The autoplay attribute has precedence over this one as if one wants to automatically play a audio, the browser will obviously need to download it. Setting both the autoplay and the preload attributes is allowed by the specification. The browser is not forced by the specification to follow the value of this attribute; it is a mere hint [MDN].
        */
        preload: string;
        /**
        * The URL of the audio to embed. This is subject to HTTP access controls. This is optional; you may instead use the <source> element within the audio block to specify the audio to embed [MDN].
        */
        sourceProperty: b.PropertyUpdate<string>;
        /**
        * The URL of the audio to embed. This is subject to HTTP access controls. This is optional; you may instead use the <source> element within the audio block to specify the audio to embed [MDN].
        */
        source: string;
        /**
        * The playback volume of any audio portions, in the range 0.0 (silent) to 1.0 (loudest) [MDN].
        */
        volumeProperty: b.PropertyUpdate<number>;
        /**
        * The playback volume of any audio portions, in the range 0.0 (silent) to 1.0 (loudest) [MDN].
        */
        volume: number;
        /**
        * The audioCompleteEvent event is executed when the rendering of an OfflineAudioContext is terminated [MDN].
        * Specification: Web Audio API
        * DOM Event Name: complete
        */
        audioCompleteEvent: HtmlElementEvent<Elements.AudioElement, Event>;
        /**
        * The audioEndedEvent event is executed when   [MDN].
        * Specification: Web Audio API
        * DOM Event Name: ended
        */
        audioEndedEvent: HtmlElementEvent<Elements.AudioElement, Event>;
        /**
        * The audioProcessEvent event is executed when the input buffer of a ScriptProcessorNode is ready to be processed [MDN].
        * Specification: Web Audio API
        * DOM Event Name: audioprocess
        */
        audioProcessEvent: HtmlElementEvent<Elements.AudioElement, Event>;
        /**
        * The mediaCanPlayEvent event is executed when the user agent can play the media, but estimates that not enough data has been loaded to play the media up to its end without having to stop for further buffering of content [MDN].
        * Specification: HTML5 media
        * DOM Event Name: canplay
        */
        mediaCanPlayEvent: HtmlElementEvent<Elements.AudioElement, Event>;
        /**
        * The mediaCanPlayThroughEvent event is executed when the user agent can play the media, and estimates that enough data has been loaded to play the media up to its end without having to stop for further buffering of content [MDN].
        * Specification: HTML5 media
        * DOM Event Name: canplaythrough
        */
        mediaCanPlayThroughEvent: HtmlElementEvent<Elements.AudioElement, Event>;
        /**
        * The mediaDurationChangeEvent event is executed when the duration attribute has been updated [MDN].
        * Specification: HTML5 media
        * DOM Event Name: durationchange
        */
        mediaDurationChangeEvent: HtmlElementEvent<Elements.AudioElement, Event>;
        /**
        * The mediaEmptiedEvent event is executed when the media has become empty; for example, this event is sent if the media has already been loaded (or partially loaded), and the load() method is called to reload it [MDN].
        * Specification: HTML5 media
        * DOM Event Name: emptied
        */
        mediaEmptiedEvent: HtmlElementEvent<Elements.AudioElement, Event>;
        /**
        * The mediaEndedEvent event is executed when playback has stopped because the end of the media was reached [MDN].
        * Specification: HTML5 media
        * DOM Event Name: ended
        */
        mediaEndedEvent: HtmlElementEvent<Elements.AudioElement, Event>;
        /**
        * The mediaLoadedDataEvent event is executed when the first frame of the media has finished loading [MDN].
        * Specification: HTML5 media
        * DOM Event Name: loadeddata
        */
        mediaLoadedDataEvent: HtmlElementEvent<Elements.AudioElement, Event>;
        /**
        * The mediaLoadedMetadataEvent event is executed when the metadata has been loaded [MDN].
        * Specification: HTML5 media
        * DOM Event Name: loadedmetadata
        */
        mediaLoadedMetadataEvent: HtmlElementEvent<Elements.AudioElement, Event>;
        /**
        * The mediaPauseEvent event is executed when playback has been paused [MDN].
        * Specification: HTML5 media
        * DOM Event Name: pause
        */
        mediaPauseEvent: HtmlElementEvent<Elements.AudioElement, Event>;
        /**
        * The mediaPlayEvent event is executed when playback has begun [MDN].
        * Specification: HTML5 media
        * DOM Event Name: play
        */
        mediaPlayEvent: HtmlElementEvent<Elements.AudioElement, Event>;
        /**
        * The mediaPlayingEvent event is executed when playback is ready to start after having been paused or delayed due to lack of data [MDN].
        * Specification: HTML5 media
        * DOM Event Name: playing
        */
        mediaPlayingEvent: HtmlElementEvent<Elements.AudioElement, Event>;
        /**
        * The mediaRateChangeEvent event is executed when the playback rate has changed [MDN].
        * Specification: HTML5 media
        * DOM Event Name: ratechange
        */
        mediaRateChangeEvent: HtmlElementEvent<Elements.AudioElement, Event>;
        /**
        * The mediaSeekedEvent event is executed when a seek operation completed [MDN].
        * Specification: HTML5 media
        * DOM Event Name: seeked
        */
        mediaSeekedEvent: HtmlElementEvent<Elements.AudioElement, Event>;
        /**
        * The mediaSeekingEvent event is executed when a seek operation began [MDN].
        * Specification: HTML5 media
        * DOM Event Name: seeking
        */
        mediaSeekingEvent: HtmlElementEvent<Elements.AudioElement, Event>;
        /**
        * The mediaStalledEvent event is executed when the user agent is trying to fetch media data, but data is unexpectedly not forthcoming [MDN].
        * Specification: HTML5 media
        * DOM Event Name: stalled
        */
        mediaStalledEvent: HtmlElementEvent<Elements.AudioElement, Event>;
        /**
        * The mediaSuspendEvent event is executed when media data loading has been suspended [MDN].
        * Specification: HTML5 media
        * DOM Event Name: suspend
        */
        mediaSuspendEvent: HtmlElementEvent<Elements.AudioElement, Event>;
        /**
        * The mediaTimeUpdateEvent event is executed when the time indicated by the currentTime attribute has been updated [MDN].
        * Specification: HTML5 media
        * DOM Event Name: timeupdate
        */
        mediaTimeUpdateEvent: HtmlElementEvent<Elements.AudioElement, Event>;
        /**
        * The mediaVolumeChangeEvent event is executed when the volume has changed [MDN].
        * Specification: HTML5 media
        * DOM Event Name: volumechange
        */
        mediaVolumeChangeEvent: HtmlElementEvent<Elements.AudioElement, Event>;
        /**
        * The mediaWaitingEvent event is executed when playback has stopped because of a temporary lack of data [MDN].
        * Specification: HTML5 media
        * DOM Event Name: waiting
        */
        mediaWaitingEvent: HtmlElementEvent<Elements.AudioElement, Event>;
        /**
        * Initializes a new AudioElement'.
        */
        constructor(config: IAudioElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <base> element specifies the base URL to use for all relative URLs contained within a document [MDN].
    */
    class BaseElement extends HtmlElement {
        private _hrefProperty;
        private _targetProperty;
        /**
        * The base URL to be used throughout the document for relative URL addresses. If this attribute is specified, this element must come before any other elements with attributes whose values are URLs. Absolute and relative URIs are allowed (but see note section below) [MDN].
        */
        hrefProperty: b.PropertyUpdate<string>;
        /**
        * The base URL to be used throughout the document for relative URL addresses. If this attribute is specified, this element must come before any other elements with attributes whose values are URLs. Absolute and relative URIs are allowed (but see note section below) [MDN].
        */
        href: string;
        /**
        * Html.BaseTarget enumerates the values of this property.
        * A name or keyword indicating the default location to display the result when hyperlinks or forms cause navigation, for elements that do not have an explicit target reference. In HTML4, this is the name of, or a keyword for, a frame. In HTML5, it is a name of, or keyword for, a browsing context (for example, tab, window, or inline frame). The following keywords have special meanings:  _self: Load the result into the same HTML4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified. _blank: Load the result into a new unnamed HTML4 window or HTML5 browsing context. _parent: Load the result into the HTML4 frameset parent of the current frame or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as _self. _top: In HTML4: Load the result into the full, original window, canceling all other frames. In HTML5: Load the result into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as _self [MDN].
        */
        targetProperty: b.PropertyUpdate<string>;
        /**
        * Html.BaseTarget enumerates the values of this property.
        * A name or keyword indicating the default location to display the result when hyperlinks or forms cause navigation, for elements that do not have an explicit target reference. In HTML4, this is the name of, or a keyword for, a frame. In HTML5, it is a name of, or keyword for, a browsing context (for example, tab, window, or inline frame). The following keywords have special meanings:  _self: Load the result into the same HTML4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified. _blank: Load the result into a new unnamed HTML4 window or HTML5 browsing context. _parent: Load the result into the HTML4 frameset parent of the current frame or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as _self. _top: In HTML4: Load the result into the full, original window, canceling all other frames. In HTML5: Load the result into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as _self [MDN].
        */
        target: string;
        /**
        * Initializes a new BaseElement'.
        */
        constructor(config: IBaseElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <bdi> Element (or Bi-Directional Isolation Element) isolates a span of text that might be formatted in a different direction from other text outside it [MDN].
    */
    class BidirectionalIsolationElement extends HtmlElementContainer {
        /**
        * Initializes a new BidirectionalIsolationElement'.
        */
        constructor(config: IBidirectionalIsolationElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <bdo> Element (or HTML bidirectional override element) is used to override the current directionality of text. It causes the directionality of the characters to be ignored in favor of the specified directionality [MDN].
    */
    class BidirectionalOverrideElement extends HtmlElementContainer {
        /**
        * Initializes a new BidirectionalOverrideElement'.
        */
        constructor(config: IBidirectionalOverrideElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <blockquote> Element (or HTML Block Quotation Element) indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation (see Notes for how to change it). A URL for the source of the quotation may be given using the cite attribute, while a text representation of the source can be given using the <cite> element [MDN].
    */
    class BlockQuotationElement extends HtmlElementContainer {
        private _citationProperty;
        /**
        * A URL that designates a source document or message for the information quoted. This attribute is intended to point to information explaining the context or the reference for the quote [MDN].
        */
        citationProperty: b.PropertyUpdate<string>;
        /**
        * A URL that designates a source document or message for the information quoted. This attribute is intended to point to information explaining the context or the reference for the quote [MDN].
        */
        citation: string;
        /**
        * Initializes a new BlockQuotationElement'.
        */
        constructor(config: IBlockQuotationElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <body> element represents the content of an HTML document. There is only one <body> element in a document [MDN].
    */
    class BodyElement extends HtmlElementContainer {
        private _unloadEvent;
        /**
        * The unloadEvent event is executed when the document or a dependent resource is being unloaded [MDN].
        * Specification: DOM L3
        * DOM Event Name: unload
        */
        unloadEvent: HtmlElementEvent<Elements.BodyElement, UIEvent>;
        /**
        * Initializes a new BodyElement'.
        */
        constructor(config: IBodyElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <b> Element represents a span of text stylistically different from normal text, without a conveying any special importance or relevance. It is typically used for keywords in a summary, product names in a review, or other spans of text whose typical presentation would be boldfaced. Another example of its use is to mark the lead sentence of each paragraph of an article [MDN].
    */
    class BoldElement extends HtmlElementContainer {
        /**
        * Initializes a new BoldElement'.
        */
        constructor(config: IBoldElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <button> Element represents a clickable button [MDN].
    */
    class ButtonElement extends HtmlElementContainer {
        private _autoFocusProperty;
        private _disabledProperty;
        private _formPropertyID;
        private _formProperty;
        private _nameProperty;
        private _typeProperty;
        private _valueProperty;
        /**
        * This Boolean attribute lets you specify that the button should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form-associated element in a document can have this attribute specified [MDN].
        */
        autoFocusProperty: b.PropertyUpdate<boolean>;
        /**
        * This Boolean attribute lets you specify that the button should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form-associated element in a document can have this attribute specified [MDN].
        */
        autoFocus: boolean;
        /**
        * This Boolean attribute indicates that the user cannot interact with the button. If this attribute is not specified, the button inherits its setting from the containing element, for example <fieldset>; if there is no containing element with the disabled attribute set, then the button is enabled [MDN].
        */
        disabledProperty: b.PropertyUpdate<boolean>;
        /**
        * This Boolean attribute indicates that the user cannot interact with the button. If this attribute is not specified, the button inherits its setting from the containing element, for example <fieldset>; if there is no containing element with the disabled attribute set, then the button is enabled [MDN].
        */
        disabled: boolean;
        /**
        * The form element that the button is associated with (its form owner). The value of the attribute must be the id attribute of a <form> element in the same document. If this attribute is not specified, the <button> element must be a descendant of a form element. This attribute enables you to place <button> elements anywhere within a document, not just as descendants of their <form> elements [MDN].
        */
        form: FormElement;
        /**
        * The name of the button, which submitted with the form data [MDN].
        */
        nameProperty: b.PropertyUpdate<string>;
        /**
        * The name of the button, which submitted with the form data [MDN].
        */
        name: string;
        /**
        * Html.ButtonType enumerates the values of this property.
        * The type of the button. Possible values are:  submit: The button submits the form data to the server. This is the default if the attribute is not specified, or if the attribute is dynamically changed to an empty or invalid value. reset: The button resets all the controls to their initial values. button: The button has no default behavior. It can have client-side scripts associated with the element's events, which are triggered when the events occur [MDN].
        */
        typeProperty: b.PropertyUpdate<string>;
        /**
        * Html.ButtonType enumerates the values of this property.
        * The type of the button. Possible values are:  submit: The button submits the form data to the server. This is the default if the attribute is not specified, or if the attribute is dynamically changed to an empty or invalid value. reset: The button resets all the controls to their initial values. button: The button has no default behavior. It can have client-side scripts associated with the element's events, which are triggered when the events occur [MDN].
        */
        type: string;
        /**
        * The initial value of the button [MDN].
        */
        valueProperty: b.PropertyUpdate<string>;
        /**
        * The initial value of the button [MDN].
        */
        value: string;
        /**
        * Initializes a new ButtonElement'.
        */
        constructor(config: IButtonElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <canvas> Element can be used to draw graphics via scripting (usually JavaScript). For example, it can be used to draw graphs, make photo compositions or even perform animations. You may (and should) provide alternate content inside the <canvas> block. That content will be rendered both on older browsers that don't support canvas and in browsers with JavaScript disabled [MDN].
    */
    class CanvasElement extends HtmlElementContainer {
        private _widthProperty;
        private _heightProperty;
        /**
        * The width of the coordinate space in CSS pixels. Defaults to 300 [MDN].
        */
        widthProperty: b.PropertyUpdate<number>;
        /**
        * The width of the coordinate space in CSS pixels. Defaults to 300 [MDN].
        */
        width: number;
        /**
        * The height of the coordinate space in CSS pixels. Defaults to 150 [MDN].
        */
        heightProperty: b.PropertyUpdate<number>;
        /**
        * The height of the coordinate space in CSS pixels. Defaults to 150 [MDN].
        */
        height: number;
        /**
        * Initializes a new CanvasElement'.
        */
        constructor(config: ICanvasElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <cite> Element (or HTML Citation Element) contains the title of a work, such as a book, song, movie, TV show, sculpture, etc [MDN].
    */
    class CitationElement extends HtmlElementContainer {
        /**
        * Initializes a new CitationElement'.
        */
        constructor(config: ICitationElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <code> Element represents a fragment of computer code. By default, it is displayed in the browser's default monospace font [MDN].
    */
    class CodeElement extends HtmlElementContainer {
        /**
        * Initializes a new CodeElement'.
        */
        constructor(config: ICodeElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <data> Element links a given content with a machine-readable translation. If the content is time- or date-related, the <time> must be used [MDN].
    */
    class DataElement extends HtmlElementContainer {
        private _valueProperty;
        /**
        * This attribute specifies the machine-readable translation of the content of the element [MDN].
        */
        valueProperty: b.PropertyUpdate<string>;
        /**
        * This attribute specifies the machine-readable translation of the content of the element [MDN].
        */
        value: string;
        /**
        * Initializes a new DataElement'.
        */
        constructor(config: IDataElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <datalist> Element contains a set of <option> elements that represent the possible options for the value of other controls [MDN].
    */
    class DataListElement extends HtmlElementContainer {
        /**
        * Initializes a new DataListElement'.
        */
        constructor(config: IDataListElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <dfn> element (or HTML Definition Element) represents the defining instance of a term [MDN].
    */
    class DefinitionElement extends HtmlElementContainer {
        /**
        * Initializes a new DefinitionElement'.
        */
        constructor(config: IDefinitionElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <dt> element (or HTML Definition Term Element) identifies a term in a definition list. This element can occur only as a child element of a <dl>. It is usually followed by a <dd> element; however, multiple <dt> elements in a row indicate several terms that are all defined by the immediate next <dd> element [MDN].
    */
    class DefinitionTermElement extends HtmlElementContainer {
        /**
        * Initializes a new DefinitionTermElement'.
        */
        constructor(config: IDefinitionTermElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <del> element (or HTML Deleted Text Element) represents a range of text that has been deleted from a document. This element is often (but need not be) rendered with strike-through text [MDN].
    */
    class DeletedTextElement extends HtmlElementContainer {
        private _citationProperty;
        /**
        * A URI for a resource that explains the change (for example, meeting minutes) [MDN].
        */
        citationProperty: b.PropertyUpdate<string>;
        /**
        * A URI for a resource that explains the change (for example, meeting minutes) [MDN].
        */
        citation: string;
        /**
        * Initializes a new DeletedTextElement'.
        */
        constructor(config: IDeletedTextElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <dd> Element (or HTML Description Element) indicates the description of a term in a description list (<dl>) element. This element can occur only as a child element of a definition list and it must follow a <dt> element [MDN].
    */
    class DescriptionElement extends HtmlElementContainer {
        /**
        * Initializes a new DescriptionElement'.
        */
        constructor(config: IDescriptionElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <dl> Element (or HTML Description List Element) encloses a list of pairs of terms and descriptions. Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs) [MDN].
    */
    class DescriptionListElement extends HtmlElementContainer {
        /**
        * Initializes a new DescriptionListElement'.
        */
        constructor(config: IDescriptionListElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <details> Element is used as a disclosure widget from which the user can retrieve additional information [MDN].
    */
    class DetailsElement extends HtmlElementContainer {
        /**
        * Initializes a new DetailsElement'.
        */
        constructor(config: IDetailsElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <div> element (or HTML Document Division Element) is the generic container for flow content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element (such as <article> or <nav>) is appropriate [MDN].
    */
    class DivisionElement extends HtmlElementContainer {
        /**
        * Initializes a new DivisionElement'.
        */
        constructor(config: IDivisionElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <embed> Element represents an integration point for an external application or interactive content (in other words, a plug-in) [MDN].
    */
    class EmbedElement extends HtmlElement {
        private _heightProperty;
        private _sourceProperty;
        private _widthProperty;
        /**
        * The displayed height of the resource, in CSS pixels [MDN].
        */
        heightProperty: b.PropertyUpdate<string>;
        /**
        * The displayed height of the resource, in CSS pixels [MDN].
        */
        height: string;
        /**
        * The URL of the resource being embedded [MDN].
        */
        sourceProperty: b.PropertyUpdate<string>;
        /**
        * The URL of the resource being embedded [MDN].
        */
        source: string;
        /**
        * The displayed width of the resource, in CSS pixels [MDN].
        */
        widthProperty: b.PropertyUpdate<string>;
        /**
        * The displayed width of the resource, in CSS pixels [MDN].
        */
        width: string;
        /**
        * Initializes a new EmbedElement'.
        */
        constructor(config: IEmbedElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <object> Element (or HTML Embedded Object Element) represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin [MDN].
    */
    class EmbeddedObjectElement extends HtmlElementContainer {
        private _dataProperty;
        private _formPropertyID;
        private _formProperty;
        private _heightProperty;
        private _nameProperty;
        private _typeProperty;
        private _widthProperty;
        /**
        * The address of the resource as a valid URL. At least one of data and type must be defined [MDN].
        */
        dataProperty: b.PropertyUpdate<string>;
        /**
        * The address of the resource as a valid URL. At least one of data and type must be defined [MDN].
        */
        data: string;
        /**
        * The form element, if any, that the object element is associated with (its form owner). The value of the attribute must be an ID of a <form> element in the same document [MDN].
        */
        form: FormElement;
        /**
        * The height of the displayed resource, in CSS pixels [MDN].
        */
        heightProperty: b.PropertyUpdate<string>;
        /**
        * The height of the displayed resource, in CSS pixels [MDN].
        */
        height: string;
        /**
        * The name of valid browsing context (HTML5), or the name of the control (HTML 4) [MDN].
        */
        nameProperty: b.PropertyUpdate<string>;
        /**
        * The name of valid browsing context (HTML5), or the name of the control (HTML 4) [MDN].
        */
        name: string;
        /**
        * The MIME type of the resource specified by data. At least one of data and type must be defined [MDN].
        */
        typeProperty: b.PropertyUpdate<string>;
        /**
        * The MIME type of the resource specified by data. At least one of data and type must be defined [MDN].
        */
        type: string;
        /**
        * The width of the display resource, in CSS pixels [MDN].
        */
        widthProperty: b.PropertyUpdate<string>;
        /**
        * The width of the display resource, in CSS pixels [MDN].
        */
        width: string;
        /**
        * Initializes a new EmbeddedObjectElement'.
        */
        constructor(config: IEmbeddedObjectElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <em> element (or HTML Emphasis Element) marks text that has stress emphasis. The <em> element can be nested, with each level of nesting indicating a greater degree of emphasis [MDN].
    */
    class EmphasisElement extends HtmlElementContainer {
        /**
        * Initializes a new EmphasisElement'.
        */
        constructor(config: IEmphasisElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <fieldset> element is used to group several controls as well as labels (<label>) within a web form [MDN].
    */
    class FieldsetElement extends HtmlElementContainer {
        private _disabledProperty;
        private _formPropertyID;
        private _formProperty;
        /**
        * If this Boolean attribute is set, the form controls that are its descendants, except descendants of its first optional <legend> element, are disabled, i.e., not editable. They won't receive any browsing events, like mouse clicks or focus-related ones. Often browsers display such controls as gray [MDN].
        */
        disabledProperty: b.PropertyUpdate<boolean>;
        /**
        * If this Boolean attribute is set, the form controls that are its descendants, except descendants of its first optional <legend> element, are disabled, i.e., not editable. They won't receive any browsing events, like mouse clicks or focus-related ones. Often browsers display such controls as gray [MDN].
        */
        disabled: boolean;
        /**
        * This attribute has the value of the id attribute of the <form> element its related to. Its default value is the id of the nearest <form> element it is a descendant of [MDN].
        */
        form: FormElement;
        /**
        * Initializes a new FieldsetElement'.
        */
        constructor(config: IFieldsetElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <figure> Element represents self-contained content, frequently with a caption (<figcaption>), and is typically referenced as a single unit. While it is related to the main flow, its position is independent of the main flow. Usually this is an image, an illustration, a diagram, a code snippet, or a schema that is referenced in the main text, but that can be moved to another page or to an appendix without affecting the main flow [MDN].
    */
    class FigureElement extends HtmlElementContainer {
        /**
        * Initializes a new FigureElement'.
        */
        constructor(config: IFigureElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <figcaption> Element represents a caption or a legend associated with a figure or an illustration described by the rest of the data of the <figure> element which is its immediate ancestor which means <figcaption> can be the first or last element inside a <figure> block. Also, the HTML Figcaption Element is optional; if not provided, then the parent figure element will have no caption [MDN].
    */
    class FigureCaptionElement extends HtmlElementContainer {
        /**
        * Initializes a new FigureCaptionElement'.
        */
        constructor(config: IFigureCaptionElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <footer> Element represents a footer for its nearest sectioning content or sectioning root element (i.e, its nearest parent <article>, <aside>, <nav>, <section>, <blockquote>, <body>, <details>, <fieldset>, <figure>, <td>). A footer typically contains information about the author of the section, copyright data or links to related documents [MDN].
    */
    class FooterElement extends HtmlElementContainer {
        /**
        * Initializes a new FooterElement'.
        */
        constructor(config: IFooterElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <form> element represents a section of document that contains interactive controls that enable a user to submit information to a web server [MDN].
    */
    class FormElement extends HtmlElementContainer {
        private _acceptCharsetProperty;
        private _actionProperty;
        private _autoCompleteProperty;
        private _encodingTypeProperty;
        private _methodProperty;
        private _nameProperty;
        private _targetProperty;
        private _resetEvent;
        private _submitEvent;
        /**
        * A list of character encodings that the server accepts. The list can be delimited by spaces or commas. The browser uses in the order in which they are listed. The default value is the reserved string "UNKNOWN", in which case the encoding corresponds to the encoding of the document containing the form element. HTML 4: In previous versions of HTML, the different character encodings could be delimited by spaces or commas. This is no longer the case in HTML5, where only spaces are correct [MDN].
        */
        acceptCharsetProperty: b.PropertyUpdate<string>;
        /**
        * A list of character encodings that the server accepts. The list can be delimited by spaces or commas. The browser uses in the order in which they are listed. The default value is the reserved string "UNKNOWN", in which case the encoding corresponds to the encoding of the document containing the form element. HTML 4: In previous versions of HTML, the different character encodings could be delimited by spaces or commas. This is no longer the case in HTML5, where only spaces are correct [MDN].
        */
        acceptCharset: string;
        /**
        * The URI of a program that processes the information submitted via the form. This value can be overridden by a formaction attribute on a <button> or <input> element [MDN].
        */
        actionProperty: b.PropertyUpdate<string>;
        /**
        * The URI of a program that processes the information submitted via the form. This value can be overridden by a formaction attribute on a <button> or <input> element [MDN].
        */
        action: string;
        /**
        * Html.FormAutoComplete enumerates the values of this property.
        * Indicates whether controls in this form can by default have their values automatically completed by the browser. This setting can be overridden by an autocomplete attribute on an element belonging to the form. Possible values are:  off: The user must explicitly enter a value into each field for every use, or the document provides its own auto-completion method; the browser does not automatically complete entries. on: The browser can automatically complete values based on values that the user has entered during previous uses of the form.
        * Note: If you set autocomplete to off in a form because the document provides its own auto-completion, then you should also set autocomplete to off for each of the form's input elements that the document can auto-complete. For details, see Google Chrome notes [MDN].
        */
        autoCompleteProperty: b.PropertyUpdate<string>;
        /**
        * Html.FormAutoComplete enumerates the values of this property.
        * Indicates whether controls in this form can by default have their values automatically completed by the browser. This setting can be overridden by an autocomplete attribute on an element belonging to the form. Possible values are:  off: The user must explicitly enter a value into each field for every use, or the document provides its own auto-completion method; the browser does not automatically complete entries. on: The browser can automatically complete values based on values that the user has entered during previous uses of the form.
        * Note: If you set autocomplete to off in a form because the document provides its own auto-completion, then you should also set autocomplete to off for each of the form's input elements that the document can auto-complete. For details, see Google Chrome notes [MDN].
        */
        autoComplete: string;
        /**
        * Html.FormEncodingType enumerates the values of this property.
        * When the value of the method attribute is post, this attribute is the MIME type of content that is used to submit the form to the server. Possible values are:  application/x-www-form-urlencoded: The default value if the attribute is not specified. multipart/form-data: Use this value if you are using an <input> element with the type attribute set to "file". text/plain (HTML5) This value can be overridden by a formenctype attribute on a <button> or <input> element [MDN].
        */
        encodingTypeProperty: b.PropertyUpdate<string>;
        /**
        * Html.FormEncodingType enumerates the values of this property.
        * When the value of the method attribute is post, this attribute is the MIME type of content that is used to submit the form to the server. Possible values are:  application/x-www-form-urlencoded: The default value if the attribute is not specified. multipart/form-data: Use this value if you are using an <input> element with the type attribute set to "file". text/plain (HTML5) This value can be overridden by a formenctype attribute on a <button> or <input> element [MDN].
        */
        encodingType: string;
        /**
        * Html.FormMethod enumerates the values of this property.
        * The HTTP method that the browser uses to submit the form. Possible values are:  post: Corresponds to the HTTP POST method ; the data from the form is included in the body of the form and is sent to the server. get: Corresponds to the HTTP GET method; the data from the form are appended to the action attribute URI, with a '?' as a separator, and the resulting URI is sent to the server. Use this method when the form has no side-effects and contains only ASCII characters. This value can be overridden by a formmethod attribute on a <button> or <input> element [MDN].
        */
        methodProperty: b.PropertyUpdate<string>;
        /**
        * Html.FormMethod enumerates the values of this property.
        * The HTTP method that the browser uses to submit the form. Possible values are:  post: Corresponds to the HTTP POST method ; the data from the form is included in the body of the form and is sent to the server. get: Corresponds to the HTTP GET method; the data from the form are appended to the action attribute URI, with a '?' as a separator, and the resulting URI is sent to the server. Use this method when the form has no side-effects and contains only ASCII characters. This value can be overridden by a formmethod attribute on a <button> or <input> element [MDN].
        */
        method: string;
        /**
        * The name of the form. In HTML 4 its use is deprecated (id should be used instead). It must be unique among the forms in a document and not the empty string in HTML 5 [MDN].
        */
        nameProperty: b.PropertyUpdate<string>;
        /**
        * The name of the form. In HTML 4 its use is deprecated (id should be used instead). It must be unique among the forms in a document and not the empty string in HTML 5 [MDN].
        */
        name: string;
        /**
        * Html.FormTarget enumerates the values of this property.
        * A name or keyword indicating where to display the response that is received after submitting the form. In HTML 4, this is the name of, or a keyword for, a frame. In HTML5, it is a name of, or keyword for, a browsing context (for example, tab, window, or inline frame). The following keywords have special meanings:  _self: Load the response into the same HTML 4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified. _blank: Load the response into a new unnamed HTML 4 window or HTML5 browsing context. _parent: Load the response into the HTML 4 frameset parent of the current frame or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as _self. _top: HTML 4: Load the response into the full, original window, canceling all other frames. HTML5: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as _self. iframename: The response is displayed in a named <iframe>. HTML5: This value can be overridden by a formtarget attribute on a <button> or <input> element [MDN].
        */
        targetProperty: b.PropertyUpdate<string>;
        /**
        * Html.FormTarget enumerates the values of this property.
        * A name or keyword indicating where to display the response that is received after submitting the form. In HTML 4, this is the name of, or a keyword for, a frame. In HTML5, it is a name of, or keyword for, a browsing context (for example, tab, window, or inline frame). The following keywords have special meanings:  _self: Load the response into the same HTML 4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified. _blank: Load the response into a new unnamed HTML 4 window or HTML5 browsing context. _parent: Load the response into the HTML 4 frameset parent of the current frame or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as _self. _top: HTML 4: Load the response into the full, original window, canceling all other frames. HTML5: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as _self. iframename: The response is displayed in a named <iframe>. HTML5: This value can be overridden by a formtarget attribute on a <button> or <input> element [MDN].
        */
        target: string;
        /**
        * The resetEvent event is executed when a form is reset [MDN].
        * Specifications: DOM L2, HTML5
        * DOM Event Name: reset
        */
        resetEvent: HtmlElementEvent<Elements.FormElement, Event>;
        /**
        * The submitEvent event is executed when a form is submitted [MDN].
        * Specifications: DOM L2, HTML5
        * DOM Event Name: submit
        */
        submitEvent: HtmlElementEvent<Elements.FormElement, Event>;
        /**
        * Initializes a new FormElement'.
        */
        constructor(config: IFormElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <head> element represents a collection of metadata about the document, including links to or definitions of scripts and style sheets [MDN].
    */
    class HeadElement extends HtmlElementContainer {
        /**
        * Initializes a new HeadElement'.
        */
        constructor(config: IHeadElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <header> Element represents a group of introductory or navigational aids. It may contain some heading elements but also other elements like a logo, wrapped section's header, a search form, and so on [MDN].
    */
    class HeaderElement extends HtmlElementContainer {
        /**
        * Initializes a new HeaderElement'.
        */
        constructor(config: IHeaderElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * Heading elements implement six levels of document headings, <h1> is the most important and <h6> is the least. A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically [MDN].
    */
    class HeaderFiveElement extends HtmlElementContainer {
        /**
        * Initializes a new HeaderFiveElement'.
        */
        constructor(config: IHeaderFiveElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * Heading elements implement six levels of document headings, <h1> is the most important and <h6> is the least. A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically [MDN].
    */
    class HeaderFourElement extends HtmlElementContainer {
        /**
        * Initializes a new HeaderFourElement'.
        */
        constructor(config: IHeaderFourElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * Heading elements implement six levels of document headings, <h1> is the most important and <h6> is the least. A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically [MDN].
    */
    class HeaderOneElement extends HtmlElementContainer {
        /**
        * Initializes a new HeaderOneElement'.
        */
        constructor(config: IHeaderOneElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * Heading elements implement six levels of document headings, <h1> is the most important and <h6> is the least. A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically [MDN].
    */
    class HeaderSixElement extends HtmlElementContainer {
        /**
        * Initializes a new HeaderSixElement'.
        */
        constructor(config: IHeaderSixElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * Heading elements implement six levels of document headings, <h1> is the most important and <h6> is the least. A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically [MDN].
    */
    class HeaderThreeElement extends HtmlElementContainer {
        /**
        * Initializes a new HeaderThreeElement'.
        */
        constructor(config: IHeaderThreeElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * Heading elements implement six levels of document headings, <h1> is the most important and <h6> is the least. A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically [MDN].
    */
    class HeaderTwoElement extends HtmlElementContainer {
        /**
        * Initializes a new HeaderTwoElement'.
        */
        constructor(config: IHeaderTwoElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * In HTML5 the HTML <hr> element represents a thematic break between paragraph-level elements (for example, a change of scene in a story, or a shift of topic with a section). In previous versions of HTML, it represented a horizontal rule. It may still be displayed as a horizontal rule in visual browsers, but is now defined in semantic terms, rather than presentational terms [MDN].
    */
    class HorizontalRuleElement extends HtmlElement {
        /**
        * Initializes a new HorizontalRuleElement'.
        */
        constructor(config: IHorizontalRuleElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <img> Element (or HTML Image Element) represents an image of the document [MDN].
    */
    class ImageElement extends HtmlElement {
        private _alternateProperty;
        private _heightProperty;
        private _longDescriptionProperty;
        private _sourceProperty;
        private _widthProperty;
        private _abortEvent;
        private _errorEvent;
        /**
        * This attribute defines the alternative text describing the image. Users will see this displayed if the image URL is wrong, the image is not in one of the supported formats, or until the image is downloaded.
        * Note: Omitting this attribute indicates that the image is a key part of the content, but no textual equivalent is available. Setting this attribute to the empty string indicates that this image is not a key part of the content; non-visual browsers may omit it from the rendering [MDN].
        */
        alternateProperty: b.PropertyUpdate<string>;
        /**
        * This attribute defines the alternative text describing the image. Users will see this displayed if the image URL is wrong, the image is not in one of the supported formats, or until the image is downloaded.
        * Note: Omitting this attribute indicates that the image is a key part of the content, but no textual equivalent is available. Setting this attribute to the empty string indicates that this image is not a key part of the content; non-visual browsers may omit it from the rendering [MDN].
        */
        alternate: string;
        /**
        * The height of the image in HTML5 CSS pixels, or HTML 4 in pixels or as a percentage [MDN].
        */
        heightProperty: b.PropertyUpdate<number>;
        /**
        * The height of the image in HTML5 CSS pixels, or HTML 4 in pixels or as a percentage [MDN].
        */
        height: number;
        /**
        * The URL of a description of the image to be displayed, which supplements the alt text. In HTML5, use a regular <a> element to link to the description [MDN].
        */
        longDescriptionProperty: b.PropertyUpdate<string>;
        /**
        * The URL of a description of the image to be displayed, which supplements the alt text. In HTML5, use a regular <a> element to link to the description [MDN].
        */
        longDescription: string;
        /**
        * Image URL, this attribute is obligatory for the <img> element [MDN].
        */
        sourceProperty: b.PropertyUpdate<string>;
        /**
        * Image URL, this attribute is obligatory for the <img> element [MDN].
        */
        source: string;
        /**
        * The width of the image in pixels or percent [MDN].
        */
        widthProperty: b.PropertyUpdate<number>;
        /**
        * The width of the image in pixels or percent [MDN].
        */
        width: number;
        /**
        * The abortEvent event is executed when the loading of a resource has been aborted [MDN].
        * Specification: DOM L3
        * DOM Event Name: abort
        */
        abortEvent: HtmlElementEvent<Elements.ImageElement, UIEvent>;
        /**
        * The errorEvent event is executed when a resource failed to load [MDN].
        * Specification: DOM L3
        * DOM Event Name: error
        */
        errorEvent: HtmlElementEvent<Elements.ImageElement, UIEvent>;
        /**
        * Initializes a new ImageElement'.
        */
        constructor(config: IImageElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <iframe> Element (or HTML inline frame element) represents a nested browsing context, effectively embedding another HTML page into the current page. In HTML 4.01, a document may contain a head and a body or a head and a frame-set, but not both a body and a frame-set. However,an <iframe> can be used within a normal document body. Each browsing context has its own session history and active document. The browsing context that contains the embedded content is called the parent browsing context. The top-level browsing context (which has no parent) is typically the browser window [MDN].
    */
    class InlineFrameElement extends HtmlElementContainer {
        private _heightProperty;
        private _nameProperty;
        private _scrollingProperty;
        private _sourceProperty;
        private _widthProperty;
        /**
        * Indicates the height of the frame HTML5 in CSS pixels, or HTML 4.01 in pixels or as a percentage [MDN].
        */
        heightProperty: b.PropertyUpdate<string>;
        /**
        * Indicates the height of the frame HTML5 in CSS pixels, or HTML 4.01 in pixels or as a percentage [MDN].
        */
        height: string;
        /**
        * A name for the embedded browsing context (or frame). This can be used as the value of the target attribute of an <a> or <form> element, or the formtarget attribute of an <input> or <button> element [MDN].
        */
        nameProperty: b.PropertyUpdate<string>;
        /**
        * A name for the embedded browsing context (or frame). This can be used as the value of the target attribute of an <a> or <form> element, or the formtarget attribute of an <input> or <button> element [MDN].
        */
        name: string;
        /**
        * Html.InlineFrameScrolling enumerates the values of this property.
        * Enumerated attribute indicating when the browser should provide a scroll bar (or other scrolling device) for the frame:  auto: Only when needed. yes: Always provide a scroll bar. no: Never provide a scoll bar [MDN].
        */
        scrollingProperty: b.PropertyUpdate<string>;
        /**
        * Html.InlineFrameScrolling enumerates the values of this property.
        * Enumerated attribute indicating when the browser should provide a scroll bar (or other scrolling device) for the frame:  auto: Only when needed. yes: Always provide a scroll bar. no: Never provide a scoll bar [MDN].
        */
        scrolling: string;
        /**
        * The URL of the page to embed [MDN].
        */
        sourceProperty: b.PropertyUpdate<string>;
        /**
        * The URL of the page to embed [MDN].
        */
        source: string;
        /**
        * Indicates the width of the frame HTML5 in CSS pixels, or HTML 4.01 in pixels or as a percentage [MDN].
        */
        widthProperty: b.PropertyUpdate<string>;
        /**
        * Indicates the width of the frame HTML5 in CSS pixels, or HTML 4.01 in pixels or as a percentage [MDN].
        */
        width: string;
        /**
        * Initializes a new InlineFrameElement'.
        */
        constructor(config: IInlineFrameElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <input> element is used to create interactive controls for web-based forms [MDN].
    */
    class InputElement extends HtmlElement {
        private _typeProperty;
        private _acceptProperty;
        private _autoCompleteProperty;
        private _autoFocusProperty;
        private _checkedProperty;
        private _disabledProperty;
        private _formPropertyID;
        private _formProperty;
        private _heightProperty;
        private _listPropertyID;
        private _listProperty;
        private _maxProperty;
        private _minProperty;
        private _multipleProperty;
        private _nameProperty;
        private _patternProperty;
        private _placeHolderProperty;
        private _requiredProperty;
        private _sizeProperty;
        private _sourceProperty;
        private _stepProperty;
        private _valueProperty;
        private _widthProperty;
        private _changeEvent;
        private _inputEvent;
        /**
        * Html.InputType enumerates the values of this property.
        * The type of control to display. The default type is text, if this attribute is not specified. Possible values are:  button: A push button with no default behavior. checkbox: A check box. You must use the value attribute to define the value submitted by this item. Use the checked attribute to indicate whether this item is selected. You can also use the indeterminate attribute to indicate that the checkbox is in an indeterminate state (on most platforms, this draws a horizontal line across the checkbox). color: HTML5 A control for specifying a color. date: HTML5 A control for entering a date (year, month, and day, with no time). datetime: HTML5 A control for entering a date and time (hour, minute, second, and fraction of a second) based on UTC time zone. datetime-local: HTML5 A control for entering a date and time, with no time zone. email: HTML5 A field for editing an e-mail address. The :valid and :invalid CSS pseudo-classes are applied as appropriate. file: A control that lets the user select a file. Use the accept attribute to define the types of files that the control can select. hidden: A control that is not displayed, but whose value is submitted to the server. image: A graphical submit button. You must use the src attribute to define the source of the image and the alt attribute to define alternative text. You can use the height and width attributes to define the size of the image in pixels. month: HTML5 A control for entering a month and year, with no time zone. number: HTML5 A control for entering a floating point number. password: A single-line text field whose value is obscured. Use the maxlength attribute to specify the maximum length of the value that can be entered. radio: A radio button. You must use the value attribute to define the value submitted by this item. Use the checked attribute to indicate whether this item is selected by default. Radio buttons that have the same value for the name attribute are in the same "radio button group"; only one radio button in a group can be selected at one time. range: HTML5 A control for entering a number whose exact value is not important. This type control uses the following default values if the corresponding attributes are not specified:  min: 0  max: 100  value: min + (max-min)/2, or min if max is less than min  step: 1  reset: A button that resets the contents of the form to default values. search: HTML5 A single-line text field for entering search strings; line-breaks are automatically removed from the input value. submit: A button that submits the form. tel: HTML5 A control for entering a telephone number; line-breaks are automatically removed from the input value, but no other syntax is enforced. You can use attributes such as pattern and maxlength to restrict values entered in the control. The :valid and :invalid CSS pseudo-classes are applied as appropriate. text: A single-line text field; line-breaks are automatically removed from the input value. time: HTML5 A control for entering a time value with no time zone. url: HTML5 A field for editing a URL. The user may enter a blank or invalid address. Line-breaks are automatically removed from the input value. You can use attributes such as pattern and maxlength to restrict values entered in the control. The :valid and :invalid CSS pseudo-classes are applied as appropriate. week: HTML5 A control for entering a date consisting of a week-year number and a week number with no time zone [MDN].
        */
        typeProperty: b.PropertyUpdate<string>;
        /**
        * Html.InputType enumerates the values of this property.
        * The type of control to display. The default type is text, if this attribute is not specified. Possible values are:  button: A push button with no default behavior. checkbox: A check box. You must use the value attribute to define the value submitted by this item. Use the checked attribute to indicate whether this item is selected. You can also use the indeterminate attribute to indicate that the checkbox is in an indeterminate state (on most platforms, this draws a horizontal line across the checkbox). color: HTML5 A control for specifying a color. date: HTML5 A control for entering a date (year, month, and day, with no time). datetime: HTML5 A control for entering a date and time (hour, minute, second, and fraction of a second) based on UTC time zone. datetime-local: HTML5 A control for entering a date and time, with no time zone. email: HTML5 A field for editing an e-mail address. The :valid and :invalid CSS pseudo-classes are applied as appropriate. file: A control that lets the user select a file. Use the accept attribute to define the types of files that the control can select. hidden: A control that is not displayed, but whose value is submitted to the server. image: A graphical submit button. You must use the src attribute to define the source of the image and the alt attribute to define alternative text. You can use the height and width attributes to define the size of the image in pixels. month: HTML5 A control for entering a month and year, with no time zone. number: HTML5 A control for entering a floating point number. password: A single-line text field whose value is obscured. Use the maxlength attribute to specify the maximum length of the value that can be entered. radio: A radio button. You must use the value attribute to define the value submitted by this item. Use the checked attribute to indicate whether this item is selected by default. Radio buttons that have the same value for the name attribute are in the same "radio button group"; only one radio button in a group can be selected at one time. range: HTML5 A control for entering a number whose exact value is not important. This type control uses the following default values if the corresponding attributes are not specified:  min: 0  max: 100  value: min + (max-min)/2, or min if max is less than min  step: 1  reset: A button that resets the contents of the form to default values. search: HTML5 A single-line text field for entering search strings; line-breaks are automatically removed from the input value. submit: A button that submits the form. tel: HTML5 A control for entering a telephone number; line-breaks are automatically removed from the input value, but no other syntax is enforced. You can use attributes such as pattern and maxlength to restrict values entered in the control. The :valid and :invalid CSS pseudo-classes are applied as appropriate. text: A single-line text field; line-breaks are automatically removed from the input value. time: HTML5 A control for entering a time value with no time zone. url: HTML5 A field for editing a URL. The user may enter a blank or invalid address. Line-breaks are automatically removed from the input value. You can use attributes such as pattern and maxlength to restrict values entered in the control. The :valid and :invalid CSS pseudo-classes are applied as appropriate. week: HTML5 A control for entering a date consisting of a week-year number and a week number with no time zone [MDN].
        */
        type: string;
        /**
        * Html.InputAccept enumerates the values of this property.
        * If the value of the type attribute is file, this attribute indicates the types of files that the server accepts; otherwise it is ignored. The value must be a comma-separated list of unique content type specifiers:  A valid MIME type with no extensions audio/* representing sound files HTML5 video/* representing video files HTML5 image/* representing image files HTML5 [MDN].
        */
        acceptProperty: b.PropertyUpdate<string>;
        /**
        * Html.InputAccept enumerates the values of this property.
        * If the value of the type attribute is file, this attribute indicates the types of files that the server accepts; otherwise it is ignored. The value must be a comma-separated list of unique content type specifiers:  A valid MIME type with no extensions audio/* representing sound files HTML5 video/* representing video files HTML5 image/* representing image files HTML5 [MDN].
        */
        accept: string;
        /**
        * Html.InputAutoComplete enumerates the values of this property.
        * This attribute indicates whether the value of the control can be automatically completed by the browser. This attribute is ignored if the value of the type attribute is hidden, checkbox, radio, file, or a button type (button, submit, reset, image). Possible values are:  off: The user must explicitly enter a value into this field for every use, or the document provides its own auto-completion method; the browser does not automatically complete the entry. on: The browser can automatically complete the value based on values that the user has entered during previous uses. If the autocomplete attribute is not specified on an input element, then the browser uses the autocomplete attribute value of the <input> element's form owner. The form owner is either the form element that this <input> element is a descendant of or the form element whose id is specified by the form attribute of the input element. For more information, see the autocomplete attribute in <form> [MDN].
        */
        autoCompleteProperty: b.PropertyUpdate<string>;
        /**
        * Html.InputAutoComplete enumerates the values of this property.
        * This attribute indicates whether the value of the control can be automatically completed by the browser. This attribute is ignored if the value of the type attribute is hidden, checkbox, radio, file, or a button type (button, submit, reset, image). Possible values are:  off: The user must explicitly enter a value into this field for every use, or the document provides its own auto-completion method; the browser does not automatically complete the entry. on: The browser can automatically complete the value based on values that the user has entered during previous uses. If the autocomplete attribute is not specified on an input element, then the browser uses the autocomplete attribute value of the <input> element's form owner. The form owner is either the form element that this <input> element is a descendant of or the form element whose id is specified by the form attribute of the input element. For more information, see the autocomplete attribute in <form> [MDN].
        */
        autoComplete: string;
        /**
        * This Boolean attribute lets you specify that a form control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form element in a document can have the autofocus attribute, which is a Boolean. It cannot be applied if the type attribute is set to hidden (that is, you cannot automatically set focus to a hidden control) [MDN].
        */
        autoFocusProperty: b.PropertyUpdate<boolean>;
        /**
        * This Boolean attribute lets you specify that a form control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form element in a document can have the autofocus attribute, which is a Boolean. It cannot be applied if the type attribute is set to hidden (that is, you cannot automatically set focus to a hidden control) [MDN].
        */
        autoFocus: boolean;
        /**
        * When the value of the type attribute is radio or checkbox, the presence of this Boolean attribute indicates that the control is selected by default; otherwise it is ignored [MDN].
        */
        checkedProperty: b.PropertyUpdate<boolean>;
        /**
        * When the value of the type attribute is radio or checkbox, the presence of this Boolean attribute indicates that the control is selected by default; otherwise it is ignored [MDN].
        */
        checked: boolean;
        /**
        * This Boolean attribute indicates that the form control is not available for interaction. In particular, the click event will not be dispatched on disabled controls. Also, a disabled control's value isn't submitted with the form. This attribute is ignored if the value of the type attribute is hidden [MDN].
        */
        disabledProperty: b.PropertyUpdate<boolean>;
        /**
        * This Boolean attribute indicates that the form control is not available for interaction. In particular, the click event will not be dispatched on disabled controls. Also, a disabled control's value isn't submitted with the form. This attribute is ignored if the value of the type attribute is hidden [MDN].
        */
        disabled: boolean;
        /**
        * The form element that the input element is associated with (its form owner). The value of the attribute must be an id of a <form> element in the same document. If this attribute is not specified, this <input> element must be a descendant of a <form> element. This attribute enables you to place <input> elements anywhere within a document, not just as descendants of their form elements. An input can only be associated with one form [MDN].
        */
        form: FormElement;
        /**
        * If the value of the type attribute is image, this attribute defines the height of the image displayed for the button [MDN].
        */
        heightProperty: b.PropertyUpdate<number>;
        /**
        * If the value of the type attribute is image, this attribute defines the height of the image displayed for the button [MDN].
        */
        height: number;
        /**
        * Identifies a list of pre-defined options to suggest to the user. The value must be the id of a <datalist> element in the same document. The browser displays only options that are valid values for this input element. This attribute is ignored when the type attribute's value is hidden, checkbox, radio, file, or a button type [MDN].
        */
        list: HtmlElement;
        /**
        * The maximum (numeric or date-time) value for this item, which must not be less than its minimum (min attribute) value [MDN].
        */
        maxProperty: b.PropertyUpdate<string>;
        /**
        * The maximum (numeric or date-time) value for this item, which must not be less than its minimum (min attribute) value [MDN].
        */
        max: string;
        /**
        * The minimum (numeric or date-time) value for this item, which must not be greater than its maximum (max attribute) value [MDN].
        */
        minProperty: b.PropertyUpdate<string>;
        /**
        * The minimum (numeric or date-time) value for this item, which must not be greater than its maximum (max attribute) value [MDN].
        */
        min: string;
        /**
        * This Boolean attribute indicates whether the user can enter more than one value. This attribute applies when the type attribute is set to email or file; otherwise it is ignored [MDN].
        */
        multipleProperty: b.PropertyUpdate<boolean>;
        /**
        * This Boolean attribute indicates whether the user can enter more than one value. This attribute applies when the type attribute is set to email or file; otherwise it is ignored [MDN].
        */
        multiple: boolean;
        /**
        * The name of the control, which is submitted with the form data [MDN].
        */
        nameProperty: b.PropertyUpdate<string>;
        /**
        * The name of the control, which is submitted with the form data [MDN].
        */
        name: string;
        /**
        * A regular expression that the control's value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is text, search, tel, url or email; otherwise it is ignored. The regular expression language is the same as JavaScript's. The pattern is not surrounded by forward slashes [MDN].
        */
        patternProperty: b.PropertyUpdate<string>;
        /**
        * A regular expression that the control's value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is text, search, tel, url or email; otherwise it is ignored. The regular expression language is the same as JavaScript's. The pattern is not surrounded by forward slashes [MDN].
        */
        pattern: string;
        /**
        * A hint to the user of what can be entered in the control . The placeholder text must not contain carriage returns or line-feeds. This attribute applies when the value of the type attribute is text, search, tel, url or email; otherwise it is ignored.
        * Note: Do not use the placeholder attribute instead of a <label> element. Their purposes are different: the <label> attribute describes the role of the form element; that is, it indicates what kind of information is expected, the placeholder attribute is a hint about the format the content should take. There are cases in which the placeholder attribute is never displayed to the user, so the form must be understandable without it [MDN].
        */
        placeHolderProperty: b.PropertyUpdate<string>;
        /**
        * A hint to the user of what can be entered in the control . The placeholder text must not contain carriage returns or line-feeds. This attribute applies when the value of the type attribute is text, search, tel, url or email; otherwise it is ignored.
        * Note: Do not use the placeholder attribute instead of a <label> element. Their purposes are different: the <label> attribute describes the role of the form element; that is, it indicates what kind of information is expected, the placeholder attribute is a hint about the format the content should take. There are cases in which the placeholder attribute is never displayed to the user, so the form must be understandable without it [MDN].
        */
        placeHolder: string;
        /**
        * This attribute specifies that the user must fill in a value before submitting a form. It cannot be used when the type attribute is hidden, image, or a button type (submit, reset, or button). The :optional and :required CSS pseudo-classes will be applied to the field as appropriate [MDN].
        */
        requiredProperty: b.PropertyUpdate<boolean>;
        /**
        * This attribute specifies that the user must fill in a value before submitting a form. It cannot be used when the type attribute is hidden, image, or a button type (submit, reset, or button). The :optional and :required CSS pseudo-classes will be applied to the field as appropriate [MDN].
        */
        required: boolean;
        /**
        * The initial size of the control. This value is in pixels unless the value of the type attribute is text or password, in which case, it is an integer number of characters. Starting in HTML5, this attribute applies only when the type attribute is set to text, search, tel, url, email, or password; otherwise it is ignored. In addition, the size must be greater than zero. If you don't specify a size, a default value of 20 is used [MDN].
        */
        sizeProperty: b.PropertyUpdate<number>;
        /**
        * The initial size of the control. This value is in pixels unless the value of the type attribute is text or password, in which case, it is an integer number of characters. Starting in HTML5, this attribute applies only when the type attribute is set to text, search, tel, url, email, or password; otherwise it is ignored. In addition, the size must be greater than zero. If you don't specify a size, a default value of 20 is used [MDN].
        */
        size: number;
        /**
        * If the value of the type attribute is image, this attribute specifies a URI for the location of an image to display on the graphical submit button; otherwise it is ignored [MDN].
        */
        sourceProperty: b.PropertyUpdate<string>;
        /**
        * If the value of the type attribute is image, this attribute specifies a URI for the location of an image to display on the graphical submit button; otherwise it is ignored [MDN].
        */
        source: string;
        /**
        * Works with the min and max attributes to limit the increments at which a numeric or date-time value can be set. It can be the string any or a positive floating point number. If this attribute is not set to any, the control accepts only values at multiples of the step value greater than the minimum [MDN].
        */
        stepProperty: b.PropertyUpdate<string>;
        /**
        * Works with the min and max attributes to limit the increments at which a numeric or date-time value can be set. It can be the string any or a positive floating point number. If this attribute is not set to any, the control accepts only values at multiples of the step value greater than the minimum [MDN].
        */
        step: string;
        /**
        * The initial value of the control. This attribute is optional except when the value of the type attribute is radio or checkbox. Note that when reloading the page, Gecko and IE will ignore the value specified in the HTML source, if the value was changed before the reload [MDN].
        */
        valueProperty: b.PropertyUpdate<string>;
        /**
        * The initial value of the control. This attribute is optional except when the value of the type attribute is radio or checkbox. Note that when reloading the page, Gecko and IE will ignore the value specified in the HTML source, if the value was changed before the reload [MDN].
        */
        value: string;
        /**
        * If the value of the type attribute is image, this attribute defines the width of the image displayed for the button [MDN].
        */
        widthProperty: b.PropertyUpdate<number>;
        /**
        * If the value of the type attribute is image, this attribute defines the width of the image displayed for the button [MDN].
        */
        width: number;
        /**
        * The changeEvent event is executed when an element loses focus and its value changed since gaining focus [MDN].
        * Specifications: DOM L2, HTML5
        * DOM Event Name: change
        */
        changeEvent: HtmlElementEvent<Elements.InputElement, Event>;
        /**
        * The inputEvent event is executed when the value of an element changes or the content of an element with the attribute contenteditable is modified [MDN].
        * Specification: HTML5
        * DOM Event Name: input
        */
        inputEvent: HtmlElementEvent<Elements.InputElement, Event>;
        /**
        * Initializes a new InputElement'.
        */
        constructor(config: IInputElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <ins> Element (or HTML Inserted Text) HTML represents a range of text that has been added to a document [MDN].
    */
    class InsertedElement extends HtmlElementContainer {
        private _citationProperty;
        /**
        * This attribute defines the URI of a resource that explains the change, like a link to some meeting minutes or a ticket in a troubleshooting sytem [MDN].
        */
        citationProperty: b.PropertyUpdate<string>;
        /**
        * This attribute defines the URI of a resource that explains the change, like a link to some meeting minutes or a ticket in a troubleshooting sytem [MDN].
        */
        citation: string;
        /**
        * Initializes a new InsertedElement'.
        */
        constructor(config: IInsertedElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <i> Element represents a range of text that is set off from the normal text for some reason, for example, technical terms, foreign language phrases, or fictional character thoughts. It is typically displayed in italic type [MDN].
    */
    class ItalicElement extends HtmlElementContainer {
        /**
        * Initializes a new ItalicElement'.
        */
        constructor(config: IItalicElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <kbd> Element (or HTML Keyboard Input Element) represents user input and produces an inline element displayed in the browser's default monotype font [MDN].
    */
    class KeyboardInputElement extends HtmlElementContainer {
        /**
        * Initializes a new KeyboardInputElement'.
        */
        constructor(config: IKeyboardInputElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <label> Element represents a caption for an item in a user interface. It can be associated with a control either by using the for attribute, or by placing the control element inside the label element. Such a control is called the labeled control of the label element [MDN].
    */
    class LabelElement extends HtmlElementContainer {
        private _formPropertyID;
        private _formProperty;
        /**
        * The form element that the label element is associated with (its form owner). The value of the attribute must be an ID of a <form> element in the same document. If this attribute is not specified, this <label> element must be a descendant of a <form> element. This attribute enables you to place label elements anywhere within a document, not just as descendants of their form elements [MDN].
        */
        form: FormElement;
        /**
        * Initializes a new LabelElement'.
        */
        constructor(config: ILabelElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <legend> Element (or HTML Legend Field Element) represents a caption for the content of its parent <fieldset> [MDN].
    */
    class LegendFieldElement extends HtmlElementContainer {
        /**
        * Initializes a new LegendFieldElement'.
        */
        constructor(config: ILegendFieldElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <br> Element (or HTML Line Break Element) produces a line break in text (carriage-return). It is useful for writing a poem or an address, where the division of lines is significant [MDN].
    */
    class LineBreakElement extends HtmlElement {
        /**
        * Initializes a new LineBreakElement'.
        */
        constructor(config: ILineBreakElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <link> Element specifies relationships between the current document and other documents. Possible uses for this element include defining a relational framework for navigation and linking the document to a style sheet [MDN].
    */
    class LinkElement extends HtmlElement {
        private _characterSetProperty;
        private _hrefProperty;
        private _hrefLanguageProperty;
        private _mediaProperty;
        private _relationshipProperty;
        private _reverseRelationshipProperty;
        private _typeProperty;
        /**
        * This attribute defines the character encoding of the linked resource. The value is a space- and/or comma-delimited list of character sets as defined in RFC 2045. The default value is ISO-8859-1.
        * Note: This attribute is obsolete in HTML5 and must not be used by authors. To achieve its effect, use the Content-Type: HTTP header on the linked resource [MDN].
        */
        characterSetProperty: b.PropertyUpdate<string>;
        /**
        * This attribute defines the character encoding of the linked resource. The value is a space- and/or comma-delimited list of character sets as defined in RFC 2045. The default value is ISO-8859-1.
        * Note: This attribute is obsolete in HTML5 and must not be used by authors. To achieve its effect, use the Content-Type: HTTP header on the linked resource [MDN].
        */
        characterSet: string;
        /**
        * This attribute specifies the URL of the linked resource. A URL might be absolute or relative [MDN].
        */
        hrefProperty: b.PropertyUpdate<string>;
        /**
        * This attribute specifies the URL of the linked resource. A URL might be absolute or relative [MDN].
        */
        href: string;
        /**
        * This attribute indicates the language of the linked resource. It is purely advisory. Allowed values are determined by BCP47 for HTML5 and by RFC1766 for HTML 4. Use this attribute only if the href attribute is present [MDN].
        */
        hrefLanguageProperty: b.PropertyUpdate<string>;
        /**
        * This attribute indicates the language of the linked resource. It is purely advisory. Allowed values are determined by BCP47 for HTML5 and by RFC1766 for HTML 4. Use this attribute only if the href attribute is present [MDN].
        */
        hrefLanguage: string;
        /**
        * This attribute specifies the media which the linked resource applies to. Its value must be a media query. This attribute is mainly useful when linking to external stylesheets by allowing the user agent to pick the best adapted one for the device it runs on.
        * Note:  In HTML 4, this can only be a simple white-space-separated list of media description literals, i.e., media types and groups, where defined and allowed as values for this attribute, such as print, screen, aural, braille. HTML5 extended this to any kind of media queries, which are a superset of the allowed values of HTML 4. Browsers not supporting the CSS3 Media Queries won't necessarily recognize the adequate link; do not forget to set fallback links, the restricted set of media queries defined in HTML 4 [MDN].
        */
        mediaProperty: b.PropertyUpdate<string>;
        /**
        * This attribute specifies the media which the linked resource applies to. Its value must be a media query. This attribute is mainly useful when linking to external stylesheets by allowing the user agent to pick the best adapted one for the device it runs on.
        * Note:  In HTML 4, this can only be a simple white-space-separated list of media description literals, i.e., media types and groups, where defined and allowed as values for this attribute, such as print, screen, aural, braille. HTML5 extended this to any kind of media queries, which are a superset of the allowed values of HTML 4. Browsers not supporting the CSS3 Media Queries won't necessarily recognize the adequate link; do not forget to set fallback links, the restricted set of media queries defined in HTML 4 [MDN].
        */
        media: string;
        /**
        * This attribute names a relationship of the linked document to the current document. The attribute must be a space-separated list of the link types values. The most common use of this attribute is to specify a link to an external style sheet: the rel attribute is set to stylesheet, and the href attribute is set to the URL of an external style sheet to format the page. WebTV also supports the use of the value next for rel to preload the next page in a document series [MDN].
        */
        relationshipProperty: b.PropertyUpdate<string>;
        /**
        * This attribute names a relationship of the linked document to the current document. The attribute must be a space-separated list of the link types values. The most common use of this attribute is to specify a link to an external style sheet: the rel attribute is set to stylesheet, and the href attribute is set to the URL of an external style sheet to format the page. WebTV also supports the use of the value next for rel to preload the next page in a document series [MDN].
        */
        relationship: string;
        /**
        * The value of this attribute shows the relationship of the current document to the linked document, as defined by the href attribute. The attribute thus defines the reverse relationship compared to the value of the rel attribute. Link types values for the attribute are similar to the possible values for rel.
        * Note: This attribute is obsolete in HTML5. Do not use it. To achieve its effect, use the rel attribute with the opposite link types values, e.g. made should be replaced by author. Also this attribute doesn't mean revision and must not be used with a version number, which is unfortunately the case on numerous sites [MDN].
        */
        reverseRelationshipProperty: b.PropertyUpdate<string>;
        /**
        * The value of this attribute shows the relationship of the current document to the linked document, as defined by the href attribute. The attribute thus defines the reverse relationship compared to the value of the rel attribute. Link types values for the attribute are similar to the possible values for rel.
        * Note: This attribute is obsolete in HTML5. Do not use it. To achieve its effect, use the rel attribute with the opposite link types values, e.g. made should be replaced by author. Also this attribute doesn't mean revision and must not be used with a version number, which is unfortunately the case on numerous sites [MDN].
        */
        reverseRelationship: string;
        /**
        * This attribute is used to define the type of the content linked to. The value of the attribute should be a MIME type such as text/html, text/css, and so on. The common use of this attribute is to define the type of style sheet linked and the most common current value is text/css, which indicates a Cascading Style Sheet format [MDN].
        */
        typeProperty: b.PropertyUpdate<string>;
        /**
        * This attribute is used to define the type of the content linked to. The value of the attribute should be a MIME type such as text/html, text/css, and so on. The common use of this attribute is to define the type of style sheet linked and the most common current value is text/css, which indicates a Cascading Style Sheet format [MDN].
        */
        type: string;
        /**
        * Initializes a new LinkElement'.
        */
        constructor(config: ILinkElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML List item element (<li>) is used to represent a list item. It should be contained in an ordered list (<ol>), an unordered list (<ul>) or a menu (<menu>), where it represents a single entity in that list. In menus and unordered lists, list items are ordinarily displayed using bullet points. In ordered lists, they are usually displayed with some ascending counter on the left such as a number or letter [MDN].
    */
    class ListItemElement extends HtmlElementContainer {
        private _valueProperty;
        private _typeProperty;
        /**
        * This integer attributes indicates the current ordinal value of the item in the list as defined by the <ol> element. The only allowed value for this attribute is a number, even if the list is displayed with Roman numerals or letters. List items that follow this one continue numbering from the value set. The value attribute has no meaning for unordered lists (<ul>) or for menus (<menu>).
        * Note: This attribute was deprecated in HTML4, but reintroduced in HTML5.
        * Note: Prior to Gecko 9.0, negative values were incorrectly converted to 0. Starting in Gecko 9.0 all integer values are correctly parsed [MDN].
        */
        valueProperty: b.PropertyUpdate<number>;
        /**
        * This integer attributes indicates the current ordinal value of the item in the list as defined by the <ol> element. The only allowed value for this attribute is a number, even if the list is displayed with Roman numerals or letters. List items that follow this one continue numbering from the value set. The value attribute has no meaning for unordered lists (<ul>) or for menus (<menu>).
        * Note: This attribute was deprecated in HTML4, but reintroduced in HTML5.
        * Note: Prior to Gecko 9.0, negative values were incorrectly converted to 0. Starting in Gecko 9.0 all integer values are correctly parsed [MDN].
        */
        value: number;
        /**
        * Html.ListItemType enumerates the values of this property.
        * This character attributes indicates the numbering type:  a: lowercase letters A: uppercase letters i: lowercase Roman numerals I: uppercase Roman numerals 1: numbers This type overrides the one used by its parent <ol> element, if any.
        * Note: This attribute has been deprecated: use the CSS list-style-type property instead [MDN].
        */
        typeProperty: b.PropertyUpdate<string>;
        /**
        * Html.ListItemType enumerates the values of this property.
        * This character attributes indicates the numbering type:  a: lowercase letters A: uppercase letters i: lowercase Roman numerals I: uppercase Roman numerals 1: numbers This type overrides the one used by its parent <ol> element, if any.
        * Note: This attribute has been deprecated: use the CSS list-style-type property instead [MDN].
        */
        type: string;
        /**
        * Initializes a new ListItemElement'.
        */
        constructor(config: IListItemElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <main> element represents the main content of  the <body> of a document or application. The main content area consists of content that is directly related to, or expands upon the central topic of a document or the central functionality of an application. This content should be unique to the document, excluding any content that is repeated across a set of documents such as sidebars, navigation links, copyright information, site logos, and search forms (unless, of course, the document's main function is as a search form) [MDN].
    */
    class MainElement extends HtmlElementContainer {
        /**
        * Initializes a new MainElement'.
        */
        constructor(config: IMainElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <map> element is used with <area> elements to define an image map [MDN].
    */
    class MapElement extends HtmlElementContainer {
        private _nameProperty;
        /**
        * The name attribute gives the map a name so that it can be referenced. The attribute must be present and must have a non-empty value with no space characters. The value of the name attribute must not be a compatibility-caseless match for the value of the name attribute of another map element in the same document. If the id attribute is also specified, both attributes must have the same value [MDN].
        */
        nameProperty: b.PropertyUpdate<string>;
        /**
        * The name attribute gives the map a name so that it can be referenced. The attribute must be present and must have a non-empty value with no space characters. The value of the name attribute must not be a compatibility-caseless match for the value of the name attribute of another map element in the same document. If the id attribute is also specified, both attributes must have the same value [MDN].
        */
        name: string;
        /**
        * Initializes a new MapElement'.
        */
        constructor(config: IMapElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <mark> Element represents highlighted text, i.e., a run of text marked for reference purpose, due to its relevance in a particular context. For example it can be used in a page showing search results to highlight every instance of the searched for word [MDN].
    */
    class MarkElement extends HtmlElementContainer {
        /**
        * Initializes a new MarkElement'.
        */
        constructor(config: IMarkElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <meta> Element represents any metadata information which cannot be represented using one of the other meta-related element (<base>, <link>, <script>, <style> or <title>). According to the attributes set, the kind of metadata can be one of the following: [MDN].
    */
    class MetaElement extends HtmlElement {
        private _contentProperty;
        private _httpEquivProperty;
        private _nameProperty;
        private _schemeProperty;
        /**
        * This attribute gives the value associated with the http-equiv or name attribute, depending of the context [MDN].
        */
        contentProperty: b.PropertyUpdate<string>;
        /**
        * This attribute gives the value associated with the http-equiv or name attribute, depending of the context [MDN].
        */
        content: string;
        /**
        * Html.MetaHttpEquiv enumerates the values of this property.
        * This enumerated attribute defines the pragma that can alter servers and user-agents behavior. The value of the pragma is defined using the content and can be one of the following:  content-language  This pragma defines the default language of the page.
        * Note: do not use this pragma as it is obsolete. Use the global lang attribute on the <body> element instead.  content-type  This attribute defines the MIME type of the document, eventually followed by its character set. It follows the same syntax as the HTTP content-type entity-header field, but as it is inside an HTML Element, most value are not possible. Therefore the valid syntax for its content is the literal string 'text/html' eventually followed by a character set with the following syntax:'; charset=IANAcharset' where IANAcharset is the preferred MIME name for a character set as defined by the IANA
        * Note:   Do not use this pragma as it is obsolete. Use the charset attribute on the <meta> element instead. As the <meta> may not be used to change the type of a document in an XHTML document, or in an HTML5 document following the XHTML syntax, never set set MIME type to an XHTML MIME type that way. It would be incorrect. Only HTML document can use the content-type, so most of it is redundant: that's why it has been obsoleted and replaced by the charset attribute.    default-style  This pragma specifies the preferred stylesheet to be used on the page. The content attribute must contains the id of a <link> element whose href attribute links to a CSS stylesheet, or the id of a <style> element which contains a CSS stylesheet.  refresh  This pragma specifies:  the number of seconds until the page should be reloaded, if the content attribute contains only a positive integer number;  the number of seconds until the page should be redirected to another, if the content attribute contains a positive integer number followed by the string ';url=' and a valid URL.   set-cookie  This pragma defines a cookie for the page. Its content must follows the syntax defines in the IETF HTTP Cookie Specification.
        * Note: Do not use this pragma as it is obsolete. Use the HTTP header set-cookie instead [MDN].
        */
        httpEquivProperty: b.PropertyUpdate<string>;
        /**
        * Html.MetaHttpEquiv enumerates the values of this property.
        * This enumerated attribute defines the pragma that can alter servers and user-agents behavior. The value of the pragma is defined using the content and can be one of the following:  content-language  This pragma defines the default language of the page.
        * Note: do not use this pragma as it is obsolete. Use the global lang attribute on the <body> element instead.  content-type  This attribute defines the MIME type of the document, eventually followed by its character set. It follows the same syntax as the HTTP content-type entity-header field, but as it is inside an HTML Element, most value are not possible. Therefore the valid syntax for its content is the literal string 'text/html' eventually followed by a character set with the following syntax:'; charset=IANAcharset' where IANAcharset is the preferred MIME name for a character set as defined by the IANA
        * Note:   Do not use this pragma as it is obsolete. Use the charset attribute on the <meta> element instead. As the <meta> may not be used to change the type of a document in an XHTML document, or in an HTML5 document following the XHTML syntax, never set set MIME type to an XHTML MIME type that way. It would be incorrect. Only HTML document can use the content-type, so most of it is redundant: that's why it has been obsoleted and replaced by the charset attribute.    default-style  This pragma specifies the preferred stylesheet to be used on the page. The content attribute must contains the id of a <link> element whose href attribute links to a CSS stylesheet, or the id of a <style> element which contains a CSS stylesheet.  refresh  This pragma specifies:  the number of seconds until the page should be reloaded, if the content attribute contains only a positive integer number;  the number of seconds until the page should be redirected to another, if the content attribute contains a positive integer number followed by the string ';url=' and a valid URL.   set-cookie  This pragma defines a cookie for the page. Its content must follows the syntax defines in the IETF HTTP Cookie Specification.
        * Note: Do not use this pragma as it is obsolete. Use the HTTP header set-cookie instead [MDN].
        */
        httpEquiv: string;
        /**
        * Html.MetaName enumerates the values of this property.
        * This attribute defines the name of a document-level metadata. It should not be set if one of the attribute itemprop, http-equiv or charset is also set. This document-level metadata name is associated with a value, contained by the content attribute. The possible values for the name element are, with their associated value stored via the content attribute:  application-name, defining the name of the web application running in the webpage;
        * Note:   Browsers may use this to identify the application. It is different from the <title> element, which usually consist of the application name but may also contain specific information like the document name or a status; Simple webpages shouldn't define the application-name meta.   author, defining, in a free format, the name of the author of the document; description, containing a short and accurate summary of the content of the page. Several browsers, among them Firefox and Opera, use this meta as the default description of the page when bookmarked; generator, containing, in a free format, the identifier to the software that generated the page; keywords, containing, as strings separated by commas, relevant words associated with the content of the page. The attribute may also have a value taken from the extended list defined on WHATWG Wiki MetaExtensions page. Also none has been formally accepted yet, a few commonly used names are among the proposals:  creator, defining, in a free format, the name of the creator of the document. Note that it can be the name of the institution. If there are more than one, several <meta> element should be used; googlebot, which is a synonym of robots, but is only followed by Googlebot, the indexing crawler for Google; publisher, defining, in a free format, the name of the publisher of the document. Note that it can be the name of the institution; robots, defining the behavior that cooperative crawlers should have with the page. It is a comma-separated list of values taken in the following list:   Values for the content of <meta name="robots">   Value  Description  Used by      index  Allows the robot to index the page  All    noindex  Prevents the robot to index the page  All    follow  Allows the robot to follow the links on the page  All    nofollow  Prevents the robot to follow the links on the page  All    noodp  Prevents the usage of the Open Directory Project description, if any, as the description of the page in the search engine results page   Google, Yahoo, Bing     noarchive  Prevents the search engine to cache the content of the page  Google, Yahoo    nosnippet  Prevents the display of any description of the page in the search engine results page  Google    noimageindex  Prevents this page to appear as the referring page of an indexed image  Google    noydir  Prevents the usage of the Yahoo Directory description, if any, as the description of the page in the search engine results page  Yahoo    nocache  Synonym of noarchive  Bing    Notes:   Only cooperative robots will follow the rules defined by the robots name. Do not expect to keep e-mail harvesters at bay with this The robot still needs to access the page in order to read the meta value. If you want to keep them at bay, for example to prevent bandwidth consumption, use a robots.txt file instead (or in complement). If you want to remove the page of an index, changing the meta to noindex will work, but only when the robot visit the page again. Be sure not to prevent such visit, via the robots.txt file for example. Some search engines have developers tools allowing a quick removal of some page. Some possible values are mutually exclusive, like using index and noindex, or follow and nofollow, at the same time. In these case the behavior of the robot is undefined, and may vary from one to the other. So avoid these cases. Some search engine crawler robots, like those of Google, Yahoo Search or Bing, supports the same values on an HTTP directive, X-Robot-Tags: this allows to use these pragma on non-HTML documents, like images.   slurp, which is a synonym of robots, but is only followed by Slurp, the indexing crawler for Yahoo Search; Finally a few names are in common use, though not in progress of being standardized:  viewport, which gives hints about the size of the initial size of the viewport. This pragma is used by several mobile devices only.   Values for the content of <meta name="viewport">   Value  Possible values  Description      width  a positive integer number or the literal device-width  defines the width, in pixels, of the viewport    height  a positive integer number of the literal device-height  defines the height, in pixels, of the viewport    initial-scale  a positive number between 0.0 and 10.0  defines the ratio between the device width (device-width in portrait mode or device-height in landscape mode) and the viewport size.e    maximum-scale  a positive number between 0.0 and 10.0  defines the maximum value of the zoom; it must be greater or equal to the minimum-scale or the behavior is underterminate.    minimum-scale  a positive number between 0.0 and 10.0  defines the minimum value of the zoom; it must be smaller or equal to the maximum-scale or the behavior is undeterminate.    user-scalable  a boolean value (yes or no)  If set to no, the user is not able to zoom or in the webpage. Default value is yes.    Notes:   Though not standardized, this attribute is used by different mobile browsers like Safari Mobile, Firefox for Mobile or Opera Mobile. The default values may change from one device, and browser, to another To learn about this pragma in Firefox for Mobile, see this article [MDN].
        */
        nameProperty: b.PropertyUpdate<string>;
        /**
        * Html.MetaName enumerates the values of this property.
        * This attribute defines the name of a document-level metadata. It should not be set if one of the attribute itemprop, http-equiv or charset is also set. This document-level metadata name is associated with a value, contained by the content attribute. The possible values for the name element are, with their associated value stored via the content attribute:  application-name, defining the name of the web application running in the webpage;
        * Note:   Browsers may use this to identify the application. It is different from the <title> element, which usually consist of the application name but may also contain specific information like the document name or a status; Simple webpages shouldn't define the application-name meta.   author, defining, in a free format, the name of the author of the document; description, containing a short and accurate summary of the content of the page. Several browsers, among them Firefox and Opera, use this meta as the default description of the page when bookmarked; generator, containing, in a free format, the identifier to the software that generated the page; keywords, containing, as strings separated by commas, relevant words associated with the content of the page. The attribute may also have a value taken from the extended list defined on WHATWG Wiki MetaExtensions page. Also none has been formally accepted yet, a few commonly used names are among the proposals:  creator, defining, in a free format, the name of the creator of the document. Note that it can be the name of the institution. If there are more than one, several <meta> element should be used; googlebot, which is a synonym of robots, but is only followed by Googlebot, the indexing crawler for Google; publisher, defining, in a free format, the name of the publisher of the document. Note that it can be the name of the institution; robots, defining the behavior that cooperative crawlers should have with the page. It is a comma-separated list of values taken in the following list:   Values for the content of <meta name="robots">   Value  Description  Used by      index  Allows the robot to index the page  All    noindex  Prevents the robot to index the page  All    follow  Allows the robot to follow the links on the page  All    nofollow  Prevents the robot to follow the links on the page  All    noodp  Prevents the usage of the Open Directory Project description, if any, as the description of the page in the search engine results page   Google, Yahoo, Bing     noarchive  Prevents the search engine to cache the content of the page  Google, Yahoo    nosnippet  Prevents the display of any description of the page in the search engine results page  Google    noimageindex  Prevents this page to appear as the referring page of an indexed image  Google    noydir  Prevents the usage of the Yahoo Directory description, if any, as the description of the page in the search engine results page  Yahoo    nocache  Synonym of noarchive  Bing    Notes:   Only cooperative robots will follow the rules defined by the robots name. Do not expect to keep e-mail harvesters at bay with this The robot still needs to access the page in order to read the meta value. If you want to keep them at bay, for example to prevent bandwidth consumption, use a robots.txt file instead (or in complement). If you want to remove the page of an index, changing the meta to noindex will work, but only when the robot visit the page again. Be sure not to prevent such visit, via the robots.txt file for example. Some search engines have developers tools allowing a quick removal of some page. Some possible values are mutually exclusive, like using index and noindex, or follow and nofollow, at the same time. In these case the behavior of the robot is undefined, and may vary from one to the other. So avoid these cases. Some search engine crawler robots, like those of Google, Yahoo Search or Bing, supports the same values on an HTTP directive, X-Robot-Tags: this allows to use these pragma on non-HTML documents, like images.   slurp, which is a synonym of robots, but is only followed by Slurp, the indexing crawler for Yahoo Search; Finally a few names are in common use, though not in progress of being standardized:  viewport, which gives hints about the size of the initial size of the viewport. This pragma is used by several mobile devices only.   Values for the content of <meta name="viewport">   Value  Possible values  Description      width  a positive integer number or the literal device-width  defines the width, in pixels, of the viewport    height  a positive integer number of the literal device-height  defines the height, in pixels, of the viewport    initial-scale  a positive number between 0.0 and 10.0  defines the ratio between the device width (device-width in portrait mode or device-height in landscape mode) and the viewport size.e    maximum-scale  a positive number between 0.0 and 10.0  defines the maximum value of the zoom; it must be greater or equal to the minimum-scale or the behavior is underterminate.    minimum-scale  a positive number between 0.0 and 10.0  defines the minimum value of the zoom; it must be smaller or equal to the maximum-scale or the behavior is undeterminate.    user-scalable  a boolean value (yes or no)  If set to no, the user is not able to zoom or in the webpage. Default value is yes.    Notes:   Though not standardized, this attribute is used by different mobile browsers like Safari Mobile, Firefox for Mobile or Opera Mobile. The default values may change from one device, and browser, to another To learn about this pragma in Firefox for Mobile, see this article [MDN].
        */
        name: string;
        /**
        * This attribute defines the scheme in which the metadata is described. A scheme is a context leading to the correct interpretations of the content value, like a format.  Notes: Do not use this attribute as it is obsolete. There is no replacement for it as there was no real usage for it. Omit it altogether [MDN].
        */
        schemeProperty: b.PropertyUpdate<string>;
        /**
        * This attribute defines the scheme in which the metadata is described. A scheme is a context leading to the correct interpretations of the content value, like a format.  Notes: Do not use this attribute as it is obsolete. There is no replacement for it as there was no real usage for it. Omit it altogether [MDN].
        */
        scheme: string;
        /**
        * Initializes a new MetaElement'.
        */
        constructor(config: IMetaElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML Navigation Element (<nav>) represents a section of a page that links to other pages or to parts within the page [MDN].
    */
    class NavigationElement extends HtmlElementContainer {
        /**
        * Initializes a new NavigationElement'.
        */
        constructor(config: INavigationElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <noscript> Element defines a section of html to be inserted if a script type on the page is unsupported or if scripting is currently turned off in the browser [MDN].
    */
    class NoScriptElement extends HtmlElementContainer {
        /**
        * Initializes a new NoScriptElement'.
        */
        constructor(config: INoScriptElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * In a Web form, the HTML <option> element is used to create a control representing an item within a <select>, <optgroup> or <datalist> element [MDN].
    */
    class OptionElement extends HtmlElementContainer {
        private _disabledProperty;
        private _labelProperty;
        private _selectedProperty;
        private _valueProperty;
        /**
        * If this Boolean attribute is set, this option is not checkable [MDN].
        */
        disabledProperty: b.PropertyUpdate<boolean>;
        /**
        * If this Boolean attribute is set, this option is not checkable [MDN].
        */
        disabled: boolean;
        /**
        * This attribute contains a text label indicating the meaning of the option. If it is not defined, the value defaults to the element's text content.
        * Note: the label attribute is designed to contain a short label typically used in a hierarchical menu. The value attribute describes a longer label designed to be used near a radio button, for example [MDN].
        */
        labelProperty: b.PropertyUpdate<string>;
        /**
        * This attribute contains a text label indicating the meaning of the option. If it is not defined, the value defaults to the element's text content.
        * Note: the label attribute is designed to contain a short label typically used in a hierarchical menu. The value attribute describes a longer label designed to be used near a radio button, for example [MDN].
        */
        label: string;
        /**
        * This Boolean attribute indicates that the option is initially selected. If the <option> element is the descendant of a <select> element whose multiple attribute is not set, only one <option> in the <select> may have the selected attribute [MDN].
        */
        selectedProperty: b.PropertyUpdate<boolean>;
        /**
        * This Boolean attribute indicates that the option is initially selected. If the <option> element is the descendant of a <select> element whose multiple attribute is not set, only one <option> in the <select> may have the selected attribute [MDN].
        */
        selected: boolean;
        /**
        * This textual contains a longer text label explaining the option, much like the label attribute. The label attribute is designed to contain a short label typically used in a hierarchical menu, whereas the value attribute describes a longer label designed to be used near a radio button, for example [MDN].
        */
        valueProperty: b.PropertyUpdate<string>;
        /**
        * This textual contains a longer text label explaining the option, much like the label attribute. The label attribute is designed to contain a short label typically used in a hierarchical menu, whereas the value attribute describes a longer label designed to be used near a radio button, for example [MDN].
        */
        value: string;
        /**
        * Initializes a new OptionElement'.
        */
        constructor(config: IOptionElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * In a Web form, the HTML <optgroup> element  creates a grouping of options within a <select> element [MDN].
    */
    class OptionsGroupElement extends HtmlElementContainer {
        private _disabledProperty;
        private _labelProperty;
        /**
        * If this Boolean attribute is set, none of the items in this option group is selectable. Often browsers grey out such control and it won't receive any browsing events, like mouse clicks or focus-related ones [MDN].
        */
        disabledProperty: b.PropertyUpdate<boolean>;
        /**
        * If this Boolean attribute is set, none of the items in this option group is selectable. Often browsers grey out such control and it won't receive any browsing events, like mouse clicks or focus-related ones [MDN].
        */
        disabled: boolean;
        /**
        * The name of the group of options, which the browser can use when labeling the options in the user interface. This attribute is mandatory if this element is used [MDN].
        */
        labelProperty: b.PropertyUpdate<string>;
        /**
        * The name of the group of options, which the browser can use when labeling the options in the user interface. This attribute is mandatory if this element is used [MDN].
        */
        label: string;
        /**
        * Initializes a new OptionsGroupElement'.
        */
        constructor(config: IOptionsGroupElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <ol> Element (or HTML Ordered List Element) represents an ordered list of items. Typically, ordered-list items are displayed with a preceding numbering, which can be of any form, like numerals, letters or Romans numerals or even simple bullets. This numbered style is not defined in the HTML description of the page, but in its associated CSS, using the list-style-type property [MDN].
    */
    class OrderedListElement extends HtmlElementContainer {
        private _compactProperty;
        private _startProperty;
        private _typeProperty;
        /**
        * This Boolean attribute hints that the list should be rendered in a compact style. The interpretation of this attribute depends on the user agent and it doesn't work in all browsers. Note: Do not use this attribute, as it has been deprecated: the <ol> element should be styled using CSS. To give a similar effect than the compact attribute, the CSS property line-height can be used with a value of 80% [MDN].
        */
        compactProperty: b.PropertyUpdate<boolean>;
        /**
        * This Boolean attribute hints that the list should be rendered in a compact style. The interpretation of this attribute depends on the user agent and it doesn't work in all browsers. Note: Do not use this attribute, as it has been deprecated: the <ol> element should be styled using CSS. To give a similar effect than the compact attribute, the CSS property line-height can be used with a value of 80% [MDN].
        */
        compact: boolean;
        /**
        * This integer attribute specifies the start value for numbering the individual list items. Although the ordering type of list elements might be Roman numerals, such as XXXI, or letters, the value of start is always represented as a number. To start numbering elements from the letter "C", use <ol start="3">.
        * Note: This attribute was deprecated in HTML4, but reintroduced in HTML5 [MDN].
        */
        startProperty: b.PropertyUpdate<number>;
        /**
        * This integer attribute specifies the start value for numbering the individual list items. Although the ordering type of list elements might be Roman numerals, such as XXXI, or letters, the value of start is always represented as a number. To start numbering elements from the letter "C", use <ol start="3">.
        * Note: This attribute was deprecated in HTML4, but reintroduced in HTML5 [MDN].
        */
        start: number;
        /**
        * Html.OrderedListType enumerates the values of this property.
        * Indicates the numbering type:  'a' indicates lowercase letters, 'A' indicates uppercase letters, 'i' indicates lowercase Roman numerals, 'I' indicates uppercase Roman numerals, and '1' indicates numbers (default). The type set is used for the entire list unless a different type attribute is used within an enclosed <li> element.  Note: This attribute was deprecated in HTML4, but reintroduced in HTML5. Unless the value of the list number matters (e.g. in legal or technical documents where items are to be referenced by their number/letter), the CSS list-style-type property should be used instead [MDN].
        */
        typeProperty: b.PropertyUpdate<string>;
        /**
        * Html.OrderedListType enumerates the values of this property.
        * Indicates the numbering type:  'a' indicates lowercase letters, 'A' indicates uppercase letters, 'i' indicates lowercase Roman numerals, 'I' indicates uppercase Roman numerals, and '1' indicates numbers (default). The type set is used for the entire list unless a different type attribute is used within an enclosed <li> element.  Note: This attribute was deprecated in HTML4, but reintroduced in HTML5. Unless the value of the list number matters (e.g. in legal or technical documents where items are to be referenced by their number/letter), the CSS list-style-type property should be used instead [MDN].
        */
        type: string;
        /**
        * Initializes a new OrderedListElement'.
        */
        constructor(config: IOrderedListElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <p> element (or HTML Paragraph Element) represents a paragraph of text. Paragraphs are block-level elements [MDN].
    */
    class ParagraphElement extends HtmlElementContainer {
        /**
        * Initializes a new ParagraphElement'.
        */
        constructor(config: IParagraphElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <param> Element (or HTML Parameter Element) defines parameters for <object> [MDN].
    */
    class ParameterElement extends HtmlElement {
        private _nameProperty;
        private _typeProperty;
        private _valueProperty;
        private _valueTypeProperty;
        /**
        * Name of the parameter [MDN].
        */
        nameProperty: b.PropertyUpdate<string>;
        /**
        * Name of the parameter [MDN].
        */
        name: string;
        /**
        * Only used if the valuetype is set to "ref". Specifies the MIME type of values found at the URI specified by value [MDN].
        */
        typeProperty: b.PropertyUpdate<string>;
        /**
        * Only used if the valuetype is set to "ref". Specifies the MIME type of values found at the URI specified by value [MDN].
        */
        type: string;
        /**
        * Specifies the value of the parameter [MDN].
        */
        valueProperty: b.PropertyUpdate<string>;
        /**
        * Specifies the value of the parameter [MDN].
        */
        value: string;
        /**
        * Specifies the type of the value attribute. Possible values are:  data: Default value. The value is passed to the object's implementation as a string. ref: The value is a URI to a resource where run-time values are stored. object: An ID of another <object> in the same document [MDN].
        */
        valueTypeProperty: b.PropertyUpdate<string>;
        /**
        * Specifies the type of the value attribute. Possible values are:  data: Default value. The value is passed to the object's implementation as a string. ref: The value is a URI to a resource where run-time values are stored. object: An ID of another <object> in the same document [MDN].
        */
        valueType: string;
        /**
        * Initializes a new ParameterElement'.
        */
        constructor(config: IParameterElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <pre> Element (or HTML Preformatted Text) represents preformatted text. Text within this element is typically displayed in a non-proportional font exactly as it is laid out in the file. Whitespaces inside this element are displayed as typed [MDN].
    */
    class PreformattedElement extends HtmlElementContainer {
        /**
        * Initializes a new PreformattedElement'.
        */
        constructor(config: IPreformattedElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <progress> Element is used to view the completion progress of a task. While the specifics of how it's displayed is left up to the browser developer, it's typically displayed as a progress bar. Javascript can be used to manipulate the value of progress bar [MDN].
    */
    class ProgressElement extends HtmlElementContainer {
        private _maxProperty;
        private _valueProperty;
        private _progressErrorEvent;
        private _progressEvent;
        private _progressLoadEndEvent;
        /**
        * This attribute describes how much work the task indicated by the progress element requires. The max attribute, if present, must have a value greater than zero and be a valid floating point number [MDN].
        */
        maxProperty: b.PropertyUpdate<number>;
        /**
        * This attribute describes how much work the task indicated by the progress element requires. The max attribute, if present, must have a value greater than zero and be a valid floating point number [MDN].
        */
        max: number;
        /**
        * This attribute specifies how much of the task that has been completed. It must be a valid floating point number between 0 and max, or between 0 and 1 if max is omitted. If there is no value attribute, the progress bar is indeterminate; this indicates that an activity is ongoing with no indication of how long it is expected to take [MDN].
        */
        valueProperty: b.PropertyUpdate<number>;
        /**
        * This attribute specifies how much of the task that has been completed. It must be a valid floating point number between 0 and max, or between 0 and 1 if max is omitted. If there is no value attribute, the progress bar is indeterminate; this indicates that an activity is ongoing with no indication of how long it is expected to take [MDN].
        */
        value: number;
        /**
        * The progressErrorEvent event is executed when progression has failed [MDN].
        * Specifications: Progress, XMLHttpRequest
        * DOM Event Name: error
        */
        progressErrorEvent: HtmlElementEvent<Elements.ProgressElement, ProgressEvent>;
        /**
        * The progressEvent event is executed when in progress [MDN].
        * Specifications: Progress, XMLHttpRequest
        * DOM Event Name: progress
        */
        progressEvent: HtmlElementEvent<Elements.ProgressElement, ProgressEvent>;
        /**
        * The progressLoadEndEvent event is executed when progress has stopped (after "error", "abort" or "load" have been dispatched) [MDN].
        * Specifications: Progress, XMLHttpRequest
        * DOM Event Name: loadend
        */
        progressLoadEndEvent: HtmlElementEvent<Elements.ProgressElement, ProgressEvent>;
        /**
        * Initializes a new ProgressElement'.
        */
        constructor(config: IProgressElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <q> Element (or HTML Quote Element) indicates that the enclosed text is a short inline quotation. This element is intended for short quotations that don't require paragraph breaks; for long quotations use <blockquote> element [MDN].
    */
    class QuoteElement extends HtmlElementContainer {
        private _citationProperty;
        /**
        * The value of this attribute is a URL that designates a source document or message for the information quoted. This attribute is intended to point to information explaining the context or the reference for the quote [MDN].
        */
        citationProperty: b.PropertyUpdate<string>;
        /**
        * The value of this attribute is a URL that designates a source document or message for the information quoted. This attribute is intended to point to information explaining the context or the reference for the quote [MDN].
        */
        citation: string;
        /**
        * Initializes a new QuoteElement'.
        */
        constructor(config: IQuoteElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <html> Element (or HTML root element) represents the root of an HTML or XHTML document. All other elements must be descendants of this element [MDN].
    */
    class RootElement extends HtmlElementContainer {
        /**
        * Initializes a new RootElement'.
        */
        constructor(config: IRootElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <ruby> Element represents a ruby annotation. Ruby annotations are for showing pronounciation of East Asian characters [MDN].
    */
    class RubyElement extends HtmlElementContainer {
        /**
        * Initializes a new RubyElement'.
        */
        constructor(config: IRubyElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <rp> element is used to provide fall-back parenthesis for browsers non-supporting ruby annotations. Ruby annotations are for showing pronounciation of East Asian characters, like using Japanese furigana or Taiwainese bopomofo characters. The <rp> element is used in the case of lack of <ruby> element support its content has what should be displayed in order to indicate the presence of a ruby annotation, usually parentheses [MDN].
    */
    class RubyParenthesisElement extends HtmlElementContainer {
        /**
        * Initializes a new RubyParenthesisElement'.
        */
        constructor(config: IRubyParenthesisElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <rt> Element embraces pronunciation of character presented in a ruby annotations, which are for showing pronunciation of East Asian characters and the <rt> element is used inside of <ruby> element [MDN].
    */
    class RubyPronunciationElement extends HtmlElementContainer {
        /**
        * Initializes a new RubyPronunciationElement'.
        */
        constructor(config: IRubyPronunciationElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <samp> element is an inline element intended to identify sample output from a computer program. It is usually displayed in the browser's default monotype font (such as Lucida Console) [MDN].
    */
    class SampleElement extends HtmlElementContainer {
        /**
        * Initializes a new SampleElement'.
        */
        constructor(config: ISampleElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <script> element is used to embed or reference an executable script within an HTML or XHTML document [MDN].
    */
    class ScriptElement extends HtmlElementContainer {
        private _asyncProperty;
        private _sourceProperty;
        private _typeProperty;
        private _deferProperty;
        private _errorEvent;
        /**
        * Set this Boolean attribute to indicate that the browser should, if possible, execute the script asynchronously. It has no effect on inline scripts (i.e., scripts that don't have the src attribute) [MDN].
        */
        asyncProperty: b.PropertyUpdate<boolean>;
        /**
        * Set this Boolean attribute to indicate that the browser should, if possible, execute the script asynchronously. It has no effect on inline scripts (i.e., scripts that don't have the src attribute) [MDN].
        */
        async: boolean;
        /**
        * This attribute specifies the URI of an external script; this can be used as an alternative to embedding a script directly within a document. script elements with an src attribute specified should not have a script embedded within its tags [MDN].
        */
        sourceProperty: b.PropertyUpdate<string>;
        /**
        * This attribute specifies the URI of an external script; this can be used as an alternative to embedding a script directly within a document. script elements with an src attribute specified should not have a script embedded within its tags [MDN].
        */
        source: string;
        /**
        * This attribute identifies the scripting language of code embedded within a script element or referenced via the elementâ€™s src attribute. This is specified as a MIME type; examples of supported MIME types include text/javascript, text/ecmascript, application/javascript, and application/ecmascript. If this attribute is absent, the script is treated as JavaScript [MDN].
        */
        typeProperty: b.PropertyUpdate<string>;
        /**
        * This attribute identifies the scripting language of code embedded within a script element or referenced via the elementâ€™s src attribute. This is specified as a MIME type; examples of supported MIME types include text/javascript, text/ecmascript, application/javascript, and application/ecmascript. If this attribute is absent, the script is treated as JavaScript [MDN].
        */
        type: string;
        /**
        * This Boolean attribute is set to indicate to a browser that the script is meant to be executed after the document has been parsed. Since this feature hasn't yet been implemented by all other major browsers, authors should not assume that the scriptâ€™s execution will actually be deferred. Never call document.write() from a defer script (since Gecko 1.9.2, this will blow away the document). The defer attribute shouldn't be used on scripts that don't have the src attribute. Since Gecko 1.9.2, the defer attribute is ignored on scripts that don't have the src attribute. However, in Gecko 1.9.1 even inline scripts are deferred if the defer attribute is set [MDN].
        */
        deferProperty: b.PropertyUpdate<boolean>;
        /**
        * This Boolean attribute is set to indicate to a browser that the script is meant to be executed after the document has been parsed. Since this feature hasn't yet been implemented by all other major browsers, authors should not assume that the scriptâ€™s execution will actually be deferred. Never call document.write() from a defer script (since Gecko 1.9.2, this will blow away the document). The defer attribute shouldn't be used on scripts that don't have the src attribute. Since Gecko 1.9.2, the defer attribute is ignored on scripts that don't have the src attribute. However, in Gecko 1.9.1 even inline scripts are deferred if the defer attribute is set [MDN].
        */
        defer: boolean;
        /**
        * The errorEvent event is executed when a resource failed to load [MDN].
        * Specification: DOM L3
        * DOM Event Name: error
        */
        errorEvent: HtmlElementEvent<Elements.ScriptElement, UIEvent>;
        /**
        * Initializes a new ScriptElement'.
        */
        constructor(config: IScriptElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML Section Element (<section>) represents a generic section of a document, i.e., a thematic grouping of content, typically with a heading [MDN].
    */
    class SectionElement extends HtmlElementContainer {
        /**
        * Initializes a new SectionElement'.
        */
        constructor(config: ISectionElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML select (<select>) element represents a control that presents menu of options. The options within the menu are represented by <option> elements, which can be grouped by <optgroup> elements. Options can be pre-selected for the user [MDN].
    */
    class SelectElement extends HtmlElementContainer {
        private _autoFocusProperty;
        private _disabledProperty;
        private _formPropertyID;
        private _formProperty;
        private _multipleOptionsProperty;
        private _nameProperty;
        private _requiredProperty;
        private _sizeProperty;
        private _changeEvent;
        /**
        * This attribute lets you specify that a form control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form element in a document can have the autofocus attribute, which is a Boolean [MDN].
        */
        autoFocusProperty: b.PropertyUpdate<boolean>;
        /**
        * This attribute lets you specify that a form control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form element in a document can have the autofocus attribute, which is a Boolean [MDN].
        */
        autoFocus: boolean;
        /**
        * This Boolean attribute indicates that the user cannot interact with the control. If this attribute is not specified, the control inherits its setting from the containing element, for example fieldset; if there is no containing element with the disabled attribute set, then the control is enabled [MDN].
        */
        disabledProperty: b.PropertyUpdate<boolean>;
        /**
        * This Boolean attribute indicates that the user cannot interact with the control. If this attribute is not specified, the control inherits its setting from the containing element, for example fieldset; if there is no containing element with the disabled attribute set, then the control is enabled [MDN].
        */
        disabled: boolean;
        /**
        * The form element that the select element is associated with (its "form owner"). If this attribute is specified, its value must be the ID of a form element in the same document. This enables you to place select elements anywhere within a document, not just as descendants of their form elements [MDN].
        */
        form: FormElement;
        /**
        * This Boolean attribute indicates that multiple options can be selected in the list. If it is not specified, then only one option can be selected at a time [MDN].
        */
        multipleOptionsProperty: b.PropertyUpdate<boolean>;
        /**
        * This Boolean attribute indicates that multiple options can be selected in the list. If it is not specified, then only one option can be selected at a time [MDN].
        */
        multipleOptions: boolean;
        /**
        * The name of the control [MDN].
        */
        nameProperty: b.PropertyUpdate<string>;
        /**
        * The name of the control [MDN].
        */
        name: string;
        /**
        * A Boolean attribute indicating that an option with a non-empty string value must be selected [MDN].
        */
        requiredProperty: b.PropertyUpdate<boolean>;
        /**
        * A Boolean attribute indicating that an option with a non-empty string value must be selected [MDN].
        */
        required: boolean;
        /**
        * If the control is presented as a scrolled list box, this attribute represents the number of rows in the list that should be visible at one time. Browsers are not required to present a select elements as a scrolled list box. The default value is 0 [MDN].
        */
        sizeProperty: b.PropertyUpdate<number>;
        /**
        * If the control is presented as a scrolled list box, this attribute represents the number of rows in the list that should be visible at one time. Browsers are not required to present a select elements as a scrolled list box. The default value is 0 [MDN].
        */
        size: number;
        /**
        * The changeEvent event is executed when an element loses focus and its value changed since gaining focus [MDN].
        * Specifications: DOM L2, HTML5
        * DOM Event Name: change
        */
        changeEvent: HtmlElementEvent<Elements.SelectElement, Event>;
        /**
        * Initializes a new SelectElement'.
        */
        constructor(config: ISelectElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML Small Element (<small>) makes the text font size one size smaller (for example, from large to medium, or from small to x-small) down to the browser's minimum font size.  In HTML5, this element is repurposed to represent side-comments and small print, including copyright and legal text, independent of its styled presentation [MDN].
    */
    class SmallElement extends HtmlElementContainer {
        /**
        * Initializes a new SmallElement'.
        */
        constructor(config: ISmallElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The source element is used to specify multiple media resources for audio and video elements in HTML5. It is an empty element. It is commonly used to serve the same media in multiple formats supported by different browsers [MDN].
    */
    class SourceElement extends HtmlElementContainer {
        private _sourceProperty;
        private _typeProperty;
        /**
        * Required, address of the media resource [MDN].
        */
        sourceProperty: b.PropertyUpdate<string>;
        /**
        * Required, address of the media resource [MDN].
        */
        source: string;
        /**
        * The MIME-type of the resource, optionally with a codecs parameter. See RFC 4281 for information about how to specify codecs [MDN].
        */
        typeProperty: b.PropertyUpdate<string>;
        /**
        * The MIME-type of the resource, optionally with a codecs parameter. See RFC 4281 for information about how to specify codecs [MDN].
        */
        type: string;
        /**
        * Initializes a new SourceElement'.
        */
        constructor(config: ISourceElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <span> element is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element is appropriate. <span> is very much like a <div> element, but <div> is a block-level element whereas a <span> is an inline element [MDN].
    */
    class SpanElement extends HtmlElementContainer {
        /**
        * Initializes a new SpanElement'.
        */
        constructor(config: ISpanElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML Strikethrough Element (<s>) renders text with a strikethrough, or a line through it. Use the <s> element to represent things that are no longer relevant or no longer accurate. However, <s> is not appropriate when indicating document edits; for that, use the <del> and <ins> elements, as appropriate [MDN].
    */
    class StrikethroughElement extends HtmlElementContainer {
        /**
        * Initializes a new StrikethroughElement'.
        */
        constructor(config: IStrikethroughElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML Strong Element (<strong>) gives text strong importance, and is typically displayed in bold [MDN].
    */
    class StrongElement extends HtmlElementContainer {
        /**
        * Initializes a new StrongElement'.
        */
        constructor(config: IStrongElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <style> element contains style information for a document, or a part of document. The specific style information is contained inside of this element, usually in the CSS [MDN].
    */
    class StyleElement extends HtmlElementContainer {
        private _typeProperty;
        private _mediaProperty;
        private _disabledProperty;
        private _errorEvent;
        /**
        * This attribute defines the styling language as a MIME type (charset should not be specified). 'text/css' is assumed if this attribute is absent [MDN].
        */
        typeProperty: b.PropertyUpdate<string>;
        /**
        * This attribute defines the styling language as a MIME type (charset should not be specified). 'text/css' is assumed if this attribute is absent [MDN].
        */
        type: string;
        /**
        * Which media should this style apply to. Should be a media query, see http://dev.w3.org/csswg/css3-mediaqueries [MDN].
        */
        mediaProperty: b.PropertyUpdate<string>;
        /**
        * Which media should this style apply to. Should be a media query, see http://dev.w3.org/csswg/css3-mediaqueries [MDN].
        */
        media: string;
        /**
        * If set, the style rules declared in this element are disabled in the declaring document [MDN].
        */
        disabledProperty: b.PropertyUpdate<boolean>;
        /**
        * If set, the style rules declared in this element are disabled in the declaring document [MDN].
        */
        disabled: boolean;
        /**
        * The errorEvent event is executed when a resource failed to load [MDN].
        * Specification: DOM L3
        * DOM Event Name: error
        */
        errorEvent: HtmlElementEvent<Elements.StyleElement, UIEvent>;
        /**
        * Initializes a new StyleElement'.
        */
        constructor(config: IStyleElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML Subscript Element (<sub>) defines a span of text that should be displayed, for typographic reasons, lower, and often smaller, than the main span of text [MDN].
    */
    class SubscriptElement extends HtmlElementContainer {
        /**
        * Initializes a new SubscriptElement'.
        */
        constructor(config: ISubscriptElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML summary element (<summary>) is used as a summary, caption or legend for the content of a <details> element [MDN].
    */
    class SummaryElement extends HtmlElementContainer {
        /**
        * Initializes a new SummaryElement'.
        */
        constructor(config: ISummaryElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML Superscript Element (<sup>) defines a span of text that should be displayed, for typographic reasons, higher, and often smaller, than the main span of text [MDN].
    */
    class SuperscriptElement extends HtmlElementContainer {
        /**
        * Initializes a new SuperscriptElement'.
        */
        constructor(config: ISuperscriptElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML Table Element (<table>) represents data in two dimensions or more [MDN].
    */
    class TableElement extends HtmlElementContainer {
        /**
        * Initializes a new TableElement'.
        */
        constructor(config: ITableElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <caption> Element (or HTML Table Caption Element) represents the title of a table. Though it is always the first descendant of a <table>, its styling, using CSS, may place it elsewhere, relative to the table [MDN].
    */
    class TableCaptionElement extends HtmlElementContainer {
        /**
        * Initializes a new TableCaptionElement'.
        */
        constructor(config: ITableCaptionElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <col> Element (or HTML Table Column Element) defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a <colgroup> element [MDN].
    */
    class TableColumnElement extends HtmlElement {
        private _spanProperty;
        /**
        * This attribute contains a positive integer indicating the number of consecutive columns the <col> element spans. If not present, its default value is 1 [MDN].
        */
        spanProperty: b.PropertyUpdate<number>;
        /**
        * This attribute contains a positive integer indicating the number of consecutive columns the <col> element spans. If not present, its default value is 1 [MDN].
        */
        span: number;
        /**
        * Initializes a new TableColumnElement'.
        */
        constructor(config: ITableColumnElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <colgroup> Element (or HTML Table Column Group Element) defines a group of columns within a table [MDN].
    */
    class TableColumnGroupElement extends HtmlElement {
        private _spanProperty;
        private _widthProperty;
        /**
        * This attribute contains a positive integer indicating the number of consecutive columns the <colgroup> element spans. If not present, its default value is 1.
        * Note: This attribute apply on the attributes of the column group, it has no effect on the CSS styling rules associated to it or, even more, to the cells of the columns members of the group.  The span attribute may not be present if there are one or more <col> elements within the <colgroup> [MDN].
        */
        spanProperty: b.PropertyUpdate<number>;
        /**
        * This attribute contains a positive integer indicating the number of consecutive columns the <colgroup> element spans. If not present, its default value is 1.
        * Note: This attribute apply on the attributes of the column group, it has no effect on the CSS styling rules associated to it or, even more, to the cells of the columns members of the group.  The span attribute may not be present if there are one or more <col> elements within the <colgroup> [MDN].
        */
        span: number;
        /**
        * This attribute specifies a default width for each column in the current column group. In addition to the standard pixel and percentage values, this attribute might take the special form 0*, which means that the width of each column in the group should be the minimum width necessary to hold the column's contents. Relative widths such as 0.5* also can be used [MDN].
        */
        widthProperty: b.PropertyUpdate<string>;
        /**
        * This attribute specifies a default width for each column in the current column group. In addition to the standard pixel and percentage values, this attribute might take the special form 0*, which means that the width of each column in the group should be the minimum width necessary to hold the column's contents. Relative widths such as 0.5* also can be used [MDN].
        */
        width: string;
        /**
        * Initializes a new TableColumnGroupElement'.
        */
        constructor(config: ITableColumnGroupElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The Table cell HTML element (<td>) defines a cell of a table that contains data. It participates in the table model [MDN].
    */
    class TableDataCellElement extends HtmlElementContainer {
        private _columnSpanProperty;
        private _headersProperty;
        private _rowSpanProperty;
        private _scopeProperty;
        /**
        * This attribute contains a non-negative integer value that indicates for how many columns the cell extends. Its default value is 1; if its value is set to 0, it extends until the end of the <colgroup>, even if implicitly defined, that the cell belongs to. Values higher than 1000 will be considered as incorrect and will be set to the default value (1).
        * Note: In HTML5 this attribute only accepts values greater than zero since it must not be used to overlap cells. Besides, Firefox is the only browser to support the 0 value as defined in the HTML 4.01 specification [MDN].
        */
        columnSpanProperty: b.PropertyUpdate<number>;
        /**
        * This attribute contains a non-negative integer value that indicates for how many columns the cell extends. Its default value is 1; if its value is set to 0, it extends until the end of the <colgroup>, even if implicitly defined, that the cell belongs to. Values higher than 1000 will be considered as incorrect and will be set to the default value (1).
        * Note: In HTML5 this attribute only accepts values greater than zero since it must not be used to overlap cells. Besides, Firefox is the only browser to support the 0 value as defined in the HTML 4.01 specification [MDN].
        */
        columnSpan: number;
        /**
        * This attribute contains a list of space-separated strings, each corresponding to the id attribute of the <th> elements that apply to this element [MDN].
        */
        headersProperty: b.PropertyUpdate<string>;
        /**
        * This attribute contains a list of space-separated strings, each corresponding to the id attribute of the <th> elements that apply to this element [MDN].
        */
        headers: string;
        /**
        * This attribute contains a non-negative integer value that indicates for how many rows the cell extends. Its default value is 1; if its value is set to 0, it extends until the end of the table section (<thead>, <tbody>, <tfoot>, even if implicitly defined, that the cell belongs to. Values higher than 65534 are clipped down to 65534 [MDN].
        */
        rowSpanProperty: b.PropertyUpdate<number>;
        /**
        * This attribute contains a non-negative integer value that indicates for how many rows the cell extends. Its default value is 1; if its value is set to 0, it extends until the end of the table section (<thead>, <tbody>, <tfoot>, even if implicitly defined, that the cell belongs to. Values higher than 65534 are clipped down to 65534 [MDN].
        */
        rowSpan: number;
        /**
        *  [MDN].
        */
        scopeProperty: b.PropertyUpdate<string>;
        /**
        *  [MDN].
        */
        scope: string;
        /**
        * Initializes a new TableDataCellElement'.
        */
        constructor(config: ITableDataCellElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML Table Header Cell Element (<th>) defines a cell that is a header for a group of cells of a table. The group of cells that the header refers to is defined by the scope and headers attribute [MDN].
    */
    class TableHeaderCellElement extends HtmlElementContainer {
        private _columnSpanProperty;
        private _headersProperty;
        private _rowSpanProperty;
        /**
        * This attribute contains a non-negative integer value that indicates on how many columns does the cell extend. Its default value is 1; if its value is set to 0, it does extend until the end of the <colgroup>, eventually implicitly defined, the cell belongs to. Values higher than 1000 are clipped down to 1000 [MDN].
        */
        columnSpanProperty: b.PropertyUpdate<number>;
        /**
        * This attribute contains a non-negative integer value that indicates on how many columns does the cell extend. Its default value is 1; if its value is set to 0, it does extend until the end of the <colgroup>, eventually implicitly defined, the cell belongs to. Values higher than 1000 are clipped down to 1000 [MDN].
        */
        columnSpan: number;
        /**
        * This attributes a list of space-separated strings, each corresponding to the id attribute of the <th> elements that applies to this element [MDN].
        */
        headersProperty: b.PropertyUpdate<string>;
        /**
        * This attributes a list of space-separated strings, each corresponding to the id attribute of the <th> elements that applies to this element [MDN].
        */
        headers: string;
        /**
        * This attribute contains a non-negative integer value that indicates on how many rows does the cell extend. Its default value is 1; if its value is set to 0, it does extend until the end of the table section (<thead>, <tbody>, <tfoot>, eventually implicitly defined) the cell belongs to. Values higher than 65534 are clipped down to 65534 [MDN].
        */
        rowSpanProperty: b.PropertyUpdate<number>;
        /**
        * This attribute contains a non-negative integer value that indicates on how many rows does the cell extend. Its default value is 1; if its value is set to 0, it does extend until the end of the table section (<thead>, <tbody>, <tfoot>, eventually implicitly defined) the cell belongs to. Values higher than 65534 are clipped down to 65534 [MDN].
        */
        rowSpan: number;
        /**
        * Initializes a new TableHeaderCellElement'.
        */
        constructor(config: ITableHeaderCellElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML Table Row Element (<tr>) defines a row of cells in a table. Those can be a mix of <td> and <th> elements [MDN].
    */
    class TableRowElement extends HtmlElementContainer {
        /**
        * Initializes a new TableRowElement'.
        */
        constructor(config: ITableRowElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <textarea> element represents a multi-line plain-text editing control [MDN].
    */
    class TextAreaElement extends HtmlElementContainer {
        private _autoFocusProperty;
        private _columnsProperty;
        private _disabledProperty;
        private _formPropertyID;
        private _formProperty;
        private _maxLengthProperty;
        private _nameProperty;
        private _placeHolderProperty;
        private _readOnlyProperty;
        private _requiredProperty;
        private _rowsProperty;
        private _selectionEndProperty;
        private _selectionStartProperty;
        private _wrapProperty;
        private _changeEvent;
        private _inputEvent;
        /**
        * This Boolean attribute lets you specify that a form control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form-associated element in a document can have this attribute specified [MDN].
        */
        autoFocusProperty: b.PropertyUpdate<boolean>;
        /**
        * This Boolean attribute lets you specify that a form control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form-associated element in a document can have this attribute specified [MDN].
        */
        autoFocus: boolean;
        /**
        * The visible width of the text control, in average character widths. If it is specified, it must be a positive integer. If it is not specified, the default value is 20 (HTML5) [MDN].
        */
        columnsProperty: b.PropertyUpdate<number>;
        /**
        * The visible width of the text control, in average character widths. If it is specified, it must be a positive integer. If it is not specified, the default value is 20 (HTML5) [MDN].
        */
        columns: number;
        /**
        * This Boolean attribute indicates that the user cannot interact with the control. (If this attribute is not specified, the control inherits its setting from the containing element, for example <fieldset>; if there is no containing element with the disabled attribute set, then the control is enabled.) [MDN].
        */
        disabledProperty: b.PropertyUpdate<boolean>;
        /**
        * This Boolean attribute indicates that the user cannot interact with the control. (If this attribute is not specified, the control inherits its setting from the containing element, for example <fieldset>; if there is no containing element with the disabled attribute set, then the control is enabled.) [MDN].
        */
        disabled: boolean;
        /**
        * The form element that the textarea element is associated with (its "form owner"). The value of the attribute must be an ID of a form element in the same document. If this attribute is not specified, the textarea element must be a descendant of a form element. This attribute enables you to place textarea elements anywhere within a document, not just as descendants of their form elements [MDN].
        */
        form: FormElement;
        /**
        * The maximum number of characters (Unicode code points) that the user can enter. If it is not specified, the user can enter an unlimited number of characters [MDN].
        */
        maxLengthProperty: b.PropertyUpdate<number>;
        /**
        * The maximum number of characters (Unicode code points) that the user can enter. If it is not specified, the user can enter an unlimited number of characters [MDN].
        */
        maxLength: number;
        /**
        * The name of the control [MDN].
        */
        nameProperty: b.PropertyUpdate<string>;
        /**
        * The name of the control [MDN].
        */
        name: string;
        /**
        * A hint to the user of what can be entered in the control. The placeholder text must not contain carriage returns or line-feeds [MDN].
        */
        placeHolderProperty: b.PropertyUpdate<string>;
        /**
        * A hint to the user of what can be entered in the control. The placeholder text must not contain carriage returns or line-feeds [MDN].
        */
        placeHolder: string;
        /**
        * This Boolean attribute indicates that the user cannot modify the value of the control. Unlike the disabled attribute, the readonly attribute does not prevent the user from clicking or selecting in the control. The value of a read-only control is still submitted with the form [MDN].
        */
        readOnlyProperty: b.PropertyUpdate<boolean>;
        /**
        * This Boolean attribute indicates that the user cannot modify the value of the control. Unlike the disabled attribute, the readonly attribute does not prevent the user from clicking or selecting in the control. The value of a read-only control is still submitted with the form [MDN].
        */
        readOnly: boolean;
        /**
        * This attribute specifies that the user must fill in a value before submitting a form [MDN].
        */
        requiredProperty: b.PropertyUpdate<boolean>;
        /**
        * This attribute specifies that the user must fill in a value before submitting a form [MDN].
        */
        required: boolean;
        /**
        * The number of visible text lines for the control [MDN].
        */
        rowsProperty: b.PropertyUpdate<number>;
        /**
        * The number of visible text lines for the control [MDN].
        */
        rows: number;
        /**
        * The index to the last character in the current selection [MDN].
        */
        selectionEndProperty: b.PropertyUpdate<number>;
        /**
        * The index to the last character in the current selection [MDN].
        */
        selectionEnd: number;
        /**
        * The index to the first character in the current selection [MDN].
        */
        selectionStartProperty: b.PropertyUpdate<number>;
        /**
        * The index to the first character in the current selection [MDN].
        */
        selectionStart: number;
        /**
        * Html.TextAreaWrap enumerates the values of this property.
        * Indicates how the control wraps text. Possible values are:  hard: The browser automatically inserts line breaks (CR+LF) so that each line has no more than the width of the control; the cols attribute must be specified. soft: The browser ensures that all line breaks in the value consist of a CR+LF pair, but does not insert any additional line breaks. If this attribute is not specified, soft is its default value [MDN].
        */
        wrapProperty: b.PropertyUpdate<string>;
        /**
        * Html.TextAreaWrap enumerates the values of this property.
        * Indicates how the control wraps text. Possible values are:  hard: The browser automatically inserts line breaks (CR+LF) so that each line has no more than the width of the control; the cols attribute must be specified. soft: The browser ensures that all line breaks in the value consist of a CR+LF pair, but does not insert any additional line breaks. If this attribute is not specified, soft is its default value [MDN].
        */
        wrap: string;
        /**
        * The changeEvent event is executed when an element loses focus and its value changed since gaining focus [MDN].
        * Specifications: DOM L2, HTML5
        * DOM Event Name: change
        */
        changeEvent: HtmlElementEvent<Elements.TextAreaElement, Event>;
        /**
        * The inputEvent event is executed when the value of an element changes or the content of an element with the attribute contenteditable is modified [MDN].
        * Specification: HTML5
        * DOM Event Name: input
        */
        inputEvent: HtmlElementEvent<Elements.TextAreaElement, Event>;
        /**
        * Initializes a new TextAreaElement'.
        */
        constructor(config: ITextAreaElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML Title Element (<title>) defines the title of the document, shown in a browser's title bar or on the page's tab. It can only contain text and any contained tags are not interpreted [MDN].
    */
    class TitleElement extends HtmlElementContainer {
        /**
        * Initializes a new TitleElement'.
        */
        constructor(config: ITitleElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The track element is used as a child of the media elementsâ€”<audio> and <video>â€”and does not represent anything on its own. It lets you specify timed text tracks (or time-based data) [MDN].
    */
    class TrackElement extends HtmlElementContainer {
        private _defaultProperty;
        private _kindProperty;
        private _labelProperty;
        private _sourceProperty;
        private _sourceLanguageProperty;
        /**
        * This attribute indicates that the track should be enabled unless the user's preferences indicate that another track is more appropriate. This may only be used on one track element per media element [MDN].
        */
        defaultProperty: b.PropertyUpdate<boolean>;
        /**
        * This attribute indicates that the track should be enabled unless the user's preferences indicate that another track is more appropriate. This may only be used on one track element per media element [MDN].
        */
        default: boolean;
        /**
        * Html.TrackKind enumerates the values of this property.
        * The following keywords are allowed:  subtitles, captions, descriptions, chapters, metadata. If omitted the default kind is subtitles [MDN].
        */
        kindProperty: b.PropertyUpdate<string>;
        /**
        * Html.TrackKind enumerates the values of this property.
        * The following keywords are allowed:  subtitles, captions, descriptions, chapters, metadata. If omitted the default kind is subtitles [MDN].
        */
        kind: string;
        /**
        * A user-readable title of the text track which is used by the browser when listing available text tracks [MDN].
        */
        labelProperty: b.PropertyUpdate<string>;
        /**
        * A user-readable title of the text track which is used by the browser when listing available text tracks [MDN].
        */
        label: string;
        /**
        * Address of the track. Must be a valid URL. This attribute must be defined [MDN].
        */
        sourceProperty: b.PropertyUpdate<string>;
        /**
        * Address of the track. Must be a valid URL. This attribute must be defined [MDN].
        */
        source: string;
        /**
        * Language of the track text data. It must be a valid BCP 47 language tag. If the kind attribute is set to subtitles, then srclang must be defined [MDN].
        */
        sourceLanguageProperty: b.PropertyUpdate<string>;
        /**
        * Language of the track text data. It must be a valid BCP 47 language tag. If the kind attribute is set to subtitles, then srclang must be defined [MDN].
        */
        sourceLanguage: string;
        /**
        * Initializes a new TrackElement'.
        */
        constructor(config: ITrackElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML Underline Element (<u>) renders text with an underline, a line under the baseline of its content [MDN].
    */
    class UnderlineElement extends HtmlElementContainer {
        /**
        * Initializes a new UnderlineElement'.
        */
        constructor(config: IUnderlineElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML unordered list element (<ul>) represents an unordered list of items, namely a collection of items that do not have a numerical ordering, and their order in the list is meaningless. Typically, unordered-list items are displayed with a bullet, which can be of several forms, like a dot, a circle or a squared. The bullet style is not defined in the HTML description of the page, but in its associated CSS, using the list-style-type property [MDN].
    */
    class UnorderedListElement extends HtmlElementContainer {
        private _compactProperty;
        private _typeProperty;
        /**
        * This Boolean attribute hints that the list should be rendered in a compact style. The interpretation of this attribute depends on the user agent and it doesn't work in all browsers.  Usage note: Do not use this attribute, as it has been deprecated: the <ul> element should be styled using CSS. To give a similar effect as the compact attribute, the CSS property line-height can be used with a value of 80% [MDN].
        */
        compactProperty: b.PropertyUpdate<boolean>;
        /**
        * This Boolean attribute hints that the list should be rendered in a compact style. The interpretation of this attribute depends on the user agent and it doesn't work in all browsers.  Usage note: Do not use this attribute, as it has been deprecated: the <ul> element should be styled using CSS. To give a similar effect as the compact attribute, the CSS property line-height can be used with a value of 80% [MDN].
        */
        compact: boolean;
        /**
        * Html.UnorderedListType enumerates the values of this property.
        * Used to set the bullet style for the list. The values defined under HTML3.2 and the transitional version of HTML 4.0/4.01 are:  circle, disc, and square. A fourth bullet type has been defined in the WebTV interface, but not all browsers support it: triangle. If not present and if no CSS list-style-type property does apply to the element, the user agent decide to use a kind of bullets depending on the nesting level of the list.
        * Note: Do not use this attribute, as it has been deprecated; use the CSS list-style-type property instead [MDN].
        */
        typeProperty: b.PropertyUpdate<string>;
        /**
        * Html.UnorderedListType enumerates the values of this property.
        * Used to set the bullet style for the list. The values defined under HTML3.2 and the transitional version of HTML 4.0/4.01 are:  circle, disc, and square. A fourth bullet type has been defined in the WebTV interface, but not all browsers support it: triangle. If not present and if no CSS list-style-type property does apply to the element, the user agent decide to use a kind of bullets depending on the nesting level of the list.
        * Note: Do not use this attribute, as it has been deprecated; use the CSS list-style-type property instead [MDN].
        */
        type: string;
        /**
        * Initializes a new UnorderedListElement'.
        */
        constructor(config: IUnorderedListElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML Variable Element (<var>) represents a variable in a mathematical expression or a programming context [MDN].
    */
    class VariableElement extends HtmlElementContainer {
        /**
        * Initializes a new VariableElement'.
        */
        constructor(config: IVariableElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The HTML <video> element is used to embed video content in an HTML or XHTML document [MDN].
    */
    class VideoElement extends HtmlElementContainer {
        private _autoPlayProperty;
        private _bufferedProperty;
        private _controlsProperty;
        private _heightProperty;
        private _loopProperty;
        private _mutedProperty;
        private _playedProperty;
        private _preloadProperty;
        private _posterProperty;
        private _sourceProperty;
        private _widthProperty;
        private _mediaCanPlayEvent;
        private _mediaCanPlayThroughEvent;
        private _mediaDurationChangeEvent;
        private _mediaEmptiedEvent;
        private _mediaEndedEvent;
        private _mediaLoadedDataEvent;
        private _mediaLoadedMetadataEvent;
        private _mediaPauseEvent;
        private _mediaPlayEvent;
        private _mediaPlayingEvent;
        private _mediaRateChangeEvent;
        private _mediaSeekedEvent;
        private _mediaSeekingEvent;
        private _mediaStalledEvent;
        private _mediaSuspendEvent;
        private _mediaTimeUpdateEvent;
        private _mediaVolumeChangeEvent;
        private _mediaWaitingEvent;
        /**
        * A Boolean attribute; if specified, the video will automatically begin to play back as soon as it can do so without stopping to finish loading the data [MDN].
        */
        autoPlayProperty: b.PropertyUpdate<boolean>;
        /**
        * A Boolean attribute; if specified, the video will automatically begin to play back as soon as it can do so without stopping to finish loading the data [MDN].
        */
        autoPlay: boolean;
        /**
        * An attribute you can read to determine which time ranges of the media have been buffered. This attribute contains a TimeRanges object [MDN].
        */
        bufferedProperty: b.PropertyUpdate<TimeRanges>;
        /**
        * An attribute you can read to determine which time ranges of the media have been buffered. This attribute contains a TimeRanges object [MDN].
        */
        buffered: TimeRanges;
        /**
        * If this attribute is present, controls are included in the video for adjusting volume, seeking, pausing and resuming playback [MDN].
        */
        controlsProperty: b.PropertyUpdate<boolean>;
        /**
        * If this attribute is present, controls are included in the video for adjusting volume, seeking, pausing and resuming playback [MDN].
        */
        controls: boolean;
        /**
        * The height of the video's display area, in CSS pixels [MDN].
        */
        heightProperty: b.PropertyUpdate<number>;
        /**
        * The height of the video's display area, in CSS pixels [MDN].
        */
        height: number;
        /**
        * Specifies that the video should repeat upon reaching the end [MDN].
        */
        loopProperty: b.PropertyUpdate<boolean>;
        /**
        * Specifies that the video should repeat upon reaching the end [MDN].
        */
        loop: boolean;
        /**
        * A Boolean attribute which indicates the default setting of the audio contained in the video. If set, the audio will be initially silenced. Its default value is false, meaning that the audio will be played when the video is played [MDN].
        */
        mutedProperty: b.PropertyUpdate<boolean>;
        /**
        * A Boolean attribute which indicates the default setting of the audio contained in the video. If set, the audio will be initially silenced. Its default value is false, meaning that the audio will be played when the video is played [MDN].
        */
        muted: boolean;
        /**
        * Specifies the ranges of the video that have been played [MDN].
        */
        playedProperty: b.PropertyUpdate<TimeRanges>;
        /**
        * Specifies the ranges of the video that have been played [MDN].
        */
        played: TimeRanges;
        /**
        * Html.VideoPreload enumerates the values of this property.
        * This enumerated attribute is intended to provide a hint to the browser about what the author thinks will lead to the best user experience. It may have one of the following values:  none: hints that either the author thinks that the user won't need to consult that video or that the server wants to minimize its traffic; in others terms this hint indicates that the video should not be cached. metadata: hints that though the author thinks that the user won't need to consult that video, fetching the metadata (e.g. length) is reasonable. auto: hints that the user needs have priority; in others terms this hint indicated that, if needed, the whole video could be downloaded, even if the user is not expected to use it. the empty string: which is a synonym of the auto value. If not set, its default value is browser-defined (i.e. each browser can choose its own default value), though the spec advises it to be set to metadata.  Usage notes:  The autoplay attribute has precedence over this one as if one wants to automatically play a video, the browser will obviously need to download it. Setting both the autoplay and the preload attributes is allowed by the specification. The browser is not forced by the specification to follow the value of this attribute; it is a mere hint [MDN].
        */
        preloadProperty: b.PropertyUpdate<string>;
        /**
        * Html.VideoPreload enumerates the values of this property.
        * This enumerated attribute is intended to provide a hint to the browser about what the author thinks will lead to the best user experience. It may have one of the following values:  none: hints that either the author thinks that the user won't need to consult that video or that the server wants to minimize its traffic; in others terms this hint indicates that the video should not be cached. metadata: hints that though the author thinks that the user won't need to consult that video, fetching the metadata (e.g. length) is reasonable. auto: hints that the user needs have priority; in others terms this hint indicated that, if needed, the whole video could be downloaded, even if the user is not expected to use it. the empty string: which is a synonym of the auto value. If not set, its default value is browser-defined (i.e. each browser can choose its own default value), though the spec advises it to be set to metadata.  Usage notes:  The autoplay attribute has precedence over this one as if one wants to automatically play a video, the browser will obviously need to download it. Setting both the autoplay and the preload attributes is allowed by the specification. The browser is not forced by the specification to follow the value of this attribute; it is a mere hint [MDN].
        */
        preload: string;
        /**
        * A URL indicating a poster frame to show until the user plays or seeks. If this attribute isn't specified, nothing is displayed until the first frame is available; then the first frame is displayed as the poster frame [MDN].
        */
        posterProperty: b.PropertyUpdate<string>;
        /**
        * A URL indicating a poster frame to show until the user plays or seeks. If this attribute isn't specified, nothing is displayed until the first frame is available; then the first frame is displayed as the poster frame [MDN].
        */
        poster: string;
        /**
        * The URL of the video to embed. This is optional; you may instead use the <source> element within the video block to specify the video to embed [MDN].
        */
        sourceProperty: b.PropertyUpdate<string>;
        /**
        * The URL of the video to embed. This is optional; you may instead use the <source> element within the video block to specify the video to embed [MDN].
        */
        source: string;
        /**
        * The width of the video's display area, in CSS pixels [MDN].
        */
        widthProperty: b.PropertyUpdate<number>;
        /**
        * The width of the video's display area, in CSS pixels [MDN].
        */
        width: number;
        /**
        * The mediaCanPlayEvent event is executed when the user agent can play the media, but estimates that not enough data has been loaded to play the media up to its end without having to stop for further buffering of content [MDN].
        * Specification: HTML5 media
        * DOM Event Name: canplay
        */
        mediaCanPlayEvent: HtmlElementEvent<Elements.VideoElement, Event>;
        /**
        * The mediaCanPlayThroughEvent event is executed when the user agent can play the media, and estimates that enough data has been loaded to play the media up to its end without having to stop for further buffering of content [MDN].
        * Specification: HTML5 media
        * DOM Event Name: canplaythrough
        */
        mediaCanPlayThroughEvent: HtmlElementEvent<Elements.VideoElement, Event>;
        /**
        * The mediaDurationChangeEvent event is executed when the duration attribute has been updated [MDN].
        * Specification: HTML5 media
        * DOM Event Name: durationchange
        */
        mediaDurationChangeEvent: HtmlElementEvent<Elements.VideoElement, Event>;
        /**
        * The mediaEmptiedEvent event is executed when the media has become empty; for example, this event is sent if the media has already been loaded (or partially loaded), and the load() method is called to reload it [MDN].
        * Specification: HTML5 media
        * DOM Event Name: emptied
        */
        mediaEmptiedEvent: HtmlElementEvent<Elements.VideoElement, Event>;
        /**
        * The mediaEndedEvent event is executed when playback has stopped because the end of the media was reached [MDN].
        * Specification: HTML5 media
        * DOM Event Name: ended
        */
        mediaEndedEvent: HtmlElementEvent<Elements.VideoElement, Event>;
        /**
        * The mediaLoadedDataEvent event is executed when the first frame of the media has finished loading [MDN].
        * Specification: HTML5 media
        * DOM Event Name: loadeddata
        */
        mediaLoadedDataEvent: HtmlElementEvent<Elements.VideoElement, Event>;
        /**
        * The mediaLoadedMetadataEvent event is executed when the metadata has been loaded [MDN].
        * Specification: HTML5 media
        * DOM Event Name: loadedmetadata
        */
        mediaLoadedMetadataEvent: HtmlElementEvent<Elements.VideoElement, Event>;
        /**
        * The mediaPauseEvent event is executed when playback has been paused [MDN].
        * Specification: HTML5 media
        * DOM Event Name: pause
        */
        mediaPauseEvent: HtmlElementEvent<Elements.VideoElement, Event>;
        /**
        * The mediaPlayEvent event is executed when playback has begun [MDN].
        * Specification: HTML5 media
        * DOM Event Name: play
        */
        mediaPlayEvent: HtmlElementEvent<Elements.VideoElement, Event>;
        /**
        * The mediaPlayingEvent event is executed when playback is ready to start after having been paused or delayed due to lack of data [MDN].
        * Specification: HTML5 media
        * DOM Event Name: playing
        */
        mediaPlayingEvent: HtmlElementEvent<Elements.VideoElement, Event>;
        /**
        * The mediaRateChangeEvent event is executed when the playback rate has changed [MDN].
        * Specification: HTML5 media
        * DOM Event Name: ratechange
        */
        mediaRateChangeEvent: HtmlElementEvent<Elements.VideoElement, Event>;
        /**
        * The mediaSeekedEvent event is executed when a seek operation completed [MDN].
        * Specification: HTML5 media
        * DOM Event Name: seeked
        */
        mediaSeekedEvent: HtmlElementEvent<Elements.VideoElement, Event>;
        /**
        * The mediaSeekingEvent event is executed when a seek operation began [MDN].
        * Specification: HTML5 media
        * DOM Event Name: seeking
        */
        mediaSeekingEvent: HtmlElementEvent<Elements.VideoElement, Event>;
        /**
        * The mediaStalledEvent event is executed when the user agent is trying to fetch media data, but data is unexpectedly not forthcoming [MDN].
        * Specification: HTML5 media
        * DOM Event Name: stalled
        */
        mediaStalledEvent: HtmlElementEvent<Elements.VideoElement, Event>;
        /**
        * The mediaSuspendEvent event is executed when media data loading has been suspended [MDN].
        * Specification: HTML5 media
        * DOM Event Name: suspend
        */
        mediaSuspendEvent: HtmlElementEvent<Elements.VideoElement, Event>;
        /**
        * The mediaTimeUpdateEvent event is executed when the time indicated by the currentTime attribute has been updated [MDN].
        * Specification: HTML5 media
        * DOM Event Name: timeupdate
        */
        mediaTimeUpdateEvent: HtmlElementEvent<Elements.VideoElement, Event>;
        /**
        * The mediaVolumeChangeEvent event is executed when the volume has changed [MDN].
        * Specification: HTML5 media
        * DOM Event Name: volumechange
        */
        mediaVolumeChangeEvent: HtmlElementEvent<Elements.VideoElement, Event>;
        /**
        * The mediaWaitingEvent event is executed when playback has stopped because of a temporary lack of data [MDN].
        * Specification: HTML5 media
        * DOM Event Name: waiting
        */
        mediaWaitingEvent: HtmlElementEvent<Elements.VideoElement, Event>;
        /**
        * Initializes a new VideoElement'.
        */
        constructor(config: IVideoElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
    /**
    * The Word Break Opportunity (<wbr>) HTML element represents a position within text where the browser may optionally break a line, though its line-breaking rules would not otherwise create a break at that location [MDN].
    */
    class WordBreakOpportunityElement extends HtmlElementContainer {
        /**
        * Initializes a new WordBreakOpportunityElement'.
        */
        constructor(config: IWordBreakOpportunityElementConfig);
        /**
        * Protected
        * Configures the DOM node with data from the config.
        * @param [element] The DOM node to configure.
        * @param [document] The document used to create elements.
        */
        configure(element: Node, document: Document): void;
    }
}
declare module Classical.Html {
    import b = Classical.Binding;
    /**
    Initializes the specified HtmlNode.
    @param [node] The node to initialize.
    returns a fully initialized HtmlNode.
    */
    function create<TNode extends Elements.HtmlNode>(node: TNode, append?: boolean, appendTo?: Node): TNode;
    /**
    * Decorates the specified element, or looks up the existing decorator.
    * @param [elementID] The id of the element to decorate.
    * @returns a decorated HTMLElement.
    */
    function wrap(elementID: string): Elements.HtmlElement;
    /**
    * Decorates the specified element, or looks up the existing decorator.
    * @param [element] The element to decorate.
    * @returns a decorated HTMLElement.
    */
    function wrap(element: HTMLElement): Elements.HtmlElement;
    function text(text: string): Elements.TextNode;
    function text(textBinder: b.IBinder<b.PropertyUpdate<string>>): Elements.TextNode;
    /**
    * The HTML <abbr> Element (or HTML Abbreviation Element) represents an abbreviation and optionally provides a full description for it. If present, the title attribute must contain this full description and nothing else [MDN].
    * @param [config] The configuration for the AbbreviationElement.
    * @returns a new AbbreviationElement.
    */
    function abbr(config?: IAbbreviationElementConfig): Elements.AbbreviationElement;
    /**
    * The HTML <address> Element may be used by authors to supply contact information for its nearest <article> or <body> ancestor; in the latter case, it applies to the whole document [MDN].
    * @param [config] The configuration for the AddressElement.
    * @returns a new AddressElement.
    */
    function address(config?: IAddressElementConfig): Elements.AddressElement;
    /**
    * The HTML <a> Element (or the HTML Anchor Element) defines a hyperlink, the named target destination for a hyperlink, or both [MDN].
    * @param [config] The configuration for the AnchorElement.
    * @returns a new AnchorElement.
    */
    function a(config?: IAnchorElementConfig): Elements.AnchorElement;
    /**
    * The HTML <area> element defines a hot-spot region on an image, and optionally associates it with a hypertext link. This element is used only within a <map> element [MDN].
    * @param [config] The configuration for the AreaElement.
    * @returns a new AreaElement.
    */
    function area(config?: IAreaElementConfig): Elements.AreaElement;
    /**
    * The HTML <article> Element represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable, e.g., in syndication. This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment, an interactive widget or gadget, or any other independent item of content [MDN].
    * @param [config] The configuration for the ArticleElement.
    * @returns a new ArticleElement.
    */
    function article(config?: IArticleElementConfig): Elements.ArticleElement;
    /**
    * The HTML <aside> Element represents a section of a page that consists of content that is tangentially related to the content around it, which could be considered separate from that content. Such sections are often represented as sidebars or as inserts. They often contain side explanations, like a glossary definition; more loosely related stuff, like advertisements; the biography of the author; or in web-applications, profile information or related blog links [MDN].
    * @param [config] The configuration for the AsideElement.
    * @returns a new AsideElement.
    */
    function aside(config?: IAsideElementConfig): Elements.AsideElement;
    /**
    * The HTML <audio> element is used to represent sound content in documents. Added as part of HTML5, it may contain several audio sources, represented using the src attribute or the <source> element; the browser will choose the most suitable one. Fallback content for browser not supporting the <audio> element can be added too [MDN].
    * @param [config] The configuration for the AudioElement.
    * @returns a new AudioElement.
    */
    function audio(config?: IAudioElementConfig): Elements.AudioElement;
    /**
    * The HTML <base> element specifies the base URL to use for all relative URLs contained within a document [MDN].
    * @param [config] The configuration for the BaseElement.
    * @returns a new BaseElement.
    */
    function base(config?: IBaseElementConfig): Elements.BaseElement;
    /**
    * The HTML <bdi> Element (or Bi-Directional Isolation Element) isolates a span of text that might be formatted in a different direction from other text outside it [MDN].
    * @param [config] The configuration for the BidirectionalIsolationElement.
    * @returns a new BidirectionalIsolationElement.
    */
    function bdi(config?: IBidirectionalIsolationElementConfig): Elements.BidirectionalIsolationElement;
    /**
    * The HTML <bdo> Element (or HTML bidirectional override element) is used to override the current directionality of text. It causes the directionality of the characters to be ignored in favor of the specified directionality [MDN].
    * @param [config] The configuration for the BidirectionalOverrideElement.
    * @returns a new BidirectionalOverrideElement.
    */
    function bdo(config?: IBidirectionalOverrideElementConfig): Elements.BidirectionalOverrideElement;
    /**
    * The HTML <blockquote> Element (or HTML Block Quotation Element) indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation (see Notes for how to change it). A URL for the source of the quotation may be given using the cite attribute, while a text representation of the source can be given using the <cite> element [MDN].
    * @param [config] The configuration for the BlockQuotationElement.
    * @returns a new BlockQuotationElement.
    */
    function blockquote(config?: IBlockQuotationElementConfig): Elements.BlockQuotationElement;
    /**
    * The HTML <body> element represents the content of an HTML document. There is only one <body> element in a document [MDN].
    * @param [config] The configuration for the BodyElement.
    * @returns a new BodyElement.
    */
    function body(config?: IBodyElementConfig): Elements.BodyElement;
    /**
    * The HTML <b> Element represents a span of text stylistically different from normal text, without a conveying any special importance or relevance. It is typically used for keywords in a summary, product names in a review, or other spans of text whose typical presentation would be boldfaced. Another example of its use is to mark the lead sentence of each paragraph of an article [MDN].
    * @param [config] The configuration for the BoldElement.
    * @returns a new BoldElement.
    */
    function b(config?: IBoldElementConfig): Elements.BoldElement;
    /**
    * The HTML <button> Element represents a clickable button [MDN].
    * @param [config] The configuration for the ButtonElement.
    * @returns a new ButtonElement.
    */
    function button(config?: IButtonElementConfig): Elements.ButtonElement;
    /**
    * The HTML <canvas> Element can be used to draw graphics via scripting (usually JavaScript). For example, it can be used to draw graphs, make photo compositions or even perform animations. You may (and should) provide alternate content inside the <canvas> block. That content will be rendered both on older browsers that don't support canvas and in browsers with JavaScript disabled [MDN].
    * @param [config] The configuration for the CanvasElement.
    * @returns a new CanvasElement.
    */
    function canvas(config?: ICanvasElementConfig): Elements.CanvasElement;
    /**
    * The HTML <cite> Element (or HTML Citation Element) contains the title of a work, such as a book, song, movie, TV show, sculpture, etc [MDN].
    * @param [config] The configuration for the CitationElement.
    * @returns a new CitationElement.
    */
    function cite(config?: ICitationElementConfig): Elements.CitationElement;
    /**
    * The HTML <code> Element represents a fragment of computer code. By default, it is displayed in the browser's default monospace font [MDN].
    * @param [config] The configuration for the CodeElement.
    * @returns a new CodeElement.
    */
    function code(config?: ICodeElementConfig): Elements.CodeElement;
    /**
    * The HTML <data> Element links a given content with a machine-readable translation. If the content is time- or date-related, the <time> must be used [MDN].
    * @param [config] The configuration for the DataElement.
    * @returns a new DataElement.
    */
    function data(config?: IDataElementConfig): Elements.DataElement;
    /**
    * The HTML <datalist> Element contains a set of <option> elements that represent the possible options for the value of other controls [MDN].
    * @param [config] The configuration for the DataListElement.
    * @returns a new DataListElement.
    */
    function datalist(config?: IDataListElementConfig): Elements.DataListElement;
    /**
    * The HTML <dfn> element (or HTML Definition Element) represents the defining instance of a term [MDN].
    * @param [config] The configuration for the DefinitionElement.
    * @returns a new DefinitionElement.
    */
    function dfn(config?: IDefinitionElementConfig): Elements.DefinitionElement;
    /**
    * The HTML <dt> element (or HTML Definition Term Element) identifies a term in a definition list. This element can occur only as a child element of a <dl>. It is usually followed by a <dd> element; however, multiple <dt> elements in a row indicate several terms that are all defined by the immediate next <dd> element [MDN].
    * @param [config] The configuration for the DefinitionTermElement.
    * @returns a new DefinitionTermElement.
    */
    function dt(config?: IDefinitionTermElementConfig): Elements.DefinitionTermElement;
    /**
    * The HTML <del> element (or HTML Deleted Text Element) represents a range of text that has been deleted from a document. This element is often (but need not be) rendered with strike-through text [MDN].
    * @param [config] The configuration for the DeletedTextElement.
    * @returns a new DeletedTextElement.
    */
    function del(config?: IDeletedTextElementConfig): Elements.DeletedTextElement;
    /**
    * The HTML <dd> Element (or HTML Description Element) indicates the description of a term in a description list (<dl>) element. This element can occur only as a child element of a definition list and it must follow a <dt> element [MDN].
    * @param [config] The configuration for the DescriptionElement.
    * @returns a new DescriptionElement.
    */
    function dd(config?: IDescriptionElementConfig): Elements.DescriptionElement;
    /**
    * The HTML <dl> Element (or HTML Description List Element) encloses a list of pairs of terms and descriptions. Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs) [MDN].
    * @param [config] The configuration for the DescriptionListElement.
    * @returns a new DescriptionListElement.
    */
    function dl(config?: IDescriptionListElementConfig): Elements.DescriptionListElement;
    /**
    * The HTML <details> Element is used as a disclosure widget from which the user can retrieve additional information [MDN].
    * @param [config] The configuration for the DetailsElement.
    * @returns a new DetailsElement.
    */
    function details(config?: IDetailsElementConfig): Elements.DetailsElement;
    /**
    * The HTML <div> element (or HTML Document Division Element) is the generic container for flow content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element (such as <article> or <nav>) is appropriate [MDN].
    * @param [config] The configuration for the DivisionElement.
    * @returns a new DivisionElement.
    */
    function div(config?: IDivisionElementConfig): Elements.DivisionElement;
    /**
    * The HTML <embed> Element represents an integration point for an external application or interactive content (in other words, a plug-in) [MDN].
    * @param [config] The configuration for the EmbedElement.
    * @returns a new EmbedElement.
    */
    function embed(config?: IEmbedElementConfig): Elements.EmbedElement;
    /**
    * The HTML <object> Element (or HTML Embedded Object Element) represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin [MDN].
    * @param [config] The configuration for the EmbeddedObjectElement.
    * @returns a new EmbeddedObjectElement.
    */
    function obj(config?: IEmbeddedObjectElementConfig): Elements.EmbeddedObjectElement;
    /**
    * The HTML <em> element (or HTML Emphasis Element) marks text that has stress emphasis. The <em> element can be nested, with each level of nesting indicating a greater degree of emphasis [MDN].
    * @param [config] The configuration for the EmphasisElement.
    * @returns a new EmphasisElement.
    */
    function em(config?: IEmphasisElementConfig): Elements.EmphasisElement;
    /**
    * The HTML <fieldset> element is used to group several controls as well as labels (<label>) within a web form [MDN].
    * @param [config] The configuration for the FieldsetElement.
    * @returns a new FieldsetElement.
    */
    function fieldset(config?: IFieldsetElementConfig): Elements.FieldsetElement;
    /**
    * The HTML <figure> Element represents self-contained content, frequently with a caption (<figcaption>), and is typically referenced as a single unit. While it is related to the main flow, its position is independent of the main flow. Usually this is an image, an illustration, a diagram, a code snippet, or a schema that is referenced in the main text, but that can be moved to another page or to an appendix without affecting the main flow [MDN].
    * @param [config] The configuration for the FigureElement.
    * @returns a new FigureElement.
    */
    function figure(config?: IFigureElementConfig): Elements.FigureElement;
    /**
    * The HTML <figcaption> Element represents a caption or a legend associated with a figure or an illustration described by the rest of the data of the <figure> element which is its immediate ancestor which means <figcaption> can be the first or last element inside a <figure> block. Also, the HTML Figcaption Element is optional; if not provided, then the parent figure element will have no caption [MDN].
    * @param [config] The configuration for the FigureCaptionElement.
    * @returns a new FigureCaptionElement.
    */
    function figcaption(config?: IFigureCaptionElementConfig): Elements.FigureCaptionElement;
    /**
    * The HTML <footer> Element represents a footer for its nearest sectioning content or sectioning root element (i.e, its nearest parent <article>, <aside>, <nav>, <section>, <blockquote>, <body>, <details>, <fieldset>, <figure>, <td>). A footer typically contains information about the author of the section, copyright data or links to related documents [MDN].
    * @param [config] The configuration for the FooterElement.
    * @returns a new FooterElement.
    */
    function footer(config?: IFooterElementConfig): Elements.FooterElement;
    /**
    * The HTML <form> element represents a section of document that contains interactive controls that enable a user to submit information to a web server [MDN].
    * @param [config] The configuration for the FormElement.
    * @returns a new FormElement.
    */
    function form(config?: IFormElementConfig): Elements.FormElement;
    /**
    * The HTML <head> element represents a collection of metadata about the document, including links to or definitions of scripts and style sheets [MDN].
    * @param [config] The configuration for the HeadElement.
    * @returns a new HeadElement.
    */
    function head(config?: IHeadElementConfig): Elements.HeadElement;
    /**
    * The HTML <header> Element represents a group of introductory or navigational aids. It may contain some heading elements but also other elements like a logo, wrapped section's header, a search form, and so on [MDN].
    * @param [config] The configuration for the HeaderElement.
    * @returns a new HeaderElement.
    */
    function header(config?: IHeaderElementConfig): Elements.HeaderElement;
    /**
    * Heading elements implement six levels of document headings, <h1> is the most important and <h6> is the least. A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically [MDN].
    * @param [config] The configuration for the HeaderFiveElement.
    * @returns a new HeaderFiveElement.
    */
    function h5(config?: IHeaderFiveElementConfig): Elements.HeaderFiveElement;
    /**
    * Heading elements implement six levels of document headings, <h1> is the most important and <h6> is the least. A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically [MDN].
    * @param [config] The configuration for the HeaderFourElement.
    * @returns a new HeaderFourElement.
    */
    function h4(config?: IHeaderFourElementConfig): Elements.HeaderFourElement;
    /**
    * Heading elements implement six levels of document headings, <h1> is the most important and <h6> is the least. A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically [MDN].
    * @param [config] The configuration for the HeaderOneElement.
    * @returns a new HeaderOneElement.
    */
    function h1(config?: IHeaderOneElementConfig): Elements.HeaderOneElement;
    /**
    * Heading elements implement six levels of document headings, <h1> is the most important and <h6> is the least. A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically [MDN].
    * @param [config] The configuration for the HeaderSixElement.
    * @returns a new HeaderSixElement.
    */
    function h6(config?: IHeaderSixElementConfig): Elements.HeaderSixElement;
    /**
    * Heading elements implement six levels of document headings, <h1> is the most important and <h6> is the least. A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically [MDN].
    * @param [config] The configuration for the HeaderThreeElement.
    * @returns a new HeaderThreeElement.
    */
    function h3(config?: IHeaderThreeElementConfig): Elements.HeaderThreeElement;
    /**
    * Heading elements implement six levels of document headings, <h1> is the most important and <h6> is the least. A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically [MDN].
    * @param [config] The configuration for the HeaderTwoElement.
    * @returns a new HeaderTwoElement.
    */
    function h2(config?: IHeaderTwoElementConfig): Elements.HeaderTwoElement;
    /**
    * In HTML5 the HTML <hr> element represents a thematic break between paragraph-level elements (for example, a change of scene in a story, or a shift of topic with a section). In previous versions of HTML, it represented a horizontal rule. It may still be displayed as a horizontal rule in visual browsers, but is now defined in semantic terms, rather than presentational terms [MDN].
    * @param [config] The configuration for the HorizontalRuleElement.
    * @returns a new HorizontalRuleElement.
    */
    function hr(config?: IHorizontalRuleElementConfig): Elements.HorizontalRuleElement;
    /**
    * The HTML <img> Element (or HTML Image Element) represents an image of the document [MDN].
    * @param [config] The configuration for the ImageElement.
    * @returns a new ImageElement.
    */
    function img(config?: IImageElementConfig): Elements.ImageElement;
    /**
    * The HTML <iframe> Element (or HTML inline frame element) represents a nested browsing context, effectively embedding another HTML page into the current page. In HTML 4.01, a document may contain a head and a body or a head and a frame-set, but not both a body and a frame-set. However,an <iframe> can be used within a normal document body. Each browsing context has its own session history and active document. The browsing context that contains the embedded content is called the parent browsing context. The top-level browsing context (which has no parent) is typically the browser window [MDN].
    * @param [config] The configuration for the InlineFrameElement.
    * @returns a new InlineFrameElement.
    */
    function iframe(config?: IInlineFrameElementConfig): Elements.InlineFrameElement;
    /**
    * The HTML <input> element is used to create interactive controls for web-based forms [MDN].
    * @param [config] The configuration for the InputElement.
    * @returns a new InputElement.
    */
    function input(config?: IInputElementConfig): Elements.InputElement;
    /**
    * The HTML <ins> Element (or HTML Inserted Text) HTML represents a range of text that has been added to a document [MDN].
    * @param [config] The configuration for the InsertedElement.
    * @returns a new InsertedElement.
    */
    function ins(config?: IInsertedElementConfig): Elements.InsertedElement;
    /**
    * The HTML <i> Element represents a range of text that is set off from the normal text for some reason, for example, technical terms, foreign language phrases, or fictional character thoughts. It is typically displayed in italic type [MDN].
    * @param [config] The configuration for the ItalicElement.
    * @returns a new ItalicElement.
    */
    function i(config?: IItalicElementConfig): Elements.ItalicElement;
    /**
    * The HTML <kbd> Element (or HTML Keyboard Input Element) represents user input and produces an inline element displayed in the browser's default monotype font [MDN].
    * @param [config] The configuration for the KeyboardInputElement.
    * @returns a new KeyboardInputElement.
    */
    function kbd(config?: IKeyboardInputElementConfig): Elements.KeyboardInputElement;
    /**
    * The HTML <label> Element represents a caption for an item in a user interface. It can be associated with a control either by using the for attribute, or by placing the control element inside the label element. Such a control is called the labeled control of the label element [MDN].
    * @param [config] The configuration for the LabelElement.
    * @returns a new LabelElement.
    */
    function label(config?: ILabelElementConfig): Elements.LabelElement;
    /**
    * The HTML <legend> Element (or HTML Legend Field Element) represents a caption for the content of its parent <fieldset> [MDN].
    * @param [config] The configuration for the LegendFieldElement.
    * @returns a new LegendFieldElement.
    */
    function legend(config?: ILegendFieldElementConfig): Elements.LegendFieldElement;
    /**
    * The HTML <br> Element (or HTML Line Break Element) produces a line break in text (carriage-return). It is useful for writing a poem or an address, where the division of lines is significant [MDN].
    * @param [config] The configuration for the LineBreakElement.
    * @returns a new LineBreakElement.
    */
    function br(config?: ILineBreakElementConfig): Elements.LineBreakElement;
    /**
    * The HTML <link> Element specifies relationships between the current document and other documents. Possible uses for this element include defining a relational framework for navigation and linking the document to a style sheet [MDN].
    * @param [config] The configuration for the LinkElement.
    * @returns a new LinkElement.
    */
    function link(config?: ILinkElementConfig): Elements.LinkElement;
    /**
    * The HTML List item element (<li>) is used to represent a list item. It should be contained in an ordered list (<ol>), an unordered list (<ul>) or a menu (<menu>), where it represents a single entity in that list. In menus and unordered lists, list items are ordinarily displayed using bullet points. In ordered lists, they are usually displayed with some ascending counter on the left such as a number or letter [MDN].
    * @param [config] The configuration for the ListItemElement.
    * @returns a new ListItemElement.
    */
    function li(config?: IListItemElementConfig): Elements.ListItemElement;
    /**
    * The HTML <main> element represents the main content of  the <body> of a document or application. The main content area consists of content that is directly related to, or expands upon the central topic of a document or the central functionality of an application. This content should be unique to the document, excluding any content that is repeated across a set of documents such as sidebars, navigation links, copyright information, site logos, and search forms (unless, of course, the document's main function is as a search form) [MDN].
    * @param [config] The configuration for the MainElement.
    * @returns a new MainElement.
    */
    function main(config?: IMainElementConfig): Elements.MainElement;
    /**
    * The HTML <map> element is used with <area> elements to define an image map [MDN].
    * @param [config] The configuration for the MapElement.
    * @returns a new MapElement.
    */
    function map(config?: IMapElementConfig): Elements.MapElement;
    /**
    * The HTML <mark> Element represents highlighted text, i.e., a run of text marked for reference purpose, due to its relevance in a particular context. For example it can be used in a page showing search results to highlight every instance of the searched for word [MDN].
    * @param [config] The configuration for the MarkElement.
    * @returns a new MarkElement.
    */
    function mark(config?: IMarkElementConfig): Elements.MarkElement;
    /**
    * The HTML <meta> Element represents any metadata information which cannot be represented using one of the other meta-related element (<base>, <link>, <script>, <style> or <title>). According to the attributes set, the kind of metadata can be one of the following: [MDN].
    * @param [config] The configuration for the MetaElement.
    * @returns a new MetaElement.
    */
    function meta(config?: IMetaElementConfig): Elements.MetaElement;
    /**
    * The HTML Navigation Element (<nav>) represents a section of a page that links to other pages or to parts within the page [MDN].
    * @param [config] The configuration for the NavigationElement.
    * @returns a new NavigationElement.
    */
    function nav(config?: INavigationElementConfig): Elements.NavigationElement;
    /**
    * The HTML <noscript> Element defines a section of html to be inserted if a script type on the page is unsupported or if scripting is currently turned off in the browser [MDN].
    * @param [config] The configuration for the NoScriptElement.
    * @returns a new NoScriptElement.
    */
    function noscript(config?: INoScriptElementConfig): Elements.NoScriptElement;
    /**
    * In a Web form, the HTML <option> element is used to create a control representing an item within a <select>, <optgroup> or <datalist> element [MDN].
    * @param [config] The configuration for the OptionElement.
    * @returns a new OptionElement.
    */
    function option(config?: IOptionElementConfig): Elements.OptionElement;
    /**
    * In a Web form, the HTML <optgroup> element  creates a grouping of options within a <select> element [MDN].
    * @param [config] The configuration for the OptionsGroupElement.
    * @returns a new OptionsGroupElement.
    */
    function optgroup(config?: IOptionsGroupElementConfig): Elements.OptionsGroupElement;
    /**
    * The HTML <ol> Element (or HTML Ordered List Element) represents an ordered list of items. Typically, ordered-list items are displayed with a preceding numbering, which can be of any form, like numerals, letters or Romans numerals or even simple bullets. This numbered style is not defined in the HTML description of the page, but in its associated CSS, using the list-style-type property [MDN].
    * @param [config] The configuration for the OrderedListElement.
    * @returns a new OrderedListElement.
    */
    function ol(config?: IOrderedListElementConfig): Elements.OrderedListElement;
    /**
    * The HTML <p> element (or HTML Paragraph Element) represents a paragraph of text. Paragraphs are block-level elements [MDN].
    * @param [config] The configuration for the ParagraphElement.
    * @returns a new ParagraphElement.
    */
    function p(config?: IParagraphElementConfig): Elements.ParagraphElement;
    /**
    * The HTML <param> Element (or HTML Parameter Element) defines parameters for <object> [MDN].
    * @param [config] The configuration for the ParameterElement.
    * @returns a new ParameterElement.
    */
    function param(config?: IParameterElementConfig): Elements.ParameterElement;
    /**
    * The HTML <pre> Element (or HTML Preformatted Text) represents preformatted text. Text within this element is typically displayed in a non-proportional font exactly as it is laid out in the file. Whitespaces inside this element are displayed as typed [MDN].
    * @param [config] The configuration for the PreformattedElement.
    * @returns a new PreformattedElement.
    */
    function pre(config?: IPreformattedElementConfig): Elements.PreformattedElement;
    /**
    * The HTML <progress> Element is used to view the completion progress of a task. While the specifics of how it's displayed is left up to the browser developer, it's typically displayed as a progress bar. Javascript can be used to manipulate the value of progress bar [MDN].
    * @param [config] The configuration for the ProgressElement.
    * @returns a new ProgressElement.
    */
    function progress(config?: IProgressElementConfig): Elements.ProgressElement;
    /**
    * The HTML <q> Element (or HTML Quote Element) indicates that the enclosed text is a short inline quotation. This element is intended for short quotations that don't require paragraph breaks; for long quotations use <blockquote> element [MDN].
    * @param [config] The configuration for the QuoteElement.
    * @returns a new QuoteElement.
    */
    function q(config?: IQuoteElementConfig): Elements.QuoteElement;
    /**
    * The HTML <html> Element (or HTML root element) represents the root of an HTML or XHTML document. All other elements must be descendants of this element [MDN].
    * @param [config] The configuration for the RootElement.
    * @returns a new RootElement.
    */
    function html(config?: IRootElementConfig): Elements.RootElement;
    /**
    * The HTML <ruby> Element represents a ruby annotation. Ruby annotations are for showing pronounciation of East Asian characters [MDN].
    * @param [config] The configuration for the RubyElement.
    * @returns a new RubyElement.
    */
    function ruby(config?: IRubyElementConfig): Elements.RubyElement;
    /**
    * The HTML <rp> element is used to provide fall-back parenthesis for browsers non-supporting ruby annotations. Ruby annotations are for showing pronounciation of East Asian characters, like using Japanese furigana or Taiwainese bopomofo characters. The <rp> element is used in the case of lack of <ruby> element support its content has what should be displayed in order to indicate the presence of a ruby annotation, usually parentheses [MDN].
    * @param [config] The configuration for the RubyParenthesisElement.
    * @returns a new RubyParenthesisElement.
    */
    function rp(config?: IRubyParenthesisElementConfig): Elements.RubyParenthesisElement;
    /**
    * The HTML <rt> Element embraces pronunciation of character presented in a ruby annotations, which are for showing pronunciation of East Asian characters and the <rt> element is used inside of <ruby> element [MDN].
    * @param [config] The configuration for the RubyPronunciationElement.
    * @returns a new RubyPronunciationElement.
    */
    function rt(config?: IRubyPronunciationElementConfig): Elements.RubyPronunciationElement;
    /**
    * The HTML <samp> element is an inline element intended to identify sample output from a computer program. It is usually displayed in the browser's default monotype font (such as Lucida Console) [MDN].
    * @param [config] The configuration for the SampleElement.
    * @returns a new SampleElement.
    */
    function samp(config?: ISampleElementConfig): Elements.SampleElement;
    /**
    * The HTML <script> element is used to embed or reference an executable script within an HTML or XHTML document [MDN].
    * @param [config] The configuration for the ScriptElement.
    * @returns a new ScriptElement.
    */
    function script(config?: IScriptElementConfig): Elements.ScriptElement;
    /**
    * The HTML Section Element (<section>) represents a generic section of a document, i.e., a thematic grouping of content, typically with a heading [MDN].
    * @param [config] The configuration for the SectionElement.
    * @returns a new SectionElement.
    */
    function section(config?: ISectionElementConfig): Elements.SectionElement;
    /**
    * The HTML select (<select>) element represents a control that presents menu of options. The options within the menu are represented by <option> elements, which can be grouped by <optgroup> elements. Options can be pre-selected for the user [MDN].
    * @param [config] The configuration for the SelectElement.
    * @returns a new SelectElement.
    */
    function select(config?: ISelectElementConfig): Elements.SelectElement;
    /**
    * The HTML Small Element (<small>) makes the text font size one size smaller (for example, from large to medium, or from small to x-small) down to the browser's minimum font size.  In HTML5, this element is repurposed to represent side-comments and small print, including copyright and legal text, independent of its styled presentation [MDN].
    * @param [config] The configuration for the SmallElement.
    * @returns a new SmallElement.
    */
    function small(config?: ISmallElementConfig): Elements.SmallElement;
    /**
    * The source element is used to specify multiple media resources for audio and video elements in HTML5. It is an empty element. It is commonly used to serve the same media in multiple formats supported by different browsers [MDN].
    * @param [config] The configuration for the SourceElement.
    * @returns a new SourceElement.
    */
    function source(config?: ISourceElementConfig): Elements.SourceElement;
    /**
    * The HTML <span> element is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element is appropriate. <span> is very much like a <div> element, but <div> is a block-level element whereas a <span> is an inline element [MDN].
    * @param [config] The configuration for the SpanElement.
    * @returns a new SpanElement.
    */
    function span(config?: ISpanElementConfig): Elements.SpanElement;
    /**
    * The HTML Strikethrough Element (<s>) renders text with a strikethrough, or a line through it. Use the <s> element to represent things that are no longer relevant or no longer accurate. However, <s> is not appropriate when indicating document edits; for that, use the <del> and <ins> elements, as appropriate [MDN].
    * @param [config] The configuration for the StrikethroughElement.
    * @returns a new StrikethroughElement.
    */
    function s(config?: IStrikethroughElementConfig): Elements.StrikethroughElement;
    /**
    * The HTML Strong Element (<strong>) gives text strong importance, and is typically displayed in bold [MDN].
    * @param [config] The configuration for the StrongElement.
    * @returns a new StrongElement.
    */
    function strong(config?: IStrongElementConfig): Elements.StrongElement;
    /**
    * The HTML <style> element contains style information for a document, or a part of document. The specific style information is contained inside of this element, usually in the CSS [MDN].
    * @param [config] The configuration for the StyleElement.
    * @returns a new StyleElement.
    */
    function style(config?: IStyleElementConfig): Elements.StyleElement;
    /**
    * The HTML Subscript Element (<sub>) defines a span of text that should be displayed, for typographic reasons, lower, and often smaller, than the main span of text [MDN].
    * @param [config] The configuration for the SubscriptElement.
    * @returns a new SubscriptElement.
    */
    function sub(config?: ISubscriptElementConfig): Elements.SubscriptElement;
    /**
    * The HTML summary element (<summary>) is used as a summary, caption or legend for the content of a <details> element [MDN].
    * @param [config] The configuration for the SummaryElement.
    * @returns a new SummaryElement.
    */
    function summary(config?: ISummaryElementConfig): Elements.SummaryElement;
    /**
    * The HTML Superscript Element (<sup>) defines a span of text that should be displayed, for typographic reasons, higher, and often smaller, than the main span of text [MDN].
    * @param [config] The configuration for the SuperscriptElement.
    * @returns a new SuperscriptElement.
    */
    function sup(config?: ISuperscriptElementConfig): Elements.SuperscriptElement;
    /**
    * The HTML Table Element (<table>) represents data in two dimensions or more [MDN].
    * @param [config] The configuration for the TableElement.
    * @returns a new TableElement.
    */
    function table(config?: ITableElementConfig): Elements.TableElement;
    /**
    * The HTML <caption> Element (or HTML Table Caption Element) represents the title of a table. Though it is always the first descendant of a <table>, its styling, using CSS, may place it elsewhere, relative to the table [MDN].
    * @param [config] The configuration for the TableCaptionElement.
    * @returns a new TableCaptionElement.
    */
    function caption(config?: ITableCaptionElementConfig): Elements.TableCaptionElement;
    /**
    * The HTML <col> Element (or HTML Table Column Element) defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a <colgroup> element [MDN].
    * @param [config] The configuration for the TableColumnElement.
    * @returns a new TableColumnElement.
    */
    function col(config?: ITableColumnElementConfig): Elements.TableColumnElement;
    /**
    * The HTML <colgroup> Element (or HTML Table Column Group Element) defines a group of columns within a table [MDN].
    * @param [config] The configuration for the TableColumnGroupElement.
    * @returns a new TableColumnGroupElement.
    */
    function colgroup(config?: ITableColumnGroupElementConfig): Elements.TableColumnGroupElement;
    /**
    * The Table cell HTML element (<td>) defines a cell of a table that contains data. It participates in the table model [MDN].
    * @param [config] The configuration for the TableDataCellElement.
    * @returns a new TableDataCellElement.
    */
    function td(config?: ITableDataCellElementConfig): Elements.TableDataCellElement;
    /**
    * The HTML Table Header Cell Element (<th>) defines a cell that is a header for a group of cells of a table. The group of cells that the header refers to is defined by the scope and headers attribute [MDN].
    * @param [config] The configuration for the TableHeaderCellElement.
    * @returns a new TableHeaderCellElement.
    */
    function th(config?: ITableHeaderCellElementConfig): Elements.TableHeaderCellElement;
    /**
    * The HTML Table Row Element (<tr>) defines a row of cells in a table. Those can be a mix of <td> and <th> elements [MDN].
    * @param [config] The configuration for the TableRowElement.
    * @returns a new TableRowElement.
    */
    function tr(config?: ITableRowElementConfig): Elements.TableRowElement;
    /**
    * The HTML <textarea> element represents a multi-line plain-text editing control [MDN].
    * @param [config] The configuration for the TextAreaElement.
    * @returns a new TextAreaElement.
    */
    function textarea(config?: ITextAreaElementConfig): Elements.TextAreaElement;
    /**
    * The HTML Title Element (<title>) defines the title of the document, shown in a browser's title bar or on the page's tab. It can only contain text and any contained tags are not interpreted [MDN].
    * @param [config] The configuration for the TitleElement.
    * @returns a new TitleElement.
    */
    function title(config?: ITitleElementConfig): Elements.TitleElement;
    /**
    * The track element is used as a child of the media elementsâ€”<audio> and <video>â€”and does not represent anything on its own. It lets you specify timed text tracks (or time-based data) [MDN].
    * @param [config] The configuration for the TrackElement.
    * @returns a new TrackElement.
    */
    function track(config?: ITrackElementConfig): Elements.TrackElement;
    /**
    * The HTML Underline Element (<u>) renders text with an underline, a line under the baseline of its content [MDN].
    * @param [config] The configuration for the UnderlineElement.
    * @returns a new UnderlineElement.
    */
    function u(config?: IUnderlineElementConfig): Elements.UnderlineElement;
    /**
    * The HTML unordered list element (<ul>) represents an unordered list of items, namely a collection of items that do not have a numerical ordering, and their order in the list is meaningless. Typically, unordered-list items are displayed with a bullet, which can be of several forms, like a dot, a circle or a squared. The bullet style is not defined in the HTML description of the page, but in its associated CSS, using the list-style-type property [MDN].
    * @param [config] The configuration for the UnorderedListElement.
    * @returns a new UnorderedListElement.
    */
    function ul(config?: IUnorderedListElementConfig): Elements.UnorderedListElement;
    /**
    * The HTML Variable Element (<var>) represents a variable in a mathematical expression or a programming context [MDN].
    * @param [config] The configuration for the VariableElement.
    * @returns a new VariableElement.
    */
    function variable(config?: IVariableElementConfig): Elements.VariableElement;
    /**
    * The HTML <video> element is used to embed video content in an HTML or XHTML document [MDN].
    * @param [config] The configuration for the VideoElement.
    * @returns a new VideoElement.
    */
    function video(config?: IVideoElementConfig): Elements.VideoElement;
    /**
    * The Word Break Opportunity (<wbr>) HTML element represents a position within text where the browser may optionally break a line, though its line-breaking rules would not otherwise create a break at that location [MDN].
    * @param [config] The configuration for the WordBreakOpportunityElement.
    * @returns a new WordBreakOpportunityElement.
    */
    function wbr(config?: IWordBreakOpportunityElementConfig): Elements.WordBreakOpportunityElement;
}
declare module Classical.Html {
    /**
    * An event that decorates native DOM events.
    */
    class HtmlElementEvent<TNode extends Elements.HtmlNode, TInformation> implements IEvent<TNode, TInformation> {
        private _node;
        private _registrationMap;
        private _eventType;
        private _eventName;
        private _event;
        node: TNode;
        eventName: string;
        eventType: string;
        private event;
        private registrationMap;
        constructor(eventName: string, eventType: string, node: TNode);
        subscribe(registration: (node: TNode, info: TInformation) => void): void;
        unsubscribe(registration: (node: TNode, info: TInformation) => void): void;
        execute(info: TInformation): void;
        clear(): void;
        count(): number;
    }
}
