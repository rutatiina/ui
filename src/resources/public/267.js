(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[267],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/suppliers/expenses/SideBarLeftTransactions.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/suppliers/expenses/SideBarLeftTransactions.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      PerfectScrollbar: null
    };
  },
  watch: {
    '$route.query.page': function $routeQueryPage(page) {
      this.tableData.url = '/workshop/suppliers/expenses' + '?page=' + page;
    }
  },
  mounted: function mounted() {
    this.tableData.initiate = true;
    var rgTableDataUrl = '/workshop/suppliers/expenses';
    this.tableData.url = rgTableDataUrl; //let currentObj = this;

    if (this.$route.query.page === undefined) {
      this.tableData.url = rgTableDataUrl;
    } else {
      this.tableData.url = rgTableDataUrl + '?page=' + this.$route.query.page;
    }

    this.tableData.recordsPerPage = Math.floor((window.innerHeight - 70 - 70 - 70) / 70);
    this.tableData.paginationLength = 1; //make the secondary sidebar scrollable

    this.PerfectScrollbar = new PerfectScrollbar('#rg-sidebar-secondary-fixed-content-scroll'); //console.log(this.tableData)
  },
  methods: {
    onRowClick: function onRowClick(txn) {
      //console.log(this.$route)
      var path = '/workshop/suppliers/expenses/' + txn.id;

      if (this.$route.path === path) {// do nothing this is a duplicate
      } else {
        this.$router.push({
          path: path,
          query: {
            page: this.$route.query.page
          }
        });
      }
    }
  },
  updated: function updated() {
    //update scrollable are on data change
    this.PerfectScrollbar.update();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/suppliers/expenses/SideBarLeftTransactions.vue?vue&type=template&id=d8d3ca28&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/suppliers/expenses/SideBarLeftTransactions.vue?vue&type=template&id=d8d3ca28& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
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
      staticClass:
        "sidebar sidebar-light sidebar-secondary sidebar-expand-md d-print-none",
      staticStyle: { width: "350px" }
    },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "sidebar-content " }, [
        _c(
          "div",
          {
            staticClass: "position-fixed h-100",
            staticStyle: {
              width: "350px",
              overflow: "hidden",
              "padding-bottom": "80px !important"
            },
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
                        _vm._v(
                          "\n                                Expenses\n                                "
                        ),
                        _c(
                          "span",
                          {
                            staticClass:
                              "badge bg-primary badge-pill ml-auto float-right"
                          },
                          [_vm._v(_vm._s(_vm.tableData.payload.total))]
                        )
                      ])
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "card shadow-none rounded-0 border-0" },
                [
                  !this.$root.loading && _vm.tableData.payload.data.length === 0
                    ? _c("div", { staticClass: "card-body" }, [_vm._m(1)])
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "table-responsive" },
                    [
                      _c("table", { staticClass: "table table-hover" }, [
                        _c(
                          "tbody",
                          _vm._l(_vm.tableData.payload.data, function(txn) {
                            return _c(
                              "tr",
                              {
                                class: [
                                  txn.id == _vm.$route.params.id
                                    ? "table-warning border-left-3 border-warning"
                                    : ""
                                ],
                                on: {
                                  click: function($event) {
                                    return _vm.onRowClick(txn)
                                  }
                                }
                              },
                              [
                                _c(
                                  "td",
                                  { staticClass: "col-md-6 cursor-pointer" },
                                  [
                                    _c("h6", { staticClass: "m-0" }, [
                                      _c(
                                        "div",
                                        { staticClass: "rg-nowrap-ellipsis" },
                                        [_vm._v(_vm._s(txn.contact_name))]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "small",
                                        {
                                          staticClass:
                                            "display-block text-muted"
                                        },
                                        [
                                          _vm._v(
                                            "\n                                                " +
                                              _vm._s(txn.date) +
                                              " -\n                                                "
                                          ),
                                          _c(
                                            "span",
                                            { staticClass: "text-primary" },
                                            [_vm._v(_vm._s(txn.number))]
                                          )
                                        ]
                                      )
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  { staticClass: "col-md-6 cursor-pointer" },
                                  [
                                    _c("div", { staticClass: "text-right" }, [
                                      _c(
                                        "div",
                                        { staticClass: "rg-nowrap-ellipsis" },
                                        [
                                          _vm._v(
                                            "\n                                                " +
                                              _vm._s(
                                                _vm.rgNumberFormat(txn.total, 2)
                                              ) +
                                              " "
                                          ),
                                          _c("small", [
                                            _vm._v(_vm._s(txn.base_currency))
                                          ])
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "small",
                                        {
                                          class:
                                            "display-block text-size-small text-uppercase font-weight-bold " +
                                            [
                                              txn.status === "Draft"
                                                ? "text-danger"
                                                : "text-success"
                                            ]
                                        },
                                        [
                                          _vm._v(
                                            "\n                                                " +
                                              _vm._s(txn.status) +
                                              "\n                                            "
                                          )
                                        ]
                                      )
                                    ])
                                  ]
                                )
                              ]
                            )
                          }),
                          0
                        )
                      ]),
                      _vm._v(" "),
                      _c("rg-tables-pagination")
                    ],
                    1
                  )
                ]
              )
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", [
      _c("i", { staticClass: "icon-files-empty mr-2" }),
      _vm._v(
        "\n                            No records found\n                        "
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/suppliers/expenses/SideBarLeftTransactions.vue":
/*!*****************************************************************************************************************************!*\
  !*** ./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/suppliers/expenses/SideBarLeftTransactions.vue ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SideBarLeftTransactions_vue_vue_type_template_id_d8d3ca28___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SideBarLeftTransactions.vue?vue&type=template&id=d8d3ca28& */ "./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/suppliers/expenses/SideBarLeftTransactions.vue?vue&type=template&id=d8d3ca28&");
/* harmony import */ var _SideBarLeftTransactions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideBarLeftTransactions.vue?vue&type=script&lang=js& */ "./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/suppliers/expenses/SideBarLeftTransactions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SideBarLeftTransactions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SideBarLeftTransactions_vue_vue_type_template_id_d8d3ca28___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SideBarLeftTransactions_vue_vue_type_template_id_d8d3ca28___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/suppliers/expenses/SideBarLeftTransactions.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/suppliers/expenses/SideBarLeftTransactions.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************!*\
  !*** ./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/suppliers/expenses/SideBarLeftTransactions.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBarLeftTransactions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SideBarLeftTransactions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/suppliers/expenses/SideBarLeftTransactions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBarLeftTransactions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/suppliers/expenses/SideBarLeftTransactions.vue?vue&type=template&id=d8d3ca28&":
/*!************************************************************************************************************************************************************!*\
  !*** ./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/suppliers/expenses/SideBarLeftTransactions.vue?vue&type=template&id=d8d3ca28& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBarLeftTransactions_vue_vue_type_template_id_d8d3ca28___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SideBarLeftTransactions.vue?vue&type=template&id=d8d3ca28& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/suppliers/expenses/SideBarLeftTransactions.vue?vue&type=template&id=d8d3ca28&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBarLeftTransactions_vue_vue_type_template_id_d8d3ca28___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBarLeftTransactions_vue_vue_type_template_id_d8d3ca28___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);