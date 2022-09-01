(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{c3xm:function(t,e,s){"use strict";s.r(e);var a={components:{},data:function(){return{}},created:function(){this.pageTitle="Create Goods Returned Note",this.pageAction="Create"},mounted:function(){this.$root.appMenu("accounting"),this.txnCreateData(),this.txnFetchContacts("-initiate-"),this.txnFetchItems("-initiate-"),this.txnFetchTaxes()},methods:{},beforeUpdate:function(){},updated:function(){},destroyed:function(){}},n=s("KHd+"),i=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content-wrapper"},[s("div",{staticClass:"page-header page-header-light"},[s("div",{staticClass:"page-header-content header-elements-md-inline"},[s("div",{staticClass:"page-title d-flex"},[s("h4",[s("i",{staticClass:"icon-file-plus"}),t._v("\n                    "+t._s(t.pageTitle)+"\n                ")])])]),t._v(" "),s("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[s("div",{staticClass:"d-flex"},[s("div",{staticClass:"breadcrumb"},[s("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[s("i",{staticClass:"icon-home2 mr-2"}),t._v(" "),s("span",{staticClass:"badge badge-primary font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(" "+t._s(t._f("truncate")(this.$root.tenant.name,30))+" ")])]),t._v(" "),s("span",{staticClass:"breadcrumb-item"},[t._v("Inventory")]),t._v(" "),s("span",{staticClass:"breadcrumb-item"},[t._v("Goods Returned Note")]),t._v(" "),s("span",{staticClass:"breadcrumb-item active"},[t._v(t._s(t.pageAction))])]),t._v(" "),t._m(0)]),t._v(" "),s("div",{staticClass:"header-elements"},[s("div",{staticClass:"breadcrumb justify-content-center"},[s("router-link",{staticClass:" btn btn-danger btn-sm font-weight-bold",attrs:{to:t.txnUrlStore}},[s("i",{staticClass:"icon-drawer3 mr-2"}),t._v("\n                        Goods Returned Notes\n                    ")])],1)])])]),t._v(" "),s("div",{staticClass:"content border-0 padding-0"},[s("div",{staticClass:"card shadow-none rounded-0 border-0"},[s("div",{staticClass:"card-body p-0"},[s("loading-animation"),t._v(" "),this.$root.loading?t._e():s("form",{staticClass:"max-width-1040",staticStyle:{"margin-bottom":"100px"},attrs:{action:"",method:"post",autocomplete:"off"},on:{submit:t.txnFormSubmit}},[s("fieldset",{attrs:{disabled:t.txnForn.disabled}},[s("input",{attrs:{type:"hidden",name:"submit",value:"1"}}),t._v(" "),s("input",{attrs:{type:"hidden",name:"id"},domProps:{value:t.txnAttributes.id}}),t._v(" "),s("input",{attrs:{type:"hidden",name:"contact_name",value:""}}),t._v(" "),s("input",{attrs:{type:"hidden",name:"internal_ref"},domProps:{value:t.txnAttributes.internal_ref}}),t._v(" "),s("input",{attrs:{type:"hidden",name:"quote_currency"},domProps:{value:t.$root.tenant.base_currency}}),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-form-label col-lg-2"},[t._v("Customer")]),t._v(" "),s("div",{staticClass:"col-lg-5"},[s("model-list-select",{staticClass:"rounded-0",attrs:{list:t.txnContacts,"is-disabled":t.txnForn.disabled,"option-value":"id","option-text":"display_name",placeholder:"select contact"},on:{searchchange:t.txnFetchContacts,input:t.txnContactSelect},model:{value:t.txnAttributes.contact,callback:function(e){t.$set(t.txnAttributes,"contact",e)},expression:"txnAttributes.contact"}})],1)]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label"},[t._v("\n                                Note No. & Date:\n                            ")]),t._v(" "),s("div",{staticClass:"col-lg-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.txnAttributes.number,expression:"txnAttributes.number"}],staticClass:"form-control rounded-0",attrs:{type:"text",name:"number",placeholder:" Number"},domProps:{value:t.txnAttributes.number},on:{input:function(e){e.target.composing||t.$set(t.txnAttributes,"number",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"col-lg-2",attrs:{title:"Invoice date"}},[s("date-picker",{staticClass:"font-weight-bold w-100 h-100",attrs:{valueType:"format",lang:t.vue2DatePicker.lang,placeholder:"Invoice date"},model:{value:t.txnAttributes.date,callback:function(e){t.$set(t.txnAttributes,"date",e)},expression:"txnAttributes.date"}})],1)]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label"},[t._v("\n                                Reference:\n                            ")]),t._v(" "),s("div",{staticClass:"col-lg-5"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.txnAttributes.reference,expression:"txnAttributes.reference"}],staticClass:"form-control rounded-0",attrs:{type:"text",name:"reference",placeholder:"Enter reference"},domProps:{value:t.txnAttributes.reference},on:{input:function(e){e.target.composing||t.$set(t.txnAttributes,"reference",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("table",{staticClass:"table table-bordered border-left-0 border-right-0 border-bottom-0"},[s("thead",{staticClass:"thead-default bg-light"},[s("tr",[t._m(1),t._v(" "),s("th",{staticClass:"font-weight-bold",attrs:{width:"58%"}},[t._v("Item / description")]),t._v(" "),s("th",{staticClass:"font-weight-bold",attrs:{width:"25%"}},[t._v("Batch")]),t._v(" "),s("th",{staticClass:"text-right font-weight-bold",attrs:{width:"15%"}},[t._v("Quantity")]),t._v(" "),s("th",{staticClass:"text-right font-weight-bold p-0",attrs:{width:"1%"}},[s("button",{staticClass:"btn bg-danger bg-transparent text-danger btn-icon",attrs:{type:"button",title:"Clear all items"},on:{click:t.txnItemsClearAll}},[s("i",{staticClass:"icon-cross3"})])])])]),t._v(" "),s("tbody",{attrs:{id:"items_field_rows"}},t._l(t.txnAttributes.items,(function(e,a){return s("tr",[s("td",{staticClass:"pl-2 pr-2 pt-1 pb-1 align-center"},[s("i",{class:[e.inventory_tracking?"icon-check2 text-success font-weight-bold":"icon-cross3"],attrs:{title:[e.inventory_tracking?"Inventory / stock is tracked":"Inventory tracking is not set"]}})]),t._v(" "),s("td",{staticClass:"td_item_selector p-0 rg_select2_border_none"},[s("model-list-select",{staticClass:"border-0 rounded-0",attrs:{list:t.txnItems,"is-disabled":t.txnForn.disabled,"option-value":"id","option-text":"name","option-item-row":a,"option-tag":"",placeholder:"Select item"},on:{input:t.txnItemsSelect,searchchange:t.txnFetchItems},model:{value:e.selectedItem,callback:function(s){t.$set(e,"selectedItem",s)},expression:"item.selectedItem"}})],1),t._v(" "),s("td",{staticClass:"p-0"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.batch,expression:"item.batch"}],staticClass:"form-control border-0 bg-transparent",attrs:{type:"text",placeholder:"Batch"},domProps:{value:e.batch},on:{input:function(s){s.target.composing||t.$set(e,"batch",s.target.value)}}})]),t._v(" "),s("td",{staticClass:"p-0"},[s("vue-numeric",{staticClass:"item_row_quantity form-control border-0 text-right",attrs:{separator:",",precision:2,min:0},on:{input:t.txnTotal},model:{value:e.quantity,callback:function(s){t.$set(e,"quantity",s)},expression:"item.quantity"}})],1),t._v(" "),s("td",{staticClass:"p-0"},[s("button",{staticClass:"btn bg-danger bg-transparent text-danger btn-icon",attrs:{type:"button",title:"Delete row"},on:{click:function(e){return t.txnItemsRemove(a)}}},[s("i",{staticClass:"icon-cross3"})])])])})),0),t._v(" "),s("tbody",[s("tr",[s("td",{staticClass:"border-0",attrs:{colspan:"5"}},[s("button",{staticClass:"btn btn-link pt-0 pb-0 font-weight-bold",attrs:{type:"button"},on:{click:t.txnItemsCreate}},[s("i",{staticClass:"icon-plus2 mr-2"}),t._v(" Add another line\n                                            ")])])])])])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-form-label col-lg-2"},[t._v("Attach files")]),t._v(" "),s("div",{staticClass:"col-lg-10"},[s("input",{ref:"filesAttached",staticClass:"form-control border-0 p-1 h-auto",attrs:{type:"file",multiple:""}})])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label"},[t._v("\n                                Contact notes:\n                            ")]),t._v(" "),s("div",{staticClass:"col-lg-10"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.txnAttributes.contact_notes,expression:"txnAttributes.contact_notes"}],staticClass:"form-control rounded-0",attrs:{rows:"2",placeholder:"Contact notes"},domProps:{value:t.txnAttributes.contact_notes},on:{input:function(e){e.target.composing||t.$set(t.txnAttributes,"contact_notes",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"text-left col-md-10 offset-md-2 p-0"},[s("div",{staticClass:"btn-group ml-1"},[t._m(2),t._v(" "),s("div",{staticClass:"dropdown-menu dropdown-menu-left"},[s("a",{staticClass:"dropdown-item",attrs:{href:"/"},on:{click:function(e){return e.preventDefault(),t.txnOnSave("draft",!1)}}},[s("i",{staticClass:"icon-file-text3"}),t._v(" Save as draft\n                                    ")]),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"/"},on:{click:function(e){return e.preventDefault(),t.txnOnSave("Approved",!1)}}},[s("i",{staticClass:"icon-file-check2"}),t._v(" Save and Approve\n                                    ")]),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"/"},on:{click:function(e){return e.preventDefault(),t.txnOnSave("Approved",!0)}}},[s("i",{staticClass:"icon-mention"}),t._v(" Save, approve and send\n                                    ")])])]),t._v(" "),s("button",{staticClass:"btn btn-danger font-weight-bold",attrs:{type:"submit"}},[s("i",{staticClass:"icon-file-plus2 mr-1"}),t._v(" "+t._s(t.txnSubmitBtnText)+"\n                            ")])])])])],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("th",{staticClass:"font-weight-bold pl-2 pr-2",attrs:{width:"1%",title:"Inventory / stock tracking"}},[e("i",{staticClass:"icon-box"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-outline bg-purple-300 border-purple-300 text-purple-800 btn-icon border-2 dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown"}},[e("i",{staticClass:"icon-cog"})])}],!1,null,null,null);e.default=i.exports}}]);