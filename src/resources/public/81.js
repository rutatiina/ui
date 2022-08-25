(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{bJCl:function(t,e,s){"use strict";s.r(e);var a={data:function(){return{loadingContactInvoices:!1}},computed:{receiptTotalDue:function(){var t=this,e=0;return t.txnAttributes.items.forEach((function(s){void 0!==s.txn.balance&&(e+=t.rgNumber(s.txn.balance))})),e}},watch:{},created:function(){this.pageTitle="Create Sales Order",this.pageAction="Create"},mounted:function(){this.$root.appMenu("accounting"),this.txnTaxesAllIncludive=!0,this.txnCreateData(),this.txnFetchSuppliers("-initiate-"),this.txnFetchAccounts("-initiate-"),this.txnFetchTaxes(),this.txnFetchAccountsExpenses(),this.txnFetchAccountsPayment(),this.txnFetchPaymentModes()},methods:{expenseAccountInput:function(t){var e=this.txnAccountsExpenses.find((function(e){return e.code===t}));this.txnAttributes.debit_financial_account_code=t,this.txnAttributes.items[0].name=e.name,this.txnAttributes.items[0].description=e.name}},beforeUpdate:function(){},updated:function(){},destroyed:function(){this.txnTaxesAllIncludive=!1}},n=s("KHd+"),i=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content-wrapper"},[s("div",{staticClass:"page-header page-header-light"},[s("div",{staticClass:"page-header-content header-elements-md-inline"},[s("div",{staticClass:"page-title d-flex"},[s("h4",[s("i",{staticClass:"icon-file-plus"}),t._v("\n                    "+t._s(t.pageTitle)+"\n                ")])]),t._v(" "),s("div",{staticClass:"header-elements"},[s("div",{staticClass:"breadcrumb justify-content-center"},[s("router-link",{staticClass:" btn btn-danger btn-sm font-weight-bold",attrs:{to:t.txnUrlStore}},[s("i",{staticClass:"icon-drawer3 mr-2"}),t._v("\n                        Expenses\n                    ")])],1)])]),t._v(" "),s("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[s("div",{staticClass:"d-flex"},[s("div",{staticClass:"breadcrumb"},[s("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[s("i",{staticClass:"icon-home2 mr-2"}),t._v(" "),s("span",{staticClass:"badge badge-primary font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(" "+t._s(t._f("truncate")(this.$root.tenant.name,30))+" ")])]),t._v(" "),s("span",{staticClass:"breadcrumb-item"},[t._v("Expenses")]),t._v(" "),s("span",{staticClass:"breadcrumb-item active"},[t._v(t._s(t.pageAction))])]),t._v(" "),t._m(0)])])]),t._v(" "),s("div",{staticClass:"content border-0 padding-0"},[s("div",{staticClass:"card shadow-none rounded-0 border-0"},[s("div",{staticClass:"card-body p-0"},[s("loading-animation"),t._v(" "),this.$root.loading?t._e():s("form",{staticClass:"max-width-1040",staticStyle:{"margin-bottom":"100px"},attrs:{action:"",method:"post",autocomplete:"off"},on:{submit:t.txnFormSubmit}},[s("fieldset",{attrs:{disabled:t.txnForn.disabled}},[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label text-danger"},[t._v("\n                                Expense Account *\n                            ")]),t._v(" "),s("div",{staticClass:"col-lg-5"},[s("model-list-select",{staticClass:"rounded-0",attrs:{list:t.txnAccountsExpenses,"is-disabled":t.txnForn.disabled,"option-value":"code","option-text":"name",placeholder:"select account"},on:{input:t.expenseAccountInput},model:{value:t.txnAttributes.debit_financial_account_code,callback:function(e){t.$set(t.txnAttributes,"debit_financial_account_code",e)},expression:"txnAttributes.debit_financial_account_code"}})],1)]),t._v(" "),s("div",{staticClass:"form-group row"},[t._m(1),t._v(" "),s("div",{staticClass:"col-lg-2",attrs:{title:"Invoice date"}},[s("date-picker",{staticClass:"font-weight-bold w-100 h-100 rounded-0",attrs:{valueType:"format",lang:t.vue2DatePicker.lang,placeholder:"Invoice date"},model:{value:t.txnAttributes.date,callback:function(e){t.$set(t.txnAttributes,"date",e)},expression:"txnAttributes.date"}})],1),t._v(" "),s("div",{staticClass:"col-lg-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.txnAttributes.reference,expression:"txnAttributes.reference"}],staticClass:"form-control rounded-0",attrs:{type:"text",name:"reference",placeholder:"Enter reference"},domProps:{value:t.txnAttributes.reference},on:{input:function(e){e.target.composing||t.$set(t.txnAttributes,"reference",e.target.value)}}})])])]),t._v(" "),s("fieldset",{staticClass:"select_contact_required",attrs:{id:"fieldset_select_contact"}},[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-form-label col-lg-2 text-danger text-danger"},[t._v("Supplier / Vendor *")]),t._v(" "),s("div",{staticClass:"col-lg-6"},[s("model-list-select",{staticClass:"rounded-0",attrs:{list:t.txnContacts,"is-disabled":t.txnForn.disabled,"option-value":"id","option-text":"display_name",placeholder:"select contact"},on:{searchchange:t.txnFetchSuppliers,input:t.txnContactSelect},model:{value:t.txnAttributes.contact,callback:function(e){t.$set(t.txnAttributes,"contact",e)},expression:"txnAttributes.contact"}})],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.txnAttributes.contact_id,expression:"txnAttributes.contact_id"}],staticClass:"col-lg-1 p-0"},[s("model-list-select",{staticClass:"rounded-0",attrs:{list:t.txnAttributes.contact.currencies,"is-disabled":t.txnForn.disabled,"option-value":"code","option-text":"code",placeholder:"select currency"},model:{value:t.txnAttributes.contact.currency,callback:function(e){t.$set(t.txnAttributes.contact,"currency",e)},expression:"txnAttributes.contact.currency"}})],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.txnAttributes.contact_id&&t.txnAttributes.base_currency!==t.txnAttributes.quote_currency,expression:"txnAttributes.contact_id && txnAttributes.base_currency !== txnAttributes.quote_currency"}],staticClass:"col-lg-2 pr-0"},[s("div",{staticClass:"input-group",attrs:{title:"Exchange rate"}},[t._m(2),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.txnAttributes.exchange_rate,expression:"txnAttributes.exchange_rate"}],staticClass:"form-control text-right rounded-0",attrs:{type:"text",placeholder:"Exchange rate"},domProps:{value:t.txnAttributes.exchange_rate},on:{input:function(e){e.target.composing||t.$set(t.txnAttributes,"exchange_rate",e.target.value)}}})])])])]),t._v(" "),s("fieldset",[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label text-danger"},[t._v("\n                                Amount paid *\n                            ")]),t._v(" "),s("div",{staticClass:"col-lg-3"},[s("div",{staticClass:"input-group"},[s("span",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text font-weight-bold rounded-0"},[t._v(t._s(t.txnAttributes.base_currency))])]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.txnAttributes.items[0].amount,expression:"txnAttributes.items[0].amount"}],staticClass:"form-control font-weight-semibold text-right rounded-0",attrs:{type:"text",placeholder:"Amount"},domProps:{value:t.txnAttributes.items[0].amount},on:{keyup:t.txnTotal,input:function(e){e.target.composing||t.$set(t.txnAttributes.items[0],"amount",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"col-lg-4"},[s("div",{staticClass:"row"},[s("label",{staticClass:"col-auto col-form-label text-right bg-light border rounded-0 border-right-0",staticStyle:{"white-space":"nowrap"}},[t._v("\n                                        Tax\n                                    ")]),t._v(" "),s("div",{staticClass:"col pl-0 pr-0"},[s("multi-list-select",{staticClass:"rounded-0",attrs:{"is-disabled":t.txnForn.disabled,list:t.txnTaxes,"option-value":"id","option-text":"display_name","option-item-row":0,"selected-items":t.txnAttributes.items[0].selectedTaxes,placeholder:"select tax","show-count-of-selected-options":""},on:{select:t.txnItemTaxes}})],1)])])]),t._v(" "),t._l(t.txnAttributes.taxes,(function(e){return s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label"}),t._v(" "),s("div",{staticClass:"col-lg-3 pl-4 border-left-2 border-left-indigo-400 rounded-0"},[s("div",{staticClass:"input-group input-group-sm"},[s("span",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text font-weight-bold rounded-0"},[t._v(t._s(t.txnAttributes.base_currency))])]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.total,expression:"tax.total"}],staticClass:"rg-txn-item-row-total form-control form-control-sm text-right rounded-0",attrs:{type:"text",placeholder:"0.00"},domProps:{value:e.total},on:{input:function(s){s.target.composing||t.$set(e,"total",s.target.value)}}})])]),t._v(" "),s("div",{staticClass:"col-lg-4 "},[s("div",{staticClass:"h-100 align-baseline"},[s("div",{staticClass:"float-left pt-1 font-weight-semibold"},[t._v(t._s(e.name))]),t._v(" "),s("button",{staticClass:"btn bg-danger bg-transparent text-danger btn-icon float-right",attrs:{type:"button",title:"Remove Tax"},on:{click:function(s){return t.txnItemsTaxRemove(e.id)}}},[s("i",{staticClass:"icon-cross3"})])])])])})),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label text-danger"},[t._v("\n                                Payment mode *\n                            ")]),t._v(" "),s("div",{staticClass:"col-lg-3"},[s("model-select",{staticClass:"rounded-0",attrs:{"is-disabled":t.txnForn.disabled,options:t.txnPaymentModes,placeholder:"Select payment mode"},model:{value:t.txnAttributes.payment_mode,callback:function(e){t.$set(t.txnAttributes,"payment_mode",e)},expression:"txnAttributes.payment_mode"}})],1),t._v(" "),s("div",{staticClass:"col-lg-4"},[s("div",{staticClass:"row"},[s("label",{staticClass:"col-auto col-form-label text-right text-danger bg-light border rounded-0 border-right-0",staticStyle:{"white-space":"nowrap"}},[t._v("\n                                        Credit *\n                                    ")]),t._v(" "),s("div",{staticClass:"col pl-0 pr-0"},[s("model-list-select",{staticClass:"rounded-0",attrs:{list:t.txnAccountsPayment,"is-disabled":t.txnForn.disabled,"option-value":"code","option-text":"name",placeholder:"select account"},model:{value:t.txnAttributes.credit_financial_account_code,callback:function(e){t.$set(t.txnAttributes,"credit_financial_account_code",e)},expression:"txnAttributes.credit_financial_account_code"}})],1)])])])],2),t._v(" "),s("fieldset",{staticClass:"mt-3"},[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label text-danger"},[t._v("\n                                Description*\n                            ")]),t._v(" "),s("div",{staticClass:"col-lg-7 pr-0"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.txnAttributes.items[0].description,expression:"txnAttributes.items[0].description"}],staticClass:"form-control rounded-0",attrs:{rows:"2",placeholder:"Description"},domProps:{value:t.txnAttributes.items[0].description},on:{input:function(e){e.target.composing||t.$set(t.txnAttributes.items[0],"description",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-form-label col-lg-2"},[t._v("Attach files")]),t._v(" "),s("div",{staticClass:"col-lg-10"},[s("input",{ref:"filesAttached",staticClass:"form-control border-0 pl-0 pt-1 pr-1 pb-1 h-auto",attrs:{type:"file",multiple:""}})])])]),t._v(" "),s("div",{staticClass:"text-left col-md-10 offset-md-2 p-0"},[s("div",{staticClass:"btn-group ml-1"},[t._m(3),t._v(" "),s("div",{staticClass:"dropdown-menu dropdown-menu-left"},[s("a",{staticClass:"dropdown-item",attrs:{href:"/"},on:{click:function(e){return e.preventDefault(),t.txnOnSave("draft",!1)}}},[s("i",{staticClass:"icon-file-text3"}),t._v(" Save as draft\n                                ")]),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"/"},on:{click:function(e){return e.preventDefault(),t.txnOnSave("approved",!1)}}},[s("i",{staticClass:"icon-file-check2"}),t._v(" Save and approve\n                                ")]),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"/"},on:{click:function(e){return e.preventDefault(),t.txnOnSave("approved",!0)}}},[s("i",{staticClass:"icon-mention"}),t._v(" Save, approve and send\n                                ")])])]),t._v(" "),s("button",{staticClass:"btn btn-danger font-weight-bold",attrs:{type:"submit"}},[s("i",{staticClass:"icon-file-plus2 mr-1"}),t._v("\n                            "+t._s(t.txnSubmitBtnText)+" |\n                            "),s("span",{staticClass:"font-weight-semibold"},[t._v("\n                                "+t._s(t.rgNumberFormat(t.txnAttributes.total,2))+"\n                                "+t._s(t.txnAttributes.base_currency)+"\n                            ")])])])])],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"col-lg-2 col-form-label"},[e("span",{staticClass:"text-danger"},[this._v("Date *")]),this._v(" & Reference\n                            ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[this._v("XR")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-outline bg-purple-300 border-purple-300 text-purple-800 btn-icon border-2 dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown"}},[e("i",{staticClass:"icon-cog"})])}],!1,null,null,null);e.default=i.exports}}]);