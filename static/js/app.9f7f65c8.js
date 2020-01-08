(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app"],{

/***/ "/7QA":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="./typings/index.d.ts" />
var reducePromise_1 = __webpack_require__(/*! ./utils/reducePromise */ "DIv3");
var tasks_1 = __webpack_require__(/*! ./tasks */ "e5Za");
__webpack_require__(/*! ./index.css */ "p2bk");
reducePromise_1.default(tasks_1.default, {}).then(function (context) {
    var setIsReady = context.actions.common.setIsReady;

    setIsReady(true);
});
["drop", "dragover", "drag", "dragstart", "dragend", "dragover", "dragenter", "dragleave"].forEach(function (item) {
    document.addEventListener(item, function (e) {
        e.preventDefault();
        e.stopPropagation();
    });
});

/***/ }),

/***/ "8EKs":
/*!************************************!*\
  !*** ./src/utils/reducerHelper.ts ***!
  \************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "YEIV");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "P2sY");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", { value: true });
var redux_actions_1 = __webpack_require__(/*! redux-actions */ "6SzI");
/**
 * reducer utils
 * @param {*} state
 * @param {*} action
 */
exports.returnPayload = function (state, action) {
    return action.payload;
};
exports.mergePayload = function (state, action) {
    return (0, _assign2.default)({}, state, action.payload);
};
function createPayloadReducer(type) {
    return redux_actions_1.handleActions((0, _defineProperty3.default)({}, type, function (state, action) {
        return (0, _assign2.default)((0, _assign2.default)({}, state), action.payload);
    }), {});
}
exports.createPayloadReducer = createPayloadReducer;

/***/ }),

/***/ "C8Si":
/*!*********************************!*\
  !*** ./src/reducer/app-data.ts ***!
  \*********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = __webpack_require__(/*! redux */ "ANjH");
var redux_actions_1 = __webpack_require__(/*! redux-actions */ "6SzI");
var redux_actions_2 = __webpack_require__(/*! redux-actions */ "6SzI");
var reducerHelper_1 = __webpack_require__(/*! ../utils/reducerHelper */ "8EKs");
exports.appConfig = redux_actions_2.handleActions({}, {});
exports.APP_READY = "APP_READY";
var isReady = redux_actions_1.handleAction(exports.APP_READY, reducerHelper_1.returnPayload, false);
var appDataReducer = redux_1.combineReducers({
    isReady: isReady
});
exports.default = appDataReducer;

/***/ }),

/***/ "DIv3":
/*!************************************!*\
  !*** ./src/utils/reducePromise.ts ***!
  \************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ "4d7F");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * some epic like this
 */
exports.default = function (tasks, initContext) {
    return new _promise2.default(function (resolve) {
        tasks.reduce(function (acc, cur, curIndex, arr) {
            return acc.then(function (x) {
                // last promise,wait for final resove
                if (arr.length === curIndex + 1) {
                    return cur(x).then(function (final) {
                        return resolve(final);
                    });
                } else {
                    return cur(x);
                }
            });
        }, _promise2.default.resolve(initContext));
    });
};

/***/ }),

/***/ "FdW2":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader??ref--9-1!./src/index.css ***!
  \***********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "I1BE")(false);
// imports


// module
exports.push([module.i, "body {\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, \"PingFang SC\", \"Hiragino Sans GB\", \"Heiti SC\", \"Microsoft YaHei\", \"WenQuanYi Micro Hei\", sans-serif;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n\nhtml {\n  height: 100%;\n  width: 100%;\n}\n\n#index_root_4PyOE {\n  height: 100%;\n  width: 100%;\n}\n\n* {\n  box-sizing: border-box;\n  position: relative;\n}\n\n@keyframes rotate-preview {\n  0% {\n    transform: rotate3d(0, 0, 0, 90deg);\n  }\n  50% {\n    transform: rotate3d(1, 0, 0, 90deg);\n  }\n  100% {\n    transform: rotate3d(0, 0, 0, 90deg);\n  }\n}\n\n/*div::-webkit-scrollbar {*/\n\n/*background: transparent;*/\n\n/*width: 10px;*/\n\n/*}*/\n\n/*div:hover::-webkit-scrollbar {*/\n\n/*background: #CCC;*/\n\n/*width: 10px;*/\n\n/*}*/\n\n/*div::-webkit-scrollbar:hover {*/\n\n/*background: #CCC;*/\n\n/*}*/\n\n/*div::-webkit-scrollbar-track:hover {*/\n\n/*background: #CCC;*/\n\n/*border-radius: 10px;*/\n\n/*}*/\n\n/*div::-webkit-scrollbar-thumb {*/\n\n/*width: 9px;*/\n\n/*border-radius: 8px;*/\n\n/*background: gray;*/\n\n/*}*/\n", ""]);

// exports
exports.locals = {
	"root": "index_root_4PyOE"
};

/***/ }),

