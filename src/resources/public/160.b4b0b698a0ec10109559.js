(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{RkXI:function(t,e,s){"use strict";s.r(e);var a=s("o0o1"),n=s.n(a);function i(t,e,s,a,n,i,o){try{var c=t[i](o),r=c.value}catch(t){return void s(t)}c.done?e(r):Promise.resolve(r).then(a,n)}function o(t){return function(){var e=this,s=arguments;return new Promise((function(a,n){var o=t.apply(e,s);function c(t){i(o,a,n,c,r,"next",t)}function r(t){i(o,a,n,c,r,"throw",t)}c(void 0)}))}}var c={data:function(){return{loadingContactInvoices:!1,receiptContacts:[],receiptOnInvoices:!0,receiptAutoSetItemsTotalCheckbox:!1,receiptDebitAccounts:[],receiptAmountUnallocated:0,txnAttributes:{total:0,items:[]}}},computed:{receiptTotalDue:function(){var t=this,e=0;return t.txnAttributes.items.forEach((function(s){void 0!==s.invoice&&void 0!==s.invoice.balance&&(e+=t.rgNumber(s.invoice.balance))})),e}},watch:{receiptContacts:function(){this.fetchContactInvoices()},receiptAutoSetItemsTotalCheckbox:function(){this.receiptAutoSetItemsTotal()},"txnAttributes.total":function(){this.receiptAutoSetItemsTotal()}},created:function(){this.pageTitle="Edit receipt",this.pageAction="Edit"},mounted:function(){this.receiptEditData(),this.txnFetchCustomers("-initiate-"),this.fetchReceiptDebitAccounts(),this.txnFetchPaymentModes()},methods:{receiptEditData:function(){var t=this;return o(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.get(t.$route.fullPath).then((function(e){t.pageTitle=e.data.pageTitle,t.pageAction=e.data.pageAction,t.txnAttributes=e.data.txnAttributes,t.txnUrlStore=e.data.txnUrlStore,t.txnOnSave(e.data.txnAttributes.status,!1)})).catch((function(t){console.log(t)})).finally((function(t){}));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()},fetchContactInvoices:function(){var t=this;return o(n.a.mark((function e(){var s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=[],t.receiptContacts.forEach((function(t){s.push(t.id)})),0!==s.length){e.next=6;break}return t.loadingContactInvoices=!1,t.txnAttributes.items=[],e.abrupt("return",!1);case 6:return e.prev=6,t.loadingContactInvoices=!0,e.next=10,axios.post("/payments-received/invoices",{contact_ids:s}).then((function(e){t.loadingContactInvoices=!1,!0===e.data.status?(t.txnAttributes.items=e.data.items,t.receiptAutoSetItemsTotal()):t.txnAttributes.items=[]})).catch((function(t){console.log(t)})).finally((function(t){}));case 10:return e.abrupt("return",e.sent);case 13:e.prev=13,e.t0=e.catch(6),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[6,13]])})))()},fetchReceiptDebitAccounts:function(){var t=this;return o(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.post("/payments-received/debit-accounts").then((function(e){t.receiptDebitAccounts=e.data})).catch((function(t){console.log(t)})).finally((function(t){}));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()},receiptContactsOnSelect:function(t,e){this.receiptContacts=t},receiptContactInput:function(t,e){this.txnContactSelect(t,e),this.receiptContacts=[],this.receiptContacts.push(t)},receiptAutoSetItemsTotal:function(){var t=this;if(this.receiptAutoSetItemsTotalCheckbox){var e=this.rgNumber(this.txnAttributes.total),s=0;this.txnAttributes.items.forEach((function(a){a.amount=0,a.paidInFull=!1,s=t.rgNumber(a.invoice.balance),e>=s?a.amount=s.toFixed(2):e<s&&e>0&&(a.amount=e.toFixed(2)),e=t.rgNumber(t.rgNumber(e)-t.rgNumber(s))}))}this.receiptItemsTotal()},receiptItemsTotal:function(){var t=this,e=0;t.txnAttributes.items.forEach((function(s){e+=t.rgNumber(s.amount)})),t.receiptAmountUnallocated=t.txnAttributes.total-e},receiptItemRateReset:function(t){this.txnAttributes.items[t].amount=0,this.txnAttributes.items[t].paidInFull=!1,this.receiptAutoSetItemsTotalCheckbox=!1,this.receiptItemsTotal()},receiptItemPaidInFull:function(t){this.receiptAutoSetItemsTotalCheckbox=!1,this.txnAttributes.items[t].paidInFull&&(this.txnAttributes.items[t].amount=this.rgNumber(this.txnAttributes.items[t].invoice.balance).toFixed(this.$root.tenant.decimal_places)),this.receiptItemsTotal()},receiptAllItemsRateReset:function(){this.txnAttributes.items.forEach((function(t){t.amount=0,t.paidInFull=!1})),this.receiptAutoSetItemsTotalCheckbox=!1,this.receiptItemsTotal()},receiptAllItemsPaidInFull:function(){var t=this;t.receiptAutoSetItemsTotalCheckbox=!1,t.txnAttributes.items.forEach((function(e){e.paidInFull=!0,e.amount=t.rgNumber(e.invoice.balance).toFixed(t.$root.tenant.decimal_places)})),t.receiptItemsTotal()}},beforeUpdate:function(){},updated:function(){},destroyed:function(){}},r=s("KHd+"),l=Object(r.a)(c,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content-wrapper"},[s("div",{staticClass:"page-header page-header-light"},[s("div",{staticClass:"page-header-content header-elements-md-inline"},[s("div",{staticClass:"page-title d-flex"},[s("h4",[s("i",{staticClass:"icon-file-plus"}),t._v("\n                        "+t._s(t.pageTitle)+"\n                    ")])]),t._v(" "),s("div",{staticClass:"header-elements"},[s("div",{staticClass:"breadcrumb justify-content-center"},[s("router-link",{staticClass:" btn btn-danger btn-sm rounded-round font-weight-bold",attrs:{to:t.txnUrlStore}},[s("i",{staticClass:"icon-drawer3 mr-2"}),t._v("\n                            Receipts\n                        ")])],1)])]),t._v(" "),s("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[s("div",{staticClass:"d-flex"},[s("div",{staticClass:"breadcrumb"},[s("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[s("i",{staticClass:"icon-home2 mr-2"}),t._v(" "),s("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(" "+t._s(t._f("truncate")(this.$root.tenant.name,30))+" ")])]),t._v(" "),s("span",{staticClass:"breadcrumb-item"},[t._v("Receipt")]),t._v(" "),s("span",{staticClass:"breadcrumb-item active"},[t._v(t._s(t.pageAction))])]),t._v(" "),t._m(0)])])]),t._v(" "),s("div",{staticClass:"content border-0 padding-0"},[s("div",{staticClass:"card shadow-none rounded-0 border-0"},[s("div",{staticClass:"card-body p-0"},[s("loading-animation"),t._v(" "),this.$root.loading?t._e():s("form",{staticClass:"max-width-1040",staticStyle:{"margin-bottom":"100px"},attrs:{action:"",method:"post",autocomplete:"off"},on:{submit:t.txnFormSubmit}},[s("fieldset",{staticClass:"select_contact_required",attrs:{id:"fieldset_select_contact"}},[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-form-label col-lg-2 text-danger text-danger"},[t._v("Customer*")]),t._v(" "),s("div",{staticClass:"col-lg-5"},[s("model-list-select",{staticClass:"rounded-0",attrs:{list:t.txnContacts,"option-value":"id","option-text":"display_name",placeholder:"select contact"},on:{searchchange:t.txnFetchCustomers,input:t.receiptContactInput},model:{value:t.txnAttributes.contact,callback:function(e){t.$set(t.txnAttributes,"contact",e)},expression:"txnAttributes.contact"}})],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.txnAttributes.contact_id,expression:"txnAttributes.contact_id"}],staticClass:"col-lg-1 p-0"},[s("model-list-select",{staticClass:"rounded-0",attrs:{list:t.txnAttributes.contact.currencies,"option-value":"code","option-text":"code",placeholder:"select currency"},model:{value:t.txnAttributes.contact.currency,callback:function(e){t.$set(t.txnAttributes.contact,"currency",e)},expression:"txnAttributes.contact.currency"}})],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.txnAttributes.contact_id&&t.txnAttributes.base_currency!=t.txnAttributes.quote_currency,expression:"txnAttributes.contact_id && txnAttributes.base_currency != txnAttributes.quote_currency"}],staticClass:"col-lg-3 pr-0"},[s("div",{staticClass:"input-group"},[t._m(1),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.txnAttributes.exchange_rate,expression:"txnAttributes.exchange_rate"}],staticClass:"form-control text-right rounded-0",attrs:{type:"text",placeholder:"Exchange rate"},domProps:{value:t.txnAttributes.exchange_rate},on:{input:function(e){e.target.composing||t.$set(t.txnAttributes,"exchange_rate",e.target.value)}}})])])])]),t._v(" "),s("fieldset",{},[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label text-danger"},[t._v("\n                                    Receipt # & Date *\n                                ")]),t._v(" "),s("div",{staticClass:"col-lg-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.txnAttributes.number,expression:"txnAttributes.number"}],staticClass:"form-control rounded-0",attrs:{type:"text",name:"number",placeholder:"Offer number"},domProps:{value:t.txnAttributes.number},on:{input:function(e){e.target.composing||t.$set(t.txnAttributes,"number",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"col-lg-2",attrs:{title:"Invoice date"}},[s("date-picker",{staticClass:"font-weight-bold rounded-0 w-100 h-100",attrs:{valueType:"format",lang:t.vue2DatePicker.lang,placeholder:"Invoice date"},model:{value:t.txnAttributes.date,callback:function(e){t.$set(t.txnAttributes,"date",e)},expression:"txnAttributes.date"}})],1)]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label"},[t._v("\n                                    Reference\n                                ")]),t._v(" "),s("div",{staticClass:"col-lg-5"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.txnAttributes.reference,expression:"txnAttributes.reference"}],staticClass:"form-control rounded-0",attrs:{type:"text",name:"reference",placeholder:"Enter reference"},domProps:{value:t.txnAttributes.reference},on:{input:function(e){e.target.composing||t.$set(t.txnAttributes,"reference",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label text-danger"},[t._v("\n                                    Amount received*\n                                ")]),t._v(" "),s("div",{staticClass:"col-lg-5"},[s("div",{staticClass:"input-group"},[s("span",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text font-weight-bold rounded-0"},[t._v("\n                                                "+t._s(t.txnAttributes.base_currency)+"\n                                            ")])]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.txnAttributes.total,expression:"txnAttributes.total"}],staticClass:"form-control font-weight-semibold text-right rounded-0",attrs:{type:"text",placeholder:"Amount received"},domProps:{value:t.txnAttributes.total},on:{input:function(e){e.target.composing||t.$set(t.txnAttributes,"total",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"col-lg-5 col-form-label"},[s("div",{staticClass:"custom-control custom-checkbox custom-control-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.receiptAutoSetItemsTotalCheckbox,expression:"receiptAutoSetItemsTotalCheckbox"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"txn-auto-pay"},domProps:{checked:Array.isArray(t.receiptAutoSetItemsTotalCheckbox)?t._i(t.receiptAutoSetItemsTotalCheckbox,null)>-1:t.receiptAutoSetItemsTotalCheckbox},on:{change:function(e){var s=t.receiptAutoSetItemsTotalCheckbox,a=e.target,n=!!a.checked;if(Array.isArray(s)){var i=t._i(s,null);a.checked?i<0&&(t.receiptAutoSetItemsTotalCheckbox=s.concat([null])):i>-1&&(t.receiptAutoSetItemsTotalCheckbox=s.slice(0,i).concat(s.slice(i+1)))}else t.receiptAutoSetItemsTotalCheckbox=n}}}),t._v(" "),s("label",{staticClass:"custom-control-label",attrs:{for:"txn-auto-pay"}},[t._v("Auto pay invoice(s)")])])])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label text-danger"},[t._v("\n                                    Payment mode*\n                                ")]),t._v(" "),s("div",{staticClass:"col-lg-5"},[s("model-select",{staticClass:"rounded-0",attrs:{options:t.txnPaymentModes,placeholder:"Select payment mode"},model:{value:t.txnAttributes.payment_mode,callback:function(e){t.$set(t.txnAttributes,"payment_mode",e)},expression:"txnAttributes.payment_mode"}})],1),t._v(" "),s("label",{staticClass:"col-lg-1 col-form-label text-right bg-light border rounded-left border-right-0 text-danger",staticStyle:{"white-space":"nowrap"}},[t._v("\n                                    Deposit to*\n                                ")]),t._v(" "),s("div",{staticClass:"col-lg-4 pl-0"},[s("model-list-select",{staticClass:"rounded-0",attrs:{list:t.receiptDebitAccounts,"option-value":"code","option-text":"name",placeholder:"select account"},model:{value:t.txnAttributes.debit_financial_account_code,callback:function(e){t.$set(t.txnAttributes,"debit_financial_account_code",e)},expression:"txnAttributes.debit_financial_account_code"}})],1)]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label"}),t._v(" "),s("div",{staticClass:"col-lg-5"},[s("div",{staticClass:"custom-control custom-checkbox custom-control-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.receiptOnInvoices,expression:"receiptOnInvoices"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"txn-is-recurring"},domProps:{checked:Array.isArray(t.receiptOnInvoices)?t._i(t.receiptOnInvoices,null)>-1:t.receiptOnInvoices},on:{change:function(e){var s=t.receiptOnInvoices,a=e.target,n=!!a.checked;if(Array.isArray(s)){var i=t._i(s,null);a.checked?i<0&&(t.receiptOnInvoices=s.concat([null])):i>-1&&(t.receiptOnInvoices=s.slice(0,i).concat(s.slice(i+1)))}else t.receiptOnInvoices=n}}}),t._v(" "),s("label",{staticClass:"custom-control-label",attrs:{for:"txn-is-recurring"}},[t._v("Make receipt for\n                                            Invoice(s) issued.")])])])])]),t._v(" "),t.receiptOnInvoices?s("div",{staticClass:"card mb-0"},[s("fieldset",[s("div",{staticClass:"form-group row mb-0 mt-0"},[s("label",{staticClass:"col-lg-2 col-form-label text-right border-0 rounded-left",staticStyle:{"white-space":"nowrap"}},[t._v("\n                                        Show invoices to:\n                                    ")]),t._v(" "),s("div",{staticClass:"col-lg-10"},[s("multi-list-select",{staticClass:"border-0 rounded-0",attrs:{list:t.txnContacts,"option-value":"id","option-text":"display_name","selected-items":t.receiptContacts,placeholder:"Select customer / contact"},on:{select:t.receiptContactsOnSelect,searchchange:t.txnFetchContacts}})],1)])]),t._v(" "),s("hr",{staticClass:"m-0"}),t._v(" "),s("table",{staticClass:"table"},[s("thead",{staticClass:"thead-default"},[s("tr",[t._m(2),t._v(" "),s("th",{staticClass:"h6",attrs:{width:""}},[t._v("\n                                        Invoice#\n                                        "),s("small",{staticClass:"pull-right pt-5"},[s("a",{attrs:{href:"/"},on:{click:function(e){return e.preventDefault(),t.receiptAllItemsPaidInFull(e)}}},[t._v("(Pay all\n                                                fully)")])])]),t._v(" "),s("th",{staticClass:"h6 text-right",attrs:{width:""}},[t._v("Invoice amount")]),t._v(" "),s("th",{staticClass:"h6 text-right",attrs:{width:""}},[t._v("Amount due")]),t._v(" "),s("th",{staticClass:"h6 text-left",attrs:{width:""}},[t._v("\n                                        Receipt amount\n                                        "),s("small",{staticClass:"pull-right pt-5"},[s("a",{attrs:{href:"/"},on:{click:function(e){return e.preventDefault(),t.receiptAllItemsRateReset(e)}}},[t._v("(Clear\n                                                amounts)")])])])])]),t._v(" "),s("tbody",[t.loadingContactInvoices?s("tr",[t._m(3)]):t._e(),t._v(" "),t.loadingContactInvoices||"object"==typeof t.txnAttributes.contact?t._e():s("tr",[t._m(4)]),t._v(" "),!t.loadingContactInvoices&&t.receiptContacts.length>0&&0===t.txnAttributes.items.length?s("tr",[t._m(5)]):t._e(),t._v(" "),t._l(t.txnAttributes.items,(function(e,a){return!t.loadingContactInvoices&&e.invoice?s("tr",[s("td",{},[s("span",{staticClass:"text-semibold"},[t._v(t._s(e.invoice.date))]),s("br"),t._v(" "),s("span",{staticClass:"text-muted text-size-small"},[t._v("Due "+t._s(e.invoice.due_date))])]),t._v(" "),s("td",{},[s("div",{staticClass:"text-nowrap h6"},[s("span",{staticClass:"font-weight-semibold"},[t._v(t._s(e.invoice.number))]),t._v(" -\n                                            "),s("span",[t._v(t._s(e.invoice.contact_name))])]),t._v(" "),s("div",{staticClass:"custom-control custom-checkbox custom-control-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.paidInFull,expression:"item.paidInFull"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"contact-invoice-"+e.invoice.id},domProps:{checked:Array.isArray(e.paidInFull)?t._i(e.paidInFull,null)>-1:e.paidInFull},on:{change:[function(s){var a=e.paidInFull,n=s.target,i=!!n.checked;if(Array.isArray(a)){var o=t._i(a,null);n.checked?o<0&&t.$set(e,"paidInFull",a.concat([null])):o>-1&&t.$set(e,"paidInFull",a.slice(0,o).concat(a.slice(o+1)))}else t.$set(e,"paidInFull",i)},function(e){return t.receiptItemPaidInFull(a)}]}}),t._v(" "),s("label",{staticClass:"custom-control-label",attrs:{for:"contact-invoice-"+e.invoice.id},model:{value:e.paidInFull,callback:function(s){t.$set(e,"paidInFull",s)},expression:"item.paidInFull"}},[t._v("Paid in full")])])]),t._v(" "),s("td",{staticClass:"text-right"},[s("span",{staticClass:"text-primary font-weight-semibold"},[t._v(t._s(t.$root.numberFormat(e.invoice.total)))]),t._v(" "),s("small",[t._v(t._s(e.invoice.base_currency))])]),t._v(" "),s("td",{staticClass:"text-right h6"},[s("span",{staticClass:"text-danger font-weight-semibold"},[t._v(t._s(t.$root.numberFormat(e.invoice.balance)))]),t._v(" "),s("small",[t._v(t._s(e.invoice.base_currency))])]),t._v(" "),s("td",{staticClass:"text-right align-middle"},[s("div",{staticClass:"input-group"},[s("span",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text rounded-0"},[t._v(t._s(e.invoice.base_currency))])]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.amount,expression:"item.amount"}],staticClass:"form-control font-weight-semibold text-right rounded-0",attrs:{type:"text",placeholder:"0.00"},domProps:{value:e.amount},on:{keyup:t.receiptItemsTotal,input:function(s){s.target.composing||t.$set(e,"amount",s.target.value)}}}),t._v(" "),s("span",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-outline bg-danger border-danger text-danger-800 btn-icon rounded-0",attrs:{type:"button",title:"Delete row"},on:{click:function(e){return t.receiptItemRateReset(a)}}},[s("i",{staticClass:"icon-cross3"})])])])])]):t._e()}))],2),t._v(" "),s("tfoot",[t.txnAttributes.items.length>0?s("tr",[s("td",{staticClass:"text-bold",attrs:{colspan:"3"}}),t._v(" "),s("td",{staticClass:"pl-15 text-bold"},[t.txnAttributes.base_currency?s("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v("\n                                            "+t._s(t.txnAttributes.base_currency)+"\n                                        ")]):t._e(),t._v("\n                                        Total due\n                                    ")]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.$root.numberFormat(t.receiptTotalDue)))])]):t._e(),t._v(" "),t.txnAttributes.items.length>0?s("tr",[s("td",{staticClass:"p-15 no-border",attrs:{colspan:"3"}}),t._v(" "),s("td",{staticClass:"p-15 no-border-right text-bold size4of5"},[t.txnAttributes.base_currency?s("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v("\n                                            "+t._s(t.txnAttributes.base_currency)+"\n                                        ")]):t._e(),t._v("\n                                        Amount Received\n                                    ")]),t._v(" "),s("td",{staticClass:"no-border-left font-weight-bold h4 text-right"},[t._v("\n                                        "+t._s(t.$root.numberFormat(t.txnAttributes.total))+"\n                                    ")])]):t._e(),t._v(" "),t.txnAttributes.items.length>0&&t.receiptAmountUnallocated?s("tr",[s("td",{staticClass:"p-15 no-border",attrs:{colspan:"3"}}),t._v(" "),s("td",{staticClass:"p-15 no-border-right text-bold size4of5 text-danger"},[t.txnAttributes.base_currency?s("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v("\n                                            "+t._s(t.txnAttributes.base_currency)+"\n                                        ")]):t._e(),t._v("\n                                        Amount unallocated\n                                    ")]),t._v(" "),s("td",{staticClass:"no-border-left h5 text-right text-danger"},[t._v("\n                                        "+t._s(t.$root.numberFormat(t.receiptAmountUnallocated))+"\n                                    ")])]):t._e()])])]):t._e(),t._v(" "),s("fieldset",{staticClass:"mt-3"},[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-form-label col-lg-2"},[t._v("Attach files")]),t._v(" "),s("div",{staticClass:"col-lg-10"},[s("input",{ref:"filesAttached",staticClass:"form-control border-0 p-1 h-auto",attrs:{type:"file",multiple:""}})])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label"},[t._v("\n                                    Customer notes:\n                                ")]),t._v(" "),s("div",{staticClass:"col-lg-10"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.txnAttributes.contact_notes,expression:"txnAttributes.contact_notes"}],staticClass:"form-control rounded-0",attrs:{rows:"2",placeholder:"Contact notes"},domProps:{value:t.txnAttributes.contact_notes},on:{input:function(e){e.target.composing||t.$set(t.txnAttributes,"contact_notes",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label"},[t._v("\n                                    Terms and conditions:\n                                ")]),t._v(" "),s("div",{staticClass:"col-lg-10"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.txnAttributes.terms_and_conditions,expression:"txnAttributes.terms_and_conditions"}],staticClass:"form-control rounded-0",attrs:{rows:"2",placeholder:"Mention your company's Terms and Conditions."},domProps:{value:t.txnAttributes.terms_and_conditions},on:{input:function(e){e.target.composing||t.$set(t.txnAttributes,"terms_and_conditions",e.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"text-left col-md-10 offset-md-2 p-0"},[s("div",{staticClass:"btn-group ml-1"},[t._m(6),t._v(" "),s("div",{staticClass:"dropdown-menu dropdown-menu-left"},[s("a",{staticClass:"dropdown-item",attrs:{href:"/"},on:{click:function(e){return e.preventDefault(),t.txnOnSave("draft",!1)}}},[s("i",{staticClass:"icon-file-text3"}),t._v(" Save as draft\n                                    ")]),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"/"},on:{click:function(e){return e.preventDefault(),t.txnOnSave("approved",!1)}}},[s("i",{staticClass:"icon-file-check2"}),t._v(" Save and approve\n                                    ")]),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"/"},on:{click:function(e){return e.preventDefault(),t.txnOnSave("approved",!0)}}},[s("i",{staticClass:"icon-mention"}),t._v(" Save, approve and send\n                                    ")])])]),t._v(" "),s("button",{staticClass:"btn btn-danger font-weight-bold",attrs:{type:"submit"}},[s("i",{staticClass:"icon-file-plus2 mr-1"}),t._v(" "+t._s(t.txnSubmitBtnText)+"\n                            ")])])])],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text rounded-0"},[this._v("Exchange rate:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("th",{staticClass:"h6",attrs:{width:""}},[this._v("Date / "),e("span",{staticClass:"text-muted text-size-small"},[this._v("Due")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"text-center",attrs:{colspan:"5"}},[e("h1",[e("i",{staticClass:"icon-spinner2 spinner"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"text-center",attrs:{colspan:"5"}},[e("h4",[this._v("Please select contact to continue")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"text-center text-danger",attrs:{colspan:"5"}},[e("h4",[this._v("Oops: No invoices found")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-outline bg-purple-300 border-purple-300 text-purple-800 btn-icon border-2 dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown"}},[e("i",{staticClass:"icon-cog"})])}],!1,null,null,null);e.default=l.exports}}]);