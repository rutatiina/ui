(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"4LoJ":function(t,e,s){var a=s("ilt0");"string"==typeof a&&(a=[[t.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(a,n);a.locals&&(t.exports=a.locals)},"4Myo":function(t,e,s){"use strict";s("4LoJ")},MLOB:function(t,e,s){"use strict";s.r(e);var a=s("o0o1"),n=s.n(a);function i(t,e,s,a,n,i,o){try{var r=t[i](o),c=r.value}catch(t){return void s(t)}r.done?e(c):Promise.resolve(c).then(a,n)}var o={data:function(){return{billDebitFinancialAccounts:[],showContactField:!1}},created:function(){this.pageTitle="Create Goods Received Note",this.pageAction="Create"},mounted:function(){this.txnCreateData(),this.txnFetchContacts("-initiate-"),this.sourceUrls.items="/items/vue-search-select-purchases",this.txnFetchItems("-initiate-"),this.txnFetchTaxes(),this.txnFetchAccountsAssetsInventory(),this.fetchBillDebitFinancialAccounts()},methods:{fetchBillDebitFinancialAccounts:function(){var t,e=this;return(t=n.a.mark((function t(){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,axios.get("/financial-accounts/bill-debit-financial-accounts").then((function(t){e.billDebitFinancialAccounts=t.data})).catch((function(t){console.log(t)})).finally((function(t){}));case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})),function(){var e=this,s=arguments;return new Promise((function(a,n){var o=t.apply(e,s);function r(t){i(o,a,n,r,c,"next",t)}function c(t){i(o,a,n,r,c,"throw",t)}r(void 0)}))})()},txnInputCreate:function(){void 0===this.txnAttributes.input_template?this.txnAttributes.inputs.push({selectedItem:{},selectedTaxes:[],type:"",type_id:"",contact_id:"",name:"",description:"",rate:0,quantity:1,total:0,taxes:[],tax_id:"",units:"",batch:"",expiry:"",inventory_tracking:0}):this.txnAttributes.inputs.push(this.txnAttributes.input_template)},txnInputSelect:function(t,e){void 0!==t.rate&&(this.txnAttributes.inputs[e].item_id=t.id,this.txnAttributes.inputs[e].name=t.name,this.txnAttributes.inputs[e].description=t.description,this.txnAttributes.inputs[e].rate=t.rate,this.txnAttributes.inputs[e].amount=t.rate,this.txnAttributes.inputs[e].inventory_tracking=t.inventory_tracking,void 0!==t.debit_financial_account_code&&(this.txnAttributes.inputs[e].credit_financial_account_code=t.debit_financial_account_code,this.txnAttributes.inputs[e].financial_account_code=t.debit_financial_account_code),this.txnTotal())}},beforeUpdate:function(){},updated:function(){var t=this;$(".select-search").select2({dropdownCssClass:"select2-dropdown-width"}).on("select2:select",(function(e){t.txnAttributes.items[$(this).data("item-index")].debit_financial_account_code=this.value})),this.txnAttributes.items.forEach((function(t,e){$("#select-item-account-"+e).val(t.debit_financial_account_code),$("#select-item-account-"+e).trigger("change")})),$(".select-search.__inputs__").select2({dropdownCssClass:"select2-dropdown-width"}).on("select2:select",(function(e){t.txnAttributes.inputs[$(this).data("input-index")].credit_financial_account_code=this.value})),this.txnAttributes.inputs.forEach((function(t,e){$("#select-input-account-"+e).val(t.credit_financial_account_code),$("#select-input-account-"+e).trigger("change")}))},destroyed:function(){$(".select-search").select2("destroy")}},r=(s("4Myo"),s("KHd+")),c=Object(r.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content-wrapper"},[s("div",{staticClass:"page-header page-header-light"},[s("div",{staticClass:"page-header-content header-elements-md-inline"},[s("div",{staticClass:"page-title d-flex"},[s("h4",[s("i",{staticClass:"icon-file-plus"}),t._v("\n                    "+t._s(t.pageTitle)+"\n                ")])])]),t._v(" "),s("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[s("div",{staticClass:"d-flex"},[s("div",{staticClass:"breadcrumb"},[s("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[s("i",{staticClass:"icon-home2 mr-2"}),t._v(" "),s("span",{staticClass:"badge badge-primary font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(" "+t._s(t._f("truncate")(this.$root.tenant.name,30))+" ")])]),t._v(" "),s("span",{staticClass:"breadcrumb-item"},[t._v("Inventory")]),t._v(" "),s("span",{staticClass:"breadcrumb-item"},[t._v("Goods Received Note")]),t._v(" "),s("span",{staticClass:"breadcrumb-item active"},[t._v(t._s(t.pageAction))])]),t._v(" "),t._m(0)]),t._v(" "),s("div",{staticClass:"header-elements"},[s("div",{staticClass:"breadcrumb justify-content-center"},[s("router-link",{staticClass:" btn btn-danger btn-sm font-weight-bold",attrs:{to:t.txnUrlStore}},[s("i",{staticClass:"icon-drawer3 mr-2"}),t._v("\n                        Goods Received Notes\n                    ")])],1)])])]),t._v(" "),s("div",{staticClass:"content border-0 padding-0"},[s("div",{staticClass:"card shadow-none rounded-0 border-0"},[s("div",{staticClass:"card-body p-0"},[s("loading-animation"),t._v(" "),this.$root.loading?t._e():s("form",{staticClass:"max-width-1040",staticStyle:{"margin-bottom":"100px"},attrs:{action:"",method:"post",autocomplete:"off"},on:{submit:t.txnFormSubmit}},[s("fieldset",{attrs:{disabled:t.txnForm.disabled}},[s("input",{attrs:{type:"hidden",name:"submit",value:"1"}}),t._v(" "),s("input",{attrs:{type:"hidden",name:"id"},domProps:{value:t.txnAttributes.id}}),t._v(" "),s("input",{attrs:{type:"hidden",name:"contact_name",value:""}}),t._v(" "),s("input",{attrs:{type:"hidden",name:"internal_ref"},domProps:{value:t.txnAttributes.internal_ref}}),t._v(" "),s("input",{attrs:{type:"hidden",name:"quote_currency"},domProps:{value:t.$root.tenant.base_currency}}),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-form-label col-lg-2"},[t._v("Source")]),t._v(" "),s("div",{staticClass:"col-lg-5"},[s("model-list-select",{staticClass:"rounded-0",attrs:{list:t.txnAccountsAssetsInventory,"is-disabled":t.txnForm.disabled,"option-value":"code","option-text":"name",placeholder:"select source"},model:{value:t.txnAttributes.credit_financial_account_code,callback:function(e){t.$set(t.txnAttributes,"credit_financial_account_code",e)},expression:"txnAttributes.credit_financial_account_code"}})],1),t._v(" "),t.txnAttributes.credit_financial_account_code?s("div",{staticClass:"col"},[s("div",{staticClass:"container d-flex h-100 p-0"},[s("div",{staticClass:"row justify-content-center align-self-center font-weight-bold"},[s("button",{staticClass:"btn btn-outline bg-danger text-danger-800 btn-icon rounded-0 cursor-pointer",attrs:{type:"button"},on:{click:function(e){t.txnAttributes.credit_financial_account_code=""}}},[s("i",{staticClass:"icon-cross2"})])])])]):t._e()]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label"},[t._v("\n                                Number & Date:\n                            ")]),t._v(" "),s("div",{staticClass:"col-lg-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.txnAttributes.number,expression:"txnAttributes.number"}],staticClass:"form-control rounded-0",attrs:{type:"text",name:"number",placeholder:"Offer number"},domProps:{value:t.txnAttributes.number},on:{input:function(e){e.target.composing||t.$set(t.txnAttributes,"number",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"col-lg-2",attrs:{title:"Invoice date"}},[s("date-picker",{staticClass:"font-weight-bold w-100 h-100",attrs:{valueType:"format",lang:t.vue2DatePicker.lang,placeholder:"Invoice date"},model:{value:t.txnAttributes.date,callback:function(e){t.$set(t.txnAttributes,"date",e)},expression:"txnAttributes.date"}})],1)]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label"},[t._v("\n                                Reference:\n                            ")]),t._v(" "),s("div",{staticClass:"col-lg-5"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.txnAttributes.reference,expression:"txnAttributes.reference"}],staticClass:"form-control rounded-0",attrs:{type:"text",name:"reference",placeholder:"Enter reference"},domProps:{value:t.txnAttributes.reference},on:{input:function(e){e.target.composing||t.$set(t.txnAttributes,"reference",e.target.value)}}})])]),t._v(" "),t.showContactField?t._e():s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label"}),t._v(" "),s("div",{staticClass:"col-6"},[s("a",{staticClass:"font-weight-semibold",attrs:{href:""},on:{click:function(e){e.preventDefault(),t.showContactField=!0}}},[s("i",{staticClass:"icon-plus2 mr-1"}),t._v("\n                                    Add vendor / supplier / contact\n                                ")])])]),t._v(" "),t.showContactField?s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-form-label col-lg-2"},[t._v("Vendor / Contact")]),t._v(" "),s("div",{staticClass:"col-lg-5"},[s("model-list-select",{staticClass:"rounded-0",attrs:{list:t.txnContacts,"is-disabled":t.txnForm.disabled,"option-value":"id","option-text":"display_name",placeholder:"select contact"},on:{searchchange:t.txnFetchContacts,input:t.txnContactSelect},model:{value:t.txnAttributes.contact,callback:function(e){t.$set(t.txnAttributes,"contact",e)},expression:"txnAttributes.contact"}})],1)]):t._e(),t._v(" "),s("div",{staticClass:"form-group row"},[s("div",{staticClass:"card-body p-0"},[s("ul",{staticClass:"nav nav-tabs nav-tabs-highlight mb-1"},[s("li",{staticClass:"nav-item mb-0",staticStyle:{width:"38px !important"}}),t._v(" "),s("li",{staticClass:"nav-item mb-0"},[s("a",{staticClass:"nav-link",attrs:{href:"#pill-badges-tab1","data-toggle":"tab"}},[s("span",{staticClass:"badge badge-success badge-pill mr-2"},[t._v(t._s(t.txnAttributes.inputs?t.txnAttributes.inputs.length:0))]),t._v(" Input\n                                        ")])]),t._v(" "),s("li",{staticClass:"nav-item mb-0"},[s("a",{staticClass:"nav-link active",attrs:{href:"#pill-badges-tab2","data-toggle":"tab"}},[s("span",{staticClass:"badge badge-primary badge-pill mr-2"},[t._v(t._s(t.txnAttributes.items.length))]),t._v(" Output / Items\n                                        ")])])]),t._v(" "),s("div",{staticClass:"tab-content"},[t.txnAttributes.inputs?s("div",{staticClass:"tab-pane fade",attrs:{id:"pill-badges-tab1"}},[s("table",{staticClass:"table table-bordered border-left-0 border-right-0 border-bottom-0"},[t._m(1),t._v(" "),s("tbody",{attrs:{id:"items_field_rows"}},t._l(t.txnAttributes.inputs,(function(e,a){return s("tr",[s("td",{staticClass:"pl-2 pr-2 pt-1 pb-1 align-center"},[s("i",{class:[e.inventory_tracking?"icon-check2 text-success font-weight-bold":"icon-cross3"],attrs:{title:[e.inventory_tracking?"Inventory / stock is tracked":"Inventory tracking is not set"]}})]),t._v(" "),s("td",{staticClass:"td_item_selector p-0 rg_select2_border_none"},[s("model-list-select",{staticClass:"border-0 rounded-0",attrs:{list:t.txnItems,"is-disabled":t.txnForm.disabled,"option-value":"id","option-text":"name","option-item-row":a,"option-tag":"",placeholder:"Select item"},on:{input:t.txnInputSelect,searchchange:t.txnFetchItems},model:{value:e.selectedItem,callback:function(s){t.$set(e,"selectedItem",s)},expression:"item.selectedItem"}})],1),t._v(" "),s("td",{staticClass:"p-0"},[s("select",{staticClass:"form-control select-search __inputs__",attrs:{id:"select-input-account-"+a,"data-input-index":a,"data-container-css-class":"border-0","data-placeholder":"Select account"}},[s("option"),t._v(" "),t._l(t.billDebitFinancialAccounts,(function(e,a){return s("optgroup",{attrs:{label:a}},t._l(e,(function(e){return s("option",{domProps:{value:e.code}},[t._v(t._s(e.name))])})),0)}))],2)]),t._v(" "),s("td",{staticClass:"p-0"},[s("vue-numeric",{staticClass:"item_row_quantity form-control border-0 text-right",attrs:{separator:",",min:0,precision:2},on:{input:t.txnTotal},model:{value:e.quantity,callback:function(s){t.$set(e,"quantity",s)},expression:"item.quantity"}})],1)])})),0),t._v(" "),s("tbody",[s("tr",[s("td",{staticClass:"border-0",attrs:{colspan:"4"}},[s("button",{staticClass:"btn btn-link pt-0 pb-0 font-weight-bold",attrs:{type:"button"},on:{click:t.txnInputCreate}},[s("i",{staticClass:"icon-plus2 mr-2"}),t._v(" Add another input line\n                                                    ")])])])])])]):t._e(),t._v(" "),s("div",{staticClass:"tab-pane fade show active",attrs:{id:"pill-badges-tab2"}},[s("table",{staticClass:"table table-bordered border-left-0 border-right-0 border-bottom-0"},[s("thead",{staticClass:"thead-default bg-light"},[s("tr",[t._m(2),t._v(" "),s("th",{staticClass:"font-weight-bold",attrs:{width:"30%"}},[t._v("Item Details")]),t._v(" "),s("th",{staticClass:"font-weight-bold",attrs:{width:"20%"}},[t._v("Account")]),t._v(" "),s("th",{staticClass:"text-right font-weight-bold",attrs:{width:"8%"}},[t._v("Quantity")]),t._v(" "),s("th",{staticClass:"text-right font-weight-bold",attrs:{width:"11%"}},[t._v("Cost")]),t._v(" "),s("th",{staticClass:"text-right font-weight-bold",attrs:{width:"13%"}},[t._v("Total")]),t._v(" "),s("th",{staticClass:"text-right font-weight-bold p-0",attrs:{width:"1%"}},[s("button",{staticClass:"btn bg-danger bg-transparent text-danger btn-icon",attrs:{type:"button",title:"Clear all items"},on:{click:t.txnItemsClearAll}},[s("i",{staticClass:"icon-cross3"})])])])]),t._v(" "),s("tbody",{attrs:{id:"items_field_rows"}},t._l(t.txnAttributes.items,(function(e,a){return s("tr",[s("td",{staticClass:"pl-2 pr-2 pt-1 pb-1 align-center"},[s("i",{class:[e.inventory_tracking?"icon-check2 text-success font-weight-bold":"icon-cross3"],attrs:{title:[e.inventory_tracking?"Inventory / stock is tracked":"Inventory tracking is not set"]}})]),t._v(" "),s("td",{staticClass:"td_item_selector p-0 rg_select2_border_none"},[s("model-list-select",{ref:"rowItemSelector",refInFor:!0,staticClass:"border-0 rounded-0",attrs:{list:t.txnItems,"is-disabled":t.txnForm.disabled,"option-value":"id","option-text":"name","option-item-row":a,"option-tag":"",placeholder:"Select item"},on:{input:t.txnItemsSelect,searchchange:t.txnFetchItems},model:{value:e.selectedItem,callback:function(s){t.$set(e,"selectedItem",s)},expression:"item.selectedItem"}})],1),t._v(" "),s("td",{staticClass:"p-0"},[s("select",{staticClass:"form-control select-search",attrs:{id:"select-item-account-"+a,"data-item-index":a,"data-container-css-class":"border-0","data-placeholder":"Select account"}},[s("option"),t._v(" "),t._l(t.billDebitFinancialAccounts,(function(e,a){return s("optgroup",{attrs:{label:a}},t._l(e,(function(e){return s("option",{domProps:{value:e.code}},[t._v(t._s(e.name))])})),0)}))],2)]),t._v(" "),s("td",{staticClass:"p-0"},[s("vue-numeric",{staticClass:"item_row_quantity form-control border-0 text-right",attrs:{separator:",",min:0,precision:2},on:{input:t.txnTotal},model:{value:e.quantity,callback:function(s){t.$set(e,"quantity",s)},expression:"item.quantity"}})],1),t._v(" "),s("td",{staticClass:"p-0"},[s("vue-numeric",{staticClass:"item_row_rate form-control m-input border-0 text-right",attrs:{separator:",",min:0,precision:2},on:{input:t.txnTotal},model:{value:e.rate,callback:function(s){t.$set(e,"rate",s)},expression:"item.rate"}})],1),t._v(" "),s("td",{staticClass:"text-right pt-1 pb-1"},[t._v(t._s(t.$root.numberFormat(e.displayTotal)))]),t._v(" "),s("td",{staticClass:"p-0"},[s("button",{staticClass:"btn bg-danger bg-transparent text-danger btn-icon",attrs:{type:"button",title:"Delete row"},on:{click:function(e){return t.txnItemsRemove(a)}}},[s("i",{staticClass:"icon-cross3"})])])])})),0),t._v(" "),s("tbody",[s("tr",[s("td",{staticClass:"border-0",attrs:{colspan:"3"}},[s("button",{staticClass:"btn btn-link pt-0 pb-0 font-weight-bold",attrs:{type:"button"},on:{click:t.txnItemsCreate}},[s("i",{staticClass:"icon-plus2 mr-2"}),t._v(" Add another line\n                                                        ")])]),t._v(" "),s("td",{staticClass:"pl-15 border-left-0 border-top-0 border-right-0 font-weight-bold",attrs:{colspan:"2"}},[t._v("Sub Total\n                                                    ")]),t._v(" "),s("td",{staticClass:"border-left-0 border-top-0 border-right-0 text-right rg-txn-total-pr",attrs:{id:"txn_subtotal",colspan:"2"}},[t._v("\n                                                        "+t._s(t.$root.numberFormat(t.txnAttributes.taxable_amount))+"\n                                                    ")])])]),t._v(" "),s("tfoot",[s("tr",[s("td",{staticClass:"p-15 border-0",attrs:{colspan:"3"}}),t._v(" "),s("td",{staticClass:"p-15 border-left-0 border-top-0 border-right-0 font-weight-bold size4of5",attrs:{colspan:"2"}},[t._v("\n                                                        TOTAL\n                                                        "),t.txnAttributes.base_currency?s("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v("\n                                                                "+t._s(t.txnAttributes.base_currency)+"\n                                                            ")]):t._e()]),t._v(" "),s("td",{staticClass:"border-left-0 border-top-0 border-right-0 font-weight-bold size4of5 text-right rg-txn-total-pr",attrs:{id:"txn_total",colspan:"2"}},[t._v("\n                                                        "+t._s(t.$root.numberFormat(t.txnAttributes.total))+"\n                                                    ")])])])])])])])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label"},[t._v("\n                                Contact notes:\n                            ")]),t._v(" "),s("div",{staticClass:"col-lg-10"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.txnAttributes.contact_notes,expression:"txnAttributes.contact_notes"}],staticClass:"form-control rounded-0",attrs:{rows:"2",placeholder:"Contact notes"},domProps:{value:t.txnAttributes.contact_notes},on:{input:function(e){e.target.composing||t.$set(t.txnAttributes,"contact_notes",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"text-left col-md-10 offset-md-2 p-0"},[s("div",{staticClass:"btn-group ml-1"},[t._m(3),t._v(" "),s("div",{staticClass:"dropdown-menu dropdown-menu-left"},[s("a",{staticClass:"dropdown-item",attrs:{href:"/"},on:{click:function(e){return e.preventDefault(),t.txnOnSave("draft",!1)}}},[s("i",{staticClass:"icon-file-text3"}),t._v(" Save as draft\n                                    ")]),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"/"},on:{click:function(e){return e.preventDefault(),t.txnOnSave("Approved",!1)}}},[s("i",{staticClass:"icon-file-check2"}),t._v(" Save and Approve\n                                    ")]),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"/"},on:{click:function(e){return e.preventDefault(),t.txnOnSave("Approved",!0)}}},[s("i",{staticClass:"icon-mention"}),t._v(" Save, approve and send\n                                    ")])])]),t._v(" "),s("button",{staticClass:"btn btn-danger font-weight-bold",attrs:{type:"submit"}},[s("i",{staticClass:"icon-file-plus2 mr-1"}),t._v(" "+t._s(t.txnSubmitBtnText)+"\n                            ")])])])])],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",{staticClass:"thead-default bg-light"},[e("tr",[e("th",{staticClass:"font-weight-bold pl-2 pr-2",attrs:{width:"1%",title:"Inventory / stock tracking"}},[e("i",{staticClass:"icon-box"})]),this._v(" "),e("th",{staticClass:"font-weight-bold",attrs:{width:"30%"}},[this._v("Input details")]),this._v(" "),e("th",{staticClass:"font-weight-bold",attrs:{width:"20%"}},[this._v("Account")]),this._v(" "),e("th",{staticClass:"text-right font-weight-bold",attrs:{width:"8%"}},[this._v("Quantity")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("th",{staticClass:"font-weight-bold pl-2 pr-2",attrs:{width:"1%",title:"Inventory / stock tracking"}},[e("i",{staticClass:"icon-box"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-outline bg-purple-300 border-purple-300 text-purple-800 btn-icon border-2 dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown"}},[e("i",{staticClass:"icon-cog"})])}],!1,null,null,null);e.default=c.exports},ilt0:function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,"\n.nav-tabs-highlight .nav-link:before {\n    height: 0px;\n}\n.nav-tabs {\n    border-bottom: 2px solid #ddd;\n}\n",""])}}]);