/***/ "IxnR":
/*!***************************************!*\
  !*** ./src/assets/icons/suo_fang.png ***!
  \***************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAQAAACROWYpAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfjDBcLNC9IlGDkAAAB30lEQVQ4y5WVQWsTQRiGn9kd02gTEygt9BQ8dCGExEKxnjwFxOLFS8+ioOA/qB6sjReP/gKheBSPorTkD1hCMbaI9SC0CKUBSdJLm276edjNdnfVnc3sZWf2e973m/lmZhUwQQWHPIp0TThmj11ObSa4SZXLKUEARZZZshzaXKea2jMsMIWrcbAQQ5pRzGsWjiafjBb1TOaidy49t3PmS+a1IWV5Mb+0KIH8ZG7/4N57H1faNLe3e1+OvNehLFfrdSjozsCzNMG0eq2ul8NqreI0m3MlK8jVSrGuFhaqMf/wzvrmu6/hT2YYQBq1+7fXN9bathoX9tHn7fjimuH/omZYVspRVIUkbBaS6VvTWz9e7o5QmysnH36dyGgtH5u8IZKw8M9SSQwSXz4611AvgIv69Y2Fq4GArJSflg0HJoBlJrO0WCv64dKoPblrIKNpB9vfL86rb6Zz/nepEupqgsdAY/BQVsdAY0dyuVpx3nxaa6P86qqU8LlM5ur1ZvNn/8E1b6TdbfXTwarn7h/AXOlZyR9QHz+3tpK9FY9GAdOXCtoKBR8Num6isWiOKXhbo3PWGcSEk237NhlmgzAVeZKbsGPzmyxTKa+jC1fhO9s2Qw5xyZEZ40fXZ4dtTv8ADUSivMU23a4AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMTItMjNUMTE6NTI6NDcrMDA6MDBM43B1AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTEyLTIzVDExOjUyOjQ3KzAwOjAwPb7IyQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "KP1v":
/*!*******************************!*\
  !*** ./src/container/App.tsx ***!
  \*******************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "Yz+Y");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "iCc5");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "V7oC");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "FYw3");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "mRg0");

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "q1tI");
var react_router_1 = __webpack_require__(/*! react-router */ "dtw8");
var DicomPage_1 = __webpack_require__(/*! ./DicomPage */ "zDtY");
var VitaPage_1 = __webpack_require__(/*! ./VitaPage */ "RJTA");

var App = function (_React$Component) {
    (0, _inherits3.default)(App, _React$Component);

    function App() {
        (0, _classCallCheck3.default)(this, App);
        return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
    }

    (0, _createClass3.default)(App, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { style: {
                        height: "100%",
                        width: "100%"
                    } },
                React.createElement(
                    react_router_1.Switch,
                    null,
                    React.createElement(react_router_1.Route, { path: "/", component: VitaPage_1.default }),
                    React.createElement(react_router_1.Route, { path: "/Dicom", component: DicomPage_1.default })
                )
            );
        }
    }]);
    return App;
}(React.Component);

App.displayName = "App";
exports.default = App;

/***/ }),

/***/ "O3TY":
/*!*****************************!*\
  !*** ./src/action/index.ts ***!
  \*****************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! react-hot-loader/patch */ "87sv");
var _ = __webpack_require__(/*! lodash */ "LvDl");
var redux_1 = __webpack_require__(/*! redux */ "ANjH");
var common = __webpack_require__(/*! ./common */ "Z+qe");
var actionList = {
    common: common
};
exports.mapAppActions = function (dispatch) {
    return {
        actions: _.mapValues(actionList, function (action) {
            return redux_1.bindActionCreators(action, dispatch);
        })
    };
};
exports.conbinedActions = actionList;

/***/ }),

/***/ "RJTA":
/*!******************************************!*\
  !*** ./src/container/VitaPage/index.tsx ***!
  \******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "Yz+Y");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "iCc5");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "V7oC");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "FYw3");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "mRg0");

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "q1tI");
var react_redux_1 = __webpack_require__(/*! react-redux */ "/MKj");
var action_1 = __webpack_require__(/*! ../../action */ "O3TY");
var style_1 = __webpack_require__(/*! ./style */ "y3Nn");
var style_2 = __webpack_require__(/*! ./style */ "y3Nn");
var style_3 = __webpack_require__(/*! ./style */ "y3Nn");
var style_4 = __webpack_require__(/*! ./style */ "y3Nn");
function mapStateToProps() {
  return {};
}

