(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "../qbuks-vue/workshop/WorkshopGlobals.js":
/*!*****************************************!*\
  !*** .-vue/workshop/WorkshopGlobals.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    this.sourceUrls.items = '/workshop/parts-and-accessories/vue-search-select-sales';
    this.sourceUrls.contacts = '/workshop/contacts/search';
  },
  methods: {
    fetchPartsAndAccessories: function fetchPartsAndAccessories(searchText) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.txnItems[0].name = searchText === '-initiate-' ? '' : searchText;

                if (searchText) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", false);

              case 3:
                data = {
                  search_text: searchText,
                  search: [{
                    column: 'name',
                    value: searchText
                  }]
                };
                _context.prev = 4;
                _context.next = 7;
                return axios.post('/workshop/parts-and-accessories/vue-search-select-sales', data).then(function (response) {
                  response.data[0].name = searchText === '-initiate-' ? '' : searchText;
                  _this.txnItems = response.data;
                })["catch"](function (error) {
                  // handle error
                  console.log(error); //test
                })["finally"](function (response) {// always executed this is supposed
                });

              case 7:
                return _context.abrupt("return", _context.sent);

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](4);
                console.log(_context.t0); //test

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[4, 10]]);
      }))();
    }
  }
});

/***/ }),

/***/ "../qbuks-vue/workshop/components/l-limitless-bs4/jobs/inspections/Form.vue":
/*!***************************************************************************!*\
  !*** .-vue/workshop/components/l-limitless-bs4/jobs/inspections/Form.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form_vue_vue_type_template_id_4af57a2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=4af57a2e& */ "../qbuks-vue/workshop/components/l-limitless-bs4/jobs/inspections/Form.vue?vue&type=template&id=4af57a2e&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "../qbuks-vue/workshop/components/l-limitless-bs4/jobs/inspections/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _qbuks_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../qbuks/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_qbuks_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_4af57a2e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Form_vue_vue_type_template_id_4af57a2e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "qbuks-vue/workshop/components/l-limitless-bs4/jobs/inspections/Form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../qbuks-vue/workshop/components/l-limitless-bs4/jobs/inspections/Form.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** .-vue/workshop/components/l-limitless-bs4/jobs/inspections/Form.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _qbuks_node_modules_babel_loader_lib_index_js_ref_4_0_qbuks_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../qbuks/node_modules/babel-loader/lib??ref--4-0!../../../../../../qbuks/node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../qbuks-vue/workshop/components/l-limitless-bs4/jobs/inspections/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_qbuks_node_modules_babel_loader_lib_index_js_ref_4_0_qbuks_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../qbuks-vue/workshop/components/l-limitless-bs4/jobs/inspections/Form.vue?vue&type=template&id=4af57a2e&":
