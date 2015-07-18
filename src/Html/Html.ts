 

//#region Enums

module Classical.Html {

    //#region Import

    import b = Classical.Binding;
    import bc = Classical.Binding.Collections;

    //#endregion Import

	/**
	* Property values for a.target
	*/
	export class AnchorTarget {

		//#region Static Members

		/**
		* Value: '_self'
		* Load the response into the same HTML4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified [MDN].
		*/
		static self = '_self';

		/**
		* Value: '_blank'
		* Load the response into a new unnamed HTML4 window or HTML5 browsing context [MDN].
		*/
		static blank = '_blank';

		/**
		* Value: '_parent'
		* _parent: Load the response into the HTML4 frameset parent of the current frame or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as _self [MDN].
		*/
		static parent = '_parent';

		/**
		* Value: '_top'
		* In HTML4: Load the response into the full, original window, canceling all other frames. In HTML5: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as _self [MDN].
		*/
		static top = '_top';

		//#endregion Static Members
	}

	/**
	* Property values for area.target
	*/
	export class AreaTarget {

		//#region Static Members

		/**
		* Value: '_self'
		* Load the response into the same HTML4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified [MDN].
		*/
		static self = '_self';

		/**
		* Value: '_blank'
		* Load the response into a new unnamed HTML4 window or HTML5 browsing context [MDN].
		*/
		static blank = '_blank';

		/**
		* Value: '_parent'
		* Load the response into the HMTL4 frameset parent of the current frame or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as _self [MDN].
		*/
		static parent = '_parent';

		/**
		* Value: '_top'
		* In HTML4: Load the response into the full, original window, canceling all other frames. In HTML5: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as _self [MDN].
		*/
		static top = '_top';

		//#endregion Static Members
	}

	/**
	* Property values for audio.preload
	*/
	export class AudioPreload {

		//#region Static Members

		/**
		* Value: 'none'
		* Hints that either the author thinks that the user won't need to consult that audio or that the server wants to minimize its traffic; in others terms this hint indicates that the audio should not be cached; [MDN].
		*/
		static none = 'none';

		/**
		* Value: 'metadata'
		* Hints that though the author thinks that the user won't need to consult that audio, fetching the metadata (e.g. length) is reasonable; [MDN].
		*/
		static metadata = 'metadata';

		/**
		* Value: 'auto'
		* Hints that the user needs have priority; in others terms this hint indicated that, if needed, the whole audio could be downloaded, even if the user is not expected to use it; [MDN].
		*/
		static auto = 'auto';

		//#endregion Static Members
	}

	/**
	* Property values for base.target
	*/
	export class BaseTarget {

		//#region Static Members

		/**
		* Value: '_self'
		* Load the result into the same HTML4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified [MDN].
		*/
		static self = '_self';

		/**
		* Value: '_blank'
		* Load the result into a new unnamed HTML4 window or HTML5 browsing context [MDN].
		*/
		static blank = '_blank';

		/**
		* Value: '_parent'
		* Load the result into the HTML4 frameset parent of the current frame or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as _self [MDN].
		*/
		static parent = '_parent';

		/**
		* Value: '_top'
		* In HTML4: Load the result into the full, original window, canceling all other frames. In HTML5: Load the result into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as _self [MDN].
		*/
		static top = '_top';

		//#endregion Static Members
	}

	/**
	* Property values for button.type
	*/
	export class ButtonType {

		//#region Static Members

		/**
		* Value: 'submit'
		* The button submits the form data to the server. This is the default if the attribute is not specified, or if the attribute is dynamically changed to an empty or invalid value [MDN].
		*/
		static submit = 'submit';

		/**
		* Value: 'reset'
		* The button resets all the controls to their initial values [MDN].
		*/
		static reset = 'reset';

		/**
		* Value: 'button'
		* The button has no default behavior. It can have client-side scripts associated with the element's events, which are triggered when the events occur [MDN].
		*/
		static button = 'button';

		//#endregion Static Members
	}

	/**
	* Property values for form.autocomplete
	*/
	export class FormAutoComplete {

		//#region Static Members

		/**
		* Value: 'off'
		* The user must explicitly enter a value into each field for every use, or the document provides its own auto-completion method; the browser does not automatically complete entries [MDN].
		*/
		static off = 'off';

		/**
		* Value: 'on'
		* The browser can automatically complete values based on values that the user has entered during previous uses of the form [MDN].
		*/
		static on = 'on';

		//#endregion Static Members
	}

	/**
	* Property values for form.enctype
	*/
	export class FormEncodingType {

		//#region Static Members

		/**
		* Value: 'application/x-www-form-urlencoded'
		* The default value if the attribute is not specified [MDN].
		*/
		static applicationFormUrlEncoded = 'application/x-www-form-urlencoded';

		/**
		* Value: 'multipart/form-data'
		* Use this value if you are using an <input> element with the type attribute set to "file" [MDN].
		*/
		static multipartFormData = 'multipart/form-data';

		/**
		* Value: 'text/plain'
		* Use this value for plain text [MDN].
		*/
		static plainText = 'text/plain';

		//#endregion Static Members
	}

	/**
	* Property values for form.method
	*/
	export class FormMethod {

		//#region Static Members

		/**
		* Value: 'post'
		* Corresponds to the HTTP POST method ; the data from the form is included in the body of the form and is sent to the server [MDN].
		*/
		static post = 'post';

		/**
		* Value: 'get'
		* Corresponds to the HTTP GET method; the data from the form are appended to the action attribute URI, with a '?' as a separator, and the resulting URI is sent to the server. Use this method when the form has no side-effects and contains only ASCII characters [MDN].
		*/
		static get = 'get';

		//#endregion Static Members
	}

	/**
	* Property values for form.target
	*/
	export class FormTarget {

		//#region Static Members

		/**
		* Value: '_self'
		* Load the response into the same HTML 4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified [MDN].
		*/
		static self = '_self';

		/**
		* Value: '_blank'
		* Load the response into a new unnamed HTML 4 window or HTML5 browsing context [MDN].
		*/
		static blank = '_blank';

		/**
		* Value: '_parent'
		* Load the response into the HTML 4 frameset parent of the current frame or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as _self [MDN].
		*/
		static parent = '_parent';

		/**
		* Value: '_top'
		* HTML 4: Load the response into the full, original window, canceling all other frames. HTML5: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as _self [MDN].
		*/
		static top = '_top';

		//#endregion Static Members
	}

	/**
	* Property values for HtmlElement.direction.
	*/
	export class GlobalDirection {

		//#region Static Members

		/**
		* Value: 'ltr'.
		* Means left to right and is to be used for languages that are written from the left to the right (like English) [MDN].
		*/
		static leftToRight = 'ltr';

		/**
		* Value: 'rtl'.
		* Means right to left and is to be used for languages that are written from the right to the left (like Arabic) [MDN].
		*/
		static rightToLeft = 'rtl';

		/**
		* Value: 'auto'.
		* Lets the user agent decides. It uses a basic algorithm as it parses the characters inside the element until it finds a character with a strong directionality, then apply that directionality to the whole element [MDN].
		*/
		static auto = 'auto';

		//#endregion Static Members
	}

	/**
	* Property values for HtmlElement.dropZone.
	*/
	export class GlobalDropZone {

		//#region Static Members

		/**
		* Value: 'copy'.
		* Indicates that dropping will create a copy of the element that was dragged [MDN].
		*/
		static copy = 'copy';

		/**
		* Value: 'move'.
		* Indicates that the element that was dragged will be moved to this new location [MDN].
		*/
		static move = 'move';

		/**
		* Value: 'link'.
		* Creates a link to the dragged data. [MDN].
		*/
		static link = 'link';

		//#endregion Static Members
	}

	/**
	* Property values for iframe.sandbox
	*/
	export class InlineFrameSandbox {

		//#region Static Members

		/**
		* Value: 'allow-same-origin'
		* Allows the content to be treated as being from its normal origin. If this keyword is not used, the embedded content is treated as being from a unique origin [MDN].
		*/
		static allowSameOrigin = 'allow-same-origin';

		/**
		* Value: 'allow-top-navigation'
		* Allows the embedded browsing context to navigate (load) content to the top-level browsing context. If this keyword is not used, this operation is not allowed [MDN].
		*/
		static allowTopNavigation = 'allow-top-navigation';

		/**
		* Value: 'allow-forms'
		* Allows the embedded browsing context to submit forms. If this keyword is not used, this operation is not allowed [MDN].
		*/
		static allowForms = 'allow-forms';

		/**
		* Value: 'allow-scripts'
		* Allows the embedded browsing context to run scripts (but not create pop-up windows). If this keyword is not used, this operation is not allowed [MDN].
		*/
		static allowScripts = 'allow-scripts';

		//#endregion Static Members
	}

	/**
	* Property values for iframe.scrolling
	*/
	export class InlineFrameScrolling {

		//#region Static Members

		/**
		* Value: 'auto'
		* Only when needed [MDN].
		*/
		static auto = 'auto';

		/**
		* Value: 'yes'
		* Always provide a scroll bar [MDN].
		*/
		static yes = 'yes';

		/**
		* Value: 'no'
		* Never provide a scoll bar [MDN].
		*/
		static no = 'no';

		//#endregion Static Members
	}

	/**
	* Property values for input.accept
	*/
	export class InputAccept {

		//#region Static Members

		/**
		* Value: 'audio/*'
		* audio/* representing sound files HTML5 [MDN].
		*/
		static audio = 'audio/*';

		/**
		* Value: 'video/*'
		* video/* representing video files HTML5 [MDN].
		*/
		static video = 'video/*';

		/**
		* Value: 'image/*'
		* image/* representing image files HTML5 [MDN].
		*/
		static image = 'image/*';

		//#endregion Static Members
	}

	/**
	* Property values for input.autocomplete
	*/
	export class InputAutoComplete {

		//#region Static Members

		/**
		* Value: 'off'
		* The user must explicitly enter a value into this field for every use, or the document provides its own auto-completion method; the browser does not automatically complete the entry [MDN].
		*/
		static off = 'off';

		/**
		* Value: 'on'
		* The browser can automatically complete the value based on values that the user has entered during previous uses [MDN].
		*/
		static on = 'on';

		//#endregion Static Members
	}

	/**
	* Property values for input.type
	*/
	export class InputType {

		//#region Static Members

		/**
		* Value: 'button'
		* A push button with no default behavior [MDN].
		*/
		static button = 'button';

		/**
		* Value: 'checkbox'
		* A check box. You must use the value attribute to define the value submitted by this item. Use the checked attribute to indicate whether this item is selected. You can also use the indeterminate attribute to indicate that the checkbox is in an indeterminate state (on most platforms, this draws a horizontal line across the checkbox) [MDN].
		*/
		static checkbox = 'checkbox';

		/**
		* Value: 'color'
		* HTML5 A control for specifying a color [MDN].
		*/
		static color = 'color';

		/**
		* Value: 'email'
		* HTML5 A field for editing an e-mail address. The :valid and :invalid CSS pseudo-classes are applied as appropriate [MDN].
		*/
		static email = 'email';

		/**
		* Value: 'hidden'
		* A control that is not displayed, but whose value is submitted to the server [MDN].
		*/
		static hidden = 'hidden';

		/**
		* Value: 'image'
		* A graphical submit button. You must use the src attribute to define the source of the image and the alt attribute to define alternative text. You can use the height and width attributes to define the size of the image in pixels [MDN].
		*/
		static image = 'image';

		/**
		* Value: 'number'
		* HTML5 A control for entering a floating point number [MDN].
		*/
		static number = 'number';

		/**
		* Value: 'password'
		* A single-line text field whose value is obscured. Use the maxlength attribute to specify the maximum length of the value that can be entered [MDN].
		*/
		static password = 'password';

		/**
		* Value: 'radio'
		* A radio button. You must use the value attribute to define the value submitted by this item. Use the checked attribute to indicate whether this item is selected by default. Radio buttons that have the same value for the name attribute are in the same "radio button group"; only one radio button in a group can be selected at one time [MDN].
		*/
		static radio = 'radio';

		/**
		* Value: 'range'
		* HTML5 A control for entering a number whose exact value is not important. This type control uses the following default values if the corresponding attributes are not specified:
		* min: 0
		* max: 100
		* value: min + (max-min)/2, or min if max is less than min
		* step: 1 [MDN].
		*/
		static range = 'range';

		/**
		* Value: 'reset'
		* A button that resets the contents of the form to default values [MDN].
		*/
		static reset = 'reset';

		/**
		* Value: 'search'
		* HTML5 A single-line text field for entering search strings; line-breaks are automatically removed from the input value [MDN].
		*/
		static search = 'search';

		/**
		* Value: 'submit'
		* A button that submits the form [MDN].
		*/
		static submit = 'submit';

		/**
		* Value: 'tel'
		* HTML5 A control for entering a telephone number; line-breaks are automatically removed from the input value, but no other syntax is enforced. You can use attributes such as pattern and maxlength to restrict values entered in the control. The :valid and :invalid CSS pseudo-classes are applied as appropriate [MDN].
		*/
		static tel = 'tel';

		/**
		* Value: 'text'
		* A single-line text field; line-breaks are automatically removed from the input value [MDN].
		*/
		static text = 'text';

		/**
		* Value: 'url'
		* HTML5 A field for editing a URL. The user may enter a blank or invalid address. Line-breaks are automatically removed from the input value. You can use attributes such as pattern and maxlength to restrict values entered in the control. The :valid and :invalid CSS pseudo-classes are applied as appropriate [MDN].
		*/
		static url = 'url';

		//#endregion Static Members
	}

	/**
	* Property values for li.type
	*/
	export class ListItemType {

		//#region Static Members

		/**
		* Value: 'a'
		* Lowercase letters [MDN].
		*/
		static lowercase = 'a';

		/**
		* Value: 'A'
		* Uppercase letters [MDN].
		*/
		static uppercase = 'A';

		/**
		* Value: 'i'
		* Lowercase Roman numerals [MDN].
		*/
		static lowercaseRomanNumerals = 'i';

		/**
		* Value: 'I'
		* Uppercase Roman numerals [MDN].
		*/
		static uppercaseRomanNumerals = 'I';

		/**
		* Value: '1'
		* Numbers [MDN].
		*/
		static numbers = '1';

		//#endregion Static Members
	}

	/**
	* Used to indicate the kind of menu being declared [MDN].
	*/
	export class MenuType {

		//#region Static Members

		/**
		* Value: 'context'
		* the commands of a context menu; the user can only interact with the commands if that context menu is activated [MDN].
		*/
		static context = 'context';

		/**
		* Value: 'toolbar'
		* a list of active commands that the user can immediately interact with [MDN].
		*/
		static toolbar = 'toolbar';

		/**
		* Value: 'list'
		* an unordered list of items (each represented by an <li> element), each of which represents a command that the user can perform or activate, or, if the element has no li element children, flow content describing available commands [MDN].
		*/
		static list = 'list';

		//#endregion Static Members
	}

	/**
	* 
	*/
	export class MetaHttpEquiv {

		//#region Static Members

		/**
		* Value: 'command'
		* This pragma specifies the preferred stylesheet to be used on the page. 
		* The content attribute must contains the id of a <link> element whose href attribute links to a CSS stylesheet, or the id of a <style> element which contains a CSS stylesheet [MDN].
		*/
		static defaultStyle = 'default-style';

		/**
		* Value: 'refresh'
		* This pragma specifies: 
		* the number of seconds until the page should be reloaded, if the content attribute contains only a positive integer number; 
		* the number of seconds until the page should be redirected to another, if the content attribute contains a positive integer number followed by the string ';url=' and a valid URL [MDN].
		*/
		static refresh = 'refresh';

		//#endregion Static Members
	}

	/**
	* Property values for meta.name
	*/
	export class MetaName {

		//#region Static Members

		/**
		* Value: 'application-name'
		* application-name, defining the name of the web application running in the webpage;
		* 
		* Note:
		* Browsers may use this to identify the application. It is different from the <title> element, which usually consist of the application name but may also contain specific information like the document name or a status;
		* Simple webpages shouldn't define the application-name meta [MDN].
		*/
		static applicationName = 'application-name';

		/**
		* Value: 'author'
		* author, defining, in a free format, the name of the author of the document; [MDN].
		*/
		static author = 'author';

		/**
		* Value: 'description'
		* description, containing a short and accurate summary of the content of the page. Several browsers, among them Firefox and Opera, use this meta as the default description of the page when bookmarked; [MDN].
		*/
		static description = 'description';

		/**
		* Value: 'generator'
		* generator, containing, in a free format, the identifier to the software that generated the page; [MDN].
		*/
		static generator = 'generator';

		/**
		* Value: 'keywords'
		* keywords, containing, as strings separated by commas, relevant words associated with the content of the page [MDN].
		*/
		static keywords = 'keywords';

		//#endregion Static Members
	}

	/**
	* Property values for textarea.wrap
	*/
	export class TextAreaWrap {

		//#region Static Members

		/**
		* Value: 'cols'
		* hard: The browser automatically inserts line breaks (CR+LF) so that each line has no more than the width of the control; the cols attribute must be specified [MDN].
		*/
		static cols = 'cols';

		//#endregion Static Members
	}

	/**
	* Property values for track.kind
	*/
	export class TrackKind {

		//#region Static Members

		/**
		* Value: 'subtitles'
		* Subtitles provide translation of content that cannot be understood by the viewer. For example dialogue or text that is not English in an English language film.
		* Subtitles may contain additional content, usually extra background information. For example the text at the beginning of the Star Wars films, or the date, time, and location of a scene [MDN].
		*/
		static subtitles = 'subtitles';

		/**
		* Value: 'captions'
		* Closed captions provide a transcription and possibly a translation of audio.
		* It may include important non-verbal information such as music cues or sound effects. It may indicate the cue's source (e.g. music, text, character).
		* Suitable for users who are deaf or when the sound is muted [MDN].
		*/
		static captions = 'captions';

		/**
		* Value: 'descriptions'
		* Textual description of the video content.
		* Suitable for users who are blind or where the video cannot be seen [MDN].
		*/
		static descriptions = 'descriptions';

		/**
		* Value: 'chapters'
		* Chapter titles are intended to be used when the user is navigating the media resource [MDN].
		*/
		static chapters = 'chapters';

		/**
		* Value: 'metadata'
		* Tracks used by scripts. Not visible to the user [MDN].
		*/
		static metadata = 'metadata';

		//#endregion Static Members
	}

	/**
	* Property values for ul.type
	*/
	export class UnorderedListType {

		//#region Static Members

		/**
		* Value: 'circle'
		* circle, [MDN].
		*/
		static circle = 'circle';

		/**
		* Value: 'disc'
		* disc, [MDN].
		*/
		static disc = 'disc';

		/**
		* Value: 'square'
		* and square [MDN].
		*/
		static square = 'square';

		//#endregion Static Members
	}

	/**
	* Property values for ul.type
	*/
	export class VideoPreload {

		//#region Static Members

		/**
		* Value: 'none'
		* none, [MDN].
		*/
		static none = 'none';

		/**
		* Value: 'metadata'
		* metadata, [MDN].
		*/
		static metadata = 'metadata';

		/**
		* Value: 'auto'
		* auto [MDN].
		*/
		static auto = 'auto';

		//#endregion Static Members
	}

}

//#endregion Enums

//#region Interfaces

module Classical.Html {

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
}

//#endregion Interfaces

//#region Configs

module Classical.Html {

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
		/*
		* This attribute is a space-separated list of the classes of the element. Classes allows CSS and Javascript to select and access specific elements via the class selectors or functions like the DOM method document.getElementsByClassName [MDN].
		*/
		classes?: string;

		/*
		* This attribute is a space-separated list of the classes of the element. Classes allows CSS and Javascript to select and access specific elements via the class selectors or functions like the DOM method document.getElementsByClassName [MDN].
		*/
		classesBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* Html.GlobalDirection enumerates the values of this property.
		* This enumerated attribute indicates the directionality of the element's text. It can have the following values: ltr, rtl, auto [MDN].
		*/
		direction?: string;

		/*
		* Html.GlobalDirection enumerates the values of this property.
		* This enumerated attribute indicates the directionality of the element's text. It can have the following values: ltr, rtl, auto [MDN].
		*/
		directionBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* This enumerated attribute indicates whether the element can be dragged, using the Drag and Drop API. The attribute must take a boolean value of either true or false [MDN].
		*/
		draggable?: boolean;

		/*
		* This enumerated attribute indicates whether the element can be dragged, using the Drag and Drop API. The attribute must take a boolean value of either true or false [MDN].
		*/
		draggableBinder?: b.IBinder<b.PropertyUpdate<boolean>>;

		/*
		* This Boolean attribute indicates that the element is not yet, or is no longer, relevant. For example, it can be used to hide elements of the page that can't be used until the login process has been completed. The browser won't render such elements [MDN].
		*/
		hidden?: boolean;

		/*
		* This Boolean attribute indicates that the element is not yet, or is no longer, relevant. For example, it can be used to hide elements of the page that can't be used until the login process has been completed. The browser won't render such elements [MDN].
		*/
		hiddenBinder?: b.IBinder<b.PropertyUpdate<boolean>>;

		/*
		* This attribute defines a unique identifier which must be unique to the entire document. Its purpose is to identify the element when linking, scripting, or styling [MDN].
		*/
		id?: string;

		/*
		* This attribute defines a unique identifier which must be unique to the entire document. Its purpose is to identify the element when linking, scripting, or styling [MDN].
		*/
		idBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* This attribute participates in defining the language of the element, the language that non-editable elements are written in or the language that editable elements should be written in. The tag contains one single entry value in the format defines in the Tags for Identifying Languages (BCP47) IETF document. If the tag content is the empty string the language is set to unknown; if the tag content is not valid, regarding to BCP47, it is set to invalid [MDN].
		*/
		language?: string;

		/*
		* This attribute participates in defining the language of the element, the language that non-editable elements are written in or the language that editable elements should be written in. The tag contains one single entry value in the format defines in the Tags for Identifying Languages (BCP47) IETF document. If the tag content is the empty string the language is set to unknown; if the tag content is not valid, regarding to BCP47, it is set to invalid [MDN].
		*/
		languageBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* This boolean attribute defines whether the element may be checked for spelling errors. It may have the following values [MDN].
		*/
		spellCheck?: boolean;

		/*
		* This boolean attribute defines whether the element may be checked for spelling errors. It may have the following values [MDN].
		*/
		spellCheckBinder?: b.IBinder<b.PropertyUpdate<boolean>>;

		/*
		* This attribute contains a text representing advisory information related to the element it belongs too. Such information can typically, but not necessarily, be presented to the user as a tooltip [MDN].
		*/
		title?: string;

		/*
		* This attribute contains a text representing advisory information related to the element it belongs too. Such information can typically, but not necessarily, be presented to the user as a tooltip [MDN].
		*/
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

    //#endregion IHtmlElementConfig

    //#region IHtmlElementContainerConfig

    export interface IHtmlElementContainerConfig extends IHtmlElementConfig {
        text?: string;
        textBinder?: b.IBinder<b.PropertyUpdate<string>>;
        child?: Elements.HtmlNode;
        children?: Elements.HtmlNode[];
        childrenBinder?: b.IBinder<bc.CollectionUpdate<Elements.HtmlNode>>;

//#region Properties

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

		//#endregion Properties
    }

    //#endregion IHtmlElementContainerConfig

	//#region IAbbreviationElementConfig

	export interface IAbbreviationElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion IAbbreviationElementConfig

	//#region IAddressElementConfig

	export interface IAddressElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion IAddressElementConfig

	//#region IAnchorElementConfig

	export interface IAnchorElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		/*
		* This is the single required attribute for anchors defining a hypertext source link. It indicates the link target, either a URL or a URL fragment. A URL fragment is a name preceded by a hash mark (#), which specifies an internal target location (an ID) within the current document. URLs are not restricted to Web (HTTP)-based documents. URLs might use any protocol supported by the browser. For example, file, ftp, and mailto work in most user agents.  
		* Note: You can use the special fragment "top" to create a link back to the top of the page; for example <a href="#top">Return to top</a>. This behavior is specified by HTML5 [MDN].
		*/
		href?: string;

		/*
		* This is the single required attribute for anchors defining a hypertext source link. It indicates the link target, either a URL or a URL fragment. A URL fragment is a name preceded by a hash mark (#), which specifies an internal target location (an ID) within the current document. URLs are not restricted to Web (HTTP)-based documents. URLs might use any protocol supported by the browser. For example, file, ftp, and mailto work in most user agents.  
		* Note: You can use the special fragment "top" to create a link back to the top of the page; for example <a href="#top">Return to top</a>. This behavior is specified by HTML5 [MDN].
		*/
		hrefBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* This attribute indicates the language of the linked resource. It is purely advisory. Allowed values are determined by BCP47 for HTML5 and by RFC1766 for HTML4. Use this attribute only if the href attribute is present [MDN].
		*/
		hrefLanguage?: string;

		/*
		* This attribute indicates the language of the linked resource. It is purely advisory. Allowed values are determined by BCP47 for HTML5 and by RFC1766 for HTML4. Use this attribute only if the href attribute is present [MDN].
		*/
		hrefLanguageBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* For anchors containing the href attribute, this attribute specifies the relationship of the target object to the link object. The value is a space-separated list of relationship values. The values and their semantics will be registered by some authority that might have meaning to the document author. The default relationship, if no other is given, is void. Use this attribute only if the href attribute is present [MDN].
		*/
		relationship?: string;

		/*
		* For anchors containing the href attribute, this attribute specifies the relationship of the target object to the link object. The value is a space-separated list of relationship values. The values and their semantics will be registered by some authority that might have meaning to the document author. The default relationship, if no other is given, is void. Use this attribute only if the href attribute is present [MDN].
		*/
		relationshipBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* Html.AnchorTarget enumerates the values of this property.
		* This attribute specifies where to display the linked resource. In HTML4, this is the name of, or a keyword for, a frame. In HTML5, it is a name of, or keyword for, a browsing context (for example, tab, window, or inline frame). The following keywords have special meanings:  _self: Load the response into the same HTML4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified. _blank: Load the response into a new unnamed HTML4 window or HTML5 browsing context. _parent: Load the response into the HTML4 frameset parent of the current frame or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as _self. _top: In HTML4: Load the response into the full, original window, canceling all other frames. In HTML5: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as _self. Use this attribute only if the href attribute is present [MDN].
		*/
		target?: string;

		/*
		* Html.AnchorTarget enumerates the values of this property.
		* This attribute specifies where to display the linked resource. In HTML4, this is the name of, or a keyword for, a frame. In HTML5, it is a name of, or keyword for, a browsing context (for example, tab, window, or inline frame). The following keywords have special meanings:  _self: Load the response into the same HTML4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified. _blank: Load the response into a new unnamed HTML4 window or HTML5 browsing context. _parent: Load the response into the HTML4 frameset parent of the current frame or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as _self. _top: In HTML4: Load the response into the full, original window, canceling all other frames. In HTML5: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as _self. Use this attribute only if the href attribute is present [MDN].
		*/
		targetBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* This attribute specifies the media type in the form of a MIME type for the link target. Generally, this is provided strictly as advisory information; however, in the future a browser might add a small icon for multimedia types. For example, a browser might add a small speaker icon when type is set to audio/wav. For a complete list of recognized MIME types, see http://www.w3.org/TR/html4/references.html#ref-MIMETYPES. Use this attribute only if the href attribute is present [MDN].
		*/
		type?: string;

		/*
		* This attribute specifies the media type in the form of a MIME type for the link target. Generally, this is provided strictly as advisory information; however, in the future a browser might add a small icon for multimedia types. For example, a browser might add a small speaker icon when type is set to audio/wav. For a complete list of recognized MIME types, see http://www.w3.org/TR/html4/references.html#ref-MIMETYPES. Use this attribute only if the href attribute is present [MDN].
		*/
		typeBinder?: b.IBinder<b.PropertyUpdate<string>>;

		//#endregion Properties
	}

	//#endregion IAnchorElementConfig

	//#region IAreaElementConfig

	export interface IAreaElementConfig extends IHtmlElementConfig {

		//#region Properties

		/*
		* A text string alternative to display on browsers that do not display images. The text should be phrased so that it presents the user with the same kind of choice as the image would offer when displayed without the alternative text. In HTML4, this attribute is required, but may be the empty string (""). In HTML5, this attribute is required only if the href attribute is used [MDN].
		*/
		alternate?: string;

		/*
		* A text string alternative to display on browsers that do not display images. The text should be phrased so that it presents the user with the same kind of choice as the image would offer when displayed without the alternative text. In HTML4, this attribute is required, but may be the empty string (""). In HTML5, this attribute is required only if the href attribute is used [MDN].
		*/
		alternateBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* A set of values specifying the coordinates of the hot-spot region. The number and meaning of the values depend upon the value specified for the shape attribute. For a rect or rectangle shape, the coords value is two x,y pairs: left, top, right, and bottom. For a circle shape, the value is x,y,r where x,y is a pair specifying the center of the circle and r is a value for the radius. For a poly or polygon< shape, the value is a set of x,y pairs for each point in the polygon: x1,y1,x2,y2,x3,y3, and so on. In HTML4, the values are numbers of pixels or percentages, if a percent sign (%) is appended; in HTML5, the values are numbers of CSS pixels [MDN].
		*/
		coordinates?: string;

		/*
		* A set of values specifying the coordinates of the hot-spot region. The number and meaning of the values depend upon the value specified for the shape attribute. For a rect or rectangle shape, the coords value is two x,y pairs: left, top, right, and bottom. For a circle shape, the value is x,y,r where x,y is a pair specifying the center of the circle and r is a value for the radius. For a poly or polygon< shape, the value is a set of x,y pairs for each point in the polygon: x1,y1,x2,y2,x3,y3, and so on. In HTML4, the values are numbers of pixels or percentages, if a percent sign (%) is appended; in HTML5, the values are numbers of CSS pixels [MDN].
		*/
		coordinatesBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* The hyperlink target for the area. Its value is a valid URL. In HTML4, either this attribute or the nohref attribute must be present in the element. In HTML5, this attribute may be omitted; if so, the area element does not represent a hyperlink [MDN].
		*/
		href?: string;

		/*
		* The hyperlink target for the area. Its value is a valid URL. In HTML4, either this attribute or the nohref attribute must be present in the element. In HTML5, this attribute may be omitted; if so, the area element does not represent a hyperlink [MDN].
		*/
		hrefBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* The shape of the associated hot spot. The specifications for HTML 5 and HTML 4 define the values rect, which defines a rectangular region; circle, which defines a circular region; poly, which defines a polygon; and default, which indicates the entire region beyond any defined shapes. Many browsers, notably Internet Explorer 4 and higher, support circ, polygon, and rectangle as valid values for shape; these values are [MDN].
		*/
		shape?: string;

		/*
		* The shape of the associated hot spot. The specifications for HTML 5 and HTML 4 define the values rect, which defines a rectangular region; circle, which defines a circular region; poly, which defines a polygon; and default, which indicates the entire region beyond any defined shapes. Many browsers, notably Internet Explorer 4 and higher, support circ, polygon, and rectangle as valid values for shape; these values are [MDN].
		*/
		shapeBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* Html.AreaTarget enumerates the values of this property.
		* This attribute specifies where to display the linked resource. In HTML4, this is the name of, or a keyword for, a frame. In HTML5, it is a name of, or keyword for, a browsing context (for example, tab, window, or inline frame). The following keywords have special meanings:  _self: Load the response into the same HTML4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified. _blank: Load the response into a new unnamed HTML4 window or HTML5 browsing context. _parent: Load the response into the HMTL4 frameset parent of the current frame or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as _self. _top: In HTML4: Load the response into the full, original window, canceling all other frames. In HTML5: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as _self. Use this attribute only if the href attribute is present [MDN].
		*/
		target?: string;

		/*
		* Html.AreaTarget enumerates the values of this property.
		* This attribute specifies where to display the linked resource. In HTML4, this is the name of, or a keyword for, a frame. In HTML5, it is a name of, or keyword for, a browsing context (for example, tab, window, or inline frame). The following keywords have special meanings:  _self: Load the response into the same HTML4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified. _blank: Load the response into a new unnamed HTML4 window or HTML5 browsing context. _parent: Load the response into the HMTL4 frameset parent of the current frame or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as _self. _top: In HTML4: Load the response into the full, original window, canceling all other frames. In HTML5: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as _self. Use this attribute only if the href attribute is present [MDN].
		*/
		targetBinder?: b.IBinder<b.PropertyUpdate<string>>;

		//#endregion Properties
	}

	//#endregion IAreaElementConfig

	//#region IArticleElementConfig

	export interface IArticleElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion IArticleElementConfig

	//#region IAsideElementConfig

	export interface IAsideElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion IAsideElementConfig

	//#region IAudioElementConfig

	export interface IAudioElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		/*
		* A Boolean attribute; if specified (even if the value is "false"!), the audio will automatically begin to play back as soon as it can do so without stopping to finish loading the data [MDN].
		*/
		autoPlay?: boolean;

		/*
		* A Boolean attribute; if specified (even if the value is "false"!), the audio will automatically begin to play back as soon as it can do so without stopping to finish loading the data [MDN].
		*/
		autoPlayBinder?: b.IBinder<b.PropertyUpdate<boolean>>;

		/*
		* An attribute you can read to determine which time ranges of the media have been buffered. This attribute contains a TimeRanges object [MDN].
		*/
		buffered?: TimeRanges;

		/*
		* An attribute you can read to determine which time ranges of the media have been buffered. This attribute contains a TimeRanges object [MDN].
		*/
		bufferedBinder?: b.IBinder<b.PropertyUpdate<TimeRanges>>;

		/*
		* If this attribute is present, the browser will offer controls to allow the user to control audio playback, including volume, seeking, and pause/resume playback [MDN].
		*/
		controls?: boolean;

		/*
		* If this attribute is present, the browser will offer controls to allow the user to control audio playback, including volume, seeking, and pause/resume playback [MDN].
		*/
		controlsBinder?: b.IBinder<b.PropertyUpdate<boolean>>;

		/*
		* A Boolean attribute; if specified, we will, upon reaching the end of the audio, automatically seek back to the start [MDN].
		*/
		loop?: boolean;

		/*
		* A Boolean attribute; if specified, we will, upon reaching the end of the audio, automatically seek back to the start [MDN].
		*/
		loopBinder?: b.IBinder<b.PropertyUpdate<boolean>>;

		/*
		* A Boolean attribute which indicates whether the audio will be initially silenced. Its default value is false, meaning that the audio will be played [MDN].
		*/
		muted?: boolean;

		/*
		* A Boolean attribute which indicates whether the audio will be initially silenced. Its default value is false, meaning that the audio will be played [MDN].
		*/
		mutedBinder?: b.IBinder<b.PropertyUpdate<boolean>>;

		/*
		* A TimeRanges object indicating all the ranges of the audio that have been played [MDN].
		*/
		played?: TimeRanges;

		/*
		* A TimeRanges object indicating all the ranges of the audio that have been played [MDN].
		*/
		playedBinder?: b.IBinder<b.PropertyUpdate<TimeRanges>>;

		/*
		* Html.AudioPreload enumerates the values of this property.
		* This enumerated attribute is intended to provide a hint to the browser about what the author thinks will lead to the best user experience. It may have one of the following values:  none: hints that either the author thinks that the user won't need to consult that audio or that the server wants to minimize its traffic; in others terms this hint indicates that the audio should not be cached; metadata: hints that though the author thinks that the user won't need to consult that audio, fetching the metadata (e.g. length) is reasonable; auto: hints that the user needs have priority; in others terms this hint indicated that, if needed, the whole audio could be downloaded, even if the user is not expected to use it; the empty string: which is a synonym of the auto value. If not set, its default value is browser-defined (i.e. each browser can choose its own default value), though the spec advises it to be set to metadata.  Usage notes:  The autoplay attribute has precedence over this one as if one wants to automatically play a audio, the browser will obviously need to download it. Setting both the autoplay and the preload attributes is allowed by the specification. The browser is not forced by the specification to follow the value of this attribute; it is a mere hint [MDN].
		*/
		preload?: string;

		/*
		* Html.AudioPreload enumerates the values of this property.
		* This enumerated attribute is intended to provide a hint to the browser about what the author thinks will lead to the best user experience. It may have one of the following values:  none: hints that either the author thinks that the user won't need to consult that audio or that the server wants to minimize its traffic; in others terms this hint indicates that the audio should not be cached; metadata: hints that though the author thinks that the user won't need to consult that audio, fetching the metadata (e.g. length) is reasonable; auto: hints that the user needs have priority; in others terms this hint indicated that, if needed, the whole audio could be downloaded, even if the user is not expected to use it; the empty string: which is a synonym of the auto value. If not set, its default value is browser-defined (i.e. each browser can choose its own default value), though the spec advises it to be set to metadata.  Usage notes:  The autoplay attribute has precedence over this one as if one wants to automatically play a audio, the browser will obviously need to download it. Setting both the autoplay and the preload attributes is allowed by the specification. The browser is not forced by the specification to follow the value of this attribute; it is a mere hint [MDN].
		*/
		preloadBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* The URL of the audio to embed. This is subject to HTTP access controls. This is optional; you may instead use the <source> element within the audio block to specify the audio to embed [MDN].
		*/
		source?: string;

		/*
		* The URL of the audio to embed. This is subject to HTTP access controls. This is optional; you may instead use the <source> element within the audio block to specify the audio to embed [MDN].
		*/
		sourceBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* The playback volume of any audio portions, in the range 0.0 (silent) to 1.0 (loudest) [MDN].
		*/
		volume?: number;

		/*
		* The playback volume of any audio portions, in the range 0.0 (silent) to 1.0 (loudest) [MDN].
		*/
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

		//#endregion Properties
	}

	//#endregion IAudioElementConfig

	//#region IBaseElementConfig

	export interface IBaseElementConfig extends IHtmlElementConfig {

		//#region Properties

		/*
		* The base URL to be used throughout the document for relative URL addresses. If this attribute is specified, this element must come before any other elements with attributes whose values are URLs. Absolute and relative URIs are allowed (but see note section below) [MDN].
		*/
		href?: string;

		/*
		* The base URL to be used throughout the document for relative URL addresses. If this attribute is specified, this element must come before any other elements with attributes whose values are URLs. Absolute and relative URIs are allowed (but see note section below) [MDN].
		*/
		hrefBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* Html.BaseTarget enumerates the values of this property.
		* A name or keyword indicating the default location to display the result when hyperlinks or forms cause navigation, for elements that do not have an explicit target reference. In HTML4, this is the name of, or a keyword for, a frame. In HTML5, it is a name of, or keyword for, a browsing context (for example, tab, window, or inline frame). The following keywords have special meanings:  _self: Load the result into the same HTML4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified. _blank: Load the result into a new unnamed HTML4 window or HTML5 browsing context. _parent: Load the result into the HTML4 frameset parent of the current frame or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as _self. _top: In HTML4: Load the result into the full, original window, canceling all other frames. In HTML5: Load the result into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as _self [MDN].
		*/
		target?: string;

		/*
		* Html.BaseTarget enumerates the values of this property.
		* A name or keyword indicating the default location to display the result when hyperlinks or forms cause navigation, for elements that do not have an explicit target reference. In HTML4, this is the name of, or a keyword for, a frame. In HTML5, it is a name of, or keyword for, a browsing context (for example, tab, window, or inline frame). The following keywords have special meanings:  _self: Load the result into the same HTML4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified. _blank: Load the result into a new unnamed HTML4 window or HTML5 browsing context. _parent: Load the result into the HTML4 frameset parent of the current frame or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as _self. _top: In HTML4: Load the result into the full, original window, canceling all other frames. In HTML5: Load the result into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as _self [MDN].
		*/
		targetBinder?: b.IBinder<b.PropertyUpdate<string>>;

		//#endregion Properties
	}

	//#endregion IBaseElementConfig

	//#region IBidirectionalIsolationElementConfig

	export interface IBidirectionalIsolationElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion IBidirectionalIsolationElementConfig

	//#region IBidirectionalOverrideElementConfig

	export interface IBidirectionalOverrideElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion IBidirectionalOverrideElementConfig

	//#region IBlockQuotationElementConfig

	export interface IBlockQuotationElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		/*
		* A URL that designates a source document or message for the information quoted. This attribute is intended to point to information explaining the context or the reference for the quote [MDN].
		*/
		citation?: string;

		/*
		* A URL that designates a source document or message for the information quoted. This attribute is intended to point to information explaining the context or the reference for the quote [MDN].
		*/
		citationBinder?: b.IBinder<b.PropertyUpdate<string>>;

		//#endregion Properties
	}

	//#endregion IBlockQuotationElementConfig

	//#region IBodyElementConfig

	export interface IBodyElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		/**
		* The unloadEvent event is executed when the document or a dependent resource is being unloaded [MDN].
		* Specification: DOM L3
		* DOM Event Name: unload
		*/
		unloadHandler?: (element: Elements.BodyElement, info: UIEvent) => void;

		//#endregion Properties
	}

	//#endregion IBodyElementConfig

	//#region IBoldElementConfig

	export interface IBoldElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion IBoldElementConfig

	//#region IButtonElementConfig

	export interface IButtonElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		/*
		* This Boolean attribute lets you specify that the button should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form-associated element in a document can have this attribute specified [MDN].
		*/
		autoFocus?: boolean;

		/*
		* This Boolean attribute lets you specify that the button should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form-associated element in a document can have this attribute specified [MDN].
		*/
		autoFocusBinder?: b.IBinder<b.PropertyUpdate<boolean>>;

		/*
		* This Boolean attribute indicates that the user cannot interact with the button. If this attribute is not specified, the button inherits its setting from the containing element, for example <fieldset>; if there is no containing element with the disabled attribute set, then the button is enabled [MDN].
		*/
		disabled?: boolean;

		/*
		* This Boolean attribute indicates that the user cannot interact with the button. If this attribute is not specified, the button inherits its setting from the containing element, for example <fieldset>; if there is no containing element with the disabled attribute set, then the button is enabled [MDN].
		*/
		disabledBinder?: b.IBinder<b.PropertyUpdate<boolean>>;

		/*
		* The form element that the button is associated with (its form owner). The value of the attribute must be the id attribute of a <form> element in the same document. If this attribute is not specified, the <button> element must be a descendant of a form element. This attribute enables you to place <button> elements anywhere within a document, not just as descendants of their <form> elements [MDN].
		*/
		formID?: string;
		/*
		* The name of the button, which submitted with the form data [MDN].
		*/
		name?: string;

		/*
		* The name of the button, which submitted with the form data [MDN].
		*/
		nameBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* Html.ButtonType enumerates the values of this property.
		* The type of the button. Possible values are:  submit: The button submits the form data to the server. This is the default if the attribute is not specified, or if the attribute is dynamically changed to an empty or invalid value. reset: The button resets all the controls to their initial values. button: The button has no default behavior. It can have client-side scripts associated with the element's events, which are triggered when the events occur [MDN].
		*/
		type?: string;

		/*
		* Html.ButtonType enumerates the values of this property.
		* The type of the button. Possible values are:  submit: The button submits the form data to the server. This is the default if the attribute is not specified, or if the attribute is dynamically changed to an empty or invalid value. reset: The button resets all the controls to their initial values. button: The button has no default behavior. It can have client-side scripts associated with the element's events, which are triggered when the events occur [MDN].
		*/
		typeBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* The initial value of the button [MDN].
		*/
		value?: string;

		/*
		* The initial value of the button [MDN].
		*/
		valueBinder?: b.IBinder<b.PropertyUpdate<string>>;

		//#endregion Properties
	}

	//#endregion IButtonElementConfig

	//#region ICanvasElementConfig

	export interface ICanvasElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		/*
		* The width of the coordinate space in CSS pixels. Defaults to 300 [MDN].
		*/
		width?: number;

		/*
		* The width of the coordinate space in CSS pixels. Defaults to 300 [MDN].
		*/
		widthBinder?: b.IBinder<b.PropertyUpdate<number>>;

		/*
		* The height of the coordinate space in CSS pixels. Defaults to 150 [MDN].
		*/
		height?: number;

		/*
		* The height of the coordinate space in CSS pixels. Defaults to 150 [MDN].
		*/
		heightBinder?: b.IBinder<b.PropertyUpdate<number>>;

		//#endregion Properties
	}

	//#endregion ICanvasElementConfig

	//#region ICitationElementConfig

	export interface ICitationElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion ICitationElementConfig

	//#region ICodeElementConfig

	export interface ICodeElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion ICodeElementConfig

	//#region IDataElementConfig

	export interface IDataElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		/*
		* This attribute specifies the machine-readable translation of the content of the element [MDN].
		*/
		value?: string;

		/*
		* This attribute specifies the machine-readable translation of the content of the element [MDN].
		*/
		valueBinder?: b.IBinder<b.PropertyUpdate<string>>;

		//#endregion Properties
	}

	//#endregion IDataElementConfig

	//#region IDataListElementConfig

	export interface IDataListElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion IDataListElementConfig

	//#region IDefinitionElementConfig

	export interface IDefinitionElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion IDefinitionElementConfig

	//#region IDefinitionTermElementConfig

	export interface IDefinitionTermElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion IDefinitionTermElementConfig

	//#region IDeletedTextElementConfig

	export interface IDeletedTextElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		/*
		* A URI for a resource that explains the change (for example, meeting minutes) [MDN].
		*/
		citation?: string;

		/*
		* A URI for a resource that explains the change (for example, meeting minutes) [MDN].
		*/
		citationBinder?: b.IBinder<b.PropertyUpdate<string>>;

		//#endregion Properties
	}

	//#endregion IDeletedTextElementConfig

	//#region IDescriptionElementConfig

	export interface IDescriptionElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion IDescriptionElementConfig

	//#region IDescriptionListElementConfig

	export interface IDescriptionListElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion IDescriptionListElementConfig

	//#region IDetailsElementConfig

	export interface IDetailsElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion IDetailsElementConfig

	//#region IDivisionElementConfig

	export interface IDivisionElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion IDivisionElementConfig

	//#region IEmbedElementConfig

	export interface IEmbedElementConfig extends IHtmlElementConfig {

		//#region Properties

		/*
		* The displayed height of the resource, in CSS pixels [MDN].
		*/
		height?: string;

		/*
		* The displayed height of the resource, in CSS pixels [MDN].
		*/
		heightBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* The URL of the resource being embedded [MDN].
		*/
		source?: string;

		/*
		* The URL of the resource being embedded [MDN].
		*/
		sourceBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* The displayed width of the resource, in CSS pixels [MDN].
		*/
		width?: string;

		/*
		* The displayed width of the resource, in CSS pixels [MDN].
		*/
		widthBinder?: b.IBinder<b.PropertyUpdate<string>>;

		//#endregion Properties
	}

	//#endregion IEmbedElementConfig

	//#region IEmbeddedObjectElementConfig

	export interface IEmbeddedObjectElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		/*
		* The address of the resource as a valid URL. At least one of data and type must be defined [MDN].
		*/
		data?: string;

		/*
		* The address of the resource as a valid URL. At least one of data and type must be defined [MDN].
		*/
		dataBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* The form element, if any, that the object element is associated with (its form owner). The value of the attribute must be an ID of a <form> element in the same document [MDN].
		*/
		formID?: string;
		/*
		* The height of the displayed resource, in CSS pixels [MDN].
		*/
		height?: string;

		/*
		* The height of the displayed resource, in CSS pixels [MDN].
		*/
		heightBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* The name of valid browsing context (HTML5), or the name of the control (HTML 4) [MDN].
		*/
		name?: string;

		/*
		* The name of valid browsing context (HTML5), or the name of the control (HTML 4) [MDN].
		*/
		nameBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* The MIME type of the resource specified by data. At least one of data and type must be defined [MDN].
		*/
		type?: string;

		/*
		* The MIME type of the resource specified by data. At least one of data and type must be defined [MDN].
		*/
		typeBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* The width of the display resource, in CSS pixels [MDN].
		*/
		width?: string;

		/*
		* The width of the display resource, in CSS pixels [MDN].
		*/
		widthBinder?: b.IBinder<b.PropertyUpdate<string>>;

		//#endregion Properties
	}

	//#endregion IEmbeddedObjectElementConfig

	//#region IEmphasisElementConfig

	export interface IEmphasisElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion IEmphasisElementConfig

	//#region IFieldsetElementConfig

	export interface IFieldsetElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		/*
		* If this Boolean attribute is set, the form controls that are its descendants, except descendants of its first optional <legend> element, are disabled, i.e., not editable. They won't receive any browsing events, like mouse clicks or focus-related ones. Often browsers display such controls as gray [MDN].
		*/
		disabled?: boolean;

		/*
		* If this Boolean attribute is set, the form controls that are its descendants, except descendants of its first optional <legend> element, are disabled, i.e., not editable. They won't receive any browsing events, like mouse clicks or focus-related ones. Often browsers display such controls as gray [MDN].
		*/
		disabledBinder?: b.IBinder<b.PropertyUpdate<boolean>>;

		/*
		* This attribute has the value of the id attribute of the <form> element its related to. Its default value is the id of the nearest <form> element it is a descendant of [MDN].
		*/
		formID?: string;
		//#endregion Properties
	}

	//#endregion IFieldsetElementConfig

	//#region IFigureElementConfig

	export interface IFigureElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion IFigureElementConfig

	//#region IFigureCaptionElementConfig

	export interface IFigureCaptionElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion IFigureCaptionElementConfig

	//#region IFooterElementConfig

	export interface IFooterElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion IFooterElementConfig

	//#region IFormElementConfig

	export interface IFormElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		/*
		* A list of character encodings that the server accepts. The list can be delimited by spaces or commas. The browser uses in the order in which they are listed. The default value is the reserved string "UNKNOWN", in which case the encoding corresponds to the encoding of the document containing the form element. HTML 4: In previous versions of HTML, the different character encodings could be delimited by spaces or commas. This is no longer the case in HTML5, where only spaces are correct [MDN].
		*/
		acceptCharset?: string;

		/*
		* A list of character encodings that the server accepts. The list can be delimited by spaces or commas. The browser uses in the order in which they are listed. The default value is the reserved string "UNKNOWN", in which case the encoding corresponds to the encoding of the document containing the form element. HTML 4: In previous versions of HTML, the different character encodings could be delimited by spaces or commas. This is no longer the case in HTML5, where only spaces are correct [MDN].
		*/
		acceptCharsetBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* The URI of a program that processes the information submitted via the form. This value can be overridden by a formaction attribute on a <button> or <input> element [MDN].
		*/
		action?: string;

		/*
		* The URI of a program that processes the information submitted via the form. This value can be overridden by a formaction attribute on a <button> or <input> element [MDN].
		*/
		actionBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* Html.FormAutoComplete enumerates the values of this property.
		* Indicates whether controls in this form can by default have their values automatically completed by the browser. This setting can be overridden by an autocomplete attribute on an element belonging to the form. Possible values are:  off: The user must explicitly enter a value into each field for every use, or the document provides its own auto-completion method; the browser does not automatically complete entries. on: The browser can automatically complete values based on values that the user has entered during previous uses of the form.  
		* Note: If you set autocomplete to off in a form because the document provides its own auto-completion, then you should also set autocomplete to off for each of the form's input elements that the document can auto-complete. For details, see Google Chrome notes [MDN].
		*/
		autoComplete?: string;

		/*
		* Html.FormAutoComplete enumerates the values of this property.
		* Indicates whether controls in this form can by default have their values automatically completed by the browser. This setting can be overridden by an autocomplete attribute on an element belonging to the form. Possible values are:  off: The user must explicitly enter a value into each field for every use, or the document provides its own auto-completion method; the browser does not automatically complete entries. on: The browser can automatically complete values based on values that the user has entered during previous uses of the form.  
		* Note: If you set autocomplete to off in a form because the document provides its own auto-completion, then you should also set autocomplete to off for each of the form's input elements that the document can auto-complete. For details, see Google Chrome notes [MDN].
		*/
		autoCompleteBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* Html.FormEncodingType enumerates the values of this property.
		* When the value of the method attribute is post, this attribute is the MIME type of content that is used to submit the form to the server. Possible values are:  application/x-www-form-urlencoded: The default value if the attribute is not specified. multipart/form-data: Use this value if you are using an <input> element with the type attribute set to "file". text/plain (HTML5) This value can be overridden by a formenctype attribute on a <button> or <input> element [MDN].
		*/
		encodingType?: string;

		/*
		* Html.FormEncodingType enumerates the values of this property.
		* When the value of the method attribute is post, this attribute is the MIME type of content that is used to submit the form to the server. Possible values are:  application/x-www-form-urlencoded: The default value if the attribute is not specified. multipart/form-data: Use this value if you are using an <input> element with the type attribute set to "file". text/plain (HTML5) This value can be overridden by a formenctype attribute on a <button> or <input> element [MDN].
		*/
		encodingTypeBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* Html.FormMethod enumerates the values of this property.
		* The HTTP method that the browser uses to submit the form. Possible values are:  post: Corresponds to the HTTP POST method ; the data from the form is included in the body of the form and is sent to the server. get: Corresponds to the HTTP GET method; the data from the form are appended to the action attribute URI, with a '?' as a separator, and the resulting URI is sent to the server. Use this method when the form has no side-effects and contains only ASCII characters. This value can be overridden by a formmethod attribute on a <button> or <input> element [MDN].
		*/
		method?: string;

		/*
		* Html.FormMethod enumerates the values of this property.
		* The HTTP method that the browser uses to submit the form. Possible values are:  post: Corresponds to the HTTP POST method ; the data from the form is included in the body of the form and is sent to the server. get: Corresponds to the HTTP GET method; the data from the form are appended to the action attribute URI, with a '?' as a separator, and the resulting URI is sent to the server. Use this method when the form has no side-effects and contains only ASCII characters. This value can be overridden by a formmethod attribute on a <button> or <input> element [MDN].
		*/
		methodBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* The name of the form. In HTML 4 its use is deprecated (id should be used instead). It must be unique among the forms in a document and not the empty string in HTML 5 [MDN].
		*/
		name?: string;

		/*
		* The name of the form. In HTML 4 its use is deprecated (id should be used instead). It must be unique among the forms in a document and not the empty string in HTML 5 [MDN].
		*/
		nameBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* Html.FormTarget enumerates the values of this property.
		* A name or keyword indicating where to display the response that is received after submitting the form. In HTML 4, this is the name of, or a keyword for, a frame. In HTML5, it is a name of, or keyword for, a browsing context (for example, tab, window, or inline frame). The following keywords have special meanings:  _self: Load the response into the same HTML 4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified. _blank: Load the response into a new unnamed HTML 4 window or HTML5 browsing context. _parent: Load the response into the HTML 4 frameset parent of the current frame or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as _self. _top: HTML 4: Load the response into the full, original window, canceling all other frames. HTML5: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as _self. iframename: The response is displayed in a named <iframe>. HTML5: This value can be overridden by a formtarget attribute on a <button> or <input> element [MDN].
		*/
		target?: string;

		/*
		* Html.FormTarget enumerates the values of this property.
		* A name or keyword indicating where to display the response that is received after submitting the form. In HTML 4, this is the name of, or a keyword for, a frame. In HTML5, it is a name of, or keyword for, a browsing context (for example, tab, window, or inline frame). The following keywords have special meanings:  _self: Load the response into the same HTML 4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified. _blank: Load the response into a new unnamed HTML 4 window or HTML5 browsing context. _parent: Load the response into the HTML 4 frameset parent of the current frame or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as _self. _top: HTML 4: Load the response into the full, original window, canceling all other frames. HTML5: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as _self. iframename: The response is displayed in a named <iframe>. HTML5: This value can be overridden by a formtarget attribute on a <button> or <input> element [MDN].
		*/
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

		//#endregion Properties
	}

	//#endregion IFormElementConfig

	//#region IHeadElementConfig

	export interface IHeadElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion IHeadElementConfig

	//#region IHeaderElementConfig

	export interface IHeaderElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion IHeaderElementConfig

	//#region IHeaderFiveElementConfig

	export interface IHeaderFiveElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion IHeaderFiveElementConfig

	//#region IHeaderFourElementConfig

	export interface IHeaderFourElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion IHeaderFourElementConfig

	//#region IHeaderOneElementConfig

	export interface IHeaderOneElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion IHeaderOneElementConfig

	//#region IHeaderSixElementConfig

	export interface IHeaderSixElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion IHeaderSixElementConfig

	//#region IHeaderThreeElementConfig

	export interface IHeaderThreeElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion IHeaderThreeElementConfig

	//#region IHeaderTwoElementConfig

	export interface IHeaderTwoElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion IHeaderTwoElementConfig

	//#region IHorizontalRuleElementConfig

	export interface IHorizontalRuleElementConfig extends IHtmlElementConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion IHorizontalRuleElementConfig

	//#region IImageElementConfig

	export interface IImageElementConfig extends IHtmlElementConfig {

		//#region Properties

		/*
		* This attribute defines the alternative text describing the image. Users will see this displayed if the image URL is wrong, the image is not in one of the supported formats, or until the image is downloaded.  
		* Note: Omitting this attribute indicates that the image is a key part of the content, but no textual equivalent is available. Setting this attribute to the empty string indicates that this image is not a key part of the content; non-visual browsers may omit it from the rendering [MDN].
		*/
		alternate?: string;

		/*
		* This attribute defines the alternative text describing the image. Users will see this displayed if the image URL is wrong, the image is not in one of the supported formats, or until the image is downloaded.  
		* Note: Omitting this attribute indicates that the image is a key part of the content, but no textual equivalent is available. Setting this attribute to the empty string indicates that this image is not a key part of the content; non-visual browsers may omit it from the rendering [MDN].
		*/
		alternateBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* The height of the image in HTML5 CSS pixels, or HTML 4 in pixels or as a percentage [MDN].
		*/
		height?: number;

		/*
		* The height of the image in HTML5 CSS pixels, or HTML 4 in pixels or as a percentage [MDN].
		*/
		heightBinder?: b.IBinder<b.PropertyUpdate<number>>;

		/*
		* The URL of a description of the image to be displayed, which supplements the alt text. In HTML5, use a regular <a> element to link to the description [MDN].
		*/
		longDescription?: string;

		/*
		* The URL of a description of the image to be displayed, which supplements the alt text. In HTML5, use a regular <a> element to link to the description [MDN].
		*/
		longDescriptionBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* Image URL, this attribute is obligatory for the <img> element [MDN].
		*/
		source?: string;

		/*
		* Image URL, this attribute is obligatory for the <img> element [MDN].
		*/
		sourceBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* The width of the image in pixels or percent [MDN].
		*/
		width?: number;

		/*
		* The width of the image in pixels or percent [MDN].
		*/
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

		//#endregion Properties
	}

	//#endregion IImageElementConfig

	//#region IInlineFrameElementConfig

	export interface IInlineFrameElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		/*
		* Indicates the height of the frame HTML5 in CSS pixels, or HTML 4.01 in pixels or as a percentage [MDN].
		*/
		height?: string;

		/*
		* Indicates the height of the frame HTML5 in CSS pixels, or HTML 4.01 in pixels or as a percentage [MDN].
		*/
		heightBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* A name for the embedded browsing context (or frame). This can be used as the value of the target attribute of an <a> or <form> element, or the formtarget attribute of an <input> or <button> element [MDN].
		*/
		name?: string;

		/*
		* A name for the embedded browsing context (or frame). This can be used as the value of the target attribute of an <a> or <form> element, or the formtarget attribute of an <input> or <button> element [MDN].
		*/
		nameBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* Html.InlineFrameScrolling enumerates the values of this property.
		* Enumerated attribute indicating when the browser should provide a scroll bar (or other scrolling device) for the frame:  auto: Only when needed. yes: Always provide a scroll bar. no: Never provide a scoll bar [MDN].
		*/
		scrolling?: string;

		/*
		* Html.InlineFrameScrolling enumerates the values of this property.
		* Enumerated attribute indicating when the browser should provide a scroll bar (or other scrolling device) for the frame:  auto: Only when needed. yes: Always provide a scroll bar. no: Never provide a scoll bar [MDN].
		*/
		scrollingBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* The URL of the page to embed [MDN].
		*/
		source?: string;

		/*
		* The URL of the page to embed [MDN].
		*/
		sourceBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* Indicates the width of the frame HTML5 in CSS pixels, or HTML 4.01 in pixels or as a percentage [MDN].
		*/
		width?: string;

		/*
		* Indicates the width of the frame HTML5 in CSS pixels, or HTML 4.01 in pixels or as a percentage [MDN].
		*/
		widthBinder?: b.IBinder<b.PropertyUpdate<string>>;

		//#endregion Properties
	}

	//#endregion IInlineFrameElementConfig

	//#region IInputElementConfig

	export interface IInputElementConfig extends IHtmlElementConfig {

		//#region Properties

		/*
		* Html.InputType enumerates the values of this property.
		* The type of control to display. The default type is text, if this attribute is not specified. Possible values are:  button: A push button with no default behavior. checkbox: A check box. You must use the value attribute to define the value submitted by this item. Use the checked attribute to indicate whether this item is selected. You can also use the indeterminate attribute to indicate that the checkbox is in an indeterminate state (on most platforms, this draws a horizontal line across the checkbox). color: HTML5 A control for specifying a color. date: HTML5 A control for entering a date (year, month, and day, with no time). datetime: HTML5 A control for entering a date and time (hour, minute, second, and fraction of a second) based on UTC time zone. datetime-local: HTML5 A control for entering a date and time, with no time zone. email: HTML5 A field for editing an e-mail address. The :valid and :invalid CSS pseudo-classes are applied as appropriate. file: A control that lets the user select a file. Use the accept attribute to define the types of files that the control can select. hidden: A control that is not displayed, but whose value is submitted to the server. image: A graphical submit button. You must use the src attribute to define the source of the image and the alt attribute to define alternative text. You can use the height and width attributes to define the size of the image in pixels. month: HTML5 A control for entering a month and year, with no time zone. number: HTML5 A control for entering a floating point number. password: A single-line text field whose value is obscured. Use the maxlength attribute to specify the maximum length of the value that can be entered. radio: A radio button. You must use the value attribute to define the value submitted by this item. Use the checked attribute to indicate whether this item is selected by default. Radio buttons that have the same value for the name attribute are in the same "radio button group"; only one radio button in a group can be selected at one time. range: HTML5 A control for entering a number whose exact value is not important. This type control uses the following default values if the corresponding attributes are not specified:  min: 0  max: 100  value: min + (max-min)/2, or min if max is less than min  step: 1  reset: A button that resets the contents of the form to default values. search: HTML5 A single-line text field for entering search strings; line-breaks are automatically removed from the input value. submit: A button that submits the form. tel: HTML5 A control for entering a telephone number; line-breaks are automatically removed from the input value, but no other syntax is enforced. You can use attributes such as pattern and maxlength to restrict values entered in the control. The :valid and :invalid CSS pseudo-classes are applied as appropriate. text: A single-line text field; line-breaks are automatically removed from the input value. time: HTML5 A control for entering a time value with no time zone. url: HTML5 A field for editing a URL. The user may enter a blank or invalid address. Line-breaks are automatically removed from the input value. You can use attributes such as pattern and maxlength to restrict values entered in the control. The :valid and :invalid CSS pseudo-classes are applied as appropriate. week: HTML5 A control for entering a date consisting of a week-year number and a week number with no time zone [MDN].
		*/
		type?: string;

		/*
		* Html.InputType enumerates the values of this property.
		* The type of control to display. The default type is text, if this attribute is not specified. Possible values are:  button: A push button with no default behavior. checkbox: A check box. You must use the value attribute to define the value submitted by this item. Use the checked attribute to indicate whether this item is selected. You can also use the indeterminate attribute to indicate that the checkbox is in an indeterminate state (on most platforms, this draws a horizontal line across the checkbox). color: HTML5 A control for specifying a color. date: HTML5 A control for entering a date (year, month, and day, with no time). datetime: HTML5 A control for entering a date and time (hour, minute, second, and fraction of a second) based on UTC time zone. datetime-local: HTML5 A control for entering a date and time, with no time zone. email: HTML5 A field for editing an e-mail address. The :valid and :invalid CSS pseudo-classes are applied as appropriate. file: A control that lets the user select a file. Use the accept attribute to define the types of files that the control can select. hidden: A control that is not displayed, but whose value is submitted to the server. image: A graphical submit button. You must use the src attribute to define the source of the image and the alt attribute to define alternative text. You can use the height and width attributes to define the size of the image in pixels. month: HTML5 A control for entering a month and year, with no time zone. number: HTML5 A control for entering a floating point number. password: A single-line text field whose value is obscured. Use the maxlength attribute to specify the maximum length of the value that can be entered. radio: A radio button. You must use the value attribute to define the value submitted by this item. Use the checked attribute to indicate whether this item is selected by default. Radio buttons that have the same value for the name attribute are in the same "radio button group"; only one radio button in a group can be selected at one time. range: HTML5 A control for entering a number whose exact value is not important. This type control uses the following default values if the corresponding attributes are not specified:  min: 0  max: 100  value: min + (max-min)/2, or min if max is less than min  step: 1  reset: A button that resets the contents of the form to default values. search: HTML5 A single-line text field for entering search strings; line-breaks are automatically removed from the input value. submit: A button that submits the form. tel: HTML5 A control for entering a telephone number; line-breaks are automatically removed from the input value, but no other syntax is enforced. You can use attributes such as pattern and maxlength to restrict values entered in the control. The :valid and :invalid CSS pseudo-classes are applied as appropriate. text: A single-line text field; line-breaks are automatically removed from the input value. time: HTML5 A control for entering a time value with no time zone. url: HTML5 A field for editing a URL. The user may enter a blank or invalid address. Line-breaks are automatically removed from the input value. You can use attributes such as pattern and maxlength to restrict values entered in the control. The :valid and :invalid CSS pseudo-classes are applied as appropriate. week: HTML5 A control for entering a date consisting of a week-year number and a week number with no time zone [MDN].
		*/
		typeBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* Html.InputAccept enumerates the values of this property.
		* If the value of the type attribute is file, this attribute indicates the types of files that the server accepts; otherwise it is ignored. The value must be a comma-separated list of unique content type specifiers:  A valid MIME type with no extensions audio/* representing sound files HTML5 video/* representing video files HTML5 image/* representing image files HTML5 [MDN].
		*/
		accept?: string;

		/*
		* Html.InputAccept enumerates the values of this property.
		* If the value of the type attribute is file, this attribute indicates the types of files that the server accepts; otherwise it is ignored. The value must be a comma-separated list of unique content type specifiers:  A valid MIME type with no extensions audio/* representing sound files HTML5 video/* representing video files HTML5 image/* representing image files HTML5 [MDN].
		*/
		acceptBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* Html.InputAutoComplete enumerates the values of this property.
		* This attribute indicates whether the value of the control can be automatically completed by the browser. This attribute is ignored if the value of the type attribute is hidden, checkbox, radio, file, or a button type (button, submit, reset, image). Possible values are:  off: The user must explicitly enter a value into this field for every use, or the document provides its own auto-completion method; the browser does not automatically complete the entry. on: The browser can automatically complete the value based on values that the user has entered during previous uses. If the autocomplete attribute is not specified on an input element, then the browser uses the autocomplete attribute value of the <input> element's form owner. The form owner is either the form element that this <input> element is a descendant of or the form element whose id is specified by the form attribute of the input element. For more information, see the autocomplete attribute in <form> [MDN].
		*/
		autoComplete?: string;

		/*
		* Html.InputAutoComplete enumerates the values of this property.
		* This attribute indicates whether the value of the control can be automatically completed by the browser. This attribute is ignored if the value of the type attribute is hidden, checkbox, radio, file, or a button type (button, submit, reset, image). Possible values are:  off: The user must explicitly enter a value into this field for every use, or the document provides its own auto-completion method; the browser does not automatically complete the entry. on: The browser can automatically complete the value based on values that the user has entered during previous uses. If the autocomplete attribute is not specified on an input element, then the browser uses the autocomplete attribute value of the <input> element's form owner. The form owner is either the form element that this <input> element is a descendant of or the form element whose id is specified by the form attribute of the input element. For more information, see the autocomplete attribute in <form> [MDN].
		*/
		autoCompleteBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* This Boolean attribute lets you specify that a form control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form element in a document can have the autofocus attribute, which is a Boolean. It cannot be applied if the type attribute is set to hidden (that is, you cannot automatically set focus to a hidden control) [MDN].
		*/
		autoFocus?: boolean;

		/*
		* This Boolean attribute lets you specify that a form control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form element in a document can have the autofocus attribute, which is a Boolean. It cannot be applied if the type attribute is set to hidden (that is, you cannot automatically set focus to a hidden control) [MDN].
		*/
		autoFocusBinder?: b.IBinder<b.PropertyUpdate<boolean>>;

		/*
		* When the value of the type attribute is radio or checkbox, the presence of this Boolean attribute indicates that the control is selected by default; otherwise it is ignored [MDN].
		*/
		checked?: boolean;

		/*
		* When the value of the type attribute is radio or checkbox, the presence of this Boolean attribute indicates that the control is selected by default; otherwise it is ignored [MDN].
		*/
		checkedBinder?: b.IBinder<b.PropertyUpdate<boolean>>;

		/*
		* This Boolean attribute indicates that the form control is not available for interaction. In particular, the click event will not be dispatched on disabled controls. Also, a disabled control's value isn't submitted with the form. This attribute is ignored if the value of the type attribute is hidden [MDN].
		*/
		disabled?: boolean;

		/*
		* This Boolean attribute indicates that the form control is not available for interaction. In particular, the click event will not be dispatched on disabled controls. Also, a disabled control's value isn't submitted with the form. This attribute is ignored if the value of the type attribute is hidden [MDN].
		*/
		disabledBinder?: b.IBinder<b.PropertyUpdate<boolean>>;

		/*
		* The form element that the input element is associated with (its form owner). The value of the attribute must be an id of a <form> element in the same document. If this attribute is not specified, this <input> element must be a descendant of a <form> element. This attribute enables you to place <input> elements anywhere within a document, not just as descendants of their form elements. An input can only be associated with one form [MDN].
		*/
		formID?: string;
		/*
		* If the value of the type attribute is image, this attribute defines the height of the image displayed for the button [MDN].
		*/
		height?: number;

		/*
		* If the value of the type attribute is image, this attribute defines the height of the image displayed for the button [MDN].
		*/
		heightBinder?: b.IBinder<b.PropertyUpdate<number>>;

		/*
		* Identifies a list of pre-defined options to suggest to the user. The value must be the id of a <datalist> element in the same document. The browser displays only options that are valid values for this input element. This attribute is ignored when the type attribute's value is hidden, checkbox, radio, file, or a button type [MDN].
		*/
		listID?: string;
		/*
		* The maximum (numeric or date-time) value for this item, which must not be less than its minimum (min attribute) value [MDN].
		*/
		max?: string;

		/*
		* The maximum (numeric or date-time) value for this item, which must not be less than its minimum (min attribute) value [MDN].
		*/
		maxBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* The minimum (numeric or date-time) value for this item, which must not be greater than its maximum (max attribute) value [MDN].
		*/
		min?: string;

		/*
		* The minimum (numeric or date-time) value for this item, which must not be greater than its maximum (max attribute) value [MDN].
		*/
		minBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* This Boolean attribute indicates whether the user can enter more than one value. This attribute applies when the type attribute is set to email or file; otherwise it is ignored [MDN].
		*/
		multiple?: boolean;

		/*
		* This Boolean attribute indicates whether the user can enter more than one value. This attribute applies when the type attribute is set to email or file; otherwise it is ignored [MDN].
		*/
		multipleBinder?: b.IBinder<b.PropertyUpdate<boolean>>;

		/*
		* The name of the control, which is submitted with the form data [MDN].
		*/
		name?: string;

		/*
		* The name of the control, which is submitted with the form data [MDN].
		*/
		nameBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* A regular expression that the control's value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is text, search, tel, url or email; otherwise it is ignored. The regular expression language is the same as JavaScript's. The pattern is not surrounded by forward slashes [MDN].
		*/
		pattern?: string;

		/*
		* A regular expression that the control's value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is text, search, tel, url or email; otherwise it is ignored. The regular expression language is the same as JavaScript's. The pattern is not surrounded by forward slashes [MDN].
		*/
		patternBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* A hint to the user of what can be entered in the control . The placeholder text must not contain carriage returns or line-feeds. This attribute applies when the value of the type attribute is text, search, tel, url or email; otherwise it is ignored.  
		* Note: Do not use the placeholder attribute instead of a <label> element. Their purposes are different: the <label> attribute describes the role of the form element; that is, it indicates what kind of information is expected, the placeholder attribute is a hint about the format the content should take. There are cases in which the placeholder attribute is never displayed to the user, so the form must be understandable without it [MDN].
		*/
		placeHolder?: string;

		/*
		* A hint to the user of what can be entered in the control . The placeholder text must not contain carriage returns or line-feeds. This attribute applies when the value of the type attribute is text, search, tel, url or email; otherwise it is ignored.  
		* Note: Do not use the placeholder attribute instead of a <label> element. Their purposes are different: the <label> attribute describes the role of the form element; that is, it indicates what kind of information is expected, the placeholder attribute is a hint about the format the content should take. There are cases in which the placeholder attribute is never displayed to the user, so the form must be understandable without it [MDN].
		*/
		placeHolderBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* This attribute specifies that the user must fill in a value before submitting a form. It cannot be used when the type attribute is hidden, image, or a button type (submit, reset, or button). The :optional and :required CSS pseudo-classes will be applied to the field as appropriate [MDN].
		*/
		required?: boolean;

		/*
		* This attribute specifies that the user must fill in a value before submitting a form. It cannot be used when the type attribute is hidden, image, or a button type (submit, reset, or button). The :optional and :required CSS pseudo-classes will be applied to the field as appropriate [MDN].
		*/
		requiredBinder?: b.IBinder<b.PropertyUpdate<boolean>>;

		/*
		* The initial size of the control. This value is in pixels unless the value of the type attribute is text or password, in which case, it is an integer number of characters. Starting in HTML5, this attribute applies only when the type attribute is set to text, search, tel, url, email, or password; otherwise it is ignored. In addition, the size must be greater than zero. If you don't specify a size, a default value of 20 is used [MDN].
		*/
		size?: number;

		/*
		* The initial size of the control. This value is in pixels unless the value of the type attribute is text or password, in which case, it is an integer number of characters. Starting in HTML5, this attribute applies only when the type attribute is set to text, search, tel, url, email, or password; otherwise it is ignored. In addition, the size must be greater than zero. If you don't specify a size, a default value of 20 is used [MDN].
		*/
		sizeBinder?: b.IBinder<b.PropertyUpdate<number>>;

		/*
		* If the value of the type attribute is image, this attribute specifies a URI for the location of an image to display on the graphical submit button; otherwise it is ignored [MDN].
		*/
		source?: string;

		/*
		* If the value of the type attribute is image, this attribute specifies a URI for the location of an image to display on the graphical submit button; otherwise it is ignored [MDN].
		*/
		sourceBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* Works with the min and max attributes to limit the increments at which a numeric or date-time value can be set. It can be the string any or a positive floating point number. If this attribute is not set to any, the control accepts only values at multiples of the step value greater than the minimum [MDN].
		*/
		step?: string;

		/*
		* Works with the min and max attributes to limit the increments at which a numeric or date-time value can be set. It can be the string any or a positive floating point number. If this attribute is not set to any, the control accepts only values at multiples of the step value greater than the minimum [MDN].
		*/
		stepBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* The initial value of the control. This attribute is optional except when the value of the type attribute is radio or checkbox. Note that when reloading the page, Gecko and IE will ignore the value specified in the HTML source, if the value was changed before the reload [MDN].
		*/
		value?: string;

		/*
		* The initial value of the control. This attribute is optional except when the value of the type attribute is radio or checkbox. Note that when reloading the page, Gecko and IE will ignore the value specified in the HTML source, if the value was changed before the reload [MDN].
		*/
		valueBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* If the value of the type attribute is image, this attribute defines the width of the image displayed for the button [MDN].
		*/
		width?: number;

		/*
		* If the value of the type attribute is image, this attribute defines the width of the image displayed for the button [MDN].
		*/
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

		//#endregion Properties
	}

	//#endregion IInputElementConfig

	//#region IInsertedElementConfig

	export interface IInsertedElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		/*
		* This attribute defines the URI of a resource that explains the change, like a link to some meeting minutes or a ticket in a troubleshooting sytem [MDN].
		*/
		citation?: string;

		/*
		* This attribute defines the URI of a resource that explains the change, like a link to some meeting minutes or a ticket in a troubleshooting sytem [MDN].
		*/
		citationBinder?: b.IBinder<b.PropertyUpdate<string>>;

		//#endregion Properties
	}

	//#endregion IInsertedElementConfig

	//#region IItalicElementConfig

	export interface IItalicElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion IItalicElementConfig

	//#region IKeyboardInputElementConfig

	export interface IKeyboardInputElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion IKeyboardInputElementConfig

	//#region ILabelElementConfig

	export interface ILabelElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		/*
		* The form element that the label element is associated with (its form owner). The value of the attribute must be an ID of a <form> element in the same document. If this attribute is not specified, this <label> element must be a descendant of a <form> element. This attribute enables you to place label elements anywhere within a document, not just as descendants of their form elements [MDN].
		*/
		formID?: string;
		//#endregion Properties
	}

	//#endregion ILabelElementConfig

	//#region ILegendFieldElementConfig

	export interface ILegendFieldElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion ILegendFieldElementConfig

	//#region ILineBreakElementConfig

	export interface ILineBreakElementConfig extends IHtmlElementConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion ILineBreakElementConfig

	//#region ILinkElementConfig

	export interface ILinkElementConfig extends IHtmlElementConfig {

		//#region Properties

		/*
		* This attribute defines the character encoding of the linked resource. The value is a space- and/or comma-delimited list of character sets as defined in RFC 2045. The default value is ISO-8859-1.  
		* Note: This attribute is obsolete in HTML5 and must not be used by authors. To achieve its effect, use the Content-Type: HTTP header on the linked resource [MDN].
		*/
		characterSet?: string;

		/*
		* This attribute defines the character encoding of the linked resource. The value is a space- and/or comma-delimited list of character sets as defined in RFC 2045. The default value is ISO-8859-1.  
		* Note: This attribute is obsolete in HTML5 and must not be used by authors. To achieve its effect, use the Content-Type: HTTP header on the linked resource [MDN].
		*/
		characterSetBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* This attribute specifies the URL of the linked resource. A URL might be absolute or relative [MDN].
		*/
		href?: string;

		/*
		* This attribute specifies the URL of the linked resource. A URL might be absolute or relative [MDN].
		*/
		hrefBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* This attribute indicates the language of the linked resource. It is purely advisory. Allowed values are determined by BCP47 for HTML5 and by RFC1766 for HTML 4. Use this attribute only if the href attribute is present [MDN].
		*/
		hrefLanguage?: string;

		/*
		* This attribute indicates the language of the linked resource. It is purely advisory. Allowed values are determined by BCP47 for HTML5 and by RFC1766 for HTML 4. Use this attribute only if the href attribute is present [MDN].
		*/
		hrefLanguageBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* This attribute specifies the media which the linked resource applies to. Its value must be a media query. This attribute is mainly useful when linking to external stylesheets by allowing the user agent to pick the best adapted one for the device it runs on.  
		* Note:  In HTML 4, this can only be a simple white-space-separated list of media description literals, i.e., media types and groups, where defined and allowed as values for this attribute, such as print, screen, aural, braille. HTML5 extended this to any kind of media queries, which are a superset of the allowed values of HTML 4. Browsers not supporting the CSS3 Media Queries won't necessarily recognize the adequate link; do not forget to set fallback links, the restricted set of media queries defined in HTML 4 [MDN].
		*/
		media?: string;

		/*
		* This attribute specifies the media which the linked resource applies to. Its value must be a media query. This attribute is mainly useful when linking to external stylesheets by allowing the user agent to pick the best adapted one for the device it runs on.  
		* Note:  In HTML 4, this can only be a simple white-space-separated list of media description literals, i.e., media types and groups, where defined and allowed as values for this attribute, such as print, screen, aural, braille. HTML5 extended this to any kind of media queries, which are a superset of the allowed values of HTML 4. Browsers not supporting the CSS3 Media Queries won't necessarily recognize the adequate link; do not forget to set fallback links, the restricted set of media queries defined in HTML 4 [MDN].
		*/
		mediaBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* This attribute names a relationship of the linked document to the current document. The attribute must be a space-separated list of the link types values. The most common use of this attribute is to specify a link to an external style sheet: the rel attribute is set to stylesheet, and the href attribute is set to the URL of an external style sheet to format the page. WebTV also supports the use of the value next for rel to preload the next page in a document series [MDN].
		*/
		relationship?: string;

		/*
		* This attribute names a relationship of the linked document to the current document. The attribute must be a space-separated list of the link types values. The most common use of this attribute is to specify a link to an external style sheet: the rel attribute is set to stylesheet, and the href attribute is set to the URL of an external style sheet to format the page. WebTV also supports the use of the value next for rel to preload the next page in a document series [MDN].
		*/
		relationshipBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* The value of this attribute shows the relationship of the current document to the linked document, as defined by the href attribute. The attribute thus defines the reverse relationship compared to the value of the rel attribute. Link types values for the attribute are similar to the possible values for rel.  
		* Note: This attribute is obsolete in HTML5. Do not use it. To achieve its effect, use the rel attribute with the opposite link types values, e.g. made should be replaced by author. Also this attribute doesn't mean revision and must not be used with a version number, which is unfortunately the case on numerous sites [MDN].
		*/
		reverseRelationship?: string;

		/*
		* The value of this attribute shows the relationship of the current document to the linked document, as defined by the href attribute. The attribute thus defines the reverse relationship compared to the value of the rel attribute. Link types values for the attribute are similar to the possible values for rel.  
		* Note: This attribute is obsolete in HTML5. Do not use it. To achieve its effect, use the rel attribute with the opposite link types values, e.g. made should be replaced by author. Also this attribute doesn't mean revision and must not be used with a version number, which is unfortunately the case on numerous sites [MDN].
		*/
		reverseRelationshipBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* This attribute is used to define the type of the content linked to. The value of the attribute should be a MIME type such as text/html, text/css, and so on. The common use of this attribute is to define the type of style sheet linked and the most common current value is text/css, which indicates a Cascading Style Sheet format [MDN].
		*/
		type?: string;

		/*
		* This attribute is used to define the type of the content linked to. The value of the attribute should be a MIME type such as text/html, text/css, and so on. The common use of this attribute is to define the type of style sheet linked and the most common current value is text/css, which indicates a Cascading Style Sheet format [MDN].
		*/
		typeBinder?: b.IBinder<b.PropertyUpdate<string>>;

		//#endregion Properties
	}

	//#endregion ILinkElementConfig

	//#region IListItemElementConfig

	export interface IListItemElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		/*
		* This integer attributes indicates the current ordinal value of the item in the list as defined by the <ol> element. The only allowed value for this attribute is a number, even if the list is displayed with Roman numerals or letters. List items that follow this one continue numbering from the value set. The value attribute has no meaning for unordered lists (<ul>) or for menus (<menu>).  
		* Note: This attribute was deprecated in HTML4, but reintroduced in HTML5.  
		* Note: Prior to Gecko 9.0, negative values were incorrectly converted to 0. Starting in Gecko 9.0 all integer values are correctly parsed [MDN].
		*/
		value?: number;

		/*
		* This integer attributes indicates the current ordinal value of the item in the list as defined by the <ol> element. The only allowed value for this attribute is a number, even if the list is displayed with Roman numerals or letters. List items that follow this one continue numbering from the value set. The value attribute has no meaning for unordered lists (<ul>) or for menus (<menu>).  
		* Note: This attribute was deprecated in HTML4, but reintroduced in HTML5.  
		* Note: Prior to Gecko 9.0, negative values were incorrectly converted to 0. Starting in Gecko 9.0 all integer values are correctly parsed [MDN].
		*/
		valueBinder?: b.IBinder<b.PropertyUpdate<number>>;

		/*
		* Html.ListItemType enumerates the values of this property.
		* This character attributes indicates the numbering type:  a: lowercase letters A: uppercase letters i: lowercase Roman numerals I: uppercase Roman numerals 1: numbers This type overrides the one used by its parent <ol> element, if any.  
		* Note: This attribute has been deprecated: use the CSS list-style-type property instead [MDN].
		*/
		type?: string;

		/*
		* Html.ListItemType enumerates the values of this property.
		* This character attributes indicates the numbering type:  a: lowercase letters A: uppercase letters i: lowercase Roman numerals I: uppercase Roman numerals 1: numbers This type overrides the one used by its parent <ol> element, if any.  
		* Note: This attribute has been deprecated: use the CSS list-style-type property instead [MDN].
		*/
		typeBinder?: b.IBinder<b.PropertyUpdate<string>>;

		//#endregion Properties
	}

	//#endregion IListItemElementConfig

	//#region IMainElementConfig

	export interface IMainElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion IMainElementConfig

	//#region IMapElementConfig

	export interface IMapElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		/*
		* The name attribute gives the map a name so that it can be referenced. The attribute must be present and must have a non-empty value with no space characters. The value of the name attribute must not be a compatibility-caseless match for the value of the name attribute of another map element in the same document. If the id attribute is also specified, both attributes must have the same value [MDN].
		*/
		name?: string;

		/*
		* The name attribute gives the map a name so that it can be referenced. The attribute must be present and must have a non-empty value with no space characters. The value of the name attribute must not be a compatibility-caseless match for the value of the name attribute of another map element in the same document. If the id attribute is also specified, both attributes must have the same value [MDN].
		*/
		nameBinder?: b.IBinder<b.PropertyUpdate<string>>;

		//#endregion Properties
	}

	//#endregion IMapElementConfig

	//#region IMarkElementConfig

	export interface IMarkElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion IMarkElementConfig

	//#region IMetaElementConfig

	export interface IMetaElementConfig extends IHtmlElementConfig {

		//#region Properties

		/*
		* This attribute gives the value associated with the http-equiv or name attribute, depending of the context [MDN].
		*/
		content?: string;

		/*
		* This attribute gives the value associated with the http-equiv or name attribute, depending of the context [MDN].
		*/
		contentBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* Html.MetaHttpEquiv enumerates the values of this property.
		* This enumerated attribute defines the pragma that can alter servers and user-agents behavior. The value of the pragma is defined using the content and can be one of the following:  content-language  This pragma defines the default language of the page.  
		* Note: do not use this pragma as it is obsolete. Use the global lang attribute on the <body> element instead.  content-type  This attribute defines the MIME type of the document, eventually followed by its character set. It follows the same syntax as the HTTP content-type entity-header field, but as it is inside an HTML Element, most value are not possible. Therefore the valid syntax for its content is the literal string 'text/html' eventually followed by a character set with the following syntax:'; charset=IANAcharset' where IANAcharset is the preferred MIME name for a character set as defined by the IANA  
		* Note:   Do not use this pragma as it is obsolete. Use the charset attribute on the <meta> element instead. As the <meta> may not be used to change the type of a document in an XHTML document, or in an HTML5 document following the XHTML syntax, never set set MIME type to an XHTML MIME type that way. It would be incorrect. Only HTML document can use the content-type, so most of it is redundant: that's why it has been obsoleted and replaced by the charset attribute.    default-style  This pragma specifies the preferred stylesheet to be used on the page. The content attribute must contains the id of a <link> element whose href attribute links to a CSS stylesheet, or the id of a <style> element which contains a CSS stylesheet.  refresh  This pragma specifies:  the number of seconds until the page should be reloaded, if the content attribute contains only a positive integer number;  the number of seconds until the page should be redirected to another, if the content attribute contains a positive integer number followed by the string ';url=' and a valid URL.   set-cookie  This pragma defines a cookie for the page. Its content must follows the syntax defines in the IETF HTTP Cookie Specification.  
		* Note: Do not use this pragma as it is obsolete. Use the HTTP header set-cookie instead [MDN].
		*/
		httpEquiv?: string;

		/*
		* Html.MetaHttpEquiv enumerates the values of this property.
		* This enumerated attribute defines the pragma that can alter servers and user-agents behavior. The value of the pragma is defined using the content and can be one of the following:  content-language  This pragma defines the default language of the page.  
		* Note: do not use this pragma as it is obsolete. Use the global lang attribute on the <body> element instead.  content-type  This attribute defines the MIME type of the document, eventually followed by its character set. It follows the same syntax as the HTTP content-type entity-header field, but as it is inside an HTML Element, most value are not possible. Therefore the valid syntax for its content is the literal string 'text/html' eventually followed by a character set with the following syntax:'; charset=IANAcharset' where IANAcharset is the preferred MIME name for a character set as defined by the IANA  
		* Note:   Do not use this pragma as it is obsolete. Use the charset attribute on the <meta> element instead. As the <meta> may not be used to change the type of a document in an XHTML document, or in an HTML5 document following the XHTML syntax, never set set MIME type to an XHTML MIME type that way. It would be incorrect. Only HTML document can use the content-type, so most of it is redundant: that's why it has been obsoleted and replaced by the charset attribute.    default-style  This pragma specifies the preferred stylesheet to be used on the page. The content attribute must contains the id of a <link> element whose href attribute links to a CSS stylesheet, or the id of a <style> element which contains a CSS stylesheet.  refresh  This pragma specifies:  the number of seconds until the page should be reloaded, if the content attribute contains only a positive integer number;  the number of seconds until the page should be redirected to another, if the content attribute contains a positive integer number followed by the string ';url=' and a valid URL.   set-cookie  This pragma defines a cookie for the page. Its content must follows the syntax defines in the IETF HTTP Cookie Specification.  
		* Note: Do not use this pragma as it is obsolete. Use the HTTP header set-cookie instead [MDN].
		*/
		httpEquivBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* Html.MetaName enumerates the values of this property.
		* This attribute defines the name of a document-level metadata. It should not be set if one of the attribute itemprop, http-equiv or charset is also set. This document-level metadata name is associated with a value, contained by the content attribute. The possible values for the name element are, with their associated value stored via the content attribute:  application-name, defining the name of the web application running in the webpage;  
		* Note:   Browsers may use this to identify the application. It is different from the <title> element, which usually consist of the application name but may also contain specific information like the document name or a status; Simple webpages shouldn't define the application-name meta.   author, defining, in a free format, the name of the author of the document; description, containing a short and accurate summary of the content of the page. Several browsers, among them Firefox and Opera, use this meta as the default description of the page when bookmarked; generator, containing, in a free format, the identifier to the software that generated the page; keywords, containing, as strings separated by commas, relevant words associated with the content of the page. The attribute may also have a value taken from the extended list defined on WHATWG Wiki MetaExtensions page. Also none has been formally accepted yet, a few commonly used names are among the proposals:  creator, defining, in a free format, the name of the creator of the document. Note that it can be the name of the institution. If there are more than one, several <meta> element should be used; googlebot, which is a synonym of robots, but is only followed by Googlebot, the indexing crawler for Google; publisher, defining, in a free format, the name of the publisher of the document. Note that it can be the name of the institution; robots, defining the behavior that cooperative crawlers should have with the page. It is a comma-separated list of values taken in the following list:   Values for the content of <meta name="robots">   Value  Description  Used by      index  Allows the robot to index the page  All    noindex  Prevents the robot to index the page  All    follow  Allows the robot to follow the links on the page  All    nofollow  Prevents the robot to follow the links on the page  All    noodp  Prevents the usage of the Open Directory Project description, if any, as the description of the page in the search engine results page   Google, Yahoo, Bing     noarchive  Prevents the search engine to cache the content of the page  Google, Yahoo    nosnippet  Prevents the display of any description of the page in the search engine results page  Google    noimageindex  Prevents this page to appear as the referring page of an indexed image  Google    noydir  Prevents the usage of the Yahoo Directory description, if any, as the description of the page in the search engine results page  Yahoo    nocache  Synonym of noarchive  Bing    Notes:   Only cooperative robots will follow the rules defined by the robots name. Do not expect to keep e-mail harvesters at bay with this The robot still needs to access the page in order to read the meta value. If you want to keep them at bay, for example to prevent bandwidth consumption, use a robots.txt file instead (or in complement). If you want to remove the page of an index, changing the meta to noindex will work, but only when the robot visit the page again. Be sure not to prevent such visit, via the robots.txt file for example. Some search engines have developers tools allowing a quick removal of some page. Some possible values are mutually exclusive, like using index and noindex, or follow and nofollow, at the same time. In these case the behavior of the robot is undefined, and may vary from one to the other. So avoid these cases. Some search engine crawler robots, like those of Google, Yahoo Search or Bing, supports the same values on an HTTP directive, X-Robot-Tags: this allows to use these pragma on non-HTML documents, like images.   slurp, which is a synonym of robots, but is only followed by Slurp, the indexing crawler for Yahoo Search; Finally a few names are in common use, though not in progress of being standardized:  viewport, which gives hints about the size of the initial size of the viewport. This pragma is used by several mobile devices only.   Values for the content of <meta name="viewport">   Value  Possible values  Description      width  a positive integer number or the literal device-width  defines the width, in pixels, of the viewport    height  a positive integer number of the literal device-height  defines the height, in pixels, of the viewport    initial-scale  a positive number between 0.0 and 10.0  defines the ratio between the device width (device-width in portrait mode or device-height in landscape mode) and the viewport size.e    maximum-scale  a positive number between 0.0 and 10.0  defines the maximum value of the zoom; it must be greater or equal to the minimum-scale or the behavior is underterminate.    minimum-scale  a positive number between 0.0 and 10.0  defines the minimum value of the zoom; it must be smaller or equal to the maximum-scale or the behavior is undeterminate.    user-scalable  a boolean value (yes or no)  If set to no, the user is not able to zoom or in the webpage. Default value is yes.    Notes:   Though not standardized, this attribute is used by different mobile browsers like Safari Mobile, Firefox for Mobile or Opera Mobile. The default values may change from one device, and browser, to another To learn about this pragma in Firefox for Mobile, see this article [MDN].
		*/
		name?: string;

		/*
		* Html.MetaName enumerates the values of this property.
		* This attribute defines the name of a document-level metadata. It should not be set if one of the attribute itemprop, http-equiv or charset is also set. This document-level metadata name is associated with a value, contained by the content attribute. The possible values for the name element are, with their associated value stored via the content attribute:  application-name, defining the name of the web application running in the webpage;  
		* Note:   Browsers may use this to identify the application. It is different from the <title> element, which usually consist of the application name but may also contain specific information like the document name or a status; Simple webpages shouldn't define the application-name meta.   author, defining, in a free format, the name of the author of the document; description, containing a short and accurate summary of the content of the page. Several browsers, among them Firefox and Opera, use this meta as the default description of the page when bookmarked; generator, containing, in a free format, the identifier to the software that generated the page; keywords, containing, as strings separated by commas, relevant words associated with the content of the page. The attribute may also have a value taken from the extended list defined on WHATWG Wiki MetaExtensions page. Also none has been formally accepted yet, a few commonly used names are among the proposals:  creator, defining, in a free format, the name of the creator of the document. Note that it can be the name of the institution. If there are more than one, several <meta> element should be used; googlebot, which is a synonym of robots, but is only followed by Googlebot, the indexing crawler for Google; publisher, defining, in a free format, the name of the publisher of the document. Note that it can be the name of the institution; robots, defining the behavior that cooperative crawlers should have with the page. It is a comma-separated list of values taken in the following list:   Values for the content of <meta name="robots">   Value  Description  Used by      index  Allows the robot to index the page  All    noindex  Prevents the robot to index the page  All    follow  Allows the robot to follow the links on the page  All    nofollow  Prevents the robot to follow the links on the page  All    noodp  Prevents the usage of the Open Directory Project description, if any, as the description of the page in the search engine results page   Google, Yahoo, Bing     noarchive  Prevents the search engine to cache the content of the page  Google, Yahoo    nosnippet  Prevents the display of any description of the page in the search engine results page  Google    noimageindex  Prevents this page to appear as the referring page of an indexed image  Google    noydir  Prevents the usage of the Yahoo Directory description, if any, as the description of the page in the search engine results page  Yahoo    nocache  Synonym of noarchive  Bing    Notes:   Only cooperative robots will follow the rules defined by the robots name. Do not expect to keep e-mail harvesters at bay with this The robot still needs to access the page in order to read the meta value. If you want to keep them at bay, for example to prevent bandwidth consumption, use a robots.txt file instead (or in complement). If you want to remove the page of an index, changing the meta to noindex will work, but only when the robot visit the page again. Be sure not to prevent such visit, via the robots.txt file for example. Some search engines have developers tools allowing a quick removal of some page. Some possible values are mutually exclusive, like using index and noindex, or follow and nofollow, at the same time. In these case the behavior of the robot is undefined, and may vary from one to the other. So avoid these cases. Some search engine crawler robots, like those of Google, Yahoo Search or Bing, supports the same values on an HTTP directive, X-Robot-Tags: this allows to use these pragma on non-HTML documents, like images.   slurp, which is a synonym of robots, but is only followed by Slurp, the indexing crawler for Yahoo Search; Finally a few names are in common use, though not in progress of being standardized:  viewport, which gives hints about the size of the initial size of the viewport. This pragma is used by several mobile devices only.   Values for the content of <meta name="viewport">   Value  Possible values  Description      width  a positive integer number or the literal device-width  defines the width, in pixels, of the viewport    height  a positive integer number of the literal device-height  defines the height, in pixels, of the viewport    initial-scale  a positive number between 0.0 and 10.0  defines the ratio between the device width (device-width in portrait mode or device-height in landscape mode) and the viewport size.e    maximum-scale  a positive number between 0.0 and 10.0  defines the maximum value of the zoom; it must be greater or equal to the minimum-scale or the behavior is underterminate.    minimum-scale  a positive number between 0.0 and 10.0  defines the minimum value of the zoom; it must be smaller or equal to the maximum-scale or the behavior is undeterminate.    user-scalable  a boolean value (yes or no)  If set to no, the user is not able to zoom or in the webpage. Default value is yes.    Notes:   Though not standardized, this attribute is used by different mobile browsers like Safari Mobile, Firefox for Mobile or Opera Mobile. The default values may change from one device, and browser, to another To learn about this pragma in Firefox for Mobile, see this article [MDN].
		*/
		nameBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* This attribute defines the scheme in which the metadata is described. A scheme is a context leading to the correct interpretations of the content value, like a format.  Notes: Do not use this attribute as it is obsolete. There is no replacement for it as there was no real usage for it. Omit it altogether [MDN].
		*/
		scheme?: string;

		/*
		* This attribute defines the scheme in which the metadata is described. A scheme is a context leading to the correct interpretations of the content value, like a format.  Notes: Do not use this attribute as it is obsolete. There is no replacement for it as there was no real usage for it. Omit it altogether [MDN].
		*/
		schemeBinder?: b.IBinder<b.PropertyUpdate<string>>;

		//#endregion Properties
	}

	//#endregion IMetaElementConfig

	//#region INavigationElementConfig

	export interface INavigationElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion INavigationElementConfig

	//#region INoScriptElementConfig

	export interface INoScriptElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion INoScriptElementConfig

	//#region IOptionElementConfig

	export interface IOptionElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		/*
		* If this Boolean attribute is set, this option is not checkable [MDN].
		*/
		disabled?: boolean;

		/*
		* If this Boolean attribute is set, this option is not checkable [MDN].
		*/
		disabledBinder?: b.IBinder<b.PropertyUpdate<boolean>>;

		/*
		* This attribute contains a text label indicating the meaning of the option. If it is not defined, the value defaults to the element's text content.  
		* Note: the label attribute is designed to contain a short label typically used in a hierarchical menu. The value attribute describes a longer label designed to be used near a radio button, for example [MDN].
		*/
		label?: string;

		/*
		* This attribute contains a text label indicating the meaning of the option. If it is not defined, the value defaults to the element's text content.  
		* Note: the label attribute is designed to contain a short label typically used in a hierarchical menu. The value attribute describes a longer label designed to be used near a radio button, for example [MDN].
		*/
		labelBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* This Boolean attribute indicates that the option is initially selected. If the <option> element is the descendant of a <select> element whose multiple attribute is not set, only one <option> in the <select> may have the selected attribute [MDN].
		*/
		selected?: boolean;

		/*
		* This Boolean attribute indicates that the option is initially selected. If the <option> element is the descendant of a <select> element whose multiple attribute is not set, only one <option> in the <select> may have the selected attribute [MDN].
		*/
		selectedBinder?: b.IBinder<b.PropertyUpdate<boolean>>;

		/*
		* This textual contains a longer text label explaining the option, much like the label attribute. The label attribute is designed to contain a short label typically used in a hierarchical menu, whereas the value attribute describes a longer label designed to be used near a radio button, for example [MDN].
		*/
		value?: string;

		/*
		* This textual contains a longer text label explaining the option, much like the label attribute. The label attribute is designed to contain a short label typically used in a hierarchical menu, whereas the value attribute describes a longer label designed to be used near a radio button, for example [MDN].
		*/
		valueBinder?: b.IBinder<b.PropertyUpdate<string>>;

		//#endregion Properties
	}

	//#endregion IOptionElementConfig

	//#region IOptionsGroupElementConfig

	export interface IOptionsGroupElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		/*
		* If this Boolean attribute is set, none of the items in this option group is selectable. Often browsers grey out such control and it won't receive any browsing events, like mouse clicks or focus-related ones [MDN].
		*/
		disabled?: boolean;

		/*
		* If this Boolean attribute is set, none of the items in this option group is selectable. Often browsers grey out such control and it won't receive any browsing events, like mouse clicks or focus-related ones [MDN].
		*/
		disabledBinder?: b.IBinder<b.PropertyUpdate<boolean>>;

		/*
		* The name of the group of options, which the browser can use when labeling the options in the user interface. This attribute is mandatory if this element is used [MDN].
		*/
		label?: string;

		/*
		* The name of the group of options, which the browser can use when labeling the options in the user interface. This attribute is mandatory if this element is used [MDN].
		*/
		labelBinder?: b.IBinder<b.PropertyUpdate<string>>;

		//#endregion Properties
	}

	//#endregion IOptionsGroupElementConfig

	//#region IOrderedListElementConfig

	export interface IOrderedListElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		/*
		* This Boolean attribute hints that the list should be rendered in a compact style. The interpretation of this attribute depends on the user agent and it doesn't work in all browsers. Note: Do not use this attribute, as it has been deprecated: the <ol> element should be styled using CSS. To give a similar effect than the compact attribute, the CSS property line-height can be used with a value of 80% [MDN].
		*/
		compact?: boolean;

		/*
		* This Boolean attribute hints that the list should be rendered in a compact style. The interpretation of this attribute depends on the user agent and it doesn't work in all browsers. Note: Do not use this attribute, as it has been deprecated: the <ol> element should be styled using CSS. To give a similar effect than the compact attribute, the CSS property line-height can be used with a value of 80% [MDN].
		*/
		compactBinder?: b.IBinder<b.PropertyUpdate<boolean>>;

		/*
		* This integer attribute specifies the start value for numbering the individual list items. Although the ordering type of list elements might be Roman numerals, such as XXXI, or letters, the value of start is always represented as a number. To start numbering elements from the letter "C", use <ol start="3">.  
		* Note: This attribute was deprecated in HTML4, but reintroduced in HTML5 [MDN].
		*/
		start?: number;

		/*
		* This integer attribute specifies the start value for numbering the individual list items. Although the ordering type of list elements might be Roman numerals, such as XXXI, or letters, the value of start is always represented as a number. To start numbering elements from the letter "C", use <ol start="3">.  
		* Note: This attribute was deprecated in HTML4, but reintroduced in HTML5 [MDN].
		*/
		startBinder?: b.IBinder<b.PropertyUpdate<number>>;

		/*
		* Html.OrderedListType enumerates the values of this property.
		* Indicates the numbering type:  'a' indicates lowercase letters, 'A' indicates uppercase letters, 'i' indicates lowercase Roman numerals, 'I' indicates uppercase Roman numerals, and '1' indicates numbers (default). The type set is used for the entire list unless a different type attribute is used within an enclosed <li> element.  Note: This attribute was deprecated in HTML4, but reintroduced in HTML5. Unless the value of the list number matters (e.g. in legal or technical documents where items are to be referenced by their number/letter), the CSS list-style-type property should be used instead [MDN].
		*/
		type?: string;

		/*
		* Html.OrderedListType enumerates the values of this property.
		* Indicates the numbering type:  'a' indicates lowercase letters, 'A' indicates uppercase letters, 'i' indicates lowercase Roman numerals, 'I' indicates uppercase Roman numerals, and '1' indicates numbers (default). The type set is used for the entire list unless a different type attribute is used within an enclosed <li> element.  Note: This attribute was deprecated in HTML4, but reintroduced in HTML5. Unless the value of the list number matters (e.g. in legal or technical documents where items are to be referenced by their number/letter), the CSS list-style-type property should be used instead [MDN].
		*/
		typeBinder?: b.IBinder<b.PropertyUpdate<string>>;

		//#endregion Properties
	}

	//#endregion IOrderedListElementConfig

	//#region IParagraphElementConfig

	export interface IParagraphElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion IParagraphElementConfig

	//#region IParameterElementConfig

	export interface IParameterElementConfig extends IHtmlElementConfig {

		//#region Properties

		/*
		* Name of the parameter [MDN].
		*/
		name?: string;

		/*
		* Name of the parameter [MDN].
		*/
		nameBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* Only used if the valuetype is set to "ref". Specifies the MIME type of values found at the URI specified by value [MDN].
		*/
		type?: string;

		/*
		* Only used if the valuetype is set to "ref". Specifies the MIME type of values found at the URI specified by value [MDN].
		*/
		typeBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* Specifies the value of the parameter [MDN].
		*/
		value?: string;

		/*
		* Specifies the value of the parameter [MDN].
		*/
		valueBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* Specifies the type of the value attribute. Possible values are:  data: Default value. The value is passed to the object's implementation as a string. ref: The value is a URI to a resource where run-time values are stored. object: An ID of another <object> in the same document [MDN].
		*/
		valueType?: string;

		/*
		* Specifies the type of the value attribute. Possible values are:  data: Default value. The value is passed to the object's implementation as a string. ref: The value is a URI to a resource where run-time values are stored. object: An ID of another <object> in the same document [MDN].
		*/
		valueTypeBinder?: b.IBinder<b.PropertyUpdate<string>>;

		//#endregion Properties
	}

	//#endregion IParameterElementConfig

	//#region IPreformattedElementConfig

	export interface IPreformattedElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion IPreformattedElementConfig

	//#region IProgressElementConfig

	export interface IProgressElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		/*
		* This attribute describes how much work the task indicated by the progress element requires. The max attribute, if present, must have a value greater than zero and be a valid floating point number [MDN].
		*/
		max?: number;

		/*
		* This attribute describes how much work the task indicated by the progress element requires. The max attribute, if present, must have a value greater than zero and be a valid floating point number [MDN].
		*/
		maxBinder?: b.IBinder<b.PropertyUpdate<number>>;

		/*
		* This attribute specifies how much of the task that has been completed. It must be a valid floating point number between 0 and max, or between 0 and 1 if max is omitted. If there is no value attribute, the progress bar is indeterminate; this indicates that an activity is ongoing with no indication of how long it is expected to take [MDN].
		*/
		value?: number;

		/*
		* This attribute specifies how much of the task that has been completed. It must be a valid floating point number between 0 and max, or between 0 and 1 if max is omitted. If there is no value attribute, the progress bar is indeterminate; this indicates that an activity is ongoing with no indication of how long it is expected to take [MDN].
		*/
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

		//#endregion Properties
	}

	//#endregion IProgressElementConfig

	//#region IQuoteElementConfig

	export interface IQuoteElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		/*
		* The value of this attribute is a URL that designates a source document or message for the information quoted. This attribute is intended to point to information explaining the context or the reference for the quote [MDN].
		*/
		citation?: string;

		/*
		* The value of this attribute is a URL that designates a source document or message for the information quoted. This attribute is intended to point to information explaining the context or the reference for the quote [MDN].
		*/
		citationBinder?: b.IBinder<b.PropertyUpdate<string>>;

		//#endregion Properties
	}

	//#endregion IQuoteElementConfig

	//#region IRootElementConfig

	export interface IRootElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion IRootElementConfig

	//#region IRubyElementConfig

	export interface IRubyElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion IRubyElementConfig

	//#region IRubyParenthesisElementConfig

	export interface IRubyParenthesisElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion IRubyParenthesisElementConfig

	//#region IRubyPronunciationElementConfig

	export interface IRubyPronunciationElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion IRubyPronunciationElementConfig

	//#region ISampleElementConfig

	export interface ISampleElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion ISampleElementConfig

	//#region IScriptElementConfig

	export interface IScriptElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		/*
		* Set this Boolean attribute to indicate that the browser should, if possible, execute the script asynchronously. It has no effect on inline scripts (i.e., scripts that don't have the src attribute) [MDN].
		*/
		async?: boolean;

		/*
		* Set this Boolean attribute to indicate that the browser should, if possible, execute the script asynchronously. It has no effect on inline scripts (i.e., scripts that don't have the src attribute) [MDN].
		*/
		asyncBinder?: b.IBinder<b.PropertyUpdate<boolean>>;

		/*
		* This attribute specifies the URI of an external script; this can be used as an alternative to embedding a script directly within a document. script elements with an src attribute specified should not have a script embedded within its tags [MDN].
		*/
		source?: string;

		/*
		* This attribute specifies the URI of an external script; this can be used as an alternative to embedding a script directly within a document. script elements with an src attribute specified should not have a script embedded within its tags [MDN].
		*/
		sourceBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* This attribute identifies the scripting language of code embedded within a script element or referenced via the elementâ€™s src attribute. This is specified as a MIME type; examples of supported MIME types include text/javascript, text/ecmascript, application/javascript, and application/ecmascript. If this attribute is absent, the script is treated as JavaScript [MDN].
		*/
		type?: string;

		/*
		* This attribute identifies the scripting language of code embedded within a script element or referenced via the elementâ€™s src attribute. This is specified as a MIME type; examples of supported MIME types include text/javascript, text/ecmascript, application/javascript, and application/ecmascript. If this attribute is absent, the script is treated as JavaScript [MDN].
		*/
		typeBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* This Boolean attribute is set to indicate to a browser that the script is meant to be executed after the document has been parsed. Since this feature hasn't yet been implemented by all other major browsers, authors should not assume that the scriptâ€™s execution will actually be deferred. Never call document.write() from a defer script (since Gecko 1.9.2, this will blow away the document). The defer attribute shouldn't be used on scripts that don't have the src attribute. Since Gecko 1.9.2, the defer attribute is ignored on scripts that don't have the src attribute. However, in Gecko 1.9.1 even inline scripts are deferred if the defer attribute is set [MDN].
		*/
		defer?: boolean;

		/*
		* This Boolean attribute is set to indicate to a browser that the script is meant to be executed after the document has been parsed. Since this feature hasn't yet been implemented by all other major browsers, authors should not assume that the scriptâ€™s execution will actually be deferred. Never call document.write() from a defer script (since Gecko 1.9.2, this will blow away the document). The defer attribute shouldn't be used on scripts that don't have the src attribute. Since Gecko 1.9.2, the defer attribute is ignored on scripts that don't have the src attribute. However, in Gecko 1.9.1 even inline scripts are deferred if the defer attribute is set [MDN].
		*/
		deferBinder?: b.IBinder<b.PropertyUpdate<boolean>>;

		/**
		* The errorEvent event is executed when a resource failed to load [MDN].
		* Specification: DOM L3
		* DOM Event Name: error
		*/
		errorHandler?: (element: Elements.ScriptElement, info: UIEvent) => void;

		//#endregion Properties
	}

	//#endregion IScriptElementConfig

	//#region ISectionElementConfig

	export interface ISectionElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion ISectionElementConfig

	//#region ISelectElementConfig

	export interface ISelectElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		/*
		* This attribute lets you specify that a form control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form element in a document can have the autofocus attribute, which is a Boolean [MDN].
		*/
		autoFocus?: boolean;

		/*
		* This attribute lets you specify that a form control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form element in a document can have the autofocus attribute, which is a Boolean [MDN].
		*/
		autoFocusBinder?: b.IBinder<b.PropertyUpdate<boolean>>;

		/*
		* This Boolean attribute indicates that the user cannot interact with the control. If this attribute is not specified, the control inherits its setting from the containing element, for example fieldset; if there is no containing element with the disabled attribute set, then the control is enabled [MDN].
		*/
		disabled?: boolean;

		/*
		* This Boolean attribute indicates that the user cannot interact with the control. If this attribute is not specified, the control inherits its setting from the containing element, for example fieldset; if there is no containing element with the disabled attribute set, then the control is enabled [MDN].
		*/
		disabledBinder?: b.IBinder<b.PropertyUpdate<boolean>>;

		/*
		* The form element that the select element is associated with (its "form owner"). If this attribute is specified, its value must be the ID of a form element in the same document. This enables you to place select elements anywhere within a document, not just as descendants of their form elements [MDN].
		*/
		formID?: string;
		/*
		* This Boolean attribute indicates that multiple options can be selected in the list. If it is not specified, then only one option can be selected at a time [MDN].
		*/
		multipleOptions?: boolean;

		/*
		* This Boolean attribute indicates that multiple options can be selected in the list. If it is not specified, then only one option can be selected at a time [MDN].
		*/
		multipleOptionsBinder?: b.IBinder<b.PropertyUpdate<boolean>>;

		/*
		* The name of the control [MDN].
		*/
		name?: string;

		/*
		* The name of the control [MDN].
		*/
		nameBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* A Boolean attribute indicating that an option with a non-empty string value must be selected [MDN].
		*/
		required?: boolean;

		/*
		* A Boolean attribute indicating that an option with a non-empty string value must be selected [MDN].
		*/
		requiredBinder?: b.IBinder<b.PropertyUpdate<boolean>>;

		/*
		* If the control is presented as a scrolled list box, this attribute represents the number of rows in the list that should be visible at one time. Browsers are not required to present a select elements as a scrolled list box. The default value is 0 [MDN].
		*/
		size?: number;

		/*
		* If the control is presented as a scrolled list box, this attribute represents the number of rows in the list that should be visible at one time. Browsers are not required to present a select elements as a scrolled list box. The default value is 0 [MDN].
		*/
		sizeBinder?: b.IBinder<b.PropertyUpdate<number>>;

		/**
		* The changeEvent event is executed when an element loses focus and its value changed since gaining focus [MDN].
		* Specifications: DOM L2, HTML5
		* DOM Event Name: change
		*/
		changeHandler?: (element: Elements.SelectElement, info: Event) => void;

		//#endregion Properties
	}

	//#endregion ISelectElementConfig

	//#region ISmallElementConfig

	export interface ISmallElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion ISmallElementConfig

	//#region ISourceElementConfig

	export interface ISourceElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		/*
		* Required, address of the media resource [MDN].
		*/
		source?: string;

		/*
		* Required, address of the media resource [MDN].
		*/
		sourceBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* The MIME-type of the resource, optionally with a codecs parameter. See RFC 4281 for information about how to specify codecs [MDN].
		*/
		type?: string;

		/*
		* The MIME-type of the resource, optionally with a codecs parameter. See RFC 4281 for information about how to specify codecs [MDN].
		*/
		typeBinder?: b.IBinder<b.PropertyUpdate<string>>;

		//#endregion Properties
	}

	//#endregion ISourceElementConfig

	//#region ISpanElementConfig

	export interface ISpanElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion ISpanElementConfig

	//#region IStrikethroughElementConfig

	export interface IStrikethroughElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion IStrikethroughElementConfig

	//#region IStrongElementConfig

	export interface IStrongElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion IStrongElementConfig

	//#region IStyleElementConfig

	export interface IStyleElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		/*
		* This attribute defines the styling language as a MIME type (charset should not be specified). 'text/css' is assumed if this attribute is absent [MDN].
		*/
		type?: string;

		/*
		* This attribute defines the styling language as a MIME type (charset should not be specified). 'text/css' is assumed if this attribute is absent [MDN].
		*/
		typeBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* Which media should this style apply to. Should be a media query, see http://dev.w3.org/csswg/css3-mediaqueries [MDN].
		*/
		media?: string;

		/*
		* Which media should this style apply to. Should be a media query, see http://dev.w3.org/csswg/css3-mediaqueries [MDN].
		*/
		mediaBinder?: b.IBinder<b.PropertyUpdate<string>>;


		/*
		* If set, the style rules declared in this element are disabled in the declaring document [MDN].
		*/
		disabledBinder?: b.IBinder<b.PropertyUpdate<boolean>>;

		/**
		* The errorEvent event is executed when a resource failed to load [MDN].
		* Specification: DOM L3
		* DOM Event Name: error
		*/
		errorHandler?: (element: Elements.StyleElement, info: UIEvent) => void;

		//#endregion Properties
	}

	//#endregion IStyleElementConfig

	//#region ISubscriptElementConfig

	export interface ISubscriptElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion ISubscriptElementConfig

	//#region ISummaryElementConfig

	export interface ISummaryElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion ISummaryElementConfig

	//#region ISuperscriptElementConfig

	export interface ISuperscriptElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion ISuperscriptElementConfig

	//#region ITableElementConfig

	export interface ITableElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion ITableElementConfig

	//#region ITableCaptionElementConfig

	export interface ITableCaptionElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion ITableCaptionElementConfig

	//#region ITableColumnElementConfig

	export interface ITableColumnElementConfig extends IHtmlElementConfig {

		//#region Properties

		/*
		* This attribute contains a positive integer indicating the number of consecutive columns the <col> element spans. If not present, its default value is 1 [MDN].
		*/
		span?: number;

		/*
		* This attribute contains a positive integer indicating the number of consecutive columns the <col> element spans. If not present, its default value is 1 [MDN].
		*/
		spanBinder?: b.IBinder<b.PropertyUpdate<number>>;

		//#endregion Properties
	}

	//#endregion ITableColumnElementConfig

	//#region ITableColumnGroupElementConfig

	export interface ITableColumnGroupElementConfig extends IHtmlElementConfig {

		//#region Properties

		/*
		* This attribute contains a positive integer indicating the number of consecutive columns the <colgroup> element spans. If not present, its default value is 1.  
		* Note: This attribute apply on the attributes of the column group, it has no effect on the CSS styling rules associated to it or, even more, to the cells of the columns members of the group.  The span attribute may not be present if there are one or more <col> elements within the <colgroup> [MDN].
		*/
		span?: number;

		/*
		* This attribute contains a positive integer indicating the number of consecutive columns the <colgroup> element spans. If not present, its default value is 1.  
		* Note: This attribute apply on the attributes of the column group, it has no effect on the CSS styling rules associated to it or, even more, to the cells of the columns members of the group.  The span attribute may not be present if there are one or more <col> elements within the <colgroup> [MDN].
		*/
		spanBinder?: b.IBinder<b.PropertyUpdate<number>>;

		/*
		* This attribute specifies a default width for each column in the current column group. In addition to the standard pixel and percentage values, this attribute might take the special form 0*, which means that the width of each column in the group should be the minimum width necessary to hold the column's contents. Relative widths such as 0.5* also can be used [MDN].
		*/
		width?: string;

		/*
		* This attribute specifies a default width for each column in the current column group. In addition to the standard pixel and percentage values, this attribute might take the special form 0*, which means that the width of each column in the group should be the minimum width necessary to hold the column's contents. Relative widths such as 0.5* also can be used [MDN].
		*/
		widthBinder?: b.IBinder<b.PropertyUpdate<string>>;

		//#endregion Properties
	}

	//#endregion ITableColumnGroupElementConfig

	//#region ITableDataCellElementConfig

	export interface ITableDataCellElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		/*
		* This attribute contains a non-negative integer value that indicates for how many columns the cell extends. Its default value is 1; if its value is set to 0, it extends until the end of the <colgroup>, even if implicitly defined, that the cell belongs to. Values higher than 1000 will be considered as incorrect and will be set to the default value (1).  
		* Note: In HTML5 this attribute only accepts values greater than zero since it must not be used to overlap cells. Besides, Firefox is the only browser to support the 0 value as defined in the HTML 4.01 specification [MDN].
		*/
		columnSpan?: number;

		/*
		* This attribute contains a non-negative integer value that indicates for how many columns the cell extends. Its default value is 1; if its value is set to 0, it extends until the end of the <colgroup>, even if implicitly defined, that the cell belongs to. Values higher than 1000 will be considered as incorrect and will be set to the default value (1).  
		* Note: In HTML5 this attribute only accepts values greater than zero since it must not be used to overlap cells. Besides, Firefox is the only browser to support the 0 value as defined in the HTML 4.01 specification [MDN].
		*/
		columnSpanBinder?: b.IBinder<b.PropertyUpdate<number>>;

		/*
		* This attribute contains a list of space-separated strings, each corresponding to the id attribute of the <th> elements that apply to this element [MDN].
		*/
		headers?: string;

		/*
		* This attribute contains a list of space-separated strings, each corresponding to the id attribute of the <th> elements that apply to this element [MDN].
		*/
		headersBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* This attribute contains a non-negative integer value that indicates for how many rows the cell extends. Its default value is 1; if its value is set to 0, it extends until the end of the table section (<thead>, <tbody>, <tfoot>, even if implicitly defined, that the cell belongs to. Values higher than 65534 are clipped down to 65534 [MDN].
		*/
		rowSpan?: number;

		/*
		* This attribute contains a non-negative integer value that indicates for how many rows the cell extends. Its default value is 1; if its value is set to 0, it extends until the end of the table section (<thead>, <tbody>, <tfoot>, even if implicitly defined, that the cell belongs to. Values higher than 65534 are clipped down to 65534 [MDN].
		*/
		rowSpanBinder?: b.IBinder<b.PropertyUpdate<number>>;

		/*
		*  [MDN].
		*/
		scope?: string;

		/*
		*  [MDN].
		*/
		scopeBinder?: b.IBinder<b.PropertyUpdate<string>>;

		//#endregion Properties
	}

	//#endregion ITableDataCellElementConfig

	//#region ITableHeaderCellElementConfig

	export interface ITableHeaderCellElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		/*
		* This attribute contains a non-negative integer value that indicates on how many columns does the cell extend. Its default value is 1; if its value is set to 0, it does extend until the end of the <colgroup>, eventually implicitly defined, the cell belongs to. Values higher than 1000 are clipped down to 1000 [MDN].
		*/
		columnSpan?: number;

		/*
		* This attribute contains a non-negative integer value that indicates on how many columns does the cell extend. Its default value is 1; if its value is set to 0, it does extend until the end of the <colgroup>, eventually implicitly defined, the cell belongs to. Values higher than 1000 are clipped down to 1000 [MDN].
		*/
		columnSpanBinder?: b.IBinder<b.PropertyUpdate<number>>;

		/*
		* This attributes a list of space-separated strings, each corresponding to the id attribute of the <th> elements that applies to this element [MDN].
		*/
		headers?: string;

		/*
		* This attributes a list of space-separated strings, each corresponding to the id attribute of the <th> elements that applies to this element [MDN].
		*/
		headersBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* This attribute contains a non-negative integer value that indicates on how many rows does the cell extend. Its default value is 1; if its value is set to 0, it does extend until the end of the table section (<thead>, <tbody>, <tfoot>, eventually implicitly defined) the cell belongs to. Values higher than 65534 are clipped down to 65534 [MDN].
		*/
		rowSpan?: number;

		/*
		* This attribute contains a non-negative integer value that indicates on how many rows does the cell extend. Its default value is 1; if its value is set to 0, it does extend until the end of the table section (<thead>, <tbody>, <tfoot>, eventually implicitly defined) the cell belongs to. Values higher than 65534 are clipped down to 65534 [MDN].
		*/
		rowSpanBinder?: b.IBinder<b.PropertyUpdate<number>>;

		//#endregion Properties
	}

	//#endregion ITableHeaderCellElementConfig

	//#region ITableRowElementConfig

	export interface ITableRowElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion ITableRowElementConfig

	//#region ITextAreaElementConfig

	export interface ITextAreaElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		/*
		* This Boolean attribute lets you specify that a form control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form-associated element in a document can have this attribute specified [MDN].
		*/
		autoFocus?: boolean;

		/*
		* This Boolean attribute lets you specify that a form control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form-associated element in a document can have this attribute specified [MDN].
		*/
		autoFocusBinder?: b.IBinder<b.PropertyUpdate<boolean>>;

		/*
		* The visible width of the text control, in average character widths. If it is specified, it must be a positive integer. If it is not specified, the default value is 20 (HTML5) [MDN].
		*/
		columns?: number;

		/*
		* The visible width of the text control, in average character widths. If it is specified, it must be a positive integer. If it is not specified, the default value is 20 (HTML5) [MDN].
		*/
		columnsBinder?: b.IBinder<b.PropertyUpdate<number>>;

		/*
		* This Boolean attribute indicates that the user cannot interact with the control. (If this attribute is not specified, the control inherits its setting from the containing element, for example <fieldset>; if there is no containing element with the disabled attribute set, then the control is enabled.) [MDN].
		*/
		disabled?: boolean;

		/*
		* This Boolean attribute indicates that the user cannot interact with the control. (If this attribute is not specified, the control inherits its setting from the containing element, for example <fieldset>; if there is no containing element with the disabled attribute set, then the control is enabled.) [MDN].
		*/
		disabledBinder?: b.IBinder<b.PropertyUpdate<boolean>>;

		/*
		* The form element that the textarea element is associated with (its "form owner"). The value of the attribute must be an ID of a form element in the same document. If this attribute is not specified, the textarea element must be a descendant of a form element. This attribute enables you to place textarea elements anywhere within a document, not just as descendants of their form elements [MDN].
		*/
		formID?: string;
		/*
		* The maximum number of characters (Unicode code points) that the user can enter. If it is not specified, the user can enter an unlimited number of characters [MDN].
		*/
		maxLength?: number;

		/*
		* The maximum number of characters (Unicode code points) that the user can enter. If it is not specified, the user can enter an unlimited number of characters [MDN].
		*/
		maxLengthBinder?: b.IBinder<b.PropertyUpdate<number>>;

		/*
		* The name of the control [MDN].
		*/
		name?: string;

		/*
		* The name of the control [MDN].
		*/
		nameBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* A hint to the user of what can be entered in the control. The placeholder text must not contain carriage returns or line-feeds [MDN].
		*/
		placeHolder?: string;

		/*
		* A hint to the user of what can be entered in the control. The placeholder text must not contain carriage returns or line-feeds [MDN].
		*/
		placeHolderBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* This Boolean attribute indicates that the user cannot modify the value of the control. Unlike the disabled attribute, the readonly attribute does not prevent the user from clicking or selecting in the control. The value of a read-only control is still submitted with the form [MDN].
		*/
		readOnly?: boolean;

		/*
		* This Boolean attribute indicates that the user cannot modify the value of the control. Unlike the disabled attribute, the readonly attribute does not prevent the user from clicking or selecting in the control. The value of a read-only control is still submitted with the form [MDN].
		*/
		readOnlyBinder?: b.IBinder<b.PropertyUpdate<boolean>>;

		/*
		* This attribute specifies that the user must fill in a value before submitting a form [MDN].
		*/
		required?: boolean;

		/*
		* This attribute specifies that the user must fill in a value before submitting a form [MDN].
		*/
		requiredBinder?: b.IBinder<b.PropertyUpdate<boolean>>;

		/*
		* The number of visible text lines for the control [MDN].
		*/
		rows?: number;

		/*
		* The number of visible text lines for the control [MDN].
		*/
		rowsBinder?: b.IBinder<b.PropertyUpdate<number>>;


		/*
		* The index to the last character in the current selection [MDN].
		*/
		selectionEndBinder?: b.IBinder<b.PropertyUpdate<number>>;


		/*
		* The index to the first character in the current selection [MDN].
		*/
		selectionStartBinder?: b.IBinder<b.PropertyUpdate<number>>;

		/*
		* Html.TextAreaWrap enumerates the values of this property.
		* Indicates how the control wraps text. Possible values are:  hard: The browser automatically inserts line breaks (CR+LF) so that each line has no more than the width of the control; the cols attribute must be specified. soft: The browser ensures that all line breaks in the value consist of a CR+LF pair, but does not insert any additional line breaks. If this attribute is not specified, soft is its default value [MDN].
		*/
		wrap?: string;

		/*
		* Html.TextAreaWrap enumerates the values of this property.
		* Indicates how the control wraps text. Possible values are:  hard: The browser automatically inserts line breaks (CR+LF) so that each line has no more than the width of the control; the cols attribute must be specified. soft: The browser ensures that all line breaks in the value consist of a CR+LF pair, but does not insert any additional line breaks. If this attribute is not specified, soft is its default value [MDN].
		*/
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

		//#endregion Properties
	}

	//#endregion ITextAreaElementConfig

	//#region ITitleElementConfig

	export interface ITitleElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion ITitleElementConfig

	//#region ITrackElementConfig

	export interface ITrackElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		/*
		* This attribute indicates that the track should be enabled unless the user's preferences indicate that another track is more appropriate. This may only be used on one track element per media element [MDN].
		*/
		default?: boolean;

		/*
		* This attribute indicates that the track should be enabled unless the user's preferences indicate that another track is more appropriate. This may only be used on one track element per media element [MDN].
		*/
		defaultBinder?: b.IBinder<b.PropertyUpdate<boolean>>;

		/*
		* Html.TrackKind enumerates the values of this property.
		* The following keywords are allowed:  subtitles, captions, descriptions, chapters, metadata. If omitted the default kind is subtitles [MDN].
		*/
		kind?: string;

		/*
		* Html.TrackKind enumerates the values of this property.
		* The following keywords are allowed:  subtitles, captions, descriptions, chapters, metadata. If omitted the default kind is subtitles [MDN].
		*/
		kindBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* A user-readable title of the text track which is used by the browser when listing available text tracks [MDN].
		*/
		label?: string;

		/*
		* A user-readable title of the text track which is used by the browser when listing available text tracks [MDN].
		*/
		labelBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* Address of the track. Must be a valid URL. This attribute must be defined [MDN].
		*/
		source?: string;

		/*
		* Address of the track. Must be a valid URL. This attribute must be defined [MDN].
		*/
		sourceBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* Language of the track text data. It must be a valid BCP 47 language tag. If the kind attribute is set to subtitles, then srclang must be defined [MDN].
		*/
		sourceLanguage?: string;

		/*
		* Language of the track text data. It must be a valid BCP 47 language tag. If the kind attribute is set to subtitles, then srclang must be defined [MDN].
		*/
		sourceLanguageBinder?: b.IBinder<b.PropertyUpdate<string>>;

		//#endregion Properties
	}

	//#endregion ITrackElementConfig

	//#region IUnderlineElementConfig

	export interface IUnderlineElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion IUnderlineElementConfig

	//#region IUnorderedListElementConfig

	export interface IUnorderedListElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		/*
		* This Boolean attribute hints that the list should be rendered in a compact style. The interpretation of this attribute depends on the user agent and it doesn't work in all browsers.  Usage note: Do not use this attribute, as it has been deprecated: the <ul> element should be styled using CSS. To give a similar effect as the compact attribute, the CSS property line-height can be used with a value of 80% [MDN].
		*/
		compact?: boolean;

		/*
		* This Boolean attribute hints that the list should be rendered in a compact style. The interpretation of this attribute depends on the user agent and it doesn't work in all browsers.  Usage note: Do not use this attribute, as it has been deprecated: the <ul> element should be styled using CSS. To give a similar effect as the compact attribute, the CSS property line-height can be used with a value of 80% [MDN].
		*/
		compactBinder?: b.IBinder<b.PropertyUpdate<boolean>>;

		/*
		* Html.UnorderedListType enumerates the values of this property.
		* Used to set the bullet style for the list. The values defined under HTML3.2 and the transitional version of HTML 4.0/4.01 are:  circle, disc, and square. A fourth bullet type has been defined in the WebTV interface, but not all browsers support it: triangle. If not present and if no CSS list-style-type property does apply to the element, the user agent decide to use a kind of bullets depending on the nesting level of the list.  
		* Note: Do not use this attribute, as it has been deprecated; use the CSS list-style-type property instead [MDN].
		*/
		type?: string;

		/*
		* Html.UnorderedListType enumerates the values of this property.
		* Used to set the bullet style for the list. The values defined under HTML3.2 and the transitional version of HTML 4.0/4.01 are:  circle, disc, and square. A fourth bullet type has been defined in the WebTV interface, but not all browsers support it: triangle. If not present and if no CSS list-style-type property does apply to the element, the user agent decide to use a kind of bullets depending on the nesting level of the list.  
		* Note: Do not use this attribute, as it has been deprecated; use the CSS list-style-type property instead [MDN].
		*/
		typeBinder?: b.IBinder<b.PropertyUpdate<string>>;

		//#endregion Properties
	}

	//#endregion IUnorderedListElementConfig

	//#region IVariableElementConfig

	export interface IVariableElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion IVariableElementConfig

	//#region IVideoElementConfig

	export interface IVideoElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		/*
		* A Boolean attribute; if specified, the video will automatically begin to play back as soon as it can do so without stopping to finish loading the data [MDN].
		*/
		autoPlay?: boolean;

		/*
		* A Boolean attribute; if specified, the video will automatically begin to play back as soon as it can do so without stopping to finish loading the data [MDN].
		*/
		autoPlayBinder?: b.IBinder<b.PropertyUpdate<boolean>>;

		/*
		* An attribute you can read to determine which time ranges of the media have been buffered. This attribute contains a TimeRanges object [MDN].
		*/
		buffered?: TimeRanges;

		/*
		* An attribute you can read to determine which time ranges of the media have been buffered. This attribute contains a TimeRanges object [MDN].
		*/
		bufferedBinder?: b.IBinder<b.PropertyUpdate<TimeRanges>>;

		/*
		* If this attribute is present, controls are included in the video for adjusting volume, seeking, pausing and resuming playback [MDN].
		*/
		controls?: boolean;

		/*
		* If this attribute is present, controls are included in the video for adjusting volume, seeking, pausing and resuming playback [MDN].
		*/
		controlsBinder?: b.IBinder<b.PropertyUpdate<boolean>>;

		/*
		* The height of the video's display area, in CSS pixels [MDN].
		*/
		height?: number;

		/*
		* The height of the video's display area, in CSS pixels [MDN].
		*/
		heightBinder?: b.IBinder<b.PropertyUpdate<number>>;

		/*
		* Specifies that the video should repeat upon reaching the end [MDN].
		*/
		loop?: boolean;

		/*
		* Specifies that the video should repeat upon reaching the end [MDN].
		*/
		loopBinder?: b.IBinder<b.PropertyUpdate<boolean>>;

		/*
		* A Boolean attribute which indicates the default setting of the audio contained in the video. If set, the audio will be initially silenced. Its default value is false, meaning that the audio will be played when the video is played [MDN].
		*/
		muted?: boolean;

		/*
		* A Boolean attribute which indicates the default setting of the audio contained in the video. If set, the audio will be initially silenced. Its default value is false, meaning that the audio will be played when the video is played [MDN].
		*/
		mutedBinder?: b.IBinder<b.PropertyUpdate<boolean>>;

		/*
		* Specifies the ranges of the video that have been played [MDN].
		*/
		played?: TimeRanges;

		/*
		* Specifies the ranges of the video that have been played [MDN].
		*/
		playedBinder?: b.IBinder<b.PropertyUpdate<TimeRanges>>;

		/*
		* Html.VideoPreload enumerates the values of this property.
		* This enumerated attribute is intended to provide a hint to the browser about what the author thinks will lead to the best user experience. It may have one of the following values:  none: hints that either the author thinks that the user won't need to consult that video or that the server wants to minimize its traffic; in others terms this hint indicates that the video should not be cached. metadata: hints that though the author thinks that the user won't need to consult that video, fetching the metadata (e.g. length) is reasonable. auto: hints that the user needs have priority; in others terms this hint indicated that, if needed, the whole video could be downloaded, even if the user is not expected to use it. the empty string: which is a synonym of the auto value. If not set, its default value is browser-defined (i.e. each browser can choose its own default value), though the spec advises it to be set to metadata.  Usage notes:  The autoplay attribute has precedence over this one as if one wants to automatically play a video, the browser will obviously need to download it. Setting both the autoplay and the preload attributes is allowed by the specification. The browser is not forced by the specification to follow the value of this attribute; it is a mere hint [MDN].
		*/
		preload?: string;

		/*
		* Html.VideoPreload enumerates the values of this property.
		* This enumerated attribute is intended to provide a hint to the browser about what the author thinks will lead to the best user experience. It may have one of the following values:  none: hints that either the author thinks that the user won't need to consult that video or that the server wants to minimize its traffic; in others terms this hint indicates that the video should not be cached. metadata: hints that though the author thinks that the user won't need to consult that video, fetching the metadata (e.g. length) is reasonable. auto: hints that the user needs have priority; in others terms this hint indicated that, if needed, the whole video could be downloaded, even if the user is not expected to use it. the empty string: which is a synonym of the auto value. If not set, its default value is browser-defined (i.e. each browser can choose its own default value), though the spec advises it to be set to metadata.  Usage notes:  The autoplay attribute has precedence over this one as if one wants to automatically play a video, the browser will obviously need to download it. Setting both the autoplay and the preload attributes is allowed by the specification. The browser is not forced by the specification to follow the value of this attribute; it is a mere hint [MDN].
		*/
		preloadBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* A URL indicating a poster frame to show until the user plays or seeks. If this attribute isn't specified, nothing is displayed until the first frame is available; then the first frame is displayed as the poster frame [MDN].
		*/
		poster?: string;

		/*
		* A URL indicating a poster frame to show until the user plays or seeks. If this attribute isn't specified, nothing is displayed until the first frame is available; then the first frame is displayed as the poster frame [MDN].
		*/
		posterBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* The URL of the video to embed. This is optional; you may instead use the <source> element within the video block to specify the video to embed [MDN].
		*/
		source?: string;

		/*
		* The URL of the video to embed. This is optional; you may instead use the <source> element within the video block to specify the video to embed [MDN].
		*/
		sourceBinder?: b.IBinder<b.PropertyUpdate<string>>;

		/*
		* The width of the video's display area, in CSS pixels [MDN].
		*/
		width?: number;

		/*
		* The width of the video's display area, in CSS pixels [MDN].
		*/
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

		//#endregion Properties
	}

	//#endregion IVideoElementConfig

	//#region IWordBreakOpportunityElementConfig

	export interface IWordBreakOpportunityElementConfig extends IHtmlElementContainerConfig {

		//#region Properties

		//#endregion Properties
	}

	//#endregion IWordBreakOpportunityElementConfig
}

//#endregion Configs

//#region Elements

module Classical.Html.Elements {

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

		private _classesProperty: b.PropertyUpdate<string>;
		private _directionProperty: b.PropertyUpdate<string>;
		private _draggableProperty: b.PropertyUpdate<boolean>;
		private _hiddenProperty: b.PropertyUpdate<boolean>;
		private _idProperty: b.PropertyUpdate<string>;
		private _languageProperty: b.PropertyUpdate<string>;
		private _spellCheckProperty: b.PropertyUpdate<boolean>;
		private _titleProperty: b.PropertyUpdate<string>;
		private _fullScreenChangeEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
		private _fullScreenErrorEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
		private _animationEndEvent: HtmlElementEvent<Elements.HtmlElement, AnimationEvent>;
		private _animationIterationEvent: HtmlElementEvent<Elements.HtmlElement, AnimationEvent>;
		private _animationStartEvent: HtmlElementEvent<Elements.HtmlElement, AnimationEvent>;
		private _transitionEndEvent: HtmlElementEvent<Elements.HtmlElement, TransitionEvent>;
		private _gamepadConnectedEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
		private _gamepadDisconnectedEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
		private _compositionEndEvent: HtmlElementEvent<Elements.HtmlElement, CompositionEvent>;
		private _compositionStartEvent: HtmlElementEvent<Elements.HtmlElement, CompositionEvent>;
		private _compositionUpdateEvent: HtmlElementEvent<Elements.HtmlElement, CompositionEvent>;
		private _keyDownEvent: HtmlElementEvent<Elements.HtmlElement, KeyboardEvent>;
		private _keyPressEvent: HtmlElementEvent<Elements.HtmlElement, KeyboardEvent>;
		private _keyUpEvent: HtmlElementEvent<Elements.HtmlElement, KeyboardEvent>;
		private _clickEvent: HtmlElementEvent<Elements.HtmlElement, MouseEvent>;
		private _doubleClickEvent: HtmlElementEvent<Elements.HtmlElement, MouseEvent>;
		private _mouseDownEvent: HtmlElementEvent<Elements.HtmlElement, MouseEvent>;
		private _mouseEnterEvent: HtmlElementEvent<Elements.HtmlElement, MouseEvent>;
		private _mouseLeaveEvent: HtmlElementEvent<Elements.HtmlElement, MouseEvent>;
		private _mouseMoveEvent: HtmlElementEvent<Elements.HtmlElement, MouseEvent>;
		private _mouseOutEvent: HtmlElementEvent<Elements.HtmlElement, MouseEvent>;
		private _mouseOverEvent: HtmlElementEvent<Elements.HtmlElement, MouseEvent>;
		private _mouseUpEvent: HtmlElementEvent<Elements.HtmlElement, MouseEvent>;
		private _wheelEvent: HtmlElementEvent<Elements.HtmlElement, WheelEvent>;
		private _contextMenuEvent: HtmlElementEvent<Elements.HtmlElement, MouseEvent>;
		private _pointerLockChangeEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
		private _pointerLockErrorEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
		private _blurEvent: HtmlElementEvent<Elements.HtmlElement, FocusEvent>;
		private _focusEvent: HtmlElementEvent<Elements.HtmlElement, FocusEvent>;
		private _afterPrintEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
		private _beforePrintEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
		private _dragEndEvent: HtmlElementEvent<Elements.HtmlElement, DragEvent>;
		private _dragEnterEvent: HtmlElementEvent<Elements.HtmlElement, DragEvent>;
		private _dragEvent: HtmlElementEvent<Elements.HtmlElement, DragEvent>;
		private _dragLeaveEvent: HtmlElementEvent<Elements.HtmlElement, DragEvent>;
		private _dragOverEvent: HtmlElementEvent<Elements.HtmlElement, DragEvent>;
		private _dragStartEvent: HtmlElementEvent<Elements.HtmlElement, DragEvent>;
		private _dropEvent: HtmlElementEvent<Elements.HtmlElement, DragEvent>;
		private _loadEvent: HtmlElementEvent<Elements.HtmlElement, UIEvent>;
		private _resizeEvent: HtmlElementEvent<Elements.HtmlElement, UIEvent>;
		private _scrollEvent: HtmlElementEvent<Elements.HtmlElement, UIEvent>;
		private _selectEvent: HtmlElementEvent<Elements.HtmlElement, UIEvent>;
		private _offlineBackOnlineEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
		private _offlineEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
		private _connectionCheckingEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
		private _connectionDownloadingEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
		private _connectionErrorEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
		private _connectionNoUpdateEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
		private _connectionObsoleteEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
		private _connectionUpdateReadyEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
		private _connectionCachedEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
		private _svgAbortEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
		private _svgBeginEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
		private _svgEndEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
		private _svgErrorEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
		private _svgLoadEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
		private _svgRepeatEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
		private _svgResizeEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
		private _svgScrollEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
		private _svgUnloadEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
		private _svgZoomEvent: HtmlElementEvent<Elements.HtmlElement, SVGZoomEvent>;
		private _webSocketErrorEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
		private _pageHideEvent: HtmlElementEvent<Elements.HtmlElement, PageTransitionEvent>;
		private _pageShowEvent: HtmlElementEvent<Elements.HtmlElement, PageTransitionEvent>;
		private _showEvent: HtmlElementEvent<Elements.HtmlElement, MouseEvent>;
		private _contentLoadedEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
		private _hashChangeEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
		private _popStateEvent: HtmlElementEvent<Elements.HtmlElement, PopStateEvent>;
		private _invalidEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
		private _beforeUnloadEvent: HtmlElementEvent<Elements.HtmlElement, BeforeUnloadEvent>;
		private _indexedDatabaseErrorEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
		private _visibilityChangeEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
		private _requestLoadStartEvent: HtmlElementEvent<Elements.HtmlElement, ProgressEvent>;
		private _serverErrorEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
		private _webStorageEvent: HtmlElementEvent<Elements.HtmlElement, StorageEvent>;
		private _requestReadyStateChangeEvent: HtmlElementEvent<Elements.HtmlElement, Event>;
		private _requestTimeoutEvent: HtmlElementEvent<Elements.HtmlElement, ProgressEvent>;

        //#endregion Fields

        //#region Properties

		//#region classesProperty

		/**
		* This attribute is a space-separated list of the classes of the element. Classes allows CSS and Javascript to select and access specific elements via the class selectors or functions like the DOM method document.getElementsByClassName [MDN].
		*/
		get classesProperty(): b.PropertyUpdate<string> {
			if(!this._classesProperty)
				initializeProperty(this, 'classes', 'className');
			return this._classesProperty;
		}

		//#endregion classesProperty

		//#region classes

		/**
		* This attribute is a space-separated list of the classes of the element. Classes allows CSS and Javascript to select and access specific elements via the class selectors or functions like the DOM method document.getElementsByClassName [MDN].
		*/
		get classes(): string {
			return this.classesProperty.value;
		}

		set classes(value: string) {
			this.classesProperty.value = value;
		}

		//#endregion classes

		//#region directionProperty

		/**
		* Html.GlobalDirection enumerates the values of this property.
		* This enumerated attribute indicates the directionality of the element's text. It can have the following values: ltr, rtl, auto [MDN].
		*/
		get directionProperty(): b.PropertyUpdate<string> {
			if(!this._directionProperty)
				initializeProperty(this, 'direction', 'dir');
			return this._directionProperty;
		}

		//#endregion directionProperty

		//#region direction

		/**
		* Html.GlobalDirection enumerates the values of this property.
		* This enumerated attribute indicates the directionality of the element's text. It can have the following values: ltr, rtl, auto [MDN].
		*/
		get direction(): string {
			return this.directionProperty.value;
		}

		set direction(value: string) {
			this.directionProperty.value = value;
		}

		//#endregion direction

		//#region draggableProperty

		/**
		* This enumerated attribute indicates whether the element can be dragged, using the Drag and Drop API. The attribute must take a boolean value of either true or false [MDN].
		*/
		get draggableProperty(): b.PropertyUpdate<boolean> {
			if(!this._draggableProperty)
				initializeProperty(this, 'draggable', 'draggable');
			return this._draggableProperty;
		}

		//#endregion draggableProperty

		//#region draggable

		/**
		* This enumerated attribute indicates whether the element can be dragged, using the Drag and Drop API. The attribute must take a boolean value of either true or false [MDN].
		*/
		get draggable(): boolean {
			return this.draggableProperty.value;
		}

		set draggable(value: boolean) {
			this.draggableProperty.value = value;
		}

		//#endregion draggable

		//#region hiddenProperty

		/**
		* This Boolean attribute indicates that the element is not yet, or is no longer, relevant. For example, it can be used to hide elements of the page that can't be used until the login process has been completed. The browser won't render such elements [MDN].
		*/
		get hiddenProperty(): b.PropertyUpdate<boolean> {
			if(!this._hiddenProperty)
				initializeProperty(this, 'hidden', 'hidden');
			return this._hiddenProperty;
		}

		//#endregion hiddenProperty

		//#region hidden

		/**
		* This Boolean attribute indicates that the element is not yet, or is no longer, relevant. For example, it can be used to hide elements of the page that can't be used until the login process has been completed. The browser won't render such elements [MDN].
		*/
		get hidden(): boolean {
			return this.hiddenProperty.value;
		}

		set hidden(value: boolean) {
			this.hiddenProperty.value = value;
		}

		//#endregion hidden

		//#region idProperty

		/**
		* This attribute defines a unique identifier which must be unique to the entire document. Its purpose is to identify the element when linking, scripting, or styling [MDN].
		*/
		get idProperty(): b.PropertyUpdate<string> {
			if(!this._idProperty)
				initializeProperty(this, 'id', 'id');
			return this._idProperty;
		}

		//#endregion idProperty

		//#region id

		/**
		* This attribute defines a unique identifier which must be unique to the entire document. Its purpose is to identify the element when linking, scripting, or styling [MDN].
		*/
		get id(): string {
			return this.idProperty.value;
		}

		set id(value: string) {
			this.idProperty.value = value;
		}

		//#endregion id

		//#region languageProperty

		/**
		* This attribute participates in defining the language of the element, the language that non-editable elements are written in or the language that editable elements should be written in. The tag contains one single entry value in the format defines in the Tags for Identifying Languages (BCP47) IETF document. If the tag content is the empty string the language is set to unknown; if the tag content is not valid, regarding to BCP47, it is set to invalid [MDN].
		*/
		get languageProperty(): b.PropertyUpdate<string> {
			if(!this._languageProperty)
				initializeProperty(this, 'language', 'lang');
			return this._languageProperty;
		}

		//#endregion languageProperty

		//#region language

		/**
		* This attribute participates in defining the language of the element, the language that non-editable elements are written in or the language that editable elements should be written in. The tag contains one single entry value in the format defines in the Tags for Identifying Languages (BCP47) IETF document. If the tag content is the empty string the language is set to unknown; if the tag content is not valid, regarding to BCP47, it is set to invalid [MDN].
		*/
		get language(): string {
			return this.languageProperty.value;
		}

		set language(value: string) {
			this.languageProperty.value = value;
		}

		//#endregion language

		//#region spellCheckProperty

		/**
		* This boolean attribute defines whether the element may be checked for spelling errors. It may have the following values [MDN].
		*/
		get spellCheckProperty(): b.PropertyUpdate<boolean> {
			if(!this._spellCheckProperty)
				initializeProperty(this, 'spellCheck', 'spellcheck');
			return this._spellCheckProperty;
		}

		//#endregion spellCheckProperty

		//#region spellCheck

		/**
		* This boolean attribute defines whether the element may be checked for spelling errors. It may have the following values [MDN].
		*/
		get spellCheck(): boolean {
			return this.spellCheckProperty.value;
		}

		set spellCheck(value: boolean) {
			this.spellCheckProperty.value = value;
		}

		//#endregion spellCheck

		//#region titleProperty

		/**
		* This attribute contains a text representing advisory information related to the element it belongs too. Such information can typically, but not necessarily, be presented to the user as a tooltip [MDN].
		*/
		get titleProperty(): b.PropertyUpdate<string> {
			if(!this._titleProperty)
				initializeProperty(this, 'title', 'title');
			return this._titleProperty;
		}

		//#endregion titleProperty

		//#region title

		/**
		* This attribute contains a text representing advisory information related to the element it belongs too. Such information can typically, but not necessarily, be presented to the user as a tooltip [MDN].
		*/
		get title(): string {
			return this.titleProperty.value;
		}

		set title(value: string) {
			this.titleProperty.value = value;
		}

		//#endregion title

		//#region fullScreenChangeEvent

		/**
		* The fullScreenChangeEvent event is executed when an element was turned to fullscreen mode or back to normal mode [MDN].
		* Specification: Full Screen
		* DOM Event Name: fullscreenchange
		*/
		get fullScreenChangeEvent(): HtmlElementEvent<Elements.HtmlElement, Event> {
			if(!this._fullScreenChangeEvent)
				this._fullScreenChangeEvent = new HtmlElementEvent<Elements.HtmlElement, Event>('fullscreenchange', 'Event', this);

			return this._fullScreenChangeEvent;
		}

		//#endregion fullScreenChangeEvent

		//#region fullScreenErrorEvent

		/**
		* The fullScreenErrorEvent event is executed when it was impossible to switch to fullscreen mode for technical reasons or because the permission was denied [MDN].
		* Specification: Full Screen
		* DOM Event Name: fullscreenerror
		*/
		get fullScreenErrorEvent(): HtmlElementEvent<Elements.HtmlElement, Event> {
			if(!this._fullScreenErrorEvent)
				this._fullScreenErrorEvent = new HtmlElementEvent<Elements.HtmlElement, Event>('fullscreenerror', 'Event', this);

			return this._fullScreenErrorEvent;
		}

		//#endregion fullScreenErrorEvent

		//#region animationEndEvent

		/**
		* The animationEndEvent event is executed when a CSS animation has completed [MDN].
		* Specification: CSS Animations
		* DOM Event Name: animationend
		*/
		get animationEndEvent(): HtmlElementEvent<Elements.HtmlElement, AnimationEvent> {
			if(!this._animationEndEvent)
				this._animationEndEvent = new HtmlElementEvent<Elements.HtmlElement, AnimationEvent>('animationend', 'AnimationEvent', this);

			return this._animationEndEvent;
		}

		//#endregion animationEndEvent

		//#region animationIterationEvent

		/**
		* The animationIterationEvent event is executed when a CSS animation is repeated [MDN].
		* Specification: CSS Animations
		* DOM Event Name: animationiteration
		*/
		get animationIterationEvent(): HtmlElementEvent<Elements.HtmlElement, AnimationEvent> {
			if(!this._animationIterationEvent)
				this._animationIterationEvent = new HtmlElementEvent<Elements.HtmlElement, AnimationEvent>('animationiteration', 'AnimationEvent', this);

			return this._animationIterationEvent;
		}

		//#endregion animationIterationEvent

		//#region animationStartEvent

		/**
		* The animationStartEvent event is executed when a CSS animation has started [MDN].
		* Specification: CSS Animations
		* DOM Event Name: animationstart
		*/
		get animationStartEvent(): HtmlElementEvent<Elements.HtmlElement, AnimationEvent> {
			if(!this._animationStartEvent)
				this._animationStartEvent = new HtmlElementEvent<Elements.HtmlElement, AnimationEvent>('animationstart', 'AnimationEvent', this);

			return this._animationStartEvent;
		}

		//#endregion animationStartEvent

		//#region transitionEndEvent

		/**
		* The transitionEndEvent event is executed when a CSS transition has completed [MDN].
		* Specification: CSS Transitions
		* DOM Event Name: transitionend
		*/
		get transitionEndEvent(): HtmlElementEvent<Elements.HtmlElement, TransitionEvent> {
			if(!this._transitionEndEvent)
				this._transitionEndEvent = new HtmlElementEvent<Elements.HtmlElement, TransitionEvent>('transitionend', 'TransitionEvent', this);

			return this._transitionEndEvent;
		}

		//#endregion transitionEndEvent

		//#region gamepadConnectedEvent

		/**
		* The gamepadConnectedEvent event is executed when a gamepad has been connected [MDN].
		* Specification: Gamepad
		* DOM Event Name: gamepadconnected
		*/
		get gamepadConnectedEvent(): HtmlElementEvent<Elements.HtmlElement, Event> {
			if(!this._gamepadConnectedEvent)
				this._gamepadConnectedEvent = new HtmlElementEvent<Elements.HtmlElement, Event>('gamepadconnected', 'Event', this);

			return this._gamepadConnectedEvent;
		}

		//#endregion gamepadConnectedEvent

		//#region gamepadDisconnectedEvent

		/**
		* The gamepadDisconnectedEvent event is executed when a gamepad has been disconnected [MDN].
		* Specification: Gamepad
		* DOM Event Name: gamepaddisconnected
		*/
		get gamepadDisconnectedEvent(): HtmlElementEvent<Elements.HtmlElement, Event> {
			if(!this._gamepadDisconnectedEvent)
				this._gamepadDisconnectedEvent = new HtmlElementEvent<Elements.HtmlElement, Event>('gamepaddisconnected', 'Event', this);

			return this._gamepadDisconnectedEvent;
		}

		//#endregion gamepadDisconnectedEvent

		//#region compositionEndEvent

		/**
		* The compositionEndEvent event is executed when the composition of a passage of text has been completed or canceled [MDN].
		* Specification: DOM L3
		* DOM Event Name: compositionend
		*/
		get compositionEndEvent(): HtmlElementEvent<Elements.HtmlElement, CompositionEvent> {
			if(!this._compositionEndEvent)
				this._compositionEndEvent = new HtmlElementEvent<Elements.HtmlElement, CompositionEvent>('compositionend', 'CompositionEvent', this);

			return this._compositionEndEvent;
		}

		//#endregion compositionEndEvent

		//#region compositionStartEvent

		/**
		* The compositionStartEvent event is executed when the composition of a passage of text is prepared (similar to keydown for a keyboard input, but works with other inputs such as speech recognition) [MDN].
		* Specification: DOM L3
		* DOM Event Name: compositionstart
		*/
		get compositionStartEvent(): HtmlElementEvent<Elements.HtmlElement, CompositionEvent> {
			if(!this._compositionStartEvent)
				this._compositionStartEvent = new HtmlElementEvent<Elements.HtmlElement, CompositionEvent>('compositionstart', 'CompositionEvent', this);

			return this._compositionStartEvent;
		}

		//#endregion compositionStartEvent

		//#region compositionUpdateEvent

		/**
		* The compositionUpdateEvent event is executed when a character is added to a passage of text being composed [MDN].
		* Specification: DOM L3
		* DOM Event Name: compositionupdate
		*/
		get compositionUpdateEvent(): HtmlElementEvent<Elements.HtmlElement, CompositionEvent> {
			if(!this._compositionUpdateEvent)
				this._compositionUpdateEvent = new HtmlElementEvent<Elements.HtmlElement, CompositionEvent>('compositionupdate', 'CompositionEvent', this);

			return this._compositionUpdateEvent;
		}

		//#endregion compositionUpdateEvent

		//#region keyDownEvent

		/**
		* The keyDownEvent event is executed when a key is pressed down [MDN].
		* Specification: DOM L3
		* DOM Event Name: keydown
		*/
		get keyDownEvent(): HtmlElementEvent<Elements.HtmlElement, KeyboardEvent> {
			if(!this._keyDownEvent)
				this._keyDownEvent = new HtmlElementEvent<Elements.HtmlElement, KeyboardEvent>('keydown', 'KeyboardEvent', this);

			return this._keyDownEvent;
		}

		//#endregion keyDownEvent

		//#region keyPressEvent

		/**
		* The keyPressEvent event is executed when a key is pressed down and that key normally produces a character value (use input instead) [MDN].
		* Specification: DOM L3
		* DOM Event Name: keypress
		*/
		get keyPressEvent(): HtmlElementEvent<Elements.HtmlElement, KeyboardEvent> {
			if(!this._keyPressEvent)
				this._keyPressEvent = new HtmlElementEvent<Elements.HtmlElement, KeyboardEvent>('keypress', 'KeyboardEvent', this);

			return this._keyPressEvent;
		}

		//#endregion keyPressEvent

		//#region keyUpEvent

		/**
		* The keyUpEvent event is executed when a key is released [MDN].
		* Specification: DOM L3
		* DOM Event Name: keyup
		*/
		get keyUpEvent(): HtmlElementEvent<Elements.HtmlElement, KeyboardEvent> {
			if(!this._keyUpEvent)
				this._keyUpEvent = new HtmlElementEvent<Elements.HtmlElement, KeyboardEvent>('keyup', 'KeyboardEvent', this);

			return this._keyUpEvent;
		}

		//#endregion keyUpEvent

		//#region clickEvent

		/**
		* The clickEvent event is executed when a pointing device button has been pressed and released on an element [MDN].
		* Specification: DOM L3
		* DOM Event Name: click
		*/
		get clickEvent(): HtmlElementEvent<Elements.HtmlElement, MouseEvent> {
			if(!this._clickEvent)
				this._clickEvent = new HtmlElementEvent<Elements.HtmlElement, MouseEvent>('click', 'MouseEvent', this);

			return this._clickEvent;
		}

		//#endregion clickEvent

		//#region doubleClickEvent

		/**
		* The doubleClickEvent event is executed when a pointing device button is clicked twice on an element [MDN].
		* Specification: DOM L3
		* DOM Event Name: dblclick
		*/
		get doubleClickEvent(): HtmlElementEvent<Elements.HtmlElement, MouseEvent> {
			if(!this._doubleClickEvent)
				this._doubleClickEvent = new HtmlElementEvent<Elements.HtmlElement, MouseEvent>('dblclick', 'MouseEvent', this);

			return this._doubleClickEvent;
		}

		//#endregion doubleClickEvent

		//#region mouseDownEvent

		/**
		* The mouseDownEvent event is executed when a pointing device button (usually a mouse) is pressed on an element [MDN].
		* Specification: DOM L3
		* DOM Event Name: mousedown
		*/
		get mouseDownEvent(): HtmlElementEvent<Elements.HtmlElement, MouseEvent> {
			if(!this._mouseDownEvent)
				this._mouseDownEvent = new HtmlElementEvent<Elements.HtmlElement, MouseEvent>('mousedown', 'MouseEvent', this);

			return this._mouseDownEvent;
		}

		//#endregion mouseDownEvent

		//#region mouseEnterEvent

		/**
		* The mouseEnterEvent event is executed when a pointing device is moved onto the element that has the listener attached [MDN].
		* Specification: DOM L3
		* DOM Event Name: mouseenter
		*/
		get mouseEnterEvent(): HtmlElementEvent<Elements.HtmlElement, MouseEvent> {
			if(!this._mouseEnterEvent)
				this._mouseEnterEvent = new HtmlElementEvent<Elements.HtmlElement, MouseEvent>('mouseenter', 'MouseEvent', this);

			return this._mouseEnterEvent;
		}

		//#endregion mouseEnterEvent

		//#region mouseLeaveEvent

		/**
		* The mouseLeaveEvent event is executed when a pointing device is moved off the element that has the listener attached [MDN].
		* Specification: DOM L3
		* DOM Event Name: mouseleave
		*/
		get mouseLeaveEvent(): HtmlElementEvent<Elements.HtmlElement, MouseEvent> {
			if(!this._mouseLeaveEvent)
				this._mouseLeaveEvent = new HtmlElementEvent<Elements.HtmlElement, MouseEvent>('mouseleave', 'MouseEvent', this);

			return this._mouseLeaveEvent;
		}

		//#endregion mouseLeaveEvent

		//#region mouseMoveEvent

		/**
		* The mouseMoveEvent event is executed when a pointing device is moved over an element [MDN].
		* Specification: DOM L3
		* DOM Event Name: mousemove
		*/
		get mouseMoveEvent(): HtmlElementEvent<Elements.HtmlElement, MouseEvent> {
			if(!this._mouseMoveEvent)
				this._mouseMoveEvent = new HtmlElementEvent<Elements.HtmlElement, MouseEvent>('mousemove', 'MouseEvent', this);

			return this._mouseMoveEvent;
		}

		//#endregion mouseMoveEvent

		//#region mouseOutEvent

		/**
		* The mouseOutEvent event is executed when a pointing device is moved off the element that has the listener attached or off one of its children [MDN].
		* Specification: DOM L3
		* DOM Event Name: mouseout
		*/
		get mouseOutEvent(): HtmlElementEvent<Elements.HtmlElement, MouseEvent> {
			if(!this._mouseOutEvent)
				this._mouseOutEvent = new HtmlElementEvent<Elements.HtmlElement, MouseEvent>('mouseout', 'MouseEvent', this);

			return this._mouseOutEvent;
		}

		//#endregion mouseOutEvent

		//#region mouseOverEvent

		/**
		* The mouseOverEvent event is executed when a pointing device is moved onto the element that has the listener attached or onto one of its children [MDN].
		* Specification: DOM L3
		* DOM Event Name: mouseover
		*/
		get mouseOverEvent(): HtmlElementEvent<Elements.HtmlElement, MouseEvent> {
			if(!this._mouseOverEvent)
				this._mouseOverEvent = new HtmlElementEvent<Elements.HtmlElement, MouseEvent>('mouseover', 'MouseEvent', this);

			return this._mouseOverEvent;
		}

		//#endregion mouseOverEvent

		//#region mouseUpEvent

		/**
		* The mouseUpEvent event is executed when a pointing device button is released over an element [MDN].
		* Specification: DOM L3
		* DOM Event Name: mouseup
		*/
		get mouseUpEvent(): HtmlElementEvent<Elements.HtmlElement, MouseEvent> {
			if(!this._mouseUpEvent)
				this._mouseUpEvent = new HtmlElementEvent<Elements.HtmlElement, MouseEvent>('mouseup', 'MouseEvent', this);

			return this._mouseUpEvent;
		}

		//#endregion mouseUpEvent

		//#region wheelEvent

		/**
		* The wheelEvent event is executed when a wheel button of a pointing device is rotated in any direction [MDN].
		* Specification: DOM L3
		* DOM Event Name: wheel
		*/
		get wheelEvent(): HtmlElementEvent<Elements.HtmlElement, WheelEvent> {
			if(!this._wheelEvent)
				this._wheelEvent = new HtmlElementEvent<Elements.HtmlElement, WheelEvent>('wheel', 'WheelEvent', this);

			return this._wheelEvent;
		}

		//#endregion wheelEvent

		//#region contextMenuEvent

		/**
		* The contextMenuEvent event is executed when the right button of the mouse is clicked (before the context menu is displayed) [MDN].
		* Specification: HTML5
		* DOM Event Name: contextmenu
		*/
		get contextMenuEvent(): HtmlElementEvent<Elements.HtmlElement, MouseEvent> {
			if(!this._contextMenuEvent)
				this._contextMenuEvent = new HtmlElementEvent<Elements.HtmlElement, MouseEvent>('contextmenu', 'MouseEvent', this);

			return this._contextMenuEvent;
		}

		//#endregion contextMenuEvent

		//#region pointerLockChangeEvent

		/**
		* The pointerLockChangeEvent event is executed when the pointer was locked or released [MDN].
		* Specification: Pointer Lock
		* DOM Event Name: pointerlockchange
		*/
		get pointerLockChangeEvent(): HtmlElementEvent<Elements.HtmlElement, Event> {
			if(!this._pointerLockChangeEvent)
				this._pointerLockChangeEvent = new HtmlElementEvent<Elements.HtmlElement, Event>('pointerlockchange', 'Event', this);

			return this._pointerLockChangeEvent;
		}

		//#endregion pointerLockChangeEvent

		//#region pointerLockErrorEvent

		/**
		* The pointerLockErrorEvent event is executed when it was impossible to lock the pointer for technical reasons or because the permission was denied [MDN].
		* Specification: Pointer Lock
		* DOM Event Name: pointerlockerror
		*/
		get pointerLockErrorEvent(): HtmlElementEvent<Elements.HtmlElement, Event> {
			if(!this._pointerLockErrorEvent)
				this._pointerLockErrorEvent = new HtmlElementEvent<Elements.HtmlElement, Event>('pointerlockerror', 'Event', this);

			return this._pointerLockErrorEvent;
		}

		//#endregion pointerLockErrorEvent

		//#region blurEvent

		/**
		* The blurEvent event is executed when an element has lost focus (does not bubble) [MDN].
		* Specification: DOM L3
		* DOM Event Name: blur
		*/
		get blurEvent(): HtmlElementEvent<Elements.HtmlElement, FocusEvent> {
			if(!this._blurEvent)
				this._blurEvent = new HtmlElementEvent<Elements.HtmlElement, FocusEvent>('blur', 'FocusEvent', this);

			return this._blurEvent;
		}

		//#endregion blurEvent

		//#region focusEvent

		/**
		* The focusEvent event is executed when an element has received focus (does not bubble) [MDN].
		* Specification: DOM L3
		* DOM Event Name: focus
		*/
		get focusEvent(): HtmlElementEvent<Elements.HtmlElement, FocusEvent> {
			if(!this._focusEvent)
				this._focusEvent = new HtmlElementEvent<Elements.HtmlElement, FocusEvent>('focus', 'FocusEvent', this);

			return this._focusEvent;
		}

		//#endregion focusEvent

		//#region afterPrintEvent

		/**
		* The afterPrintEvent event is executed when the associated document has started printing or the print preview has been closed [MDN].
		* Specification: HTML5
		* DOM Event Name: afterprint
		*/
		get afterPrintEvent(): HtmlElementEvent<Elements.HtmlElement, Event> {
			if(!this._afterPrintEvent)
				this._afterPrintEvent = new HtmlElementEvent<Elements.HtmlElement, Event>('afterprint', 'Event', this);

			return this._afterPrintEvent;
		}

		//#endregion afterPrintEvent

		//#region beforePrintEvent

		/**
		* The beforePrintEvent event is executed when the associated document is about to be printed or previewed for printing [MDN].
		* Specification: HTML5
		* DOM Event Name: beforeprint
		*/
		get beforePrintEvent(): HtmlElementEvent<Elements.HtmlElement, Event> {
			if(!this._beforePrintEvent)
				this._beforePrintEvent = new HtmlElementEvent<Elements.HtmlElement, Event>('beforeprint', 'Event', this);

			return this._beforePrintEvent;
		}

		//#endregion beforePrintEvent

		//#region dragEndEvent

		/**
		* The dragEndEvent event is executed when a drag operation is being ended (by releasing a mouse button or hitting the escape key) [MDN].
		* Specification: HTML5
		* DOM Event Name: dragend
		*/
		get dragEndEvent(): HtmlElementEvent<Elements.HtmlElement, DragEvent> {
			if(!this._dragEndEvent)
				this._dragEndEvent = new HtmlElementEvent<Elements.HtmlElement, DragEvent>('dragend', 'DragEvent', this);

			return this._dragEndEvent;
		}

		//#endregion dragEndEvent

		//#region dragEnterEvent

		/**
		* The dragEnterEvent event is executed when a dragged element or text selection enters a valid drop target [MDN].
		* Specification: HTML5
		* DOM Event Name: dragenter
		*/
		get dragEnterEvent(): HtmlElementEvent<Elements.HtmlElement, DragEvent> {
			if(!this._dragEnterEvent)
				this._dragEnterEvent = new HtmlElementEvent<Elements.HtmlElement, DragEvent>('dragenter', 'DragEvent', this);

			return this._dragEnterEvent;
		}

		//#endregion dragEnterEvent

		//#region dragEvent

		/**
		* The dragEvent event is executed when an element or text selection is being dragged (every 350ms) [MDN].
		* Specification: HTML5
		* DOM Event Name: drag
		*/
		get dragEvent(): HtmlElementEvent<Elements.HtmlElement, DragEvent> {
			if(!this._dragEvent)
				this._dragEvent = new HtmlElementEvent<Elements.HtmlElement, DragEvent>('drag', 'DragEvent', this);

			return this._dragEvent;
		}

		//#endregion dragEvent

		//#region dragLeaveEvent

		/**
		* The dragLeaveEvent event is executed when a dragged element or text selection leaves a valid drop target [MDN].
		* Specification: HTML5
		* DOM Event Name: dragleave
		*/
		get dragLeaveEvent(): HtmlElementEvent<Elements.HtmlElement, DragEvent> {
			if(!this._dragLeaveEvent)
				this._dragLeaveEvent = new HtmlElementEvent<Elements.HtmlElement, DragEvent>('dragleave', 'DragEvent', this);

			return this._dragLeaveEvent;
		}

		//#endregion dragLeaveEvent

		//#region dragOverEvent

		/**
		* The dragOverEvent event is executed when an element or text selection is being dragged over a valid drop target (every 350ms) [MDN].
		* Specification: HTML5
		* DOM Event Name: dragover
		*/
		get dragOverEvent(): HtmlElementEvent<Elements.HtmlElement, DragEvent> {
			if(!this._dragOverEvent)
				this._dragOverEvent = new HtmlElementEvent<Elements.HtmlElement, DragEvent>('dragover', 'DragEvent', this);

			return this._dragOverEvent;
		}

		//#endregion dragOverEvent

		//#region dragStartEvent

		/**
		* The dragStartEvent event is executed when the user starts dragging an element or text selection [MDN].
		* Specification: HTML5
		* DOM Event Name: dragstart
		*/
		get dragStartEvent(): HtmlElementEvent<Elements.HtmlElement, DragEvent> {
			if(!this._dragStartEvent)
				this._dragStartEvent = new HtmlElementEvent<Elements.HtmlElement, DragEvent>('dragstart', 'DragEvent', this);

			return this._dragStartEvent;
		}

		//#endregion dragStartEvent

		//#region dropEvent

		/**
		* The dropEvent event is executed when an element is dropped on a valid drop target [MDN].
		* Specification: HTML5
		* DOM Event Name: drop
		*/
		get dropEvent(): HtmlElementEvent<Elements.HtmlElement, DragEvent> {
			if(!this._dropEvent)
				this._dropEvent = new HtmlElementEvent<Elements.HtmlElement, DragEvent>('drop', 'DragEvent', this);

			return this._dropEvent;
		}

		//#endregion dropEvent

		//#region loadEvent

		/**
		* The loadEvent event is executed when a resource and its dependent resources have finished loading [MDN].
		* Specification: DOM L3
		* DOM Event Name: load
		*/
		get loadEvent(): HtmlElementEvent<Elements.HtmlElement, UIEvent> {
			if(!this._loadEvent)
				this._loadEvent = new HtmlElementEvent<Elements.HtmlElement, UIEvent>('load', 'UIEvent', this);

			return this._loadEvent;
		}

		//#endregion loadEvent

		//#region resizeEvent

		/**
		* The resizeEvent event is executed when the document view has been resized [MDN].
		* Specification: DOM L3
		* DOM Event Name: resize
		*/
		get resizeEvent(): HtmlElementEvent<Elements.HtmlElement, UIEvent> {
			if(!this._resizeEvent)
				this._resizeEvent = new HtmlElementEvent<Elements.HtmlElement, UIEvent>('resize', 'UIEvent', this);

			return this._resizeEvent;
		}

		//#endregion resizeEvent

		//#region scrollEvent

		/**
		* The scrollEvent event is executed when the document view or an element has been scrolled [MDN].
		* Specification: DOM L3
		* DOM Event Name: scroll
		*/
		get scrollEvent(): HtmlElementEvent<Elements.HtmlElement, UIEvent> {
			if(!this._scrollEvent)
				this._scrollEvent = new HtmlElementEvent<Elements.HtmlElement, UIEvent>('scroll', 'UIEvent', this);

			return this._scrollEvent;
		}

		//#endregion scrollEvent

		//#region selectEvent

		/**
		* The selectEvent event is executed when some text is being selected [MDN].
		* Specification: DOM L3
		* DOM Event Name: select
		*/
		get selectEvent(): HtmlElementEvent<Elements.HtmlElement, UIEvent> {
			if(!this._selectEvent)
				this._selectEvent = new HtmlElementEvent<Elements.HtmlElement, UIEvent>('select', 'UIEvent', this);

			return this._selectEvent;
		}

		//#endregion selectEvent

		//#region offlineBackOnlineEvent

		/**
		* The offlineBackOnlineEvent event is executed when the browser has gained access to the network (but particular websites might be unreachable) [MDN].
		* Specification: HTML5 offline
		* DOM Event Name: online
		*/
		get offlineBackOnlineEvent(): HtmlElementEvent<Elements.HtmlElement, Event> {
			if(!this._offlineBackOnlineEvent)
				this._offlineBackOnlineEvent = new HtmlElementEvent<Elements.HtmlElement, Event>('online', 'Event', this);

			return this._offlineBackOnlineEvent;
		}

		//#endregion offlineBackOnlineEvent

		//#region offlineEvent

		/**
		* The offlineEvent event is executed when the browser has lost access to the network [MDN].
		* Specification: HTML5 offline
		* DOM Event Name: offline
		*/
		get offlineEvent(): HtmlElementEvent<Elements.HtmlElement, Event> {
			if(!this._offlineEvent)
				this._offlineEvent = new HtmlElementEvent<Elements.HtmlElement, Event>('offline', 'Event', this);

			return this._offlineEvent;
		}

		//#endregion offlineEvent

		//#region connectionCheckingEvent

		/**
		* The connectionCheckingEvent event is executed when the user agent is checking for an update, or attempting to download the cache manifest for the first time [MDN].
		* Specification: Offline
		* DOM Event Name: checking
		*/
		get connectionCheckingEvent(): HtmlElementEvent<Elements.HtmlElement, Event> {
			if(!this._connectionCheckingEvent)
				this._connectionCheckingEvent = new HtmlElementEvent<Elements.HtmlElement, Event>('checking', 'Event', this);

			return this._connectionCheckingEvent;
		}

		//#endregion connectionCheckingEvent

		//#region connectionDownloadingEvent

		/**
		* The connectionDownloadingEvent event is executed when the user agent has found an update and is fetching it, or is downloading the resources listed by the cache manifest for the first time [MDN].
		* Specification: Offline
		* DOM Event Name: downloading
		*/
		get connectionDownloadingEvent(): HtmlElementEvent<Elements.HtmlElement, Event> {
			if(!this._connectionDownloadingEvent)
				this._connectionDownloadingEvent = new HtmlElementEvent<Elements.HtmlElement, Event>('downloading', 'Event', this);

			return this._connectionDownloadingEvent;
		}

		//#endregion connectionDownloadingEvent

		//#region connectionErrorEvent

		/**
		* The connectionErrorEvent event is executed when an error occurred while downloading the cache manifest or updating the content of the application [MDN].
		* Specification: Offline
		* DOM Event Name: error
		*/
		get connectionErrorEvent(): HtmlElementEvent<Elements.HtmlElement, Event> {
			if(!this._connectionErrorEvent)
				this._connectionErrorEvent = new HtmlElementEvent<Elements.HtmlElement, Event>('error', 'Event', this);

			return this._connectionErrorEvent;
		}

		//#endregion connectionErrorEvent

		//#region connectionNoUpdateEvent

		/**
		* The connectionNoUpdateEvent event is executed when the manifest hadn't changed [MDN].
		* Specification: Offline
		* DOM Event Name: noupdate
		*/
		get connectionNoUpdateEvent(): HtmlElementEvent<Elements.HtmlElement, Event> {
			if(!this._connectionNoUpdateEvent)
				this._connectionNoUpdateEvent = new HtmlElementEvent<Elements.HtmlElement, Event>('noupdate', 'Event', this);

			return this._connectionNoUpdateEvent;
		}

		//#endregion connectionNoUpdateEvent

		//#region connectionObsoleteEvent

		/**
		* The connectionObsoleteEvent event is executed when the manifest was found to have become a 404 or 410 page, so the application cache is being deleted [MDN].
		* Specification: Offline
		* DOM Event Name: obsolete
		*/
		get connectionObsoleteEvent(): HtmlElementEvent<Elements.HtmlElement, Event> {
			if(!this._connectionObsoleteEvent)
				this._connectionObsoleteEvent = new HtmlElementEvent<Elements.HtmlElement, Event>('obsolete', 'Event', this);

			return this._connectionObsoleteEvent;
		}

		//#endregion connectionObsoleteEvent

		//#region connectionUpdateReadyEvent

		/**
		* The connectionUpdateReadyEvent event is executed when the resources listed in the manifest have been newly redownloaded, and the script can use swapCache() to switch to the new cache [MDN].
		* Specification: Offline
		* DOM Event Name: updateready
		*/
		get connectionUpdateReadyEvent(): HtmlElementEvent<Elements.HtmlElement, Event> {
			if(!this._connectionUpdateReadyEvent)
				this._connectionUpdateReadyEvent = new HtmlElementEvent<Elements.HtmlElement, Event>('updateready', 'Event', this);

			return this._connectionUpdateReadyEvent;
		}

		//#endregion connectionUpdateReadyEvent

		//#region connectionCachedEvent

		/**
		* The connectionCachedEvent event is executed when the resources listed in the manifest have been downloaded, and the application is now cached [MDN].
		* Specification: Offline
		* DOM Event Name: cached
		*/
		get connectionCachedEvent(): HtmlElementEvent<Elements.HtmlElement, Event> {
			if(!this._connectionCachedEvent)
				this._connectionCachedEvent = new HtmlElementEvent<Elements.HtmlElement, Event>('cached', 'Event', this);

			return this._connectionCachedEvent;
		}

		//#endregion connectionCachedEvent

		//#region svgAbortEvent

		/**
		* The svgAbortEvent event is executed when page loading has been stopped before the SVG was loaded [MDN].
		* Specification: SVG
		* DOM Event Name: SVGAbort
		*/
		get svgAbortEvent(): HtmlElementEvent<Elements.HtmlElement, Event> {
			if(!this._svgAbortEvent)
				this._svgAbortEvent = new HtmlElementEvent<Elements.HtmlElement, Event>('SVGAbort', 'Event', this);

			return this._svgAbortEvent;
		}

		//#endregion svgAbortEvent

		//#region svgBeginEvent

		/**
		* The svgBeginEvent event is executed when a SMIL animation element begins [MDN].
		* Specification: SVG
		* DOM Event Name: beginEvent
		*/
		get svgBeginEvent(): HtmlElementEvent<Elements.HtmlElement, Event> {
			if(!this._svgBeginEvent)
				this._svgBeginEvent = new HtmlElementEvent<Elements.HtmlElement, Event>('beginEvent', 'Event', this);

			return this._svgBeginEvent;
		}

		//#endregion svgBeginEvent

		//#region svgEndEvent

		/**
		* The svgEndEvent event is executed when a SMIL animation element ends [MDN].
		* Specification: SVG
		* DOM Event Name: endEvent
		*/
		get svgEndEvent(): HtmlElementEvent<Elements.HtmlElement, Event> {
			if(!this._svgEndEvent)
				this._svgEndEvent = new HtmlElementEvent<Elements.HtmlElement, Event>('endEvent', 'Event', this);

			return this._svgEndEvent;
		}

		//#endregion svgEndEvent

		//#region svgErrorEvent

		/**
		* The svgErrorEvent event is executed when an error has occurred before the SVG was loaded [MDN].
		* Specification: SVG
		* DOM Event Name: SVGError
		*/
		get svgErrorEvent(): HtmlElementEvent<Elements.HtmlElement, Event> {
			if(!this._svgErrorEvent)
				this._svgErrorEvent = new HtmlElementEvent<Elements.HtmlElement, Event>('SVGError', 'Event', this);

			return this._svgErrorEvent;
		}

		//#endregion svgErrorEvent

		//#region svgLoadEvent

		/**
		* The svgLoadEvent event is executed when an SVG document has been loaded and parsed [MDN].
		* Specification: SVG
		* DOM Event Name: SVGLoad
		*/
		get svgLoadEvent(): HtmlElementEvent<Elements.HtmlElement, Event> {
			if(!this._svgLoadEvent)
				this._svgLoadEvent = new HtmlElementEvent<Elements.HtmlElement, Event>('SVGLoad', 'Event', this);

			return this._svgLoadEvent;
		}

		//#endregion svgLoadEvent

		//#region svgRepeatEvent

		/**
		* The svgRepeatEvent event is executed when a SMIL animation element is repeated [MDN].
		* Specification: SVG
		* DOM Event Name: repeatEvent
		*/
		get svgRepeatEvent(): HtmlElementEvent<Elements.HtmlElement, Event> {
			if(!this._svgRepeatEvent)
				this._svgRepeatEvent = new HtmlElementEvent<Elements.HtmlElement, Event>('repeatEvent', 'Event', this);

			return this._svgRepeatEvent;
		}

		//#endregion svgRepeatEvent

		//#region svgResizeEvent

		/**
		* The svgResizeEvent event is executed when an SVG document is being resized [MDN].
		* Specification: SVG
		* DOM Event Name: SVGResize
		*/
		get svgResizeEvent(): HtmlElementEvent<Elements.HtmlElement, Event> {
			if(!this._svgResizeEvent)
				this._svgResizeEvent = new HtmlElementEvent<Elements.HtmlElement, Event>('SVGResize', 'Event', this);

			return this._svgResizeEvent;
		}

		//#endregion svgResizeEvent

		//#region svgScrollEvent

		/**
		* The svgScrollEvent event is executed when an SVG document is being scrolled [MDN].
		* Specification: SVG
		* DOM Event Name: SVGScroll
		*/
		get svgScrollEvent(): HtmlElementEvent<Elements.HtmlElement, Event> {
			if(!this._svgScrollEvent)
				this._svgScrollEvent = new HtmlElementEvent<Elements.HtmlElement, Event>('SVGScroll', 'Event', this);

			return this._svgScrollEvent;
		}

		//#endregion svgScrollEvent

		//#region svgUnloadEvent

		/**
		* The svgUnloadEvent event is executed when an SVG document has been removed from a window or frame [MDN].
		* Specification: SVG
		* DOM Event Name: SVGUnload
		*/
		get svgUnloadEvent(): HtmlElementEvent<Elements.HtmlElement, Event> {
			if(!this._svgUnloadEvent)
				this._svgUnloadEvent = new HtmlElementEvent<Elements.HtmlElement, Event>('SVGUnload', 'Event', this);

			return this._svgUnloadEvent;
		}

		//#endregion svgUnloadEvent

		//#region svgZoomEvent

		/**
		* The svgZoomEvent event is executed when an SVG document is being zoomed [MDN].
		* Specification: SVG
		* DOM Event Name: SVGZoom
		*/
		get svgZoomEvent(): HtmlElementEvent<Elements.HtmlElement, SVGZoomEvent> {
			if(!this._svgZoomEvent)
				this._svgZoomEvent = new HtmlElementEvent<Elements.HtmlElement, SVGZoomEvent>('SVGZoom', 'SVGZoomEvent', this);

			return this._svgZoomEvent;
		}

		//#endregion svgZoomEvent

		//#region webSocketErrorEvent

		/**
		* The webSocketErrorEvent event is executed when a WebSocket connection has been closed with prejudice (some data couldn't be sent for example) [MDN].
		* Specification: WebSocket
		* DOM Event Name: error
		*/
		get webSocketErrorEvent(): HtmlElementEvent<Elements.HtmlElement, Event> {
			if(!this._webSocketErrorEvent)
				this._webSocketErrorEvent = new HtmlElementEvent<Elements.HtmlElement, Event>('error', 'Event', this);

			return this._webSocketErrorEvent;
		}

		//#endregion webSocketErrorEvent

		//#region pageHideEvent

		/**
		* The pageHideEvent event is executed when a session history entry is being traversed from [MDN].
		* Specification: HTML5
		* DOM Event Name: pagehide
		*/
		get pageHideEvent(): HtmlElementEvent<Elements.HtmlElement, PageTransitionEvent> {
			if(!this._pageHideEvent)
				this._pageHideEvent = new HtmlElementEvent<Elements.HtmlElement, PageTransitionEvent>('pagehide', 'PageTransitionEvent', this);

			return this._pageHideEvent;
		}

		//#endregion pageHideEvent

		//#region pageShowEvent

		/**
		* The pageShowEvent event is executed when a session history entry is being traversed to [MDN].
		* Specification: HTML5
		* DOM Event Name: pageshow
		*/
		get pageShowEvent(): HtmlElementEvent<Elements.HtmlElement, PageTransitionEvent> {
			if(!this._pageShowEvent)
				this._pageShowEvent = new HtmlElementEvent<Elements.HtmlElement, PageTransitionEvent>('pageshow', 'PageTransitionEvent', this);

			return this._pageShowEvent;
		}

		//#endregion pageShowEvent

		//#region showEvent

		/**
		* The showEvent event is executed when a contextmenu event was fired on/bubbled to an element that has a contextmenu attribute [MDN].
		* Specification: HTML5
		* DOM Event Name: show
		*/
		get showEvent(): HtmlElementEvent<Elements.HtmlElement, MouseEvent> {
			if(!this._showEvent)
				this._showEvent = new HtmlElementEvent<Elements.HtmlElement, MouseEvent>('show', 'MouseEvent', this);

			return this._showEvent;
		}

		//#endregion showEvent

		//#region contentLoadedEvent

		/**
		* The contentLoadedEvent event is executed when the document has finished loading (but not its dependent resources) [MDN].
		* Specification: HTML5
		* DOM Event Name: DOMContentLoaded
		*/
		get contentLoadedEvent(): HtmlElementEvent<Elements.HtmlElement, Event> {
			if(!this._contentLoadedEvent)
				this._contentLoadedEvent = new HtmlElementEvent<Elements.HtmlElement, Event>('DOMContentLoaded', 'Event', this);

			return this._contentLoadedEvent;
		}

		//#endregion contentLoadedEvent

		//#region hashChangeEvent

		/**
		* The hashChangeEvent event is executed when the fragment identifier of the URL has changed (the part of the URL after the #) [MDN].
		* Specification: HTML5
		* DOM Event Name: hashchange
		*/
		get hashChangeEvent(): HtmlElementEvent<Elements.HtmlElement, Event> {
			if(!this._hashChangeEvent)
				this._hashChangeEvent = new HtmlElementEvent<Elements.HtmlElement, Event>('hashchange', 'Event', this);

			return this._hashChangeEvent;
		}

		//#endregion hashChangeEvent

		//#region popStateEvent

		/**
		* The popStateEvent event is executed when a session history entry is being navigated to (in certain cases) [MDN].
		* Specification: HTML5
		* DOM Event Name: popstate
		*/
		get popStateEvent(): HtmlElementEvent<Elements.HtmlElement, PopStateEvent> {
			if(!this._popStateEvent)
				this._popStateEvent = new HtmlElementEvent<Elements.HtmlElement, PopStateEvent>('popstate', 'PopStateEvent', this);

			return this._popStateEvent;
		}

		//#endregion popStateEvent

		//#region invalidEvent

		/**
		* The invalidEvent event is executed when a submittable element has been checked and doesn't satisfy its constraints [MDN].
		* Specification: HTML5
		* DOM Event Name: invalid
		*/
		get invalidEvent(): HtmlElementEvent<Elements.HtmlElement, Event> {
			if(!this._invalidEvent)
				this._invalidEvent = new HtmlElementEvent<Elements.HtmlElement, Event>('invalid', 'Event', this);

			return this._invalidEvent;
		}

		//#endregion invalidEvent

		//#region beforeUnloadEvent

		/**
		* The beforeUnloadEvent event is executed when   [MDN].
		* Specification: HTML5 
		* DOM Event Name: beforeunload
		*/
		get beforeUnloadEvent(): HtmlElementEvent<Elements.HtmlElement, BeforeUnloadEvent> {
			if(!this._beforeUnloadEvent)
				this._beforeUnloadEvent = new HtmlElementEvent<Elements.HtmlElement, BeforeUnloadEvent>('beforeunload', 'BeforeUnloadEvent', this);

			return this._beforeUnloadEvent;
		}

		//#endregion beforeUnloadEvent

		//#region indexedDatabaseErrorEvent

		/**
		* The indexedDatabaseErrorEvent event is executed when a request caused an error and failed [MDN].
		* Specification: IndexedDB
		* DOM Event Name: error
		*/
		get indexedDatabaseErrorEvent(): HtmlElementEvent<Elements.HtmlElement, Event> {
			if(!this._indexedDatabaseErrorEvent)
				this._indexedDatabaseErrorEvent = new HtmlElementEvent<Elements.HtmlElement, Event>('error', 'Event', this);

			return this._indexedDatabaseErrorEvent;
		}

		//#endregion indexedDatabaseErrorEvent

		//#region visibilityChangeEvent

		/**
		* The visibilityChangeEvent event is executed when the content of a tab has become visible or has been hidden [MDN].
		* Specification: Page visibility
		* DOM Event Name: visibilitychange
		*/
		get visibilityChangeEvent(): HtmlElementEvent<Elements.HtmlElement, Event> {
			if(!this._visibilityChangeEvent)
				this._visibilityChangeEvent = new HtmlElementEvent<Elements.HtmlElement, Event>('visibilitychange', 'Event', this);

			return this._visibilityChangeEvent;
		}

		//#endregion visibilityChangeEvent

		//#region requestLoadStartEvent

		/**
		* The requestLoadStartEvent event is executed when progress has begun [MDN].
		* Specifications: Progress , XMLHttpRequest
		* DOM Event Name: loadstart
		*/
		get requestLoadStartEvent(): HtmlElementEvent<Elements.HtmlElement, ProgressEvent> {
			if(!this._requestLoadStartEvent)
				this._requestLoadStartEvent = new HtmlElementEvent<Elements.HtmlElement, ProgressEvent>('loadstart', 'ProgressEvent', this);

			return this._requestLoadStartEvent;
		}

		//#endregion requestLoadStartEvent

		//#region serverErrorEvent

		/**
		* The serverErrorEvent event is executed when an event source connection has been failed [MDN].
		* Specification: Server Sent Events
		* DOM Event Name: error
		*/
		get serverErrorEvent(): HtmlElementEvent<Elements.HtmlElement, Event> {
			if(!this._serverErrorEvent)
				this._serverErrorEvent = new HtmlElementEvent<Elements.HtmlElement, Event>('error', 'Event', this);

			return this._serverErrorEvent;
		}

		//#endregion serverErrorEvent

		//#region webStorageEvent

		/**
		* The webStorageEvent event is executed when a storage area (localStorage or sessionStorage) has changed [MDN].
		* Specification: Web Storage
		* DOM Event Name: storage
		*/
		get webStorageEvent(): HtmlElementEvent<Elements.HtmlElement, StorageEvent> {
			if(!this._webStorageEvent)
				this._webStorageEvent = new HtmlElementEvent<Elements.HtmlElement, StorageEvent>('storage', 'StorageEvent', this);

			return this._webStorageEvent;
		}

		//#endregion webStorageEvent

		//#region requestReadyStateChangeEvent

		/**
		* The requestReadyStateChangeEvent event is executed when the readyState attribute of a document has changed [MDN].
		* Specification: XMLHttpRequest
		* DOM Event Name: readystatechange
		*/
		get requestReadyStateChangeEvent(): HtmlElementEvent<Elements.HtmlElement, Event> {
			if(!this._requestReadyStateChangeEvent)
				this._requestReadyStateChangeEvent = new HtmlElementEvent<Elements.HtmlElement, Event>('readystatechange', 'Event', this);

			return this._requestReadyStateChangeEvent;
		}

		//#endregion requestReadyStateChangeEvent

		//#region requestTimeoutEvent

		/**
		* The requestTimeoutEvent event is executed when   [MDN].
		* Specification: XMLHttpRequest
		* DOM Event Name: timeout
		*/
		get requestTimeoutEvent(): HtmlElementEvent<Elements.HtmlElement, ProgressEvent> {
			if(!this._requestTimeoutEvent)
				this._requestTimeoutEvent = new HtmlElementEvent<Elements.HtmlElement, ProgressEvent>('timeout', 'ProgressEvent', this);

			return this._requestTimeoutEvent;
		}

		//#endregion requestTimeoutEvent


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

            setPropertyFromConfig(this, config, 'classes', true);
            setPropertyFromConfig(this, config, 'direction', true);
            setPropertyFromConfig(this, config, 'draggable', true);
            setPropertyFromConfig(this, config, 'hidden', true);
            setPropertyFromConfig(this, config, 'id', true);
            setPropertyFromConfig(this, config, 'language', true);
            setPropertyFromConfig(this, config, 'spellCheck', true);
            setPropertyFromConfig(this, config, 'title', true);

			if(config.fullScreenChangeHandler)
				this.fullScreenChangeEvent.subscribe(config.fullScreenChangeHandler);

			if(config.fullScreenErrorHandler)
				this.fullScreenErrorEvent.subscribe(config.fullScreenErrorHandler);

			if(config.animationEndHandler)
				this.animationEndEvent.subscribe(config.animationEndHandler);

			if(config.animationIterationHandler)
				this.animationIterationEvent.subscribe(config.animationIterationHandler);

			if(config.animationStartHandler)
				this.animationStartEvent.subscribe(config.animationStartHandler);

			if(config.transitionEndHandler)
				this.transitionEndEvent.subscribe(config.transitionEndHandler);

			if(config.gamepadConnectedHandler)
				this.gamepadConnectedEvent.subscribe(config.gamepadConnectedHandler);

			if(config.gamepadDisconnectedHandler)
				this.gamepadDisconnectedEvent.subscribe(config.gamepadDisconnectedHandler);

			if(config.compositionEndHandler)
				this.compositionEndEvent.subscribe(config.compositionEndHandler);

			if(config.compositionStartHandler)
				this.compositionStartEvent.subscribe(config.compositionStartHandler);

			if(config.compositionUpdateHandler)
				this.compositionUpdateEvent.subscribe(config.compositionUpdateHandler);

			if(config.keyDownHandler)
				this.keyDownEvent.subscribe(config.keyDownHandler);

			if(config.keyPressHandler)
				this.keyPressEvent.subscribe(config.keyPressHandler);

			if(config.keyUpHandler)
				this.keyUpEvent.subscribe(config.keyUpHandler);

			if(config.clickHandler)
				this.clickEvent.subscribe(config.clickHandler);

			if(config.doubleClickHandler)
				this.doubleClickEvent.subscribe(config.doubleClickHandler);

			if(config.mouseDownHandler)
				this.mouseDownEvent.subscribe(config.mouseDownHandler);

			if(config.mouseEnterHandler)
				this.mouseEnterEvent.subscribe(config.mouseEnterHandler);

			if(config.mouseLeaveHandler)
				this.mouseLeaveEvent.subscribe(config.mouseLeaveHandler);

			if(config.mouseMoveHandler)
				this.mouseMoveEvent.subscribe(config.mouseMoveHandler);

			if(config.mouseOutHandler)
				this.mouseOutEvent.subscribe(config.mouseOutHandler);

			if(config.mouseOverHandler)
				this.mouseOverEvent.subscribe(config.mouseOverHandler);

			if(config.mouseUpHandler)
				this.mouseUpEvent.subscribe(config.mouseUpHandler);

			if(config.wheelHandler)
				this.wheelEvent.subscribe(config.wheelHandler);

			if(config.contextMenuHandler)
				this.contextMenuEvent.subscribe(config.contextMenuHandler);

			if(config.pointerLockChangeHandler)
				this.pointerLockChangeEvent.subscribe(config.pointerLockChangeHandler);

			if(config.pointerLockErrorHandler)
				this.pointerLockErrorEvent.subscribe(config.pointerLockErrorHandler);

			if(config.blurHandler)
				this.blurEvent.subscribe(config.blurHandler);

			if(config.focusHandler)
				this.focusEvent.subscribe(config.focusHandler);

			if(config.afterPrintHandler)
				this.afterPrintEvent.subscribe(config.afterPrintHandler);

			if(config.beforePrintHandler)
				this.beforePrintEvent.subscribe(config.beforePrintHandler);

			if(config.dragEndHandler)
				this.dragEndEvent.subscribe(config.dragEndHandler);

			if(config.dragEnterHandler)
				this.dragEnterEvent.subscribe(config.dragEnterHandler);

			if(config.dragHandler)
				this.dragEvent.subscribe(config.dragHandler);

			if(config.dragLeaveHandler)
				this.dragLeaveEvent.subscribe(config.dragLeaveHandler);

			if(config.dragOverHandler)
				this.dragOverEvent.subscribe(config.dragOverHandler);

			if(config.dragStartHandler)
				this.dragStartEvent.subscribe(config.dragStartHandler);

			if(config.dropHandler)
				this.dropEvent.subscribe(config.dropHandler);

			if(config.loadHandler)
				this.loadEvent.subscribe(config.loadHandler);

			if(config.resizeHandler)
				this.resizeEvent.subscribe(config.resizeHandler);

			if(config.scrollHandler)
				this.scrollEvent.subscribe(config.scrollHandler);

			if(config.selectHandler)
				this.selectEvent.subscribe(config.selectHandler);

			if(config.offlineBackOnlineHandler)
				this.offlineBackOnlineEvent.subscribe(config.offlineBackOnlineHandler);

			if(config.offlineHandler)
				this.offlineEvent.subscribe(config.offlineHandler);

			if(config.connectionCheckingHandler)
				this.connectionCheckingEvent.subscribe(config.connectionCheckingHandler);

			if(config.connectionDownloadingHandler)
				this.connectionDownloadingEvent.subscribe(config.connectionDownloadingHandler);

			if(config.connectionErrorHandler)
				this.connectionErrorEvent.subscribe(config.connectionErrorHandler);

			if(config.connectionNoUpdateHandler)
				this.connectionNoUpdateEvent.subscribe(config.connectionNoUpdateHandler);

			if(config.connectionObsoleteHandler)
				this.connectionObsoleteEvent.subscribe(config.connectionObsoleteHandler);

			if(config.connectionUpdateReadyHandler)
				this.connectionUpdateReadyEvent.subscribe(config.connectionUpdateReadyHandler);

			if(config.connectionCachedHandler)
				this.connectionCachedEvent.subscribe(config.connectionCachedHandler);

			if(config.svgAbortHandler)
				this.svgAbortEvent.subscribe(config.svgAbortHandler);

			if(config.svgBeginHandler)
				this.svgBeginEvent.subscribe(config.svgBeginHandler);

			if(config.svgEndHandler)
				this.svgEndEvent.subscribe(config.svgEndHandler);

			if(config.svgErrorHandler)
				this.svgErrorEvent.subscribe(config.svgErrorHandler);

			if(config.svgLoadHandler)
				this.svgLoadEvent.subscribe(config.svgLoadHandler);

			if(config.svgRepeatHandler)
				this.svgRepeatEvent.subscribe(config.svgRepeatHandler);

			if(config.svgResizeHandler)
				this.svgResizeEvent.subscribe(config.svgResizeHandler);

			if(config.svgScrollHandler)
				this.svgScrollEvent.subscribe(config.svgScrollHandler);

			if(config.svgUnloadHandler)
				this.svgUnloadEvent.subscribe(config.svgUnloadHandler);

			if(config.svgZoomHandler)
				this.svgZoomEvent.subscribe(config.svgZoomHandler);

			if(config.webSocketErrorHandler)
				this.webSocketErrorEvent.subscribe(config.webSocketErrorHandler);

			if(config.pageHideHandler)
				this.pageHideEvent.subscribe(config.pageHideHandler);

			if(config.pageShowHandler)
				this.pageShowEvent.subscribe(config.pageShowHandler);

			if(config.showHandler)
				this.showEvent.subscribe(config.showHandler);

			if(config.contentLoadedHandler)
				this.contentLoadedEvent.subscribe(config.contentLoadedHandler);

			if(config.hashChangeHandler)
				this.hashChangeEvent.subscribe(config.hashChangeHandler);

			if(config.popStateHandler)
				this.popStateEvent.subscribe(config.popStateHandler);

			if(config.invalidHandler)
				this.invalidEvent.subscribe(config.invalidHandler);

			if(config.beforeUnloadHandler)
				this.beforeUnloadEvent.subscribe(config.beforeUnloadHandler);

			if(config.indexedDatabaseErrorHandler)
				this.indexedDatabaseErrorEvent.subscribe(config.indexedDatabaseErrorHandler);

			if(config.visibilityChangeHandler)
				this.visibilityChangeEvent.subscribe(config.visibilityChangeHandler);

			if(config.requestLoadStartHandler)
				this.requestLoadStartEvent.subscribe(config.requestLoadStartHandler);

			if(config.serverErrorHandler)
				this.serverErrorEvent.subscribe(config.serverErrorHandler);

			if(config.webStorageHandler)
				this.webStorageEvent.subscribe(config.webStorageHandler);

			if(config.requestReadyStateChangeHandler)
				this.requestReadyStateChangeEvent.subscribe(config.requestReadyStateChangeHandler);

			if(config.requestTimeoutHandler)
				this.requestTimeoutEvent.subscribe(config.requestTimeoutHandler);

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
		private _copyEvent: HtmlElementEvent<Elements.HtmlElementContainer, Event>;
		private _cutEvent: HtmlElementEvent<Elements.HtmlElementContainer, Event>;
		private _pasteEvent: HtmlElementEvent<Elements.HtmlElementContainer, Event>;

        //#endregion Fields

        //#region Properties

        get children() {
            if (!this._children)
                initializeChildrenProperty(this);
            return this._children;
        }

		//#region copyEvent

		/**
		* The copyEvent event is executed when the text selection has been added to the clipboard [MDN].
		* Specification: Clipboard
		* DOM Event Name: copy
		*/
		get copyEvent(): HtmlElementEvent<Elements.HtmlElementContainer, Event> {
			if(!this._copyEvent)
				this._copyEvent = new HtmlElementEvent<Elements.HtmlElementContainer, Event>('copy', 'Event', this);

			return this._copyEvent;
		}

		//#endregion copyEvent

		//#region cutEvent

		/**
		* The cutEvent event is executed when the text selection has been removed from the document and added to the clipboard [MDN].
		* Specification: Clipboard
		* DOM Event Name: cut
		*/
		get cutEvent(): HtmlElementEvent<Elements.HtmlElementContainer, Event> {
			if(!this._cutEvent)
				this._cutEvent = new HtmlElementEvent<Elements.HtmlElementContainer, Event>('cut', 'Event', this);

			return this._cutEvent;
		}

		//#endregion cutEvent

		//#region pasteEvent

		/**
		* The pasteEvent event is executed when data has been transfered from the system clipboard to the document [MDN].
		* Specification: Clipboard
		* DOM Event Name: paste
		*/
		get pasteEvent(): HtmlElementEvent<Elements.HtmlElementContainer, Event> {
			if(!this._pasteEvent)
				this._pasteEvent = new HtmlElementEvent<Elements.HtmlElementContainer, Event>('paste', 'Event', this);

			return this._pasteEvent;
		}

		//#endregion pasteEvent


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
                children.unshift(Html.text(textBinder));
            if (isTextDefined)
                children.unshift(Html.text(text));

            config.children = children;
            config.childrenBinder = childrenBinder;
            setChildrenPropertyFromConfig(this, config);

			if(config.copyHandler)
				this.copyEvent.subscribe(config.copyHandler);

			if(config.cutHandler)
				this.cutEvent.subscribe(config.cutHandler);

			if(config.pasteHandler)
				this.pasteEvent.subscribe(config.pasteHandler);


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

	//#region AbbreviationElement

	/**
	* The HTML <abbr> Element (or HTML Abbreviation Element) represents an abbreviation and optionally provides a full description for it. If present, the title attribute must contain this full description and nothing else [MDN].
	*/
	export class AbbreviationElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new AbbreviationElement'.
        */
        constructor(config: IAbbreviationElementConfig) {
			super('abbr', config)
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
            var config = this.getConfig<IAbbreviationElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion AbbreviationElement

	//#region AddressElement

	/**
	* The HTML <address> Element may be used by authors to supply contact information for its nearest <article> or <body> ancestor; in the latter case, it applies to the whole document [MDN].
	*/
	export class AddressElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new AddressElement'.
        */
        constructor(config: IAddressElementConfig) {
			super('address', config)
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
            var config = this.getConfig<IAddressElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion AddressElement

	//#region AnchorElement

	/**
	* The HTML <a> Element (or the HTML Anchor Element) defines a hyperlink, the named target destination for a hyperlink, or both [MDN].
	*/
	export class AnchorElement extends HtmlElementContainer {

		//#region Fields

		private _hrefProperty: b.PropertyUpdate<string>;
		private _hrefLanguageProperty: b.PropertyUpdate<string>;
		private _relationshipProperty: b.PropertyUpdate<string>;
		private _targetProperty: b.PropertyUpdate<string>;
		private _typeProperty: b.PropertyUpdate<string>;

		//#endregion Fields

		//#region Properties

		//#region hrefProperty

		/**
		* This is the single required attribute for anchors defining a hypertext source link. It indicates the link target, either a URL or a URL fragment. A URL fragment is a name preceded by a hash mark (#), which specifies an internal target location (an ID) within the current document. URLs are not restricted to Web (HTTP)-based documents. URLs might use any protocol supported by the browser. For example, file, ftp, and mailto work in most user agents.  
		* Note: You can use the special fragment "top" to create a link back to the top of the page; for example <a href="#top">Return to top</a>. This behavior is specified by HTML5 [MDN].
		*/
		get hrefProperty(): b.PropertyUpdate<string> {
			if(!this._hrefProperty)
				initializeProperty(this, 'href', 'href');
			return this._hrefProperty;
		}

		//#endregion hrefProperty

		//#region href

		/**
		* This is the single required attribute for anchors defining a hypertext source link. It indicates the link target, either a URL or a URL fragment. A URL fragment is a name preceded by a hash mark (#), which specifies an internal target location (an ID) within the current document. URLs are not restricted to Web (HTTP)-based documents. URLs might use any protocol supported by the browser. For example, file, ftp, and mailto work in most user agents.  
		* Note: You can use the special fragment "top" to create a link back to the top of the page; for example <a href="#top">Return to top</a>. This behavior is specified by HTML5 [MDN].
		*/
		get href(): string {
			return this.hrefProperty.value;
		}

		set href(value: string) {
			this.hrefProperty.value = value;
		}

		//#endregion href

		//#region hrefLanguageProperty

		/**
		* This attribute indicates the language of the linked resource. It is purely advisory. Allowed values are determined by BCP47 for HTML5 and by RFC1766 for HTML4. Use this attribute only if the href attribute is present [MDN].
		*/
		get hrefLanguageProperty(): b.PropertyUpdate<string> {
			if(!this._hrefLanguageProperty)
				initializeProperty(this, 'hrefLanguage', 'hreflang');
			return this._hrefLanguageProperty;
		}

		//#endregion hrefLanguageProperty

		//#region hrefLanguage

		/**
		* This attribute indicates the language of the linked resource. It is purely advisory. Allowed values are determined by BCP47 for HTML5 and by RFC1766 for HTML4. Use this attribute only if the href attribute is present [MDN].
		*/
		get hrefLanguage(): string {
			return this.hrefLanguageProperty.value;
		}

		set hrefLanguage(value: string) {
			this.hrefLanguageProperty.value = value;
		}

		//#endregion hrefLanguage

		//#region relationshipProperty

		/**
		* For anchors containing the href attribute, this attribute specifies the relationship of the target object to the link object. The value is a space-separated list of relationship values. The values and their semantics will be registered by some authority that might have meaning to the document author. The default relationship, if no other is given, is void. Use this attribute only if the href attribute is present [MDN].
		*/
		get relationshipProperty(): b.PropertyUpdate<string> {
			if(!this._relationshipProperty)
				initializeProperty(this, 'relationship', 'rel');
			return this._relationshipProperty;
		}

		//#endregion relationshipProperty

		//#region relationship

		/**
		* For anchors containing the href attribute, this attribute specifies the relationship of the target object to the link object. The value is a space-separated list of relationship values. The values and their semantics will be registered by some authority that might have meaning to the document author. The default relationship, if no other is given, is void. Use this attribute only if the href attribute is present [MDN].
		*/
		get relationship(): string {
			return this.relationshipProperty.value;
		}

		set relationship(value: string) {
			this.relationshipProperty.value = value;
		}

		//#endregion relationship

		//#region targetProperty

		/**
		* Html.AnchorTarget enumerates the values of this property.
		* This attribute specifies where to display the linked resource. In HTML4, this is the name of, or a keyword for, a frame. In HTML5, it is a name of, or keyword for, a browsing context (for example, tab, window, or inline frame). The following keywords have special meanings:  _self: Load the response into the same HTML4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified. _blank: Load the response into a new unnamed HTML4 window or HTML5 browsing context. _parent: Load the response into the HTML4 frameset parent of the current frame or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as _self. _top: In HTML4: Load the response into the full, original window, canceling all other frames. In HTML5: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as _self. Use this attribute only if the href attribute is present [MDN].
		*/
		get targetProperty(): b.PropertyUpdate<string> {
			if(!this._targetProperty)
				initializeProperty(this, 'target', 'target');
			return this._targetProperty;
		}

		//#endregion targetProperty

		//#region target

		/**
		* Html.AnchorTarget enumerates the values of this property.
		* This attribute specifies where to display the linked resource. In HTML4, this is the name of, or a keyword for, a frame. In HTML5, it is a name of, or keyword for, a browsing context (for example, tab, window, or inline frame). The following keywords have special meanings:  _self: Load the response into the same HTML4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified. _blank: Load the response into a new unnamed HTML4 window or HTML5 browsing context. _parent: Load the response into the HTML4 frameset parent of the current frame or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as _self. _top: In HTML4: Load the response into the full, original window, canceling all other frames. In HTML5: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as _self. Use this attribute only if the href attribute is present [MDN].
		*/
		get target(): string {
			return this.targetProperty.value;
		}

		set target(value: string) {
			this.targetProperty.value = value;
		}

		//#endregion target

		//#region typeProperty

		/**
		* This attribute specifies the media type in the form of a MIME type for the link target. Generally, this is provided strictly as advisory information; however, in the future a browser might add a small icon for multimedia types. For example, a browser might add a small speaker icon when type is set to audio/wav. For a complete list of recognized MIME types, see http://www.w3.org/TR/html4/references.html#ref-MIMETYPES. Use this attribute only if the href attribute is present [MDN].
		*/
		get typeProperty(): b.PropertyUpdate<string> {
			if(!this._typeProperty)
				initializeProperty(this, 'type', 'type');
			return this._typeProperty;
		}

		//#endregion typeProperty

		//#region type

		/**
		* This attribute specifies the media type in the form of a MIME type for the link target. Generally, this is provided strictly as advisory information; however, in the future a browser might add a small icon for multimedia types. For example, a browser might add a small speaker icon when type is set to audio/wav. For a complete list of recognized MIME types, see http://www.w3.org/TR/html4/references.html#ref-MIMETYPES. Use this attribute only if the href attribute is present [MDN].
		*/
		get type(): string {
			return this.typeProperty.value;
		}

		set type(value: string) {
			this.typeProperty.value = value;
		}

		//#endregion type

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new AnchorElement'.
        */
        constructor(config: IAnchorElementConfig) {
			super('a', config)
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
            var config = this.getConfig<IAnchorElementConfig>();
            setPropertyFromConfig(this, config, 'href', true);
            setPropertyFromConfig(this, config, 'hrefLanguage', true);
            setPropertyFromConfig(this, config, 'relationship', true);
            setPropertyFromConfig(this, config, 'target', true);
            setPropertyFromConfig(this, config, 'type', true);

        }

        //#endregion Base Class Overrides
	}

	//#endregion AnchorElement

	//#region AreaElement

	/**
	* The HTML <area> element defines a hot-spot region on an image, and optionally associates it with a hypertext link. This element is used only within a <map> element [MDN].
	*/
	export class AreaElement extends HtmlElement {

		//#region Fields

		private _alternateProperty: b.PropertyUpdate<string>;
		private _coordinatesProperty: b.PropertyUpdate<string>;
		private _hrefProperty: b.PropertyUpdate<string>;
		private _shapeProperty: b.PropertyUpdate<string>;
		private _targetProperty: b.PropertyUpdate<string>;

		//#endregion Fields

		//#region Properties

		//#region alternateProperty

		/**
		* A text string alternative to display on browsers that do not display images. The text should be phrased so that it presents the user with the same kind of choice as the image would offer when displayed without the alternative text. In HTML4, this attribute is required, but may be the empty string (""). In HTML5, this attribute is required only if the href attribute is used [MDN].
		*/
		get alternateProperty(): b.PropertyUpdate<string> {
			if(!this._alternateProperty)
				initializeProperty(this, 'alternate', 'alt');
			return this._alternateProperty;
		}

		//#endregion alternateProperty

		//#region alternate

		/**
		* A text string alternative to display on browsers that do not display images. The text should be phrased so that it presents the user with the same kind of choice as the image would offer when displayed without the alternative text. In HTML4, this attribute is required, but may be the empty string (""). In HTML5, this attribute is required only if the href attribute is used [MDN].
		*/
		get alternate(): string {
			return this.alternateProperty.value;
		}

		set alternate(value: string) {
			this.alternateProperty.value = value;
		}

		//#endregion alternate

		//#region coordinatesProperty

		/**
		* A set of values specifying the coordinates of the hot-spot region. The number and meaning of the values depend upon the value specified for the shape attribute. For a rect or rectangle shape, the coords value is two x,y pairs: left, top, right, and bottom. For a circle shape, the value is x,y,r where x,y is a pair specifying the center of the circle and r is a value for the radius. For a poly or polygon< shape, the value is a set of x,y pairs for each point in the polygon: x1,y1,x2,y2,x3,y3, and so on. In HTML4, the values are numbers of pixels or percentages, if a percent sign (%) is appended; in HTML5, the values are numbers of CSS pixels [MDN].
		*/
		get coordinatesProperty(): b.PropertyUpdate<string> {
			if(!this._coordinatesProperty)
				initializeProperty(this, 'coordinates', 'coords');
			return this._coordinatesProperty;
		}

		//#endregion coordinatesProperty

		//#region coordinates

		/**
		* A set of values specifying the coordinates of the hot-spot region. The number and meaning of the values depend upon the value specified for the shape attribute. For a rect or rectangle shape, the coords value is two x,y pairs: left, top, right, and bottom. For a circle shape, the value is x,y,r where x,y is a pair specifying the center of the circle and r is a value for the radius. For a poly or polygon< shape, the value is a set of x,y pairs for each point in the polygon: x1,y1,x2,y2,x3,y3, and so on. In HTML4, the values are numbers of pixels or percentages, if a percent sign (%) is appended; in HTML5, the values are numbers of CSS pixels [MDN].
		*/
		get coordinates(): string {
			return this.coordinatesProperty.value;
		}

		set coordinates(value: string) {
			this.coordinatesProperty.value = value;
		}

		//#endregion coordinates

		//#region hrefProperty

		/**
		* The hyperlink target for the area. Its value is a valid URL. In HTML4, either this attribute or the nohref attribute must be present in the element. In HTML5, this attribute may be omitted; if so, the area element does not represent a hyperlink [MDN].
		*/
		get hrefProperty(): b.PropertyUpdate<string> {
			if(!this._hrefProperty)
				initializeProperty(this, 'href', 'href');
			return this._hrefProperty;
		}

		//#endregion hrefProperty

		//#region href

		/**
		* The hyperlink target for the area. Its value is a valid URL. In HTML4, either this attribute or the nohref attribute must be present in the element. In HTML5, this attribute may be omitted; if so, the area element does not represent a hyperlink [MDN].
		*/
		get href(): string {
			return this.hrefProperty.value;
		}

		set href(value: string) {
			this.hrefProperty.value = value;
		}

		//#endregion href

		//#region shapeProperty

		/**
		* The shape of the associated hot spot. The specifications for HTML 5 and HTML 4 define the values rect, which defines a rectangular region; circle, which defines a circular region; poly, which defines a polygon; and default, which indicates the entire region beyond any defined shapes. Many browsers, notably Internet Explorer 4 and higher, support circ, polygon, and rectangle as valid values for shape; these values are [MDN].
		*/
		get shapeProperty(): b.PropertyUpdate<string> {
			if(!this._shapeProperty)
				initializeProperty(this, 'shape', 'shape');
			return this._shapeProperty;
		}

		//#endregion shapeProperty

		//#region shape

		/**
		* The shape of the associated hot spot. The specifications for HTML 5 and HTML 4 define the values rect, which defines a rectangular region; circle, which defines a circular region; poly, which defines a polygon; and default, which indicates the entire region beyond any defined shapes. Many browsers, notably Internet Explorer 4 and higher, support circ, polygon, and rectangle as valid values for shape; these values are [MDN].
		*/
		get shape(): string {
			return this.shapeProperty.value;
		}

		set shape(value: string) {
			this.shapeProperty.value = value;
		}

		//#endregion shape

		//#region targetProperty

		/**
		* Html.AreaTarget enumerates the values of this property.
		* This attribute specifies where to display the linked resource. In HTML4, this is the name of, or a keyword for, a frame. In HTML5, it is a name of, or keyword for, a browsing context (for example, tab, window, or inline frame). The following keywords have special meanings:  _self: Load the response into the same HTML4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified. _blank: Load the response into a new unnamed HTML4 window or HTML5 browsing context. _parent: Load the response into the HMTL4 frameset parent of the current frame or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as _self. _top: In HTML4: Load the response into the full, original window, canceling all other frames. In HTML5: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as _self. Use this attribute only if the href attribute is present [MDN].
		*/
		get targetProperty(): b.PropertyUpdate<string> {
			if(!this._targetProperty)
				initializeProperty(this, 'target', 'target');
			return this._targetProperty;
		}

		//#endregion targetProperty

		//#region target

		/**
		* Html.AreaTarget enumerates the values of this property.
		* This attribute specifies where to display the linked resource. In HTML4, this is the name of, or a keyword for, a frame. In HTML5, it is a name of, or keyword for, a browsing context (for example, tab, window, or inline frame). The following keywords have special meanings:  _self: Load the response into the same HTML4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified. _blank: Load the response into a new unnamed HTML4 window or HTML5 browsing context. _parent: Load the response into the HMTL4 frameset parent of the current frame or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as _self. _top: In HTML4: Load the response into the full, original window, canceling all other frames. In HTML5: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as _self. Use this attribute only if the href attribute is present [MDN].
		*/
		get target(): string {
			return this.targetProperty.value;
		}

		set target(value: string) {
			this.targetProperty.value = value;
		}

		//#endregion target

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new AreaElement'.
        */
        constructor(config: IAreaElementConfig) {
			super('area', config)
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
            var config = this.getConfig<IAreaElementConfig>();
            setPropertyFromConfig(this, config, 'alternate', true);
            setPropertyFromConfig(this, config, 'coordinates', true);
            setPropertyFromConfig(this, config, 'href', true);
            setPropertyFromConfig(this, config, 'shape', true);
            setPropertyFromConfig(this, config, 'target', true);

        }

        //#endregion Base Class Overrides
	}

	//#endregion AreaElement

	//#region ArticleElement

	/**
	* The HTML <article> Element represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable, e.g., in syndication. This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment, an interactive widget or gadget, or any other independent item of content [MDN].
	*/
	export class ArticleElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new ArticleElement'.
        */
        constructor(config: IArticleElementConfig) {
			super('article', config)
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
            var config = this.getConfig<IArticleElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion ArticleElement

	//#region AsideElement

	/**
	* The HTML <aside> Element represents a section of a page that consists of content that is tangentially related to the content around it, which could be considered separate from that content. Such sections are often represented as sidebars or as inserts. They often contain side explanations, like a glossary definition; more loosely related stuff, like advertisements; the biography of the author; or in web-applications, profile information or related blog links [MDN].
	*/
	export class AsideElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new AsideElement'.
        */
        constructor(config: IAsideElementConfig) {
			super('aside', config)
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
            var config = this.getConfig<IAsideElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion AsideElement

	//#region AudioElement

	/**
	* The HTML <audio> element is used to represent sound content in documents. Added as part of HTML5, it may contain several audio sources, represented using the src attribute or the <source> element; the browser will choose the most suitable one. Fallback content for browser not supporting the <audio> element can be added too [MDN].
	*/
	export class AudioElement extends HtmlElementContainer {

		//#region Fields

		private _autoPlayProperty: b.PropertyUpdate<boolean>;
		private _bufferedProperty: b.PropertyUpdate<TimeRanges>;
		private _controlsProperty: b.PropertyUpdate<boolean>;
		private _loopProperty: b.PropertyUpdate<boolean>;
		private _mutedProperty: b.PropertyUpdate<boolean>;
		private _playedProperty: b.PropertyUpdate<TimeRanges>;
		private _preloadProperty: b.PropertyUpdate<string>;
		private _sourceProperty: b.PropertyUpdate<string>;
		private _volumeProperty: b.PropertyUpdate<number>;
		private _audioCompleteEvent: HtmlElementEvent<Elements.AudioElement, Event>;
		private _audioEndedEvent: HtmlElementEvent<Elements.AudioElement, Event>;
		private _audioProcessEvent: HtmlElementEvent<Elements.AudioElement, Event>;
		private _mediaCanPlayEvent: HtmlElementEvent<Elements.AudioElement, Event>;
		private _mediaCanPlayThroughEvent: HtmlElementEvent<Elements.AudioElement, Event>;
		private _mediaDurationChangeEvent: HtmlElementEvent<Elements.AudioElement, Event>;
		private _mediaEmptiedEvent: HtmlElementEvent<Elements.AudioElement, Event>;
		private _mediaEndedEvent: HtmlElementEvent<Elements.AudioElement, Event>;
		private _mediaLoadedDataEvent: HtmlElementEvent<Elements.AudioElement, Event>;
		private _mediaLoadedMetadataEvent: HtmlElementEvent<Elements.AudioElement, Event>;
		private _mediaPauseEvent: HtmlElementEvent<Elements.AudioElement, Event>;
		private _mediaPlayEvent: HtmlElementEvent<Elements.AudioElement, Event>;
		private _mediaPlayingEvent: HtmlElementEvent<Elements.AudioElement, Event>;
		private _mediaRateChangeEvent: HtmlElementEvent<Elements.AudioElement, Event>;
		private _mediaSeekedEvent: HtmlElementEvent<Elements.AudioElement, Event>;
		private _mediaSeekingEvent: HtmlElementEvent<Elements.AudioElement, Event>;
		private _mediaStalledEvent: HtmlElementEvent<Elements.AudioElement, Event>;
		private _mediaSuspendEvent: HtmlElementEvent<Elements.AudioElement, Event>;
		private _mediaTimeUpdateEvent: HtmlElementEvent<Elements.AudioElement, Event>;
		private _mediaVolumeChangeEvent: HtmlElementEvent<Elements.AudioElement, Event>;
		private _mediaWaitingEvent: HtmlElementEvent<Elements.AudioElement, Event>;

		//#endregion Fields

		//#region Properties

		//#region autoPlayProperty

		/**
		* A Boolean attribute; if specified (even if the value is "false"!), the audio will automatically begin to play back as soon as it can do so without stopping to finish loading the data [MDN].
		*/
		get autoPlayProperty(): b.PropertyUpdate<boolean> {
			if(!this._autoPlayProperty)
				initializeProperty(this, 'autoPlay', 'autoplay');
			return this._autoPlayProperty;
		}

		//#endregion autoPlayProperty

		//#region autoPlay

		/**
		* A Boolean attribute; if specified (even if the value is "false"!), the audio will automatically begin to play back as soon as it can do so without stopping to finish loading the data [MDN].
		*/
		get autoPlay(): boolean {
			return this.autoPlayProperty.value;
		}

		set autoPlay(value: boolean) {
			this.autoPlayProperty.value = value;
		}

		//#endregion autoPlay

		//#region bufferedProperty

		/**
		* An attribute you can read to determine which time ranges of the media have been buffered. This attribute contains a TimeRanges object [MDN].
		*/
		get bufferedProperty(): b.PropertyUpdate<TimeRanges> {
			if(!this._bufferedProperty)
				initializeProperty(this, 'buffered', 'buffered');
			return this._bufferedProperty;
		}

		//#endregion bufferedProperty

		//#region buffered

		/**
		* An attribute you can read to determine which time ranges of the media have been buffered. This attribute contains a TimeRanges object [MDN].
		*/
		get buffered(): TimeRanges {
			return this.bufferedProperty.value;
		}

		set buffered(value: TimeRanges) {
			this.bufferedProperty.value = value;
		}

		//#endregion buffered

		//#region controlsProperty

		/**
		* If this attribute is present, the browser will offer controls to allow the user to control audio playback, including volume, seeking, and pause/resume playback [MDN].
		*/
		get controlsProperty(): b.PropertyUpdate<boolean> {
			if(!this._controlsProperty)
				initializeProperty(this, 'controls', 'controls');
			return this._controlsProperty;
		}

		//#endregion controlsProperty

		//#region controls

		/**
		* If this attribute is present, the browser will offer controls to allow the user to control audio playback, including volume, seeking, and pause/resume playback [MDN].
		*/
		get controls(): boolean {
			return this.controlsProperty.value;
		}

		set controls(value: boolean) {
			this.controlsProperty.value = value;
		}

		//#endregion controls

		//#region loopProperty

		/**
		* A Boolean attribute; if specified, we will, upon reaching the end of the audio, automatically seek back to the start [MDN].
		*/
		get loopProperty(): b.PropertyUpdate<boolean> {
			if(!this._loopProperty)
				initializeProperty(this, 'loop', 'loop');
			return this._loopProperty;
		}

		//#endregion loopProperty

		//#region loop

		/**
		* A Boolean attribute; if specified, we will, upon reaching the end of the audio, automatically seek back to the start [MDN].
		*/
		get loop(): boolean {
			return this.loopProperty.value;
		}

		set loop(value: boolean) {
			this.loopProperty.value = value;
		}

		//#endregion loop

		//#region mutedProperty

		/**
		* A Boolean attribute which indicates whether the audio will be initially silenced. Its default value is false, meaning that the audio will be played [MDN].
		*/
		get mutedProperty(): b.PropertyUpdate<boolean> {
			if(!this._mutedProperty)
				initializeProperty(this, 'muted', 'muted');
			return this._mutedProperty;
		}

		//#endregion mutedProperty

		//#region muted

		/**
		* A Boolean attribute which indicates whether the audio will be initially silenced. Its default value is false, meaning that the audio will be played [MDN].
		*/
		get muted(): boolean {
			return this.mutedProperty.value;
		}

		set muted(value: boolean) {
			this.mutedProperty.value = value;
		}

		//#endregion muted

		//#region playedProperty

		/**
		* A TimeRanges object indicating all the ranges of the audio that have been played [MDN].
		*/
		get playedProperty(): b.PropertyUpdate<TimeRanges> {
			if(!this._playedProperty)
				initializeProperty(this, 'played', 'played');
			return this._playedProperty;
		}

		//#endregion playedProperty

		//#region played

		/**
		* A TimeRanges object indicating all the ranges of the audio that have been played [MDN].
		*/
		get played(): TimeRanges {
			return this.playedProperty.value;
		}

		set played(value: TimeRanges) {
			this.playedProperty.value = value;
		}

		//#endregion played

		//#region preloadProperty

		/**
		* Html.AudioPreload enumerates the values of this property.
		* This enumerated attribute is intended to provide a hint to the browser about what the author thinks will lead to the best user experience. It may have one of the following values:  none: hints that either the author thinks that the user won't need to consult that audio or that the server wants to minimize its traffic; in others terms this hint indicates that the audio should not be cached; metadata: hints that though the author thinks that the user won't need to consult that audio, fetching the metadata (e.g. length) is reasonable; auto: hints that the user needs have priority; in others terms this hint indicated that, if needed, the whole audio could be downloaded, even if the user is not expected to use it; the empty string: which is a synonym of the auto value. If not set, its default value is browser-defined (i.e. each browser can choose its own default value), though the spec advises it to be set to metadata.  Usage notes:  The autoplay attribute has precedence over this one as if one wants to automatically play a audio, the browser will obviously need to download it. Setting both the autoplay and the preload attributes is allowed by the specification. The browser is not forced by the specification to follow the value of this attribute; it is a mere hint [MDN].
		*/
		get preloadProperty(): b.PropertyUpdate<string> {
			if(!this._preloadProperty)
				initializeProperty(this, 'preload', 'preload');
			return this._preloadProperty;
		}

		//#endregion preloadProperty

		//#region preload

		/**
		* Html.AudioPreload enumerates the values of this property.
		* This enumerated attribute is intended to provide a hint to the browser about what the author thinks will lead to the best user experience. It may have one of the following values:  none: hints that either the author thinks that the user won't need to consult that audio or that the server wants to minimize its traffic; in others terms this hint indicates that the audio should not be cached; metadata: hints that though the author thinks that the user won't need to consult that audio, fetching the metadata (e.g. length) is reasonable; auto: hints that the user needs have priority; in others terms this hint indicated that, if needed, the whole audio could be downloaded, even if the user is not expected to use it; the empty string: which is a synonym of the auto value. If not set, its default value is browser-defined (i.e. each browser can choose its own default value), though the spec advises it to be set to metadata.  Usage notes:  The autoplay attribute has precedence over this one as if one wants to automatically play a audio, the browser will obviously need to download it. Setting both the autoplay and the preload attributes is allowed by the specification. The browser is not forced by the specification to follow the value of this attribute; it is a mere hint [MDN].
		*/
		get preload(): string {
			return this.preloadProperty.value;
		}

		set preload(value: string) {
			this.preloadProperty.value = value;
		}

		//#endregion preload

		//#region sourceProperty

		/**
		* The URL of the audio to embed. This is subject to HTTP access controls. This is optional; you may instead use the <source> element within the audio block to specify the audio to embed [MDN].
		*/
		get sourceProperty(): b.PropertyUpdate<string> {
			if(!this._sourceProperty)
				initializeProperty(this, 'source', 'src');
			return this._sourceProperty;
		}

		//#endregion sourceProperty

		//#region source

		/**
		* The URL of the audio to embed. This is subject to HTTP access controls. This is optional; you may instead use the <source> element within the audio block to specify the audio to embed [MDN].
		*/
		get source(): string {
			return this.sourceProperty.value;
		}

		set source(value: string) {
			this.sourceProperty.value = value;
		}

		//#endregion source

		//#region volumeProperty

		/**
		* The playback volume of any audio portions, in the range 0.0 (silent) to 1.0 (loudest) [MDN].
		*/
		get volumeProperty(): b.PropertyUpdate<number> {
			if(!this._volumeProperty)
				initializeProperty(this, 'volume', 'volume');
			return this._volumeProperty;
		}

		//#endregion volumeProperty

		//#region volume

		/**
		* The playback volume of any audio portions, in the range 0.0 (silent) to 1.0 (loudest) [MDN].
		*/
		get volume(): number {
			return this.volumeProperty.value;
		}

		set volume(value: number) {
			this.volumeProperty.value = value;
		}

		//#endregion volume

		//#region audioCompleteEvent

		/**
		* The audioCompleteEvent event is executed when the rendering of an OfflineAudioContext is terminated [MDN].
		* Specification: Web Audio API
		* DOM Event Name: complete
		*/
		get audioCompleteEvent(): HtmlElementEvent<Elements.AudioElement, Event> {
			if(!this._audioCompleteEvent)
				this._audioCompleteEvent = new HtmlElementEvent<Elements.AudioElement, Event>('complete', 'Event', this);

			return this._audioCompleteEvent;
		}

		//#endregion audioCompleteEvent

		//#region audioEndedEvent

		/**
		* The audioEndedEvent event is executed when   [MDN].
		* Specification: Web Audio API
		* DOM Event Name: ended
		*/
		get audioEndedEvent(): HtmlElementEvent<Elements.AudioElement, Event> {
			if(!this._audioEndedEvent)
				this._audioEndedEvent = new HtmlElementEvent<Elements.AudioElement, Event>('ended', 'Event', this);

			return this._audioEndedEvent;
		}

		//#endregion audioEndedEvent

		//#region audioProcessEvent

		/**
		* The audioProcessEvent event is executed when the input buffer of a ScriptProcessorNode is ready to be processed [MDN].
		* Specification: Web Audio API
		* DOM Event Name: audioprocess
		*/
		get audioProcessEvent(): HtmlElementEvent<Elements.AudioElement, Event> {
			if(!this._audioProcessEvent)
				this._audioProcessEvent = new HtmlElementEvent<Elements.AudioElement, Event>('audioprocess', 'Event', this);

			return this._audioProcessEvent;
		}

		//#endregion audioProcessEvent

		//#region mediaCanPlayEvent

		/**
		* The mediaCanPlayEvent event is executed when the user agent can play the media, but estimates that not enough data has been loaded to play the media up to its end without having to stop for further buffering of content [MDN].
		* Specification: HTML5 media
		* DOM Event Name: canplay
		*/
		get mediaCanPlayEvent(): HtmlElementEvent<Elements.AudioElement, Event> {
			if(!this._mediaCanPlayEvent)
				this._mediaCanPlayEvent = new HtmlElementEvent<Elements.AudioElement, Event>('canplay', 'Event', this);

			return this._mediaCanPlayEvent;
		}

		//#endregion mediaCanPlayEvent

		//#region mediaCanPlayThroughEvent

		/**
		* The mediaCanPlayThroughEvent event is executed when the user agent can play the media, and estimates that enough data has been loaded to play the media up to its end without having to stop for further buffering of content [MDN].
		* Specification: HTML5 media
		* DOM Event Name: canplaythrough
		*/
		get mediaCanPlayThroughEvent(): HtmlElementEvent<Elements.AudioElement, Event> {
			if(!this._mediaCanPlayThroughEvent)
				this._mediaCanPlayThroughEvent = new HtmlElementEvent<Elements.AudioElement, Event>('canplaythrough', 'Event', this);

			return this._mediaCanPlayThroughEvent;
		}

		//#endregion mediaCanPlayThroughEvent

		//#region mediaDurationChangeEvent

		/**
		* The mediaDurationChangeEvent event is executed when the duration attribute has been updated [MDN].
		* Specification: HTML5 media
		* DOM Event Name: durationchange
		*/
		get mediaDurationChangeEvent(): HtmlElementEvent<Elements.AudioElement, Event> {
			if(!this._mediaDurationChangeEvent)
				this._mediaDurationChangeEvent = new HtmlElementEvent<Elements.AudioElement, Event>('durationchange', 'Event', this);

			return this._mediaDurationChangeEvent;
		}

		//#endregion mediaDurationChangeEvent

		//#region mediaEmptiedEvent

		/**
		* The mediaEmptiedEvent event is executed when the media has become empty; for example, this event is sent if the media has already been loaded (or partially loaded), and the load() method is called to reload it [MDN].
		* Specification: HTML5 media
		* DOM Event Name: emptied
		*/
		get mediaEmptiedEvent(): HtmlElementEvent<Elements.AudioElement, Event> {
			if(!this._mediaEmptiedEvent)
				this._mediaEmptiedEvent = new HtmlElementEvent<Elements.AudioElement, Event>('emptied', 'Event', this);

			return this._mediaEmptiedEvent;
		}

		//#endregion mediaEmptiedEvent

		//#region mediaEndedEvent

		/**
		* The mediaEndedEvent event is executed when playback has stopped because the end of the media was reached [MDN].
		* Specification: HTML5 media
		* DOM Event Name: ended
		*/
		get mediaEndedEvent(): HtmlElementEvent<Elements.AudioElement, Event> {
			if(!this._mediaEndedEvent)
				this._mediaEndedEvent = new HtmlElementEvent<Elements.AudioElement, Event>('ended', 'Event', this);

			return this._mediaEndedEvent;
		}

		//#endregion mediaEndedEvent

		//#region mediaLoadedDataEvent

		/**
		* The mediaLoadedDataEvent event is executed when the first frame of the media has finished loading [MDN].
		* Specification: HTML5 media
		* DOM Event Name: loadeddata
		*/
		get mediaLoadedDataEvent(): HtmlElementEvent<Elements.AudioElement, Event> {
			if(!this._mediaLoadedDataEvent)
				this._mediaLoadedDataEvent = new HtmlElementEvent<Elements.AudioElement, Event>('loadeddata', 'Event', this);

			return this._mediaLoadedDataEvent;
		}

		//#endregion mediaLoadedDataEvent

		//#region mediaLoadedMetadataEvent

		/**
		* The mediaLoadedMetadataEvent event is executed when the metadata has been loaded [MDN].
		* Specification: HTML5 media
		* DOM Event Name: loadedmetadata
		*/
		get mediaLoadedMetadataEvent(): HtmlElementEvent<Elements.AudioElement, Event> {
			if(!this._mediaLoadedMetadataEvent)
				this._mediaLoadedMetadataEvent = new HtmlElementEvent<Elements.AudioElement, Event>('loadedmetadata', 'Event', this);

			return this._mediaLoadedMetadataEvent;
		}

		//#endregion mediaLoadedMetadataEvent

		//#region mediaPauseEvent

		/**
		* The mediaPauseEvent event is executed when playback has been paused [MDN].
		* Specification: HTML5 media
		* DOM Event Name: pause
		*/
		get mediaPauseEvent(): HtmlElementEvent<Elements.AudioElement, Event> {
			if(!this._mediaPauseEvent)
				this._mediaPauseEvent = new HtmlElementEvent<Elements.AudioElement, Event>('pause', 'Event', this);

			return this._mediaPauseEvent;
		}

		//#endregion mediaPauseEvent

		//#region mediaPlayEvent

		/**
		* The mediaPlayEvent event is executed when playback has begun [MDN].
		* Specification: HTML5 media
		* DOM Event Name: play
		*/
		get mediaPlayEvent(): HtmlElementEvent<Elements.AudioElement, Event> {
			if(!this._mediaPlayEvent)
				this._mediaPlayEvent = new HtmlElementEvent<Elements.AudioElement, Event>('play', 'Event', this);

			return this._mediaPlayEvent;
		}

		//#endregion mediaPlayEvent

		//#region mediaPlayingEvent

		/**
		* The mediaPlayingEvent event is executed when playback is ready to start after having been paused or delayed due to lack of data [MDN].
		* Specification: HTML5 media
		* DOM Event Name: playing
		*/
		get mediaPlayingEvent(): HtmlElementEvent<Elements.AudioElement, Event> {
			if(!this._mediaPlayingEvent)
				this._mediaPlayingEvent = new HtmlElementEvent<Elements.AudioElement, Event>('playing', 'Event', this);

			return this._mediaPlayingEvent;
		}

		//#endregion mediaPlayingEvent

		//#region mediaRateChangeEvent

		/**
		* The mediaRateChangeEvent event is executed when the playback rate has changed [MDN].
		* Specification: HTML5 media
		* DOM Event Name: ratechange
		*/
		get mediaRateChangeEvent(): HtmlElementEvent<Elements.AudioElement, Event> {
			if(!this._mediaRateChangeEvent)
				this._mediaRateChangeEvent = new HtmlElementEvent<Elements.AudioElement, Event>('ratechange', 'Event', this);

			return this._mediaRateChangeEvent;
		}

		//#endregion mediaRateChangeEvent

		//#region mediaSeekedEvent

		/**
		* The mediaSeekedEvent event is executed when a seek operation completed [MDN].
		* Specification: HTML5 media
		* DOM Event Name: seeked
		*/
		get mediaSeekedEvent(): HtmlElementEvent<Elements.AudioElement, Event> {
			if(!this._mediaSeekedEvent)
				this._mediaSeekedEvent = new HtmlElementEvent<Elements.AudioElement, Event>('seeked', 'Event', this);

			return this._mediaSeekedEvent;
		}

		//#endregion mediaSeekedEvent

		//#region mediaSeekingEvent

		/**
		* The mediaSeekingEvent event is executed when a seek operation began [MDN].
		* Specification: HTML5 media
		* DOM Event Name: seeking
		*/
		get mediaSeekingEvent(): HtmlElementEvent<Elements.AudioElement, Event> {
			if(!this._mediaSeekingEvent)
				this._mediaSeekingEvent = new HtmlElementEvent<Elements.AudioElement, Event>('seeking', 'Event', this);

			return this._mediaSeekingEvent;
		}

		//#endregion mediaSeekingEvent

		//#region mediaStalledEvent

		/**
		* The mediaStalledEvent event is executed when the user agent is trying to fetch media data, but data is unexpectedly not forthcoming [MDN].
		* Specification: HTML5 media
		* DOM Event Name: stalled
		*/
		get mediaStalledEvent(): HtmlElementEvent<Elements.AudioElement, Event> {
			if(!this._mediaStalledEvent)
				this._mediaStalledEvent = new HtmlElementEvent<Elements.AudioElement, Event>('stalled', 'Event', this);

			return this._mediaStalledEvent;
		}

		//#endregion mediaStalledEvent

		//#region mediaSuspendEvent

		/**
		* The mediaSuspendEvent event is executed when media data loading has been suspended [MDN].
		* Specification: HTML5 media
		* DOM Event Name: suspend
		*/
		get mediaSuspendEvent(): HtmlElementEvent<Elements.AudioElement, Event> {
			if(!this._mediaSuspendEvent)
				this._mediaSuspendEvent = new HtmlElementEvent<Elements.AudioElement, Event>('suspend', 'Event', this);

			return this._mediaSuspendEvent;
		}

		//#endregion mediaSuspendEvent

		//#region mediaTimeUpdateEvent

		/**
		* The mediaTimeUpdateEvent event is executed when the time indicated by the currentTime attribute has been updated [MDN].
		* Specification: HTML5 media
		* DOM Event Name: timeupdate
		*/
		get mediaTimeUpdateEvent(): HtmlElementEvent<Elements.AudioElement, Event> {
			if(!this._mediaTimeUpdateEvent)
				this._mediaTimeUpdateEvent = new HtmlElementEvent<Elements.AudioElement, Event>('timeupdate', 'Event', this);

			return this._mediaTimeUpdateEvent;
		}

		//#endregion mediaTimeUpdateEvent

		//#region mediaVolumeChangeEvent

		/**
		* The mediaVolumeChangeEvent event is executed when the volume has changed [MDN].
		* Specification: HTML5 media
		* DOM Event Name: volumechange
		*/
		get mediaVolumeChangeEvent(): HtmlElementEvent<Elements.AudioElement, Event> {
			if(!this._mediaVolumeChangeEvent)
				this._mediaVolumeChangeEvent = new HtmlElementEvent<Elements.AudioElement, Event>('volumechange', 'Event', this);

			return this._mediaVolumeChangeEvent;
		}

		//#endregion mediaVolumeChangeEvent

		//#region mediaWaitingEvent

		/**
		* The mediaWaitingEvent event is executed when playback has stopped because of a temporary lack of data [MDN].
		* Specification: HTML5 media
		* DOM Event Name: waiting
		*/
		get mediaWaitingEvent(): HtmlElementEvent<Elements.AudioElement, Event> {
			if(!this._mediaWaitingEvent)
				this._mediaWaitingEvent = new HtmlElementEvent<Elements.AudioElement, Event>('waiting', 'Event', this);

			return this._mediaWaitingEvent;
		}

		//#endregion mediaWaitingEvent

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new AudioElement'.
        */
        constructor(config: IAudioElementConfig) {
			super('audio', config)
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
            var config = this.getConfig<IAudioElementConfig>();
            setPropertyFromConfig(this, config, 'autoPlay', true);
            setPropertyFromConfig(this, config, 'buffered', true);
            setPropertyFromConfig(this, config, 'controls', true);
            setPropertyFromConfig(this, config, 'loop', true);
            setPropertyFromConfig(this, config, 'muted', true);
            setPropertyFromConfig(this, config, 'played', true);
            setPropertyFromConfig(this, config, 'preload', true);
            setPropertyFromConfig(this, config, 'source', true);
            setPropertyFromConfig(this, config, 'volume', true);

			if(config.audioCompleteHandler)
				this.audioCompleteEvent.subscribe(config.audioCompleteHandler);

			if(config.audioEndedHandler)
				this.audioEndedEvent.subscribe(config.audioEndedHandler);

			if(config.audioProcessHandler)
				this.audioProcessEvent.subscribe(config.audioProcessHandler);

			if(config.mediaCanPlayHandler)
				this.mediaCanPlayEvent.subscribe(config.mediaCanPlayHandler);

			if(config.mediaCanPlayThroughHandler)
				this.mediaCanPlayThroughEvent.subscribe(config.mediaCanPlayThroughHandler);

			if(config.mediaDurationChangeHandler)
				this.mediaDurationChangeEvent.subscribe(config.mediaDurationChangeHandler);

			if(config.mediaEmptiedHandler)
				this.mediaEmptiedEvent.subscribe(config.mediaEmptiedHandler);

			if(config.mediaEndedHandler)
				this.mediaEndedEvent.subscribe(config.mediaEndedHandler);

			if(config.mediaLoadedDataHandler)
				this.mediaLoadedDataEvent.subscribe(config.mediaLoadedDataHandler);

			if(config.mediaLoadedMetadataHandler)
				this.mediaLoadedMetadataEvent.subscribe(config.mediaLoadedMetadataHandler);

			if(config.mediaPauseHandler)
				this.mediaPauseEvent.subscribe(config.mediaPauseHandler);

			if(config.mediaPlayHandler)
				this.mediaPlayEvent.subscribe(config.mediaPlayHandler);

			if(config.mediaPlayingHandler)
				this.mediaPlayingEvent.subscribe(config.mediaPlayingHandler);

			if(config.mediaRateChangeHandler)
				this.mediaRateChangeEvent.subscribe(config.mediaRateChangeHandler);

			if(config.mediaSeekedHandler)
				this.mediaSeekedEvent.subscribe(config.mediaSeekedHandler);

			if(config.mediaSeekingHandler)
				this.mediaSeekingEvent.subscribe(config.mediaSeekingHandler);

			if(config.mediaStalledHandler)
				this.mediaStalledEvent.subscribe(config.mediaStalledHandler);

			if(config.mediaSuspendHandler)
				this.mediaSuspendEvent.subscribe(config.mediaSuspendHandler);

			if(config.mediaTimeUpdateHandler)
				this.mediaTimeUpdateEvent.subscribe(config.mediaTimeUpdateHandler);

			if(config.mediaVolumeChangeHandler)
				this.mediaVolumeChangeEvent.subscribe(config.mediaVolumeChangeHandler);

			if(config.mediaWaitingHandler)
				this.mediaWaitingEvent.subscribe(config.mediaWaitingHandler);

        }

        //#endregion Base Class Overrides
	}

	//#endregion AudioElement

	//#region BaseElement

	/**
	* The HTML <base> element specifies the base URL to use for all relative URLs contained within a document [MDN].
	*/
	export class BaseElement extends HtmlElement {

		//#region Fields

		private _hrefProperty: b.PropertyUpdate<string>;
		private _targetProperty: b.PropertyUpdate<string>;

		//#endregion Fields

		//#region Properties

		//#region hrefProperty

		/**
		* The base URL to be used throughout the document for relative URL addresses. If this attribute is specified, this element must come before any other elements with attributes whose values are URLs. Absolute and relative URIs are allowed (but see note section below) [MDN].
		*/
		get hrefProperty(): b.PropertyUpdate<string> {
			if(!this._hrefProperty)
				initializeProperty(this, 'href', 'href');
			return this._hrefProperty;
		}

		//#endregion hrefProperty

		//#region href

		/**
		* The base URL to be used throughout the document for relative URL addresses. If this attribute is specified, this element must come before any other elements with attributes whose values are URLs. Absolute and relative URIs are allowed (but see note section below) [MDN].
		*/
		get href(): string {
			return this.hrefProperty.value;
		}

		set href(value: string) {
			this.hrefProperty.value = value;
		}

		//#endregion href

		//#region targetProperty

		/**
		* Html.BaseTarget enumerates the values of this property.
		* A name or keyword indicating the default location to display the result when hyperlinks or forms cause navigation, for elements that do not have an explicit target reference. In HTML4, this is the name of, or a keyword for, a frame. In HTML5, it is a name of, or keyword for, a browsing context (for example, tab, window, or inline frame). The following keywords have special meanings:  _self: Load the result into the same HTML4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified. _blank: Load the result into a new unnamed HTML4 window or HTML5 browsing context. _parent: Load the result into the HTML4 frameset parent of the current frame or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as _self. _top: In HTML4: Load the result into the full, original window, canceling all other frames. In HTML5: Load the result into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as _self [MDN].
		*/
		get targetProperty(): b.PropertyUpdate<string> {
			if(!this._targetProperty)
				initializeProperty(this, 'target', 'target');
			return this._targetProperty;
		}

		//#endregion targetProperty

		//#region target

		/**
		* Html.BaseTarget enumerates the values of this property.
		* A name or keyword indicating the default location to display the result when hyperlinks or forms cause navigation, for elements that do not have an explicit target reference. In HTML4, this is the name of, or a keyword for, a frame. In HTML5, it is a name of, or keyword for, a browsing context (for example, tab, window, or inline frame). The following keywords have special meanings:  _self: Load the result into the same HTML4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified. _blank: Load the result into a new unnamed HTML4 window or HTML5 browsing context. _parent: Load the result into the HTML4 frameset parent of the current frame or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as _self. _top: In HTML4: Load the result into the full, original window, canceling all other frames. In HTML5: Load the result into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as _self [MDN].
		*/
		get target(): string {
			return this.targetProperty.value;
		}

		set target(value: string) {
			this.targetProperty.value = value;
		}

		//#endregion target

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new BaseElement'.
        */
        constructor(config: IBaseElementConfig) {
			super('base', config)
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
            var config = this.getConfig<IBaseElementConfig>();
            setPropertyFromConfig(this, config, 'href', true);
            setPropertyFromConfig(this, config, 'target', true);

        }

        //#endregion Base Class Overrides
	}

	//#endregion BaseElement

	//#region BidirectionalIsolationElement

	/**
	* The HTML <bdi> Element (or Bi-Directional Isolation Element) isolates a span of text that might be formatted in a different direction from other text outside it [MDN].
	*/
	export class BidirectionalIsolationElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new BidirectionalIsolationElement'.
        */
        constructor(config: IBidirectionalIsolationElementConfig) {
			super('bdi', config)
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
            var config = this.getConfig<IBidirectionalIsolationElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion BidirectionalIsolationElement

	//#region BidirectionalOverrideElement

	/**
	* The HTML <bdo> Element (or HTML bidirectional override element) is used to override the current directionality of text. It causes the directionality of the characters to be ignored in favor of the specified directionality [MDN].
	*/
	export class BidirectionalOverrideElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new BidirectionalOverrideElement'.
        */
        constructor(config: IBidirectionalOverrideElementConfig) {
			super('bdo', config)
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
            var config = this.getConfig<IBidirectionalOverrideElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion BidirectionalOverrideElement

	//#region BlockQuotationElement

	/**
	* The HTML <blockquote> Element (or HTML Block Quotation Element) indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation (see Notes for how to change it). A URL for the source of the quotation may be given using the cite attribute, while a text representation of the source can be given using the <cite> element [MDN].
	*/
	export class BlockQuotationElement extends HtmlElementContainer {

		//#region Fields

		private _citationProperty: b.PropertyUpdate<string>;

		//#endregion Fields

		//#region Properties

		//#region citationProperty

		/**
		* A URL that designates a source document or message for the information quoted. This attribute is intended to point to information explaining the context or the reference for the quote [MDN].
		*/
		get citationProperty(): b.PropertyUpdate<string> {
			if(!this._citationProperty)
				initializeProperty(this, 'citation', 'cite');
			return this._citationProperty;
		}

		//#endregion citationProperty

		//#region citation

		/**
		* A URL that designates a source document or message for the information quoted. This attribute is intended to point to information explaining the context or the reference for the quote [MDN].
		*/
		get citation(): string {
			return this.citationProperty.value;
		}

		set citation(value: string) {
			this.citationProperty.value = value;
		}

		//#endregion citation

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new BlockQuotationElement'.
        */
        constructor(config: IBlockQuotationElementConfig) {
			super('blockquote', config)
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
            var config = this.getConfig<IBlockQuotationElementConfig>();
            setPropertyFromConfig(this, config, 'citation', true);

        }

        //#endregion Base Class Overrides
	}

	//#endregion BlockQuotationElement

	//#region BodyElement

	/**
	* The HTML <body> element represents the content of an HTML document. There is only one <body> element in a document [MDN].
	*/
	export class BodyElement extends HtmlElementContainer {

		//#region Fields

		private _unloadEvent: HtmlElementEvent<Elements.BodyElement, UIEvent>;

		//#endregion Fields

		//#region Properties

		//#region unloadEvent

		/**
		* The unloadEvent event is executed when the document or a dependent resource is being unloaded [MDN].
		* Specification: DOM L3
		* DOM Event Name: unload
		*/
		get unloadEvent(): HtmlElementEvent<Elements.BodyElement, UIEvent> {
			if(!this._unloadEvent)
				this._unloadEvent = new HtmlElementEvent<Elements.BodyElement, UIEvent>('unload', 'UIEvent', this);

			return this._unloadEvent;
		}

		//#endregion unloadEvent

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new BodyElement'.
        */
        constructor(config: IBodyElementConfig) {
			super('body', config)
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
            var config = this.getConfig<IBodyElementConfig>();

			if(config.unloadHandler)
				this.unloadEvent.subscribe(config.unloadHandler);

        }

        //#endregion Base Class Overrides
	}

	//#endregion BodyElement

	//#region BoldElement

	/**
	* The HTML <b> Element represents a span of text stylistically different from normal text, without a conveying any special importance or relevance. It is typically used for keywords in a summary, product names in a review, or other spans of text whose typical presentation would be boldfaced. Another example of its use is to mark the lead sentence of each paragraph of an article [MDN].
	*/
	export class BoldElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new BoldElement'.
        */
        constructor(config: IBoldElementConfig) {
			super('b', config)
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
            var config = this.getConfig<IBoldElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion BoldElement

	//#region ButtonElement

	/**
	* The HTML <button> Element represents a clickable button [MDN].
	*/
	export class ButtonElement extends HtmlElementContainer {

		//#region Fields

		private _autoFocusProperty: b.PropertyUpdate<boolean>;
		private _disabledProperty: b.PropertyUpdate<boolean>;
		private _formPropertyID: string;
		private _formProperty: FormElement;
		private _nameProperty: b.PropertyUpdate<string>;
		private _typeProperty: b.PropertyUpdate<string>;
		private _valueProperty: b.PropertyUpdate<string>;

		//#endregion Fields

		//#region Properties

		//#region autoFocusProperty

		/**
		* This Boolean attribute lets you specify that the button should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form-associated element in a document can have this attribute specified [MDN].
		*/
		get autoFocusProperty(): b.PropertyUpdate<boolean> {
			if(!this._autoFocusProperty)
				initializeProperty(this, 'autoFocus', 'autofocus');
			return this._autoFocusProperty;
		}

		//#endregion autoFocusProperty

		//#region autoFocus

		/**
		* This Boolean attribute lets you specify that the button should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form-associated element in a document can have this attribute specified [MDN].
		*/
		get autoFocus(): boolean {
			return this.autoFocusProperty.value;
		}

		set autoFocus(value: boolean) {
			this.autoFocusProperty.value = value;
		}

		//#endregion autoFocus

		//#region disabledProperty

		/**
		* This Boolean attribute indicates that the user cannot interact with the button. If this attribute is not specified, the button inherits its setting from the containing element, for example <fieldset>; if there is no containing element with the disabled attribute set, then the button is enabled [MDN].
		*/
		get disabledProperty(): b.PropertyUpdate<boolean> {
			if(!this._disabledProperty)
				initializeProperty(this, 'disabled', 'disabled');
			return this._disabledProperty;
		}

		//#endregion disabledProperty

		//#region disabled

		/**
		* This Boolean attribute indicates that the user cannot interact with the button. If this attribute is not specified, the button inherits its setting from the containing element, for example <fieldset>; if there is no containing element with the disabled attribute set, then the button is enabled [MDN].
		*/
		get disabled(): boolean {
			return this.disabledProperty.value;
		}

		set disabled(value: boolean) {
			this.disabledProperty.value = value;
		}

		//#endregion disabled

		//#region form

		/**
		* The form element that the button is associated with (its form owner). The value of the attribute must be the id attribute of a <form> element in the same document. If this attribute is not specified, the <button> element must be a descendant of a form element. This attribute enables you to place <button> elements anywhere within a document, not just as descendants of their <form> elements [MDN].
		*/
		get form(): FormElement {
			return getElementPropertyValue<FormElement>(this, 'form');
		}

		set form(value: FormElement) {
			setElementPropertyValue(this, 'form', value);
		}

		//#endregion form

		//#region nameProperty

		/**
		* The name of the button, which submitted with the form data [MDN].
		*/
		get nameProperty(): b.PropertyUpdate<string> {
			if(!this._nameProperty)
				initializeProperty(this, 'name', 'name');
			return this._nameProperty;
		}

		//#endregion nameProperty

		//#region name

		/**
		* The name of the button, which submitted with the form data [MDN].
		*/
		get name(): string {
			return this.nameProperty.value;
		}

		set name(value: string) {
			this.nameProperty.value = value;
		}

		//#endregion name

		//#region typeProperty

		/**
		* Html.ButtonType enumerates the values of this property.
		* The type of the button. Possible values are:  submit: The button submits the form data to the server. This is the default if the attribute is not specified, or if the attribute is dynamically changed to an empty or invalid value. reset: The button resets all the controls to their initial values. button: The button has no default behavior. It can have client-side scripts associated with the element's events, which are triggered when the events occur [MDN].
		*/
		get typeProperty(): b.PropertyUpdate<string> {
			if(!this._typeProperty)
				initializeProperty(this, 'type', 'type');
			return this._typeProperty;
		}

		//#endregion typeProperty

		//#region type

		/**
		* Html.ButtonType enumerates the values of this property.
		* The type of the button. Possible values are:  submit: The button submits the form data to the server. This is the default if the attribute is not specified, or if the attribute is dynamically changed to an empty or invalid value. reset: The button resets all the controls to their initial values. button: The button has no default behavior. It can have client-side scripts associated with the element's events, which are triggered when the events occur [MDN].
		*/
		get type(): string {
			return this.typeProperty.value;
		}

		set type(value: string) {
			this.typeProperty.value = value;
		}

		//#endregion type

		//#region valueProperty

		/**
		* The initial value of the button [MDN].
		*/
		get valueProperty(): b.PropertyUpdate<string> {
			if(!this._valueProperty)
				initializeProperty(this, 'value', 'value');
			return this._valueProperty;
		}

		//#endregion valueProperty

		//#region value

		/**
		* The initial value of the button [MDN].
		*/
		get value(): string {
			return this.valueProperty.value;
		}

		set value(value: string) {
			this.valueProperty.value = value;
		}

		//#endregion value

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new ButtonElement'.
        */
        constructor(config: IButtonElementConfig) {
			super('button', config)
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
            var config = this.getConfig<IButtonElementConfig>();
            setPropertyFromConfig(this, config, 'autoFocus', true);
            setPropertyFromConfig(this, config, 'disabled', true);
			setElementPropertyFromConfig(this, config, 'form');
            setPropertyFromConfig(this, config, 'name', true);
            setPropertyFromConfig(this, config, 'type', true);
            setPropertyFromConfig(this, config, 'value', true);

        }

        //#endregion Base Class Overrides
	}

	//#endregion ButtonElement

	//#region CanvasElement

	/**
	* The HTML <canvas> Element can be used to draw graphics via scripting (usually JavaScript). For example, it can be used to draw graphs, make photo compositions or even perform animations. You may (and should) provide alternate content inside the <canvas> block. That content will be rendered both on older browsers that don't support canvas and in browsers with JavaScript disabled [MDN].
	*/
	export class CanvasElement extends HtmlElementContainer {

		//#region Fields

		private _widthProperty: b.PropertyUpdate<number>;
		private _heightProperty: b.PropertyUpdate<number>;

		//#endregion Fields

		//#region Properties

		//#region widthProperty

		/**
		* The width of the coordinate space in CSS pixels. Defaults to 300 [MDN].
		*/
		get widthProperty(): b.PropertyUpdate<number> {
			if(!this._widthProperty)
				initializeProperty(this, 'width', 'width');
			return this._widthProperty;
		}

		//#endregion widthProperty

		//#region width

		/**
		* The width of the coordinate space in CSS pixels. Defaults to 300 [MDN].
		*/
		get width(): number {
			return this.widthProperty.value;
		}

		set width(value: number) {
			this.widthProperty.value = value;
		}

		//#endregion width

		//#region heightProperty

		/**
		* The height of the coordinate space in CSS pixels. Defaults to 150 [MDN].
		*/
		get heightProperty(): b.PropertyUpdate<number> {
			if(!this._heightProperty)
				initializeProperty(this, 'height', 'height');
			return this._heightProperty;
		}

		//#endregion heightProperty

		//#region height

		/**
		* The height of the coordinate space in CSS pixels. Defaults to 150 [MDN].
		*/
		get height(): number {
			return this.heightProperty.value;
		}

		set height(value: number) {
			this.heightProperty.value = value;
		}

		//#endregion height

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new CanvasElement'.
        */
        constructor(config: ICanvasElementConfig) {
			super('canvas', config)
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
            var config = this.getConfig<ICanvasElementConfig>();
            setPropertyFromConfig(this, config, 'width', true);
            setPropertyFromConfig(this, config, 'height', true);

        }

        //#endregion Base Class Overrides
	}

	//#endregion CanvasElement

	//#region CitationElement

	/**
	* The HTML <cite> Element (or HTML Citation Element) contains the title of a work, such as a book, song, movie, TV show, sculpture, etc [MDN].
	*/
	export class CitationElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new CitationElement'.
        */
        constructor(config: ICitationElementConfig) {
			super('cite', config)
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
            var config = this.getConfig<ICitationElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion CitationElement

	//#region CodeElement

	/**
	* The HTML <code> Element represents a fragment of computer code. By default, it is displayed in the browser's default monospace font [MDN].
	*/
	export class CodeElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new CodeElement'.
        */
        constructor(config: ICodeElementConfig) {
			super('code', config)
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
            var config = this.getConfig<ICodeElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion CodeElement

	//#region DataElement

	/**
	* The HTML <data> Element links a given content with a machine-readable translation. If the content is time- or date-related, the <time> must be used [MDN].
	*/
	export class DataElement extends HtmlElementContainer {

		//#region Fields

		private _valueProperty: b.PropertyUpdate<string>;

		//#endregion Fields

		//#region Properties

		//#region valueProperty

		/**
		* This attribute specifies the machine-readable translation of the content of the element [MDN].
		*/
		get valueProperty(): b.PropertyUpdate<string> {
			if(!this._valueProperty)
				initializeProperty(this, 'value', 'nodeValue');
			return this._valueProperty;
		}

		//#endregion valueProperty

		//#region value

		/**
		* This attribute specifies the machine-readable translation of the content of the element [MDN].
		*/
		get value(): string {
			return this.valueProperty.value;
		}

		set value(value: string) {
			this.valueProperty.value = value;
		}

		//#endregion value

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new DataElement'.
        */
        constructor(config: IDataElementConfig) {
			super('data', config)
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
            var config = this.getConfig<IDataElementConfig>();
            setPropertyFromConfig(this, config, 'value', true);

        }

        //#endregion Base Class Overrides
	}

	//#endregion DataElement

	//#region DataListElement

	/**
	* The HTML <datalist> Element contains a set of <option> elements that represent the possible options for the value of other controls [MDN].
	*/
	export class DataListElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new DataListElement'.
        */
        constructor(config: IDataListElementConfig) {
			super('datalist', config)
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
            var config = this.getConfig<IDataListElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion DataListElement

	//#region DefinitionElement

	/**
	* The HTML <dfn> element (or HTML Definition Element) represents the defining instance of a term [MDN].
	*/
	export class DefinitionElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new DefinitionElement'.
        */
        constructor(config: IDefinitionElementConfig) {
			super('dfn', config)
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
            var config = this.getConfig<IDefinitionElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion DefinitionElement

	//#region DefinitionTermElement

	/**
	* The HTML <dt> element (or HTML Definition Term Element) identifies a term in a definition list. This element can occur only as a child element of a <dl>. It is usually followed by a <dd> element; however, multiple <dt> elements in a row indicate several terms that are all defined by the immediate next <dd> element [MDN].
	*/
	export class DefinitionTermElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new DefinitionTermElement'.
        */
        constructor(config: IDefinitionTermElementConfig) {
			super('dt', config)
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
            var config = this.getConfig<IDefinitionTermElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion DefinitionTermElement

	//#region DeletedTextElement

	/**
	* The HTML <del> element (or HTML Deleted Text Element) represents a range of text that has been deleted from a document. This element is often (but need not be) rendered with strike-through text [MDN].
	*/
	export class DeletedTextElement extends HtmlElementContainer {

		//#region Fields

		private _citationProperty: b.PropertyUpdate<string>;

		//#endregion Fields

		//#region Properties

		//#region citationProperty

		/**
		* A URI for a resource that explains the change (for example, meeting minutes) [MDN].
		*/
		get citationProperty(): b.PropertyUpdate<string> {
			if(!this._citationProperty)
				initializeProperty(this, 'citation', 'cite');
			return this._citationProperty;
		}

		//#endregion citationProperty

		//#region citation

		/**
		* A URI for a resource that explains the change (for example, meeting minutes) [MDN].
		*/
		get citation(): string {
			return this.citationProperty.value;
		}

		set citation(value: string) {
			this.citationProperty.value = value;
		}

		//#endregion citation

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new DeletedTextElement'.
        */
        constructor(config: IDeletedTextElementConfig) {
			super('del', config)
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
            var config = this.getConfig<IDeletedTextElementConfig>();
            setPropertyFromConfig(this, config, 'citation', true);

        }

        //#endregion Base Class Overrides
	}

	//#endregion DeletedTextElement

	//#region DescriptionElement

	/**
	* The HTML <dd> Element (or HTML Description Element) indicates the description of a term in a description list (<dl>) element. This element can occur only as a child element of a definition list and it must follow a <dt> element [MDN].
	*/
	export class DescriptionElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new DescriptionElement'.
        */
        constructor(config: IDescriptionElementConfig) {
			super('dd', config)
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
            var config = this.getConfig<IDescriptionElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion DescriptionElement

	//#region DescriptionListElement

	/**
	* The HTML <dl> Element (or HTML Description List Element) encloses a list of pairs of terms and descriptions. Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs) [MDN].
	*/
	export class DescriptionListElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new DescriptionListElement'.
        */
        constructor(config: IDescriptionListElementConfig) {
			super('dl', config)
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
            var config = this.getConfig<IDescriptionListElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion DescriptionListElement

	//#region DetailsElement

	/**
	* The HTML <details> Element is used as a disclosure widget from which the user can retrieve additional information [MDN].
	*/
	export class DetailsElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new DetailsElement'.
        */
        constructor(config: IDetailsElementConfig) {
			super('details', config)
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
            var config = this.getConfig<IDetailsElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion DetailsElement

	//#region DivisionElement

	/**
	* The HTML <div> element (or HTML Document Division Element) is the generic container for flow content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element (such as <article> or <nav>) is appropriate [MDN].
	*/
	export class DivisionElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new DivisionElement'.
        */
        constructor(config: IDivisionElementConfig) {
			super('div', config)
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
            var config = this.getConfig<IDivisionElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion DivisionElement

	//#region EmbedElement

	/**
	* The HTML <embed> Element represents an integration point for an external application or interactive content (in other words, a plug-in) [MDN].
	*/
	export class EmbedElement extends HtmlElement {

		//#region Fields

		private _heightProperty: b.PropertyUpdate<string>;
		private _sourceProperty: b.PropertyUpdate<string>;
		private _widthProperty: b.PropertyUpdate<string>;

		//#endregion Fields

		//#region Properties

		//#region heightProperty

		/**
		* The displayed height of the resource, in CSS pixels [MDN].
		*/
		get heightProperty(): b.PropertyUpdate<string> {
			if(!this._heightProperty)
				initializeProperty(this, 'height', 'height');
			return this._heightProperty;
		}

		//#endregion heightProperty

		//#region height

		/**
		* The displayed height of the resource, in CSS pixels [MDN].
		*/
		get height(): string {
			return this.heightProperty.value;
		}

		set height(value: string) {
			this.heightProperty.value = value;
		}

		//#endregion height

		//#region sourceProperty

		/**
		* The URL of the resource being embedded [MDN].
		*/
		get sourceProperty(): b.PropertyUpdate<string> {
			if(!this._sourceProperty)
				initializeProperty(this, 'source', 'src');
			return this._sourceProperty;
		}

		//#endregion sourceProperty

		//#region source

		/**
		* The URL of the resource being embedded [MDN].
		*/
		get source(): string {
			return this.sourceProperty.value;
		}

		set source(value: string) {
			this.sourceProperty.value = value;
		}

		//#endregion source

		//#region widthProperty

		/**
		* The displayed width of the resource, in CSS pixels [MDN].
		*/
		get widthProperty(): b.PropertyUpdate<string> {
			if(!this._widthProperty)
				initializeProperty(this, 'width', 'width');
			return this._widthProperty;
		}

		//#endregion widthProperty

		//#region width

		/**
		* The displayed width of the resource, in CSS pixels [MDN].
		*/
		get width(): string {
			return this.widthProperty.value;
		}

		set width(value: string) {
			this.widthProperty.value = value;
		}

		//#endregion width

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new EmbedElement'.
        */
        constructor(config: IEmbedElementConfig) {
			super('embed', config)
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
            var config = this.getConfig<IEmbedElementConfig>();
            setPropertyFromConfig(this, config, 'height', true);
            setPropertyFromConfig(this, config, 'source', true);
            setPropertyFromConfig(this, config, 'width', true);

        }

        //#endregion Base Class Overrides
	}

	//#endregion EmbedElement

	//#region EmbeddedObjectElement

	/**
	* The HTML <object> Element (or HTML Embedded Object Element) represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin [MDN].
	*/
	export class EmbeddedObjectElement extends HtmlElementContainer {

		//#region Fields

		private _dataProperty: b.PropertyUpdate<string>;
		private _formPropertyID: string;
		private _formProperty: FormElement;
		private _heightProperty: b.PropertyUpdate<string>;
		private _nameProperty: b.PropertyUpdate<string>;
		private _typeProperty: b.PropertyUpdate<string>;
		private _widthProperty: b.PropertyUpdate<string>;

		//#endregion Fields

		//#region Properties

		//#region dataProperty

		/**
		* The address of the resource as a valid URL. At least one of data and type must be defined [MDN].
		*/
		get dataProperty(): b.PropertyUpdate<string> {
			if(!this._dataProperty)
				initializeProperty(this, 'data', 'data');
			return this._dataProperty;
		}

		//#endregion dataProperty

		//#region data

		/**
		* The address of the resource as a valid URL. At least one of data and type must be defined [MDN].
		*/
		get data(): string {
			return this.dataProperty.value;
		}

		set data(value: string) {
			this.dataProperty.value = value;
		}

		//#endregion data

		//#region form

		/**
		* The form element, if any, that the object element is associated with (its form owner). The value of the attribute must be an ID of a <form> element in the same document [MDN].
		*/
		get form(): FormElement {
			return getElementPropertyValue<FormElement>(this, 'form');
		}

		set form(value: FormElement) {
			setElementPropertyValue(this, 'form', value);
		}

		//#endregion form

		//#region heightProperty

		/**
		* The height of the displayed resource, in CSS pixels [MDN].
		*/
		get heightProperty(): b.PropertyUpdate<string> {
			if(!this._heightProperty)
				initializeProperty(this, 'height', 'height');
			return this._heightProperty;
		}

		//#endregion heightProperty

		//#region height

		/**
		* The height of the displayed resource, in CSS pixels [MDN].
		*/
		get height(): string {
			return this.heightProperty.value;
		}

		set height(value: string) {
			this.heightProperty.value = value;
		}

		//#endregion height

		//#region nameProperty

		/**
		* The name of valid browsing context (HTML5), or the name of the control (HTML 4) [MDN].
		*/
		get nameProperty(): b.PropertyUpdate<string> {
			if(!this._nameProperty)
				initializeProperty(this, 'name', 'name');
			return this._nameProperty;
		}

		//#endregion nameProperty

		//#region name

		/**
		* The name of valid browsing context (HTML5), or the name of the control (HTML 4) [MDN].
		*/
		get name(): string {
			return this.nameProperty.value;
		}

		set name(value: string) {
			this.nameProperty.value = value;
		}

		//#endregion name

		//#region typeProperty

		/**
		* The MIME type of the resource specified by data. At least one of data and type must be defined [MDN].
		*/
		get typeProperty(): b.PropertyUpdate<string> {
			if(!this._typeProperty)
				initializeProperty(this, 'type', 'type');
			return this._typeProperty;
		}

		//#endregion typeProperty

		//#region type

		/**
		* The MIME type of the resource specified by data. At least one of data and type must be defined [MDN].
		*/
		get type(): string {
			return this.typeProperty.value;
		}

		set type(value: string) {
			this.typeProperty.value = value;
		}

		//#endregion type

		//#region widthProperty

		/**
		* The width of the display resource, in CSS pixels [MDN].
		*/
		get widthProperty(): b.PropertyUpdate<string> {
			if(!this._widthProperty)
				initializeProperty(this, 'width', 'width');
			return this._widthProperty;
		}

		//#endregion widthProperty

		//#region width

		/**
		* The width of the display resource, in CSS pixels [MDN].
		*/
		get width(): string {
			return this.widthProperty.value;
		}

		set width(value: string) {
			this.widthProperty.value = value;
		}

		//#endregion width

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new EmbeddedObjectElement'.
        */
        constructor(config: IEmbeddedObjectElementConfig) {
			super('object', config)
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
            var config = this.getConfig<IEmbeddedObjectElementConfig>();
            setPropertyFromConfig(this, config, 'data', true);
			setElementPropertyFromConfig(this, config, 'form');
            setPropertyFromConfig(this, config, 'height', true);
            setPropertyFromConfig(this, config, 'name', true);
            setPropertyFromConfig(this, config, 'type', true);
            setPropertyFromConfig(this, config, 'width', true);

        }

        //#endregion Base Class Overrides
	}

	//#endregion EmbeddedObjectElement

	//#region EmphasisElement

	/**
	* The HTML <em> element (or HTML Emphasis Element) marks text that has stress emphasis. The <em> element can be nested, with each level of nesting indicating a greater degree of emphasis [MDN].
	*/
	export class EmphasisElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new EmphasisElement'.
        */
        constructor(config: IEmphasisElementConfig) {
			super('em', config)
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
            var config = this.getConfig<IEmphasisElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion EmphasisElement

	//#region FieldsetElement

	/**
	* The HTML <fieldset> element is used to group several controls as well as labels (<label>) within a web form [MDN].
	*/
	export class FieldsetElement extends HtmlElementContainer {

		//#region Fields

		private _disabledProperty: b.PropertyUpdate<boolean>;
		private _formPropertyID: string;
		private _formProperty: FormElement;

		//#endregion Fields

		//#region Properties

		//#region disabledProperty

		/**
		* If this Boolean attribute is set, the form controls that are its descendants, except descendants of its first optional <legend> element, are disabled, i.e., not editable. They won't receive any browsing events, like mouse clicks or focus-related ones. Often browsers display such controls as gray [MDN].
		*/
		get disabledProperty(): b.PropertyUpdate<boolean> {
			if(!this._disabledProperty)
				initializeProperty(this, 'disabled', 'disabled');
			return this._disabledProperty;
		}

		//#endregion disabledProperty

		//#region disabled

		/**
		* If this Boolean attribute is set, the form controls that are its descendants, except descendants of its first optional <legend> element, are disabled, i.e., not editable. They won't receive any browsing events, like mouse clicks or focus-related ones. Often browsers display such controls as gray [MDN].
		*/
		get disabled(): boolean {
			return this.disabledProperty.value;
		}

		set disabled(value: boolean) {
			this.disabledProperty.value = value;
		}

		//#endregion disabled

		//#region form

		/**
		* This attribute has the value of the id attribute of the <form> element its related to. Its default value is the id of the nearest <form> element it is a descendant of [MDN].
		*/
		get form(): FormElement {
			return getElementPropertyValue<FormElement>(this, 'form');
		}

		set form(value: FormElement) {
			setElementPropertyValue(this, 'form', value);
		}

		//#endregion form

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new FieldsetElement'.
        */
        constructor(config: IFieldsetElementConfig) {
			super('fieldset', config)
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
            var config = this.getConfig<IFieldsetElementConfig>();
            setPropertyFromConfig(this, config, 'disabled', true);
			setElementPropertyFromConfig(this, config, 'form');

        }

        //#endregion Base Class Overrides
	}

	//#endregion FieldsetElement

	//#region FigureElement

	/**
	* The HTML <figure> Element represents self-contained content, frequently with a caption (<figcaption>), and is typically referenced as a single unit. While it is related to the main flow, its position is independent of the main flow. Usually this is an image, an illustration, a diagram, a code snippet, or a schema that is referenced in the main text, but that can be moved to another page or to an appendix without affecting the main flow [MDN].
	*/
	export class FigureElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new FigureElement'.
        */
        constructor(config: IFigureElementConfig) {
			super('figure', config)
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
            var config = this.getConfig<IFigureElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion FigureElement

	//#region FigureCaptionElement

	/**
	* The HTML <figcaption> Element represents a caption or a legend associated with a figure or an illustration described by the rest of the data of the <figure> element which is its immediate ancestor which means <figcaption> can be the first or last element inside a <figure> block. Also, the HTML Figcaption Element is optional; if not provided, then the parent figure element will have no caption [MDN].
	*/
	export class FigureCaptionElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new FigureCaptionElement'.
        */
        constructor(config: IFigureCaptionElementConfig) {
			super('figcaption', config)
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
            var config = this.getConfig<IFigureCaptionElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion FigureCaptionElement

	//#region FooterElement

	/**
	* The HTML <footer> Element represents a footer for its nearest sectioning content or sectioning root element (i.e, its nearest parent <article>, <aside>, <nav>, <section>, <blockquote>, <body>, <details>, <fieldset>, <figure>, <td>). A footer typically contains information about the author of the section, copyright data or links to related documents [MDN].
	*/
	export class FooterElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new FooterElement'.
        */
        constructor(config: IFooterElementConfig) {
			super('footer', config)
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
            var config = this.getConfig<IFooterElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion FooterElement

	//#region FormElement

	/**
	* The HTML <form> element represents a section of document that contains interactive controls that enable a user to submit information to a web server [MDN].
	*/
	export class FormElement extends HtmlElementContainer {

		//#region Fields

		private _acceptCharsetProperty: b.PropertyUpdate<string>;
		private _actionProperty: b.PropertyUpdate<string>;
		private _autoCompleteProperty: b.PropertyUpdate<string>;
		private _encodingTypeProperty: b.PropertyUpdate<string>;
		private _methodProperty: b.PropertyUpdate<string>;
		private _nameProperty: b.PropertyUpdate<string>;
		private _targetProperty: b.PropertyUpdate<string>;
		private _resetEvent: HtmlElementEvent<Elements.FormElement, Event>;
		private _submitEvent: HtmlElementEvent<Elements.FormElement, Event>;

		//#endregion Fields

		//#region Properties

		//#region acceptCharsetProperty

		/**
		* A list of character encodings that the server accepts. The list can be delimited by spaces or commas. The browser uses in the order in which they are listed. The default value is the reserved string "UNKNOWN", in which case the encoding corresponds to the encoding of the document containing the form element. HTML 4: In previous versions of HTML, the different character encodings could be delimited by spaces or commas. This is no longer the case in HTML5, where only spaces are correct [MDN].
		*/
		get acceptCharsetProperty(): b.PropertyUpdate<string> {
			if(!this._acceptCharsetProperty)
				initializeProperty(this, 'acceptCharset', 'acceptCharset');
			return this._acceptCharsetProperty;
		}

		//#endregion acceptCharsetProperty

		//#region acceptCharset

		/**
		* A list of character encodings that the server accepts. The list can be delimited by spaces or commas. The browser uses in the order in which they are listed. The default value is the reserved string "UNKNOWN", in which case the encoding corresponds to the encoding of the document containing the form element. HTML 4: In previous versions of HTML, the different character encodings could be delimited by spaces or commas. This is no longer the case in HTML5, where only spaces are correct [MDN].
		*/
		get acceptCharset(): string {
			return this.acceptCharsetProperty.value;
		}

		set acceptCharset(value: string) {
			this.acceptCharsetProperty.value = value;
		}

		//#endregion acceptCharset

		//#region actionProperty

		/**
		* The URI of a program that processes the information submitted via the form. This value can be overridden by a formaction attribute on a <button> or <input> element [MDN].
		*/
		get actionProperty(): b.PropertyUpdate<string> {
			if(!this._actionProperty)
				initializeProperty(this, 'action', 'action');
			return this._actionProperty;
		}

		//#endregion actionProperty

		//#region action

		/**
		* The URI of a program that processes the information submitted via the form. This value can be overridden by a formaction attribute on a <button> or <input> element [MDN].
		*/
		get action(): string {
			return this.actionProperty.value;
		}

		set action(value: string) {
			this.actionProperty.value = value;
		}

		//#endregion action

		//#region autoCompleteProperty

		/**
		* Html.FormAutoComplete enumerates the values of this property.
		* Indicates whether controls in this form can by default have their values automatically completed by the browser. This setting can be overridden by an autocomplete attribute on an element belonging to the form. Possible values are:  off: The user must explicitly enter a value into each field for every use, or the document provides its own auto-completion method; the browser does not automatically complete entries. on: The browser can automatically complete values based on values that the user has entered during previous uses of the form.  
		* Note: If you set autocomplete to off in a form because the document provides its own auto-completion, then you should also set autocomplete to off for each of the form's input elements that the document can auto-complete. For details, see Google Chrome notes [MDN].
		*/
		get autoCompleteProperty(): b.PropertyUpdate<string> {
			if(!this._autoCompleteProperty)
				initializeProperty(this, 'autoComplete', 'autocomplete');
			return this._autoCompleteProperty;
		}

		//#endregion autoCompleteProperty

		//#region autoComplete

		/**
		* Html.FormAutoComplete enumerates the values of this property.
		* Indicates whether controls in this form can by default have their values automatically completed by the browser. This setting can be overridden by an autocomplete attribute on an element belonging to the form. Possible values are:  off: The user must explicitly enter a value into each field for every use, or the document provides its own auto-completion method; the browser does not automatically complete entries. on: The browser can automatically complete values based on values that the user has entered during previous uses of the form.  
		* Note: If you set autocomplete to off in a form because the document provides its own auto-completion, then you should also set autocomplete to off for each of the form's input elements that the document can auto-complete. For details, see Google Chrome notes [MDN].
		*/
		get autoComplete(): string {
			return this.autoCompleteProperty.value;
		}

		set autoComplete(value: string) {
			this.autoCompleteProperty.value = value;
		}

		//#endregion autoComplete

		//#region encodingTypeProperty

		/**
		* Html.FormEncodingType enumerates the values of this property.
		* When the value of the method attribute is post, this attribute is the MIME type of content that is used to submit the form to the server. Possible values are:  application/x-www-form-urlencoded: The default value if the attribute is not specified. multipart/form-data: Use this value if you are using an <input> element with the type attribute set to "file". text/plain (HTML5) This value can be overridden by a formenctype attribute on a <button> or <input> element [MDN].
		*/
		get encodingTypeProperty(): b.PropertyUpdate<string> {
			if(!this._encodingTypeProperty)
				initializeProperty(this, 'encodingType', 'enctype');
			return this._encodingTypeProperty;
		}

		//#endregion encodingTypeProperty

		//#region encodingType

		/**
		* Html.FormEncodingType enumerates the values of this property.
		* When the value of the method attribute is post, this attribute is the MIME type of content that is used to submit the form to the server. Possible values are:  application/x-www-form-urlencoded: The default value if the attribute is not specified. multipart/form-data: Use this value if you are using an <input> element with the type attribute set to "file". text/plain (HTML5) This value can be overridden by a formenctype attribute on a <button> or <input> element [MDN].
		*/
		get encodingType(): string {
			return this.encodingTypeProperty.value;
		}

		set encodingType(value: string) {
			this.encodingTypeProperty.value = value;
		}

		//#endregion encodingType

		//#region methodProperty

		/**
		* Html.FormMethod enumerates the values of this property.
		* The HTTP method that the browser uses to submit the form. Possible values are:  post: Corresponds to the HTTP POST method ; the data from the form is included in the body of the form and is sent to the server. get: Corresponds to the HTTP GET method; the data from the form are appended to the action attribute URI, with a '?' as a separator, and the resulting URI is sent to the server. Use this method when the form has no side-effects and contains only ASCII characters. This value can be overridden by a formmethod attribute on a <button> or <input> element [MDN].
		*/
		get methodProperty(): b.PropertyUpdate<string> {
			if(!this._methodProperty)
				initializeProperty(this, 'method', 'method');
			return this._methodProperty;
		}

		//#endregion methodProperty

		//#region method

		/**
		* Html.FormMethod enumerates the values of this property.
		* The HTTP method that the browser uses to submit the form. Possible values are:  post: Corresponds to the HTTP POST method ; the data from the form is included in the body of the form and is sent to the server. get: Corresponds to the HTTP GET method; the data from the form are appended to the action attribute URI, with a '?' as a separator, and the resulting URI is sent to the server. Use this method when the form has no side-effects and contains only ASCII characters. This value can be overridden by a formmethod attribute on a <button> or <input> element [MDN].
		*/
		get method(): string {
			return this.methodProperty.value;
		}

		set method(value: string) {
			this.methodProperty.value = value;
		}

		//#endregion method

		//#region nameProperty

		/**
		* The name of the form. In HTML 4 its use is deprecated (id should be used instead). It must be unique among the forms in a document and not the empty string in HTML 5 [MDN].
		*/
		get nameProperty(): b.PropertyUpdate<string> {
			if(!this._nameProperty)
				initializeProperty(this, 'name', 'name');
			return this._nameProperty;
		}

		//#endregion nameProperty

		//#region name

		/**
		* The name of the form. In HTML 4 its use is deprecated (id should be used instead). It must be unique among the forms in a document and not the empty string in HTML 5 [MDN].
		*/
		get name(): string {
			return this.nameProperty.value;
		}

		set name(value: string) {
			this.nameProperty.value = value;
		}

		//#endregion name

		//#region targetProperty

		/**
		* Html.FormTarget enumerates the values of this property.
		* A name or keyword indicating where to display the response that is received after submitting the form. In HTML 4, this is the name of, or a keyword for, a frame. In HTML5, it is a name of, or keyword for, a browsing context (for example, tab, window, or inline frame). The following keywords have special meanings:  _self: Load the response into the same HTML 4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified. _blank: Load the response into a new unnamed HTML 4 window or HTML5 browsing context. _parent: Load the response into the HTML 4 frameset parent of the current frame or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as _self. _top: HTML 4: Load the response into the full, original window, canceling all other frames. HTML5: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as _self. iframename: The response is displayed in a named <iframe>. HTML5: This value can be overridden by a formtarget attribute on a <button> or <input> element [MDN].
		*/
		get targetProperty(): b.PropertyUpdate<string> {
			if(!this._targetProperty)
				initializeProperty(this, 'target', 'target');
			return this._targetProperty;
		}

		//#endregion targetProperty

		//#region target

		/**
		* Html.FormTarget enumerates the values of this property.
		* A name or keyword indicating where to display the response that is received after submitting the form. In HTML 4, this is the name of, or a keyword for, a frame. In HTML5, it is a name of, or keyword for, a browsing context (for example, tab, window, or inline frame). The following keywords have special meanings:  _self: Load the response into the same HTML 4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified. _blank: Load the response into a new unnamed HTML 4 window or HTML5 browsing context. _parent: Load the response into the HTML 4 frameset parent of the current frame or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as _self. _top: HTML 4: Load the response into the full, original window, canceling all other frames. HTML5: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as _self. iframename: The response is displayed in a named <iframe>. HTML5: This value can be overridden by a formtarget attribute on a <button> or <input> element [MDN].
		*/
		get target(): string {
			return this.targetProperty.value;
		}

		set target(value: string) {
			this.targetProperty.value = value;
		}

		//#endregion target

		//#region resetEvent

		/**
		* The resetEvent event is executed when a form is reset [MDN].
		* Specifications: DOM L2, HTML5
		* DOM Event Name: reset
		*/
		get resetEvent(): HtmlElementEvent<Elements.FormElement, Event> {
			if(!this._resetEvent)
				this._resetEvent = new HtmlElementEvent<Elements.FormElement, Event>('reset', 'Event', this);

			return this._resetEvent;
		}

		//#endregion resetEvent

		//#region submitEvent

		/**
		* The submitEvent event is executed when a form is submitted [MDN].
		* Specifications: DOM L2, HTML5
		* DOM Event Name: submit
		*/
		get submitEvent(): HtmlElementEvent<Elements.FormElement, Event> {
			if(!this._submitEvent)
				this._submitEvent = new HtmlElementEvent<Elements.FormElement, Event>('submit', 'Event', this);

			return this._submitEvent;
		}

		//#endregion submitEvent

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new FormElement'.
        */
        constructor(config: IFormElementConfig) {
			super('form', config)
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
            var config = this.getConfig<IFormElementConfig>();
            setPropertyFromConfig(this, config, 'acceptCharset', true);
            setPropertyFromConfig(this, config, 'action', true);
            setPropertyFromConfig(this, config, 'autoComplete', true);
            setPropertyFromConfig(this, config, 'encodingType', true);
            setPropertyFromConfig(this, config, 'method', true);
            setPropertyFromConfig(this, config, 'name', true);
            setPropertyFromConfig(this, config, 'target', true);

			if(config.resetHandler)
				this.resetEvent.subscribe(config.resetHandler);

			if(config.submitHandler)
				this.submitEvent.subscribe(config.submitHandler);

        }

        //#endregion Base Class Overrides
	}

	//#endregion FormElement

	//#region HeadElement

	/**
	* The HTML <head> element represents a collection of metadata about the document, including links to or definitions of scripts and style sheets [MDN].
	*/
	export class HeadElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new HeadElement'.
        */
        constructor(config: IHeadElementConfig) {
			super('head', config)
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
            var config = this.getConfig<IHeadElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion HeadElement

	//#region HeaderElement

	/**
	* The HTML <header> Element represents a group of introductory or navigational aids. It may contain some heading elements but also other elements like a logo, wrapped section's header, a search form, and so on [MDN].
	*/
	export class HeaderElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new HeaderElement'.
        */
        constructor(config: IHeaderElementConfig) {
			super('header', config)
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
            var config = this.getConfig<IHeaderElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion HeaderElement

	//#region HeaderFiveElement

	/**
	* Heading elements implement six levels of document headings, <h1> is the most important and <h6> is the least. A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically [MDN].
	*/
	export class HeaderFiveElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new HeaderFiveElement'.
        */
        constructor(config: IHeaderFiveElementConfig) {
			super('h5', config)
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
            var config = this.getConfig<IHeaderFiveElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion HeaderFiveElement

	//#region HeaderFourElement

	/**
	* Heading elements implement six levels of document headings, <h1> is the most important and <h6> is the least. A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically [MDN].
	*/
	export class HeaderFourElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new HeaderFourElement'.
        */
        constructor(config: IHeaderFourElementConfig) {
			super('h4', config)
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
            var config = this.getConfig<IHeaderFourElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion HeaderFourElement

	//#region HeaderOneElement

	/**
	* Heading elements implement six levels of document headings, <h1> is the most important and <h6> is the least. A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically [MDN].
	*/
	export class HeaderOneElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new HeaderOneElement'.
        */
        constructor(config: IHeaderOneElementConfig) {
			super('h1', config)
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
            var config = this.getConfig<IHeaderOneElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion HeaderOneElement

	//#region HeaderSixElement

	/**
	* Heading elements implement six levels of document headings, <h1> is the most important and <h6> is the least. A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically [MDN].
	*/
	export class HeaderSixElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new HeaderSixElement'.
        */
        constructor(config: IHeaderSixElementConfig) {
			super('h6', config)
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
            var config = this.getConfig<IHeaderSixElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion HeaderSixElement

	//#region HeaderThreeElement

	/**
	* Heading elements implement six levels of document headings, <h1> is the most important and <h6> is the least. A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically [MDN].
	*/
	export class HeaderThreeElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new HeaderThreeElement'.
        */
        constructor(config: IHeaderThreeElementConfig) {
			super('h3', config)
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
            var config = this.getConfig<IHeaderThreeElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion HeaderThreeElement

	//#region HeaderTwoElement

	/**
	* Heading elements implement six levels of document headings, <h1> is the most important and <h6> is the least. A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically [MDN].
	*/
	export class HeaderTwoElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new HeaderTwoElement'.
        */
        constructor(config: IHeaderTwoElementConfig) {
			super('h2', config)
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
            var config = this.getConfig<IHeaderTwoElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion HeaderTwoElement

	//#region HorizontalRuleElement

	/**
	* In HTML5 the HTML <hr> element represents a thematic break between paragraph-level elements (for example, a change of scene in a story, or a shift of topic with a section). In previous versions of HTML, it represented a horizontal rule. It may still be displayed as a horizontal rule in visual browsers, but is now defined in semantic terms, rather than presentational terms [MDN].
	*/
	export class HorizontalRuleElement extends HtmlElement {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new HorizontalRuleElement'.
        */
        constructor(config: IHorizontalRuleElementConfig) {
			super('hr', config)
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
            var config = this.getConfig<IHorizontalRuleElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion HorizontalRuleElement

	//#region ImageElement

	/**
	* The HTML <img> Element (or HTML Image Element) represents an image of the document [MDN].
	*/
	export class ImageElement extends HtmlElement {

		//#region Fields

		private _alternateProperty: b.PropertyUpdate<string>;
		private _heightProperty: b.PropertyUpdate<number>;
		private _longDescriptionProperty: b.PropertyUpdate<string>;
		private _sourceProperty: b.PropertyUpdate<string>;
		private _widthProperty: b.PropertyUpdate<number>;
		private _abortEvent: HtmlElementEvent<Elements.ImageElement, UIEvent>;
		private _errorEvent: HtmlElementEvent<Elements.ImageElement, UIEvent>;

		//#endregion Fields

		//#region Properties

		//#region alternateProperty

		/**
		* This attribute defines the alternative text describing the image. Users will see this displayed if the image URL is wrong, the image is not in one of the supported formats, or until the image is downloaded.  
		* Note: Omitting this attribute indicates that the image is a key part of the content, but no textual equivalent is available. Setting this attribute to the empty string indicates that this image is not a key part of the content; non-visual browsers may omit it from the rendering [MDN].
		*/
		get alternateProperty(): b.PropertyUpdate<string> {
			if(!this._alternateProperty)
				initializeProperty(this, 'alternate', 'alt');
			return this._alternateProperty;
		}

		//#endregion alternateProperty

		//#region alternate

		/**
		* This attribute defines the alternative text describing the image. Users will see this displayed if the image URL is wrong, the image is not in one of the supported formats, or until the image is downloaded.  
		* Note: Omitting this attribute indicates that the image is a key part of the content, but no textual equivalent is available. Setting this attribute to the empty string indicates that this image is not a key part of the content; non-visual browsers may omit it from the rendering [MDN].
		*/
		get alternate(): string {
			return this.alternateProperty.value;
		}

		set alternate(value: string) {
			this.alternateProperty.value = value;
		}

		//#endregion alternate

		//#region heightProperty

		/**
		* The height of the image in HTML5 CSS pixels, or HTML 4 in pixels or as a percentage [MDN].
		*/
		get heightProperty(): b.PropertyUpdate<number> {
			if(!this._heightProperty)
				initializeProperty(this, 'height', 'height');
			return this._heightProperty;
		}

		//#endregion heightProperty

		//#region height

		/**
		* The height of the image in HTML5 CSS pixels, or HTML 4 in pixels or as a percentage [MDN].
		*/
		get height(): number {
			return this.heightProperty.value;
		}

		set height(value: number) {
			this.heightProperty.value = value;
		}

		//#endregion height

		//#region longDescriptionProperty

		/**
		* The URL of a description of the image to be displayed, which supplements the alt text. In HTML5, use a regular <a> element to link to the description [MDN].
		*/
		get longDescriptionProperty(): b.PropertyUpdate<string> {
			if(!this._longDescriptionProperty)
				initializeProperty(this, 'longDescription', 'longDesc');
			return this._longDescriptionProperty;
		}

		//#endregion longDescriptionProperty

		//#region longDescription

		/**
		* The URL of a description of the image to be displayed, which supplements the alt text. In HTML5, use a regular <a> element to link to the description [MDN].
		*/
		get longDescription(): string {
			return this.longDescriptionProperty.value;
		}

		set longDescription(value: string) {
			this.longDescriptionProperty.value = value;
		}

		//#endregion longDescription

		//#region sourceProperty

		/**
		* Image URL, this attribute is obligatory for the <img> element [MDN].
		*/
		get sourceProperty(): b.PropertyUpdate<string> {
			if(!this._sourceProperty)
				initializeProperty(this, 'source', 'src');
			return this._sourceProperty;
		}

		//#endregion sourceProperty

		//#region source

		/**
		* Image URL, this attribute is obligatory for the <img> element [MDN].
		*/
		get source(): string {
			return this.sourceProperty.value;
		}

		set source(value: string) {
			this.sourceProperty.value = value;
		}

		//#endregion source

		//#region widthProperty

		/**
		* The width of the image in pixels or percent [MDN].
		*/
		get widthProperty(): b.PropertyUpdate<number> {
			if(!this._widthProperty)
				initializeProperty(this, 'width', 'width');
			return this._widthProperty;
		}

		//#endregion widthProperty

		//#region width

		/**
		* The width of the image in pixels or percent [MDN].
		*/
		get width(): number {
			return this.widthProperty.value;
		}

		set width(value: number) {
			this.widthProperty.value = value;
		}

		//#endregion width

		//#region abortEvent

		/**
		* The abortEvent event is executed when the loading of a resource has been aborted [MDN].
		* Specification: DOM L3
		* DOM Event Name: abort
		*/
		get abortEvent(): HtmlElementEvent<Elements.ImageElement, UIEvent> {
			if(!this._abortEvent)
				this._abortEvent = new HtmlElementEvent<Elements.ImageElement, UIEvent>('abort', 'UIEvent', this);

			return this._abortEvent;
		}

		//#endregion abortEvent

		//#region errorEvent

		/**
		* The errorEvent event is executed when a resource failed to load [MDN].
		* Specification: DOM L3
		* DOM Event Name: error
		*/
		get errorEvent(): HtmlElementEvent<Elements.ImageElement, UIEvent> {
			if(!this._errorEvent)
				this._errorEvent = new HtmlElementEvent<Elements.ImageElement, UIEvent>('error', 'UIEvent', this);

			return this._errorEvent;
		}

		//#endregion errorEvent

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new ImageElement'.
        */
        constructor(config: IImageElementConfig) {
			super('img', config)
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
            var config = this.getConfig<IImageElementConfig>();
            setPropertyFromConfig(this, config, 'alternate', true);
            setPropertyFromConfig(this, config, 'height', true);
            setPropertyFromConfig(this, config, 'longDescription', true);
            setPropertyFromConfig(this, config, 'source', true);
            setPropertyFromConfig(this, config, 'width', true);

			if(config.abortHandler)
				this.abortEvent.subscribe(config.abortHandler);

			if(config.errorHandler)
				this.errorEvent.subscribe(config.errorHandler);

        }

        //#endregion Base Class Overrides
	}

	//#endregion ImageElement

	//#region InlineFrameElement

	/**
	* The HTML <iframe> Element (or HTML inline frame element) represents a nested browsing context, effectively embedding another HTML page into the current page. In HTML 4.01, a document may contain a head and a body or a head and a frame-set, but not both a body and a frame-set. However,an <iframe> can be used within a normal document body. Each browsing context has its own session history and active document. The browsing context that contains the embedded content is called the parent browsing context. The top-level browsing context (which has no parent) is typically the browser window [MDN].
	*/
	export class InlineFrameElement extends HtmlElementContainer {

		//#region Fields

		private _heightProperty: b.PropertyUpdate<string>;
		private _nameProperty: b.PropertyUpdate<string>;
		private _scrollingProperty: b.PropertyUpdate<string>;
		private _sourceProperty: b.PropertyUpdate<string>;
		private _widthProperty: b.PropertyUpdate<string>;

		//#endregion Fields

		//#region Properties

		//#region heightProperty

		/**
		* Indicates the height of the frame HTML5 in CSS pixels, or HTML 4.01 in pixels or as a percentage [MDN].
		*/
		get heightProperty(): b.PropertyUpdate<string> {
			if(!this._heightProperty)
				initializeProperty(this, 'height', 'height');
			return this._heightProperty;
		}

		//#endregion heightProperty

		//#region height

		/**
		* Indicates the height of the frame HTML5 in CSS pixels, or HTML 4.01 in pixels or as a percentage [MDN].
		*/
		get height(): string {
			return this.heightProperty.value;
		}

		set height(value: string) {
			this.heightProperty.value = value;
		}

		//#endregion height

		//#region nameProperty

		/**
		* A name for the embedded browsing context (or frame). This can be used as the value of the target attribute of an <a> or <form> element, or the formtarget attribute of an <input> or <button> element [MDN].
		*/
		get nameProperty(): b.PropertyUpdate<string> {
			if(!this._nameProperty)
				initializeProperty(this, 'name', 'name');
			return this._nameProperty;
		}

		//#endregion nameProperty

		//#region name

		/**
		* A name for the embedded browsing context (or frame). This can be used as the value of the target attribute of an <a> or <form> element, or the formtarget attribute of an <input> or <button> element [MDN].
		*/
		get name(): string {
			return this.nameProperty.value;
		}

		set name(value: string) {
			this.nameProperty.value = value;
		}

		//#endregion name

		//#region scrollingProperty

		/**
		* Html.InlineFrameScrolling enumerates the values of this property.
		* Enumerated attribute indicating when the browser should provide a scroll bar (or other scrolling device) for the frame:  auto: Only when needed. yes: Always provide a scroll bar. no: Never provide a scoll bar [MDN].
		*/
		get scrollingProperty(): b.PropertyUpdate<string> {
			if(!this._scrollingProperty)
				initializeProperty(this, 'scrolling', 'scrolling');
			return this._scrollingProperty;
		}

		//#endregion scrollingProperty

		//#region scrolling

		/**
		* Html.InlineFrameScrolling enumerates the values of this property.
		* Enumerated attribute indicating when the browser should provide a scroll bar (or other scrolling device) for the frame:  auto: Only when needed. yes: Always provide a scroll bar. no: Never provide a scoll bar [MDN].
		*/
		get scrolling(): string {
			return this.scrollingProperty.value;
		}

		set scrolling(value: string) {
			this.scrollingProperty.value = value;
		}

		//#endregion scrolling

		//#region sourceProperty

		/**
		* The URL of the page to embed [MDN].
		*/
		get sourceProperty(): b.PropertyUpdate<string> {
			if(!this._sourceProperty)
				initializeProperty(this, 'source', 'src');
			return this._sourceProperty;
		}

		//#endregion sourceProperty

		//#region source

		/**
		* The URL of the page to embed [MDN].
		*/
		get source(): string {
			return this.sourceProperty.value;
		}

		set source(value: string) {
			this.sourceProperty.value = value;
		}

		//#endregion source

		//#region widthProperty

		/**
		* Indicates the width of the frame HTML5 in CSS pixels, or HTML 4.01 in pixels or as a percentage [MDN].
		*/
		get widthProperty(): b.PropertyUpdate<string> {
			if(!this._widthProperty)
				initializeProperty(this, 'width', 'width');
			return this._widthProperty;
		}

		//#endregion widthProperty

		//#region width

		/**
		* Indicates the width of the frame HTML5 in CSS pixels, or HTML 4.01 in pixels or as a percentage [MDN].
		*/
		get width(): string {
			return this.widthProperty.value;
		}

		set width(value: string) {
			this.widthProperty.value = value;
		}

		//#endregion width

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new InlineFrameElement'.
        */
        constructor(config: IInlineFrameElementConfig) {
			super('iframe', config)
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
            var config = this.getConfig<IInlineFrameElementConfig>();
            setPropertyFromConfig(this, config, 'height', true);
            setPropertyFromConfig(this, config, 'name', true);
            setPropertyFromConfig(this, config, 'scrolling', true);
            setPropertyFromConfig(this, config, 'source', true);
            setPropertyFromConfig(this, config, 'width', true);

        }

        //#endregion Base Class Overrides
	}

	//#endregion InlineFrameElement

	//#region InputElement

	/**
	* The HTML <input> element is used to create interactive controls for web-based forms [MDN].
	*/
	export class InputElement extends HtmlElement {

		//#region Fields

		private _typeProperty: b.PropertyUpdate<string>;
		private _acceptProperty: b.PropertyUpdate<string>;
		private _autoCompleteProperty: b.PropertyUpdate<string>;
		private _autoFocusProperty: b.PropertyUpdate<boolean>;
		private _checkedProperty: b.PropertyUpdate<boolean>;
		private _disabledProperty: b.PropertyUpdate<boolean>;
		private _formPropertyID: string;
		private _formProperty: FormElement;
		private _heightProperty: b.PropertyUpdate<number>;
		private _listPropertyID: string;
		private _listProperty: HtmlElement;
		private _maxProperty: b.PropertyUpdate<string>;
		private _minProperty: b.PropertyUpdate<string>;
		private _multipleProperty: b.PropertyUpdate<boolean>;
		private _nameProperty: b.PropertyUpdate<string>;
		private _patternProperty: b.PropertyUpdate<string>;
		private _placeHolderProperty: b.PropertyUpdate<string>;
		private _requiredProperty: b.PropertyUpdate<boolean>;
		private _sizeProperty: b.PropertyUpdate<number>;
		private _sourceProperty: b.PropertyUpdate<string>;
		private _stepProperty: b.PropertyUpdate<string>;
		private _valueProperty: b.PropertyUpdate<string>;
		private _widthProperty: b.PropertyUpdate<number>;
		private _changeEvent: HtmlElementEvent<Elements.InputElement, Event>;
		private _inputEvent: HtmlElementEvent<Elements.InputElement, Event>;

		//#endregion Fields

		//#region Properties

		//#region typeProperty

		/**
		* Html.InputType enumerates the values of this property.
		* The type of control to display. The default type is text, if this attribute is not specified. Possible values are:  button: A push button with no default behavior. checkbox: A check box. You must use the value attribute to define the value submitted by this item. Use the checked attribute to indicate whether this item is selected. You can also use the indeterminate attribute to indicate that the checkbox is in an indeterminate state (on most platforms, this draws a horizontal line across the checkbox). color: HTML5 A control for specifying a color. date: HTML5 A control for entering a date (year, month, and day, with no time). datetime: HTML5 A control for entering a date and time (hour, minute, second, and fraction of a second) based on UTC time zone. datetime-local: HTML5 A control for entering a date and time, with no time zone. email: HTML5 A field for editing an e-mail address. The :valid and :invalid CSS pseudo-classes are applied as appropriate. file: A control that lets the user select a file. Use the accept attribute to define the types of files that the control can select. hidden: A control that is not displayed, but whose value is submitted to the server. image: A graphical submit button. You must use the src attribute to define the source of the image and the alt attribute to define alternative text. You can use the height and width attributes to define the size of the image in pixels. month: HTML5 A control for entering a month and year, with no time zone. number: HTML5 A control for entering a floating point number. password: A single-line text field whose value is obscured. Use the maxlength attribute to specify the maximum length of the value that can be entered. radio: A radio button. You must use the value attribute to define the value submitted by this item. Use the checked attribute to indicate whether this item is selected by default. Radio buttons that have the same value for the name attribute are in the same "radio button group"; only one radio button in a group can be selected at one time. range: HTML5 A control for entering a number whose exact value is not important. This type control uses the following default values if the corresponding attributes are not specified:  min: 0  max: 100  value: min + (max-min)/2, or min if max is less than min  step: 1  reset: A button that resets the contents of the form to default values. search: HTML5 A single-line text field for entering search strings; line-breaks are automatically removed from the input value. submit: A button that submits the form. tel: HTML5 A control for entering a telephone number; line-breaks are automatically removed from the input value, but no other syntax is enforced. You can use attributes such as pattern and maxlength to restrict values entered in the control. The :valid and :invalid CSS pseudo-classes are applied as appropriate. text: A single-line text field; line-breaks are automatically removed from the input value. time: HTML5 A control for entering a time value with no time zone. url: HTML5 A field for editing a URL. The user may enter a blank or invalid address. Line-breaks are automatically removed from the input value. You can use attributes such as pattern and maxlength to restrict values entered in the control. The :valid and :invalid CSS pseudo-classes are applied as appropriate. week: HTML5 A control for entering a date consisting of a week-year number and a week number with no time zone [MDN].
		*/
		get typeProperty(): b.PropertyUpdate<string> {
			if(!this._typeProperty)
				initializeProperty(this, 'type', 'type');
			return this._typeProperty;
		}

		//#endregion typeProperty

		//#region type

		/**
		* Html.InputType enumerates the values of this property.
		* The type of control to display. The default type is text, if this attribute is not specified. Possible values are:  button: A push button with no default behavior. checkbox: A check box. You must use the value attribute to define the value submitted by this item. Use the checked attribute to indicate whether this item is selected. You can also use the indeterminate attribute to indicate that the checkbox is in an indeterminate state (on most platforms, this draws a horizontal line across the checkbox). color: HTML5 A control for specifying a color. date: HTML5 A control for entering a date (year, month, and day, with no time). datetime: HTML5 A control for entering a date and time (hour, minute, second, and fraction of a second) based on UTC time zone. datetime-local: HTML5 A control for entering a date and time, with no time zone. email: HTML5 A field for editing an e-mail address. The :valid and :invalid CSS pseudo-classes are applied as appropriate. file: A control that lets the user select a file. Use the accept attribute to define the types of files that the control can select. hidden: A control that is not displayed, but whose value is submitted to the server. image: A graphical submit button. You must use the src attribute to define the source of the image and the alt attribute to define alternative text. You can use the height and width attributes to define the size of the image in pixels. month: HTML5 A control for entering a month and year, with no time zone. number: HTML5 A control for entering a floating point number. password: A single-line text field whose value is obscured. Use the maxlength attribute to specify the maximum length of the value that can be entered. radio: A radio button. You must use the value attribute to define the value submitted by this item. Use the checked attribute to indicate whether this item is selected by default. Radio buttons that have the same value for the name attribute are in the same "radio button group"; only one radio button in a group can be selected at one time. range: HTML5 A control for entering a number whose exact value is not important. This type control uses the following default values if the corresponding attributes are not specified:  min: 0  max: 100  value: min + (max-min)/2, or min if max is less than min  step: 1  reset: A button that resets the contents of the form to default values. search: HTML5 A single-line text field for entering search strings; line-breaks are automatically removed from the input value. submit: A button that submits the form. tel: HTML5 A control for entering a telephone number; line-breaks are automatically removed from the input value, but no other syntax is enforced. You can use attributes such as pattern and maxlength to restrict values entered in the control. The :valid and :invalid CSS pseudo-classes are applied as appropriate. text: A single-line text field; line-breaks are automatically removed from the input value. time: HTML5 A control for entering a time value with no time zone. url: HTML5 A field for editing a URL. The user may enter a blank or invalid address. Line-breaks are automatically removed from the input value. You can use attributes such as pattern and maxlength to restrict values entered in the control. The :valid and :invalid CSS pseudo-classes are applied as appropriate. week: HTML5 A control for entering a date consisting of a week-year number and a week number with no time zone [MDN].
		*/
		get type(): string {
			return this.typeProperty.value;
		}

		set type(value: string) {
			this.typeProperty.value = value;
		}

		//#endregion type

		//#region acceptProperty

		/**
		* Html.InputAccept enumerates the values of this property.
		* If the value of the type attribute is file, this attribute indicates the types of files that the server accepts; otherwise it is ignored. The value must be a comma-separated list of unique content type specifiers:  A valid MIME type with no extensions audio/* representing sound files HTML5 video/* representing video files HTML5 image/* representing image files HTML5 [MDN].
		*/
		get acceptProperty(): b.PropertyUpdate<string> {
			if(!this._acceptProperty)
				initializeProperty(this, 'accept', 'accept');
			return this._acceptProperty;
		}

		//#endregion acceptProperty

		//#region accept

		/**
		* Html.InputAccept enumerates the values of this property.
		* If the value of the type attribute is file, this attribute indicates the types of files that the server accepts; otherwise it is ignored. The value must be a comma-separated list of unique content type specifiers:  A valid MIME type with no extensions audio/* representing sound files HTML5 video/* representing video files HTML5 image/* representing image files HTML5 [MDN].
		*/
		get accept(): string {
			return this.acceptProperty.value;
		}

		set accept(value: string) {
			this.acceptProperty.value = value;
		}

		//#endregion accept

		//#region autoCompleteProperty

		/**
		* Html.InputAutoComplete enumerates the values of this property.
		* This attribute indicates whether the value of the control can be automatically completed by the browser. This attribute is ignored if the value of the type attribute is hidden, checkbox, radio, file, or a button type (button, submit, reset, image). Possible values are:  off: The user must explicitly enter a value into this field for every use, or the document provides its own auto-completion method; the browser does not automatically complete the entry. on: The browser can automatically complete the value based on values that the user has entered during previous uses. If the autocomplete attribute is not specified on an input element, then the browser uses the autocomplete attribute value of the <input> element's form owner. The form owner is either the form element that this <input> element is a descendant of or the form element whose id is specified by the form attribute of the input element. For more information, see the autocomplete attribute in <form> [MDN].
		*/
		get autoCompleteProperty(): b.PropertyUpdate<string> {
			if(!this._autoCompleteProperty)
				initializeProperty(this, 'autoComplete', 'autocomplete');
			return this._autoCompleteProperty;
		}

		//#endregion autoCompleteProperty

		//#region autoComplete

		/**
		* Html.InputAutoComplete enumerates the values of this property.
		* This attribute indicates whether the value of the control can be automatically completed by the browser. This attribute is ignored if the value of the type attribute is hidden, checkbox, radio, file, or a button type (button, submit, reset, image). Possible values are:  off: The user must explicitly enter a value into this field for every use, or the document provides its own auto-completion method; the browser does not automatically complete the entry. on: The browser can automatically complete the value based on values that the user has entered during previous uses. If the autocomplete attribute is not specified on an input element, then the browser uses the autocomplete attribute value of the <input> element's form owner. The form owner is either the form element that this <input> element is a descendant of or the form element whose id is specified by the form attribute of the input element. For more information, see the autocomplete attribute in <form> [MDN].
		*/
		get autoComplete(): string {
			return this.autoCompleteProperty.value;
		}

		set autoComplete(value: string) {
			this.autoCompleteProperty.value = value;
		}

		//#endregion autoComplete

		//#region autoFocusProperty

		/**
		* This Boolean attribute lets you specify that a form control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form element in a document can have the autofocus attribute, which is a Boolean. It cannot be applied if the type attribute is set to hidden (that is, you cannot automatically set focus to a hidden control) [MDN].
		*/
		get autoFocusProperty(): b.PropertyUpdate<boolean> {
			if(!this._autoFocusProperty)
				initializeProperty(this, 'autoFocus', 'autofocus');
			return this._autoFocusProperty;
		}

		//#endregion autoFocusProperty

		//#region autoFocus

		/**
		* This Boolean attribute lets you specify that a form control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form element in a document can have the autofocus attribute, which is a Boolean. It cannot be applied if the type attribute is set to hidden (that is, you cannot automatically set focus to a hidden control) [MDN].
		*/
		get autoFocus(): boolean {
			return this.autoFocusProperty.value;
		}

		set autoFocus(value: boolean) {
			this.autoFocusProperty.value = value;
		}

		//#endregion autoFocus

		//#region checkedProperty

		/**
		* When the value of the type attribute is radio or checkbox, the presence of this Boolean attribute indicates that the control is selected by default; otherwise it is ignored [MDN].
		*/
		get checkedProperty(): b.PropertyUpdate<boolean> {
			if(!this._checkedProperty)
				initializeProperty(this, 'checked', 'checked');
			return this._checkedProperty;
		}

		//#endregion checkedProperty

		//#region checked

		/**
		* When the value of the type attribute is radio or checkbox, the presence of this Boolean attribute indicates that the control is selected by default; otherwise it is ignored [MDN].
		*/
		get checked(): boolean {
			return this.checkedProperty.value;
		}

		set checked(value: boolean) {
			this.checkedProperty.value = value;
		}

		//#endregion checked

		//#region disabledProperty

		/**
		* This Boolean attribute indicates that the form control is not available for interaction. In particular, the click event will not be dispatched on disabled controls. Also, a disabled control's value isn't submitted with the form. This attribute is ignored if the value of the type attribute is hidden [MDN].
		*/
		get disabledProperty(): b.PropertyUpdate<boolean> {
			if(!this._disabledProperty)
				initializeProperty(this, 'disabled', 'disabled');
			return this._disabledProperty;
		}

		//#endregion disabledProperty

		//#region disabled

		/**
		* This Boolean attribute indicates that the form control is not available for interaction. In particular, the click event will not be dispatched on disabled controls. Also, a disabled control's value isn't submitted with the form. This attribute is ignored if the value of the type attribute is hidden [MDN].
		*/
		get disabled(): boolean {
			return this.disabledProperty.value;
		}

		set disabled(value: boolean) {
			this.disabledProperty.value = value;
		}

		//#endregion disabled

		//#region form

		/**
		* The form element that the input element is associated with (its form owner). The value of the attribute must be an id of a <form> element in the same document. If this attribute is not specified, this <input> element must be a descendant of a <form> element. This attribute enables you to place <input> elements anywhere within a document, not just as descendants of their form elements. An input can only be associated with one form [MDN].
		*/
		get form(): FormElement {
			return getElementPropertyValue<FormElement>(this, 'form');
		}

		set form(value: FormElement) {
			setElementPropertyValue(this, 'form', value);
		}

		//#endregion form

		//#region heightProperty

		/**
		* If the value of the type attribute is image, this attribute defines the height of the image displayed for the button [MDN].
		*/
		get heightProperty(): b.PropertyUpdate<number> {
			if(!this._heightProperty)
				initializeProperty(this, 'height', 'height');
			return this._heightProperty;
		}

		//#endregion heightProperty

		//#region height

		/**
		* If the value of the type attribute is image, this attribute defines the height of the image displayed for the button [MDN].
		*/
		get height(): number {
			return this.heightProperty.value;
		}

		set height(value: number) {
			this.heightProperty.value = value;
		}

		//#endregion height

		//#region list

		/**
		* Identifies a list of pre-defined options to suggest to the user. The value must be the id of a <datalist> element in the same document. The browser displays only options that are valid values for this input element. This attribute is ignored when the type attribute's value is hidden, checkbox, radio, file, or a button type [MDN].
		*/
		get list(): HtmlElement {
			return getElementPropertyValue<HtmlElement>(this, 'list');
		}

		set list(value: HtmlElement) {
			setElementPropertyValue(this, 'list', value);
		}

		//#endregion list

		//#region maxProperty

		/**
		* The maximum (numeric or date-time) value for this item, which must not be less than its minimum (min attribute) value [MDN].
		*/
		get maxProperty(): b.PropertyUpdate<string> {
			if(!this._maxProperty)
				initializeProperty(this, 'max', 'max');
			return this._maxProperty;
		}

		//#endregion maxProperty

		//#region max

		/**
		* The maximum (numeric or date-time) value for this item, which must not be less than its minimum (min attribute) value [MDN].
		*/
		get max(): string {
			return this.maxProperty.value;
		}

		set max(value: string) {
			this.maxProperty.value = value;
		}

		//#endregion max

		//#region minProperty

		/**
		* The minimum (numeric or date-time) value for this item, which must not be greater than its maximum (max attribute) value [MDN].
		*/
		get minProperty(): b.PropertyUpdate<string> {
			if(!this._minProperty)
				initializeProperty(this, 'min', 'min');
			return this._minProperty;
		}

		//#endregion minProperty

		//#region min

		/**
		* The minimum (numeric or date-time) value for this item, which must not be greater than its maximum (max attribute) value [MDN].
		*/
		get min(): string {
			return this.minProperty.value;
		}

		set min(value: string) {
			this.minProperty.value = value;
		}

		//#endregion min

		//#region multipleProperty

		/**
		* This Boolean attribute indicates whether the user can enter more than one value. This attribute applies when the type attribute is set to email or file; otherwise it is ignored [MDN].
		*/
		get multipleProperty(): b.PropertyUpdate<boolean> {
			if(!this._multipleProperty)
				initializeProperty(this, 'multiple', 'multiple');
			return this._multipleProperty;
		}

		//#endregion multipleProperty

		//#region multiple

		/**
		* This Boolean attribute indicates whether the user can enter more than one value. This attribute applies when the type attribute is set to email or file; otherwise it is ignored [MDN].
		*/
		get multiple(): boolean {
			return this.multipleProperty.value;
		}

		set multiple(value: boolean) {
			this.multipleProperty.value = value;
		}

		//#endregion multiple

		//#region nameProperty

		/**
		* The name of the control, which is submitted with the form data [MDN].
		*/
		get nameProperty(): b.PropertyUpdate<string> {
			if(!this._nameProperty)
				initializeProperty(this, 'name', 'name');
			return this._nameProperty;
		}

		//#endregion nameProperty

		//#region name

		/**
		* The name of the control, which is submitted with the form data [MDN].
		*/
		get name(): string {
			return this.nameProperty.value;
		}

		set name(value: string) {
			this.nameProperty.value = value;
		}

		//#endregion name

		//#region patternProperty

		/**
		* A regular expression that the control's value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is text, search, tel, url or email; otherwise it is ignored. The regular expression language is the same as JavaScript's. The pattern is not surrounded by forward slashes [MDN].
		*/
		get patternProperty(): b.PropertyUpdate<string> {
			if(!this._patternProperty)
				initializeProperty(this, 'pattern', 'pattern');
			return this._patternProperty;
		}

		//#endregion patternProperty

		//#region pattern

		/**
		* A regular expression that the control's value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is text, search, tel, url or email; otherwise it is ignored. The regular expression language is the same as JavaScript's. The pattern is not surrounded by forward slashes [MDN].
		*/
		get pattern(): string {
			return this.patternProperty.value;
		}

		set pattern(value: string) {
			this.patternProperty.value = value;
		}

		//#endregion pattern

		//#region placeHolderProperty

		/**
		* A hint to the user of what can be entered in the control . The placeholder text must not contain carriage returns or line-feeds. This attribute applies when the value of the type attribute is text, search, tel, url or email; otherwise it is ignored.  
		* Note: Do not use the placeholder attribute instead of a <label> element. Their purposes are different: the <label> attribute describes the role of the form element; that is, it indicates what kind of information is expected, the placeholder attribute is a hint about the format the content should take. There are cases in which the placeholder attribute is never displayed to the user, so the form must be understandable without it [MDN].
		*/
		get placeHolderProperty(): b.PropertyUpdate<string> {
			if(!this._placeHolderProperty)
				initializeProperty(this, 'placeHolder', 'placeholder');
			return this._placeHolderProperty;
		}

		//#endregion placeHolderProperty

		//#region placeHolder

		/**
		* A hint to the user of what can be entered in the control . The placeholder text must not contain carriage returns or line-feeds. This attribute applies when the value of the type attribute is text, search, tel, url or email; otherwise it is ignored.  
		* Note: Do not use the placeholder attribute instead of a <label> element. Their purposes are different: the <label> attribute describes the role of the form element; that is, it indicates what kind of information is expected, the placeholder attribute is a hint about the format the content should take. There are cases in which the placeholder attribute is never displayed to the user, so the form must be understandable without it [MDN].
		*/
		get placeHolder(): string {
			return this.placeHolderProperty.value;
		}

		set placeHolder(value: string) {
			this.placeHolderProperty.value = value;
		}

		//#endregion placeHolder

		//#region requiredProperty

		/**
		* This attribute specifies that the user must fill in a value before submitting a form. It cannot be used when the type attribute is hidden, image, or a button type (submit, reset, or button). The :optional and :required CSS pseudo-classes will be applied to the field as appropriate [MDN].
		*/
		get requiredProperty(): b.PropertyUpdate<boolean> {
			if(!this._requiredProperty)
				initializeProperty(this, 'required', 'required');
			return this._requiredProperty;
		}

		//#endregion requiredProperty

		//#region required

		/**
		* This attribute specifies that the user must fill in a value before submitting a form. It cannot be used when the type attribute is hidden, image, or a button type (submit, reset, or button). The :optional and :required CSS pseudo-classes will be applied to the field as appropriate [MDN].
		*/
		get required(): boolean {
			return this.requiredProperty.value;
		}

		set required(value: boolean) {
			this.requiredProperty.value = value;
		}

		//#endregion required

		//#region sizeProperty

		/**
		* The initial size of the control. This value is in pixels unless the value of the type attribute is text or password, in which case, it is an integer number of characters. Starting in HTML5, this attribute applies only when the type attribute is set to text, search, tel, url, email, or password; otherwise it is ignored. In addition, the size must be greater than zero. If you don't specify a size, a default value of 20 is used [MDN].
		*/
		get sizeProperty(): b.PropertyUpdate<number> {
			if(!this._sizeProperty)
				initializeProperty(this, 'size', 'size');
			return this._sizeProperty;
		}

		//#endregion sizeProperty

		//#region size

		/**
		* The initial size of the control. This value is in pixels unless the value of the type attribute is text or password, in which case, it is an integer number of characters. Starting in HTML5, this attribute applies only when the type attribute is set to text, search, tel, url, email, or password; otherwise it is ignored. In addition, the size must be greater than zero. If you don't specify a size, a default value of 20 is used [MDN].
		*/
		get size(): number {
			return this.sizeProperty.value;
		}

		set size(value: number) {
			this.sizeProperty.value = value;
		}

		//#endregion size

		//#region sourceProperty

		/**
		* If the value of the type attribute is image, this attribute specifies a URI for the location of an image to display on the graphical submit button; otherwise it is ignored [MDN].
		*/
		get sourceProperty(): b.PropertyUpdate<string> {
			if(!this._sourceProperty)
				initializeProperty(this, 'source', 'src');
			return this._sourceProperty;
		}

		//#endregion sourceProperty

		//#region source

		/**
		* If the value of the type attribute is image, this attribute specifies a URI for the location of an image to display on the graphical submit button; otherwise it is ignored [MDN].
		*/
		get source(): string {
			return this.sourceProperty.value;
		}

		set source(value: string) {
			this.sourceProperty.value = value;
		}

		//#endregion source

		//#region stepProperty

		/**
		* Works with the min and max attributes to limit the increments at which a numeric or date-time value can be set. It can be the string any or a positive floating point number. If this attribute is not set to any, the control accepts only values at multiples of the step value greater than the minimum [MDN].
		*/
		get stepProperty(): b.PropertyUpdate<string> {
			if(!this._stepProperty)
				initializeProperty(this, 'step', 'step');
			return this._stepProperty;
		}

		//#endregion stepProperty

		//#region step

		/**
		* Works with the min and max attributes to limit the increments at which a numeric or date-time value can be set. It can be the string any or a positive floating point number. If this attribute is not set to any, the control accepts only values at multiples of the step value greater than the minimum [MDN].
		*/
		get step(): string {
			return this.stepProperty.value;
		}

		set step(value: string) {
			this.stepProperty.value = value;
		}

		//#endregion step

		//#region valueProperty

		/**
		* The initial value of the control. This attribute is optional except when the value of the type attribute is radio or checkbox. Note that when reloading the page, Gecko and IE will ignore the value specified in the HTML source, if the value was changed before the reload [MDN].
		*/
		get valueProperty(): b.PropertyUpdate<string> {
			if(!this._valueProperty)
				initializeProperty(this, 'value', 'value');
			return this._valueProperty;
		}

		//#endregion valueProperty

		//#region value

		/**
		* The initial value of the control. This attribute is optional except when the value of the type attribute is radio or checkbox. Note that when reloading the page, Gecko and IE will ignore the value specified in the HTML source, if the value was changed before the reload [MDN].
		*/
		get value(): string {
			return this.valueProperty.value;
		}

		set value(value: string) {
			this.valueProperty.value = value;
		}

		//#endregion value

		//#region widthProperty

		/**
		* If the value of the type attribute is image, this attribute defines the width of the image displayed for the button [MDN].
		*/
		get widthProperty(): b.PropertyUpdate<number> {
			if(!this._widthProperty)
				initializeProperty(this, 'width', 'width');
			return this._widthProperty;
		}

		//#endregion widthProperty

		//#region width

		/**
		* If the value of the type attribute is image, this attribute defines the width of the image displayed for the button [MDN].
		*/
		get width(): number {
			return this.widthProperty.value;
		}

		set width(value: number) {
			this.widthProperty.value = value;
		}

		//#endregion width

		//#region changeEvent

		/**
		* The changeEvent event is executed when an element loses focus and its value changed since gaining focus [MDN].
		* Specifications: DOM L2, HTML5
		* DOM Event Name: change
		*/
		get changeEvent(): HtmlElementEvent<Elements.InputElement, Event> {
			if(!this._changeEvent)
				this._changeEvent = new HtmlElementEvent<Elements.InputElement, Event>('change', 'Event', this);

			return this._changeEvent;
		}

		//#endregion changeEvent

		//#region inputEvent

		/**
		* The inputEvent event is executed when the value of an element changes or the content of an element with the attribute contenteditable is modified [MDN].
		* Specification: HTML5
		* DOM Event Name: input
		*/
		get inputEvent(): HtmlElementEvent<Elements.InputElement, Event> {
			if(!this._inputEvent)
				this._inputEvent = new HtmlElementEvent<Elements.InputElement, Event>('input', 'Event', this);

			return this._inputEvent;
		}

		//#endregion inputEvent

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new InputElement'.
        */
        constructor(config: IInputElementConfig) {
			super('input', config)
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
            var config = this.getConfig<IInputElementConfig>();
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

			if(config.changeHandler)
				this.changeEvent.subscribe(config.changeHandler);

			if(config.inputHandler)
				this.inputEvent.subscribe(config.inputHandler);

        }

        //#endregion Base Class Overrides
	}

	//#endregion InputElement

	//#region InsertedElement

	/**
	* The HTML <ins> Element (or HTML Inserted Text) HTML represents a range of text that has been added to a document [MDN].
	*/
	export class InsertedElement extends HtmlElementContainer {

		//#region Fields

		private _citationProperty: b.PropertyUpdate<string>;

		//#endregion Fields

		//#region Properties

		//#region citationProperty

		/**
		* This attribute defines the URI of a resource that explains the change, like a link to some meeting minutes or a ticket in a troubleshooting sytem [MDN].
		*/
		get citationProperty(): b.PropertyUpdate<string> {
			if(!this._citationProperty)
				initializeProperty(this, 'citation', 'cite');
			return this._citationProperty;
		}

		//#endregion citationProperty

		//#region citation

		/**
		* This attribute defines the URI of a resource that explains the change, like a link to some meeting minutes or a ticket in a troubleshooting sytem [MDN].
		*/
		get citation(): string {
			return this.citationProperty.value;
		}

		set citation(value: string) {
			this.citationProperty.value = value;
		}

		//#endregion citation

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new InsertedElement'.
        */
        constructor(config: IInsertedElementConfig) {
			super('ins', config)
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
            var config = this.getConfig<IInsertedElementConfig>();
            setPropertyFromConfig(this, config, 'citation', true);

        }

        //#endregion Base Class Overrides
	}

	//#endregion InsertedElement

	//#region ItalicElement

	/**
	* The HTML <i> Element represents a range of text that is set off from the normal text for some reason, for example, technical terms, foreign language phrases, or fictional character thoughts. It is typically displayed in italic type [MDN].
	*/
	export class ItalicElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new ItalicElement'.
        */
        constructor(config: IItalicElementConfig) {
			super('i', config)
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
            var config = this.getConfig<IItalicElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion ItalicElement

	//#region KeyboardInputElement

	/**
	* The HTML <kbd> Element (or HTML Keyboard Input Element) represents user input and produces an inline element displayed in the browser's default monotype font [MDN].
	*/
	export class KeyboardInputElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new KeyboardInputElement'.
        */
        constructor(config: IKeyboardInputElementConfig) {
			super('kbd', config)
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
            var config = this.getConfig<IKeyboardInputElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion KeyboardInputElement

	//#region LabelElement

	/**
	* The HTML <label> Element represents a caption for an item in a user interface. It can be associated with a control either by using the for attribute, or by placing the control element inside the label element. Such a control is called the labeled control of the label element [MDN].
	*/
	export class LabelElement extends HtmlElementContainer {

		//#region Fields

		private _formPropertyID: string;
		private _formProperty: FormElement;

		//#endregion Fields

		//#region Properties

		//#region form

		/**
		* The form element that the label element is associated with (its form owner). The value of the attribute must be an ID of a <form> element in the same document. If this attribute is not specified, this <label> element must be a descendant of a <form> element. This attribute enables you to place label elements anywhere within a document, not just as descendants of their form elements [MDN].
		*/
		get form(): FormElement {
			return getElementPropertyValue<FormElement>(this, 'form');
		}

		set form(value: FormElement) {
			setElementPropertyValue(this, 'form', value);
		}

		//#endregion form

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new LabelElement'.
        */
        constructor(config: ILabelElementConfig) {
			super('label', config)
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
            var config = this.getConfig<ILabelElementConfig>();
			setElementPropertyFromConfig(this, config, 'form');

        }

        //#endregion Base Class Overrides
	}

	//#endregion LabelElement

	//#region LegendFieldElement

	/**
	* The HTML <legend> Element (or HTML Legend Field Element) represents a caption for the content of its parent <fieldset> [MDN].
	*/
	export class LegendFieldElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new LegendFieldElement'.
        */
        constructor(config: ILegendFieldElementConfig) {
			super('legend', config)
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
            var config = this.getConfig<ILegendFieldElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion LegendFieldElement

	//#region LineBreakElement

	/**
	* The HTML <br> Element (or HTML Line Break Element) produces a line break in text (carriage-return). It is useful for writing a poem or an address, where the division of lines is significant [MDN].
	*/
	export class LineBreakElement extends HtmlElement {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new LineBreakElement'.
        */
        constructor(config: ILineBreakElementConfig) {
			super('br', config)
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
            var config = this.getConfig<ILineBreakElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion LineBreakElement

	//#region LinkElement

	/**
	* The HTML <link> Element specifies relationships between the current document and other documents. Possible uses for this element include defining a relational framework for navigation and linking the document to a style sheet [MDN].
	*/
	export class LinkElement extends HtmlElement {

		//#region Fields

		private _characterSetProperty: b.PropertyUpdate<string>;
		private _hrefProperty: b.PropertyUpdate<string>;
		private _hrefLanguageProperty: b.PropertyUpdate<string>;
		private _mediaProperty: b.PropertyUpdate<string>;
		private _relationshipProperty: b.PropertyUpdate<string>;
		private _reverseRelationshipProperty: b.PropertyUpdate<string>;
		private _typeProperty: b.PropertyUpdate<string>;

		//#endregion Fields

		//#region Properties

		//#region characterSetProperty

		/**
		* This attribute defines the character encoding of the linked resource. The value is a space- and/or comma-delimited list of character sets as defined in RFC 2045. The default value is ISO-8859-1.  
		* Note: This attribute is obsolete in HTML5 and must not be used by authors. To achieve its effect, use the Content-Type: HTTP header on the linked resource [MDN].
		*/
		get characterSetProperty(): b.PropertyUpdate<string> {
			if(!this._characterSetProperty)
				initializeProperty(this, 'characterSet', 'charset');
			return this._characterSetProperty;
		}

		//#endregion characterSetProperty

		//#region characterSet

		/**
		* This attribute defines the character encoding of the linked resource. The value is a space- and/or comma-delimited list of character sets as defined in RFC 2045. The default value is ISO-8859-1.  
		* Note: This attribute is obsolete in HTML5 and must not be used by authors. To achieve its effect, use the Content-Type: HTTP header on the linked resource [MDN].
		*/
		get characterSet(): string {
			return this.characterSetProperty.value;
		}

		set characterSet(value: string) {
			this.characterSetProperty.value = value;
		}

		//#endregion characterSet

		//#region hrefProperty

		/**
		* This attribute specifies the URL of the linked resource. A URL might be absolute or relative [MDN].
		*/
		get hrefProperty(): b.PropertyUpdate<string> {
			if(!this._hrefProperty)
				initializeProperty(this, 'href', 'href');
			return this._hrefProperty;
		}

		//#endregion hrefProperty

		//#region href

		/**
		* This attribute specifies the URL of the linked resource. A URL might be absolute or relative [MDN].
		*/
		get href(): string {
			return this.hrefProperty.value;
		}

		set href(value: string) {
			this.hrefProperty.value = value;
		}

		//#endregion href

		//#region hrefLanguageProperty

		/**
		* This attribute indicates the language of the linked resource. It is purely advisory. Allowed values are determined by BCP47 for HTML5 and by RFC1766 for HTML 4. Use this attribute only if the href attribute is present [MDN].
		*/
		get hrefLanguageProperty(): b.PropertyUpdate<string> {
			if(!this._hrefLanguageProperty)
				initializeProperty(this, 'hrefLanguage', 'hreflang');
			return this._hrefLanguageProperty;
		}

		//#endregion hrefLanguageProperty

		//#region hrefLanguage

		/**
		* This attribute indicates the language of the linked resource. It is purely advisory. Allowed values are determined by BCP47 for HTML5 and by RFC1766 for HTML 4. Use this attribute only if the href attribute is present [MDN].
		*/
		get hrefLanguage(): string {
			return this.hrefLanguageProperty.value;
		}

		set hrefLanguage(value: string) {
			this.hrefLanguageProperty.value = value;
		}

		//#endregion hrefLanguage

		//#region mediaProperty

		/**
		* This attribute specifies the media which the linked resource applies to. Its value must be a media query. This attribute is mainly useful when linking to external stylesheets by allowing the user agent to pick the best adapted one for the device it runs on.  
		* Note:  In HTML 4, this can only be a simple white-space-separated list of media description literals, i.e., media types and groups, where defined and allowed as values for this attribute, such as print, screen, aural, braille. HTML5 extended this to any kind of media queries, which are a superset of the allowed values of HTML 4. Browsers not supporting the CSS3 Media Queries won't necessarily recognize the adequate link; do not forget to set fallback links, the restricted set of media queries defined in HTML 4 [MDN].
		*/
		get mediaProperty(): b.PropertyUpdate<string> {
			if(!this._mediaProperty)
				initializeProperty(this, 'media', 'media');
			return this._mediaProperty;
		}

		//#endregion mediaProperty

		//#region media

		/**
		* This attribute specifies the media which the linked resource applies to. Its value must be a media query. This attribute is mainly useful when linking to external stylesheets by allowing the user agent to pick the best adapted one for the device it runs on.  
		* Note:  In HTML 4, this can only be a simple white-space-separated list of media description literals, i.e., media types and groups, where defined and allowed as values for this attribute, such as print, screen, aural, braille. HTML5 extended this to any kind of media queries, which are a superset of the allowed values of HTML 4. Browsers not supporting the CSS3 Media Queries won't necessarily recognize the adequate link; do not forget to set fallback links, the restricted set of media queries defined in HTML 4 [MDN].
		*/
		get media(): string {
			return this.mediaProperty.value;
		}

		set media(value: string) {
			this.mediaProperty.value = value;
		}

		//#endregion media

		//#region relationshipProperty

		/**
		* This attribute names a relationship of the linked document to the current document. The attribute must be a space-separated list of the link types values. The most common use of this attribute is to specify a link to an external style sheet: the rel attribute is set to stylesheet, and the href attribute is set to the URL of an external style sheet to format the page. WebTV also supports the use of the value next for rel to preload the next page in a document series [MDN].
		*/
		get relationshipProperty(): b.PropertyUpdate<string> {
			if(!this._relationshipProperty)
				initializeProperty(this, 'relationship', 'rel');
			return this._relationshipProperty;
		}

		//#endregion relationshipProperty

		//#region relationship

		/**
		* This attribute names a relationship of the linked document to the current document. The attribute must be a space-separated list of the link types values. The most common use of this attribute is to specify a link to an external style sheet: the rel attribute is set to stylesheet, and the href attribute is set to the URL of an external style sheet to format the page. WebTV also supports the use of the value next for rel to preload the next page in a document series [MDN].
		*/
		get relationship(): string {
			return this.relationshipProperty.value;
		}

		set relationship(value: string) {
			this.relationshipProperty.value = value;
		}

		//#endregion relationship

		//#region reverseRelationshipProperty

		/**
		* The value of this attribute shows the relationship of the current document to the linked document, as defined by the href attribute. The attribute thus defines the reverse relationship compared to the value of the rel attribute. Link types values for the attribute are similar to the possible values for rel.  
		* Note: This attribute is obsolete in HTML5. Do not use it. To achieve its effect, use the rel attribute with the opposite link types values, e.g. made should be replaced by author. Also this attribute doesn't mean revision and must not be used with a version number, which is unfortunately the case on numerous sites [MDN].
		*/
		get reverseRelationshipProperty(): b.PropertyUpdate<string> {
			if(!this._reverseRelationshipProperty)
				initializeProperty(this, 'reverseRelationship', 'rev');
			return this._reverseRelationshipProperty;
		}

		//#endregion reverseRelationshipProperty

		//#region reverseRelationship

		/**
		* The value of this attribute shows the relationship of the current document to the linked document, as defined by the href attribute. The attribute thus defines the reverse relationship compared to the value of the rel attribute. Link types values for the attribute are similar to the possible values for rel.  
		* Note: This attribute is obsolete in HTML5. Do not use it. To achieve its effect, use the rel attribute with the opposite link types values, e.g. made should be replaced by author. Also this attribute doesn't mean revision and must not be used with a version number, which is unfortunately the case on numerous sites [MDN].
		*/
		get reverseRelationship(): string {
			return this.reverseRelationshipProperty.value;
		}

		set reverseRelationship(value: string) {
			this.reverseRelationshipProperty.value = value;
		}

		//#endregion reverseRelationship

		//#region typeProperty

		/**
		* This attribute is used to define the type of the content linked to. The value of the attribute should be a MIME type such as text/html, text/css, and so on. The common use of this attribute is to define the type of style sheet linked and the most common current value is text/css, which indicates a Cascading Style Sheet format [MDN].
		*/
		get typeProperty(): b.PropertyUpdate<string> {
			if(!this._typeProperty)
				initializeProperty(this, 'type', 'type');
			return this._typeProperty;
		}

		//#endregion typeProperty

		//#region type

		/**
		* This attribute is used to define the type of the content linked to. The value of the attribute should be a MIME type such as text/html, text/css, and so on. The common use of this attribute is to define the type of style sheet linked and the most common current value is text/css, which indicates a Cascading Style Sheet format [MDN].
		*/
		get type(): string {
			return this.typeProperty.value;
		}

		set type(value: string) {
			this.typeProperty.value = value;
		}

		//#endregion type

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new LinkElement'.
        */
        constructor(config: ILinkElementConfig) {
			super('link', config)
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
            var config = this.getConfig<ILinkElementConfig>();
            setPropertyFromConfig(this, config, 'characterSet', true);
            setPropertyFromConfig(this, config, 'href', true);
            setPropertyFromConfig(this, config, 'hrefLanguage', true);
            setPropertyFromConfig(this, config, 'media', true);
            setPropertyFromConfig(this, config, 'relationship', true);
            setPropertyFromConfig(this, config, 'reverseRelationship', true);
            setPropertyFromConfig(this, config, 'type', true);

        }

        //#endregion Base Class Overrides
	}

	//#endregion LinkElement

	//#region ListItemElement

	/**
	* The HTML List item element (<li>) is used to represent a list item. It should be contained in an ordered list (<ol>), an unordered list (<ul>) or a menu (<menu>), where it represents a single entity in that list. In menus and unordered lists, list items are ordinarily displayed using bullet points. In ordered lists, they are usually displayed with some ascending counter on the left such as a number or letter [MDN].
	*/
	export class ListItemElement extends HtmlElementContainer {

		//#region Fields

		private _valueProperty: b.PropertyUpdate<number>;
		private _typeProperty: b.PropertyUpdate<string>;

		//#endregion Fields

		//#region Properties

		//#region valueProperty

		/**
		* This integer attributes indicates the current ordinal value of the item in the list as defined by the <ol> element. The only allowed value for this attribute is a number, even if the list is displayed with Roman numerals or letters. List items that follow this one continue numbering from the value set. The value attribute has no meaning for unordered lists (<ul>) or for menus (<menu>).  
		* Note: This attribute was deprecated in HTML4, but reintroduced in HTML5.  
		* Note: Prior to Gecko 9.0, negative values were incorrectly converted to 0. Starting in Gecko 9.0 all integer values are correctly parsed [MDN].
		*/
		get valueProperty(): b.PropertyUpdate<number> {
			if(!this._valueProperty)
				initializeProperty(this, 'value', 'value');
			return this._valueProperty;
		}

		//#endregion valueProperty

		//#region value

		/**
		* This integer attributes indicates the current ordinal value of the item in the list as defined by the <ol> element. The only allowed value for this attribute is a number, even if the list is displayed with Roman numerals or letters. List items that follow this one continue numbering from the value set. The value attribute has no meaning for unordered lists (<ul>) or for menus (<menu>).  
		* Note: This attribute was deprecated in HTML4, but reintroduced in HTML5.  
		* Note: Prior to Gecko 9.0, negative values were incorrectly converted to 0. Starting in Gecko 9.0 all integer values are correctly parsed [MDN].
		*/
		get value(): number {
			return this.valueProperty.value;
		}

		set value(value: number) {
			this.valueProperty.value = value;
		}

		//#endregion value

		//#region typeProperty

		/**
		* Html.ListItemType enumerates the values of this property.
		* This character attributes indicates the numbering type:  a: lowercase letters A: uppercase letters i: lowercase Roman numerals I: uppercase Roman numerals 1: numbers This type overrides the one used by its parent <ol> element, if any.  
		* Note: This attribute has been deprecated: use the CSS list-style-type property instead [MDN].
		*/
		get typeProperty(): b.PropertyUpdate<string> {
			if(!this._typeProperty)
				initializeProperty(this, 'type', 'type');
			return this._typeProperty;
		}

		//#endregion typeProperty

		//#region type

		/**
		* Html.ListItemType enumerates the values of this property.
		* This character attributes indicates the numbering type:  a: lowercase letters A: uppercase letters i: lowercase Roman numerals I: uppercase Roman numerals 1: numbers This type overrides the one used by its parent <ol> element, if any.  
		* Note: This attribute has been deprecated: use the CSS list-style-type property instead [MDN].
		*/
		get type(): string {
			return this.typeProperty.value;
		}

		set type(value: string) {
			this.typeProperty.value = value;
		}

		//#endregion type

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new ListItemElement'.
        */
        constructor(config: IListItemElementConfig) {
			super('li', config)
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
            var config = this.getConfig<IListItemElementConfig>();
            setPropertyFromConfig(this, config, 'value', true);
            setPropertyFromConfig(this, config, 'type', true);

        }

        //#endregion Base Class Overrides
	}

	//#endregion ListItemElement

	//#region MainElement

	/**
	* The HTML <main> element represents the main content of  the <body> of a document or application. The main content area consists of content that is directly related to, or expands upon the central topic of a document or the central functionality of an application. This content should be unique to the document, excluding any content that is repeated across a set of documents such as sidebars, navigation links, copyright information, site logos, and search forms (unless, of course, the document's main function is as a search form) [MDN].
	*/
	export class MainElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new MainElement'.
        */
        constructor(config: IMainElementConfig) {
			super('main', config)
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
            var config = this.getConfig<IMainElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion MainElement

	//#region MapElement

	/**
	* The HTML <map> element is used with <area> elements to define an image map [MDN].
	*/
	export class MapElement extends HtmlElementContainer {

		//#region Fields

		private _nameProperty: b.PropertyUpdate<string>;

		//#endregion Fields

		//#region Properties

		//#region nameProperty

		/**
		* The name attribute gives the map a name so that it can be referenced. The attribute must be present and must have a non-empty value with no space characters. The value of the name attribute must not be a compatibility-caseless match for the value of the name attribute of another map element in the same document. If the id attribute is also specified, both attributes must have the same value [MDN].
		*/
		get nameProperty(): b.PropertyUpdate<string> {
			if(!this._nameProperty)
				initializeProperty(this, 'name', 'name');
			return this._nameProperty;
		}

		//#endregion nameProperty

		//#region name

		/**
		* The name attribute gives the map a name so that it can be referenced. The attribute must be present and must have a non-empty value with no space characters. The value of the name attribute must not be a compatibility-caseless match for the value of the name attribute of another map element in the same document. If the id attribute is also specified, both attributes must have the same value [MDN].
		*/
		get name(): string {
			return this.nameProperty.value;
		}

		set name(value: string) {
			this.nameProperty.value = value;
		}

		//#endregion name

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new MapElement'.
        */
        constructor(config: IMapElementConfig) {
			super('map', config)
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
            var config = this.getConfig<IMapElementConfig>();
            setPropertyFromConfig(this, config, 'name', true);

        }

        //#endregion Base Class Overrides
	}

	//#endregion MapElement

	//#region MarkElement

	/**
	* The HTML <mark> Element represents highlighted text, i.e., a run of text marked for reference purpose, due to its relevance in a particular context. For example it can be used in a page showing search results to highlight every instance of the searched for word [MDN].
	*/
	export class MarkElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new MarkElement'.
        */
        constructor(config: IMarkElementConfig) {
			super('mark', config)
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
            var config = this.getConfig<IMarkElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion MarkElement

	//#region MetaElement

	/**
	* The HTML <meta> Element represents any metadata information which cannot be represented using one of the other meta-related element (<base>, <link>, <script>, <style> or <title>). According to the attributes set, the kind of metadata can be one of the following: [MDN].
	*/
	export class MetaElement extends HtmlElement {

		//#region Fields

		private _contentProperty: b.PropertyUpdate<string>;
		private _httpEquivProperty: b.PropertyUpdate<string>;
		private _nameProperty: b.PropertyUpdate<string>;
		private _schemeProperty: b.PropertyUpdate<string>;

		//#endregion Fields

		//#region Properties

		//#region contentProperty

		/**
		* This attribute gives the value associated with the http-equiv or name attribute, depending of the context [MDN].
		*/
		get contentProperty(): b.PropertyUpdate<string> {
			if(!this._contentProperty)
				initializeProperty(this, 'content', 'content');
			return this._contentProperty;
		}

		//#endregion contentProperty

		//#region content

		/**
		* This attribute gives the value associated with the http-equiv or name attribute, depending of the context [MDN].
		*/
		get content(): string {
			return this.contentProperty.value;
		}

		set content(value: string) {
			this.contentProperty.value = value;
		}

		//#endregion content

		//#region httpEquivProperty

		/**
		* Html.MetaHttpEquiv enumerates the values of this property.
		* This enumerated attribute defines the pragma that can alter servers and user-agents behavior. The value of the pragma is defined using the content and can be one of the following:  content-language  This pragma defines the default language of the page.  
		* Note: do not use this pragma as it is obsolete. Use the global lang attribute on the <body> element instead.  content-type  This attribute defines the MIME type of the document, eventually followed by its character set. It follows the same syntax as the HTTP content-type entity-header field, but as it is inside an HTML Element, most value are not possible. Therefore the valid syntax for its content is the literal string 'text/html' eventually followed by a character set with the following syntax:'; charset=IANAcharset' where IANAcharset is the preferred MIME name for a character set as defined by the IANA  
		* Note:   Do not use this pragma as it is obsolete. Use the charset attribute on the <meta> element instead. As the <meta> may not be used to change the type of a document in an XHTML document, or in an HTML5 document following the XHTML syntax, never set set MIME type to an XHTML MIME type that way. It would be incorrect. Only HTML document can use the content-type, so most of it is redundant: that's why it has been obsoleted and replaced by the charset attribute.    default-style  This pragma specifies the preferred stylesheet to be used on the page. The content attribute must contains the id of a <link> element whose href attribute links to a CSS stylesheet, or the id of a <style> element which contains a CSS stylesheet.  refresh  This pragma specifies:  the number of seconds until the page should be reloaded, if the content attribute contains only a positive integer number;  the number of seconds until the page should be redirected to another, if the content attribute contains a positive integer number followed by the string ';url=' and a valid URL.   set-cookie  This pragma defines a cookie for the page. Its content must follows the syntax defines in the IETF HTTP Cookie Specification.  
		* Note: Do not use this pragma as it is obsolete. Use the HTTP header set-cookie instead [MDN].
		*/
		get httpEquivProperty(): b.PropertyUpdate<string> {
			if(!this._httpEquivProperty)
				initializeProperty(this, 'httpEquiv', 'httpEquiv');
			return this._httpEquivProperty;
		}

		//#endregion httpEquivProperty

		//#region httpEquiv

		/**
		* Html.MetaHttpEquiv enumerates the values of this property.
		* This enumerated attribute defines the pragma that can alter servers and user-agents behavior. The value of the pragma is defined using the content and can be one of the following:  content-language  This pragma defines the default language of the page.  
		* Note: do not use this pragma as it is obsolete. Use the global lang attribute on the <body> element instead.  content-type  This attribute defines the MIME type of the document, eventually followed by its character set. It follows the same syntax as the HTTP content-type entity-header field, but as it is inside an HTML Element, most value are not possible. Therefore the valid syntax for its content is the literal string 'text/html' eventually followed by a character set with the following syntax:'; charset=IANAcharset' where IANAcharset is the preferred MIME name for a character set as defined by the IANA  
		* Note:   Do not use this pragma as it is obsolete. Use the charset attribute on the <meta> element instead. As the <meta> may not be used to change the type of a document in an XHTML document, or in an HTML5 document following the XHTML syntax, never set set MIME type to an XHTML MIME type that way. It would be incorrect. Only HTML document can use the content-type, so most of it is redundant: that's why it has been obsoleted and replaced by the charset attribute.    default-style  This pragma specifies the preferred stylesheet to be used on the page. The content attribute must contains the id of a <link> element whose href attribute links to a CSS stylesheet, or the id of a <style> element which contains a CSS stylesheet.  refresh  This pragma specifies:  the number of seconds until the page should be reloaded, if the content attribute contains only a positive integer number;  the number of seconds until the page should be redirected to another, if the content attribute contains a positive integer number followed by the string ';url=' and a valid URL.   set-cookie  This pragma defines a cookie for the page. Its content must follows the syntax defines in the IETF HTTP Cookie Specification.  
		* Note: Do not use this pragma as it is obsolete. Use the HTTP header set-cookie instead [MDN].
		*/
		get httpEquiv(): string {
			return this.httpEquivProperty.value;
		}

		set httpEquiv(value: string) {
			this.httpEquivProperty.value = value;
		}

		//#endregion httpEquiv

		//#region nameProperty

		/**
		* Html.MetaName enumerates the values of this property.
		* This attribute defines the name of a document-level metadata. It should not be set if one of the attribute itemprop, http-equiv or charset is also set. This document-level metadata name is associated with a value, contained by the content attribute. The possible values for the name element are, with their associated value stored via the content attribute:  application-name, defining the name of the web application running in the webpage;  
		* Note:   Browsers may use this to identify the application. It is different from the <title> element, which usually consist of the application name but may also contain specific information like the document name or a status; Simple webpages shouldn't define the application-name meta.   author, defining, in a free format, the name of the author of the document; description, containing a short and accurate summary of the content of the page. Several browsers, among them Firefox and Opera, use this meta as the default description of the page when bookmarked; generator, containing, in a free format, the identifier to the software that generated the page; keywords, containing, as strings separated by commas, relevant words associated with the content of the page. The attribute may also have a value taken from the extended list defined on WHATWG Wiki MetaExtensions page. Also none has been formally accepted yet, a few commonly used names are among the proposals:  creator, defining, in a free format, the name of the creator of the document. Note that it can be the name of the institution. If there are more than one, several <meta> element should be used; googlebot, which is a synonym of robots, but is only followed by Googlebot, the indexing crawler for Google; publisher, defining, in a free format, the name of the publisher of the document. Note that it can be the name of the institution; robots, defining the behavior that cooperative crawlers should have with the page. It is a comma-separated list of values taken in the following list:   Values for the content of <meta name="robots">   Value  Description  Used by      index  Allows the robot to index the page  All    noindex  Prevents the robot to index the page  All    follow  Allows the robot to follow the links on the page  All    nofollow  Prevents the robot to follow the links on the page  All    noodp  Prevents the usage of the Open Directory Project description, if any, as the description of the page in the search engine results page   Google, Yahoo, Bing     noarchive  Prevents the search engine to cache the content of the page  Google, Yahoo    nosnippet  Prevents the display of any description of the page in the search engine results page  Google    noimageindex  Prevents this page to appear as the referring page of an indexed image  Google    noydir  Prevents the usage of the Yahoo Directory description, if any, as the description of the page in the search engine results page  Yahoo    nocache  Synonym of noarchive  Bing    Notes:   Only cooperative robots will follow the rules defined by the robots name. Do not expect to keep e-mail harvesters at bay with this The robot still needs to access the page in order to read the meta value. If you want to keep them at bay, for example to prevent bandwidth consumption, use a robots.txt file instead (or in complement). If you want to remove the page of an index, changing the meta to noindex will work, but only when the robot visit the page again. Be sure not to prevent such visit, via the robots.txt file for example. Some search engines have developers tools allowing a quick removal of some page. Some possible values are mutually exclusive, like using index and noindex, or follow and nofollow, at the same time. In these case the behavior of the robot is undefined, and may vary from one to the other. So avoid these cases. Some search engine crawler robots, like those of Google, Yahoo Search or Bing, supports the same values on an HTTP directive, X-Robot-Tags: this allows to use these pragma on non-HTML documents, like images.   slurp, which is a synonym of robots, but is only followed by Slurp, the indexing crawler for Yahoo Search; Finally a few names are in common use, though not in progress of being standardized:  viewport, which gives hints about the size of the initial size of the viewport. This pragma is used by several mobile devices only.   Values for the content of <meta name="viewport">   Value  Possible values  Description      width  a positive integer number or the literal device-width  defines the width, in pixels, of the viewport    height  a positive integer number of the literal device-height  defines the height, in pixels, of the viewport    initial-scale  a positive number between 0.0 and 10.0  defines the ratio between the device width (device-width in portrait mode or device-height in landscape mode) and the viewport size.e    maximum-scale  a positive number between 0.0 and 10.0  defines the maximum value of the zoom; it must be greater or equal to the minimum-scale or the behavior is underterminate.    minimum-scale  a positive number between 0.0 and 10.0  defines the minimum value of the zoom; it must be smaller or equal to the maximum-scale or the behavior is undeterminate.    user-scalable  a boolean value (yes or no)  If set to no, the user is not able to zoom or in the webpage. Default value is yes.    Notes:   Though not standardized, this attribute is used by different mobile browsers like Safari Mobile, Firefox for Mobile or Opera Mobile. The default values may change from one device, and browser, to another To learn about this pragma in Firefox for Mobile, see this article [MDN].
		*/
		get nameProperty(): b.PropertyUpdate<string> {
			if(!this._nameProperty)
				initializeProperty(this, 'name', 'name');
			return this._nameProperty;
		}

		//#endregion nameProperty

		//#region name

		/**
		* Html.MetaName enumerates the values of this property.
		* This attribute defines the name of a document-level metadata. It should not be set if one of the attribute itemprop, http-equiv or charset is also set. This document-level metadata name is associated with a value, contained by the content attribute. The possible values for the name element are, with their associated value stored via the content attribute:  application-name, defining the name of the web application running in the webpage;  
		* Note:   Browsers may use this to identify the application. It is different from the <title> element, which usually consist of the application name but may also contain specific information like the document name or a status; Simple webpages shouldn't define the application-name meta.   author, defining, in a free format, the name of the author of the document; description, containing a short and accurate summary of the content of the page. Several browsers, among them Firefox and Opera, use this meta as the default description of the page when bookmarked; generator, containing, in a free format, the identifier to the software that generated the page; keywords, containing, as strings separated by commas, relevant words associated with the content of the page. The attribute may also have a value taken from the extended list defined on WHATWG Wiki MetaExtensions page. Also none has been formally accepted yet, a few commonly used names are among the proposals:  creator, defining, in a free format, the name of the creator of the document. Note that it can be the name of the institution. If there are more than one, several <meta> element should be used; googlebot, which is a synonym of robots, but is only followed by Googlebot, the indexing crawler for Google; publisher, defining, in a free format, the name of the publisher of the document. Note that it can be the name of the institution; robots, defining the behavior that cooperative crawlers should have with the page. It is a comma-separated list of values taken in the following list:   Values for the content of <meta name="robots">   Value  Description  Used by      index  Allows the robot to index the page  All    noindex  Prevents the robot to index the page  All    follow  Allows the robot to follow the links on the page  All    nofollow  Prevents the robot to follow the links on the page  All    noodp  Prevents the usage of the Open Directory Project description, if any, as the description of the page in the search engine results page   Google, Yahoo, Bing     noarchive  Prevents the search engine to cache the content of the page  Google, Yahoo    nosnippet  Prevents the display of any description of the page in the search engine results page  Google    noimageindex  Prevents this page to appear as the referring page of an indexed image  Google    noydir  Prevents the usage of the Yahoo Directory description, if any, as the description of the page in the search engine results page  Yahoo    nocache  Synonym of noarchive  Bing    Notes:   Only cooperative robots will follow the rules defined by the robots name. Do not expect to keep e-mail harvesters at bay with this The robot still needs to access the page in order to read the meta value. If you want to keep them at bay, for example to prevent bandwidth consumption, use a robots.txt file instead (or in complement). If you want to remove the page of an index, changing the meta to noindex will work, but only when the robot visit the page again. Be sure not to prevent such visit, via the robots.txt file for example. Some search engines have developers tools allowing a quick removal of some page. Some possible values are mutually exclusive, like using index and noindex, or follow and nofollow, at the same time. In these case the behavior of the robot is undefined, and may vary from one to the other. So avoid these cases. Some search engine crawler robots, like those of Google, Yahoo Search or Bing, supports the same values on an HTTP directive, X-Robot-Tags: this allows to use these pragma on non-HTML documents, like images.   slurp, which is a synonym of robots, but is only followed by Slurp, the indexing crawler for Yahoo Search; Finally a few names are in common use, though not in progress of being standardized:  viewport, which gives hints about the size of the initial size of the viewport. This pragma is used by several mobile devices only.   Values for the content of <meta name="viewport">   Value  Possible values  Description      width  a positive integer number or the literal device-width  defines the width, in pixels, of the viewport    height  a positive integer number of the literal device-height  defines the height, in pixels, of the viewport    initial-scale  a positive number between 0.0 and 10.0  defines the ratio between the device width (device-width in portrait mode or device-height in landscape mode) and the viewport size.e    maximum-scale  a positive number between 0.0 and 10.0  defines the maximum value of the zoom; it must be greater or equal to the minimum-scale or the behavior is underterminate.    minimum-scale  a positive number between 0.0 and 10.0  defines the minimum value of the zoom; it must be smaller or equal to the maximum-scale or the behavior is undeterminate.    user-scalable  a boolean value (yes or no)  If set to no, the user is not able to zoom or in the webpage. Default value is yes.    Notes:   Though not standardized, this attribute is used by different mobile browsers like Safari Mobile, Firefox for Mobile or Opera Mobile. The default values may change from one device, and browser, to another To learn about this pragma in Firefox for Mobile, see this article [MDN].
		*/
		get name(): string {
			return this.nameProperty.value;
		}

		set name(value: string) {
			this.nameProperty.value = value;
		}

		//#endregion name

		//#region schemeProperty

		/**
		* This attribute defines the scheme in which the metadata is described. A scheme is a context leading to the correct interpretations of the content value, like a format.  Notes: Do not use this attribute as it is obsolete. There is no replacement for it as there was no real usage for it. Omit it altogether [MDN].
		*/
		get schemeProperty(): b.PropertyUpdate<string> {
			if(!this._schemeProperty)
				initializeProperty(this, 'scheme', 'scheme');
			return this._schemeProperty;
		}

		//#endregion schemeProperty

		//#region scheme

		/**
		* This attribute defines the scheme in which the metadata is described. A scheme is a context leading to the correct interpretations of the content value, like a format.  Notes: Do not use this attribute as it is obsolete. There is no replacement for it as there was no real usage for it. Omit it altogether [MDN].
		*/
		get scheme(): string {
			return this.schemeProperty.value;
		}

		set scheme(value: string) {
			this.schemeProperty.value = value;
		}

		//#endregion scheme

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new MetaElement'.
        */
        constructor(config: IMetaElementConfig) {
			super('meta', config)
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
            var config = this.getConfig<IMetaElementConfig>();
            setPropertyFromConfig(this, config, 'content', true);
            setPropertyFromConfig(this, config, 'httpEquiv', true);
            setPropertyFromConfig(this, config, 'name', true);
            setPropertyFromConfig(this, config, 'scheme', true);

        }

        //#endregion Base Class Overrides
	}

	//#endregion MetaElement

	//#region NavigationElement

	/**
	* The HTML Navigation Element (<nav>) represents a section of a page that links to other pages or to parts within the page [MDN].
	*/
	export class NavigationElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new NavigationElement'.
        */
        constructor(config: INavigationElementConfig) {
			super('nav', config)
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
            var config = this.getConfig<INavigationElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion NavigationElement

	//#region NoScriptElement

	/**
	* The HTML <noscript> Element defines a section of html to be inserted if a script type on the page is unsupported or if scripting is currently turned off in the browser [MDN].
	*/
	export class NoScriptElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new NoScriptElement'.
        */
        constructor(config: INoScriptElementConfig) {
			super('noscript', config)
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
            var config = this.getConfig<INoScriptElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion NoScriptElement

	//#region OptionElement

	/**
	* In a Web form, the HTML <option> element is used to create a control representing an item within a <select>, <optgroup> or <datalist> element [MDN].
	*/
	export class OptionElement extends HtmlElementContainer {

		//#region Fields

		private _disabledProperty: b.PropertyUpdate<boolean>;
		private _labelProperty: b.PropertyUpdate<string>;
		private _selectedProperty: b.PropertyUpdate<boolean>;
		private _valueProperty: b.PropertyUpdate<string>;

		//#endregion Fields

		//#region Properties

		//#region disabledProperty

		/**
		* If this Boolean attribute is set, this option is not checkable [MDN].
		*/
		get disabledProperty(): b.PropertyUpdate<boolean> {
			if(!this._disabledProperty)
				initializeProperty(this, 'disabled', 'disabled');
			return this._disabledProperty;
		}

		//#endregion disabledProperty

		//#region disabled

		/**
		* If this Boolean attribute is set, this option is not checkable [MDN].
		*/
		get disabled(): boolean {
			return this.disabledProperty.value;
		}

		set disabled(value: boolean) {
			this.disabledProperty.value = value;
		}

		//#endregion disabled

		//#region labelProperty

		/**
		* This attribute contains a text label indicating the meaning of the option. If it is not defined, the value defaults to the element's text content.  
		* Note: the label attribute is designed to contain a short label typically used in a hierarchical menu. The value attribute describes a longer label designed to be used near a radio button, for example [MDN].
		*/
		get labelProperty(): b.PropertyUpdate<string> {
			if(!this._labelProperty)
				initializeProperty(this, 'label', 'label');
			return this._labelProperty;
		}

		//#endregion labelProperty

		//#region label

		/**
		* This attribute contains a text label indicating the meaning of the option. If it is not defined, the value defaults to the element's text content.  
		* Note: the label attribute is designed to contain a short label typically used in a hierarchical menu. The value attribute describes a longer label designed to be used near a radio button, for example [MDN].
		*/
		get label(): string {
			return this.labelProperty.value;
		}

		set label(value: string) {
			this.labelProperty.value = value;
		}

		//#endregion label

		//#region selectedProperty

		/**
		* This Boolean attribute indicates that the option is initially selected. If the <option> element is the descendant of a <select> element whose multiple attribute is not set, only one <option> in the <select> may have the selected attribute [MDN].
		*/
		get selectedProperty(): b.PropertyUpdate<boolean> {
			if(!this._selectedProperty)
				initializeProperty(this, 'selected', 'selected');
			return this._selectedProperty;
		}

		//#endregion selectedProperty

		//#region selected

		/**
		* This Boolean attribute indicates that the option is initially selected. If the <option> element is the descendant of a <select> element whose multiple attribute is not set, only one <option> in the <select> may have the selected attribute [MDN].
		*/
		get selected(): boolean {
			return this.selectedProperty.value;
		}

		set selected(value: boolean) {
			this.selectedProperty.value = value;
		}

		//#endregion selected

		//#region valueProperty

		/**
		* This textual contains a longer text label explaining the option, much like the label attribute. The label attribute is designed to contain a short label typically used in a hierarchical menu, whereas the value attribute describes a longer label designed to be used near a radio button, for example [MDN].
		*/
		get valueProperty(): b.PropertyUpdate<string> {
			if(!this._valueProperty)
				initializeProperty(this, 'value', 'value');
			return this._valueProperty;
		}

		//#endregion valueProperty

		//#region value

		/**
		* This textual contains a longer text label explaining the option, much like the label attribute. The label attribute is designed to contain a short label typically used in a hierarchical menu, whereas the value attribute describes a longer label designed to be used near a radio button, for example [MDN].
		*/
		get value(): string {
			return this.valueProperty.value;
		}

		set value(value: string) {
			this.valueProperty.value = value;
		}

		//#endregion value

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new OptionElement'.
        */
        constructor(config: IOptionElementConfig) {
			super('option', config)
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
            var config = this.getConfig<IOptionElementConfig>();
            setPropertyFromConfig(this, config, 'disabled', true);
            setPropertyFromConfig(this, config, 'label', true);
            setPropertyFromConfig(this, config, 'selected', true);
            setPropertyFromConfig(this, config, 'value', true);

        }

        //#endregion Base Class Overrides
	}

	//#endregion OptionElement

	//#region OptionsGroupElement

	/**
	* In a Web form, the HTML <optgroup> element  creates a grouping of options within a <select> element [MDN].
	*/
	export class OptionsGroupElement extends HtmlElementContainer {

		//#region Fields

		private _disabledProperty: b.PropertyUpdate<boolean>;
		private _labelProperty: b.PropertyUpdate<string>;

		//#endregion Fields

		//#region Properties

		//#region disabledProperty

		/**
		* If this Boolean attribute is set, none of the items in this option group is selectable. Often browsers grey out such control and it won't receive any browsing events, like mouse clicks or focus-related ones [MDN].
		*/
		get disabledProperty(): b.PropertyUpdate<boolean> {
			if(!this._disabledProperty)
				initializeProperty(this, 'disabled', 'disabled');
			return this._disabledProperty;
		}

		//#endregion disabledProperty

		//#region disabled

		/**
		* If this Boolean attribute is set, none of the items in this option group is selectable. Often browsers grey out such control and it won't receive any browsing events, like mouse clicks or focus-related ones [MDN].
		*/
		get disabled(): boolean {
			return this.disabledProperty.value;
		}

		set disabled(value: boolean) {
			this.disabledProperty.value = value;
		}

		//#endregion disabled

		//#region labelProperty

		/**
		* The name of the group of options, which the browser can use when labeling the options in the user interface. This attribute is mandatory if this element is used [MDN].
		*/
		get labelProperty(): b.PropertyUpdate<string> {
			if(!this._labelProperty)
				initializeProperty(this, 'label', 'label');
			return this._labelProperty;
		}

		//#endregion labelProperty

		//#region label

		/**
		* The name of the group of options, which the browser can use when labeling the options in the user interface. This attribute is mandatory if this element is used [MDN].
		*/
		get label(): string {
			return this.labelProperty.value;
		}

		set label(value: string) {
			this.labelProperty.value = value;
		}

		//#endregion label

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new OptionsGroupElement'.
        */
        constructor(config: IOptionsGroupElementConfig) {
			super('optgroup', config)
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
            var config = this.getConfig<IOptionsGroupElementConfig>();
            setPropertyFromConfig(this, config, 'disabled', true);
            setPropertyFromConfig(this, config, 'label', true);

        }

        //#endregion Base Class Overrides
	}

	//#endregion OptionsGroupElement

	//#region OrderedListElement

	/**
	* The HTML <ol> Element (or HTML Ordered List Element) represents an ordered list of items. Typically, ordered-list items are displayed with a preceding numbering, which can be of any form, like numerals, letters or Romans numerals or even simple bullets. This numbered style is not defined in the HTML description of the page, but in its associated CSS, using the list-style-type property [MDN].
	*/
	export class OrderedListElement extends HtmlElementContainer {

		//#region Fields

		private _compactProperty: b.PropertyUpdate<boolean>;
		private _startProperty: b.PropertyUpdate<number>;
		private _typeProperty: b.PropertyUpdate<string>;

		//#endregion Fields

		//#region Properties

		//#region compactProperty

		/**
		* This Boolean attribute hints that the list should be rendered in a compact style. The interpretation of this attribute depends on the user agent and it doesn't work in all browsers. Note: Do not use this attribute, as it has been deprecated: the <ol> element should be styled using CSS. To give a similar effect than the compact attribute, the CSS property line-height can be used with a value of 80% [MDN].
		*/
		get compactProperty(): b.PropertyUpdate<boolean> {
			if(!this._compactProperty)
				initializeProperty(this, 'compact', 'compact');
			return this._compactProperty;
		}

		//#endregion compactProperty

		//#region compact

		/**
		* This Boolean attribute hints that the list should be rendered in a compact style. The interpretation of this attribute depends on the user agent and it doesn't work in all browsers. Note: Do not use this attribute, as it has been deprecated: the <ol> element should be styled using CSS. To give a similar effect than the compact attribute, the CSS property line-height can be used with a value of 80% [MDN].
		*/
		get compact(): boolean {
			return this.compactProperty.value;
		}

		set compact(value: boolean) {
			this.compactProperty.value = value;
		}

		//#endregion compact

		//#region startProperty

		/**
		* This integer attribute specifies the start value for numbering the individual list items. Although the ordering type of list elements might be Roman numerals, such as XXXI, or letters, the value of start is always represented as a number. To start numbering elements from the letter "C", use <ol start="3">.  
		* Note: This attribute was deprecated in HTML4, but reintroduced in HTML5 [MDN].
		*/
		get startProperty(): b.PropertyUpdate<number> {
			if(!this._startProperty)
				initializeProperty(this, 'start', 'start');
			return this._startProperty;
		}

		//#endregion startProperty

		//#region start

		/**
		* This integer attribute specifies the start value for numbering the individual list items. Although the ordering type of list elements might be Roman numerals, such as XXXI, or letters, the value of start is always represented as a number. To start numbering elements from the letter "C", use <ol start="3">.  
		* Note: This attribute was deprecated in HTML4, but reintroduced in HTML5 [MDN].
		*/
		get start(): number {
			return this.startProperty.value;
		}

		set start(value: number) {
			this.startProperty.value = value;
		}

		//#endregion start

		//#region typeProperty

		/**
		* Html.OrderedListType enumerates the values of this property.
		* Indicates the numbering type:  'a' indicates lowercase letters, 'A' indicates uppercase letters, 'i' indicates lowercase Roman numerals, 'I' indicates uppercase Roman numerals, and '1' indicates numbers (default). The type set is used for the entire list unless a different type attribute is used within an enclosed <li> element.  Note: This attribute was deprecated in HTML4, but reintroduced in HTML5. Unless the value of the list number matters (e.g. in legal or technical documents where items are to be referenced by their number/letter), the CSS list-style-type property should be used instead [MDN].
		*/
		get typeProperty(): b.PropertyUpdate<string> {
			if(!this._typeProperty)
				initializeProperty(this, 'type', 'type');
			return this._typeProperty;
		}

		//#endregion typeProperty

		//#region type

		/**
		* Html.OrderedListType enumerates the values of this property.
		* Indicates the numbering type:  'a' indicates lowercase letters, 'A' indicates uppercase letters, 'i' indicates lowercase Roman numerals, 'I' indicates uppercase Roman numerals, and '1' indicates numbers (default). The type set is used for the entire list unless a different type attribute is used within an enclosed <li> element.  Note: This attribute was deprecated in HTML4, but reintroduced in HTML5. Unless the value of the list number matters (e.g. in legal or technical documents where items are to be referenced by their number/letter), the CSS list-style-type property should be used instead [MDN].
		*/
		get type(): string {
			return this.typeProperty.value;
		}

		set type(value: string) {
			this.typeProperty.value = value;
		}

		//#endregion type

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new OrderedListElement'.
        */
        constructor(config: IOrderedListElementConfig) {
			super('ol', config)
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
            var config = this.getConfig<IOrderedListElementConfig>();
            setPropertyFromConfig(this, config, 'compact', true);
            setPropertyFromConfig(this, config, 'start', true);
            setPropertyFromConfig(this, config, 'type', true);

        }

        //#endregion Base Class Overrides
	}

	//#endregion OrderedListElement

	//#region ParagraphElement

	/**
	* The HTML <p> element (or HTML Paragraph Element) represents a paragraph of text. Paragraphs are block-level elements [MDN].
	*/
	export class ParagraphElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new ParagraphElement'.
        */
        constructor(config: IParagraphElementConfig) {
			super('p', config)
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
            var config = this.getConfig<IParagraphElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion ParagraphElement

	//#region ParameterElement

	/**
	* The HTML <param> Element (or HTML Parameter Element) defines parameters for <object> [MDN].
	*/
	export class ParameterElement extends HtmlElement {

		//#region Fields

		private _nameProperty: b.PropertyUpdate<string>;
		private _typeProperty: b.PropertyUpdate<string>;
		private _valueProperty: b.PropertyUpdate<string>;
		private _valueTypeProperty: b.PropertyUpdate<string>;

		//#endregion Fields

		//#region Properties

		//#region nameProperty

		/**
		* Name of the parameter [MDN].
		*/
		get nameProperty(): b.PropertyUpdate<string> {
			if(!this._nameProperty)
				initializeProperty(this, 'name', 'name');
			return this._nameProperty;
		}

		//#endregion nameProperty

		//#region name

		/**
		* Name of the parameter [MDN].
		*/
		get name(): string {
			return this.nameProperty.value;
		}

		set name(value: string) {
			this.nameProperty.value = value;
		}

		//#endregion name

		//#region typeProperty

		/**
		* Only used if the valuetype is set to "ref". Specifies the MIME type of values found at the URI specified by value [MDN].
		*/
		get typeProperty(): b.PropertyUpdate<string> {
			if(!this._typeProperty)
				initializeProperty(this, 'type', 'type');
			return this._typeProperty;
		}

		//#endregion typeProperty

		//#region type

		/**
		* Only used if the valuetype is set to "ref". Specifies the MIME type of values found at the URI specified by value [MDN].
		*/
		get type(): string {
			return this.typeProperty.value;
		}

		set type(value: string) {
			this.typeProperty.value = value;
		}

		//#endregion type

		//#region valueProperty

		/**
		* Specifies the value of the parameter [MDN].
		*/
		get valueProperty(): b.PropertyUpdate<string> {
			if(!this._valueProperty)
				initializeProperty(this, 'value', 'value');
			return this._valueProperty;
		}

		//#endregion valueProperty

		//#region value

		/**
		* Specifies the value of the parameter [MDN].
		*/
		get value(): string {
			return this.valueProperty.value;
		}

		set value(value: string) {
			this.valueProperty.value = value;
		}

		//#endregion value

		//#region valueTypeProperty

		/**
		* Specifies the type of the value attribute. Possible values are:  data: Default value. The value is passed to the object's implementation as a string. ref: The value is a URI to a resource where run-time values are stored. object: An ID of another <object> in the same document [MDN].
		*/
		get valueTypeProperty(): b.PropertyUpdate<string> {
			if(!this._valueTypeProperty)
				initializeProperty(this, 'valueType', 'valueType');
			return this._valueTypeProperty;
		}

		//#endregion valueTypeProperty

		//#region valueType

		/**
		* Specifies the type of the value attribute. Possible values are:  data: Default value. The value is passed to the object's implementation as a string. ref: The value is a URI to a resource where run-time values are stored. object: An ID of another <object> in the same document [MDN].
		*/
		get valueType(): string {
			return this.valueTypeProperty.value;
		}

		set valueType(value: string) {
			this.valueTypeProperty.value = value;
		}

		//#endregion valueType

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new ParameterElement'.
        */
        constructor(config: IParameterElementConfig) {
			super('param', config)
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
            var config = this.getConfig<IParameterElementConfig>();
            setPropertyFromConfig(this, config, 'name', true);
            setPropertyFromConfig(this, config, 'type', true);
            setPropertyFromConfig(this, config, 'value', true);
            setPropertyFromConfig(this, config, 'valueType', true);

        }

        //#endregion Base Class Overrides
	}

	//#endregion ParameterElement

	//#region PreformattedElement

	/**
	* The HTML <pre> Element (or HTML Preformatted Text) represents preformatted text. Text within this element is typically displayed in a non-proportional font exactly as it is laid out in the file. Whitespaces inside this element are displayed as typed [MDN].
	*/
	export class PreformattedElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new PreformattedElement'.
        */
        constructor(config: IPreformattedElementConfig) {
			super('pre', config)
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
            var config = this.getConfig<IPreformattedElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion PreformattedElement

	//#region ProgressElement

	/**
	* The HTML <progress> Element is used to view the completion progress of a task. While the specifics of how it's displayed is left up to the browser developer, it's typically displayed as a progress bar. Javascript can be used to manipulate the value of progress bar [MDN].
	*/
	export class ProgressElement extends HtmlElementContainer {

		//#region Fields

		private _maxProperty: b.PropertyUpdate<number>;
		private _valueProperty: b.PropertyUpdate<number>;
		private _progressErrorEvent: HtmlElementEvent<Elements.ProgressElement, ProgressEvent>;
		private _progressEvent: HtmlElementEvent<Elements.ProgressElement, ProgressEvent>;
		private _progressLoadEndEvent: HtmlElementEvent<Elements.ProgressElement, ProgressEvent>;

		//#endregion Fields

		//#region Properties

		//#region maxProperty

		/**
		* This attribute describes how much work the task indicated by the progress element requires. The max attribute, if present, must have a value greater than zero and be a valid floating point number [MDN].
		*/
		get maxProperty(): b.PropertyUpdate<number> {
			if(!this._maxProperty)
				initializeProperty(this, 'max', 'max');
			return this._maxProperty;
		}

		//#endregion maxProperty

		//#region max

		/**
		* This attribute describes how much work the task indicated by the progress element requires. The max attribute, if present, must have a value greater than zero and be a valid floating point number [MDN].
		*/
		get max(): number {
			return this.maxProperty.value;
		}

		set max(value: number) {
			this.maxProperty.value = value;
		}

		//#endregion max

		//#region valueProperty

		/**
		* This attribute specifies how much of the task that has been completed. It must be a valid floating point number between 0 and max, or between 0 and 1 if max is omitted. If there is no value attribute, the progress bar is indeterminate; this indicates that an activity is ongoing with no indication of how long it is expected to take [MDN].
		*/
		get valueProperty(): b.PropertyUpdate<number> {
			if(!this._valueProperty)
				initializeProperty(this, 'value', 'value');
			return this._valueProperty;
		}

		//#endregion valueProperty

		//#region value

		/**
		* This attribute specifies how much of the task that has been completed. It must be a valid floating point number between 0 and max, or between 0 and 1 if max is omitted. If there is no value attribute, the progress bar is indeterminate; this indicates that an activity is ongoing with no indication of how long it is expected to take [MDN].
		*/
		get value(): number {
			return this.valueProperty.value;
		}

		set value(value: number) {
			this.valueProperty.value = value;
		}

		//#endregion value

		//#region progressErrorEvent

		/**
		* The progressErrorEvent event is executed when progression has failed [MDN].
		* Specifications: Progress, XMLHttpRequest
		* DOM Event Name: error
		*/
		get progressErrorEvent(): HtmlElementEvent<Elements.ProgressElement, ProgressEvent> {
			if(!this._progressErrorEvent)
				this._progressErrorEvent = new HtmlElementEvent<Elements.ProgressElement, ProgressEvent>('error', 'ProgressEvent', this);

			return this._progressErrorEvent;
		}

		//#endregion progressErrorEvent

		//#region progressEvent

		/**
		* The progressEvent event is executed when in progress [MDN].
		* Specifications: Progress, XMLHttpRequest
		* DOM Event Name: progress
		*/
		get progressEvent(): HtmlElementEvent<Elements.ProgressElement, ProgressEvent> {
			if(!this._progressEvent)
				this._progressEvent = new HtmlElementEvent<Elements.ProgressElement, ProgressEvent>('progress', 'ProgressEvent', this);

			return this._progressEvent;
		}

		//#endregion progressEvent

		//#region progressLoadEndEvent

		/**
		* The progressLoadEndEvent event is executed when progress has stopped (after "error", "abort" or "load" have been dispatched) [MDN].
		* Specifications: Progress, XMLHttpRequest
		* DOM Event Name: loadend
		*/
		get progressLoadEndEvent(): HtmlElementEvent<Elements.ProgressElement, ProgressEvent> {
			if(!this._progressLoadEndEvent)
				this._progressLoadEndEvent = new HtmlElementEvent<Elements.ProgressElement, ProgressEvent>('loadend', 'ProgressEvent', this);

			return this._progressLoadEndEvent;
		}

		//#endregion progressLoadEndEvent

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new ProgressElement'.
        */
        constructor(config: IProgressElementConfig) {
			super('progress', config)
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
            var config = this.getConfig<IProgressElementConfig>();
            setPropertyFromConfig(this, config, 'max', true);
            setPropertyFromConfig(this, config, 'value', true);

			if(config.progressErrorHandler)
				this.progressErrorEvent.subscribe(config.progressErrorHandler);

			if(config.progressHandler)
				this.progressEvent.subscribe(config.progressHandler);

			if(config.progressLoadEndHandler)
				this.progressLoadEndEvent.subscribe(config.progressLoadEndHandler);

        }

        //#endregion Base Class Overrides
	}

	//#endregion ProgressElement

	//#region QuoteElement

	/**
	* The HTML <q> Element (or HTML Quote Element) indicates that the enclosed text is a short inline quotation. This element is intended for short quotations that don't require paragraph breaks; for long quotations use <blockquote> element [MDN].
	*/
	export class QuoteElement extends HtmlElementContainer {

		//#region Fields

		private _citationProperty: b.PropertyUpdate<string>;

		//#endregion Fields

		//#region Properties

		//#region citationProperty

		/**
		* The value of this attribute is a URL that designates a source document or message for the information quoted. This attribute is intended to point to information explaining the context or the reference for the quote [MDN].
		*/
		get citationProperty(): b.PropertyUpdate<string> {
			if(!this._citationProperty)
				initializeProperty(this, 'citation', 'cite');
			return this._citationProperty;
		}

		//#endregion citationProperty

		//#region citation

		/**
		* The value of this attribute is a URL that designates a source document or message for the information quoted. This attribute is intended to point to information explaining the context or the reference for the quote [MDN].
		*/
		get citation(): string {
			return this.citationProperty.value;
		}

		set citation(value: string) {
			this.citationProperty.value = value;
		}

		//#endregion citation

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new QuoteElement'.
        */
        constructor(config: IQuoteElementConfig) {
			super('q', config)
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
            var config = this.getConfig<IQuoteElementConfig>();
            setPropertyFromConfig(this, config, 'citation', true);

        }

        //#endregion Base Class Overrides
	}

	//#endregion QuoteElement

	//#region RootElement

	/**
	* The HTML <html> Element (or HTML root element) represents the root of an HTML or XHTML document. All other elements must be descendants of this element [MDN].
	*/
	export class RootElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new RootElement'.
        */
        constructor(config: IRootElementConfig) {
			super('html', config)
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
            var config = this.getConfig<IRootElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion RootElement

	//#region RubyElement

	/**
	* The HTML <ruby> Element represents a ruby annotation. Ruby annotations are for showing pronounciation of East Asian characters [MDN].
	*/
	export class RubyElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new RubyElement'.
        */
        constructor(config: IRubyElementConfig) {
			super('ruby', config)
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
            var config = this.getConfig<IRubyElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion RubyElement

	//#region RubyParenthesisElement

	/**
	* The HTML <rp> element is used to provide fall-back parenthesis for browsers non-supporting ruby annotations. Ruby annotations are for showing pronounciation of East Asian characters, like using Japanese furigana or Taiwainese bopomofo characters. The <rp> element is used in the case of lack of <ruby> element support its content has what should be displayed in order to indicate the presence of a ruby annotation, usually parentheses [MDN].
	*/
	export class RubyParenthesisElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new RubyParenthesisElement'.
        */
        constructor(config: IRubyParenthesisElementConfig) {
			super('rp', config)
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
            var config = this.getConfig<IRubyParenthesisElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion RubyParenthesisElement

	//#region RubyPronunciationElement

	/**
	* The HTML <rt> Element embraces pronunciation of character presented in a ruby annotations, which are for showing pronunciation of East Asian characters and the <rt> element is used inside of <ruby> element [MDN].
	*/
	export class RubyPronunciationElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new RubyPronunciationElement'.
        */
        constructor(config: IRubyPronunciationElementConfig) {
			super('rt', config)
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
            var config = this.getConfig<IRubyPronunciationElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion RubyPronunciationElement

	//#region SampleElement

	/**
	* The HTML <samp> element is an inline element intended to identify sample output from a computer program. It is usually displayed in the browser's default monotype font (such as Lucida Console) [MDN].
	*/
	export class SampleElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new SampleElement'.
        */
        constructor(config: ISampleElementConfig) {
			super('samp', config)
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
            var config = this.getConfig<ISampleElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion SampleElement

	//#region ScriptElement

	/**
	* The HTML <script> element is used to embed or reference an executable script within an HTML or XHTML document [MDN].
	*/
	export class ScriptElement extends HtmlElementContainer {

		//#region Fields

		private _asyncProperty: b.PropertyUpdate<boolean>;
		private _sourceProperty: b.PropertyUpdate<string>;
		private _typeProperty: b.PropertyUpdate<string>;
		private _deferProperty: b.PropertyUpdate<boolean>;
		private _errorEvent: HtmlElementEvent<Elements.ScriptElement, UIEvent>;

		//#endregion Fields

		//#region Properties

		//#region asyncProperty

		/**
		* Set this Boolean attribute to indicate that the browser should, if possible, execute the script asynchronously. It has no effect on inline scripts (i.e., scripts that don't have the src attribute) [MDN].
		*/
		get asyncProperty(): b.PropertyUpdate<boolean> {
			if(!this._asyncProperty)
				initializeProperty(this, 'async', 'async');
			return this._asyncProperty;
		}

		//#endregion asyncProperty

		//#region async

		/**
		* Set this Boolean attribute to indicate that the browser should, if possible, execute the script asynchronously. It has no effect on inline scripts (i.e., scripts that don't have the src attribute) [MDN].
		*/
		get async(): boolean {
			return this.asyncProperty.value;
		}

		set async(value: boolean) {
			this.asyncProperty.value = value;
		}

		//#endregion async

		//#region sourceProperty

		/**
		* This attribute specifies the URI of an external script; this can be used as an alternative to embedding a script directly within a document. script elements with an src attribute specified should not have a script embedded within its tags [MDN].
		*/
		get sourceProperty(): b.PropertyUpdate<string> {
			if(!this._sourceProperty)
				initializeProperty(this, 'source', 'src');
			return this._sourceProperty;
		}

		//#endregion sourceProperty

		//#region source

		/**
		* This attribute specifies the URI of an external script; this can be used as an alternative to embedding a script directly within a document. script elements with an src attribute specified should not have a script embedded within its tags [MDN].
		*/
		get source(): string {
			return this.sourceProperty.value;
		}

		set source(value: string) {
			this.sourceProperty.value = value;
		}

		//#endregion source

		//#region typeProperty

		/**
		* This attribute identifies the scripting language of code embedded within a script element or referenced via the elementâ€™s src attribute. This is specified as a MIME type; examples of supported MIME types include text/javascript, text/ecmascript, application/javascript, and application/ecmascript. If this attribute is absent, the script is treated as JavaScript [MDN].
		*/
		get typeProperty(): b.PropertyUpdate<string> {
			if(!this._typeProperty)
				initializeProperty(this, 'type', 'type');
			return this._typeProperty;
		}

		//#endregion typeProperty

		//#region type

		/**
		* This attribute identifies the scripting language of code embedded within a script element or referenced via the elementâ€™s src attribute. This is specified as a MIME type; examples of supported MIME types include text/javascript, text/ecmascript, application/javascript, and application/ecmascript. If this attribute is absent, the script is treated as JavaScript [MDN].
		*/
		get type(): string {
			return this.typeProperty.value;
		}

		set type(value: string) {
			this.typeProperty.value = value;
		}

		//#endregion type

		//#region deferProperty

		/**
		* This Boolean attribute is set to indicate to a browser that the script is meant to be executed after the document has been parsed. Since this feature hasn't yet been implemented by all other major browsers, authors should not assume that the scriptâ€™s execution will actually be deferred. Never call document.write() from a defer script (since Gecko 1.9.2, this will blow away the document). The defer attribute shouldn't be used on scripts that don't have the src attribute. Since Gecko 1.9.2, the defer attribute is ignored on scripts that don't have the src attribute. However, in Gecko 1.9.1 even inline scripts are deferred if the defer attribute is set [MDN].
		*/
		get deferProperty(): b.PropertyUpdate<boolean> {
			if(!this._deferProperty)
				initializeProperty(this, 'defer', 'defer');
			return this._deferProperty;
		}

		//#endregion deferProperty

		//#region defer

		/**
		* This Boolean attribute is set to indicate to a browser that the script is meant to be executed after the document has been parsed. Since this feature hasn't yet been implemented by all other major browsers, authors should not assume that the scriptâ€™s execution will actually be deferred. Never call document.write() from a defer script (since Gecko 1.9.2, this will blow away the document). The defer attribute shouldn't be used on scripts that don't have the src attribute. Since Gecko 1.9.2, the defer attribute is ignored on scripts that don't have the src attribute. However, in Gecko 1.9.1 even inline scripts are deferred if the defer attribute is set [MDN].
		*/
		get defer(): boolean {
			return this.deferProperty.value;
		}

		set defer(value: boolean) {
			this.deferProperty.value = value;
		}

		//#endregion defer

		//#region errorEvent

		/**
		* The errorEvent event is executed when a resource failed to load [MDN].
		* Specification: DOM L3
		* DOM Event Name: error
		*/
		get errorEvent(): HtmlElementEvent<Elements.ScriptElement, UIEvent> {
			if(!this._errorEvent)
				this._errorEvent = new HtmlElementEvent<Elements.ScriptElement, UIEvent>('error', 'UIEvent', this);

			return this._errorEvent;
		}

		//#endregion errorEvent

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new ScriptElement'.
        */
        constructor(config: IScriptElementConfig) {
			super('script', config)
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
            var config = this.getConfig<IScriptElementConfig>();
            setPropertyFromConfig(this, config, 'async', true);
            setPropertyFromConfig(this, config, 'source', true);
            setPropertyFromConfig(this, config, 'type', true);
            setPropertyFromConfig(this, config, 'defer', true);

			if(config.errorHandler)
				this.errorEvent.subscribe(config.errorHandler);

        }

        //#endregion Base Class Overrides
	}

	//#endregion ScriptElement

	//#region SectionElement

	/**
	* The HTML Section Element (<section>) represents a generic section of a document, i.e., a thematic grouping of content, typically with a heading [MDN].
	*/
	export class SectionElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new SectionElement'.
        */
        constructor(config: ISectionElementConfig) {
			super('section', config)
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
            var config = this.getConfig<ISectionElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion SectionElement

	//#region SelectElement

	/**
	* The HTML select (<select>) element represents a control that presents menu of options. The options within the menu are represented by <option> elements, which can be grouped by <optgroup> elements. Options can be pre-selected for the user [MDN].
	*/
	export class SelectElement extends HtmlElementContainer {

		//#region Fields

		private _autoFocusProperty: b.PropertyUpdate<boolean>;
		private _disabledProperty: b.PropertyUpdate<boolean>;
		private _formPropertyID: string;
		private _formProperty: FormElement;
		private _multipleOptionsProperty: b.PropertyUpdate<boolean>;
		private _nameProperty: b.PropertyUpdate<string>;
		private _requiredProperty: b.PropertyUpdate<boolean>;
		private _sizeProperty: b.PropertyUpdate<number>;
		private _changeEvent: HtmlElementEvent<Elements.SelectElement, Event>;

		//#endregion Fields

		//#region Properties

		//#region autoFocusProperty

		/**
		* This attribute lets you specify that a form control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form element in a document can have the autofocus attribute, which is a Boolean [MDN].
		*/
		get autoFocusProperty(): b.PropertyUpdate<boolean> {
			if(!this._autoFocusProperty)
				initializeProperty(this, 'autoFocus', 'autofocus');
			return this._autoFocusProperty;
		}

		//#endregion autoFocusProperty

		//#region autoFocus

		/**
		* This attribute lets you specify that a form control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form element in a document can have the autofocus attribute, which is a Boolean [MDN].
		*/
		get autoFocus(): boolean {
			return this.autoFocusProperty.value;
		}

		set autoFocus(value: boolean) {
			this.autoFocusProperty.value = value;
		}

		//#endregion autoFocus

		//#region disabledProperty

		/**
		* This Boolean attribute indicates that the user cannot interact with the control. If this attribute is not specified, the control inherits its setting from the containing element, for example fieldset; if there is no containing element with the disabled attribute set, then the control is enabled [MDN].
		*/
		get disabledProperty(): b.PropertyUpdate<boolean> {
			if(!this._disabledProperty)
				initializeProperty(this, 'disabled', 'disabled');
			return this._disabledProperty;
		}

		//#endregion disabledProperty

		//#region disabled

		/**
		* This Boolean attribute indicates that the user cannot interact with the control. If this attribute is not specified, the control inherits its setting from the containing element, for example fieldset; if there is no containing element with the disabled attribute set, then the control is enabled [MDN].
		*/
		get disabled(): boolean {
			return this.disabledProperty.value;
		}

		set disabled(value: boolean) {
			this.disabledProperty.value = value;
		}

		//#endregion disabled

		//#region form

		/**
		* The form element that the select element is associated with (its "form owner"). If this attribute is specified, its value must be the ID of a form element in the same document. This enables you to place select elements anywhere within a document, not just as descendants of their form elements [MDN].
		*/
		get form(): FormElement {
			return getElementPropertyValue<FormElement>(this, 'form');
		}

		set form(value: FormElement) {
			setElementPropertyValue(this, 'form', value);
		}

		//#endregion form

		//#region multipleOptionsProperty

		/**
		* This Boolean attribute indicates that multiple options can be selected in the list. If it is not specified, then only one option can be selected at a time [MDN].
		*/
		get multipleOptionsProperty(): b.PropertyUpdate<boolean> {
			if(!this._multipleOptionsProperty)
				initializeProperty(this, 'multipleOptions', 'multiple');
			return this._multipleOptionsProperty;
		}

		//#endregion multipleOptionsProperty

		//#region multipleOptions

		/**
		* This Boolean attribute indicates that multiple options can be selected in the list. If it is not specified, then only one option can be selected at a time [MDN].
		*/
		get multipleOptions(): boolean {
			return this.multipleOptionsProperty.value;
		}

		set multipleOptions(value: boolean) {
			this.multipleOptionsProperty.value = value;
		}

		//#endregion multipleOptions

		//#region nameProperty

		/**
		* The name of the control [MDN].
		*/
		get nameProperty(): b.PropertyUpdate<string> {
			if(!this._nameProperty)
				initializeProperty(this, 'name', 'name');
			return this._nameProperty;
		}

		//#endregion nameProperty

		//#region name

		/**
		* The name of the control [MDN].
		*/
		get name(): string {
			return this.nameProperty.value;
		}

		set name(value: string) {
			this.nameProperty.value = value;
		}

		//#endregion name

		//#region requiredProperty

		/**
		* A Boolean attribute indicating that an option with a non-empty string value must be selected [MDN].
		*/
		get requiredProperty(): b.PropertyUpdate<boolean> {
			if(!this._requiredProperty)
				initializeProperty(this, 'required', 'required');
			return this._requiredProperty;
		}

		//#endregion requiredProperty

		//#region required

		/**
		* A Boolean attribute indicating that an option with a non-empty string value must be selected [MDN].
		*/
		get required(): boolean {
			return this.requiredProperty.value;
		}

		set required(value: boolean) {
			this.requiredProperty.value = value;
		}

		//#endregion required

		//#region sizeProperty

		/**
		* If the control is presented as a scrolled list box, this attribute represents the number of rows in the list that should be visible at one time. Browsers are not required to present a select elements as a scrolled list box. The default value is 0 [MDN].
		*/
		get sizeProperty(): b.PropertyUpdate<number> {
			if(!this._sizeProperty)
				initializeProperty(this, 'size', 'size');
			return this._sizeProperty;
		}

		//#endregion sizeProperty

		//#region size

		/**
		* If the control is presented as a scrolled list box, this attribute represents the number of rows in the list that should be visible at one time. Browsers are not required to present a select elements as a scrolled list box. The default value is 0 [MDN].
		*/
		get size(): number {
			return this.sizeProperty.value;
		}

		set size(value: number) {
			this.sizeProperty.value = value;
		}

		//#endregion size

		//#region changeEvent

		/**
		* The changeEvent event is executed when an element loses focus and its value changed since gaining focus [MDN].
		* Specifications: DOM L2, HTML5
		* DOM Event Name: change
		*/
		get changeEvent(): HtmlElementEvent<Elements.SelectElement, Event> {
			if(!this._changeEvent)
				this._changeEvent = new HtmlElementEvent<Elements.SelectElement, Event>('change', 'Event', this);

			return this._changeEvent;
		}

		//#endregion changeEvent

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new SelectElement'.
        */
        constructor(config: ISelectElementConfig) {
			super('select', config)
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
            var config = this.getConfig<ISelectElementConfig>();
            setPropertyFromConfig(this, config, 'autoFocus', true);
            setPropertyFromConfig(this, config, 'disabled', true);
			setElementPropertyFromConfig(this, config, 'form');
            setPropertyFromConfig(this, config, 'multipleOptions', true);
            setPropertyFromConfig(this, config, 'name', true);
            setPropertyFromConfig(this, config, 'required', true);
            setPropertyFromConfig(this, config, 'size', true);

			if(config.changeHandler)
				this.changeEvent.subscribe(config.changeHandler);

        }

        //#endregion Base Class Overrides
	}

	//#endregion SelectElement

	//#region SmallElement

	/**
	* The HTML Small Element (<small>) makes the text font size one size smaller (for example, from large to medium, or from small to x-small) down to the browser's minimum font size.  In HTML5, this element is repurposed to represent side-comments and small print, including copyright and legal text, independent of its styled presentation [MDN].
	*/
	export class SmallElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new SmallElement'.
        */
        constructor(config: ISmallElementConfig) {
			super('small', config)
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
            var config = this.getConfig<ISmallElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion SmallElement

	//#region SourceElement

	/**
	* The source element is used to specify multiple media resources for audio and video elements in HTML5. It is an empty element. It is commonly used to serve the same media in multiple formats supported by different browsers [MDN].
	*/
	export class SourceElement extends HtmlElementContainer {

		//#region Fields

		private _sourceProperty: b.PropertyUpdate<string>;
		private _typeProperty: b.PropertyUpdate<string>;

		//#endregion Fields

		//#region Properties

		//#region sourceProperty

		/**
		* Required, address of the media resource [MDN].
		*/
		get sourceProperty(): b.PropertyUpdate<string> {
			if(!this._sourceProperty)
				initializeProperty(this, 'source', 'src');
			return this._sourceProperty;
		}

		//#endregion sourceProperty

		//#region source

		/**
		* Required, address of the media resource [MDN].
		*/
		get source(): string {
			return this.sourceProperty.value;
		}

		set source(value: string) {
			this.sourceProperty.value = value;
		}

		//#endregion source

		//#region typeProperty

		/**
		* The MIME-type of the resource, optionally with a codecs parameter. See RFC 4281 for information about how to specify codecs [MDN].
		*/
		get typeProperty(): b.PropertyUpdate<string> {
			if(!this._typeProperty)
				initializeProperty(this, 'type', 'type');
			return this._typeProperty;
		}

		//#endregion typeProperty

		//#region type

		/**
		* The MIME-type of the resource, optionally with a codecs parameter. See RFC 4281 for information about how to specify codecs [MDN].
		*/
		get type(): string {
			return this.typeProperty.value;
		}

		set type(value: string) {
			this.typeProperty.value = value;
		}

		//#endregion type

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new SourceElement'.
        */
        constructor(config: ISourceElementConfig) {
			super('source', config)
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
            var config = this.getConfig<ISourceElementConfig>();
            setPropertyFromConfig(this, config, 'source', true);
            setPropertyFromConfig(this, config, 'type', true);

        }

        //#endregion Base Class Overrides
	}

	//#endregion SourceElement

	//#region SpanElement

	/**
	* The HTML <span> element is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element is appropriate. <span> is very much like a <div> element, but <div> is a block-level element whereas a <span> is an inline element [MDN].
	*/
	export class SpanElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new SpanElement'.
        */
        constructor(config: ISpanElementConfig) {
			super('span', config)
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
            var config = this.getConfig<ISpanElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion SpanElement

	//#region StrikethroughElement

	/**
	* The HTML Strikethrough Element (<s>) renders text with a strikethrough, or a line through it. Use the <s> element to represent things that are no longer relevant or no longer accurate. However, <s> is not appropriate when indicating document edits; for that, use the <del> and <ins> elements, as appropriate [MDN].
	*/
	export class StrikethroughElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new StrikethroughElement'.
        */
        constructor(config: IStrikethroughElementConfig) {
			super('s', config)
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
            var config = this.getConfig<IStrikethroughElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion StrikethroughElement

	//#region StrongElement

	/**
	* The HTML Strong Element (<strong>) gives text strong importance, and is typically displayed in bold [MDN].
	*/
	export class StrongElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new StrongElement'.
        */
        constructor(config: IStrongElementConfig) {
			super('strong', config)
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
            var config = this.getConfig<IStrongElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion StrongElement

	//#region StyleElement

	/**
	* The HTML <style> element contains style information for a document, or a part of document. The specific style information is contained inside of this element, usually in the CSS [MDN].
	*/
	export class StyleElement extends HtmlElementContainer {

		//#region Fields

		private _typeProperty: b.PropertyUpdate<string>;
		private _mediaProperty: b.PropertyUpdate<string>;
		private _disabledProperty: b.PropertyUpdate<boolean>;
		private _errorEvent: HtmlElementEvent<Elements.StyleElement, UIEvent>;

		//#endregion Fields

		//#region Properties

		//#region typeProperty

		/**
		* This attribute defines the styling language as a MIME type (charset should not be specified). 'text/css' is assumed if this attribute is absent [MDN].
		*/
		get typeProperty(): b.PropertyUpdate<string> {
			if(!this._typeProperty)
				initializeProperty(this, 'type', 'type');
			return this._typeProperty;
		}

		//#endregion typeProperty

		//#region type

		/**
		* This attribute defines the styling language as a MIME type (charset should not be specified). 'text/css' is assumed if this attribute is absent [MDN].
		*/
		get type(): string {
			return this.typeProperty.value;
		}

		set type(value: string) {
			this.typeProperty.value = value;
		}

		//#endregion type

		//#region mediaProperty

		/**
		* Which media should this style apply to. Should be a media query, see http://dev.w3.org/csswg/css3-mediaqueries [MDN].
		*/
		get mediaProperty(): b.PropertyUpdate<string> {
			if(!this._mediaProperty)
				initializeProperty(this, 'media', 'media');
			return this._mediaProperty;
		}

		//#endregion mediaProperty

		//#region media

		/**
		* Which media should this style apply to. Should be a media query, see http://dev.w3.org/csswg/css3-mediaqueries [MDN].
		*/
		get media(): string {
			return this.mediaProperty.value;
		}

		set media(value: string) {
			this.mediaProperty.value = value;
		}

		//#endregion media

		//#region disabledProperty

		/**
		* If set, the style rules declared in this element are disabled in the declaring document [MDN].
		*/
		get disabledProperty(): b.PropertyUpdate<boolean> {
			if(!this._disabledProperty)
				initializeProperty(this, 'disabled', 'disabled');
			return this._disabledProperty;
		}

		//#endregion disabledProperty

		//#region disabled

		/**
		* If set, the style rules declared in this element are disabled in the declaring document [MDN].
		*/
		get disabled(): boolean {
			return this.disabledProperty.value;
		}

		set disabled(value: boolean) {
			this.disabledProperty.value = value;
		}

		//#endregion disabled

		//#region errorEvent

		/**
		* The errorEvent event is executed when a resource failed to load [MDN].
		* Specification: DOM L3
		* DOM Event Name: error
		*/
		get errorEvent(): HtmlElementEvent<Elements.StyleElement, UIEvent> {
			if(!this._errorEvent)
				this._errorEvent = new HtmlElementEvent<Elements.StyleElement, UIEvent>('error', 'UIEvent', this);

			return this._errorEvent;
		}

		//#endregion errorEvent

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new StyleElement'.
        */
        constructor(config: IStyleElementConfig) {
			super('style', config)
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
            var config = this.getConfig<IStyleElementConfig>();
            setPropertyFromConfig(this, config, 'type', true);
            setPropertyFromConfig(this, config, 'media', true);
            setPropertyFromConfig(this, config, 'disabled', false);

			if(config.errorHandler)
				this.errorEvent.subscribe(config.errorHandler);

        }

        //#endregion Base Class Overrides
	}

	//#endregion StyleElement

	//#region SubscriptElement

	/**
	* The HTML Subscript Element (<sub>) defines a span of text that should be displayed, for typographic reasons, lower, and often smaller, than the main span of text [MDN].
	*/
	export class SubscriptElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new SubscriptElement'.
        */
        constructor(config: ISubscriptElementConfig) {
			super('sub', config)
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
            var config = this.getConfig<ISubscriptElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion SubscriptElement

	//#region SummaryElement

	/**
	* The HTML summary element (<summary>) is used as a summary, caption or legend for the content of a <details> element [MDN].
	*/
	export class SummaryElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new SummaryElement'.
        */
        constructor(config: ISummaryElementConfig) {
			super('summary', config)
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
            var config = this.getConfig<ISummaryElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion SummaryElement

	//#region SuperscriptElement

	/**
	* The HTML Superscript Element (<sup>) defines a span of text that should be displayed, for typographic reasons, higher, and often smaller, than the main span of text [MDN].
	*/
	export class SuperscriptElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new SuperscriptElement'.
        */
        constructor(config: ISuperscriptElementConfig) {
			super('sup', config)
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
            var config = this.getConfig<ISuperscriptElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion SuperscriptElement

	//#region TableElement

	/**
	* The HTML Table Element (<table>) represents data in two dimensions or more [MDN].
	*/
	export class TableElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new TableElement'.
        */
        constructor(config: ITableElementConfig) {
			super('table', config)
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
            var config = this.getConfig<ITableElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion TableElement

	//#region TableCaptionElement

	/**
	* The HTML <caption> Element (or HTML Table Caption Element) represents the title of a table. Though it is always the first descendant of a <table>, its styling, using CSS, may place it elsewhere, relative to the table [MDN].
	*/
	export class TableCaptionElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new TableCaptionElement'.
        */
        constructor(config: ITableCaptionElementConfig) {
			super('caption', config)
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
            var config = this.getConfig<ITableCaptionElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion TableCaptionElement

	//#region TableColumnElement

	/**
	* The HTML <col> Element (or HTML Table Column Element) defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a <colgroup> element [MDN].
	*/
	export class TableColumnElement extends HtmlElement {

		//#region Fields

		private _spanProperty: b.PropertyUpdate<number>;

		//#endregion Fields

		//#region Properties

		//#region spanProperty

		/**
		* This attribute contains a positive integer indicating the number of consecutive columns the <col> element spans. If not present, its default value is 1 [MDN].
		*/
		get spanProperty(): b.PropertyUpdate<number> {
			if(!this._spanProperty)
				initializeProperty(this, 'span', 'span');
			return this._spanProperty;
		}

		//#endregion spanProperty

		//#region span

		/**
		* This attribute contains a positive integer indicating the number of consecutive columns the <col> element spans. If not present, its default value is 1 [MDN].
		*/
		get span(): number {
			return this.spanProperty.value;
		}

		set span(value: number) {
			this.spanProperty.value = value;
		}

		//#endregion span

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new TableColumnElement'.
        */
        constructor(config: ITableColumnElementConfig) {
			super('col', config)
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
            var config = this.getConfig<ITableColumnElementConfig>();
            setPropertyFromConfig(this, config, 'span', true);

        }

        //#endregion Base Class Overrides
	}

	//#endregion TableColumnElement

	//#region TableColumnGroupElement

	/**
	* The HTML <colgroup> Element (or HTML Table Column Group Element) defines a group of columns within a table [MDN].
	*/
	export class TableColumnGroupElement extends HtmlElement {

		//#region Fields

		private _spanProperty: b.PropertyUpdate<number>;
		private _widthProperty: b.PropertyUpdate<string>;

		//#endregion Fields

		//#region Properties

		//#region spanProperty

		/**
		* This attribute contains a positive integer indicating the number of consecutive columns the <colgroup> element spans. If not present, its default value is 1.  
		* Note: This attribute apply on the attributes of the column group, it has no effect on the CSS styling rules associated to it or, even more, to the cells of the columns members of the group.  The span attribute may not be present if there are one or more <col> elements within the <colgroup> [MDN].
		*/
		get spanProperty(): b.PropertyUpdate<number> {
			if(!this._spanProperty)
				initializeProperty(this, 'span', 'span');
			return this._spanProperty;
		}

		//#endregion spanProperty

		//#region span

		/**
		* This attribute contains a positive integer indicating the number of consecutive columns the <colgroup> element spans. If not present, its default value is 1.  
		* Note: This attribute apply on the attributes of the column group, it has no effect on the CSS styling rules associated to it or, even more, to the cells of the columns members of the group.  The span attribute may not be present if there are one or more <col> elements within the <colgroup> [MDN].
		*/
		get span(): number {
			return this.spanProperty.value;
		}

		set span(value: number) {
			this.spanProperty.value = value;
		}

		//#endregion span

		//#region widthProperty

		/**
		* This attribute specifies a default width for each column in the current column group. In addition to the standard pixel and percentage values, this attribute might take the special form 0*, which means that the width of each column in the group should be the minimum width necessary to hold the column's contents. Relative widths such as 0.5* also can be used [MDN].
		*/
		get widthProperty(): b.PropertyUpdate<string> {
			if(!this._widthProperty)
				initializeProperty(this, 'width', 'width');
			return this._widthProperty;
		}

		//#endregion widthProperty

		//#region width

		/**
		* This attribute specifies a default width for each column in the current column group. In addition to the standard pixel and percentage values, this attribute might take the special form 0*, which means that the width of each column in the group should be the minimum width necessary to hold the column's contents. Relative widths such as 0.5* also can be used [MDN].
		*/
		get width(): string {
			return this.widthProperty.value;
		}

		set width(value: string) {
			this.widthProperty.value = value;
		}

		//#endregion width

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new TableColumnGroupElement'.
        */
        constructor(config: ITableColumnGroupElementConfig) {
			super('colgroup', config)
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
            var config = this.getConfig<ITableColumnGroupElementConfig>();
            setPropertyFromConfig(this, config, 'span', true);
            setPropertyFromConfig(this, config, 'width', true);

        }

        //#endregion Base Class Overrides
	}

	//#endregion TableColumnGroupElement

	//#region TableDataCellElement

	/**
	* The Table cell HTML element (<td>) defines a cell of a table that contains data. It participates in the table model [MDN].
	*/
	export class TableDataCellElement extends HtmlElementContainer {

		//#region Fields

		private _columnSpanProperty: b.PropertyUpdate<number>;
		private _headersProperty: b.PropertyUpdate<string>;
		private _rowSpanProperty: b.PropertyUpdate<number>;
		private _scopeProperty: b.PropertyUpdate<string>;

		//#endregion Fields

		//#region Properties

		//#region columnSpanProperty

		/**
		* This attribute contains a non-negative integer value that indicates for how many columns the cell extends. Its default value is 1; if its value is set to 0, it extends until the end of the <colgroup>, even if implicitly defined, that the cell belongs to. Values higher than 1000 will be considered as incorrect and will be set to the default value (1).  
		* Note: In HTML5 this attribute only accepts values greater than zero since it must not be used to overlap cells. Besides, Firefox is the only browser to support the 0 value as defined in the HTML 4.01 specification [MDN].
		*/
		get columnSpanProperty(): b.PropertyUpdate<number> {
			if(!this._columnSpanProperty)
				initializeProperty(this, 'columnSpan', 'colSpan');
			return this._columnSpanProperty;
		}

		//#endregion columnSpanProperty

		//#region columnSpan

		/**
		* This attribute contains a non-negative integer value that indicates for how many columns the cell extends. Its default value is 1; if its value is set to 0, it extends until the end of the <colgroup>, even if implicitly defined, that the cell belongs to. Values higher than 1000 will be considered as incorrect and will be set to the default value (1).  
		* Note: In HTML5 this attribute only accepts values greater than zero since it must not be used to overlap cells. Besides, Firefox is the only browser to support the 0 value as defined in the HTML 4.01 specification [MDN].
		*/
		get columnSpan(): number {
			return this.columnSpanProperty.value;
		}

		set columnSpan(value: number) {
			this.columnSpanProperty.value = value;
		}

		//#endregion columnSpan

		//#region headersProperty

		/**
		* This attribute contains a list of space-separated strings, each corresponding to the id attribute of the <th> elements that apply to this element [MDN].
		*/
		get headersProperty(): b.PropertyUpdate<string> {
			if(!this._headersProperty)
				initializeProperty(this, 'headers', 'headers');
			return this._headersProperty;
		}

		//#endregion headersProperty

		//#region headers

		/**
		* This attribute contains a list of space-separated strings, each corresponding to the id attribute of the <th> elements that apply to this element [MDN].
		*/
		get headers(): string {
			return this.headersProperty.value;
		}

		set headers(value: string) {
			this.headersProperty.value = value;
		}

		//#endregion headers

		//#region rowSpanProperty

		/**
		* This attribute contains a non-negative integer value that indicates for how many rows the cell extends. Its default value is 1; if its value is set to 0, it extends until the end of the table section (<thead>, <tbody>, <tfoot>, even if implicitly defined, that the cell belongs to. Values higher than 65534 are clipped down to 65534 [MDN].
		*/
		get rowSpanProperty(): b.PropertyUpdate<number> {
			if(!this._rowSpanProperty)
				initializeProperty(this, 'rowSpan', 'rowSpan');
			return this._rowSpanProperty;
		}

		//#endregion rowSpanProperty

		//#region rowSpan

		/**
		* This attribute contains a non-negative integer value that indicates for how many rows the cell extends. Its default value is 1; if its value is set to 0, it extends until the end of the table section (<thead>, <tbody>, <tfoot>, even if implicitly defined, that the cell belongs to. Values higher than 65534 are clipped down to 65534 [MDN].
		*/
		get rowSpan(): number {
			return this.rowSpanProperty.value;
		}

		set rowSpan(value: number) {
			this.rowSpanProperty.value = value;
		}

		//#endregion rowSpan

		//#region scopeProperty

		/**
		*  [MDN].
		*/
		get scopeProperty(): b.PropertyUpdate<string> {
			if(!this._scopeProperty)
				initializeProperty(this, 'scope', 'scope');
			return this._scopeProperty;
		}

		//#endregion scopeProperty

		//#region scope

		/**
		*  [MDN].
		*/
		get scope(): string {
			return this.scopeProperty.value;
		}

		set scope(value: string) {
			this.scopeProperty.value = value;
		}

		//#endregion scope

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new TableDataCellElement'.
        */
        constructor(config: ITableDataCellElementConfig) {
			super('td', config)
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
            var config = this.getConfig<ITableDataCellElementConfig>();
            setPropertyFromConfig(this, config, 'columnSpan', true);
            setPropertyFromConfig(this, config, 'headers', true);
            setPropertyFromConfig(this, config, 'rowSpan', true);
            setPropertyFromConfig(this, config, 'scope', true);

        }

        //#endregion Base Class Overrides
	}

	//#endregion TableDataCellElement

	//#region TableHeaderCellElement

	/**
	* The HTML Table Header Cell Element (<th>) defines a cell that is a header for a group of cells of a table. The group of cells that the header refers to is defined by the scope and headers attribute [MDN].
	*/
	export class TableHeaderCellElement extends HtmlElementContainer {

		//#region Fields

		private _columnSpanProperty: b.PropertyUpdate<number>;
		private _headersProperty: b.PropertyUpdate<string>;
		private _rowSpanProperty: b.PropertyUpdate<number>;

		//#endregion Fields

		//#region Properties

		//#region columnSpanProperty

		/**
		* This attribute contains a non-negative integer value that indicates on how many columns does the cell extend. Its default value is 1; if its value is set to 0, it does extend until the end of the <colgroup>, eventually implicitly defined, the cell belongs to. Values higher than 1000 are clipped down to 1000 [MDN].
		*/
		get columnSpanProperty(): b.PropertyUpdate<number> {
			if(!this._columnSpanProperty)
				initializeProperty(this, 'columnSpan', 'colSpan');
			return this._columnSpanProperty;
		}

		//#endregion columnSpanProperty

		//#region columnSpan

		/**
		* This attribute contains a non-negative integer value that indicates on how many columns does the cell extend. Its default value is 1; if its value is set to 0, it does extend until the end of the <colgroup>, eventually implicitly defined, the cell belongs to. Values higher than 1000 are clipped down to 1000 [MDN].
		*/
		get columnSpan(): number {
			return this.columnSpanProperty.value;
		}

		set columnSpan(value: number) {
			this.columnSpanProperty.value = value;
		}

		//#endregion columnSpan

		//#region headersProperty

		/**
		* This attributes a list of space-separated strings, each corresponding to the id attribute of the <th> elements that applies to this element [MDN].
		*/
		get headersProperty(): b.PropertyUpdate<string> {
			if(!this._headersProperty)
				initializeProperty(this, 'headers', 'headers');
			return this._headersProperty;
		}

		//#endregion headersProperty

		//#region headers

		/**
		* This attributes a list of space-separated strings, each corresponding to the id attribute of the <th> elements that applies to this element [MDN].
		*/
		get headers(): string {
			return this.headersProperty.value;
		}

		set headers(value: string) {
			this.headersProperty.value = value;
		}

		//#endregion headers

		//#region rowSpanProperty

		/**
		* This attribute contains a non-negative integer value that indicates on how many rows does the cell extend. Its default value is 1; if its value is set to 0, it does extend until the end of the table section (<thead>, <tbody>, <tfoot>, eventually implicitly defined) the cell belongs to. Values higher than 65534 are clipped down to 65534 [MDN].
		*/
		get rowSpanProperty(): b.PropertyUpdate<number> {
			if(!this._rowSpanProperty)
				initializeProperty(this, 'rowSpan', 'rowSpan');
			return this._rowSpanProperty;
		}

		//#endregion rowSpanProperty

		//#region rowSpan

		/**
		* This attribute contains a non-negative integer value that indicates on how many rows does the cell extend. Its default value is 1; if its value is set to 0, it does extend until the end of the table section (<thead>, <tbody>, <tfoot>, eventually implicitly defined) the cell belongs to. Values higher than 65534 are clipped down to 65534 [MDN].
		*/
		get rowSpan(): number {
			return this.rowSpanProperty.value;
		}

		set rowSpan(value: number) {
			this.rowSpanProperty.value = value;
		}

		//#endregion rowSpan

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new TableHeaderCellElement'.
        */
        constructor(config: ITableHeaderCellElementConfig) {
			super('th', config)
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
            var config = this.getConfig<ITableHeaderCellElementConfig>();
            setPropertyFromConfig(this, config, 'columnSpan', true);
            setPropertyFromConfig(this, config, 'headers', true);
            setPropertyFromConfig(this, config, 'rowSpan', true);

        }

        //#endregion Base Class Overrides
	}

	//#endregion TableHeaderCellElement

	//#region TableRowElement

	/**
	* The HTML Table Row Element (<tr>) defines a row of cells in a table. Those can be a mix of <td> and <th> elements [MDN].
	*/
	export class TableRowElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new TableRowElement'.
        */
        constructor(config: ITableRowElementConfig) {
			super('tr', config)
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
            var config = this.getConfig<ITableRowElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion TableRowElement

	//#region TextAreaElement

	/**
	* The HTML <textarea> element represents a multi-line plain-text editing control [MDN].
	*/
	export class TextAreaElement extends HtmlElementContainer {

		//#region Fields

		private _autoFocusProperty: b.PropertyUpdate<boolean>;
		private _columnsProperty: b.PropertyUpdate<number>;
		private _disabledProperty: b.PropertyUpdate<boolean>;
		private _formPropertyID: string;
		private _formProperty: FormElement;
		private _maxLengthProperty: b.PropertyUpdate<number>;
		private _nameProperty: b.PropertyUpdate<string>;
		private _placeHolderProperty: b.PropertyUpdate<string>;
		private _readOnlyProperty: b.PropertyUpdate<boolean>;
		private _requiredProperty: b.PropertyUpdate<boolean>;
		private _rowsProperty: b.PropertyUpdate<number>;
		private _selectionEndProperty: b.PropertyUpdate<number>;
		private _selectionStartProperty: b.PropertyUpdate<number>;
		private _wrapProperty: b.PropertyUpdate<string>;
		private _changeEvent: HtmlElementEvent<Elements.TextAreaElement, Event>;
		private _inputEvent: HtmlElementEvent<Elements.TextAreaElement, Event>;

		//#endregion Fields

		//#region Properties

		//#region autoFocusProperty

		/**
		* This Boolean attribute lets you specify that a form control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form-associated element in a document can have this attribute specified [MDN].
		*/
		get autoFocusProperty(): b.PropertyUpdate<boolean> {
			if(!this._autoFocusProperty)
				initializeProperty(this, 'autoFocus', 'autofocus');
			return this._autoFocusProperty;
		}

		//#endregion autoFocusProperty

		//#region autoFocus

		/**
		* This Boolean attribute lets you specify that a form control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form-associated element in a document can have this attribute specified [MDN].
		*/
		get autoFocus(): boolean {
			return this.autoFocusProperty.value;
		}

		set autoFocus(value: boolean) {
			this.autoFocusProperty.value = value;
		}

		//#endregion autoFocus

		//#region columnsProperty

		/**
		* The visible width of the text control, in average character widths. If it is specified, it must be a positive integer. If it is not specified, the default value is 20 (HTML5) [MDN].
		*/
		get columnsProperty(): b.PropertyUpdate<number> {
			if(!this._columnsProperty)
				initializeProperty(this, 'columns', 'cols');
			return this._columnsProperty;
		}

		//#endregion columnsProperty

		//#region columns

		/**
		* The visible width of the text control, in average character widths. If it is specified, it must be a positive integer. If it is not specified, the default value is 20 (HTML5) [MDN].
		*/
		get columns(): number {
			return this.columnsProperty.value;
		}

		set columns(value: number) {
			this.columnsProperty.value = value;
		}

		//#endregion columns

		//#region disabledProperty

		/**
		* This Boolean attribute indicates that the user cannot interact with the control. (If this attribute is not specified, the control inherits its setting from the containing element, for example <fieldset>; if there is no containing element with the disabled attribute set, then the control is enabled.) [MDN].
		*/
		get disabledProperty(): b.PropertyUpdate<boolean> {
			if(!this._disabledProperty)
				initializeProperty(this, 'disabled', 'disabled');
			return this._disabledProperty;
		}

		//#endregion disabledProperty

		//#region disabled

		/**
		* This Boolean attribute indicates that the user cannot interact with the control. (If this attribute is not specified, the control inherits its setting from the containing element, for example <fieldset>; if there is no containing element with the disabled attribute set, then the control is enabled.) [MDN].
		*/
		get disabled(): boolean {
			return this.disabledProperty.value;
		}

		set disabled(value: boolean) {
			this.disabledProperty.value = value;
		}

		//#endregion disabled

		//#region form

		/**
		* The form element that the textarea element is associated with (its "form owner"). The value of the attribute must be an ID of a form element in the same document. If this attribute is not specified, the textarea element must be a descendant of a form element. This attribute enables you to place textarea elements anywhere within a document, not just as descendants of their form elements [MDN].
		*/
		get form(): FormElement {
			return getElementPropertyValue<FormElement>(this, 'form');
		}

		set form(value: FormElement) {
			setElementPropertyValue(this, 'form', value);
		}

		//#endregion form

		//#region maxLengthProperty

		/**
		* The maximum number of characters (Unicode code points) that the user can enter. If it is not specified, the user can enter an unlimited number of characters [MDN].
		*/
		get maxLengthProperty(): b.PropertyUpdate<number> {
			if(!this._maxLengthProperty)
				initializeProperty(this, 'maxLength', 'maxLength');
			return this._maxLengthProperty;
		}

		//#endregion maxLengthProperty

		//#region maxLength

		/**
		* The maximum number of characters (Unicode code points) that the user can enter. If it is not specified, the user can enter an unlimited number of characters [MDN].
		*/
		get maxLength(): number {
			return this.maxLengthProperty.value;
		}

		set maxLength(value: number) {
			this.maxLengthProperty.value = value;
		}

		//#endregion maxLength

		//#region nameProperty

		/**
		* The name of the control [MDN].
		*/
		get nameProperty(): b.PropertyUpdate<string> {
			if(!this._nameProperty)
				initializeProperty(this, 'name', 'name');
			return this._nameProperty;
		}

		//#endregion nameProperty

		//#region name

		/**
		* The name of the control [MDN].
		*/
		get name(): string {
			return this.nameProperty.value;
		}

		set name(value: string) {
			this.nameProperty.value = value;
		}

		//#endregion name

		//#region placeHolderProperty

		/**
		* A hint to the user of what can be entered in the control. The placeholder text must not contain carriage returns or line-feeds [MDN].
		*/
		get placeHolderProperty(): b.PropertyUpdate<string> {
			if(!this._placeHolderProperty)
				initializeProperty(this, 'placeHolder', 'placeholder');
			return this._placeHolderProperty;
		}

		//#endregion placeHolderProperty

		//#region placeHolder

		/**
		* A hint to the user of what can be entered in the control. The placeholder text must not contain carriage returns or line-feeds [MDN].
		*/
		get placeHolder(): string {
			return this.placeHolderProperty.value;
		}

		set placeHolder(value: string) {
			this.placeHolderProperty.value = value;
		}

		//#endregion placeHolder

		//#region readOnlyProperty

		/**
		* This Boolean attribute indicates that the user cannot modify the value of the control. Unlike the disabled attribute, the readonly attribute does not prevent the user from clicking or selecting in the control. The value of a read-only control is still submitted with the form [MDN].
		*/
		get readOnlyProperty(): b.PropertyUpdate<boolean> {
			if(!this._readOnlyProperty)
				initializeProperty(this, 'readOnly', 'readOnly');
			return this._readOnlyProperty;
		}

		//#endregion readOnlyProperty

		//#region readOnly

		/**
		* This Boolean attribute indicates that the user cannot modify the value of the control. Unlike the disabled attribute, the readonly attribute does not prevent the user from clicking or selecting in the control. The value of a read-only control is still submitted with the form [MDN].
		*/
		get readOnly(): boolean {
			return this.readOnlyProperty.value;
		}

		set readOnly(value: boolean) {
			this.readOnlyProperty.value = value;
		}

		//#endregion readOnly

		//#region requiredProperty

		/**
		* This attribute specifies that the user must fill in a value before submitting a form [MDN].
		*/
		get requiredProperty(): b.PropertyUpdate<boolean> {
			if(!this._requiredProperty)
				initializeProperty(this, 'required', 'required');
			return this._requiredProperty;
		}

		//#endregion requiredProperty

		//#region required

		/**
		* This attribute specifies that the user must fill in a value before submitting a form [MDN].
		*/
		get required(): boolean {
			return this.requiredProperty.value;
		}

		set required(value: boolean) {
			this.requiredProperty.value = value;
		}

		//#endregion required

		//#region rowsProperty

		/**
		* The number of visible text lines for the control [MDN].
		*/
		get rowsProperty(): b.PropertyUpdate<number> {
			if(!this._rowsProperty)
				initializeProperty(this, 'rows', 'rows');
			return this._rowsProperty;
		}

		//#endregion rowsProperty

		//#region rows

		/**
		* The number of visible text lines for the control [MDN].
		*/
		get rows(): number {
			return this.rowsProperty.value;
		}

		set rows(value: number) {
			this.rowsProperty.value = value;
		}

		//#endregion rows

		//#region selectionEndProperty

		/**
		* The index to the last character in the current selection [MDN].
		*/
		get selectionEndProperty(): b.PropertyUpdate<number> {
			if(!this._selectionEndProperty)
				initializeProperty(this, 'selectionEnd', 'selectionEnd');
			return this._selectionEndProperty;
		}

		//#endregion selectionEndProperty

		//#region selectionEnd

		/**
		* The index to the last character in the current selection [MDN].
		*/
		get selectionEnd(): number {
			return this.selectionEndProperty.value;
		}

		set selectionEnd(value: number) {
			this.selectionEndProperty.value = value;
		}

		//#endregion selectionEnd

		//#region selectionStartProperty

		/**
		* The index to the first character in the current selection [MDN].
		*/
		get selectionStartProperty(): b.PropertyUpdate<number> {
			if(!this._selectionStartProperty)
				initializeProperty(this, 'selectionStart', 'selectionStart');
			return this._selectionStartProperty;
		}

		//#endregion selectionStartProperty

		//#region selectionStart

		/**
		* The index to the first character in the current selection [MDN].
		*/
		get selectionStart(): number {
			return this.selectionStartProperty.value;
		}

		set selectionStart(value: number) {
			this.selectionStartProperty.value = value;
		}

		//#endregion selectionStart

		//#region wrapProperty

		/**
		* Html.TextAreaWrap enumerates the values of this property.
		* Indicates how the control wraps text. Possible values are:  hard: The browser automatically inserts line breaks (CR+LF) so that each line has no more than the width of the control; the cols attribute must be specified. soft: The browser ensures that all line breaks in the value consist of a CR+LF pair, but does not insert any additional line breaks. If this attribute is not specified, soft is its default value [MDN].
		*/
		get wrapProperty(): b.PropertyUpdate<string> {
			if(!this._wrapProperty)
				initializeProperty(this, 'wrap', 'wrap');
			return this._wrapProperty;
		}

		//#endregion wrapProperty

		//#region wrap

		/**
		* Html.TextAreaWrap enumerates the values of this property.
		* Indicates how the control wraps text. Possible values are:  hard: The browser automatically inserts line breaks (CR+LF) so that each line has no more than the width of the control; the cols attribute must be specified. soft: The browser ensures that all line breaks in the value consist of a CR+LF pair, but does not insert any additional line breaks. If this attribute is not specified, soft is its default value [MDN].
		*/
		get wrap(): string {
			return this.wrapProperty.value;
		}

		set wrap(value: string) {
			this.wrapProperty.value = value;
		}

		//#endregion wrap

		//#region changeEvent

		/**
		* The changeEvent event is executed when an element loses focus and its value changed since gaining focus [MDN].
		* Specifications: DOM L2, HTML5
		* DOM Event Name: change
		*/
		get changeEvent(): HtmlElementEvent<Elements.TextAreaElement, Event> {
			if(!this._changeEvent)
				this._changeEvent = new HtmlElementEvent<Elements.TextAreaElement, Event>('change', 'Event', this);

			return this._changeEvent;
		}

		//#endregion changeEvent

		//#region inputEvent

		/**
		* The inputEvent event is executed when the value of an element changes or the content of an element with the attribute contenteditable is modified [MDN].
		* Specification: HTML5
		* DOM Event Name: input
		*/
		get inputEvent(): HtmlElementEvent<Elements.TextAreaElement, Event> {
			if(!this._inputEvent)
				this._inputEvent = new HtmlElementEvent<Elements.TextAreaElement, Event>('input', 'Event', this);

			return this._inputEvent;
		}

		//#endregion inputEvent

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new TextAreaElement'.
        */
        constructor(config: ITextAreaElementConfig) {
			super('textarea', config)
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
            var config = this.getConfig<ITextAreaElementConfig>();
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

			if(config.changeHandler)
				this.changeEvent.subscribe(config.changeHandler);

			if(config.inputHandler)
				this.inputEvent.subscribe(config.inputHandler);

        }

        //#endregion Base Class Overrides
	}

	//#endregion TextAreaElement

	//#region TitleElement

	/**
	* The HTML Title Element (<title>) defines the title of the document, shown in a browser's title bar or on the page's tab. It can only contain text and any contained tags are not interpreted [MDN].
	*/
	export class TitleElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new TitleElement'.
        */
        constructor(config: ITitleElementConfig) {
			super('title', config)
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
            var config = this.getConfig<ITitleElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion TitleElement

	//#region TrackElement

	/**
	* The track element is used as a child of the media elementsâ€”<audio> and <video>â€”and does not represent anything on its own. It lets you specify timed text tracks (or time-based data) [MDN].
	*/
	export class TrackElement extends HtmlElementContainer {

		//#region Fields

		private _defaultProperty: b.PropertyUpdate<boolean>;
		private _kindProperty: b.PropertyUpdate<string>;
		private _labelProperty: b.PropertyUpdate<string>;
		private _sourceProperty: b.PropertyUpdate<string>;
		private _sourceLanguageProperty: b.PropertyUpdate<string>;

		//#endregion Fields

		//#region Properties

		//#region defaultProperty

		/**
		* This attribute indicates that the track should be enabled unless the user's preferences indicate that another track is more appropriate. This may only be used on one track element per media element [MDN].
		*/
		get defaultProperty(): b.PropertyUpdate<boolean> {
			if(!this._defaultProperty)
				initializeProperty(this, 'default', 'default');
			return this._defaultProperty;
		}

		//#endregion defaultProperty

		//#region default

		/**
		* This attribute indicates that the track should be enabled unless the user's preferences indicate that another track is more appropriate. This may only be used on one track element per media element [MDN].
		*/
		get default(): boolean {
			return this.defaultProperty.value;
		}

		set default(value: boolean) {
			this.defaultProperty.value = value;
		}

		//#endregion default

		//#region kindProperty

		/**
		* Html.TrackKind enumerates the values of this property.
		* The following keywords are allowed:  subtitles, captions, descriptions, chapters, metadata. If omitted the default kind is subtitles [MDN].
		*/
		get kindProperty(): b.PropertyUpdate<string> {
			if(!this._kindProperty)
				initializeProperty(this, 'kind', 'kind');
			return this._kindProperty;
		}

		//#endregion kindProperty

		//#region kind

		/**
		* Html.TrackKind enumerates the values of this property.
		* The following keywords are allowed:  subtitles, captions, descriptions, chapters, metadata. If omitted the default kind is subtitles [MDN].
		*/
		get kind(): string {
			return this.kindProperty.value;
		}

		set kind(value: string) {
			this.kindProperty.value = value;
		}

		//#endregion kind

		//#region labelProperty

		/**
		* A user-readable title of the text track which is used by the browser when listing available text tracks [MDN].
		*/
		get labelProperty(): b.PropertyUpdate<string> {
			if(!this._labelProperty)
				initializeProperty(this, 'label', 'label');
			return this._labelProperty;
		}

		//#endregion labelProperty

		//#region label

		/**
		* A user-readable title of the text track which is used by the browser when listing available text tracks [MDN].
		*/
		get label(): string {
			return this.labelProperty.value;
		}

		set label(value: string) {
			this.labelProperty.value = value;
		}

		//#endregion label

		//#region sourceProperty

		/**
		* Address of the track. Must be a valid URL. This attribute must be defined [MDN].
		*/
		get sourceProperty(): b.PropertyUpdate<string> {
			if(!this._sourceProperty)
				initializeProperty(this, 'source', 'src');
			return this._sourceProperty;
		}

		//#endregion sourceProperty

		//#region source

		/**
		* Address of the track. Must be a valid URL. This attribute must be defined [MDN].
		*/
		get source(): string {
			return this.sourceProperty.value;
		}

		set source(value: string) {
			this.sourceProperty.value = value;
		}

		//#endregion source

		//#region sourceLanguageProperty

		/**
		* Language of the track text data. It must be a valid BCP 47 language tag. If the kind attribute is set to subtitles, then srclang must be defined [MDN].
		*/
		get sourceLanguageProperty(): b.PropertyUpdate<string> {
			if(!this._sourceLanguageProperty)
				initializeProperty(this, 'sourceLanguage', 'srclang');
			return this._sourceLanguageProperty;
		}

		//#endregion sourceLanguageProperty

		//#region sourceLanguage

		/**
		* Language of the track text data. It must be a valid BCP 47 language tag. If the kind attribute is set to subtitles, then srclang must be defined [MDN].
		*/
		get sourceLanguage(): string {
			return this.sourceLanguageProperty.value;
		}

		set sourceLanguage(value: string) {
			this.sourceLanguageProperty.value = value;
		}

		//#endregion sourceLanguage

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new TrackElement'.
        */
        constructor(config: ITrackElementConfig) {
			super('track', config)
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
            var config = this.getConfig<ITrackElementConfig>();
            setPropertyFromConfig(this, config, 'default', true);
            setPropertyFromConfig(this, config, 'kind', true);
            setPropertyFromConfig(this, config, 'label', true);
            setPropertyFromConfig(this, config, 'source', true);
            setPropertyFromConfig(this, config, 'sourceLanguage', true);

        }

        //#endregion Base Class Overrides
	}

	//#endregion TrackElement

	//#region UnderlineElement

	/**
	* The HTML Underline Element (<u>) renders text with an underline, a line under the baseline of its content [MDN].
	*/
	export class UnderlineElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new UnderlineElement'.
        */
        constructor(config: IUnderlineElementConfig) {
			super('u', config)
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
            var config = this.getConfig<IUnderlineElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion UnderlineElement

	//#region UnorderedListElement

	/**
	* The HTML unordered list element (<ul>) represents an unordered list of items, namely a collection of items that do not have a numerical ordering, and their order in the list is meaningless. Typically, unordered-list items are displayed with a bullet, which can be of several forms, like a dot, a circle or a squared. The bullet style is not defined in the HTML description of the page, but in its associated CSS, using the list-style-type property [MDN].
	*/
	export class UnorderedListElement extends HtmlElementContainer {

		//#region Fields

		private _compactProperty: b.PropertyUpdate<boolean>;
		private _typeProperty: b.PropertyUpdate<string>;

		//#endregion Fields

		//#region Properties

		//#region compactProperty

		/**
		* This Boolean attribute hints that the list should be rendered in a compact style. The interpretation of this attribute depends on the user agent and it doesn't work in all browsers.  Usage note: Do not use this attribute, as it has been deprecated: the <ul> element should be styled using CSS. To give a similar effect as the compact attribute, the CSS property line-height can be used with a value of 80% [MDN].
		*/
		get compactProperty(): b.PropertyUpdate<boolean> {
			if(!this._compactProperty)
				initializeProperty(this, 'compact', 'compact');
			return this._compactProperty;
		}

		//#endregion compactProperty

		//#region compact

		/**
		* This Boolean attribute hints that the list should be rendered in a compact style. The interpretation of this attribute depends on the user agent and it doesn't work in all browsers.  Usage note: Do not use this attribute, as it has been deprecated: the <ul> element should be styled using CSS. To give a similar effect as the compact attribute, the CSS property line-height can be used with a value of 80% [MDN].
		*/
		get compact(): boolean {
			return this.compactProperty.value;
		}

		set compact(value: boolean) {
			this.compactProperty.value = value;
		}

		//#endregion compact

		//#region typeProperty

		/**
		* Html.UnorderedListType enumerates the values of this property.
		* Used to set the bullet style for the list. The values defined under HTML3.2 and the transitional version of HTML 4.0/4.01 are:  circle, disc, and square. A fourth bullet type has been defined in the WebTV interface, but not all browsers support it: triangle. If not present and if no CSS list-style-type property does apply to the element, the user agent decide to use a kind of bullets depending on the nesting level of the list.  
		* Note: Do not use this attribute, as it has been deprecated; use the CSS list-style-type property instead [MDN].
		*/
		get typeProperty(): b.PropertyUpdate<string> {
			if(!this._typeProperty)
				initializeProperty(this, 'type', 'type');
			return this._typeProperty;
		}

		//#endregion typeProperty

		//#region type

		/**
		* Html.UnorderedListType enumerates the values of this property.
		* Used to set the bullet style for the list. The values defined under HTML3.2 and the transitional version of HTML 4.0/4.01 are:  circle, disc, and square. A fourth bullet type has been defined in the WebTV interface, but not all browsers support it: triangle. If not present and if no CSS list-style-type property does apply to the element, the user agent decide to use a kind of bullets depending on the nesting level of the list.  
		* Note: Do not use this attribute, as it has been deprecated; use the CSS list-style-type property instead [MDN].
		*/
		get type(): string {
			return this.typeProperty.value;
		}

		set type(value: string) {
			this.typeProperty.value = value;
		}

		//#endregion type

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new UnorderedListElement'.
        */
        constructor(config: IUnorderedListElementConfig) {
			super('ul', config)
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
            var config = this.getConfig<IUnorderedListElementConfig>();
            setPropertyFromConfig(this, config, 'compact', true);
            setPropertyFromConfig(this, config, 'type', true);

        }

        //#endregion Base Class Overrides
	}

	//#endregion UnorderedListElement

	//#region VariableElement

	/**
	* The HTML Variable Element (<var>) represents a variable in a mathematical expression or a programming context [MDN].
	*/
	export class VariableElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new VariableElement'.
        */
        constructor(config: IVariableElementConfig) {
			super('var', config)
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
            var config = this.getConfig<IVariableElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion VariableElement

	//#region VideoElement

	/**
	* The HTML <video> element is used to embed video content in an HTML or XHTML document [MDN].
	*/
	export class VideoElement extends HtmlElementContainer {

		//#region Fields

		private _autoPlayProperty: b.PropertyUpdate<boolean>;
		private _bufferedProperty: b.PropertyUpdate<TimeRanges>;
		private _controlsProperty: b.PropertyUpdate<boolean>;
		private _heightProperty: b.PropertyUpdate<number>;
		private _loopProperty: b.PropertyUpdate<boolean>;
		private _mutedProperty: b.PropertyUpdate<boolean>;
		private _playedProperty: b.PropertyUpdate<TimeRanges>;
		private _preloadProperty: b.PropertyUpdate<string>;
		private _posterProperty: b.PropertyUpdate<string>;
		private _sourceProperty: b.PropertyUpdate<string>;
		private _widthProperty: b.PropertyUpdate<number>;
		private _mediaCanPlayEvent: HtmlElementEvent<Elements.VideoElement, Event>;
		private _mediaCanPlayThroughEvent: HtmlElementEvent<Elements.VideoElement, Event>;
		private _mediaDurationChangeEvent: HtmlElementEvent<Elements.VideoElement, Event>;
		private _mediaEmptiedEvent: HtmlElementEvent<Elements.VideoElement, Event>;
		private _mediaEndedEvent: HtmlElementEvent<Elements.VideoElement, Event>;
		private _mediaLoadedDataEvent: HtmlElementEvent<Elements.VideoElement, Event>;
		private _mediaLoadedMetadataEvent: HtmlElementEvent<Elements.VideoElement, Event>;
		private _mediaPauseEvent: HtmlElementEvent<Elements.VideoElement, Event>;
		private _mediaPlayEvent: HtmlElementEvent<Elements.VideoElement, Event>;
		private _mediaPlayingEvent: HtmlElementEvent<Elements.VideoElement, Event>;
		private _mediaRateChangeEvent: HtmlElementEvent<Elements.VideoElement, Event>;
		private _mediaSeekedEvent: HtmlElementEvent<Elements.VideoElement, Event>;
		private _mediaSeekingEvent: HtmlElementEvent<Elements.VideoElement, Event>;
		private _mediaStalledEvent: HtmlElementEvent<Elements.VideoElement, Event>;
		private _mediaSuspendEvent: HtmlElementEvent<Elements.VideoElement, Event>;
		private _mediaTimeUpdateEvent: HtmlElementEvent<Elements.VideoElement, Event>;
		private _mediaVolumeChangeEvent: HtmlElementEvent<Elements.VideoElement, Event>;
		private _mediaWaitingEvent: HtmlElementEvent<Elements.VideoElement, Event>;

		//#endregion Fields

		//#region Properties

		//#region autoPlayProperty

		/**
		* A Boolean attribute; if specified, the video will automatically begin to play back as soon as it can do so without stopping to finish loading the data [MDN].
		*/
		get autoPlayProperty(): b.PropertyUpdate<boolean> {
			if(!this._autoPlayProperty)
				initializeProperty(this, 'autoPlay', 'autoplay');
			return this._autoPlayProperty;
		}

		//#endregion autoPlayProperty

		//#region autoPlay

		/**
		* A Boolean attribute; if specified, the video will automatically begin to play back as soon as it can do so without stopping to finish loading the data [MDN].
		*/
		get autoPlay(): boolean {
			return this.autoPlayProperty.value;
		}

		set autoPlay(value: boolean) {
			this.autoPlayProperty.value = value;
		}

		//#endregion autoPlay

		//#region bufferedProperty

		/**
		* An attribute you can read to determine which time ranges of the media have been buffered. This attribute contains a TimeRanges object [MDN].
		*/
		get bufferedProperty(): b.PropertyUpdate<TimeRanges> {
			if(!this._bufferedProperty)
				initializeProperty(this, 'buffered', 'buffered');
			return this._bufferedProperty;
		}

		//#endregion bufferedProperty

		//#region buffered

		/**
		* An attribute you can read to determine which time ranges of the media have been buffered. This attribute contains a TimeRanges object [MDN].
		*/
		get buffered(): TimeRanges {
			return this.bufferedProperty.value;
		}

		set buffered(value: TimeRanges) {
			this.bufferedProperty.value = value;
		}

		//#endregion buffered

		//#region controlsProperty

		/**
		* If this attribute is present, controls are included in the video for adjusting volume, seeking, pausing and resuming playback [MDN].
		*/
		get controlsProperty(): b.PropertyUpdate<boolean> {
			if(!this._controlsProperty)
				initializeProperty(this, 'controls', 'controls');
			return this._controlsProperty;
		}

		//#endregion controlsProperty

		//#region controls

		/**
		* If this attribute is present, controls are included in the video for adjusting volume, seeking, pausing and resuming playback [MDN].
		*/
		get controls(): boolean {
			return this.controlsProperty.value;
		}

		set controls(value: boolean) {
			this.controlsProperty.value = value;
		}

		//#endregion controls

		//#region heightProperty

		/**
		* The height of the video's display area, in CSS pixels [MDN].
		*/
		get heightProperty(): b.PropertyUpdate<number> {
			if(!this._heightProperty)
				initializeProperty(this, 'height', 'height');
			return this._heightProperty;
		}

		//#endregion heightProperty

		//#region height

		/**
		* The height of the video's display area, in CSS pixels [MDN].
		*/
		get height(): number {
			return this.heightProperty.value;
		}

		set height(value: number) {
			this.heightProperty.value = value;
		}

		//#endregion height

		//#region loopProperty

		/**
		* Specifies that the video should repeat upon reaching the end [MDN].
		*/
		get loopProperty(): b.PropertyUpdate<boolean> {
			if(!this._loopProperty)
				initializeProperty(this, 'loop', 'loop');
			return this._loopProperty;
		}

		//#endregion loopProperty

		//#region loop

		/**
		* Specifies that the video should repeat upon reaching the end [MDN].
		*/
		get loop(): boolean {
			return this.loopProperty.value;
		}

		set loop(value: boolean) {
			this.loopProperty.value = value;
		}

		//#endregion loop

		//#region mutedProperty

		/**
		* A Boolean attribute which indicates the default setting of the audio contained in the video. If set, the audio will be initially silenced. Its default value is false, meaning that the audio will be played when the video is played [MDN].
		*/
		get mutedProperty(): b.PropertyUpdate<boolean> {
			if(!this._mutedProperty)
				initializeProperty(this, 'muted', 'muted');
			return this._mutedProperty;
		}

		//#endregion mutedProperty

		//#region muted

		/**
		* A Boolean attribute which indicates the default setting of the audio contained in the video. If set, the audio will be initially silenced. Its default value is false, meaning that the audio will be played when the video is played [MDN].
		*/
		get muted(): boolean {
			return this.mutedProperty.value;
		}

		set muted(value: boolean) {
			this.mutedProperty.value = value;
		}

		//#endregion muted

		//#region playedProperty

		/**
		* Specifies the ranges of the video that have been played [MDN].
		*/
		get playedProperty(): b.PropertyUpdate<TimeRanges> {
			if(!this._playedProperty)
				initializeProperty(this, 'played', 'played');
			return this._playedProperty;
		}

		//#endregion playedProperty

		//#region played

		/**
		* Specifies the ranges of the video that have been played [MDN].
		*/
		get played(): TimeRanges {
			return this.playedProperty.value;
		}

		set played(value: TimeRanges) {
			this.playedProperty.value = value;
		}

		//#endregion played

		//#region preloadProperty

		/**
		* Html.VideoPreload enumerates the values of this property.
		* This enumerated attribute is intended to provide a hint to the browser about what the author thinks will lead to the best user experience. It may have one of the following values:  none: hints that either the author thinks that the user won't need to consult that video or that the server wants to minimize its traffic; in others terms this hint indicates that the video should not be cached. metadata: hints that though the author thinks that the user won't need to consult that video, fetching the metadata (e.g. length) is reasonable. auto: hints that the user needs have priority; in others terms this hint indicated that, if needed, the whole video could be downloaded, even if the user is not expected to use it. the empty string: which is a synonym of the auto value. If not set, its default value is browser-defined (i.e. each browser can choose its own default value), though the spec advises it to be set to metadata.  Usage notes:  The autoplay attribute has precedence over this one as if one wants to automatically play a video, the browser will obviously need to download it. Setting both the autoplay and the preload attributes is allowed by the specification. The browser is not forced by the specification to follow the value of this attribute; it is a mere hint [MDN].
		*/
		get preloadProperty(): b.PropertyUpdate<string> {
			if(!this._preloadProperty)
				initializeProperty(this, 'preload', 'preload');
			return this._preloadProperty;
		}

		//#endregion preloadProperty

		//#region preload

		/**
		* Html.VideoPreload enumerates the values of this property.
		* This enumerated attribute is intended to provide a hint to the browser about what the author thinks will lead to the best user experience. It may have one of the following values:  none: hints that either the author thinks that the user won't need to consult that video or that the server wants to minimize its traffic; in others terms this hint indicates that the video should not be cached. metadata: hints that though the author thinks that the user won't need to consult that video, fetching the metadata (e.g. length) is reasonable. auto: hints that the user needs have priority; in others terms this hint indicated that, if needed, the whole video could be downloaded, even if the user is not expected to use it. the empty string: which is a synonym of the auto value. If not set, its default value is browser-defined (i.e. each browser can choose its own default value), though the spec advises it to be set to metadata.  Usage notes:  The autoplay attribute has precedence over this one as if one wants to automatically play a video, the browser will obviously need to download it. Setting both the autoplay and the preload attributes is allowed by the specification. The browser is not forced by the specification to follow the value of this attribute; it is a mere hint [MDN].
		*/
		get preload(): string {
			return this.preloadProperty.value;
		}

		set preload(value: string) {
			this.preloadProperty.value = value;
		}

		//#endregion preload

		//#region posterProperty

		/**
		* A URL indicating a poster frame to show until the user plays or seeks. If this attribute isn't specified, nothing is displayed until the first frame is available; then the first frame is displayed as the poster frame [MDN].
		*/
		get posterProperty(): b.PropertyUpdate<string> {
			if(!this._posterProperty)
				initializeProperty(this, 'poster', 'poster');
			return this._posterProperty;
		}

		//#endregion posterProperty

		//#region poster

		/**
		* A URL indicating a poster frame to show until the user plays or seeks. If this attribute isn't specified, nothing is displayed until the first frame is available; then the first frame is displayed as the poster frame [MDN].
		*/
		get poster(): string {
			return this.posterProperty.value;
		}

		set poster(value: string) {
			this.posterProperty.value = value;
		}

		//#endregion poster

		//#region sourceProperty

		/**
		* The URL of the video to embed. This is optional; you may instead use the <source> element within the video block to specify the video to embed [MDN].
		*/
		get sourceProperty(): b.PropertyUpdate<string> {
			if(!this._sourceProperty)
				initializeProperty(this, 'source', 'src');
			return this._sourceProperty;
		}

		//#endregion sourceProperty

		//#region source

		/**
		* The URL of the video to embed. This is optional; you may instead use the <source> element within the video block to specify the video to embed [MDN].
		*/
		get source(): string {
			return this.sourceProperty.value;
		}

		set source(value: string) {
			this.sourceProperty.value = value;
		}

		//#endregion source

		//#region widthProperty

		/**
		* The width of the video's display area, in CSS pixels [MDN].
		*/
		get widthProperty(): b.PropertyUpdate<number> {
			if(!this._widthProperty)
				initializeProperty(this, 'width', 'width');
			return this._widthProperty;
		}

		//#endregion widthProperty

		//#region width

		/**
		* The width of the video's display area, in CSS pixels [MDN].
		*/
		get width(): number {
			return this.widthProperty.value;
		}

		set width(value: number) {
			this.widthProperty.value = value;
		}

		//#endregion width

		//#region mediaCanPlayEvent

		/**
		* The mediaCanPlayEvent event is executed when the user agent can play the media, but estimates that not enough data has been loaded to play the media up to its end without having to stop for further buffering of content [MDN].
		* Specification: HTML5 media
		* DOM Event Name: canplay
		*/
		get mediaCanPlayEvent(): HtmlElementEvent<Elements.VideoElement, Event> {
			if(!this._mediaCanPlayEvent)
				this._mediaCanPlayEvent = new HtmlElementEvent<Elements.VideoElement, Event>('canplay', 'Event', this);

			return this._mediaCanPlayEvent;
		}

		//#endregion mediaCanPlayEvent

		//#region mediaCanPlayThroughEvent

		/**
		* The mediaCanPlayThroughEvent event is executed when the user agent can play the media, and estimates that enough data has been loaded to play the media up to its end without having to stop for further buffering of content [MDN].
		* Specification: HTML5 media
		* DOM Event Name: canplaythrough
		*/
		get mediaCanPlayThroughEvent(): HtmlElementEvent<Elements.VideoElement, Event> {
			if(!this._mediaCanPlayThroughEvent)
				this._mediaCanPlayThroughEvent = new HtmlElementEvent<Elements.VideoElement, Event>('canplaythrough', 'Event', this);

			return this._mediaCanPlayThroughEvent;
		}

		//#endregion mediaCanPlayThroughEvent

		//#region mediaDurationChangeEvent

		/**
		* The mediaDurationChangeEvent event is executed when the duration attribute has been updated [MDN].
		* Specification: HTML5 media
		* DOM Event Name: durationchange
		*/
		get mediaDurationChangeEvent(): HtmlElementEvent<Elements.VideoElement, Event> {
			if(!this._mediaDurationChangeEvent)
				this._mediaDurationChangeEvent = new HtmlElementEvent<Elements.VideoElement, Event>('durationchange', 'Event', this);

			return this._mediaDurationChangeEvent;
		}

		//#endregion mediaDurationChangeEvent

		//#region mediaEmptiedEvent

		/**
		* The mediaEmptiedEvent event is executed when the media has become empty; for example, this event is sent if the media has already been loaded (or partially loaded), and the load() method is called to reload it [MDN].
		* Specification: HTML5 media
		* DOM Event Name: emptied
		*/
		get mediaEmptiedEvent(): HtmlElementEvent<Elements.VideoElement, Event> {
			if(!this._mediaEmptiedEvent)
				this._mediaEmptiedEvent = new HtmlElementEvent<Elements.VideoElement, Event>('emptied', 'Event', this);

			return this._mediaEmptiedEvent;
		}

		//#endregion mediaEmptiedEvent

		//#region mediaEndedEvent

		/**
		* The mediaEndedEvent event is executed when playback has stopped because the end of the media was reached [MDN].
		* Specification: HTML5 media
		* DOM Event Name: ended
		*/
		get mediaEndedEvent(): HtmlElementEvent<Elements.VideoElement, Event> {
			if(!this._mediaEndedEvent)
				this._mediaEndedEvent = new HtmlElementEvent<Elements.VideoElement, Event>('ended', 'Event', this);

			return this._mediaEndedEvent;
		}

		//#endregion mediaEndedEvent

		//#region mediaLoadedDataEvent

		/**
		* The mediaLoadedDataEvent event is executed when the first frame of the media has finished loading [MDN].
		* Specification: HTML5 media
		* DOM Event Name: loadeddata
		*/
		get mediaLoadedDataEvent(): HtmlElementEvent<Elements.VideoElement, Event> {
			if(!this._mediaLoadedDataEvent)
				this._mediaLoadedDataEvent = new HtmlElementEvent<Elements.VideoElement, Event>('loadeddata', 'Event', this);

			return this._mediaLoadedDataEvent;
		}

		//#endregion mediaLoadedDataEvent

		//#region mediaLoadedMetadataEvent

		/**
		* The mediaLoadedMetadataEvent event is executed when the metadata has been loaded [MDN].
		* Specification: HTML5 media
		* DOM Event Name: loadedmetadata
		*/
		get mediaLoadedMetadataEvent(): HtmlElementEvent<Elements.VideoElement, Event> {
			if(!this._mediaLoadedMetadataEvent)
				this._mediaLoadedMetadataEvent = new HtmlElementEvent<Elements.VideoElement, Event>('loadedmetadata', 'Event', this);

			return this._mediaLoadedMetadataEvent;
		}

		//#endregion mediaLoadedMetadataEvent

		//#region mediaPauseEvent

		/**
		* The mediaPauseEvent event is executed when playback has been paused [MDN].
		* Specification: HTML5 media
		* DOM Event Name: pause
		*/
		get mediaPauseEvent(): HtmlElementEvent<Elements.VideoElement, Event> {
			if(!this._mediaPauseEvent)
				this._mediaPauseEvent = new HtmlElementEvent<Elements.VideoElement, Event>('pause', 'Event', this);

			return this._mediaPauseEvent;
		}

		//#endregion mediaPauseEvent

		//#region mediaPlayEvent

		/**
		* The mediaPlayEvent event is executed when playback has begun [MDN].
		* Specification: HTML5 media
		* DOM Event Name: play
		*/
		get mediaPlayEvent(): HtmlElementEvent<Elements.VideoElement, Event> {
			if(!this._mediaPlayEvent)
				this._mediaPlayEvent = new HtmlElementEvent<Elements.VideoElement, Event>('play', 'Event', this);

			return this._mediaPlayEvent;
		}

		//#endregion mediaPlayEvent

		//#region mediaPlayingEvent

		/**
		* The mediaPlayingEvent event is executed when playback is ready to start after having been paused or delayed due to lack of data [MDN].
		* Specification: HTML5 media
		* DOM Event Name: playing
		*/
		get mediaPlayingEvent(): HtmlElementEvent<Elements.VideoElement, Event> {
			if(!this._mediaPlayingEvent)
				this._mediaPlayingEvent = new HtmlElementEvent<Elements.VideoElement, Event>('playing', 'Event', this);

			return this._mediaPlayingEvent;
		}

		//#endregion mediaPlayingEvent

		//#region mediaRateChangeEvent

		/**
		* The mediaRateChangeEvent event is executed when the playback rate has changed [MDN].
		* Specification: HTML5 media
		* DOM Event Name: ratechange
		*/
		get mediaRateChangeEvent(): HtmlElementEvent<Elements.VideoElement, Event> {
			if(!this._mediaRateChangeEvent)
				this._mediaRateChangeEvent = new HtmlElementEvent<Elements.VideoElement, Event>('ratechange', 'Event', this);

			return this._mediaRateChangeEvent;
		}

		//#endregion mediaRateChangeEvent

		//#region mediaSeekedEvent

		/**
		* The mediaSeekedEvent event is executed when a seek operation completed [MDN].
		* Specification: HTML5 media
		* DOM Event Name: seeked
		*/
		get mediaSeekedEvent(): HtmlElementEvent<Elements.VideoElement, Event> {
			if(!this._mediaSeekedEvent)
				this._mediaSeekedEvent = new HtmlElementEvent<Elements.VideoElement, Event>('seeked', 'Event', this);

			return this._mediaSeekedEvent;
		}

		//#endregion mediaSeekedEvent

		//#region mediaSeekingEvent

		/**
		* The mediaSeekingEvent event is executed when a seek operation began [MDN].
		* Specification: HTML5 media
		* DOM Event Name: seeking
		*/
		get mediaSeekingEvent(): HtmlElementEvent<Elements.VideoElement, Event> {
			if(!this._mediaSeekingEvent)
				this._mediaSeekingEvent = new HtmlElementEvent<Elements.VideoElement, Event>('seeking', 'Event', this);

			return this._mediaSeekingEvent;
		}

		//#endregion mediaSeekingEvent

		//#region mediaStalledEvent

		/**
		* The mediaStalledEvent event is executed when the user agent is trying to fetch media data, but data is unexpectedly not forthcoming [MDN].
		* Specification: HTML5 media
		* DOM Event Name: stalled
		*/
		get mediaStalledEvent(): HtmlElementEvent<Elements.VideoElement, Event> {
			if(!this._mediaStalledEvent)
				this._mediaStalledEvent = new HtmlElementEvent<Elements.VideoElement, Event>('stalled', 'Event', this);

			return this._mediaStalledEvent;
		}

		//#endregion mediaStalledEvent

		//#region mediaSuspendEvent

		/**
		* The mediaSuspendEvent event is executed when media data loading has been suspended [MDN].
		* Specification: HTML5 media
		* DOM Event Name: suspend
		*/
		get mediaSuspendEvent(): HtmlElementEvent<Elements.VideoElement, Event> {
			if(!this._mediaSuspendEvent)
				this._mediaSuspendEvent = new HtmlElementEvent<Elements.VideoElement, Event>('suspend', 'Event', this);

			return this._mediaSuspendEvent;
		}

		//#endregion mediaSuspendEvent

		//#region mediaTimeUpdateEvent

		/**
		* The mediaTimeUpdateEvent event is executed when the time indicated by the currentTime attribute has been updated [MDN].
		* Specification: HTML5 media
		* DOM Event Name: timeupdate
		*/
		get mediaTimeUpdateEvent(): HtmlElementEvent<Elements.VideoElement, Event> {
			if(!this._mediaTimeUpdateEvent)
				this._mediaTimeUpdateEvent = new HtmlElementEvent<Elements.VideoElement, Event>('timeupdate', 'Event', this);

			return this._mediaTimeUpdateEvent;
		}

		//#endregion mediaTimeUpdateEvent

		//#region mediaVolumeChangeEvent

		/**
		* The mediaVolumeChangeEvent event is executed when the volume has changed [MDN].
		* Specification: HTML5 media
		* DOM Event Name: volumechange
		*/
		get mediaVolumeChangeEvent(): HtmlElementEvent<Elements.VideoElement, Event> {
			if(!this._mediaVolumeChangeEvent)
				this._mediaVolumeChangeEvent = new HtmlElementEvent<Elements.VideoElement, Event>('volumechange', 'Event', this);

			return this._mediaVolumeChangeEvent;
		}

		//#endregion mediaVolumeChangeEvent

		//#region mediaWaitingEvent

		/**
		* The mediaWaitingEvent event is executed when playback has stopped because of a temporary lack of data [MDN].
		* Specification: HTML5 media
		* DOM Event Name: waiting
		*/
		get mediaWaitingEvent(): HtmlElementEvent<Elements.VideoElement, Event> {
			if(!this._mediaWaitingEvent)
				this._mediaWaitingEvent = new HtmlElementEvent<Elements.VideoElement, Event>('waiting', 'Event', this);

			return this._mediaWaitingEvent;
		}

		//#endregion mediaWaitingEvent

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new VideoElement'.
        */
        constructor(config: IVideoElementConfig) {
			super('video', config)
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
            var config = this.getConfig<IVideoElementConfig>();
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

			if(config.mediaCanPlayHandler)
				this.mediaCanPlayEvent.subscribe(config.mediaCanPlayHandler);

			if(config.mediaCanPlayThroughHandler)
				this.mediaCanPlayThroughEvent.subscribe(config.mediaCanPlayThroughHandler);

			if(config.mediaDurationChangeHandler)
				this.mediaDurationChangeEvent.subscribe(config.mediaDurationChangeHandler);

			if(config.mediaEmptiedHandler)
				this.mediaEmptiedEvent.subscribe(config.mediaEmptiedHandler);

			if(config.mediaEndedHandler)
				this.mediaEndedEvent.subscribe(config.mediaEndedHandler);

			if(config.mediaLoadedDataHandler)
				this.mediaLoadedDataEvent.subscribe(config.mediaLoadedDataHandler);

			if(config.mediaLoadedMetadataHandler)
				this.mediaLoadedMetadataEvent.subscribe(config.mediaLoadedMetadataHandler);

			if(config.mediaPauseHandler)
				this.mediaPauseEvent.subscribe(config.mediaPauseHandler);

			if(config.mediaPlayHandler)
				this.mediaPlayEvent.subscribe(config.mediaPlayHandler);

			if(config.mediaPlayingHandler)
				this.mediaPlayingEvent.subscribe(config.mediaPlayingHandler);

			if(config.mediaRateChangeHandler)
				this.mediaRateChangeEvent.subscribe(config.mediaRateChangeHandler);

			if(config.mediaSeekedHandler)
				this.mediaSeekedEvent.subscribe(config.mediaSeekedHandler);

			if(config.mediaSeekingHandler)
				this.mediaSeekingEvent.subscribe(config.mediaSeekingHandler);

			if(config.mediaStalledHandler)
				this.mediaStalledEvent.subscribe(config.mediaStalledHandler);

			if(config.mediaSuspendHandler)
				this.mediaSuspendEvent.subscribe(config.mediaSuspendHandler);

			if(config.mediaTimeUpdateHandler)
				this.mediaTimeUpdateEvent.subscribe(config.mediaTimeUpdateHandler);

			if(config.mediaVolumeChangeHandler)
				this.mediaVolumeChangeEvent.subscribe(config.mediaVolumeChangeHandler);

			if(config.mediaWaitingHandler)
				this.mediaWaitingEvent.subscribe(config.mediaWaitingHandler);

        }

        //#endregion Base Class Overrides
	}

	//#endregion VideoElement

	//#region WordBreakOpportunityElement

	/**
	* The Word Break Opportunity (<wbr>) HTML element represents a position within text where the browser may optionally break a line, though its line-breaking rules would not otherwise create a break at that location [MDN].
	*/
	export class WordBreakOpportunityElement extends HtmlElementContainer {

		//#region Fields


		//#endregion Fields

		//#region Properties

		//#endregion Properties
        
        //#region Constructor

        /** 
        * Initializes a new WordBreakOpportunityElement'.
        */
        constructor(config: IWordBreakOpportunityElementConfig) {
			super('wbr', config)
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
            var config = this.getConfig<IWordBreakOpportunityElementConfig>();

        }

        //#endregion Base Class Overrides
	}

	//#endregion WordBreakOpportunityElement


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

    var contentMap =
        new Collections.Dictionary<string, string>(10)
			.add('accept-charset', 'acceptCharset')
			.add('longdesc', 'longDesc')
			.add('http-equiv', 'httpEquiv')
			.add('colspan', 'colSpan')
			.add('rowspan', 'rowSpan')
			.add('maxlength', 'maxLength')
			.add('readonly', 'readOnly');
    
    var constructorMap =
        new Collections.Dictionary<string, Function>(150)
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

    //#endregion Variables
}

//#endregion Elements

//#region Factory Methods

module Classical.Html {

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

	//#region abbr

	/**
	* The HTML <abbr> Element (or HTML Abbreviation Element) represents an abbreviation and optionally provides a full description for it. If present, the title attribute must contain this full description and nothing else [MDN].
	* @param [config] The configuration for the AbbreviationElement.
	* @returns a new AbbreviationElement.
	*/
	export function abbr(config?: IAbbreviationElementConfig): Elements.AbbreviationElement {
        return new Elements.AbbreviationElement(config);
    }

	//#endregion abbr

	//#region address

	/**
	* The HTML <address> Element may be used by authors to supply contact information for its nearest <article> or <body> ancestor; in the latter case, it applies to the whole document [MDN].
	* @param [config] The configuration for the AddressElement.
	* @returns a new AddressElement.
	*/
	export function address(config?: IAddressElementConfig): Elements.AddressElement {
        return new Elements.AddressElement(config);
    }

	//#endregion address

	//#region a

	/**
	* The HTML <a> Element (or the HTML Anchor Element) defines a hyperlink, the named target destination for a hyperlink, or both [MDN].
	* @param [config] The configuration for the AnchorElement.
	* @returns a new AnchorElement.
	*/
	export function a(config?: IAnchorElementConfig): Elements.AnchorElement {
        return new Elements.AnchorElement(config);
    }

	//#endregion a

	//#region area

	/**
	* The HTML <area> element defines a hot-spot region on an image, and optionally associates it with a hypertext link. This element is used only within a <map> element [MDN].
	* @param [config] The configuration for the AreaElement.
	* @returns a new AreaElement.
	*/
	export function area(config?: IAreaElementConfig): Elements.AreaElement {
        return new Elements.AreaElement(config);
    }

	//#endregion area

	//#region article

	/**
	* The HTML <article> Element represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable, e.g., in syndication. This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment, an interactive widget or gadget, or any other independent item of content [MDN].
	* @param [config] The configuration for the ArticleElement.
	* @returns a new ArticleElement.
	*/
	export function article(config?: IArticleElementConfig): Elements.ArticleElement {
        return new Elements.ArticleElement(config);
    }

	//#endregion article

	//#region aside

	/**
	* The HTML <aside> Element represents a section of a page that consists of content that is tangentially related to the content around it, which could be considered separate from that content. Such sections are often represented as sidebars or as inserts. They often contain side explanations, like a glossary definition; more loosely related stuff, like advertisements; the biography of the author; or in web-applications, profile information or related blog links [MDN].
	* @param [config] The configuration for the AsideElement.
	* @returns a new AsideElement.
	*/
	export function aside(config?: IAsideElementConfig): Elements.AsideElement {
        return new Elements.AsideElement(config);
    }

	//#endregion aside

	//#region audio

	/**
	* The HTML <audio> element is used to represent sound content in documents. Added as part of HTML5, it may contain several audio sources, represented using the src attribute or the <source> element; the browser will choose the most suitable one. Fallback content for browser not supporting the <audio> element can be added too [MDN].
	* @param [config] The configuration for the AudioElement.
	* @returns a new AudioElement.
	*/
	export function audio(config?: IAudioElementConfig): Elements.AudioElement {
        return new Elements.AudioElement(config);
    }

	//#endregion audio

	//#region base

	/**
	* The HTML <base> element specifies the base URL to use for all relative URLs contained within a document [MDN].
	* @param [config] The configuration for the BaseElement.
	* @returns a new BaseElement.
	*/
	export function base(config?: IBaseElementConfig): Elements.BaseElement {
        return new Elements.BaseElement(config);
    }

	//#endregion base

	//#region bdi

	/**
	* The HTML <bdi> Element (or Bi-Directional Isolation Element) isolates a span of text that might be formatted in a different direction from other text outside it [MDN].
	* @param [config] The configuration for the BidirectionalIsolationElement.
	* @returns a new BidirectionalIsolationElement.
	*/
	export function bdi(config?: IBidirectionalIsolationElementConfig): Elements.BidirectionalIsolationElement {
        return new Elements.BidirectionalIsolationElement(config);
    }

	//#endregion bdi

	//#region bdo

	/**
	* The HTML <bdo> Element (or HTML bidirectional override element) is used to override the current directionality of text. It causes the directionality of the characters to be ignored in favor of the specified directionality [MDN].
	* @param [config] The configuration for the BidirectionalOverrideElement.
	* @returns a new BidirectionalOverrideElement.
	*/
	export function bdo(config?: IBidirectionalOverrideElementConfig): Elements.BidirectionalOverrideElement {
        return new Elements.BidirectionalOverrideElement(config);
    }

	//#endregion bdo

	//#region blockquote

	/**
	* The HTML <blockquote> Element (or HTML Block Quotation Element) indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation (see Notes for how to change it). A URL for the source of the quotation may be given using the cite attribute, while a text representation of the source can be given using the <cite> element [MDN].
	* @param [config] The configuration for the BlockQuotationElement.
	* @returns a new BlockQuotationElement.
	*/
	export function blockquote(config?: IBlockQuotationElementConfig): Elements.BlockQuotationElement {
        return new Elements.BlockQuotationElement(config);
    }

	//#endregion blockquote

	//#region body

	/**
	* The HTML <body> element represents the content of an HTML document. There is only one <body> element in a document [MDN].
	* @param [config] The configuration for the BodyElement.
	* @returns a new BodyElement.
	*/
	export function body(config?: IBodyElementConfig): Elements.BodyElement {
        return new Elements.BodyElement(config);
    }

	//#endregion body

	//#region b

	/**
	* The HTML <b> Element represents a span of text stylistically different from normal text, without a conveying any special importance or relevance. It is typically used for keywords in a summary, product names in a review, or other spans of text whose typical presentation would be boldfaced. Another example of its use is to mark the lead sentence of each paragraph of an article [MDN].
	* @param [config] The configuration for the BoldElement.
	* @returns a new BoldElement.
	*/
	export function b(config?: IBoldElementConfig): Elements.BoldElement {
        return new Elements.BoldElement(config);
    }

	//#endregion b

	//#region button

	/**
	* The HTML <button> Element represents a clickable button [MDN].
	* @param [config] The configuration for the ButtonElement.
	* @returns a new ButtonElement.
	*/
	export function button(config?: IButtonElementConfig): Elements.ButtonElement {
        return new Elements.ButtonElement(config);
    }

	//#endregion button

	//#region canvas

	/**
	* The HTML <canvas> Element can be used to draw graphics via scripting (usually JavaScript). For example, it can be used to draw graphs, make photo compositions or even perform animations. You may (and should) provide alternate content inside the <canvas> block. That content will be rendered both on older browsers that don't support canvas and in browsers with JavaScript disabled [MDN].
	* @param [config] The configuration for the CanvasElement.
	* @returns a new CanvasElement.
	*/
	export function canvas(config?: ICanvasElementConfig): Elements.CanvasElement {
        return new Elements.CanvasElement(config);
    }

	//#endregion canvas

	//#region cite

	/**
	* The HTML <cite> Element (or HTML Citation Element) contains the title of a work, such as a book, song, movie, TV show, sculpture, etc [MDN].
	* @param [config] The configuration for the CitationElement.
	* @returns a new CitationElement.
	*/
	export function cite(config?: ICitationElementConfig): Elements.CitationElement {
        return new Elements.CitationElement(config);
    }

	//#endregion cite

	//#region code

	/**
	* The HTML <code> Element represents a fragment of computer code. By default, it is displayed in the browser's default monospace font [MDN].
	* @param [config] The configuration for the CodeElement.
	* @returns a new CodeElement.
	*/
	export function code(config?: ICodeElementConfig): Elements.CodeElement {
        return new Elements.CodeElement(config);
    }

	//#endregion code

	//#region data

	/**
	* The HTML <data> Element links a given content with a machine-readable translation. If the content is time- or date-related, the <time> must be used [MDN].
	* @param [config] The configuration for the DataElement.
	* @returns a new DataElement.
	*/
	export function data(config?: IDataElementConfig): Elements.DataElement {
        return new Elements.DataElement(config);
    }

	//#endregion data

	//#region datalist

	/**
	* The HTML <datalist> Element contains a set of <option> elements that represent the possible options for the value of other controls [MDN].
	* @param [config] The configuration for the DataListElement.
	* @returns a new DataListElement.
	*/
	export function datalist(config?: IDataListElementConfig): Elements.DataListElement {
        return new Elements.DataListElement(config);
    }

	//#endregion datalist

	//#region dfn

	/**
	* The HTML <dfn> element (or HTML Definition Element) represents the defining instance of a term [MDN].
	* @param [config] The configuration for the DefinitionElement.
	* @returns a new DefinitionElement.
	*/
	export function dfn(config?: IDefinitionElementConfig): Elements.DefinitionElement {
        return new Elements.DefinitionElement(config);
    }

	//#endregion dfn

	//#region dt

	/**
	* The HTML <dt> element (or HTML Definition Term Element) identifies a term in a definition list. This element can occur only as a child element of a <dl>. It is usually followed by a <dd> element; however, multiple <dt> elements in a row indicate several terms that are all defined by the immediate next <dd> element [MDN].
	* @param [config] The configuration for the DefinitionTermElement.
	* @returns a new DefinitionTermElement.
	*/
	export function dt(config?: IDefinitionTermElementConfig): Elements.DefinitionTermElement {
        return new Elements.DefinitionTermElement(config);
    }

	//#endregion dt

	//#region del

	/**
	* The HTML <del> element (or HTML Deleted Text Element) represents a range of text that has been deleted from a document. This element is often (but need not be) rendered with strike-through text [MDN].
	* @param [config] The configuration for the DeletedTextElement.
	* @returns a new DeletedTextElement.
	*/
	export function del(config?: IDeletedTextElementConfig): Elements.DeletedTextElement {
        return new Elements.DeletedTextElement(config);
    }

	//#endregion del

	//#region dd

	/**
	* The HTML <dd> Element (or HTML Description Element) indicates the description of a term in a description list (<dl>) element. This element can occur only as a child element of a definition list and it must follow a <dt> element [MDN].
	* @param [config] The configuration for the DescriptionElement.
	* @returns a new DescriptionElement.
	*/
	export function dd(config?: IDescriptionElementConfig): Elements.DescriptionElement {
        return new Elements.DescriptionElement(config);
    }

	//#endregion dd

	//#region dl

	/**
	* The HTML <dl> Element (or HTML Description List Element) encloses a list of pairs of terms and descriptions. Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs) [MDN].
	* @param [config] The configuration for the DescriptionListElement.
	* @returns a new DescriptionListElement.
	*/
	export function dl(config?: IDescriptionListElementConfig): Elements.DescriptionListElement {
        return new Elements.DescriptionListElement(config);
    }

	//#endregion dl

	//#region details

	/**
	* The HTML <details> Element is used as a disclosure widget from which the user can retrieve additional information [MDN].
	* @param [config] The configuration for the DetailsElement.
	* @returns a new DetailsElement.
	*/
	export function details(config?: IDetailsElementConfig): Elements.DetailsElement {
        return new Elements.DetailsElement(config);
    }

	//#endregion details

	//#region div

	/**
	* The HTML <div> element (or HTML Document Division Element) is the generic container for flow content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element (such as <article> or <nav>) is appropriate [MDN].
	* @param [config] The configuration for the DivisionElement.
	* @returns a new DivisionElement.
	*/
	export function div(config?: IDivisionElementConfig): Elements.DivisionElement {
        return new Elements.DivisionElement(config);
    }

	//#endregion div

	//#region embed

	/**
	* The HTML <embed> Element represents an integration point for an external application or interactive content (in other words, a plug-in) [MDN].
	* @param [config] The configuration for the EmbedElement.
	* @returns a new EmbedElement.
	*/
	export function embed(config?: IEmbedElementConfig): Elements.EmbedElement {
        return new Elements.EmbedElement(config);
    }

	//#endregion embed

	//#region obj

	/**
	* The HTML <object> Element (or HTML Embedded Object Element) represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin [MDN].
	* @param [config] The configuration for the EmbeddedObjectElement.
	* @returns a new EmbeddedObjectElement.
	*/
	export function obj(config?: IEmbeddedObjectElementConfig): Elements.EmbeddedObjectElement {
        return new Elements.EmbeddedObjectElement(config);
    }

	//#endregion obj

	//#region em

	/**
	* The HTML <em> element (or HTML Emphasis Element) marks text that has stress emphasis. The <em> element can be nested, with each level of nesting indicating a greater degree of emphasis [MDN].
	* @param [config] The configuration for the EmphasisElement.
	* @returns a new EmphasisElement.
	*/
	export function em(config?: IEmphasisElementConfig): Elements.EmphasisElement {
        return new Elements.EmphasisElement(config);
    }

	//#endregion em

	//#region fieldset

	/**
	* The HTML <fieldset> element is used to group several controls as well as labels (<label>) within a web form [MDN].
	* @param [config] The configuration for the FieldsetElement.
	* @returns a new FieldsetElement.
	*/
	export function fieldset(config?: IFieldsetElementConfig): Elements.FieldsetElement {
        return new Elements.FieldsetElement(config);
    }

	//#endregion fieldset

	//#region figure

	/**
	* The HTML <figure> Element represents self-contained content, frequently with a caption (<figcaption>), and is typically referenced as a single unit. While it is related to the main flow, its position is independent of the main flow. Usually this is an image, an illustration, a diagram, a code snippet, or a schema that is referenced in the main text, but that can be moved to another page or to an appendix without affecting the main flow [MDN].
	* @param [config] The configuration for the FigureElement.
	* @returns a new FigureElement.
	*/
	export function figure(config?: IFigureElementConfig): Elements.FigureElement {
        return new Elements.FigureElement(config);
    }

	//#endregion figure

	//#region figcaption

	/**
	* The HTML <figcaption> Element represents a caption or a legend associated with a figure or an illustration described by the rest of the data of the <figure> element which is its immediate ancestor which means <figcaption> can be the first or last element inside a <figure> block. Also, the HTML Figcaption Element is optional; if not provided, then the parent figure element will have no caption [MDN].
	* @param [config] The configuration for the FigureCaptionElement.
	* @returns a new FigureCaptionElement.
	*/
	export function figcaption(config?: IFigureCaptionElementConfig): Elements.FigureCaptionElement {
        return new Elements.FigureCaptionElement(config);
    }

	//#endregion figcaption

	//#region footer

	/**
	* The HTML <footer> Element represents a footer for its nearest sectioning content or sectioning root element (i.e, its nearest parent <article>, <aside>, <nav>, <section>, <blockquote>, <body>, <details>, <fieldset>, <figure>, <td>). A footer typically contains information about the author of the section, copyright data or links to related documents [MDN].
	* @param [config] The configuration for the FooterElement.
	* @returns a new FooterElement.
	*/
	export function footer(config?: IFooterElementConfig): Elements.FooterElement {
        return new Elements.FooterElement(config);
    }

	//#endregion footer

	//#region form

	/**
	* The HTML <form> element represents a section of document that contains interactive controls that enable a user to submit information to a web server [MDN].
	* @param [config] The configuration for the FormElement.
	* @returns a new FormElement.
	*/
	export function form(config?: IFormElementConfig): Elements.FormElement {
        return new Elements.FormElement(config);
    }

	//#endregion form

	//#region head

	/**
	* The HTML <head> element represents a collection of metadata about the document, including links to or definitions of scripts and style sheets [MDN].
	* @param [config] The configuration for the HeadElement.
	* @returns a new HeadElement.
	*/
	export function head(config?: IHeadElementConfig): Elements.HeadElement {
        return new Elements.HeadElement(config);
    }

	//#endregion head

	//#region header

	/**
	* The HTML <header> Element represents a group of introductory or navigational aids. It may contain some heading elements but also other elements like a logo, wrapped section's header, a search form, and so on [MDN].
	* @param [config] The configuration for the HeaderElement.
	* @returns a new HeaderElement.
	*/
	export function header(config?: IHeaderElementConfig): Elements.HeaderElement {
        return new Elements.HeaderElement(config);
    }

	//#endregion header

	//#region h5

	/**
	* Heading elements implement six levels of document headings, <h1> is the most important and <h6> is the least. A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically [MDN].
	* @param [config] The configuration for the HeaderFiveElement.
	* @returns a new HeaderFiveElement.
	*/
	export function h5(config?: IHeaderFiveElementConfig): Elements.HeaderFiveElement {
        return new Elements.HeaderFiveElement(config);
    }

	//#endregion h5

	//#region h4

	/**
	* Heading elements implement six levels of document headings, <h1> is the most important and <h6> is the least. A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically [MDN].
	* @param [config] The configuration for the HeaderFourElement.
	* @returns a new HeaderFourElement.
	*/
	export function h4(config?: IHeaderFourElementConfig): Elements.HeaderFourElement {
        return new Elements.HeaderFourElement(config);
    }

	//#endregion h4

	//#region h1

	/**
	* Heading elements implement six levels of document headings, <h1> is the most important and <h6> is the least. A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically [MDN].
	* @param [config] The configuration for the HeaderOneElement.
	* @returns a new HeaderOneElement.
	*/
	export function h1(config?: IHeaderOneElementConfig): Elements.HeaderOneElement {
        return new Elements.HeaderOneElement(config);
    }

	//#endregion h1

	//#region h6

	/**
	* Heading elements implement six levels of document headings, <h1> is the most important and <h6> is the least. A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically [MDN].
	* @param [config] The configuration for the HeaderSixElement.
	* @returns a new HeaderSixElement.
	*/
	export function h6(config?: IHeaderSixElementConfig): Elements.HeaderSixElement {
        return new Elements.HeaderSixElement(config);
    }

	//#endregion h6

	//#region h3

	/**
	* Heading elements implement six levels of document headings, <h1> is the most important and <h6> is the least. A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically [MDN].
	* @param [config] The configuration for the HeaderThreeElement.
	* @returns a new HeaderThreeElement.
	*/
	export function h3(config?: IHeaderThreeElementConfig): Elements.HeaderThreeElement {
        return new Elements.HeaderThreeElement(config);
    }

	//#endregion h3

	//#region h2

	/**
	* Heading elements implement six levels of document headings, <h1> is the most important and <h6> is the least. A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically [MDN].
	* @param [config] The configuration for the HeaderTwoElement.
	* @returns a new HeaderTwoElement.
	*/
	export function h2(config?: IHeaderTwoElementConfig): Elements.HeaderTwoElement {
        return new Elements.HeaderTwoElement(config);
    }

	//#endregion h2

	//#region hr

	/**
	* In HTML5 the HTML <hr> element represents a thematic break between paragraph-level elements (for example, a change of scene in a story, or a shift of topic with a section). In previous versions of HTML, it represented a horizontal rule. It may still be displayed as a horizontal rule in visual browsers, but is now defined in semantic terms, rather than presentational terms [MDN].
	* @param [config] The configuration for the HorizontalRuleElement.
	* @returns a new HorizontalRuleElement.
	*/
	export function hr(config?: IHorizontalRuleElementConfig): Elements.HorizontalRuleElement {
        return new Elements.HorizontalRuleElement(config);
    }

	//#endregion hr

	//#region img

	/**
	* The HTML <img> Element (or HTML Image Element) represents an image of the document [MDN].
	* @param [config] The configuration for the ImageElement.
	* @returns a new ImageElement.
	*/
	export function img(config?: IImageElementConfig): Elements.ImageElement {
        return new Elements.ImageElement(config);
    }

	//#endregion img

	//#region iframe

	/**
	* The HTML <iframe> Element (or HTML inline frame element) represents a nested browsing context, effectively embedding another HTML page into the current page. In HTML 4.01, a document may contain a head and a body or a head and a frame-set, but not both a body and a frame-set. However,an <iframe> can be used within a normal document body. Each browsing context has its own session history and active document. The browsing context that contains the embedded content is called the parent browsing context. The top-level browsing context (which has no parent) is typically the browser window [MDN].
	* @param [config] The configuration for the InlineFrameElement.
	* @returns a new InlineFrameElement.
	*/
	export function iframe(config?: IInlineFrameElementConfig): Elements.InlineFrameElement {
        return new Elements.InlineFrameElement(config);
    }

	//#endregion iframe

	//#region input

	/**
	* The HTML <input> element is used to create interactive controls for web-based forms [MDN].
	* @param [config] The configuration for the InputElement.
	* @returns a new InputElement.
	*/
	export function input(config?: IInputElementConfig): Elements.InputElement {
        return new Elements.InputElement(config);
    }

	//#endregion input

	//#region ins

	/**
	* The HTML <ins> Element (or HTML Inserted Text) HTML represents a range of text that has been added to a document [MDN].
	* @param [config] The configuration for the InsertedElement.
	* @returns a new InsertedElement.
	*/
	export function ins(config?: IInsertedElementConfig): Elements.InsertedElement {
        return new Elements.InsertedElement(config);
    }

	//#endregion ins

	//#region i

	/**
	* The HTML <i> Element represents a range of text that is set off from the normal text for some reason, for example, technical terms, foreign language phrases, or fictional character thoughts. It is typically displayed in italic type [MDN].
	* @param [config] The configuration for the ItalicElement.
	* @returns a new ItalicElement.
	*/
	export function i(config?: IItalicElementConfig): Elements.ItalicElement {
        return new Elements.ItalicElement(config);
    }

	//#endregion i

	//#region kbd

	/**
	* The HTML <kbd> Element (or HTML Keyboard Input Element) represents user input and produces an inline element displayed in the browser's default monotype font [MDN].
	* @param [config] The configuration for the KeyboardInputElement.
	* @returns a new KeyboardInputElement.
	*/
	export function kbd(config?: IKeyboardInputElementConfig): Elements.KeyboardInputElement {
        return new Elements.KeyboardInputElement(config);
    }

	//#endregion kbd

	//#region label

	/**
	* The HTML <label> Element represents a caption for an item in a user interface. It can be associated with a control either by using the for attribute, or by placing the control element inside the label element. Such a control is called the labeled control of the label element [MDN].
	* @param [config] The configuration for the LabelElement.
	* @returns a new LabelElement.
	*/
	export function label(config?: ILabelElementConfig): Elements.LabelElement {
        return new Elements.LabelElement(config);
    }

	//#endregion label

	//#region legend

	/**
	* The HTML <legend> Element (or HTML Legend Field Element) represents a caption for the content of its parent <fieldset> [MDN].
	* @param [config] The configuration for the LegendFieldElement.
	* @returns a new LegendFieldElement.
	*/
	export function legend(config?: ILegendFieldElementConfig): Elements.LegendFieldElement {
        return new Elements.LegendFieldElement(config);
    }

	//#endregion legend

	//#region br

	/**
	* The HTML <br> Element (or HTML Line Break Element) produces a line break in text (carriage-return). It is useful for writing a poem or an address, where the division of lines is significant [MDN].
	* @param [config] The configuration for the LineBreakElement.
	* @returns a new LineBreakElement.
	*/
	export function br(config?: ILineBreakElementConfig): Elements.LineBreakElement {
        return new Elements.LineBreakElement(config);
    }

	//#endregion br

	//#region link

	/**
	* The HTML <link> Element specifies relationships between the current document and other documents. Possible uses for this element include defining a relational framework for navigation and linking the document to a style sheet [MDN].
	* @param [config] The configuration for the LinkElement.
	* @returns a new LinkElement.
	*/
	export function link(config?: ILinkElementConfig): Elements.LinkElement {
        return new Elements.LinkElement(config);
    }

	//#endregion link

	//#region li

	/**
	* The HTML List item element (<li>) is used to represent a list item. It should be contained in an ordered list (<ol>), an unordered list (<ul>) or a menu (<menu>), where it represents a single entity in that list. In menus and unordered lists, list items are ordinarily displayed using bullet points. In ordered lists, they are usually displayed with some ascending counter on the left such as a number or letter [MDN].
	* @param [config] The configuration for the ListItemElement.
	* @returns a new ListItemElement.
	*/
	export function li(config?: IListItemElementConfig): Elements.ListItemElement {
        return new Elements.ListItemElement(config);
    }

	//#endregion li

	//#region main

	/**
	* The HTML <main> element represents the main content of  the <body> of a document or application. The main content area consists of content that is directly related to, or expands upon the central topic of a document or the central functionality of an application. This content should be unique to the document, excluding any content that is repeated across a set of documents such as sidebars, navigation links, copyright information, site logos, and search forms (unless, of course, the document's main function is as a search form) [MDN].
	* @param [config] The configuration for the MainElement.
	* @returns a new MainElement.
	*/
	export function main(config?: IMainElementConfig): Elements.MainElement {
        return new Elements.MainElement(config);
    }

	//#endregion main

	//#region map

	/**
	* The HTML <map> element is used with <area> elements to define an image map [MDN].
	* @param [config] The configuration for the MapElement.
	* @returns a new MapElement.
	*/
	export function map(config?: IMapElementConfig): Elements.MapElement {
        return new Elements.MapElement(config);
    }

	//#endregion map

	//#region mark

	/**
	* The HTML <mark> Element represents highlighted text, i.e., a run of text marked for reference purpose, due to its relevance in a particular context. For example it can be used in a page showing search results to highlight every instance of the searched for word [MDN].
	* @param [config] The configuration for the MarkElement.
	* @returns a new MarkElement.
	*/
	export function mark(config?: IMarkElementConfig): Elements.MarkElement {
        return new Elements.MarkElement(config);
    }

	//#endregion mark

	//#region meta

	/**
	* The HTML <meta> Element represents any metadata information which cannot be represented using one of the other meta-related element (<base>, <link>, <script>, <style> or <title>). According to the attributes set, the kind of metadata can be one of the following: [MDN].
	* @param [config] The configuration for the MetaElement.
	* @returns a new MetaElement.
	*/
	export function meta(config?: IMetaElementConfig): Elements.MetaElement {
        return new Elements.MetaElement(config);
    }

	//#endregion meta

	//#region nav

	/**
	* The HTML Navigation Element (<nav>) represents a section of a page that links to other pages or to parts within the page [MDN].
	* @param [config] The configuration for the NavigationElement.
	* @returns a new NavigationElement.
	*/
	export function nav(config?: INavigationElementConfig): Elements.NavigationElement {
        return new Elements.NavigationElement(config);
    }

	//#endregion nav

	//#region noscript

	/**
	* The HTML <noscript> Element defines a section of html to be inserted if a script type on the page is unsupported or if scripting is currently turned off in the browser [MDN].
	* @param [config] The configuration for the NoScriptElement.
	* @returns a new NoScriptElement.
	*/
	export function noscript(config?: INoScriptElementConfig): Elements.NoScriptElement {
        return new Elements.NoScriptElement(config);
    }

	//#endregion noscript

	//#region option

	/**
	* In a Web form, the HTML <option> element is used to create a control representing an item within a <select>, <optgroup> or <datalist> element [MDN].
	* @param [config] The configuration for the OptionElement.
	* @returns a new OptionElement.
	*/
	export function option(config?: IOptionElementConfig): Elements.OptionElement {
        return new Elements.OptionElement(config);
    }

	//#endregion option

	//#region optgroup

	/**
	* In a Web form, the HTML <optgroup> element  creates a grouping of options within a <select> element [MDN].
	* @param [config] The configuration for the OptionsGroupElement.
	* @returns a new OptionsGroupElement.
	*/
	export function optgroup(config?: IOptionsGroupElementConfig): Elements.OptionsGroupElement {
        return new Elements.OptionsGroupElement(config);
    }

	//#endregion optgroup

	//#region ol

	/**
	* The HTML <ol> Element (or HTML Ordered List Element) represents an ordered list of items. Typically, ordered-list items are displayed with a preceding numbering, which can be of any form, like numerals, letters or Romans numerals or even simple bullets. This numbered style is not defined in the HTML description of the page, but in its associated CSS, using the list-style-type property [MDN].
	* @param [config] The configuration for the OrderedListElement.
	* @returns a new OrderedListElement.
	*/
	export function ol(config?: IOrderedListElementConfig): Elements.OrderedListElement {
        return new Elements.OrderedListElement(config);
    }

	//#endregion ol

	//#region p

	/**
	* The HTML <p> element (or HTML Paragraph Element) represents a paragraph of text. Paragraphs are block-level elements [MDN].
	* @param [config] The configuration for the ParagraphElement.
	* @returns a new ParagraphElement.
	*/
	export function p(config?: IParagraphElementConfig): Elements.ParagraphElement {
        return new Elements.ParagraphElement(config);
    }

	//#endregion p

	//#region param

	/**
	* The HTML <param> Element (or HTML Parameter Element) defines parameters for <object> [MDN].
	* @param [config] The configuration for the ParameterElement.
	* @returns a new ParameterElement.
	*/
	export function param(config?: IParameterElementConfig): Elements.ParameterElement {
        return new Elements.ParameterElement(config);
    }

	//#endregion param

	//#region pre

	/**
	* The HTML <pre> Element (or HTML Preformatted Text) represents preformatted text. Text within this element is typically displayed in a non-proportional font exactly as it is laid out in the file. Whitespaces inside this element are displayed as typed [MDN].
	* @param [config] The configuration for the PreformattedElement.
	* @returns a new PreformattedElement.
	*/
	export function pre(config?: IPreformattedElementConfig): Elements.PreformattedElement {
        return new Elements.PreformattedElement(config);
    }

	//#endregion pre

	//#region progress

	/**
	* The HTML <progress> Element is used to view the completion progress of a task. While the specifics of how it's displayed is left up to the browser developer, it's typically displayed as a progress bar. Javascript can be used to manipulate the value of progress bar [MDN].
	* @param [config] The configuration for the ProgressElement.
	* @returns a new ProgressElement.
	*/
	export function progress(config?: IProgressElementConfig): Elements.ProgressElement {
        return new Elements.ProgressElement(config);
    }

	//#endregion progress

	//#region q

	/**
	* The HTML <q> Element (or HTML Quote Element) indicates that the enclosed text is a short inline quotation. This element is intended for short quotations that don't require paragraph breaks; for long quotations use <blockquote> element [MDN].
	* @param [config] The configuration for the QuoteElement.
	* @returns a new QuoteElement.
	*/
	export function q(config?: IQuoteElementConfig): Elements.QuoteElement {
        return new Elements.QuoteElement(config);
    }

	//#endregion q

	//#region html

	/**
	* The HTML <html> Element (or HTML root element) represents the root of an HTML or XHTML document. All other elements must be descendants of this element [MDN].
	* @param [config] The configuration for the RootElement.
	* @returns a new RootElement.
	*/
	export function html(config?: IRootElementConfig): Elements.RootElement {
        return new Elements.RootElement(config);
    }

	//#endregion html

	//#region ruby

	/**
	* The HTML <ruby> Element represents a ruby annotation. Ruby annotations are for showing pronounciation of East Asian characters [MDN].
	* @param [config] The configuration for the RubyElement.
	* @returns a new RubyElement.
	*/
	export function ruby(config?: IRubyElementConfig): Elements.RubyElement {
        return new Elements.RubyElement(config);
    }

	//#endregion ruby

	//#region rp

	/**
	* The HTML <rp> element is used to provide fall-back parenthesis for browsers non-supporting ruby annotations. Ruby annotations are for showing pronounciation of East Asian characters, like using Japanese furigana or Taiwainese bopomofo characters. The <rp> element is used in the case of lack of <ruby> element support its content has what should be displayed in order to indicate the presence of a ruby annotation, usually parentheses [MDN].
	* @param [config] The configuration for the RubyParenthesisElement.
	* @returns a new RubyParenthesisElement.
	*/
	export function rp(config?: IRubyParenthesisElementConfig): Elements.RubyParenthesisElement {
        return new Elements.RubyParenthesisElement(config);
    }

	//#endregion rp

	//#region rt

	/**
	* The HTML <rt> Element embraces pronunciation of character presented in a ruby annotations, which are for showing pronunciation of East Asian characters and the <rt> element is used inside of <ruby> element [MDN].
	* @param [config] The configuration for the RubyPronunciationElement.
	* @returns a new RubyPronunciationElement.
	*/
	export function rt(config?: IRubyPronunciationElementConfig): Elements.RubyPronunciationElement {
        return new Elements.RubyPronunciationElement(config);
    }

	//#endregion rt

	//#region samp

	/**
	* The HTML <samp> element is an inline element intended to identify sample output from a computer program. It is usually displayed in the browser's default monotype font (such as Lucida Console) [MDN].
	* @param [config] The configuration for the SampleElement.
	* @returns a new SampleElement.
	*/
	export function samp(config?: ISampleElementConfig): Elements.SampleElement {
        return new Elements.SampleElement(config);
    }

	//#endregion samp

	//#region script

	/**
	* The HTML <script> element is used to embed or reference an executable script within an HTML or XHTML document [MDN].
	* @param [config] The configuration for the ScriptElement.
	* @returns a new ScriptElement.
	*/
	export function script(config?: IScriptElementConfig): Elements.ScriptElement {
        return new Elements.ScriptElement(config);
    }

	//#endregion script

	//#region section

	/**
	* The HTML Section Element (<section>) represents a generic section of a document, i.e., a thematic grouping of content, typically with a heading [MDN].
	* @param [config] The configuration for the SectionElement.
	* @returns a new SectionElement.
	*/
	export function section(config?: ISectionElementConfig): Elements.SectionElement {
        return new Elements.SectionElement(config);
    }

	//#endregion section

	//#region select

	/**
	* The HTML select (<select>) element represents a control that presents menu of options. The options within the menu are represented by <option> elements, which can be grouped by <optgroup> elements. Options can be pre-selected for the user [MDN].
	* @param [config] The configuration for the SelectElement.
	* @returns a new SelectElement.
	*/
	export function select(config?: ISelectElementConfig): Elements.SelectElement {
        return new Elements.SelectElement(config);
    }

	//#endregion select

	//#region small

	/**
	* The HTML Small Element (<small>) makes the text font size one size smaller (for example, from large to medium, or from small to x-small) down to the browser's minimum font size.  In HTML5, this element is repurposed to represent side-comments and small print, including copyright and legal text, independent of its styled presentation [MDN].
	* @param [config] The configuration for the SmallElement.
	* @returns a new SmallElement.
	*/
	export function small(config?: ISmallElementConfig): Elements.SmallElement {
        return new Elements.SmallElement(config);
    }

	//#endregion small

	//#region source

	/**
	* The source element is used to specify multiple media resources for audio and video elements in HTML5. It is an empty element. It is commonly used to serve the same media in multiple formats supported by different browsers [MDN].
	* @param [config] The configuration for the SourceElement.
	* @returns a new SourceElement.
	*/
	export function source(config?: ISourceElementConfig): Elements.SourceElement {
        return new Elements.SourceElement(config);
    }

	//#endregion source

	//#region span

	/**
	* The HTML <span> element is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element is appropriate. <span> is very much like a <div> element, but <div> is a block-level element whereas a <span> is an inline element [MDN].
	* @param [config] The configuration for the SpanElement.
	* @returns a new SpanElement.
	*/
	export function span(config?: ISpanElementConfig): Elements.SpanElement {
        return new Elements.SpanElement(config);
    }

	//#endregion span

	//#region s

	/**
	* The HTML Strikethrough Element (<s>) renders text with a strikethrough, or a line through it. Use the <s> element to represent things that are no longer relevant or no longer accurate. However, <s> is not appropriate when indicating document edits; for that, use the <del> and <ins> elements, as appropriate [MDN].
	* @param [config] The configuration for the StrikethroughElement.
	* @returns a new StrikethroughElement.
	*/
	export function s(config?: IStrikethroughElementConfig): Elements.StrikethroughElement {
        return new Elements.StrikethroughElement(config);
    }

	//#endregion s

	//#region strong

	/**
	* The HTML Strong Element (<strong>) gives text strong importance, and is typically displayed in bold [MDN].
	* @param [config] The configuration for the StrongElement.
	* @returns a new StrongElement.
	*/
	export function strong(config?: IStrongElementConfig): Elements.StrongElement {
        return new Elements.StrongElement(config);
    }

	//#endregion strong

	//#region style

	/**
	* The HTML <style> element contains style information for a document, or a part of document. The specific style information is contained inside of this element, usually in the CSS [MDN].
	* @param [config] The configuration for the StyleElement.
	* @returns a new StyleElement.
	*/
	export function style(config?: IStyleElementConfig): Elements.StyleElement {
        return new Elements.StyleElement(config);
    }

	//#endregion style

	//#region sub

	/**
	* The HTML Subscript Element (<sub>) defines a span of text that should be displayed, for typographic reasons, lower, and often smaller, than the main span of text [MDN].
	* @param [config] The configuration for the SubscriptElement.
	* @returns a new SubscriptElement.
	*/
	export function sub(config?: ISubscriptElementConfig): Elements.SubscriptElement {
        return new Elements.SubscriptElement(config);
    }

	//#endregion sub

	//#region summary

	/**
	* The HTML summary element (<summary>) is used as a summary, caption or legend for the content of a <details> element [MDN].
	* @param [config] The configuration for the SummaryElement.
	* @returns a new SummaryElement.
	*/
	export function summary(config?: ISummaryElementConfig): Elements.SummaryElement {
        return new Elements.SummaryElement(config);
    }

	//#endregion summary

	//#region sup

	/**
	* The HTML Superscript Element (<sup>) defines a span of text that should be displayed, for typographic reasons, higher, and often smaller, than the main span of text [MDN].
	* @param [config] The configuration for the SuperscriptElement.
	* @returns a new SuperscriptElement.
	*/
	export function sup(config?: ISuperscriptElementConfig): Elements.SuperscriptElement {
        return new Elements.SuperscriptElement(config);
    }

	//#endregion sup

	//#region table

	/**
	* The HTML Table Element (<table>) represents data in two dimensions or more [MDN].
	* @param [config] The configuration for the TableElement.
	* @returns a new TableElement.
	*/
	export function table(config?: ITableElementConfig): Elements.TableElement {
        return new Elements.TableElement(config);
    }

	//#endregion table

	//#region caption

	/**
	* The HTML <caption> Element (or HTML Table Caption Element) represents the title of a table. Though it is always the first descendant of a <table>, its styling, using CSS, may place it elsewhere, relative to the table [MDN].
	* @param [config] The configuration for the TableCaptionElement.
	* @returns a new TableCaptionElement.
	*/
	export function caption(config?: ITableCaptionElementConfig): Elements.TableCaptionElement {
        return new Elements.TableCaptionElement(config);
    }

	//#endregion caption

	//#region col

	/**
	* The HTML <col> Element (or HTML Table Column Element) defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a <colgroup> element [MDN].
	* @param [config] The configuration for the TableColumnElement.
	* @returns a new TableColumnElement.
	*/
	export function col(config?: ITableColumnElementConfig): Elements.TableColumnElement {
        return new Elements.TableColumnElement(config);
    }

	//#endregion col

	//#region colgroup

	/**
	* The HTML <colgroup> Element (or HTML Table Column Group Element) defines a group of columns within a table [MDN].
	* @param [config] The configuration for the TableColumnGroupElement.
	* @returns a new TableColumnGroupElement.
	*/
	export function colgroup(config?: ITableColumnGroupElementConfig): Elements.TableColumnGroupElement {
        return new Elements.TableColumnGroupElement(config);
    }

	//#endregion colgroup

	//#region td

	/**
	* The Table cell HTML element (<td>) defines a cell of a table that contains data. It participates in the table model [MDN].
	* @param [config] The configuration for the TableDataCellElement.
	* @returns a new TableDataCellElement.
	*/
	export function td(config?: ITableDataCellElementConfig): Elements.TableDataCellElement {
        return new Elements.TableDataCellElement(config);
    }

	//#endregion td

	//#region th

	/**
	* The HTML Table Header Cell Element (<th>) defines a cell that is a header for a group of cells of a table. The group of cells that the header refers to is defined by the scope and headers attribute [MDN].
	* @param [config] The configuration for the TableHeaderCellElement.
	* @returns a new TableHeaderCellElement.
	*/
	export function th(config?: ITableHeaderCellElementConfig): Elements.TableHeaderCellElement {
        return new Elements.TableHeaderCellElement(config);
    }

	//#endregion th

	//#region tr

	/**
	* The HTML Table Row Element (<tr>) defines a row of cells in a table. Those can be a mix of <td> and <th> elements [MDN].
	* @param [config] The configuration for the TableRowElement.
	* @returns a new TableRowElement.
	*/
	export function tr(config?: ITableRowElementConfig): Elements.TableRowElement {
        return new Elements.TableRowElement(config);
    }

	//#endregion tr

	//#region textarea

	/**
	* The HTML <textarea> element represents a multi-line plain-text editing control [MDN].
	* @param [config] The configuration for the TextAreaElement.
	* @returns a new TextAreaElement.
	*/
	export function textarea(config?: ITextAreaElementConfig): Elements.TextAreaElement {
        return new Elements.TextAreaElement(config);
    }

	//#endregion textarea

	//#region title

	/**
	* The HTML Title Element (<title>) defines the title of the document, shown in a browser's title bar or on the page's tab. It can only contain text and any contained tags are not interpreted [MDN].
	* @param [config] The configuration for the TitleElement.
	* @returns a new TitleElement.
	*/
	export function title(config?: ITitleElementConfig): Elements.TitleElement {
        return new Elements.TitleElement(config);
    }

	//#endregion title

	//#region track

	/**
	* The track element is used as a child of the media elementsâ€”<audio> and <video>â€”and does not represent anything on its own. It lets you specify timed text tracks (or time-based data) [MDN].
	* @param [config] The configuration for the TrackElement.
	* @returns a new TrackElement.
	*/
	export function track(config?: ITrackElementConfig): Elements.TrackElement {
        return new Elements.TrackElement(config);
    }

	//#endregion track

	//#region u

	/**
	* The HTML Underline Element (<u>) renders text with an underline, a line under the baseline of its content [MDN].
	* @param [config] The configuration for the UnderlineElement.
	* @returns a new UnderlineElement.
	*/
	export function u(config?: IUnderlineElementConfig): Elements.UnderlineElement {
        return new Elements.UnderlineElement(config);
    }

	//#endregion u

	//#region ul

	/**
	* The HTML unordered list element (<ul>) represents an unordered list of items, namely a collection of items that do not have a numerical ordering, and their order in the list is meaningless. Typically, unordered-list items are displayed with a bullet, which can be of several forms, like a dot, a circle or a squared. The bullet style is not defined in the HTML description of the page, but in its associated CSS, using the list-style-type property [MDN].
	* @param [config] The configuration for the UnorderedListElement.
	* @returns a new UnorderedListElement.
	*/
	export function ul(config?: IUnorderedListElementConfig): Elements.UnorderedListElement {
        return new Elements.UnorderedListElement(config);
    }

	//#endregion ul

	//#region variable

	/**
	* The HTML Variable Element (<var>) represents a variable in a mathematical expression or a programming context [MDN].
	* @param [config] The configuration for the VariableElement.
	* @returns a new VariableElement.
	*/
	export function variable(config?: IVariableElementConfig): Elements.VariableElement {
        return new Elements.VariableElement(config);
    }

	//#endregion variable

	//#region video

	/**
	* The HTML <video> element is used to embed video content in an HTML or XHTML document [MDN].
	* @param [config] The configuration for the VideoElement.
	* @returns a new VideoElement.
	*/
	export function video(config?: IVideoElementConfig): Elements.VideoElement {
        return new Elements.VideoElement(config);
    }

	//#endregion video

	//#region wbr

	/**
	* The Word Break Opportunity (<wbr>) HTML element represents a position within text where the browser may optionally break a line, though its line-breaking rules would not otherwise create a break at that location [MDN].
	* @param [config] The configuration for the WordBreakOpportunityElement.
	* @returns a new WordBreakOpportunityElement.
	*/
	export function wbr(config?: IWordBreakOpportunityElementConfig): Elements.WordBreakOpportunityElement {
        return new Elements.WordBreakOpportunityElement(config);
    }

	//#endregion wbr

}

//#endregion Factory Methods

//#region Utilities

module Classical.Html {

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