var DicomPage = function (_React$Component) {
  (0, _inherits3.default)(DicomPage, _React$Component);

  function DicomPage(props) {
    (0, _classCallCheck3.default)(this, DicomPage);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DicomPage.__proto__ || (0, _getPrototypeOf2.default)(DicomPage)).call(this, props));

    _this.state = {
      isConfirmModalShow: false
    };
    return _this;
  }

  (0, _createClass3.default)(DicomPage, [{
    key: "render",
    value: function render() {
      return React.createElement(
        style_1.Background,
        null,
        React.createElement(
          style_1.Layout,
          null,
          React.createElement(
            style_1.Head,
            null,
            React.createElement(
              style_2.Title,
              null,
              "\u738B\u5FD7\u660E"
            ),
            React.createElement(
              style_2.SubTitle,
              null,
              "/H5\u524D\u7AEF\u7814\u53D1\u5DE5\u7A0B\u5E08"
            ),
            React.createElement(style_2.Cube, null),
            React.createElement(style_2.Circle, null),
            React.createElement(style_2.Triangle, null)
          ),
          React.createElement(style_1.Line, null),
          React.createElement(
            style_1.Body,
            null,
            React.createElement(
              style_1.Left,
              null,
              React.createElement(
                style_3.Label,
                null,
                "\u6027\u522B"
              ),
              React.createElement(
                style_3.Text,
                null,
                "\u7537"
              ),
              React.createElement(
                style_3.Label,
                null,
                "\u5E74\u9F84"
              ),
              React.createElement(
                style_3.Text,
                null,
                "39\u5C81"
              ),
              React.createElement(
                style_3.Label,
                null,
                "\u5DE5\u4F5C\u5730\u70B9"
              ),
              React.createElement(
                style_3.Text,
                null,
                "\u4E0A\u6D77\u6D66\u4E1C"
              ),
              React.createElement(
                style_3.Label,
                null,
                "\u5DE5\u9F84"
              ),
              React.createElement(
                style_3.Text,
                null,
                "14\u5E74"
              )
            ),
            React.createElement(
              style_1.Center,
              null,
              React.createElement(
                style_3.Headline,
                null,
                React.createElement(
                  style_3.TheHead,
                  null,
                  "\u6C42\u804C\u610F\u5411"
                ),
                React.createElement(style_3.Theline, null)
              ),
              React.createElement(
                style_4.Item,
                null,
                React.createElement(
                  style_4.Clabel,
                  null,
                  "\u5DE5\u4F5C\u7C7B\u578B\uFF1A"
                ),
                React.createElement(
                  style_4.CText,
                  null,
                  "\u5168\u804C"
                )
              ),
              React.createElement(
                style_4.Item,
                null,
                React.createElement(
                  style_4.Clabel,
                  null,
                  "\u671F\u671B\u6708\u85AA\uFF1A"
                ),
                React.createElement(
                  style_4.CText,
                  null,
                  "15000RMB/\u6708"
                )
              ),
              React.createElement(
                style_4.Item,
                null,
                React.createElement(
                  style_4.Clabel,
                  null,
                  "\u671F\u671B\u804C\u4E1A\uFF1A"
                ),
                React.createElement(
                  style_4.CText,
                  null,
                  "H5\u524D\u7AEF\u7814\u53D1,JS\u5168\u6808\u5DE5\u7A0B\u5E08"
                )
              ),
              React.createElement(
                style_4.Item,
                null,
                React.createElement(
                  style_4.Clabel,
                  null,
                  "\u671F\u671B\u884C\u4E1A\uFF1A"
                ),
                React.createElement(
                  style_4.CText,
                  null,
                  "\u4EFB\u610F"
                )
              ),
              React.createElement(style_4.Partition, null),
              React.createElement(
                style_3.Headline,
                null,
                React.createElement(
                  style_3.TheHead,
                  null,
                  "\u5DE5\u4F5C\u7ECF\u5386"
                ),
                React.createElement(style_3.Theline, null)
              ),
              React.createElement(
                style_4.Clabel,
                null,
                "2010\u5E7408\u6708 - 2019\u5E7408\u6708"
              ),
              React.createElement(
                style_4.Content,
                null,
                React.createElement(
                  style_4.CText,
                  null,
                  "\u4E0A\u6D77\u94A6\u6587\u4FE1\u606F\u79D1\u6280\u6709\u9650\u516C\u53F8 (\u7231\u4E50\u5947)"
                ),
                React.createElement(
                  style_4.Clabel,
                  null,
                  "\u524D\u7AEF\u8F6F\u4EF6\u5F00\u53D1\u5DE5\u7A0B\u5E08"
                ),
                React.createElement(
                  style_4.CText,
                  null,
                  "\u672C\u4EBA\u4E8E2010\u5E7408\u6708\u62C5\u4EFB\u8F6F\u4EF6\u5DE5\u7A0B\u5E08\u4E00\u804C\u3002\u4E3B\u8981\u8D1F\u8D23\u516C\u53F8\u7684\u4E00\u7CFB\u5217\u5C11\u513F\u82F1\u8BED\u57F9\u8BAD\u6559\u5B66\u8F6F\u4EF6\u9879\u76EE\u524D\u7AEF\u7684\u5F00\u53D1\u5DE5\u4F5C\uFF0C\u540C\u65F6\u4E5F\u516C\u53F8\u5185\u90E8\u5DE5\u5177\u9879\u76EE\u5F00\u53D1\uFF0C\u6570\u636E\u5206\u6790\uFF0C\u9879\u76EE\u81EA\u52A8\u5316\u96C6\u6210\uFF0C\u81EA\u52A8\u5316\u8FD0\u7EF4\u5DE5\u4F5C\u3002"
                )
              ),
              React.createElement(style_4.Partition, null),
              React.createElement(
                style_4.Clabel,
                null,
                "2006\u5E7411\u6708 - 2009\u5E7404\u6708"
              ),
              React.createElement(
                style_4.Content,
                null,
                React.createElement(
                  style_4.CText,
                  null,
                  "\u4E0A\u6D77\u7ACB\u6D3E\u4FE1\u606F\u79D1\u6280\u6709\u9650\u516C\u53F8"
                ),
                React.createElement(
                  style_4.Clabel,
                  null,
                  "\u8F6F\u4EF6\u5F00\u53D1\u5DE5\u7A0B\u5E08"
                ),
                React.createElement(
                  style_4.CText,
                  null,
                  "\u4E3B\u8981\u8D1F\u8D23\u662F\u5BF9\u65E5\u5916\u5305\u9879\u76EE\u7684\u5F00\u53D1\u548C\u6D4B\u8BD5\uFF0C\u9879\u76EE\u7684\u4E1A\u52A1\u4E3B\u8981\u662F\u7269\u6D41\u65B9\u9762\u7684\uFF0C\u7528\u7684\u4E3B\u8981\u6280\u672F\u662Fjava\u548Coracle\u3002\u901A\u8FC7\u4E1A\u4F59\u65F6\u95F4\u7684\u5B66\u4E60\uFF0C\u83B7\u5F97\u4E86\u300AOracle Certified Associate\u300B\u8BC1\u4E66"
                )
              ),
              React.createElement(style_4.Partition, null),
              React.createElement(
                style_3.Headline,
                null,
                React.createElement(
                  style_3.TheHead,
                  null,
                  "\u9879\u76EE\u7ECF\u9A8C"
                ),
                React.createElement(style_3.Theline, null)
              ),
              React.createElement(
                style_4.Clabel,
                null,
                "2017\u5E7405\u6708 - 2019\u5E7408\u6708"
              ),
              React.createElement(
                style_4.Content,
                null,
                React.createElement(
                  style_4.CText,
                  null,
                  "\u7231\u4E50\u5947\u89C6\u9891\u5916\u6559-\u7EBF\u4E0A\u667A\u6167\u8BFE\u5802(pc\u7AEFmac\u7AEF)(\u5DF2\u4E0A\u7EBF)"
                ),
                React.createElement(
                  style_4.Clabel,
                  null,
                  "\u9879\u76EE\u63CF\u8FF0"
                ),
                React.createElement(
                  style_4.CTextarea,
                  null,
                  "\u804C\u4F4D\u540D\u79F0\uFF1AHTML5\u524D\u7AEF\u5DE5\u7A0B\u5E08\n" + "\u9879\u76EE\u89C4\u6A21\uFF1A\u524D\u7AEF5\u4EBA\uFF0C\u540E\u7AEF\uFF0CQA\uFF0C\u8FD0\u7EF4\u82E5\u5E72\u3002\n" + "\u9879\u76EE\u7B80\u4ECB\uFF1A\u89C6\u9891\u5916\u6559\u662F\u7231\u4E50\u5947\u516C\u53F8\u4E3A\u57F9\u8BAD\u5B66\u6821\u63D0\u4F9B\u7684\u4E00\u5957\u6559\u5B66\u89E3\u51B3\u65B9\u6848\u3002\u901A\u8FC7\u5728\u7EBF\u89C6\u9891\uFF0C\u8BA9\u5916\u6559\u8001\u5E08\u6388\u8BFE\uFF0C\u63D0\u5347\u5B66\u5458\u82F1\u8BED\u542C\u8BF4\u548C\u5E94\u7528\u80FD\u529B\u3002\uFF08https://www.alo7.com/services/izj.html\uFF09\n" + "\u4E3B\u8981\u6280\u672F\u6808\uFF1A\n" + "1. \u5E95\u5C42\uFF1Ajs(ES6), TS\u3002\n" + "\u7528TS\u7684\u76EE\u7684\u662FTS\u6570\u636E\u8981\u6C42\u5E26\u6709\u660E\u786E\u7684\u7C7B\u578B\uFF0C\u4FBF\u4E8E\u5728\u9879\u76EE\u9010\u6E10\u53D8\u5927\u4EE5\u540E\u65B9\u4FBF\u56E2\u961F\u534F\u4F5C\u3002\n" + "2. \u5C01\u88C5\uFF1Aelectron \u89E3\u51B3\u4E86\u8DE8\u5E73\u53F0\uFF0C\u81EA\u52A8\u66F4\u65B0\uFF0C\u5B89\u88C5\u5E94\u7528\n" + "3. UI:css3\uFF0Crem\uFF0Cstyled-components\n" + "styled-components\u53EF\u4EE5\u89E3\u51B3css\u4E2D\u4E0D\u80FD\u5E26\u903B\u8F91\uFF0C\u53EF\u4EE5\u51CF\u5C11css\u76F8\u5173\u7684\u4EE3\u7801\u3002\n" + "rem\u53EF\u4EE5\u89E3\u51B3\u5728\u4E0D\u540C\u5206\u8FA8\u7387\u663E\u793A\u5668\u9875\u9762\u5C55\u73B0\u95EE\u9898\n" + "4. \u6E32\u67D3\u5C42: react\u63D0\u5347UI\u6E32\u67D3\u6027\u80FD\uFF0C\u63D0\u9AD8\u7528\u6237\u4F53\u9A8C\u3002 UI\u7EC4\u4EF6\u6A21\u5757\u5316\uFF0C\u63D0\u9AD8\u53EF\u590D\u7528\u6027\u3002 \n" + "5.\u89C6\u9891\u670D\u52A1\u7531\u7B2C\u4E09\u65B9\u63D0\u4F9B"
                ),
                React.createElement(
                  style_4.Clabel,
                  null,
                  "\u4E2A\u4EBA\u804C\u8D23:"
                ),
                React.createElement(
                  style_4.CTextarea,
                  null,
                  "\u4E3B\u8981\u8D1F\u8D23\u89C6\u9891\u5916\u6559\u9879\u76EE\u7684pc\u7AEF\u548Cmac\u7AEF\u7684\u5F00\u53D1\uFF0C\u89C6\u9891\u6D41\u670D\u52A1\u5546\u5BF9\u63A5\u3002\n" + "\u5177\u4F53\u5185\u5BB9\u5305\u62EC\uFF1A\n" + "1.\u6839\u636E\u4EA7\u54C1\u8BBE\u8BA1\u5E08\u63D0\u4F9B\u7684PRD\u548C\u4EA4\u4E92\u8BBE\u8BA1\u5E08\u63D0\u4F9B\u7684UI\uFF0C\u5F00\u53D1\u5E76\u5B9E\u73B0\u5B66\u751F\u7AEF\uFF0C\u6559\u5E08\u7AEF\u76F8\u5173\u9875\u9762\u5F00\u53D1\uFF0C\u52A8\u753B\u7279\u6548\u3002 \u4E3B\u8981\u6280\u672F\u6808\uFF1Aelectron\uFF0Creact\uFF0Cstyled-components\uFF0Crem\n" + "2.\u6839\u636E\u8FD0\u7EF4\u8981\u6C42\uFF0C\u6BCF\u4E24\u5468\u4E00\u6B21\u529F\u80FD\u8FED\u4EE3\uFF0C\u81EA\u52A8\u5316\u96C6\u6210\u53D1\u5E03\u4E0A\u7EBF\u3002\u4E3B\u8981\u6280\u672F\u6808\uFF1Awebpack, glup, gitlab-ci, jenkins, docker, shell\u3002\n" + "3.\u91C7\u96C6\u7528\u6237\u76F8\u5173\u7684\u6570\u636E\u548C\u9519\u8BEF\u6808\uFF0C\u7BA1\u7406\u548C\u76D1\u63A7\u9879\u76EE\u5065\u5EB7\u72B6\u51B5\u3002 \u4E3B\u8981\u6280\u672F\u6808\uFF1Akibana\uFF0Celasticsearch, bi\u3002"
                )
              ),
              React.createElement(style_4.Partition, null),
              React.createElement(
                style_4.Clabel,
                null,
                "2015\u5E7404\u6708 - 2017\u5E7401\u6708"
              ),
              React.createElement(
                style_4.Content,
                null,
                React.createElement(
                  style_4.CText,
                  null,
                  "\u8001\u5E08\u6559\u5B66\u4E2D\u5FC3-\u4E92\u52A8\u8BFE\u4EF6(pc\u7AEFmac\u7AEF)(\u5DF2\u4E0A\u7EBF)"
                ),
                React.createElement(
                  style_4.Clabel,
                  null,
                  "\u9879\u76EE\u63CF\u8FF0"
                ),
                React.createElement(
                  style_4.CTextarea,
                  null,
                  "\u804C\u4F4D\u540D\u79F0\uFF1AHTML5\u524D\u7AEF\u5DE5\u7A0B\u5E08\n" + "\u4E3B\u8981\u6280\u672F\u6808\uFF1Aelectron + JS + react + flash/as3\n" + "\u9879\u76EE\u89C4\u6A21\uFF1A\u524D\u7AEF\u5E73\u53F0\u7AEF4\u4EBA\uFF0C\u524D\u7AEF\u5185\u5BB9\u7AEF\u3001\u540E\u7AEF\u3001QA\u82E5\u5E72\u3002\n" + "\u9879\u76EE\u7B80\u4ECB\uFF1A\u9879\u76EE\u4E3B\u8981\u662F\u7528\u4E8E\u7535\u5B50\u4E92\u52A8\u767D\u677F\u4E0A\u8FD0\u884C\u7684\u8BFE\u4EF6\u3002"
                ),
                React.createElement(
                  style_4.Clabel,
                  null,
                  "\u4E2A\u4EBA\u804C\u8D23:"
                ),
                React.createElement(
                  style_4.CTextarea,
                  null,
                  "\u4E3B\u8981\u8D1F\u8D23\u5E73\u53F0\u7AEF\u548C\u5185\u5BB9\u7AEF\u76F8\u5173\u5F00\u53D1\n" + "\u5177\u4F53\u5185\u5BB9\uFF1A\n" + "1. \u524D\u7AEF\u90E8\u5206UI\u529F\u80FD\u3002 \u4E3B\u8981\u6280\u672F\u6808\uFF1Areact css3\n" + "2. \u5185\u5BB9\u7AEF\u90E8\u5206\u9898\u578B\u5B9E\u73B0\u3002\u4E3B\u8981\u6280\u672F\u6808\uFF1Areact css3\n" + "3. \u5185\u5BB9\u7AEF\u7684PPT\u64AD\u653E\u5668\u529F\u80FD\u5B9E\u73B0\u3002 \u4E3B\u8981\u6280\u672F\u6808\uFF1A keynote\uFF0Cjs"
                )
              ),
              React.createElement(style_4.Partition, null),
              React.createElement(
                style_3.Headline,
                null,
                React.createElement(
                  style_3.TheHead,
                  null,
                  "\u6559\u80B2\u7ECF\u5386"
                ),
                React.createElement(style_3.Theline, null)
              ),
              React.createElement(
                style_4.Item,
                null,
                React.createElement(
                  style_4.Clabel,
                  null,
                  "2000\u5E7409\u6708 - 2004\u5E7406\u6708 "
                )
              ),
              React.createElement(
                style_4.Content,
                null,
                React.createElement(
                  style_4.CTextarea,
                  null,
                  "\u4E2D\u5357\u5927\u5B66 \u8BA1\u7B97\u673A\u79D1\u5B66\u4E0E\u6280\u672F\u4E13\u4E1A \u672C\u79D1"
                )
              ),
              React.createElement(style_4.Partition, null),
              React.createElement(
                style_3.Headline,
                null,
                React.createElement(
                  style_3.TheHead,
                  null,
                  "\u4E13\u4E1A\u6280\u80FD"
                ),
                React.createElement(style_3.Theline, null)
              )
            )
          )
        )
      );
    }
  }]);
  return DicomPage;
}(React.Component);

