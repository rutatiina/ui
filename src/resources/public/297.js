(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[297],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/l-limitless-bs4/layout_2-ltr-default/settings/roles-and-permissions/SidebarLeft.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/l-limitless-bs4/layout_2-ltr-default/settings/roles-and-permissions/SidebarLeft.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      permissionsCount: 0,
      rolesCount: 0
    };
  },
  mounted: function mounted() {
    this.fetchPermissionsCount();
    this.fetchRolesCount();
  },
  methods: {
    fetchPermissionsCount: function () {
      var _fetchPermissionsCount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios.get('/settings/permissions/count').then(function (response) {
                  _this.permissionsCount = response.data;
                })["catch"](function (error) {
                  // handle error
                  console.log(error); //test
                })["finally"](function (response) {// always executed this is supposed
                });

              case 3:
                return _context.abrupt("return", _context.sent);

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0); //test

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 6]]);
      }));

      function fetchPermissionsCount() {
        return _fetchPermissionsCount.apply(this, arguments);
      }

      return fetchPermissionsCount;
    }(),
    fetchRolesCount: function () {
      var _fetchRolesCount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _this2 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return axios.get('/settings/roles/count').then(function (response) {
                  _this2.rolesCount = response.data;
                })["catch"](function (error) {
                  // handle error
                  console.log(error); //test
                })["finally"](function (response) {// always executed this is supposed
                });

              case 3:
                return _context2.abrupt("return", _context2.sent);

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0); //test

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 6]]);
      }));

      function fetchRolesCount() {
        return _fetchRolesCount.apply(this, arguments);
      }

      return fetchRolesCount;
    }()
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/l-limitless-bs4/layout_2-ltr-default/settings/roles-and-permissions/SidebarLeft.vue?vue&type=template&id=31f153f4&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/l-limitless-bs4/layout_2-ltr-default/settings/roles-and-permissions/SidebarLeft.vue?vue&type=template&id=31f153f4& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "sidebar sidebar-light sidebar-secondary sidebar-expand-md"
    },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "sidebar-content " }, [
        _c(
          "div",
          {
            staticClass: "position-fixed h-100",
            staticStyle: { width: "16.875rem", overflow: "hidden" },
            attrs: { id: "rg-sidebar-secondary-fixed-content-scroll" }
          },
          [
            _c("div", [
              _c("div", { staticClass: "card mb-2" }, [
                _c("div", { staticClass: "card-body p-0" }, [
                  _c(
                    "ul",
                    {
                      staticClass: "nav nav-sidebar",
                      attrs: { "data-nav-type": "accordion" }
                    },
                    [
                      _c("li", { staticClass: "nav-item-header" }, [
                        _vm._v("Roles")
                      ]),
                      _vm._v(" "),
                      _c(
                        "li",
                        { staticClass: "nav-item" },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "nav-link",
                              attrs: { to: "/settings/roles" }
                            },
                            [
                              _c("i", { staticClass: "icon-key" }),
                              _vm._v(
                                "\n                                    All Roles\n                                    "
                              ),
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "badge bg-primary badge-pill font-weight-bold ml-auto"
                                },
                                [_vm._v(_vm._s(_vm.rolesCount))]
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        { staticClass: "nav-item" },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "nav-link",
                              attrs: { to: "/settings/roles/assign" }
                            },
                            [
                              _c("i", { staticClass: "icon-user-lock" }),
                              _vm._v(
                                " Assign Role(s)\n                                "
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        { staticClass: "nav-item" },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "nav-link",
                              attrs: { to: "/settings/roles/create" }
                            },
                            [
                              _c("i", { staticClass: "icon-plus-circle2" }),
                              _vm._v(
                                " Create Role\n                                "
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("li", { staticClass: "nav-item-header" }, [
                        _vm._v("Permissions")
                      ]),
                      _vm._v(" "),
                      _c(
                        "li",
                        { staticClass: "nav-item" },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "nav-link",
                              attrs: { to: "/settings/permissions" }
                            },
                            [
                              _c("i", { staticClass: "icon-user-lock" }),
                              _vm._v(
                                "\n                                    Permissions\n                                    "
                              ),
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "badge bg-primary badge-pill font-weight-bold ml-auto"
                                },
                                [_vm._v(_vm._s(_vm.permissionsCount))]
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        { staticClass: "nav-item" },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "nav-link",
                              attrs: { to: "/settings/permissions/assign" }
                            },
                            [
                              _c("i", { staticClass: "icon-user-lock" }),
                              _vm._v(
                                " Assign Permissions\n                                "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ]
                  )
                ])
              ])
            ])
          ]
        )
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "sidebar-mobile-toggler text-center" }, [
      _c(
        "a",
        {
          staticClass: "sidebar-mobile-secondary-toggle",
          attrs: { href: "#" }
        },
        [_c("i", { staticClass: "icon-arrow-left8" })]
      ),
      _vm._v(" "),
      _c("span", { staticClass: "font-weight-semibold" }, [
        _vm._v("Secondary sidebar")
      ]),
      _vm._v(" "),
      _c("a", { staticClass: "sidebar-mobile-expand", attrs: { href: "#" } }, [
        _c("i", { staticClass: "icon-screen-full" }),
        _vm._v(" "),
        _c("i", { staticClass: "icon-screen-normal" })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/l-limitless-bs4/layout_2-ltr-default/settings/roles-and-permissions/SidebarLeft.vue":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/l-limitless-bs4/layout_2-ltr-default/settings/roles-and-permissions/SidebarLeft.vue ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SidebarLeft_vue_vue_type_template_id_31f153f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SidebarLeft.vue?vue&type=template&id=31f153f4& */ "./resources/js/components/l-limitless-bs4/layout_2-ltr-default/settings/roles-and-permissions/SidebarLeft.vue?vue&type=template&id=31f153f4&");
/* harmony import */ var _SidebarLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SidebarLeft.vue?vue&type=script&lang=js& */ "./resources/js/components/l-limitless-bs4/layout_2-ltr-default/settings/roles-and-permissions/SidebarLeft.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SidebarLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SidebarLeft_vue_vue_type_template_id_31f153f4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SidebarLeft_vue_vue_type_template_id_31f153f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/l-limitless-bs4/layout_2-ltr-default/settings/roles-and-permissions/SidebarLeft.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/l-limitless-bs4/layout_2-ltr-default/settings/roles-and-permissions/SidebarLeft.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************!*\
  !*** ./resources/js/components/l-limitless-bs4/layout_2-ltr-default/settings/roles-and-permissions/SidebarLeft.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SidebarLeft.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/l-limitless-bs4/layout_2-ltr-default/settings/roles-and-permissions/SidebarLeft.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/l-limitless-bs4/layout_2-ltr-default/settings/roles-and-permissions/SidebarLeft.vue?vue&type=template&id=31f153f4&":
/*!****************************************************************************************************************************************************!*\
  !*** ./resources/js/components/l-limitless-bs4/layout_2-ltr-default/settings/roles-and-permissions/SidebarLeft.vue?vue&type=template&id=31f153f4& ***!
  \****************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarLeft_vue_vue_type_template_id_31f153f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SidebarLeft.vue?vue&type=template&id=31f153f4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/l-limitless-bs4/layout_2-ltr-default/settings/roles-and-permissions/SidebarLeft.vue?vue&type=template&id=31f153f4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarLeft_vue_vue_type_template_id_31f153f4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarLeft_vue_vue_type_template_id_31f153f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);