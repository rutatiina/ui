(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{XLOy:function(t,e,s){"use strict";var a=s("o0o1"),r=s.n(a);function n(t,e,s,a,r,n,i){try{var o=t[n](i),l=o.value}catch(t){return void s(t)}o.done?e(l):Promise.resolve(l).then(a,r)}e.a={mounted:function(){this.sourceUrls.items="/workshop/parts-and-accessories/vue-search-select-sales",this.sourceUrls.contacts="/workshop/contacts/search"},methods:{fetchPartsAndAccessories:function(t){var e,s=this;return(e=r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s.txnItems[0].name="-initiate-"===t?"":t,t){e.next=3;break}return e.abrupt("return",!1);case 3:return a={search_text:t,search:[{column:"name",value:t}]},e.prev=4,e.next=7,axios.post("/workshop/parts-and-accessories/vue-search-select-sales",a).then((function(e){e.data[0].name="-initiate-"===t?"":t,s.txnItems=e.data})).catch((function(t){console.log(t)})).finally((function(t){}));case 7:return e.abrupt("return",e.sent);case 10:e.prev=10,e.t0=e.catch(4),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[4,10]])})),function(){var t=this,s=arguments;return new Promise((function(a,r){var i=e.apply(t,s);function o(t){n(i,a,r,o,l,"next",t)}function l(t){n(i,a,r,o,l,"throw",t)}o(void 0)}))})()}}}},Y0CL:function(t,e,s){"use strict";s.r(e);var a={mixins:[s("XLOy").a],data:function(){return{}},created:function(){this.pageTitle="Create Bill",this.pageAction="Create"},mounted:function(){this.txnCreateData(),this.txnFetchSuppliers("-initiate-"),this.txnFetchItems("-initiate-"),this.txnFetchTaxes()},methods:{}},r=s("KHd+"),n=Object(r.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content-wrapper"},[s("div",{staticClass:"page-header page-header-light"},[s("div",{staticClass:"page-header-content header-elements-md-inline"},[s("div",{staticClass:"page-title d-flex"},[s("h4",[s("i",{staticClass:"icon-file-plus"}),t._v("\n                        "+t._s(t.pageTitle)+"\n                    ")])])]),t._v(" "),s("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[s("div",{staticClass:"d-flex"},[s("div",{staticClass:"breadcrumb"},[s("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[s("i",{staticClass:"icon-home2 mr-2"}),t._v(" "),s("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(" "+t._s(t._f("truncate")(this.$root.tenant.name,30))+" ")])]),t._v(" "),s("span",{staticClass:"breadcrumb-item"},[t._v("Accounting")]),t._v(" "),s("span",{staticClass:"breadcrumb-item"},[t._v("Purchases")]),t._v(" "),s("span",{staticClass:"breadcrumb-item"},[t._v("Bills")]),t._v(" "),s("span",{staticClass:"breadcrumb-item active"},[t._v(t._s(t.pageAction))])]),t._v(" "),t._m(0)]),t._v(" "),s("div",{staticClass:"header-elements"},[s("div",{staticClass:"breadcrumb justify-content-center"},[s("router-link",{staticClass:" btn btn-danger btn-sm rounded-round font-weight-bold",attrs:{to:t.txnUrlStore}},[s("i",{staticClass:"icon-drawer3 mr-2"}),t._v("\n                            Bills\n                        ")])],1)])])]),t._v(" "),s("div",{staticClass:"content border-0 padding-0"},[s("div",{staticClass:"card shadow-none rounded-0 border-0"},[s("div",{staticClass:"card-body p-0"},[s("loading-animation"),t._v(" "),this.$root.loading?t._e():s("form",{staticClass:"max-width-1040",staticStyle:{"margin-bottom":"100px"},attrs:{action:"",method:"post",autocomplete:"off"},on:{submit:t.txnFormSubmit}},[s("input",{attrs:{type:"hidden",name:"submit",value:"1"}}),t._v(" "),s("input",{attrs:{type:"hidden",name:"id"},domProps:{value:t.txnAttributes.id}}),t._v(" "),s("input",{attrs:{type:"hidden",name:"contact_name",value:""}}),t._v(" "),s("input",{attrs:{type:"hidden",name:"internal_ref"},domProps:{value:t.txnAttributes.internal_ref}}),t._v(" "),s("input",{attrs:{type:"hidden",name:"quote_currency"},domProps:{value:t.$root.tenant.base_currency}}),t._v(" "),s("fieldset",{staticClass:"select_contact_required",attrs:{id:"fieldset_select_contact"}},[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-form-label col-lg-2 text-danger font-weight-bold"},[t._v("Customer")]),t._v(" "),s("div",{staticClass:"col-lg-5"},[s("model-list-select",{attrs:{list:t.txnContacts,"option-value":"id","option-text":"display_name",placeholder:"select contact"},on:{searchchange:t.txnFetchSuppliers,input:t.txnContactSelect},model:{value:t.txnAttributes.contact,callback:function(e){t.$set(t.txnAttributes,"contact",e)},expression:"txnAttributes.contact"}})],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.txnAttributes.contact_id,expression:"txnAttributes.contact_id"}],staticClass:"col-lg-1 p-0"},[s("model-list-select",{attrs:{list:t.txnAttributes.contact.currencies,"option-value":"code","option-text":"code",placeholder:"select currency"},model:{value:t.txnAttributes.contact.currency,callback:function(e){t.$set(t.txnAttributes.contact,"currency",e)},expression:"txnAttributes.contact.currency"}})],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.txnAttributes.contact_id&&t.txnAttributes.base_currency!=t.txnAttributes.quote_currency,expression:"txnAttributes.contact_id && txnAttributes.base_currency != txnAttributes.quote_currency"}],staticClass:"col-lg-3 pr-0"},[s("div",{staticClass:"input-group"},[t._m(1),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.txnAttributes.exchange_rate,expression:"txnAttributes.exchange_rate"}],staticClass:"form-control text-right",attrs:{type:"text",placeholder:"Exchange rate"},domProps:{value:t.txnAttributes.exchange_rate},on:{input:function(e){e.target.composing||t.$set(t.txnAttributes,"exchange_rate",e.target.value)}}})])])])]),t._v(" "),s("fieldset",{},[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label font-weight-bold"},[t._v("\n                                    Estimate Number:\n                                ")]),t._v(" "),s("div",{staticClass:"col-lg-5"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.txnAttributes.number,expression:"txnAttributes.number"}],staticClass:"form-control input-roundless",attrs:{type:"text",name:"number",placeholder:"Offer number"},domProps:{value:t.txnAttributes.number},on:{input:function(e){e.target.composing||t.$set(t.txnAttributes,"number",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label"},[t._v("\n                                    Reference:\n                                ")]),t._v(" "),s("div",{staticClass:"col-lg-5"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.txnAttributes.reference,expression:"txnAttributes.reference"}],staticClass:"form-control input-roundless",attrs:{type:"text",name:"reference",placeholder:"Enter reference"},domProps:{value:t.txnAttributes.reference},on:{input:function(e){e.target.composing||t.$set(t.txnAttributes,"reference",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label"},[t._v("\n                                    Estimate Date:\n                                ")]),t._v(" "),s("div",{staticClass:"col-lg-2"},[s("date-picker",{staticClass:"font-weight-bold w-100 h-100",attrs:{valueType:"format",lang:t.vue2DatePicker.lang,placeholder:"Choose date"},model:{value:t.txnAttributes.date,callback:function(e){t.$set(t.txnAttributes,"date",e)},expression:"txnAttributes.date"}})],1),t._v(" "),s("label",{staticClass:"col-lg-1 col-form-label",staticStyle:{"white-space":"nowrap"}},[t._v("\n                                    Expiry Date:\n                                ")]),t._v(" "),s("div",{staticClass:"col-lg-2"},[s("date-picker",{staticClass:"font-weight-bold d-flex w-md-auto h-100",attrs:{valueType:"format",lang:t.vue2DatePicker.lang},model:{value:t.txnAttributes.expiry_date,callback:function(e){t.$set(t.txnAttributes,"expiry_date",e)},expression:"txnAttributes.expiry_date"}})],1)]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label"}),t._v(" "),s("div",{staticClass:"col-lg-5"},[s("div",{staticClass:"custom-control custom-checkbox custom-control-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.txnAttributes.isRecurring,expression:"txnAttributes.isRecurring"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"txn-is-recurring"},domProps:{checked:Array.isArray(t.txnAttributes.isRecurring)?t._i(t.txnAttributes.isRecurring,null)>-1:t.txnAttributes.isRecurring},on:{change:function(e){var s=t.txnAttributes.isRecurring,a=e.target,r=!!a.checked;if(Array.isArray(s)){var n=t._i(s,null);a.checked?n<0&&t.$set(t.txnAttributes,"isRecurring",s.concat([null])):n>-1&&t.$set(t.txnAttributes,"isRecurring",s.slice(0,n).concat(s.slice(n+1)))}else t.$set(t.txnAttributes,"isRecurring",r)}}}),t._v(" "),s("label",{staticClass:"custom-control-label",attrs:{for:"txn-is-recurring"}},[t._v("Make this transaction Recurring")])])])])]),t._v(" "),s("txn-recurring-fields"),t._v(" "),s("fieldset",{},[s("div",{staticClass:"form-group row"},[s("table",{staticClass:"table table-bordered border-left-0 border-right-0 border-bottom-0"},[s("thead",{staticClass:"thead-default bg-light"},[s("tr",[s("th",{staticClass:"font-weight-bold",attrs:{width:"50%"}},[t._v("Item / description")]),t._v(" "),s("th",{staticClass:"text-right font-weight-bold",attrs:{width:"8%"}},[t._v("Quantity")]),t._v(" "),s("th",{staticClass:"text-right font-weight-bold",attrs:{width:"11%"}},[t._v("Rate")]),t._v(" "),s("th",{staticClass:"font-weight-bold",attrs:{width:"13%"}},[t._v("Tax")]),t._v(" "),s("th",{staticClass:"text-right font-weight-bold p-0",attrs:{width:"18%"}},[s("div",{staticClass:"input-group"},[s("input",{staticClass:"rg-txn-item-row-total form-control border-0 text-right font-weight-bold bg-transparent",attrs:{type:"text",value:"Total",readonly:"",placeholder:"0.00"}}),t._v(" "),s("span",{staticClass:"input-group-append border-0 rounded-0"},[s("button",{staticClass:"btn bg-danger bg-transparent text-danger btn-icon",attrs:{type:"button",title:"Clear all items"},on:{click:t.txnItemsClearAll}},[s("i",{staticClass:"icon-cross3"})])])])])])]),t._v(" "),s("tbody",{attrs:{id:"items_field_rows"}},t._l(t.txnAttributes.items,(function(e,a){return s("tr",[s("td",{staticClass:"td_item_selector p-0 rg_select2_border_none"},[s("model-list-select",{staticClass:"border-0",attrs:{list:t.txnItems,"option-value":"id","option-text":"name","option-item-row":a,"option-tag":"",placeholder:"Select item"},on:{input:t.txnItemsSelect,searchchange:t.txnFetchItems},model:{value:e.selectedItem,callback:function(s){t.$set(e,"selectedItem",s)},expression:"item.selectedItem"}}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.type_id||e.name,expression:"item.type_id || item.name"}],staticClass:"ml-2 mr-2"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"item.description"}],staticClass:"form-control mb-2",staticStyle:{"min-height":"30px",overflow:"hidden"},attrs:{"data-value":e.description,"data-row":a,rows:"1",onkeyup:"rgAutoGrow(this);",placeholder:"Description"},domProps:{value:e.description},on:{input:function(s){s.target.composing||t.$set(e,"description",s.target.value)}}})])],1),t._v(" "),s("td",{staticClass:"p-0"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.quantity,expression:"item.quantity"}],staticClass:"item_row_quantity form-control border-0 text-right",attrs:{type:"text","data-row":a,placeholder:"1"},domProps:{value:e.quantity},on:{keyup:t.txnTotal,input:function(s){s.target.composing||t.$set(e,"quantity",s.target.value)}}})]),t._v(" "),s("td",{staticClass:"p-0"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.rate,expression:"item.rate"}],staticClass:"item_row_rate form-control m-input border-0 text-right",attrs:{type:"text","data-row":a,placeholder:"0.00"},domProps:{value:e.rate},on:{keyup:t.txnTotal,input:function(s){s.target.composing||t.$set(e,"rate",s.target.value)}}})]),t._v(" "),s("td",{staticClass:"p-0"},[s("multi-list-select",{staticClass:"border-0",attrs:{list:t.txnTaxes,"option-value":"code","option-text":"display_name","option-item-row":a,"selected-items":e.selectedTaxes,placeholder:"select tax","show-count-of-selected-options":""},on:{select:t.txnItemTaxes}})],1),t._v(" "),s("td",{staticClass:"p-0"},[s("div",{staticStyle:{position:"relative"}},[s("div",{staticClass:"input-group"},[s("input",{staticClass:"rg-txn-item-row-total form-control border-0 text-right bg-transparent",attrs:{type:"text",readonly:"",placeholder:"0.00"},domProps:{value:t.rgNumberFormat(e.displayTotal,2)}}),t._v(" "),s("span",{staticClass:"input-group-append border-0 rounded-0"},[s("button",{staticClass:"btn bg-danger bg-transparent text-danger btn-icon",attrs:{type:"button",title:"Delete row"},on:{click:function(e){return t.txnItemsRemove(a)}}},[s("i",{staticClass:"icon-cross3"})])])])])])])})),0),t._v(" "),s("tbody",[s("tr",[s("td",{staticClass:"border-0"},[s("button",{staticClass:"btn btn-link pt-0 pb-0 font-weight-bold",attrs:{type:"button"},on:{click:t.txnItemsCreate}},[s("i",{staticClass:"icon-plus2 mr-2"}),t._v(" Add another line\n                                                ")])]),t._v(" "),s("td",{staticClass:"pl-15 border-left-0 border-top-0 border-right-0 font-weight-bold",attrs:{colspan:"2"}},[t._v("Sub Total")]),t._v(" "),s("td",{staticClass:"border-left-0 border-top-0 border-right-0 text-right rg-txn-total-pr",attrs:{id:"txn_subtotal",colspan:"2"}},[t._v("\n                                                "+t._s(t.rgNumberFormat(t.txnAttributes.taxable_amount,2))+"\n                                            ")])])]),t._v(" "),s("tbody",{staticClass:"border-0"},t._l(t.txnAttributes.taxes,(function(e){return s("tr",[s("td",{staticClass:"p-15 border-0"}),t._v(" "),s("td",{staticClass:"p-15 border-left-0 border-top-0 border-right-0 font-weight-bold",attrs:{colspan:"2"}},[t._v(t._s(e.name))]),t._v(" "),s("td",{staticClass:"border-left-0 border-top-0 border-right-0 text-right pr-0",attrs:{colspan:"2"}},[s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.total,expression:"tax.total"}],staticClass:"rg-txn-item-row-total form-control text-right",attrs:{type:"text",placeholder:"0.00"},domProps:{value:e.total},on:{input:function(s){s.target.composing||t.$set(e,"total",s.target.value)}}}),t._v(" "),s("span",{staticClass:"input-group-append border-0 rounded-0"},[s("button",{staticClass:"btn bg-danger bg-transparent text-danger btn-icon",attrs:{type:"button",title:"Remove Tax"},on:{click:function(s){return t.txnItemsTaxRemove(e.id)}}},[s("i",{staticClass:"icon-cross3"})])])])])])})),0),t._v(" "),s("tfoot",[s("tr",[s("td",{staticClass:"p-15 border-0"}),t._v(" "),s("td",{staticClass:"p-15 border-left-0 border-top-0 border-right-0 font-weight-bold size4of5",attrs:{colspan:"2"}},[t._v("\n                                                TOTAL\n                                                "),t.txnAttributes.base_currency?s("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v("\n                                                    "+t._s(t.txnAttributes.base_currency)+"\n                                                ")]):t._e()]),t._v(" "),s("td",{staticClass:"border-left-0 border-top-0 border-right-0 font-weight-bold size4of5 text-right rg-txn-total-pr",attrs:{id:"txn_total",colspan:"2"}},[t._v("\n                                                "+t._s(t.rgNumberFormat(t.txnAttributes.total,2))+"\n                                            ")])])])])])]),t._v(" "),s("fieldset",{},[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-form-label col-lg-2"},[t._v("Attach files")]),t._v(" "),s("div",{staticClass:"col-lg-10"},[s("input",{ref:"filesAttached",staticClass:"form-control border-0 p-1 h-auto",attrs:{type:"file",multiple:""}})])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label"},[t._v("\n                                    Customer notes:\n                                ")]),t._v(" "),s("div",{staticClass:"col-lg-10"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.txnAttributes.contact_notes,expression:"txnAttributes.contact_notes"}],staticClass:"form-control input-roundless",attrs:{rows:"2",placeholder:"Contact notes"},domProps:{value:t.txnAttributes.contact_notes},on:{input:function(e){e.target.composing||t.$set(t.txnAttributes,"contact_notes",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label"},[t._v("\n                                    Terms and conditions:\n                                ")]),t._v(" "),s("div",{staticClass:"col-lg-10"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.txnAttributes.terms_and_conditions,expression:"txnAttributes.terms_and_conditions"}],staticClass:"form-control input-roundless",attrs:{rows:"2",placeholder:"Mention your company's Terms and Conditions."},domProps:{value:t.txnAttributes.terms_and_conditions},on:{input:function(e){e.target.composing||t.$set(t.txnAttributes,"terms_and_conditions",e.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"text-left col-md-10 offset-md-2 p-0"},[s("div",{staticClass:"btn-group ml-1"},[t._m(2),t._v(" "),s("div",{staticClass:"dropdown-menu dropdown-menu-left"},[s("a",{staticClass:"dropdown-item",attrs:{href:"/"},on:{click:function(e){return e.preventDefault(),t.txnOnSave("draft",!1)}}},[s("i",{staticClass:"icon-file-text3"}),t._v(" Save as draft\n                                    ")]),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"/"},on:{click:function(e){return e.preventDefault(),t.txnOnSave("Approved",!1)}}},[s("i",{staticClass:"icon-file-check2"}),t._v(" Save and approve\n                                    ")]),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"/"},on:{click:function(e){return e.preventDefault(),t.txnOnSave("Approved",!0)}}},[s("i",{staticClass:"icon-mention"}),t._v(" Save, approve and send\n                                    ")])])]),t._v(" "),s("button",{staticClass:"btn btn-danger font-weight-bold",attrs:{type:"submit"}},[s("i",{staticClass:"icon-file-plus2 mr-1"}),t._v(" "+t._s(t.txnSubmitBtnText)+"\n                            ")])])],1)],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[this._v("Exchange rate:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-outline bg-purple-300 border-purple-300 text-purple-800 btn-icon border-2 dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown"}},[e("i",{staticClass:"icon-cog"})])}],!1,null,null,null);e.default=n.exports}}]);