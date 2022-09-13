(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{"3H42":function(t,e,s){"use strict";s.r(e);var a=s("o0o1"),i=s.n(a);function l(t,e,s,a,i,l,o){try{var n=t[l](o),r=n.value}catch(t){return void s(t)}n.done?e(r):Promise.resolve(r).then(a,i)}function o(t){return function(){var e=this,s=arguments;return new Promise((function(a,i){var o=t.apply(e,s);function n(t){l(o,a,i,n,r,"next",t)}function r(t){l(o,a,i,n,r,"throw",t)}n(void 0)}))}}var n={data:function(){return{invoiceId:this.$route.params.id,invoice:{},bankAccounts:[],accountsByType:[],receiptDebitAccounts:[],taxes:[],fields:{number:this.$route.params.id,items:[{batch:null,contact_id:null,description:null,name:null,quantity:0,rate:0,tax_id:null,taxes:[],total:0,type:null,type_id:null,units:null}]},response:{}}},mounted:function(){this.fetchAttributes(),this.fetchReceiptDebitAccounts(),this.txnFetchPaymentModes()},methods:{fetchAttributes:function(){var t=this;return o(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.get("/workshop/billing/invoices/"+t.invoiceId+"/receipts/create").then((function(e){t.fields=e.data.receiptFieldDefaults,t.bankAccounts=e.data.bankAccounts,t.accountsByType=e.data.accountsByType,t.taxes=e.data.taxes,t.invoice=e.data.invoice}));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()},fetchReceiptDebitAccounts:function(){var t=this;return o(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.post("/workshop/billing/receipts/debit-accounts").then((function(e){t.receiptDebitAccounts=e.data})).catch((function(t){console.log(t)})).finally((function(t){}));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()},onItemRateChange:function(){this.fields.taxable_amount=this.fields.items[0].rate,this.updateTotal()},updateTotal:function(){this.fields.total=this.fields.items[0].rate,this.fields.items[0].total=this.fields.items[0].rate},onItemTaxTotalChange:function(t){var e=this.fields.items[0].taxes[t].id;if(null===e)return!1;"inclusive"===this.taxes[e].method?this.fields.items[0].taxes[t].inclusive=this.fields.items[0].taxes[t].total:this.fields.items[0].taxes[t].exclusive=this.fields.items[0].taxes[t].total,console.log("onItemTaxTotalChange")},itemTaxesAdd:function(){this.fields.items[0].taxes.push({id:null,name:null,total:0,inclusive:0,exclusive:0})},formSubmit:function(t){var e=this;t.preventDefault();PNotify.removeAll();var s={title:"Close on click",text:"Loading .....",addclass:"bg-warning-400 border-warning-400",hide:!1,buttons:{closer:!1,sticker:!1}};new PNotify(s),axios.post("/workshop/billing/invoices/"+this.invoiceId+"/receipts",this.fields).then((function(t){if(PNotify.removeAll(),s.text=t.data.message,!0===t.data.status){s.addclass="bg-success-400 border-success-400";var a=new PNotify(s);a.get().click((function(){a.remove()})),e.$router.push({path:t.data.callback})}else{s.addclass="bg-warning-400 border-warning-400";var i=new PNotify(s);i.get().click((function(){i.remove()}))}}))},taxValue:function(t,e,s){if(void 0===t)return 0;if(t.length>0){if("%"==t.substr(-1,1)){var a=t.substr(0,t.length-1);return isNaN(a)?0:"inclusive"===s?e-e/(1+Number(a)/100):e*(Number(a)/100)}return Number(t)}return 0}}},r=s("KHd+"),c=Object(r.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content-wrapper"},[s("div",{staticClass:"page-header page-header-light"},[s("div",{staticClass:"page-header-content header-elements-md-inline"},[s("div",{staticClass:"page-title d-flex"},[s("h4",[s("span",{staticClass:"font-weight-semibold"},[t._v("Payment")]),t._v(" for Invoice #"+t._s(t.$route.params.id)+"\n                    ")]),t._v(" "),t._m(0)])]),t._v(" "),t._m(1)]),t._v(" "),s("div",{staticClass:"content max-width-960"},[s("form",{attrs:{action:"#",autocomplete:"off"},on:{submit:t.formSubmit}},[s("div",{staticClass:"card shadow-none rounded-0 border-left-2 border-left-danger border-top-0 border-right-0 border-bottom-0"},[s("div",{staticClass:"card-body pt-1 pb-1"},[s("fieldset",{},[s("div",{staticClass:"form-group row mb-0"},[s("div",{staticClass:"col-md-8"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("label",{},[t._v("Customer")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.fields.contact_name,expression:"fields.contact_name"}],staticClass:"form-control",attrs:{type:"text",readonly:""},domProps:{value:t.fields.contact_name},on:{input:function(e){e.target.composing||t.$set(t.fields,"contact_name",e.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("label",{},[t._v("Payment #")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.fields.number,expression:"fields.number"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.fields.number},on:{input:function(e){e.target.composing||t.$set(t.fields,"number",e.target.value)}}})])])])])])])]),t._v(" "),s("div",{staticClass:"card shadow-none rounded-0 border-left-2 border-left-blue border-top-0 border-right-0 border-bottom-0"},[s("div",{staticClass:"card-body pt-1 pb-1"},[s("fieldset",{},[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-form-label col-lg-4"},[t._v("Amount received")]),t._v(" "),s("div",{staticClass:"col-lg-8"},[s("div",{staticClass:"input-group"},[s("span",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text"},[t._v(t._s(t.fields.base_currency))])]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.fields.items[0].rate,expression:"fields.items[0].rate",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.fields.items[0].rate},on:{change:t.onItemRateChange,input:function(e){e.target.composing||t.$set(t.fields.items[0],"rate",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-form-label col-lg-4"},[t._v("Bank charges (If any)")]),t._v(" "),s("div",{staticClass:"col-lg-8"},[s("div",{staticClass:"input-group"},[s("span",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text"},[t._v(t._s(t.fields.base_currency))])]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.fields.bank_charge,expression:"fields.bank_charge",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.fields.bank_charge},on:{input:function(e){e.target.composing||t.$set(t.fields,"bank_charge",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])])]),t._v(" "),s("hr"),t._v(" "),t._l(t.fields.items[0].taxes,(function(e,a){return t.fields.items[0].taxes.length>0?s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-form-label col-lg-4"},[t._v("Tax: "+t._s(e.name))]),t._v(" "),s("div",{staticClass:"col-lg-5"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.fields.items[0].taxes[a].id,expression:"fields.items[0].taxes[index].id"}],staticClass:"form-control select-tax text-capitalize",attrs:{"data-item-tax-index":a,"data-value":e.id,"data-allow-clear":"true"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.fields.items[0].taxes[a],"id",e.target.multiple?s:s[0])}}},[s("option")])]),t._v(" "),s("div",{staticClass:"col-lg-3"},[s("div",{staticClass:"input-group"},[s("span",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text"},[t._v(t._s(t.fields.base_currency))])]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.fields.items[0].taxes[a].total,expression:"fields.items[0].taxes[index].total"}],staticClass:"form-control",attrs:{type:"number","data-item-tax-index":a,placeholder:"0.00"},domProps:{value:t.fields.items[0].taxes[a].total},on:{change:function(e){return t.onItemTaxTotalChange(a)},input:function(e){e.target.composing||t.$set(t.fields.items[0].taxes[a],"total",e.target.value)}}})])])]):t._e()})),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-form-label col-lg-4"}),t._v(" "),s("div",{staticClass:"col-lg-8"},[s("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:t.itemTaxesAdd}},[t._v("\n                                        Add Tax - "),s("small",[t._v("Click to add tax and tax amount")])])])]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("div",{staticClass:"form-group row mb-0"},[s("label",{staticClass:"col-form-label col-lg-4"},[t._v("Amount withheld")]),t._v(" "),s("div",{staticClass:"col-lg-8"},[s("div",{staticClass:"input-group"},[s("span",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text"},[t._v(t._s(t.fields.base_currency))])]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.fields.amount_withheld,expression:"fields.amount_withheld"}],staticClass:"form-control",attrs:{type:"number",placeholder:"0.00"},domProps:{value:t.fields.amount_withheld},on:{input:function(e){e.target.composing||t.$set(t.fields,"amount_withheld",e.target.value)}}})])])])],2)])]),t._v(" "),s("div",{staticClass:"card shadow-none rounded-0 border-left-2 border-left-grey-300 border-top-0 border-right-0 border-bottom-0"},[s("div",{staticClass:"card-body  pt-1 pb-1"},[s("fieldset",{staticClass:"mb-3"},[s("div",{staticClass:"form-group row mb-0"},[s("div",{staticClass:"col-md-4"},[s("label",{},[t._v("Payment Date")]),t._v(" "),s("date-picker",{staticClass:"font-weight-bold w-100",staticStyle:{height:"37px"},attrs:{valueType:"format",lang:t.vue2DatePicker.lang,placeholder:"Invoice date"},model:{value:t.fields.date,callback:function(e){t.$set(t.fields,"date",e)},expression:"fields.date"}})],1),t._v(" "),s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("label",{},[t._v("Payment Mode")]),t._v(" "),s("model-select",{attrs:{options:t.txnPaymentModes,placeholder:"Select payment mode"},model:{value:t.fields.payment_mode,callback:function(e){t.$set(t.fields,"payment_mode",e)},expression:"fields.payment_mode"}})],1)])]),t._v(" "),s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("label",{},[t._v("Deposit to")]),t._v(" "),s("model-list-select",{attrs:{list:t.receiptDebitAccounts,"option-value":"id","option-text":"name",placeholder:"select account"},model:{value:t.fields.debit,callback:function(e){t.$set(t.fields,"debit",e)},expression:"fields.debit"}})],1)])])])]),t._v(" "),s("fieldset",{},[s("div",{staticClass:"form-group row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("label",{},[t._v("Reference")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.fields.reference,expression:"fields.reference"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.fields.reference},on:{input:function(e){e.target.composing||t.$set(t.fields,"reference",e.target.value)}}})])])])]),t._v(" "),s("div",{staticClass:"form-group row mb-0"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("label",{},[t._v("Notes")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.fields.notes,expression:"fields.notes"}],staticClass:"form-control",attrs:{rows:"2"},domProps:{value:t.fields.notes},on:{input:function(e){e.target.composing||t.$set(t.fields,"notes",e.target.value)}}})])])])])])])]),t._v(" "),t._m(4)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[s("div",{staticClass:"d-flex"},[s("div",{staticClass:"breadcrumb"},[s("a",{staticClass:"breadcrumb-item",attrs:{href:"index.html"}},[s("i",{staticClass:"icon-home2 mr-2"}),t._v(" Accounting")]),t._v(" "),s("a",{staticClass:"breadcrumb-item",attrs:{href:"form_inputs.html"}},[t._v("Sales")]),t._v(" "),s("a",{staticClass:"breadcrumb-item",attrs:{href:"form_inputs.html"}},[t._v("Invoices")]),t._v(" "),s("a",{staticClass:"breadcrumb-item",attrs:{href:"form_inputs.html"}},[t._v("Receipt")]),t._v(" "),s("span",{staticClass:"breadcrumb-item active"},[t._v("Create")])]),t._v(" "),s("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[s("i",{staticClass:"icon-more"})])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form-group row d-none"},[s("label",{staticClass:"col-form-label col-lg-4"},[t._v("Tax deducted")]),t._v(" "),s("div",{staticClass:"col-lg-8"},[s("div",{staticClass:"custom-control custom-radio"},[s("input",{staticClass:"custom-control-input",attrs:{type:"radio",name:"custom-stacked-radio",id:"custom_radio_stacked_unchecked",checked:""}}),t._v(" "),s("label",{staticClass:"custom-control-label",attrs:{for:"custom_radio_stacked_unchecked"}},[t._v("Custom selected")])]),t._v(" "),s("div",{staticClass:"custom-control custom-radio"},[s("input",{staticClass:"custom-control-input",attrs:{type:"radio",name:"custom-stacked-radio",id:"custom_radio_stacked_checked"}}),t._v(" "),s("label",{staticClass:"custom-control-label",attrs:{for:"custom_radio_stacked_checked"}},[t._v("Yes TDS "),s("small",[t._v("(Tax Deducted at Source)")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group row d-none"},[e("label",{staticClass:"col-form-label col-lg-4"},[this._v("TDS Tax Account")]),this._v(" "),e("div",{staticClass:"col-lg-8"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card shadow-none rounded-0 border-0"},[e("div",{staticClass:"card-body  pt-1 pb-1"},[e("fieldset",{staticClass:"mb-3"},[e("div",{staticClass:"form-group"},[e("button",{staticClass:"btn btn-danger",attrs:{type:"submit"}},[e("i",{staticClass:"icon-comment-discussion mr-2"}),this._v(" Create Invoice Receipt")])])])])])}],!1,null,null,null);e.default=c.exports}}]);