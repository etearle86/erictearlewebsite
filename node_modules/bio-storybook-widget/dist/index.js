

function ___$insertStyle(css) {
    if (!css || typeof window === 'undefined') {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var supabaseJs = require('@supabase/supabase-js');
var classNames = require('classnames');
var bs = require('react-icons/bs');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

___$insertStyle("/* Import Google Fonts */\n@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@100;400;700;900&display=swap\");\n.wrapper {\n  font-family: \"Inter\", sans-serif !important;\n  --width-closed: 70px;\n  --height-closed: 70px;\n  --border-radius-closed: 50%;\n  --width-open: 300px;\n  --height-open: 600px;\n  --border-radius-open: 10px;\n  --color-white: #ffffff;\n  --color-black: #000000;\n  --color-primary: #097c83;\n}\n.wrapper .widget {\n  z-index: 9999999999;\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  width: var(--width-closed);\n  height: var(--height-closed);\n  border-radius: var(--border-radius-closed);\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  background-color: transparent;\n  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;\n  transition: all 0.2s ease-in-out;\n}\n.wrapper .widget--open {\n  opacity: 1;\n  width: var(--width-open);\n  height: var(--height-open);\n}\n.wrapper .widget .widget__btn {\n  cursor: pointer;\n  overflow: hidden;\n  color: var(--color-primary);\n  background-color: transparent;\n  border: 2px solid var(--color-primary);\n  width: var(--width-closed);\n  height: var(--height-closed);\n  min-height: var(--height-closed);\n  border-radius: var(--border-radius-closed);\n  opacity: 0.6;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s ease-in-out;\n}\n.wrapper .widget .widget__btn:hover {\n  opacity: 1;\n  color: var(--color-white);\n  background-color: var(--color-primary);\n  transition: all 0.2s ease-in-out;\n}\n.wrapper .widget .widget__btn--open {\n  width: var(--width-open);\n  border-radius: 0px 0px var(--border-radius-open) var(--border-radius-open);\n  color: var(--color-white);\n  background-color: var(--color-primary);\n  opacity: 1;\n  transition: all 0.2s ease-in-out;\n}\n.wrapper .widget .widget__btn__icon {\n  color: inherit;\n  font-size: 30px;\n  transform: rotateZ(90deg);\n}\n.wrapper .backdrop {\n  z-index: 999999999;\n  background-color: #000;\n  opacity: 0.3;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  min-width: 100vw;\n  max-width: 100vw;\n  height: 100vh;\n  min-height: 100vh;\n  max-height: 100vh;\n}");

___$insertStyle(".fab-list {\n  overflow: hidden;\n  width: 100%;\n  height: 0%;\n  background-color: #ffffff;\n  border-radius: 10px 10px 0 0;\n  overflow-y: scroll;\n  transition: all 0.2s ease-in-out;\n}\n.fab-list--open {\n  height: 100%;\n  transition: all 0.2s ease-in-out;\n}\n.fab-list--empty {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #000000;\n}\n\n.fab-list::-webkit-scrollbar {\n  width: 8px; /* width of the entire scrollbar */\n}\n\n.fab-list::-webkit-scrollbar-track {\n  background: #777; /* color of the tracking area */\n  border-radius: 0 10px 0 0;\n}\n\n.fab-list::-webkit-scrollbar-thumb {\n  background-color: #097c83; /* color of the scroll thumb */\n  border-radius: 20px; /* roundness of the scroll thumb */\n}");

___$insertStyle(".fab-list-item {\n  cursor: pointer;\n  width: 100%;\n  padding: 1rem;\n  background-color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  row-gap: 0.25rem;\n  border-bottom: 1px solid rgba(9, 124, 131, 0.3137254902);\n}\n.fab-list-item:hover {\n  background-color: rgba(9, 124, 131, 0.3137254902);\n}\n.fab-list-item__name {\n  font-size: 18px;\n  color: #000000;\n  font-weight: bold;\n  padding-bottom: 10px;\n}\n.fab-list-item__category {\n  font-size: 12px;\n  color: #888888;\n  text-transform: uppercase;\n}");

var FabListItem = function (_a) {
    var url = _a.url, componentName = _a.componentName, componentCategory = _a.componentCategory;
    var handleItemClick = function () {
        var newWindow = window.open(url, "_blank", "noopener,noreferrer");
        if (newWindow)
            newWindow.opener = null;
    };
    return (React.createElement("div", { className: 'fab-list-item', onClick: handleItemClick },
        React.createElement("div", { className: 'fab-list-item__name' }, componentName),
        React.createElement("div", { className: 'fab-list-item__category' }, componentCategory.toUpperCase())));
};

var FabList = function (_a) {
    var isOpen = _a.isOpen, componentsArr = _a.componentsArr;
    return (React.createElement("div", { className: classNames("fab-list", {
            "fab-list--open": isOpen,
        }, {
            "fab-list--empty": componentsArr.length <= 0,
        }) }, componentsArr.length > 0 ? (componentsArr.map(function (item) {
        var id = item.id, component_name = item.component_name, component_category = item.component_category, url = item.url;
        return (React.createElement(FabListItem, { key: id, componentName: component_name, componentCategory: component_category, url: "https://bio-storybook.vercel.app/?path=/docs/".concat(url) }));
    })) : (React.createElement("text", null, "No Components"))));
};

var FabWidget = function (_a) {
    var componentsArr = _a.componentsArr;
    var _b = React.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var handleBtnClick = function () {
        setIsOpen(!isOpen);
    };
    return (React.createElement("div", { className: 'wrapper' },
        React.createElement("div", { className: classNames("widget", {
                "widget--open": isOpen,
            }) },
            React.createElement(FabList, { isOpen: isOpen, componentsArr: componentsArr }),
            React.createElement("div", { className: classNames("widget__btn", {
                    "widget__btn--open": isOpen,
                }), onClick: handleBtnClick }, isOpen ? (React.createElement(bs.BsArrowsAngleContract, { className: "widget__btn__icon" })) : (React.createElement(bs.BsArrowsAngleExpand, { className: "widget__btn__icon" })))),
        isOpen && (React.createElement("div", { className: "backdrop", onClick: function () { return setIsOpen(false); } }))));
};

var supabase = supabaseJs.createClient("https://vxpfosdeqbislorhsocs.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4cGZvc2RlcWJpc2xvcmhzb2NzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyOTgxOTEsImV4cCI6MTk5ODg3NDE5MX0.uqBU8-MwlGxi3twhPyTfxErkV6qFmDHCzfAsQ5E_GSs");
var App = function (_a) {
    var projectSource = _a.projectSource;
    var _b = React.useState([]), componentsData = _b[0], setComponentsData = _b[1];
    React.useEffect(function () {
        getComponents();
    }, []);
    var getComponents = function () { return __awaiter(void 0, void 0, void 0, function () {
        var data, sortedData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supabase
                        .from("components")
                        .select("*")
                        .eq("project_source", projectSource)];
                case 1:
                    data = (_a.sent()).data;
                    sortedData = data.sort(function (a, b) {
                        return a.component_name === b.component_name
                            ? 0
                            : a.component_name < b.component_name
                                ? -1
                                : 1;
                    });
                    setComponentsData(sortedData);
                    return [2 /*return*/];
            }
        });
    }); };
    return React.createElement(FabWidget, { componentsArr: componentsData });
};

exports.default = App;
//# sourceMappingURL=index.js.map
