var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Classical;
(function (Classical) {
    (function (Html) {
        (function (spec) {
            //#region Imports
            var u = Classical.Utilities;
            var m = Classical.Html;
            var e = Classical.Html.Elements;
            var b = Classical.Binding;

            //#endregion Imports
            var testHtmlElement;
            var testHtmlElementContainer;
            var elements = new Array();

            //#region Array Initialzation
            //#region HtmlElement
            var propertiesHtmlElement = new Array();

            //#region Initialize Properties
            //#region classes
            var testHtmlElementclassesTestItems = new Array(5);

            //#region Initialize TestItems
            testHtmlElementclassesTestItems.add('');
            testHtmlElementclassesTestItems.add('234567');
            testHtmlElementclassesTestItems.add('Testing a long sentence just in case the property does not support it.');
            testHtmlElementclassesTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testHtmlElementclassesTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testHtmlElementclasses = new TestProperty('classes', 'className', 'string', testHtmlElementclassesTestItems);
            propertiesHtmlElement.add(testHtmlElementclasses);

            //#endregion classes
            //#region direction
            var testHtmlElementdirectionTestItems = new Array(3);

            //#region Initialize TestItems
            testHtmlElementdirectionTestItems.add('ltr');
            testHtmlElementdirectionTestItems.add('rtl');
            testHtmlElementdirectionTestItems.add('auto');

            //#endregion Initialize TestItems
            var testHtmlElementdirection = new TestProperty('direction', 'dir', 'string', testHtmlElementdirectionTestItems);
            propertiesHtmlElement.add(testHtmlElementdirection);

            //#endregion direction
            //#region draggable
            var testHtmlElementdraggableTestItems = new Array(2);

            //#region Initialize TestItems
            testHtmlElementdraggableTestItems.add(true);
            testHtmlElementdraggableTestItems.add(false);

            //#endregion Initialize TestItems
            var testHtmlElementdraggable = new TestProperty('draggable', 'draggable', 'boolean', testHtmlElementdraggableTestItems);
            propertiesHtmlElement.add(testHtmlElementdraggable);

            //#endregion draggable
            //#region hidden
            var testHtmlElementhiddenTestItems = new Array(2);

            //#region Initialize TestItems
            testHtmlElementhiddenTestItems.add(true);
            testHtmlElementhiddenTestItems.add(false);

            //#endregion Initialize TestItems
            var testHtmlElementhidden = new TestProperty('hidden', 'hidden', 'boolean', testHtmlElementhiddenTestItems);
            propertiesHtmlElement.add(testHtmlElementhidden);

            //#endregion hidden
            //#region id
            var testHtmlElementidTestItems = new Array(5);

            //#region Initialize TestItems
            testHtmlElementidTestItems.add('');
            testHtmlElementidTestItems.add('234567');
            testHtmlElementidTestItems.add('Testing a long sentence just in case the property does not support it.');
            testHtmlElementidTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testHtmlElementidTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testHtmlElementid = new TestProperty('id', 'id', 'string', testHtmlElementidTestItems);
            propertiesHtmlElement.add(testHtmlElementid);

            //#endregion id
            //#region language
            var testHtmlElementlanguageTestItems = new Array(5);

            //#region Initialize TestItems
            testHtmlElementlanguageTestItems.add('');
            testHtmlElementlanguageTestItems.add('234567');
            testHtmlElementlanguageTestItems.add('Testing a long sentence just in case the property does not support it.');
            testHtmlElementlanguageTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testHtmlElementlanguageTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testHtmlElementlanguage = new TestProperty('language', 'lang', 'string', testHtmlElementlanguageTestItems);
            propertiesHtmlElement.add(testHtmlElementlanguage);

            //#endregion language
            //#region spellCheck
            var testHtmlElementspellCheckTestItems = new Array(2);

            //#region Initialize TestItems
            testHtmlElementspellCheckTestItems.add(true);
            testHtmlElementspellCheckTestItems.add(false);

            //#endregion Initialize TestItems
            var testHtmlElementspellCheck = new TestProperty('spellCheck', 'spellcheck', 'boolean', testHtmlElementspellCheckTestItems);
            propertiesHtmlElement.add(testHtmlElementspellCheck);

            //#endregion spellCheck
            //#region title
            var testHtmlElementtitleTestItems = new Array(5);

            //#region Initialize TestItems
            testHtmlElementtitleTestItems.add('');
            testHtmlElementtitleTestItems.add('234567');
            testHtmlElementtitleTestItems.add('Testing a long sentence just in case the property does not support it.');
            testHtmlElementtitleTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testHtmlElementtitleTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testHtmlElementtitle = new TestProperty('title', 'title', 'string', testHtmlElementtitleTestItems);
            propertiesHtmlElement.add(testHtmlElementtitle);

            //#endregion title
            //#endregion Initialize Properties
            testHtmlElement = new TestElement('HtmlElement', '', propertiesHtmlElement);

            //#endregion HtmlElement
            //#region HtmlElementContainer
            var propertiesHtmlElementContainer = new Array();

            //#region Initialize Properties
            //#endregion Initialize Properties
            testHtmlElementContainer = new TestElement('HtmlElementContainer', '', propertiesHtmlElementContainer);

            //#endregion HtmlElementContainer
            //#region AbbreviationElement
            var propertiesAbbreviationElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testAbbreviationElement = new TestElement('AbbreviationElement', 'abbr', propertiesAbbreviationElement);
            elements.add(testAbbreviationElement);

            //#endregion AbbreviationElement
            //#region AddressElement
            var propertiesAddressElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testAddressElement = new TestElement('AddressElement', 'address', propertiesAddressElement);
            elements.add(testAddressElement);

            //#endregion AddressElement
            //#region AnchorElement
            var propertiesAnchorElement = new Array(5);

            //#region Initialize Properties
            //#region href
            var testAnchorElementhrefTestItems = new Array(5);

            //#region Initialize TestItems
            testAnchorElementhrefTestItems.add('http://www.google.com/');
            testAnchorElementhrefTestItems.add('http://www.yahoo.com/');
            testAnchorElementhrefTestItems.add('http://www.msn.com/');
            testAnchorElementhrefTestItems.add('http://www.aol.com/');
            testAnchorElementhrefTestItems.add('http://www.something.com/');

            //#endregion Initialize TestItems
            var testAnchorElementhref = new TestProperty('href', 'href', 'string', testAnchorElementhrefTestItems);
            propertiesAnchorElement.add(testAnchorElementhref);

            //#endregion href
            //#region hrefLanguage
            var testAnchorElementhrefLanguageTestItems = new Array(5);

            //#region Initialize TestItems
            testAnchorElementhrefLanguageTestItems.add('');
            testAnchorElementhrefLanguageTestItems.add('234567');
            testAnchorElementhrefLanguageTestItems.add('Testing a long sentence just in case the property does not support it.');
            testAnchorElementhrefLanguageTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testAnchorElementhrefLanguageTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testAnchorElementhrefLanguage = new TestProperty('hrefLanguage', 'hreflang', 'string', testAnchorElementhrefLanguageTestItems);
            propertiesAnchorElement.add(testAnchorElementhrefLanguage);

            //#endregion hrefLanguage
            //#region relationship
            var testAnchorElementrelationshipTestItems = new Array(5);

            //#region Initialize TestItems
            testAnchorElementrelationshipTestItems.add('');
            testAnchorElementrelationshipTestItems.add('234567');
            testAnchorElementrelationshipTestItems.add('Testing a long sentence just in case the property does not support it.');
            testAnchorElementrelationshipTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testAnchorElementrelationshipTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testAnchorElementrelationship = new TestProperty('relationship', 'rel', 'string', testAnchorElementrelationshipTestItems);
            propertiesAnchorElement.add(testAnchorElementrelationship);

            //#endregion relationship
            //#region target
            var testAnchorElementtargetTestItems = new Array(4);

            //#region Initialize TestItems
            testAnchorElementtargetTestItems.add('_self');
            testAnchorElementtargetTestItems.add('_blank');
            testAnchorElementtargetTestItems.add('_parent');
            testAnchorElementtargetTestItems.add('_top');

            //#endregion Initialize TestItems
            var testAnchorElementtarget = new TestProperty('target', 'target', 'string', testAnchorElementtargetTestItems);
            propertiesAnchorElement.add(testAnchorElementtarget);

            //#endregion target
            //#region type
            var testAnchorElementtypeTestItems = new Array(5);

            //#region Initialize TestItems
            testAnchorElementtypeTestItems.add('');
            testAnchorElementtypeTestItems.add('234567');
            testAnchorElementtypeTestItems.add('Testing a long sentence just in case the property does not support it.');
            testAnchorElementtypeTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testAnchorElementtypeTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testAnchorElementtype = new TestProperty('type', 'type', 'string', testAnchorElementtypeTestItems);
            propertiesAnchorElement.add(testAnchorElementtype);

            //#endregion type
            //#endregion Initialize Properties
            var testAnchorElement = new TestElement('AnchorElement', 'a', propertiesAnchorElement);
            elements.add(testAnchorElement);

            //#endregion AnchorElement
            //#region AreaElement
            var propertiesAreaElement = new Array(5);

            //#region Initialize Properties
            //#region alternate
            var testAreaElementalternateTestItems = new Array(5);

            //#region Initialize TestItems
            testAreaElementalternateTestItems.add('');
            testAreaElementalternateTestItems.add('234567');
            testAreaElementalternateTestItems.add('Testing a long sentence just in case the property does not support it.');
            testAreaElementalternateTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testAreaElementalternateTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testAreaElementalternate = new TestProperty('alternate', 'alt', 'string', testAreaElementalternateTestItems);
            propertiesAreaElement.add(testAreaElementalternate);

            //#endregion alternate
            //#region coordinates
            var testAreaElementcoordinatesTestItems = new Array(5);

            //#region Initialize TestItems
            testAreaElementcoordinatesTestItems.add('');
            testAreaElementcoordinatesTestItems.add('234567');
            testAreaElementcoordinatesTestItems.add('Testing a long sentence just in case the property does not support it.');
            testAreaElementcoordinatesTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testAreaElementcoordinatesTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testAreaElementcoordinates = new TestProperty('coordinates', 'coords', 'string', testAreaElementcoordinatesTestItems);
            propertiesAreaElement.add(testAreaElementcoordinates);

            //#endregion coordinates
            //#region href
            var testAreaElementhrefTestItems = new Array(5);

            //#region Initialize TestItems
            testAreaElementhrefTestItems.add('http://www.google.com/');
            testAreaElementhrefTestItems.add('http://www.yahoo.com/');
            testAreaElementhrefTestItems.add('http://www.msn.com/');
            testAreaElementhrefTestItems.add('http://www.aol.com/');
            testAreaElementhrefTestItems.add('http://www.something.com/');

            //#endregion Initialize TestItems
            var testAreaElementhref = new TestProperty('href', 'href', 'string', testAreaElementhrefTestItems);
            propertiesAreaElement.add(testAreaElementhref);

            //#endregion href
            //#region shape
            var testAreaElementshapeTestItems = new Array(5);

            //#region Initialize TestItems
            testAreaElementshapeTestItems.add('');
            testAreaElementshapeTestItems.add('234567');
            testAreaElementshapeTestItems.add('Testing a long sentence just in case the property does not support it.');
            testAreaElementshapeTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testAreaElementshapeTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testAreaElementshape = new TestProperty('shape', 'shape', 'string', testAreaElementshapeTestItems);
            propertiesAreaElement.add(testAreaElementshape);

            //#endregion shape
            //#region target
            var testAreaElementtargetTestItems = new Array(4);

            //#region Initialize TestItems
            testAreaElementtargetTestItems.add('_self');
            testAreaElementtargetTestItems.add('_blank');
            testAreaElementtargetTestItems.add('_parent');
            testAreaElementtargetTestItems.add('_top');

            //#endregion Initialize TestItems
            var testAreaElementtarget = new TestProperty('target', 'target', 'string', testAreaElementtargetTestItems);
            propertiesAreaElement.add(testAreaElementtarget);

            //#endregion target
            //#endregion Initialize Properties
            var testAreaElement = new TestElement('AreaElement', 'area', propertiesAreaElement);
            elements.add(testAreaElement);

            //#endregion AreaElement
            //#region ArticleElement
            var propertiesArticleElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testArticleElement = new TestElement('ArticleElement', 'article', propertiesArticleElement);
            elements.add(testArticleElement);

            //#endregion ArticleElement
            //#region AsideElement
            var propertiesAsideElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testAsideElement = new TestElement('AsideElement', 'aside', propertiesAsideElement);
            elements.add(testAsideElement);

            //#endregion AsideElement
            //#region AudioElement
            var propertiesAudioElement = new Array(9);

            //#region Initialize Properties
            //#region autoPlay
            var testAudioElementautoPlayTestItems = new Array(2);

            //#region Initialize TestItems
            testAudioElementautoPlayTestItems.add(true);
            testAudioElementautoPlayTestItems.add(false);

            //#endregion Initialize TestItems
            var testAudioElementautoPlay = new TestProperty('autoPlay', 'autoplay', 'boolean', testAudioElementautoPlayTestItems);
            propertiesAudioElement.add(testAudioElementautoPlay);

            //#endregion autoPlay
            //#region buffered
            var testAudioElementbufferedTestItems = new Array(0);

            //#region Initialize TestItems
            //#endregion Initialize TestItems
            var testAudioElementbuffered = new TestProperty('buffered', 'buffered', 'TimeRanges', testAudioElementbufferedTestItems);
            propertiesAudioElement.add(testAudioElementbuffered);

            //#endregion buffered
            //#region controls
            var testAudioElementcontrolsTestItems = new Array(2);

            //#region Initialize TestItems
            testAudioElementcontrolsTestItems.add(true);
            testAudioElementcontrolsTestItems.add(false);

            //#endregion Initialize TestItems
            var testAudioElementcontrols = new TestProperty('controls', 'controls', 'boolean', testAudioElementcontrolsTestItems);
            propertiesAudioElement.add(testAudioElementcontrols);

            //#endregion controls
            //#region loop
            var testAudioElementloopTestItems = new Array(2);

            //#region Initialize TestItems
            testAudioElementloopTestItems.add(true);
            testAudioElementloopTestItems.add(false);

            //#endregion Initialize TestItems
            var testAudioElementloop = new TestProperty('loop', 'loop', 'boolean', testAudioElementloopTestItems);
            propertiesAudioElement.add(testAudioElementloop);

            //#endregion loop
            //#region muted
            var testAudioElementmutedTestItems = new Array(2);

            //#region Initialize TestItems
            testAudioElementmutedTestItems.add(true);
            testAudioElementmutedTestItems.add(false);

            //#endregion Initialize TestItems
            var testAudioElementmuted = new TestProperty('muted', 'muted', 'boolean', testAudioElementmutedTestItems);
            propertiesAudioElement.add(testAudioElementmuted);

            //#endregion muted
            //#region played
            var testAudioElementplayedTestItems = new Array(0);

            //#region Initialize TestItems
            //#endregion Initialize TestItems
            var testAudioElementplayed = new TestProperty('played', 'played', 'TimeRanges', testAudioElementplayedTestItems);
            propertiesAudioElement.add(testAudioElementplayed);

            //#endregion played
            //#region preload
            var testAudioElementpreloadTestItems = new Array(3);

            //#region Initialize TestItems
            testAudioElementpreloadTestItems.add('none');
            testAudioElementpreloadTestItems.add('metadata');
            testAudioElementpreloadTestItems.add('auto');

            //#endregion Initialize TestItems
            var testAudioElementpreload = new TestProperty('preload', 'preload', 'string', testAudioElementpreloadTestItems);
            propertiesAudioElement.add(testAudioElementpreload);

            //#endregion preload
            //#region source
            var testAudioElementsourceTestItems = new Array(5);

            //#region Initialize TestItems
            testAudioElementsourceTestItems.add('http://www.google.com/');
            testAudioElementsourceTestItems.add('http://www.yahoo.com/');
            testAudioElementsourceTestItems.add('http://www.msn.com/');
            testAudioElementsourceTestItems.add('http://www.aol.com/');
            testAudioElementsourceTestItems.add('http://www.something.com/');

            //#endregion Initialize TestItems
            var testAudioElementsource = new TestProperty('source', 'src', 'string', testAudioElementsourceTestItems);
            propertiesAudioElement.add(testAudioElementsource);

            //#endregion source
            //#region volume
            var testAudioElementvolumeTestItems = new Array(5);

            //#region Initialize TestItems
            testAudioElementvolumeTestItems.add(0);
            testAudioElementvolumeTestItems.add(0.4);
            testAudioElementvolumeTestItems.add(0.222334);
            testAudioElementvolumeTestItems.add(0.1);
            testAudioElementvolumeTestItems.add(1);

            //#endregion Initialize TestItems
            var testAudioElementvolume = new TestProperty('volume', 'volume', 'number', testAudioElementvolumeTestItems);
            propertiesAudioElement.add(testAudioElementvolume);

            //#endregion volume
            //#endregion Initialize Properties
            var testAudioElement = new TestElement('AudioElement', 'audio', propertiesAudioElement);
            elements.add(testAudioElement);

            //#endregion AudioElement
            //#region BaseElement
            var propertiesBaseElement = new Array(2);

            //#region Initialize Properties
            //#region href
            var testBaseElementhrefTestItems = new Array(5);

            //#region Initialize TestItems
            testBaseElementhrefTestItems.add('http://www.google.com/');
            testBaseElementhrefTestItems.add('http://www.yahoo.com/');
            testBaseElementhrefTestItems.add('http://www.msn.com/');
            testBaseElementhrefTestItems.add('http://www.aol.com/');
            testBaseElementhrefTestItems.add('http://www.something.com/');

            //#endregion Initialize TestItems
            var testBaseElementhref = new TestProperty('href', 'href', 'string', testBaseElementhrefTestItems);
            propertiesBaseElement.add(testBaseElementhref);

            //#endregion href
            //#region target
            var testBaseElementtargetTestItems = new Array(4);

            //#region Initialize TestItems
            testBaseElementtargetTestItems.add('_self');
            testBaseElementtargetTestItems.add('_blank');
            testBaseElementtargetTestItems.add('_parent');
            testBaseElementtargetTestItems.add('_top');

            //#endregion Initialize TestItems
            var testBaseElementtarget = new TestProperty('target', 'target', 'string', testBaseElementtargetTestItems);
            propertiesBaseElement.add(testBaseElementtarget);

            //#endregion target
            //#endregion Initialize Properties
            var testBaseElement = new TestElement('BaseElement', 'base', propertiesBaseElement);
            elements.add(testBaseElement);

            //#endregion BaseElement
            //#region BidirectionalIsolationElement
            var propertiesBidirectionalIsolationElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testBidirectionalIsolationElement = new TestElement('BidirectionalIsolationElement', 'bdi', propertiesBidirectionalIsolationElement);
            elements.add(testBidirectionalIsolationElement);

            //#endregion BidirectionalIsolationElement
            //#region BidirectionalOverrideElement
            var propertiesBidirectionalOverrideElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testBidirectionalOverrideElement = new TestElement('BidirectionalOverrideElement', 'bdo', propertiesBidirectionalOverrideElement);
            elements.add(testBidirectionalOverrideElement);

            //#endregion BidirectionalOverrideElement
            //#region BlockQuotationElement
            var propertiesBlockQuotationElement = new Array(1);

            //#region Initialize Properties
            //#region citation
            var testBlockQuotationElementcitationTestItems = new Array(5);

            //#region Initialize TestItems
            testBlockQuotationElementcitationTestItems.add('http://www.google.com/');
            testBlockQuotationElementcitationTestItems.add('http://www.yahoo.com/');
            testBlockQuotationElementcitationTestItems.add('http://www.msn.com/');
            testBlockQuotationElementcitationTestItems.add('http://www.aol.com/');
            testBlockQuotationElementcitationTestItems.add('http://www.something.com/');

            //#endregion Initialize TestItems
            var testBlockQuotationElementcitation = new TestProperty('citation', 'cite', 'string', testBlockQuotationElementcitationTestItems);
            propertiesBlockQuotationElement.add(testBlockQuotationElementcitation);

            //#endregion citation
            //#endregion Initialize Properties
            var testBlockQuotationElement = new TestElement('BlockQuotationElement', 'blockquote', propertiesBlockQuotationElement);
            elements.add(testBlockQuotationElement);

            //#endregion BlockQuotationElement
            //#region BodyElement
            var propertiesBodyElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testBodyElement = new TestElement('BodyElement', 'body', propertiesBodyElement);
            elements.add(testBodyElement);

            //#endregion BodyElement
            //#region BoldElement
            var propertiesBoldElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testBoldElement = new TestElement('BoldElement', 'b', propertiesBoldElement);
            elements.add(testBoldElement);

            //#endregion BoldElement
            //#region ButtonElement
            var propertiesButtonElement = new Array(6);

            //#region Initialize Properties
            //#region autoFocus
            var testButtonElementautoFocusTestItems = new Array(2);

            //#region Initialize TestItems
            testButtonElementautoFocusTestItems.add(true);
            testButtonElementautoFocusTestItems.add(false);

            //#endregion Initialize TestItems
            var testButtonElementautoFocus = new TestProperty('autoFocus', 'autofocus', 'boolean', testButtonElementautoFocusTestItems);
            propertiesButtonElement.add(testButtonElementautoFocus);

            //#endregion autoFocus
            //#region disabled
            var testButtonElementdisabledTestItems = new Array(2);

            //#region Initialize TestItems
            testButtonElementdisabledTestItems.add(true);
            testButtonElementdisabledTestItems.add(false);

            //#endregion Initialize TestItems
            var testButtonElementdisabled = new TestProperty('disabled', 'disabled', 'boolean', testButtonElementdisabledTestItems);
            propertiesButtonElement.add(testButtonElementdisabled);

            //#endregion disabled
            //#region name
            var testButtonElementnameTestItems = new Array(5);

            //#region Initialize TestItems
            testButtonElementnameTestItems.add('');
            testButtonElementnameTestItems.add('234567');
            testButtonElementnameTestItems.add('Testing a long sentence just in case the property does not support it.');
            testButtonElementnameTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testButtonElementnameTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testButtonElementname = new TestProperty('name', 'name', 'string', testButtonElementnameTestItems);
            propertiesButtonElement.add(testButtonElementname);

            //#endregion name
            //#region type
            var testButtonElementtypeTestItems = new Array(3);

            //#region Initialize TestItems
            testButtonElementtypeTestItems.add('submit');
            testButtonElementtypeTestItems.add('reset');
            testButtonElementtypeTestItems.add('button');

            //#endregion Initialize TestItems
            var testButtonElementtype = new TestProperty('type', 'type', 'string', testButtonElementtypeTestItems);
            propertiesButtonElement.add(testButtonElementtype);

            //#endregion type
            //#region value
            var testButtonElementvalueTestItems = new Array(5);

            //#region Initialize TestItems
            testButtonElementvalueTestItems.add('');
            testButtonElementvalueTestItems.add('234567');
            testButtonElementvalueTestItems.add('Testing a long sentence just in case the property does not support it.');
            testButtonElementvalueTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testButtonElementvalueTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testButtonElementvalue = new TestProperty('value', 'value', 'string', testButtonElementvalueTestItems);
            propertiesButtonElement.add(testButtonElementvalue);

            //#endregion value
            //#endregion Initialize Properties
            var testButtonElement = new TestElement('ButtonElement', 'button', propertiesButtonElement);
            elements.add(testButtonElement);

            //#endregion ButtonElement
            //#region CanvasElement
            var propertiesCanvasElement = new Array(2);

            //#region Initialize Properties
            //#region width
            var testCanvasElementwidthTestItems = new Array(5);

            //#region Initialize TestItems
            testCanvasElementwidthTestItems.add(100);
            testCanvasElementwidthTestItems.add(500);
            testCanvasElementwidthTestItems.add(600);
            testCanvasElementwidthTestItems.add(250);
            testCanvasElementwidthTestItems.add(400);

            //#endregion Initialize TestItems
            var testCanvasElementwidth = new TestProperty('width', 'width', 'number', testCanvasElementwidthTestItems);
            propertiesCanvasElement.add(testCanvasElementwidth);

            //#endregion width
            //#region height
            var testCanvasElementheightTestItems = new Array(5);

            //#region Initialize TestItems
            testCanvasElementheightTestItems.add(100);
            testCanvasElementheightTestItems.add(500);
            testCanvasElementheightTestItems.add(600);
            testCanvasElementheightTestItems.add(250);
            testCanvasElementheightTestItems.add(400);

            //#endregion Initialize TestItems
            var testCanvasElementheight = new TestProperty('height', 'height', 'number', testCanvasElementheightTestItems);
            propertiesCanvasElement.add(testCanvasElementheight);

            //#endregion height
            //#endregion Initialize Properties
            var testCanvasElement = new TestElement('CanvasElement', 'canvas', propertiesCanvasElement);
            elements.add(testCanvasElement);

            //#endregion CanvasElement
            //#region CitationElement
            var propertiesCitationElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testCitationElement = new TestElement('CitationElement', 'cite', propertiesCitationElement);
            elements.add(testCitationElement);

            //#endregion CitationElement
            //#region CodeElement
            var propertiesCodeElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testCodeElement = new TestElement('CodeElement', 'code', propertiesCodeElement);
            elements.add(testCodeElement);

            //#endregion CodeElement
            //#region DataElement
            var propertiesDataElement = new Array(1);

            //#region Initialize Properties
            //#region value
            var testDataElementvalueTestItems = new Array(0);

            //#region Initialize TestItems
            //#endregion Initialize TestItems
            var testDataElementvalue = new TestProperty('value', 'nodeValue', 'string', testDataElementvalueTestItems);
            propertiesDataElement.add(testDataElementvalue);

            //#endregion value
            //#endregion Initialize Properties
            var testDataElement = new TestElement('DataElement', 'data', propertiesDataElement);
            elements.add(testDataElement);

            //#endregion DataElement
            //#region DataListElement
            var propertiesDataListElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testDataListElement = new TestElement('DataListElement', 'datalist', propertiesDataListElement);
            elements.add(testDataListElement);

            //#endregion DataListElement
            //#region DefinitionElement
            var propertiesDefinitionElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testDefinitionElement = new TestElement('DefinitionElement', 'dfn', propertiesDefinitionElement);
            elements.add(testDefinitionElement);

            //#endregion DefinitionElement
            //#region DefinitionTermElement
            var propertiesDefinitionTermElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testDefinitionTermElement = new TestElement('DefinitionTermElement', 'dt', propertiesDefinitionTermElement);
            elements.add(testDefinitionTermElement);

            //#endregion DefinitionTermElement
            //#region DeletedTextElement
            var propertiesDeletedTextElement = new Array(1);

            //#region Initialize Properties
            //#region citation
            var testDeletedTextElementcitationTestItems = new Array(5);

            //#region Initialize TestItems
            testDeletedTextElementcitationTestItems.add('http://www.google.com/');
            testDeletedTextElementcitationTestItems.add('http://www.yahoo.com/');
            testDeletedTextElementcitationTestItems.add('http://www.msn.com/');
            testDeletedTextElementcitationTestItems.add('http://www.aol.com/');
            testDeletedTextElementcitationTestItems.add('http://www.something.com/');

            //#endregion Initialize TestItems
            var testDeletedTextElementcitation = new TestProperty('citation', 'cite', 'string', testDeletedTextElementcitationTestItems);
            propertiesDeletedTextElement.add(testDeletedTextElementcitation);

            //#endregion citation
            //#endregion Initialize Properties
            var testDeletedTextElement = new TestElement('DeletedTextElement', 'del', propertiesDeletedTextElement);
            elements.add(testDeletedTextElement);

            //#endregion DeletedTextElement
            //#region DescriptionElement
            var propertiesDescriptionElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testDescriptionElement = new TestElement('DescriptionElement', 'dd', propertiesDescriptionElement);
            elements.add(testDescriptionElement);

            //#endregion DescriptionElement
            //#region DescriptionListElement
            var propertiesDescriptionListElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testDescriptionListElement = new TestElement('DescriptionListElement', 'dl', propertiesDescriptionListElement);
            elements.add(testDescriptionListElement);

            //#endregion DescriptionListElement
            //#region DetailsElement
            var propertiesDetailsElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testDetailsElement = new TestElement('DetailsElement', 'details', propertiesDetailsElement);
            elements.add(testDetailsElement);

            //#endregion DetailsElement
            //#region DivisionElement
            var propertiesDivisionElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testDivisionElement = new TestElement('DivisionElement', 'div', propertiesDivisionElement);
            elements.add(testDivisionElement);

            //#endregion DivisionElement
            //#region EmbedElement
            var propertiesEmbedElement = new Array(3);

            //#region Initialize Properties
            //#region height
            var testEmbedElementheightTestItems = new Array(5);

            //#region Initialize TestItems
            testEmbedElementheightTestItems.add('');
            testEmbedElementheightTestItems.add('234567');
            testEmbedElementheightTestItems.add('Testing a long sentence just in case the property does not support it.');
            testEmbedElementheightTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testEmbedElementheightTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testEmbedElementheight = new TestProperty('height', 'height', 'string', testEmbedElementheightTestItems);
            propertiesEmbedElement.add(testEmbedElementheight);

            //#endregion height
            //#region source
            var testEmbedElementsourceTestItems = new Array(5);

            //#region Initialize TestItems
            testEmbedElementsourceTestItems.add('http://www.google.com/');
            testEmbedElementsourceTestItems.add('http://www.yahoo.com/');
            testEmbedElementsourceTestItems.add('http://www.msn.com/');
            testEmbedElementsourceTestItems.add('http://www.aol.com/');
            testEmbedElementsourceTestItems.add('http://www.something.com/');

            //#endregion Initialize TestItems
            var testEmbedElementsource = new TestProperty('source', 'src', 'string', testEmbedElementsourceTestItems);
            propertiesEmbedElement.add(testEmbedElementsource);

            //#endregion source
            //#region width
            var testEmbedElementwidthTestItems = new Array(5);

            //#region Initialize TestItems
            testEmbedElementwidthTestItems.add('');
            testEmbedElementwidthTestItems.add('234567');
            testEmbedElementwidthTestItems.add('Testing a long sentence just in case the property does not support it.');
            testEmbedElementwidthTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testEmbedElementwidthTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testEmbedElementwidth = new TestProperty('width', 'width', 'string', testEmbedElementwidthTestItems);
            propertiesEmbedElement.add(testEmbedElementwidth);

            //#endregion width
            //#endregion Initialize Properties
            var testEmbedElement = new TestElement('EmbedElement', 'embed', propertiesEmbedElement);
            elements.add(testEmbedElement);

            //#endregion EmbedElement
            //#region EmbeddedObjectElement
            var propertiesEmbeddedObjectElement = new Array(6);

            //#region Initialize Properties
            //#region data
            var testEmbeddedObjectElementdataTestItems = new Array(5);

            //#region Initialize TestItems
            testEmbeddedObjectElementdataTestItems.add('http://www.google.com/');
            testEmbeddedObjectElementdataTestItems.add('http://www.yahoo.com/');
            testEmbeddedObjectElementdataTestItems.add('http://www.msn.com/');
            testEmbeddedObjectElementdataTestItems.add('http://www.aol.com/');
            testEmbeddedObjectElementdataTestItems.add('http://www.something.com/');

            //#endregion Initialize TestItems
            var testEmbeddedObjectElementdata = new TestProperty('data', 'data', 'string', testEmbeddedObjectElementdataTestItems);
            propertiesEmbeddedObjectElement.add(testEmbeddedObjectElementdata);

            //#endregion data
            //#region height
            var testEmbeddedObjectElementheightTestItems = new Array(5);

            //#region Initialize TestItems
            testEmbeddedObjectElementheightTestItems.add('');
            testEmbeddedObjectElementheightTestItems.add('234567');
            testEmbeddedObjectElementheightTestItems.add('Testing a long sentence just in case the property does not support it.');
            testEmbeddedObjectElementheightTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testEmbeddedObjectElementheightTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testEmbeddedObjectElementheight = new TestProperty('height', 'height', 'string', testEmbeddedObjectElementheightTestItems);
            propertiesEmbeddedObjectElement.add(testEmbeddedObjectElementheight);

            //#endregion height
            //#region name
            var testEmbeddedObjectElementnameTestItems = new Array(5);

            //#region Initialize TestItems
            testEmbeddedObjectElementnameTestItems.add('');
            testEmbeddedObjectElementnameTestItems.add('234567');
            testEmbeddedObjectElementnameTestItems.add('Testing a long sentence just in case the property does not support it.');
            testEmbeddedObjectElementnameTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testEmbeddedObjectElementnameTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testEmbeddedObjectElementname = new TestProperty('name', 'name', 'string', testEmbeddedObjectElementnameTestItems);
            propertiesEmbeddedObjectElement.add(testEmbeddedObjectElementname);

            //#endregion name
            //#region type
            var testEmbeddedObjectElementtypeTestItems = new Array(5);

            //#region Initialize TestItems
            testEmbeddedObjectElementtypeTestItems.add('');
            testEmbeddedObjectElementtypeTestItems.add('234567');
            testEmbeddedObjectElementtypeTestItems.add('Testing a long sentence just in case the property does not support it.');
            testEmbeddedObjectElementtypeTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testEmbeddedObjectElementtypeTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testEmbeddedObjectElementtype = new TestProperty('type', 'type', 'string', testEmbeddedObjectElementtypeTestItems);
            propertiesEmbeddedObjectElement.add(testEmbeddedObjectElementtype);

            //#endregion type
            //#region width
            var testEmbeddedObjectElementwidthTestItems = new Array(5);

            //#region Initialize TestItems
            testEmbeddedObjectElementwidthTestItems.add('');
            testEmbeddedObjectElementwidthTestItems.add('234567');
            testEmbeddedObjectElementwidthTestItems.add('Testing a long sentence just in case the property does not support it.');
            testEmbeddedObjectElementwidthTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testEmbeddedObjectElementwidthTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testEmbeddedObjectElementwidth = new TestProperty('width', 'width', 'string', testEmbeddedObjectElementwidthTestItems);
            propertiesEmbeddedObjectElement.add(testEmbeddedObjectElementwidth);

            //#endregion width
            //#endregion Initialize Properties
            var testEmbeddedObjectElement = new TestElement('EmbeddedObjectElement', 'obj', propertiesEmbeddedObjectElement);
            elements.add(testEmbeddedObjectElement);

            //#endregion EmbeddedObjectElement
            //#region EmphasisElement
            var propertiesEmphasisElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testEmphasisElement = new TestElement('EmphasisElement', 'em', propertiesEmphasisElement);
            elements.add(testEmphasisElement);

            //#endregion EmphasisElement
            //#region FieldsetElement
            var propertiesFieldsetElement = new Array(2);

            //#region Initialize Properties
            //#region disabled
            var testFieldsetElementdisabledTestItems = new Array(2);

            //#region Initialize TestItems
            testFieldsetElementdisabledTestItems.add(true);
            testFieldsetElementdisabledTestItems.add(false);

            //#endregion Initialize TestItems
            var testFieldsetElementdisabled = new TestProperty('disabled', 'disabled', 'boolean', testFieldsetElementdisabledTestItems);
            propertiesFieldsetElement.add(testFieldsetElementdisabled);

            //#endregion disabled
            //#endregion Initialize Properties
            var testFieldsetElement = new TestElement('FieldsetElement', 'fieldset', propertiesFieldsetElement);
            elements.add(testFieldsetElement);

            //#endregion FieldsetElement
            //#region FigureElement
            var propertiesFigureElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testFigureElement = new TestElement('FigureElement', 'figure', propertiesFigureElement);
            elements.add(testFigureElement);

            //#endregion FigureElement
            //#region FigureCaptionElement
            var propertiesFigureCaptionElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testFigureCaptionElement = new TestElement('FigureCaptionElement', 'figcaption', propertiesFigureCaptionElement);
            elements.add(testFigureCaptionElement);

            //#endregion FigureCaptionElement
            //#region FooterElement
            var propertiesFooterElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testFooterElement = new TestElement('FooterElement', 'footer', propertiesFooterElement);
            elements.add(testFooterElement);

            //#endregion FooterElement
            //#region FormElement
            var propertiesFormElement = new Array(7);

            //#region Initialize Properties
            //#region acceptCharset
            var testFormElementacceptCharsetTestItems = new Array(5);

            //#region Initialize TestItems
            testFormElementacceptCharsetTestItems.add('');
            testFormElementacceptCharsetTestItems.add('234567');
            testFormElementacceptCharsetTestItems.add('Testing a long sentence just in case the property does not support it.');
            testFormElementacceptCharsetTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testFormElementacceptCharsetTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testFormElementacceptCharset = new TestProperty('acceptCharset', 'acceptCharset', 'string', testFormElementacceptCharsetTestItems);
            propertiesFormElement.add(testFormElementacceptCharset);

            //#endregion acceptCharset
            //#region action
            var testFormElementactionTestItems = new Array(5);

            //#region Initialize TestItems
            testFormElementactionTestItems.add('http://www.google.com/');
            testFormElementactionTestItems.add('http://www.yahoo.com/');
            testFormElementactionTestItems.add('http://www.msn.com/');
            testFormElementactionTestItems.add('http://www.aol.com/');
            testFormElementactionTestItems.add('http://www.something.com/');

            //#endregion Initialize TestItems
            var testFormElementaction = new TestProperty('action', 'action', 'string', testFormElementactionTestItems);
            propertiesFormElement.add(testFormElementaction);

            //#endregion action
            //#region autoComplete
            var testFormElementautoCompleteTestItems = new Array(2);

            //#region Initialize TestItems
            testFormElementautoCompleteTestItems.add('off');
            testFormElementautoCompleteTestItems.add('on');

            //#endregion Initialize TestItems
            var testFormElementautoComplete = new TestProperty('autoComplete', 'autocomplete', 'string', testFormElementautoCompleteTestItems);
            propertiesFormElement.add(testFormElementautoComplete);

            //#endregion autoComplete
            //#region encodingType
            var testFormElementencodingTypeTestItems = new Array(3);

            //#region Initialize TestItems
            testFormElementencodingTypeTestItems.add('application/x-www-form-urlencoded');
            testFormElementencodingTypeTestItems.add('multipart/form-data');
            testFormElementencodingTypeTestItems.add('text/plain');

            //#endregion Initialize TestItems
            var testFormElementencodingType = new TestProperty('encodingType', 'enctype', 'string', testFormElementencodingTypeTestItems);
            propertiesFormElement.add(testFormElementencodingType);

            //#endregion encodingType
            //#region method
            var testFormElementmethodTestItems = new Array(2);

            //#region Initialize TestItems
            testFormElementmethodTestItems.add('post');
            testFormElementmethodTestItems.add('get');

            //#endregion Initialize TestItems
            var testFormElementmethod = new TestProperty('method', 'method', 'string', testFormElementmethodTestItems);
            propertiesFormElement.add(testFormElementmethod);

            //#endregion method
            //#region name
            var testFormElementnameTestItems = new Array(5);

            //#region Initialize TestItems
            testFormElementnameTestItems.add('');
            testFormElementnameTestItems.add('234567');
            testFormElementnameTestItems.add('Testing a long sentence just in case the property does not support it.');
            testFormElementnameTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testFormElementnameTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testFormElementname = new TestProperty('name', 'name', 'string', testFormElementnameTestItems);
            propertiesFormElement.add(testFormElementname);

            //#endregion name
            //#region target
            var testFormElementtargetTestItems = new Array(4);

            //#region Initialize TestItems
            testFormElementtargetTestItems.add('_self');
            testFormElementtargetTestItems.add('_blank');
            testFormElementtargetTestItems.add('_parent');
            testFormElementtargetTestItems.add('_top');

            //#endregion Initialize TestItems
            var testFormElementtarget = new TestProperty('target', 'target', 'string', testFormElementtargetTestItems);
            propertiesFormElement.add(testFormElementtarget);

            //#endregion target
            //#endregion Initialize Properties
            var testFormElement = new TestElement('FormElement', 'form', propertiesFormElement);
            elements.add(testFormElement);

            //#endregion FormElement
            //#region HeadElement
            var propertiesHeadElement = new Array(1);

            //#region Initialize Properties
            //#region profile
            var testHeadElementprofileTestItems = new Array(5);

            //#region Initialize TestItems
            testHeadElementprofileTestItems.add('');
            testHeadElementprofileTestItems.add('234567');
            testHeadElementprofileTestItems.add('Testing a long sentence just in case the property does not support it.');
            testHeadElementprofileTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testHeadElementprofileTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testHeadElementprofile = new TestProperty('profile', 'profile', 'string', testHeadElementprofileTestItems);
            propertiesHeadElement.add(testHeadElementprofile);

            //#endregion profile
            //#endregion Initialize Properties
            var testHeadElement = new TestElement('HeadElement', 'head', propertiesHeadElement);
            elements.add(testHeadElement);

            //#endregion HeadElement
            //#region HeaderElement
            var propertiesHeaderElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testHeaderElement = new TestElement('HeaderElement', 'header', propertiesHeaderElement);
            elements.add(testHeaderElement);

            //#endregion HeaderElement
            //#region HeaderFiveElement
            var propertiesHeaderFiveElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testHeaderFiveElement = new TestElement('HeaderFiveElement', 'h5', propertiesHeaderFiveElement);
            elements.add(testHeaderFiveElement);

            //#endregion HeaderFiveElement
            //#region HeaderFourElement
            var propertiesHeaderFourElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testHeaderFourElement = new TestElement('HeaderFourElement', 'h4', propertiesHeaderFourElement);
            elements.add(testHeaderFourElement);

            //#endregion HeaderFourElement
            //#region HeaderOneElement
            var propertiesHeaderOneElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testHeaderOneElement = new TestElement('HeaderOneElement', 'h1', propertiesHeaderOneElement);
            elements.add(testHeaderOneElement);

            //#endregion HeaderOneElement
            //#region HeaderSixElement
            var propertiesHeaderSixElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testHeaderSixElement = new TestElement('HeaderSixElement', 'h6', propertiesHeaderSixElement);
            elements.add(testHeaderSixElement);

            //#endregion HeaderSixElement
            //#region HeaderThreeElement
            var propertiesHeaderThreeElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testHeaderThreeElement = new TestElement('HeaderThreeElement', 'h3', propertiesHeaderThreeElement);
            elements.add(testHeaderThreeElement);

            //#endregion HeaderThreeElement
            //#region HeaderTwoElement
            var propertiesHeaderTwoElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testHeaderTwoElement = new TestElement('HeaderTwoElement', 'h2', propertiesHeaderTwoElement);
            elements.add(testHeaderTwoElement);

            //#endregion HeaderTwoElement
            //#region HorizontalRuleElement
            var propertiesHorizontalRuleElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testHorizontalRuleElement = new TestElement('HorizontalRuleElement', 'hr', propertiesHorizontalRuleElement);
            elements.add(testHorizontalRuleElement);

            //#endregion HorizontalRuleElement
            //#region ImageElement
            var propertiesImageElement = new Array(5);

            //#region Initialize Properties
            //#region alternate
            var testImageElementalternateTestItems = new Array(5);

            //#region Initialize TestItems
            testImageElementalternateTestItems.add('');
            testImageElementalternateTestItems.add('234567');
            testImageElementalternateTestItems.add('Testing a long sentence just in case the property does not support it.');
            testImageElementalternateTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testImageElementalternateTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testImageElementalternate = new TestProperty('alternate', 'alt', 'string', testImageElementalternateTestItems);
            propertiesImageElement.add(testImageElementalternate);

            //#endregion alternate
            //#region height
            var testImageElementheightTestItems = new Array(5);

            //#region Initialize TestItems
            testImageElementheightTestItems.add(100);
            testImageElementheightTestItems.add(500);
            testImageElementheightTestItems.add(600);
            testImageElementheightTestItems.add(250);
            testImageElementheightTestItems.add(300);

            //#endregion Initialize TestItems
            var testImageElementheight = new TestProperty('height', 'height', 'number', testImageElementheightTestItems);
            propertiesImageElement.add(testImageElementheight);

            //#endregion height
            //#region longDescription
            var testImageElementlongDescriptionTestItems = new Array(5);

            //#region Initialize TestItems
            testImageElementlongDescriptionTestItems.add('http://www.google.com/');
            testImageElementlongDescriptionTestItems.add('http://www.yahoo.com/');
            testImageElementlongDescriptionTestItems.add('http://www.msn.com/');
            testImageElementlongDescriptionTestItems.add('http://www.aol.com/');
            testImageElementlongDescriptionTestItems.add('http://www.something.com/');

            //#endregion Initialize TestItems
            var testImageElementlongDescription = new TestProperty('longDescription', 'longDesc', 'string', testImageElementlongDescriptionTestItems);
            propertiesImageElement.add(testImageElementlongDescription);

            //#endregion longDescription
            //#region source
            var testImageElementsourceTestItems = new Array(5);

            //#region Initialize TestItems
            testImageElementsourceTestItems.add('http://www.google.com/');
            testImageElementsourceTestItems.add('http://www.yahoo.com/');
            testImageElementsourceTestItems.add('http://www.msn.com/');
            testImageElementsourceTestItems.add('http://www.aol.com/');
            testImageElementsourceTestItems.add('http://www.something.com/');

            //#endregion Initialize TestItems
            var testImageElementsource = new TestProperty('source', 'src', 'string', testImageElementsourceTestItems);
            propertiesImageElement.add(testImageElementsource);

            //#endregion source
            //#region width
            var testImageElementwidthTestItems = new Array(5);

            //#region Initialize TestItems
            testImageElementwidthTestItems.add(100);
            testImageElementwidthTestItems.add(500);
            testImageElementwidthTestItems.add(600);
            testImageElementwidthTestItems.add(250);
            testImageElementwidthTestItems.add(300);

            //#endregion Initialize TestItems
            var testImageElementwidth = new TestProperty('width', 'width', 'number', testImageElementwidthTestItems);
            propertiesImageElement.add(testImageElementwidth);

            //#endregion width
            //#endregion Initialize Properties
            var testImageElement = new TestElement('ImageElement', 'img', propertiesImageElement);
            elements.add(testImageElement);

            //#endregion ImageElement
            //#region InlineFrameElement
            var propertiesInlineFrameElement = new Array(6);

            //#region Initialize Properties
            //#region height
            var testInlineFrameElementheightTestItems = new Array(5);

            //#region Initialize TestItems
            testInlineFrameElementheightTestItems.add('');
            testInlineFrameElementheightTestItems.add('234567');
            testInlineFrameElementheightTestItems.add('Testing a long sentence just in case the property does not support it.');
            testInlineFrameElementheightTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testInlineFrameElementheightTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testInlineFrameElementheight = new TestProperty('height', 'height', 'string', testInlineFrameElementheightTestItems);
            propertiesInlineFrameElement.add(testInlineFrameElementheight);

            //#endregion height
            //#region name
            var testInlineFrameElementnameTestItems = new Array(5);

            //#region Initialize TestItems
            testInlineFrameElementnameTestItems.add('');
            testInlineFrameElementnameTestItems.add('234567');
            testInlineFrameElementnameTestItems.add('Testing a long sentence just in case the property does not support it.');
            testInlineFrameElementnameTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testInlineFrameElementnameTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testInlineFrameElementname = new TestProperty('name', 'name', 'string', testInlineFrameElementnameTestItems);
            propertiesInlineFrameElement.add(testInlineFrameElementname);

            //#endregion name
            //#region scrolling
            var testInlineFrameElementscrollingTestItems = new Array(3);

            //#region Initialize TestItems
            testInlineFrameElementscrollingTestItems.add('auto');
            testInlineFrameElementscrollingTestItems.add('yes');
            testInlineFrameElementscrollingTestItems.add('no');

            //#endregion Initialize TestItems
            var testInlineFrameElementscrolling = new TestProperty('scrolling', 'scrolling', 'string', testInlineFrameElementscrollingTestItems);
            propertiesInlineFrameElement.add(testInlineFrameElementscrolling);

            //#endregion scrolling
            //#region sandbox
            var testInlineFrameElementsandboxTestItems = new Array(4);

            //#region Initialize TestItems
            testInlineFrameElementsandboxTestItems.add('allow-same-origin');
            testInlineFrameElementsandboxTestItems.add('allow-top-navigation');
            testInlineFrameElementsandboxTestItems.add('allow-forms');
            testInlineFrameElementsandboxTestItems.add('allow-scripts');

            //#endregion Initialize TestItems
            var testInlineFrameElementsandbox = new TestProperty('sandbox', 'sandbox', 'string', testInlineFrameElementsandboxTestItems);
            propertiesInlineFrameElement.add(testInlineFrameElementsandbox);

            //#endregion sandbox
            //#region source
            var testInlineFrameElementsourceTestItems = new Array(5);

            //#region Initialize TestItems
            testInlineFrameElementsourceTestItems.add('http://www.google.com/');
            testInlineFrameElementsourceTestItems.add('http://www.yahoo.com/');
            testInlineFrameElementsourceTestItems.add('http://www.msn.com/');
            testInlineFrameElementsourceTestItems.add('http://www.aol.com/');
            testInlineFrameElementsourceTestItems.add('http://www.something.com/');

            //#endregion Initialize TestItems
            var testInlineFrameElementsource = new TestProperty('source', 'src', 'string', testInlineFrameElementsourceTestItems);
            propertiesInlineFrameElement.add(testInlineFrameElementsource);

            //#endregion source
            //#region width
            var testInlineFrameElementwidthTestItems = new Array(5);

            //#region Initialize TestItems
            testInlineFrameElementwidthTestItems.add('');
            testInlineFrameElementwidthTestItems.add('234567');
            testInlineFrameElementwidthTestItems.add('Testing a long sentence just in case the property does not support it.');
            testInlineFrameElementwidthTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testInlineFrameElementwidthTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testInlineFrameElementwidth = new TestProperty('width', 'width', 'string', testInlineFrameElementwidthTestItems);
            propertiesInlineFrameElement.add(testInlineFrameElementwidth);

            //#endregion width
            //#endregion Initialize Properties
            var testInlineFrameElement = new TestElement('InlineFrameElement', 'iframe', propertiesInlineFrameElement);
            elements.add(testInlineFrameElement);

            //#endregion InlineFrameElement
            //#region InputElement
            var propertiesInputElement = new Array(21);

            //#region Initialize Properties
            //#region type
            var testInputElementtypeTestItems = new Array(23);

            //#region Initialize TestItems
            testInputElementtypeTestItems.add('button');
            testInputElementtypeTestItems.add('checkbox');
            testInputElementtypeTestItems.add('color');
            testInputElementtypeTestItems.add('date');
            testInputElementtypeTestItems.add('datetime');
            testInputElementtypeTestItems.add('datetime-local');
            testInputElementtypeTestItems.add('email');
            testInputElementtypeTestItems.add('file');
            testInputElementtypeTestItems.add('hidden');
            testInputElementtypeTestItems.add('image');
            testInputElementtypeTestItems.add('month');
            testInputElementtypeTestItems.add('number');
            testInputElementtypeTestItems.add('password');
            testInputElementtypeTestItems.add('radio');
            testInputElementtypeTestItems.add('range');
            testInputElementtypeTestItems.add('reset');
            testInputElementtypeTestItems.add('search');
            testInputElementtypeTestItems.add('submit');
            testInputElementtypeTestItems.add('tel');
            testInputElementtypeTestItems.add('text');
            testInputElementtypeTestItems.add('time');
            testInputElementtypeTestItems.add('url');
            testInputElementtypeTestItems.add('week');

            //#endregion Initialize TestItems
            var testInputElementtype = new TestProperty('type', 'type', 'string', testInputElementtypeTestItems);
            propertiesInputElement.add(testInputElementtype);

            //#endregion type
            //#region accept
            var testInputElementacceptTestItems = new Array(3);

            //#region Initialize TestItems
            testInputElementacceptTestItems.add('audio/*');
            testInputElementacceptTestItems.add('video/*');
            testInputElementacceptTestItems.add('image/*');

            //#endregion Initialize TestItems
            var testInputElementaccept = new TestProperty('accept', 'accept', 'string', testInputElementacceptTestItems);
            propertiesInputElement.add(testInputElementaccept);

            //#endregion accept
            //#region autoComplete
            var testInputElementautoCompleteTestItems = new Array(2);

            //#region Initialize TestItems
            testInputElementautoCompleteTestItems.add('off');
            testInputElementautoCompleteTestItems.add('on');

            //#endregion Initialize TestItems
            var testInputElementautoComplete = new TestProperty('autoComplete', 'autocomplete', 'string', testInputElementautoCompleteTestItems);
            propertiesInputElement.add(testInputElementautoComplete);

            //#endregion autoComplete
            //#region autoFocus
            var testInputElementautoFocusTestItems = new Array(2);

            //#region Initialize TestItems
            testInputElementautoFocusTestItems.add(true);
            testInputElementautoFocusTestItems.add(false);

            //#endregion Initialize TestItems
            var testInputElementautoFocus = new TestProperty('autoFocus', 'autofocus', 'boolean', testInputElementautoFocusTestItems);
            propertiesInputElement.add(testInputElementautoFocus);

            //#endregion autoFocus
            //#region checked
            var testInputElementcheckedTestItems = new Array(2);

            //#region Initialize TestItems
            testInputElementcheckedTestItems.add(true);
            testInputElementcheckedTestItems.add(false);

            //#endregion Initialize TestItems
            var testInputElementchecked = new TestProperty('checked', 'checked', 'boolean', testInputElementcheckedTestItems);
            propertiesInputElement.add(testInputElementchecked);

            //#endregion checked
            //#region disabled
            var testInputElementdisabledTestItems = new Array(2);

            //#region Initialize TestItems
            testInputElementdisabledTestItems.add(true);
            testInputElementdisabledTestItems.add(false);

            //#endregion Initialize TestItems
            var testInputElementdisabled = new TestProperty('disabled', 'disabled', 'boolean', testInputElementdisabledTestItems);
            propertiesInputElement.add(testInputElementdisabled);

            //#endregion disabled
            //#region height
            var testInputElementheightTestItems = new Array(1);

            //#region Initialize TestItems
            testInputElementheightTestItems.add(0);

            //#endregion Initialize TestItems
            var testInputElementheight = new TestProperty('height', 'height', 'number', testInputElementheightTestItems);
            propertiesInputElement.add(testInputElementheight);

            //#endregion height
            //#region max
            var testInputElementmaxTestItems = new Array(5);

            //#region Initialize TestItems
            testInputElementmaxTestItems.add('');
            testInputElementmaxTestItems.add('234567');
            testInputElementmaxTestItems.add('Testing a long sentence just in case the property does not support it.');
            testInputElementmaxTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testInputElementmaxTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testInputElementmax = new TestProperty('max', 'max', 'string', testInputElementmaxTestItems);
            propertiesInputElement.add(testInputElementmax);

            //#endregion max
            //#region min
            var testInputElementminTestItems = new Array(5);

            //#region Initialize TestItems
            testInputElementminTestItems.add('');
            testInputElementminTestItems.add('234567');
            testInputElementminTestItems.add('Testing a long sentence just in case the property does not support it.');
            testInputElementminTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testInputElementminTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testInputElementmin = new TestProperty('min', 'min', 'string', testInputElementminTestItems);
            propertiesInputElement.add(testInputElementmin);

            //#endregion min
            //#region multiple
            var testInputElementmultipleTestItems = new Array(2);

            //#region Initialize TestItems
            testInputElementmultipleTestItems.add(true);
            testInputElementmultipleTestItems.add(false);

            //#endregion Initialize TestItems
            var testInputElementmultiple = new TestProperty('multiple', 'multiple', 'boolean', testInputElementmultipleTestItems);
            propertiesInputElement.add(testInputElementmultiple);

            //#endregion multiple
            //#region name
            var testInputElementnameTestItems = new Array(5);

            //#region Initialize TestItems
            testInputElementnameTestItems.add('');
            testInputElementnameTestItems.add('234567');
            testInputElementnameTestItems.add('Testing a long sentence just in case the property does not support it.');
            testInputElementnameTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testInputElementnameTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testInputElementname = new TestProperty('name', 'name', 'string', testInputElementnameTestItems);
            propertiesInputElement.add(testInputElementname);

            //#endregion name
            //#region pattern
            var testInputElementpatternTestItems = new Array(5);

            //#region Initialize TestItems
            testInputElementpatternTestItems.add('');
            testInputElementpatternTestItems.add('234567');
            testInputElementpatternTestItems.add('Testing a long sentence just in case the property does not support it.');
            testInputElementpatternTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testInputElementpatternTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testInputElementpattern = new TestProperty('pattern', 'pattern', 'string', testInputElementpatternTestItems);
            propertiesInputElement.add(testInputElementpattern);

            //#endregion pattern
            //#region placeHolder
            var testInputElementplaceHolderTestItems = new Array(5);

            //#region Initialize TestItems
            testInputElementplaceHolderTestItems.add('');
            testInputElementplaceHolderTestItems.add('234567');
            testInputElementplaceHolderTestItems.add('Testing a long sentence just in case the property does not support it.');
            testInputElementplaceHolderTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testInputElementplaceHolderTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testInputElementplaceHolder = new TestProperty('placeHolder', 'placeholder', 'string', testInputElementplaceHolderTestItems);
            propertiesInputElement.add(testInputElementplaceHolder);

            //#endregion placeHolder
            //#region required
            var testInputElementrequiredTestItems = new Array(2);

            //#region Initialize TestItems
            testInputElementrequiredTestItems.add(true);
            testInputElementrequiredTestItems.add(false);

            //#endregion Initialize TestItems
            var testInputElementrequired = new TestProperty('required', 'required', 'boolean', testInputElementrequiredTestItems);
            propertiesInputElement.add(testInputElementrequired);

            //#endregion required
            //#region size
            var testInputElementsizeTestItems = new Array(5);

            //#region Initialize TestItems
            testInputElementsizeTestItems.add(100);
            testInputElementsizeTestItems.add(500);
            testInputElementsizeTestItems.add(600);
            testInputElementsizeTestItems.add(250);
            testInputElementsizeTestItems.add(300);

            //#endregion Initialize TestItems
            var testInputElementsize = new TestProperty('size', 'size', 'number', testInputElementsizeTestItems);
            propertiesInputElement.add(testInputElementsize);

            //#endregion size
            //#region source
            var testInputElementsourceTestItems = new Array(5);

            //#region Initialize TestItems
            testInputElementsourceTestItems.add('http://www.google.com/');
            testInputElementsourceTestItems.add('http://www.yahoo.com/');
            testInputElementsourceTestItems.add('http://www.msn.com/');
            testInputElementsourceTestItems.add('http://www.aol.com/');
            testInputElementsourceTestItems.add('http://www.something.com/');

            //#endregion Initialize TestItems
            var testInputElementsource = new TestProperty('source', 'src', 'string', testInputElementsourceTestItems);
            propertiesInputElement.add(testInputElementsource);

            //#endregion source
            //#region step
            var testInputElementstepTestItems = new Array(5);

            //#region Initialize TestItems
            testInputElementstepTestItems.add('');
            testInputElementstepTestItems.add('234567');
            testInputElementstepTestItems.add('Testing a long sentence just in case the property does not support it.');
            testInputElementstepTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testInputElementstepTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testInputElementstep = new TestProperty('step', 'step', 'string', testInputElementstepTestItems);
            propertiesInputElement.add(testInputElementstep);

            //#endregion step
            //#region value
            var testInputElementvalueTestItems = new Array(5);

            //#region Initialize TestItems
            testInputElementvalueTestItems.add('');
            testInputElementvalueTestItems.add('234567');
            testInputElementvalueTestItems.add('Testing a long sentence just in case the property does not support it.');
            testInputElementvalueTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testInputElementvalueTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testInputElementvalue = new TestProperty('value', 'value', 'string', testInputElementvalueTestItems);
            propertiesInputElement.add(testInputElementvalue);

            //#endregion value
            //#region width
            var testInputElementwidthTestItems = new Array(1);

            //#region Initialize TestItems
            testInputElementwidthTestItems.add(0);

            //#endregion Initialize TestItems
            var testInputElementwidth = new TestProperty('width', 'width', 'number', testInputElementwidthTestItems);
            propertiesInputElement.add(testInputElementwidth);

            //#endregion width
            //#endregion Initialize Properties
            var testInputElement = new TestElement('InputElement', 'input', propertiesInputElement);
            elements.add(testInputElement);

            //#endregion InputElement
            //#region InsertedElement
            var propertiesInsertedElement = new Array(1);

            //#region Initialize Properties
            //#region citation
            var testInsertedElementcitationTestItems = new Array(5);

            //#region Initialize TestItems
            testInsertedElementcitationTestItems.add('http://www.google.com/');
            testInsertedElementcitationTestItems.add('http://www.yahoo.com/');
            testInsertedElementcitationTestItems.add('http://www.msn.com/');
            testInsertedElementcitationTestItems.add('http://www.aol.com/');
            testInsertedElementcitationTestItems.add('http://www.something.com/');

            //#endregion Initialize TestItems
            var testInsertedElementcitation = new TestProperty('citation', 'cite', 'string', testInsertedElementcitationTestItems);
            propertiesInsertedElement.add(testInsertedElementcitation);

            //#endregion citation
            //#endregion Initialize Properties
            var testInsertedElement = new TestElement('InsertedElement', 'ins', propertiesInsertedElement);
            elements.add(testInsertedElement);

            //#endregion InsertedElement
            //#region ItalicElement
            var propertiesItalicElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testItalicElement = new TestElement('ItalicElement', 'i', propertiesItalicElement);
            elements.add(testItalicElement);

            //#endregion ItalicElement
            //#region KeyboardInputElement
            var propertiesKeyboardInputElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testKeyboardInputElement = new TestElement('KeyboardInputElement', 'kbd', propertiesKeyboardInputElement);
            elements.add(testKeyboardInputElement);

            //#endregion KeyboardInputElement
            //#region LabelElement
            var propertiesLabelElement = new Array(1);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testLabelElement = new TestElement('LabelElement', 'label', propertiesLabelElement);
            elements.add(testLabelElement);

            //#endregion LabelElement
            //#region LegendFieldElement
            var propertiesLegendFieldElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testLegendFieldElement = new TestElement('LegendFieldElement', 'legend', propertiesLegendFieldElement);
            elements.add(testLegendFieldElement);

            //#endregion LegendFieldElement
            //#region LineBreakElement
            var propertiesLineBreakElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testLineBreakElement = new TestElement('LineBreakElement', 'br', propertiesLineBreakElement);
            elements.add(testLineBreakElement);

            //#endregion LineBreakElement
            //#region LinkElement
            var propertiesLinkElement = new Array(7);

            //#region Initialize Properties
            //#region characterSet
            var testLinkElementcharacterSetTestItems = new Array(5);

            //#region Initialize TestItems
            testLinkElementcharacterSetTestItems.add('');
            testLinkElementcharacterSetTestItems.add('234567');
            testLinkElementcharacterSetTestItems.add('Testing a long sentence just in case the property does not support it.');
            testLinkElementcharacterSetTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testLinkElementcharacterSetTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testLinkElementcharacterSet = new TestProperty('characterSet', 'charset', 'string', testLinkElementcharacterSetTestItems);
            propertiesLinkElement.add(testLinkElementcharacterSet);

            //#endregion characterSet
            //#region href
            var testLinkElementhrefTestItems = new Array(5);

            //#region Initialize TestItems
            testLinkElementhrefTestItems.add('http://www.google.com/');
            testLinkElementhrefTestItems.add('http://www.yahoo.com/');
            testLinkElementhrefTestItems.add('http://www.msn.com/');
            testLinkElementhrefTestItems.add('http://www.aol.com/');
            testLinkElementhrefTestItems.add('http://www.something.com/');

            //#endregion Initialize TestItems
            var testLinkElementhref = new TestProperty('href', 'href', 'string', testLinkElementhrefTestItems);
            propertiesLinkElement.add(testLinkElementhref);

            //#endregion href
            //#region hrefLanguage
            var testLinkElementhrefLanguageTestItems = new Array(5);

            //#region Initialize TestItems
            testLinkElementhrefLanguageTestItems.add('');
            testLinkElementhrefLanguageTestItems.add('234567');
            testLinkElementhrefLanguageTestItems.add('Testing a long sentence just in case the property does not support it.');
            testLinkElementhrefLanguageTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testLinkElementhrefLanguageTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testLinkElementhrefLanguage = new TestProperty('hrefLanguage', 'hreflang', 'string', testLinkElementhrefLanguageTestItems);
            propertiesLinkElement.add(testLinkElementhrefLanguage);

            //#endregion hrefLanguage
            //#region media
            var testLinkElementmediaTestItems = new Array(5);

            //#region Initialize TestItems
            testLinkElementmediaTestItems.add('');
            testLinkElementmediaTestItems.add('234567');
            testLinkElementmediaTestItems.add('Testing a long sentence just in case the property does not support it.');
            testLinkElementmediaTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testLinkElementmediaTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testLinkElementmedia = new TestProperty('media', 'media', 'string', testLinkElementmediaTestItems);
            propertiesLinkElement.add(testLinkElementmedia);

            //#endregion media
            //#region relationship
            var testLinkElementrelationshipTestItems = new Array(5);

            //#region Initialize TestItems
            testLinkElementrelationshipTestItems.add('');
            testLinkElementrelationshipTestItems.add('234567');
            testLinkElementrelationshipTestItems.add('Testing a long sentence just in case the property does not support it.');
            testLinkElementrelationshipTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testLinkElementrelationshipTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testLinkElementrelationship = new TestProperty('relationship', 'rel', 'string', testLinkElementrelationshipTestItems);
            propertiesLinkElement.add(testLinkElementrelationship);

            //#endregion relationship
            //#region reverseRelationship
            var testLinkElementreverseRelationshipTestItems = new Array(5);

            //#region Initialize TestItems
            testLinkElementreverseRelationshipTestItems.add('');
            testLinkElementreverseRelationshipTestItems.add('234567');
            testLinkElementreverseRelationshipTestItems.add('Testing a long sentence just in case the property does not support it.');
            testLinkElementreverseRelationshipTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testLinkElementreverseRelationshipTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testLinkElementreverseRelationship = new TestProperty('reverseRelationship', 'rev', 'string', testLinkElementreverseRelationshipTestItems);
            propertiesLinkElement.add(testLinkElementreverseRelationship);

            //#endregion reverseRelationship
            //#region type
            var testLinkElementtypeTestItems = new Array(5);

            //#region Initialize TestItems
            testLinkElementtypeTestItems.add('');
            testLinkElementtypeTestItems.add('234567');
            testLinkElementtypeTestItems.add('Testing a long sentence just in case the property does not support it.');
            testLinkElementtypeTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testLinkElementtypeTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testLinkElementtype = new TestProperty('type', 'type', 'string', testLinkElementtypeTestItems);
            propertiesLinkElement.add(testLinkElementtype);

            //#endregion type
            //#endregion Initialize Properties
            var testLinkElement = new TestElement('LinkElement', 'link', propertiesLinkElement);
            elements.add(testLinkElement);

            //#endregion LinkElement
            //#region ListItemElement
            var propertiesListItemElement = new Array(2);

            //#region Initialize Properties
            //#region value
            var testListItemElementvalueTestItems = new Array(5);

            //#region Initialize TestItems
            testListItemElementvalueTestItems.add(100);
            testListItemElementvalueTestItems.add(500);
            testListItemElementvalueTestItems.add(600);
            testListItemElementvalueTestItems.add(250);
            testListItemElementvalueTestItems.add(300);

            //#endregion Initialize TestItems
            var testListItemElementvalue = new TestProperty('value', 'value', 'number', testListItemElementvalueTestItems);
            propertiesListItemElement.add(testListItemElementvalue);

            //#endregion value
            //#region type
            var testListItemElementtypeTestItems = new Array(5);

            //#region Initialize TestItems
            testListItemElementtypeTestItems.add('a');
            testListItemElementtypeTestItems.add('A');
            testListItemElementtypeTestItems.add('i');
            testListItemElementtypeTestItems.add('I');
            testListItemElementtypeTestItems.add('1');

            //#endregion Initialize TestItems
            var testListItemElementtype = new TestProperty('type', 'type', 'string', testListItemElementtypeTestItems);
            propertiesListItemElement.add(testListItemElementtype);

            //#endregion type
            //#endregion Initialize Properties
            var testListItemElement = new TestElement('ListItemElement', 'li', propertiesListItemElement);
            elements.add(testListItemElement);

            //#endregion ListItemElement
            //#region MainElement
            var propertiesMainElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testMainElement = new TestElement('MainElement', 'main', propertiesMainElement);
            elements.add(testMainElement);

            //#endregion MainElement
            //#region MapElement
            var propertiesMapElement = new Array(1);

            //#region Initialize Properties
            //#region name
            var testMapElementnameTestItems = new Array(5);

            //#region Initialize TestItems
            testMapElementnameTestItems.add('');
            testMapElementnameTestItems.add('234567');
            testMapElementnameTestItems.add('Testing a long sentence just in case the property does not support it.');
            testMapElementnameTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testMapElementnameTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testMapElementname = new TestProperty('name', 'name', 'string', testMapElementnameTestItems);
            propertiesMapElement.add(testMapElementname);

            //#endregion name
            //#endregion Initialize Properties
            var testMapElement = new TestElement('MapElement', 'map', propertiesMapElement);
            elements.add(testMapElement);

            //#endregion MapElement
            //#region MarkElement
            var propertiesMarkElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testMarkElement = new TestElement('MarkElement', 'mark', propertiesMarkElement);
            elements.add(testMarkElement);

            //#endregion MarkElement
            //#region MenuElement
            var propertiesMenuElement = new Array(1);

            //#region Initialize Properties
            //#region type
            var testMenuElementtypeTestItems = new Array(5);

            //#region Initialize TestItems
            testMenuElementtypeTestItems.add('');
            testMenuElementtypeTestItems.add('234567');
            testMenuElementtypeTestItems.add('Testing a long sentence just in case the property does not support it.');
            testMenuElementtypeTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testMenuElementtypeTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testMenuElementtype = new TestProperty('type', 'type', 'string', testMenuElementtypeTestItems);
            propertiesMenuElement.add(testMenuElementtype);

            //#endregion type
            //#endregion Initialize Properties
            var testMenuElement = new TestElement('MenuElement', 'menu', propertiesMenuElement);
            elements.add(testMenuElement);

            //#endregion MenuElement
            //#region MetaElement
            var propertiesMetaElement = new Array(5);

            //#region Initialize Properties
            //#region characterSet
            var testMetaElementcharacterSetTestItems = new Array(5);

            //#region Initialize TestItems
            testMetaElementcharacterSetTestItems.add('');
            testMetaElementcharacterSetTestItems.add('234567');
            testMetaElementcharacterSetTestItems.add('Testing a long sentence just in case the property does not support it.');
            testMetaElementcharacterSetTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testMetaElementcharacterSetTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testMetaElementcharacterSet = new TestProperty('characterSet', 'charset', 'string', testMetaElementcharacterSetTestItems);
            propertiesMetaElement.add(testMetaElementcharacterSet);

            //#endregion characterSet
            //#region content
            var testMetaElementcontentTestItems = new Array(5);

            //#region Initialize TestItems
            testMetaElementcontentTestItems.add('');
            testMetaElementcontentTestItems.add('234567');
            testMetaElementcontentTestItems.add('Testing a long sentence just in case the property does not support it.');
            testMetaElementcontentTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testMetaElementcontentTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testMetaElementcontent = new TestProperty('content', 'content', 'string', testMetaElementcontentTestItems);
            propertiesMetaElement.add(testMetaElementcontent);

            //#endregion content
            //#region httpEquiv
            var testMetaElementhttpEquivTestItems = new Array(5);

            //#region Initialize TestItems
            testMetaElementhttpEquivTestItems.add('');
            testMetaElementhttpEquivTestItems.add('234567');
            testMetaElementhttpEquivTestItems.add('Testing a long sentence just in case the property does not support it.');
            testMetaElementhttpEquivTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testMetaElementhttpEquivTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testMetaElementhttpEquiv = new TestProperty('httpEquiv', 'httpEquiv', 'string', testMetaElementhttpEquivTestItems);
            propertiesMetaElement.add(testMetaElementhttpEquiv);

            //#endregion httpEquiv
            //#region name
            var testMetaElementnameTestItems = new Array(5);

            //#region Initialize TestItems
            testMetaElementnameTestItems.add('application-name');
            testMetaElementnameTestItems.add('author');
            testMetaElementnameTestItems.add('description');
            testMetaElementnameTestItems.add('generator');
            testMetaElementnameTestItems.add('keywords');

            //#endregion Initialize TestItems
            var testMetaElementname = new TestProperty('name', 'name', 'string', testMetaElementnameTestItems);
            propertiesMetaElement.add(testMetaElementname);

            //#endregion name
            //#region scheme
            var testMetaElementschemeTestItems = new Array(5);

            //#region Initialize TestItems
            testMetaElementschemeTestItems.add('');
            testMetaElementschemeTestItems.add('234567');
            testMetaElementschemeTestItems.add('Testing a long sentence just in case the property does not support it.');
            testMetaElementschemeTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testMetaElementschemeTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testMetaElementscheme = new TestProperty('scheme', 'scheme', 'string', testMetaElementschemeTestItems);
            propertiesMetaElement.add(testMetaElementscheme);

            //#endregion scheme
            //#endregion Initialize Properties
            var testMetaElement = new TestElement('MetaElement', 'meta', propertiesMetaElement);
            elements.add(testMetaElement);

            //#endregion MetaElement
            //#region NavigationElement
            var propertiesNavigationElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testNavigationElement = new TestElement('NavigationElement', 'nav', propertiesNavigationElement);
            elements.add(testNavigationElement);

            //#endregion NavigationElement
            //#region NoScriptElement
            var propertiesNoScriptElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testNoScriptElement = new TestElement('NoScriptElement', 'noscript', propertiesNoScriptElement);
            elements.add(testNoScriptElement);

            //#endregion NoScriptElement
            //#region OptionElement
            var propertiesOptionElement = new Array(4);

            //#region Initialize Properties
            //#region disabled
            var testOptionElementdisabledTestItems = new Array(2);

            //#region Initialize TestItems
            testOptionElementdisabledTestItems.add(true);
            testOptionElementdisabledTestItems.add(false);

            //#endregion Initialize TestItems
            var testOptionElementdisabled = new TestProperty('disabled', 'disabled', 'boolean', testOptionElementdisabledTestItems);
            propertiesOptionElement.add(testOptionElementdisabled);

            //#endregion disabled
            //#region label
            var testOptionElementlabelTestItems = new Array(5);

            //#region Initialize TestItems
            testOptionElementlabelTestItems.add('');
            testOptionElementlabelTestItems.add('234567');
            testOptionElementlabelTestItems.add('Testing a long sentence just in case the property does not support it.');
            testOptionElementlabelTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testOptionElementlabelTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testOptionElementlabel = new TestProperty('label', 'label', 'string', testOptionElementlabelTestItems);
            propertiesOptionElement.add(testOptionElementlabel);

            //#endregion label
            //#region selected
            var testOptionElementselectedTestItems = new Array(2);

            //#region Initialize TestItems
            testOptionElementselectedTestItems.add(true);
            testOptionElementselectedTestItems.add(false);

            //#endregion Initialize TestItems
            var testOptionElementselected = new TestProperty('selected', 'selected', 'boolean', testOptionElementselectedTestItems);
            propertiesOptionElement.add(testOptionElementselected);

            //#endregion selected
            //#region value
            var testOptionElementvalueTestItems = new Array(5);

            //#region Initialize TestItems
            testOptionElementvalueTestItems.add('');
            testOptionElementvalueTestItems.add('234567');
            testOptionElementvalueTestItems.add('Testing a long sentence just in case the property does not support it.');
            testOptionElementvalueTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testOptionElementvalueTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testOptionElementvalue = new TestProperty('value', 'value', 'string', testOptionElementvalueTestItems);
            propertiesOptionElement.add(testOptionElementvalue);

            //#endregion value
            //#endregion Initialize Properties
            var testOptionElement = new TestElement('OptionElement', 'option', propertiesOptionElement);
            elements.add(testOptionElement);

            //#endregion OptionElement
            //#region OptionsGroupElement
            var propertiesOptionsGroupElement = new Array(2);

            //#region Initialize Properties
            //#region disabled
            var testOptionsGroupElementdisabledTestItems = new Array(2);

            //#region Initialize TestItems
            testOptionsGroupElementdisabledTestItems.add(true);
            testOptionsGroupElementdisabledTestItems.add(false);

            //#endregion Initialize TestItems
            var testOptionsGroupElementdisabled = new TestProperty('disabled', 'disabled', 'boolean', testOptionsGroupElementdisabledTestItems);
            propertiesOptionsGroupElement.add(testOptionsGroupElementdisabled);

            //#endregion disabled
            //#region label
            var testOptionsGroupElementlabelTestItems = new Array(5);

            //#region Initialize TestItems
            testOptionsGroupElementlabelTestItems.add('');
            testOptionsGroupElementlabelTestItems.add('234567');
            testOptionsGroupElementlabelTestItems.add('Testing a long sentence just in case the property does not support it.');
            testOptionsGroupElementlabelTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testOptionsGroupElementlabelTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testOptionsGroupElementlabel = new TestProperty('label', 'label', 'string', testOptionsGroupElementlabelTestItems);
            propertiesOptionsGroupElement.add(testOptionsGroupElementlabel);

            //#endregion label
            //#endregion Initialize Properties
            var testOptionsGroupElement = new TestElement('OptionsGroupElement', 'optgroup', propertiesOptionsGroupElement);
            elements.add(testOptionsGroupElement);

            //#endregion OptionsGroupElement
            //#region OrderedListElement
            var propertiesOrderedListElement = new Array(3);

            //#region Initialize Properties
            //#region compact
            var testOrderedListElementcompactTestItems = new Array(2);

            //#region Initialize TestItems
            testOrderedListElementcompactTestItems.add(true);
            testOrderedListElementcompactTestItems.add(false);

            //#endregion Initialize TestItems
            var testOrderedListElementcompact = new TestProperty('compact', 'compact', 'boolean', testOrderedListElementcompactTestItems);
            propertiesOrderedListElement.add(testOrderedListElementcompact);

            //#endregion compact
            //#region start
            var testOrderedListElementstartTestItems = new Array(5);

            //#region Initialize TestItems
            testOrderedListElementstartTestItems.add(-700);
            testOrderedListElementstartTestItems.add(-500);
            testOrderedListElementstartTestItems.add(0);
            testOrderedListElementstartTestItems.add(500);
            testOrderedListElementstartTestItems.add(10000);

            //#endregion Initialize TestItems
            var testOrderedListElementstart = new TestProperty('start', 'start', 'number', testOrderedListElementstartTestItems);
            propertiesOrderedListElement.add(testOrderedListElementstart);

            //#endregion start
            //#region type
            var testOrderedListElementtypeTestItems = new Array(5);

            //#region Initialize TestItems
            testOrderedListElementtypeTestItems.add('');
            testOrderedListElementtypeTestItems.add('234567');
            testOrderedListElementtypeTestItems.add('Testing a long sentence just in case the property does not support it.');
            testOrderedListElementtypeTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testOrderedListElementtypeTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testOrderedListElementtype = new TestProperty('type', 'type', 'string', testOrderedListElementtypeTestItems);
            propertiesOrderedListElement.add(testOrderedListElementtype);

            //#endregion type
            //#endregion Initialize Properties
            var testOrderedListElement = new TestElement('OrderedListElement', 'ol', propertiesOrderedListElement);
            elements.add(testOrderedListElement);

            //#endregion OrderedListElement
            //#region ParagraphElement
            var propertiesParagraphElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testParagraphElement = new TestElement('ParagraphElement', 'p', propertiesParagraphElement);
            elements.add(testParagraphElement);

            //#endregion ParagraphElement
            //#region ParameterElement
            var propertiesParameterElement = new Array(4);

            //#region Initialize Properties
            //#region name
            var testParameterElementnameTestItems = new Array(5);

            //#region Initialize TestItems
            testParameterElementnameTestItems.add('');
            testParameterElementnameTestItems.add('234567');
            testParameterElementnameTestItems.add('Testing a long sentence just in case the property does not support it.');
            testParameterElementnameTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testParameterElementnameTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testParameterElementname = new TestProperty('name', 'name', 'string', testParameterElementnameTestItems);
            propertiesParameterElement.add(testParameterElementname);

            //#endregion name
            //#region type
            var testParameterElementtypeTestItems = new Array(5);

            //#region Initialize TestItems
            testParameterElementtypeTestItems.add('');
            testParameterElementtypeTestItems.add('234567');
            testParameterElementtypeTestItems.add('Testing a long sentence just in case the property does not support it.');
            testParameterElementtypeTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testParameterElementtypeTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testParameterElementtype = new TestProperty('type', 'type', 'string', testParameterElementtypeTestItems);
            propertiesParameterElement.add(testParameterElementtype);

            //#endregion type
            //#region value
            var testParameterElementvalueTestItems = new Array(5);

            //#region Initialize TestItems
            testParameterElementvalueTestItems.add('');
            testParameterElementvalueTestItems.add('234567');
            testParameterElementvalueTestItems.add('Testing a long sentence just in case the property does not support it.');
            testParameterElementvalueTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testParameterElementvalueTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testParameterElementvalue = new TestProperty('value', 'value', 'string', testParameterElementvalueTestItems);
            propertiesParameterElement.add(testParameterElementvalue);

            //#endregion value
            //#region valueType
            var testParameterElementvalueTypeTestItems = new Array(5);

            //#region Initialize TestItems
            testParameterElementvalueTypeTestItems.add('');
            testParameterElementvalueTypeTestItems.add('234567');
            testParameterElementvalueTypeTestItems.add('Testing a long sentence just in case the property does not support it.');
            testParameterElementvalueTypeTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testParameterElementvalueTypeTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testParameterElementvalueType = new TestProperty('valueType', 'valueType', 'string', testParameterElementvalueTypeTestItems);
            propertiesParameterElement.add(testParameterElementvalueType);

            //#endregion valueType
            //#endregion Initialize Properties
            var testParameterElement = new TestElement('ParameterElement', 'param', propertiesParameterElement);
            elements.add(testParameterElement);

            //#endregion ParameterElement
            //#region PreformattedElement
            var propertiesPreformattedElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testPreformattedElement = new TestElement('PreformattedElement', 'pre', propertiesPreformattedElement);
            elements.add(testPreformattedElement);

            //#endregion PreformattedElement
            //#region ProgressElement
            var propertiesProgressElement = new Array(2);

            //#region Initialize Properties
            //#region max
            var testProgressElementmaxTestItems = new Array(5);

            //#region Initialize TestItems
            testProgressElementmaxTestItems.add(100);
            testProgressElementmaxTestItems.add(500);
            testProgressElementmaxTestItems.add(600);
            testProgressElementmaxTestItems.add(250);
            testProgressElementmaxTestItems.add(300);

            //#endregion Initialize TestItems
            var testProgressElementmax = new TestProperty('max', 'max', 'number', testProgressElementmaxTestItems);
            propertiesProgressElement.add(testProgressElementmax);

            //#endregion max
            //#region value
            var testProgressElementvalueTestItems = new Array(5);

            //#region Initialize TestItems
            testProgressElementvalueTestItems.add(0);
            testProgressElementvalueTestItems.add(0.4);
            testProgressElementvalueTestItems.add(0.222334);
            testProgressElementvalueTestItems.add(0.1);
            testProgressElementvalueTestItems.add(1);

            //#endregion Initialize TestItems
            var testProgressElementvalue = new TestProperty('value', 'value', 'number', testProgressElementvalueTestItems);
            propertiesProgressElement.add(testProgressElementvalue);

            //#endregion value
            //#endregion Initialize Properties
            var testProgressElement = new TestElement('ProgressElement', 'progress', propertiesProgressElement);
            elements.add(testProgressElement);

            //#endregion ProgressElement
            //#region QuoteElement
            var propertiesQuoteElement = new Array(1);

            //#region Initialize Properties
            //#region citation
            var testQuoteElementcitationTestItems = new Array(5);

            //#region Initialize TestItems
            testQuoteElementcitationTestItems.add('http://www.google.com/');
            testQuoteElementcitationTestItems.add('http://www.yahoo.com/');
            testQuoteElementcitationTestItems.add('http://www.msn.com/');
            testQuoteElementcitationTestItems.add('http://www.aol.com/');
            testQuoteElementcitationTestItems.add('http://www.something.com/');

            //#endregion Initialize TestItems
            var testQuoteElementcitation = new TestProperty('citation', 'cite', 'string', testQuoteElementcitationTestItems);
            propertiesQuoteElement.add(testQuoteElementcitation);

            //#endregion citation
            //#endregion Initialize Properties
            var testQuoteElement = new TestElement('QuoteElement', 'q', propertiesQuoteElement);
            elements.add(testQuoteElement);

            //#endregion QuoteElement
            //#region RootElement
            var propertiesRootElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testRootElement = new TestElement('RootElement', 'html', propertiesRootElement);
            elements.add(testRootElement);

            //#endregion RootElement
            //#region RubyElement
            var propertiesRubyElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testRubyElement = new TestElement('RubyElement', 'ruby', propertiesRubyElement);
            elements.add(testRubyElement);

            //#endregion RubyElement
            //#region RubyParenthesisElement
            var propertiesRubyParenthesisElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testRubyParenthesisElement = new TestElement('RubyParenthesisElement', 'rp', propertiesRubyParenthesisElement);
            elements.add(testRubyParenthesisElement);

            //#endregion RubyParenthesisElement
            //#region RubyPronunciationElement
            var propertiesRubyPronunciationElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testRubyPronunciationElement = new TestElement('RubyPronunciationElement', 'rt', propertiesRubyPronunciationElement);
            elements.add(testRubyPronunciationElement);

            //#endregion RubyPronunciationElement
            //#region SampleElement
            var propertiesSampleElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testSampleElement = new TestElement('SampleElement', 'samp', propertiesSampleElement);
            elements.add(testSampleElement);

            //#endregion SampleElement
            //#region ScriptElement
            var propertiesScriptElement = new Array(4);

            //#region Initialize Properties
            //#region async
            var testScriptElementasyncTestItems = new Array(2);

            //#region Initialize TestItems
            testScriptElementasyncTestItems.add(true);
            testScriptElementasyncTestItems.add(false);

            //#endregion Initialize TestItems
            var testScriptElementasync = new TestProperty('async', 'async', 'boolean', testScriptElementasyncTestItems);
            propertiesScriptElement.add(testScriptElementasync);

            //#endregion async
            //#region source
            var testScriptElementsourceTestItems = new Array(5);

            //#region Initialize TestItems
            testScriptElementsourceTestItems.add('http://www.google.com/');
            testScriptElementsourceTestItems.add('http://www.yahoo.com/');
            testScriptElementsourceTestItems.add('http://www.msn.com/');
            testScriptElementsourceTestItems.add('http://www.aol.com/');
            testScriptElementsourceTestItems.add('http://www.something.com/');

            //#endregion Initialize TestItems
            var testScriptElementsource = new TestProperty('source', 'src', 'string', testScriptElementsourceTestItems);
            propertiesScriptElement.add(testScriptElementsource);

            //#endregion source
            //#region type
            var testScriptElementtypeTestItems = new Array(5);

            //#region Initialize TestItems
            testScriptElementtypeTestItems.add('');
            testScriptElementtypeTestItems.add('234567');
            testScriptElementtypeTestItems.add('Testing a long sentence just in case the property does not support it.');
            testScriptElementtypeTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testScriptElementtypeTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testScriptElementtype = new TestProperty('type', 'type', 'string', testScriptElementtypeTestItems);
            propertiesScriptElement.add(testScriptElementtype);

            //#endregion type
            //#region defer
            var testScriptElementdeferTestItems = new Array(2);

            //#region Initialize TestItems
            testScriptElementdeferTestItems.add(true);
            testScriptElementdeferTestItems.add(false);

            //#endregion Initialize TestItems
            var testScriptElementdefer = new TestProperty('defer', 'defer', 'boolean', testScriptElementdeferTestItems);
            propertiesScriptElement.add(testScriptElementdefer);

            //#endregion defer
            //#endregion Initialize Properties
            var testScriptElement = new TestElement('ScriptElement', 'script', propertiesScriptElement);
            elements.add(testScriptElement);

            //#endregion ScriptElement
            //#region SectionElement
            var propertiesSectionElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testSectionElement = new TestElement('SectionElement', 'section', propertiesSectionElement);
            elements.add(testSectionElement);

            //#endregion SectionElement
            //#region SelectElement
            var propertiesSelectElement = new Array(7);

            //#region Initialize Properties
            //#region autoFocus
            var testSelectElementautoFocusTestItems = new Array(2);

            //#region Initialize TestItems
            testSelectElementautoFocusTestItems.add(true);
            testSelectElementautoFocusTestItems.add(false);

            //#endregion Initialize TestItems
            var testSelectElementautoFocus = new TestProperty('autoFocus', 'autofocus', 'boolean', testSelectElementautoFocusTestItems);
            propertiesSelectElement.add(testSelectElementautoFocus);

            //#endregion autoFocus
            //#region disabled
            var testSelectElementdisabledTestItems = new Array(2);

            //#region Initialize TestItems
            testSelectElementdisabledTestItems.add(true);
            testSelectElementdisabledTestItems.add(false);

            //#endregion Initialize TestItems
            var testSelectElementdisabled = new TestProperty('disabled', 'disabled', 'boolean', testSelectElementdisabledTestItems);
            propertiesSelectElement.add(testSelectElementdisabled);

            //#endregion disabled
            //#region multipleOptions
            var testSelectElementmultipleOptionsTestItems = new Array(2);

            //#region Initialize TestItems
            testSelectElementmultipleOptionsTestItems.add(true);
            testSelectElementmultipleOptionsTestItems.add(false);

            //#endregion Initialize TestItems
            var testSelectElementmultipleOptions = new TestProperty('multipleOptions', 'multiple', 'boolean', testSelectElementmultipleOptionsTestItems);
            propertiesSelectElement.add(testSelectElementmultipleOptions);

            //#endregion multipleOptions
            //#region name
            var testSelectElementnameTestItems = new Array(5);

            //#region Initialize TestItems
            testSelectElementnameTestItems.add('');
            testSelectElementnameTestItems.add('234567');
            testSelectElementnameTestItems.add('Testing a long sentence just in case the property does not support it.');
            testSelectElementnameTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testSelectElementnameTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testSelectElementname = new TestProperty('name', 'name', 'string', testSelectElementnameTestItems);
            propertiesSelectElement.add(testSelectElementname);

            //#endregion name
            //#region required
            var testSelectElementrequiredTestItems = new Array(2);

            //#region Initialize TestItems
            testSelectElementrequiredTestItems.add(true);
            testSelectElementrequiredTestItems.add(false);

            //#endregion Initialize TestItems
            var testSelectElementrequired = new TestProperty('required', 'required', 'boolean', testSelectElementrequiredTestItems);
            propertiesSelectElement.add(testSelectElementrequired);

            //#endregion required
            //#region size
            var testSelectElementsizeTestItems = new Array(5);

            //#region Initialize TestItems
            testSelectElementsizeTestItems.add(100);
            testSelectElementsizeTestItems.add(500);
            testSelectElementsizeTestItems.add(600);
            testSelectElementsizeTestItems.add(250);
            testSelectElementsizeTestItems.add(300);

            //#endregion Initialize TestItems
            var testSelectElementsize = new TestProperty('size', 'size', 'number', testSelectElementsizeTestItems);
            propertiesSelectElement.add(testSelectElementsize);

            //#endregion size
            //#endregion Initialize Properties
            var testSelectElement = new TestElement('SelectElement', 'select', propertiesSelectElement);
            elements.add(testSelectElement);

            //#endregion SelectElement
            //#region SmallElement
            var propertiesSmallElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testSmallElement = new TestElement('SmallElement', 'small', propertiesSmallElement);
            elements.add(testSmallElement);

            //#endregion SmallElement
            //#region SourceElement
            var propertiesSourceElement = new Array(3);

            //#region Initialize Properties
            //#region source
            var testSourceElementsourceTestItems = new Array(5);

            //#region Initialize TestItems
            testSourceElementsourceTestItems.add('http://www.google.com/');
            testSourceElementsourceTestItems.add('http://www.yahoo.com/');
            testSourceElementsourceTestItems.add('http://www.msn.com/');
            testSourceElementsourceTestItems.add('http://www.aol.com/');
            testSourceElementsourceTestItems.add('http://www.something.com/');

            //#endregion Initialize TestItems
            var testSourceElementsource = new TestProperty('source', 'src', 'string', testSourceElementsourceTestItems);
            propertiesSourceElement.add(testSourceElementsource);

            //#endregion source
            //#region type
            var testSourceElementtypeTestItems = new Array(5);

            //#region Initialize TestItems
            testSourceElementtypeTestItems.add('');
            testSourceElementtypeTestItems.add('234567');
            testSourceElementtypeTestItems.add('Testing a long sentence just in case the property does not support it.');
            testSourceElementtypeTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testSourceElementtypeTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testSourceElementtype = new TestProperty('type', 'type', 'string', testSourceElementtypeTestItems);
            propertiesSourceElement.add(testSourceElementtype);

            //#endregion type
            //#region media
            var testSourceElementmediaTestItems = new Array(5);

            //#region Initialize TestItems
            testSourceElementmediaTestItems.add('');
            testSourceElementmediaTestItems.add('234567');
            testSourceElementmediaTestItems.add('Testing a long sentence just in case the property does not support it.');
            testSourceElementmediaTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testSourceElementmediaTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testSourceElementmedia = new TestProperty('media', 'media', 'string', testSourceElementmediaTestItems);
            propertiesSourceElement.add(testSourceElementmedia);

            //#endregion media
            //#endregion Initialize Properties
            var testSourceElement = new TestElement('SourceElement', 'source', propertiesSourceElement);
            elements.add(testSourceElement);

            //#endregion SourceElement
            //#region SpanElement
            var propertiesSpanElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testSpanElement = new TestElement('SpanElement', 'span', propertiesSpanElement);
            elements.add(testSpanElement);

            //#endregion SpanElement
            //#region StrikethroughElement
            var propertiesStrikethroughElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testStrikethroughElement = new TestElement('StrikethroughElement', 's', propertiesStrikethroughElement);
            elements.add(testStrikethroughElement);

            //#endregion StrikethroughElement
            //#region StrongElement
            var propertiesStrongElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testStrongElement = new TestElement('StrongElement', 'strong', propertiesStrongElement);
            elements.add(testStrongElement);

            //#endregion StrongElement
            //#region StyleElement
            var propertiesStyleElement = new Array(4);

            //#region Initialize Properties
            //#region type
            var testStyleElementtypeTestItems = new Array(5);

            //#region Initialize TestItems
            testStyleElementtypeTestItems.add('');
            testStyleElementtypeTestItems.add('234567');
            testStyleElementtypeTestItems.add('Testing a long sentence just in case the property does not support it.');
            testStyleElementtypeTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testStyleElementtypeTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testStyleElementtype = new TestProperty('type', 'type', 'string', testStyleElementtypeTestItems);
            propertiesStyleElement.add(testStyleElementtype);

            //#endregion type
            //#region media
            var testStyleElementmediaTestItems = new Array(5);

            //#region Initialize TestItems
            testStyleElementmediaTestItems.add('');
            testStyleElementmediaTestItems.add('234567');
            testStyleElementmediaTestItems.add('Testing a long sentence just in case the property does not support it.');
            testStyleElementmediaTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testStyleElementmediaTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testStyleElementmedia = new TestProperty('media', 'media', 'string', testStyleElementmediaTestItems);
            propertiesStyleElement.add(testStyleElementmedia);

            //#endregion media
            //#region scope
            var testStyleElementscopeTestItems = new Array(5);

            //#region Initialize TestItems
            testStyleElementscopeTestItems.add('');
            testStyleElementscopeTestItems.add('234567');
            testStyleElementscopeTestItems.add('Testing a long sentence just in case the property does not support it.');
            testStyleElementscopeTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testStyleElementscopeTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testStyleElementscope = new TestProperty('scope', 'scopeName', 'string', testStyleElementscopeTestItems);
            propertiesStyleElement.add(testStyleElementscope);

            //#endregion scope
            //#region disabled
            var testStyleElementdisabledTestItems = new Array(2);

            //#region Initialize TestItems
            testStyleElementdisabledTestItems.add(true);
            testStyleElementdisabledTestItems.add(false);

            //#endregion Initialize TestItems
            var testStyleElementdisabled = new TestProperty('disabled', 'disabled', 'boolean', testStyleElementdisabledTestItems);
            propertiesStyleElement.add(testStyleElementdisabled);

            //#endregion disabled
            //#endregion Initialize Properties
            var testStyleElement = new TestElement('StyleElement', 'style', propertiesStyleElement);
            elements.add(testStyleElement);

            //#endregion StyleElement
            //#region SubscriptElement
            var propertiesSubscriptElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testSubscriptElement = new TestElement('SubscriptElement', 'sub', propertiesSubscriptElement);
            elements.add(testSubscriptElement);

            //#endregion SubscriptElement
            //#region SummaryElement
            var propertiesSummaryElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testSummaryElement = new TestElement('SummaryElement', 'summary', propertiesSummaryElement);
            elements.add(testSummaryElement);

            //#endregion SummaryElement
            //#region SuperscriptElement
            var propertiesSuperscriptElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testSuperscriptElement = new TestElement('SuperscriptElement', 'sup', propertiesSuperscriptElement);
            elements.add(testSuperscriptElement);

            //#endregion SuperscriptElement
            //#region TableElement
            var propertiesTableElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testTableElement = new TestElement('TableElement', 'table', propertiesTableElement);
            elements.add(testTableElement);

            //#endregion TableElement
            //#region TableCaptionElement
            var propertiesTableCaptionElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testTableCaptionElement = new TestElement('TableCaptionElement', 'caption', propertiesTableCaptionElement);
            elements.add(testTableCaptionElement);

            //#endregion TableCaptionElement
            //#region TableColumnElement
            var propertiesTableColumnElement = new Array(1);

            //#region Initialize Properties
            //#region span
            var testTableColumnElementspanTestItems = new Array(5);

            //#region Initialize TestItems
            testTableColumnElementspanTestItems.add(1);
            testTableColumnElementspanTestItems.add(3);
            testTableColumnElementspanTestItems.add(10);
            testTableColumnElementspanTestItems.add(12);
            testTableColumnElementspanTestItems.add(20);

            //#endregion Initialize TestItems
            var testTableColumnElementspan = new TestProperty('span', 'span', 'number', testTableColumnElementspanTestItems);
            propertiesTableColumnElement.add(testTableColumnElementspan);

            //#endregion span
            //#endregion Initialize Properties
            var testTableColumnElement = new TestElement('TableColumnElement', 'col', propertiesTableColumnElement);
            elements.add(testTableColumnElement);

            //#endregion TableColumnElement
            //#region TableColumnGroupElement
            var propertiesTableColumnGroupElement = new Array(2);

            //#region Initialize Properties
            //#region span
            var testTableColumnGroupElementspanTestItems = new Array(5);

            //#region Initialize TestItems
            testTableColumnGroupElementspanTestItems.add(1);
            testTableColumnGroupElementspanTestItems.add(3);
            testTableColumnGroupElementspanTestItems.add(10);
            testTableColumnGroupElementspanTestItems.add(12);
            testTableColumnGroupElementspanTestItems.add(20);

            //#endregion Initialize TestItems
            var testTableColumnGroupElementspan = new TestProperty('span', 'span', 'number', testTableColumnGroupElementspanTestItems);
            propertiesTableColumnGroupElement.add(testTableColumnGroupElementspan);

            //#endregion span
            //#region width
            var testTableColumnGroupElementwidthTestItems = new Array(5);

            //#region Initialize TestItems
            testTableColumnGroupElementwidthTestItems.add('1');
            testTableColumnGroupElementwidthTestItems.add('3');
            testTableColumnGroupElementwidthTestItems.add('10');
            testTableColumnGroupElementwidthTestItems.add('12');
            testTableColumnGroupElementwidthTestItems.add('20');

            //#endregion Initialize TestItems
            var testTableColumnGroupElementwidth = new TestProperty('width', 'width', 'string', testTableColumnGroupElementwidthTestItems);
            propertiesTableColumnGroupElement.add(testTableColumnGroupElementwidth);

            //#endregion width
            //#endregion Initialize Properties
            var testTableColumnGroupElement = new TestElement('TableColumnGroupElement', 'colgroup', propertiesTableColumnGroupElement);
            elements.add(testTableColumnGroupElement);

            //#endregion TableColumnGroupElement
            //#region TableDataCellElement
            var propertiesTableDataCellElement = new Array(4);

            //#region Initialize Properties
            //#region columnSpan
            var testTableDataCellElementcolumnSpanTestItems = new Array(5);

            //#region Initialize TestItems
            testTableDataCellElementcolumnSpanTestItems.add(1);
            testTableDataCellElementcolumnSpanTestItems.add(3);
            testTableDataCellElementcolumnSpanTestItems.add(10);
            testTableDataCellElementcolumnSpanTestItems.add(12);
            testTableDataCellElementcolumnSpanTestItems.add(20);

            //#endregion Initialize TestItems
            var testTableDataCellElementcolumnSpan = new TestProperty('columnSpan', 'colSpan', 'number', testTableDataCellElementcolumnSpanTestItems);
            propertiesTableDataCellElement.add(testTableDataCellElementcolumnSpan);

            //#endregion columnSpan
            //#region headers
            var testTableDataCellElementheadersTestItems = new Array(5);

            //#region Initialize TestItems
            testTableDataCellElementheadersTestItems.add('');
            testTableDataCellElementheadersTestItems.add('234567');
            testTableDataCellElementheadersTestItems.add('Testing a long sentence just in case the property does not support it.');
            testTableDataCellElementheadersTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testTableDataCellElementheadersTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testTableDataCellElementheaders = new TestProperty('headers', 'headers', 'string', testTableDataCellElementheadersTestItems);
            propertiesTableDataCellElement.add(testTableDataCellElementheaders);

            //#endregion headers
            //#region rowSpan
            var testTableDataCellElementrowSpanTestItems = new Array(5);

            //#region Initialize TestItems
            testTableDataCellElementrowSpanTestItems.add(1);
            testTableDataCellElementrowSpanTestItems.add(3);
            testTableDataCellElementrowSpanTestItems.add(10);
            testTableDataCellElementrowSpanTestItems.add(12);
            testTableDataCellElementrowSpanTestItems.add(20);

            //#endregion Initialize TestItems
            var testTableDataCellElementrowSpan = new TestProperty('rowSpan', 'rowSpan', 'number', testTableDataCellElementrowSpanTestItems);
            propertiesTableDataCellElement.add(testTableDataCellElementrowSpan);

            //#endregion rowSpan
            //#region scope
            var testTableDataCellElementscopeTestItems = new Array(5);

            //#region Initialize TestItems
            testTableDataCellElementscopeTestItems.add('');
            testTableDataCellElementscopeTestItems.add('234567');
            testTableDataCellElementscopeTestItems.add('Testing a long sentence just in case the property does not support it.');
            testTableDataCellElementscopeTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testTableDataCellElementscopeTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testTableDataCellElementscope = new TestProperty('scope', 'scope', 'string', testTableDataCellElementscopeTestItems);
            propertiesTableDataCellElement.add(testTableDataCellElementscope);

            //#endregion scope
            //#endregion Initialize Properties
            var testTableDataCellElement = new TestElement('TableDataCellElement', 'td', propertiesTableDataCellElement);
            elements.add(testTableDataCellElement);

            //#endregion TableDataCellElement
            //#region TableHeaderCellElement
            var propertiesTableHeaderCellElement = new Array(3);

            //#region Initialize Properties
            //#region columnSpan
            var testTableHeaderCellElementcolumnSpanTestItems = new Array(5);

            //#region Initialize TestItems
            testTableHeaderCellElementcolumnSpanTestItems.add(1);
            testTableHeaderCellElementcolumnSpanTestItems.add(3);
            testTableHeaderCellElementcolumnSpanTestItems.add(10);
            testTableHeaderCellElementcolumnSpanTestItems.add(12);
            testTableHeaderCellElementcolumnSpanTestItems.add(20);

            //#endregion Initialize TestItems
            var testTableHeaderCellElementcolumnSpan = new TestProperty('columnSpan', 'colSpan', 'number', testTableHeaderCellElementcolumnSpanTestItems);
            propertiesTableHeaderCellElement.add(testTableHeaderCellElementcolumnSpan);

            //#endregion columnSpan
            //#region headers
            var testTableHeaderCellElementheadersTestItems = new Array(5);

            //#region Initialize TestItems
            testTableHeaderCellElementheadersTestItems.add('');
            testTableHeaderCellElementheadersTestItems.add('234567');
            testTableHeaderCellElementheadersTestItems.add('Testing a long sentence just in case the property does not support it.');
            testTableHeaderCellElementheadersTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testTableHeaderCellElementheadersTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testTableHeaderCellElementheaders = new TestProperty('headers', 'headers', 'string', testTableHeaderCellElementheadersTestItems);
            propertiesTableHeaderCellElement.add(testTableHeaderCellElementheaders);

            //#endregion headers
            //#region rowSpan
            var testTableHeaderCellElementrowSpanTestItems = new Array(5);

            //#region Initialize TestItems
            testTableHeaderCellElementrowSpanTestItems.add(1);
            testTableHeaderCellElementrowSpanTestItems.add(3);
            testTableHeaderCellElementrowSpanTestItems.add(10);
            testTableHeaderCellElementrowSpanTestItems.add(12);
            testTableHeaderCellElementrowSpanTestItems.add(20);

            //#endregion Initialize TestItems
            var testTableHeaderCellElementrowSpan = new TestProperty('rowSpan', 'rowSpan', 'number', testTableHeaderCellElementrowSpanTestItems);
            propertiesTableHeaderCellElement.add(testTableHeaderCellElementrowSpan);

            //#endregion rowSpan
            //#endregion Initialize Properties
            var testTableHeaderCellElement = new TestElement('TableHeaderCellElement', 'th', propertiesTableHeaderCellElement);
            elements.add(testTableHeaderCellElement);

            //#endregion TableHeaderCellElement
            //#region TableRowElement
            var propertiesTableRowElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testTableRowElement = new TestElement('TableRowElement', 'tr', propertiesTableRowElement);
            elements.add(testTableRowElement);

            //#endregion TableRowElement
            //#region TextAreaElement
            var propertiesTextAreaElement = new Array(13);

            //#region Initialize Properties
            //#region autoFocus
            var testTextAreaElementautoFocusTestItems = new Array(2);

            //#region Initialize TestItems
            testTextAreaElementautoFocusTestItems.add(true);
            testTextAreaElementautoFocusTestItems.add(false);

            //#endregion Initialize TestItems
            var testTextAreaElementautoFocus = new TestProperty('autoFocus', 'autofocus', 'boolean', testTextAreaElementautoFocusTestItems);
            propertiesTextAreaElement.add(testTextAreaElementautoFocus);

            //#endregion autoFocus
            //#region columns
            var testTextAreaElementcolumnsTestItems = new Array(5);

            //#region Initialize TestItems
            testTextAreaElementcolumnsTestItems.add(1);
            testTextAreaElementcolumnsTestItems.add(3);
            testTextAreaElementcolumnsTestItems.add(10);
            testTextAreaElementcolumnsTestItems.add(12);
            testTextAreaElementcolumnsTestItems.add(20);

            //#endregion Initialize TestItems
            var testTextAreaElementcolumns = new TestProperty('columns', 'cols', 'number', testTextAreaElementcolumnsTestItems);
            propertiesTextAreaElement.add(testTextAreaElementcolumns);

            //#endregion columns
            //#region disabled
            var testTextAreaElementdisabledTestItems = new Array(2);

            //#region Initialize TestItems
            testTextAreaElementdisabledTestItems.add(true);
            testTextAreaElementdisabledTestItems.add(false);

            //#endregion Initialize TestItems
            var testTextAreaElementdisabled = new TestProperty('disabled', 'disabled', 'boolean', testTextAreaElementdisabledTestItems);
            propertiesTextAreaElement.add(testTextAreaElementdisabled);

            //#endregion disabled
            //#region maxLength
            var testTextAreaElementmaxLengthTestItems = new Array(4);

            //#region Initialize TestItems
            testTextAreaElementmaxLengthTestItems.add(5);
            testTextAreaElementmaxLengthTestItems.add(100);
            testTextAreaElementmaxLengthTestItems.add(500);
            testTextAreaElementmaxLengthTestItems.add(2147483647);

            //#endregion Initialize TestItems
            var testTextAreaElementmaxLength = new TestProperty('maxLength', 'maxLength', 'number', testTextAreaElementmaxLengthTestItems);
            propertiesTextAreaElement.add(testTextAreaElementmaxLength);

            //#endregion maxLength
            //#region name
            var testTextAreaElementnameTestItems = new Array(5);

            //#region Initialize TestItems
            testTextAreaElementnameTestItems.add('');
            testTextAreaElementnameTestItems.add('234567');
            testTextAreaElementnameTestItems.add('Testing a long sentence just in case the property does not support it.');
            testTextAreaElementnameTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testTextAreaElementnameTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testTextAreaElementname = new TestProperty('name', 'name', 'string', testTextAreaElementnameTestItems);
            propertiesTextAreaElement.add(testTextAreaElementname);

            //#endregion name
            //#region placeholder
            var testTextAreaElementplaceholderTestItems = new Array(5);

            //#region Initialize TestItems
            testTextAreaElementplaceholderTestItems.add('');
            testTextAreaElementplaceholderTestItems.add('234567');
            testTextAreaElementplaceholderTestItems.add('Testing a long sentence just in case the property does not support it.');
            testTextAreaElementplaceholderTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testTextAreaElementplaceholderTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testTextAreaElementplaceholder = new TestProperty('placeholder', 'placeholder', 'string', testTextAreaElementplaceholderTestItems);
            propertiesTextAreaElement.add(testTextAreaElementplaceholder);

            //#endregion placeholder
            //#region readOnly
            var testTextAreaElementreadOnlyTestItems = new Array(2);

            //#region Initialize TestItems
            testTextAreaElementreadOnlyTestItems.add(true);
            testTextAreaElementreadOnlyTestItems.add(false);

            //#endregion Initialize TestItems
            var testTextAreaElementreadOnly = new TestProperty('readOnly', 'readOnly', 'boolean', testTextAreaElementreadOnlyTestItems);
            propertiesTextAreaElement.add(testTextAreaElementreadOnly);

            //#endregion readOnly
            //#region required
            var testTextAreaElementrequiredTestItems = new Array(2);

            //#region Initialize TestItems
            testTextAreaElementrequiredTestItems.add(true);
            testTextAreaElementrequiredTestItems.add(false);

            //#endregion Initialize TestItems
            var testTextAreaElementrequired = new TestProperty('required', 'required', 'boolean', testTextAreaElementrequiredTestItems);
            propertiesTextAreaElement.add(testTextAreaElementrequired);

            //#endregion required
            //#region rows
            var testTextAreaElementrowsTestItems = new Array(5);

            //#region Initialize TestItems
            testTextAreaElementrowsTestItems.add(1);
            testTextAreaElementrowsTestItems.add(3);
            testTextAreaElementrowsTestItems.add(10);
            testTextAreaElementrowsTestItems.add(12);
            testTextAreaElementrowsTestItems.add(20);

            //#endregion Initialize TestItems
            var testTextAreaElementrows = new TestProperty('rows', 'rows', 'number', testTextAreaElementrowsTestItems);
            propertiesTextAreaElement.add(testTextAreaElementrows);

            //#endregion rows
            //#region selectionEnd
            var testTextAreaElementselectionEndTestItems = new Array(5);

            //#region Initialize TestItems
            testTextAreaElementselectionEndTestItems.add(1);
            testTextAreaElementselectionEndTestItems.add(3);
            testTextAreaElementselectionEndTestItems.add(10);
            testTextAreaElementselectionEndTestItems.add(12);
            testTextAreaElementselectionEndTestItems.add(20);

            //#endregion Initialize TestItems
            var testTextAreaElementselectionEnd = new TestProperty('selectionEnd', 'selectionEnd', 'number', testTextAreaElementselectionEndTestItems);
            propertiesTextAreaElement.add(testTextAreaElementselectionEnd);

            //#endregion selectionEnd
            //#region selectionStart
            var testTextAreaElementselectionStartTestItems = new Array(5);

            //#region Initialize TestItems
            testTextAreaElementselectionStartTestItems.add(1);
            testTextAreaElementselectionStartTestItems.add(3);
            testTextAreaElementselectionStartTestItems.add(10);
            testTextAreaElementselectionStartTestItems.add(12);
            testTextAreaElementselectionStartTestItems.add(20);

            //#endregion Initialize TestItems
            var testTextAreaElementselectionStart = new TestProperty('selectionStart', 'selectionStart', 'number', testTextAreaElementselectionStartTestItems);
            propertiesTextAreaElement.add(testTextAreaElementselectionStart);

            //#endregion selectionStart
            //#region wrap
            var testTextAreaElementwrapTestItems = new Array(1);

            //#region Initialize TestItems
            testTextAreaElementwrapTestItems.add('cols');

            //#endregion Initialize TestItems
            var testTextAreaElementwrap = new TestProperty('wrap', 'wrap', 'string', testTextAreaElementwrapTestItems);
            propertiesTextAreaElement.add(testTextAreaElementwrap);

            //#endregion wrap
            //#endregion Initialize Properties
            var testTextAreaElement = new TestElement('TextAreaElement', 'textarea', propertiesTextAreaElement);
            elements.add(testTextAreaElement);

            //#endregion TextAreaElement
            //#region TitleElement
            var propertiesTitleElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testTitleElement = new TestElement('TitleElement', 'title', propertiesTitleElement);
            elements.add(testTitleElement);

            //#endregion TitleElement
            //#region TrackElement
            var propertiesTrackElement = new Array(5);

            //#region Initialize Properties
            //#region default
            var testTrackElementdefaultTestItems = new Array(2);

            //#region Initialize TestItems
            testTrackElementdefaultTestItems.add(true);
            testTrackElementdefaultTestItems.add(false);

            //#endregion Initialize TestItems
            var testTrackElementdefault = new TestProperty('default', 'default', 'boolean', testTrackElementdefaultTestItems);
            propertiesTrackElement.add(testTrackElementdefault);

            //#endregion default
            //#region kind
            var testTrackElementkindTestItems = new Array(5);

            //#region Initialize TestItems
            testTrackElementkindTestItems.add('subtitles');
            testTrackElementkindTestItems.add('captions');
            testTrackElementkindTestItems.add('descriptions');
            testTrackElementkindTestItems.add('chapters');
            testTrackElementkindTestItems.add('metadata');

            //#endregion Initialize TestItems
            var testTrackElementkind = new TestProperty('kind', 'kind', 'string', testTrackElementkindTestItems);
            propertiesTrackElement.add(testTrackElementkind);

            //#endregion kind
            //#region label
            var testTrackElementlabelTestItems = new Array(5);

            //#region Initialize TestItems
            testTrackElementlabelTestItems.add('');
            testTrackElementlabelTestItems.add('234567');
            testTrackElementlabelTestItems.add('Testing a long sentence just in case the property does not support it.');
            testTrackElementlabelTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testTrackElementlabelTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testTrackElementlabel = new TestProperty('label', 'label', 'string', testTrackElementlabelTestItems);
            propertiesTrackElement.add(testTrackElementlabel);

            //#endregion label
            //#region source
            var testTrackElementsourceTestItems = new Array(5);

            //#region Initialize TestItems
            testTrackElementsourceTestItems.add('http://www.google.com/');
            testTrackElementsourceTestItems.add('http://www.yahoo.com/');
            testTrackElementsourceTestItems.add('http://www.msn.com/');
            testTrackElementsourceTestItems.add('http://www.aol.com/');
            testTrackElementsourceTestItems.add('http://www.something.com/');

            //#endregion Initialize TestItems
            var testTrackElementsource = new TestProperty('source', 'src', 'string', testTrackElementsourceTestItems);
            propertiesTrackElement.add(testTrackElementsource);

            //#endregion source
            //#region sourceLanguage
            var testTrackElementsourceLanguageTestItems = new Array(5);

            //#region Initialize TestItems
            testTrackElementsourceLanguageTestItems.add('');
            testTrackElementsourceLanguageTestItems.add('234567');
            testTrackElementsourceLanguageTestItems.add('Testing a long sentence just in case the property does not support it.');
            testTrackElementsourceLanguageTestItems.add('Special characters !@#$@#$$%(^*$()&^%&');
            testTrackElementsourceLanguageTestItems.add('Short string.');

            //#endregion Initialize TestItems
            var testTrackElementsourceLanguage = new TestProperty('sourceLanguage', 'srclang', 'string', testTrackElementsourceLanguageTestItems);
            propertiesTrackElement.add(testTrackElementsourceLanguage);

            //#endregion sourceLanguage
            //#endregion Initialize Properties
            var testTrackElement = new TestElement('TrackElement', 'track', propertiesTrackElement);
            elements.add(testTrackElement);

            //#endregion TrackElement
            //#region UnderlineElement
            var propertiesUnderlineElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testUnderlineElement = new TestElement('UnderlineElement', 'u', propertiesUnderlineElement);
            elements.add(testUnderlineElement);

            //#endregion UnderlineElement
            //#region UnorderedListElement
            var propertiesUnorderedListElement = new Array(2);

            //#region Initialize Properties
            //#region compact
            var testUnorderedListElementcompactTestItems = new Array(2);

            //#region Initialize TestItems
            testUnorderedListElementcompactTestItems.add(true);
            testUnorderedListElementcompactTestItems.add(false);

            //#endregion Initialize TestItems
            var testUnorderedListElementcompact = new TestProperty('compact', 'compact', 'boolean', testUnorderedListElementcompactTestItems);
            propertiesUnorderedListElement.add(testUnorderedListElementcompact);

            //#endregion compact
            //#region type
            var testUnorderedListElementtypeTestItems = new Array(3);

            //#region Initialize TestItems
            testUnorderedListElementtypeTestItems.add('circle');
            testUnorderedListElementtypeTestItems.add('disc');
            testUnorderedListElementtypeTestItems.add('square');

            //#endregion Initialize TestItems
            var testUnorderedListElementtype = new TestProperty('type', 'type', 'string', testUnorderedListElementtypeTestItems);
            propertiesUnorderedListElement.add(testUnorderedListElementtype);

            //#endregion type
            //#endregion Initialize Properties
            var testUnorderedListElement = new TestElement('UnorderedListElement', 'ul', propertiesUnorderedListElement);
            elements.add(testUnorderedListElement);

            //#endregion UnorderedListElement
            //#region VariableElement
            var propertiesVariableElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testVariableElement = new TestElement('VariableElement', 'variable', propertiesVariableElement);
            elements.add(testVariableElement);

            //#endregion VariableElement
            //#region VideoElement
            var propertiesVideoElement = new Array(11);

            //#region Initialize Properties
            //#region autoPlay
            var testVideoElementautoPlayTestItems = new Array(2);

            //#region Initialize TestItems
            testVideoElementautoPlayTestItems.add(true);
            testVideoElementautoPlayTestItems.add(false);

            //#endregion Initialize TestItems
            var testVideoElementautoPlay = new TestProperty('autoPlay', 'autoplay', 'boolean', testVideoElementautoPlayTestItems);
            propertiesVideoElement.add(testVideoElementautoPlay);

            //#endregion autoPlay
            //#region buffered
            var testVideoElementbufferedTestItems = new Array(0);

            //#region Initialize TestItems
            //#endregion Initialize TestItems
            var testVideoElementbuffered = new TestProperty('buffered', 'buffered', 'TimeRanges', testVideoElementbufferedTestItems);
            propertiesVideoElement.add(testVideoElementbuffered);

            //#endregion buffered
            //#region controls
            var testVideoElementcontrolsTestItems = new Array(2);

            //#region Initialize TestItems
            testVideoElementcontrolsTestItems.add(true);
            testVideoElementcontrolsTestItems.add(false);

            //#endregion Initialize TestItems
            var testVideoElementcontrols = new TestProperty('controls', 'controls', 'boolean', testVideoElementcontrolsTestItems);
            propertiesVideoElement.add(testVideoElementcontrols);

            //#endregion controls
            //#region height
            var testVideoElementheightTestItems = new Array(5);

            //#region Initialize TestItems
            testVideoElementheightTestItems.add(100);
            testVideoElementheightTestItems.add(500);
            testVideoElementheightTestItems.add(600);
            testVideoElementheightTestItems.add(250);
            testVideoElementheightTestItems.add(300);

            //#endregion Initialize TestItems
            var testVideoElementheight = new TestProperty('height', 'height', 'number', testVideoElementheightTestItems);
            propertiesVideoElement.add(testVideoElementheight);

            //#endregion height
            //#region loop
            var testVideoElementloopTestItems = new Array(2);

            //#region Initialize TestItems
            testVideoElementloopTestItems.add(true);
            testVideoElementloopTestItems.add(false);

            //#endregion Initialize TestItems
            var testVideoElementloop = new TestProperty('loop', 'loop', 'boolean', testVideoElementloopTestItems);
            propertiesVideoElement.add(testVideoElementloop);

            //#endregion loop
            //#region muted
            var testVideoElementmutedTestItems = new Array(2);

            //#region Initialize TestItems
            testVideoElementmutedTestItems.add(true);
            testVideoElementmutedTestItems.add(false);

            //#endregion Initialize TestItems
            var testVideoElementmuted = new TestProperty('muted', 'muted', 'boolean', testVideoElementmutedTestItems);
            propertiesVideoElement.add(testVideoElementmuted);

            //#endregion muted
            //#region played
            var testVideoElementplayedTestItems = new Array(0);

            //#region Initialize TestItems
            //#endregion Initialize TestItems
            var testVideoElementplayed = new TestProperty('played', 'played', 'TimeRanges', testVideoElementplayedTestItems);
            propertiesVideoElement.add(testVideoElementplayed);

            //#endregion played
            //#region preload
            var testVideoElementpreloadTestItems = new Array(3);

            //#region Initialize TestItems
            testVideoElementpreloadTestItems.add('none');
            testVideoElementpreloadTestItems.add('metadata');
            testVideoElementpreloadTestItems.add('auto');

            //#endregion Initialize TestItems
            var testVideoElementpreload = new TestProperty('preload', 'preload', 'string', testVideoElementpreloadTestItems);
            propertiesVideoElement.add(testVideoElementpreload);

            //#endregion preload
            //#region poster
            var testVideoElementposterTestItems = new Array(5);

            //#region Initialize TestItems
            testVideoElementposterTestItems.add('http://www.google.com/');
            testVideoElementposterTestItems.add('http://www.yahoo.com/');
            testVideoElementposterTestItems.add('http://www.msn.com/');
            testVideoElementposterTestItems.add('http://www.aol.com/');
            testVideoElementposterTestItems.add('http://www.something.com/');

            //#endregion Initialize TestItems
            var testVideoElementposter = new TestProperty('poster', 'poster', 'string', testVideoElementposterTestItems);
            propertiesVideoElement.add(testVideoElementposter);

            //#endregion poster
            //#region source
            var testVideoElementsourceTestItems = new Array(5);

            //#region Initialize TestItems
            testVideoElementsourceTestItems.add('http://www.google.com/');
            testVideoElementsourceTestItems.add('http://www.yahoo.com/');
            testVideoElementsourceTestItems.add('http://www.msn.com/');
            testVideoElementsourceTestItems.add('http://www.aol.com/');
            testVideoElementsourceTestItems.add('http://www.something.com/');

            //#endregion Initialize TestItems
            var testVideoElementsource = new TestProperty('source', 'src', 'string', testVideoElementsourceTestItems);
            propertiesVideoElement.add(testVideoElementsource);

            //#endregion source
            //#region width
            var testVideoElementwidthTestItems = new Array(5);

            //#region Initialize TestItems
            testVideoElementwidthTestItems.add(100);
            testVideoElementwidthTestItems.add(500);
            testVideoElementwidthTestItems.add(600);
            testVideoElementwidthTestItems.add(250);
            testVideoElementwidthTestItems.add(300);

            //#endregion Initialize TestItems
            var testVideoElementwidth = new TestProperty('width', 'width', 'number', testVideoElementwidthTestItems);
            propertiesVideoElement.add(testVideoElementwidth);

            //#endregion width
            //#endregion Initialize Properties
            var testVideoElement = new TestElement('VideoElement', 'video', propertiesVideoElement);
            elements.add(testVideoElement);

            //#endregion VideoElement
            //#region WordBreakOpportunityElement
            var propertiesWordBreakOpportunityElement = new Array(0);

            //#region Initialize Properties
            //#endregion Initialize Properties
            var testWordBreakOpportunityElement = new TestElement('WordBreakOpportunityElement', 'wbr', propertiesWordBreakOpportunityElement);
            elements.add(testWordBreakOpportunityElement);

            //#endregion WordBreakOpportunityElement
            //#endregion Array Initialzation
            describe('Classical', function () {
                describe('Html', function () {
                    //#region Factory Methods
                    elements.query().foreach(function (element) {
                        var factoryMethod = element.factoryMethod;
                        var elementName = element.elementName;

                        describe(factoryMethod, function () {
                            it('should return an instance of ' + elementName + '.', function () {
                                var element = m[factoryMethod]();
                                expect(element.getType()).toBe(typeOf(e[elementName]));
                            });
                            it('should not initialize the returned instance.', function () {
                                var element = m[factoryMethod]();
                                expect(element.isInitialized()).toBe(false);
                            });
                        });
                    });

                    //#endregion Factory Methods
                    //#region Elements
                    describe('Elements', function () {
                        //#region HtmlNode
                        describe('HtmlNode', function () {
                        });

                        //#endregion HtmlNode
                        //#region HtmlElement
                        describe('HtmlElement', function () {
                        });

                        //#endregion HtmlElement
                        //#region HtmlElementContainer
                        describe('HtmlElementContainer', function () {
                        });

                        //#endregion HtmlElementContainer
                        elements.query().where(function (t) {
                            return t.IsAutoGeneratedElement();
                        }).foreach(function (element) {
                            var elementName = element.elementName;
                            var factoryMethod = element.factoryMethod;

                            //#region elementName
                            describe('elementName', function () {
                                it('should be ' + elementName + '.', function () {
                                    var elementVariable = m.create(m[factoryMethod]());
                                    expect(elementVariable.elementName).toBe(elementName);
                                });
                                it('should equal the nodeName of the element returned by document.createElement.', function () {
                                    var elementVariable = m.create(m[factoryMethod]()), element = document.createElement(elementVariable.elementName);
                                    expect(elementVariable.elementName).toBe(element.nodeName.toLowerCase());
                                });
                            });

                            //#endregion elementName
                            //#region createElement
                            describe('createElement', function () {
                                it('should create an element.', function () {
                                    var elementVariable = m.create(m[factoryMethod]()), element = elementVariable.createElement(document);
                                    expect(u.isDefined(element)).toBe(true);
                                });
                                it('should create an element with a nodeName of ' + elementName + '.', function () {
                                    var elementVariable = m.create(m[factoryMethod]()), element = elementVariable.createElement(document);
                                    expect(element.nodeName.toLowerCase()).toBe(elementName);
                                });
                            });

                            //#endregion createElement
                            //#region Properties
                            element.properties.query().foreach(function (prop) {
                                var propertyName = prop.propertyName;
                                var propertyElementName = prop.propertyElementName;

                                describe(propertyName, function () {
                                    it('should have the same value as the ' + propertyName + ' property in the config.', function () {
                                        prop.testItems.query().foreach(function (testItem) {
                                            var config = new Object();
                                            config[propertyName] = testItem;

                                            var element = m.create(m[factoryMethod](config));
                                            expect(element[propertyName]).toBe(testItem);
                                        });
                                    });
                                    it('should have the same value as the ' + propertyName + 'Binder property in the config.', function () {
                                        prop.testItems.query().foreach(function (testItem) {
                                            var config = new Object();
                                            config[propertyName + 'Binder'] = bind(new b.Property({}, testItem));

                                            var element = m.create(m[factoryMethod](config));
                                            expect(element[propertyName]).toBe(testItem);
                                        });
                                    });
                                    it('should get and set the value of the ' + propertyName + ' property.', function () {
                                        var element = m.create(m[factoryMethod]());

                                        prop.testItems.query().foreach(function (testItem) {
                                            element[propertyName] = testItem;
                                            expect(element[propertyName]).toBe(testItem);
                                        });
                                    });
                                    it('should bind to a model.', function () {
                                        var first, second, model, element, binderConfig;
                                        var testItems = prop.testItems;

                                        for (var i = 0; i < testItems.count(); i++) {
                                            var testItem = testItems[i];
                                            var nextItem = (i == (testItems.count() - 1)) ? testItems[0] : testItems[i + 1];

                                            first = testItem;
                                            second = nextItem;
                                            binderConfig = new Object();
                                            binderConfig[propertyName + 'Binder'] = model = {
                                                property: new b.Property({}, first)
                                            };
                                            element = m.create(m[factoryMethod](binderConfig));

                                            model.property.value = second;
                                            expect(element[propertyName]).toBe(second);
                                            expect(element.element[propertyElementName]).toBe(second);
                                            model.property.value = first;

                                            element[propertyName] = second;
                                            expect(model.property.value).toBe(second);
                                            expect(element.element[propertyElementName]).toBe(second);
                                            model.property.value = first;

                                            runs(function () {
                                                element.element[propertyElementName] = second;
                                            });
                                            waitsFor(function () {
                                                return model.property.value === second;
                                            }, 'The model was not updated correctly from value "' + first + '" to value "' + second + '".', 25);
                                            waitsFor(function () {
                                                return element[propertyName] === second;
                                            }, 'The model was not updated correctly from value "' + first + '" to value "' + second + '".', 25);
                                        }
                                    });
                                });
                            });
                            //#endregion Properties
                        });
                    });
                    //#endregion Elements
                });
            });

            //#region Nested Classes
            //#region TestElement
            var TestElement = (function (_super) {
                __extends(TestElement, _super);
                //#endregion Properties
                //#region Constructors
                function TestElement(elementName, factoryMethod, properties) {
                    _super.call(this);

                    this._elementName = elementName;
                    this._factoryMethod = factoryMethod;
                    this._properties = properties;
                }
                Object.defineProperty(TestElement.prototype, "elementName", {
                    //#endregion Fields
                    //#region Properties
                    get: function () {
                        return this._elementName;
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(TestElement.prototype, "factoryMethod", {
                    get: function () {
                        return this._factoryMethod;
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(TestElement.prototype, "properties", {
                    get: function () {
                        return this._properties;
                    },
                    enumerable: true,
                    configurable: true
                });

                //#endregion Constructors
                //#region Methods
                TestElement.prototype.IsAutoGeneratedElement = function () {
                    return this.elementName != 'HtmlElement' && this.elementName != 'HtmlElementContainer';
                };
                return TestElement;
            })(Classical.object);

            //#endregion TestElement
            //#region TestProperty
            var TestProperty = (function (_super) {
                __extends(TestProperty, _super);
                //#endregion Properties
                //#region Constructors
                function TestProperty(propertyName, propertyElementName, factoryMethod, testItems) {
                    _super.call(this);

                    this._propertyName = propertyName;
                    this._type = factoryMethod;
                }
                Object.defineProperty(TestProperty.prototype, "propertyName", {
                    //#endregion Fields
                    //#region Properties
                    get: function () {
                        return this._propertyName;
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(TestProperty.prototype, "propertyElementName", {
                    get: function () {
                        return this._propertyElementName;
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(TestProperty.prototype, "type", {
                    get: function () {
                        return this._type;
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(TestProperty.prototype, "testItems", {
                    get: function () {
                        return this._testItems;
                    },
                    enumerable: true,
                    configurable: true
                });
                return TestProperty;
            })(Classical.object);
        })(Html.spec || (Html.spec = {}));
        var spec = Html.spec;
    })(Classical.Html || (Classical.Html = {}));
    var Html = Classical.Html;
})(Classical || (Classical = {}));
//# sourceMappingURL=Html2.js.map
