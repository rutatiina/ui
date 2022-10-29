(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{"g/K6":function(t,e,s){"use strict";s.r(e);var a={components:{},data:function(){return{}},computed:{receiptTotalDue:function(){var t=this,e=0;return t.txnAttributes.items.forEach((function(s){void 0!==s.txn.balance&&(e+=t.rgNumber(s.txn.balance))})),e}},watch:{"txnAttributes.properties.date_range":function(){var t=this.txnAttributes.properties.date_range;void 0!==t&&(this.txnAttributes.properties.start_date=t[0],this.txnAttributes.properties.end_date=t[1])}},created:function(){this.pageTitle="Create Recurring Expense",this.pageAction="Create"},mounted:function(){this.txnTaxesAllInclusive=!0,this.txnCreateData(),this.txnFetchSuppliers("-initiate-"),this.txnFetchAccounts("-initiate-"),this.txnFetchTaxes(),this.txnFetchAccountsExpenses(),this.txnFetchAccountsPayment(),this.txnFetchPaymentModes()},methods:{expenseAccountInput:function(t){var e=this.txnAccountsExpenses.find((function(e){return e.code===t}));this.txnAttributes.debit_financial_account_code=t,this.txnAttributes.items[0].name=e.name,this.txnAttributes.items[0].description=e.name}},beforeUpdate:function(){},updated:function(){},destroyed:function(){this.txnTaxesAllInclusive=!1}},n=s("KHd+"),i=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content-wrapper"},[s("div",{staticClass:"page-header page-header-light"},[s("div",{staticClass:"page-header-content header-elements-md-inline"},[s("div",{staticClass:"page-title d-flex"},[s("h4",[s("i",{staticClass:"icon-file-plus"}),t._v("\n                        "+t._s(t.pageTitle)+"\n                    ")])]),t._v(" "),s("div",{staticClass:"header-elements"},[s("div",{staticClass:"breadcrumb justify-content-center"},[s("router-link",{staticClass:" btn btn-danger btn-sm font-weight-bold",attrs:{to:t.txnUrlStore}},[s("i",{staticClass:"icon-drawer3 mr-2"}),t._v("\n                            Recurring Expenses\n                        ")])],1)])]),t._v(" "),s("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[s("div",{staticClass:"d-flex"},[s("div",{staticClass:"breadcrumb"},[s("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[s("i",{staticClass:"icon-home2 mr-2"}),t._v(" "),s("span",{staticClass:"badge badge-primary font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(" "+t._s(t._f("truncate")(this.$root.tenant.name,30))+" ")])]),t._v(" "),s("span",{staticClass:"breadcrumb-item"},[t._v("Recurring Expenses")]),t._v(" "),s("span",{staticClass:"breadcrumb-item active"},[t._v(t._s(t.pageAction))])]),t._v(" "),t._m(0)])])]),t._v(" "),s("div",{staticClass:"content border-0 padding-0"},[s("div",{staticClass:"card shadow-none rounded-0 border-0"},[s("div",{staticClass:"card-body p-0"},[s("loading-animation"),t._v(" "),this.$root.loading?t._e():s("form",{staticClass:"max-width-1040",staticStyle:{"margin-bottom":"100px"},attrs:{action:"",method:"post",autocomplete:"off"},on:{submit:t.txnFormSubmit}},[s("fieldset",{attrs:{disabled:t.txnForn.disabled}},[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label text-danger"},[t._v("\n                                    Name *\n                                ")]),t._v(" "),s("div",{staticClass:"col-lg-5"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.txnAttributes.profile_name,expression:"txnAttributes.profile_name"}],staticClass:"form-control rounded-0",attrs:{type:"text",name:"reference",placeholder:"Enter profile name"},domProps:{value:t.txnAttributes.profile_name},on:{input:function(e){e.target.composing||t.$set(t.txnAttributes,"profile_name",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label text-danger"},[t._v("\n                                    Expense Account *\n                                ")]),t._v(" "),s("div",{staticClass:"col-lg-5"},[s("model-list-select",{staticClass:"rounded-0",attrs:{list:t.txnAccountsExpenses,"is-disabled":t.txnForn.disabled,"option-value":"code","option-text":"name",placeholder:"select account"},on:{input:t.expenseAccountInput},model:{value:t.txnAttributes.debit_financial_account_code,callback:function(e){t.$set(t.txnAttributes,"debit_financial_account_code",e)},expression:"txnAttributes.debit_financial_account_code"}})],1)]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-form-label col-lg-2 text-danger"},[t._v("Supplier / Vendor *")]),t._v(" "),s("div",{staticClass:"col-lg-6"},[s("model-list-select",{staticClass:"rounded-0",attrs:{list:t.txnContacts,"is-disabled":t.txnForn.disabled,"option-value":"id","option-text":"display_name",placeholder:"select contact"},on:{searchchange:t.txnFetchSuppliers,input:t.txnContactSelect},model:{value:t.txnAttributes.contact,callback:function(e){t.$set(t.txnAttributes,"contact",e)},expression:"txnAttributes.contact"}})],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.txnAttributes.contact_id,expression:"txnAttributes.contact_id"}],staticClass:"col-lg-1 p-0"},[s("model-list-select",{staticClass:"rounded-0",attrs:{list:t.txnAttributes.contact.currencies,"is-disabled":t.txnForn.disabled,"option-value":"code","option-text":"code",placeholder:"select currency"},model:{value:t.txnAttributes.contact.currency,callback:function(e){t.$set(t.txnAttributes.contact,"currency",e)},expression:"txnAttributes.contact.currency"}})],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.txnAttributes.contact_id&&t.txnAttributes.base_currency!==t.txnAttributes.quote_currency,expression:"txnAttributes.contact_id && txnAttributes.base_currency !== txnAttributes.quote_currency"}],staticClass:"col-lg-2 pr-0"},[s("div",{staticClass:"input-group",attrs:{title:"Exchange rate"}},[t._m(1),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.txnAttributes.exchange_rate,expression:"txnAttributes.exchange_rate"}],staticClass:"form-control text-right rounded-0",attrs:{type:"text",placeholder:"Exchange rate"},domProps:{value:t.txnAttributes.exchange_rate},on:{input:function(e){e.target.composing||t.$set(t.txnAttributes,"exchange_rate",e.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label text-danger"},[t._v("\n                                    Amount paid *\n                                ")]),t._v(" "),s("div",{staticClass:"col-lg-3"},[s("div",{staticClass:"input-group"},[s("span",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text font-weight-bold rounded-0"},[t._v(t._s(t.txnAttributes.base_currency))])]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.txnAttributes.items[0].amount,expression:"txnAttributes.items[0].amount",modifiers:{number:!0}}],staticClass:"form-control font-weight-semibold text-right rounded-0",attrs:{type:"text",placeholder:"Amount"},domProps:{value:t.txnAttributes.items[0].amount},on:{keyup:t.txnTotal,input:function(e){e.target.composing||t.$set(t.txnAttributes.items[0],"amount",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])]),t._v(" "),s("div",{staticClass:"col-lg-4"},[s("div",{staticClass:"row"},[s("label",{staticClass:"col-auto col-form-label text-right bg-light border rounded-0 border-right-0",staticStyle:{"white-space":"nowrap"}},[t._v("\n                                            Tax\n                                        ")]),t._v(" "),s("div",{staticClass:"col pl-0"},[s("multi-list-select",{staticClass:"rounded-0",attrs:{"is-disabled":t.txnForn.disabled,list:t.txnTaxes,"option-value":"id","option-text":"display_name","option-item-row":0,"selected-items":t.txnAttributes.items[0].selectedTaxes,placeholder:"select tax","show-count-of-selected-options":""},on:{select:t.txnItemTaxes}})],1)])])]),t._v(" "),t._l(t.txnAttributes.taxes,(function(e){return s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label"}),t._v(" "),s("div",{staticClass:"col-lg-3 pl-4 border-left-2 border-left-indigo-400 rounded-0"},[s("div",{staticClass:"input-group input-group-sm"},[s("span",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text font-weight-bold rounded-0"},[t._v(t._s(t.txnAttributes.base_currency))])]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.number",value:e.total,expression:"tax.total",modifiers:{number:!0}}],staticClass:"rg-txn-item-row-total form-control form-control-sm text-right rounded-0",attrs:{type:"text",placeholder:"0.00"},domProps:{value:e.total},on:{input:function(s){s.target.composing||t.$set(e,"total",t._n(s.target.value))},blur:function(e){return t.$forceUpdate()}}})])]),t._v(" "),s("div",{staticClass:"col-lg-4 "},[s("div",{staticClass:"h-100 align-baseline"},[s("div",{staticClass:"float-left pt-1 font-weight-semibold"},[t._v(t._s(e.name))]),t._v(" "),s("button",{staticClass:"btn bg-danger bg-transparent text-danger btn-icon float-right rounded-bottom-0",attrs:{type:"button",title:"Remove Tax"},on:{click:function(s){return t.txnItemsTaxRemove(e.id)}}},[s("i",{staticClass:"icon-cross3"})])])])])})),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label text-danger"},[t._v("\n                                    Payment mode *\n                                ")]),t._v(" "),s("div",{staticClass:"col-lg-3"},[s("model-select",{staticClass:"rounded-0",attrs:{"is-disabled":t.txnForn.disabled,options:t.txnPaymentModes,placeholder:"Select payment mode"},model:{value:t.txnAttributes.payment_mode,callback:function(e){t.$set(t.txnAttributes,"payment_mode",e)},expression:"txnAttributes.payment_mode"}})],1),t._v(" "),s("div",{staticClass:"col-lg-4"},[s("div",{staticClass:"row"},[s("label",{staticClass:"col-auto col-form-label text-right text-danger bg-light border rounded-0 border-right-0",staticStyle:{"white-space":"nowrap"}},[t._v("\n                                            Credit *\n                                        ")]),t._v(" "),s("div",{staticClass:"col pl-0"},[s("model-list-select",{staticClass:"rounded-0",attrs:{list:t.txnAccountsPayment,"is-disabled":t.txnForn.disabled,"option-value":"code","option-text":"name",placeholder:"select account"},model:{value:t.txnAttributes.credit_financial_account_code,callback:function(e){t.$set(t.txnAttributes,"credit_financial_account_code",e)},expression:"txnAttributes.credit_financial_account_code"}})],1)])])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label text-danger"},[t._v("\n                                    Description *\n                                ")]),t._v(" "),s("div",{staticClass:"col-lg-7"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.txnAttributes.items[0].description,expression:"txnAttributes.items[0].description"}],staticClass:"form-control rounded-0",attrs:{rows:"2",placeholder:"Description"},domProps:{value:t.txnAttributes.items[0].description},on:{input:function(e){e.target.composing||t.$set(t.txnAttributes.items[0],"description",e.target.value)}}})])]),t._v(" "),s("txn-recurring-fields"),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"text-left col-md-10 offset-md-2 p-0"},[s("button",{staticClass:"btn btn-danger font-weight-bold",attrs:{type:"submit"}},[s("i",{staticClass:"icon-file-plus2 mr-1"}),t._v("\n                                    Save recurring expense |\n                                    "),s("span",{staticClass:"font-weight-semibold"},[t._v("\n                                        "+t._s(t.$root.numberFormat(t.txnAttributes.total))+"\n                                        "+t._s(t.txnAttributes.base_currency)+"\n                                    ")])])])],2)])],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[this._v("XR")])])}],!1,null,null,null);e.default=i.exports}}]);