exports.default = react_redux_1.connect(mapStateToProps, action_1.mapAppActions)(DicomPage);

/***/ }),

/***/ "YeJN":
/*!******************************!*\
  !*** ./src/reducer/index.ts ***!
  \******************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var app_data_1 = __webpack_require__(/*! ./app-data */ "C8Si");
var State = {
    appData: app_data_1.default
};
exports.default = State;

/***/ }),

/***/ "Z+qe":
/*!******************************!*\
  !*** ./src/action/common.ts ***!
  \******************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var redux_actions_1 = __webpack_require__(/*! redux-actions */ "6SzI");
var app_data_1 = __webpack_require__(/*! ../reducer/app-data */ "C8Si");
exports.setIsReady = redux_actions_1.createAction(app_data_1.APP_READY);

/***/ }),

/***/ "cI62":
/*!******************************************!*\
  !*** ./src/container/DicomPage/style.ts ***!
  \******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __webpack_require__(/*! styled-components */ "vOnD");
var suoFang = __webpack_require__(/*! ../../assets/icons/suo_fang.png */ "IxnR");
exports.Background = styled_components_1.default.div.withConfig({
  displayName: "style__Background",
  componentId: "hbtz7n-0"
})(["background:#000;display:flex;font-size:0.2rem;height:100%;"]);
exports.Layout = styled_components_1.default.div.withConfig({
  displayName: "style__Layout",
  componentId: "hbtz7n-1"
})(["width:100%;height:100%;margin:0.05rem;"]);
exports.Head = styled_components_1.default.div.withConfig({
  displayName: "style__Head",
  componentId: "hbtz7n-2"
})(["display:flex;height:1rem;margin:0;"]);
exports.Line = styled_components_1.default.div.withConfig({
  displayName: "style__Line",
  componentId: "hbtz7n-3"
})(["background:#0a0;height:100%;height:1px;"]);
exports.Body = styled_components_1.default.div.withConfig({
  displayName: "style__Body",
  componentId: "hbtz7n-4"
})(["display:flex;flex-direction:row;margin:0;height:100%;"]);
exports.Left = styled_components_1.default.div.withConfig({
  displayName: "style__Left",
  componentId: "hbtz7n-5"
})(["margin-left:0;height:100%;width:6rem;"]);
exports.Center = styled_components_1.default.div.withConfig({
  displayName: "style__Center",
  componentId: "hbtz7n-6"
})(["background:#00a;width:100%;height:100%;border:0.01rem solid #0a0;"]);
exports.Button = styled_components_1.default.div.withConfig({
  displayName: "style__Button",
  componentId: "hbtz7n-7"
})(["background:url(", ") 0.2rem 0.2rem/0.4rem 0.4rem no-repeat;padding:0.7rem 0 0.05rem 0;font-size:0.16rem;text-align:center;line-height:0.18rem;letter-spacing:0;height:1rem;width:0.8rem;color:#fff;cursor:pointer;&:hover{background-color:#555;}"], suoFang);

