(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"O+F5":function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,"\n.select2-dropdown-width {\n    width: 500px !important;\n    margin-top:-37px !important;\n    border-top: 1px solid rgba(0,0,0,.15) !important;\n}\n",""])},VQde:function(t,e,a){"use strict";a.r(e);var s=a("o0o1"),n=a.n(s);function r(t,e,a,s,n,r,o){try{var i=t[r](o),l=i.value}catch(t){return void a(t)}i.done?e(l):Promise.resolve(l).then(s,n)}var o={components:{},data:function(){return{billDebitFinancialAccounts:[]}},created:function(){this.pageTitle="Create Debit note",this.pageAction="Create"},mounted:function(){this.txnCreateData(),this.txnFetchSuppliers("-initiate-"),this.txnFetchItems("-initiate-"),this.txnFetchTaxes(),this.fetchBillDebitFinancialAccounts()},methods:{fetchBillDebitFinancialAccounts:function(){var t,e=this;return(t=n.a.mark((function t(){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,axios.get("/financial-accounts/bill-debit-financial-accounts").then((function(t){e.billDebitFinancialAccounts=t.data})).catch((function(t){console.log(t)})).finally((function(t){}));case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})),function(){var e=this,a=arguments;return new Promise((function(s,n){var o=t.apply(e,a);function i(t){r(o,s,n,i,l,"next",t)}function l(t){r(o,s,n,i,l,"throw",t)}i(void 0)}))})()}},beforeUpdate:function(){},updated:function(){var t=this;$(".select-search").select2({dropdownCssClass:"select2-dropdown-width"}).on("select2:select",(function(e){t.txnAttributes.items[$(this).data("item-index")].financial_account_code=this.value})),this.txnAttributes.items.forEach((function(t,e){$("#select-item-account-"+e).val(t.financial_account_code),$("#select-item-account-"+e).trigger("change")}))},destroyed:function(){$(".select-search").select2("destroy")}},i=(a("m1Bh"),a("KHd+")),l=Object(i.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"page-header page-header-light"},[a("div",{staticClass:"page-header-content header-elements-md-inline"},[a("div",{staticClass:"page-title d-flex"},[a("h4",[a("i",{staticClass:"icon-file-plus"}),t._v("\n                    "+t._s(t.pageTitle)+"\n                ")])]),t._v(" "),a("div",{staticClass:"header-elements"},[a("div",{staticClass:"breadcrumb justify-content-center"},[a("router-link",{staticClass:" btn btn-danger btn-sm font-weight-bold",attrs:{to:t.txnUrlStore}},[a("i",{staticClass:"icon-drawer3 mr-2"}),t._v("\n                        Debit Notes\n                    ")])],1)])]),t._v(" "),a("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[a("div",{staticClass:"d-flex"},[a("div",{staticClass:"breadcrumb"},[a("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[a("i",{staticClass:"icon-home2 mr-2"}),t._v(" "),a("span",{staticClass:"badge badge-primary font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(" "+t._s(t._f("truncate")(this.$root.tenant.name,30))+" ")])]),t._v(" "),a("span",{staticClass:"breadcrumb-item"},[t._v("Debit Notes")]),t._v(" "),a("span",{staticClass:"breadcrumb-item active"},[t._v(t._s(t.pageAction))])]),t._v(" "),t._m(0)])])]),t._v(" "),a("div",{staticClass:"content border-0 padding-0"},[a("div",{staticClass:"card shadow-none rounded-0 border-0"},[a("div",{staticClass:"card-body p-0"},[a("loading-animation"),t._v(" "),this.$root.loading?t._e():a("form",{staticClass:"max-width-1040",staticStyle:{"margin-bottom":"100px"},attrs:{action:"",method:"post",autocomplete:"off"},on:{submit:t.txnFormSubmit}},[a("fieldset",{attrs:{disabled:t.txnForn.disabled}},[a("input",{attrs:{type:"hidden",name:"submit",value:"1"}}),t._v(" "),a("input",{attrs:{type:"hidden",name:"id"},domProps:{value:t.txnAttributes.id}}),t._v(" "),a("input",{attrs:{type:"hidden",name:"contact_name",value:""}}),t._v(" "),a("input",{attrs:{type:"hidden",name:"internal_ref"},domProps:{value:t.txnAttributes.internal_ref}}),t._v(" "),a("input",{attrs:{type:"hidden",name:"quote_currency"},domProps:{value:t.$root.tenant.base_currency}}),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-form-label col-lg-2 text-danger text-danger"},[t._v("Customer *")]),t._v(" "),a("div",{staticClass:"col-lg-5"},[a("model-list-select",{staticClass:"rounded-0",attrs:{list:t.txnContacts,"is-disabled":t.txnForn.disabled,"option-value":"id","option-text":"display_name",placeholder:"select contact"},on:{searchchange:t.txnFetchSuppliers,input:t.txnContactSelect},model:{value:t.txnAttributes.contact,callback:function(e){t.$set(t.txnAttributes,"contact",e)},expression:"txnAttributes.contact"}})],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.txnAttributes.contact_id,expression:"txnAttributes.contact_id"}],staticClass:"col-lg-1 p-0"},[a("model-list-select",{staticClass:"rounded-0",attrs:{list:t.txnAttributes.contact.currencies,"is-disabled":t.txnForn.disabled,"option-value":"code","option-text":"code",placeholder:"select currency"},model:{value:t.txnAttributes.contact.currency,callback:function(e){t.$set(t.txnAttributes.contact,"currency",e)},expression:"txnAttributes.contact.currency"}})],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.txnAttributes.contact_id&&t.txnAttributes.base_currency!=t.txnAttributes.quote_currency,expression:"txnAttributes.contact_id && txnAttributes.base_currency != txnAttributes.quote_currency"}],staticClass:"col-lg-3 pr-0"},[a("div",{staticClass:"input-group"},[t._m(1),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.txnAttributes.exchange_rate,expression:"txnAttributes.exchange_rate"}],staticClass:"form-control text-right rounded-0",attrs:{type:"text",placeholder:"Exchange rate"},domProps:{value:t.txnAttributes.exchange_rate},on:{input:function(e){e.target.composing||t.$set(t.txnAttributes,"exchange_rate",e.target.value)}}})])])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-2 col-form-label text-danger"},[t._v("\n                                Date & Number *\n                            ")]),t._v(" "),a("div",{staticClass:"col-lg-2"},[a("date-picker",{staticClass:"font-weight-bold w-100 h-100",attrs:{valueType:"format",lang:t.vue2DatePicker.lang,placeholder:"Choose date"},model:{value:t.txnAttributes.date,callback:function(e){t.$set(t.txnAttributes,"date",e)},expression:"txnAttributes.date"}})],1),t._v(" "),a("div",{staticClass:"col-lg-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.txnAttributes.number,expression:"txnAttributes.number"}],staticClass:"form-control rounded-0",attrs:{type:"text",name:"number",placeholder:"Offer number"},domProps:{value:t.txnAttributes.number},on:{input:function(e){e.target.composing||t.$set(t.txnAttributes,"number",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-2 col-form-label"},[t._v("\n                                Reference\n                            ")]),t._v(" "),a("div",{staticClass:"col-lg-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.txnAttributes.reference,expression:"txnAttributes.reference"}],staticClass:"form-control rounded-0",attrs:{type:"text",name:"reference",placeholder:"Enter reference"},domProps:{value:t.txnAttributes.reference},on:{input:function(e){e.target.composing||t.$set(t.txnAttributes,"reference",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("table",{staticClass:"table table-bordered border-left-0 border-right-0 border-bottom-0"},[a("thead",{staticClass:"thead-default bg-light"},[a("tr",[a("th",{staticClass:"font-weight-bold",attrs:{width:"30%"}},[t._v("Item Details")]),t._v(" "),a("th",{staticClass:"font-weight-bold",attrs:{width:"20%"}},[t._v("Account")]),t._v(" "),a("th",{staticClass:"text-right font-weight-bold",attrs:{width:"8%"}},[t._v("Quantity")]),t._v(" "),a("th",{staticClass:"text-right font-weight-bold",attrs:{width:"11%"}},[t._v("Rate")]),t._v(" "),a("th",{staticClass:"font-weight-bold",attrs:{width:"13%"}},[t._v("Tax")]),t._v(" "),a("th",{staticClass:"text-right font-weight-bold p-0",attrs:{width:"18%"}},[a("div",{staticClass:"input-group"},[a("input",{staticClass:"rg-txn-item-row-total form-control border-0 text-right font-weight-bold bg-transparent",attrs:{type:"text",value:"Total",readonly:"",placeholder:"0.00"}}),t._v(" "),a("span",{staticClass:"input-group-append border-0 rounded-0"},[a("button",{staticClass:"btn bg-danger bg-transparent text-danger btn-icon",attrs:{type:"button",title:"Clear all items"},on:{click:t.txnItemsClearAll}},[a("i",{staticClass:"icon-cross3"})])])])])])]),t._v(" "),a("tbody",{attrs:{id:"items_field_rows"}},t._l(t.txnAttributes.items,(function(e,s){return a("tr",[a("td",{staticClass:"td_item_selector p-0 rg_select2_border_none"},[a("model-list-select",{staticClass:"border-0 rounded-0",attrs:{list:t.txnItems,"is-disabled":t.txnForn.disabled,"option-value":"id","option-text":"name","option-item-row":s,"option-tag":"",placeholder:"Select item"},on:{input:t.txnItemsSelect,searchchange:t.txnFetchItems},model:{value:e.selectedItem,callback:function(a){t.$set(e,"selectedItem",a)},expression:"item.selectedItem"}}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.type_id||e.name,expression:"item.type_id || item.name"}],staticClass:"ml-2 mr-2"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"item.description"}],staticClass:"form-control border-top-0 border-right-0 border-bottom-0 border-left-2 rounded-0 mb-1 border-left-grey",staticStyle:{"min-height":"30px",overflow:"hidden"},attrs:{"data-value":e.description,"data-row":s,rows:"1",onkeyup:"rgAutoGrow(this);",placeholder:"Description"},domProps:{value:e.description},on:{input:function(a){a.target.composing||t.$set(e,"description",a.target.value)}}})])],1),t._v(" "),a("td",{staticClass:"p-0"},[a("select",{staticClass:"form-control select-search",attrs:{id:"select-item-account-"+s,"data-fouc":"","data-item-index":s,"data-container-css-class":"border-0","data-placeholder":"Select account"}},[a("option"),t._v(" "),t._l(t.billDebitFinancialAccounts,(function(s,n){return a("optgroup",{attrs:{label:n}},t._l(s,(function(s){return a("option",{domProps:{value:s.code,selected:e.financial_account_code==s.code?"true":"false"}},[t._v(t._s(s.name))])})),0)}))],2)]),t._v(" "),a("td",{staticClass:"p-0"},[a("vue-numeric",{staticClass:"item_row_quantity form-control border-0 text-right",attrs:{separator:",",min:0,precision:2},on:{input:t.txnTotal},model:{value:e.quantity,callback:function(a){t.$set(e,"quantity",a)},expression:"item.quantity"}})],1),t._v(" "),a("td",{staticClass:"p-0"},[a("vue-numeric",{staticClass:"item_row_rate form-control m-input border-0 text-right",attrs:{separator:",",min:0,precision:2},on:{input:t.txnTotal},model:{value:e.rate,callback:function(a){t.$set(e,"rate",a)},expression:"item.rate"}})],1),t._v(" "),a("td",{staticClass:"p-0"},[a("multi-list-select",{staticClass:"border-0 rounded-0",attrs:{list:t.txnTaxes,"is-disabled":t.txnForn.disabled,"option-value":"code","option-text":"display_name","option-item-row":s,"selected-items":e.selectedTaxes,placeholder:"select tax","show-count-of-selected-options":""},on:{select:t.txnItemTaxes}})],1),t._v(" "),a("td",{staticClass:"p-0"},[a("div",{staticStyle:{position:"relative"}},[a("div",{staticClass:"input-group"},[a("input",{staticClass:"rg-txn-item-row-total form-control border-0 text-right bg-transparent",attrs:{type:"text",readonly:"",placeholder:"0.00"},domProps:{value:t.$root.numberFormat(e.displayTotal)}}),t._v(" "),a("span",{staticClass:"input-group-append border-0 rounded-0"},[a("button",{staticClass:"btn bg-danger bg-transparent text-danger btn-icon",attrs:{type:"button",title:"Delete row"},on:{click:function(e){return t.txnItemsRemove(s)}}},[a("i",{staticClass:"icon-cross3"})])])])])])])})),0),t._v(" "),a("tbody",[a("tr",[a("td",{staticClass:"border-0",attrs:{colspan:"2"}},[a("button",{staticClass:"btn btn-link pt-0 pb-0 font-weight-bold",attrs:{type:"button"},on:{click:t.txnItemsCreate}},[a("i",{staticClass:"icon-plus2 mr-2"}),t._v(" Add another line\n                                            ")])]),t._v(" "),a("td",{staticClass:"pl-15 border-left-0 border-top-0 border-right-0 font-weight-bold",attrs:{colspan:"2"}},[t._v("Sub Total")]),t._v(" "),a("td",{staticClass:"border-left-0 border-top-0 border-right-0 text-right rg-txn-total-pr",attrs:{id:"txn_subtotal",colspan:"2"}},[t._v("\n                                            "+t._s(t.$root.numberFormat(t.txnAttributes.taxable_amount))+"\n                                        ")])])]),t._v(" "),a("tbody",{staticClass:"border-0"},t._l(t.txnAttributes.taxes,(function(e){return a("tr",[a("td",{staticClass:"p-15 border-0",attrs:{colspan:"2"}}),t._v(" "),a("td",{staticClass:"p-15 border-left-0 border-top-0 border-right-0 font-weight-bold",attrs:{colspan:"2"}},[t._v(t._s(e.name))]),t._v(" "),a("td",{staticClass:"border-left-0 border-top-0 border-right-0 text-right p-0",attrs:{colspan:"2"}},[a("div",{staticClass:"input-group"},[a("input",{staticClass:"rg-txn-item-row-total form-control border-0 text-right bg-transparent",attrs:{type:"text",readonly:"",placeholder:"0.00"},domProps:{value:t.$root.numberFormat(e.total)}}),t._v(" "),a("span",{staticClass:"input-group-append border-0 rounded-0"},[a("button",{staticClass:"btn bg-danger bg-transparent text-danger btn-icon",attrs:{type:"button",title:"Remove Tax"},on:{click:function(a){return t.txnItemsTaxRemove(e.code)}}},[a("i",{staticClass:"icon-cross3"})])])])])])})),0),t._v(" "),a("tfoot",[a("tr",[a("td",{staticClass:"p-15 border-0",attrs:{colspan:"2"}}),t._v(" "),a("td",{staticClass:"p-15 border-left-0 border-top-0 border-right-0 font-weight-bold size4of5",attrs:{colspan:"2"}},[t._v("\n                                            TOTAL\n                                            "),t.txnAttributes.base_currency?a("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v("\n                                                "+t._s(t.txnAttributes.base_currency)+"\n                                            ")]):t._e()]),t._v(" "),a("td",{staticClass:"border-left-0 border-top-0 border-right-0 font-weight-bold size4of5 text-right rg-txn-total-pr",attrs:{id:"txn_total",colspan:"2"}},[t._v("\n                                            "+t._s(t.$root.numberFormat(t.txnAttributes.total))+"\n                                        ")])])])])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-2 col-form-label"},[t._v("\n                                Customer notes:\n                            ")]),t._v(" "),a("div",{staticClass:"col-lg-10"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.txnAttributes.contact_notes,expression:"txnAttributes.contact_notes"}],staticClass:"form-control rounded-0",attrs:{rows:"2",placeholder:"Contact notes"},domProps:{value:t.txnAttributes.contact_notes},on:{input:function(e){e.target.composing||t.$set(t.txnAttributes,"contact_notes",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-2 col-form-label"},[t._v("\n                                Terms and conditions:\n                            ")]),t._v(" "),a("div",{staticClass:"col-lg-10"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.txnAttributes.terms_and_conditions,expression:"txnAttributes.terms_and_conditions"}],staticClass:"form-control rounded-0",attrs:{rows:"2",placeholder:"Mention your company's Terms and Conditions."},domProps:{value:t.txnAttributes.terms_and_conditions},on:{input:function(e){e.target.composing||t.$set(t.txnAttributes,"terms_and_conditions",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-form-label col-lg-2"},[t._v("Attach files")]),t._v(" "),a("div",{staticClass:"col-lg-10"},[a("input",{ref:"filesAttached",staticClass:"form-control border-0 pl-0 pt-1 pr-1 pb-1 h-auto",attrs:{type:"file",multiple:""}})])]),t._v(" "),a("div",{staticClass:"text-left col-md-10 offset-md-2 p-0"},[a("div",{staticClass:"btn-group ml-1"},[t._m(2),t._v(" "),a("div",{staticClass:"dropdown-menu dropdown-menu-left"},[a("a",{staticClass:"dropdown-item",attrs:{href:"/"},on:{click:function(e){return e.preventDefault(),t.txnOnSave("draft",!1)}}},[a("i",{staticClass:"icon-file-text3"}),t._v(" Save as draft\n                                    ")]),t._v(" "),a("a",{staticClass:"dropdown-item",attrs:{href:"/"},on:{click:function(e){return e.preventDefault(),t.txnOnSave("approved",!1)}}},[a("i",{staticClass:"icon-file-check2"}),t._v(" Save and Approve\n                                    ")]),t._v(" "),a("a",{staticClass:"dropdown-item",attrs:{href:"/"},on:{click:function(e){return e.preventDefault(),t.txnOnSave("approved",!0)}}},[a("i",{staticClass:"icon-mention"}),t._v(" Save, approve and send\n                                    ")])])]),t._v(" "),a("button",{staticClass:"btn btn-danger font-weight-bold",attrs:{type:"submit"}},[a("i",{staticClass:"icon-file-plus2 mr-1"}),t._v(" "+t._s(t.txnSubmitBtnText)+"\n                            ")])])])])],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text rounded-0"},[this._v("Exchange rate:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-outline bg-purple-300 border-purple-300 text-purple-800 btn-icon border-2 dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown"}},[e("i",{staticClass:"icon-cog"})])}],!1,null,null,null);e.default=l.exports},m1Bh:function(t,e,a){"use strict";a("o0PW")},o0PW:function(t,e,a){var s=a("O+F5");"string"==typeof s&&(s=[[t.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,n);s.locals&&(t.exports=s.locals)}}]);