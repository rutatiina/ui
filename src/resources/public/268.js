(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[268],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/suppliers/payments/Form.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/suppliers/payments/Form.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      loadingContactInvoices: false,
      receiptContacts: [],
      receiptOnInvoices: true,
      receiptAutoSetItemsTotalCheckbox: false,
      receiptDebitAccounts: [],
      receiptAmountUnallocated: 0,
      receiptPaymentModes: [{
        value: 'Bank Deposit',
        text: 'Bank Deposit'
      }, {
        value: 'Bank Remittance',
        text: 'Bank Remittance'
      }, {
        value: 'Bank Transfer',
        text: 'Bank Transfer'
      }, {
        value: 'Cash',
        text: 'Cash'
      }, {
        value: 'Check',
        text: 'Check'
      }, {
        value: 'Credit Card',
        text: 'Credit Card'
      }, {
        value: 'Mobile money',
        text: 'Mobile money'
      }]
    };
  },
  computed: {
    receiptTotalDue: function receiptTotalDue() {
      var currentObj = this;
      var t = 0;
      currentObj.txnAttributes.items.forEach(function (item) {
        //console.log(item.txn)
        if (typeof item.txn.balance !== 'undefined') {
          //console.log(item.txn.balance)
          t += currentObj.rgNumber(item.txn.balance);
        }
      });
      return t;
    }
  },
  watch: {
    'receiptContacts': function receiptContacts() {
      this.fetchContactBills();
    },
    'receiptAutoSetItemsTotalCheckbox': function receiptAutoSetItemsTotalCheckbox() {
      this.receiptAutoSetItemsTotal();
    },
    'txnAttributes.total': function txnAttributesTotal() {
      this.receiptAutoSetItemsTotal();
    }
  },
  created: function created() {
    this.pageTitle = 'Create Sales Order';
    this.pageAction = 'Create';
  },
  mounted: function mounted() {
    //console.log(this.$route.fullPath)
    this.txnCreateData();
    this.txnFetchSuppliers('-initiate-'); //this.fetchContactBills()

    this.fetchReceiptDebitAccounts(); //this.txnFetchAccounts()
  },
  methods: {
    fetchContactBills: function () {
      var _fetchContactBills = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this = this;

        var contact_ids;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                contact_ids = [];
                this.receiptContacts.forEach(function (contact) {
                  contact_ids.push(contact.id);
                }); //do not continue if no contacts are selected

                if (!(contact_ids.length === 0)) {
                  _context.next = 6;
                  break;
                }

                this.loadingContactInvoices = false;
                this.txnAttributes.items = [];
                return _context.abrupt("return", false);

              case 6:
                _context.prev = 6;
                this.loadingContactInvoices = true;
                _context.next = 10;
                return axios.post('/workshop/suppliers/payments/bills', {
                  contact_ids: contact_ids
                }).then(function (response) {
                  _this.loadingContactInvoices = false;

                  if (response.data.status === true) {
                    _this.txnAttributes.items = response.data.items;

                    _this.receiptAutoSetItemsTotal();
                  } else {
                    _this.txnAttributes.items = [];
                  }
                })["catch"](function (error) {
                  // handle error
                  console.log(error); //test
                })["finally"](function (response) {// always executed this is supposed
                });

              case 10:
                return _context.abrupt("return", _context.sent);

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](6);
                console.log(_context.t0); //test

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[6, 13]]);
      }));

      function fetchContactBills() {
        return _fetchContactBills.apply(this, arguments);
      }

      return fetchContactBills;
    }(),
    fetchReceiptDebitAccounts: function () {
      var _fetchReceiptDebitAccounts = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _this2 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return axios.post('/workshop/suppliers/payments/credit-accounts').then(function (response) {
                  _this2.receiptDebitAccounts = response.data;
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

      function fetchReceiptDebitAccounts() {
        return _fetchReceiptDebitAccounts.apply(this, arguments);
      }

      return fetchReceiptDebitAccounts;
    }(),
    receiptContactsOnSelect: function receiptContactsOnSelect(items, lastSelectItem) {
      this.receiptContacts = items; //console.log(lastSelectItem)
    },
    receiptContactInput: function receiptContactInput(contact, row) {
      this.txnContactSelect(contact, row);
      this.receiptContacts.push(contact);
    },
    receiptAutoSetItemsTotal: function receiptAutoSetItemsTotal() {
      var currentObj = this; //console.log(currentObj.receiptAutoSetItemsTotalCheckbox)

      if (currentObj.receiptAutoSetItemsTotalCheckbox) {
        var amount_received = currentObj.rgNumber(currentObj.txnAttributes.total);
        var amount_balance = 0;
        currentObj.txnAttributes.items.forEach(function (item) {
          item.rate = 0;
          item.paidInFull = false;
          amount_balance = currentObj.rgNumber(item.txn.balance); //console.log(amount_balance);

          if (amount_received >= amount_balance) {
            item.rate = amount_balance.toFixed(2); //item.total = amount_balance.toFixed(2)
          } else if (amount_received < amount_balance && amount_received > 0) {
            item.rate = amount_received.toFixed(2); //item.total = amount_received.toFixed(2)
          }

          amount_received = currentObj.rgNumber(currentObj.rgNumber(amount_received) - currentObj.rgNumber(amount_balance));
        });
      }

      currentObj.receiptItemsTotal();
    },
    receiptItemsTotal: function receiptItemsTotal() {
      var currentObj = this;
      var au = 0;
      currentObj.txnAttributes.items.forEach(function (item) {
        item.total = item.rate;
        au += currentObj.rgNumber(item.total);
      });
      currentObj.receiptAmountUnallocated = currentObj.txnAttributes.total - au; //console.log(currentObj.receiptAmountUnallocated)
    },
    receiptItemRateReset: function receiptItemRateReset(index) {
      this.txnAttributes.items[index].rate = 0;
      this.txnAttributes.items[index].paidInFull = false;
      this.receiptAutoSetItemsTotalCheckbox = false;
      this.receiptItemsTotal();
    },
    receiptItemPaidInFull: function receiptItemPaidInFull(index) {
      var currentObj = this;
      currentObj.receiptAutoSetItemsTotalCheckbox = false;

      if (currentObj.txnAttributes.items[index].paidInFull) {
        currentObj.txnAttributes.items[index].rate = currentObj.rgNumber(currentObj.txnAttributes.items[index].txn.balance).toFixed(currentObj.$root.tenant.decimal_places);
      }

      this.receiptItemsTotal();
    },
    receiptAllItemsRateReset: function receiptAllItemsRateReset() {
      this.txnAttributes.items.forEach(function (item) {
        item.rate = 0;
        item.paidInFull = false;
      });
      this.receiptAutoSetItemsTotalCheckbox = false;
      this.receiptItemsTotal();
    },
    receiptAllItemsPaidInFull: function receiptAllItemsPaidInFull() {
      var currentObj = this;
      currentObj.receiptAutoSetItemsTotalCheckbox = false;
      currentObj.txnAttributes.items.forEach(function (item) {
        item.paidInFull = true;
        item.rate = currentObj.rgNumber(item.txn.balance).toFixed(currentObj.$root.tenant.decimal_places);
      });
      currentObj.receiptItemsTotal();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/suppliers/payments/Form.vue?vue&type=template&id=4c6675e4&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/suppliers/payments/Form.vue?vue&type=template&id=4c6675e4& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
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
                "\n                        " +
                  _vm._s(_vm.pageTitle) +
                  "\n                    "
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
                _vm._v("Accounting")
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "breadcrumb-item" }, [
                _vm._v("Purchases")
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "breadcrumb-item" }, [
                _vm._v("Payments")
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
                    attrs: { to: _vm.txnUrlStore }
                  },
                  [
                    _c("i", { staticClass: "icon-drawer3 mr-2" }),
                    _vm._v(
                      "\n                            Payments\n                        "
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
                    on: { submit: _vm.txnFormSubmit }
                  },
                  [
                    _c(
                      "fieldset",
                      {
                        staticClass: "select_contact_required",
                        attrs: { id: "fieldset_select_contact" }
                      },
                      [
                        _c("div", { staticClass: "form-group row" }, [
                          _c(
                            "label",
                            {
                              staticClass:
                                "col-form-label col-lg-2 text-danger font-weight-bold"
                            },
                            [_vm._v("Customer")]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-lg-5" },
                            [
                              _c("model-list-select", {
                                attrs: {
                                  list: _vm.txnContacts,
                                  "option-value": "id",
                                  "option-text": "display_name",
                                  placeholder: "select contact"
                                },
                                on: {
                                  searchchange: _vm.txnFetchSuppliers,
                                  input: _vm.receiptContactInput
                                },
                                model: {
                                  value: _vm.txnAttributes.contact,
                                  callback: function($$v) {
                                    _vm.$set(_vm.txnAttributes, "contact", $$v)
                                  },
                                  expression: "txnAttributes.contact"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.txnAttributes.contact_id,
                                  expression: "txnAttributes.contact_id"
                                }
                              ],
                              staticClass: "col-lg-1 p-0"
                            },
                            [
                              _c("model-list-select", {
                                attrs: {
                                  list: _vm.txnAttributes.contact.currencies,
                                  "option-value": "code",
                                  "option-text": "code",
                                  placeholder: "select currency"
                                },
                                model: {
                                  value: _vm.txnAttributes.contact.currency,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.txnAttributes.contact,
                                      "currency",
                                      $$v
                                    )
                                  },
                                  expression: "txnAttributes.contact.currency"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value:
                                    _vm.txnAttributes.contact_id &&
                                    _vm.txnAttributes.base_currency !=
                                      _vm.txnAttributes.quote_currency,
                                  expression:
                                    "txnAttributes.contact_id && txnAttributes.base_currency != txnAttributes.quote_currency"
                                }
                              ],
                              staticClass: "col-lg-3 pr-0"
                            },
                            [
                              _c("div", { staticClass: "input-group" }, [
                                _vm._m(1),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.txnAttributes.exchange_rate,
                                      expression: "txnAttributes.exchange_rate"
                                    }
                                  ],
                                  staticClass: "form-control text-right",
                                  attrs: {
                                    type: "text",
                                    placeholder: "Exchange rate"
                                  },
                                  domProps: {
                                    value: _vm.txnAttributes.exchange_rate
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.txnAttributes,
                                        "exchange_rate",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("fieldset", {}, [
                      _c("div", { staticClass: "form-group row" }, [
                        _c(
                          "label",
                          {
                            staticClass:
                              "col-lg-2 col-form-label font-weight-bold"
                          },
                          [
                            _vm._v(
                              "\n                                    Payment # & Date:\n                                "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-lg-3" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.txnAttributes.number,
                                expression: "txnAttributes.number"
                              }
                            ],
                            staticClass: "form-control input-roundless",
                            attrs: {
                              type: "text",
                              name: "number",
                              placeholder: "Offer number"
                            },
                            domProps: { value: _vm.txnAttributes.number },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.txnAttributes,
                                  "number",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "col-lg-2",
                            attrs: { title: "Invoice date" }
                          },
                          [
                            _c("date-picker", {
                              staticClass: "font-weight-bold w-100 h-100",
                              attrs: {
                                valueType: "format",
                                lang: _vm.vue2DatePicker.lang,
                                placeholder: "Invoice date"
                              },
                              model: {
                                value: _vm.txnAttributes.date,
                                callback: function($$v) {
                                  _vm.$set(_vm.txnAttributes, "date", $$v)
                                },
                                expression: "txnAttributes.date"
                              }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group row" }, [
                        _c(
                          "label",
                          { staticClass: "col-lg-2 col-form-label" },
                          [
                            _vm._v(
                              "\n                                    Reference:\n                                "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-lg-5" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.txnAttributes.reference,
                                expression: "txnAttributes.reference"
                              }
                            ],
                            staticClass: "form-control input-roundless",
                            attrs: {
                              type: "text",
                              name: "reference",
                              placeholder: "Enter reference"
                            },
                            domProps: { value: _vm.txnAttributes.reference },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.txnAttributes,
                                  "reference",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group row" }, [
                        _c(
                          "label",
                          { staticClass: "col-lg-2 col-form-label" },
                          [
                            _vm._v(
                              "\n                                    Amount paid\n                                "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-lg-5" }, [
                          _c("div", { staticClass: "input-group" }, [
                            _c("span", { staticClass: "input-group-prepend" }, [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "input-group-text font-weight-bold"
                                },
                                [
                                  _vm._v(
                                    _vm._s(_vm.txnAttributes.base_currency)
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.txnAttributes.total,
                                  expression: "txnAttributes.total"
                                }
                              ],
                              staticClass:
                                "form-control font-weight-semibold text-right",
                              attrs: {
                                type: "text",
                                placeholder: "Amount received"
                              },
                              domProps: { value: _vm.txnAttributes.total },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.txnAttributes,
                                    "total",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-lg-5 col-form-label" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "custom-control custom-checkbox custom-control-inline"
                            },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.receiptAutoSetItemsTotalCheckbox,
                                    expression:
                                      "receiptAutoSetItemsTotalCheckbox"
                                  }
                                ],
                                staticClass: "custom-control-input",
                                attrs: { type: "checkbox", id: "txn-auto-pay" },
                                domProps: {
                                  checked: Array.isArray(
                                    _vm.receiptAutoSetItemsTotalCheckbox
                                  )
                                    ? _vm._i(
                                        _vm.receiptAutoSetItemsTotalCheckbox,
                                        null
                                      ) > -1
                                    : _vm.receiptAutoSetItemsTotalCheckbox
                                },
                                on: {
                                  change: function($event) {
                                    var $$a =
                                        _vm.receiptAutoSetItemsTotalCheckbox,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = null,
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          (_vm.receiptAutoSetItemsTotalCheckbox = $$a.concat(
                                            [$$v]
                                          ))
                                      } else {
                                        $$i > -1 &&
                                          (_vm.receiptAutoSetItemsTotalCheckbox = $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1)))
                                      }
                                    } else {
                                      _vm.receiptAutoSetItemsTotalCheckbox = $$c
                                    }
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "label",
                                {
                                  staticClass: "custom-control-label",
                                  attrs: { for: "txn-auto-pay" }
                                },
                                [_vm._v("Auto pay bills(s)")]
                              )
                            ]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group row" }, [
                        _c(
                          "label",
                          { staticClass: "col-lg-2 col-form-label" },
                          [
                            _vm._v(
                              "\n                                    Payment Account:\n                                "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-lg-5" },
                          [
                            _c("model-list-select", {
                              attrs: {
                                list: _vm.receiptDebitAccounts,
                                "option-value": "id",
                                "option-text": "name",
                                placeholder: "select account"
                              },
                              model: {
                                value: _vm.txnAttributes.credit,
                                callback: function($$v) {
                                  _vm.$set(_vm.txnAttributes, "credit", $$v)
                                },
                                expression: "txnAttributes.credit"
                              }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group row" }, [
                        _c("label", { staticClass: "col-lg-2 col-form-label" }),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-lg-5" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "custom-control custom-checkbox custom-control-inline"
                            },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.receiptOnInvoices,
                                    expression: "receiptOnInvoices"
                                  }
                                ],
                                staticClass: "custom-control-input",
                                attrs: {
                                  type: "checkbox",
                                  id: "txn-is-recurring"
                                },
                                domProps: {
                                  checked: Array.isArray(_vm.receiptOnInvoices)
                                    ? _vm._i(_vm.receiptOnInvoices, null) > -1
                                    : _vm.receiptOnInvoices
                                },
                                on: {
                                  change: function($event) {
                                    var $$a = _vm.receiptOnInvoices,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = null,
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          (_vm.receiptOnInvoices = $$a.concat([
                                            $$v
                                          ]))
                                      } else {
                                        $$i > -1 &&
                                          (_vm.receiptOnInvoices = $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1)))
                                      }
                                    } else {
                                      _vm.receiptOnInvoices = $$c
                                    }
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "label",
                                {
                                  staticClass: "custom-control-label",
                                  attrs: { for: "txn-is-recurring" }
                                },
                                [_vm._v("Make payment for Bill(s) issued.")]
                              )
                            ]
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _vm.receiptOnInvoices
                      ? _c("div", { staticClass: "card mb-0" }, [
                          _c("fieldset", [
                            _c(
                              "div",
                              { staticClass: "form-group row mb-0 mt-0" },
                              [
                                _c(
                                  "label",
                                  {
                                    staticClass:
                                      "col-lg-2 col-form-label text-right border-0 rounded-left",
                                    staticStyle: { "white-space": "nowrap" }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                    Show Bills from:\n                                "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col-lg-10" },
                                  [
                                    _c("multi-list-select", {
                                      staticClass: "border-0 rounded-0",
                                      attrs: {
                                        list: _vm.txnContacts,
                                        "option-value": "id",
                                        "option-text": "display_name",
                                        "selected-items": _vm.receiptContacts,
                                        placeholder: "Select customer / contact"
                                      },
                                      on: {
                                        select: _vm.receiptContactsOnSelect,
                                        searchchange: _vm.txnFetchContacts
                                      }
                                    })
                                  ],
                                  1
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("hr", { staticClass: "m-0" }),
                          _vm._v(" "),
                          _c("table", { staticClass: "table" }, [
                            _c("thead", { staticClass: "thead-default" }, [
                              _c("tr", [
                                _vm._m(2),
                                _vm._v(" "),
                                _c(
                                  "th",
                                  { staticClass: "h6", attrs: { width: "" } },
                                  [
                                    _vm._v(
                                      "\n                                        Bill#\n                                        "
                                    ),
                                    _c(
                                      "small",
                                      { staticClass: "pull-right pt-5" },
                                      [
                                        _c(
                                          "a",
                                          {
                                            attrs: { href: "/" },
                                            on: {
                                              click: function($event) {
                                                $event.preventDefault()
                                                return _vm.receiptAllItemsPaidInFull(
                                                  $event
                                                )
                                              }
                                            }
                                          },
                                          [_vm._v("(Pay all fully)")]
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "th",
                                  {
                                    staticClass: "h6 text-right",
                                    attrs: { width: "" }
                                  },
                                  [_vm._v("Bill amount")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "th",
                                  {
                                    staticClass: "h6 text-right",
                                    attrs: { width: "" }
                                  },
                                  [_vm._v("Amount due")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "th",
                                  {
                                    staticClass: "h6 text-left",
                                    attrs: { width: "" }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                        Receipt amount\n                                        "
                                    ),
                                    _c(
                                      "small",
                                      { staticClass: "pull-right pt-5" },
                                      [
                                        _c(
                                          "a",
                                          {
                                            attrs: { href: "/" },
                                            on: {
                                              click: function($event) {
                                                $event.preventDefault()
                                                return _vm.receiptAllItemsRateReset(
                                                  $event
                                                )
                                              }
                                            }
                                          },
                                          [_vm._v("(Clear amounts)")]
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "tbody",
                              [
                                _vm.loadingContactInvoices
                                  ? _c("tr", [_vm._m(3)])
                                  : _vm._e(),
                                _vm._v(" "),
                                !_vm.loadingContactInvoices &&
                                _vm.receiptContacts.length === 0
                                  ? _c("tr", [_vm._m(4)])
                                  : _vm._e(),
                                _vm._v(" "),
                                !_vm.loadingContactInvoices &&
                                _vm.receiptContacts.length > 0 &&
                                _vm.txnAttributes.items.length === 0
                                  ? _c("tr", [_vm._m(5)])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm._l(_vm.txnAttributes.items, function(
                                  item,
                                  index
                                ) {
                                  return !_vm.loadingContactInvoices && item.txn
                                    ? _c("tr", [
                                        _c("td", {}, [
                                          _c(
                                            "span",
                                            { staticClass: "text-semibold" },
                                            [_vm._v(_vm._s(item.txn.date))]
                                          ),
                                          _c("br"),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "text-muted text-size-small"
                                            },
                                            [
                                              _vm._v(
                                                "Due " +
                                                  _vm._s(item.txn.due_date)
                                              )
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", {}, [
                                          _c(
                                            "div",
                                            { staticClass: "text-nowrap h6" },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "font-weight-semibold"
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(item.txn.number)
                                                  )
                                                ]
                                              ),
                                              _vm._v(
                                                " -\n                                                "
                                              ),
                                              _c("span", [
                                                _vm._v(
                                                  _vm._s(item.txn.contact_name)
                                                )
                                              ])
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "custom-control custom-checkbox custom-control-inline"
                                            },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: item.paidInFull,
                                                    expression:
                                                      "item.paidInFull"
                                                  }
                                                ],
                                                staticClass:
                                                  "custom-control-input",
                                                attrs: {
                                                  type: "checkbox",
                                                  id:
                                                    "contact-bill-" +
                                                    item.txn.id
                                                },
                                                domProps: {
                                                  checked: Array.isArray(
                                                    item.paidInFull
                                                  )
                                                    ? _vm._i(
                                                        item.paidInFull,
                                                        null
                                                      ) > -1
                                                    : item.paidInFull
                                                },
                                                on: {
                                                  change: [
                                                    function($event) {
                                                      var $$a = item.paidInFull,
                                                        $$el = $event.target,
                                                        $$c = $$el.checked
                                                          ? true
                                                          : false
                                                      if (Array.isArray($$a)) {
                                                        var $$v = null,
                                                          $$i = _vm._i($$a, $$v)
                                                        if ($$el.checked) {
                                                          $$i < 0 &&
                                                            _vm.$set(
                                                              item,
                                                              "paidInFull",
                                                              $$a.concat([$$v])
                                                            )
                                                        } else {
                                                          $$i > -1 &&
                                                            _vm.$set(
                                                              item,
                                                              "paidInFull",
                                                              $$a
                                                                .slice(0, $$i)
                                                                .concat(
                                                                  $$a.slice(
                                                                    $$i + 1
                                                                  )
                                                                )
                                                            )
                                                        }
                                                      } else {
                                                        _vm.$set(
                                                          item,
                                                          "paidInFull",
                                                          $$c
                                                        )
                                                      }
                                                    },
                                                    function($event) {
                                                      return _vm.receiptItemPaidInFull(
                                                        index
                                                      )
                                                    }
                                                  ]
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
                                                      "contact-bill-" +
                                                      item.txn.id
                                                  },
                                                  model: {
                                                    value: item.paidInFull,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        item,
                                                        "paidInFull",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "item.paidInFull"
                                                  }
                                                },
                                                [_vm._v("Paid in full")]
                                              )
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          { staticClass: "text-right" },
                                          [
                                            _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "text-primary font-weight-semibold"
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.rgNumberFormat(
                                                      item.txn.total,
                                                      2
                                                    )
                                                  )
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("small", [
                                              _vm._v(
                                                _vm._s(item.txn.base_currency)
                                              )
                                            ])
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          { staticClass: "text-right h6" },
                                          [
                                            _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "text-danger font-weight-semibold"
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.rgNumberFormat(
                                                      item.txn.balance,
                                                      2
                                                    )
                                                  )
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("small", [
                                              _vm._v(
                                                _vm._s(item.txn.base_currency)
                                              )
                                            ])
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          {
                                            staticClass:
                                              "text-right align-middle"
                                          },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "input-group" },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "input-group-prepend"
                                                  },
                                                  [
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "input-group-text"
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            item.txn
                                                              .base_currency
                                                          )
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
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
                                                    "form-control font-weight-semibold text-right",
                                                  attrs: {
                                                    type: "text",
                                                    placeholder: "0.00"
                                                  },
                                                  domProps: {
                                                    value: item.rate
                                                  },
                                                  on: {
                                                    keyup:
                                                      _vm.receiptItemsTotal,
                                                    input: function($event) {
                                                      if (
                                                        $event.target.composing
                                                      ) {
                                                        return
                                                      }
                                                      _vm.$set(
                                                        item,
                                                        "rate",
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
                                                      "input-group-append"
                                                  },
                                                  [
                                                    _c(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "btn btn-outline bg-danger border-danger text-danger-800 btn-icon",
                                                        attrs: {
                                                          type: "button",
                                                          title: "Delete row"
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.receiptItemRateReset(
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
                                          ]
                                        )
                                      ])
                                    : _vm._e()
                                })
                              ],
                              2
                            ),
                            _vm._v(" "),
                            _c("tfoot", [
                              _vm.txnAttributes.items.length > 0
                                ? _c("tr", [
                                    _c("td", {
                                      staticClass: "text-bold",
                                      attrs: { colspan: "3" }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      { staticClass: "pl-15 text-bold" },
                                      [
                                        _vm.txnAttributes.base_currency
                                          ? _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                            " +
                                                    _vm._s(
                                                      _vm.txnAttributes
                                                        .base_currency
                                                    ) +
                                                    "\n                                        "
                                                )
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(
                                          "\n                                        Total due\n                                    "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("td", { staticClass: "text-right" }, [
                                      _vm._v(
                                        _vm._s(
                                          _vm.rgNumberFormat(
                                            _vm.receiptTotalDue,
                                            2
                                          )
                                        )
                                      )
                                    ])
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.txnAttributes.items.length > 0
                                ? _c("tr", [
                                    _c("td", {
                                      staticClass: "p-15 no-border",
                                      attrs: { colspan: "3" }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      {
                                        staticClass:
                                          "p-15 no-border-right text-bold size4of5"
                                      },
                                      [
                                        _vm.txnAttributes.base_currency
                                          ? _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                            " +
                                                    _vm._s(
                                                      _vm.txnAttributes
                                                        .base_currency
                                                    ) +
                                                    "\n                                        "
                                                )
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(
                                          "\n                                        Amount Received\n                                    "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      {
                                        staticClass:
                                          "no-border-left font-weight-bold h4 text-right"
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
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.txnAttributes.items.length > 0 &&
                              _vm.receiptAmountUnallocated
                                ? _c("tr", [
                                    _c("td", {
                                      staticClass: "p-15 no-border",
                                      attrs: { colspan: "3" }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      {
                                        staticClass:
                                          "p-15 no-border-right text-bold size4of5 text-danger"
                                      },
                                      [
                                        _vm.txnAttributes.base_currency
                                          ? _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                            " +
                                                    _vm._s(
                                                      _vm.txnAttributes
                                                        .base_currency
                                                    ) +
                                                    "\n                                        "
                                                )
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(
                                          "\n                                        Amount unallocated\n                                    "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      {
                                        staticClass:
                                          "no-border-left h5 text-right text-danger"
                                      },
                                      [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(
                                              _vm.rgNumberFormat(
                                                _vm.receiptAmountUnallocated,
                                                2
                                              )
                                            ) +
                                            "\n                                    "
                                        )
                                      ]
                                    )
                                  ])
                                : _vm._e()
                            ])
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("fieldset", { staticClass: "mt-3" }, [
                      _c("div", { staticClass: "form-group row" }, [
                        _c(
                          "label",
                          { staticClass: "col-form-label col-lg-2" },
                          [_vm._v("Attach files")]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-lg-10" }, [
                          _c("input", {
                            ref: "filesAttached",
                            staticClass: "form-control border-0 p-1 h-auto",
                            attrs: { type: "file", multiple: "" }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group row" }, [
                        _c(
                          "label",
                          { staticClass: "col-lg-2 col-form-label" },
                          [
                            _vm._v(
                              "\n                                    Customer notes:\n                                "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-lg-10" }, [
                          _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.txnAttributes.contact_notes,
                                expression: "txnAttributes.contact_notes"
                              }
                            ],
                            staticClass: "form-control input-roundless",
                            attrs: { rows: "2", placeholder: "Contact notes" },
                            domProps: {
                              value: _vm.txnAttributes.contact_notes
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.txnAttributes,
                                  "contact_notes",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group row" }, [
                        _c(
                          "label",
                          { staticClass: "col-lg-2 col-form-label" },
                          [
                            _vm._v(
                              "\n                                    Terms and conditions:\n                                "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-lg-10" }, [
                          _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.txnAttributes.terms_and_conditions,
                                expression: "txnAttributes.terms_and_conditions"
                              }
                            ],
                            staticClass: "form-control input-roundless",
                            attrs: {
                              rows: "2",
                              placeholder:
                                "Mention your company's Terms and Conditions."
                            },
                            domProps: {
                              value: _vm.txnAttributes.terms_and_conditions
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.txnAttributes,
                                  "terms_and_conditions",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "text-left col-md-10 offset-md-2 p-0" },
                      [
                        _c("div", { staticClass: "btn-group ml-1" }, [
                          _vm._m(6),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "dropdown-menu dropdown-menu-left" },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "dropdown-item",
                                  attrs: { href: "/" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.txnOnSave("draft", false)
                                    }
                                  }
                                },
                                [
                                  _c("i", { staticClass: "icon-file-text3" }),
                                  _vm._v(
                                    " Save as draft\n                                    "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "dropdown-item",
                                  attrs: { href: "/" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.txnOnSave("Approved", false)
                                    }
                                  }
                                },
                                [
                                  _c("i", { staticClass: "icon-file-check2" }),
                                  _vm._v(
                                    " Save and Approve\n                                    "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "dropdown-item",
                                  attrs: { href: "/" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.txnOnSave("Approved", true)
                                    }
                                  }
                                },
                                [
                                  _c("i", { staticClass: "icon-mention" }),
                                  _vm._v(
                                    " Save, Approve and Send\n                                    "
                                  )
                                ]
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-danger font-weight-bold",
                            attrs: { type: "submit" }
                          },
                          [
                            _c("i", { staticClass: "icon-file-plus2 mr-1" }),
                            _vm._v(
                              " " +
                                _vm._s(_vm.txnSubmitBtnText) +
                                "\n                            "
                            )
                          ]
                        )
                      ]
                    )
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
    return _c("span", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [
        _vm._v("Exchange rate:")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", { staticClass: "h6", attrs: { width: "" } }, [
      _vm._v("Date / "),
      _c("span", { staticClass: "text-muted text-size-small" }, [_vm._v("Due")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-center", attrs: { colspan: "5" } }, [
      _c("h1", [_c("i", { staticClass: "icon-spinner2 spinner" })])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-center", attrs: { colspan: "5" } }, [
      _c("h4", [_vm._v("Please select contact to continue")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "td",
      { staticClass: "text-center text-danger", attrs: { colspan: "5" } },
      [_c("h4", [_vm._v("Oops: No Bills found")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass:
          "btn btn-outline bg-purple-300 border-purple-300 text-purple-800 btn-icon border-2 dropdown-toggle",
        attrs: { type: "button", "data-toggle": "dropdown" }
      },
      [_c("i", { staticClass: "icon-cog" })]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/suppliers/payments/Form.vue":
/*!**********************************************************************************************************!*\
  !*** ./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/suppliers/payments/Form.vue ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form_vue_vue_type_template_id_4c6675e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=4c6675e4& */ "./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/suppliers/payments/Form.vue?vue&type=template&id=4c6675e4&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/suppliers/payments/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_4c6675e4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Form_vue_vue_type_template_id_4c6675e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/suppliers/payments/Form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/suppliers/payments/Form.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************!*\
  !*** ./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/suppliers/payments/Form.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/suppliers/payments/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/suppliers/payments/Form.vue?vue&type=template&id=4c6675e4&":
/*!*****************************************************************************************************************************************!*\
  !*** ./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/suppliers/payments/Form.vue?vue&type=template&id=4c6675e4& ***!
  \*****************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_4c6675e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=template&id=4c6675e4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/suppliers/payments/Form.vue?vue&type=template&id=4c6675e4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_4c6675e4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_4c6675e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);