/***/ }),

/***/ "e5Za":
/*!****************************!*\
  !*** ./src/tasks/index.ts ***!
  \****************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var init_store_1 = __webpack_require__(/*! ./init-store */ "nyzS");
var init_ui_1 = __webpack_require__(/*! ./init-ui */ "g4P1");
// 初始化任务列表,按顺序执行
exports.default = [init_store_1.default, init_ui_1.default];

/***/ }),

/***/ "g4P1":
/*!*******************************!*\
  !*** ./src/tasks/init-ui.tsx ***!
  \*******************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ "4d7F");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "q1tI");
var ReactDOM = __webpack_require__(/*! react-dom */ "i8i4");
var react_redux_1 = __webpack_require__(/*! react-redux */ "/MKj");
var react_router_redux_1 = __webpack_require__(/*! react-router-redux */ "L342");
var react_router_1 = __webpack_require__(/*! react-router */ "dtw8");
var react_hot_loader_1 = __webpack_require__(/*! react-hot-loader */ "0cfB");
exports.ExperimentsContext = React.createContext("Experiments"); // must before app
var App_1 = __webpack_require__(/*! ../container/App */ "KP1v");
function renderApp(store, history, exp) {
  // eslint-disable-next-line
  return ReactDOM.render(React.createElement(
    react_hot_loader_1.AppContainer,
    null,
    React.createElement(
      exports.ExperimentsContext.Provider,
      { value: exp },
      React.createElement(
        react_redux_1.Provider,
        { store: store },
        React.createElement(
          react_router_redux_1.ConnectedRouter,
          { history: history },
          React.createElement(react_router_1.Route, { path: "/", component: App_1.default })
        )
      )
    )
  ), document.getElementById("root"));
}
exports.default = function (context) {
  renderApp(context.store, context.history, context.exp);
  // Webpack Hot Module Replacement API
  if (false) {}
  return _promise2.default.resolve(context);
};

