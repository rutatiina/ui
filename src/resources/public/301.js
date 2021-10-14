(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[301],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/l-limitless-bs4/layout_2-ltr-default/users/Edit.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/l-limitless-bs4/layout_2-ltr-default/users/Edit.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ContactsCreate',
  components: {},
  data: function data() {
    return {
      pageTitle: 'User',
      urlPost: '/users',
      salutation: [{
        value: '',
        text: 'None'
      }, {
        value: 'Mr',
        text: 'Mr'
      }, {
        value: 'Miss',
        text: 'Miss'
      }, {
        value: 'Ms',
        text: 'Ms'
      }],
      attributes: [],
      taxes: []
    };
  },
  mounted: function mounted() {
    this.$root.appMenu('accounting');
    this.$root.appFetchGlobalsCountries(); //console.log('ContactsCreate: Component mounted');

    this.fetchAttributes();
  },
  watch: {
    $route: function $route() {
      this.fetchAttributes();
    }
  },
  methods: {
    fetchAttributes: function () {
      var _fetchAttributes = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                this.$root.loadingTxn = true;
                _context.next = 4;
                return axios.get(this.$route.fullPath).then(function (response) {
                  _this.$root.loadingTxn = false;
                  _this.pageTitle = response.data.pageTitle;
                  _this.urlPost = response.data.urlPost;
                  _this.attributes = response.data.attributes;
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
        }, _callee, this, [[0, 7]]);
      }));

      function fetchAttributes() {
        return _fetchAttributes.apply(this, arguments);
      }

      return fetchAttributes;
    }(),
    addContactPerson: function addContactPerson() {
      this.attributes.contact_persons.push({
        salutation: null,
        first_name: null,
        last_name: null,
        email: null,
        work_phone: null,
        mobile: null
      });
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
      var notice = new PNotify(PNotifySettings); //console.log(this.attributes);

      axios.post(currentObj.urlPost, this.attributes).then(function (response) {
        //PNotify.removeAll();
        PNotifySettings.text = response.data.messages.join("\n");

        if (response.data.status === true) {
          PNotifySettings.title = 'Success';
          PNotifySettings.type = 'success';
          PNotifySettings.addclass = 'bg-success-400 border-success-400';
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
  },
  ready: function ready() {},
  beforeUpdate: function beforeUpdate() {//console.log('beforeUpdate')
  },
  updated: function updated() {//console.log('updated:: dom updated -')
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/l-limitless-bs4/layout_2-ltr-default/users/Edit.vue?vue&type=template&id=6604c9f1&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/l-limitless-bs4/layout_2-ltr-default/users/Edit.vue?vue&type=template&id=6604c9f1& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
              _c("i", { staticClass: "icon-user-plus" }),
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
          _vm._m(0),
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
                    attrs: { to: "/users" }
                  },
                  [
                    _c("i", { staticClass: "icon-users2 mr-1" }),
                    _vm._v(
                      "\n                        Users\n                    "
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
                    staticClass: "max-width-820",
                    staticStyle: { "margin-bottom": "100px" },
                    attrs: {
                      id: "counterparty_update_form",
                      action: "",
                      method: "post",
                      autocomplete: "off"
                    },
                    on: { submit: _vm.formSubmit }
                  },
                  [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "card p-0 shadow-none border-0 offset-md-1"
                      },
                      [
                        _c("div", { staticClass: "card-body p-0" }, [
                          _c("div", { staticClass: "tab-content" }, [
                            _c(
                              "div",
                              {
                                staticClass: "tab-pane active",
                                attrs: { id: "bottom-divided-tab0" }
                              },
                              [
                                _c("fieldset", {}, [
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "label",
                                      {
                                        staticClass: "col-lg-2 col-form-label"
                                      },
                                      [
                                        _vm._v(
                                          "\n                                                Email\n                                            "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-lg-10" }, [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.attributes.email,
                                            expression: "attributes.email"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          readonly: "",
                                          placeholder: "Email"
                                        },
                                        domProps: {
                                          value: _vm.attributes.email
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.attributes,
                                              "email",
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
                                      {
                                        staticClass: "col-lg-2 col-form-label"
                                      },
                                      [
                                        _vm._v(
                                          "\n                                                Name:\n                                            "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "col-lg-2" },
                                      [
                                        _c("model-select", {
                                          staticClass:
                                            "form-control form-control-sm",
                                          attrs: {
                                            options: _vm.salutation,
                                            placeholder: "Salutation"
                                          },
                                          model: {
                                            value:
                                              _vm.attributes.details.salutation,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.attributes.details,
                                                "salutation",
                                                $$v
                                              )
                                            },
                                            expression:
                                              "attributes.details.salutation"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-lg-8" }, [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.attributes.name,
                                            expression: "attributes.name"
                                          }
                                        ],
                                        staticClass: "form-control ",
                                        attrs: {
                                          type: "text",
                                          placeholder: "Full name"
                                        },
                                        domProps: {
                                          value: _vm.attributes.name
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.attributes,
                                              "name",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ])
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "row" }, [
                                  _c("div", { staticClass: "col-md-6" }, [
                                    _c("fieldset", {}, [
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "badge badge-primary font-weight-bold "
                                        },
                                        [_vm._v("BILLING ADDRESS")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "form-group row mt-2" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "col-lg-12",
                                              attrs: { title: "Attention" }
                                            },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.attributes.details
                                                        .billing_address_attention,
                                                    expression:
                                                      "attributes.details.billing_address_attention"
                                                  }
                                                ],
                                                staticClass: "form-control ",
                                                attrs: {
                                                  type: "text",
                                                  value: "",
                                                  placeholder: "Attention"
                                                },
                                                domProps: {
                                                  value:
                                                    _vm.attributes.details
                                                      .billing_address_attention
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.attributes.details,
                                                      "billing_address_attention",
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
                                      _c(
                                        "div",
                                        {
                                          staticClass: "form-group row",
                                          attrs: { title: "Address" }
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "col-lg-12" },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.attributes.details
                                                        .billing_address_street1,
                                                    expression:
                                                      "attributes.details.billing_address_street1"
                                                  }
                                                ],
                                                staticClass:
                                                  "form-control  mb-2",
                                                attrs: {
                                                  type: "text",
                                                  value: "",
                                                  placeholder: "Street 1"
                                                },
                                                domProps: {
                                                  value:
                                                    _vm.attributes.details
                                                      .billing_address_street1
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.attributes.details,
                                                      "billing_address_street1",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("div", {
                                                staticClass: "clearfix"
                                              }),
                                              _vm._v(" "),
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.attributes.details
                                                        .billing_address_street2,
                                                    expression:
                                                      "attributes.details.billing_address_street2"
                                                  }
                                                ],
                                                staticClass: "form-control ",
                                                attrs: {
                                                  type: "text",
                                                  value: "",
                                                  placeholder: "Street 2"
                                                },
                                                domProps: {
                                                  value:
                                                    _vm.attributes.details
                                                      .billing_address_street2
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.attributes.details,
                                                      "billing_address_street2",
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
                                      _c(
                                        "div",
                                        {
                                          staticClass: "form-group row",
                                          attrs: { title: "City" }
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "col-lg-12" },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.attributes.details
                                                        .billing_address_city,
                                                    expression:
                                                      "attributes.details.billing_address_city"
                                                  }
                                                ],
                                                staticClass: "form-control ",
                                                attrs: {
                                                  type: "text",
                                                  value: "",
                                                  placeholder: "City"
                                                },
                                                domProps: {
                                                  value:
                                                    _vm.attributes.details
                                                      .billing_address_city
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.attributes.details,
                                                      "billing_address_city",
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
                                      _c(
                                        "div",
                                        {
                                          staticClass: "form-group row",
                                          attrs: { title: "State" }
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "col-lg-12" },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.attributes.details
                                                        .billing_address_state,
                                                    expression:
                                                      "attributes.details.billing_address_state"
                                                  }
                                                ],
                                                staticClass: "form-control ",
                                                attrs: {
                                                  type: "text",
                                                  value: "",
                                                  placeholder: "State"
                                                },
                                                domProps: {
                                                  value:
                                                    _vm.attributes.details
                                                      .billing_address_state
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.attributes.details,
                                                      "billing_address_state",
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
                                      _c(
                                        "div",
                                        {
                                          staticClass: "form-group row",
                                          attrs: { title: "Zip code" }
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "col-lg-12" },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.attributes.details
                                                        .billing_address_zip_code,
                                                    expression:
                                                      "attributes.details.billing_address_zip_code"
                                                  }
                                                ],
                                                staticClass: "form-control ",
                                                attrs: {
                                                  type: "text",
                                                  value: "",
                                                  placeholder: "Name"
                                                },
                                                domProps: {
                                                  value:
                                                    _vm.attributes.details
                                                      .billing_address_zip_code
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.attributes.details,
                                                      "billing_address_zip_code",
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
                                      _c(
                                        "div",
                                        {
                                          staticClass: "form-group row",
                                          attrs: { title: "Country" }
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "col-lg-12" },
                                            [
                                              _c("model-list-select", {
                                                attrs: {
                                                  list:
                                                    _vm.$root.globalsCountries,
                                                  "option-value": "value",
                                                  "option-text": "text",
                                                  placeholder: "Select country"
                                                },
                                                model: {
                                                  value:
                                                    _vm.attributes.details
                                                      .billing_address_country,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.attributes.details,
                                                      "billing_address_country",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "attributes.details.billing_address_country"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "form-group row hidden"
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "col-lg-12",
                                              attrs: { title: "Fax" }
                                            },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.attributes.details
                                                        .billing_address_fax,
                                                    expression:
                                                      "attributes.details.billing_address_fax"
                                                  }
                                                ],
                                                staticClass: "form-control ",
                                                attrs: {
                                                  type: "text",
                                                  value: "",
                                                  placeholder: "Name"
                                                },
                                                domProps: {
                                                  value:
                                                    _vm.attributes.details
                                                      .billing_address_fax
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.attributes.details,
                                                      "billing_address_fax",
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
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-md-6" }, [
                                    _c("fieldset", {}, [
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "badge badge-primary font-weight-bold "
                                        },
                                        [_vm._v("SHIPPING ADDRESS")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "form-group row mt-2" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "col-lg-12",
                                              attrs: { title: "Attention" }
                                            },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.attributes.details
                                                        .shipping_address_attention,
                                                    expression:
                                                      "attributes.details.shipping_address_attention"
                                                  }
                                                ],
                                                staticClass: "form-control ",
                                                attrs: {
                                                  type: "text",
                                                  value: "",
                                                  placeholder: "Attention"
                                                },
                                                domProps: {
                                                  value:
                                                    _vm.attributes.details
                                                      .shipping_address_attention
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.attributes.details,
                                                      "shipping_address_attention",
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
                                      _c(
                                        "div",
                                        { staticClass: "form-group row" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "col-lg-12",
                                              attrs: { title: "Address" }
                                            },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.attributes.details
                                                        .shipping_address_street1,
                                                    expression:
                                                      "attributes.details.shipping_address_street1"
                                                  }
                                                ],
                                                staticClass:
                                                  "form-control  mb-2",
                                                attrs: {
                                                  type: "text",
                                                  value: "",
                                                  placeholder: "Street 1"
                                                },
                                                domProps: {
                                                  value:
                                                    _vm.attributes.details
                                                      .shipping_address_street1
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.attributes.details,
                                                      "shipping_address_street1",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("div", {
                                                staticClass: "clearfix"
                                              }),
                                              _vm._v(" "),
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.attributes.details
                                                        .shipping_address_street2,
                                                    expression:
                                                      "attributes.details.shipping_address_street2"
                                                  }
                                                ],
                                                staticClass: "form-control ",
                                                attrs: {
                                                  type: "text",
                                                  value: "",
                                                  placeholder: "Street 2"
                                                },
                                                domProps: {
                                                  value:
                                                    _vm.attributes.details
                                                      .shipping_address_street2
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.attributes.details,
                                                      "shipping_address_street2",
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
                                      _c(
                                        "div",
                                        { staticClass: "form-group row" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "col-lg-12",
                                              attrs: { title: "City" }
                                            },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.attributes.details
                                                        .shipping_address_city,
                                                    expression:
                                                      "attributes.details.shipping_address_city"
                                                  }
                                                ],
                                                staticClass: "form-control ",
                                                attrs: {
                                                  type: "text",
                                                  value: "",
                                                  placeholder: "City"
                                                },
                                                domProps: {
                                                  value:
                                                    _vm.attributes.details
                                                      .shipping_address_city
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.attributes.details,
                                                      "shipping_address_city",
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
                                      _c(
                                        "div",
                                        { staticClass: "form-group row" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "col-lg-12",
                                              attrs: { title: "State" }
                                            },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.attributes.details
                                                        .shipping_address_state,
                                                    expression:
                                                      "attributes.details.shipping_address_state"
                                                  }
                                                ],
                                                staticClass: "form-control ",
                                                attrs: {
                                                  type: "text",
                                                  value: "",
                                                  placeholder: "State"
                                                },
                                                domProps: {
                                                  value:
                                                    _vm.attributes.details
                                                      .shipping_address_state
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.attributes.details,
                                                      "shipping_address_state",
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
                                      _c(
                                        "div",
                                        { staticClass: "form-group row" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "col-lg-12",
                                              attrs: { title: "Zip code" }
                                            },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.attributes.details
                                                        .shipping_address_zip_code,
                                                    expression:
                                                      "attributes.details.shipping_address_zip_code"
                                                  }
                                                ],
                                                staticClass: "form-control ",
                                                attrs: {
                                                  type: "text",
                                                  value: "",
                                                  placeholder: "Zip code"
                                                },
                                                domProps: {
                                                  value:
                                                    _vm.attributes.details
                                                      .shipping_address_zip_code
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.attributes.details,
                                                      "shipping_address_zip_code",
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
                                      _c(
                                        "div",
                                        { staticClass: "form-group row" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "col-lg-12",
                                              attrs: { title: "Country" }
                                            },
                                            [
                                              _c("model-list-select", {
                                                attrs: {
                                                  list:
                                                    _vm.$root.globalsCountries,
                                                  "option-value": "value",
                                                  "option-text": "text",
                                                  placeholder: "Select country"
                                                },
                                                model: {
                                                  value:
                                                    _vm.attributes.details
                                                      .shipping_address_country,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.attributes.details,
                                                      "shipping_address_country",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "attributes.details.shipping_address_country"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "form-group row hidden"
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "col-lg-12",
                                              attrs: { title: "Fax" }
                                            },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.attributes.details
                                                        .shipping_address_fax,
                                                    expression:
                                                      "attributes.details.shipping_address_fax"
                                                  }
                                                ],
                                                staticClass: "form-control ",
                                                attrs: {
                                                  type: "text",
                                                  value: "",
                                                  placeholder: "Fax"
                                                },
                                                domProps: {
                                                  value:
                                                    _vm.attributes.details
                                                      .shipping_address_fax
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.attributes.details,
                                                      "shipping_address_fax",
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
                                  ])
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "tab-pane",
                                attrs: { id: "bottom-divided-tab1" }
                              },
                              [
                                _c("fieldset", {}, [
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "label",
                                      {
                                        staticClass: "col-lg-2 col-form-label"
                                      },
                                      [
                                        _vm._v(
                                          "\n                                                Facebook\n                                            "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-lg-10" }, [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value:
                                              _vm.attributes.details
                                                .facebook_link,
                                            expression:
                                              "attributes.details.facebook_link"
                                          }
                                        ],
                                        staticClass: "form-control ",
                                        attrs: {
                                          type: "text",
                                          value: "",
                                          placeholder: "Facebook link"
                                        },
                                        domProps: {
                                          value:
                                            _vm.attributes.details.facebook_link
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.attributes.details,
                                              "facebook_link",
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
                                      {
                                        staticClass: "col-lg-2 col-form-label"
                                      },
                                      [
                                        _vm._v(
                                          "\n                                                Twitter\n                                            "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-lg-10" }, [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value:
                                              _vm.attributes.details
                                                .twitter_link,
                                            expression:
                                              "attributes.details.twitter_link"
                                          }
                                        ],
                                        staticClass: "form-control ",
                                        attrs: {
                                          type: "text",
                                          value: "",
                                          placeholder: "Twitter link"
                                        },
                                        domProps: {
                                          value:
                                            _vm.attributes.details.twitter_link
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.attributes.details,
                                              "twitter_link",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ])
                                  ])
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "tab-pane ",
                                attrs: { id: "bottom-divided-tab4" }
                              },
                              [
                                _c("fieldset", {}, [
                                  _c("div", { staticClass: "form-group row" }, [
                                    _vm._m(2),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-lg-12" }, [
                                      _c("textarea", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value:
                                              _vm.attributes.details.remarks,
                                            expression:
                                              "attributes.details.remarks"
                                          }
                                        ],
                                        staticClass: "form-control ",
                                        attrs: { placeholder: "Remarks" },
                                        domProps: {
                                          value: _vm.attributes.details.remarks
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.attributes.details,
                                              "remarks",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ])
                                  ])
                                ])
                              ]
                            )
                          ])
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c("label", { staticClass: "col-lg-1 col-form-label" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-10" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-danger font-weight-bold",
                            attrs: { type: "submit" }
                          },
                          [
                            _c("i", { staticClass: "icon-user-plus mr-1" }),
                            _vm._v(
                              " " +
                                _vm._s(_vm.pageTitle) +
                                "\n                            "
                            )
                          ]
                        )
                      ])
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
    return _c("div", { staticClass: "d-flex" }, [
      _c("div", { staticClass: "breadcrumb" }, [
        _c(
          "a",
          { staticClass: "breadcrumb-item", attrs: { href: "index.html" } },
          [_c("i", { staticClass: "icon-home2 mr-2" }), _vm._v(" Users")]
        ),
        _vm._v(" "),
        _c("span", { staticClass: "breadcrumb-item active" }, [_vm._v("Edit")])
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "card shadow-none rounded-0 border-0 mb-0 offset-md-1" },
      [
        _c("div", { staticClass: "card-body pb-0 pt-2 pl-0 pr-0" }, [
          _c(
            "ul",
            {
              staticClass:
                "nav nav-tabs nav-tabs-bottom border-bottom-0 font-weight-semibold"
            },
            [
              _c("li", { staticClass: "nav-item" }, [
                _c(
                  "a",
                  {
                    staticClass: "nav-link active",
                    attrs: {
                      href: "#bottom-divided-tab0",
                      "data-toggle": "tab"
                    }
                  },
                  [_vm._v("Basic & Address")]
                )
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "nav-item" }, [
                _c(
                  "a",
                  {
                    staticClass: "nav-link",
                    attrs: {
                      href: "#bottom-divided-tab1",
                      "data-toggle": "tab"
                    }
                  },
                  [_vm._v("Social Media Links")]
                )
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "nav-item" }, [
                _c(
                  "a",
                  {
                    staticClass: "nav-link",
                    attrs: {
                      href: "#bottom-divided-tab4",
                      "data-toggle": "tab"
                    }
                  },
                  [_vm._v("Remarks")]
                )
              ])
            ]
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "col-lg-12 col-form-label" }, [
      _c("span", { staticClass: "text-semibold" }, [_vm._v("Remarks")]),
      _vm._v(" (\n                                                "),
      _c("small", [_vm._v("For internal use")]),
      _vm._v(
        "\n                                                )\n                                            "
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/l-limitless-bs4/layout_2-ltr-default/users/Edit.vue":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/l-limitless-bs4/layout_2-ltr-default/users/Edit.vue ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_6604c9f1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=6604c9f1& */ "./resources/js/components/l-limitless-bs4/layout_2-ltr-default/users/Edit.vue?vue&type=template&id=6604c9f1&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/components/l-limitless-bs4/layout_2-ltr-default/users/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_6604c9f1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_6604c9f1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/l-limitless-bs4/layout_2-ltr-default/users/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/l-limitless-bs4/layout_2-ltr-default/users/Edit.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/l-limitless-bs4/layout_2-ltr-default/users/Edit.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/l-limitless-bs4/layout_2-ltr-default/users/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/l-limitless-bs4/layout_2-ltr-default/users/Edit.vue?vue&type=template&id=6604c9f1&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/l-limitless-bs4/layout_2-ltr-default/users/Edit.vue?vue&type=template&id=6604c9f1& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_6604c9f1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=6604c9f1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/l-limitless-bs4/layout_2-ltr-default/users/Edit.vue?vue&type=template&id=6604c9f1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_6604c9f1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_6604c9f1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);