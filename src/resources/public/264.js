(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[264],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/suppliers/expenses/Form.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/suppliers/expenses/Form.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      loadingContactInvoices: false
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
  watch: {},
  created: function created() {
    this.pageTitle = 'Create Sales Order';
    this.pageAction = 'Create';
  },
  mounted: function mounted() {
    this.txnTaxesAllIncludive = true; //console.log(this.$route.fullPath)

    this.txnCreateData();
    this.txnFetchSuppliers('-initiate-');
    this.txnFetchAccounts('-initiate-');
    this.txnFetchTaxes();
    this.txnFetchAccountsExpenses();
    this.txnFetchAccountsPayment(); //this.txnFetchAccounts()
  },
  methods: {
    expenseAccountInput: function expenseAccountInput(expense_account_id) {
      //console.log(expense_account_id)
      var a = this.txnAccountsExpenses.find(function (account) {
        return account.id === expense_account_id;
      }); //console.log(a)

      this.txnAttributes.debit = expense_account_id;
      this.txnAttributes.items[0].name = a.name;
      this.txnAttributes.items[0].description = a.name;
    }
  },
  beforeUpdate: function beforeUpdate() {//
  },
  updated: function updated() {//this.txnComponentUpdates()
  },
  destroyed: function destroyed() {
    this.txnTaxesAllIncludive = false;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/suppliers/expenses/Form.vue?vue&type=template&id=3ea31ce0&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/suppliers/expenses/Form.vue?vue&type=template&id=3ea31ce0& ***!
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
                _vm._v("Expenses")
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
                      "\n                            Expenses\n                        "
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
                    _c("fieldset", {}, [
                      _c("div", { staticClass: "form-group row" }, [
                        _c(
                          "label",
                          { staticClass: "col-lg-2 col-form-label" },
                          [
                            _vm._v(
                              "\n                                    Expense Account:\n                                "
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
                                list: _vm.txnAccountsExpenses,
                                "option-value": "id",
                                "option-text": "name",
                                placeholder: "select account"
                              },
                              on: { input: _vm.expenseAccountInput },
                              model: {
                                value: _vm.txnAttributes.items[0].type_id,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.txnAttributes.items[0],
                                    "type_id",
                                    $$v
                                  )
                                },
                                expression: "txnAttributes.items[0].type_id"
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
                          {
                            staticClass:
                              "col-lg-2 col-form-label font-weight-bold"
                          },
                          [
                            _vm._v(
                              "\n                                    Date & Reference:\n                                "
                            )
                          ]
                        ),
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
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-lg-3" }, [
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
                      ])
                    ]),
                    _vm._v(" "),
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
                            [_vm._v("Supplier / Vendor")]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-lg-6" },
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
                                  input: _vm.txnContactSelect
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
                                    _vm.txnAttributes.base_currency !==
                                      _vm.txnAttributes.quote_currency,
                                  expression:
                                    "txnAttributes.contact_id && txnAttributes.base_currency !== txnAttributes.quote_currency"
                                }
                              ],
                              staticClass: "col-lg-2 pr-0"
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "input-group",
                                  attrs: { title: "Exchange rate" }
                                },
                                [
                                  _vm._m(1),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.txnAttributes.exchange_rate,
                                        expression:
                                          "txnAttributes.exchange_rate"
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
                                ]
                              )
                            ]
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "fieldset",
                      [
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
                          _c("div", { staticClass: "col-lg-3" }, [
                            _c("div", { staticClass: "input-group" }, [
                              _c(
                                "span",
                                { staticClass: "input-group-prepend" },
                                [
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
                                ]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.txnAttributes.items[0].rate,
                                    expression: "txnAttributes.items[0].rate"
                                  }
                                ],
                                staticClass:
                                  "form-control font-weight-semibold text-right",
                                attrs: { type: "text", placeholder: "Amount" },
                                domProps: {
                                  value: _vm.txnAttributes.items[0].rate
                                },
                                on: {
                                  keyup: _vm.txnTotal,
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.txnAttributes.items[0],
                                      "rate",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-lg-4" }, [
                            _c("div", { staticClass: "row" }, [
                              _c(
                                "label",
                                {
                                  staticClass:
                                    "col-auto col-form-label text-right bg-light border rounded-left border-right-0",
                                  staticStyle: { "white-space": "nowrap" }
                                },
                                [
                                  _vm._v(
                                    "\n                                            Tax:\n                                        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "col pl-0 pr-0" },
                                [
                                  _c("multi-list-select", {
                                    staticClass: "rounded-left-0",
                                    attrs: {
                                      list: _vm.txnTaxes,
                                      "option-value": "id",
                                      "option-text": "display_name",
                                      "option-item-row": 0,
                                      "selected-items":
                                        _vm.txnAttributes.items[0]
                                          .selectedTaxes,
                                      placeholder: "select tax",
                                      "show-count-of-selected-options": ""
                                    },
                                    on: { select: _vm.txnItemTaxes }
                                  })
                                ],
                                1
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.txnAttributes.taxes, function(tax) {
                          return _c("div", { staticClass: "form-group row" }, [
                            _c("label", {
                              staticClass: "col-lg-2 col-form-label"
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "col-lg-3 pl-4 border-left-2 border-left-indigo-400 rounded-0"
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "input-group input-group-sm" },
                                  [
                                    _c(
                                      "span",
                                      { staticClass: "input-group-prepend" },
                                      [
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "input-group-text font-weight-bold"
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.txnAttributes.base_currency
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
                                          value: tax.total,
                                          expression: "tax.total"
                                        }
                                      ],
                                      staticClass:
                                        "rg-txn-item-row-total form-control form-control-sm text-right",
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
                                    })
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-lg-4 " }, [
                              _c(
                                "div",
                                { staticClass: "h-100 align-baseline" },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "float-left pt-1 font-weight-semibold"
                                    },
                                    [_vm._v(_vm._s(tax.name))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn bg-danger bg-transparent text-danger btn-icon float-right",
                                      attrs: {
                                        type: "button",
                                        title: "Remove Tax"
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.txnItemsTaxRemove(tax.id)
                                        }
                                      }
                                    },
                                    [_c("i", { staticClass: "icon-cross3" })]
                                  )
                                ]
                              )
                            ])
                          ])
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group row" }, [
                          _c(
                            "label",
                            { staticClass: "col-lg-2 col-form-label" },
                            [
                              _vm._v(
                                "\n                                    Payment mode:\n                                "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-lg-3" },
                            [
                              _c("model-select", {
                                attrs: {
                                  options: _vm.txnPaymentModes,
                                  placeholder: "Select payment mode"
                                },
                                model: {
                                  value: _vm.txnAttributes.payment_mode,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.txnAttributes,
                                      "payment_mode",
                                      $$v
                                    )
                                  },
                                  expression: "txnAttributes.payment_mode"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-lg-4" }, [
                            _c("div", { staticClass: "row" }, [
                              _c(
                                "label",
                                {
                                  staticClass:
                                    "col-auto col-form-label text-right bg-light border rounded-left border-right-0",
                                  staticStyle: { "white-space": "nowrap" }
                                },
                                [
                                  _vm._v(
                                    "\n                                            Credit:\n                                        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "col pl-0 pr-0" },
                                [
                                  _c("model-list-select", {
                                    staticClass: "rounded-left-0",
                                    attrs: {
                                      list: _vm.txnAccountsPayment,
                                      "option-value": "id",
                                      "option-text": "name",
                                      placeholder: "select account"
                                    },
                                    model: {
                                      value: _vm.txnAttributes.credit,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.txnAttributes,
                                          "credit",
                                          $$v
                                        )
                                      },
                                      expression: "txnAttributes.credit"
                                    }
                                  })
                                ],
                                1
                              )
                            ])
                          ])
                        ])
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c("fieldset", { staticClass: "mt-3" }, [
                      _c("div", { staticClass: "form-group row" }, [
                        _c(
                          "label",
                          { staticClass: "col-lg-2 col-form-label" },
                          [
                            _vm._v(
                              "\n                                    Description:\n                                "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-lg-7 pr-0" }, [
                          _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.txnAttributes.items[0].description,
                                expression: "txnAttributes.items[0].description"
                              }
                            ],
                            staticClass: "form-control input-roundless",
                            attrs: { rows: "2", placeholder: "Description" },
                            domProps: {
                              value: _vm.txnAttributes.items[0].description
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.txnAttributes.items[0],
                                  "description",
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
                          { staticClass: "col-form-label col-lg-2" },
                          [_vm._v("Attach files")]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-lg-10" }, [
                          _c("input", {
                            ref: "filesAttached",
                            staticClass: "form-control border-0  pl-0 h-auto",
                            attrs: { type: "file", multiple: "" }
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
                          _vm._m(2),
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
                                      return _vm.txnOnSave("Draft", false)
                                    }
                                  }
                                },
                                [
                                  _c("i", { staticClass: "icon-file-text3" }),
                                  _vm._v(
                                    " Save as Draft\n                                    "
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
                              "\n                                " +
                                _vm._s(_vm.txnSubmitBtnText) +
                                " |\n                                "
                            ),
                            _c(
                              "span",
                              { staticClass: "font-weight-semibold" },
                              [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(
                                      _vm.rgNumberFormat(
                                        _vm.txnAttributes.total,
                                        2
                                      )
                                    ) +
                                    "\n                                    " +
                                    _vm._s(_vm.txnAttributes.base_currency) +
                                    "\n                                "
                                )
                              ]
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
      _c("span", { staticClass: "input-group-text" }, [_vm._v("XR")])
    ])
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

/***/ "./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/suppliers/expenses/Form.vue":
/*!**********************************************************************************************************!*\
  !*** ./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/suppliers/expenses/Form.vue ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form_vue_vue_type_template_id_3ea31ce0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=3ea31ce0& */ "./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/suppliers/expenses/Form.vue?vue&type=template&id=3ea31ce0&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/suppliers/expenses/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_3ea31ce0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Form_vue_vue_type_template_id_3ea31ce0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/suppliers/expenses/Form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/suppliers/expenses/Form.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************!*\
  !*** ./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/suppliers/expenses/Form.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/suppliers/expenses/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/suppliers/expenses/Form.vue?vue&type=template&id=3ea31ce0&":
/*!*****************************************************************************************************************************************!*\
  !*** ./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/suppliers/expenses/Form.vue?vue&type=template&id=3ea31ce0& ***!
  \*****************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_3ea31ce0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=template&id=3ea31ce0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/suppliers/expenses/Form.vue?vue&type=template&id=3ea31ce0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_3ea31ce0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_3ea31ce0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);