webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Navegacion.js":
/*!**********************************!*\
  !*** ./components/Navegacion.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navegacion; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");








var _jsxFileName = "D:\\Proyectos Web\\test_rep_pe\\components\\Navegacion.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;




var Navegacion =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Navegacion, _Component);

  function Navegacion() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Navegacion);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Navegacion)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      dropdownMenuStyle: {
        display: "none",
        activeItem: "inicio"
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleItemClick", function (e, _ref) {
      var name = _ref.name;
      return _this.setState({
        activeItem: name
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleToggleDropdownMenu", function () {
      var newState = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, _this.state);

      if (newState.dropdownMenuStyle.display === "none") {
        newState.dropdownMenuStyle = {
          display: "flex"
        };
      } else {
        newState.dropdownMenuStyle = {
          display: "none"
        };
      }

      _this.setState(newState);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Navegacion, [{
    key: "render",
    value: function render() {
      var activeItem = this.state.dropdownMenuStyle.activeItem;
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Segment"], {
        className: "bg-primary cabecera",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
        className: "tablet computer only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Column, {
        className: "centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Menu"], {
        secondary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Menu"].Item, {
        className: "header item-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "EsNovel")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Menu"].Menu, {
        position: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Menu"].Item, {
        className: "item-white",
        as: next_link__WEBPACK_IMPORTED_MODULE_8__["Link"],
        to: "/",
        name: "inicio",
        icon: "home",
        active: activeItem === 'inicio',
        onClick: this.handleItemClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Menu"].Item, {
        className: "item-white",
        as: next_link__WEBPACK_IMPORTED_MODULE_8__["Link"],
        to: "404",
        name: "categorias",
        icon: "fire",
        active: activeItem === 'categorias',
        onClick: this.handleItemClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Menu"].Item, {
        className: "item-white",
        as: next_link__WEBPACK_IMPORTED_MODULE_8__["Link"],
        to: "/",
        name: "novelas",
        icon: "grid layout",
        active: activeItem === 'novelas',
        onClick: this.handleItemClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Menu"].Item, {
        className: "item-white",
        as: next_link__WEBPACK_IMPORTED_MODULE_8__["Link"],
        to: "/",
        content: "Mi Biblioteca",
        name: "mi_biblioteca",
        icon: "book",
        active: activeItem === 'mi_biblioteca',
        onClick: this.handleItemClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Menu"].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        icon: "search",
        placeholder: "Search...",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Popup"], {
        position: "bottom center",
        wide: "very",
        className: "pl-0",
        trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Menu"].Item, {
          className: "item-white",
          as: next_link__WEBPACK_IMPORTED_MODULE_8__["Link"],
          to: "/",
          name: "login",
          icon: "sign in",
          active: activeItem === 'login',
          onClick: this.handleItemClick,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }),
        on: "click",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
        divided: true,
        columns: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Header"], {
        as: "h4",
        textAlign: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Header"].Content, {
        className: "text-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "\xA1Bienvenido a EsNovel!")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["List"], {
        divided: true,
        selection: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["List"].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        color: "facebook",
        circular: true,
        icon: "facebook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }), " Acceder con Facebook"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["List"].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        color: "twitter",
        circular: true,
        icon: "twitter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }), " Acceder con Twitter"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["List"].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        color: "google plus",
        circular: true,
        icon: "google",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }), " Acceder con Google")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Header"], {
        as: "h5",
        textAlign: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Header"].Content, {
        className: "text-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, "\xBFA\xFAn no tienes una cuenta? ", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8__["Link"], {
        to: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Header"].Subheader, {
        as: "a",
        to: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Icon"], {
        name: "user plus",
        className: "text-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }), "Registrate")))))))))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
        padded: true,
        className: "mobile only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Menu"], {
        borderless: true,
        fluid: true,
        size: "huge",
        className: "bg-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Menu"].Item, {
        header: true,
        as: "a",
        className: "item-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, "EsNovel"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Menu"].Menu, {
        position: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Menu"].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        icon: true,
        basic: true,
        inverted: true,
        toggle: true,
        onClick: this.handleToggleDropdownMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Icon"], {
        name: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Menu"], {
        vertical: true,
        borderless: true,
        fluid: true,
        style: this.state.dropdownMenuStyle,
        className: "bg-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Menu"].Item, {
        className: "item-white",
        as: next_link__WEBPACK_IMPORTED_MODULE_8__["Link"],
        to: "/",
        name: "inicio",
        icon: "home",
        active: activeItem === 'inicio',
        onClick: this.handleItemClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Menu"].Item, {
        className: "item-white",
        as: next_link__WEBPACK_IMPORTED_MODULE_8__["Link"],
        to: "404",
        name: "categorias",
        icon: "fire",
        active: activeItem === 'categorias',
        onClick: this.handleItemClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Menu"].Item, {
        className: "item-white",
        as: next_link__WEBPACK_IMPORTED_MODULE_8__["Link"],
        to: "/",
        name: "novelas",
        icon: "grid layout",
        active: activeItem === 'novelas',
        onClick: this.handleItemClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Menu"].Item, {
        className: "item-white",
        as: next_link__WEBPACK_IMPORTED_MODULE_8__["Link"],
        to: "/",
        content: "Mi Biblioteca",
        name: "mi_biblioteca",
        icon: "book",
        active: activeItem === 'mi_biblioteca',
        onClick: this.handleItemClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Menu"].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        icon: "search",
        placeholder: "Search...",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Menu"].Item, {
        className: "item-white",
        as: next_link__WEBPACK_IMPORTED_MODULE_8__["Link"],
        to: "/",
        name: "login",
        icon: "user",
        active: activeItem === 'login',
        onClick: this.handleItemClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      })))));
    }
  }]);

  return Navegacion;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.3570eb75d842bca8d8aa.hot-update.js.map