/***/ }),

/***/ "nyzS":
/*!*********************************!*\
  !*** ./src/tasks/init-store.ts ***!
  \*********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ "4d7F");

var _promise2 = _interopRequireDefault(_promise);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "P2sY");

var _assign2 = _interopRequireDefault(_assign);

var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "GQeE");

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", { value: true });
var redux_thunk_1 = __webpack_require__(/*! redux-thunk */ "sINF");
var redux_1 = __webpack_require__(/*! redux */ "ANjH");
var react_router_redux_1 = __webpack_require__(/*! react-router-redux */ "L342");
var history_1 = __webpack_require__(/*! history */ "LhCv");
var reducer_1 = __webpack_require__(/*! ../reducer */ "YeJN");
var _ = __webpack_require__(/*! lodash */ "LvDl");
var action_1 = __webpack_require__(/*! ../action */ "O3TY");
var ignoreAction = {
    SEND_AOC_DATA: true,
    "finish: SEND_AOC_DATA": true,
    HANDLER_FOR: true,
    SET_LEFT_TIME: true
};
exports.default = function (context) {
    // use chrome extension
    var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        actionsBlacklist: (0, _keys2.default)(ignoreAction)
    }) || redux_1.compose;
    // history
    var history = history_1.createBrowserHistory();
    var middlewares = [redux_thunk_1.default, react_router_redux_1.routerMiddleware(history)];
    var store = redux_1.createStore(redux_1.combineReducers((0, _assign2.default)((0, _assign2.default)({}, reducer_1.default), { router: react_router_redux_1.routerReducer })), composeEnhancers(redux_1.applyMiddleware.apply(redux_1, middlewares)));
    var actions = _.mapValues(action_1.conbinedActions, function (action) {
        return redux_1.bindActionCreators(action, store.dispatch);
    });
    window.__AOC_STORE__ = store;
    window.__GET_ROOM_SUMMARY__ = function () {
        return getRoomSummary$(store.getState());
    };
    return _promise2.default.resolve((0, _assign2.default)((0, _assign2.default)({}, context), { store: store, history: history, actions: actions }));
};

