//#region Enums
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Classical;
(function (Classical) {
    var Html;
    (function (Html) {
        //#endregion Import
        /**
        * Property values for a.target
        */
        var AnchorTarget = (function () {
            function AnchorTarget() {
            }
            //#region Static Members
            /**
            * Value: '_self'
            * Load the response into the same HTML4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified [MDN].
            */
            AnchorTarget.self = '_self';
            /**
            * Value: '_blank'
            * Load the response into a new unnamed HTML4 window or HTML5 browsing context [MDN].
            */
            AnchorTarget.blank = '_blank';
            /**
            * Value: '_parent'
            * _parent: Load the response into the HTML4 frameset parent of the current frame or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as _self [MDN].
            */
            AnchorTarget.parent = '_parent';
            /**
            * Value: '_top'
            * In HTML4: Load the response into the full, original window, canceling all other frames. In HTML5: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as _self [MDN].
            */
            AnchorTarget.top = '_top';
            return AnchorTarget;
        })();
        Html.AnchorTarget = AnchorTarget;
        /**
        * Property values for area.target
        */
        var AreaTarget = (function () {
            function AreaTarget() {
            }
            //#region Static Members
            /**
            * Value: '_self'
            * Load the response into the same HTML4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified [MDN].
            */
            AreaTarget.self = '_self';
            /**
            * Value: '_blank'
            * Load the response into a new unnamed HTML4 window or HTML5 browsing context [MDN].
            */
            AreaTarget.blank = '_blank';
            /**
            * Value: '_parent'
            * Load the response into the HMTL4 frameset parent of the current frame or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as _self [MDN].
            */
            AreaTarget.parent = '_parent';
            /**
            * Value: '_top'
            * In HTML4: Load the response into the full, original window, canceling all other frames. In HTML5: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as _self [MDN].
            */
            AreaTarget.top = '_top';
            return AreaTarget;
        })();
        Html.AreaTarget = AreaTarget;
        /**
        * Property values for audio.preload
        */
        var AudioPreload = (function () {
            function AudioPreload() {
            }
            //#region Static Members
            /**
            * Value: 'none'
            * Hints that either the author thinks that the user won't need to consult that audio or that the server wants to minimize its traffic; in others terms this hint indicates that the audio should not be cached; [MDN].
            */
            AudioPreload.none = 'none';
            /**
            * Value: 'metadata'
            * Hints that though the author thinks that the user won't need to consult that audio, fetching the metadata (e.g. length) is reasonable; [MDN].
            */
            AudioPreload.metadata = 'metadata';
            /**
            * Value: 'auto'
            * Hints that the user needs have priority; in others terms this hint indicated that, if needed, the whole audio could be downloaded, even if the user is not expected to use it; [MDN].
            */
            AudioPreload.auto = 'auto';
            return AudioPreload;
        })();
        Html.AudioPreload = AudioPreload;
        /**
        * Property values for base.target
        */
        var BaseTarget = (function () {
            function BaseTarget() {
            }
            //#region Static Members
            /**
            * Value: '_self'
            * Load the result into the same HTML4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified [MDN].
            */
            BaseTarget.self = '_self';
            /**
            * Value: '_blank'
            * Load the result into a new unnamed HTML4 window or HTML5 browsing context [MDN].
            */
            BaseTarget.blank = '_blank';
            /**
            * Value: '_parent'
            * Load the result into the HTML4 frameset parent of the current frame or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as _self [MDN].
            */
            BaseTarget.parent = '_parent';
            /**
            * Value: '_top'
            * In HTML4: Load the result into the full, original window, canceling all other frames. In HTML5: Load the result into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as _self [MDN].
            */
            BaseTarget.top = '_top';
            return BaseTarget;
        })();
        Html.BaseTarget = BaseTarget;
        /**
        * Property values for button.type
        */
        var ButtonType = (function () {
            function ButtonType() {
            }
            //#region Static Members
            /**
            * Value: 'submit'
            * The button submits the form data to the server. This is the default if the attribute is not specified, or if the attribute is dynamically changed to an empty or invalid value [MDN].
            */
            ButtonType.submit = 'submit';
            /**
            * Value: 'reset'
            * The button resets all the controls to their initial values [MDN].
            */
            ButtonType.reset = 'reset';
            /**
            * Value: 'button'
            * The button has no default behavior. It can have client-side scripts associated with the element's events, which are triggered when the events occur [MDN].
            */
            ButtonType.button = 'button';
            return ButtonType;
        })();
        Html.ButtonType = ButtonType;
        /**
        * Property values for form.autocomplete
        */
        var FormAutoComplete = (function () {
            function FormAutoComplete() {
            }
            //#region Static Members
            /**
            * Value: 'off'
            * The user must explicitly enter a value into each field for every use, or the document provides its own auto-completion method; the browser does not automatically complete entries [MDN].
            */
            FormAutoComplete.off = 'off';
            /**
            * Value: 'on'
            * The browser can automatically complete values based on values that the user has entered during previous uses of the form [MDN].
            */
            FormAutoComplete.on = 'on';
            return FormAutoComplete;
        })();
        Html.FormAutoComplete = FormAutoComplete;
        /**
        * Property values for form.enctype
        */
        var FormEncodingType = (function () {
            function FormEncodingType() {
            }
            //#region Static Members
            /**
            * Value: 'application/x-www-form-urlencoded'
            * The default value if the attribute is not specified [MDN].
            */
            FormEncodingType.applicationFormUrlEncoded = 'application/x-www-form-urlencoded';
            /**
            * Value: 'multipart/form-data'
            * Use this value if you are using an <input> element with the type attribute set to "file" [MDN].
            */
            FormEncodingType.multipartFormData = 'multipart/form-data';
            /**
            * Value: 'text/plain'
            * Use this value for plain text [MDN].
            */
            FormEncodingType.plainText = 'text/plain';
            return FormEncodingType;
        })();
        Html.FormEncodingType = FormEncodingType;
        /**
        * Property values for form.method
        */
        var FormMethod = (function () {
            function FormMethod() {
            }
            //#region Static Members
            /**
            * Value: 'post'
            * Corresponds to the HTTP POST method ; the data from the form is included in the body of the form and is sent to the server [MDN].
            */
            FormMethod.post = 'post';
            /**
            * Value: 'get'
            * Corresponds to the HTTP GET method; the data from the form are appended to the action attribute URI, with a '?' as a separator, and the resulting URI is sent to the server. Use this method when the form has no side-effects and contains only ASCII characters [MDN].
            */
            FormMethod.get = 'get';
            return FormMethod;
        })();
        Html.FormMethod = FormMethod;
        /**
        * Property values for form.target
        */
        var FormTarget = (function () {
            function FormTarget() {
            }
            //#region Static Members
            /**
            * Value: '_self'
            * Load the response into the same HTML 4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified [MDN].
            */
            FormTarget.self = '_self';
            /**
            * Value: '_blank'
            * Load the response into a new unnamed HTML 4 window or HTML5 browsing context [MDN].
            */
            FormTarget.blank = '_blank';
            /**
            * Value: '_parent'
            * Load the response into the HTML 4 frameset parent of the current frame or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as _self [MDN].
            */
            FormTarget.parent = '_parent';
            /**
            * Value: '_top'
            * HTML 4: Load the response into the full, original window, canceling all other frames. HTML5: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as _self [MDN].
            */
            FormTarget.top = '_top';
            return FormTarget;
        })();
        Html.FormTarget = FormTarget;
        /**
        * Property values for HtmlElement.direction.
        */
        var GlobalDirection = (function () {
            function GlobalDirection() {
            }
            //#region Static Members
            /**
            * Value: 'ltr'.
            * Means left to right and is to be used for languages that are written from the left to the right (like English) [MDN].
            */
            GlobalDirection.leftToRight = 'ltr';
            /**
            * Value: 'rtl'.
            * Means right to left and is to be used for languages that are written from the right to the left (like Arabic) [MDN].
            */
            GlobalDirection.rightToLeft = 'rtl';
            /**
            * Value: 'auto'.
            * Lets the user agent decides. It uses a basic algorithm as it parses the characters inside the element until it finds a character with a strong directionality, then apply that directionality to the whole element [MDN].
            */
            GlobalDirection.auto = 'auto';
            return GlobalDirection;
        })();
        Html.GlobalDirection = GlobalDirection;
        /**
        * Property values for HtmlElement.dropZone.
        */
        var GlobalDropZone = (function () {
            function GlobalDropZone() {
            }
            //#region Static Members
            /**
            * Value: 'copy'.
            * Indicates that dropping will create a copy of the element that was dragged [MDN].
            */
            GlobalDropZone.copy = 'copy';
            /**
            * Value: 'move'.
            * Indicates that the element that was dragged will be moved to this new location [MDN].
            */
            GlobalDropZone.move = 'move';
            /**
            * Value: 'link'.
            * Creates a link to the dragged data. [MDN].
            */
            GlobalDropZone.link = 'link';
            return GlobalDropZone;
        })();
        Html.GlobalDropZone = GlobalDropZone;
        /**
        * Property values for iframe.sandbox
        */
        var InlineFrameSandbox = (function () {
            function InlineFrameSandbox() {
            }
            //#region Static Members
            /**
            * Value: 'allow-same-origin'
            * Allows the content to be treated as being from its normal origin. If this keyword is not used, the embedded content is treated as being from a unique origin [MDN].
            */
            InlineFrameSandbox.allowSameOrigin = 'allow-same-origin';
            /**
            * Value: 'allow-top-navigation'
            * Allows the embedded browsing context to navigate (load) content to the top-level browsing context. If this keyword is not used, this operation is not allowed [MDN].
            */
            InlineFrameSandbox.allowTopNavigation = 'allow-top-navigation';
            /**
            * Value: 'allow-forms'
            * Allows the embedded browsing context to submit forms. If this keyword is not used, this operation is not allowed [MDN].
            */
            InlineFrameSandbox.allowForms = 'allow-forms';
            /**
            * Value: 'allow-scripts'
            * Allows the embedded browsing context to run scripts (but not create pop-up windows). If this keyword is not used, this operation is not allowed [MDN].
            */
            InlineFrameSandbox.allowScripts = 'allow-scripts';
            return InlineFrameSandbox;
        })();
        Html.InlineFrameSandbox = InlineFrameSandbox;
        /**
        * Property values for iframe.scrolling
        */
        var InlineFrameScrolling = (function () {
            function InlineFrameScrolling() {
            }
            //#region Static Members
            /**
            * Value: 'auto'
            * Only when needed [MDN].
            */
            InlineFrameScrolling.auto = 'auto';
            /**
            * Value: 'yes'
            * Always provide a scroll bar [MDN].
            */
            InlineFrameScrolling.yes = 'yes';
            /**
            * Value: 'no'
            * Never provide a scoll bar [MDN].
            */
            InlineFrameScrolling.no = 'no';
            return InlineFrameScrolling;
        })();
        Html.InlineFrameScrolling = InlineFrameScrolling;
        /**
        * Property values for input.accept
        */
        var InputAccept = (function () {
            function InputAccept() {
            }
            //#region Static Members
            /**
            * Value: 'audio/*'
            * audio/* representing sound files HTML5 [MDN].
            */
            InputAccept.audio = 'audio/*';
            /**
            * Value: 'video/*'
            * video/* representing video files HTML5 [MDN].
            */
            InputAccept.video = 'video/*';
            /**
            * Value: 'image/*'
            * image/* representing image files HTML5 [MDN].
            */
            InputAccept.image = 'image/*';
            return InputAccept;
        })();
        Html.InputAccept = InputAccept;
        /**
        * Property values for input.autocomplete
        */
        var InputAutoComplete = (function () {
            function InputAutoComplete() {
            }
            //#region Static Members
            /**
            * Value: 'off'
            * The user must explicitly enter a value into this field for every use, or the document provides its own auto-completion method; the browser does not automatically complete the entry [MDN].
            */
            InputAutoComplete.off = 'off';
            /**
            * Value: 'on'
            * The browser can automatically complete the value based on values that the user has entered during previous uses [MDN].
            */
            InputAutoComplete.on = 'on';
            return InputAutoComplete;
        })();
        Html.InputAutoComplete = InputAutoComplete;
        /**
        * Property values for input.type
        */
        var InputType = (function () {
            function InputType() {
            }
            //#region Static Members
            /**
            * Value: 'button'
            * A push button with no default behavior [MDN].
            */
            InputType.button = 'button';
            /**
            * Value: 'checkbox'
            * A check box. You must use the value attribute to define the value submitted by this item. Use the checked attribute to indicate whether this item is selected. You can also use the indeterminate attribute to indicate that the checkbox is in an indeterminate state (on most platforms, this draws a horizontal line across the checkbox) [MDN].
            */
            InputType.checkbox = 'checkbox';
            /**
            * Value: 'color'
            * HTML5 A control for specifying a color [MDN].
            */
            InputType.color = 'color';
            /**
            * Value: 'email'
            * HTML5 A field for editing an e-mail address. The :valid and :invalid CSS pseudo-classes are applied as appropriate [MDN].
            */
            InputType.email = 'email';
            /**
            * Value: 'hidden'
            * A control that is not displayed, but whose value is submitted to the server [MDN].
            */
            InputType.hidden = 'hidden';
            /**
            * Value: 'image'
            * A graphical submit button. You must use the src attribute to define the source of the image and the alt attribute to define alternative text. You can use the height and width attributes to define the size of the image in pixels [MDN].
            */
            InputType.image = 'image';
            /**
            * Value: 'number'
            * HTML5 A control for entering a floating point number [MDN].
            */
            InputType.number = 'number';
            /**
            * Value: 'password'
            * A single-line text field whose value is obscured. Use the maxlength attribute to specify the maximum length of the value that can be entered [MDN].
            */
            InputType.password = 'password';
            /**
            * Value: 'radio'
            * A radio button. You must use the value attribute to define the value submitted by this item. Use the checked attribute to indicate whether this item is selected by default. Radio buttons that have the same value for the name attribute are in the same "radio button group"; only one radio button in a group can be selected at one time [MDN].
            */
            InputType.radio = 'radio';
            /**
            * Value: 'range'
            * HTML5 A control for entering a number whose exact value is not important. This type control uses the following default values if the corresponding attributes are not specified:
            * min: 0
            * max: 100
            * value: min + (max-min)/2, or min if max is less than min
            * step: 1 [MDN].
            */
            InputType.range = 'range';
            /**
            * Value: 'reset'
            * A button that resets the contents of the form to default values [MDN].
            */
            InputType.reset = 'reset';
            /**
            * Value: 'search'
            * HTML5 A single-line text field for entering search strings; line-breaks are automatically removed from the input value [MDN].
            */
            InputType.search = 'search';
            /**
            * Value: 'submit'
            * A button that submits the form [MDN].
            */
            InputType.submit = 'submit';
            /**
            * Value: 'tel'
            * HTML5 A control for entering a telephone number; line-breaks are automatically removed from the input value, but no other syntax is enforced. You can use attributes such as pattern and maxlength to restrict values entered in the control. The :valid and :invalid CSS pseudo-classes are applied as appropriate [MDN].
            */
            InputType.tel = 'tel';
            /**
            * Value: 'text'
            * A single-line text field; line-breaks are automatically removed from the input value [MDN].
            */
            InputType.text = 'text';
            /**
            * Value: 'url'
            * HTML5 A field for editing a URL. The user may enter a blank or invalid address. Line-breaks are automatically removed from the input value. You can use attributes such as pattern and maxlength to restrict values entered in the control. The :valid and :invalid CSS pseudo-classes are applied as appropriate [MDN].
            */
            InputType.url = 'url';
            return InputType;
        })();
        Html.InputType = InputType;
        /**
        * Property values for li.type
        */
        var ListItemType = (function () {
            function ListItemType() {
            }
            //#region Static Members
            /**
            * Value: 'a'
            * Lowercase letters [MDN].
            */
            ListItemType.lowercase = 'a';
            /**
            * Value: 'A'
            * Uppercase letters [MDN].
            */
            ListItemType.uppercase = 'A';
            /**
            * Value: 'i'
            * Lowercase Roman numerals [MDN].
            */
            ListItemType.lowercaseRomanNumerals = 'i';
            /**
            * Value: 'I'
            * Uppercase Roman numerals [MDN].
            */
            ListItemType.uppercaseRomanNumerals = 'I';
            /**
            * Value: '1'
            * Numbers [MDN].
            */
            ListItemType.numbers = '1';
            return ListItemType;
        })();
        Html.ListItemType = ListItemType;
        /**
        * Used to indicate the kind of menu being declared [MDN].
        */
        var MenuType = (function () {
            function MenuType() {
            }
            //#region Static Members
            /**
            * Value: 'context'
            * the commands of a context menu; the user can only interact with the commands if that context menu is activated [MDN].
            */
            MenuType.context = 'context';
            /**
            * Value: 'toolbar'
            * a list of active commands that the user can immediately interact with [MDN].
            */
            MenuType.toolbar = 'toolbar';
            /**
            * Value: 'list'
            * an unordered list of items (each represented by an <li> element), each of which represents a command that the user can perform or activate, or, if the element has no li element children, flow content describing available commands [MDN].
            */
            MenuType.list = 'list';
            return MenuType;
        })();
        Html.MenuType = MenuType;
        /**
        *
        */
        var MetaHttpEquiv = (function () {
            function MetaHttpEquiv() {
            }
            //#region Static Members
            /**
            * Value: 'command'
            * This pragma specifies the preferred stylesheet to be used on the page.
            * The content attribute must contains the id of a <link> element whose href attribute links to a CSS stylesheet, or the id of a <style> element which contains a CSS stylesheet [MDN].
            */
            MetaHttpEquiv.defaultStyle = 'default-style';
            /**
            * Value: 'refresh'
            * This pragma specifies:
            * the number of seconds until the page should be reloaded, if the content attribute contains only a positive integer number;
            * the number of seconds until the page should be redirected to another, if the content attribute contains a positive integer number followed by the string ';url=' and a valid URL [MDN].
            */
            MetaHttpEquiv.refresh = 'refresh';
            return MetaHttpEquiv;
        })();
        Html.MetaHttpEquiv = MetaHttpEquiv;
        /**
        * Property values for meta.name
        */
        var MetaName = (function () {
            function MetaName() {
            }
            //#region Static Members
            /**
            * Value: 'application-name'
            * application-name, defining the name of the web application running in the webpage;
            *
            * Note:
            * Browsers may use this to identify the application. It is different from the <title> element, which usually consist of the application name but may also contain specific information like the document name or a status;
            * Simple webpages shouldn't define the application-name meta [MDN].
            */
            MetaName.applicationName = 'application-name';
            /**
            * Value: 'author'
            * author, defining, in a free format, the name of the author of the document; [MDN].
            */
            MetaName.author = 'author';
            /**
            * Value: 'description'
            * description, containing a short and accurate summary of the content of the page. Several browsers, among them Firefox and Opera, use this meta as the default description of the page when bookmarked; [MDN].
            */
            MetaName.description = 'description';
            /**
            * Value: 'generator'
            * generator, containing, in a free format, the identifier to the software that generated the page; [MDN].
            */
            MetaName.generator = 'generator';
            /**
            * Value: 'keywords'
            * keywords, containing, as strings separated by commas, relevant words associated with the content of the page [MDN].
            */
            MetaName.keywords = 'keywords';
            return MetaName;
        })();
        Html.MetaName = MetaName;
        /**
        * Property values for textarea.wrap
        */
        var TextAreaWrap = (function () {
            function TextAreaWrap() {
            }
            //#region Static Members
            /**
            * Value: 'cols'
            * hard: The browser automatically inserts line breaks (CR+LF) so that each line has no more than the width of the control; the cols attribute must be specified [MDN].
            */
            TextAreaWrap.cols = 'cols';
            return TextAreaWrap;
        })();
        Html.TextAreaWrap = TextAreaWrap;
        /**
        * Property values for track.kind
        */
        var TrackKind = (function () {
            function TrackKind() {
            }
            //#region Static Members
            /**
            * Value: 'subtitles'
            * Subtitles provide translation of content that cannot be understood by the viewer. For example dialogue or text that is not English in an English language film.
            * Subtitles may contain additional content, usually extra background information. For example the text at the beginning of the Star Wars films, or the date, time, and location of a scene [MDN].
            */
            TrackKind.subtitles = 'subtitles';
            /**
            * Value: 'captions'
            * Closed captions provide a transcription and possibly a translation of audio.
            * It may include important non-verbal information such as music cues or sound effects. It may indicate the cue's source (e.g. music, text, character).
            * Suitable for users who are deaf or when the sound is muted [MDN].
            */
            TrackKind.captions = 'captions';
            /**
            * Value: 'descriptions'
            * Textual description of the video content.
            * Suitable for users who are blind or where the video cannot be seen [MDN].
            */
            TrackKind.descriptions = 'descriptions';
            /**
            * Value: 'chapters'
            * Chapter titles are intended to be used when the user is navigating the media resource [MDN].
            */
            TrackKind.chapters = 'chapters';
            /**
            * Value: 'metadata'
            * Tracks used by scripts. Not visible to the user [MDN].
            */
            TrackKind.metadata = 'metadata';
            return TrackKind;
        })();
        Html.TrackKind = TrackKind;
        /**
        * Property values for ul.type
        */
        var UnorderedListType = (function () {
            function UnorderedListType() {
            }
            //#region Static Members
            /**
            * Value: 'circle'
            * circle, [MDN].
            */
            UnorderedListType.circle = 'circle';
            /**
            * Value: 'disc'
            * disc, [MDN].
            */
            UnorderedListType.disc = 'disc';
            /**
            * Value: 'square'
            * and square [MDN].
            */
            UnorderedListType.square = 'square';
            return UnorderedListType;
        })();
        Html.UnorderedListType = UnorderedListType;
        /**
        * Property values for ul.type
        */
        var VideoPreload = (function () {
            function VideoPreload() {
            }
            //#region Static Members
            /**
            * Value: 'none'
            * none, [MDN].
            */
            VideoPreload.none = 'none';
            /**
            * Value: 'metadata'
            * metadata, [MDN].
            */
            VideoPreload.metadata = 'metadata';
            /**
            * Value: 'auto'
            * auto [MDN].
            */
            VideoPreload.auto = 'auto';
            return VideoPreload;
        })();
        Html.VideoPreload = VideoPreload;
    })(Html = Classical.Html || (Classical.Html = {}));
})(Classical || (Classical = {}));
//#endregion Enums
//#region Interfaces
var Classical;
(function (Classical) {
    var Html;
    (function (Html) {
        var Css = (function () {
            function Css(config) {
                this._config = config;
            }
            return Css;
        })();
        Html.Css = Css;
    })(Html = Classical.Html || (Classical.Html = {}));
})(Classical || (Classical = {}));
//#endregion Configs
//#region Elements
var Classical;
(function (Classical) {
    var Html;
    (function (Html) {
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
                //#endregion requestTimeoutEvent
                //#endregion Properties
                //#region Constructor
                function HtmlElement(name, config) {
                    _super.call(this, name, config);
                }
                Object.defineProperty(HtmlElement.prototype, "classesProperty", {
                    //#endregion Fields
                    //#region Properties
                    //#region classesProperty
                    /**
                    * This attribute is a space-separated list of the classes of the element. Classes allows CSS and Javascript to select and access specific elements via the class selectors or functions like the DOM method document.getElementsByClassName [MDN].
                    */
                    get: function () {
                        if (!this._classesProperty)
                            initializeProperty(this, 'classes', 'className');
                        return this._classesProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "classes", {
                    //#endregion classesProperty
                    //#region classes
                    /**
                    * This attribute is a space-separated list of the classes of the element. Classes allows CSS and Javascript to select and access specific elements via the class selectors or functions like the DOM method document.getElementsByClassName [MDN].
                    */
                    get: function () {
                        return this.classesProperty.value;
                    },
                    set: function (value) {
                        this.classesProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "directionProperty", {
                    //#endregion classes
                    //#region directionProperty
                    /**
                    * Html.GlobalDirection enumerates the values of this property.
                    * This enumerated attribute indicates the directionality of the element's text. It can have the following values: ltr, rtl, auto [MDN].
                    */
                    get: function () {
                        if (!this._directionProperty)
                            initializeProperty(this, 'direction', 'dir');
                        return this._directionProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "direction", {
                    //#endregion directionProperty
                    //#region direction
                    /**
                    * Html.GlobalDirection enumerates the values of this property.
                    * This enumerated attribute indicates the directionality of the element's text. It can have the following values: ltr, rtl, auto [MDN].
                    */
                    get: function () {
                        return this.directionProperty.value;
                    },
                    set: function (value) {
                        this.directionProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "draggableProperty", {
                    //#endregion direction
                    //#region draggableProperty
                    /**
                    * This enumerated attribute indicates whether the element can be dragged, using the Drag and Drop API. The attribute must take a boolean value of either true or false [MDN].
                    */
                    get: function () {
                        if (!this._draggableProperty)
                            initializeProperty(this, 'draggable', 'draggable');
                        return this._draggableProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "draggable", {
                    //#endregion draggableProperty
                    //#region draggable
                    /**
                    * This enumerated attribute indicates whether the element can be dragged, using the Drag and Drop API. The attribute must take a boolean value of either true or false [MDN].
                    */
                    get: function () {
                        return this.draggableProperty.value;
                    },
                    set: function (value) {
                        this.draggableProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "hiddenProperty", {
                    //#endregion draggable
                    //#region hiddenProperty
                    /**
                    * This Boolean attribute indicates that the element is not yet, or is no longer, relevant. For example, it can be used to hide elements of the page that can't be used until the login process has been completed. The browser won't render such elements [MDN].
                    */
                    get: function () {
                        if (!this._hiddenProperty)
                            initializeProperty(this, 'hidden', 'hidden');
                        return this._hiddenProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "hidden", {
                    //#endregion hiddenProperty
                    //#region hidden
                    /**
                    * This Boolean attribute indicates that the element is not yet, or is no longer, relevant. For example, it can be used to hide elements of the page that can't be used until the login process has been completed. The browser won't render such elements [MDN].
                    */
                    get: function () {
                        return this.hiddenProperty.value;
                    },
                    set: function (value) {
                        this.hiddenProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "idProperty", {
                    //#endregion hidden
                    //#region idProperty
                    /**
                    * This attribute defines a unique identifier which must be unique to the entire document. Its purpose is to identify the element when linking, scripting, or styling [MDN].
                    */
                    get: function () {
                        if (!this._idProperty)
                            initializeProperty(this, 'id', 'id');
                        return this._idProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "id", {
                    //#endregion idProperty
                    //#region id
                    /**
                    * This attribute defines a unique identifier which must be unique to the entire document. Its purpose is to identify the element when linking, scripting, or styling [MDN].
                    */
                    get: function () {
                        return this.idProperty.value;
                    },
                    set: function (value) {
                        this.idProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "languageProperty", {
                    //#endregion id
                    //#region languageProperty
                    /**
                    * This attribute participates in defining the language of the element, the language that non-editable elements are written in or the language that editable elements should be written in. The tag contains one single entry value in the format defines in the Tags for Identifying Languages (BCP47) IETF document. If the tag content is the empty string the language is set to unknown; if the tag content is not valid, regarding to BCP47, it is set to invalid [MDN].
                    */
                    get: function () {
                        if (!this._languageProperty)
                            initializeProperty(this, 'language', 'lang');
                        return this._languageProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "language", {
                    //#endregion languageProperty
                    //#region language
                    /**
                    * This attribute participates in defining the language of the element, the language that non-editable elements are written in or the language that editable elements should be written in. The tag contains one single entry value in the format defines in the Tags for Identifying Languages (BCP47) IETF document. If the tag content is the empty string the language is set to unknown; if the tag content is not valid, regarding to BCP47, it is set to invalid [MDN].
                    */
                    get: function () {
                        return this.languageProperty.value;
                    },
                    set: function (value) {
                        this.languageProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "spellCheckProperty", {
                    //#endregion language
                    //#region spellCheckProperty
                    /**
                    * This boolean attribute defines whether the element may be checked for spelling errors. It may have the following values [MDN].
                    */
                    get: function () {
                        if (!this._spellCheckProperty)
                            initializeProperty(this, 'spellCheck', 'spellcheck');
                        return this._spellCheckProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "spellCheck", {
                    //#endregion spellCheckProperty
                    //#region spellCheck
                    /**
                    * This boolean attribute defines whether the element may be checked for spelling errors. It may have the following values [MDN].
                    */
                    get: function () {
                        return this.spellCheckProperty.value;
                    },
                    set: function (value) {
                        this.spellCheckProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "titleProperty", {
                    //#endregion spellCheck
                    //#region titleProperty
                    /**
                    * This attribute contains a text representing advisory information related to the element it belongs too. Such information can typically, but not necessarily, be presented to the user as a tooltip [MDN].
                    */
                    get: function () {
                        if (!this._titleProperty)
                            initializeProperty(this, 'title', 'title');
                        return this._titleProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "title", {
                    //#endregion titleProperty
                    //#region title
                    /**
                    * This attribute contains a text representing advisory information related to the element it belongs too. Such information can typically, but not necessarily, be presented to the user as a tooltip [MDN].
                    */
                    get: function () {
                        return this.titleProperty.value;
                    },
                    set: function (value) {
                        this.titleProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "fullScreenChangeEvent", {
                    //#endregion title
                    //#region fullScreenChangeEvent
                    /**
                    * The fullScreenChangeEvent event is executed when an element was turned to fullscreen mode or back to normal mode [MDN].
                    * Specification: Full Screen
                    * DOM Event Name: fullscreenchange
                    */
                    get: function () {
                        if (!this._fullScreenChangeEvent)
                            this._fullScreenChangeEvent = new Html.HtmlElementEvent('fullscreenchange', 'Event', this);
                        return this._fullScreenChangeEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "fullScreenErrorEvent", {
                    //#endregion fullScreenChangeEvent
                    //#region fullScreenErrorEvent
                    /**
                    * The fullScreenErrorEvent event is executed when it was impossible to switch to fullscreen mode for technical reasons or because the permission was denied [MDN].
                    * Specification: Full Screen
                    * DOM Event Name: fullscreenerror
                    */
                    get: function () {
                        if (!this._fullScreenErrorEvent)
                            this._fullScreenErrorEvent = new Html.HtmlElementEvent('fullscreenerror', 'Event', this);
                        return this._fullScreenErrorEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "animationEndEvent", {
                    //#endregion fullScreenErrorEvent
                    //#region animationEndEvent
                    /**
                    * The animationEndEvent event is executed when a CSS animation has completed [MDN].
                    * Specification: CSS Animations
                    * DOM Event Name: animationend
                    */
                    get: function () {
                        if (!this._animationEndEvent)
                            this._animationEndEvent = new Html.HtmlElementEvent('animationend', 'AnimationEvent', this);
                        return this._animationEndEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "animationIterationEvent", {
                    //#endregion animationEndEvent
                    //#region animationIterationEvent
                    /**
                    * The animationIterationEvent event is executed when a CSS animation is repeated [MDN].
                    * Specification: CSS Animations
                    * DOM Event Name: animationiteration
                    */
                    get: function () {
                        if (!this._animationIterationEvent)
                            this._animationIterationEvent = new Html.HtmlElementEvent('animationiteration', 'AnimationEvent', this);
                        return this._animationIterationEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "animationStartEvent", {
                    //#endregion animationIterationEvent
                    //#region animationStartEvent
                    /**
                    * The animationStartEvent event is executed when a CSS animation has started [MDN].
                    * Specification: CSS Animations
                    * DOM Event Name: animationstart
                    */
                    get: function () {
                        if (!this._animationStartEvent)
                            this._animationStartEvent = new Html.HtmlElementEvent('animationstart', 'AnimationEvent', this);
                        return this._animationStartEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "transitionEndEvent", {
                    //#endregion animationStartEvent
                    //#region transitionEndEvent
                    /**
                    * The transitionEndEvent event is executed when a CSS transition has completed [MDN].
                    * Specification: CSS Transitions
                    * DOM Event Name: transitionend
                    */
                    get: function () {
                        if (!this._transitionEndEvent)
                            this._transitionEndEvent = new Html.HtmlElementEvent('transitionend', 'TransitionEvent', this);
                        return this._transitionEndEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "gamepadConnectedEvent", {
                    //#endregion transitionEndEvent
                    //#region gamepadConnectedEvent
                    /**
                    * The gamepadConnectedEvent event is executed when a gamepad has been connected [MDN].
                    * Specification: Gamepad
                    * DOM Event Name: gamepadconnected
                    */
                    get: function () {
                        if (!this._gamepadConnectedEvent)
                            this._gamepadConnectedEvent = new Html.HtmlElementEvent('gamepadconnected', 'Event', this);
                        return this._gamepadConnectedEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "gamepadDisconnectedEvent", {
                    //#endregion gamepadConnectedEvent
                    //#region gamepadDisconnectedEvent
                    /**
                    * The gamepadDisconnectedEvent event is executed when a gamepad has been disconnected [MDN].
                    * Specification: Gamepad
                    * DOM Event Name: gamepaddisconnected
                    */
                    get: function () {
                        if (!this._gamepadDisconnectedEvent)
                            this._gamepadDisconnectedEvent = new Html.HtmlElementEvent('gamepaddisconnected', 'Event', this);
                        return this._gamepadDisconnectedEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "compositionEndEvent", {
                    //#endregion gamepadDisconnectedEvent
                    //#region compositionEndEvent
                    /**
                    * The compositionEndEvent event is executed when the composition of a passage of text has been completed or canceled [MDN].
                    * Specification: DOM L3
                    * DOM Event Name: compositionend
                    */
                    get: function () {
                        if (!this._compositionEndEvent)
                            this._compositionEndEvent = new Html.HtmlElementEvent('compositionend', 'CompositionEvent', this);
                        return this._compositionEndEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "compositionStartEvent", {
                    //#endregion compositionEndEvent
                    //#region compositionStartEvent
                    /**
                    * The compositionStartEvent event is executed when the composition of a passage of text is prepared (similar to keydown for a keyboard input, but works with other inputs such as speech recognition) [MDN].
                    * Specification: DOM L3
                    * DOM Event Name: compositionstart
                    */
                    get: function () {
                        if (!this._compositionStartEvent)
                            this._compositionStartEvent = new Html.HtmlElementEvent('compositionstart', 'CompositionEvent', this);
                        return this._compositionStartEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "compositionUpdateEvent", {
                    //#endregion compositionStartEvent
                    //#region compositionUpdateEvent
                    /**
                    * The compositionUpdateEvent event is executed when a character is added to a passage of text being composed [MDN].
                    * Specification: DOM L3
                    * DOM Event Name: compositionupdate
                    */
                    get: function () {
                        if (!this._compositionUpdateEvent)
                            this._compositionUpdateEvent = new Html.HtmlElementEvent('compositionupdate', 'CompositionEvent', this);
                        return this._compositionUpdateEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "keyDownEvent", {
                    //#endregion compositionUpdateEvent
                    //#region keyDownEvent
                    /**
                    * The keyDownEvent event is executed when a key is pressed down [MDN].
                    * Specification: DOM L3
                    * DOM Event Name: keydown
                    */
                    get: function () {
                        if (!this._keyDownEvent)
                            this._keyDownEvent = new Html.HtmlElementEvent('keydown', 'KeyboardEvent', this);
                        return this._keyDownEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "keyPressEvent", {
                    //#endregion keyDownEvent
                    //#region keyPressEvent
                    /**
                    * The keyPressEvent event is executed when a key is pressed down and that key normally produces a character value (use input instead) [MDN].
                    * Specification: DOM L3
                    * DOM Event Name: keypress
                    */
                    get: function () {
                        if (!this._keyPressEvent)
                            this._keyPressEvent = new Html.HtmlElementEvent('keypress', 'KeyboardEvent', this);
                        return this._keyPressEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "keyUpEvent", {
                    //#endregion keyPressEvent
                    //#region keyUpEvent
                    /**
                    * The keyUpEvent event is executed when a key is released [MDN].
                    * Specification: DOM L3
                    * DOM Event Name: keyup
                    */
                    get: function () {
                        if (!this._keyUpEvent)
                            this._keyUpEvent = new Html.HtmlElementEvent('keyup', 'KeyboardEvent', this);
                        return this._keyUpEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "clickEvent", {
                    //#endregion keyUpEvent
                    //#region clickEvent
                    /**
                    * The clickEvent event is executed when a pointing device button has been pressed and released on an element [MDN].
                    * Specification: DOM L3
                    * DOM Event Name: click
                    */
                    get: function () {
                        if (!this._clickEvent)
                            this._clickEvent = new Html.HtmlElementEvent('click', 'MouseEvent', this);
                        return this._clickEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "doubleClickEvent", {
                    //#endregion clickEvent
                    //#region doubleClickEvent
                    /**
                    * The doubleClickEvent event is executed when a pointing device button is clicked twice on an element [MDN].
                    * Specification: DOM L3
                    * DOM Event Name: dblclick
                    */
                    get: function () {
                        if (!this._doubleClickEvent)
                            this._doubleClickEvent = new Html.HtmlElementEvent('dblclick', 'MouseEvent', this);
                        return this._doubleClickEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "mouseDownEvent", {
                    //#endregion doubleClickEvent
                    //#region mouseDownEvent
                    /**
                    * The mouseDownEvent event is executed when a pointing device button (usually a mouse) is pressed on an element [MDN].
                    * Specification: DOM L3
                    * DOM Event Name: mousedown
                    */
                    get: function () {
                        if (!this._mouseDownEvent)
                            this._mouseDownEvent = new Html.HtmlElementEvent('mousedown', 'MouseEvent', this);
                        return this._mouseDownEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "mouseEnterEvent", {
                    //#endregion mouseDownEvent
                    //#region mouseEnterEvent
                    /**
                    * The mouseEnterEvent event is executed when a pointing device is moved onto the element that has the listener attached [MDN].
                    * Specification: DOM L3
                    * DOM Event Name: mouseenter
                    */
                    get: function () {
                        if (!this._mouseEnterEvent)
                            this._mouseEnterEvent = new Html.HtmlElementEvent('mouseenter', 'MouseEvent', this);
                        return this._mouseEnterEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "mouseLeaveEvent", {
                    //#endregion mouseEnterEvent
                    //#region mouseLeaveEvent
                    /**
                    * The mouseLeaveEvent event is executed when a pointing device is moved off the element that has the listener attached [MDN].
                    * Specification: DOM L3
                    * DOM Event Name: mouseleave
                    */
                    get: function () {
                        if (!this._mouseLeaveEvent)
                            this._mouseLeaveEvent = new Html.HtmlElementEvent('mouseleave', 'MouseEvent', this);
                        return this._mouseLeaveEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "mouseMoveEvent", {
                    //#endregion mouseLeaveEvent
                    //#region mouseMoveEvent
                    /**
                    * The mouseMoveEvent event is executed when a pointing device is moved over an element [MDN].
                    * Specification: DOM L3
                    * DOM Event Name: mousemove
                    */
                    get: function () {
                        if (!this._mouseMoveEvent)
                            this._mouseMoveEvent = new Html.HtmlElementEvent('mousemove', 'MouseEvent', this);
                        return this._mouseMoveEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "mouseOutEvent", {
                    //#endregion mouseMoveEvent
                    //#region mouseOutEvent
                    /**
                    * The mouseOutEvent event is executed when a pointing device is moved off the element that has the listener attached or off one of its children [MDN].
                    * Specification: DOM L3
                    * DOM Event Name: mouseout
                    */
                    get: function () {
                        if (!this._mouseOutEvent)
                            this._mouseOutEvent = new Html.HtmlElementEvent('mouseout', 'MouseEvent', this);
                        return this._mouseOutEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "mouseOverEvent", {
                    //#endregion mouseOutEvent
                    //#region mouseOverEvent
                    /**
                    * The mouseOverEvent event is executed when a pointing device is moved onto the element that has the listener attached or onto one of its children [MDN].
                    * Specification: DOM L3
                    * DOM Event Name: mouseover
                    */
                    get: function () {
                        if (!this._mouseOverEvent)
                            this._mouseOverEvent = new Html.HtmlElementEvent('mouseover', 'MouseEvent', this);
                        return this._mouseOverEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "mouseUpEvent", {
                    //#endregion mouseOverEvent
                    //#region mouseUpEvent
                    /**
                    * The mouseUpEvent event is executed when a pointing device button is released over an element [MDN].
                    * Specification: DOM L3
                    * DOM Event Name: mouseup
                    */
                    get: function () {
                        if (!this._mouseUpEvent)
                            this._mouseUpEvent = new Html.HtmlElementEvent('mouseup', 'MouseEvent', this);
                        return this._mouseUpEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "wheelEvent", {
                    //#endregion mouseUpEvent
                    //#region wheelEvent
                    /**
                    * The wheelEvent event is executed when a wheel button of a pointing device is rotated in any direction [MDN].
                    * Specification: DOM L3
                    * DOM Event Name: wheel
                    */
                    get: function () {
                        if (!this._wheelEvent)
                            this._wheelEvent = new Html.HtmlElementEvent('wheel', 'WheelEvent', this);
                        return this._wheelEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "contextMenuEvent", {
                    //#endregion wheelEvent
                    //#region contextMenuEvent
                    /**
                    * The contextMenuEvent event is executed when the right button of the mouse is clicked (before the context menu is displayed) [MDN].
                    * Specification: HTML5
                    * DOM Event Name: contextmenu
                    */
                    get: function () {
                        if (!this._contextMenuEvent)
                            this._contextMenuEvent = new Html.HtmlElementEvent('contextmenu', 'MouseEvent', this);
                        return this._contextMenuEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "pointerLockChangeEvent", {
                    //#endregion contextMenuEvent
                    //#region pointerLockChangeEvent
                    /**
                    * The pointerLockChangeEvent event is executed when the pointer was locked or released [MDN].
                    * Specification: Pointer Lock
                    * DOM Event Name: pointerlockchange
                    */
                    get: function () {
                        if (!this._pointerLockChangeEvent)
                            this._pointerLockChangeEvent = new Html.HtmlElementEvent('pointerlockchange', 'Event', this);
                        return this._pointerLockChangeEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "pointerLockErrorEvent", {
                    //#endregion pointerLockChangeEvent
                    //#region pointerLockErrorEvent
                    /**
                    * The pointerLockErrorEvent event is executed when it was impossible to lock the pointer for technical reasons or because the permission was denied [MDN].
                    * Specification: Pointer Lock
                    * DOM Event Name: pointerlockerror
                    */
                    get: function () {
                        if (!this._pointerLockErrorEvent)
                            this._pointerLockErrorEvent = new Html.HtmlElementEvent('pointerlockerror', 'Event', this);
                        return this._pointerLockErrorEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "blurEvent", {
                    //#endregion pointerLockErrorEvent
                    //#region blurEvent
                    /**
                    * The blurEvent event is executed when an element has lost focus (does not bubble) [MDN].
                    * Specification: DOM L3
                    * DOM Event Name: blur
                    */
                    get: function () {
                        if (!this._blurEvent)
                            this._blurEvent = new Html.HtmlElementEvent('blur', 'FocusEvent', this);
                        return this._blurEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "focusEvent", {
                    //#endregion blurEvent
                    //#region focusEvent
                    /**
                    * The focusEvent event is executed when an element has received focus (does not bubble) [MDN].
                    * Specification: DOM L3
                    * DOM Event Name: focus
                    */
                    get: function () {
                        if (!this._focusEvent)
                            this._focusEvent = new Html.HtmlElementEvent('focus', 'FocusEvent', this);
                        return this._focusEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "afterPrintEvent", {
                    //#endregion focusEvent
                    //#region afterPrintEvent
                    /**
                    * The afterPrintEvent event is executed when the associated document has started printing or the print preview has been closed [MDN].
                    * Specification: HTML5
                    * DOM Event Name: afterprint
                    */
                    get: function () {
                        if (!this._afterPrintEvent)
                            this._afterPrintEvent = new Html.HtmlElementEvent('afterprint', 'Event', this);
                        return this._afterPrintEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "beforePrintEvent", {
                    //#endregion afterPrintEvent
                    //#region beforePrintEvent
                    /**
                    * The beforePrintEvent event is executed when the associated document is about to be printed or previewed for printing [MDN].
                    * Specification: HTML5
                    * DOM Event Name: beforeprint
                    */
                    get: function () {
                        if (!this._beforePrintEvent)
                            this._beforePrintEvent = new Html.HtmlElementEvent('beforeprint', 'Event', this);
                        return this._beforePrintEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "dragEndEvent", {
                    //#endregion beforePrintEvent
                    //#region dragEndEvent
                    /**
                    * The dragEndEvent event is executed when a drag operation is being ended (by releasing a mouse button or hitting the escape key) [MDN].
                    * Specification: HTML5
                    * DOM Event Name: dragend
                    */
                    get: function () {
                        if (!this._dragEndEvent)
                            this._dragEndEvent = new Html.HtmlElementEvent('dragend', 'DragEvent', this);
                        return this._dragEndEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "dragEnterEvent", {
                    //#endregion dragEndEvent
                    //#region dragEnterEvent
                    /**
                    * The dragEnterEvent event is executed when a dragged element or text selection enters a valid drop target [MDN].
                    * Specification: HTML5
                    * DOM Event Name: dragenter
                    */
                    get: function () {
                        if (!this._dragEnterEvent)
                            this._dragEnterEvent = new Html.HtmlElementEvent('dragenter', 'DragEvent', this);
                        return this._dragEnterEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "dragEvent", {
                    //#endregion dragEnterEvent
                    //#region dragEvent
                    /**
                    * The dragEvent event is executed when an element or text selection is being dragged (every 350ms) [MDN].
                    * Specification: HTML5
                    * DOM Event Name: drag
                    */
                    get: function () {
                        if (!this._dragEvent)
                            this._dragEvent = new Html.HtmlElementEvent('drag', 'DragEvent', this);
                        return this._dragEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "dragLeaveEvent", {
                    //#endregion dragEvent
                    //#region dragLeaveEvent
                    /**
                    * The dragLeaveEvent event is executed when a dragged element or text selection leaves a valid drop target [MDN].
                    * Specification: HTML5
                    * DOM Event Name: dragleave
                    */
                    get: function () {
                        if (!this._dragLeaveEvent)
                            this._dragLeaveEvent = new Html.HtmlElementEvent('dragleave', 'DragEvent', this);
                        return this._dragLeaveEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "dragOverEvent", {
                    //#endregion dragLeaveEvent
                    //#region dragOverEvent
                    /**
                    * The dragOverEvent event is executed when an element or text selection is being dragged over a valid drop target (every 350ms) [MDN].
                    * Specification: HTML5
                    * DOM Event Name: dragover
                    */
                    get: function () {
                        if (!this._dragOverEvent)
                            this._dragOverEvent = new Html.HtmlElementEvent('dragover', 'DragEvent', this);
                        return this._dragOverEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "dragStartEvent", {
                    //#endregion dragOverEvent
                    //#region dragStartEvent
                    /**
                    * The dragStartEvent event is executed when the user starts dragging an element or text selection [MDN].
                    * Specification: HTML5
                    * DOM Event Name: dragstart
                    */
                    get: function () {
                        if (!this._dragStartEvent)
                            this._dragStartEvent = new Html.HtmlElementEvent('dragstart', 'DragEvent', this);
                        return this._dragStartEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "dropEvent", {
                    //#endregion dragStartEvent
                    //#region dropEvent
                    /**
                    * The dropEvent event is executed when an element is dropped on a valid drop target [MDN].
                    * Specification: HTML5
                    * DOM Event Name: drop
                    */
                    get: function () {
                        if (!this._dropEvent)
                            this._dropEvent = new Html.HtmlElementEvent('drop', 'DragEvent', this);
                        return this._dropEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "loadEvent", {
                    //#endregion dropEvent
                    //#region loadEvent
                    /**
                    * The loadEvent event is executed when a resource and its dependent resources have finished loading [MDN].
                    * Specification: DOM L3
                    * DOM Event Name: load
                    */
                    get: function () {
                        if (!this._loadEvent)
                            this._loadEvent = new Html.HtmlElementEvent('load', 'UIEvent', this);
                        return this._loadEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "resizeEvent", {
                    //#endregion loadEvent
                    //#region resizeEvent
                    /**
                    * The resizeEvent event is executed when the document view has been resized [MDN].
                    * Specification: DOM L3
                    * DOM Event Name: resize
                    */
                    get: function () {
                        if (!this._resizeEvent)
                            this._resizeEvent = new Html.HtmlElementEvent('resize', 'UIEvent', this);
                        return this._resizeEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "scrollEvent", {
                    //#endregion resizeEvent
                    //#region scrollEvent
                    /**
                    * The scrollEvent event is executed when the document view or an element has been scrolled [MDN].
                    * Specification: DOM L3
                    * DOM Event Name: scroll
                    */
                    get: function () {
                        if (!this._scrollEvent)
                            this._scrollEvent = new Html.HtmlElementEvent('scroll', 'UIEvent', this);
                        return this._scrollEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "selectEvent", {
                    //#endregion scrollEvent
                    //#region selectEvent
                    /**
                    * The selectEvent event is executed when some text is being selected [MDN].
                    * Specification: DOM L3
                    * DOM Event Name: select
                    */
                    get: function () {
                        if (!this._selectEvent)
                            this._selectEvent = new Html.HtmlElementEvent('select', 'UIEvent', this);
                        return this._selectEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "offlineBackOnlineEvent", {
                    //#endregion selectEvent
                    //#region offlineBackOnlineEvent
                    /**
                    * The offlineBackOnlineEvent event is executed when the browser has gained access to the network (but particular websites might be unreachable) [MDN].
                    * Specification: HTML5 offline
                    * DOM Event Name: online
                    */
                    get: function () {
                        if (!this._offlineBackOnlineEvent)
                            this._offlineBackOnlineEvent = new Html.HtmlElementEvent('online', 'Event', this);
                        return this._offlineBackOnlineEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "offlineEvent", {
                    //#endregion offlineBackOnlineEvent
                    //#region offlineEvent
                    /**
                    * The offlineEvent event is executed when the browser has lost access to the network [MDN].
                    * Specification: HTML5 offline
                    * DOM Event Name: offline
                    */
                    get: function () {
                        if (!this._offlineEvent)
                            this._offlineEvent = new Html.HtmlElementEvent('offline', 'Event', this);
                        return this._offlineEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "connectionCheckingEvent", {
                    //#endregion offlineEvent
                    //#region connectionCheckingEvent
                    /**
                    * The connectionCheckingEvent event is executed when the user agent is checking for an update, or attempting to download the cache manifest for the first time [MDN].
                    * Specification: Offline
                    * DOM Event Name: checking
                    */
                    get: function () {
                        if (!this._connectionCheckingEvent)
                            this._connectionCheckingEvent = new Html.HtmlElementEvent('checking', 'Event', this);
                        return this._connectionCheckingEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "connectionDownloadingEvent", {
                    //#endregion connectionCheckingEvent
                    //#region connectionDownloadingEvent
                    /**
                    * The connectionDownloadingEvent event is executed when the user agent has found an update and is fetching it, or is downloading the resources listed by the cache manifest for the first time [MDN].
                    * Specification: Offline
                    * DOM Event Name: downloading
                    */
                    get: function () {
                        if (!this._connectionDownloadingEvent)
                            this._connectionDownloadingEvent = new Html.HtmlElementEvent('downloading', 'Event', this);
                        return this._connectionDownloadingEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "connectionErrorEvent", {
                    //#endregion connectionDownloadingEvent
                    //#region connectionErrorEvent
                    /**
                    * The connectionErrorEvent event is executed when an error occurred while downloading the cache manifest or updating the content of the application [MDN].
                    * Specification: Offline
                    * DOM Event Name: error
                    */
                    get: function () {
                        if (!this._connectionErrorEvent)
                            this._connectionErrorEvent = new Html.HtmlElementEvent('error', 'Event', this);
                        return this._connectionErrorEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "connectionNoUpdateEvent", {
                    //#endregion connectionErrorEvent
                    //#region connectionNoUpdateEvent
                    /**
                    * The connectionNoUpdateEvent event is executed when the manifest hadn't changed [MDN].
                    * Specification: Offline
                    * DOM Event Name: noupdate
                    */
                    get: function () {
                        if (!this._connectionNoUpdateEvent)
                            this._connectionNoUpdateEvent = new Html.HtmlElementEvent('noupdate', 'Event', this);
                        return this._connectionNoUpdateEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "connectionObsoleteEvent", {
                    //#endregion connectionNoUpdateEvent
                    //#region connectionObsoleteEvent
                    /**
                    * The connectionObsoleteEvent event is executed when the manifest was found to have become a 404 or 410 page, so the application cache is being deleted [MDN].
                    * Specification: Offline
                    * DOM Event Name: obsolete
                    */
                    get: function () {
                        if (!this._connectionObsoleteEvent)
                            this._connectionObsoleteEvent = new Html.HtmlElementEvent('obsolete', 'Event', this);
                        return this._connectionObsoleteEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "connectionUpdateReadyEvent", {
                    //#endregion connectionObsoleteEvent
                    //#region connectionUpdateReadyEvent
                    /**
                    * The connectionUpdateReadyEvent event is executed when the resources listed in the manifest have been newly redownloaded, and the script can use swapCache() to switch to the new cache [MDN].
                    * Specification: Offline
                    * DOM Event Name: updateready
                    */
                    get: function () {
                        if (!this._connectionUpdateReadyEvent)
                            this._connectionUpdateReadyEvent = new Html.HtmlElementEvent('updateready', 'Event', this);
                        return this._connectionUpdateReadyEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "connectionCachedEvent", {
                    //#endregion connectionUpdateReadyEvent
                    //#region connectionCachedEvent
                    /**
                    * The connectionCachedEvent event is executed when the resources listed in the manifest have been downloaded, and the application is now cached [MDN].
                    * Specification: Offline
                    * DOM Event Name: cached
                    */
                    get: function () {
                        if (!this._connectionCachedEvent)
                            this._connectionCachedEvent = new Html.HtmlElementEvent('cached', 'Event', this);
                        return this._connectionCachedEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "svgAbortEvent", {
                    //#endregion connectionCachedEvent
                    //#region svgAbortEvent
                    /**
                    * The svgAbortEvent event is executed when page loading has been stopped before the SVG was loaded [MDN].
                    * Specification: SVG
                    * DOM Event Name: SVGAbort
                    */
                    get: function () {
                        if (!this._svgAbortEvent)
                            this._svgAbortEvent = new Html.HtmlElementEvent('SVGAbort', 'Event', this);
                        return this._svgAbortEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "svgBeginEvent", {
                    //#endregion svgAbortEvent
                    //#region svgBeginEvent
                    /**
                    * The svgBeginEvent event is executed when a SMIL animation element begins [MDN].
                    * Specification: SVG
                    * DOM Event Name: beginEvent
                    */
                    get: function () {
                        if (!this._svgBeginEvent)
                            this._svgBeginEvent = new Html.HtmlElementEvent('beginEvent', 'Event', this);
                        return this._svgBeginEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "svgEndEvent", {
                    //#endregion svgBeginEvent
                    //#region svgEndEvent
                    /**
                    * The svgEndEvent event is executed when a SMIL animation element ends [MDN].
                    * Specification: SVG
                    * DOM Event Name: endEvent
                    */
                    get: function () {
                        if (!this._svgEndEvent)
                            this._svgEndEvent = new Html.HtmlElementEvent('endEvent', 'Event', this);
                        return this._svgEndEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "svgErrorEvent", {
                    //#endregion svgEndEvent
                    //#region svgErrorEvent
                    /**
                    * The svgErrorEvent event is executed when an error has occurred before the SVG was loaded [MDN].
                    * Specification: SVG
                    * DOM Event Name: SVGError
                    */
                    get: function () {
                        if (!this._svgErrorEvent)
                            this._svgErrorEvent = new Html.HtmlElementEvent('SVGError', 'Event', this);
                        return this._svgErrorEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "svgLoadEvent", {
                    //#endregion svgErrorEvent
                    //#region svgLoadEvent
                    /**
                    * The svgLoadEvent event is executed when an SVG document has been loaded and parsed [MDN].
                    * Specification: SVG
                    * DOM Event Name: SVGLoad
                    */
                    get: function () {
                        if (!this._svgLoadEvent)
                            this._svgLoadEvent = new Html.HtmlElementEvent('SVGLoad', 'Event', this);
                        return this._svgLoadEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "svgRepeatEvent", {
                    //#endregion svgLoadEvent
                    //#region svgRepeatEvent
                    /**
                    * The svgRepeatEvent event is executed when a SMIL animation element is repeated [MDN].
                    * Specification: SVG
                    * DOM Event Name: repeatEvent
                    */
                    get: function () {
                        if (!this._svgRepeatEvent)
                            this._svgRepeatEvent = new Html.HtmlElementEvent('repeatEvent', 'Event', this);
                        return this._svgRepeatEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "svgResizeEvent", {
                    //#endregion svgRepeatEvent
                    //#region svgResizeEvent
                    /**
                    * The svgResizeEvent event is executed when an SVG document is being resized [MDN].
                    * Specification: SVG
                    * DOM Event Name: SVGResize
                    */
                    get: function () {
                        if (!this._svgResizeEvent)
                            this._svgResizeEvent = new Html.HtmlElementEvent('SVGResize', 'Event', this);
                        return this._svgResizeEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "svgScrollEvent", {
                    //#endregion svgResizeEvent
                    //#region svgScrollEvent
                    /**
                    * The svgScrollEvent event is executed when an SVG document is being scrolled [MDN].
                    * Specification: SVG
                    * DOM Event Name: SVGScroll
                    */
                    get: function () {
                        if (!this._svgScrollEvent)
                            this._svgScrollEvent = new Html.HtmlElementEvent('SVGScroll', 'Event', this);
                        return this._svgScrollEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "svgUnloadEvent", {
                    //#endregion svgScrollEvent
                    //#region svgUnloadEvent
                    /**
                    * The svgUnloadEvent event is executed when an SVG document has been removed from a window or frame [MDN].
                    * Specification: SVG
                    * DOM Event Name: SVGUnload
                    */
                    get: function () {
                        if (!this._svgUnloadEvent)
                            this._svgUnloadEvent = new Html.HtmlElementEvent('SVGUnload', 'Event', this);
                        return this._svgUnloadEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "svgZoomEvent", {
                    //#endregion svgUnloadEvent
                    //#region svgZoomEvent
                    /**
                    * The svgZoomEvent event is executed when an SVG document is being zoomed [MDN].
                    * Specification: SVG
                    * DOM Event Name: SVGZoom
                    */
                    get: function () {
                        if (!this._svgZoomEvent)
                            this._svgZoomEvent = new Html.HtmlElementEvent('SVGZoom', 'SVGZoomEvent', this);
                        return this._svgZoomEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "webSocketErrorEvent", {
                    //#endregion svgZoomEvent
                    //#region webSocketErrorEvent
                    /**
                    * The webSocketErrorEvent event is executed when a WebSocket connection has been closed with prejudice (some data couldn't be sent for example) [MDN].
                    * Specification: WebSocket
                    * DOM Event Name: error
                    */
                    get: function () {
                        if (!this._webSocketErrorEvent)
                            this._webSocketErrorEvent = new Html.HtmlElementEvent('error', 'Event', this);
                        return this._webSocketErrorEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "pageHideEvent", {
                    //#endregion webSocketErrorEvent
                    //#region pageHideEvent
                    /**
                    * The pageHideEvent event is executed when a session history entry is being traversed from [MDN].
                    * Specification: HTML5
                    * DOM Event Name: pagehide
                    */
                    get: function () {
                        if (!this._pageHideEvent)
                            this._pageHideEvent = new Html.HtmlElementEvent('pagehide', 'PageTransitionEvent', this);
                        return this._pageHideEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "pageShowEvent", {
                    //#endregion pageHideEvent
                    //#region pageShowEvent
                    /**
                    * The pageShowEvent event is executed when a session history entry is being traversed to [MDN].
                    * Specification: HTML5
                    * DOM Event Name: pageshow
                    */
                    get: function () {
                        if (!this._pageShowEvent)
                            this._pageShowEvent = new Html.HtmlElementEvent('pageshow', 'PageTransitionEvent', this);
                        return this._pageShowEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "showEvent", {
                    //#endregion pageShowEvent
                    //#region showEvent
                    /**
                    * The showEvent event is executed when a contextmenu event was fired on/bubbled to an element that has a contextmenu attribute [MDN].
                    * Specification: HTML5
                    * DOM Event Name: show
                    */
                    get: function () {
                        if (!this._showEvent)
                            this._showEvent = new Html.HtmlElementEvent('show', 'MouseEvent', this);
                        return this._showEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "contentLoadedEvent", {
                    //#endregion showEvent
                    //#region contentLoadedEvent
                    /**
                    * The contentLoadedEvent event is executed when the document has finished loading (but not its dependent resources) [MDN].
                    * Specification: HTML5
                    * DOM Event Name: DOMContentLoaded
                    */
                    get: function () {
                        if (!this._contentLoadedEvent)
                            this._contentLoadedEvent = new Html.HtmlElementEvent('DOMContentLoaded', 'Event', this);
                        return this._contentLoadedEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "hashChangeEvent", {
                    //#endregion contentLoadedEvent
                    //#region hashChangeEvent
                    /**
                    * The hashChangeEvent event is executed when the fragment identifier of the URL has changed (the part of the URL after the #) [MDN].
                    * Specification: HTML5
                    * DOM Event Name: hashchange
                    */
                    get: function () {
                        if (!this._hashChangeEvent)
                            this._hashChangeEvent = new Html.HtmlElementEvent('hashchange', 'Event', this);
                        return this._hashChangeEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "popStateEvent", {
                    //#endregion hashChangeEvent
                    //#region popStateEvent
                    /**
                    * The popStateEvent event is executed when a session history entry is being navigated to (in certain cases) [MDN].
                    * Specification: HTML5
                    * DOM Event Name: popstate
                    */
                    get: function () {
                        if (!this._popStateEvent)
                            this._popStateEvent = new Html.HtmlElementEvent('popstate', 'PopStateEvent', this);
                        return this._popStateEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "invalidEvent", {
                    //#endregion popStateEvent
                    //#region invalidEvent
                    /**
                    * The invalidEvent event is executed when a submittable element has been checked and doesn't satisfy its constraints [MDN].
                    * Specification: HTML5
                    * DOM Event Name: invalid
                    */
                    get: function () {
                        if (!this._invalidEvent)
                            this._invalidEvent = new Html.HtmlElementEvent('invalid', 'Event', this);
                        return this._invalidEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "beforeUnloadEvent", {
                    //#endregion invalidEvent
                    //#region beforeUnloadEvent
                    /**
                    * The beforeUnloadEvent event is executed when   [MDN].
                    * Specification: HTML5
                    * DOM Event Name: beforeunload
                    */
                    get: function () {
                        if (!this._beforeUnloadEvent)
                            this._beforeUnloadEvent = new Html.HtmlElementEvent('beforeunload', 'BeforeUnloadEvent', this);
                        return this._beforeUnloadEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "indexedDatabaseErrorEvent", {
                    //#endregion beforeUnloadEvent
                    //#region indexedDatabaseErrorEvent
                    /**
                    * The indexedDatabaseErrorEvent event is executed when a request caused an error and failed [MDN].
                    * Specification: IndexedDB
                    * DOM Event Name: error
                    */
                    get: function () {
                        if (!this._indexedDatabaseErrorEvent)
                            this._indexedDatabaseErrorEvent = new Html.HtmlElementEvent('error', 'Event', this);
                        return this._indexedDatabaseErrorEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "visibilityChangeEvent", {
                    //#endregion indexedDatabaseErrorEvent
                    //#region visibilityChangeEvent
                    /**
                    * The visibilityChangeEvent event is executed when the content of a tab has become visible or has been hidden [MDN].
                    * Specification: Page visibility
                    * DOM Event Name: visibilitychange
                    */
                    get: function () {
                        if (!this._visibilityChangeEvent)
                            this._visibilityChangeEvent = new Html.HtmlElementEvent('visibilitychange', 'Event', this);
                        return this._visibilityChangeEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "requestLoadStartEvent", {
                    //#endregion visibilityChangeEvent
                    //#region requestLoadStartEvent
                    /**
                    * The requestLoadStartEvent event is executed when progress has begun [MDN].
                    * Specifications: Progress , XMLHttpRequest
                    * DOM Event Name: loadstart
                    */
                    get: function () {
                        if (!this._requestLoadStartEvent)
                            this._requestLoadStartEvent = new Html.HtmlElementEvent('loadstart', 'ProgressEvent', this);
                        return this._requestLoadStartEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "serverErrorEvent", {
                    //#endregion requestLoadStartEvent
                    //#region serverErrorEvent
                    /**
                    * The serverErrorEvent event is executed when an event source connection has been failed [MDN].
                    * Specification: Server Sent Events
                    * DOM Event Name: error
                    */
                    get: function () {
                        if (!this._serverErrorEvent)
                            this._serverErrorEvent = new Html.HtmlElementEvent('error', 'Event', this);
                        return this._serverErrorEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "webStorageEvent", {
                    //#endregion serverErrorEvent
                    //#region webStorageEvent
                    /**
                    * The webStorageEvent event is executed when a storage area (localStorage or sessionStorage) has changed [MDN].
                    * Specification: Web Storage
                    * DOM Event Name: storage
                    */
                    get: function () {
                        if (!this._webStorageEvent)
                            this._webStorageEvent = new Html.HtmlElementEvent('storage', 'StorageEvent', this);
                        return this._webStorageEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "requestReadyStateChangeEvent", {
                    //#endregion webStorageEvent
                    //#region requestReadyStateChangeEvent
                    /**
                    * The requestReadyStateChangeEvent event is executed when the readyState attribute of a document has changed [MDN].
                    * Specification: XMLHttpRequest
                    * DOM Event Name: readystatechange
                    */
                    get: function () {
                        if (!this._requestReadyStateChangeEvent)
                            this._requestReadyStateChangeEvent = new Html.HtmlElementEvent('readystatechange', 'Event', this);
                        return this._requestReadyStateChangeEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "requestTimeoutEvent", {
                    //#endregion requestReadyStateChangeEvent
                    //#region requestTimeoutEvent
                    /**
                    * The requestTimeoutEvent event is executed when   [MDN].
                    * Specification: XMLHttpRequest
                    * DOM Event Name: timeout
                    */
                    get: function () {
                        if (!this._requestTimeoutEvent)
                            this._requestTimeoutEvent = new Html.HtmlElementEvent('timeout', 'ProgressEvent', this);
                        return this._requestTimeoutEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
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
                    setPropertyFromConfig(this, config, 'classes', true);
                    setPropertyFromConfig(this, config, 'direction', true);
                    setPropertyFromConfig(this, config, 'draggable', true);
                    setPropertyFromConfig(this, config, 'hidden', true);
                    setPropertyFromConfig(this, config, 'id', true);
                    setPropertyFromConfig(this, config, 'language', true);
                    setPropertyFromConfig(this, config, 'spellCheck', true);
                    setPropertyFromConfig(this, config, 'title', true);
                    if (config.fullScreenChangeHandler)
                        this.fullScreenChangeEvent.subscribe(config.fullScreenChangeHandler);
                    if (config.fullScreenErrorHandler)
                        this.fullScreenErrorEvent.subscribe(config.fullScreenErrorHandler);
                    if (config.animationEndHandler)
                        this.animationEndEvent.subscribe(config.animationEndHandler);
                    if (config.animationIterationHandler)
                        this.animationIterationEvent.subscribe(config.animationIterationHandler);
                    if (config.animationStartHandler)
                        this.animationStartEvent.subscribe(config.animationStartHandler);
                    if (config.transitionEndHandler)
                        this.transitionEndEvent.subscribe(config.transitionEndHandler);
                    if (config.gamepadConnectedHandler)
                        this.gamepadConnectedEvent.subscribe(config.gamepadConnectedHandler);
                    if (config.gamepadDisconnectedHandler)
                        this.gamepadDisconnectedEvent.subscribe(config.gamepadDisconnectedHandler);
                    if (config.compositionEndHandler)
                        this.compositionEndEvent.subscribe(config.compositionEndHandler);
                    if (config.compositionStartHandler)
                        this.compositionStartEvent.subscribe(config.compositionStartHandler);
                    if (config.compositionUpdateHandler)
                        this.compositionUpdateEvent.subscribe(config.compositionUpdateHandler);
                    if (config.keyDownHandler)
                        this.keyDownEvent.subscribe(config.keyDownHandler);
                    if (config.keyPressHandler)
                        this.keyPressEvent.subscribe(config.keyPressHandler);
                    if (config.keyUpHandler)
                        this.keyUpEvent.subscribe(config.keyUpHandler);
                    if (config.clickHandler)
                        this.clickEvent.subscribe(config.clickHandler);
                    if (config.doubleClickHandler)
                        this.doubleClickEvent.subscribe(config.doubleClickHandler);
                    if (config.mouseDownHandler)
                        this.mouseDownEvent.subscribe(config.mouseDownHandler);
                    if (config.mouseEnterHandler)
                        this.mouseEnterEvent.subscribe(config.mouseEnterHandler);
                    if (config.mouseLeaveHandler)
                        this.mouseLeaveEvent.subscribe(config.mouseLeaveHandler);
                    if (config.mouseMoveHandler)
                        this.mouseMoveEvent.subscribe(config.mouseMoveHandler);
                    if (config.mouseOutHandler)
                        this.mouseOutEvent.subscribe(config.mouseOutHandler);
                    if (config.mouseOverHandler)
                        this.mouseOverEvent.subscribe(config.mouseOverHandler);
                    if (config.mouseUpHandler)
                        this.mouseUpEvent.subscribe(config.mouseUpHandler);
                    if (config.wheelHandler)
                        this.wheelEvent.subscribe(config.wheelHandler);
                    if (config.contextMenuHandler)
                        this.contextMenuEvent.subscribe(config.contextMenuHandler);
                    if (config.pointerLockChangeHandler)
                        this.pointerLockChangeEvent.subscribe(config.pointerLockChangeHandler);
                    if (config.pointerLockErrorHandler)
                        this.pointerLockErrorEvent.subscribe(config.pointerLockErrorHandler);
                    if (config.blurHandler)
                        this.blurEvent.subscribe(config.blurHandler);
                    if (config.focusHandler)
                        this.focusEvent.subscribe(config.focusHandler);
                    if (config.afterPrintHandler)
                        this.afterPrintEvent.subscribe(config.afterPrintHandler);
                    if (config.beforePrintHandler)
                        this.beforePrintEvent.subscribe(config.beforePrintHandler);
                    if (config.dragEndHandler)
                        this.dragEndEvent.subscribe(config.dragEndHandler);
                    if (config.dragEnterHandler)
                        this.dragEnterEvent.subscribe(config.dragEnterHandler);
                    if (config.dragHandler)
                        this.dragEvent.subscribe(config.dragHandler);
                    if (config.dragLeaveHandler)
                        this.dragLeaveEvent.subscribe(config.dragLeaveHandler);
                    if (config.dragOverHandler)
                        this.dragOverEvent.subscribe(config.dragOverHandler);
                    if (config.dragStartHandler)
                        this.dragStartEvent.subscribe(config.dragStartHandler);
                    if (config.dropHandler)
                        this.dropEvent.subscribe(config.dropHandler);
                    if (config.loadHandler)
                        this.loadEvent.subscribe(config.loadHandler);
                    if (config.resizeHandler)
                        this.resizeEvent.subscribe(config.resizeHandler);
                    if (config.scrollHandler)
                        this.scrollEvent.subscribe(config.scrollHandler);
                    if (config.selectHandler)
                        this.selectEvent.subscribe(config.selectHandler);
                    if (config.offlineBackOnlineHandler)
                        this.offlineBackOnlineEvent.subscribe(config.offlineBackOnlineHandler);
                    if (config.offlineHandler)
                        this.offlineEvent.subscribe(config.offlineHandler);
                    if (config.connectionCheckingHandler)
                        this.connectionCheckingEvent.subscribe(config.connectionCheckingHandler);
                    if (config.connectionDownloadingHandler)
                        this.connectionDownloadingEvent.subscribe(config.connectionDownloadingHandler);
                    if (config.connectionErrorHandler)
                        this.connectionErrorEvent.subscribe(config.connectionErrorHandler);
                    if (config.connectionNoUpdateHandler)
                        this.connectionNoUpdateEvent.subscribe(config.connectionNoUpdateHandler);
                    if (config.connectionObsoleteHandler)
                        this.connectionObsoleteEvent.subscribe(config.connectionObsoleteHandler);
                    if (config.connectionUpdateReadyHandler)
                        this.connectionUpdateReadyEvent.subscribe(config.connectionUpdateReadyHandler);
                    if (config.connectionCachedHandler)
                        this.connectionCachedEvent.subscribe(config.connectionCachedHandler);
                    if (config.svgAbortHandler)
                        this.svgAbortEvent.subscribe(config.svgAbortHandler);
                    if (config.svgBeginHandler)
                        this.svgBeginEvent.subscribe(config.svgBeginHandler);
                    if (config.svgEndHandler)
                        this.svgEndEvent.subscribe(config.svgEndHandler);
                    if (config.svgErrorHandler)
                        this.svgErrorEvent.subscribe(config.svgErrorHandler);
                    if (config.svgLoadHandler)
                        this.svgLoadEvent.subscribe(config.svgLoadHandler);
                    if (config.svgRepeatHandler)
                        this.svgRepeatEvent.subscribe(config.svgRepeatHandler);
                    if (config.svgResizeHandler)
                        this.svgResizeEvent.subscribe(config.svgResizeHandler);
                    if (config.svgScrollHandler)
                        this.svgScrollEvent.subscribe(config.svgScrollHandler);
                    if (config.svgUnloadHandler)
                        this.svgUnloadEvent.subscribe(config.svgUnloadHandler);
                    if (config.svgZoomHandler)
                        this.svgZoomEvent.subscribe(config.svgZoomHandler);
                    if (config.webSocketErrorHandler)
                        this.webSocketErrorEvent.subscribe(config.webSocketErrorHandler);
                    if (config.pageHideHandler)
                        this.pageHideEvent.subscribe(config.pageHideHandler);
                    if (config.pageShowHandler)
                        this.pageShowEvent.subscribe(config.pageShowHandler);
                    if (config.showHandler)
                        this.showEvent.subscribe(config.showHandler);
                    if (config.contentLoadedHandler)
                        this.contentLoadedEvent.subscribe(config.contentLoadedHandler);
                    if (config.hashChangeHandler)
                        this.hashChangeEvent.subscribe(config.hashChangeHandler);
                    if (config.popStateHandler)
                        this.popStateEvent.subscribe(config.popStateHandler);
                    if (config.invalidHandler)
                        this.invalidEvent.subscribe(config.invalidHandler);
                    if (config.beforeUnloadHandler)
                        this.beforeUnloadEvent.subscribe(config.beforeUnloadHandler);
                    if (config.indexedDatabaseErrorHandler)
                        this.indexedDatabaseErrorEvent.subscribe(config.indexedDatabaseErrorHandler);
                    if (config.visibilityChangeHandler)
                        this.visibilityChangeEvent.subscribe(config.visibilityChangeHandler);
                    if (config.requestLoadStartHandler)
                        this.requestLoadStartEvent.subscribe(config.requestLoadStartHandler);
                    if (config.serverErrorHandler)
                        this.serverErrorEvent.subscribe(config.serverErrorHandler);
                    if (config.webStorageHandler)
                        this.webStorageEvent.subscribe(config.webStorageHandler);
                    if (config.requestReadyStateChangeHandler)
                        this.requestReadyStateChangeEvent.subscribe(config.requestReadyStateChangeHandler);
                    if (config.requestTimeoutHandler)
                        this.requestTimeoutEvent.subscribe(config.requestTimeoutHandler);
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
                //#endregion pasteEvent
                //#endregion Properties
                //#region Constructor
                function HtmlElementContainer(name, config) {
                    _super.call(this, name, config);
                }
                Object.defineProperty(HtmlElementContainer.prototype, "children", {
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
                Object.defineProperty(HtmlElementContainer.prototype, "copyEvent", {
                    //#region copyEvent
                    /**
                    * The copyEvent event is executed when the text selection has been added to the clipboard [MDN].
                    * Specification: Clipboard
                    * DOM Event Name: copy
                    */
                    get: function () {
                        if (!this._copyEvent)
                            this._copyEvent = new Html.HtmlElementEvent('copy', 'Event', this);
                        return this._copyEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElementContainer.prototype, "cutEvent", {
                    //#endregion copyEvent
                    //#region cutEvent
                    /**
                    * The cutEvent event is executed when the text selection has been removed from the document and added to the clipboard [MDN].
                    * Specification: Clipboard
                    * DOM Event Name: cut
                    */
                    get: function () {
                        if (!this._cutEvent)
                            this._cutEvent = new Html.HtmlElementEvent('cut', 'Event', this);
                        return this._cutEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElementContainer.prototype, "pasteEvent", {
                    //#endregion cutEvent
                    //#region pasteEvent
                    /**
                    * The pasteEvent event is executed when data has been transfered from the system clipboard to the document [MDN].
                    * Specification: Clipboard
                    * DOM Event Name: paste
                    */
                    get: function () {
                        if (!this._pasteEvent)
                            this._pasteEvent = new Html.HtmlElementEvent('paste', 'Event', this);
                        return this._pasteEvent;
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
                        children.unshift(Html.text(textBinder));
                    if (isTextDefined)
                        children.unshift(Html.text(text));
                    config.children = children;
                    config.childrenBinder = childrenBinder;
                    setChildrenPropertyFromConfig(this, config);
                    if (config.copyHandler)
                        this.copyEvent.subscribe(config.copyHandler);
                    if (config.cutHandler)
                        this.cutEvent.subscribe(config.cutHandler);
                    if (config.pasteHandler)
                        this.pasteEvent.subscribe(config.pasteHandler);
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
            //#region AbbreviationElement
            /**
            * The HTML <abbr> Element (or HTML Abbreviation Element) represents an abbreviation and optionally provides a full description for it. If present, the title attribute must contain this full description and nothing else [MDN].
            */
            var AbbreviationElement = (function (_super) {
                __extends(AbbreviationElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new AbbreviationElement'.
                */
                function AbbreviationElement(config) {
                    _super.call(this, 'abbr', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                AbbreviationElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return AbbreviationElement;
            })(HtmlElementContainer);
            Elements.AbbreviationElement = AbbreviationElement;
            //#endregion AbbreviationElement
            //#region AddressElement
            /**
            * The HTML <address> Element may be used by authors to supply contact information for its nearest <article> or <body> ancestor; in the latter case, it applies to the whole document [MDN].
            */
            var AddressElement = (function (_super) {
                __extends(AddressElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new AddressElement'.
                */
                function AddressElement(config) {
                    _super.call(this, 'address', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                AddressElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return AddressElement;
            })(HtmlElementContainer);
            Elements.AddressElement = AddressElement;
            //#endregion AddressElement
            //#region AnchorElement
            /**
            * The HTML <a> Element (or the HTML Anchor Element) defines a hyperlink, the named target destination for a hyperlink, or both [MDN].
            */
            var AnchorElement = (function (_super) {
                __extends(AnchorElement, _super);
                //#endregion type
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new AnchorElement'.
                */
                function AnchorElement(config) {
                    _super.call(this, 'a', config);
                }
                Object.defineProperty(AnchorElement.prototype, "hrefProperty", {
                    //#endregion Fields
                    //#region Properties
                    //#region hrefProperty
                    /**
                    * This is the single required attribute for anchors defining a hypertext source link. It indicates the link target, either a URL or a URL fragment. A URL fragment is a name preceded by a hash mark (#), which specifies an internal target location (an ID) within the current document. URLs are not restricted to Web (HTTP)-based documents. URLs might use any protocol supported by the browser. For example, file, ftp, and mailto work in most user agents.
                    * Note: You can use the special fragment "top" to create a link back to the top of the page; for example <a href="#top">Return to top</a>. This behavior is specified by HTML5 [MDN].
                    */
                    get: function () {
                        if (!this._hrefProperty)
                            initializeProperty(this, 'href', 'href');
                        return this._hrefProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AnchorElement.prototype, "href", {
                    //#endregion hrefProperty
                    //#region href
                    /**
                    * This is the single required attribute for anchors defining a hypertext source link. It indicates the link target, either a URL or a URL fragment. A URL fragment is a name preceded by a hash mark (#), which specifies an internal target location (an ID) within the current document. URLs are not restricted to Web (HTTP)-based documents. URLs might use any protocol supported by the browser. For example, file, ftp, and mailto work in most user agents.
                    * Note: You can use the special fragment "top" to create a link back to the top of the page; for example <a href="#top">Return to top</a>. This behavior is specified by HTML5 [MDN].
                    */
                    get: function () {
                        return this.hrefProperty.value;
                    },
                    set: function (value) {
                        this.hrefProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AnchorElement.prototype, "hrefLanguageProperty", {
                    //#endregion href
                    //#region hrefLanguageProperty
                    /**
                    * This attribute indicates the language of the linked resource. It is purely advisory. Allowed values are determined by BCP47 for HTML5 and by RFC1766 for HTML4. Use this attribute only if the href attribute is present [MDN].
                    */
                    get: function () {
                        if (!this._hrefLanguageProperty)
                            initializeProperty(this, 'hrefLanguage', 'hreflang');
                        return this._hrefLanguageProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AnchorElement.prototype, "hrefLanguage", {
                    //#endregion hrefLanguageProperty
                    //#region hrefLanguage
                    /**
                    * This attribute indicates the language of the linked resource. It is purely advisory. Allowed values are determined by BCP47 for HTML5 and by RFC1766 for HTML4. Use this attribute only if the href attribute is present [MDN].
                    */
                    get: function () {
                        return this.hrefLanguageProperty.value;
                    },
                    set: function (value) {
                        this.hrefLanguageProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AnchorElement.prototype, "relationshipProperty", {
                    //#endregion hrefLanguage
                    //#region relationshipProperty
                    /**
                    * For anchors containing the href attribute, this attribute specifies the relationship of the target object to the link object. The value is a space-separated list of relationship values. The values and their semantics will be registered by some authority that might have meaning to the document author. The default relationship, if no other is given, is void. Use this attribute only if the href attribute is present [MDN].
                    */
                    get: function () {
                        if (!this._relationshipProperty)
                            initializeProperty(this, 'relationship', 'rel');
                        return this._relationshipProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AnchorElement.prototype, "relationship", {
                    //#endregion relationshipProperty
                    //#region relationship
                    /**
                    * For anchors containing the href attribute, this attribute specifies the relationship of the target object to the link object. The value is a space-separated list of relationship values. The values and their semantics will be registered by some authority that might have meaning to the document author. The default relationship, if no other is given, is void. Use this attribute only if the href attribute is present [MDN].
                    */
                    get: function () {
                        return this.relationshipProperty.value;
                    },
                    set: function (value) {
                        this.relationshipProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AnchorElement.prototype, "targetProperty", {
                    //#endregion relationship
                    //#region targetProperty
                    /**
                    * Html.AnchorTarget enumerates the values of this property.
                    * This attribute specifies where to display the linked resource. In HTML4, this is the name of, or a keyword for, a frame. In HTML5, it is a name of, or keyword for, a browsing context (for example, tab, window, or inline frame). The following keywords have special meanings:  _self: Load the response into the same HTML4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified. _blank: Load the response into a new unnamed HTML4 window or HTML5 browsing context. _parent: Load the response into the HTML4 frameset parent of the current frame or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as _self. _top: In HTML4: Load the response into the full, original window, canceling all other frames. In HTML5: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as _self. Use this attribute only if the href attribute is present [MDN].
                    */
                    get: function () {
                        if (!this._targetProperty)
                            initializeProperty(this, 'target', 'target');
                        return this._targetProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AnchorElement.prototype, "target", {
                    //#endregion targetProperty
                    //#region target
                    /**
                    * Html.AnchorTarget enumerates the values of this property.
                    * This attribute specifies where to display the linked resource. In HTML4, this is the name of, or a keyword for, a frame. In HTML5, it is a name of, or keyword for, a browsing context (for example, tab, window, or inline frame). The following keywords have special meanings:  _self: Load the response into the same HTML4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified. _blank: Load the response into a new unnamed HTML4 window or HTML5 browsing context. _parent: Load the response into the HTML4 frameset parent of the current frame or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as _self. _top: In HTML4: Load the response into the full, original window, canceling all other frames. In HTML5: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as _self. Use this attribute only if the href attribute is present [MDN].
                    */
                    get: function () {
                        return this.targetProperty.value;
                    },
                    set: function (value) {
                        this.targetProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AnchorElement.prototype, "typeProperty", {
                    //#endregion target
                    //#region typeProperty
                    /**
                    * This attribute specifies the media type in the form of a MIME type for the link target. Generally, this is provided strictly as advisory information; however, in the future a browser might add a small icon for multimedia types. For example, a browser might add a small speaker icon when type is set to audio/wav. For a complete list of recognized MIME types, see http://www.w3.org/TR/html4/references.html#ref-MIMETYPES. Use this attribute only if the href attribute is present [MDN].
                    */
                    get: function () {
                        if (!this._typeProperty)
                            initializeProperty(this, 'type', 'type');
                        return this._typeProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AnchorElement.prototype, "type", {
                    //#endregion typeProperty
                    //#region type
                    /**
                    * This attribute specifies the media type in the form of a MIME type for the link target. Generally, this is provided strictly as advisory information; however, in the future a browser might add a small icon for multimedia types. For example, a browser might add a small speaker icon when type is set to audio/wav. For a complete list of recognized MIME types, see http://www.w3.org/TR/html4/references.html#ref-MIMETYPES. Use this attribute only if the href attribute is present [MDN].
                    */
                    get: function () {
                        return this.typeProperty.value;
                    },
                    set: function (value) {
                        this.typeProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                AnchorElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'href', true);
                    setPropertyFromConfig(this, config, 'hrefLanguage', true);
                    setPropertyFromConfig(this, config, 'relationship', true);
                    setPropertyFromConfig(this, config, 'target', true);
                    setPropertyFromConfig(this, config, 'type', true);
                };
                return AnchorElement;
            })(HtmlElementContainer);
            Elements.AnchorElement = AnchorElement;
            //#endregion AnchorElement
            //#region AreaElement
            /**
            * The HTML <area> element defines a hot-spot region on an image, and optionally associates it with a hypertext link. This element is used only within a <map> element [MDN].
            */
            var AreaElement = (function (_super) {
                __extends(AreaElement, _super);
                //#endregion target
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new AreaElement'.
                */
                function AreaElement(config) {
                    _super.call(this, 'area', config);
                }
                Object.defineProperty(AreaElement.prototype, "alternateProperty", {
                    //#endregion Fields
                    //#region Properties
                    //#region alternateProperty
                    /**
                    * A text string alternative to display on browsers that do not display images. The text should be phrased so that it presents the user with the same kind of choice as the image would offer when displayed without the alternative text. In HTML4, this attribute is required, but may be the empty string (""). In HTML5, this attribute is required only if the href attribute is used [MDN].
                    */
                    get: function () {
                        if (!this._alternateProperty)
                            initializeProperty(this, 'alternate', 'alt');
                        return this._alternateProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AreaElement.prototype, "alternate", {
                    //#endregion alternateProperty
                    //#region alternate
                    /**
                    * A text string alternative to display on browsers that do not display images. The text should be phrased so that it presents the user with the same kind of choice as the image would offer when displayed without the alternative text. In HTML4, this attribute is required, but may be the empty string (""). In HTML5, this attribute is required only if the href attribute is used [MDN].
                    */
                    get: function () {
                        return this.alternateProperty.value;
                    },
                    set: function (value) {
                        this.alternateProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AreaElement.prototype, "coordinatesProperty", {
                    //#endregion alternate
                    //#region coordinatesProperty
                    /**
                    * A set of values specifying the coordinates of the hot-spot region. The number and meaning of the values depend upon the value specified for the shape attribute. For a rect or rectangle shape, the coords value is two x,y pairs: left, top, right, and bottom. For a circle shape, the value is x,y,r where x,y is a pair specifying the center of the circle and r is a value for the radius. For a poly or polygon< shape, the value is a set of x,y pairs for each point in the polygon: x1,y1,x2,y2,x3,y3, and so on. In HTML4, the values are numbers of pixels or percentages, if a percent sign (%) is appended; in HTML5, the values are numbers of CSS pixels [MDN].
                    */
                    get: function () {
                        if (!this._coordinatesProperty)
                            initializeProperty(this, 'coordinates', 'coords');
                        return this._coordinatesProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AreaElement.prototype, "coordinates", {
                    //#endregion coordinatesProperty
                    //#region coordinates
                    /**
                    * A set of values specifying the coordinates of the hot-spot region. The number and meaning of the values depend upon the value specified for the shape attribute. For a rect or rectangle shape, the coords value is two x,y pairs: left, top, right, and bottom. For a circle shape, the value is x,y,r where x,y is a pair specifying the center of the circle and r is a value for the radius. For a poly or polygon< shape, the value is a set of x,y pairs for each point in the polygon: x1,y1,x2,y2,x3,y3, and so on. In HTML4, the values are numbers of pixels or percentages, if a percent sign (%) is appended; in HTML5, the values are numbers of CSS pixels [MDN].
                    */
                    get: function () {
                        return this.coordinatesProperty.value;
                    },
                    set: function (value) {
                        this.coordinatesProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AreaElement.prototype, "hrefProperty", {
                    //#endregion coordinates
                    //#region hrefProperty
                    /**
                    * The hyperlink target for the area. Its value is a valid URL. In HTML4, either this attribute or the nohref attribute must be present in the element. In HTML5, this attribute may be omitted; if so, the area element does not represent a hyperlink [MDN].
                    */
                    get: function () {
                        if (!this._hrefProperty)
                            initializeProperty(this, 'href', 'href');
                        return this._hrefProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AreaElement.prototype, "href", {
                    //#endregion hrefProperty
                    //#region href
                    /**
                    * The hyperlink target for the area. Its value is a valid URL. In HTML4, either this attribute or the nohref attribute must be present in the element. In HTML5, this attribute may be omitted; if so, the area element does not represent a hyperlink [MDN].
                    */
                    get: function () {
                        return this.hrefProperty.value;
                    },
                    set: function (value) {
                        this.hrefProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AreaElement.prototype, "shapeProperty", {
                    //#endregion href
                    //#region shapeProperty
                    /**
                    * The shape of the associated hot spot. The specifications for HTML 5 and HTML 4 define the values rect, which defines a rectangular region; circle, which defines a circular region; poly, which defines a polygon; and default, which indicates the entire region beyond any defined shapes. Many browsers, notably Internet Explorer 4 and higher, support circ, polygon, and rectangle as valid values for shape; these values are [MDN].
                    */
                    get: function () {
                        if (!this._shapeProperty)
                            initializeProperty(this, 'shape', 'shape');
                        return this._shapeProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AreaElement.prototype, "shape", {
                    //#endregion shapeProperty
                    //#region shape
                    /**
                    * The shape of the associated hot spot. The specifications for HTML 5 and HTML 4 define the values rect, which defines a rectangular region; circle, which defines a circular region; poly, which defines a polygon; and default, which indicates the entire region beyond any defined shapes. Many browsers, notably Internet Explorer 4 and higher, support circ, polygon, and rectangle as valid values for shape; these values are [MDN].
                    */
                    get: function () {
                        return this.shapeProperty.value;
                    },
                    set: function (value) {
                        this.shapeProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AreaElement.prototype, "targetProperty", {
                    //#endregion shape
                    //#region targetProperty
                    /**
                    * Html.AreaTarget enumerates the values of this property.
                    * This attribute specifies where to display the linked resource. In HTML4, this is the name of, or a keyword for, a frame. In HTML5, it is a name of, or keyword for, a browsing context (for example, tab, window, or inline frame). The following keywords have special meanings:  _self: Load the response into the same HTML4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified. _blank: Load the response into a new unnamed HTML4 window or HTML5 browsing context. _parent: Load the response into the HMTL4 frameset parent of the current frame or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as _self. _top: In HTML4: Load the response into the full, original window, canceling all other frames. In HTML5: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as _self. Use this attribute only if the href attribute is present [MDN].
                    */
                    get: function () {
                        if (!this._targetProperty)
                            initializeProperty(this, 'target', 'target');
                        return this._targetProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AreaElement.prototype, "target", {
                    //#endregion targetProperty
                    //#region target
                    /**
                    * Html.AreaTarget enumerates the values of this property.
                    * This attribute specifies where to display the linked resource. In HTML4, this is the name of, or a keyword for, a frame. In HTML5, it is a name of, or keyword for, a browsing context (for example, tab, window, or inline frame). The following keywords have special meanings:  _self: Load the response into the same HTML4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified. _blank: Load the response into a new unnamed HTML4 window or HTML5 browsing context. _parent: Load the response into the HMTL4 frameset parent of the current frame or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as _self. _top: In HTML4: Load the response into the full, original window, canceling all other frames. In HTML5: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as _self. Use this attribute only if the href attribute is present [MDN].
                    */
                    get: function () {
                        return this.targetProperty.value;
                    },
                    set: function (value) {
                        this.targetProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                AreaElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'alternate', true);
                    setPropertyFromConfig(this, config, 'coordinates', true);
                    setPropertyFromConfig(this, config, 'href', true);
                    setPropertyFromConfig(this, config, 'shape', true);
                    setPropertyFromConfig(this, config, 'target', true);
                };
                return AreaElement;
            })(HtmlElement);
            Elements.AreaElement = AreaElement;
            //#endregion AreaElement
            //#region ArticleElement
            /**
            * The HTML <article> Element represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable, e.g., in syndication. This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment, an interactive widget or gadget, or any other independent item of content [MDN].
            */
            var ArticleElement = (function (_super) {
                __extends(ArticleElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new ArticleElement'.
                */
                function ArticleElement(config) {
                    _super.call(this, 'article', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                ArticleElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return ArticleElement;
            })(HtmlElementContainer);
            Elements.ArticleElement = ArticleElement;
            //#endregion ArticleElement
            //#region AsideElement
            /**
            * The HTML <aside> Element represents a section of a page that consists of content that is tangentially related to the content around it, which could be considered separate from that content. Such sections are often represented as sidebars or as inserts. They often contain side explanations, like a glossary definition; more loosely related stuff, like advertisements; the biography of the author; or in web-applications, profile information or related blog links [MDN].
            */
            var AsideElement = (function (_super) {
                __extends(AsideElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new AsideElement'.
                */
                function AsideElement(config) {
                    _super.call(this, 'aside', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                AsideElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return AsideElement;
            })(HtmlElementContainer);
            Elements.AsideElement = AsideElement;
            //#endregion AsideElement
            //#region AudioElement
            /**
            * The HTML <audio> element is used to represent sound content in documents. Added as part of HTML5, it may contain several audio sources, represented using the src attribute or the <source> element; the browser will choose the most suitable one. Fallback content for browser not supporting the <audio> element can be added too [MDN].
            */
            var AudioElement = (function (_super) {
                __extends(AudioElement, _super);
                //#endregion mediaWaitingEvent
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new AudioElement'.
                */
                function AudioElement(config) {
                    _super.call(this, 'audio', config);
                }
                Object.defineProperty(AudioElement.prototype, "autoPlayProperty", {
                    //#endregion Fields
                    //#region Properties
                    //#region autoPlayProperty
                    /**
                    * A Boolean attribute; if specified (even if the value is "false"!), the audio will automatically begin to play back as soon as it can do so without stopping to finish loading the data [MDN].
                    */
                    get: function () {
                        if (!this._autoPlayProperty)
                            initializeProperty(this, 'autoPlay', 'autoplay');
                        return this._autoPlayProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "autoPlay", {
                    //#endregion autoPlayProperty
                    //#region autoPlay
                    /**
                    * A Boolean attribute; if specified (even if the value is "false"!), the audio will automatically begin to play back as soon as it can do so without stopping to finish loading the data [MDN].
                    */
                    get: function () {
                        return this.autoPlayProperty.value;
                    },
                    set: function (value) {
                        this.autoPlayProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "bufferedProperty", {
                    //#endregion autoPlay
                    //#region bufferedProperty
                    /**
                    * An attribute you can read to determine which time ranges of the media have been buffered. This attribute contains a TimeRanges object [MDN].
                    */
                    get: function () {
                        if (!this._bufferedProperty)
                            initializeProperty(this, 'buffered', 'buffered');
                        return this._bufferedProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "buffered", {
                    //#endregion bufferedProperty
                    //#region buffered
                    /**
                    * An attribute you can read to determine which time ranges of the media have been buffered. This attribute contains a TimeRanges object [MDN].
                    */
                    get: function () {
                        return this.bufferedProperty.value;
                    },
                    set: function (value) {
                        this.bufferedProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "controlsProperty", {
                    //#endregion buffered
                    //#region controlsProperty
                    /**
                    * If this attribute is present, the browser will offer controls to allow the user to control audio playback, including volume, seeking, and pause/resume playback [MDN].
                    */
                    get: function () {
                        if (!this._controlsProperty)
                            initializeProperty(this, 'controls', 'controls');
                        return this._controlsProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "controls", {
                    //#endregion controlsProperty
                    //#region controls
                    /**
                    * If this attribute is present, the browser will offer controls to allow the user to control audio playback, including volume, seeking, and pause/resume playback [MDN].
                    */
                    get: function () {
                        return this.controlsProperty.value;
                    },
                    set: function (value) {
                        this.controlsProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "loopProperty", {
                    //#endregion controls
                    //#region loopProperty
                    /**
                    * A Boolean attribute; if specified, we will, upon reaching the end of the audio, automatically seek back to the start [MDN].
                    */
                    get: function () {
                        if (!this._loopProperty)
                            initializeProperty(this, 'loop', 'loop');
                        return this._loopProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "loop", {
                    //#endregion loopProperty
                    //#region loop
                    /**
                    * A Boolean attribute; if specified, we will, upon reaching the end of the audio, automatically seek back to the start [MDN].
                    */
                    get: function () {
                        return this.loopProperty.value;
                    },
                    set: function (value) {
                        this.loopProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "mutedProperty", {
                    //#endregion loop
                    //#region mutedProperty
                    /**
                    * A Boolean attribute which indicates whether the audio will be initially silenced. Its default value is false, meaning that the audio will be played [MDN].
                    */
                    get: function () {
                        if (!this._mutedProperty)
                            initializeProperty(this, 'muted', 'muted');
                        return this._mutedProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "muted", {
                    //#endregion mutedProperty
                    //#region muted
                    /**
                    * A Boolean attribute which indicates whether the audio will be initially silenced. Its default value is false, meaning that the audio will be played [MDN].
                    */
                    get: function () {
                        return this.mutedProperty.value;
                    },
                    set: function (value) {
                        this.mutedProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "playedProperty", {
                    //#endregion muted
                    //#region playedProperty
                    /**
                    * A TimeRanges object indicating all the ranges of the audio that have been played [MDN].
                    */
                    get: function () {
                        if (!this._playedProperty)
                            initializeProperty(this, 'played', 'played');
                        return this._playedProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "played", {
                    //#endregion playedProperty
                    //#region played
                    /**
                    * A TimeRanges object indicating all the ranges of the audio that have been played [MDN].
                    */
                    get: function () {
                        return this.playedProperty.value;
                    },
                    set: function (value) {
                        this.playedProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "preloadProperty", {
                    //#endregion played
                    //#region preloadProperty
                    /**
                    * Html.AudioPreload enumerates the values of this property.
                    * This enumerated attribute is intended to provide a hint to the browser about what the author thinks will lead to the best user experience. It may have one of the following values:  none: hints that either the author thinks that the user won't need to consult that audio or that the server wants to minimize its traffic; in others terms this hint indicates that the audio should not be cached; metadata: hints that though the author thinks that the user won't need to consult that audio, fetching the metadata (e.g. length) is reasonable; auto: hints that the user needs have priority; in others terms this hint indicated that, if needed, the whole audio could be downloaded, even if the user is not expected to use it; the empty string: which is a synonym of the auto value. If not set, its default value is browser-defined (i.e. each browser can choose its own default value), though the spec advises it to be set to metadata.  Usage notes:  The autoplay attribute has precedence over this one as if one wants to automatically play a audio, the browser will obviously need to download it. Setting both the autoplay and the preload attributes is allowed by the specification. The browser is not forced by the specification to follow the value of this attribute; it is a mere hint [MDN].
                    */
                    get: function () {
                        if (!this._preloadProperty)
                            initializeProperty(this, 'preload', 'preload');
                        return this._preloadProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "preload", {
                    //#endregion preloadProperty
                    //#region preload
                    /**
                    * Html.AudioPreload enumerates the values of this property.
                    * This enumerated attribute is intended to provide a hint to the browser about what the author thinks will lead to the best user experience. It may have one of the following values:  none: hints that either the author thinks that the user won't need to consult that audio or that the server wants to minimize its traffic; in others terms this hint indicates that the audio should not be cached; metadata: hints that though the author thinks that the user won't need to consult that audio, fetching the metadata (e.g. length) is reasonable; auto: hints that the user needs have priority; in others terms this hint indicated that, if needed, the whole audio could be downloaded, even if the user is not expected to use it; the empty string: which is a synonym of the auto value. If not set, its default value is browser-defined (i.e. each browser can choose its own default value), though the spec advises it to be set to metadata.  Usage notes:  The autoplay attribute has precedence over this one as if one wants to automatically play a audio, the browser will obviously need to download it. Setting both the autoplay and the preload attributes is allowed by the specification. The browser is not forced by the specification to follow the value of this attribute; it is a mere hint [MDN].
                    */
                    get: function () {
                        return this.preloadProperty.value;
                    },
                    set: function (value) {
                        this.preloadProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "sourceProperty", {
                    //#endregion preload
                    //#region sourceProperty
                    /**
                    * The URL of the audio to embed. This is subject to HTTP access controls. This is optional; you may instead use the <source> element within the audio block to specify the audio to embed [MDN].
                    */
                    get: function () {
                        if (!this._sourceProperty)
                            initializeProperty(this, 'source', 'src');
                        return this._sourceProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "source", {
                    //#endregion sourceProperty
                    //#region source
                    /**
                    * The URL of the audio to embed. This is subject to HTTP access controls. This is optional; you may instead use the <source> element within the audio block to specify the audio to embed [MDN].
                    */
                    get: function () {
                        return this.sourceProperty.value;
                    },
                    set: function (value) {
                        this.sourceProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "volumeProperty", {
                    //#endregion source
                    //#region volumeProperty
                    /**
                    * The playback volume of any audio portions, in the range 0.0 (silent) to 1.0 (loudest) [MDN].
                    */
                    get: function () {
                        if (!this._volumeProperty)
                            initializeProperty(this, 'volume', 'volume');
                        return this._volumeProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "volume", {
                    //#endregion volumeProperty
                    //#region volume
                    /**
                    * The playback volume of any audio portions, in the range 0.0 (silent) to 1.0 (loudest) [MDN].
                    */
                    get: function () {
                        return this.volumeProperty.value;
                    },
                    set: function (value) {
                        this.volumeProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "audioCompleteEvent", {
                    //#endregion volume
                    //#region audioCompleteEvent
                    /**
                    * The audioCompleteEvent event is executed when the rendering of an OfflineAudioContext is terminated [MDN].
                    * Specification: Web Audio API
                    * DOM Event Name: complete
                    */
                    get: function () {
                        if (!this._audioCompleteEvent)
                            this._audioCompleteEvent = new Html.HtmlElementEvent('complete', 'Event', this);
                        return this._audioCompleteEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "audioEndedEvent", {
                    //#endregion audioCompleteEvent
                    //#region audioEndedEvent
                    /**
                    * The audioEndedEvent event is executed when   [MDN].
                    * Specification: Web Audio API
                    * DOM Event Name: ended
                    */
                    get: function () {
                        if (!this._audioEndedEvent)
                            this._audioEndedEvent = new Html.HtmlElementEvent('ended', 'Event', this);
                        return this._audioEndedEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "audioProcessEvent", {
                    //#endregion audioEndedEvent
                    //#region audioProcessEvent
                    /**
                    * The audioProcessEvent event is executed when the input buffer of a ScriptProcessorNode is ready to be processed [MDN].
                    * Specification: Web Audio API
                    * DOM Event Name: audioprocess
                    */
                    get: function () {
                        if (!this._audioProcessEvent)
                            this._audioProcessEvent = new Html.HtmlElementEvent('audioprocess', 'Event', this);
                        return this._audioProcessEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "mediaCanPlayEvent", {
                    //#endregion audioProcessEvent
                    //#region mediaCanPlayEvent
                    /**
                    * The mediaCanPlayEvent event is executed when the user agent can play the media, but estimates that not enough data has been loaded to play the media up to its end without having to stop for further buffering of content [MDN].
                    * Specification: HTML5 media
                    * DOM Event Name: canplay
                    */
                    get: function () {
                        if (!this._mediaCanPlayEvent)
                            this._mediaCanPlayEvent = new Html.HtmlElementEvent('canplay', 'Event', this);
                        return this._mediaCanPlayEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "mediaCanPlayThroughEvent", {
                    //#endregion mediaCanPlayEvent
                    //#region mediaCanPlayThroughEvent
                    /**
                    * The mediaCanPlayThroughEvent event is executed when the user agent can play the media, and estimates that enough data has been loaded to play the media up to its end without having to stop for further buffering of content [MDN].
                    * Specification: HTML5 media
                    * DOM Event Name: canplaythrough
                    */
                    get: function () {
                        if (!this._mediaCanPlayThroughEvent)
                            this._mediaCanPlayThroughEvent = new Html.HtmlElementEvent('canplaythrough', 'Event', this);
                        return this._mediaCanPlayThroughEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "mediaDurationChangeEvent", {
                    //#endregion mediaCanPlayThroughEvent
                    //#region mediaDurationChangeEvent
                    /**
                    * The mediaDurationChangeEvent event is executed when the duration attribute has been updated [MDN].
                    * Specification: HTML5 media
                    * DOM Event Name: durationchange
                    */
                    get: function () {
                        if (!this._mediaDurationChangeEvent)
                            this._mediaDurationChangeEvent = new Html.HtmlElementEvent('durationchange', 'Event', this);
                        return this._mediaDurationChangeEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "mediaEmptiedEvent", {
                    //#endregion mediaDurationChangeEvent
                    //#region mediaEmptiedEvent
                    /**
                    * The mediaEmptiedEvent event is executed when the media has become empty; for example, this event is sent if the media has already been loaded (or partially loaded), and the load() method is called to reload it [MDN].
                    * Specification: HTML5 media
                    * DOM Event Name: emptied
                    */
                    get: function () {
                        if (!this._mediaEmptiedEvent)
                            this._mediaEmptiedEvent = new Html.HtmlElementEvent('emptied', 'Event', this);
                        return this._mediaEmptiedEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "mediaEndedEvent", {
                    //#endregion mediaEmptiedEvent
                    //#region mediaEndedEvent
                    /**
                    * The mediaEndedEvent event is executed when playback has stopped because the end of the media was reached [MDN].
                    * Specification: HTML5 media
                    * DOM Event Name: ended
                    */
                    get: function () {
                        if (!this._mediaEndedEvent)
                            this._mediaEndedEvent = new Html.HtmlElementEvent('ended', 'Event', this);
                        return this._mediaEndedEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "mediaLoadedDataEvent", {
                    //#endregion mediaEndedEvent
                    //#region mediaLoadedDataEvent
                    /**
                    * The mediaLoadedDataEvent event is executed when the first frame of the media has finished loading [MDN].
                    * Specification: HTML5 media
                    * DOM Event Name: loadeddata
                    */
                    get: function () {
                        if (!this._mediaLoadedDataEvent)
                            this._mediaLoadedDataEvent = new Html.HtmlElementEvent('loadeddata', 'Event', this);
                        return this._mediaLoadedDataEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "mediaLoadedMetadataEvent", {
                    //#endregion mediaLoadedDataEvent
                    //#region mediaLoadedMetadataEvent
                    /**
                    * The mediaLoadedMetadataEvent event is executed when the metadata has been loaded [MDN].
                    * Specification: HTML5 media
                    * DOM Event Name: loadedmetadata
                    */
                    get: function () {
                        if (!this._mediaLoadedMetadataEvent)
                            this._mediaLoadedMetadataEvent = new Html.HtmlElementEvent('loadedmetadata', 'Event', this);
                        return this._mediaLoadedMetadataEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "mediaPauseEvent", {
                    //#endregion mediaLoadedMetadataEvent
                    //#region mediaPauseEvent
                    /**
                    * The mediaPauseEvent event is executed when playback has been paused [MDN].
                    * Specification: HTML5 media
                    * DOM Event Name: pause
                    */
                    get: function () {
                        if (!this._mediaPauseEvent)
                            this._mediaPauseEvent = new Html.HtmlElementEvent('pause', 'Event', this);
                        return this._mediaPauseEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "mediaPlayEvent", {
                    //#endregion mediaPauseEvent
                    //#region mediaPlayEvent
                    /**
                    * The mediaPlayEvent event is executed when playback has begun [MDN].
                    * Specification: HTML5 media
                    * DOM Event Name: play
                    */
                    get: function () {
                        if (!this._mediaPlayEvent)
                            this._mediaPlayEvent = new Html.HtmlElementEvent('play', 'Event', this);
                        return this._mediaPlayEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "mediaPlayingEvent", {
                    //#endregion mediaPlayEvent
                    //#region mediaPlayingEvent
                    /**
                    * The mediaPlayingEvent event is executed when playback is ready to start after having been paused or delayed due to lack of data [MDN].
                    * Specification: HTML5 media
                    * DOM Event Name: playing
                    */
                    get: function () {
                        if (!this._mediaPlayingEvent)
                            this._mediaPlayingEvent = new Html.HtmlElementEvent('playing', 'Event', this);
                        return this._mediaPlayingEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "mediaRateChangeEvent", {
                    //#endregion mediaPlayingEvent
                    //#region mediaRateChangeEvent
                    /**
                    * The mediaRateChangeEvent event is executed when the playback rate has changed [MDN].
                    * Specification: HTML5 media
                    * DOM Event Name: ratechange
                    */
                    get: function () {
                        if (!this._mediaRateChangeEvent)
                            this._mediaRateChangeEvent = new Html.HtmlElementEvent('ratechange', 'Event', this);
                        return this._mediaRateChangeEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "mediaSeekedEvent", {
                    //#endregion mediaRateChangeEvent
                    //#region mediaSeekedEvent
                    /**
                    * The mediaSeekedEvent event is executed when a seek operation completed [MDN].
                    * Specification: HTML5 media
                    * DOM Event Name: seeked
                    */
                    get: function () {
                        if (!this._mediaSeekedEvent)
                            this._mediaSeekedEvent = new Html.HtmlElementEvent('seeked', 'Event', this);
                        return this._mediaSeekedEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "mediaSeekingEvent", {
                    //#endregion mediaSeekedEvent
                    //#region mediaSeekingEvent
                    /**
                    * The mediaSeekingEvent event is executed when a seek operation began [MDN].
                    * Specification: HTML5 media
                    * DOM Event Name: seeking
                    */
                    get: function () {
                        if (!this._mediaSeekingEvent)
                            this._mediaSeekingEvent = new Html.HtmlElementEvent('seeking', 'Event', this);
                        return this._mediaSeekingEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "mediaStalledEvent", {
                    //#endregion mediaSeekingEvent
                    //#region mediaStalledEvent
                    /**
                    * The mediaStalledEvent event is executed when the user agent is trying to fetch media data, but data is unexpectedly not forthcoming [MDN].
                    * Specification: HTML5 media
                    * DOM Event Name: stalled
                    */
                    get: function () {
                        if (!this._mediaStalledEvent)
                            this._mediaStalledEvent = new Html.HtmlElementEvent('stalled', 'Event', this);
                        return this._mediaStalledEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "mediaSuspendEvent", {
                    //#endregion mediaStalledEvent
                    //#region mediaSuspendEvent
                    /**
                    * The mediaSuspendEvent event is executed when media data loading has been suspended [MDN].
                    * Specification: HTML5 media
                    * DOM Event Name: suspend
                    */
                    get: function () {
                        if (!this._mediaSuspendEvent)
                            this._mediaSuspendEvent = new Html.HtmlElementEvent('suspend', 'Event', this);
                        return this._mediaSuspendEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "mediaTimeUpdateEvent", {
                    //#endregion mediaSuspendEvent
                    //#region mediaTimeUpdateEvent
                    /**
                    * The mediaTimeUpdateEvent event is executed when the time indicated by the currentTime attribute has been updated [MDN].
                    * Specification: HTML5 media
                    * DOM Event Name: timeupdate
                    */
                    get: function () {
                        if (!this._mediaTimeUpdateEvent)
                            this._mediaTimeUpdateEvent = new Html.HtmlElementEvent('timeupdate', 'Event', this);
                        return this._mediaTimeUpdateEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "mediaVolumeChangeEvent", {
                    //#endregion mediaTimeUpdateEvent
                    //#region mediaVolumeChangeEvent
                    /**
                    * The mediaVolumeChangeEvent event is executed when the volume has changed [MDN].
                    * Specification: HTML5 media
                    * DOM Event Name: volumechange
                    */
                    get: function () {
                        if (!this._mediaVolumeChangeEvent)
                            this._mediaVolumeChangeEvent = new Html.HtmlElementEvent('volumechange', 'Event', this);
                        return this._mediaVolumeChangeEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "mediaWaitingEvent", {
                    //#endregion mediaVolumeChangeEvent
                    //#region mediaWaitingEvent
                    /**
                    * The mediaWaitingEvent event is executed when playback has stopped because of a temporary lack of data [MDN].
                    * Specification: HTML5 media
                    * DOM Event Name: waiting
                    */
                    get: function () {
                        if (!this._mediaWaitingEvent)
                            this._mediaWaitingEvent = new Html.HtmlElementEvent('waiting', 'Event', this);
                        return this._mediaWaitingEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                AudioElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'autoPlay', true);
                    setPropertyFromConfig(this, config, 'buffered', true);
                    setPropertyFromConfig(this, config, 'controls', true);
                    setPropertyFromConfig(this, config, 'loop', true);
                    setPropertyFromConfig(this, config, 'muted', true);
                    setPropertyFromConfig(this, config, 'played', true);
                    setPropertyFromConfig(this, config, 'preload', true);
                    setPropertyFromConfig(this, config, 'source', true);
                    setPropertyFromConfig(this, config, 'volume', true);
                    if (config.audioCompleteHandler)
                        this.audioCompleteEvent.subscribe(config.audioCompleteHandler);
                    if (config.audioEndedHandler)
                        this.audioEndedEvent.subscribe(config.audioEndedHandler);
                    if (config.audioProcessHandler)
                        this.audioProcessEvent.subscribe(config.audioProcessHandler);
                    if (config.mediaCanPlayHandler)
                        this.mediaCanPlayEvent.subscribe(config.mediaCanPlayHandler);
                    if (config.mediaCanPlayThroughHandler)
                        this.mediaCanPlayThroughEvent.subscribe(config.mediaCanPlayThroughHandler);
                    if (config.mediaDurationChangeHandler)
                        this.mediaDurationChangeEvent.subscribe(config.mediaDurationChangeHandler);
                    if (config.mediaEmptiedHandler)
                        this.mediaEmptiedEvent.subscribe(config.mediaEmptiedHandler);
                    if (config.mediaEndedHandler)
                        this.mediaEndedEvent.subscribe(config.mediaEndedHandler);
                    if (config.mediaLoadedDataHandler)
                        this.mediaLoadedDataEvent.subscribe(config.mediaLoadedDataHandler);
                    if (config.mediaLoadedMetadataHandler)
                        this.mediaLoadedMetadataEvent.subscribe(config.mediaLoadedMetadataHandler);
                    if (config.mediaPauseHandler)
                        this.mediaPauseEvent.subscribe(config.mediaPauseHandler);
                    if (config.mediaPlayHandler)
                        this.mediaPlayEvent.subscribe(config.mediaPlayHandler);
                    if (config.mediaPlayingHandler)
                        this.mediaPlayingEvent.subscribe(config.mediaPlayingHandler);
                    if (config.mediaRateChangeHandler)
                        this.mediaRateChangeEvent.subscribe(config.mediaRateChangeHandler);
                    if (config.mediaSeekedHandler)
                        this.mediaSeekedEvent.subscribe(config.mediaSeekedHandler);
                    if (config.mediaSeekingHandler)
                        this.mediaSeekingEvent.subscribe(config.mediaSeekingHandler);
                    if (config.mediaStalledHandler)
                        this.mediaStalledEvent.subscribe(config.mediaStalledHandler);
                    if (config.mediaSuspendHandler)
                        this.mediaSuspendEvent.subscribe(config.mediaSuspendHandler);
                    if (config.mediaTimeUpdateHandler)
                        this.mediaTimeUpdateEvent.subscribe(config.mediaTimeUpdateHandler);
                    if (config.mediaVolumeChangeHandler)
                        this.mediaVolumeChangeEvent.subscribe(config.mediaVolumeChangeHandler);
                    if (config.mediaWaitingHandler)
                        this.mediaWaitingEvent.subscribe(config.mediaWaitingHandler);
                };
                return AudioElement;
            })(HtmlElementContainer);
            Elements.AudioElement = AudioElement;
            //#endregion AudioElement
            //#region BaseElement
            /**
            * The HTML <base> element specifies the base URL to use for all relative URLs contained within a document [MDN].
            */
            var BaseElement = (function (_super) {
                __extends(BaseElement, _super);
                //#endregion target
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new BaseElement'.
                */
                function BaseElement(config) {
                    _super.call(this, 'base', config);
                }
                Object.defineProperty(BaseElement.prototype, "hrefProperty", {
                    //#endregion Fields
                    //#region Properties
                    //#region hrefProperty
                    /**
                    * The base URL to be used throughout the document for relative URL addresses. If this attribute is specified, this element must come before any other elements with attributes whose values are URLs. Absolute and relative URIs are allowed (but see note section below) [MDN].
                    */
                    get: function () {
                        if (!this._hrefProperty)
                            initializeProperty(this, 'href', 'href');
                        return this._hrefProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BaseElement.prototype, "href", {
                    //#endregion hrefProperty
                    //#region href
                    /**
                    * The base URL to be used throughout the document for relative URL addresses. If this attribute is specified, this element must come before any other elements with attributes whose values are URLs. Absolute and relative URIs are allowed (but see note section below) [MDN].
                    */
                    get: function () {
                        return this.hrefProperty.value;
                    },
                    set: function (value) {
                        this.hrefProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BaseElement.prototype, "targetProperty", {
                    //#endregion href
                    //#region targetProperty
                    /**
                    * Html.BaseTarget enumerates the values of this property.
                    * A name or keyword indicating the default location to display the result when hyperlinks or forms cause navigation, for elements that do not have an explicit target reference. In HTML4, this is the name of, or a keyword for, a frame. In HTML5, it is a name of, or keyword for, a browsing context (for example, tab, window, or inline frame). The following keywords have special meanings:  _self: Load the result into the same HTML4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified. _blank: Load the result into a new unnamed HTML4 window or HTML5 browsing context. _parent: Load the result into the HTML4 frameset parent of the current frame or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as _self. _top: In HTML4: Load the result into the full, original window, canceling all other frames. In HTML5: Load the result into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as _self [MDN].
                    */
                    get: function () {
                        if (!this._targetProperty)
                            initializeProperty(this, 'target', 'target');
                        return this._targetProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BaseElement.prototype, "target", {
                    //#endregion targetProperty
                    //#region target
                    /**
                    * Html.BaseTarget enumerates the values of this property.
                    * A name or keyword indicating the default location to display the result when hyperlinks or forms cause navigation, for elements that do not have an explicit target reference. In HTML4, this is the name of, or a keyword for, a frame. In HTML5, it is a name of, or keyword for, a browsing context (for example, tab, window, or inline frame). The following keywords have special meanings:  _self: Load the result into the same HTML4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified. _blank: Load the result into a new unnamed HTML4 window or HTML5 browsing context. _parent: Load the result into the HTML4 frameset parent of the current frame or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as _self. _top: In HTML4: Load the result into the full, original window, canceling all other frames. In HTML5: Load the result into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as _self [MDN].
                    */
                    get: function () {
                        return this.targetProperty.value;
                    },
                    set: function (value) {
                        this.targetProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                BaseElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'href', true);
                    setPropertyFromConfig(this, config, 'target', true);
                };
                return BaseElement;
            })(HtmlElement);
            Elements.BaseElement = BaseElement;
            //#endregion BaseElement
            //#region BidirectionalIsolationElement
            /**
            * The HTML <bdi> Element (or Bi-Directional Isolation Element) isolates a span of text that might be formatted in a different direction from other text outside it [MDN].
            */
            var BidirectionalIsolationElement = (function (_super) {
                __extends(BidirectionalIsolationElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new BidirectionalIsolationElement'.
                */
                function BidirectionalIsolationElement(config) {
                    _super.call(this, 'bdi', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                BidirectionalIsolationElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return BidirectionalIsolationElement;
            })(HtmlElementContainer);
            Elements.BidirectionalIsolationElement = BidirectionalIsolationElement;
            //#endregion BidirectionalIsolationElement
            //#region BidirectionalOverrideElement
            /**
            * The HTML <bdo> Element (or HTML bidirectional override element) is used to override the current directionality of text. It causes the directionality of the characters to be ignored in favor of the specified directionality [MDN].
            */
            var BidirectionalOverrideElement = (function (_super) {
                __extends(BidirectionalOverrideElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new BidirectionalOverrideElement'.
                */
                function BidirectionalOverrideElement(config) {
                    _super.call(this, 'bdo', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                BidirectionalOverrideElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return BidirectionalOverrideElement;
            })(HtmlElementContainer);
            Elements.BidirectionalOverrideElement = BidirectionalOverrideElement;
            //#endregion BidirectionalOverrideElement
            //#region BlockQuotationElement
            /**
            * The HTML <blockquote> Element (or HTML Block Quotation Element) indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation (see Notes for how to change it). A URL for the source of the quotation may be given using the cite attribute, while a text representation of the source can be given using the <cite> element [MDN].
            */
            var BlockQuotationElement = (function (_super) {
                __extends(BlockQuotationElement, _super);
                //#endregion citation
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new BlockQuotationElement'.
                */
                function BlockQuotationElement(config) {
                    _super.call(this, 'blockquote', config);
                }
                Object.defineProperty(BlockQuotationElement.prototype, "citationProperty", {
                    //#endregion Fields
                    //#region Properties
                    //#region citationProperty
                    /**
                    * A URL that designates a source document or message for the information quoted. This attribute is intended to point to information explaining the context or the reference for the quote [MDN].
                    */
                    get: function () {
                        if (!this._citationProperty)
                            initializeProperty(this, 'citation', 'cite');
                        return this._citationProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BlockQuotationElement.prototype, "citation", {
                    //#endregion citationProperty
                    //#region citation
                    /**
                    * A URL that designates a source document or message for the information quoted. This attribute is intended to point to information explaining the context or the reference for the quote [MDN].
                    */
                    get: function () {
                        return this.citationProperty.value;
                    },
                    set: function (value) {
                        this.citationProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                BlockQuotationElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'citation', true);
                };
                return BlockQuotationElement;
            })(HtmlElementContainer);
            Elements.BlockQuotationElement = BlockQuotationElement;
            //#endregion BlockQuotationElement
            //#region BodyElement
            /**
            * The HTML <body> element represents the content of an HTML document. There is only one <body> element in a document [MDN].
            */
            var BodyElement = (function (_super) {
                __extends(BodyElement, _super);
                //#endregion unloadEvent
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new BodyElement'.
                */
                function BodyElement(config) {
                    _super.call(this, 'body', config);
                }
                Object.defineProperty(BodyElement.prototype, "unloadEvent", {
                    //#endregion Fields
                    //#region Properties
                    //#region unloadEvent
                    /**
                    * The unloadEvent event is executed when the document or a dependent resource is being unloaded [MDN].
                    * Specification: DOM L3
                    * DOM Event Name: unload
                    */
                    get: function () {
                        if (!this._unloadEvent)
                            this._unloadEvent = new Html.HtmlElementEvent('unload', 'UIEvent', this);
                        return this._unloadEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                BodyElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    if (config.unloadHandler)
                        this.unloadEvent.subscribe(config.unloadHandler);
                };
                return BodyElement;
            })(HtmlElementContainer);
            Elements.BodyElement = BodyElement;
            //#endregion BodyElement
            //#region BoldElement
            /**
            * The HTML <b> Element represents a span of text stylistically different from normal text, without a conveying any special importance or relevance. It is typically used for keywords in a summary, product names in a review, or other spans of text whose typical presentation would be boldfaced. Another example of its use is to mark the lead sentence of each paragraph of an article [MDN].
            */
            var BoldElement = (function (_super) {
                __extends(BoldElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new BoldElement'.
                */
                function BoldElement(config) {
                    _super.call(this, 'b', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                BoldElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return BoldElement;
            })(HtmlElementContainer);
            Elements.BoldElement = BoldElement;
            //#endregion BoldElement
            //#region ButtonElement
            /**
            * The HTML <button> Element represents a clickable button [MDN].
            */
            var ButtonElement = (function (_super) {
                __extends(ButtonElement, _super);
                //#endregion value
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new ButtonElement'.
                */
                function ButtonElement(config) {
                    _super.call(this, 'button', config);
                }
                Object.defineProperty(ButtonElement.prototype, "autoFocusProperty", {
                    //#endregion Fields
                    //#region Properties
                    //#region autoFocusProperty
                    /**
                    * This Boolean attribute lets you specify that the button should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form-associated element in a document can have this attribute specified [MDN].
                    */
                    get: function () {
                        if (!this._autoFocusProperty)
                            initializeProperty(this, 'autoFocus', 'autofocus');
                        return this._autoFocusProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ButtonElement.prototype, "autoFocus", {
                    //#endregion autoFocusProperty
                    //#region autoFocus
                    /**
                    * This Boolean attribute lets you specify that the button should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form-associated element in a document can have this attribute specified [MDN].
                    */
                    get: function () {
                        return this.autoFocusProperty.value;
                    },
                    set: function (value) {
                        this.autoFocusProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ButtonElement.prototype, "disabledProperty", {
                    //#endregion autoFocus
                    //#region disabledProperty
                    /**
                    * This Boolean attribute indicates that the user cannot interact with the button. If this attribute is not specified, the button inherits its setting from the containing element, for example <fieldset>; if there is no containing element with the disabled attribute set, then the button is enabled [MDN].
                    */
                    get: function () {
                        if (!this._disabledProperty)
                            initializeProperty(this, 'disabled', 'disabled');
                        return this._disabledProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ButtonElement.prototype, "disabled", {
                    //#endregion disabledProperty
                    //#region disabled
                    /**
                    * This Boolean attribute indicates that the user cannot interact with the button. If this attribute is not specified, the button inherits its setting from the containing element, for example <fieldset>; if there is no containing element with the disabled attribute set, then the button is enabled [MDN].
                    */
                    get: function () {
                        return this.disabledProperty.value;
                    },
                    set: function (value) {
                        this.disabledProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ButtonElement.prototype, "form", {
                    //#endregion disabled
                    //#region form
                    /**
                    * The form element that the button is associated with (its form owner). The value of the attribute must be the id attribute of a <form> element in the same document. If this attribute is not specified, the <button> element must be a descendant of a form element. This attribute enables you to place <button> elements anywhere within a document, not just as descendants of their <form> elements [MDN].
                    */
                    get: function () {
                        return getElementPropertyValue(this, 'form');
                    },
                    set: function (value) {
                        setElementPropertyValue(this, 'form', value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ButtonElement.prototype, "nameProperty", {
                    //#endregion form
                    //#region nameProperty
                    /**
                    * The name of the button, which submitted with the form data [MDN].
                    */
                    get: function () {
                        if (!this._nameProperty)
                            initializeProperty(this, 'name', 'name');
                        return this._nameProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ButtonElement.prototype, "name", {
                    //#endregion nameProperty
                    //#region name
                    /**
                    * The name of the button, which submitted with the form data [MDN].
                    */
                    get: function () {
                        return this.nameProperty.value;
                    },
                    set: function (value) {
                        this.nameProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ButtonElement.prototype, "typeProperty", {
                    //#endregion name
                    //#region typeProperty
                    /**
                    * Html.ButtonType enumerates the values of this property.
                    * The type of the button. Possible values are:  submit: The button submits the form data to the server. This is the default if the attribute is not specified, or if the attribute is dynamically changed to an empty or invalid value. reset: The button resets all the controls to their initial values. button: The button has no default behavior. It can have client-side scripts associated with the element's events, which are triggered when the events occur [MDN].
                    */
                    get: function () {
                        if (!this._typeProperty)
                            initializeProperty(this, 'type', 'type');
                        return this._typeProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ButtonElement.prototype, "type", {
                    //#endregion typeProperty
                    //#region type
                    /**
                    * Html.ButtonType enumerates the values of this property.
                    * The type of the button. Possible values are:  submit: The button submits the form data to the server. This is the default if the attribute is not specified, or if the attribute is dynamically changed to an empty or invalid value. reset: The button resets all the controls to their initial values. button: The button has no default behavior. It can have client-side scripts associated with the element's events, which are triggered when the events occur [MDN].
                    */
                    get: function () {
                        return this.typeProperty.value;
                    },
                    set: function (value) {
                        this.typeProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ButtonElement.prototype, "valueProperty", {
                    //#endregion type
                    //#region valueProperty
                    /**
                    * The initial value of the button [MDN].
                    */
                    get: function () {
                        if (!this._valueProperty)
                            initializeProperty(this, 'value', 'value');
                        return this._valueProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ButtonElement.prototype, "value", {
                    //#endregion valueProperty
                    //#region value
                    /**
                    * The initial value of the button [MDN].
                    */
                    get: function () {
                        return this.valueProperty.value;
                    },
                    set: function (value) {
                        this.valueProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                ButtonElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'autoFocus', true);
                    setPropertyFromConfig(this, config, 'disabled', true);
                    setElementPropertyFromConfig(this, config, 'form');
                    setPropertyFromConfig(this, config, 'name', true);
                    setPropertyFromConfig(this, config, 'type', true);
                    setPropertyFromConfig(this, config, 'value', true);
                };
                return ButtonElement;
            })(HtmlElementContainer);
            Elements.ButtonElement = ButtonElement;
            //#endregion ButtonElement
            //#region CanvasElement
            /**
            * The HTML <canvas> Element can be used to draw graphics via scripting (usually JavaScript). For example, it can be used to draw graphs, make photo compositions or even perform animations. You may (and should) provide alternate content inside the <canvas> block. That content will be rendered both on older browsers that don't support canvas and in browsers with JavaScript disabled [MDN].
            */
            var CanvasElement = (function (_super) {
                __extends(CanvasElement, _super);
                //#endregion height
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new CanvasElement'.
                */
                function CanvasElement(config) {
                    _super.call(this, 'canvas', config);
                }
                Object.defineProperty(CanvasElement.prototype, "widthProperty", {
                    //#endregion Fields
                    //#region Properties
                    //#region widthProperty
                    /**
                    * The width of the coordinate space in CSS pixels. Defaults to 300 [MDN].
                    */
                    get: function () {
                        if (!this._widthProperty)
                            initializeProperty(this, 'width', 'width');
                        return this._widthProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(CanvasElement.prototype, "width", {
                    //#endregion widthProperty
                    //#region width
                    /**
                    * The width of the coordinate space in CSS pixels. Defaults to 300 [MDN].
                    */
                    get: function () {
                        return this.widthProperty.value;
                    },
                    set: function (value) {
                        this.widthProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(CanvasElement.prototype, "heightProperty", {
                    //#endregion width
                    //#region heightProperty
                    /**
                    * The height of the coordinate space in CSS pixels. Defaults to 150 [MDN].
                    */
                    get: function () {
                        if (!this._heightProperty)
                            initializeProperty(this, 'height', 'height');
                        return this._heightProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(CanvasElement.prototype, "height", {
                    //#endregion heightProperty
                    //#region height
                    /**
                    * The height of the coordinate space in CSS pixels. Defaults to 150 [MDN].
                    */
                    get: function () {
                        return this.heightProperty.value;
                    },
                    set: function (value) {
                        this.heightProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                CanvasElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'width', true);
                    setPropertyFromConfig(this, config, 'height', true);
                };
                return CanvasElement;
            })(HtmlElementContainer);
            Elements.CanvasElement = CanvasElement;
            //#endregion CanvasElement
            //#region CitationElement
            /**
            * The HTML <cite> Element (or HTML Citation Element) contains the title of a work, such as a book, song, movie, TV show, sculpture, etc [MDN].
            */
            var CitationElement = (function (_super) {
                __extends(CitationElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new CitationElement'.
                */
                function CitationElement(config) {
                    _super.call(this, 'cite', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                CitationElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return CitationElement;
            })(HtmlElementContainer);
            Elements.CitationElement = CitationElement;
            //#endregion CitationElement
            //#region CodeElement
            /**
            * The HTML <code> Element represents a fragment of computer code. By default, it is displayed in the browser's default monospace font [MDN].
            */
            var CodeElement = (function (_super) {
                __extends(CodeElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new CodeElement'.
                */
                function CodeElement(config) {
                    _super.call(this, 'code', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                CodeElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return CodeElement;
            })(HtmlElementContainer);
            Elements.CodeElement = CodeElement;
            //#endregion CodeElement
            //#region DataElement
            /**
            * The HTML <data> Element links a given content with a machine-readable translation. If the content is time- or date-related, the <time> must be used [MDN].
            */
            var DataElement = (function (_super) {
                __extends(DataElement, _super);
                //#endregion value
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new DataElement'.
                */
                function DataElement(config) {
                    _super.call(this, 'data', config);
                }
                Object.defineProperty(DataElement.prototype, "valueProperty", {
                    //#endregion Fields
                    //#region Properties
                    //#region valueProperty
                    /**
                    * This attribute specifies the machine-readable translation of the content of the element [MDN].
                    */
                    get: function () {
                        if (!this._valueProperty)
                            initializeProperty(this, 'value', 'nodeValue');
                        return this._valueProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DataElement.prototype, "value", {
                    //#endregion valueProperty
                    //#region value
                    /**
                    * This attribute specifies the machine-readable translation of the content of the element [MDN].
                    */
                    get: function () {
                        return this.valueProperty.value;
                    },
                    set: function (value) {
                        this.valueProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                DataElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'value', true);
                };
                return DataElement;
            })(HtmlElementContainer);
            Elements.DataElement = DataElement;
            //#endregion DataElement
            //#region DataListElement
            /**
            * The HTML <datalist> Element contains a set of <option> elements that represent the possible options for the value of other controls [MDN].
            */
            var DataListElement = (function (_super) {
                __extends(DataListElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new DataListElement'.
                */
                function DataListElement(config) {
                    _super.call(this, 'datalist', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                DataListElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return DataListElement;
            })(HtmlElementContainer);
            Elements.DataListElement = DataListElement;
            //#endregion DataListElement
            //#region DefinitionElement
            /**
            * The HTML <dfn> element (or HTML Definition Element) represents the defining instance of a term [MDN].
            */
            var DefinitionElement = (function (_super) {
                __extends(DefinitionElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new DefinitionElement'.
                */
                function DefinitionElement(config) {
                    _super.call(this, 'dfn', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                DefinitionElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return DefinitionElement;
            })(HtmlElementContainer);
            Elements.DefinitionElement = DefinitionElement;
            //#endregion DefinitionElement
            //#region DefinitionTermElement
            /**
            * The HTML <dt> element (or HTML Definition Term Element) identifies a term in a definition list. This element can occur only as a child element of a <dl>. It is usually followed by a <dd> element; however, multiple <dt> elements in a row indicate several terms that are all defined by the immediate next <dd> element [MDN].
            */
            var DefinitionTermElement = (function (_super) {
                __extends(DefinitionTermElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new DefinitionTermElement'.
                */
                function DefinitionTermElement(config) {
                    _super.call(this, 'dt', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                DefinitionTermElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return DefinitionTermElement;
            })(HtmlElementContainer);
            Elements.DefinitionTermElement = DefinitionTermElement;
            //#endregion DefinitionTermElement
            //#region DeletedTextElement
            /**
            * The HTML <del> element (or HTML Deleted Text Element) represents a range of text that has been deleted from a document. This element is often (but need not be) rendered with strike-through text [MDN].
            */
            var DeletedTextElement = (function (_super) {
                __extends(DeletedTextElement, _super);
                //#endregion citation
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new DeletedTextElement'.
                */
                function DeletedTextElement(config) {
                    _super.call(this, 'del', config);
                }
                Object.defineProperty(DeletedTextElement.prototype, "citationProperty", {
                    //#endregion Fields
                    //#region Properties
                    //#region citationProperty
                    /**
                    * A URI for a resource that explains the change (for example, meeting minutes) [MDN].
                    */
                    get: function () {
                        if (!this._citationProperty)
                            initializeProperty(this, 'citation', 'cite');
                        return this._citationProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DeletedTextElement.prototype, "citation", {
                    //#endregion citationProperty
                    //#region citation
                    /**
                    * A URI for a resource that explains the change (for example, meeting minutes) [MDN].
                    */
                    get: function () {
                        return this.citationProperty.value;
                    },
                    set: function (value) {
                        this.citationProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                DeletedTextElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'citation', true);
                };
                return DeletedTextElement;
            })(HtmlElementContainer);
            Elements.DeletedTextElement = DeletedTextElement;
            //#endregion DeletedTextElement
            //#region DescriptionElement
            /**
            * The HTML <dd> Element (or HTML Description Element) indicates the description of a term in a description list (<dl>) element. This element can occur only as a child element of a definition list and it must follow a <dt> element [MDN].
            */
            var DescriptionElement = (function (_super) {
                __extends(DescriptionElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new DescriptionElement'.
                */
                function DescriptionElement(config) {
                    _super.call(this, 'dd', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                DescriptionElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return DescriptionElement;
            })(HtmlElementContainer);
            Elements.DescriptionElement = DescriptionElement;
            //#endregion DescriptionElement
            //#region DescriptionListElement
            /**
            * The HTML <dl> Element (or HTML Description List Element) encloses a list of pairs of terms and descriptions. Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs) [MDN].
            */
            var DescriptionListElement = (function (_super) {
                __extends(DescriptionListElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new DescriptionListElement'.
                */
                function DescriptionListElement(config) {
                    _super.call(this, 'dl', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                DescriptionListElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return DescriptionListElement;
            })(HtmlElementContainer);
            Elements.DescriptionListElement = DescriptionListElement;
            //#endregion DescriptionListElement
            //#region DetailsElement
            /**
            * The HTML <details> Element is used as a disclosure widget from which the user can retrieve additional information [MDN].
            */
            var DetailsElement = (function (_super) {
                __extends(DetailsElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new DetailsElement'.
                */
                function DetailsElement(config) {
                    _super.call(this, 'details', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                DetailsElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return DetailsElement;
            })(HtmlElementContainer);
            Elements.DetailsElement = DetailsElement;
            //#endregion DetailsElement
            //#region DivisionElement
            /**
            * The HTML <div> element (or HTML Document Division Element) is the generic container for flow content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element (such as <article> or <nav>) is appropriate [MDN].
            */
            var DivisionElement = (function (_super) {
                __extends(DivisionElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new DivisionElement'.
                */
                function DivisionElement(config) {
                    _super.call(this, 'div', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                DivisionElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return DivisionElement;
            })(HtmlElementContainer);
            Elements.DivisionElement = DivisionElement;
            //#endregion DivisionElement
            //#region EmbedElement
            /**
            * The HTML <embed> Element represents an integration point for an external application or interactive content (in other words, a plug-in) [MDN].
            */
            var EmbedElement = (function (_super) {
                __extends(EmbedElement, _super);
                //#endregion width
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new EmbedElement'.
                */
                function EmbedElement(config) {
                    _super.call(this, 'embed', config);
                }
                Object.defineProperty(EmbedElement.prototype, "heightProperty", {
                    //#endregion Fields
                    //#region Properties
                    //#region heightProperty
                    /**
                    * The displayed height of the resource, in CSS pixels [MDN].
                    */
                    get: function () {
                        if (!this._heightProperty)
                            initializeProperty(this, 'height', 'height');
                        return this._heightProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(EmbedElement.prototype, "height", {
                    //#endregion heightProperty
                    //#region height
                    /**
                    * The displayed height of the resource, in CSS pixels [MDN].
                    */
                    get: function () {
                        return this.heightProperty.value;
                    },
                    set: function (value) {
                        this.heightProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(EmbedElement.prototype, "sourceProperty", {
                    //#endregion height
                    //#region sourceProperty
                    /**
                    * The URL of the resource being embedded [MDN].
                    */
                    get: function () {
                        if (!this._sourceProperty)
                            initializeProperty(this, 'source', 'src');
                        return this._sourceProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(EmbedElement.prototype, "source", {
                    //#endregion sourceProperty
                    //#region source
                    /**
                    * The URL of the resource being embedded [MDN].
                    */
                    get: function () {
                        return this.sourceProperty.value;
                    },
                    set: function (value) {
                        this.sourceProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(EmbedElement.prototype, "widthProperty", {
                    //#endregion source
                    //#region widthProperty
                    /**
                    * The displayed width of the resource, in CSS pixels [MDN].
                    */
                    get: function () {
                        if (!this._widthProperty)
                            initializeProperty(this, 'width', 'width');
                        return this._widthProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(EmbedElement.prototype, "width", {
                    //#endregion widthProperty
                    //#region width
                    /**
                    * The displayed width of the resource, in CSS pixels [MDN].
                    */
                    get: function () {
                        return this.widthProperty.value;
                    },
                    set: function (value) {
                        this.widthProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                EmbedElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'height', true);
                    setPropertyFromConfig(this, config, 'source', true);
                    setPropertyFromConfig(this, config, 'width', true);
                };
                return EmbedElement;
            })(HtmlElement);
            Elements.EmbedElement = EmbedElement;
            //#endregion EmbedElement
            //#region EmbeddedObjectElement
            /**
            * The HTML <object> Element (or HTML Embedded Object Element) represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin [MDN].
            */
            var EmbeddedObjectElement = (function (_super) {
                __extends(EmbeddedObjectElement, _super);
                //#endregion width
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new EmbeddedObjectElement'.
                */
                function EmbeddedObjectElement(config) {
                    _super.call(this, 'object', config);
                }
                Object.defineProperty(EmbeddedObjectElement.prototype, "dataProperty", {
                    //#endregion Fields
                    //#region Properties
                    //#region dataProperty
                    /**
                    * The address of the resource as a valid URL. At least one of data and type must be defined [MDN].
                    */
                    get: function () {
                        if (!this._dataProperty)
                            initializeProperty(this, 'data', 'data');
                        return this._dataProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(EmbeddedObjectElement.prototype, "data", {
                    //#endregion dataProperty
                    //#region data
                    /**
                    * The address of the resource as a valid URL. At least one of data and type must be defined [MDN].
                    */
                    get: function () {
                        return this.dataProperty.value;
                    },
                    set: function (value) {
                        this.dataProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(EmbeddedObjectElement.prototype, "form", {
                    //#endregion data
                    //#region form
                    /**
                    * The form element, if any, that the object element is associated with (its form owner). The value of the attribute must be an ID of a <form> element in the same document [MDN].
                    */
                    get: function () {
                        return getElementPropertyValue(this, 'form');
                    },
                    set: function (value) {
                        setElementPropertyValue(this, 'form', value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(EmbeddedObjectElement.prototype, "heightProperty", {
                    //#endregion form
                    //#region heightProperty
                    /**
                    * The height of the displayed resource, in CSS pixels [MDN].
                    */
                    get: function () {
                        if (!this._heightProperty)
                            initializeProperty(this, 'height', 'height');
                        return this._heightProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(EmbeddedObjectElement.prototype, "height", {
                    //#endregion heightProperty
                    //#region height
                    /**
                    * The height of the displayed resource, in CSS pixels [MDN].
                    */
                    get: function () {
                        return this.heightProperty.value;
                    },
                    set: function (value) {
                        this.heightProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(EmbeddedObjectElement.prototype, "nameProperty", {
                    //#endregion height
                    //#region nameProperty
                    /**
                    * The name of valid browsing context (HTML5), or the name of the control (HTML 4) [MDN].
                    */
                    get: function () {
                        if (!this._nameProperty)
                            initializeProperty(this, 'name', 'name');
                        return this._nameProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(EmbeddedObjectElement.prototype, "name", {
                    //#endregion nameProperty
                    //#region name
                    /**
                    * The name of valid browsing context (HTML5), or the name of the control (HTML 4) [MDN].
                    */
                    get: function () {
                        return this.nameProperty.value;
                    },
                    set: function (value) {
                        this.nameProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(EmbeddedObjectElement.prototype, "typeProperty", {
                    //#endregion name
                    //#region typeProperty
                    /**
                    * The MIME type of the resource specified by data. At least one of data and type must be defined [MDN].
                    */
                    get: function () {
                        if (!this._typeProperty)
                            initializeProperty(this, 'type', 'type');
                        return this._typeProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(EmbeddedObjectElement.prototype, "type", {
                    //#endregion typeProperty
                    //#region type
                    /**
                    * The MIME type of the resource specified by data. At least one of data and type must be defined [MDN].
                    */
                    get: function () {
                        return this.typeProperty.value;
                    },
                    set: function (value) {
                        this.typeProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(EmbeddedObjectElement.prototype, "widthProperty", {
                    //#endregion type
                    //#region widthProperty
                    /**
                    * The width of the display resource, in CSS pixels [MDN].
                    */
                    get: function () {
                        if (!this._widthProperty)
                            initializeProperty(this, 'width', 'width');
                        return this._widthProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(EmbeddedObjectElement.prototype, "width", {
                    //#endregion widthProperty
                    //#region width
                    /**
                    * The width of the display resource, in CSS pixels [MDN].
                    */
                    get: function () {
                        return this.widthProperty.value;
                    },
                    set: function (value) {
                        this.widthProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                EmbeddedObjectElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'data', true);
                    setElementPropertyFromConfig(this, config, 'form');
                    setPropertyFromConfig(this, config, 'height', true);
                    setPropertyFromConfig(this, config, 'name', true);
                    setPropertyFromConfig(this, config, 'type', true);
                    setPropertyFromConfig(this, config, 'width', true);
                };
                return EmbeddedObjectElement;
            })(HtmlElementContainer);
            Elements.EmbeddedObjectElement = EmbeddedObjectElement;
            //#endregion EmbeddedObjectElement
            //#region EmphasisElement
            /**
            * The HTML <em> element (or HTML Emphasis Element) marks text that has stress emphasis. The <em> element can be nested, with each level of nesting indicating a greater degree of emphasis [MDN].
            */
            var EmphasisElement = (function (_super) {
                __extends(EmphasisElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new EmphasisElement'.
                */
                function EmphasisElement(config) {
                    _super.call(this, 'em', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                EmphasisElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return EmphasisElement;
            })(HtmlElementContainer);
            Elements.EmphasisElement = EmphasisElement;
            //#endregion EmphasisElement
            //#region FieldsetElement
            /**
            * The HTML <fieldset> element is used to group several controls as well as labels (<label>) within a web form [MDN].
            */
            var FieldsetElement = (function (_super) {
                __extends(FieldsetElement, _super);
                //#endregion form
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new FieldsetElement'.
                */
                function FieldsetElement(config) {
                    _super.call(this, 'fieldset', config);
                }
                Object.defineProperty(FieldsetElement.prototype, "disabledProperty", {
                    //#endregion Fields
                    //#region Properties
                    //#region disabledProperty
                    /**
                    * If this Boolean attribute is set, the form controls that are its descendants, except descendants of its first optional <legend> element, are disabled, i.e., not editable. They won't receive any browsing events, like mouse clicks or focus-related ones. Often browsers display such controls as gray [MDN].
                    */
                    get: function () {
                        if (!this._disabledProperty)
                            initializeProperty(this, 'disabled', 'disabled');
                        return this._disabledProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FieldsetElement.prototype, "disabled", {
                    //#endregion disabledProperty
                    //#region disabled
                    /**
                    * If this Boolean attribute is set, the form controls that are its descendants, except descendants of its first optional <legend> element, are disabled, i.e., not editable. They won't receive any browsing events, like mouse clicks or focus-related ones. Often browsers display such controls as gray [MDN].
                    */
                    get: function () {
                        return this.disabledProperty.value;
                    },
                    set: function (value) {
                        this.disabledProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FieldsetElement.prototype, "form", {
                    //#endregion disabled
                    //#region form
                    /**
                    * This attribute has the value of the id attribute of the <form> element its related to. Its default value is the id of the nearest <form> element it is a descendant of [MDN].
                    */
                    get: function () {
                        return getElementPropertyValue(this, 'form');
                    },
                    set: function (value) {
                        setElementPropertyValue(this, 'form', value);
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                FieldsetElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'disabled', true);
                    setElementPropertyFromConfig(this, config, 'form');
                };
                return FieldsetElement;
            })(HtmlElementContainer);
            Elements.FieldsetElement = FieldsetElement;
            //#endregion FieldsetElement
            //#region FigureElement
            /**
            * The HTML <figure> Element represents self-contained content, frequently with a caption (<figcaption>), and is typically referenced as a single unit. While it is related to the main flow, its position is independent of the main flow. Usually this is an image, an illustration, a diagram, a code snippet, or a schema that is referenced in the main text, but that can be moved to another page or to an appendix without affecting the main flow [MDN].
            */
            var FigureElement = (function (_super) {
                __extends(FigureElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new FigureElement'.
                */
                function FigureElement(config) {
                    _super.call(this, 'figure', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                FigureElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return FigureElement;
            })(HtmlElementContainer);
            Elements.FigureElement = FigureElement;
            //#endregion FigureElement
            //#region FigureCaptionElement
            /**
            * The HTML <figcaption> Element represents a caption or a legend associated with a figure or an illustration described by the rest of the data of the <figure> element which is its immediate ancestor which means <figcaption> can be the first or last element inside a <figure> block. Also, the HTML Figcaption Element is optional; if not provided, then the parent figure element will have no caption [MDN].
            */
            var FigureCaptionElement = (function (_super) {
                __extends(FigureCaptionElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new FigureCaptionElement'.
                */
                function FigureCaptionElement(config) {
                    _super.call(this, 'figcaption', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                FigureCaptionElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return FigureCaptionElement;
            })(HtmlElementContainer);
            Elements.FigureCaptionElement = FigureCaptionElement;
            //#endregion FigureCaptionElement
            //#region FooterElement
            /**
            * The HTML <footer> Element represents a footer for its nearest sectioning content or sectioning root element (i.e, its nearest parent <article>, <aside>, <nav>, <section>, <blockquote>, <body>, <details>, <fieldset>, <figure>, <td>). A footer typically contains information about the author of the section, copyright data or links to related documents [MDN].
            */
            var FooterElement = (function (_super) {
                __extends(FooterElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new FooterElement'.
                */
                function FooterElement(config) {
                    _super.call(this, 'footer', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                FooterElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return FooterElement;
            })(HtmlElementContainer);
            Elements.FooterElement = FooterElement;
            //#endregion FooterElement
            //#region FormElement
            /**
            * The HTML <form> element represents a section of document that contains interactive controls that enable a user to submit information to a web server [MDN].
            */
            var FormElement = (function (_super) {
                __extends(FormElement, _super);
                //#endregion submitEvent
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new FormElement'.
                */
                function FormElement(config) {
                    _super.call(this, 'form', config);
                }
                Object.defineProperty(FormElement.prototype, "acceptCharsetProperty", {
                    //#endregion Fields
                    //#region Properties
                    //#region acceptCharsetProperty
                    /**
                    * A list of character encodings that the server accepts. The list can be delimited by spaces or commas. The browser uses in the order in which they are listed. The default value is the reserved string "UNKNOWN", in which case the encoding corresponds to the encoding of the document containing the form element. HTML 4: In previous versions of HTML, the different character encodings could be delimited by spaces or commas. This is no longer the case in HTML5, where only spaces are correct [MDN].
                    */
                    get: function () {
                        if (!this._acceptCharsetProperty)
                            initializeProperty(this, 'acceptCharset', 'acceptCharset');
                        return this._acceptCharsetProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormElement.prototype, "acceptCharset", {
                    //#endregion acceptCharsetProperty
                    //#region acceptCharset
                    /**
                    * A list of character encodings that the server accepts. The list can be delimited by spaces or commas. The browser uses in the order in which they are listed. The default value is the reserved string "UNKNOWN", in which case the encoding corresponds to the encoding of the document containing the form element. HTML 4: In previous versions of HTML, the different character encodings could be delimited by spaces or commas. This is no longer the case in HTML5, where only spaces are correct [MDN].
                    */
                    get: function () {
                        return this.acceptCharsetProperty.value;
                    },
                    set: function (value) {
                        this.acceptCharsetProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormElement.prototype, "actionProperty", {
                    //#endregion acceptCharset
                    //#region actionProperty
                    /**
                    * The URI of a program that processes the information submitted via the form. This value can be overridden by a formaction attribute on a <button> or <input> element [MDN].
                    */
                    get: function () {
                        if (!this._actionProperty)
                            initializeProperty(this, 'action', 'action');
                        return this._actionProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormElement.prototype, "action", {
                    //#endregion actionProperty
                    //#region action
                    /**
                    * The URI of a program that processes the information submitted via the form. This value can be overridden by a formaction attribute on a <button> or <input> element [MDN].
                    */
                    get: function () {
                        return this.actionProperty.value;
                    },
                    set: function (value) {
                        this.actionProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormElement.prototype, "autoCompleteProperty", {
                    //#endregion action
                    //#region autoCompleteProperty
                    /**
                    * Html.FormAutoComplete enumerates the values of this property.
                    * Indicates whether controls in this form can by default have their values automatically completed by the browser. This setting can be overridden by an autocomplete attribute on an element belonging to the form. Possible values are:  off: The user must explicitly enter a value into each field for every use, or the document provides its own auto-completion method; the browser does not automatically complete entries. on: The browser can automatically complete values based on values that the user has entered during previous uses of the form.
                    * Note: If you set autocomplete to off in a form because the document provides its own auto-completion, then you should also set autocomplete to off for each of the form's input elements that the document can auto-complete. For details, see Google Chrome notes [MDN].
                    */
                    get: function () {
                        if (!this._autoCompleteProperty)
                            initializeProperty(this, 'autoComplete', 'autocomplete');
                        return this._autoCompleteProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormElement.prototype, "autoComplete", {
                    //#endregion autoCompleteProperty
                    //#region autoComplete
                    /**
                    * Html.FormAutoComplete enumerates the values of this property.
                    * Indicates whether controls in this form can by default have their values automatically completed by the browser. This setting can be overridden by an autocomplete attribute on an element belonging to the form. Possible values are:  off: The user must explicitly enter a value into each field for every use, or the document provides its own auto-completion method; the browser does not automatically complete entries. on: The browser can automatically complete values based on values that the user has entered during previous uses of the form.
                    * Note: If you set autocomplete to off in a form because the document provides its own auto-completion, then you should also set autocomplete to off for each of the form's input elements that the document can auto-complete. For details, see Google Chrome notes [MDN].
                    */
                    get: function () {
                        return this.autoCompleteProperty.value;
                    },
                    set: function (value) {
                        this.autoCompleteProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormElement.prototype, "encodingTypeProperty", {
                    //#endregion autoComplete
                    //#region encodingTypeProperty
                    /**
                    * Html.FormEncodingType enumerates the values of this property.
                    * When the value of the method attribute is post, this attribute is the MIME type of content that is used to submit the form to the server. Possible values are:  application/x-www-form-urlencoded: The default value if the attribute is not specified. multipart/form-data: Use this value if you are using an <input> element with the type attribute set to "file". text/plain (HTML5) This value can be overridden by a formenctype attribute on a <button> or <input> element [MDN].
                    */
                    get: function () {
                        if (!this._encodingTypeProperty)
                            initializeProperty(this, 'encodingType', 'enctype');
                        return this._encodingTypeProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormElement.prototype, "encodingType", {
                    //#endregion encodingTypeProperty
                    //#region encodingType
                    /**
                    * Html.FormEncodingType enumerates the values of this property.
                    * When the value of the method attribute is post, this attribute is the MIME type of content that is used to submit the form to the server. Possible values are:  application/x-www-form-urlencoded: The default value if the attribute is not specified. multipart/form-data: Use this value if you are using an <input> element with the type attribute set to "file". text/plain (HTML5) This value can be overridden by a formenctype attribute on a <button> or <input> element [MDN].
                    */
                    get: function () {
                        return this.encodingTypeProperty.value;
                    },
                    set: function (value) {
                        this.encodingTypeProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormElement.prototype, "methodProperty", {
                    //#endregion encodingType
                    //#region methodProperty
                    /**
                    * Html.FormMethod enumerates the values of this property.
                    * The HTTP method that the browser uses to submit the form. Possible values are:  post: Corresponds to the HTTP POST method ; the data from the form is included in the body of the form and is sent to the server. get: Corresponds to the HTTP GET method; the data from the form are appended to the action attribute URI, with a '?' as a separator, and the resulting URI is sent to the server. Use this method when the form has no side-effects and contains only ASCII characters. This value can be overridden by a formmethod attribute on a <button> or <input> element [MDN].
                    */
                    get: function () {
                        if (!this._methodProperty)
                            initializeProperty(this, 'method', 'method');
                        return this._methodProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormElement.prototype, "method", {
                    //#endregion methodProperty
                    //#region method
                    /**
                    * Html.FormMethod enumerates the values of this property.
                    * The HTTP method that the browser uses to submit the form. Possible values are:  post: Corresponds to the HTTP POST method ; the data from the form is included in the body of the form and is sent to the server. get: Corresponds to the HTTP GET method; the data from the form are appended to the action attribute URI, with a '?' as a separator, and the resulting URI is sent to the server. Use this method when the form has no side-effects and contains only ASCII characters. This value can be overridden by a formmethod attribute on a <button> or <input> element [MDN].
                    */
                    get: function () {
                        return this.methodProperty.value;
                    },
                    set: function (value) {
                        this.methodProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormElement.prototype, "nameProperty", {
                    //#endregion method
                    //#region nameProperty
                    /**
                    * The name of the form. In HTML 4 its use is deprecated (id should be used instead). It must be unique among the forms in a document and not the empty string in HTML 5 [MDN].
                    */
                    get: function () {
                        if (!this._nameProperty)
                            initializeProperty(this, 'name', 'name');
                        return this._nameProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormElement.prototype, "name", {
                    //#endregion nameProperty
                    //#region name
                    /**
                    * The name of the form. In HTML 4 its use is deprecated (id should be used instead). It must be unique among the forms in a document and not the empty string in HTML 5 [MDN].
                    */
                    get: function () {
                        return this.nameProperty.value;
                    },
                    set: function (value) {
                        this.nameProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormElement.prototype, "targetProperty", {
                    //#endregion name
                    //#region targetProperty
                    /**
                    * Html.FormTarget enumerates the values of this property.
                    * A name or keyword indicating where to display the response that is received after submitting the form. In HTML 4, this is the name of, or a keyword for, a frame. In HTML5, it is a name of, or keyword for, a browsing context (for example, tab, window, or inline frame). The following keywords have special meanings:  _self: Load the response into the same HTML 4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified. _blank: Load the response into a new unnamed HTML 4 window or HTML5 browsing context. _parent: Load the response into the HTML 4 frameset parent of the current frame or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as _self. _top: HTML 4: Load the response into the full, original window, canceling all other frames. HTML5: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as _self. iframename: The response is displayed in a named <iframe>. HTML5: This value can be overridden by a formtarget attribute on a <button> or <input> element [MDN].
                    */
                    get: function () {
                        if (!this._targetProperty)
                            initializeProperty(this, 'target', 'target');
                        return this._targetProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormElement.prototype, "target", {
                    //#endregion targetProperty
                    //#region target
                    /**
                    * Html.FormTarget enumerates the values of this property.
                    * A name or keyword indicating where to display the response that is received after submitting the form. In HTML 4, this is the name of, or a keyword for, a frame. In HTML5, it is a name of, or keyword for, a browsing context (for example, tab, window, or inline frame). The following keywords have special meanings:  _self: Load the response into the same HTML 4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified. _blank: Load the response into a new unnamed HTML 4 window or HTML5 browsing context. _parent: Load the response into the HTML 4 frameset parent of the current frame or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as _self. _top: HTML 4: Load the response into the full, original window, canceling all other frames. HTML5: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as _self. iframename: The response is displayed in a named <iframe>. HTML5: This value can be overridden by a formtarget attribute on a <button> or <input> element [MDN].
                    */
                    get: function () {
                        return this.targetProperty.value;
                    },
                    set: function (value) {
                        this.targetProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormElement.prototype, "resetEvent", {
                    //#endregion target
                    //#region resetEvent
                    /**
                    * The resetEvent event is executed when a form is reset [MDN].
                    * Specifications: DOM L2, HTML5
                    * DOM Event Name: reset
                    */
                    get: function () {
                        if (!this._resetEvent)
                            this._resetEvent = new Html.HtmlElementEvent('reset', 'Event', this);
                        return this._resetEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormElement.prototype, "submitEvent", {
                    //#endregion resetEvent
                    //#region submitEvent
                    /**
                    * The submitEvent event is executed when a form is submitted [MDN].
                    * Specifications: DOM L2, HTML5
                    * DOM Event Name: submit
                    */
                    get: function () {
                        if (!this._submitEvent)
                            this._submitEvent = new Html.HtmlElementEvent('submit', 'Event', this);
                        return this._submitEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                FormElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'acceptCharset', true);
                    setPropertyFromConfig(this, config, 'action', true);
                    setPropertyFromConfig(this, config, 'autoComplete', true);
                    setPropertyFromConfig(this, config, 'encodingType', true);
                    setPropertyFromConfig(this, config, 'method', true);
                    setPropertyFromConfig(this, config, 'name', true);
                    setPropertyFromConfig(this, config, 'target', true);
                    if (config.resetHandler)
                        this.resetEvent.subscribe(config.resetHandler);
                    if (config.submitHandler)
                        this.submitEvent.subscribe(config.submitHandler);
                };
                return FormElement;
            })(HtmlElementContainer);
            Elements.FormElement = FormElement;
            //#endregion FormElement
            //#region HeadElement
            /**
            * The HTML <head> element represents a collection of metadata about the document, including links to or definitions of scripts and style sheets [MDN].
            */
            var HeadElement = (function (_super) {
                __extends(HeadElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new HeadElement'.
                */
                function HeadElement(config) {
                    _super.call(this, 'head', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                HeadElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return HeadElement;
            })(HtmlElementContainer);
            Elements.HeadElement = HeadElement;
            //#endregion HeadElement
            //#region HeaderElement
            /**
            * The HTML <header> Element represents a group of introductory or navigational aids. It may contain some heading elements but also other elements like a logo, wrapped section's header, a search form, and so on [MDN].
            */
            var HeaderElement = (function (_super) {
                __extends(HeaderElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new HeaderElement'.
                */
                function HeaderElement(config) {
                    _super.call(this, 'header', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                HeaderElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return HeaderElement;
            })(HtmlElementContainer);
            Elements.HeaderElement = HeaderElement;
            //#endregion HeaderElement
            //#region HeaderFiveElement
            /**
            * Heading elements implement six levels of document headings, <h1> is the most important and <h6> is the least. A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically [MDN].
            */
            var HeaderFiveElement = (function (_super) {
                __extends(HeaderFiveElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new HeaderFiveElement'.
                */
                function HeaderFiveElement(config) {
                    _super.call(this, 'h5', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                HeaderFiveElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return HeaderFiveElement;
            })(HtmlElementContainer);
            Elements.HeaderFiveElement = HeaderFiveElement;
            //#endregion HeaderFiveElement
            //#region HeaderFourElement
            /**
            * Heading elements implement six levels of document headings, <h1> is the most important and <h6> is the least. A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically [MDN].
            */
            var HeaderFourElement = (function (_super) {
                __extends(HeaderFourElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new HeaderFourElement'.
                */
                function HeaderFourElement(config) {
                    _super.call(this, 'h4', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                HeaderFourElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return HeaderFourElement;
            })(HtmlElementContainer);
            Elements.HeaderFourElement = HeaderFourElement;
            //#endregion HeaderFourElement
            //#region HeaderOneElement
            /**
            * Heading elements implement six levels of document headings, <h1> is the most important and <h6> is the least. A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically [MDN].
            */
            var HeaderOneElement = (function (_super) {
                __extends(HeaderOneElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new HeaderOneElement'.
                */
                function HeaderOneElement(config) {
                    _super.call(this, 'h1', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                HeaderOneElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return HeaderOneElement;
            })(HtmlElementContainer);
            Elements.HeaderOneElement = HeaderOneElement;
            //#endregion HeaderOneElement
            //#region HeaderSixElement
            /**
            * Heading elements implement six levels of document headings, <h1> is the most important and <h6> is the least. A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically [MDN].
            */
            var HeaderSixElement = (function (_super) {
                __extends(HeaderSixElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new HeaderSixElement'.
                */
                function HeaderSixElement(config) {
                    _super.call(this, 'h6', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                HeaderSixElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return HeaderSixElement;
            })(HtmlElementContainer);
            Elements.HeaderSixElement = HeaderSixElement;
            //#endregion HeaderSixElement
            //#region HeaderThreeElement
            /**
            * Heading elements implement six levels of document headings, <h1> is the most important and <h6> is the least. A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically [MDN].
            */
            var HeaderThreeElement = (function (_super) {
                __extends(HeaderThreeElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new HeaderThreeElement'.
                */
                function HeaderThreeElement(config) {
                    _super.call(this, 'h3', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                HeaderThreeElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return HeaderThreeElement;
            })(HtmlElementContainer);
            Elements.HeaderThreeElement = HeaderThreeElement;
            //#endregion HeaderThreeElement
            //#region HeaderTwoElement
            /**
            * Heading elements implement six levels of document headings, <h1> is the most important and <h6> is the least. A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically [MDN].
            */
            var HeaderTwoElement = (function (_super) {
                __extends(HeaderTwoElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new HeaderTwoElement'.
                */
                function HeaderTwoElement(config) {
                    _super.call(this, 'h2', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                HeaderTwoElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return HeaderTwoElement;
            })(HtmlElementContainer);
            Elements.HeaderTwoElement = HeaderTwoElement;
            //#endregion HeaderTwoElement
            //#region HorizontalRuleElement
            /**
            * In HTML5 the HTML <hr> element represents a thematic break between paragraph-level elements (for example, a change of scene in a story, or a shift of topic with a section). In previous versions of HTML, it represented a horizontal rule. It may still be displayed as a horizontal rule in visual browsers, but is now defined in semantic terms, rather than presentational terms [MDN].
            */
            var HorizontalRuleElement = (function (_super) {
                __extends(HorizontalRuleElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new HorizontalRuleElement'.
                */
                function HorizontalRuleElement(config) {
                    _super.call(this, 'hr', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                HorizontalRuleElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return HorizontalRuleElement;
            })(HtmlElement);
            Elements.HorizontalRuleElement = HorizontalRuleElement;
            //#endregion HorizontalRuleElement
            //#region ImageElement
            /**
            * The HTML <img> Element (or HTML Image Element) represents an image of the document [MDN].
            */
            var ImageElement = (function (_super) {
                __extends(ImageElement, _super);
                //#endregion errorEvent
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new ImageElement'.
                */
                function ImageElement(config) {
                    _super.call(this, 'img', config);
                }
                Object.defineProperty(ImageElement.prototype, "alternateProperty", {
                    //#endregion Fields
                    //#region Properties
                    //#region alternateProperty
                    /**
                    * This attribute defines the alternative text describing the image. Users will see this displayed if the image URL is wrong, the image is not in one of the supported formats, or until the image is downloaded.
                    * Note: Omitting this attribute indicates that the image is a key part of the content, but no textual equivalent is available. Setting this attribute to the empty string indicates that this image is not a key part of the content; non-visual browsers may omit it from the rendering [MDN].
                    */
                    get: function () {
                        if (!this._alternateProperty)
                            initializeProperty(this, 'alternate', 'alt');
                        return this._alternateProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ImageElement.prototype, "alternate", {
                    //#endregion alternateProperty
                    //#region alternate
                    /**
                    * This attribute defines the alternative text describing the image. Users will see this displayed if the image URL is wrong, the image is not in one of the supported formats, or until the image is downloaded.
                    * Note: Omitting this attribute indicates that the image is a key part of the content, but no textual equivalent is available. Setting this attribute to the empty string indicates that this image is not a key part of the content; non-visual browsers may omit it from the rendering [MDN].
                    */
                    get: function () {
                        return this.alternateProperty.value;
                    },
                    set: function (value) {
                        this.alternateProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ImageElement.prototype, "heightProperty", {
                    //#endregion alternate
                    //#region heightProperty
                    /**
                    * The height of the image in HTML5 CSS pixels, or HTML 4 in pixels or as a percentage [MDN].
                    */
                    get: function () {
                        if (!this._heightProperty)
                            initializeProperty(this, 'height', 'height');
                        return this._heightProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ImageElement.prototype, "height", {
                    //#endregion heightProperty
                    //#region height
                    /**
                    * The height of the image in HTML5 CSS pixels, or HTML 4 in pixels or as a percentage [MDN].
                    */
                    get: function () {
                        return this.heightProperty.value;
                    },
                    set: function (value) {
                        this.heightProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ImageElement.prototype, "longDescriptionProperty", {
                    //#endregion height
                    //#region longDescriptionProperty
                    /**
                    * The URL of a description of the image to be displayed, which supplements the alt text. In HTML5, use a regular <a> element to link to the description [MDN].
                    */
                    get: function () {
                        if (!this._longDescriptionProperty)
                            initializeProperty(this, 'longDescription', 'longDesc');
                        return this._longDescriptionProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ImageElement.prototype, "longDescription", {
                    //#endregion longDescriptionProperty
                    //#region longDescription
                    /**
                    * The URL of a description of the image to be displayed, which supplements the alt text. In HTML5, use a regular <a> element to link to the description [MDN].
                    */
                    get: function () {
                        return this.longDescriptionProperty.value;
                    },
                    set: function (value) {
                        this.longDescriptionProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ImageElement.prototype, "sourceProperty", {
                    //#endregion longDescription
                    //#region sourceProperty
                    /**
                    * Image URL, this attribute is obligatory for the <img> element [MDN].
                    */
                    get: function () {
                        if (!this._sourceProperty)
                            initializeProperty(this, 'source', 'src');
                        return this._sourceProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ImageElement.prototype, "source", {
                    //#endregion sourceProperty
                    //#region source
                    /**
                    * Image URL, this attribute is obligatory for the <img> element [MDN].
                    */
                    get: function () {
                        return this.sourceProperty.value;
                    },
                    set: function (value) {
                        this.sourceProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ImageElement.prototype, "widthProperty", {
                    //#endregion source
                    //#region widthProperty
                    /**
                    * The width of the image in pixels or percent [MDN].
                    */
                    get: function () {
                        if (!this._widthProperty)
                            initializeProperty(this, 'width', 'width');
                        return this._widthProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ImageElement.prototype, "width", {
                    //#endregion widthProperty
                    //#region width
                    /**
                    * The width of the image in pixels or percent [MDN].
                    */
                    get: function () {
                        return this.widthProperty.value;
                    },
                    set: function (value) {
                        this.widthProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ImageElement.prototype, "abortEvent", {
                    //#endregion width
                    //#region abortEvent
                    /**
                    * The abortEvent event is executed when the loading of a resource has been aborted [MDN].
                    * Specification: DOM L3
                    * DOM Event Name: abort
                    */
                    get: function () {
                        if (!this._abortEvent)
                            this._abortEvent = new Html.HtmlElementEvent('abort', 'UIEvent', this);
                        return this._abortEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ImageElement.prototype, "errorEvent", {
                    //#endregion abortEvent
                    //#region errorEvent
                    /**
                    * The errorEvent event is executed when a resource failed to load [MDN].
                    * Specification: DOM L3
                    * DOM Event Name: error
                    */
                    get: function () {
                        if (!this._errorEvent)
                            this._errorEvent = new Html.HtmlElementEvent('error', 'UIEvent', this);
                        return this._errorEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                ImageElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'alternate', true);
                    setPropertyFromConfig(this, config, 'height', true);
                    setPropertyFromConfig(this, config, 'longDescription', true);
                    setPropertyFromConfig(this, config, 'source', true);
                    setPropertyFromConfig(this, config, 'width', true);
                    if (config.abortHandler)
                        this.abortEvent.subscribe(config.abortHandler);
                    if (config.errorHandler)
                        this.errorEvent.subscribe(config.errorHandler);
                };
                return ImageElement;
            })(HtmlElement);
            Elements.ImageElement = ImageElement;
            //#endregion ImageElement
            //#region InlineFrameElement
            /**
            * The HTML <iframe> Element (or HTML inline frame element) represents a nested browsing context, effectively embedding another HTML page into the current page. In HTML 4.01, a document may contain a head and a body or a head and a frame-set, but not both a body and a frame-set. However,an <iframe> can be used within a normal document body. Each browsing context has its own session history and active document. The browsing context that contains the embedded content is called the parent browsing context. The top-level browsing context (which has no parent) is typically the browser window [MDN].
            */
            var InlineFrameElement = (function (_super) {
                __extends(InlineFrameElement, _super);
                //#endregion width
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new InlineFrameElement'.
                */
                function InlineFrameElement(config) {
                    _super.call(this, 'iframe', config);
                }
                Object.defineProperty(InlineFrameElement.prototype, "heightProperty", {
                    //#endregion Fields
                    //#region Properties
                    //#region heightProperty
                    /**
                    * Indicates the height of the frame HTML5 in CSS pixels, or HTML 4.01 in pixels or as a percentage [MDN].
                    */
                    get: function () {
                        if (!this._heightProperty)
                            initializeProperty(this, 'height', 'height');
                        return this._heightProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InlineFrameElement.prototype, "height", {
                    //#endregion heightProperty
                    //#region height
                    /**
                    * Indicates the height of the frame HTML5 in CSS pixels, or HTML 4.01 in pixels or as a percentage [MDN].
                    */
                    get: function () {
                        return this.heightProperty.value;
                    },
                    set: function (value) {
                        this.heightProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InlineFrameElement.prototype, "nameProperty", {
                    //#endregion height
                    //#region nameProperty
                    /**
                    * A name for the embedded browsing context (or frame). This can be used as the value of the target attribute of an <a> or <form> element, or the formtarget attribute of an <input> or <button> element [MDN].
                    */
                    get: function () {
                        if (!this._nameProperty)
                            initializeProperty(this, 'name', 'name');
                        return this._nameProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InlineFrameElement.prototype, "name", {
                    //#endregion nameProperty
                    //#region name
                    /**
                    * A name for the embedded browsing context (or frame). This can be used as the value of the target attribute of an <a> or <form> element, or the formtarget attribute of an <input> or <button> element [MDN].
                    */
                    get: function () {
                        return this.nameProperty.value;
                    },
                    set: function (value) {
                        this.nameProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InlineFrameElement.prototype, "scrollingProperty", {
                    //#endregion name
                    //#region scrollingProperty
                    /**
                    * Html.InlineFrameScrolling enumerates the values of this property.
                    * Enumerated attribute indicating when the browser should provide a scroll bar (or other scrolling device) for the frame:  auto: Only when needed. yes: Always provide a scroll bar. no: Never provide a scoll bar [MDN].
                    */
                    get: function () {
                        if (!this._scrollingProperty)
                            initializeProperty(this, 'scrolling', 'scrolling');
                        return this._scrollingProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InlineFrameElement.prototype, "scrolling", {
                    //#endregion scrollingProperty
                    //#region scrolling
                    /**
                    * Html.InlineFrameScrolling enumerates the values of this property.
                    * Enumerated attribute indicating when the browser should provide a scroll bar (or other scrolling device) for the frame:  auto: Only when needed. yes: Always provide a scroll bar. no: Never provide a scoll bar [MDN].
                    */
                    get: function () {
                        return this.scrollingProperty.value;
                    },
                    set: function (value) {
                        this.scrollingProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InlineFrameElement.prototype, "sourceProperty", {
                    //#endregion scrolling
                    //#region sourceProperty
                    /**
                    * The URL of the page to embed [MDN].
                    */
                    get: function () {
                        if (!this._sourceProperty)
                            initializeProperty(this, 'source', 'src');
                        return this._sourceProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InlineFrameElement.prototype, "source", {
                    //#endregion sourceProperty
                    //#region source
                    /**
                    * The URL of the page to embed [MDN].
                    */
                    get: function () {
                        return this.sourceProperty.value;
                    },
                    set: function (value) {
                        this.sourceProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InlineFrameElement.prototype, "widthProperty", {
                    //#endregion source
                    //#region widthProperty
                    /**
                    * Indicates the width of the frame HTML5 in CSS pixels, or HTML 4.01 in pixels or as a percentage [MDN].
                    */
                    get: function () {
                        if (!this._widthProperty)
                            initializeProperty(this, 'width', 'width');
                        return this._widthProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InlineFrameElement.prototype, "width", {
                    //#endregion widthProperty
                    //#region width
                    /**
                    * Indicates the width of the frame HTML5 in CSS pixels, or HTML 4.01 in pixels or as a percentage [MDN].
                    */
                    get: function () {
                        return this.widthProperty.value;
                    },
                    set: function (value) {
                        this.widthProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                InlineFrameElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'height', true);
                    setPropertyFromConfig(this, config, 'name', true);
                    setPropertyFromConfig(this, config, 'scrolling', true);
                    setPropertyFromConfig(this, config, 'source', true);
                    setPropertyFromConfig(this, config, 'width', true);
                };
                return InlineFrameElement;
            })(HtmlElementContainer);
            Elements.InlineFrameElement = InlineFrameElement;
            //#endregion InlineFrameElement
            //#region InputElement
            /**
            * The HTML <input> element is used to create interactive controls for web-based forms [MDN].
            */
            var InputElement = (function (_super) {
                __extends(InputElement, _super);
                //#endregion inputEvent
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new InputElement'.
                */
                function InputElement(config) {
                    _super.call(this, 'input', config);
                }
                Object.defineProperty(InputElement.prototype, "typeProperty", {
                    //#endregion Fields
                    //#region Properties
                    //#region typeProperty
                    /**
                    * Html.InputType enumerates the values of this property.
                    * The type of control to display. The default type is text, if this attribute is not specified. Possible values are:  button: A push button with no default behavior. checkbox: A check box. You must use the value attribute to define the value submitted by this item. Use the checked attribute to indicate whether this item is selected. You can also use the indeterminate attribute to indicate that the checkbox is in an indeterminate state (on most platforms, this draws a horizontal line across the checkbox). color: HTML5 A control for specifying a color. date: HTML5 A control for entering a date (year, month, and day, with no time). datetime: HTML5 A control for entering a date and time (hour, minute, second, and fraction of a second) based on UTC time zone. datetime-local: HTML5 A control for entering a date and time, with no time zone. email: HTML5 A field for editing an e-mail address. The :valid and :invalid CSS pseudo-classes are applied as appropriate. file: A control that lets the user select a file. Use the accept attribute to define the types of files that the control can select. hidden: A control that is not displayed, but whose value is submitted to the server. image: A graphical submit button. You must use the src attribute to define the source of the image and the alt attribute to define alternative text. You can use the height and width attributes to define the size of the image in pixels. month: HTML5 A control for entering a month and year, with no time zone. number: HTML5 A control for entering a floating point number. password: A single-line text field whose value is obscured. Use the maxlength attribute to specify the maximum length of the value that can be entered. radio: A radio button. You must use the value attribute to define the value submitted by this item. Use the checked attribute to indicate whether this item is selected by default. Radio buttons that have the same value for the name attribute are in the same "radio button group"; only one radio button in a group can be selected at one time. range: HTML5 A control for entering a number whose exact value is not important. This type control uses the following default values if the corresponding attributes are not specified:  min: 0  max: 100  value: min + (max-min)/2, or min if max is less than min  step: 1  reset: A button that resets the contents of the form to default values. search: HTML5 A single-line text field for entering search strings; line-breaks are automatically removed from the input value. submit: A button that submits the form. tel: HTML5 A control for entering a telephone number; line-breaks are automatically removed from the input value, but no other syntax is enforced. You can use attributes such as pattern and maxlength to restrict values entered in the control. The :valid and :invalid CSS pseudo-classes are applied as appropriate. text: A single-line text field; line-breaks are automatically removed from the input value. time: HTML5 A control for entering a time value with no time zone. url: HTML5 A field for editing a URL. The user may enter a blank or invalid address. Line-breaks are automatically removed from the input value. You can use attributes such as pattern and maxlength to restrict values entered in the control. The :valid and :invalid CSS pseudo-classes are applied as appropriate. week: HTML5 A control for entering a date consisting of a week-year number and a week number with no time zone [MDN].
                    */
                    get: function () {
                        if (!this._typeProperty)
                            initializeProperty(this, 'type', 'type');
                        return this._typeProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "type", {
                    //#endregion typeProperty
                    //#region type
                    /**
                    * Html.InputType enumerates the values of this property.
                    * The type of control to display. The default type is text, if this attribute is not specified. Possible values are:  button: A push button with no default behavior. checkbox: A check box. You must use the value attribute to define the value submitted by this item. Use the checked attribute to indicate whether this item is selected. You can also use the indeterminate attribute to indicate that the checkbox is in an indeterminate state (on most platforms, this draws a horizontal line across the checkbox). color: HTML5 A control for specifying a color. date: HTML5 A control for entering a date (year, month, and day, with no time). datetime: HTML5 A control for entering a date and time (hour, minute, second, and fraction of a second) based on UTC time zone. datetime-local: HTML5 A control for entering a date and time, with no time zone. email: HTML5 A field for editing an e-mail address. The :valid and :invalid CSS pseudo-classes are applied as appropriate. file: A control that lets the user select a file. Use the accept attribute to define the types of files that the control can select. hidden: A control that is not displayed, but whose value is submitted to the server. image: A graphical submit button. You must use the src attribute to define the source of the image and the alt attribute to define alternative text. You can use the height and width attributes to define the size of the image in pixels. month: HTML5 A control for entering a month and year, with no time zone. number: HTML5 A control for entering a floating point number. password: A single-line text field whose value is obscured. Use the maxlength attribute to specify the maximum length of the value that can be entered. radio: A radio button. You must use the value attribute to define the value submitted by this item. Use the checked attribute to indicate whether this item is selected by default. Radio buttons that have the same value for the name attribute are in the same "radio button group"; only one radio button in a group can be selected at one time. range: HTML5 A control for entering a number whose exact value is not important. This type control uses the following default values if the corresponding attributes are not specified:  min: 0  max: 100  value: min + (max-min)/2, or min if max is less than min  step: 1  reset: A button that resets the contents of the form to default values. search: HTML5 A single-line text field for entering search strings; line-breaks are automatically removed from the input value. submit: A button that submits the form. tel: HTML5 A control for entering a telephone number; line-breaks are automatically removed from the input value, but no other syntax is enforced. You can use attributes such as pattern and maxlength to restrict values entered in the control. The :valid and :invalid CSS pseudo-classes are applied as appropriate. text: A single-line text field; line-breaks are automatically removed from the input value. time: HTML5 A control for entering a time value with no time zone. url: HTML5 A field for editing a URL. The user may enter a blank or invalid address. Line-breaks are automatically removed from the input value. You can use attributes such as pattern and maxlength to restrict values entered in the control. The :valid and :invalid CSS pseudo-classes are applied as appropriate. week: HTML5 A control for entering a date consisting of a week-year number and a week number with no time zone [MDN].
                    */
                    get: function () {
                        return this.typeProperty.value;
                    },
                    set: function (value) {
                        this.typeProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "acceptProperty", {
                    //#endregion type
                    //#region acceptProperty
                    /**
                    * Html.InputAccept enumerates the values of this property.
                    * If the value of the type attribute is file, this attribute indicates the types of files that the server accepts; otherwise it is ignored. The value must be a comma-separated list of unique content type specifiers:  A valid MIME type with no extensions audio/* representing sound files HTML5 video/* representing video files HTML5 image/* representing image files HTML5 [MDN].
                    */
                    get: function () {
                        if (!this._acceptProperty)
                            initializeProperty(this, 'accept', 'accept');
                        return this._acceptProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "accept", {
                    //#endregion acceptProperty
                    //#region accept
                    /**
                    * Html.InputAccept enumerates the values of this property.
                    * If the value of the type attribute is file, this attribute indicates the types of files that the server accepts; otherwise it is ignored. The value must be a comma-separated list of unique content type specifiers:  A valid MIME type with no extensions audio/* representing sound files HTML5 video/* representing video files HTML5 image/* representing image files HTML5 [MDN].
                    */
                    get: function () {
                        return this.acceptProperty.value;
                    },
                    set: function (value) {
                        this.acceptProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "autoCompleteProperty", {
                    //#endregion accept
                    //#region autoCompleteProperty
                    /**
                    * Html.InputAutoComplete enumerates the values of this property.
                    * This attribute indicates whether the value of the control can be automatically completed by the browser. This attribute is ignored if the value of the type attribute is hidden, checkbox, radio, file, or a button type (button, submit, reset, image). Possible values are:  off: The user must explicitly enter a value into this field for every use, or the document provides its own auto-completion method; the browser does not automatically complete the entry. on: The browser can automatically complete the value based on values that the user has entered during previous uses. If the autocomplete attribute is not specified on an input element, then the browser uses the autocomplete attribute value of the <input> element's form owner. The form owner is either the form element that this <input> element is a descendant of or the form element whose id is specified by the form attribute of the input element. For more information, see the autocomplete attribute in <form> [MDN].
                    */
                    get: function () {
                        if (!this._autoCompleteProperty)
                            initializeProperty(this, 'autoComplete', 'autocomplete');
                        return this._autoCompleteProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "autoComplete", {
                    //#endregion autoCompleteProperty
                    //#region autoComplete
                    /**
                    * Html.InputAutoComplete enumerates the values of this property.
                    * This attribute indicates whether the value of the control can be automatically completed by the browser. This attribute is ignored if the value of the type attribute is hidden, checkbox, radio, file, or a button type (button, submit, reset, image). Possible values are:  off: The user must explicitly enter a value into this field for every use, or the document provides its own auto-completion method; the browser does not automatically complete the entry. on: The browser can automatically complete the value based on values that the user has entered during previous uses. If the autocomplete attribute is not specified on an input element, then the browser uses the autocomplete attribute value of the <input> element's form owner. The form owner is either the form element that this <input> element is a descendant of or the form element whose id is specified by the form attribute of the input element. For more information, see the autocomplete attribute in <form> [MDN].
                    */
                    get: function () {
                        return this.autoCompleteProperty.value;
                    },
                    set: function (value) {
                        this.autoCompleteProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "autoFocusProperty", {
                    //#endregion autoComplete
                    //#region autoFocusProperty
                    /**
                    * This Boolean attribute lets you specify that a form control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form element in a document can have the autofocus attribute, which is a Boolean. It cannot be applied if the type attribute is set to hidden (that is, you cannot automatically set focus to a hidden control) [MDN].
                    */
                    get: function () {
                        if (!this._autoFocusProperty)
                            initializeProperty(this, 'autoFocus', 'autofocus');
                        return this._autoFocusProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "autoFocus", {
                    //#endregion autoFocusProperty
                    //#region autoFocus
                    /**
                    * This Boolean attribute lets you specify that a form control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form element in a document can have the autofocus attribute, which is a Boolean. It cannot be applied if the type attribute is set to hidden (that is, you cannot automatically set focus to a hidden control) [MDN].
                    */
                    get: function () {
                        return this.autoFocusProperty.value;
                    },
                    set: function (value) {
                        this.autoFocusProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "checkedProperty", {
                    //#endregion autoFocus
                    //#region checkedProperty
                    /**
                    * When the value of the type attribute is radio or checkbox, the presence of this Boolean attribute indicates that the control is selected by default; otherwise it is ignored [MDN].
                    */
                    get: function () {
                        if (!this._checkedProperty)
                            initializeProperty(this, 'checked', 'checked');
                        return this._checkedProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "checked", {
                    //#endregion checkedProperty
                    //#region checked
                    /**
                    * When the value of the type attribute is radio or checkbox, the presence of this Boolean attribute indicates that the control is selected by default; otherwise it is ignored [MDN].
                    */
                    get: function () {
                        return this.checkedProperty.value;
                    },
                    set: function (value) {
                        this.checkedProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "disabledProperty", {
                    //#endregion checked
                    //#region disabledProperty
                    /**
                    * This Boolean attribute indicates that the form control is not available for interaction. In particular, the click event will not be dispatched on disabled controls. Also, a disabled control's value isn't submitted with the form. This attribute is ignored if the value of the type attribute is hidden [MDN].
                    */
                    get: function () {
                        if (!this._disabledProperty)
                            initializeProperty(this, 'disabled', 'disabled');
                        return this._disabledProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "disabled", {
                    //#endregion disabledProperty
                    //#region disabled
                    /**
                    * This Boolean attribute indicates that the form control is not available for interaction. In particular, the click event will not be dispatched on disabled controls. Also, a disabled control's value isn't submitted with the form. This attribute is ignored if the value of the type attribute is hidden [MDN].
                    */
                    get: function () {
                        return this.disabledProperty.value;
                    },
                    set: function (value) {
                        this.disabledProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "form", {
                    //#endregion disabled
                    //#region form
                    /**
                    * The form element that the input element is associated with (its form owner). The value of the attribute must be an id of a <form> element in the same document. If this attribute is not specified, this <input> element must be a descendant of a <form> element. This attribute enables you to place <input> elements anywhere within a document, not just as descendants of their form elements. An input can only be associated with one form [MDN].
                    */
                    get: function () {
                        return getElementPropertyValue(this, 'form');
                    },
                    set: function (value) {
                        setElementPropertyValue(this, 'form', value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "heightProperty", {
                    //#endregion form
                    //#region heightProperty
                    /**
                    * If the value of the type attribute is image, this attribute defines the height of the image displayed for the button [MDN].
                    */
                    get: function () {
                        if (!this._heightProperty)
                            initializeProperty(this, 'height', 'height');
                        return this._heightProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "height", {
                    //#endregion heightProperty
                    //#region height
                    /**
                    * If the value of the type attribute is image, this attribute defines the height of the image displayed for the button [MDN].
                    */
                    get: function () {
                        return this.heightProperty.value;
                    },
                    set: function (value) {
                        this.heightProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "list", {
                    //#endregion height
                    //#region list
                    /**
                    * Identifies a list of pre-defined options to suggest to the user. The value must be the id of a <datalist> element in the same document. The browser displays only options that are valid values for this input element. This attribute is ignored when the type attribute's value is hidden, checkbox, radio, file, or a button type [MDN].
                    */
                    get: function () {
                        return getElementPropertyValue(this, 'list');
                    },
                    set: function (value) {
                        setElementPropertyValue(this, 'list', value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "maxProperty", {
                    //#endregion list
                    //#region maxProperty
                    /**
                    * The maximum (numeric or date-time) value for this item, which must not be less than its minimum (min attribute) value [MDN].
                    */
                    get: function () {
                        if (!this._maxProperty)
                            initializeProperty(this, 'max', 'max');
                        return this._maxProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "max", {
                    //#endregion maxProperty
                    //#region max
                    /**
                    * The maximum (numeric or date-time) value for this item, which must not be less than its minimum (min attribute) value [MDN].
                    */
                    get: function () {
                        return this.maxProperty.value;
                    },
                    set: function (value) {
                        this.maxProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "minProperty", {
                    //#endregion max
                    //#region minProperty
                    /**
                    * The minimum (numeric or date-time) value for this item, which must not be greater than its maximum (max attribute) value [MDN].
                    */
                    get: function () {
                        if (!this._minProperty)
                            initializeProperty(this, 'min', 'min');
                        return this._minProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "min", {
                    //#endregion minProperty
                    //#region min
                    /**
                    * The minimum (numeric or date-time) value for this item, which must not be greater than its maximum (max attribute) value [MDN].
                    */
                    get: function () {
                        return this.minProperty.value;
                    },
                    set: function (value) {
                        this.minProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "multipleProperty", {
                    //#endregion min
                    //#region multipleProperty
                    /**
                    * This Boolean attribute indicates whether the user can enter more than one value. This attribute applies when the type attribute is set to email or file; otherwise it is ignored [MDN].
                    */
                    get: function () {
                        if (!this._multipleProperty)
                            initializeProperty(this, 'multiple', 'multiple');
                        return this._multipleProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "multiple", {
                    //#endregion multipleProperty
                    //#region multiple
                    /**
                    * This Boolean attribute indicates whether the user can enter more than one value. This attribute applies when the type attribute is set to email or file; otherwise it is ignored [MDN].
                    */
                    get: function () {
                        return this.multipleProperty.value;
                    },
                    set: function (value) {
                        this.multipleProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "nameProperty", {
                    //#endregion multiple
                    //#region nameProperty
                    /**
                    * The name of the control, which is submitted with the form data [MDN].
                    */
                    get: function () {
                        if (!this._nameProperty)
                            initializeProperty(this, 'name', 'name');
                        return this._nameProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "name", {
                    //#endregion nameProperty
                    //#region name
                    /**
                    * The name of the control, which is submitted with the form data [MDN].
                    */
                    get: function () {
                        return this.nameProperty.value;
                    },
                    set: function (value) {
                        this.nameProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "patternProperty", {
                    //#endregion name
                    //#region patternProperty
                    /**
                    * A regular expression that the control's value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is text, search, tel, url or email; otherwise it is ignored. The regular expression language is the same as JavaScript's. The pattern is not surrounded by forward slashes [MDN].
                    */
                    get: function () {
                        if (!this._patternProperty)
                            initializeProperty(this, 'pattern', 'pattern');
                        return this._patternProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "pattern", {
                    //#endregion patternProperty
                    //#region pattern
                    /**
                    * A regular expression that the control's value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is text, search, tel, url or email; otherwise it is ignored. The regular expression language is the same as JavaScript's. The pattern is not surrounded by forward slashes [MDN].
                    */
                    get: function () {
                        return this.patternProperty.value;
                    },
                    set: function (value) {
                        this.patternProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "placeHolderProperty", {
                    //#endregion pattern
                    //#region placeHolderProperty
                    /**
                    * A hint to the user of what can be entered in the control . The placeholder text must not contain carriage returns or line-feeds. This attribute applies when the value of the type attribute is text, search, tel, url or email; otherwise it is ignored.
                    * Note: Do not use the placeholder attribute instead of a <label> element. Their purposes are different: the <label> attribute describes the role of the form element; that is, it indicates what kind of information is expected, the placeholder attribute is a hint about the format the content should take. There are cases in which the placeholder attribute is never displayed to the user, so the form must be understandable without it [MDN].
                    */
                    get: function () {
                        if (!this._placeHolderProperty)
                            initializeProperty(this, 'placeHolder', 'placeholder');
                        return this._placeHolderProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "placeHolder", {
                    //#endregion placeHolderProperty
                    //#region placeHolder
                    /**
                    * A hint to the user of what can be entered in the control . The placeholder text must not contain carriage returns or line-feeds. This attribute applies when the value of the type attribute is text, search, tel, url or email; otherwise it is ignored.
                    * Note: Do not use the placeholder attribute instead of a <label> element. Their purposes are different: the <label> attribute describes the role of the form element; that is, it indicates what kind of information is expected, the placeholder attribute is a hint about the format the content should take. There are cases in which the placeholder attribute is never displayed to the user, so the form must be understandable without it [MDN].
                    */
                    get: function () {
                        return this.placeHolderProperty.value;
                    },
                    set: function (value) {
                        this.placeHolderProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "requiredProperty", {
                    //#endregion placeHolder
                    //#region requiredProperty
                    /**
                    * This attribute specifies that the user must fill in a value before submitting a form. It cannot be used when the type attribute is hidden, image, or a button type (submit, reset, or button). The :optional and :required CSS pseudo-classes will be applied to the field as appropriate [MDN].
                    */
                    get: function () {
                        if (!this._requiredProperty)
                            initializeProperty(this, 'required', 'required');
                        return this._requiredProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "required", {
                    //#endregion requiredProperty
                    //#region required
                    /**
                    * This attribute specifies that the user must fill in a value before submitting a form. It cannot be used when the type attribute is hidden, image, or a button type (submit, reset, or button). The :optional and :required CSS pseudo-classes will be applied to the field as appropriate [MDN].
                    */
                    get: function () {
                        return this.requiredProperty.value;
                    },
                    set: function (value) {
                        this.requiredProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "sizeProperty", {
                    //#endregion required
                    //#region sizeProperty
                    /**
                    * The initial size of the control. This value is in pixels unless the value of the type attribute is text or password, in which case, it is an integer number of characters. Starting in HTML5, this attribute applies only when the type attribute is set to text, search, tel, url, email, or password; otherwise it is ignored. In addition, the size must be greater than zero. If you don't specify a size, a default value of 20 is used [MDN].
                    */
                    get: function () {
                        if (!this._sizeProperty)
                            initializeProperty(this, 'size', 'size');
                        return this._sizeProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "size", {
                    //#endregion sizeProperty
                    //#region size
                    /**
                    * The initial size of the control. This value is in pixels unless the value of the type attribute is text or password, in which case, it is an integer number of characters. Starting in HTML5, this attribute applies only when the type attribute is set to text, search, tel, url, email, or password; otherwise it is ignored. In addition, the size must be greater than zero. If you don't specify a size, a default value of 20 is used [MDN].
                    */
                    get: function () {
                        return this.sizeProperty.value;
                    },
                    set: function (value) {
                        this.sizeProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "sourceProperty", {
                    //#endregion size
                    //#region sourceProperty
                    /**
                    * If the value of the type attribute is image, this attribute specifies a URI for the location of an image to display on the graphical submit button; otherwise it is ignored [MDN].
                    */
                    get: function () {
                        if (!this._sourceProperty)
                            initializeProperty(this, 'source', 'src');
                        return this._sourceProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "source", {
                    //#endregion sourceProperty
                    //#region source
                    /**
                    * If the value of the type attribute is image, this attribute specifies a URI for the location of an image to display on the graphical submit button; otherwise it is ignored [MDN].
                    */
                    get: function () {
                        return this.sourceProperty.value;
                    },
                    set: function (value) {
                        this.sourceProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "stepProperty", {
                    //#endregion source
                    //#region stepProperty
                    /**
                    * Works with the min and max attributes to limit the increments at which a numeric or date-time value can be set. It can be the string any or a positive floating point number. If this attribute is not set to any, the control accepts only values at multiples of the step value greater than the minimum [MDN].
                    */
                    get: function () {
                        if (!this._stepProperty)
                            initializeProperty(this, 'step', 'step');
                        return this._stepProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "step", {
                    //#endregion stepProperty
                    //#region step
                    /**
                    * Works with the min and max attributes to limit the increments at which a numeric or date-time value can be set. It can be the string any or a positive floating point number. If this attribute is not set to any, the control accepts only values at multiples of the step value greater than the minimum [MDN].
                    */
                    get: function () {
                        return this.stepProperty.value;
                    },
                    set: function (value) {
                        this.stepProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "valueProperty", {
                    //#endregion step
                    //#region valueProperty
                    /**
                    * The initial value of the control. This attribute is optional except when the value of the type attribute is radio or checkbox. Note that when reloading the page, Gecko and IE will ignore the value specified in the HTML source, if the value was changed before the reload [MDN].
                    */
                    get: function () {
                        if (!this._valueProperty)
                            initializeProperty(this, 'value', 'value');
                        return this._valueProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "value", {
                    //#endregion valueProperty
                    //#region value
                    /**
                    * The initial value of the control. This attribute is optional except when the value of the type attribute is radio or checkbox. Note that when reloading the page, Gecko and IE will ignore the value specified in the HTML source, if the value was changed before the reload [MDN].
                    */
                    get: function () {
                        return this.valueProperty.value;
                    },
                    set: function (value) {
                        this.valueProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "widthProperty", {
                    //#endregion value
                    //#region widthProperty
                    /**
                    * If the value of the type attribute is image, this attribute defines the width of the image displayed for the button [MDN].
                    */
                    get: function () {
                        if (!this._widthProperty)
                            initializeProperty(this, 'width', 'width');
                        return this._widthProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "width", {
                    //#endregion widthProperty
                    //#region width
                    /**
                    * If the value of the type attribute is image, this attribute defines the width of the image displayed for the button [MDN].
                    */
                    get: function () {
                        return this.widthProperty.value;
                    },
                    set: function (value) {
                        this.widthProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "changeEvent", {
                    //#endregion width
                    //#region changeEvent
                    /**
                    * The changeEvent event is executed when an element loses focus and its value changed since gaining focus [MDN].
                    * Specifications: DOM L2, HTML5
                    * DOM Event Name: change
                    */
                    get: function () {
                        if (!this._changeEvent)
                            this._changeEvent = new Html.HtmlElementEvent('change', 'Event', this);
                        return this._changeEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "inputEvent", {
                    //#endregion changeEvent
                    //#region inputEvent
                    /**
                    * The inputEvent event is executed when the value of an element changes or the content of an element with the attribute contenteditable is modified [MDN].
                    * Specification: HTML5
                    * DOM Event Name: input
                    */
                    get: function () {
                        if (!this._inputEvent)
                            this._inputEvent = new Html.HtmlElementEvent('input', 'Event', this);
                        return this._inputEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                InputElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'type', true);
                    setPropertyFromConfig(this, config, 'accept', true);
                    setPropertyFromConfig(this, config, 'autoComplete', true);
                    setPropertyFromConfig(this, config, 'autoFocus', true);
                    setPropertyFromConfig(this, config, 'checked', true);
                    setPropertyFromConfig(this, config, 'disabled', true);
                    setElementPropertyFromConfig(this, config, 'form');
                    setPropertyFromConfig(this, config, 'height', true);
                    setElementPropertyFromConfig(this, config, 'list');
                    setPropertyFromConfig(this, config, 'max', true);
                    setPropertyFromConfig(this, config, 'min', true);
                    setPropertyFromConfig(this, config, 'multiple', true);
                    setPropertyFromConfig(this, config, 'name', true);
                    setPropertyFromConfig(this, config, 'pattern', true);
                    setPropertyFromConfig(this, config, 'placeHolder', true);
                    setPropertyFromConfig(this, config, 'required', true);
                    setPropertyFromConfig(this, config, 'size', true);
                    setPropertyFromConfig(this, config, 'source', true);
                    setPropertyFromConfig(this, config, 'step', true);
                    setPropertyFromConfig(this, config, 'value', true);
                    setPropertyFromConfig(this, config, 'width', true);
                    if (config.changeHandler)
                        this.changeEvent.subscribe(config.changeHandler);
                    if (config.inputHandler)
                        this.inputEvent.subscribe(config.inputHandler);
                };
                return InputElement;
            })(HtmlElement);
            Elements.InputElement = InputElement;
            //#endregion InputElement
            //#region InsertedElement
            /**
            * The HTML <ins> Element (or HTML Inserted Text) HTML represents a range of text that has been added to a document [MDN].
            */
            var InsertedElement = (function (_super) {
                __extends(InsertedElement, _super);
                //#endregion citation
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new InsertedElement'.
                */
                function InsertedElement(config) {
                    _super.call(this, 'ins', config);
                }
                Object.defineProperty(InsertedElement.prototype, "citationProperty", {
                    //#endregion Fields
                    //#region Properties
                    //#region citationProperty
                    /**
                    * This attribute defines the URI of a resource that explains the change, like a link to some meeting minutes or a ticket in a troubleshooting sytem [MDN].
                    */
                    get: function () {
                        if (!this._citationProperty)
                            initializeProperty(this, 'citation', 'cite');
                        return this._citationProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InsertedElement.prototype, "citation", {
                    //#endregion citationProperty
                    //#region citation
                    /**
                    * This attribute defines the URI of a resource that explains the change, like a link to some meeting minutes or a ticket in a troubleshooting sytem [MDN].
                    */
                    get: function () {
                        return this.citationProperty.value;
                    },
                    set: function (value) {
                        this.citationProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                InsertedElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'citation', true);
                };
                return InsertedElement;
            })(HtmlElementContainer);
            Elements.InsertedElement = InsertedElement;
            //#endregion InsertedElement
            //#region ItalicElement
            /**
            * The HTML <i> Element represents a range of text that is set off from the normal text for some reason, for example, technical terms, foreign language phrases, or fictional character thoughts. It is typically displayed in italic type [MDN].
            */
            var ItalicElement = (function (_super) {
                __extends(ItalicElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new ItalicElement'.
                */
                function ItalicElement(config) {
                    _super.call(this, 'i', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                ItalicElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return ItalicElement;
            })(HtmlElementContainer);
            Elements.ItalicElement = ItalicElement;
            //#endregion ItalicElement
            //#region KeyboardInputElement
            /**
            * The HTML <kbd> Element (or HTML Keyboard Input Element) represents user input and produces an inline element displayed in the browser's default monotype font [MDN].
            */
            var KeyboardInputElement = (function (_super) {
                __extends(KeyboardInputElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new KeyboardInputElement'.
                */
                function KeyboardInputElement(config) {
                    _super.call(this, 'kbd', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                KeyboardInputElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return KeyboardInputElement;
            })(HtmlElementContainer);
            Elements.KeyboardInputElement = KeyboardInputElement;
            //#endregion KeyboardInputElement
            //#region LabelElement
            /**
            * The HTML <label> Element represents a caption for an item in a user interface. It can be associated with a control either by using the for attribute, or by placing the control element inside the label element. Such a control is called the labeled control of the label element [MDN].
            */
            var LabelElement = (function (_super) {
                __extends(LabelElement, _super);
                //#endregion form
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new LabelElement'.
                */
                function LabelElement(config) {
                    _super.call(this, 'label', config);
                }
                Object.defineProperty(LabelElement.prototype, "form", {
                    //#endregion Fields
                    //#region Properties
                    //#region form
                    /**
                    * The form element that the label element is associated with (its form owner). The value of the attribute must be an ID of a <form> element in the same document. If this attribute is not specified, this <label> element must be a descendant of a <form> element. This attribute enables you to place label elements anywhere within a document, not just as descendants of their form elements [MDN].
                    */
                    get: function () {
                        return getElementPropertyValue(this, 'form');
                    },
                    set: function (value) {
                        setElementPropertyValue(this, 'form', value);
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                LabelElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setElementPropertyFromConfig(this, config, 'form');
                };
                return LabelElement;
            })(HtmlElementContainer);
            Elements.LabelElement = LabelElement;
            //#endregion LabelElement
            //#region LegendFieldElement
            /**
            * The HTML <legend> Element (or HTML Legend Field Element) represents a caption for the content of its parent <fieldset> [MDN].
            */
            var LegendFieldElement = (function (_super) {
                __extends(LegendFieldElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new LegendFieldElement'.
                */
                function LegendFieldElement(config) {
                    _super.call(this, 'legend', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                LegendFieldElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return LegendFieldElement;
            })(HtmlElementContainer);
            Elements.LegendFieldElement = LegendFieldElement;
            //#endregion LegendFieldElement
            //#region LineBreakElement
            /**
            * The HTML <br> Element (or HTML Line Break Element) produces a line break in text (carriage-return). It is useful for writing a poem or an address, where the division of lines is significant [MDN].
            */
            var LineBreakElement = (function (_super) {
                __extends(LineBreakElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new LineBreakElement'.
                */
                function LineBreakElement(config) {
                    _super.call(this, 'br', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                LineBreakElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return LineBreakElement;
            })(HtmlElement);
            Elements.LineBreakElement = LineBreakElement;
            //#endregion LineBreakElement
            //#region LinkElement
            /**
            * The HTML <link> Element specifies relationships between the current document and other documents. Possible uses for this element include defining a relational framework for navigation and linking the document to a style sheet [MDN].
            */
            var LinkElement = (function (_super) {
                __extends(LinkElement, _super);
                //#endregion type
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new LinkElement'.
                */
                function LinkElement(config) {
                    _super.call(this, 'link', config);
                }
                Object.defineProperty(LinkElement.prototype, "characterSetProperty", {
                    //#endregion Fields
                    //#region Properties
                    //#region characterSetProperty
                    /**
                    * This attribute defines the character encoding of the linked resource. The value is a space- and/or comma-delimited list of character sets as defined in RFC 2045. The default value is ISO-8859-1.
                    * Note: This attribute is obsolete in HTML5 and must not be used by authors. To achieve its effect, use the Content-Type: HTTP header on the linked resource [MDN].
                    */
                    get: function () {
                        if (!this._characterSetProperty)
                            initializeProperty(this, 'characterSet', 'charset');
                        return this._characterSetProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(LinkElement.prototype, "characterSet", {
                    //#endregion characterSetProperty
                    //#region characterSet
                    /**
                    * This attribute defines the character encoding of the linked resource. The value is a space- and/or comma-delimited list of character sets as defined in RFC 2045. The default value is ISO-8859-1.
                    * Note: This attribute is obsolete in HTML5 and must not be used by authors. To achieve its effect, use the Content-Type: HTTP header on the linked resource [MDN].
                    */
                    get: function () {
                        return this.characterSetProperty.value;
                    },
                    set: function (value) {
                        this.characterSetProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(LinkElement.prototype, "hrefProperty", {
                    //#endregion characterSet
                    //#region hrefProperty
                    /**
                    * This attribute specifies the URL of the linked resource. A URL might be absolute or relative [MDN].
                    */
                    get: function () {
                        if (!this._hrefProperty)
                            initializeProperty(this, 'href', 'href');
                        return this._hrefProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(LinkElement.prototype, "href", {
                    //#endregion hrefProperty
                    //#region href
                    /**
                    * This attribute specifies the URL of the linked resource. A URL might be absolute or relative [MDN].
                    */
                    get: function () {
                        return this.hrefProperty.value;
                    },
                    set: function (value) {
                        this.hrefProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(LinkElement.prototype, "hrefLanguageProperty", {
                    //#endregion href
                    //#region hrefLanguageProperty
                    /**
                    * This attribute indicates the language of the linked resource. It is purely advisory. Allowed values are determined by BCP47 for HTML5 and by RFC1766 for HTML 4. Use this attribute only if the href attribute is present [MDN].
                    */
                    get: function () {
                        if (!this._hrefLanguageProperty)
                            initializeProperty(this, 'hrefLanguage', 'hreflang');
                        return this._hrefLanguageProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(LinkElement.prototype, "hrefLanguage", {
                    //#endregion hrefLanguageProperty
                    //#region hrefLanguage
                    /**
                    * This attribute indicates the language of the linked resource. It is purely advisory. Allowed values are determined by BCP47 for HTML5 and by RFC1766 for HTML 4. Use this attribute only if the href attribute is present [MDN].
                    */
                    get: function () {
                        return this.hrefLanguageProperty.value;
                    },
                    set: function (value) {
                        this.hrefLanguageProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(LinkElement.prototype, "mediaProperty", {
                    //#endregion hrefLanguage
                    //#region mediaProperty
                    /**
                    * This attribute specifies the media which the linked resource applies to. Its value must be a media query. This attribute is mainly useful when linking to external stylesheets by allowing the user agent to pick the best adapted one for the device it runs on.
                    * Note:  In HTML 4, this can only be a simple white-space-separated list of media description literals, i.e., media types and groups, where defined and allowed as values for this attribute, such as print, screen, aural, braille. HTML5 extended this to any kind of media queries, which are a superset of the allowed values of HTML 4. Browsers not supporting the CSS3 Media Queries won't necessarily recognize the adequate link; do not forget to set fallback links, the restricted set of media queries defined in HTML 4 [MDN].
                    */
                    get: function () {
                        if (!this._mediaProperty)
                            initializeProperty(this, 'media', 'media');
                        return this._mediaProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(LinkElement.prototype, "media", {
                    //#endregion mediaProperty
                    //#region media
                    /**
                    * This attribute specifies the media which the linked resource applies to. Its value must be a media query. This attribute is mainly useful when linking to external stylesheets by allowing the user agent to pick the best adapted one for the device it runs on.
                    * Note:  In HTML 4, this can only be a simple white-space-separated list of media description literals, i.e., media types and groups, where defined and allowed as values for this attribute, such as print, screen, aural, braille. HTML5 extended this to any kind of media queries, which are a superset of the allowed values of HTML 4. Browsers not supporting the CSS3 Media Queries won't necessarily recognize the adequate link; do not forget to set fallback links, the restricted set of media queries defined in HTML 4 [MDN].
                    */
                    get: function () {
                        return this.mediaProperty.value;
                    },
                    set: function (value) {
                        this.mediaProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(LinkElement.prototype, "relationshipProperty", {
                    //#endregion media
                    //#region relationshipProperty
                    /**
                    * This attribute names a relationship of the linked document to the current document. The attribute must be a space-separated list of the link types values. The most common use of this attribute is to specify a link to an external style sheet: the rel attribute is set to stylesheet, and the href attribute is set to the URL of an external style sheet to format the page. WebTV also supports the use of the value next for rel to preload the next page in a document series [MDN].
                    */
                    get: function () {
                        if (!this._relationshipProperty)
                            initializeProperty(this, 'relationship', 'rel');
                        return this._relationshipProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(LinkElement.prototype, "relationship", {
                    //#endregion relationshipProperty
                    //#region relationship
                    /**
                    * This attribute names a relationship of the linked document to the current document. The attribute must be a space-separated list of the link types values. The most common use of this attribute is to specify a link to an external style sheet: the rel attribute is set to stylesheet, and the href attribute is set to the URL of an external style sheet to format the page. WebTV also supports the use of the value next for rel to preload the next page in a document series [MDN].
                    */
                    get: function () {
                        return this.relationshipProperty.value;
                    },
                    set: function (value) {
                        this.relationshipProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(LinkElement.prototype, "reverseRelationshipProperty", {
                    //#endregion relationship
                    //#region reverseRelationshipProperty
                    /**
                    * The value of this attribute shows the relationship of the current document to the linked document, as defined by the href attribute. The attribute thus defines the reverse relationship compared to the value of the rel attribute. Link types values for the attribute are similar to the possible values for rel.
                    * Note: This attribute is obsolete in HTML5. Do not use it. To achieve its effect, use the rel attribute with the opposite link types values, e.g. made should be replaced by author. Also this attribute doesn't mean revision and must not be used with a version number, which is unfortunately the case on numerous sites [MDN].
                    */
                    get: function () {
                        if (!this._reverseRelationshipProperty)
                            initializeProperty(this, 'reverseRelationship', 'rev');
                        return this._reverseRelationshipProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(LinkElement.prototype, "reverseRelationship", {
                    //#endregion reverseRelationshipProperty
                    //#region reverseRelationship
                    /**
                    * The value of this attribute shows the relationship of the current document to the linked document, as defined by the href attribute. The attribute thus defines the reverse relationship compared to the value of the rel attribute. Link types values for the attribute are similar to the possible values for rel.
                    * Note: This attribute is obsolete in HTML5. Do not use it. To achieve its effect, use the rel attribute with the opposite link types values, e.g. made should be replaced by author. Also this attribute doesn't mean revision and must not be used with a version number, which is unfortunately the case on numerous sites [MDN].
                    */
                    get: function () {
                        return this.reverseRelationshipProperty.value;
                    },
                    set: function (value) {
                        this.reverseRelationshipProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(LinkElement.prototype, "typeProperty", {
                    //#endregion reverseRelationship
                    //#region typeProperty
                    /**
                    * This attribute is used to define the type of the content linked to. The value of the attribute should be a MIME type such as text/html, text/css, and so on. The common use of this attribute is to define the type of style sheet linked and the most common current value is text/css, which indicates a Cascading Style Sheet format [MDN].
                    */
                    get: function () {
                        if (!this._typeProperty)
                            initializeProperty(this, 'type', 'type');
                        return this._typeProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(LinkElement.prototype, "type", {
                    //#endregion typeProperty
                    //#region type
                    /**
                    * This attribute is used to define the type of the content linked to. The value of the attribute should be a MIME type such as text/html, text/css, and so on. The common use of this attribute is to define the type of style sheet linked and the most common current value is text/css, which indicates a Cascading Style Sheet format [MDN].
                    */
                    get: function () {
                        return this.typeProperty.value;
                    },
                    set: function (value) {
                        this.typeProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                LinkElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'characterSet', true);
                    setPropertyFromConfig(this, config, 'href', true);
                    setPropertyFromConfig(this, config, 'hrefLanguage', true);
                    setPropertyFromConfig(this, config, 'media', true);
                    setPropertyFromConfig(this, config, 'relationship', true);
                    setPropertyFromConfig(this, config, 'reverseRelationship', true);
                    setPropertyFromConfig(this, config, 'type', true);
                };
                return LinkElement;
            })(HtmlElement);
            Elements.LinkElement = LinkElement;
            //#endregion LinkElement
            //#region ListItemElement
            /**
            * The HTML List item element (<li>) is used to represent a list item. It should be contained in an ordered list (<ol>), an unordered list (<ul>) or a menu (<menu>), where it represents a single entity in that list. In menus and unordered lists, list items are ordinarily displayed using bullet points. In ordered lists, they are usually displayed with some ascending counter on the left such as a number or letter [MDN].
            */
            var ListItemElement = (function (_super) {
                __extends(ListItemElement, _super);
                //#endregion type
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new ListItemElement'.
                */
                function ListItemElement(config) {
                    _super.call(this, 'li', config);
                }
                Object.defineProperty(ListItemElement.prototype, "valueProperty", {
                    //#endregion Fields
                    //#region Properties
                    //#region valueProperty
                    /**
                    * This integer attributes indicates the current ordinal value of the item in the list as defined by the <ol> element. The only allowed value for this attribute is a number, even if the list is displayed with Roman numerals or letters. List items that follow this one continue numbering from the value set. The value attribute has no meaning for unordered lists (<ul>) or for menus (<menu>).
                    * Note: This attribute was deprecated in HTML4, but reintroduced in HTML5.
                    * Note: Prior to Gecko 9.0, negative values were incorrectly converted to 0. Starting in Gecko 9.0 all integer values are correctly parsed [MDN].
                    */
                    get: function () {
                        if (!this._valueProperty)
                            initializeProperty(this, 'value', 'value');
                        return this._valueProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ListItemElement.prototype, "value", {
                    //#endregion valueProperty
                    //#region value
                    /**
                    * This integer attributes indicates the current ordinal value of the item in the list as defined by the <ol> element. The only allowed value for this attribute is a number, even if the list is displayed with Roman numerals or letters. List items that follow this one continue numbering from the value set. The value attribute has no meaning for unordered lists (<ul>) or for menus (<menu>).
                    * Note: This attribute was deprecated in HTML4, but reintroduced in HTML5.
                    * Note: Prior to Gecko 9.0, negative values were incorrectly converted to 0. Starting in Gecko 9.0 all integer values are correctly parsed [MDN].
                    */
                    get: function () {
                        return this.valueProperty.value;
                    },
                    set: function (value) {
                        this.valueProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ListItemElement.prototype, "typeProperty", {
                    //#endregion value
                    //#region typeProperty
                    /**
                    * Html.ListItemType enumerates the values of this property.
                    * This character attributes indicates the numbering type:  a: lowercase letters A: uppercase letters i: lowercase Roman numerals I: uppercase Roman numerals 1: numbers This type overrides the one used by its parent <ol> element, if any.
                    * Note: This attribute has been deprecated: use the CSS list-style-type property instead [MDN].
                    */
                    get: function () {
                        if (!this._typeProperty)
                            initializeProperty(this, 'type', 'type');
                        return this._typeProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ListItemElement.prototype, "type", {
                    //#endregion typeProperty
                    //#region type
                    /**
                    * Html.ListItemType enumerates the values of this property.
                    * This character attributes indicates the numbering type:  a: lowercase letters A: uppercase letters i: lowercase Roman numerals I: uppercase Roman numerals 1: numbers This type overrides the one used by its parent <ol> element, if any.
                    * Note: This attribute has been deprecated: use the CSS list-style-type property instead [MDN].
                    */
                    get: function () {
                        return this.typeProperty.value;
                    },
                    set: function (value) {
                        this.typeProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                ListItemElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'value', true);
                    setPropertyFromConfig(this, config, 'type', true);
                };
                return ListItemElement;
            })(HtmlElementContainer);
            Elements.ListItemElement = ListItemElement;
            //#endregion ListItemElement
            //#region MainElement
            /**
            * The HTML <main> element represents the main content of  the <body> of a document or application. The main content area consists of content that is directly related to, or expands upon the central topic of a document or the central functionality of an application. This content should be unique to the document, excluding any content that is repeated across a set of documents such as sidebars, navigation links, copyright information, site logos, and search forms (unless, of course, the document's main function is as a search form) [MDN].
            */
            var MainElement = (function (_super) {
                __extends(MainElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new MainElement'.
                */
                function MainElement(config) {
                    _super.call(this, 'main', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                MainElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return MainElement;
            })(HtmlElementContainer);
            Elements.MainElement = MainElement;
            //#endregion MainElement
            //#region MapElement
            /**
            * The HTML <map> element is used with <area> elements to define an image map [MDN].
            */
            var MapElement = (function (_super) {
                __extends(MapElement, _super);
                //#endregion name
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new MapElement'.
                */
                function MapElement(config) {
                    _super.call(this, 'map', config);
                }
                Object.defineProperty(MapElement.prototype, "nameProperty", {
                    //#endregion Fields
                    //#region Properties
                    //#region nameProperty
                    /**
                    * The name attribute gives the map a name so that it can be referenced. The attribute must be present and must have a non-empty value with no space characters. The value of the name attribute must not be a compatibility-caseless match for the value of the name attribute of another map element in the same document. If the id attribute is also specified, both attributes must have the same value [MDN].
                    */
                    get: function () {
                        if (!this._nameProperty)
                            initializeProperty(this, 'name', 'name');
                        return this._nameProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MapElement.prototype, "name", {
                    //#endregion nameProperty
                    //#region name
                    /**
                    * The name attribute gives the map a name so that it can be referenced. The attribute must be present and must have a non-empty value with no space characters. The value of the name attribute must not be a compatibility-caseless match for the value of the name attribute of another map element in the same document. If the id attribute is also specified, both attributes must have the same value [MDN].
                    */
                    get: function () {
                        return this.nameProperty.value;
                    },
                    set: function (value) {
                        this.nameProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                MapElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'name', true);
                };
                return MapElement;
            })(HtmlElementContainer);
            Elements.MapElement = MapElement;
            //#endregion MapElement
            //#region MarkElement
            /**
            * The HTML <mark> Element represents highlighted text, i.e., a run of text marked for reference purpose, due to its relevance in a particular context. For example it can be used in a page showing search results to highlight every instance of the searched for word [MDN].
            */
            var MarkElement = (function (_super) {
                __extends(MarkElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new MarkElement'.
                */
                function MarkElement(config) {
                    _super.call(this, 'mark', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                MarkElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return MarkElement;
            })(HtmlElementContainer);
            Elements.MarkElement = MarkElement;
            //#endregion MarkElement
            //#region MetaElement
            /**
            * The HTML <meta> Element represents any metadata information which cannot be represented using one of the other meta-related element (<base>, <link>, <script>, <style> or <title>). According to the attributes set, the kind of metadata can be one of the following: [MDN].
            */
            var MetaElement = (function (_super) {
                __extends(MetaElement, _super);
                //#endregion scheme
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new MetaElement'.
                */
                function MetaElement(config) {
                    _super.call(this, 'meta', config);
                }
                Object.defineProperty(MetaElement.prototype, "contentProperty", {
                    //#endregion Fields
                    //#region Properties
                    //#region contentProperty
                    /**
                    * This attribute gives the value associated with the http-equiv or name attribute, depending of the context [MDN].
                    */
                    get: function () {
                        if (!this._contentProperty)
                            initializeProperty(this, 'content', 'content');
                        return this._contentProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MetaElement.prototype, "content", {
                    //#endregion contentProperty
                    //#region content
                    /**
                    * This attribute gives the value associated with the http-equiv or name attribute, depending of the context [MDN].
                    */
                    get: function () {
                        return this.contentProperty.value;
                    },
                    set: function (value) {
                        this.contentProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MetaElement.prototype, "httpEquivProperty", {
                    //#endregion content
                    //#region httpEquivProperty
                    /**
                    * Html.MetaHttpEquiv enumerates the values of this property.
                    * This enumerated attribute defines the pragma that can alter servers and user-agents behavior. The value of the pragma is defined using the content and can be one of the following:  content-language  This pragma defines the default language of the page.
                    * Note: do not use this pragma as it is obsolete. Use the global lang attribute on the <body> element instead.  content-type  This attribute defines the MIME type of the document, eventually followed by its character set. It follows the same syntax as the HTTP content-type entity-header field, but as it is inside an HTML Element, most value are not possible. Therefore the valid syntax for its content is the literal string 'text/html' eventually followed by a character set with the following syntax:'; charset=IANAcharset' where IANAcharset is the preferred MIME name for a character set as defined by the IANA
                    * Note:   Do not use this pragma as it is obsolete. Use the charset attribute on the <meta> element instead. As the <meta> may not be used to change the type of a document in an XHTML document, or in an HTML5 document following the XHTML syntax, never set set MIME type to an XHTML MIME type that way. It would be incorrect. Only HTML document can use the content-type, so most of it is redundant: that's why it has been obsoleted and replaced by the charset attribute.    default-style  This pragma specifies the preferred stylesheet to be used on the page. The content attribute must contains the id of a <link> element whose href attribute links to a CSS stylesheet, or the id of a <style> element which contains a CSS stylesheet.  refresh  This pragma specifies:  the number of seconds until the page should be reloaded, if the content attribute contains only a positive integer number;  the number of seconds until the page should be redirected to another, if the content attribute contains a positive integer number followed by the string ';url=' and a valid URL.   set-cookie  This pragma defines a cookie for the page. Its content must follows the syntax defines in the IETF HTTP Cookie Specification.
                    * Note: Do not use this pragma as it is obsolete. Use the HTTP header set-cookie instead [MDN].
                    */
                    get: function () {
                        if (!this._httpEquivProperty)
                            initializeProperty(this, 'httpEquiv', 'httpEquiv');
                        return this._httpEquivProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MetaElement.prototype, "httpEquiv", {
                    //#endregion httpEquivProperty
                    //#region httpEquiv
                    /**
                    * Html.MetaHttpEquiv enumerates the values of this property.
                    * This enumerated attribute defines the pragma that can alter servers and user-agents behavior. The value of the pragma is defined using the content and can be one of the following:  content-language  This pragma defines the default language of the page.
                    * Note: do not use this pragma as it is obsolete. Use the global lang attribute on the <body> element instead.  content-type  This attribute defines the MIME type of the document, eventually followed by its character set. It follows the same syntax as the HTTP content-type entity-header field, but as it is inside an HTML Element, most value are not possible. Therefore the valid syntax for its content is the literal string 'text/html' eventually followed by a character set with the following syntax:'; charset=IANAcharset' where IANAcharset is the preferred MIME name for a character set as defined by the IANA
                    * Note:   Do not use this pragma as it is obsolete. Use the charset attribute on the <meta> element instead. As the <meta> may not be used to change the type of a document in an XHTML document, or in an HTML5 document following the XHTML syntax, never set set MIME type to an XHTML MIME type that way. It would be incorrect. Only HTML document can use the content-type, so most of it is redundant: that's why it has been obsoleted and replaced by the charset attribute.    default-style  This pragma specifies the preferred stylesheet to be used on the page. The content attribute must contains the id of a <link> element whose href attribute links to a CSS stylesheet, or the id of a <style> element which contains a CSS stylesheet.  refresh  This pragma specifies:  the number of seconds until the page should be reloaded, if the content attribute contains only a positive integer number;  the number of seconds until the page should be redirected to another, if the content attribute contains a positive integer number followed by the string ';url=' and a valid URL.   set-cookie  This pragma defines a cookie for the page. Its content must follows the syntax defines in the IETF HTTP Cookie Specification.
                    * Note: Do not use this pragma as it is obsolete. Use the HTTP header set-cookie instead [MDN].
                    */
                    get: function () {
                        return this.httpEquivProperty.value;
                    },
                    set: function (value) {
                        this.httpEquivProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MetaElement.prototype, "nameProperty", {
                    //#endregion httpEquiv
                    //#region nameProperty
                    /**
                    * Html.MetaName enumerates the values of this property.
                    * This attribute defines the name of a document-level metadata. It should not be set if one of the attribute itemprop, http-equiv or charset is also set. This document-level metadata name is associated with a value, contained by the content attribute. The possible values for the name element are, with their associated value stored via the content attribute:  application-name, defining the name of the web application running in the webpage;
                    * Note:   Browsers may use this to identify the application. It is different from the <title> element, which usually consist of the application name but may also contain specific information like the document name or a status; Simple webpages shouldn't define the application-name meta.   author, defining, in a free format, the name of the author of the document; description, containing a short and accurate summary of the content of the page. Several browsers, among them Firefox and Opera, use this meta as the default description of the page when bookmarked; generator, containing, in a free format, the identifier to the software that generated the page; keywords, containing, as strings separated by commas, relevant words associated with the content of the page. The attribute may also have a value taken from the extended list defined on WHATWG Wiki MetaExtensions page. Also none has been formally accepted yet, a few commonly used names are among the proposals:  creator, defining, in a free format, the name of the creator of the document. Note that it can be the name of the institution. If there are more than one, several <meta> element should be used; googlebot, which is a synonym of robots, but is only followed by Googlebot, the indexing crawler for Google; publisher, defining, in a free format, the name of the publisher of the document. Note that it can be the name of the institution; robots, defining the behavior that cooperative crawlers should have with the page. It is a comma-separated list of values taken in the following list:   Values for the content of <meta name="robots">   Value  Description  Used by      index  Allows the robot to index the page  All    noindex  Prevents the robot to index the page  All    follow  Allows the robot to follow the links on the page  All    nofollow  Prevents the robot to follow the links on the page  All    noodp  Prevents the usage of the Open Directory Project description, if any, as the description of the page in the search engine results page   Google, Yahoo, Bing     noarchive  Prevents the search engine to cache the content of the page  Google, Yahoo    nosnippet  Prevents the display of any description of the page in the search engine results page  Google    noimageindex  Prevents this page to appear as the referring page of an indexed image  Google    noydir  Prevents the usage of the Yahoo Directory description, if any, as the description of the page in the search engine results page  Yahoo    nocache  Synonym of noarchive  Bing    Notes:   Only cooperative robots will follow the rules defined by the robots name. Do not expect to keep e-mail harvesters at bay with this The robot still needs to access the page in order to read the meta value. If you want to keep them at bay, for example to prevent bandwidth consumption, use a robots.txt file instead (or in complement). If you want to remove the page of an index, changing the meta to noindex will work, but only when the robot visit the page again. Be sure not to prevent such visit, via the robots.txt file for example. Some search engines have developers tools allowing a quick removal of some page. Some possible values are mutually exclusive, like using index and noindex, or follow and nofollow, at the same time. In these case the behavior of the robot is undefined, and may vary from one to the other. So avoid these cases. Some search engine crawler robots, like those of Google, Yahoo Search or Bing, supports the same values on an HTTP directive, X-Robot-Tags: this allows to use these pragma on non-HTML documents, like images.   slurp, which is a synonym of robots, but is only followed by Slurp, the indexing crawler for Yahoo Search; Finally a few names are in common use, though not in progress of being standardized:  viewport, which gives hints about the size of the initial size of the viewport. This pragma is used by several mobile devices only.   Values for the content of <meta name="viewport">   Value  Possible values  Description      width  a positive integer number or the literal device-width  defines the width, in pixels, of the viewport    height  a positive integer number of the literal device-height  defines the height, in pixels, of the viewport    initial-scale  a positive number between 0.0 and 10.0  defines the ratio between the device width (device-width in portrait mode or device-height in landscape mode) and the viewport size.e    maximum-scale  a positive number between 0.0 and 10.0  defines the maximum value of the zoom; it must be greater or equal to the minimum-scale or the behavior is underterminate.    minimum-scale  a positive number between 0.0 and 10.0  defines the minimum value of the zoom; it must be smaller or equal to the maximum-scale or the behavior is undeterminate.    user-scalable  a boolean value (yes or no)  If set to no, the user is not able to zoom or in the webpage. Default value is yes.    Notes:   Though not standardized, this attribute is used by different mobile browsers like Safari Mobile, Firefox for Mobile or Opera Mobile. The default values may change from one device, and browser, to another To learn about this pragma in Firefox for Mobile, see this article [MDN].
                    */
                    get: function () {
                        if (!this._nameProperty)
                            initializeProperty(this, 'name', 'name');
                        return this._nameProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MetaElement.prototype, "name", {
                    //#endregion nameProperty
                    //#region name
                    /**
                    * Html.MetaName enumerates the values of this property.
                    * This attribute defines the name of a document-level metadata. It should not be set if one of the attribute itemprop, http-equiv or charset is also set. This document-level metadata name is associated with a value, contained by the content attribute. The possible values for the name element are, with their associated value stored via the content attribute:  application-name, defining the name of the web application running in the webpage;
                    * Note:   Browsers may use this to identify the application. It is different from the <title> element, which usually consist of the application name but may also contain specific information like the document name or a status; Simple webpages shouldn't define the application-name meta.   author, defining, in a free format, the name of the author of the document; description, containing a short and accurate summary of the content of the page. Several browsers, among them Firefox and Opera, use this meta as the default description of the page when bookmarked; generator, containing, in a free format, the identifier to the software that generated the page; keywords, containing, as strings separated by commas, relevant words associated with the content of the page. The attribute may also have a value taken from the extended list defined on WHATWG Wiki MetaExtensions page. Also none has been formally accepted yet, a few commonly used names are among the proposals:  creator, defining, in a free format, the name of the creator of the document. Note that it can be the name of the institution. If there are more than one, several <meta> element should be used; googlebot, which is a synonym of robots, but is only followed by Googlebot, the indexing crawler for Google; publisher, defining, in a free format, the name of the publisher of the document. Note that it can be the name of the institution; robots, defining the behavior that cooperative crawlers should have with the page. It is a comma-separated list of values taken in the following list:   Values for the content of <meta name="robots">   Value  Description  Used by      index  Allows the robot to index the page  All    noindex  Prevents the robot to index the page  All    follow  Allows the robot to follow the links on the page  All    nofollow  Prevents the robot to follow the links on the page  All    noodp  Prevents the usage of the Open Directory Project description, if any, as the description of the page in the search engine results page   Google, Yahoo, Bing     noarchive  Prevents the search engine to cache the content of the page  Google, Yahoo    nosnippet  Prevents the display of any description of the page in the search engine results page  Google    noimageindex  Prevents this page to appear as the referring page of an indexed image  Google    noydir  Prevents the usage of the Yahoo Directory description, if any, as the description of the page in the search engine results page  Yahoo    nocache  Synonym of noarchive  Bing    Notes:   Only cooperative robots will follow the rules defined by the robots name. Do not expect to keep e-mail harvesters at bay with this The robot still needs to access the page in order to read the meta value. If you want to keep them at bay, for example to prevent bandwidth consumption, use a robots.txt file instead (or in complement). If you want to remove the page of an index, changing the meta to noindex will work, but only when the robot visit the page again. Be sure not to prevent such visit, via the robots.txt file for example. Some search engines have developers tools allowing a quick removal of some page. Some possible values are mutually exclusive, like using index and noindex, or follow and nofollow, at the same time. In these case the behavior of the robot is undefined, and may vary from one to the other. So avoid these cases. Some search engine crawler robots, like those of Google, Yahoo Search or Bing, supports the same values on an HTTP directive, X-Robot-Tags: this allows to use these pragma on non-HTML documents, like images.   slurp, which is a synonym of robots, but is only followed by Slurp, the indexing crawler for Yahoo Search; Finally a few names are in common use, though not in progress of being standardized:  viewport, which gives hints about the size of the initial size of the viewport. This pragma is used by several mobile devices only.   Values for the content of <meta name="viewport">   Value  Possible values  Description      width  a positive integer number or the literal device-width  defines the width, in pixels, of the viewport    height  a positive integer number of the literal device-height  defines the height, in pixels, of the viewport    initial-scale  a positive number between 0.0 and 10.0  defines the ratio between the device width (device-width in portrait mode or device-height in landscape mode) and the viewport size.e    maximum-scale  a positive number between 0.0 and 10.0  defines the maximum value of the zoom; it must be greater or equal to the minimum-scale or the behavior is underterminate.    minimum-scale  a positive number between 0.0 and 10.0  defines the minimum value of the zoom; it must be smaller or equal to the maximum-scale or the behavior is undeterminate.    user-scalable  a boolean value (yes or no)  If set to no, the user is not able to zoom or in the webpage. Default value is yes.    Notes:   Though not standardized, this attribute is used by different mobile browsers like Safari Mobile, Firefox for Mobile or Opera Mobile. The default values may change from one device, and browser, to another To learn about this pragma in Firefox for Mobile, see this article [MDN].
                    */
                    get: function () {
                        return this.nameProperty.value;
                    },
                    set: function (value) {
                        this.nameProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MetaElement.prototype, "schemeProperty", {
                    //#endregion name
                    //#region schemeProperty
                    /**
                    * This attribute defines the scheme in which the metadata is described. A scheme is a context leading to the correct interpretations of the content value, like a format.  Notes: Do not use this attribute as it is obsolete. There is no replacement for it as there was no real usage for it. Omit it altogether [MDN].
                    */
                    get: function () {
                        if (!this._schemeProperty)
                            initializeProperty(this, 'scheme', 'scheme');
                        return this._schemeProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MetaElement.prototype, "scheme", {
                    //#endregion schemeProperty
                    //#region scheme
                    /**
                    * This attribute defines the scheme in which the metadata is described. A scheme is a context leading to the correct interpretations of the content value, like a format.  Notes: Do not use this attribute as it is obsolete. There is no replacement for it as there was no real usage for it. Omit it altogether [MDN].
                    */
                    get: function () {
                        return this.schemeProperty.value;
                    },
                    set: function (value) {
                        this.schemeProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                MetaElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'content', true);
                    setPropertyFromConfig(this, config, 'httpEquiv', true);
                    setPropertyFromConfig(this, config, 'name', true);
                    setPropertyFromConfig(this, config, 'scheme', true);
                };
                return MetaElement;
            })(HtmlElement);
            Elements.MetaElement = MetaElement;
            //#endregion MetaElement
            //#region NavigationElement
            /**
            * The HTML Navigation Element (<nav>) represents a section of a page that links to other pages or to parts within the page [MDN].
            */
            var NavigationElement = (function (_super) {
                __extends(NavigationElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new NavigationElement'.
                */
                function NavigationElement(config) {
                    _super.call(this, 'nav', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                NavigationElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return NavigationElement;
            })(HtmlElementContainer);
            Elements.NavigationElement = NavigationElement;
            //#endregion NavigationElement
            //#region NoScriptElement
            /**
            * The HTML <noscript> Element defines a section of html to be inserted if a script type on the page is unsupported or if scripting is currently turned off in the browser [MDN].
            */
            var NoScriptElement = (function (_super) {
                __extends(NoScriptElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new NoScriptElement'.
                */
                function NoScriptElement(config) {
                    _super.call(this, 'noscript', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                NoScriptElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return NoScriptElement;
            })(HtmlElementContainer);
            Elements.NoScriptElement = NoScriptElement;
            //#endregion NoScriptElement
            //#region OptionElement
            /**
            * In a Web form, the HTML <option> element is used to create a control representing an item within a <select>, <optgroup> or <datalist> element [MDN].
            */
            var OptionElement = (function (_super) {
                __extends(OptionElement, _super);
                //#endregion value
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new OptionElement'.
                */
                function OptionElement(config) {
                    _super.call(this, 'option', config);
                }
                Object.defineProperty(OptionElement.prototype, "disabledProperty", {
                    //#endregion Fields
                    //#region Properties
                    //#region disabledProperty
                    /**
                    * If this Boolean attribute is set, this option is not checkable [MDN].
                    */
                    get: function () {
                        if (!this._disabledProperty)
                            initializeProperty(this, 'disabled', 'disabled');
                        return this._disabledProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(OptionElement.prototype, "disabled", {
                    //#endregion disabledProperty
                    //#region disabled
                    /**
                    * If this Boolean attribute is set, this option is not checkable [MDN].
                    */
                    get: function () {
                        return this.disabledProperty.value;
                    },
                    set: function (value) {
                        this.disabledProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(OptionElement.prototype, "labelProperty", {
                    //#endregion disabled
                    //#region labelProperty
                    /**
                    * This attribute contains a text label indicating the meaning of the option. If it is not defined, the value defaults to the element's text content.
                    * Note: the label attribute is designed to contain a short label typically used in a hierarchical menu. The value attribute describes a longer label designed to be used near a radio button, for example [MDN].
                    */
                    get: function () {
                        if (!this._labelProperty)
                            initializeProperty(this, 'label', 'label');
                        return this._labelProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(OptionElement.prototype, "label", {
                    //#endregion labelProperty
                    //#region label
                    /**
                    * This attribute contains a text label indicating the meaning of the option. If it is not defined, the value defaults to the element's text content.
                    * Note: the label attribute is designed to contain a short label typically used in a hierarchical menu. The value attribute describes a longer label designed to be used near a radio button, for example [MDN].
                    */
                    get: function () {
                        return this.labelProperty.value;
                    },
                    set: function (value) {
                        this.labelProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(OptionElement.prototype, "selectedProperty", {
                    //#endregion label
                    //#region selectedProperty
                    /**
                    * This Boolean attribute indicates that the option is initially selected. If the <option> element is the descendant of a <select> element whose multiple attribute is not set, only one <option> in the <select> may have the selected attribute [MDN].
                    */
                    get: function () {
                        if (!this._selectedProperty)
                            initializeProperty(this, 'selected', 'selected');
                        return this._selectedProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(OptionElement.prototype, "selected", {
                    //#endregion selectedProperty
                    //#region selected
                    /**
                    * This Boolean attribute indicates that the option is initially selected. If the <option> element is the descendant of a <select> element whose multiple attribute is not set, only one <option> in the <select> may have the selected attribute [MDN].
                    */
                    get: function () {
                        return this.selectedProperty.value;
                    },
                    set: function (value) {
                        this.selectedProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(OptionElement.prototype, "valueProperty", {
                    //#endregion selected
                    //#region valueProperty
                    /**
                    * This textual contains a longer text label explaining the option, much like the label attribute. The label attribute is designed to contain a short label typically used in a hierarchical menu, whereas the value attribute describes a longer label designed to be used near a radio button, for example [MDN].
                    */
                    get: function () {
                        if (!this._valueProperty)
                            initializeProperty(this, 'value', 'value');
                        return this._valueProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(OptionElement.prototype, "value", {
                    //#endregion valueProperty
                    //#region value
                    /**
                    * This textual contains a longer text label explaining the option, much like the label attribute. The label attribute is designed to contain a short label typically used in a hierarchical menu, whereas the value attribute describes a longer label designed to be used near a radio button, for example [MDN].
                    */
                    get: function () {
                        return this.valueProperty.value;
                    },
                    set: function (value) {
                        this.valueProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                OptionElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'disabled', true);
                    setPropertyFromConfig(this, config, 'label', true);
                    setPropertyFromConfig(this, config, 'selected', true);
                    setPropertyFromConfig(this, config, 'value', true);
                };
                return OptionElement;
            })(HtmlElementContainer);
            Elements.OptionElement = OptionElement;
            //#endregion OptionElement
            //#region OptionsGroupElement
            /**
            * In a Web form, the HTML <optgroup> element  creates a grouping of options within a <select> element [MDN].
            */
            var OptionsGroupElement = (function (_super) {
                __extends(OptionsGroupElement, _super);
                //#endregion label
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new OptionsGroupElement'.
                */
                function OptionsGroupElement(config) {
                    _super.call(this, 'optgroup', config);
                }
                Object.defineProperty(OptionsGroupElement.prototype, "disabledProperty", {
                    //#endregion Fields
                    //#region Properties
                    //#region disabledProperty
                    /**
                    * If this Boolean attribute is set, none of the items in this option group is selectable. Often browsers grey out such control and it won't receive any browsing events, like mouse clicks or focus-related ones [MDN].
                    */
                    get: function () {
                        if (!this._disabledProperty)
                            initializeProperty(this, 'disabled', 'disabled');
                        return this._disabledProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(OptionsGroupElement.prototype, "disabled", {
                    //#endregion disabledProperty
                    //#region disabled
                    /**
                    * If this Boolean attribute is set, none of the items in this option group is selectable. Often browsers grey out such control and it won't receive any browsing events, like mouse clicks or focus-related ones [MDN].
                    */
                    get: function () {
                        return this.disabledProperty.value;
                    },
                    set: function (value) {
                        this.disabledProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(OptionsGroupElement.prototype, "labelProperty", {
                    //#endregion disabled
                    //#region labelProperty
                    /**
                    * The name of the group of options, which the browser can use when labeling the options in the user interface. This attribute is mandatory if this element is used [MDN].
                    */
                    get: function () {
                        if (!this._labelProperty)
                            initializeProperty(this, 'label', 'label');
                        return this._labelProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(OptionsGroupElement.prototype, "label", {
                    //#endregion labelProperty
                    //#region label
                    /**
                    * The name of the group of options, which the browser can use when labeling the options in the user interface. This attribute is mandatory if this element is used [MDN].
                    */
                    get: function () {
                        return this.labelProperty.value;
                    },
                    set: function (value) {
                        this.labelProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                OptionsGroupElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'disabled', true);
                    setPropertyFromConfig(this, config, 'label', true);
                };
                return OptionsGroupElement;
            })(HtmlElementContainer);
            Elements.OptionsGroupElement = OptionsGroupElement;
            //#endregion OptionsGroupElement
            //#region OrderedListElement
            /**
            * The HTML <ol> Element (or HTML Ordered List Element) represents an ordered list of items. Typically, ordered-list items are displayed with a preceding numbering, which can be of any form, like numerals, letters or Romans numerals or even simple bullets. This numbered style is not defined in the HTML description of the page, but in its associated CSS, using the list-style-type property [MDN].
            */
            var OrderedListElement = (function (_super) {
                __extends(OrderedListElement, _super);
                //#endregion type
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new OrderedListElement'.
                */
                function OrderedListElement(config) {
                    _super.call(this, 'ol', config);
                }
                Object.defineProperty(OrderedListElement.prototype, "compactProperty", {
                    //#endregion Fields
                    //#region Properties
                    //#region compactProperty
                    /**
                    * This Boolean attribute hints that the list should be rendered in a compact style. The interpretation of this attribute depends on the user agent and it doesn't work in all browsers. Note: Do not use this attribute, as it has been deprecated: the <ol> element should be styled using CSS. To give a similar effect than the compact attribute, the CSS property line-height can be used with a value of 80% [MDN].
                    */
                    get: function () {
                        if (!this._compactProperty)
                            initializeProperty(this, 'compact', 'compact');
                        return this._compactProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(OrderedListElement.prototype, "compact", {
                    //#endregion compactProperty
                    //#region compact
                    /**
                    * This Boolean attribute hints that the list should be rendered in a compact style. The interpretation of this attribute depends on the user agent and it doesn't work in all browsers. Note: Do not use this attribute, as it has been deprecated: the <ol> element should be styled using CSS. To give a similar effect than the compact attribute, the CSS property line-height can be used with a value of 80% [MDN].
                    */
                    get: function () {
                        return this.compactProperty.value;
                    },
                    set: function (value) {
                        this.compactProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(OrderedListElement.prototype, "startProperty", {
                    //#endregion compact
                    //#region startProperty
                    /**
                    * This integer attribute specifies the start value for numbering the individual list items. Although the ordering type of list elements might be Roman numerals, such as XXXI, or letters, the value of start is always represented as a number. To start numbering elements from the letter "C", use <ol start="3">.
                    * Note: This attribute was deprecated in HTML4, but reintroduced in HTML5 [MDN].
                    */
                    get: function () {
                        if (!this._startProperty)
                            initializeProperty(this, 'start', 'start');
                        return this._startProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(OrderedListElement.prototype, "start", {
                    //#endregion startProperty
                    //#region start
                    /**
                    * This integer attribute specifies the start value for numbering the individual list items. Although the ordering type of list elements might be Roman numerals, such as XXXI, or letters, the value of start is always represented as a number. To start numbering elements from the letter "C", use <ol start="3">.
                    * Note: This attribute was deprecated in HTML4, but reintroduced in HTML5 [MDN].
                    */
                    get: function () {
                        return this.startProperty.value;
                    },
                    set: function (value) {
                        this.startProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(OrderedListElement.prototype, "typeProperty", {
                    //#endregion start
                    //#region typeProperty
                    /**
                    * Html.OrderedListType enumerates the values of this property.
                    * Indicates the numbering type:  'a' indicates lowercase letters, 'A' indicates uppercase letters, 'i' indicates lowercase Roman numerals, 'I' indicates uppercase Roman numerals, and '1' indicates numbers (default). The type set is used for the entire list unless a different type attribute is used within an enclosed <li> element.  Note: This attribute was deprecated in HTML4, but reintroduced in HTML5. Unless the value of the list number matters (e.g. in legal or technical documents where items are to be referenced by their number/letter), the CSS list-style-type property should be used instead [MDN].
                    */
                    get: function () {
                        if (!this._typeProperty)
                            initializeProperty(this, 'type', 'type');
                        return this._typeProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(OrderedListElement.prototype, "type", {
                    //#endregion typeProperty
                    //#region type
                    /**
                    * Html.OrderedListType enumerates the values of this property.
                    * Indicates the numbering type:  'a' indicates lowercase letters, 'A' indicates uppercase letters, 'i' indicates lowercase Roman numerals, 'I' indicates uppercase Roman numerals, and '1' indicates numbers (default). The type set is used for the entire list unless a different type attribute is used within an enclosed <li> element.  Note: This attribute was deprecated in HTML4, but reintroduced in HTML5. Unless the value of the list number matters (e.g. in legal or technical documents where items are to be referenced by their number/letter), the CSS list-style-type property should be used instead [MDN].
                    */
                    get: function () {
                        return this.typeProperty.value;
                    },
                    set: function (value) {
                        this.typeProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                OrderedListElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'compact', true);
                    setPropertyFromConfig(this, config, 'start', true);
                    setPropertyFromConfig(this, config, 'type', true);
                };
                return OrderedListElement;
            })(HtmlElementContainer);
            Elements.OrderedListElement = OrderedListElement;
            //#endregion OrderedListElement
            //#region ParagraphElement
            /**
            * The HTML <p> element (or HTML Paragraph Element) represents a paragraph of text. Paragraphs are block-level elements [MDN].
            */
            var ParagraphElement = (function (_super) {
                __extends(ParagraphElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new ParagraphElement'.
                */
                function ParagraphElement(config) {
                    _super.call(this, 'p', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                ParagraphElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return ParagraphElement;
            })(HtmlElementContainer);
            Elements.ParagraphElement = ParagraphElement;
            //#endregion ParagraphElement
            //#region ParameterElement
            /**
            * The HTML <param> Element (or HTML Parameter Element) defines parameters for <object> [MDN].
            */
            var ParameterElement = (function (_super) {
                __extends(ParameterElement, _super);
                //#endregion valueType
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new ParameterElement'.
                */
                function ParameterElement(config) {
                    _super.call(this, 'param', config);
                }
                Object.defineProperty(ParameterElement.prototype, "nameProperty", {
                    //#endregion Fields
                    //#region Properties
                    //#region nameProperty
                    /**
                    * Name of the parameter [MDN].
                    */
                    get: function () {
                        if (!this._nameProperty)
                            initializeProperty(this, 'name', 'name');
                        return this._nameProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ParameterElement.prototype, "name", {
                    //#endregion nameProperty
                    //#region name
                    /**
                    * Name of the parameter [MDN].
                    */
                    get: function () {
                        return this.nameProperty.value;
                    },
                    set: function (value) {
                        this.nameProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ParameterElement.prototype, "typeProperty", {
                    //#endregion name
                    //#region typeProperty
                    /**
                    * Only used if the valuetype is set to "ref". Specifies the MIME type of values found at the URI specified by value [MDN].
                    */
                    get: function () {
                        if (!this._typeProperty)
                            initializeProperty(this, 'type', 'type');
                        return this._typeProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ParameterElement.prototype, "type", {
                    //#endregion typeProperty
                    //#region type
                    /**
                    * Only used if the valuetype is set to "ref". Specifies the MIME type of values found at the URI specified by value [MDN].
                    */
                    get: function () {
                        return this.typeProperty.value;
                    },
                    set: function (value) {
                        this.typeProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ParameterElement.prototype, "valueProperty", {
                    //#endregion type
                    //#region valueProperty
                    /**
                    * Specifies the value of the parameter [MDN].
                    */
                    get: function () {
                        if (!this._valueProperty)
                            initializeProperty(this, 'value', 'value');
                        return this._valueProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ParameterElement.prototype, "value", {
                    //#endregion valueProperty
                    //#region value
                    /**
                    * Specifies the value of the parameter [MDN].
                    */
                    get: function () {
                        return this.valueProperty.value;
                    },
                    set: function (value) {
                        this.valueProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ParameterElement.prototype, "valueTypeProperty", {
                    //#endregion value
                    //#region valueTypeProperty
                    /**
                    * Specifies the type of the value attribute. Possible values are:  data: Default value. The value is passed to the object's implementation as a string. ref: The value is a URI to a resource where run-time values are stored. object: An ID of another <object> in the same document [MDN].
                    */
                    get: function () {
                        if (!this._valueTypeProperty)
                            initializeProperty(this, 'valueType', 'valueType');
                        return this._valueTypeProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ParameterElement.prototype, "valueType", {
                    //#endregion valueTypeProperty
                    //#region valueType
                    /**
                    * Specifies the type of the value attribute. Possible values are:  data: Default value. The value is passed to the object's implementation as a string. ref: The value is a URI to a resource where run-time values are stored. object: An ID of another <object> in the same document [MDN].
                    */
                    get: function () {
                        return this.valueTypeProperty.value;
                    },
                    set: function (value) {
                        this.valueTypeProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                ParameterElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'name', true);
                    setPropertyFromConfig(this, config, 'type', true);
                    setPropertyFromConfig(this, config, 'value', true);
                    setPropertyFromConfig(this, config, 'valueType', true);
                };
                return ParameterElement;
            })(HtmlElement);
            Elements.ParameterElement = ParameterElement;
            //#endregion ParameterElement
            //#region PreformattedElement
            /**
            * The HTML <pre> Element (or HTML Preformatted Text) represents preformatted text. Text within this element is typically displayed in a non-proportional font exactly as it is laid out in the file. Whitespaces inside this element are displayed as typed [MDN].
            */
            var PreformattedElement = (function (_super) {
                __extends(PreformattedElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new PreformattedElement'.
                */
                function PreformattedElement(config) {
                    _super.call(this, 'pre', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                PreformattedElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return PreformattedElement;
            })(HtmlElementContainer);
            Elements.PreformattedElement = PreformattedElement;
            //#endregion PreformattedElement
            //#region ProgressElement
            /**
            * The HTML <progress> Element is used to view the completion progress of a task. While the specifics of how it's displayed is left up to the browser developer, it's typically displayed as a progress bar. Javascript can be used to manipulate the value of progress bar [MDN].
            */
            var ProgressElement = (function (_super) {
                __extends(ProgressElement, _super);
                //#endregion progressLoadEndEvent
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new ProgressElement'.
                */
                function ProgressElement(config) {
                    _super.call(this, 'progress', config);
                }
                Object.defineProperty(ProgressElement.prototype, "maxProperty", {
                    //#endregion Fields
                    //#region Properties
                    //#region maxProperty
                    /**
                    * This attribute describes how much work the task indicated by the progress element requires. The max attribute, if present, must have a value greater than zero and be a valid floating point number [MDN].
                    */
                    get: function () {
                        if (!this._maxProperty)
                            initializeProperty(this, 'max', 'max');
                        return this._maxProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ProgressElement.prototype, "max", {
                    //#endregion maxProperty
                    //#region max
                    /**
                    * This attribute describes how much work the task indicated by the progress element requires. The max attribute, if present, must have a value greater than zero and be a valid floating point number [MDN].
                    */
                    get: function () {
                        return this.maxProperty.value;
                    },
                    set: function (value) {
                        this.maxProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ProgressElement.prototype, "valueProperty", {
                    //#endregion max
                    //#region valueProperty
                    /**
                    * This attribute specifies how much of the task that has been completed. It must be a valid floating point number between 0 and max, or between 0 and 1 if max is omitted. If there is no value attribute, the progress bar is indeterminate; this indicates that an activity is ongoing with no indication of how long it is expected to take [MDN].
                    */
                    get: function () {
                        if (!this._valueProperty)
                            initializeProperty(this, 'value', 'value');
                        return this._valueProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ProgressElement.prototype, "value", {
                    //#endregion valueProperty
                    //#region value
                    /**
                    * This attribute specifies how much of the task that has been completed. It must be a valid floating point number between 0 and max, or between 0 and 1 if max is omitted. If there is no value attribute, the progress bar is indeterminate; this indicates that an activity is ongoing with no indication of how long it is expected to take [MDN].
                    */
                    get: function () {
                        return this.valueProperty.value;
                    },
                    set: function (value) {
                        this.valueProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ProgressElement.prototype, "progressErrorEvent", {
                    //#endregion value
                    //#region progressErrorEvent
                    /**
                    * The progressErrorEvent event is executed when progression has failed [MDN].
                    * Specifications: Progress, XMLHttpRequest
                    * DOM Event Name: error
                    */
                    get: function () {
                        if (!this._progressErrorEvent)
                            this._progressErrorEvent = new Html.HtmlElementEvent('error', 'ProgressEvent', this);
                        return this._progressErrorEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ProgressElement.prototype, "progressEvent", {
                    //#endregion progressErrorEvent
                    //#region progressEvent
                    /**
                    * The progressEvent event is executed when in progress [MDN].
                    * Specifications: Progress, XMLHttpRequest
                    * DOM Event Name: progress
                    */
                    get: function () {
                        if (!this._progressEvent)
                            this._progressEvent = new Html.HtmlElementEvent('progress', 'ProgressEvent', this);
                        return this._progressEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ProgressElement.prototype, "progressLoadEndEvent", {
                    //#endregion progressEvent
                    //#region progressLoadEndEvent
                    /**
                    * The progressLoadEndEvent event is executed when progress has stopped (after "error", "abort" or "load" have been dispatched) [MDN].
                    * Specifications: Progress, XMLHttpRequest
                    * DOM Event Name: loadend
                    */
                    get: function () {
                        if (!this._progressLoadEndEvent)
                            this._progressLoadEndEvent = new Html.HtmlElementEvent('loadend', 'ProgressEvent', this);
                        return this._progressLoadEndEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                ProgressElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'max', true);
                    setPropertyFromConfig(this, config, 'value', true);
                    if (config.progressErrorHandler)
                        this.progressErrorEvent.subscribe(config.progressErrorHandler);
                    if (config.progressHandler)
                        this.progressEvent.subscribe(config.progressHandler);
                    if (config.progressLoadEndHandler)
                        this.progressLoadEndEvent.subscribe(config.progressLoadEndHandler);
                };
                return ProgressElement;
            })(HtmlElementContainer);
            Elements.ProgressElement = ProgressElement;
            //#endregion ProgressElement
            //#region QuoteElement
            /**
            * The HTML <q> Element (or HTML Quote Element) indicates that the enclosed text is a short inline quotation. This element is intended for short quotations that don't require paragraph breaks; for long quotations use <blockquote> element [MDN].
            */
            var QuoteElement = (function (_super) {
                __extends(QuoteElement, _super);
                //#endregion citation
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new QuoteElement'.
                */
                function QuoteElement(config) {
                    _super.call(this, 'q', config);
                }
                Object.defineProperty(QuoteElement.prototype, "citationProperty", {
                    //#endregion Fields
                    //#region Properties
                    //#region citationProperty
                    /**
                    * The value of this attribute is a URL that designates a source document or message for the information quoted. This attribute is intended to point to information explaining the context or the reference for the quote [MDN].
                    */
                    get: function () {
                        if (!this._citationProperty)
                            initializeProperty(this, 'citation', 'cite');
                        return this._citationProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(QuoteElement.prototype, "citation", {
                    //#endregion citationProperty
                    //#region citation
                    /**
                    * The value of this attribute is a URL that designates a source document or message for the information quoted. This attribute is intended to point to information explaining the context or the reference for the quote [MDN].
                    */
                    get: function () {
                        return this.citationProperty.value;
                    },
                    set: function (value) {
                        this.citationProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                QuoteElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'citation', true);
                };
                return QuoteElement;
            })(HtmlElementContainer);
            Elements.QuoteElement = QuoteElement;
            //#endregion QuoteElement
            //#region RootElement
            /**
            * The HTML <html> Element (or HTML root element) represents the root of an HTML or XHTML document. All other elements must be descendants of this element [MDN].
            */
            var RootElement = (function (_super) {
                __extends(RootElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new RootElement'.
                */
                function RootElement(config) {
                    _super.call(this, 'html', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                RootElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return RootElement;
            })(HtmlElementContainer);
            Elements.RootElement = RootElement;
            //#endregion RootElement
            //#region RubyElement
            /**
            * The HTML <ruby> Element represents a ruby annotation. Ruby annotations are for showing pronounciation of East Asian characters [MDN].
            */
            var RubyElement = (function (_super) {
                __extends(RubyElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new RubyElement'.
                */
                function RubyElement(config) {
                    _super.call(this, 'ruby', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                RubyElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return RubyElement;
            })(HtmlElementContainer);
            Elements.RubyElement = RubyElement;
            //#endregion RubyElement
            //#region RubyParenthesisElement
            /**
            * The HTML <rp> element is used to provide fall-back parenthesis for browsers non-supporting ruby annotations. Ruby annotations are for showing pronounciation of East Asian characters, like using Japanese furigana or Taiwainese bopomofo characters. The <rp> element is used in the case of lack of <ruby> element support its content has what should be displayed in order to indicate the presence of a ruby annotation, usually parentheses [MDN].
            */
            var RubyParenthesisElement = (function (_super) {
                __extends(RubyParenthesisElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new RubyParenthesisElement'.
                */
                function RubyParenthesisElement(config) {
                    _super.call(this, 'rp', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                RubyParenthesisElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return RubyParenthesisElement;
            })(HtmlElementContainer);
            Elements.RubyParenthesisElement = RubyParenthesisElement;
            //#endregion RubyParenthesisElement
            //#region RubyPronunciationElement
            /**
            * The HTML <rt> Element embraces pronunciation of character presented in a ruby annotations, which are for showing pronunciation of East Asian characters and the <rt> element is used inside of <ruby> element [MDN].
            */
            var RubyPronunciationElement = (function (_super) {
                __extends(RubyPronunciationElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new RubyPronunciationElement'.
                */
                function RubyPronunciationElement(config) {
                    _super.call(this, 'rt', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                RubyPronunciationElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return RubyPronunciationElement;
            })(HtmlElementContainer);
            Elements.RubyPronunciationElement = RubyPronunciationElement;
            //#endregion RubyPronunciationElement
            //#region SampleElement
            /**
            * The HTML <samp> element is an inline element intended to identify sample output from a computer program. It is usually displayed in the browser's default monotype font (such as Lucida Console) [MDN].
            */
            var SampleElement = (function (_super) {
                __extends(SampleElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new SampleElement'.
                */
                function SampleElement(config) {
                    _super.call(this, 'samp', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                SampleElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return SampleElement;
            })(HtmlElementContainer);
            Elements.SampleElement = SampleElement;
            //#endregion SampleElement
            //#region ScriptElement
            /**
            * The HTML <script> element is used to embed or reference an executable script within an HTML or XHTML document [MDN].
            */
            var ScriptElement = (function (_super) {
                __extends(ScriptElement, _super);
                //#endregion errorEvent
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new ScriptElement'.
                */
                function ScriptElement(config) {
                    _super.call(this, 'script', config);
                }
                Object.defineProperty(ScriptElement.prototype, "asyncProperty", {
                    //#endregion Fields
                    //#region Properties
                    //#region asyncProperty
                    /**
                    * Set this Boolean attribute to indicate that the browser should, if possible, execute the script asynchronously. It has no effect on inline scripts (i.e., scripts that don't have the src attribute) [MDN].
                    */
                    get: function () {
                        if (!this._asyncProperty)
                            initializeProperty(this, 'async', 'async');
                        return this._asyncProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ScriptElement.prototype, "async", {
                    //#endregion asyncProperty
                    //#region async
                    /**
                    * Set this Boolean attribute to indicate that the browser should, if possible, execute the script asynchronously. It has no effect on inline scripts (i.e., scripts that don't have the src attribute) [MDN].
                    */
                    get: function () {
                        return this.asyncProperty.value;
                    },
                    set: function (value) {
                        this.asyncProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ScriptElement.prototype, "sourceProperty", {
                    //#endregion async
                    //#region sourceProperty
                    /**
                    * This attribute specifies the URI of an external script; this can be used as an alternative to embedding a script directly within a document. script elements with an src attribute specified should not have a script embedded within its tags [MDN].
                    */
                    get: function () {
                        if (!this._sourceProperty)
                            initializeProperty(this, 'source', 'src');
                        return this._sourceProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ScriptElement.prototype, "source", {
                    //#endregion sourceProperty
                    //#region source
                    /**
                    * This attribute specifies the URI of an external script; this can be used as an alternative to embedding a script directly within a document. script elements with an src attribute specified should not have a script embedded within its tags [MDN].
                    */
                    get: function () {
                        return this.sourceProperty.value;
                    },
                    set: function (value) {
                        this.sourceProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ScriptElement.prototype, "typeProperty", {
                    //#endregion source
                    //#region typeProperty
                    /**
                    * This attribute identifies the scripting language of code embedded within a script element or referenced via the elementâ€™s src attribute. This is specified as a MIME type; examples of supported MIME types include text/javascript, text/ecmascript, application/javascript, and application/ecmascript. If this attribute is absent, the script is treated as JavaScript [MDN].
                    */
                    get: function () {
                        if (!this._typeProperty)
                            initializeProperty(this, 'type', 'type');
                        return this._typeProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ScriptElement.prototype, "type", {
                    //#endregion typeProperty
                    //#region type
                    /**
                    * This attribute identifies the scripting language of code embedded within a script element or referenced via the elementâ€™s src attribute. This is specified as a MIME type; examples of supported MIME types include text/javascript, text/ecmascript, application/javascript, and application/ecmascript. If this attribute is absent, the script is treated as JavaScript [MDN].
                    */
                    get: function () {
                        return this.typeProperty.value;
                    },
                    set: function (value) {
                        this.typeProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ScriptElement.prototype, "deferProperty", {
                    //#endregion type
                    //#region deferProperty
                    /**
                    * This Boolean attribute is set to indicate to a browser that the script is meant to be executed after the document has been parsed. Since this feature hasn't yet been implemented by all other major browsers, authors should not assume that the scriptâ€™s execution will actually be deferred. Never call document.write() from a defer script (since Gecko 1.9.2, this will blow away the document). The defer attribute shouldn't be used on scripts that don't have the src attribute. Since Gecko 1.9.2, the defer attribute is ignored on scripts that don't have the src attribute. However, in Gecko 1.9.1 even inline scripts are deferred if the defer attribute is set [MDN].
                    */
                    get: function () {
                        if (!this._deferProperty)
                            initializeProperty(this, 'defer', 'defer');
                        return this._deferProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ScriptElement.prototype, "defer", {
                    //#endregion deferProperty
                    //#region defer
                    /**
                    * This Boolean attribute is set to indicate to a browser that the script is meant to be executed after the document has been parsed. Since this feature hasn't yet been implemented by all other major browsers, authors should not assume that the scriptâ€™s execution will actually be deferred. Never call document.write() from a defer script (since Gecko 1.9.2, this will blow away the document). The defer attribute shouldn't be used on scripts that don't have the src attribute. Since Gecko 1.9.2, the defer attribute is ignored on scripts that don't have the src attribute. However, in Gecko 1.9.1 even inline scripts are deferred if the defer attribute is set [MDN].
                    */
                    get: function () {
                        return this.deferProperty.value;
                    },
                    set: function (value) {
                        this.deferProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ScriptElement.prototype, "errorEvent", {
                    //#endregion defer
                    //#region errorEvent
                    /**
                    * The errorEvent event is executed when a resource failed to load [MDN].
                    * Specification: DOM L3
                    * DOM Event Name: error
                    */
                    get: function () {
                        if (!this._errorEvent)
                            this._errorEvent = new Html.HtmlElementEvent('error', 'UIEvent', this);
                        return this._errorEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                ScriptElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'async', true);
                    setPropertyFromConfig(this, config, 'source', true);
                    setPropertyFromConfig(this, config, 'type', true);
                    setPropertyFromConfig(this, config, 'defer', true);
                    if (config.errorHandler)
                        this.errorEvent.subscribe(config.errorHandler);
                };
                return ScriptElement;
            })(HtmlElementContainer);
            Elements.ScriptElement = ScriptElement;
            //#endregion ScriptElement
            //#region SectionElement
            /**
            * The HTML Section Element (<section>) represents a generic section of a document, i.e., a thematic grouping of content, typically with a heading [MDN].
            */
            var SectionElement = (function (_super) {
                __extends(SectionElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new SectionElement'.
                */
                function SectionElement(config) {
                    _super.call(this, 'section', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                SectionElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return SectionElement;
            })(HtmlElementContainer);
            Elements.SectionElement = SectionElement;
            //#endregion SectionElement
            //#region SelectElement
            /**
            * The HTML select (<select>) element represents a control that presents menu of options. The options within the menu are represented by <option> elements, which can be grouped by <optgroup> elements. Options can be pre-selected for the user [MDN].
            */
            var SelectElement = (function (_super) {
                __extends(SelectElement, _super);
                //#endregion changeEvent
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new SelectElement'.
                */
                function SelectElement(config) {
                    _super.call(this, 'select', config);
                }
                Object.defineProperty(SelectElement.prototype, "autoFocusProperty", {
                    //#endregion Fields
                    //#region Properties
                    //#region autoFocusProperty
                    /**
                    * This attribute lets you specify that a form control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form element in a document can have the autofocus attribute, which is a Boolean [MDN].
                    */
                    get: function () {
                        if (!this._autoFocusProperty)
                            initializeProperty(this, 'autoFocus', 'autofocus');
                        return this._autoFocusProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SelectElement.prototype, "autoFocus", {
                    //#endregion autoFocusProperty
                    //#region autoFocus
                    /**
                    * This attribute lets you specify that a form control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form element in a document can have the autofocus attribute, which is a Boolean [MDN].
                    */
                    get: function () {
                        return this.autoFocusProperty.value;
                    },
                    set: function (value) {
                        this.autoFocusProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SelectElement.prototype, "disabledProperty", {
                    //#endregion autoFocus
                    //#region disabledProperty
                    /**
                    * This Boolean attribute indicates that the user cannot interact with the control. If this attribute is not specified, the control inherits its setting from the containing element, for example fieldset; if there is no containing element with the disabled attribute set, then the control is enabled [MDN].
                    */
                    get: function () {
                        if (!this._disabledProperty)
                            initializeProperty(this, 'disabled', 'disabled');
                        return this._disabledProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SelectElement.prototype, "disabled", {
                    //#endregion disabledProperty
                    //#region disabled
                    /**
                    * This Boolean attribute indicates that the user cannot interact with the control. If this attribute is not specified, the control inherits its setting from the containing element, for example fieldset; if there is no containing element with the disabled attribute set, then the control is enabled [MDN].
                    */
                    get: function () {
                        return this.disabledProperty.value;
                    },
                    set: function (value) {
                        this.disabledProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SelectElement.prototype, "form", {
                    //#endregion disabled
                    //#region form
                    /**
                    * The form element that the select element is associated with (its "form owner"). If this attribute is specified, its value must be the ID of a form element in the same document. This enables you to place select elements anywhere within a document, not just as descendants of their form elements [MDN].
                    */
                    get: function () {
                        return getElementPropertyValue(this, 'form');
                    },
                    set: function (value) {
                        setElementPropertyValue(this, 'form', value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SelectElement.prototype, "multipleOptionsProperty", {
                    //#endregion form
                    //#region multipleOptionsProperty
                    /**
                    * This Boolean attribute indicates that multiple options can be selected in the list. If it is not specified, then only one option can be selected at a time [MDN].
                    */
                    get: function () {
                        if (!this._multipleOptionsProperty)
                            initializeProperty(this, 'multipleOptions', 'multiple');
                        return this._multipleOptionsProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SelectElement.prototype, "multipleOptions", {
                    //#endregion multipleOptionsProperty
                    //#region multipleOptions
                    /**
                    * This Boolean attribute indicates that multiple options can be selected in the list. If it is not specified, then only one option can be selected at a time [MDN].
                    */
                    get: function () {
                        return this.multipleOptionsProperty.value;
                    },
                    set: function (value) {
                        this.multipleOptionsProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SelectElement.prototype, "nameProperty", {
                    //#endregion multipleOptions
                    //#region nameProperty
                    /**
                    * The name of the control [MDN].
                    */
                    get: function () {
                        if (!this._nameProperty)
                            initializeProperty(this, 'name', 'name');
                        return this._nameProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SelectElement.prototype, "name", {
                    //#endregion nameProperty
                    //#region name
                    /**
                    * The name of the control [MDN].
                    */
                    get: function () {
                        return this.nameProperty.value;
                    },
                    set: function (value) {
                        this.nameProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SelectElement.prototype, "requiredProperty", {
                    //#endregion name
                    //#region requiredProperty
                    /**
                    * A Boolean attribute indicating that an option with a non-empty string value must be selected [MDN].
                    */
                    get: function () {
                        if (!this._requiredProperty)
                            initializeProperty(this, 'required', 'required');
                        return this._requiredProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SelectElement.prototype, "required", {
                    //#endregion requiredProperty
                    //#region required
                    /**
                    * A Boolean attribute indicating that an option with a non-empty string value must be selected [MDN].
                    */
                    get: function () {
                        return this.requiredProperty.value;
                    },
                    set: function (value) {
                        this.requiredProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SelectElement.prototype, "sizeProperty", {
                    //#endregion required
                    //#region sizeProperty
                    /**
                    * If the control is presented as a scrolled list box, this attribute represents the number of rows in the list that should be visible at one time. Browsers are not required to present a select elements as a scrolled list box. The default value is 0 [MDN].
                    */
                    get: function () {
                        if (!this._sizeProperty)
                            initializeProperty(this, 'size', 'size');
                        return this._sizeProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SelectElement.prototype, "size", {
                    //#endregion sizeProperty
                    //#region size
                    /**
                    * If the control is presented as a scrolled list box, this attribute represents the number of rows in the list that should be visible at one time. Browsers are not required to present a select elements as a scrolled list box. The default value is 0 [MDN].
                    */
                    get: function () {
                        return this.sizeProperty.value;
                    },
                    set: function (value) {
                        this.sizeProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SelectElement.prototype, "changeEvent", {
                    //#endregion size
                    //#region changeEvent
                    /**
                    * The changeEvent event is executed when an element loses focus and its value changed since gaining focus [MDN].
                    * Specifications: DOM L2, HTML5
                    * DOM Event Name: change
                    */
                    get: function () {
                        if (!this._changeEvent)
                            this._changeEvent = new Html.HtmlElementEvent('change', 'Event', this);
                        return this._changeEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                SelectElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'autoFocus', true);
                    setPropertyFromConfig(this, config, 'disabled', true);
                    setElementPropertyFromConfig(this, config, 'form');
                    setPropertyFromConfig(this, config, 'multipleOptions', true);
                    setPropertyFromConfig(this, config, 'name', true);
                    setPropertyFromConfig(this, config, 'required', true);
                    setPropertyFromConfig(this, config, 'size', true);
                    if (config.changeHandler)
                        this.changeEvent.subscribe(config.changeHandler);
                };
                return SelectElement;
            })(HtmlElementContainer);
            Elements.SelectElement = SelectElement;
            //#endregion SelectElement
            //#region SmallElement
            /**
            * The HTML Small Element (<small>) makes the text font size one size smaller (for example, from large to medium, or from small to x-small) down to the browser's minimum font size.  In HTML5, this element is repurposed to represent side-comments and small print, including copyright and legal text, independent of its styled presentation [MDN].
            */
            var SmallElement = (function (_super) {
                __extends(SmallElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new SmallElement'.
                */
                function SmallElement(config) {
                    _super.call(this, 'small', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                SmallElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return SmallElement;
            })(HtmlElementContainer);
            Elements.SmallElement = SmallElement;
            //#endregion SmallElement
            //#region SourceElement
            /**
            * The source element is used to specify multiple media resources for audio and video elements in HTML5. It is an empty element. It is commonly used to serve the same media in multiple formats supported by different browsers [MDN].
            */
            var SourceElement = (function (_super) {
                __extends(SourceElement, _super);
                //#endregion type
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new SourceElement'.
                */
                function SourceElement(config) {
                    _super.call(this, 'source', config);
                }
                Object.defineProperty(SourceElement.prototype, "sourceProperty", {
                    //#endregion Fields
                    //#region Properties
                    //#region sourceProperty
                    /**
                    * Required, address of the media resource [MDN].
                    */
                    get: function () {
                        if (!this._sourceProperty)
                            initializeProperty(this, 'source', 'src');
                        return this._sourceProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SourceElement.prototype, "source", {
                    //#endregion sourceProperty
                    //#region source
                    /**
                    * Required, address of the media resource [MDN].
                    */
                    get: function () {
                        return this.sourceProperty.value;
                    },
                    set: function (value) {
                        this.sourceProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SourceElement.prototype, "typeProperty", {
                    //#endregion source
                    //#region typeProperty
                    /**
                    * The MIME-type of the resource, optionally with a codecs parameter. See RFC 4281 for information about how to specify codecs [MDN].
                    */
                    get: function () {
                        if (!this._typeProperty)
                            initializeProperty(this, 'type', 'type');
                        return this._typeProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SourceElement.prototype, "type", {
                    //#endregion typeProperty
                    //#region type
                    /**
                    * The MIME-type of the resource, optionally with a codecs parameter. See RFC 4281 for information about how to specify codecs [MDN].
                    */
                    get: function () {
                        return this.typeProperty.value;
                    },
                    set: function (value) {
                        this.typeProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                SourceElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'source', true);
                    setPropertyFromConfig(this, config, 'type', true);
                };
                return SourceElement;
            })(HtmlElementContainer);
            Elements.SourceElement = SourceElement;
            //#endregion SourceElement
            //#region SpanElement
            /**
            * The HTML <span> element is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element is appropriate. <span> is very much like a <div> element, but <div> is a block-level element whereas a <span> is an inline element [MDN].
            */
            var SpanElement = (function (_super) {
                __extends(SpanElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new SpanElement'.
                */
                function SpanElement(config) {
                    _super.call(this, 'span', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                SpanElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return SpanElement;
            })(HtmlElementContainer);
            Elements.SpanElement = SpanElement;
            //#endregion SpanElement
            //#region StrikethroughElement
            /**
            * The HTML Strikethrough Element (<s>) renders text with a strikethrough, or a line through it. Use the <s> element to represent things that are no longer relevant or no longer accurate. However, <s> is not appropriate when indicating document edits; for that, use the <del> and <ins> elements, as appropriate [MDN].
            */
            var StrikethroughElement = (function (_super) {
                __extends(StrikethroughElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new StrikethroughElement'.
                */
                function StrikethroughElement(config) {
                    _super.call(this, 's', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                StrikethroughElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return StrikethroughElement;
            })(HtmlElementContainer);
            Elements.StrikethroughElement = StrikethroughElement;
            //#endregion StrikethroughElement
            //#region StrongElement
            /**
            * The HTML Strong Element (<strong>) gives text strong importance, and is typically displayed in bold [MDN].
            */
            var StrongElement = (function (_super) {
                __extends(StrongElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new StrongElement'.
                */
                function StrongElement(config) {
                    _super.call(this, 'strong', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                StrongElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return StrongElement;
            })(HtmlElementContainer);
            Elements.StrongElement = StrongElement;
            //#endregion StrongElement
            //#region StyleElement
            /**
            * The HTML <style> element contains style information for a document, or a part of document. The specific style information is contained inside of this element, usually in the CSS [MDN].
            */
            var StyleElement = (function (_super) {
                __extends(StyleElement, _super);
                //#endregion errorEvent
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new StyleElement'.
                */
                function StyleElement(config) {
                    _super.call(this, 'style', config);
                }
                Object.defineProperty(StyleElement.prototype, "typeProperty", {
                    //#endregion Fields
                    //#region Properties
                    //#region typeProperty
                    /**
                    * This attribute defines the styling language as a MIME type (charset should not be specified). 'text/css' is assumed if this attribute is absent [MDN].
                    */
                    get: function () {
                        if (!this._typeProperty)
                            initializeProperty(this, 'type', 'type');
                        return this._typeProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(StyleElement.prototype, "type", {
                    //#endregion typeProperty
                    //#region type
                    /**
                    * This attribute defines the styling language as a MIME type (charset should not be specified). 'text/css' is assumed if this attribute is absent [MDN].
                    */
                    get: function () {
                        return this.typeProperty.value;
                    },
                    set: function (value) {
                        this.typeProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(StyleElement.prototype, "mediaProperty", {
                    //#endregion type
                    //#region mediaProperty
                    /**
                    * Which media should this style apply to. Should be a media query, see http://dev.w3.org/csswg/css3-mediaqueries [MDN].
                    */
                    get: function () {
                        if (!this._mediaProperty)
                            initializeProperty(this, 'media', 'media');
                        return this._mediaProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(StyleElement.prototype, "media", {
                    //#endregion mediaProperty
                    //#region media
                    /**
                    * Which media should this style apply to. Should be a media query, see http://dev.w3.org/csswg/css3-mediaqueries [MDN].
                    */
                    get: function () {
                        return this.mediaProperty.value;
                    },
                    set: function (value) {
                        this.mediaProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(StyleElement.prototype, "disabledProperty", {
                    //#endregion media
                    //#region disabledProperty
                    /**
                    * If set, the style rules declared in this element are disabled in the declaring document [MDN].
                    */
                    get: function () {
                        if (!this._disabledProperty)
                            initializeProperty(this, 'disabled', 'disabled');
                        return this._disabledProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(StyleElement.prototype, "disabled", {
                    //#endregion disabledProperty
                    //#region disabled
                    /**
                    * If set, the style rules declared in this element are disabled in the declaring document [MDN].
                    */
                    get: function () {
                        return this.disabledProperty.value;
                    },
                    set: function (value) {
                        this.disabledProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(StyleElement.prototype, "errorEvent", {
                    //#endregion disabled
                    //#region errorEvent
                    /**
                    * The errorEvent event is executed when a resource failed to load [MDN].
                    * Specification: DOM L3
                    * DOM Event Name: error
                    */
                    get: function () {
                        if (!this._errorEvent)
                            this._errorEvent = new Html.HtmlElementEvent('error', 'UIEvent', this);
                        return this._errorEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                StyleElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'type', true);
                    setPropertyFromConfig(this, config, 'media', true);
                    setPropertyFromConfig(this, config, 'disabled', false);
                    if (config.errorHandler)
                        this.errorEvent.subscribe(config.errorHandler);
                };
                return StyleElement;
            })(HtmlElementContainer);
            Elements.StyleElement = StyleElement;
            //#endregion StyleElement
            //#region SubscriptElement
            /**
            * The HTML Subscript Element (<sub>) defines a span of text that should be displayed, for typographic reasons, lower, and often smaller, than the main span of text [MDN].
            */
            var SubscriptElement = (function (_super) {
                __extends(SubscriptElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new SubscriptElement'.
                */
                function SubscriptElement(config) {
                    _super.call(this, 'sub', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                SubscriptElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return SubscriptElement;
            })(HtmlElementContainer);
            Elements.SubscriptElement = SubscriptElement;
            //#endregion SubscriptElement
            //#region SummaryElement
            /**
            * The HTML summary element (<summary>) is used as a summary, caption or legend for the content of a <details> element [MDN].
            */
            var SummaryElement = (function (_super) {
                __extends(SummaryElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new SummaryElement'.
                */
                function SummaryElement(config) {
                    _super.call(this, 'summary', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                SummaryElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return SummaryElement;
            })(HtmlElementContainer);
            Elements.SummaryElement = SummaryElement;
            //#endregion SummaryElement
            //#region SuperscriptElement
            /**
            * The HTML Superscript Element (<sup>) defines a span of text that should be displayed, for typographic reasons, higher, and often smaller, than the main span of text [MDN].
            */
            var SuperscriptElement = (function (_super) {
                __extends(SuperscriptElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new SuperscriptElement'.
                */
                function SuperscriptElement(config) {
                    _super.call(this, 'sup', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                SuperscriptElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return SuperscriptElement;
            })(HtmlElementContainer);
            Elements.SuperscriptElement = SuperscriptElement;
            //#endregion SuperscriptElement
            //#region TableElement
            /**
            * The HTML Table Element (<table>) represents data in two dimensions or more [MDN].
            */
            var TableElement = (function (_super) {
                __extends(TableElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new TableElement'.
                */
                function TableElement(config) {
                    _super.call(this, 'table', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                TableElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return TableElement;
            })(HtmlElementContainer);
            Elements.TableElement = TableElement;
            //#endregion TableElement
            //#region TableCaptionElement
            /**
            * The HTML <caption> Element (or HTML Table Caption Element) represents the title of a table. Though it is always the first descendant of a <table>, its styling, using CSS, may place it elsewhere, relative to the table [MDN].
            */
            var TableCaptionElement = (function (_super) {
                __extends(TableCaptionElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new TableCaptionElement'.
                */
                function TableCaptionElement(config) {
                    _super.call(this, 'caption', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                TableCaptionElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return TableCaptionElement;
            })(HtmlElementContainer);
            Elements.TableCaptionElement = TableCaptionElement;
            //#endregion TableCaptionElement
            //#region TableColumnElement
            /**
            * The HTML <col> Element (or HTML Table Column Element) defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a <colgroup> element [MDN].
            */
            var TableColumnElement = (function (_super) {
                __extends(TableColumnElement, _super);
                //#endregion span
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new TableColumnElement'.
                */
                function TableColumnElement(config) {
                    _super.call(this, 'col', config);
                }
                Object.defineProperty(TableColumnElement.prototype, "spanProperty", {
                    //#endregion Fields
                    //#region Properties
                    //#region spanProperty
                    /**
                    * This attribute contains a positive integer indicating the number of consecutive columns the <col> element spans. If not present, its default value is 1 [MDN].
                    */
                    get: function () {
                        if (!this._spanProperty)
                            initializeProperty(this, 'span', 'span');
                        return this._spanProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TableColumnElement.prototype, "span", {
                    //#endregion spanProperty
                    //#region span
                    /**
                    * This attribute contains a positive integer indicating the number of consecutive columns the <col> element spans. If not present, its default value is 1 [MDN].
                    */
                    get: function () {
                        return this.spanProperty.value;
                    },
                    set: function (value) {
                        this.spanProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                TableColumnElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'span', true);
                };
                return TableColumnElement;
            })(HtmlElement);
            Elements.TableColumnElement = TableColumnElement;
            //#endregion TableColumnElement
            //#region TableColumnGroupElement
            /**
            * The HTML <colgroup> Element (or HTML Table Column Group Element) defines a group of columns within a table [MDN].
            */
            var TableColumnGroupElement = (function (_super) {
                __extends(TableColumnGroupElement, _super);
                //#endregion width
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new TableColumnGroupElement'.
                */
                function TableColumnGroupElement(config) {
                    _super.call(this, 'colgroup', config);
                }
                Object.defineProperty(TableColumnGroupElement.prototype, "spanProperty", {
                    //#endregion Fields
                    //#region Properties
                    //#region spanProperty
                    /**
                    * This attribute contains a positive integer indicating the number of consecutive columns the <colgroup> element spans. If not present, its default value is 1.
                    * Note: This attribute apply on the attributes of the column group, it has no effect on the CSS styling rules associated to it or, even more, to the cells of the columns members of the group.  The span attribute may not be present if there are one or more <col> elements within the <colgroup> [MDN].
                    */
                    get: function () {
                        if (!this._spanProperty)
                            initializeProperty(this, 'span', 'span');
                        return this._spanProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TableColumnGroupElement.prototype, "span", {
                    //#endregion spanProperty
                    //#region span
                    /**
                    * This attribute contains a positive integer indicating the number of consecutive columns the <colgroup> element spans. If not present, its default value is 1.
                    * Note: This attribute apply on the attributes of the column group, it has no effect on the CSS styling rules associated to it or, even more, to the cells of the columns members of the group.  The span attribute may not be present if there are one or more <col> elements within the <colgroup> [MDN].
                    */
                    get: function () {
                        return this.spanProperty.value;
                    },
                    set: function (value) {
                        this.spanProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TableColumnGroupElement.prototype, "widthProperty", {
                    //#endregion span
                    //#region widthProperty
                    /**
                    * This attribute specifies a default width for each column in the current column group. In addition to the standard pixel and percentage values, this attribute might take the special form 0*, which means that the width of each column in the group should be the minimum width necessary to hold the column's contents. Relative widths such as 0.5* also can be used [MDN].
                    */
                    get: function () {
                        if (!this._widthProperty)
                            initializeProperty(this, 'width', 'width');
                        return this._widthProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TableColumnGroupElement.prototype, "width", {
                    //#endregion widthProperty
                    //#region width
                    /**
                    * This attribute specifies a default width for each column in the current column group. In addition to the standard pixel and percentage values, this attribute might take the special form 0*, which means that the width of each column in the group should be the minimum width necessary to hold the column's contents. Relative widths such as 0.5* also can be used [MDN].
                    */
                    get: function () {
                        return this.widthProperty.value;
                    },
                    set: function (value) {
                        this.widthProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                TableColumnGroupElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'span', true);
                    setPropertyFromConfig(this, config, 'width', true);
                };
                return TableColumnGroupElement;
            })(HtmlElement);
            Elements.TableColumnGroupElement = TableColumnGroupElement;
            //#endregion TableColumnGroupElement
            //#region TableDataCellElement
            /**
            * The Table cell HTML element (<td>) defines a cell of a table that contains data. It participates in the table model [MDN].
            */
            var TableDataCellElement = (function (_super) {
                __extends(TableDataCellElement, _super);
                //#endregion scope
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new TableDataCellElement'.
                */
                function TableDataCellElement(config) {
                    _super.call(this, 'td', config);
                }
                Object.defineProperty(TableDataCellElement.prototype, "columnSpanProperty", {
                    //#endregion Fields
                    //#region Properties
                    //#region columnSpanProperty
                    /**
                    * This attribute contains a non-negative integer value that indicates for how many columns the cell extends. Its default value is 1; if its value is set to 0, it extends until the end of the <colgroup>, even if implicitly defined, that the cell belongs to. Values higher than 1000 will be considered as incorrect and will be set to the default value (1).
                    * Note: In HTML5 this attribute only accepts values greater than zero since it must not be used to overlap cells. Besides, Firefox is the only browser to support the 0 value as defined in the HTML 4.01 specification [MDN].
                    */
                    get: function () {
                        if (!this._columnSpanProperty)
                            initializeProperty(this, 'columnSpan', 'colSpan');
                        return this._columnSpanProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TableDataCellElement.prototype, "columnSpan", {
                    //#endregion columnSpanProperty
                    //#region columnSpan
                    /**
                    * This attribute contains a non-negative integer value that indicates for how many columns the cell extends. Its default value is 1; if its value is set to 0, it extends until the end of the <colgroup>, even if implicitly defined, that the cell belongs to. Values higher than 1000 will be considered as incorrect and will be set to the default value (1).
                    * Note: In HTML5 this attribute only accepts values greater than zero since it must not be used to overlap cells. Besides, Firefox is the only browser to support the 0 value as defined in the HTML 4.01 specification [MDN].
                    */
                    get: function () {
                        return this.columnSpanProperty.value;
                    },
                    set: function (value) {
                        this.columnSpanProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TableDataCellElement.prototype, "headersProperty", {
                    //#endregion columnSpan
                    //#region headersProperty
                    /**
                    * This attribute contains a list of space-separated strings, each corresponding to the id attribute of the <th> elements that apply to this element [MDN].
                    */
                    get: function () {
                        if (!this._headersProperty)
                            initializeProperty(this, 'headers', 'headers');
                        return this._headersProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TableDataCellElement.prototype, "headers", {
                    //#endregion headersProperty
                    //#region headers
                    /**
                    * This attribute contains a list of space-separated strings, each corresponding to the id attribute of the <th> elements that apply to this element [MDN].
                    */
                    get: function () {
                        return this.headersProperty.value;
                    },
                    set: function (value) {
                        this.headersProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TableDataCellElement.prototype, "rowSpanProperty", {
                    //#endregion headers
                    //#region rowSpanProperty
                    /**
                    * This attribute contains a non-negative integer value that indicates for how many rows the cell extends. Its default value is 1; if its value is set to 0, it extends until the end of the table section (<thead>, <tbody>, <tfoot>, even if implicitly defined, that the cell belongs to. Values higher than 65534 are clipped down to 65534 [MDN].
                    */
                    get: function () {
                        if (!this._rowSpanProperty)
                            initializeProperty(this, 'rowSpan', 'rowSpan');
                        return this._rowSpanProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TableDataCellElement.prototype, "rowSpan", {
                    //#endregion rowSpanProperty
                    //#region rowSpan
                    /**
                    * This attribute contains a non-negative integer value that indicates for how many rows the cell extends. Its default value is 1; if its value is set to 0, it extends until the end of the table section (<thead>, <tbody>, <tfoot>, even if implicitly defined, that the cell belongs to. Values higher than 65534 are clipped down to 65534 [MDN].
                    */
                    get: function () {
                        return this.rowSpanProperty.value;
                    },
                    set: function (value) {
                        this.rowSpanProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TableDataCellElement.prototype, "scopeProperty", {
                    //#endregion rowSpan
                    //#region scopeProperty
                    /**
                    *  [MDN].
                    */
                    get: function () {
                        if (!this._scopeProperty)
                            initializeProperty(this, 'scope', 'scope');
                        return this._scopeProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TableDataCellElement.prototype, "scope", {
                    //#endregion scopeProperty
                    //#region scope
                    /**
                    *  [MDN].
                    */
                    get: function () {
                        return this.scopeProperty.value;
                    },
                    set: function (value) {
                        this.scopeProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                TableDataCellElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'columnSpan', true);
                    setPropertyFromConfig(this, config, 'headers', true);
                    setPropertyFromConfig(this, config, 'rowSpan', true);
                    setPropertyFromConfig(this, config, 'scope', true);
                };
                return TableDataCellElement;
            })(HtmlElementContainer);
            Elements.TableDataCellElement = TableDataCellElement;
            //#endregion TableDataCellElement
            //#region TableHeaderCellElement
            /**
            * The HTML Table Header Cell Element (<th>) defines a cell that is a header for a group of cells of a table. The group of cells that the header refers to is defined by the scope and headers attribute [MDN].
            */
            var TableHeaderCellElement = (function (_super) {
                __extends(TableHeaderCellElement, _super);
                //#endregion rowSpan
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new TableHeaderCellElement'.
                */
                function TableHeaderCellElement(config) {
                    _super.call(this, 'th', config);
                }
                Object.defineProperty(TableHeaderCellElement.prototype, "columnSpanProperty", {
                    //#endregion Fields
                    //#region Properties
                    //#region columnSpanProperty
                    /**
                    * This attribute contains a non-negative integer value that indicates on how many columns does the cell extend. Its default value is 1; if its value is set to 0, it does extend until the end of the <colgroup>, eventually implicitly defined, the cell belongs to. Values higher than 1000 are clipped down to 1000 [MDN].
                    */
                    get: function () {
                        if (!this._columnSpanProperty)
                            initializeProperty(this, 'columnSpan', 'colSpan');
                        return this._columnSpanProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TableHeaderCellElement.prototype, "columnSpan", {
                    //#endregion columnSpanProperty
                    //#region columnSpan
                    /**
                    * This attribute contains a non-negative integer value that indicates on how many columns does the cell extend. Its default value is 1; if its value is set to 0, it does extend until the end of the <colgroup>, eventually implicitly defined, the cell belongs to. Values higher than 1000 are clipped down to 1000 [MDN].
                    */
                    get: function () {
                        return this.columnSpanProperty.value;
                    },
                    set: function (value) {
                        this.columnSpanProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TableHeaderCellElement.prototype, "headersProperty", {
                    //#endregion columnSpan
                    //#region headersProperty
                    /**
                    * This attributes a list of space-separated strings, each corresponding to the id attribute of the <th> elements that applies to this element [MDN].
                    */
                    get: function () {
                        if (!this._headersProperty)
                            initializeProperty(this, 'headers', 'headers');
                        return this._headersProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TableHeaderCellElement.prototype, "headers", {
                    //#endregion headersProperty
                    //#region headers
                    /**
                    * This attributes a list of space-separated strings, each corresponding to the id attribute of the <th> elements that applies to this element [MDN].
                    */
                    get: function () {
                        return this.headersProperty.value;
                    },
                    set: function (value) {
                        this.headersProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TableHeaderCellElement.prototype, "rowSpanProperty", {
                    //#endregion headers
                    //#region rowSpanProperty
                    /**
                    * This attribute contains a non-negative integer value that indicates on how many rows does the cell extend. Its default value is 1; if its value is set to 0, it does extend until the end of the table section (<thead>, <tbody>, <tfoot>, eventually implicitly defined) the cell belongs to. Values higher than 65534 are clipped down to 65534 [MDN].
                    */
                    get: function () {
                        if (!this._rowSpanProperty)
                            initializeProperty(this, 'rowSpan', 'rowSpan');
                        return this._rowSpanProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TableHeaderCellElement.prototype, "rowSpan", {
                    //#endregion rowSpanProperty
                    //#region rowSpan
                    /**
                    * This attribute contains a non-negative integer value that indicates on how many rows does the cell extend. Its default value is 1; if its value is set to 0, it does extend until the end of the table section (<thead>, <tbody>, <tfoot>, eventually implicitly defined) the cell belongs to. Values higher than 65534 are clipped down to 65534 [MDN].
                    */
                    get: function () {
                        return this.rowSpanProperty.value;
                    },
                    set: function (value) {
                        this.rowSpanProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                TableHeaderCellElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'columnSpan', true);
                    setPropertyFromConfig(this, config, 'headers', true);
                    setPropertyFromConfig(this, config, 'rowSpan', true);
                };
                return TableHeaderCellElement;
            })(HtmlElementContainer);
            Elements.TableHeaderCellElement = TableHeaderCellElement;
            //#endregion TableHeaderCellElement
            //#region TableRowElement
            /**
            * The HTML Table Row Element (<tr>) defines a row of cells in a table. Those can be a mix of <td> and <th> elements [MDN].
            */
            var TableRowElement = (function (_super) {
                __extends(TableRowElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new TableRowElement'.
                */
                function TableRowElement(config) {
                    _super.call(this, 'tr', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                TableRowElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return TableRowElement;
            })(HtmlElementContainer);
            Elements.TableRowElement = TableRowElement;
            //#endregion TableRowElement
            //#region TextAreaElement
            /**
            * The HTML <textarea> element represents a multi-line plain-text editing control [MDN].
            */
            var TextAreaElement = (function (_super) {
                __extends(TextAreaElement, _super);
                //#endregion inputEvent
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new TextAreaElement'.
                */
                function TextAreaElement(config) {
                    _super.call(this, 'textarea', config);
                }
                Object.defineProperty(TextAreaElement.prototype, "autoFocusProperty", {
                    //#endregion Fields
                    //#region Properties
                    //#region autoFocusProperty
                    /**
                    * This Boolean attribute lets you specify that a form control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form-associated element in a document can have this attribute specified [MDN].
                    */
                    get: function () {
                        if (!this._autoFocusProperty)
                            initializeProperty(this, 'autoFocus', 'autofocus');
                        return this._autoFocusProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextAreaElement.prototype, "autoFocus", {
                    //#endregion autoFocusProperty
                    //#region autoFocus
                    /**
                    * This Boolean attribute lets you specify that a form control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form-associated element in a document can have this attribute specified [MDN].
                    */
                    get: function () {
                        return this.autoFocusProperty.value;
                    },
                    set: function (value) {
                        this.autoFocusProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextAreaElement.prototype, "columnsProperty", {
                    //#endregion autoFocus
                    //#region columnsProperty
                    /**
                    * The visible width of the text control, in average character widths. If it is specified, it must be a positive integer. If it is not specified, the default value is 20 (HTML5) [MDN].
                    */
                    get: function () {
                        if (!this._columnsProperty)
                            initializeProperty(this, 'columns', 'cols');
                        return this._columnsProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextAreaElement.prototype, "columns", {
                    //#endregion columnsProperty
                    //#region columns
                    /**
                    * The visible width of the text control, in average character widths. If it is specified, it must be a positive integer. If it is not specified, the default value is 20 (HTML5) [MDN].
                    */
                    get: function () {
                        return this.columnsProperty.value;
                    },
                    set: function (value) {
                        this.columnsProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextAreaElement.prototype, "disabledProperty", {
                    //#endregion columns
                    //#region disabledProperty
                    /**
                    * This Boolean attribute indicates that the user cannot interact with the control. (If this attribute is not specified, the control inherits its setting from the containing element, for example <fieldset>; if there is no containing element with the disabled attribute set, then the control is enabled.) [MDN].
                    */
                    get: function () {
                        if (!this._disabledProperty)
                            initializeProperty(this, 'disabled', 'disabled');
                        return this._disabledProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextAreaElement.prototype, "disabled", {
                    //#endregion disabledProperty
                    //#region disabled
                    /**
                    * This Boolean attribute indicates that the user cannot interact with the control. (If this attribute is not specified, the control inherits its setting from the containing element, for example <fieldset>; if there is no containing element with the disabled attribute set, then the control is enabled.) [MDN].
                    */
                    get: function () {
                        return this.disabledProperty.value;
                    },
                    set: function (value) {
                        this.disabledProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextAreaElement.prototype, "form", {
                    //#endregion disabled
                    //#region form
                    /**
                    * The form element that the textarea element is associated with (its "form owner"). The value of the attribute must be an ID of a form element in the same document. If this attribute is not specified, the textarea element must be a descendant of a form element. This attribute enables you to place textarea elements anywhere within a document, not just as descendants of their form elements [MDN].
                    */
                    get: function () {
                        return getElementPropertyValue(this, 'form');
                    },
                    set: function (value) {
                        setElementPropertyValue(this, 'form', value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextAreaElement.prototype, "maxLengthProperty", {
                    //#endregion form
                    //#region maxLengthProperty
                    /**
                    * The maximum number of characters (Unicode code points) that the user can enter. If it is not specified, the user can enter an unlimited number of characters [MDN].
                    */
                    get: function () {
                        if (!this._maxLengthProperty)
                            initializeProperty(this, 'maxLength', 'maxLength');
                        return this._maxLengthProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextAreaElement.prototype, "maxLength", {
                    //#endregion maxLengthProperty
                    //#region maxLength
                    /**
                    * The maximum number of characters (Unicode code points) that the user can enter. If it is not specified, the user can enter an unlimited number of characters [MDN].
                    */
                    get: function () {
                        return this.maxLengthProperty.value;
                    },
                    set: function (value) {
                        this.maxLengthProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextAreaElement.prototype, "nameProperty", {
                    //#endregion maxLength
                    //#region nameProperty
                    /**
                    * The name of the control [MDN].
                    */
                    get: function () {
                        if (!this._nameProperty)
                            initializeProperty(this, 'name', 'name');
                        return this._nameProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextAreaElement.prototype, "name", {
                    //#endregion nameProperty
                    //#region name
                    /**
                    * The name of the control [MDN].
                    */
                    get: function () {
                        return this.nameProperty.value;
                    },
                    set: function (value) {
                        this.nameProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextAreaElement.prototype, "placeHolderProperty", {
                    //#endregion name
                    //#region placeHolderProperty
                    /**
                    * A hint to the user of what can be entered in the control. The placeholder text must not contain carriage returns or line-feeds [MDN].
                    */
                    get: function () {
                        if (!this._placeHolderProperty)
                            initializeProperty(this, 'placeHolder', 'placeholder');
                        return this._placeHolderProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextAreaElement.prototype, "placeHolder", {
                    //#endregion placeHolderProperty
                    //#region placeHolder
                    /**
                    * A hint to the user of what can be entered in the control. The placeholder text must not contain carriage returns or line-feeds [MDN].
                    */
                    get: function () {
                        return this.placeHolderProperty.value;
                    },
                    set: function (value) {
                        this.placeHolderProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextAreaElement.prototype, "readOnlyProperty", {
                    //#endregion placeHolder
                    //#region readOnlyProperty
                    /**
                    * This Boolean attribute indicates that the user cannot modify the value of the control. Unlike the disabled attribute, the readonly attribute does not prevent the user from clicking or selecting in the control. The value of a read-only control is still submitted with the form [MDN].
                    */
                    get: function () {
                        if (!this._readOnlyProperty)
                            initializeProperty(this, 'readOnly', 'readOnly');
                        return this._readOnlyProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextAreaElement.prototype, "readOnly", {
                    //#endregion readOnlyProperty
                    //#region readOnly
                    /**
                    * This Boolean attribute indicates that the user cannot modify the value of the control. Unlike the disabled attribute, the readonly attribute does not prevent the user from clicking or selecting in the control. The value of a read-only control is still submitted with the form [MDN].
                    */
                    get: function () {
                        return this.readOnlyProperty.value;
                    },
                    set: function (value) {
                        this.readOnlyProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextAreaElement.prototype, "requiredProperty", {
                    //#endregion readOnly
                    //#region requiredProperty
                    /**
                    * This attribute specifies that the user must fill in a value before submitting a form [MDN].
                    */
                    get: function () {
                        if (!this._requiredProperty)
                            initializeProperty(this, 'required', 'required');
                        return this._requiredProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextAreaElement.prototype, "required", {
                    //#endregion requiredProperty
                    //#region required
                    /**
                    * This attribute specifies that the user must fill in a value before submitting a form [MDN].
                    */
                    get: function () {
                        return this.requiredProperty.value;
                    },
                    set: function (value) {
                        this.requiredProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextAreaElement.prototype, "rowsProperty", {
                    //#endregion required
                    //#region rowsProperty
                    /**
                    * The number of visible text lines for the control [MDN].
                    */
                    get: function () {
                        if (!this._rowsProperty)
                            initializeProperty(this, 'rows', 'rows');
                        return this._rowsProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextAreaElement.prototype, "rows", {
                    //#endregion rowsProperty
                    //#region rows
                    /**
                    * The number of visible text lines for the control [MDN].
                    */
                    get: function () {
                        return this.rowsProperty.value;
                    },
                    set: function (value) {
                        this.rowsProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextAreaElement.prototype, "selectionEndProperty", {
                    //#endregion rows
                    //#region selectionEndProperty
                    /**
                    * The index to the last character in the current selection [MDN].
                    */
                    get: function () {
                        if (!this._selectionEndProperty)
                            initializeProperty(this, 'selectionEnd', 'selectionEnd');
                        return this._selectionEndProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextAreaElement.prototype, "selectionEnd", {
                    //#endregion selectionEndProperty
                    //#region selectionEnd
                    /**
                    * The index to the last character in the current selection [MDN].
                    */
                    get: function () {
                        return this.selectionEndProperty.value;
                    },
                    set: function (value) {
                        this.selectionEndProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextAreaElement.prototype, "selectionStartProperty", {
                    //#endregion selectionEnd
                    //#region selectionStartProperty
                    /**
                    * The index to the first character in the current selection [MDN].
                    */
                    get: function () {
                        if (!this._selectionStartProperty)
                            initializeProperty(this, 'selectionStart', 'selectionStart');
                        return this._selectionStartProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextAreaElement.prototype, "selectionStart", {
                    //#endregion selectionStartProperty
                    //#region selectionStart
                    /**
                    * The index to the first character in the current selection [MDN].
                    */
                    get: function () {
                        return this.selectionStartProperty.value;
                    },
                    set: function (value) {
                        this.selectionStartProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextAreaElement.prototype, "wrapProperty", {
                    //#endregion selectionStart
                    //#region wrapProperty
                    /**
                    * Html.TextAreaWrap enumerates the values of this property.
                    * Indicates how the control wraps text. Possible values are:  hard: The browser automatically inserts line breaks (CR+LF) so that each line has no more than the width of the control; the cols attribute must be specified. soft: The browser ensures that all line breaks in the value consist of a CR+LF pair, but does not insert any additional line breaks. If this attribute is not specified, soft is its default value [MDN].
                    */
                    get: function () {
                        if (!this._wrapProperty)
                            initializeProperty(this, 'wrap', 'wrap');
                        return this._wrapProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextAreaElement.prototype, "wrap", {
                    //#endregion wrapProperty
                    //#region wrap
                    /**
                    * Html.TextAreaWrap enumerates the values of this property.
                    * Indicates how the control wraps text. Possible values are:  hard: The browser automatically inserts line breaks (CR+LF) so that each line has no more than the width of the control; the cols attribute must be specified. soft: The browser ensures that all line breaks in the value consist of a CR+LF pair, but does not insert any additional line breaks. If this attribute is not specified, soft is its default value [MDN].
                    */
                    get: function () {
                        return this.wrapProperty.value;
                    },
                    set: function (value) {
                        this.wrapProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextAreaElement.prototype, "changeEvent", {
                    //#endregion wrap
                    //#region changeEvent
                    /**
                    * The changeEvent event is executed when an element loses focus and its value changed since gaining focus [MDN].
                    * Specifications: DOM L2, HTML5
                    * DOM Event Name: change
                    */
                    get: function () {
                        if (!this._changeEvent)
                            this._changeEvent = new Html.HtmlElementEvent('change', 'Event', this);
                        return this._changeEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextAreaElement.prototype, "inputEvent", {
                    //#endregion changeEvent
                    //#region inputEvent
                    /**
                    * The inputEvent event is executed when the value of an element changes or the content of an element with the attribute contenteditable is modified [MDN].
                    * Specification: HTML5
                    * DOM Event Name: input
                    */
                    get: function () {
                        if (!this._inputEvent)
                            this._inputEvent = new Html.HtmlElementEvent('input', 'Event', this);
                        return this._inputEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                TextAreaElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'autoFocus', true);
                    setPropertyFromConfig(this, config, 'columns', true);
                    setPropertyFromConfig(this, config, 'disabled', true);
                    setElementPropertyFromConfig(this, config, 'form');
                    setPropertyFromConfig(this, config, 'maxLength', true);
                    setPropertyFromConfig(this, config, 'name', true);
                    setPropertyFromConfig(this, config, 'placeHolder', true);
                    setPropertyFromConfig(this, config, 'readOnly', true);
                    setPropertyFromConfig(this, config, 'required', true);
                    setPropertyFromConfig(this, config, 'rows', true);
                    setPropertyFromConfig(this, config, 'selectionEnd', false);
                    setPropertyFromConfig(this, config, 'selectionStart', false);
                    setPropertyFromConfig(this, config, 'wrap', true);
                    if (config.changeHandler)
                        this.changeEvent.subscribe(config.changeHandler);
                    if (config.inputHandler)
                        this.inputEvent.subscribe(config.inputHandler);
                };
                return TextAreaElement;
            })(HtmlElementContainer);
            Elements.TextAreaElement = TextAreaElement;
            //#endregion TextAreaElement
            //#region TitleElement
            /**
            * The HTML Title Element (<title>) defines the title of the document, shown in a browser's title bar or on the page's tab. It can only contain text and any contained tags are not interpreted [MDN].
            */
            var TitleElement = (function (_super) {
                __extends(TitleElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new TitleElement'.
                */
                function TitleElement(config) {
                    _super.call(this, 'title', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                TitleElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return TitleElement;
            })(HtmlElementContainer);
            Elements.TitleElement = TitleElement;
            //#endregion TitleElement
            //#region TrackElement
            /**
            * The track element is used as a child of the media elementsâ€”<audio> and <video>â€”and does not represent anything on its own. It lets you specify timed text tracks (or time-based data) [MDN].
            */
            var TrackElement = (function (_super) {
                __extends(TrackElement, _super);
                //#endregion sourceLanguage
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new TrackElement'.
                */
                function TrackElement(config) {
                    _super.call(this, 'track', config);
                }
                Object.defineProperty(TrackElement.prototype, "defaultProperty", {
                    //#endregion Fields
                    //#region Properties
                    //#region defaultProperty
                    /**
                    * This attribute indicates that the track should be enabled unless the user's preferences indicate that another track is more appropriate. This may only be used on one track element per media element [MDN].
                    */
                    get: function () {
                        if (!this._defaultProperty)
                            initializeProperty(this, 'default', 'default');
                        return this._defaultProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TrackElement.prototype, "default", {
                    //#endregion defaultProperty
                    //#region default
                    /**
                    * This attribute indicates that the track should be enabled unless the user's preferences indicate that another track is more appropriate. This may only be used on one track element per media element [MDN].
                    */
                    get: function () {
                        return this.defaultProperty.value;
                    },
                    set: function (value) {
                        this.defaultProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TrackElement.prototype, "kindProperty", {
                    //#endregion default
                    //#region kindProperty
                    /**
                    * Html.TrackKind enumerates the values of this property.
                    * The following keywords are allowed:  subtitles, captions, descriptions, chapters, metadata. If omitted the default kind is subtitles [MDN].
                    */
                    get: function () {
                        if (!this._kindProperty)
                            initializeProperty(this, 'kind', 'kind');
                        return this._kindProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TrackElement.prototype, "kind", {
                    //#endregion kindProperty
                    //#region kind
                    /**
                    * Html.TrackKind enumerates the values of this property.
                    * The following keywords are allowed:  subtitles, captions, descriptions, chapters, metadata. If omitted the default kind is subtitles [MDN].
                    */
                    get: function () {
                        return this.kindProperty.value;
                    },
                    set: function (value) {
                        this.kindProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TrackElement.prototype, "labelProperty", {
                    //#endregion kind
                    //#region labelProperty
                    /**
                    * A user-readable title of the text track which is used by the browser when listing available text tracks [MDN].
                    */
                    get: function () {
                        if (!this._labelProperty)
                            initializeProperty(this, 'label', 'label');
                        return this._labelProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TrackElement.prototype, "label", {
                    //#endregion labelProperty
                    //#region label
                    /**
                    * A user-readable title of the text track which is used by the browser when listing available text tracks [MDN].
                    */
                    get: function () {
                        return this.labelProperty.value;
                    },
                    set: function (value) {
                        this.labelProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TrackElement.prototype, "sourceProperty", {
                    //#endregion label
                    //#region sourceProperty
                    /**
                    * Address of the track. Must be a valid URL. This attribute must be defined [MDN].
                    */
                    get: function () {
                        if (!this._sourceProperty)
                            initializeProperty(this, 'source', 'src');
                        return this._sourceProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TrackElement.prototype, "source", {
                    //#endregion sourceProperty
                    //#region source
                    /**
                    * Address of the track. Must be a valid URL. This attribute must be defined [MDN].
                    */
                    get: function () {
                        return this.sourceProperty.value;
                    },
                    set: function (value) {
                        this.sourceProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TrackElement.prototype, "sourceLanguageProperty", {
                    //#endregion source
                    //#region sourceLanguageProperty
                    /**
                    * Language of the track text data. It must be a valid BCP 47 language tag. If the kind attribute is set to subtitles, then srclang must be defined [MDN].
                    */
                    get: function () {
                        if (!this._sourceLanguageProperty)
                            initializeProperty(this, 'sourceLanguage', 'srclang');
                        return this._sourceLanguageProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TrackElement.prototype, "sourceLanguage", {
                    //#endregion sourceLanguageProperty
                    //#region sourceLanguage
                    /**
                    * Language of the track text data. It must be a valid BCP 47 language tag. If the kind attribute is set to subtitles, then srclang must be defined [MDN].
                    */
                    get: function () {
                        return this.sourceLanguageProperty.value;
                    },
                    set: function (value) {
                        this.sourceLanguageProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                TrackElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'default', true);
                    setPropertyFromConfig(this, config, 'kind', true);
                    setPropertyFromConfig(this, config, 'label', true);
                    setPropertyFromConfig(this, config, 'source', true);
                    setPropertyFromConfig(this, config, 'sourceLanguage', true);
                };
                return TrackElement;
            })(HtmlElementContainer);
            Elements.TrackElement = TrackElement;
            //#endregion TrackElement
            //#region UnderlineElement
            /**
            * The HTML Underline Element (<u>) renders text with an underline, a line under the baseline of its content [MDN].
            */
            var UnderlineElement = (function (_super) {
                __extends(UnderlineElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new UnderlineElement'.
                */
                function UnderlineElement(config) {
                    _super.call(this, 'u', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                UnderlineElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return UnderlineElement;
            })(HtmlElementContainer);
            Elements.UnderlineElement = UnderlineElement;
            //#endregion UnderlineElement
            //#region UnorderedListElement
            /**
            * The HTML unordered list element (<ul>) represents an unordered list of items, namely a collection of items that do not have a numerical ordering, and their order in the list is meaningless. Typically, unordered-list items are displayed with a bullet, which can be of several forms, like a dot, a circle or a squared. The bullet style is not defined in the HTML description of the page, but in its associated CSS, using the list-style-type property [MDN].
            */
            var UnorderedListElement = (function (_super) {
                __extends(UnorderedListElement, _super);
                //#endregion type
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new UnorderedListElement'.
                */
                function UnorderedListElement(config) {
                    _super.call(this, 'ul', config);
                }
                Object.defineProperty(UnorderedListElement.prototype, "compactProperty", {
                    //#endregion Fields
                    //#region Properties
                    //#region compactProperty
                    /**
                    * This Boolean attribute hints that the list should be rendered in a compact style. The interpretation of this attribute depends on the user agent and it doesn't work in all browsers.  Usage note: Do not use this attribute, as it has been deprecated: the <ul> element should be styled using CSS. To give a similar effect as the compact attribute, the CSS property line-height can be used with a value of 80% [MDN].
                    */
                    get: function () {
                        if (!this._compactProperty)
                            initializeProperty(this, 'compact', 'compact');
                        return this._compactProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(UnorderedListElement.prototype, "compact", {
                    //#endregion compactProperty
                    //#region compact
                    /**
                    * This Boolean attribute hints that the list should be rendered in a compact style. The interpretation of this attribute depends on the user agent and it doesn't work in all browsers.  Usage note: Do not use this attribute, as it has been deprecated: the <ul> element should be styled using CSS. To give a similar effect as the compact attribute, the CSS property line-height can be used with a value of 80% [MDN].
                    */
                    get: function () {
                        return this.compactProperty.value;
                    },
                    set: function (value) {
                        this.compactProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(UnorderedListElement.prototype, "typeProperty", {
                    //#endregion compact
                    //#region typeProperty
                    /**
                    * Html.UnorderedListType enumerates the values of this property.
                    * Used to set the bullet style for the list. The values defined under HTML3.2 and the transitional version of HTML 4.0/4.01 are:  circle, disc, and square. A fourth bullet type has been defined in the WebTV interface, but not all browsers support it: triangle. If not present and if no CSS list-style-type property does apply to the element, the user agent decide to use a kind of bullets depending on the nesting level of the list.
                    * Note: Do not use this attribute, as it has been deprecated; use the CSS list-style-type property instead [MDN].
                    */
                    get: function () {
                        if (!this._typeProperty)
                            initializeProperty(this, 'type', 'type');
                        return this._typeProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(UnorderedListElement.prototype, "type", {
                    //#endregion typeProperty
                    //#region type
                    /**
                    * Html.UnorderedListType enumerates the values of this property.
                    * Used to set the bullet style for the list. The values defined under HTML3.2 and the transitional version of HTML 4.0/4.01 are:  circle, disc, and square. A fourth bullet type has been defined in the WebTV interface, but not all browsers support it: triangle. If not present and if no CSS list-style-type property does apply to the element, the user agent decide to use a kind of bullets depending on the nesting level of the list.
                    * Note: Do not use this attribute, as it has been deprecated; use the CSS list-style-type property instead [MDN].
                    */
                    get: function () {
                        return this.typeProperty.value;
                    },
                    set: function (value) {
                        this.typeProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                UnorderedListElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'compact', true);
                    setPropertyFromConfig(this, config, 'type', true);
                };
                return UnorderedListElement;
            })(HtmlElementContainer);
            Elements.UnorderedListElement = UnorderedListElement;
            //#endregion UnorderedListElement
            //#region VariableElement
            /**
            * The HTML Variable Element (<var>) represents a variable in a mathematical expression or a programming context [MDN].
            */
            var VariableElement = (function (_super) {
                __extends(VariableElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new VariableElement'.
                */
                function VariableElement(config) {
                    _super.call(this, 'var', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                VariableElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return VariableElement;
            })(HtmlElementContainer);
            Elements.VariableElement = VariableElement;
            //#endregion VariableElement
            //#region VideoElement
            /**
            * The HTML <video> element is used to embed video content in an HTML or XHTML document [MDN].
            */
            var VideoElement = (function (_super) {
                __extends(VideoElement, _super);
                //#endregion mediaWaitingEvent
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new VideoElement'.
                */
                function VideoElement(config) {
                    _super.call(this, 'video', config);
                }
                Object.defineProperty(VideoElement.prototype, "autoPlayProperty", {
                    //#endregion Fields
                    //#region Properties
                    //#region autoPlayProperty
                    /**
                    * A Boolean attribute; if specified, the video will automatically begin to play back as soon as it can do so without stopping to finish loading the data [MDN].
                    */
                    get: function () {
                        if (!this._autoPlayProperty)
                            initializeProperty(this, 'autoPlay', 'autoplay');
                        return this._autoPlayProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "autoPlay", {
                    //#endregion autoPlayProperty
                    //#region autoPlay
                    /**
                    * A Boolean attribute; if specified, the video will automatically begin to play back as soon as it can do so without stopping to finish loading the data [MDN].
                    */
                    get: function () {
                        return this.autoPlayProperty.value;
                    },
                    set: function (value) {
                        this.autoPlayProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "bufferedProperty", {
                    //#endregion autoPlay
                    //#region bufferedProperty
                    /**
                    * An attribute you can read to determine which time ranges of the media have been buffered. This attribute contains a TimeRanges object [MDN].
                    */
                    get: function () {
                        if (!this._bufferedProperty)
                            initializeProperty(this, 'buffered', 'buffered');
                        return this._bufferedProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "buffered", {
                    //#endregion bufferedProperty
                    //#region buffered
                    /**
                    * An attribute you can read to determine which time ranges of the media have been buffered. This attribute contains a TimeRanges object [MDN].
                    */
                    get: function () {
                        return this.bufferedProperty.value;
                    },
                    set: function (value) {
                        this.bufferedProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "controlsProperty", {
                    //#endregion buffered
                    //#region controlsProperty
                    /**
                    * If this attribute is present, controls are included in the video for adjusting volume, seeking, pausing and resuming playback [MDN].
                    */
                    get: function () {
                        if (!this._controlsProperty)
                            initializeProperty(this, 'controls', 'controls');
                        return this._controlsProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "controls", {
                    //#endregion controlsProperty
                    //#region controls
                    /**
                    * If this attribute is present, controls are included in the video for adjusting volume, seeking, pausing and resuming playback [MDN].
                    */
                    get: function () {
                        return this.controlsProperty.value;
                    },
                    set: function (value) {
                        this.controlsProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "heightProperty", {
                    //#endregion controls
                    //#region heightProperty
                    /**
                    * The height of the video's display area, in CSS pixels [MDN].
                    */
                    get: function () {
                        if (!this._heightProperty)
                            initializeProperty(this, 'height', 'height');
                        return this._heightProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "height", {
                    //#endregion heightProperty
                    //#region height
                    /**
                    * The height of the video's display area, in CSS pixels [MDN].
                    */
                    get: function () {
                        return this.heightProperty.value;
                    },
                    set: function (value) {
                        this.heightProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "loopProperty", {
                    //#endregion height
                    //#region loopProperty
                    /**
                    * Specifies that the video should repeat upon reaching the end [MDN].
                    */
                    get: function () {
                        if (!this._loopProperty)
                            initializeProperty(this, 'loop', 'loop');
                        return this._loopProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "loop", {
                    //#endregion loopProperty
                    //#region loop
                    /**
                    * Specifies that the video should repeat upon reaching the end [MDN].
                    */
                    get: function () {
                        return this.loopProperty.value;
                    },
                    set: function (value) {
                        this.loopProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "mutedProperty", {
                    //#endregion loop
                    //#region mutedProperty
                    /**
                    * A Boolean attribute which indicates the default setting of the audio contained in the video. If set, the audio will be initially silenced. Its default value is false, meaning that the audio will be played when the video is played [MDN].
                    */
                    get: function () {
                        if (!this._mutedProperty)
                            initializeProperty(this, 'muted', 'muted');
                        return this._mutedProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "muted", {
                    //#endregion mutedProperty
                    //#region muted
                    /**
                    * A Boolean attribute which indicates the default setting of the audio contained in the video. If set, the audio will be initially silenced. Its default value is false, meaning that the audio will be played when the video is played [MDN].
                    */
                    get: function () {
                        return this.mutedProperty.value;
                    },
                    set: function (value) {
                        this.mutedProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "playedProperty", {
                    //#endregion muted
                    //#region playedProperty
                    /**
                    * Specifies the ranges of the video that have been played [MDN].
                    */
                    get: function () {
                        if (!this._playedProperty)
                            initializeProperty(this, 'played', 'played');
                        return this._playedProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "played", {
                    //#endregion playedProperty
                    //#region played
                    /**
                    * Specifies the ranges of the video that have been played [MDN].
                    */
                    get: function () {
                        return this.playedProperty.value;
                    },
                    set: function (value) {
                        this.playedProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "preloadProperty", {
                    //#endregion played
                    //#region preloadProperty
                    /**
                    * Html.VideoPreload enumerates the values of this property.
                    * This enumerated attribute is intended to provide a hint to the browser about what the author thinks will lead to the best user experience. It may have one of the following values:  none: hints that either the author thinks that the user won't need to consult that video or that the server wants to minimize its traffic; in others terms this hint indicates that the video should not be cached. metadata: hints that though the author thinks that the user won't need to consult that video, fetching the metadata (e.g. length) is reasonable. auto: hints that the user needs have priority; in others terms this hint indicated that, if needed, the whole video could be downloaded, even if the user is not expected to use it. the empty string: which is a synonym of the auto value. If not set, its default value is browser-defined (i.e. each browser can choose its own default value), though the spec advises it to be set to metadata.  Usage notes:  The autoplay attribute has precedence over this one as if one wants to automatically play a video, the browser will obviously need to download it. Setting both the autoplay and the preload attributes is allowed by the specification. The browser is not forced by the specification to follow the value of this attribute; it is a mere hint [MDN].
                    */
                    get: function () {
                        if (!this._preloadProperty)
                            initializeProperty(this, 'preload', 'preload');
                        return this._preloadProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "preload", {
                    //#endregion preloadProperty
                    //#region preload
                    /**
                    * Html.VideoPreload enumerates the values of this property.
                    * This enumerated attribute is intended to provide a hint to the browser about what the author thinks will lead to the best user experience. It may have one of the following values:  none: hints that either the author thinks that the user won't need to consult that video or that the server wants to minimize its traffic; in others terms this hint indicates that the video should not be cached. metadata: hints that though the author thinks that the user won't need to consult that video, fetching the metadata (e.g. length) is reasonable. auto: hints that the user needs have priority; in others terms this hint indicated that, if needed, the whole video could be downloaded, even if the user is not expected to use it. the empty string: which is a synonym of the auto value. If not set, its default value is browser-defined (i.e. each browser can choose its own default value), though the spec advises it to be set to metadata.  Usage notes:  The autoplay attribute has precedence over this one as if one wants to automatically play a video, the browser will obviously need to download it. Setting both the autoplay and the preload attributes is allowed by the specification. The browser is not forced by the specification to follow the value of this attribute; it is a mere hint [MDN].
                    */
                    get: function () {
                        return this.preloadProperty.value;
                    },
                    set: function (value) {
                        this.preloadProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "posterProperty", {
                    //#endregion preload
                    //#region posterProperty
                    /**
                    * A URL indicating a poster frame to show until the user plays or seeks. If this attribute isn't specified, nothing is displayed until the first frame is available; then the first frame is displayed as the poster frame [MDN].
                    */
                    get: function () {
                        if (!this._posterProperty)
                            initializeProperty(this, 'poster', 'poster');
                        return this._posterProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "poster", {
                    //#endregion posterProperty
                    //#region poster
                    /**
                    * A URL indicating a poster frame to show until the user plays or seeks. If this attribute isn't specified, nothing is displayed until the first frame is available; then the first frame is displayed as the poster frame [MDN].
                    */
                    get: function () {
                        return this.posterProperty.value;
                    },
                    set: function (value) {
                        this.posterProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "sourceProperty", {
                    //#endregion poster
                    //#region sourceProperty
                    /**
                    * The URL of the video to embed. This is optional; you may instead use the <source> element within the video block to specify the video to embed [MDN].
                    */
                    get: function () {
                        if (!this._sourceProperty)
                            initializeProperty(this, 'source', 'src');
                        return this._sourceProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "source", {
                    //#endregion sourceProperty
                    //#region source
                    /**
                    * The URL of the video to embed. This is optional; you may instead use the <source> element within the video block to specify the video to embed [MDN].
                    */
                    get: function () {
                        return this.sourceProperty.value;
                    },
                    set: function (value) {
                        this.sourceProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "widthProperty", {
                    //#endregion source
                    //#region widthProperty
                    /**
                    * The width of the video's display area, in CSS pixels [MDN].
                    */
                    get: function () {
                        if (!this._widthProperty)
                            initializeProperty(this, 'width', 'width');
                        return this._widthProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "width", {
                    //#endregion widthProperty
                    //#region width
                    /**
                    * The width of the video's display area, in CSS pixels [MDN].
                    */
                    get: function () {
                        return this.widthProperty.value;
                    },
                    set: function (value) {
                        this.widthProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "mediaCanPlayEvent", {
                    //#endregion width
                    //#region mediaCanPlayEvent
                    /**
                    * The mediaCanPlayEvent event is executed when the user agent can play the media, but estimates that not enough data has been loaded to play the media up to its end without having to stop for further buffering of content [MDN].
                    * Specification: HTML5 media
                    * DOM Event Name: canplay
                    */
                    get: function () {
                        if (!this._mediaCanPlayEvent)
                            this._mediaCanPlayEvent = new Html.HtmlElementEvent('canplay', 'Event', this);
                        return this._mediaCanPlayEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "mediaCanPlayThroughEvent", {
                    //#endregion mediaCanPlayEvent
                    //#region mediaCanPlayThroughEvent
                    /**
                    * The mediaCanPlayThroughEvent event is executed when the user agent can play the media, and estimates that enough data has been loaded to play the media up to its end without having to stop for further buffering of content [MDN].
                    * Specification: HTML5 media
                    * DOM Event Name: canplaythrough
                    */
                    get: function () {
                        if (!this._mediaCanPlayThroughEvent)
                            this._mediaCanPlayThroughEvent = new Html.HtmlElementEvent('canplaythrough', 'Event', this);
                        return this._mediaCanPlayThroughEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "mediaDurationChangeEvent", {
                    //#endregion mediaCanPlayThroughEvent
                    //#region mediaDurationChangeEvent
                    /**
                    * The mediaDurationChangeEvent event is executed when the duration attribute has been updated [MDN].
                    * Specification: HTML5 media
                    * DOM Event Name: durationchange
                    */
                    get: function () {
                        if (!this._mediaDurationChangeEvent)
                            this._mediaDurationChangeEvent = new Html.HtmlElementEvent('durationchange', 'Event', this);
                        return this._mediaDurationChangeEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "mediaEmptiedEvent", {
                    //#endregion mediaDurationChangeEvent
                    //#region mediaEmptiedEvent
                    /**
                    * The mediaEmptiedEvent event is executed when the media has become empty; for example, this event is sent if the media has already been loaded (or partially loaded), and the load() method is called to reload it [MDN].
                    * Specification: HTML5 media
                    * DOM Event Name: emptied
                    */
                    get: function () {
                        if (!this._mediaEmptiedEvent)
                            this._mediaEmptiedEvent = new Html.HtmlElementEvent('emptied', 'Event', this);
                        return this._mediaEmptiedEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "mediaEndedEvent", {
                    //#endregion mediaEmptiedEvent
                    //#region mediaEndedEvent
                    /**
                    * The mediaEndedEvent event is executed when playback has stopped because the end of the media was reached [MDN].
                    * Specification: HTML5 media
                    * DOM Event Name: ended
                    */
                    get: function () {
                        if (!this._mediaEndedEvent)
                            this._mediaEndedEvent = new Html.HtmlElementEvent('ended', 'Event', this);
                        return this._mediaEndedEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "mediaLoadedDataEvent", {
                    //#endregion mediaEndedEvent
                    //#region mediaLoadedDataEvent
                    /**
                    * The mediaLoadedDataEvent event is executed when the first frame of the media has finished loading [MDN].
                    * Specification: HTML5 media
                    * DOM Event Name: loadeddata
                    */
                    get: function () {
                        if (!this._mediaLoadedDataEvent)
                            this._mediaLoadedDataEvent = new Html.HtmlElementEvent('loadeddata', 'Event', this);
                        return this._mediaLoadedDataEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "mediaLoadedMetadataEvent", {
                    //#endregion mediaLoadedDataEvent
                    //#region mediaLoadedMetadataEvent
                    /**
                    * The mediaLoadedMetadataEvent event is executed when the metadata has been loaded [MDN].
                    * Specification: HTML5 media
                    * DOM Event Name: loadedmetadata
                    */
                    get: function () {
                        if (!this._mediaLoadedMetadataEvent)
                            this._mediaLoadedMetadataEvent = new Html.HtmlElementEvent('loadedmetadata', 'Event', this);
                        return this._mediaLoadedMetadataEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "mediaPauseEvent", {
                    //#endregion mediaLoadedMetadataEvent
                    //#region mediaPauseEvent
                    /**
                    * The mediaPauseEvent event is executed when playback has been paused [MDN].
                    * Specification: HTML5 media
                    * DOM Event Name: pause
                    */
                    get: function () {
                        if (!this._mediaPauseEvent)
                            this._mediaPauseEvent = new Html.HtmlElementEvent('pause', 'Event', this);
                        return this._mediaPauseEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "mediaPlayEvent", {
                    //#endregion mediaPauseEvent
                    //#region mediaPlayEvent
                    /**
                    * The mediaPlayEvent event is executed when playback has begun [MDN].
                    * Specification: HTML5 media
                    * DOM Event Name: play
                    */
                    get: function () {
                        if (!this._mediaPlayEvent)
                            this._mediaPlayEvent = new Html.HtmlElementEvent('play', 'Event', this);
                        return this._mediaPlayEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "mediaPlayingEvent", {
                    //#endregion mediaPlayEvent
                    //#region mediaPlayingEvent
                    /**
                    * The mediaPlayingEvent event is executed when playback is ready to start after having been paused or delayed due to lack of data [MDN].
                    * Specification: HTML5 media
                    * DOM Event Name: playing
                    */
                    get: function () {
                        if (!this._mediaPlayingEvent)
                            this._mediaPlayingEvent = new Html.HtmlElementEvent('playing', 'Event', this);
                        return this._mediaPlayingEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "mediaRateChangeEvent", {
                    //#endregion mediaPlayingEvent
                    //#region mediaRateChangeEvent
                    /**
                    * The mediaRateChangeEvent event is executed when the playback rate has changed [MDN].
                    * Specification: HTML5 media
                    * DOM Event Name: ratechange
                    */
                    get: function () {
                        if (!this._mediaRateChangeEvent)
                            this._mediaRateChangeEvent = new Html.HtmlElementEvent('ratechange', 'Event', this);
                        return this._mediaRateChangeEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "mediaSeekedEvent", {
                    //#endregion mediaRateChangeEvent
                    //#region mediaSeekedEvent
                    /**
                    * The mediaSeekedEvent event is executed when a seek operation completed [MDN].
                    * Specification: HTML5 media
                    * DOM Event Name: seeked
                    */
                    get: function () {
                        if (!this._mediaSeekedEvent)
                            this._mediaSeekedEvent = new Html.HtmlElementEvent('seeked', 'Event', this);
                        return this._mediaSeekedEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "mediaSeekingEvent", {
                    //#endregion mediaSeekedEvent
                    //#region mediaSeekingEvent
                    /**
                    * The mediaSeekingEvent event is executed when a seek operation began [MDN].
                    * Specification: HTML5 media
                    * DOM Event Name: seeking
                    */
                    get: function () {
                        if (!this._mediaSeekingEvent)
                            this._mediaSeekingEvent = new Html.HtmlElementEvent('seeking', 'Event', this);
                        return this._mediaSeekingEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "mediaStalledEvent", {
                    //#endregion mediaSeekingEvent
                    //#region mediaStalledEvent
                    /**
                    * The mediaStalledEvent event is executed when the user agent is trying to fetch media data, but data is unexpectedly not forthcoming [MDN].
                    * Specification: HTML5 media
                    * DOM Event Name: stalled
                    */
                    get: function () {
                        if (!this._mediaStalledEvent)
                            this._mediaStalledEvent = new Html.HtmlElementEvent('stalled', 'Event', this);
                        return this._mediaStalledEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "mediaSuspendEvent", {
                    //#endregion mediaStalledEvent
                    //#region mediaSuspendEvent
                    /**
                    * The mediaSuspendEvent event is executed when media data loading has been suspended [MDN].
                    * Specification: HTML5 media
                    * DOM Event Name: suspend
                    */
                    get: function () {
                        if (!this._mediaSuspendEvent)
                            this._mediaSuspendEvent = new Html.HtmlElementEvent('suspend', 'Event', this);
                        return this._mediaSuspendEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "mediaTimeUpdateEvent", {
                    //#endregion mediaSuspendEvent
                    //#region mediaTimeUpdateEvent
                    /**
                    * The mediaTimeUpdateEvent event is executed when the time indicated by the currentTime attribute has been updated [MDN].
                    * Specification: HTML5 media
                    * DOM Event Name: timeupdate
                    */
                    get: function () {
                        if (!this._mediaTimeUpdateEvent)
                            this._mediaTimeUpdateEvent = new Html.HtmlElementEvent('timeupdate', 'Event', this);
                        return this._mediaTimeUpdateEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "mediaVolumeChangeEvent", {
                    //#endregion mediaTimeUpdateEvent
                    //#region mediaVolumeChangeEvent
                    /**
                    * The mediaVolumeChangeEvent event is executed when the volume has changed [MDN].
                    * Specification: HTML5 media
                    * DOM Event Name: volumechange
                    */
                    get: function () {
                        if (!this._mediaVolumeChangeEvent)
                            this._mediaVolumeChangeEvent = new Html.HtmlElementEvent('volumechange', 'Event', this);
                        return this._mediaVolumeChangeEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "mediaWaitingEvent", {
                    //#endregion mediaVolumeChangeEvent
                    //#region mediaWaitingEvent
                    /**
                    * The mediaWaitingEvent event is executed when playback has stopped because of a temporary lack of data [MDN].
                    * Specification: HTML5 media
                    * DOM Event Name: waiting
                    */
                    get: function () {
                        if (!this._mediaWaitingEvent)
                            this._mediaWaitingEvent = new Html.HtmlElementEvent('waiting', 'Event', this);
                        return this._mediaWaitingEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                VideoElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'autoPlay', true);
                    setPropertyFromConfig(this, config, 'buffered', true);
                    setPropertyFromConfig(this, config, 'controls', true);
                    setPropertyFromConfig(this, config, 'height', true);
                    setPropertyFromConfig(this, config, 'loop', true);
                    setPropertyFromConfig(this, config, 'muted', true);
                    setPropertyFromConfig(this, config, 'played', true);
                    setPropertyFromConfig(this, config, 'preload', true);
                    setPropertyFromConfig(this, config, 'poster', true);
                    setPropertyFromConfig(this, config, 'source', true);
                    setPropertyFromConfig(this, config, 'width', true);
                    if (config.mediaCanPlayHandler)
                        this.mediaCanPlayEvent.subscribe(config.mediaCanPlayHandler);
                    if (config.mediaCanPlayThroughHandler)
                        this.mediaCanPlayThroughEvent.subscribe(config.mediaCanPlayThroughHandler);
                    if (config.mediaDurationChangeHandler)
                        this.mediaDurationChangeEvent.subscribe(config.mediaDurationChangeHandler);
                    if (config.mediaEmptiedHandler)
                        this.mediaEmptiedEvent.subscribe(config.mediaEmptiedHandler);
                    if (config.mediaEndedHandler)
                        this.mediaEndedEvent.subscribe(config.mediaEndedHandler);
                    if (config.mediaLoadedDataHandler)
                        this.mediaLoadedDataEvent.subscribe(config.mediaLoadedDataHandler);
                    if (config.mediaLoadedMetadataHandler)
                        this.mediaLoadedMetadataEvent.subscribe(config.mediaLoadedMetadataHandler);
                    if (config.mediaPauseHandler)
                        this.mediaPauseEvent.subscribe(config.mediaPauseHandler);
                    if (config.mediaPlayHandler)
                        this.mediaPlayEvent.subscribe(config.mediaPlayHandler);
                    if (config.mediaPlayingHandler)
                        this.mediaPlayingEvent.subscribe(config.mediaPlayingHandler);
                    if (config.mediaRateChangeHandler)
                        this.mediaRateChangeEvent.subscribe(config.mediaRateChangeHandler);
                    if (config.mediaSeekedHandler)
                        this.mediaSeekedEvent.subscribe(config.mediaSeekedHandler);
                    if (config.mediaSeekingHandler)
                        this.mediaSeekingEvent.subscribe(config.mediaSeekingHandler);
                    if (config.mediaStalledHandler)
                        this.mediaStalledEvent.subscribe(config.mediaStalledHandler);
                    if (config.mediaSuspendHandler)
                        this.mediaSuspendEvent.subscribe(config.mediaSuspendHandler);
                    if (config.mediaTimeUpdateHandler)
                        this.mediaTimeUpdateEvent.subscribe(config.mediaTimeUpdateHandler);
                    if (config.mediaVolumeChangeHandler)
                        this.mediaVolumeChangeEvent.subscribe(config.mediaVolumeChangeHandler);
                    if (config.mediaWaitingHandler)
                        this.mediaWaitingEvent.subscribe(config.mediaWaitingHandler);
                };
                return VideoElement;
            })(HtmlElementContainer);
            Elements.VideoElement = VideoElement;
            //#endregion VideoElement
            //#region WordBreakOpportunityElement
            /**
            * The Word Break Opportunity (<wbr>) HTML element represents a position within text where the browser may optionally break a line, though its line-breaking rules would not otherwise create a break at that location [MDN].
            */
            var WordBreakOpportunityElement = (function (_super) {
                __extends(WordBreakOpportunityElement, _super);
                //#region Fields
                //#endregion Fields
                //#region Properties
                //#endregion Properties
                //#region Constructor
                /**
                * Initializes a new WordBreakOpportunityElement'.
                */
                function WordBreakOpportunityElement(config) {
                    _super.call(this, 'wbr', config);
                }
                //#endregion Constructor
                //#region Base Class Overrides
                /**
                * Protected
                * Configures the DOM node with data from the config.
                * @param [element] The DOM node to configure.
                * @param [document] The document used to create elements.
                */
                WordBreakOpportunityElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return WordBreakOpportunityElement;
            })(HtmlElementContainer);
            Elements.WordBreakOpportunityElement = WordBreakOpportunityElement;
            //#endregion WordBreakOpportunityElement
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
                value = Html.wrap(id);
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
                .add('textContent', 'text')
                .add('className', 'classes')
                .add('dir', 'direction')
                .add('lang', 'language')
                .add('spellcheck', 'spellCheck')
                .add('hreflang', 'hrefLanguage')
                .add('rel', 'relationship')
                .add('alt', 'alternate')
                .add('coords', 'coordinates')
                .add('autoplay', 'autoPlay')
                .add('src', 'source')
                .add('cite', 'citation')
                .add('autofocus', 'autoFocus')
                .add('autocomplete', 'autoComplete')
                .add('enctype', 'encodingType')
                .add('longDesc', 'longDescription')
                .add('placeholder', 'placeHolder')
                .add('charset', 'characterSet')
                .add('rev', 'reverseRelationship')
                .add('multiple', 'multipleOptions')
                .add('colSpan', 'columnSpan')
                .add('cols', 'columns')
                .add('srclang', 'sourceLanguage');
            var contentMap = new Classical.Collections.Dictionary(10)
                .add('accept-charset', 'acceptCharset')
                .add('longdesc', 'longDesc')
                .add('http-equiv', 'httpEquiv')
                .add('colspan', 'colSpan')
                .add('rowspan', 'rowSpan')
                .add('maxlength', 'maxLength')
                .add('readonly', 'readOnly');
            var constructorMap = new Classical.Collections.Dictionary(150)
                .add('#text', TextNode)
                .add('ABBR', AbbreviationElement)
                .add('ADDRESS', AddressElement)
                .add('A', AnchorElement)
                .add('AREA', AreaElement)
                .add('ARTICLE', ArticleElement)
                .add('ASIDE', AsideElement)
                .add('AUDIO', AudioElement)
                .add('BASE', BaseElement)
                .add('BDI', BidirectionalIsolationElement)
                .add('BDO', BidirectionalOverrideElement)
                .add('BLOCKQUOTE', BlockQuotationElement)
                .add('BODY', BodyElement)
                .add('B', BoldElement)
                .add('BUTTON', ButtonElement)
                .add('CANVAS', CanvasElement)
                .add('CITE', CitationElement)
                .add('CODE', CodeElement)
                .add('DATA', DataElement)
                .add('DATALIST', DataListElement)
                .add('DFN', DefinitionElement)
                .add('DT', DefinitionTermElement)
                .add('DEL', DeletedTextElement)
                .add('DD', DescriptionElement)
                .add('DL', DescriptionListElement)
                .add('DETAILS', DetailsElement)
                .add('DIV', DivisionElement)
                .add('EMBED', EmbedElement)
                .add('OBJECT', EmbeddedObjectElement)
                .add('EM', EmphasisElement)
                .add('FIELDSET', FieldsetElement)
                .add('FIGURE', FigureElement)
                .add('FIGCAPTION', FigureCaptionElement)
                .add('FOOTER', FooterElement)
                .add('FORM', FormElement)
                .add('HEAD', HeadElement)
                .add('HEADER', HeaderElement)
                .add('H5', HeaderFiveElement)
                .add('H4', HeaderFourElement)
                .add('H1', HeaderOneElement)
                .add('H6', HeaderSixElement)
                .add('H3', HeaderThreeElement)
                .add('H2', HeaderTwoElement)
                .add('HR', HorizontalRuleElement)
                .add('IMG', ImageElement)
                .add('IFRAME', InlineFrameElement)
                .add('INPUT', InputElement)
                .add('INS', InsertedElement)
                .add('I', ItalicElement)
                .add('KBD', KeyboardInputElement)
                .add('LABEL', LabelElement)
                .add('LEGEND', LegendFieldElement)
                .add('BR', LineBreakElement)
                .add('LINK', LinkElement)
                .add('LI', ListItemElement)
                .add('MAIN', MainElement)
                .add('MAP', MapElement)
                .add('MARK', MarkElement)
                .add('META', MetaElement)
                .add('NAV', NavigationElement)
                .add('NOSCRIPT', NoScriptElement)
                .add('OPTION', OptionElement)
                .add('OPTGROUP', OptionsGroupElement)
                .add('OL', OrderedListElement)
                .add('P', ParagraphElement)
                .add('PARAM', ParameterElement)
                .add('PRE', PreformattedElement)
                .add('PROGRESS', ProgressElement)
                .add('Q', QuoteElement)
                .add('HTML', RootElement)
                .add('RUBY', RubyElement)
                .add('RP', RubyParenthesisElement)
                .add('RT', RubyPronunciationElement)
                .add('SAMP', SampleElement)
                .add('SCRIPT', ScriptElement)
                .add('SECTION', SectionElement)
                .add('SELECT', SelectElement)
                .add('SMALL', SmallElement)
                .add('SOURCE', SourceElement)
                .add('SPAN', SpanElement)
                .add('S', StrikethroughElement)
                .add('STRONG', StrongElement)
                .add('STYLE', StyleElement)
                .add('SUB', SubscriptElement)
                .add('SUMMARY', SummaryElement)
                .add('SUP', SuperscriptElement)
                .add('TABLE', TableElement)
                .add('CAPTION', TableCaptionElement)
                .add('COL', TableColumnElement)
                .add('COLGROUP', TableColumnGroupElement)
                .add('TD', TableDataCellElement)
                .add('TH', TableHeaderCellElement)
                .add('TR', TableRowElement)
                .add('TEXTAREA', TextAreaElement)
                .add('TITLE', TitleElement)
                .add('TRACK', TrackElement)
                .add('U', UnderlineElement)
                .add('UL', UnorderedListElement)
                .add('VAR', VariableElement)
                .add('VIDEO', VideoElement)
                .add('WBR', WordBreakOpportunityElement);
        })(Elements = Html.Elements || (Html.Elements = {}));
    })(Html = Classical.Html || (Classical.Html = {}));
})(Classical || (Classical = {}));
//#endregion Elements
//#region Factory Methods
var Classical;
(function (Classical) {
    var Html;
    (function (Html) {
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
        Html.create = create;
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
            return Html.Elements.HtmlNode.getHtmlNode(element);
        }
        Html.wrap = wrap;
        function text(content) {
            if (!Classical.Utilities.isDefined(content))
                content = '';
            if (Classical.Utilities.isString(content) || !content.source) {
                if (!content.source)
                    content = content.toString();
                return new Html.Elements.TextNode({ text: content });
            }
            return new Html.Elements.TextNode({ textBinder: content });
        }
        Html.text = text;
        //#endregion text
        //#region abbr
        /**
        * The HTML <abbr> Element (or HTML Abbreviation Element) represents an abbreviation and optionally provides a full description for it. If present, the title attribute must contain this full description and nothing else [MDN].
        * @param [config] The configuration for the AbbreviationElement.
        * @returns a new AbbreviationElement.
        */
        function abbr(config) {
            return new Html.Elements.AbbreviationElement(config);
        }
        Html.abbr = abbr;
        //#endregion abbr
        //#region address
        /**
        * The HTML <address> Element may be used by authors to supply contact information for its nearest <article> or <body> ancestor; in the latter case, it applies to the whole document [MDN].
        * @param [config] The configuration for the AddressElement.
        * @returns a new AddressElement.
        */
        function address(config) {
            return new Html.Elements.AddressElement(config);
        }
        Html.address = address;
        //#endregion address
        //#region a
        /**
        * The HTML <a> Element (or the HTML Anchor Element) defines a hyperlink, the named target destination for a hyperlink, or both [MDN].
        * @param [config] The configuration for the AnchorElement.
        * @returns a new AnchorElement.
        */
        function a(config) {
            return new Html.Elements.AnchorElement(config);
        }
        Html.a = a;
        //#endregion a
        //#region area
        /**
        * The HTML <area> element defines a hot-spot region on an image, and optionally associates it with a hypertext link. This element is used only within a <map> element [MDN].
        * @param [config] The configuration for the AreaElement.
        * @returns a new AreaElement.
        */
        function area(config) {
            return new Html.Elements.AreaElement(config);
        }
        Html.area = area;
        //#endregion area
        //#region article
        /**
        * The HTML <article> Element represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable, e.g., in syndication. This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment, an interactive widget or gadget, or any other independent item of content [MDN].
        * @param [config] The configuration for the ArticleElement.
        * @returns a new ArticleElement.
        */
        function article(config) {
            return new Html.Elements.ArticleElement(config);
        }
        Html.article = article;
        //#endregion article
        //#region aside
        /**
        * The HTML <aside> Element represents a section of a page that consists of content that is tangentially related to the content around it, which could be considered separate from that content. Such sections are often represented as sidebars or as inserts. They often contain side explanations, like a glossary definition; more loosely related stuff, like advertisements; the biography of the author; or in web-applications, profile information or related blog links [MDN].
        * @param [config] The configuration for the AsideElement.
        * @returns a new AsideElement.
        */
        function aside(config) {
            return new Html.Elements.AsideElement(config);
        }
        Html.aside = aside;
        //#endregion aside
        //#region audio
        /**
        * The HTML <audio> element is used to represent sound content in documents. Added as part of HTML5, it may contain several audio sources, represented using the src attribute or the <source> element; the browser will choose the most suitable one. Fallback content for browser not supporting the <audio> element can be added too [MDN].
        * @param [config] The configuration for the AudioElement.
        * @returns a new AudioElement.
        */
        function audio(config) {
            return new Html.Elements.AudioElement(config);
        }
        Html.audio = audio;
        //#endregion audio
        //#region base
        /**
        * The HTML <base> element specifies the base URL to use for all relative URLs contained within a document [MDN].
        * @param [config] The configuration for the BaseElement.
        * @returns a new BaseElement.
        */
        function base(config) {
            return new Html.Elements.BaseElement(config);
        }
        Html.base = base;
        //#endregion base
        //#region bdi
        /**
        * The HTML <bdi> Element (or Bi-Directional Isolation Element) isolates a span of text that might be formatted in a different direction from other text outside it [MDN].
        * @param [config] The configuration for the BidirectionalIsolationElement.
        * @returns a new BidirectionalIsolationElement.
        */
        function bdi(config) {
            return new Html.Elements.BidirectionalIsolationElement(config);
        }
        Html.bdi = bdi;
        //#endregion bdi
        //#region bdo
        /**
        * The HTML <bdo> Element (or HTML bidirectional override element) is used to override the current directionality of text. It causes the directionality of the characters to be ignored in favor of the specified directionality [MDN].
        * @param [config] The configuration for the BidirectionalOverrideElement.
        * @returns a new BidirectionalOverrideElement.
        */
        function bdo(config) {
            return new Html.Elements.BidirectionalOverrideElement(config);
        }
        Html.bdo = bdo;
        //#endregion bdo
        //#region blockquote
        /**
        * The HTML <blockquote> Element (or HTML Block Quotation Element) indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation (see Notes for how to change it). A URL for the source of the quotation may be given using the cite attribute, while a text representation of the source can be given using the <cite> element [MDN].
        * @param [config] The configuration for the BlockQuotationElement.
        * @returns a new BlockQuotationElement.
        */
        function blockquote(config) {
            return new Html.Elements.BlockQuotationElement(config);
        }
        Html.blockquote = blockquote;
        //#endregion blockquote
        //#region body
        /**
        * The HTML <body> element represents the content of an HTML document. There is only one <body> element in a document [MDN].
        * @param [config] The configuration for the BodyElement.
        * @returns a new BodyElement.
        */
        function body(config) {
            return new Html.Elements.BodyElement(config);
        }
        Html.body = body;
        //#endregion body
        //#region b
        /**
        * The HTML <b> Element represents a span of text stylistically different from normal text, without a conveying any special importance or relevance. It is typically used for keywords in a summary, product names in a review, or other spans of text whose typical presentation would be boldfaced. Another example of its use is to mark the lead sentence of each paragraph of an article [MDN].
        * @param [config] The configuration for the BoldElement.
        * @returns a new BoldElement.
        */
        function b(config) {
            return new Html.Elements.BoldElement(config);
        }
        Html.b = b;
        //#endregion b
        //#region button
        /**
        * The HTML <button> Element represents a clickable button [MDN].
        * @param [config] The configuration for the ButtonElement.
        * @returns a new ButtonElement.
        */
        function button(config) {
            return new Html.Elements.ButtonElement(config);
        }
        Html.button = button;
        //#endregion button
        //#region canvas
        /**
        * The HTML <canvas> Element can be used to draw graphics via scripting (usually JavaScript). For example, it can be used to draw graphs, make photo compositions or even perform animations. You may (and should) provide alternate content inside the <canvas> block. That content will be rendered both on older browsers that don't support canvas and in browsers with JavaScript disabled [MDN].
        * @param [config] The configuration for the CanvasElement.
        * @returns a new CanvasElement.
        */
        function canvas(config) {
            return new Html.Elements.CanvasElement(config);
        }
        Html.canvas = canvas;
        //#endregion canvas
        //#region cite
        /**
        * The HTML <cite> Element (or HTML Citation Element) contains the title of a work, such as a book, song, movie, TV show, sculpture, etc [MDN].
        * @param [config] The configuration for the CitationElement.
        * @returns a new CitationElement.
        */
        function cite(config) {
            return new Html.Elements.CitationElement(config);
        }
        Html.cite = cite;
        //#endregion cite
        //#region code
        /**
        * The HTML <code> Element represents a fragment of computer code. By default, it is displayed in the browser's default monospace font [MDN].
        * @param [config] The configuration for the CodeElement.
        * @returns a new CodeElement.
        */
        function code(config) {
            return new Html.Elements.CodeElement(config);
        }
        Html.code = code;
        //#endregion code
        //#region data
        /**
        * The HTML <data> Element links a given content with a machine-readable translation. If the content is time- or date-related, the <time> must be used [MDN].
        * @param [config] The configuration for the DataElement.
        * @returns a new DataElement.
        */
        function data(config) {
            return new Html.Elements.DataElement(config);
        }
        Html.data = data;
        //#endregion data
        //#region datalist
        /**
        * The HTML <datalist> Element contains a set of <option> elements that represent the possible options for the value of other controls [MDN].
        * @param [config] The configuration for the DataListElement.
        * @returns a new DataListElement.
        */
        function datalist(config) {
            return new Html.Elements.DataListElement(config);
        }
        Html.datalist = datalist;
        //#endregion datalist
        //#region dfn
        /**
        * The HTML <dfn> element (or HTML Definition Element) represents the defining instance of a term [MDN].
        * @param [config] The configuration for the DefinitionElement.
        * @returns a new DefinitionElement.
        */
        function dfn(config) {
            return new Html.Elements.DefinitionElement(config);
        }
        Html.dfn = dfn;
        //#endregion dfn
        //#region dt
        /**
        * The HTML <dt> element (or HTML Definition Term Element) identifies a term in a definition list. This element can occur only as a child element of a <dl>. It is usually followed by a <dd> element; however, multiple <dt> elements in a row indicate several terms that are all defined by the immediate next <dd> element [MDN].
        * @param [config] The configuration for the DefinitionTermElement.
        * @returns a new DefinitionTermElement.
        */
        function dt(config) {
            return new Html.Elements.DefinitionTermElement(config);
        }
        Html.dt = dt;
        //#endregion dt
        //#region del
        /**
        * The HTML <del> element (or HTML Deleted Text Element) represents a range of text that has been deleted from a document. This element is often (but need not be) rendered with strike-through text [MDN].
        * @param [config] The configuration for the DeletedTextElement.
        * @returns a new DeletedTextElement.
        */
        function del(config) {
            return new Html.Elements.DeletedTextElement(config);
        }
        Html.del = del;
        //#endregion del
        //#region dd
        /**
        * The HTML <dd> Element (or HTML Description Element) indicates the description of a term in a description list (<dl>) element. This element can occur only as a child element of a definition list and it must follow a <dt> element [MDN].
        * @param [config] The configuration for the DescriptionElement.
        * @returns a new DescriptionElement.
        */
        function dd(config) {
            return new Html.Elements.DescriptionElement(config);
        }
        Html.dd = dd;
        //#endregion dd
        //#region dl
        /**
        * The HTML <dl> Element (or HTML Description List Element) encloses a list of pairs of terms and descriptions. Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs) [MDN].
        * @param [config] The configuration for the DescriptionListElement.
        * @returns a new DescriptionListElement.
        */
        function dl(config) {
            return new Html.Elements.DescriptionListElement(config);
        }
        Html.dl = dl;
        //#endregion dl
        //#region details
        /**
        * The HTML <details> Element is used as a disclosure widget from which the user can retrieve additional information [MDN].
        * @param [config] The configuration for the DetailsElement.
        * @returns a new DetailsElement.
        */
        function details(config) {
            return new Html.Elements.DetailsElement(config);
        }
        Html.details = details;
        //#endregion details
        //#region div
        /**
        * The HTML <div> element (or HTML Document Division Element) is the generic container for flow content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element (such as <article> or <nav>) is appropriate [MDN].
        * @param [config] The configuration for the DivisionElement.
        * @returns a new DivisionElement.
        */
        function div(config) {
            return new Html.Elements.DivisionElement(config);
        }
        Html.div = div;
        //#endregion div
        //#region embed
        /**
        * The HTML <embed> Element represents an integration point for an external application or interactive content (in other words, a plug-in) [MDN].
        * @param [config] The configuration for the EmbedElement.
        * @returns a new EmbedElement.
        */
        function embed(config) {
            return new Html.Elements.EmbedElement(config);
        }
        Html.embed = embed;
        //#endregion embed
        //#region obj
        /**
        * The HTML <object> Element (or HTML Embedded Object Element) represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin [MDN].
        * @param [config] The configuration for the EmbeddedObjectElement.
        * @returns a new EmbeddedObjectElement.
        */
        function obj(config) {
            return new Html.Elements.EmbeddedObjectElement(config);
        }
        Html.obj = obj;
        //#endregion obj
        //#region em
        /**
        * The HTML <em> element (or HTML Emphasis Element) marks text that has stress emphasis. The <em> element can be nested, with each level of nesting indicating a greater degree of emphasis [MDN].
        * @param [config] The configuration for the EmphasisElement.
        * @returns a new EmphasisElement.
        */
        function em(config) {
            return new Html.Elements.EmphasisElement(config);
        }
        Html.em = em;
        //#endregion em
        //#region fieldset
        /**
        * The HTML <fieldset> element is used to group several controls as well as labels (<label>) within a web form [MDN].
        * @param [config] The configuration for the FieldsetElement.
        * @returns a new FieldsetElement.
        */
        function fieldset(config) {
            return new Html.Elements.FieldsetElement(config);
        }
        Html.fieldset = fieldset;
        //#endregion fieldset
        //#region figure
        /**
        * The HTML <figure> Element represents self-contained content, frequently with a caption (<figcaption>), and is typically referenced as a single unit. While it is related to the main flow, its position is independent of the main flow. Usually this is an image, an illustration, a diagram, a code snippet, or a schema that is referenced in the main text, but that can be moved to another page or to an appendix without affecting the main flow [MDN].
        * @param [config] The configuration for the FigureElement.
        * @returns a new FigureElement.
        */
        function figure(config) {
            return new Html.Elements.FigureElement(config);
        }
        Html.figure = figure;
        //#endregion figure
        //#region figcaption
        /**
        * The HTML <figcaption> Element represents a caption or a legend associated with a figure or an illustration described by the rest of the data of the <figure> element which is its immediate ancestor which means <figcaption> can be the first or last element inside a <figure> block. Also, the HTML Figcaption Element is optional; if not provided, then the parent figure element will have no caption [MDN].
        * @param [config] The configuration for the FigureCaptionElement.
        * @returns a new FigureCaptionElement.
        */
        function figcaption(config) {
            return new Html.Elements.FigureCaptionElement(config);
        }
        Html.figcaption = figcaption;
        //#endregion figcaption
        //#region footer
        /**
        * The HTML <footer> Element represents a footer for its nearest sectioning content or sectioning root element (i.e, its nearest parent <article>, <aside>, <nav>, <section>, <blockquote>, <body>, <details>, <fieldset>, <figure>, <td>). A footer typically contains information about the author of the section, copyright data or links to related documents [MDN].
        * @param [config] The configuration for the FooterElement.
        * @returns a new FooterElement.
        */
        function footer(config) {
            return new Html.Elements.FooterElement(config);
        }
        Html.footer = footer;
        //#endregion footer
        //#region form
        /**
        * The HTML <form> element represents a section of document that contains interactive controls that enable a user to submit information to a web server [MDN].
        * @param [config] The configuration for the FormElement.
        * @returns a new FormElement.
        */
        function form(config) {
            return new Html.Elements.FormElement(config);
        }
        Html.form = form;
        //#endregion form
        //#region head
        /**
        * The HTML <head> element represents a collection of metadata about the document, including links to or definitions of scripts and style sheets [MDN].
        * @param [config] The configuration for the HeadElement.
        * @returns a new HeadElement.
        */
        function head(config) {
            return new Html.Elements.HeadElement(config);
        }
        Html.head = head;
        //#endregion head
        //#region header
        /**
        * The HTML <header> Element represents a group of introductory or navigational aids. It may contain some heading elements but also other elements like a logo, wrapped section's header, a search form, and so on [MDN].
        * @param [config] The configuration for the HeaderElement.
        * @returns a new HeaderElement.
        */
        function header(config) {
            return new Html.Elements.HeaderElement(config);
        }
        Html.header = header;
        //#endregion header
        //#region h5
        /**
        * Heading elements implement six levels of document headings, <h1> is the most important and <h6> is the least. A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically [MDN].
        * @param [config] The configuration for the HeaderFiveElement.
        * @returns a new HeaderFiveElement.
        */
        function h5(config) {
            return new Html.Elements.HeaderFiveElement(config);
        }
        Html.h5 = h5;
        //#endregion h5
        //#region h4
        /**
        * Heading elements implement six levels of document headings, <h1> is the most important and <h6> is the least. A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically [MDN].
        * @param [config] The configuration for the HeaderFourElement.
        * @returns a new HeaderFourElement.
        */
        function h4(config) {
            return new Html.Elements.HeaderFourElement(config);
        }
        Html.h4 = h4;
        //#endregion h4
        //#region h1
        /**
        * Heading elements implement six levels of document headings, <h1> is the most important and <h6> is the least. A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically [MDN].
        * @param [config] The configuration for the HeaderOneElement.
        * @returns a new HeaderOneElement.
        */
        function h1(config) {
            return new Html.Elements.HeaderOneElement(config);
        }
        Html.h1 = h1;
        //#endregion h1
        //#region h6
        /**
        * Heading elements implement six levels of document headings, <h1> is the most important and <h6> is the least. A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically [MDN].
        * @param [config] The configuration for the HeaderSixElement.
        * @returns a new HeaderSixElement.
        */
        function h6(config) {
            return new Html.Elements.HeaderSixElement(config);
        }
        Html.h6 = h6;
        //#endregion h6
        //#region h3
        /**
        * Heading elements implement six levels of document headings, <h1> is the most important and <h6> is the least. A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically [MDN].
        * @param [config] The configuration for the HeaderThreeElement.
        * @returns a new HeaderThreeElement.
        */
        function h3(config) {
            return new Html.Elements.HeaderThreeElement(config);
        }
        Html.h3 = h3;
        //#endregion h3
        //#region h2
        /**
        * Heading elements implement six levels of document headings, <h1> is the most important and <h6> is the least. A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically [MDN].
        * @param [config] The configuration for the HeaderTwoElement.
        * @returns a new HeaderTwoElement.
        */
        function h2(config) {
            return new Html.Elements.HeaderTwoElement(config);
        }
        Html.h2 = h2;
        //#endregion h2
        //#region hr
        /**
        * In HTML5 the HTML <hr> element represents a thematic break between paragraph-level elements (for example, a change of scene in a story, or a shift of topic with a section). In previous versions of HTML, it represented a horizontal rule. It may still be displayed as a horizontal rule in visual browsers, but is now defined in semantic terms, rather than presentational terms [MDN].
        * @param [config] The configuration for the HorizontalRuleElement.
        * @returns a new HorizontalRuleElement.
        */
        function hr(config) {
            return new Html.Elements.HorizontalRuleElement(config);
        }
        Html.hr = hr;
        //#endregion hr
        //#region img
        /**
        * The HTML <img> Element (or HTML Image Element) represents an image of the document [MDN].
        * @param [config] The configuration for the ImageElement.
        * @returns a new ImageElement.
        */
        function img(config) {
            return new Html.Elements.ImageElement(config);
        }
        Html.img = img;
        //#endregion img
        //#region iframe
        /**
        * The HTML <iframe> Element (or HTML inline frame element) represents a nested browsing context, effectively embedding another HTML page into the current page. In HTML 4.01, a document may contain a head and a body or a head and a frame-set, but not both a body and a frame-set. However,an <iframe> can be used within a normal document body. Each browsing context has its own session history and active document. The browsing context that contains the embedded content is called the parent browsing context. The top-level browsing context (which has no parent) is typically the browser window [MDN].
        * @param [config] The configuration for the InlineFrameElement.
        * @returns a new InlineFrameElement.
        */
        function iframe(config) {
            return new Html.Elements.InlineFrameElement(config);
        }
        Html.iframe = iframe;
        //#endregion iframe
        //#region input
        /**
        * The HTML <input> element is used to create interactive controls for web-based forms [MDN].
        * @param [config] The configuration for the InputElement.
        * @returns a new InputElement.
        */
        function input(config) {
            return new Html.Elements.InputElement(config);
        }
        Html.input = input;
        //#endregion input
        //#region ins
        /**
        * The HTML <ins> Element (or HTML Inserted Text) HTML represents a range of text that has been added to a document [MDN].
        * @param [config] The configuration for the InsertedElement.
        * @returns a new InsertedElement.
        */
        function ins(config) {
            return new Html.Elements.InsertedElement(config);
        }
        Html.ins = ins;
        //#endregion ins
        //#region i
        /**
        * The HTML <i> Element represents a range of text that is set off from the normal text for some reason, for example, technical terms, foreign language phrases, or fictional character thoughts. It is typically displayed in italic type [MDN].
        * @param [config] The configuration for the ItalicElement.
        * @returns a new ItalicElement.
        */
        function i(config) {
            return new Html.Elements.ItalicElement(config);
        }
        Html.i = i;
        //#endregion i
        //#region kbd
        /**
        * The HTML <kbd> Element (or HTML Keyboard Input Element) represents user input and produces an inline element displayed in the browser's default monotype font [MDN].
        * @param [config] The configuration for the KeyboardInputElement.
        * @returns a new KeyboardInputElement.
        */
        function kbd(config) {
            return new Html.Elements.KeyboardInputElement(config);
        }
        Html.kbd = kbd;
        //#endregion kbd
        //#region label
        /**
        * The HTML <label> Element represents a caption for an item in a user interface. It can be associated with a control either by using the for attribute, or by placing the control element inside the label element. Such a control is called the labeled control of the label element [MDN].
        * @param [config] The configuration for the LabelElement.
        * @returns a new LabelElement.
        */
        function label(config) {
            return new Html.Elements.LabelElement(config);
        }
        Html.label = label;
        //#endregion label
        //#region legend
        /**
        * The HTML <legend> Element (or HTML Legend Field Element) represents a caption for the content of its parent <fieldset> [MDN].
        * @param [config] The configuration for the LegendFieldElement.
        * @returns a new LegendFieldElement.
        */
        function legend(config) {
            return new Html.Elements.LegendFieldElement(config);
        }
        Html.legend = legend;
        //#endregion legend
        //#region br
        /**
        * The HTML <br> Element (or HTML Line Break Element) produces a line break in text (carriage-return). It is useful for writing a poem or an address, where the division of lines is significant [MDN].
        * @param [config] The configuration for the LineBreakElement.
        * @returns a new LineBreakElement.
        */
        function br(config) {
            return new Html.Elements.LineBreakElement(config);
        }
        Html.br = br;
        //#endregion br
        //#region link
        /**
        * The HTML <link> Element specifies relationships between the current document and other documents. Possible uses for this element include defining a relational framework for navigation and linking the document to a style sheet [MDN].
        * @param [config] The configuration for the LinkElement.
        * @returns a new LinkElement.
        */
        function link(config) {
            return new Html.Elements.LinkElement(config);
        }
        Html.link = link;
        //#endregion link
        //#region li
        /**
        * The HTML List item element (<li>) is used to represent a list item. It should be contained in an ordered list (<ol>), an unordered list (<ul>) or a menu (<menu>), where it represents a single entity in that list. In menus and unordered lists, list items are ordinarily displayed using bullet points. In ordered lists, they are usually displayed with some ascending counter on the left such as a number or letter [MDN].
        * @param [config] The configuration for the ListItemElement.
        * @returns a new ListItemElement.
        */
        function li(config) {
            return new Html.Elements.ListItemElement(config);
        }
        Html.li = li;
        //#endregion li
        //#region main
        /**
        * The HTML <main> element represents the main content of  the <body> of a document or application. The main content area consists of content that is directly related to, or expands upon the central topic of a document or the central functionality of an application. This content should be unique to the document, excluding any content that is repeated across a set of documents such as sidebars, navigation links, copyright information, site logos, and search forms (unless, of course, the document's main function is as a search form) [MDN].
        * @param [config] The configuration for the MainElement.
        * @returns a new MainElement.
        */
        function main(config) {
            return new Html.Elements.MainElement(config);
        }
        Html.main = main;
        //#endregion main
        //#region map
        /**
        * The HTML <map> element is used with <area> elements to define an image map [MDN].
        * @param [config] The configuration for the MapElement.
        * @returns a new MapElement.
        */
        function map(config) {
            return new Html.Elements.MapElement(config);
        }
        Html.map = map;
        //#endregion map
        //#region mark
        /**
        * The HTML <mark> Element represents highlighted text, i.e., a run of text marked for reference purpose, due to its relevance in a particular context. For example it can be used in a page showing search results to highlight every instance of the searched for word [MDN].
        * @param [config] The configuration for the MarkElement.
        * @returns a new MarkElement.
        */
        function mark(config) {
            return new Html.Elements.MarkElement(config);
        }
        Html.mark = mark;
        //#endregion mark
        //#region meta
        /**
        * The HTML <meta> Element represents any metadata information which cannot be represented using one of the other meta-related element (<base>, <link>, <script>, <style> or <title>). According to the attributes set, the kind of metadata can be one of the following: [MDN].
        * @param [config] The configuration for the MetaElement.
        * @returns a new MetaElement.
        */
        function meta(config) {
            return new Html.Elements.MetaElement(config);
        }
        Html.meta = meta;
        //#endregion meta
        //#region nav
        /**
        * The HTML Navigation Element (<nav>) represents a section of a page that links to other pages or to parts within the page [MDN].
        * @param [config] The configuration for the NavigationElement.
        * @returns a new NavigationElement.
        */
        function nav(config) {
            return new Html.Elements.NavigationElement(config);
        }
        Html.nav = nav;
        //#endregion nav
        //#region noscript
        /**
        * The HTML <noscript> Element defines a section of html to be inserted if a script type on the page is unsupported or if scripting is currently turned off in the browser [MDN].
        * @param [config] The configuration for the NoScriptElement.
        * @returns a new NoScriptElement.
        */
        function noscript(config) {
            return new Html.Elements.NoScriptElement(config);
        }
        Html.noscript = noscript;
        //#endregion noscript
        //#region option
        /**
        * In a Web form, the HTML <option> element is used to create a control representing an item within a <select>, <optgroup> or <datalist> element [MDN].
        * @param [config] The configuration for the OptionElement.
        * @returns a new OptionElement.
        */
        function option(config) {
            return new Html.Elements.OptionElement(config);
        }
        Html.option = option;
        //#endregion option
        //#region optgroup
        /**
        * In a Web form, the HTML <optgroup> element  creates a grouping of options within a <select> element [MDN].
        * @param [config] The configuration for the OptionsGroupElement.
        * @returns a new OptionsGroupElement.
        */
        function optgroup(config) {
            return new Html.Elements.OptionsGroupElement(config);
        }
        Html.optgroup = optgroup;
        //#endregion optgroup
        //#region ol
        /**
        * The HTML <ol> Element (or HTML Ordered List Element) represents an ordered list of items. Typically, ordered-list items are displayed with a preceding numbering, which can be of any form, like numerals, letters or Romans numerals or even simple bullets. This numbered style is not defined in the HTML description of the page, but in its associated CSS, using the list-style-type property [MDN].
        * @param [config] The configuration for the OrderedListElement.
        * @returns a new OrderedListElement.
        */
        function ol(config) {
            return new Html.Elements.OrderedListElement(config);
        }
        Html.ol = ol;
        //#endregion ol
        //#region p
        /**
        * The HTML <p> element (or HTML Paragraph Element) represents a paragraph of text. Paragraphs are block-level elements [MDN].
        * @param [config] The configuration for the ParagraphElement.
        * @returns a new ParagraphElement.
        */
        function p(config) {
            return new Html.Elements.ParagraphElement(config);
        }
        Html.p = p;
        //#endregion p
        //#region param
        /**
        * The HTML <param> Element (or HTML Parameter Element) defines parameters for <object> [MDN].
        * @param [config] The configuration for the ParameterElement.
        * @returns a new ParameterElement.
        */
        function param(config) {
            return new Html.Elements.ParameterElement(config);
        }
        Html.param = param;
        //#endregion param
        //#region pre
        /**
        * The HTML <pre> Element (or HTML Preformatted Text) represents preformatted text. Text within this element is typically displayed in a non-proportional font exactly as it is laid out in the file. Whitespaces inside this element are displayed as typed [MDN].
        * @param [config] The configuration for the PreformattedElement.
        * @returns a new PreformattedElement.
        */
        function pre(config) {
            return new Html.Elements.PreformattedElement(config);
        }
        Html.pre = pre;
        //#endregion pre
        //#region progress
        /**
        * The HTML <progress> Element is used to view the completion progress of a task. While the specifics of how it's displayed is left up to the browser developer, it's typically displayed as a progress bar. Javascript can be used to manipulate the value of progress bar [MDN].
        * @param [config] The configuration for the ProgressElement.
        * @returns a new ProgressElement.
        */
        function progress(config) {
            return new Html.Elements.ProgressElement(config);
        }
        Html.progress = progress;
        //#endregion progress
        //#region q
        /**
        * The HTML <q> Element (or HTML Quote Element) indicates that the enclosed text is a short inline quotation. This element is intended for short quotations that don't require paragraph breaks; for long quotations use <blockquote> element [MDN].
        * @param [config] The configuration for the QuoteElement.
        * @returns a new QuoteElement.
        */
        function q(config) {
            return new Html.Elements.QuoteElement(config);
        }
        Html.q = q;
        //#endregion q
        //#region html
        /**
        * The HTML <html> Element (or HTML root element) represents the root of an HTML or XHTML document. All other elements must be descendants of this element [MDN].
        * @param [config] The configuration for the RootElement.
        * @returns a new RootElement.
        */
        function html(config) {
            return new Html.Elements.RootElement(config);
        }
        Html.html = html;
        //#endregion html
        //#region ruby
        /**
        * The HTML <ruby> Element represents a ruby annotation. Ruby annotations are for showing pronounciation of East Asian characters [MDN].
        * @param [config] The configuration for the RubyElement.
        * @returns a new RubyElement.
        */
        function ruby(config) {
            return new Html.Elements.RubyElement(config);
        }
        Html.ruby = ruby;
        //#endregion ruby
        //#region rp
        /**
        * The HTML <rp> element is used to provide fall-back parenthesis for browsers non-supporting ruby annotations. Ruby annotations are for showing pronounciation of East Asian characters, like using Japanese furigana or Taiwainese bopomofo characters. The <rp> element is used in the case of lack of <ruby> element support its content has what should be displayed in order to indicate the presence of a ruby annotation, usually parentheses [MDN].
        * @param [config] The configuration for the RubyParenthesisElement.
        * @returns a new RubyParenthesisElement.
        */
        function rp(config) {
            return new Html.Elements.RubyParenthesisElement(config);
        }
        Html.rp = rp;
        //#endregion rp
        //#region rt
        /**
        * The HTML <rt> Element embraces pronunciation of character presented in a ruby annotations, which are for showing pronunciation of East Asian characters and the <rt> element is used inside of <ruby> element [MDN].
        * @param [config] The configuration for the RubyPronunciationElement.
        * @returns a new RubyPronunciationElement.
        */
        function rt(config) {
            return new Html.Elements.RubyPronunciationElement(config);
        }
        Html.rt = rt;
        //#endregion rt
        //#region samp
        /**
        * The HTML <samp> element is an inline element intended to identify sample output from a computer program. It is usually displayed in the browser's default monotype font (such as Lucida Console) [MDN].
        * @param [config] The configuration for the SampleElement.
        * @returns a new SampleElement.
        */
        function samp(config) {
            return new Html.Elements.SampleElement(config);
        }
        Html.samp = samp;
        //#endregion samp
        //#region script
        /**
        * The HTML <script> element is used to embed or reference an executable script within an HTML or XHTML document [MDN].
        * @param [config] The configuration for the ScriptElement.
        * @returns a new ScriptElement.
        */
        function script(config) {
            return new Html.Elements.ScriptElement(config);
        }
        Html.script = script;
        //#endregion script
        //#region section
        /**
        * The HTML Section Element (<section>) represents a generic section of a document, i.e., a thematic grouping of content, typically with a heading [MDN].
        * @param [config] The configuration for the SectionElement.
        * @returns a new SectionElement.
        */
        function section(config) {
            return new Html.Elements.SectionElement(config);
        }
        Html.section = section;
        //#endregion section
        //#region select
        /**
        * The HTML select (<select>) element represents a control that presents menu of options. The options within the menu are represented by <option> elements, which can be grouped by <optgroup> elements. Options can be pre-selected for the user [MDN].
        * @param [config] The configuration for the SelectElement.
        * @returns a new SelectElement.
        */
        function select(config) {
            return new Html.Elements.SelectElement(config);
        }
        Html.select = select;
        //#endregion select
        //#region small
        /**
        * The HTML Small Element (<small>) makes the text font size one size smaller (for example, from large to medium, or from small to x-small) down to the browser's minimum font size.  In HTML5, this element is repurposed to represent side-comments and small print, including copyright and legal text, independent of its styled presentation [MDN].
        * @param [config] The configuration for the SmallElement.
        * @returns a new SmallElement.
        */
        function small(config) {
            return new Html.Elements.SmallElement(config);
        }
        Html.small = small;
        //#endregion small
        //#region source
        /**
        * The source element is used to specify multiple media resources for audio and video elements in HTML5. It is an empty element. It is commonly used to serve the same media in multiple formats supported by different browsers [MDN].
        * @param [config] The configuration for the SourceElement.
        * @returns a new SourceElement.
        */
        function source(config) {
            return new Html.Elements.SourceElement(config);
        }
        Html.source = source;
        //#endregion source
        //#region span
        /**
        * The HTML <span> element is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element is appropriate. <span> is very much like a <div> element, but <div> is a block-level element whereas a <span> is an inline element [MDN].
        * @param [config] The configuration for the SpanElement.
        * @returns a new SpanElement.
        */
        function span(config) {
            return new Html.Elements.SpanElement(config);
        }
        Html.span = span;
        //#endregion span
        //#region s
        /**
        * The HTML Strikethrough Element (<s>) renders text with a strikethrough, or a line through it. Use the <s> element to represent things that are no longer relevant or no longer accurate. However, <s> is not appropriate when indicating document edits; for that, use the <del> and <ins> elements, as appropriate [MDN].
        * @param [config] The configuration for the StrikethroughElement.
        * @returns a new StrikethroughElement.
        */
        function s(config) {
            return new Html.Elements.StrikethroughElement(config);
        }
        Html.s = s;
        //#endregion s
        //#region strong
        /**
        * The HTML Strong Element (<strong>) gives text strong importance, and is typically displayed in bold [MDN].
        * @param [config] The configuration for the StrongElement.
        * @returns a new StrongElement.
        */
        function strong(config) {
            return new Html.Elements.StrongElement(config);
        }
        Html.strong = strong;
        //#endregion strong
        //#region style
        /**
        * The HTML <style> element contains style information for a document, or a part of document. The specific style information is contained inside of this element, usually in the CSS [MDN].
        * @param [config] The configuration for the StyleElement.
        * @returns a new StyleElement.
        */
        function style(config) {
            return new Html.Elements.StyleElement(config);
        }
        Html.style = style;
        //#endregion style
        //#region sub
        /**
        * The HTML Subscript Element (<sub>) defines a span of text that should be displayed, for typographic reasons, lower, and often smaller, than the main span of text [MDN].
        * @param [config] The configuration for the SubscriptElement.
        * @returns a new SubscriptElement.
        */
        function sub(config) {
            return new Html.Elements.SubscriptElement(config);
        }
        Html.sub = sub;
        //#endregion sub
        //#region summary
        /**
        * The HTML summary element (<summary>) is used as a summary, caption or legend for the content of a <details> element [MDN].
        * @param [config] The configuration for the SummaryElement.
        * @returns a new SummaryElement.
        */
        function summary(config) {
            return new Html.Elements.SummaryElement(config);
        }
        Html.summary = summary;
        //#endregion summary
        //#region sup
        /**
        * The HTML Superscript Element (<sup>) defines a span of text that should be displayed, for typographic reasons, higher, and often smaller, than the main span of text [MDN].
        * @param [config] The configuration for the SuperscriptElement.
        * @returns a new SuperscriptElement.
        */
        function sup(config) {
            return new Html.Elements.SuperscriptElement(config);
        }
        Html.sup = sup;
        //#endregion sup
        //#region table
        /**
        * The HTML Table Element (<table>) represents data in two dimensions or more [MDN].
        * @param [config] The configuration for the TableElement.
        * @returns a new TableElement.
        */
        function table(config) {
            return new Html.Elements.TableElement(config);
        }
        Html.table = table;
        //#endregion table
        //#region caption
        /**
        * The HTML <caption> Element (or HTML Table Caption Element) represents the title of a table. Though it is always the first descendant of a <table>, its styling, using CSS, may place it elsewhere, relative to the table [MDN].
        * @param [config] The configuration for the TableCaptionElement.
        * @returns a new TableCaptionElement.
        */
        function caption(config) {
            return new Html.Elements.TableCaptionElement(config);
        }
        Html.caption = caption;
        //#endregion caption
        //#region col
        /**
        * The HTML <col> Element (or HTML Table Column Element) defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a <colgroup> element [MDN].
        * @param [config] The configuration for the TableColumnElement.
        * @returns a new TableColumnElement.
        */
        function col(config) {
            return new Html.Elements.TableColumnElement(config);
        }
        Html.col = col;
        //#endregion col
        //#region colgroup
        /**
        * The HTML <colgroup> Element (or HTML Table Column Group Element) defines a group of columns within a table [MDN].
        * @param [config] The configuration for the TableColumnGroupElement.
        * @returns a new TableColumnGroupElement.
        */
        function colgroup(config) {
            return new Html.Elements.TableColumnGroupElement(config);
        }
        Html.colgroup = colgroup;
        //#endregion colgroup
        //#region td
        /**
        * The Table cell HTML element (<td>) defines a cell of a table that contains data. It participates in the table model [MDN].
        * @param [config] The configuration for the TableDataCellElement.
        * @returns a new TableDataCellElement.
        */
        function td(config) {
            return new Html.Elements.TableDataCellElement(config);
        }
        Html.td = td;
        //#endregion td
        //#region th
        /**
        * The HTML Table Header Cell Element (<th>) defines a cell that is a header for a group of cells of a table. The group of cells that the header refers to is defined by the scope and headers attribute [MDN].
        * @param [config] The configuration for the TableHeaderCellElement.
        * @returns a new TableHeaderCellElement.
        */
        function th(config) {
            return new Html.Elements.TableHeaderCellElement(config);
        }
        Html.th = th;
        //#endregion th
        //#region tr
        /**
        * The HTML Table Row Element (<tr>) defines a row of cells in a table. Those can be a mix of <td> and <th> elements [MDN].
        * @param [config] The configuration for the TableRowElement.
        * @returns a new TableRowElement.
        */
        function tr(config) {
            return new Html.Elements.TableRowElement(config);
        }
        Html.tr = tr;
        //#endregion tr
        //#region textarea
        /**
        * The HTML <textarea> element represents a multi-line plain-text editing control [MDN].
        * @param [config] The configuration for the TextAreaElement.
        * @returns a new TextAreaElement.
        */
        function textarea(config) {
            return new Html.Elements.TextAreaElement(config);
        }
        Html.textarea = textarea;
        //#endregion textarea
        //#region title
        /**
        * The HTML Title Element (<title>) defines the title of the document, shown in a browser's title bar or on the page's tab. It can only contain text and any contained tags are not interpreted [MDN].
        * @param [config] The configuration for the TitleElement.
        * @returns a new TitleElement.
        */
        function title(config) {
            return new Html.Elements.TitleElement(config);
        }
        Html.title = title;
        //#endregion title
        //#region track
        /**
        * The track element is used as a child of the media elementsâ€”<audio> and <video>â€”and does not represent anything on its own. It lets you specify timed text tracks (or time-based data) [MDN].
        * @param [config] The configuration for the TrackElement.
        * @returns a new TrackElement.
        */
        function track(config) {
            return new Html.Elements.TrackElement(config);
        }
        Html.track = track;
        //#endregion track
        //#region u
        /**
        * The HTML Underline Element (<u>) renders text with an underline, a line under the baseline of its content [MDN].
        * @param [config] The configuration for the UnderlineElement.
        * @returns a new UnderlineElement.
        */
        function u(config) {
            return new Html.Elements.UnderlineElement(config);
        }
        Html.u = u;
        //#endregion u
        //#region ul
        /**
        * The HTML unordered list element (<ul>) represents an unordered list of items, namely a collection of items that do not have a numerical ordering, and their order in the list is meaningless. Typically, unordered-list items are displayed with a bullet, which can be of several forms, like a dot, a circle or a squared. The bullet style is not defined in the HTML description of the page, but in its associated CSS, using the list-style-type property [MDN].
        * @param [config] The configuration for the UnorderedListElement.
        * @returns a new UnorderedListElement.
        */
        function ul(config) {
            return new Html.Elements.UnorderedListElement(config);
        }
        Html.ul = ul;
        //#endregion ul
        //#region variable
        /**
        * The HTML Variable Element (<var>) represents a variable in a mathematical expression or a programming context [MDN].
        * @param [config] The configuration for the VariableElement.
        * @returns a new VariableElement.
        */
        function variable(config) {
            return new Html.Elements.VariableElement(config);
        }
        Html.variable = variable;
        //#endregion variable
        //#region video
        /**
        * The HTML <video> element is used to embed video content in an HTML or XHTML document [MDN].
        * @param [config] The configuration for the VideoElement.
        * @returns a new VideoElement.
        */
        function video(config) {
            return new Html.Elements.VideoElement(config);
        }
        Html.video = video;
        //#endregion video
        //#region wbr
        /**
        * The Word Break Opportunity (<wbr>) HTML element represents a position within text where the browser may optionally break a line, though its line-breaking rules would not otherwise create a break at that location [MDN].
        * @param [config] The configuration for the WordBreakOpportunityElement.
        * @returns a new WordBreakOpportunityElement.
        */
        function wbr(config) {
            return new Html.Elements.WordBreakOpportunityElement(config);
        }
        Html.wbr = wbr;
    })(Html = Classical.Html || (Classical.Html = {}));
})(Classical || (Classical = {}));
//#endregion Factory Methods
//#region Utilities
var Classical;
(function (Classical) {
    var Html;
    (function (Html) {
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
        Html.HtmlElementEvent = HtmlElementEvent;
    })(Html = Classical.Html || (Classical.Html = {}));
})(Classical || (Classical = {}));
//#endregion Utilities
//# sourceMappingURL=Html.js.map