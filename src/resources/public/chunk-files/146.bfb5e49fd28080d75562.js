(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{S69i:function(t,e,s){"use strict";s.r(e);var a=s("Zipl"),i=s.n(a);function n(t,e,s,a,i,n,o){try{var c=t[n](o),r=c.value}catch(t){return void s(t)}c.done?e(r):Promise.resolve(r).then(a,i)}function o(t){return function(){var e=this,s=arguments;return new Promise((function(a,i){var o=t.apply(e,s);function c(t){n(o,a,i,c,r,"next",t)}function r(t){n(o,a,i,c,r,"throw",t)}c(void 0)}))}}var c={components:{quillEditor:s("xXYs").quillEditor},data:function(){return{loadingContactInvoices:!1,receiptContacts:[],receiptOnInvoices:!0,receiptAutoSetItemsTotalCheckbox:!0,receiptDebitAccounts:[],receiptAmountUnallocated:0,quillEditorOption:{modules:{toolbar:[["bold","italic","underline"],["blockquote"],[{list:"ordered"},{list:"bullet"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{color:[]},{background:[]}],[{align:[]}],["clean"]]}}}},computed:{receiptTotalDue:function(){var t=this,e=0;return this.txnAttributes.items.forEach((function(s){s.invoice&&void 0!==s.invoice&&void 0!==s.invoice.balance&&(e+=t.rgNumber(s.invoice.balance))})),e}},watch:{receiptContacts:function(){this.fetchContactInvoices()},receiptAutoSetItemsTotalCheckbox:function(){this.receiptAutoSetItemsTotal()},"txnAttributes.total":function(){this.receiptAutoSetItemsTotal()},receiptOnInvoices:function(t,e){!1===t?this.txnAttributes.items=[]:this.fetchContactInvoices()}},created:function(){this.pageTitle="Create Receipt",this.pageAction="Create"},mounted:function(){this.txnCreateData(),this.txnFetchCustomers("-initiate-"),this.fetchReceiptDebitAccounts(),this.txnFetchPaymentModes(),this.txnFetchAccountsIncome()},methods:{fetchContactInvoices:function(){var t=this;return o(i.a.mark((function e(){var s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=[],t.receiptContacts.forEach((function(t){s.push(t.id)})),0!==s.length){e.next=6;break}return t.loadingContactInvoices=!1,t.txnAttributes.items=[],e.abrupt("return",!1);case 6:return e.prev=6,t.loadingContactInvoices=!0,e.next=10,axios.post("/payments-received/invoices",{contact_ids:s}).then((function(e){t.loadingContactInvoices=!1,!0===e.data.status?(t.txnAttributes.items=e.data.items,t.receiptAutoSetItemsTotal()):t.txnAttributes.items=[]})).catch((function(t){console.log(t)})).finally((function(t){}));case 10:return e.abrupt("return",e.sent);case 13:e.prev=13,e.t0=e.catch(6),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[6,13]])})))()},fetchReceiptDebitAccounts:function(){var t=this;return o(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.post("/payments-received/debit-accounts").then((function(e){t.receiptDebitAccounts=e.data})).catch((function(t){console.log(t)})).finally((function(t){}));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()},receiptContactsOnSelect:function(t,e){this.receiptContacts=t},receiptContactInput:function(t,e){this.txnContactSelect(t,e),this.receiptContacts=[],this.receiptContacts.push(t)},receiptAutoSetItemsTotal:function(){if(void 0!==this.txnAttributes.total){if(this.receiptAutoSetItemsTotalCheckbox){var t=this.rgNumber(this.txnAttributes.total),e=0;this.txnAttributes.items.forEach((function(s){void 0!==s.invoice.balance&&(s.amount=0,s.paidInFull=!1,e=this.rgNumber(s.invoice.balance),t>=e?s.amount=e.toFixed(2):t<e&&t>0&&(s.amount=t.toFixed(2)),t=this.rgNumber(this.rgNumber(t)-this.rgNumber(e)))}))}this.receiptItemsTotal()}},receiptItemsTotal:function(){var t=this,e=0;t.txnAttributes.items.forEach((function(s){e+=t.rgNumber(s.amount)})),t.receiptAmountUnallocated=t.txnAttributes.total-e},receiptItemRateReset:function(t){this.txnAttributes.items[t].amount=0,this.txnAttributes.items[t].paidInFull=!1,this.receiptAutoSetItemsTotalCheckbox=!1,this.receiptItemsTotal()},receiptItemPaidInFull:function(t){this.receiptAutoSetItemsTotalCheckbox=!1,this.txnAttributes.items[t].paidInFull&&(this.txnAttributes.items[t].amount=this.rgNumber(this.txnAttributes.items[t].txn.balance).toFixed(this.$root.tenant.decimal_places)),this.receiptItemsTotal()},receiptAllItemsRateReset:function(){this.txnAttributes.items.forEach((function(t){t.amount=0,t.paidInFull=!1})),this.receiptAutoSetItemsTotalCheckbox=!1,this.receiptItemsTotal()},receiptAllItemsPaidInFull:function(){var t=this;t.receiptAutoSetItemsTotalCheckbox=!1,t.txnAttributes.items.forEach((function(e){e.paidInFull=!0,e.amount=t.rgNumber(e.invoice.balance).toFixed(t.$root.tenant.decimal_places)})),t.receiptItemsTotal()}},beforeUpdate:function(){1!==this.txnAttributes.items.length||this.txnAttributes.items[0].invoice||(this.receiptOnInvoices=!1)},updated:function(){},destroyed:function(){}},r=s("C7zm");function l(t,e,s,a,i,n,o){try{var c=t[n](o),r=c.value}catch(t){return void s(t)}c.done?e(r):Promise.resolve(r).then(a,i)}function d(t){return function(){var e=this,s=arguments;return new Promise((function(a,i){var n=t.apply(e,s);function o(t){l(n,a,i,o,c,"next",t)}function c(t){l(n,a,i,o,c,"throw",t)}o(void 0)}))}}var u={data:function(){return{invoiceId:this.$route.query.invoice,invoice:{},bankAccounts:[],accountsByType:[],receiptDebitAccounts:[],taxes:[],fields:{number:this.$route.query.invoice,items:[{batch:null,contact_id:null,description:null,name:null,quantity:0,rate:0,tax_id:null,taxes:[],total:0,type:null,type_id:null,units:null}]},response:{}}},mounted:function(){this.fetchReceiptDebitAccounts(),this.txnFetchPaymentModes(),this.fetchInvoice(),this.txnFetchTaxes()},methods:{fetchInvoice:function(){var t=this;return d(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.loadingContactInvoices=!0,e.next=4,axios.post("/payments-received/invoice",{invoice_id:t.$route.query.invoice}).then((function(e){t.loadingContactInvoices=!1,!0===e.data.status?t.fields=e.data.fields:t.fields.items=[]})).catch((function(t){console.log(t)})).finally((function(t){}));case 4:return e.abrupt("return",e.sent);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},fetchReceiptDebitAccounts:function(){var t=this;return d(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.post("/payments-received/debit-accounts").then((function(e){t.receiptDebitAccounts=e.data})).catch((function(t){console.log(t)})).finally((function(t){}));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()},onItemRateChange:function(){this.fields.taxable_amount=this.fields.items[0].rate,this.updateTotal()},updateTotal:function(){this.fields.total=this.fields.items[0].rate,this.fields.items[0].total=this.fields.items[0].rate},onItemTaxTotalChange:function(t){var e=this.fields.items[0].taxes[t].id;if(null===e)return!1;"inclusive"===this.taxes[e].method?this.fields.items[0].taxes[t].inclusive=this.fields.items[0].taxes[t].total:this.fields.items[0].taxes[t].exclusive=this.fields.items[0].taxes[t].total,console.log("onItemTaxTotalChange")},itemTaxesAdd:function(){this.fields.items[0].taxes.push({id:null,name:null,total:0,inclusive:0,exclusive:0})},formSubmit:function(t){var e=this;t.preventDefault(),this.txnForm.disabled=!0;PNotify.removeAll();var s={title:"Close on click",text:"Loading .....",addclass:"bg-warning-400 border-warning-400",hide:!1,buttons:{closer:!1,sticker:!1}};new PNotify(s),axios.post("/payments-received",this.fields).then((function(t){if(PNotify.removeAll(),s.text=t.data.messages.join("\n"),!0===t.data.status){s.addclass="bg-success-400 border-success-400";var a=new PNotify(s);a.get().click((function(){a.remove()})),e.$router.push({path:t.data.callback})}else{e.txnForm.disabled=!1,s.addclass="bg-warning-400 border-warning-400";var i=new PNotify(s);i.get().click((function(){i.remove()}))}})).catch((function(t){e.txnForm.disabled=!1}))},taxValue:function(t,e,s){if(void 0===t)return 0;if(t.length>0){if("%"==t.substr(-1,1)){var a=t.substr(0,t.length-1);return isNaN(a)?0:"inclusive"===s?e-e/(1+Number(a)/100):e*(Number(a)/100)}return Number(t)}return 0}}},m={components:{GeneralForm:Object(r.a)(c,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"page-header page-header-light"},[s("div",{staticClass:"page-header-content header-elements-md-inline"},[s("div",{staticClass:"page-title d-flex"},[s("h4",[s("i",{staticClass:"icon-file-plus"}),t._v("\n                        "+t._s(t.pageTitle)+"\n                    ")])]),t._v(" "),s("div",{staticClass:"header-elements"},[s("div",{staticClass:"breadcrumb justify-content-center"},[s("router-link",{staticClass:" btn btn-danger btn-sm font-weight-bold",attrs:{to:t.txnUrlStore}},[s("i",{staticClass:"icon-drawer3 mr-2"}),t._v("\n                            Receipts\n                        ")])],1)])]),t._v(" "),s("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[s("div",{staticClass:"d-flex"},[s("div",{staticClass:"breadcrumb"},[s("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[s("i",{staticClass:"icon-home2 mr-2"}),t._v(" "),s("span",{staticClass:"badge badge-primary font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(" "+t._s(t._f("truncate")(this.$root.tenant.name,30))+" ")])]),t._v(" "),s("span",{staticClass:"breadcrumb-item"},[t._v("Receipt")]),t._v(" "),s("span",{staticClass:"breadcrumb-item active"},[t._v(t._s(t.pageAction))])]),t._v(" "),t._m(0)])])]),t._v(" "),s("div",{staticClass:"content border-0 padding-0"},[s("div",{staticClass:"card shadow-none rounded-0 border-0"},[s("div",{staticClass:"card-body p-0"},[s("loading-animation"),t._v(" "),this.$root.loading?t._e():s("form",{staticClass:"max-width-1040",staticStyle:{"margin-bottom":"100px"},attrs:{action:"",method:"post",autocomplete:"off"},on:{submit:t.txnFormSubmit}},[s("fieldset",{attrs:{disabled:t.txnForm.disabled}},[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-form-label col-lg-2 "},[t._v("Customer")]),t._v(" "),s("div",{staticClass:"col-lg-5"},[s("model-list-select",{staticClass:"rounded-0",attrs:{list:t.txnContacts,"is-disabled":t.txnForm.disabled,"option-value":"id","option-text":"display_name",placeholder:"select contact"},on:{searchchange:t.txnFetchCustomers,input:t.receiptContactInput},model:{value:t.txnAttributes.contact,callback:function(e){t.$set(t.txnAttributes,"contact",e)},expression:"txnAttributes.contact"}})],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.txnAttributes.contact_id,expression:"txnAttributes.contact_id"}],staticClass:"col-lg-1 p-0"},[s("model-list-select",{staticClass:"rounded-0",attrs:{list:t.txnAttributes.contact.currencies,"is-disabled":t.txnForm.disabled,"option-value":"code","option-text":"code",placeholder:"select currency"},model:{value:t.txnAttributes.contact.currency,callback:function(e){t.$set(t.txnAttributes.contact,"currency",e)},expression:"txnAttributes.contact.currency"}})],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.txnAttributes.contact_id&&t.txnAttributes.base_currency!=t.txnAttributes.quote_currency,expression:"txnAttributes.contact_id && txnAttributes.base_currency != txnAttributes.quote_currency"}],staticClass:"col-lg-3 pr-0"},[s("div",{staticClass:"input-group"},[t._m(1),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.txnAttributes.exchange_rate,expression:"txnAttributes.exchange_rate"}],staticClass:"form-control text-right rounded-0",attrs:{type:"text",placeholder:"Exchange rate"},domProps:{value:t.txnAttributes.exchange_rate},on:{input:function(e){e.target.composing||t.$set(t.txnAttributes,"exchange_rate",e.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label text-danger"},[t._v("\n                                    * Number & Date\n                                ")]),t._v(" "),s("div",{staticClass:"col-lg-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.txnAttributes.number,expression:"txnAttributes.number"}],staticClass:"form-control rounded-0",attrs:{type:"text",name:"number",placeholder:"Offer number"},domProps:{value:t.txnAttributes.number},on:{input:function(e){e.target.composing||t.$set(t.txnAttributes,"number",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"col-lg-2",attrs:{title:"Invoice date"}},[s("date-picker",{staticClass:"font-weight-bold w-100 h-100",attrs:{valueType:"format",lang:t.vue2DatePicker.lang,placeholder:"Invoice date"},model:{value:t.txnAttributes.date,callback:function(e){t.$set(t.txnAttributes,"date",e)},expression:"txnAttributes.date"}})],1)]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label"},[t._v("\n                                    Reference\n                                ")]),t._v(" "),s("div",{staticClass:"col-lg-5"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.txnAttributes.reference,expression:"txnAttributes.reference"}],staticClass:"form-control rounded-0",attrs:{type:"text",name:"reference",placeholder:"Enter reference"},domProps:{value:t.txnAttributes.reference},on:{input:function(e){e.target.composing||t.$set(t.txnAttributes,"reference",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label text-danger"},[t._v("\n                                    * Amount received\n                                ")]),t._v(" "),s("div",{staticClass:"col-lg-5"},[s("div",{staticClass:"input-group"},[s("span",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text font-weight-bold rounded-0"},[t._v(t._s(t.txnAttributes.base_currency))])]),t._v(" "),s("vue-numeric",{staticClass:"form-control rounded-0 text-right font-size-lg",attrs:{separator:",",min:0,precision:2,placeholder:"Amount received"},model:{value:t.txnAttributes.total,callback:function(e){t.$set(t.txnAttributes,"total",e)},expression:"txnAttributes.total"}})],1)]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.receiptOnInvoices&&t.txnAttributes.contact.id,expression:"receiptOnInvoices && txnAttributes.contact.id"}],staticClass:"col-lg-5 col-form-label"},[s("div",{staticClass:"custom-control custom-checkbox custom-control-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.receiptAutoSetItemsTotalCheckbox,expression:"receiptAutoSetItemsTotalCheckbox"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"txn-auto-pay"},domProps:{checked:Array.isArray(t.receiptAutoSetItemsTotalCheckbox)?t._i(t.receiptAutoSetItemsTotalCheckbox,null)>-1:t.receiptAutoSetItemsTotalCheckbox},on:{change:function(e){var s=t.receiptAutoSetItemsTotalCheckbox,a=e.target,i=!!a.checked;if(Array.isArray(s)){var n=t._i(s,null);a.checked?n<0&&(t.receiptAutoSetItemsTotalCheckbox=s.concat([null])):n>-1&&(t.receiptAutoSetItemsTotalCheckbox=s.slice(0,n).concat(s.slice(n+1)))}else t.receiptAutoSetItemsTotalCheckbox=i}}}),t._v(" "),s("label",{staticClass:"custom-control-label",attrs:{for:"txn-auto-pay"}},[t._v("Auto pay invoice(s)")])])])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label text-danger"},[t._v("\n                                    * Payment mode\n                                ")]),t._v(" "),s("div",{staticClass:"col-lg-5"},[s("model-select",{staticClass:"rounded-0",attrs:{options:t.txnPaymentModes,"is-disabled":t.txnForm.disabled,placeholder:"Select payment mode"},model:{value:t.txnAttributes.payment_mode,callback:function(e){t.$set(t.txnAttributes,"payment_mode",e)},expression:"txnAttributes.payment_mode"}})],1)]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label text-danger"},[t._v("\n                                    * Deposit to\n                                ")]),t._v(" "),s("div",{staticClass:"col-lg-5"},[s("model-list-select",{staticClass:"rounded-0",attrs:{list:t.receiptDebitAccounts,"is-disabled":t.txnForm.disabled,"option-value":"code","option-text":"name",placeholder:"select account"},model:{value:t.txnAttributes.debit_financial_account_code,callback:function(e){t.$set(t.txnAttributes,"debit_financial_account_code",e)},expression:"txnAttributes.debit_financial_account_code"}})],1),t._v(" "),s("div",{staticClass:"col-lg-5 col-form-label"},[s("router-link",{attrs:{to:"/payments-received/accounts"}},[s("i",{staticClass:"icon-cog mr-1"}),t._v("\n                                        Manage payment receiving accounts\n                                    ")])],1)]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.txnAttributes.contact.id,expression:"txnAttributes.contact.id"}],staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label"}),t._v(" "),s("div",{staticClass:"col-lg-5"},[s("div",{staticClass:"custom-control custom-checkbox custom-control-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.receiptOnInvoices,expression:"receiptOnInvoices"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"txn-is-recurring"},domProps:{checked:Array.isArray(t.receiptOnInvoices)?t._i(t.receiptOnInvoices,null)>-1:t.receiptOnInvoices},on:{change:function(e){var s=t.receiptOnInvoices,a=e.target,i=!!a.checked;if(Array.isArray(s)){var n=t._i(s,null);a.checked?n<0&&(t.receiptOnInvoices=s.concat([null])):n>-1&&(t.receiptOnInvoices=s.slice(0,n).concat(s.slice(n+1)))}else t.receiptOnInvoices=i}}}),t._v(" "),s("label",{staticClass:"custom-control-label",attrs:{for:"txn-is-recurring"}},[t._v("Make receipt for Invoice(s) issued.")])])])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.receiptOnInvoices&&t.txnAttributes.contact.id,expression:"receiptOnInvoices && txnAttributes.contact.id"}],staticClass:"card mb-0"},[s("div",{staticClass:"form-group row mb-0 mt-0"},[s("label",{staticClass:"col-lg-2 col-form-label text-right border-0 rounded-left",staticStyle:{"white-space":"nowrap"}},[t._v("\n                                        Show invoices to:\n                                    ")]),t._v(" "),s("div",{staticClass:"col-lg-10"},[s("multi-list-select",{staticClass:"border-0 rounded-0",attrs:{"is-disabled":t.txnForm.disabled,list:t.txnContacts,"option-value":"id","option-text":"display_name","selected-items":t.receiptContacts,placeholder:"Select customer / contact"},on:{select:t.receiptContactsOnSelect,searchchange:t.txnFetchContacts}})],1)]),t._v(" "),s("hr",{staticClass:"m-0"}),t._v(" "),s("table",{staticClass:"table"},[s("thead",{staticClass:"thead-default"},[s("tr",[t._m(2),t._v(" "),s("th",{staticClass:"h6",attrs:{width:""}},[t._v("\n                                            Invoice#\n                                            "),s("small",{staticClass:"pull-right pt-5"},[s("a",{attrs:{href:"/"},on:{click:function(e){return e.preventDefault(),t.receiptAllItemsPaidInFull(e)}}},[t._v("(Pay all\n                                                    fully)")])])]),t._v(" "),s("th",{staticClass:"h6 text-right",attrs:{width:""}},[t._v("Invoice amount")]),t._v(" "),s("th",{staticClass:"h6 text-right",attrs:{width:""}},[t._v("Amount due")]),t._v(" "),s("th",{staticClass:"h6 text-left",attrs:{width:""}},[t._v("\n                                            Receipt amount\n                                            "),s("small",{staticClass:"pull-right pt-5"},[s("a",{attrs:{href:"/"},on:{click:function(e){return e.preventDefault(),t.receiptAllItemsRateReset(e)}}},[t._v("(Clear\n                                                    amounts)")])])])])]),t._v(" "),s("tbody",[t.loadingContactInvoices?s("tr",[t._m(3)]):t._e(),t._v(" "),t.loadingContactInvoices||0!==t.receiptContacts.length?t._e():s("tr",[t._m(4)]),t._v(" "),!t.loadingContactInvoices&&t.receiptContacts.length>0&&0===t.txnAttributes.items.length?s("tr",[t._m(5)]):t._e(),t._v(" "),t._l(t.txnAttributes.items,(function(e,a){return!t.loadingContactInvoices&&e.invoice?s("tr",[s("td",{},[s("span",{staticClass:"text-semibold"},[t._v(t._s(e.invoice.date))]),s("br"),t._v(" "),s("span",{staticClass:"text-muted text-size-small"},[t._v("Due "+t._s(e.invoice.due_date))])]),t._v(" "),s("td",{},[s("div",{staticClass:"text-nowrap h6"},[s("span",{staticClass:"font-weight-semibold"},[t._v(t._s(e.invoice.number))]),t._v(" -\n                                                "),s("span",[t._v(t._s(e.invoice.contact_name))])]),t._v(" "),s("div",{staticClass:"custom-control custom-checkbox custom-control-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.paidInFull,expression:"item.paidInFull"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"contact-invoice-"+e.invoice.id},domProps:{checked:Array.isArray(e.paidInFull)?t._i(e.paidInFull,null)>-1:e.paidInFull},on:{change:[function(s){var a=e.paidInFull,i=s.target,n=!!i.checked;if(Array.isArray(a)){var o=t._i(a,null);i.checked?o<0&&t.$set(e,"paidInFull",a.concat([null])):o>-1&&t.$set(e,"paidInFull",a.slice(0,o).concat(a.slice(o+1)))}else t.$set(e,"paidInFull",n)},function(e){return t.receiptItemPaidInFull(a)}]}}),t._v(" "),s("label",{staticClass:"custom-control-label",attrs:{for:"contact-invoice-"+e.invoice.id},model:{value:e.paidInFull,callback:function(s){t.$set(e,"paidInFull",s)},expression:"item.paidInFull"}},[t._v("Paid in full")])])]),t._v(" "),s("td",{staticClass:"text-right"},[s("span",{staticClass:"text-primary font-weight-semibold"},[t._v(t._s(t.$root.numberFormat(e.invoice.total)))]),t._v(" "),s("small",[t._v(t._s(e.invoice.base_currency))])]),t._v(" "),s("td",{staticClass:"text-right h6"},[s("span",{staticClass:"text-danger font-weight-semibold"},[t._v(t._s(t.rgNumberFormat(e.invoice.balance,2)))]),t._v(" "),s("small",[t._v(t._s(e.invoice.base_currency))])]),t._v(" "),s("td",{staticClass:"text-right align-middle"},[s("div",{staticClass:"input-group"},[s("span",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text rounded-0"},[t._v(t._s(e.invoice.base_currency))])]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.amount,expression:"item.amount"}],staticClass:"form-control font-weight-semibold text-right",attrs:{type:"text",placeholder:"0.00"},domProps:{value:e.amount},on:{keyup:t.receiptItemsTotal,input:function(s){s.target.composing||t.$set(e,"amount",s.target.value)}}}),t._v(" "),s("span",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-outline bg-danger border-danger text-danger-800 btn-icon rounded-0",attrs:{type:"button",title:"Delete row"},on:{click:function(e){return t.receiptItemRateReset(a)}}},[s("i",{staticClass:"icon-cross3"})])])])])]):t._e()}))],2),t._v(" "),s("tfoot",[t.txnAttributes.items.length>0?s("tr",[s("td",{staticClass:"text-bold",attrs:{colspan:"3"}}),t._v(" "),s("td",{staticClass:"pl-15 text-bold"},[t.txnAttributes.base_currency?s("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v("\n                                                "+t._s(t.txnAttributes.base_currency)+"\n                                            ")]):t._e(),t._v("\n                                            Total due\n                                        ")]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.rgNumberFormat(t.receiptTotalDue,2)))])]):t._e(),t._v(" "),t.txnAttributes.items.length>0?s("tr",[s("td",{staticClass:"p-15 no-border",attrs:{colspan:"3"}}),t._v(" "),s("td",{staticClass:"p-15 no-border-right text-bold size4of5"},[t.txnAttributes.base_currency?s("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v("\n                                                "+t._s(t.txnAttributes.base_currency)+"\n                                            ")]):t._e(),t._v("\n                                            Amount Received\n                                        ")]),t._v(" "),s("td",{staticClass:"no-border-left font-weight-bold h4 text-right"},[t._v("\n                                            "+t._s(t.rgNumberFormat(t.txnAttributes.total,2))+"\n                                        ")])]):t._e(),t._v(" "),t.txnAttributes.items.length>0&&t.receiptAmountUnallocated?s("tr",[s("td",{staticClass:"p-15 no-border",attrs:{colspan:"3"}}),t._v(" "),s("td",{staticClass:"p-15 no-border-right text-bold size4of5 text-danger"},[t.txnAttributes.base_currency?s("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v("\n                                                "+t._s(t.txnAttributes.base_currency)+"\n                                            ")]):t._e(),t._v("\n                                            Amount unallocated\n                                        ")]),t._v(" "),s("td",{staticClass:"no-border-left h5 text-right text-danger"},[t._v("\n                                            "+t._s(t.rgNumberFormat(t.receiptAmountUnallocated,2))+"\n                                        ")])]):t._e()])])]),t._v(" "),s("div",{staticClass:"mt-3"},[t.receiptOnInvoices&&t.txnAttributes.contact.id?s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label"},[t._v("\n                                        Customer notes:\n                                    ")]),t._v(" "),s("div",{staticClass:"col-lg-10"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.txnAttributes.contact_notes,expression:"txnAttributes.contact_notes"}],staticClass:"form-control rounded-0",attrs:{rows:"2",placeholder:"Contact notes"},domProps:{value:t.txnAttributes.contact_notes},on:{input:function(e){e.target.composing||t.$set(t.txnAttributes,"contact_notes",e.target.value)}}})])]):[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label text-danger"},[t._v("\n                                            * Revenue account\n                                        ")]),t._v(" "),s("div",{staticClass:"col-lg-6"},[s("model-list-select",{staticClass:"rounded-0",attrs:{list:t.txnAccountsIncome,"is-disabled":t.txnForm.disabled,"option-value":"code","option-text":"name",placeholder:"select revenue account"},model:{value:t.txnAttributes.credit_financial_account_code,callback:function(e){t.$set(t.txnAttributes,"credit_financial_account_code",e)},expression:"txnAttributes.credit_financial_account_code"}})],1)]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label"},[t._v("\n                                            Description:\n                                        ")]),t._v(" "),s("div",{staticClass:"col-lg-10"},[s("quill-editor",{ref:"myQuillEditor",attrs:{options:t.quillEditorOption,placeholder:"Description"},model:{value:t.txnAttributes.description,callback:function(e){t.$set(t.txnAttributes,"description",e)},expression:"txnAttributes.description"}})],1)])]],2),t._v(" "),s("div",{staticClass:"text-left col-md-10 offset-md-2 p-0"},[s("div",{staticClass:"btn-group ml-1"},[t._m(6),t._v(" "),s("div",{staticClass:"dropdown-menu dropdown-menu-left"},[s("a",{staticClass:"dropdown-item",attrs:{href:"/"},on:{click:function(e){return e.preventDefault(),t.txnOnSave("draft",!1)}}},[s("i",{staticClass:"icon-file-text3"}),t._v(" Save as draft\n                                        ")]),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"/"},on:{click:function(e){return e.preventDefault(),t.txnOnSave("approved",!1)}}},[s("i",{staticClass:"icon-file-check2"}),t._v(" Save and approve\n                                        ")]),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"/"},on:{click:function(e){return e.preventDefault(),t.txnOnSave("approved",!0)}}},[s("i",{staticClass:"icon-mention"}),t._v(" Save, approve and send\n                                        ")])])]),t._v(" "),s("button",{staticClass:"btn btn-danger font-weight-bold",attrs:{type:"submit"}},[s("i",{staticClass:"icon-file-plus2 mr-1"}),t._v(" "+t._s(t.txnSubmitBtnText)+"\n                                ")])])])])],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[this._v("Exchange rate:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("th",{staticClass:"h6",attrs:{width:""}},[this._v("Date / "),e("span",{staticClass:"text-muted text-size-small"},[this._v("Due")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"text-center",attrs:{colspan:"5"}},[e("h1",[e("i",{staticClass:"icon-spinner2 spinner"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"text-center",attrs:{colspan:"5"}},[e("h4",[this._v("Please select contact to continue")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"text-center text-danger",attrs:{colspan:"5"}},[e("h4",[this._v("Oops: No invoices found")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-outline bg-purple-300 border-purple-300 text-purple-800 btn-icon border-2 dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown"}},[e("i",{staticClass:"icon-cog"})])}],!1,null,null,null).exports,OnInvoiceForm:Object(r.a)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"page-header page-header-light"},[s("div",{staticClass:"page-header-content header-elements-md-inline"},[s("div",{staticClass:"page-title d-flex"},[s("h4",[s("span",{staticClass:"font-weight-semibold"},[t._v("Receipt")]),t._v(" on Invoice #"+t._s(t.fields.number)+"\n                ")]),t._v(" "),t._m(0)])]),t._v(" "),t._m(1)]),t._v(" "),s("div",{staticClass:"content max-width-960"},[s("form",{attrs:{action:"#",autocomplete:"off"},on:{submit:t.formSubmit}},[s("fieldset",{attrs:{disabled:t.txnForm.disabled}},[s("div",{staticClass:"card shadow-none rounded-0 border-left-2 border-left-danger border-top-0 border-right-0 border-bottom-0"},[s("div",{staticClass:"card-body pt-1 pb-1"},[s("div",{staticClass:"form-group row mb-0"},[s("div",{staticClass:"col-md-8"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("label",{},[t._v("Customer")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.fields.contact_name,expression:"fields.contact_name"}],staticClass:"form-control rounded-0",attrs:{type:"text",readonly:""},domProps:{value:t.fields.contact_name},on:{input:function(e){e.target.composing||t.$set(t.fields,"contact_name",e.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("label",{},[t._v("Payment #")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.fields.number,expression:"fields.number"}],staticClass:"form-control rounded-0",attrs:{type:"text"},domProps:{value:t.fields.number},on:{input:function(e){e.target.composing||t.$set(t.fields,"number",e.target.value)}}})])])])])])]),t._v(" "),s("div",{staticClass:"card shadow-none rounded-0 border-left-2 border-left-blue border-top-0 border-right-0 border-bottom-0"},[s("div",{staticClass:"card-body pt-1 pb-1"},[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-form-label col-lg-4"},[t._v("Amount received")]),t._v(" "),s("div",{staticClass:"col-lg-8"},[s("div",{staticClass:"input-group"},[s("span",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text"},[t._v(t._s(t.fields.base_currency))])]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.fields.items[0].amount,expression:"fields.items[0].amount",modifiers:{number:!0}}],staticClass:"form-control rounded-0",attrs:{type:"number"},domProps:{value:t.fields.items[0].amount},on:{change:t.onItemRateChange,input:function(e){e.target.composing||t.$set(t.fields.items[0],"amount",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-form-label col-lg-4"},[t._v("Bank charges (If any)")]),t._v(" "),s("div",{staticClass:"col-lg-8"},[s("div",{staticClass:"input-group"},[s("span",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text"},[t._v(t._s(t.fields.base_currency))])]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.fields.bank_charge,expression:"fields.bank_charge",modifiers:{number:!0}}],staticClass:"form-control rounded-0",attrs:{type:"number"},domProps:{value:t.fields.bank_charge},on:{input:function(e){e.target.composing||t.$set(t.fields,"bank_charge",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])])]),t._v(" "),s("div",{staticClass:"form-group row mb-0"},[s("label",{staticClass:"col-form-label col-lg-4"},[t._v("Amount withheld")]),t._v(" "),s("div",{staticClass:"col-lg-8"},[s("div",{staticClass:"input-group"},[s("span",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text"},[t._v(t._s(t.fields.base_currency))])]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.fields.items[0].amount_withheld,expression:"fields.items[0].amount_withheld"}],staticClass:"form-control rounded-0",attrs:{type:"number",placeholder:"0.00"},domProps:{value:t.fields.items[0].amount_withheld},on:{input:function(e){e.target.composing||t.$set(t.fields.items[0],"amount_withheld",e.target.value)}}})])])])])]),t._v(" "),s("div",{staticClass:"card shadow-none rounded-0 border-left-2 border-left-grey-300 border-top-0 border-right-0 border-bottom-0"},[s("div",{staticClass:"card-body  pt-1 pb-1"},[s("div",{staticClass:"form-group row mb-0"},[s("div",{staticClass:"col-md-4"},[s("label",{},[t._v("Payment Date")]),t._v(" "),s("date-picker",{staticClass:"font-weight-bold w-100 rounded-0",staticStyle:{height:"37px"},attrs:{valueType:"format",lang:t.vue2DatePicker.lang,placeholder:"Invoice date"},model:{value:t.fields.date,callback:function(e){t.$set(t.fields,"date",e)},expression:"fields.date"}})],1),t._v(" "),s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("label",{},[t._v("Payment Mode")]),t._v(" "),s("model-select",{staticClass:"rounded-0",attrs:{"is-disabled":t.txnForm.disabled,options:t.txnPaymentModes,placeholder:"Select payment mode"},model:{value:t.fields.payment_mode,callback:function(e){t.$set(t.fields,"payment_mode",e)},expression:"fields.payment_mode"}})],1)])]),t._v(" "),s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("label",{},[t._v("Paid Through")]),t._v(" "),s("model-list-select",{staticClass:"rounded-0",attrs:{"is-disabled":t.txnForm.disabled,list:t.receiptDebitAccounts,"option-value":"code","option-text":"name",placeholder:"select account"},model:{value:t.fields.debit_financial_account_code,callback:function(e){t.$set(t.fields,"debit_financial_account_code",e)},expression:"fields.debit_financial_account_code"}})],1)])])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("label",{},[t._v("Reference")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.fields.reference,expression:"fields.reference"}],staticClass:"form-control rounded-0",attrs:{type:"text"},domProps:{value:t.fields.reference},on:{input:function(e){e.target.composing||t.$set(t.fields,"reference",e.target.value)}}})])])])]),t._v(" "),s("div",{staticClass:"form-group row mb-0"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("label",{},[t._v("Notes")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.fields.notes,expression:"fields.notes"}],staticClass:"form-control rounded-0",attrs:{rows:"2"},domProps:{value:t.fields.notes},on:{input:function(e){e.target.composing||t.$set(t.fields,"notes",e.target.value)}}})])])])])])]),t._v(" "),t._m(2)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[s("div",{staticClass:"d-flex"},[s("div",{staticClass:"breadcrumb"},[s("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[s("i",{staticClass:"icon-home2 mr-2"}),t._v(" Home")]),t._v(" "),s("a",{staticClass:"breadcrumb-item",attrs:{href:"/payments-received"}},[t._v("Receipts")]),t._v(" "),s("a",{staticClass:"breadcrumb-item",attrs:{href:"#"}},[t._v("On Invoice")]),t._v(" "),s("span",{staticClass:"breadcrumb-item active"},[t._v("Create")])]),t._v(" "),s("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[s("i",{staticClass:"icon-more"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card shadow-none rounded-0 border-0"},[e("div",{staticClass:"card-body  pt-1 pb-1"},[e("div",{staticClass:"form-group mb-3"},[e("button",{staticClass:"btn btn-danger font-weight-bold",attrs:{type:"submit"}},[e("i",{staticClass:"icon-comment-discussion mr-2"}),this._v(" Save Invoice Receipt")])])])])}],!1,null,null,null).exports},mounted:function(){this.$root.appMenu("accounting")}},v=Object(r.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content-wrapper"},[this.$route.query.invoice?e("on-invoice-form"):e("general-form")],1)}),[],!1,null,null,null);e.default=v.exports}}]);