/***/ }),

/***/ "p2bk":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../node_modules/css-loader??ref--9-1!./index.css */ "FdW2");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "aET+")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "y3Nn":
/*!*****************************************!*\
  !*** ./src/container/VitaPage/style.ts ***!
  \*****************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __webpack_require__(/*! styled-components */ "vOnD");
exports.Background = styled_components_1.default.div.withConfig({
  displayName: "style__Background",
  componentId: "sc-6w2vu6-0"
})(["background:#fff;display:flex;font-family:PingFangSC-Semibold;font-size:0.18rem;height:100%;overflow-y:auto;"]);
exports.Layout = styled_components_1.default.div.withConfig({
  displayName: "style__Layout",
  componentId: "sc-6w2vu6-1"
})(["width:100%;height:100%;"]);
exports.Head = styled_components_1.default.div.withConfig({
  displayName: "style__Head",
  componentId: "sc-6w2vu6-2"
})(["background:#000;display:flex;align-items:center;height:1.5rem;margin:0;"]);
exports.Title = styled_components_1.default.div.withConfig({
  displayName: "style__Title",
  componentId: "sc-6w2vu6-3"
})(["font-size:0.35rem;color:#fff;margin-left:0.2rem;"]);
exports.SubTitle = styled_components_1.default.div.withConfig({
  displayName: "style__SubTitle",
  componentId: "sc-6w2vu6-4"
})(["font-size:0.2rem;color:#fff;margin-left:0.1rem;"]);
exports.Shape = styled_components_1.default.div.withConfig({
  displayName: "style__Shape",
  componentId: "sc-6w2vu6-5"
})(["position:absolute;background-color:#444;"]);
exports.Cube = styled_components_1.default(exports.Shape).withConfig({
  displayName: "style__Cube",
  componentId: "sc-6w2vu6-6"
})(["right:0.3rem;top:0.3rem;width:0.3rem;height:0.3rem;"]);
exports.Circle = styled_components_1.default(exports.Shape).withConfig({
  displayName: "style__Circle",
  componentId: "sc-6w2vu6-7"
})(["right:1rem;top:0.4rem;width:0.4rem;height:0.4rem;border-radius:50%;"]);
exports.Triangle = styled_components_1.default.div.withConfig({
  displayName: "style__Triangle",
  componentId: "sc-6w2vu6-8"
})(["position:absolute;right:0.5rem;bottom:0.2rem;height:0;width:0;border-left:0.2rem solid transparent;border-right:0.2rem solid transparent;border-bottom:0.4rem solid #444;"]);
exports.Line = styled_components_1.default.div.withConfig({
  displayName: "style__Line",
  componentId: "sc-6w2vu6-9"
})(["background:#fff;height:0.1rem;"]);
exports.Body = styled_components_1.default.div.withConfig({
  displayName: "style__Body",
  componentId: "sc-6w2vu6-10"
})(["display:flex;margin:0;justify-content:space-between;"]);
exports.Left = styled_components_1.default.div.withConfig({
  displayName: "style__Left",
  componentId: "sc-6w2vu6-11"
})(["display:flex;flex-direction:column;width:20%;background:#000;"]);
exports.Photo = styled_components_1.default.div.withConfig({
  displayName: "style__Photo",
  componentId: "sc-6w2vu6-12"
})(["margin-left:0;width:20%;background:#000;"]);
exports.Label = styled_components_1.default.div.withConfig({
  displayName: "style__Label",
  componentId: "sc-6w2vu6-13"
})(["color:#aaa;margin-left:0.2rem;margin-top:0.2rem;"]);
exports.Text = styled_components_1.default.div.withConfig({
  displayName: "style__Text",
  componentId: "sc-6w2vu6-14"
})(["color:#fff;margin-left:0.2rem;margin-top:0.05rem;"]);
exports.Center = styled_components_1.default.div.withConfig({
  displayName: "style__Center",
  componentId: "sc-6w2vu6-15"
})(["display:flex;flex-direction:column;width:79%;"]);
exports.Partition = styled_components_1.default.div.withConfig({
  displayName: "style__Partition",
  componentId: "sc-6w2vu6-16"
})(["height:0.2rem;width:100%;"]);
exports.Headline = styled_components_1.default.div.withConfig({
  displayName: "style__Headline",
  componentId: "sc-6w2vu6-17"
})(["display:flex;align-items:center;"]);
exports.TheHead = styled_components_1.default.div.withConfig({
  displayName: "style__TheHead",
  componentId: "sc-6w2vu6-18"
})(["color:#000;font-size:0.32rem;text-align:center;white-space:nowrap;"]);
exports.Theline = styled_components_1.default.div.withConfig({
  displayName: "style__Theline",
  componentId: "sc-6w2vu6-19"
})(["background-color:#000;height:1px;width:100%;margin-left:0.05rem;"]);
exports.Item = styled_components_1.default.div.withConfig({
  displayName: "style__Item",
  componentId: "sc-6w2vu6-20"
})(["display:flex;"]);
exports.Clabel = styled_components_1.default.div.withConfig({
  displayName: "style__Clabel",
  componentId: "sc-6w2vu6-21"
})(["color:#888;margin-top:0.04rem;"]);
exports.CText = styled_components_1.default.text.withConfig({
  displayName: "style__CText",
  componentId: "sc-6w2vu6-22"
})(["text-align:left;color:#000;margin-top:0.02rem;"]);
exports.CTextarea = styled_components_1.default.div.withConfig({
  displayName: "style__CTextarea",
  componentId: "sc-6w2vu6-23"
})(["text-align:left;color:#000;white-space:pre-wrap;"]);
exports.Content = styled_components_1.default.div.withConfig({
  displayName: "style__Content",
  componentId: "sc-6w2vu6-24"
})(["display:flex;flex-direction:column;margin-left:0.2rem;margin-right:0.2rem;"]);