/*!**********************************************************************************************************!*\
  !*** .-vue/workshop/components/l-limitless-bs4/jobs/inspections/Form.vue?vue&type=template&id=4af57a2e& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _qbuks_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_qbuks_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_4af57a2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../qbuks/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../qbuks/node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=template&id=4af57a2e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../qbuks-vue/workshop/components/l-limitless-bs4/jobs/inspections/Form.vue?vue&type=template&id=4af57a2e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _qbuks_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_qbuks_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_4af57a2e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _qbuks_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_qbuks_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_4af57a2e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../qbuks-vue/workshop/components/l-limitless-bs4/jobs/inspections/Form.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!.-vue/workshop/components/l-limitless-bs4/jobs/inspections/Form.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WorkshopGlobals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../WorkshopGlobals.js */ "../qbuks-vue/workshop/WorkshopGlobals.js");


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_WorkshopGlobals_js__WEBPACK_IMPORTED_MODULE_1__["default"]],
  data: function data() {
    return {
      pageTitle: 'Job Inspection',
      pageAction: 'Update',
      urlStore: this.$route.fullPath,
      urlCreate: this.$route.fullPath,
      tab: 'job-inspection-tab1',
      attributes: {},
      job: {},
      jobInspectionCategory: {},
      jobInspectionOrder: {},
      items: []
    };
  },
  mounted: function mounted() {
    this.$root.appMenu('workshop'); //console.log(this.$route)

    this.fetchAttributes();
    this.txnFetchContacts('-initiate-');
    this.txnFetchItems('-initiate-'); //this.txnFetchTaxes()
    //this.txnFetchAccounts()
  },
  methods: {
    /*itemsClearAll() {
        let currentObj = this;
        this.txnAttributes.items = []
        //setTimeout cz the 1st row was retaining the previous values
        setTimeout(function () {
            currentObj.txnItemsCreate()
        }, 10);
        this.txnTotal()
        this.txnAttributes.taxes = {}
    },*/
    itemsCreate: function itemsCreate() {
      this.items.push({
        inspection_item_id: this.jobInspectionOrder.job_inspection_item_id,
        //item_id: '', not used - to be deleted
        item: {},
        quantity: ''
      });
    },
    inspectionItemItems: function inspectionItemItems(jobInspectionCategory, jobInspectionOrder) {
      this.tab = 'job-inspection-tab3';
      this.jobInspectionCategory = jobInspectionCategory;
      this.jobInspectionOrder = jobInspectionOrder;
      this.items = jobInspectionOrder.items;
    },
    addInspectionItemItems: function addInspectionItemItems() {
      this.tab = 'job-inspection-tab1'; //console.log(this.jobInspectionCategory.id, this.jobInspectionOrder.id)
      //console.log(this.attributes.categories[this.jobInspectionCategory.id].orders[this.jobInspectionOrder.id])
      //console.log(this.jobInspectionOrder)

      this.attributes.categories[this.jobInspectionCategory.id].orders[this.jobInspectionOrder.id].items[this.items.id] = this.items;
    },
    fetchAttributes: function fetchAttributes() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _this.$root.loadingTxn = true;
                _context.next = 4;
                return axios.get('/workshop/jobs/' + _this.$route.params.id + '/inspection').then(function (response) {
                  _this.attributes = response.data.attributes;
                  _this.job = response.data.job;
                  _this.attributes.job_id = response.data.job.id;
                })["catch"](function (error) {
                  // handle error
                  console.log(error); //test
                })["finally"](function (response) {// always executed this is supposed
                });

              case 4:
                return _context.abrupt("return", _context.sent);

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0); //test

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }))();
    },
    formSubmit: function formSubmit(e) {
      var _this2 = this;

      e.preventDefault();
      PNotify.removeAll();
      var PNotifySettings = this.$root.PNotifySettings;
      var pNotify = new PNotify(PNotifySettings);
      axios.post('/workshop/jobs/inspections', this.attributes).then(function (response) {
        _this2.axiosResponseHandle({
          response: response,
          pNotify: pNotify,
          onSuccess: function onSuccess() {},
          onError: function onError() {}
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../qbuks-vue/workshop/components/l-limitless-bs4/jobs/inspections/Form.vue?vue&type=template&id=4af57a2e&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!.-vue/workshop/components/l-limitless-bs4/jobs/inspections/Form.vue?vue&type=template&id=4af57a2e& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
      _c(
        "div",
        { staticClass: "page-header-content header-elements-md-inline" },
        [
          _c("div", { staticClass: "page-title d-flex" }, [
            _c("h4", [
              _c("i", { staticClass: "icon-file-plus" }),
              _vm._v(
                "\n                    " +
                  _vm._s(_vm.pageTitle) +
                  "\n                "
              )
            ])
          ])
        ]
      ),
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
              _c("span", { staticClass: "breadcrumb-item" }, [_vm._v("Job")]),
              _vm._v(" "),
              _c("span", { staticClass: "breadcrumb-item" }, [
                _vm._v("Inspection")
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "breadcrumb-item active" }, [
                _vm._v(_vm._s(_vm.pageAction))
              ])
            ]),
            _vm._v(" "),
            _vm._m(0)
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "header-elements" }, [
            _c(
              "div",
              { staticClass: "breadcrumb justify-content-center" },
              [
                _c(
                  "router-link",
                  {
                    staticClass:
                      " btn btn-danger btn-sm rounded-round font-weight-bold",
                    attrs: { to: "/workshop/jobs/" + _vm.$route.params.id }
                  },
                  [
                    _c("i", { staticClass: "icon-drawer3 mr-2" }),
                    _vm._v(
                      "\n                        Back to Job #" +
                        _vm._s(_vm.$route.params.id) +
                        "\n                    "
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
    _c("div", { staticClass: "content border-0 padding-0" }, [
      _c("div", { staticClass: "card shadow-none rounded-0 border-0" }, [
        _c(
          "div",
          { staticClass: "card-body p-0" },
          [
            _c("loading-animation"),
            _vm._v(" "),
            !this.$root.loading
              ? _c(
                  "form",
                  {
                    staticClass: "max-width-1040",
                    staticStyle: { "margin-bottom": "100px" },
                    attrs: { action: "", method: "post", autocomplete: "off" },
                    on: { submit: _vm.formSubmit }
                  },
                  [
                    _c(
                      "ul",
                      {
                        staticClass:
                          "nav nav-tabs nav-tabs-bottom font-weight-semibold"
                      },
                      [
                        _c("li", { staticClass: "nav-item" }, [
                          _c(
                            "a",
                            {
                              class:
                                "nav-link " +
                                [
                                  _vm.tab === "job-inspection-tab1"
                                    ? "active"
                                    : ""
                                ],
                              attrs: { href: "" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  _vm.tab = "job-inspection-tab1"
                                }
                              }
                            },
                            [_vm._v("Job Inspection")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", { staticClass: "nav-item" }, [
                          _c(
                            "a",
                            {
                              class:
                                "nav-link " +
                                [
                                  _vm.tab === "job-inspection-tab2"
                                    ? "active"
                                    : ""
                                ],
                              attrs: { href: "" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  _vm.tab = "job-inspection-tab2"
                                }
                              }
                            },
                            [_vm._v("Job Details")]
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "tab-content" }, [
                      _c(
                        "div",
                        {
                          class:
                            "tab-pane " +
                            [_vm.tab === "job-inspection-tab1" ? "active" : ""],
                          attrs: { id: "job-inspection-tab1" }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "card border-0 shadow-0 p-0" },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "card-header border-0 d-flex justify-content-between mb-3"
                                },
                                [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "font-size-lg text-uppercase font-weight-semibold"
                                    },
                                    [
                                      _vm._v("Job "),
                                      _c("a", { attrs: { href: "#" } }, [
                                        _vm._v("#" + _vm._s(_vm.job.id))
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass: "font-size-sm text-uppercase"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                        Date: "
                                      ),
                                      _c(
                                        "span",
                                        { staticClass: "font-weight-semibold" },
                                        [_vm._v(_vm._s(_vm.job.checkin_date))]
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "card-body p-0" }, [
                                _c(
                                  "table",
                                  {
                                    staticClass:
                                      "table table-bordered border-left-0 border-right-0 border-bottom-0"
                                  },
                                  _vm._l(_vm.attributes.categories, function(
                                    category
                                  ) {
                                    return category.orders
                                      ? _c(
                                          "tbody",
                                          [
                                            _c(
                                              "tr",
                                              {
                                                staticClass:
                                                  "table-border-double table-active"
                                              },
                                              [
                                                _c(
                                                  "th",
                                                  { attrs: { colspan: "4" } },
                                                  [
                                                    _vm._v(
                                                      _vm._s(category.name)
                                                    )
                                                  ]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _vm._l(category.orders, function(
                                              order
                                            ) {
                                              return _c("tr", [
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      order.inspection_item.name
                                                    )
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _c(
                                                    "div",
                                                    [
                                                      _vm._l(
                                                        order.inspection_item
                                                          .options_array,
                                                        function(option, b) {
                                                          return _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "custom-control custom-checkbox custom-control-inline"
                                                            },
                                                            [
                                                              _c("input", {
                                                                directives: [
                                                                  {
                                                                    name:
                                                                      "model",
                                                                    rawName:
                                                                      "v-model",
                                                                    value:
                                                                      order
                                                                        .inspection_item
                                                                        .inspection_options,
                                                                    expression:
                                                                      "order.inspection_item.inspection_options"
                                                                  }
                                                                ],
                                                                staticClass:
                                                                  "custom-control-input",
                                                                attrs: {
                                                                  type:
                                                                    "checkbox",
                                                                  id:
                                                                    "rg-cb-" +
                                                                    category.id +
                                                                    "-" +
                                                                    order
                                                                      .inspection_item
                                                                      .id +
                                                                    "-" +
                                                                    b
                                                                },
                                                                domProps: {
                                                                  value: option,
                                                                  checked: Array.isArray(
                                                                    order
                                                                      .inspection_item
                                                                      .inspection_options
                                                                  )
                                                                    ? _vm._i(
                                                                        order
                                                                          .inspection_item
                                                                          .inspection_options,
                                                                        option
                                                                      ) > -1
                                                                    : order
                                                                        .inspection_item
                                                                        .inspection_options
                                                                },
                                                                on: {
                                                                  change: function(
                                                                    $event
                                                                  ) {
                                                                    var $$a =
                                                                        order
                                                                          .inspection_item
                                                                          .inspection_options,
                                                                      $$el =
                                                                        $event.target,
                                                                      $$c = $$el.checked
                                                                        ? true
                                                                        : false
                                                                    if (
                                                                      Array.isArray(
                                                                        $$a
                                                                      )
                                                                    ) {
                                                                      var $$v = option,
                                                                        $$i = _vm._i(
                                                                          $$a,
                                                                          $$v
                                                                        )
                                                                      if (
                                                                        $$el.checked
                                                                      ) {
                                                                        $$i <
                                                                          0 &&
                                                                          _vm.$set(
                                                                            order.inspection_item,
                                                                            "inspection_options",
                                                                            $$a.concat(
                                                                              [
                                                                                $$v
                                                                              ]
                                                                            )
                                                                          )
                                                                      } else {
                                                                        $$i >
                                                                          -1 &&
                                                                          _vm.$set(
                                                                            order.inspection_item,
                                                                            "inspection_options",
                                                                            $$a
                                                                              .slice(
                                                                                0,
                                                                                $$i
                                                                              )
                                                                              .concat(
                                                                                $$a.slice(
                                                                                  $$i +
                                                                                    1
                                                                                )
                                                                              )
                                                                          )
                                                                      }
                                                                    } else {
                                                                      _vm.$set(
                                                                        order.inspection_item,
                                                                        "inspection_options",
                                                                        $$c
                                                                      )
                                                                    }
                                                                  }
                                                                }
                                                              }),
                                                              _vm._v(" "),
                                                              _c(
                                                                "label",
                                                                {
                                                                  staticClass:
                                                                    "custom-control-label",
                                                                  attrs: {
                                                                    for:
                                                                      "rg-cb-" +
                                                                      category.id +
                                                                      "-" +
                                                                      order
                                                                        .inspection_item
                                                                        .id +
                                                                      "-" +
                                                                      b
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      option
                                                                    )
                                                                  )
                                                                ]
                                                              )
                                                            ]
                                                          )
                                                        }
                                                      ),
                                                      _vm._v(" "),
                                                      order.comment
                                                        ? _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "small mt-2"
                                                            },
                                                            [
                                                              _vm._v(
                                                                "* " +
                                                                  _vm._s(
                                                                    order.comment
                                                                  )
                                                              )
                                                            ]
                                                          )
                                                        : _vm._e()
                                                    ],
                                                    2
                                                  ),
                                                  _vm._v(" "),
                                                  order.items
                                                    ? _c(
                                                        "div",
                                                        { staticClass: "mt-2" },
                                                        _vm._l(
                                                          order.items,
                                                          function(
                                                            item,
                                                            index
                                                          ) {
                                                            return _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "font-weight-bold"
                                                              },
                                                              [
                                                                _c(
                                                                  "button",
                                                                  {
                                                                    staticClass:
                                                                      "btn bg-danger bg-transparent text-danger btn-icon p-1",
                                                                    attrs: {
                                                                      type:
                                                                        "button",
                                                                      title:
                                                                        "Delete row"
                                                                    },
                                                                    on: {
                                                                      click: function(
                                                                        $event
                                                                      ) {
                                                                        return _vm.$delete(
                                                                          order.items,
                                                                          index
                                                                        )
                                                                      }
                                                                    }
                                                                  },
                                                                  [
                                                                    _c("i", {
                                                                      staticClass:
                                                                        "icon-cross3"
                                                                    })
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "span",
                                                                  {
                                                                    staticClass:
                                                                      "badge badge-success badge-pill font-weight-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      " " +
                                                                        _vm._s(
                                                                          item.quantity
                                                                        ) +
                                                                        " "
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(
                                                                  "\n                                                            " +
                                                                    _vm._s(
                                                                      item.item
                                                                        .name
                                                                    ) +
                                                                    "\n                                                        "
                                                                )
                                                              ]
                                                            )
                                                          }
                                                        ),
                                                        0
                                                      )
                                                    : _vm._e()
                                                ]),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  {
                                                    staticClass: "p-0",
                                                    attrs: { title: "Comment" }
                                                  },
                                                  [
                                                    _c("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            order
                                                              .inspection_item
                                                              .inspection_comment,
                                                          expression:
                                                            "order.inspection_item.inspection_comment"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "form-control border-0",
                                                      attrs: {
                                                        type: "text",
                                                        placeholder: "Comment"
                                                      },
                                                      domProps: {
                                                        value:
                                                          order.inspection_item
                                                            .inspection_comment
                                                      },
                                                      on: {
                                                        input: function(
                                                          $event
                                                        ) {
                                                          if (
                                                            $event.target
                                                              .composing
                                                          ) {
                                                            return
                                                          }
                                                          _vm.$set(
                                                            order.inspection_item,
                                                            "inspection_comment",
                                                            $event.target.value
                                                          )
                                                        }
                                                      }
                                                    })
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  { staticClass: "p-0" },
                                                  [
                                                    _c(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "btn btn-link btn-sm",
                                                        attrs: {
                                                          type: "button"
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.inspectionItemItems(
                                                              category,
                                                              order
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "icon-plus2 mr-2"
                                                        }),
                                                        _vm._v(
                                                          " Service/Part/Accessory\n                                                    "
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                )
                                              ])
                                            })
                                          ],
                                          2
                                        )
                                      : _vm._e()
                                  }),
                                  0
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _vm._m(1)
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          class:
                            "tab-pane " +
                            [_vm.tab === "job-inspection-tab2" ? "active" : ""],
                          attrs: { id: "job-inspection-tab2" }
                        },
                        [
                          _c("div", { staticClass: "card p-0" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "card-header bg-light d-flex justify-content-between"
                              },
                              [
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "font-size-sm text-uppercase font-weight-semibold"
                                  },
                                  [
                                    _vm._v("Job "),
                                    _c("a", { attrs: { href: "#" } }, [
                                      _vm._v("#" + _vm._s(_vm.job.id))
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    staticClass: "font-size-sm text-uppercase"
                                  },
                                  [
                                    _vm._v(
                                      "\n                                        Date: "
                                    ),
                                    _c(
                                      "span",
                                      { staticClass: "font-weight-semibold" },
                                      [_vm._v(_vm._s(_vm.job.checkin_date))]
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "card-body" }, [
                              _vm.job.vehicle
                                ? _c("div", { staticClass: "card-title" }, [
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "h4 font-weight-semibold pr-3"
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.job.vehicle.registration_number
                                          )
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _vm.job.contact
                                      ? _c("span", [
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "badge badge-secondary badge-pill font-weight-semibold"
                                            },
                                            [_vm._v(" Customer ")]
                                          ),
                                          _vm._v(" "),
                                          _c("span", { staticClass: "h6" }, [
                                            _vm._v(
                                              _vm._s(
                                                _vm.job.contact.display_name
                                              )
                                            )
                                          ])
                                        ])
                                      : _vm._e()
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.job.service_defaults &&
                              _vm.job.service_defaults.length > 0
                                ? _c(
                                    "div",
                                    {
                                      staticClass:
                                        "card-text border-left-3 border-primary pl-2 pt-2 pb-2"
                                    },
                                    [
                                      _vm._m(2),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "mt-2",
                                          staticStyle: { "white-space": "pre" }
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.job.service_defaults.join(
                                                "\n"
                                              )
                                            )
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: _vm.job.description,
                                      expression: "job.description"
                                    }
                                  ],
                                  staticClass:
                                    "card-text border-left-3 border-primary pl-2 pt-2 pb-2"
                                },
                                [
                                  _vm._m(3),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "mt-2",
                                      staticStyle: { "white-space": "pre" }
                                    },
                                    [_vm._v(_vm._s(_vm.job.description))]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "card-text border-left-3 border-success pl-2 pt-2 pb-2 mt-1"
                                },
                                [
                                  _vm._m(4),
                                  _vm._v(" "),
                                  _vm.job.user
                                    ? _c("p", [
                                        _c("small", [_vm._v("Issued by:")]),
                                        _vm._v(" " + _vm._s(_vm.job.user.name))
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c("p", [
                                    _c("small", [_vm._v("Issued on:")]),
                                    _vm._v(" " + _vm._s(_vm.job.checkin_date))
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "card-text border-left-3 border-warning pl-2 pt-2 pb-2 mt-1"
                                },
                                [
                                  _vm._m(5),
                                  _vm._v(" "),
                                  _c(
                                    "ol",
                                    _vm._l(_vm.job.technicians, function(
                                      technician
                                    ) {
                                      return _c("li", [
                                        _c("span", { staticClass: "h6" }, [
                                          _vm._v(
                                            _vm._s(
                                              technician.contact.display_name
                                            )
                                          )
                                        ])
                                      ])
                                    }),
                                    0
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "card-footer d-flex justify-content-between"
                              },
                              [
                                _vm.job.supervisor
                                  ? _c("span", { staticClass: "text-muted" }, [
                                      _vm._v(
                                        "Supervisor " +
                                          _vm._s(
                                            _vm.job.supervisor.display_name
                                          )
                                      )
                                    ])
                                  : _vm._e()
                              ]
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          class:
                            "tab-pane " +
                            [_vm.tab === "job-inspection-tab3" ? "active" : ""],
                          attrs: { id: "job-inspection-tab3" }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "card border-0 shadow-0 p-0" },
                            [
                              _c("div", { staticClass: "card-body p-0" }, [
                                _c("div", [
                                  _c("span", { staticClass: "h5" }, [
                                    _vm._v(
                                      _vm._s(_vm.jobInspectionCategory.name)
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _vm.jobInspectionOrder.inspection_item
                                    ? _c("span", { staticClass: "h6 pl-3" }, [
                                        _vm._v(
                                          _vm._s(
                                            _vm.jobInspectionOrder
                                              .inspection_item.name
                                          )
                                        )
                                      ])
                                    : _vm._e()
                                ]),
                                _vm._v(" "),
                                _c(
                                  "table",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: _vm.items.length > 0,
                                        expression: "items.length > 0"
                                      }
                                    ],
                                    staticClass:
                                      "table table-bordered border-left-0 border-right-0 border-bottom-0 mt-2"
                                  },
                                  [
                                    _vm._m(6),
                                    _vm._v(" "),
                                    _c(
                                      "tbody",
                                      _vm._l(_vm.items, function(item, index) {
                                        return _c("tr", [
                                          _c(
                                            "td",
                                            {
                                              staticClass:
                                                "td_item_selector p-0 rg_select2_border_none"
                                            },
                                            [
                                              _c("model-list-select", {
                                                staticClass: "border-0",
                                                attrs: {
                                                  list: _vm.txnItems,
                                                  "option-value": "id",
                                                  "option-text": "name",
                                                  "option-item-row": index,
                                                  "option-tag": "",
                                                  placeholder: "Select item"
                                                },
                                                on: {
                                                  searchchange:
                                                    _vm.txnFetchItems
                                                },
                                                model: {
                                                  value: item.item,
                                                  callback: function($$v) {
                                                    _vm.$set(item, "item", $$v)
                                                  },
                                                  expression: "item.item"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c("td", { staticClass: "p-0" }, [
                                            _c(
                                              "div",
                                              { staticClass: "input-group" },
                                              [
                                                _c("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value: item.quantity,
                                                      expression:
                                                        "item.quantity"
                                                    }
                                                  ],
                                                  staticClass:
                                                    "form-control border-0 text-right",
                                                  attrs: {
                                                    type: "text",
                                                    "data-row": index,
                                                    placeholder: "0"
                                                  },
                                                  domProps: {
                                                    value: item.quantity
                                                  },
                                                  on: {
                                                    input: function($event) {
                                                      if (
                                                        $event.target.composing
                                                      ) {
                                                        return
                                                      }
                                                      _vm.$set(
                                                        item,
                                                        "quantity",
                                                        $event.target.value
                                                      )
                                                    }
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "input-group-append border-0 rounded-0"
                                                  },
                                                  [
                                                    _c(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "btn bg-danger bg-transparent text-danger btn-icon",
                                                        attrs: {
                                                          type: "button",
                                                          title: "Delete row"
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.$delete(
                                                              _vm.items,
                                                              index
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "icon-cross3"
                                                        })
                                                      ]
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          ])
                                        ])
                                      }),
                                      0
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "mt-2" }, [
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-outline bg-primary border-left-3 border-primary text-primary-800 font-weight-bold border-top-0 border-right-0 border-bottom-0 rounded-0",
                                      attrs: { type: "button" },
                                      on: { click: _vm.itemsCreate }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "icon-plus2 mr-2"
                                      }),
                                      _vm._v(
                                        " Add another line\n                                        "
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "mt-2" }, [
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-success font-weight-bold",
                                      attrs: { type: "button" },
                                      on: { click: _vm.addInspectionItemItems }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "icon-square-left mr-1"
                                      }),
                                      _vm._v(
                                        " Add items & go back to Job Inspection\n                                        "
                                      )
                                    ]
                                  )
                                ])
                              ])
                            ]
                          )
                        ]
                      )
                    ])
                  ]
                )
              : _vm._e()
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-left p-0" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-danger font-weight-bold",
          attrs: { type: "submit" }
        },
        [
          _c("i", { staticClass: "icon-file-plus2 mr-1" }),
          _vm._v(" Update Job Inspection\n                                ")
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "form-group text-left text-muted content-divider pl-3 mb-0"
      },
      [
        _c(
          "span",
          {
            staticClass:
              "badge badge-flat border-grey-400 text-grey-300 font-weight-semibold"
          },
          [_vm._v(" Job Services ")]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "form-group text-left text-muted content-divider pl-3 mb-0"
      },
      [
        _c(
          "span",
          {
            staticClass:
              "badge badge-flat border-grey-400 text-grey-300 font-weight-semibold"
          },
          [_vm._v(" Job description ")]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "form-group text-left text-muted content-divider pl-3 mb-2"
      },
      [
        _c(
          "span",
          {
            staticClass:
              "badge badge-flat border-grey-400 text-grey-300 font-weight-semibold"
          },
          [_vm._v(" Job Inspection Order ")]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "form-group text-left text-muted content-divider pl-3 mb-2"
      },
      [
        _c(
          "span",
          {
            staticClass:
              "badge badge-flat border-grey-400 text-grey-300 font-weight-bold"
          },
          [_vm._v(" Job Technicians ")]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "thead-default bg-light" }, [
      _c("tr", [
        _c("th", { staticClass: "font-weight-bold", attrs: { width: "80%" } }, [
          _vm._v("Service, Part, or Accessories")
        ]),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "text-right font-weight-bold",
            attrs: { width: "20%" }
          },
          [_vm._v("Quantity")]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);