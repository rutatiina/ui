(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

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

/***/ "../qbuks-vue/workshop/components/l-limitless-bs4/jobs/items/Form.vue":
/*!*********************************************************************!*\
  !*** .-vue/workshop/components/l-limitless-bs4/jobs/items/Form.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form_vue_vue_type_template_id_1c316e8d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=1c316e8d& */ "../qbuks-vue/workshop/components/l-limitless-bs4/jobs/items/Form.vue?vue&type=template&id=1c316e8d&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "../qbuks-vue/workshop/components/l-limitless-bs4/jobs/items/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _qbuks_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../qbuks/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_qbuks_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_1c316e8d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Form_vue_vue_type_template_id_1c316e8d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "qbuks-vue/workshop/components/l-limitless-bs4/jobs/items/Form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../qbuks-vue/workshop/components/l-limitless-bs4/jobs/items/Form.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** .-vue/workshop/components/l-limitless-bs4/jobs/items/Form.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _qbuks_node_modules_babel_loader_lib_index_js_ref_4_0_qbuks_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../qbuks/node_modules/babel-loader/lib??ref--4-0!../../../../../../qbuks/node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../qbuks-vue/workshop/components/l-limitless-bs4/jobs/items/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_qbuks_node_modules_babel_loader_lib_index_js_ref_4_0_qbuks_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../qbuks-vue/workshop/components/l-limitless-bs4/jobs/items/Form.vue?vue&type=template&id=1c316e8d&":
/*!****************************************************************************************************!*\
  !*** .-vue/workshop/components/l-limitless-bs4/jobs/items/Form.vue?vue&type=template&id=1c316e8d& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _qbuks_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_qbuks_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_1c316e8d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../qbuks/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../qbuks/node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=template&id=1c316e8d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../qbuks-vue/workshop/components/l-limitless-bs4/jobs/items/Form.vue?vue&type=template&id=1c316e8d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _qbuks_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_qbuks_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_1c316e8d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _qbuks_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_qbuks_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_1c316e8d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../qbuks-vue/workshop/components/l-limitless-bs4/jobs/items/Form.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!.-vue/workshop/components/l-limitless-bs4/jobs/items/Form.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_WorkshopGlobals_js__WEBPACK_IMPORTED_MODULE_1__["default"]],
  data: function data() {
    return {
      pageTitle: 'Job Inspection / Items',
      pageAction: 'Update',
      urlStore: this.$route.fullPath,
      urlCreate: this.$route.fullPath,
      job: {}
    };
  },
  mounted: function mounted() {
    //console.log(this.$route)
    this.fetchJobItems();
    this.txnFetchContacts('-initiate-');
    this.fetchPartsAndAccessories('-initiate-');
    this.txnFetchTaxes(); //this.txnFetchAccounts()
  },
  methods: {
    fetchJobItems: function fetchJobItems() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios.get(_this.urlCreate).then(function (response) {
                  _this.pageTitle = response.data.pageTitle;
                  _this.pageAction = response.data.pageAction;
                  _this.txnAttributes.items = response.data.job.items;
                  _this.txnUrlStore = response.data.urlStore;
                  _this.job = response.data.job;

                  _this.txnTotal();
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
      }))();
    },
    formSubmit: function formSubmit(e) {
      e.preventDefault();
      var currentObj = this;
      PNotify.removeAll();
      var PNotifySettings = {
        title: false,
        //'Processing',
        text: 'Please wait as we do our thing',
        addclass: 'bg-warning-400 border-warning-400',
        hide: false,
        buttons: {
          closer: false,
          sticker: false
        }
      };
      var notice = new PNotify(PNotifySettings);
      axios.post(currentObj.urlStore, this.txnAttributes).then(function (response) {
        //PNotify.removeAll();
        PNotifySettings.text = response.data.messages.join("\n");

        if (response.data.status === true) {
          PNotifySettings.title = 'Success';
          PNotifySettings.type = 'success';
          PNotifySettings.addclass = 'bg-success-400 border-success-400';
          currentObj.attributes = {
            name: '',
            code: '',
            country: ''
          };
        } else {
          PNotifySettings.title = '! Error';
          PNotifySettings.type = 'error';
          PNotifySettings.addclass = 'bg-warning-400 border-warning-400';
        } //let notice = new PNotify(PNotifySettings);


        notice.update(PNotifySettings);
        notice.get().click(function () {
          notice.remove();
        }); //currentObj.response = response.data;
      })["catch"](function (error) {
        currentObj.response = error;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../qbuks-vue/workshop/components/l-limitless-bs4/jobs/items/Form.vue?vue&type=template&id=1c316e8d&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!.-vue/workshop/components/l-limitless-bs4/jobs/items/Form.vue?vue&type=template&id=1c316e8d& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
              _c("span", { staticClass: "breadcrumb-item" }, [_vm._v("Items")]),
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
                            { staticClass: "font-size-sm text-uppercase" },
                            [
                              _vm._v(
                                "\n                                Date: "
                              ),
                              _c(
                                "span",
                                { staticClass: "font-weight-semibold" },
                                [_vm._v(_vm._s(_vm.job.date))]
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
                                { staticClass: "h4 font-weight-semibold pr-3" },
                                [
                                  _vm._v(
                                    _vm._s(_vm.job.vehicle.registration_number)
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
                                        _vm._s(_vm.job.contact.display_name)
                                      )
                                    ])
                                  ])
                                : _vm._e()
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "card-text border-left-3 border-warning pl-2 pt-2 pb-2"
                          },
                          [
                            _vm._m(1),
                            _vm._v(" "),
                            _c(
                              "p",
                              {
                                staticClass: "mt-2",
                                staticStyle: { "white-space": "pre" }
                              },
                              [_vm._v(_vm._s(_vm.job.description))]
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
                                    _vm._s(_vm.job.supervisor.display_name)
                                )
                              ])
                            : _vm._e()
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "card border-0 shadow-0 p-0" }, [
                      _c("div", { staticClass: "card-body p-0" }, [
                        _c(
                          "table",
                          {
                            staticClass:
                              "table table-bordered border-left-0 border-right-0 border-bottom-0"
                          },
                          [
                            _c(
                              "thead",
                              { staticClass: "thead-default bg-light" },
                              [
                                _c("tr", [
                                  _c(
                                    "th",
                                    {
                                      staticClass: "font-weight-bold",
                                      attrs: { width: "50%" }
                                    },
                                    [_vm._v("Service, Part, or Accessories")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "th",
                                    {
                                      staticClass:
                                        "text-right font-weight-bold",
                                      attrs: { width: "8%" }
                                    },
                                    [_vm._v("Quantity")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "th",
                                    {
                                      staticClass:
                                        "text-right font-weight-bold",
                                      attrs: { width: "11%" }
                                    },
                                    [_vm._v("Rate")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "th",
                                    {
                                      staticClass: "font-weight-bold",
                                      attrs: { width: "13%" }
                                    },
                                    [_vm._v("Tax")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "th",
                                    {
                                      staticClass:
                                        "text-right font-weight-bold p-0",
                                      attrs: { width: "18%" }
                                    },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "input-group" },
                                        [
                                          _c("input", {
                                            staticClass:
                                              "rg-txn-item-row-total form-control border-0 text-right font-weight-bold bg-transparent",
                                            attrs: {
                                              type: "text",
                                              value: "Total",
                                              readonly: "",
                                              placeholder: "0.00"
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
                                                    title: "Clear all items"
                                                  },
                                                  on: {
                                                    click: _vm.txnItemsClearAll
                                                  }
                                                },
                                                [
                                                  _c("i", {
                                                    staticClass: "icon-cross3"
                                                  })
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "tbody",
                              { attrs: { id: "items_field_rows" } },
                              _vm._l(_vm.txnAttributes.items, function(
                                item,
                                index
                              ) {
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
                                          input: _vm.txnItemsSelect,
                                          searchchange:
                                            _vm.fetchPartsAndAccessories
                                        },
                                        model: {
                                          value: item.selectedItem,
                                          callback: function($$v) {
                                            _vm.$set(item, "selectedItem", $$v)
                                          },
                                          expression: "item.selectedItem"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value: item.type_id || item.name,
                                              expression:
                                                "item.type_id || item.name"
                                            }
                                          ],
                                          staticClass: "ml-2 mr-2"
                                        },
                                        [
                                          _c("textarea", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: item.description,
                                                expression: "item.description"
                                              }
                                            ],
                                            staticClass: "form-control mb-2",
                                            staticStyle: {
                                              "min-height": "30px",
                                              overflow: "hidden"
                                            },
                                            attrs: {
                                              "data-value": item.description,
                                              "data-row": index,
                                              rows: "1",
                                              onkeyup: "rgAutoGrow(this);",
                                              placeholder: "Description"
                                            },
                                            domProps: {
                                              value: item.description
                                            },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  item,
                                                  "description",
                                                  $event.target.value
                                                )
                                              }
                                            }
                                          })
                                        ]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("td", { staticClass: "p-0" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: item.quantity,
                                          expression: "item.quantity"
                                        }
                                      ],
                                      staticClass:
                                        "item_row_quantity form-control border-0 text-right",
                                      attrs: {
                                        type: "text",
                                        "data-row": index,
                                        placeholder: "1"
                                      },
                                      domProps: { value: item.quantity },
                                      on: {
                                        keyup: _vm.txnTotal,
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            item,
                                            "quantity",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ]),
                                  _vm._v(" "),
                                  _c("td", { staticClass: "p-0" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: item.rate,
                                          expression: "item.rate"
                                        }
                                      ],
                                      staticClass:
                                        "item_row_rate form-control m-input border-0 text-right",
                                      attrs: {
                                        type: "text",
                                        "data-row": index,
                                        placeholder: "0.00"
                                      },
                                      domProps: { value: item.rate },
                                      on: {
                                        keyup: _vm.txnTotal,
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            item,
                                            "rate",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    { staticClass: "p-0" },
                                    [
                                      _c("multi-list-select", {
                                        staticClass: "border-0",
                                        attrs: {
                                          list: _vm.txnTaxes,
                                          "option-value": "id",
                                          "option-text": "display_name",
                                          "option-item-row": index,
                                          "selected-items": item.selectedTaxes,
                                          placeholder: "select tax",
                                          "show-count-of-selected-options": ""
                                        },
                                        on: { select: _vm.txnItemTaxes }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("td", { staticClass: "p-0" }, [
                                    _c(
                                      "div",
                                      { staticStyle: { position: "relative" } },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "input-group" },
                                          [
                                            _c("input", {
                                              staticClass:
                                                "rg-txn-item-row-total form-control border-0 text-right bg-transparent",
                                              attrs: {
                                                type: "text",
                                                readonly: "",
                                                placeholder: "0.00"
                                              },
                                              domProps: {
                                                value: _vm.rgNumberFormat(
                                                  item.displayTotal,
                                                  2
                                                )
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
                                                      click: function($event) {
                                                        return _vm.txnItemsRemove(
                                                          index
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c("i", {
                                                      staticClass: "icon-cross3"
                                                    })
                                                  ]
                                                )
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
                            ),
                            _vm._v(" "),
                            _c("tbody", [
                              _c("tr", [
                                _c("td", { staticClass: "border-0" }, [
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-link pt-0 pb-0 font-weight-bold",
                                      attrs: { type: "button" },
                                      on: { click: _vm.txnItemsCreate }
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
                                _c(
                                  "td",
                                  {
                                    staticClass:
                                      "pl-15 border-left-0 border-top-0 border-right-0 font-weight-bold",
                                    attrs: { colspan: "2" }
                                  },
                                  [_vm._v("Sub Total")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  {
                                    staticClass:
                                      "border-left-0 border-top-0 border-right-0 text-right rg-txn-total-pr",
                                    attrs: { id: "txn_subtotal", colspan: "2" }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                        " +
                                        _vm._s(
                                          _vm.rgNumberFormat(
                                            _vm.txnAttributes.taxable_amount,
                                            2
                                          )
                                        ) +
                                        "\n                                    "
                                    )
                                  ]
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "tbody",
                              { staticClass: "border-0" },
                              _vm._l(_vm.txnAttributes.taxes, function(tax) {
                                return _c("tr", [
                                  _c("td", { staticClass: "p-15 border-0" }),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    {
                                      staticClass:
                                        "p-15 border-left-0 border-top-0 border-right-0 font-weight-bold",
                                      attrs: { colspan: "2" }
                                    },
                                    [_vm._v(_vm._s(tax.name))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    {
                                      staticClass:
                                        "border-left-0 border-top-0 border-right-0 text-right pr-0",
                                      attrs: { colspan: "2" }
                                    },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "input-group" },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: tax.total,
                                                expression: "tax.total"
                                              }
                                            ],
                                            staticClass:
                                              "rg-txn-item-row-total form-control text-right",
                                            attrs: {
                                              type: "text",
                                              placeholder: "0.00"
                                            },
                                            domProps: { value: tax.total },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  tax,
                                                  "total",
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
                                                    title: "Remove Tax"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.txnItemsTaxRemove(
                                                        tax.id
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c("i", {
                                                    staticClass: "icon-cross3"
                                                  })
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ])
                              }),
                              0
                            ),
                            _vm._v(" "),
                            _c("tfoot", [
                              _c("tr", [
                                _c("td", { staticClass: "p-15 border-0" }),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  {
                                    staticClass:
                                      "p-15 border-left-0 border-top-0 border-right-0 font-weight-bold size4of5",
                                    attrs: { colspan: "2" }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                        TOTAL\n                                        "
                                    ),
                                    _vm.txnAttributes.base_currency
                                      ? _c(
                                          "span",
                                          {
                                            staticClass:
                                              "badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"
                                          },
                                          [
                                            _vm._v(
                                              "\n                                        " +
                                                _vm._s(
                                                  _vm.txnAttributes
                                                    .base_currency
                                                ) +
                                                "\n                                    "
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  {
                                    staticClass:
                                      "border-left-0 border-top-0 border-right-0 font-weight-bold size4of5 text-right rg-txn-total-pr",
                                    attrs: { id: "txn_total", colspan: "2" }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                        " +
                                        _vm._s(
                                          _vm.rgNumberFormat(
                                            _vm.txnAttributes.total,
                                            2
                                          )
                                        ) +
                                        "\n                                    "
                                    )
                                  ]
                                )
                              ])
                            ])
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _vm._m(2)
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
    return _c(
      "div",
      { staticClass: "form-group text-left text-muted content-divider pl-3" },
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
    return _c("div", { staticClass: "text-left p-0" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-danger font-weight-bold",
          attrs: { type: "submit" }
        },
        [
          _c("i", { staticClass: "icon-file-plus2 mr-1" }),
          _vm._v(" Update Job Items\n                        ")
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ })

}]);