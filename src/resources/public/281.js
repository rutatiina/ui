(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[281],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/warehouse/delivery-notes/Show.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/warehouse/delivery-notes/Show.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  watch: {
    $route: function $route(to, from) {
      if (this.txnShowId !== this.$route.params.id) this.txnFetchData();
    }
  },
  mounted: function mounted() {
    this.$root.appMenu('workshop');
    this.txnFetchData(); //get the details of the transaction

    this.txnShowId = this.$route.params.id;
  },
  methods: {},
  ready: function ready() {},
  beforeUpdate: function beforeUpdate() {},
  updated: function updated() {
    this.txnShowId = this.$route.params.id;

    if (typeof this.txnData.type.name !== 'undefined') {
      document.title = this.txnData.type.name + ' ' + this.txnData.number;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/warehouse/delivery-notes/Show.vue?vue&type=template&id=467f7348&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/warehouse/delivery-notes/Show.vue?vue&type=template&id=467f7348& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "page-header page-header-light d-print-none" }, [
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
                _vm._v("Accounting")
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "breadcrumb-item" }, [
                _vm._v("Inventory")
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "breadcrumb-item active" }, [
                _vm._v("Delivery Note")
              ])
            ]),
            _vm._v(" "),
            _vm._m(1)
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
                      "btn btn-outline btn-primary border-primary text-primary-800 border-2 btn-sm rounded font-weight-bold mr-2",
                    attrs: { to: "/accounting/inventory/delivery-notes/create" }
                  },
                  [
                    _c("i", { staticClass: "icon-files-empty2 mr-1" }),
                    _vm._v(
                      "\n                        New Delivery Note\n                    "
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
        _c("loading-txn-animation"),
        _vm._v(" "),
        !this.$root.loadingTxn && _vm.txnData
          ? _c("div", { staticClass: "content" }, [
              _vm.txnData.status === "Draft"
                ? _c(
                    "div",
                    {
                      staticClass:
                        "card border-left-3 border-warning rounded-0 max-width-960 ml-auto mr-auto rg-print-border-0"
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "card-header header-elements-inline d-print-none text-danger"
                        },
                        [
                          _vm.txnData.type
                            ? _c(
                                "h6",
                                { staticClass: "card-title font-weight-bold" },
                                [
                                  _vm._v(
                                    "\n                        Approve " +
                                      _vm._s(_vm.txnData.type.name)
                                  ),
                                  _c("br"),
                                  _vm._v(" "),
                                  _c("small", [
                                    _vm._v("You are viewing a draft")
                                  ])
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c("div", { staticClass: "header-elements" }, [
                            _c(
                              "button",
                              {
                                staticClass: "btn bg-warning font-weight-bold",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    return _vm.txnApprove(
                                      "/accounting/inventory/delivery-notes/" +
                                        _vm.txnData.id +
                                        "/approve"
                                    )
                                  }
                                }
                              },
                              [
                                _c("i", { staticClass: "icon-printer mr-2" }),
                                _vm._v(" Click here to Approve")
                              ]
                            )
                          ])
                        ]
                      )
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              !this.$root.loadingTxn
                ? _c(
                    "div",
                    {
                      staticClass: "card max-width-960 m-auto rg-print-border-0"
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "card-header bg-transparent header-elements-inline d-print-none"
                        },
                        [
                          _vm.txnData.type
                            ? _c("h6", { staticClass: "card-title" }, [
                                _vm._v(
                                  _vm._s(_vm.txnData.type.name) +
                                    " #" +
                                    _vm._s(_vm.txnData.number)
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "header-elements" },
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "btn btn-light btn-sm",
                                  attrs: {
                                    to:
                                      "/accounting/inventory/delivery-notes/" +
                                      _vm.$route.params.id +
                                      "/copy"
                                  }
                                },
                                [
                                  _c("i", { staticClass: "icon-copy" }),
                                  _vm._v(
                                    "\n                            Copy\n                        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _vm._m(2)
                            ],
                            1
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "card-body" }, [
                        _vm.$root.tenant.logo
                          ? _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-sm-6 mb-2" }, [
                                _c("img", {
                                  attrs: {
                                    src:
                                      "/timthumb.php?src=storage/" +
                                      _vm.$root.tenant.logo +
                                      "&h=27&q=100",
                                    alt: _vm.$root.tenant.name
                                  }
                                })
                              ])
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-sm-6" }, [
                            _c("div", { staticClass: "mb-4" }, [
                              _c(
                                "ul",
                                { staticClass: "list list-unstyled mb-0" },
                                [
                                  _c("li", [
                                    _c(
                                      "h5",
                                      { staticClass: "rg-font-weight-600" },
                                      [_vm._v(_vm._s(_vm.$root.tenant.name))]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _vm.$root.tenant.street_line_1
                                    ? _c("li", [
                                        _vm._v(
                                          _vm._s(_vm.$root.tenant.street_line_1)
                                        )
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.$root.tenant.street_line_2
                                    ? _c("li", [
                                        _vm._v(
                                          _vm._s(_vm.$root.tenant.street_line_2)
                                        )
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.$root.tenant.city
                                    ? _c("li", [
                                        _vm._v(_vm._s(_vm.$root.tenant.city))
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.$root.tenant.state_province
                                    ? _c("li", [
                                        _vm._v(
                                          _vm._s(
                                            _vm.$root.tenant.state_province
                                          )
                                        )
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.$root.tenant.phone
                                    ? _c("li", [
                                        _vm._v(_vm._s(_vm.$root.tenant.phone))
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.$root.tenant.website
                                    ? _c("li", [
                                        _vm._v(_vm._s(_vm.$root.tenant.website))
                                      ])
                                    : _vm._e()
                                ]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-6" }, [
                            _c("div", { staticClass: "mb-4" }, [
                              _c("div", { staticClass: "text-sm-right" }, [
                                _vm.txnData.type
                                  ? _c(
                                      "h4",
                                      {
                                        staticClass: "text-primary mb-2 mt-md-2"
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.txnData.type.name) +
                                            " #" +
                                            _vm._s(_vm.txnData.number)
                                        )
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _c(
                                  "ul",
                                  { staticClass: "list list-unstyled mb-0" },
                                  [
                                    _c("li", [
                                      _vm._v("Date: "),
                                      _c(
                                        "span",
                                        { staticClass: "font-weight-semibold" },
                                        [_vm._v(_vm._s(_vm.txnData.date))]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _vm.txnData.due_date
                                      ? _c("li", [
                                          _vm._v("Due date: "),
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "font-weight-semibold"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.txnData.due_date)
                                              )
                                            ]
                                          )
                                        ])
                                      : _vm._e()
                                  ]
                                )
                              ])
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "d-md-flex flex-md-wrap" }, [
                          _c("div", { staticClass: "mb-4 mb-md-2" }, [
                            _vm.txnData.type
                              ? _c("span", { staticClass: "text-muted" }, [
                                  _vm._v(_vm._s(_vm.txnData.type.name) + " To:")
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.txnData.contact
                              ? _c(
                                  "ul",
                                  { staticClass: "list list-unstyled mb-0" },
                                  [
                                    _c("li", [
                                      _c("h5", { staticClass: "my-2" }, [
                                        _vm._v(
                                          _vm._s(
                                            _vm.txnData.contact
                                              .contact_salutation
                                          ) +
                                            " " +
                                            _vm._s(_vm.txnData.contact.name)
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _vm.txnData.contact
                                      .shipping_address_street1 &&
                                    _vm.txnData.contact.shipping_address_street2
                                      ? _c("li", [
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "font-weight-semibold"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.txnData.contact
                                                    .shipping_address_street1
                                                ) +
                                                  " " +
                                                  _vm._s(
                                                    _vm.txnData.contact
                                                      .shipping_address_street2
                                                  )
                                              )
                                            ]
                                          )
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.txnData.contact.shipping_address_city
                                      ? _c("li", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.txnData.contact
                                                .shipping_address_city
                                            )
                                          )
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.txnData.contact.shipping_address_state
                                      ? _c("li", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.txnData.contact
                                                .shipping_address_state
                                            )
                                          )
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.txnData.contact.shipping_address_country
                                      ? _c("li", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.txnData.contact
                                                .shipping_address_country
                                            )
                                          )
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.txnData.contact.contact_work_phone
                                      ? _c("li", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.txnData.contact
                                                .contact_work_phone
                                            )
                                          )
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.txnData.contact.contact_email
                                      ? _c("li", [
                                          _c("a", { attrs: { href: "#" } }, [
                                            _vm._v(
                                              _vm._s(
                                                _vm.txnData.contact
                                                  .contact_email
                                              )
                                            )
                                          ])
                                        ])
                                      : _vm._e()
                                  ]
                                )
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "mb-2 ml-auto" }, [
                            _c("span", { staticClass: "text-muted" }, [
                              _vm._v("Summary:")
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "d-flex flex-wrap wmin-md-400" },
                              [
                                _c(
                                  "ul",
                                  { staticClass: "list list-unstyled mb-0" },
                                  [
                                    _vm._m(3),
                                    _vm._v(" "),
                                    _vm.txnData.reference
                                      ? _c("li", [_vm._v("Reference:")])
                                      : _vm._e()
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "ul",
                                  {
                                    staticClass:
                                      "list list-unstyled text-right mb-0 ml-auto"
                                  },
                                  [
                                    _c("li", [
                                      _c(
                                        "h5",
                                        {
                                          staticClass:
                                            "font-weight-semibold my-2"
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.rgNumberFormat(
                                                _vm.txnData.total,
                                                2
                                              )
                                            )
                                          )
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _vm.txnData.reference
                                      ? _c("li", [
                                          _vm._v(_vm._s(_vm.txnData.reference))
                                        ])
                                      : _vm._e()
                                  ]
                                )
                              ]
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "table-responsive" }, [
                        _c("table", { staticClass: "table table-lg" }, [
                          _c("thead", [
                            _c("tr", { staticClass: "bg-light" }, [
                              _c("th", { staticClass: "font-weight-bold" }, [
                                _vm._v("Description")
                              ]),
                              _vm._v(" "),
                              _c(
                                "th",
                                { staticClass: "font-weight-bold text-right" },
                                [_vm._v("Rate")]
                              ),
                              _vm._v(" "),
                              _c(
                                "th",
                                { staticClass: "font-weight-bold text-right" },
                                [_vm._v("Quantity")]
                              ),
                              _vm._v(" "),
                              _c(
                                "th",
                                { staticClass: "font-weight-bold text-right" },
                                [
                                  _vm._v("Total "),
                                  _c("small", [
                                    _vm._v(
                                      " " + _vm._s(_vm.txnData.base_currency)
                                    )
                                  ])
                                ]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            _vm._l(_vm.txnData.items, function(item) {
                              return !["txn", "txn_type", "tax"].includes(
                                item.type
                              )
                                ? _c("tr", [
                                    _c("td", [
                                      _c("h6", { staticClass: "mb-0" }, [
                                        _vm._v(_vm._s(item.name))
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "text-muted" },
                                        [_vm._v(_vm._s(item.description))]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", { staticClass: "text-right" }, [
                                      _vm._v(
                                        _vm._s(_vm.rgNumberFormat(item.rate, 2))
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", { staticClass: "text-right" }, [
                                      _vm._v(
                                        _vm._s(
                                          _vm.rgNumberFormat(item.quantity)
                                        )
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", { staticClass: "text-right" }, [
                                      _c(
                                        "span",
                                        { staticClass: "font-weight-semibold" },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.rgNumberFormat(item.total, 2)
                                            )
                                          )
                                        ]
                                      )
                                    ])
                                  ])
                                : _vm._e()
                            }),
                            0
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "card-body" }, [
                        _c("div", { staticClass: "d-md-flex flex-md-wrap" }, [
                          _c("div", { staticClass: "pt-2 mb-3" }, [
                            _c("h6", [_vm._v("Authorized Stamp / Signature")]),
                            _vm._v(" "),
                            _vm._m(4),
                            _vm._v(" "),
                            _c(
                              "ul",
                              { staticClass: "list-unstyled text-muted" },
                              [
                                _vm.$root.tenant.street_line_1 &&
                                _vm.$root.tenant.street_line_2
                                  ? _c("li", [
                                      _vm._v(
                                        _vm._s(_vm.$root.tenant.street_line_1) +
                                          ", " +
                                          _vm._s(_vm.$root.tenant.street_line_2)
                                      )
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.$root.tenant.city
                                  ? _c("li", [
                                      _vm._v(_vm._s(_vm.$root.tenant.city))
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.$root.tenant.state_province
                                  ? _c("li", [
                                      _vm._v(
                                        _vm._s(_vm.$root.tenant.state_province)
                                      )
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.$root.tenant.phone
                                  ? _c("li", [
                                      _vm._v(_vm._s(_vm.$root.tenant.phone))
                                    ])
                                  : _vm._e()
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "mb-3 wmin-md-400 ml-auto" },
                            [
                              _c("div", { staticClass: "table-responsive" }, [
                                _c("table", { staticClass: "table" }, [
                                  _c(
                                    "tbody",
                                    [
                                      _c("tr", [
                                        _c("th", [_vm._v("Subtotal:")]),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          { staticClass: "text-right" },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.rgNumberFormat(
                                                  _vm.txnData.taxable_amount,
                                                  2
                                                )
                                              )
                                            )
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _vm._l(_vm.txnData.items, function(item) {
                                        return ["txn_type", "tax"].includes(
                                          item.type
                                        )
                                          ? _c("tr", [
                                              _c("th", [
                                                _vm._v(_vm._s(item.description))
                                              ]),
                                              _vm._v(" "),
                                              _c(
                                                "td",
                                                { staticClass: "text-right" },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.rgNumberFormat(
                                                        item.total,
                                                        _vm.$root.tenant
                                                          .decimal_places
                                                      )
                                                    )
                                                  )
                                                ]
                                              )
                                            ])
                                          : _vm._e()
                                      }),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c("th", [_vm._v("Total:")]),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          { staticClass: "text-right" },
                                          [
                                            _c("span", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.txnData.base_currency
                                                )
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "h5 font-weight-semibold"
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.rgNumberFormat(
                                                      _vm.txnData.total,
                                                      2
                                                    )
                                                  )
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ])
                                    ],
                                    2
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "text-right mt-3 d-print-none" },
                                [
                                  _vm.txnData.type
                                    ? _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-primary btn-labeled btn-labeled-left",
                                          attrs: { type: "button" }
                                        },
                                        [
                                          _vm._m(5),
                                          _vm._v(
                                            " Send " +
                                              _vm._s(_vm.txnData.type.name) +
                                              "\n                                "
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ]
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("hr"),
                        _vm._v(" "),
                        _c("h6", [_vm._v("Amount in words:")]),
                        _vm._v(" "),
                        _c("p", { staticClass: "text-muted" }, [
                          _vm._v(_vm._s(_vm.txnData.total_in_words))
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._m(6)
                    ]
                  )
                : _vm._e()
            ])
          : _vm._e()
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
            _c("i", { staticClass: "icon-files-empty2 mr-2" }),
            _vm._v(" "),
            _c("span", { staticClass: "font-weight-semibold" }, [
              _vm._v("Delivery Note")
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-light btn-sm ml-3",
        attrs: { type: "button", onclick: "window.print();" }
      },
      [_c("i", { staticClass: "icon-printer mr-2" }), _vm._v(" Print")]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [_c("h5", { staticClass: "my-2" }, [_vm._v("Total Due:")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mb-15 mt-15" }, [
      _c("p", { staticStyle: { "margin-top": "80px" } }, [
        _vm._v("... ... ... ... ... ... ... ... ... ... ... ... ... ... ...")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("b", [_c("i", { staticClass: "icon-paperplane" })])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-footer" }, [
      _c("span", { staticClass: "text-muted" }, [
        _vm._v(
          "Thank you for working with us. Always contact us for any feedback."
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/warehouse/delivery-notes/Show.vue":
/*!****************************************************************************************************************!*\
  !*** ./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/warehouse/delivery-notes/Show.vue ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_467f7348___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=467f7348& */ "./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/warehouse/delivery-notes/Show.vue?vue&type=template&id=467f7348&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/warehouse/delivery-notes/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_467f7348___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_467f7348___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/warehouse/delivery-notes/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/warehouse/delivery-notes/Show.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************!*\
  !*** ./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/warehouse/delivery-notes/Show.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/warehouse/delivery-notes/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/warehouse/delivery-notes/Show.vue?vue&type=template&id=467f7348&":
/*!***********************************************************************************************************************************************!*\
  !*** ./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/warehouse/delivery-notes/Show.vue?vue&type=template&id=467f7348& ***!
  \***********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_467f7348___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=467f7348& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/rutatiina/workshop/resources/vue/components/l-limitless-bs4/warehouse/delivery-notes/Show.vue?vue&type=template&id=467f7348&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_467f7348___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_467f7348___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);