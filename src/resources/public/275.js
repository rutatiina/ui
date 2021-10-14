(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[275],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/vehicles/Index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/vehicles/Index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
    return {};
  },
  watch: {
    '$route.query.page': function $routeQueryPage(page) {
      this.tableData.url = this.$router.currentRoute.path + '?page=' + page;
    }
  },
  mounted: function mounted() {
    this.tableData.initiate = true;
    var currentObj = this;

    if (currentObj.$route.query.page === undefined) {
      currentObj.tableData.url = this.$router.currentRoute.path;
    } else {
      currentObj.tableData.url = this.$router.currentRoute.path + '?page=' + currentObj.$route.query.page;
    }
  },
  methods: {
    onRowClick: function onRowClick(row) {
      this.$router.push({
        path: '/workshop/vehicles/' + row.id
      });
    }
  },
  ready: function ready() {},
  beforeUpdate: function beforeUpdate() {},
  updated: function updated() {
    InputsCheckboxesRadios.initComponents();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/vehicles/Index.vue?vue&type=template&id=2bb351ac&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/vehicles/Index.vue?vue&type=template&id=2bb351ac& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "content-wrapper" }, [
    _c("div", { staticClass: "page-header page-header-light" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "breadcrumb-line breadcrumb-line-light header-elements-md-inline"
        },
        [
          _c("div", { staticClass: "d-flex" }, [
            _c("div", { staticClass: "breadcrumb" }, [
              _c(
                "a",
                { staticClass: "breadcrumb-item", attrs: { href: "/" } },
                [
                  _c("i", { staticClass: "icon-home2 mr-2" }),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass:
                        "badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"
                    },
                    [
                      _vm._v(
                        " " +
                          _vm._s(
                            _vm._f("truncate")(this.$root.tenant.name, 30)
                          ) +
                          " "
                      )
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c("span", { staticClass: "breadcrumb-item" }, [
                _vm._v("Workshop")
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "breadcrumb-item" }, [
                _vm._v("Vehicles")
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "breadcrumb-item active" }, [
                _vm._v("Create")
              ])
            ]),
            _vm._v(" "),
            _vm._m(1)
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "header-elements d-none" }, [
            _c(
              "div",
              { staticClass: "breadcrumb justify-content-center" },
              [
                _c(
                  "router-link",
                  {
                    staticClass:
                      " btn btn-danger btn-sm rounded-round font-weight-bold",
                    attrs: { to: "/workshop/vehicles/create" }
                  },
                  [
                    _c("i", { staticClass: "icon-car mr-1" }),
                    _vm._v(
                      "\n                        New Vehicle\n                    "
                    )
                  ]
                )
              ],
              1
            )
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "content border-0 p-0" },
      [
        _c("loading-animation"),
        _vm._v(" "),
        _c("div", { staticClass: "card shadow-none rounded-0 border-0" }, [
          _c(
            "div",
            { staticClass: "table-responsive" },
            [
              _c(
                "table",
                { staticClass: "table table-hover" },
                [
                  _c("thead", [
                    _c("tr", { staticClass: "table-active" }, [
                      _c(
                        "th",
                        {
                          staticClass: "font-weight-bold",
                          staticStyle: { width: "20px" },
                          attrs: { scope: "col" }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "custom-control custom-checkbox" },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.rgTableSelectAll,
                                    expression: "rgTableSelectAll"
                                  }
                                ],
                                staticClass: "custom-control-input",
                                attrs: {
                                  type: "checkbox",
                                  id: "row-checkbox-all"
                                },
                                domProps: {
                                  checked: Array.isArray(_vm.rgTableSelectAll)
                                    ? _vm._i(_vm.rgTableSelectAll, null) > -1
                                    : _vm.rgTableSelectAll
                                },
                                on: {
                                  change: function($event) {
                                    var $$a = _vm.rgTableSelectAll,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = null,
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          (_vm.rgTableSelectAll = $$a.concat([
                                            $$v
                                          ]))
                                      } else {
                                        $$i > -1 &&
                                          (_vm.rgTableSelectAll = $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1)))
                                      }
                                    } else {
                                      _vm.rgTableSelectAll = $$c
                                    }
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("label", {
                                staticClass: "custom-control-label",
                                attrs: { for: "row-checkbox-all" }
                              })
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "th",
                        {
                          staticClass: "font-weight-bold",
                          attrs: { scope: "col" }
                        },
                        [_vm._v("Customer")]
                      ),
                      _vm._v(" "),
                      _c(
                        "th",
                        {
                          staticClass: "font-weight-bold",
                          attrs: { scope: "col" }
                        },
                        [_vm._v("Registration No.")]
                      ),
                      _vm._v(" "),
                      _c(
                        "th",
                        {
                          staticClass: "font-weight-bold",
                          attrs: { scope: "col" }
                        },
                        [_vm._v("Make")]
                      ),
                      _vm._v(" "),
                      _c(
                        "th",
                        {
                          staticClass: "font-weight-bold",
                          attrs: { scope: "col" }
                        },
                        [_vm._v("Model")]
                      ),
                      _vm._v(" "),
                      _c(
                        "th",
                        {
                          staticClass: "font-weight-bold",
                          attrs: { scope: "col" }
                        },
                        [_vm._v("Model code")]
                      ),
                      _vm._v(" "),
                      _c(
                        "th",
                        {
                          staticClass: "font-weight-bold",
                          attrs: { scope: "col" }
                        },
                        [_vm._v("Model Series")]
                      ),
                      _vm._v(" "),
                      _c(
                        "th",
                        {
                          staticClass: "font-weight-bold",
                          attrs: { scope: "col" }
                        },
                        [_vm._v("VIN")]
                      ),
                      _vm._v(" "),
                      _c(
                        "th",
                        {
                          staticClass: "font-weight-bold",
                          attrs: { scope: "col" }
                        },
                        [_vm._v("Transmission")]
                      ),
                      _vm._v(" "),
                      _c(
                        "th",
                        {
                          staticClass: "font-weight-bold",
                          attrs: { scope: "col" }
                        },
                        [_vm._v("Drive type")]
                      ),
                      _vm._v(" "),
                      _c(
                        "th",
                        {
                          staticClass: "font-weight-bold",
                          attrs: { scope: "col" }
                        },
                        [_vm._v("Tyre size")]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("rg-tables-state"),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.tableData.payload.data, function(row) {
                      return _c(
                        "tr",
                        {
                          on: {
                            click: function($event) {
                              return _vm.onRowClick(row)
                            }
                          }
                        },
                        [
                          _c(
                            "td",
                            {
                              staticClass: "pr-0",
                              on: {
                                click: function($event) {
                                  $event.stopPropagation()
                                }
                              }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "custom-control custom-checkbox"
                                },
                                [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.tableData.selected,
                                        expression: "tableData.selected"
                                      }
                                    ],
                                    staticClass: "custom-control-input",
                                    attrs: {
                                      type: "checkbox",
                                      number: "",
                                      id: "row-checkbox-" + row.id,
                                      isabled: ""
                                    },
                                    domProps: {
                                      value: row.id,
                                      checked: Array.isArray(
                                        _vm.tableData.selected
                                      )
                                        ? _vm._i(
                                            _vm.tableData.selected,
                                            row.id
                                          ) > -1
                                        : _vm.tableData.selected
                                    },
                                    on: {
                                      change: function($event) {
                                        var $$a = _vm.tableData.selected,
                                          $$el = $event.target,
                                          $$c = $$el.checked ? true : false
                                        if (Array.isArray($$a)) {
                                          var $$v = row.id,
                                            $$i = _vm._i($$a, $$v)
                                          if ($$el.checked) {
                                            $$i < 0 &&
                                              _vm.$set(
                                                _vm.tableData,
                                                "selected",
                                                $$a.concat([$$v])
                                              )
                                          } else {
                                            $$i > -1 &&
                                              _vm.$set(
                                                _vm.tableData,
                                                "selected",
                                                $$a
                                                  .slice(0, $$i)
                                                  .concat($$a.slice($$i + 1))
                                              )
                                          }
                                        } else {
                                          _vm.$set(
                                            _vm.tableData,
                                            "selected",
                                            $$c
                                          )
                                        }
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("label", {
                                    staticClass: "custom-control-label",
                                    attrs: { for: "row-checkbox-" + row.id }
                                  })
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("td", { staticClass: "cursor-pointer" }, [
                            row.contact
                              ? _c("div", [_vm._v(_vm._s(row.contact.name))])
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticClass: "cursor-pointer font-weight-semibold"
                            },
                            [_vm._v(_vm._s(row.registration_number))]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticClass: "cursor-pointer",
                              attrs: { nowrap: "" }
                            },
                            [_vm._v(_vm._s(row.make.name))]
                          ),
                          _vm._v(" "),
                          _c("td", { staticClass: "cursor-pointer" }, [
                            _vm._v(_vm._s(row.model.name))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "cursor-pointer" }, [
                            _vm._v(_vm._s(row.model_code))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "cursor-pointer" }, [
                            _vm._v(_vm._s(row.model_series))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "cursor-pointer" }, [
                            _vm._v(_vm._s(row.vin))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "cursor-pointer" }, [
                            _vm._v(_vm._s(row.transmission))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "cursor-pointer" }, [
                            _vm._v(_vm._s(row.drive_type))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "cursor-pointer" }, [
                            _vm._v(_vm._s(row.tyre_size))
                          ])
                        ]
                      )
                    }),
                    0
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("rg-tables-pagination")
            ],
            1
          )
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "page-header-content header-elements-md-inline" },
      [
        _c("div", { staticClass: "page-title d-flex" }, [
          _c("h4", [
            _c("i", { staticClass: "icon-car mr-2" }),
            _vm._v(" "),
            _c("span", { staticClass: "font-weight-semibold" }, [
              _vm._v("Vehicles")
            ])
          ]),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "header-elements-toggle text-default d-md-none",
              attrs: { href: "#" }
            },
            [_c("i", { staticClass: "icon-more" })]
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "header-elements-toggle text-default d-md-none",
        attrs: { href: "#" }
      },
      [_c("i", { staticClass: "icon-more" })]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/vehicles/Index.vue":
/*!*************************************************************************************************!*\
  !*** ./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/vehicles/Index.vue ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_2bb351ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=2bb351ac& */ "./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/vehicles/Index.vue?vue&type=template&id=2bb351ac&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/vehicles/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_2bb351ac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_2bb351ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/vehicles/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/vehicles/Index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************!*\
  !*** ./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/vehicles/Index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/vehicles/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/vehicles/Index.vue?vue&type=template&id=2bb351ac&":
/*!********************************************************************************************************************************!*\
  !*** ./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/vehicles/Index.vue?vue&type=template&id=2bb351ac& ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_2bb351ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=2bb351ac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/vehicles/Index.vue?vue&type=template&id=2bb351ac&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_2bb351ac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_2bb351ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);