/***/ }),

/***/ "zDtY":
/*!*******************************************!*\
  !*** ./src/container/DicomPage/index.tsx ***!
  \*******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "Yz+Y");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "iCc5");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "V7oC");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "FYw3");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "mRg0");

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "q1tI");
var react_redux_1 = __webpack_require__(/*! react-redux */ "/MKj");
var action_1 = __webpack_require__(/*! ../../action */ "O3TY");
var style_1 = __webpack_require__(/*! ./style */ "cI62");
function mapStateToProps() {
  return {};
}

var DicomPage = function (_React$Component) {
  (0, _inherits3.default)(DicomPage, _React$Component);

  function DicomPage(props) {
    (0, _classCallCheck3.default)(this, DicomPage);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DicomPage.__proto__ || (0, _getPrototypeOf2.default)(DicomPage)).call(this, props));

    _this.state = {
      isConfirmModalShow: false
    };
    return _this;
  }

  (0, _createClass3.default)(DicomPage, [{
    key: "render",
    value: function render() {
      return React.createElement(
        style_1.Background,
        null,
        React.createElement(
          style_1.Layout,
          null,
          React.createElement(
            style_1.Head,
            null,
            React.createElement(
              style_1.Button,
              null,
              "\u653E\u5927"
            ),
            React.createElement(
              style_1.Button,
              null,
              "\u5C42\u7EA7"
            ),
            React.createElement(
              style_1.Button,
              null,
              "\u79FB\u52A8"
            ),
            React.createElement(
              style_1.Button,
              null,
              "\u957F\u5EA6"
            ),
            React.createElement(
              style_1.Button,
              null,
              "\u89D2\u5EA6"
            ),
            React.createElement(
              style_1.Button,
              null,
              "\u6D4B\u91CF"
            ),
            React.createElement(
              style_1.Button,
              null,
              "\u590D\u539F"
            )
          ),
          React.createElement(style_1.Line, null),
          React.createElement(
            style_1.Body,
            null,
            React.createElement(
              style_1.Left,
              null,
              React.createElement(
                "div",
                null,
                "\u6211\u662F\u4FA7\u8FB9\u680F"
              )
            ),
            React.createElement(
              style_1.Center,
              null,
              React.createElement(
                "div",
                null,
                "\u7167\u7247\u533A"
              )
            )
          )
        )
      );
    }
  }]);
  return DicomPage;
}(React.Component);

exports.default = react_redux_1.connect(mapStateToProps, action_1.mapAppActions)(DicomPage);

/***/ })

},[["/7QA","manifest","vendor"]]]);
//# sourceMappingURL=app.9f7f65c8.js.map