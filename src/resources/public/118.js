(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{IMsk:function(t,e,a){"use strict";a.r(e);var s={components:{},data:function(){return{}},created:function(){this.pageTitle="Create Delivery Note",this.pageAction="Create"},mounted:function(){this.$root.appMenu("accounting"),this.txnCreateData(),this.txnFetchContacts("-initiate-"),this.txnFetchItems("-initiate-"),this.txnFetchTaxes()},methods:{},beforeUpdate:function(){},updated:function(){},destroyed:function(){}},n=a("KHd+"),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"page-header page-header-light"},[a("div",{staticClass:"page-header-content header-elements-md-inline"},[a("div",{staticClass:"page-title d-flex"},[a("h4",[a("i",{staticClass:"icon-file-plus"}),t._v("\n                    "+t._s(t.pageTitle)+"\n                ")])])]),t._v(" "),a("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[a("div",{staticClass:"d-flex"},[a("div",{staticClass:"breadcrumb"},[a("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[a("i",{staticClass:"icon-home2 mr-2"}),t._v(" "),a("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(" "+t._s(t._f("truncate")(this.$root.tenant.name,30))+" ")])]),t._v(" "),a("span",{staticClass:"breadcrumb-item"},[t._v("Inventory")]),t._v(" "),a("span",{staticClass:"breadcrumb-item"},[t._v("Delivery Notes")]),t._v(" "),a("span",{staticClass:"breadcrumb-item active"},[t._v(t._s(t.pageAction))])]),t._v(" "),t._m(0)]),t._v(" "),a("div",{staticClass:"header-elements"},[a("div",{staticClass:"breadcrumb justify-content-center"},[a("router-link",{staticClass:" btn btn-danger btn-sm rounded-round font-weight-bold",attrs:{to:t.txnUrlStore}},[a("i",{staticClass:"icon-drawer3 mr-2"}),t._v("\n                        Delivery Notes\n                    ")])],1)])])]),t._v(" "),a("div",{staticClass:"content border-0 padding-0"},[a("div",{staticClass:"card shadow-none rounded-0 border-0"},[a("div",{staticClass:"card-body p-0"},[a("loading-animation"),t._v(" "),this.$root.loading?t._e():a("form",{staticClass:"max-width-1040",staticStyle:{"margin-bottom":"100px"},attrs:{action:"",method:"post",autocomplete:"off"},on:{submit:t.txnFormSubmit}},[a("input",{attrs:{type:"hidden",name:"submit",value:"1"}}),t._v(" "),a("input",{attrs:{type:"hidden",name:"id"},domProps:{value:t.txnAttributes.id}}),t._v(" "),a("input",{attrs:{type:"hidden",name:"contact_name",value:""}}),t._v(" "),a("input",{attrs:{type:"hidden",name:"internal_ref"},domProps:{value:t.txnAttributes.internal_ref}}),t._v(" "),a("input",{attrs:{type:"hidden",name:"quote_currency"},domProps:{value:t.$root.tenant.base_currency}}),t._v(" "),a("fieldset",{staticClass:"select_contact_required",attrs:{id:"fieldset_select_contact"}},[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-form-label col-lg-2 text-danger font-weight-bold"},[t._v("Customer")]),t._v(" "),a("div",{staticClass:"col-lg-5"},[a("model-list-select",{attrs:{list:t.txnContacts,"option-value":"id","option-text":"display_name",placeholder:"select contact"},on:{searchchange:t.txnFetchContacts,input:t.txnContactSelect},model:{value:t.txnAttributes.contact,callback:function(e){t.$set(t.txnAttributes,"contact",e)},expression:"txnAttributes.contact"}})],1)])]),t._v(" "),a("fieldset",{},[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-2 col-form-label font-weight-bold"},[t._v("\n                                Credit Note No. & Date:\n                            ")]),t._v(" "),a("div",{staticClass:"col-lg-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.txnAttributes.number,expression:"txnAttributes.number"}],staticClass:"form-control input-roundless",attrs:{type:"text",name:"number",placeholder:"Note number"},domProps:{value:t.txnAttributes.number},on:{input:function(e){e.target.composing||t.$set(t.txnAttributes,"number",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"col-lg-2",attrs:{title:"Invoice date"}},[a("date-picker",{staticClass:"font-weight-bold w-100 h-100",attrs:{valueType:"format",lang:t.vue2DatePicker.lang,placeholder:"Invoice date"},model:{value:t.txnAttributes.date,callback:function(e){t.$set(t.txnAttributes,"date",e)},expression:"txnAttributes.date"}})],1)]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-2 col-form-label"},[t._v("\n                                Reference:\n                            ")]),t._v(" "),a("div",{staticClass:"col-lg-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.txnAttributes.reference,expression:"txnAttributes.reference"}],staticClass:"form-control input-roundless",attrs:{type:"text",name:"reference",placeholder:"Enter reference"},domProps:{value:t.txnAttributes.reference},on:{input:function(e){e.target.composing||t.$set(t.txnAttributes,"reference",e.target.value)}}})])])]),t._v(" "),a("fieldset",{},[a("div",{staticClass:"form-group row"},[a("table",{staticClass:"table table-bordered border-left-0 border-right-0 border-bottom-0"},[a("thead",{staticClass:"thead-default bg-light"},[a("tr",[a("th",{staticClass:"font-weight-bold",attrs:{width:"59%"}},[t._v("Item / description")]),t._v(" "),a("th",{staticClass:"font-weight-bold",attrs:{width:"25%"}},[t._v("Batch")]),t._v(" "),a("th",{staticClass:"text-right font-weight-bold",attrs:{width:"15%"}},[t._v("Quantity")]),t._v(" "),a("th",{staticClass:"text-right font-weight-bold p-0",attrs:{width:"1%"}},[a("button",{staticClass:"btn bg-danger bg-transparent text-danger btn-icon",attrs:{type:"button",title:"Clear all items"},on:{click:t.txnItemsClearAll}},[a("i",{staticClass:"icon-cross3"})])])])]),t._v(" "),a("tbody",{attrs:{id:"items_field_rows"}},t._l(t.txnAttributes.items,(function(e,s){return a("tr",[a("td",{staticClass:"td_item_selector p-0 rg_select2_border_none"},[a("model-list-select",{staticClass:"border-0",attrs:{list:t.txnItems,"option-value":"id","option-text":"name","option-item-row":s,placeholder:"Select item"},on:{input:t.txnItemsSelect,searchchange:t.txnFetchItems},model:{value:e.selectedItem,callback:function(a){t.$set(e,"selectedItem",a)},expression:"item.selectedItem"}})],1),t._v(" "),a("td",{staticClass:"p-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.batch,expression:"item.batch"}],staticClass:"form-control border-0 bg-transparent",attrs:{type:"text",placeholder:"Batch"},domProps:{value:e.batch},on:{input:function(a){a.target.composing||t.$set(e,"batch",a.target.value)}}})]),t._v(" "),a("td",{staticClass:"p-0"},[a("vue-numeric",{staticClass:"item_row_quantity form-control border-0 text-right font-weight-bold",attrs:{separator:",",min:0},on:{input:t.txnTotal},model:{value:e.quantity,callback:function(a){t.$set(e,"quantity",a)},expression:"item.quantity"}})],1),t._v(" "),a("td",{staticClass:"p-0"},[a("button",{staticClass:"btn bg-danger bg-transparent text-danger btn-icon",attrs:{type:"button",title:"Delete row"},on:{click:function(e){return t.txnItemsRemove(s)}}},[a("i",{staticClass:"icon-cross3"})])])])})),0),t._v(" "),a("tfoot",[a("tr",[a("td",{staticClass:"border-0",attrs:{colspan:"5"}},[a("button",{staticClass:"btn btn-link pt-0 pb-0 font-weight-bold",attrs:{type:"button"},on:{click:t.txnItemsCreate}},[a("i",{staticClass:"icon-plus2 mr-2"}),t._v(" Add another line\n                                            ")])])])])])])]),t._v(" "),a("fieldset",{},[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-form-label col-lg-2"},[t._v("Attach files")]),t._v(" "),a("div",{staticClass:"col-lg-10"},[a("input",{ref:"filesAttached",staticClass:"form-control border-0 p-1 h-auto",attrs:{type:"file",multiple:""}})])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-2 col-form-label"},[t._v("\n                                Contact notes:\n                            ")]),t._v(" "),a("div",{staticClass:"col-lg-10"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.txnAttributes.contact_notes,expression:"txnAttributes.contact_notes"}],staticClass:"form-control input-roundless",attrs:{rows:"2",placeholder:"Contact notes"},domProps:{value:t.txnAttributes.contact_notes},on:{input:function(e){e.target.composing||t.$set(t.txnAttributes,"contact_notes",e.target.value)}}})])])]),t._v(" "),a("div",{staticClass:"text-left col-md-10 offset-md-2 p-0"},[a("div",{staticClass:"btn-group ml-1"},[t._m(1),t._v(" "),a("div",{staticClass:"dropdown-menu dropdown-menu-left"},[a("a",{staticClass:"dropdown-item",attrs:{href:"/"},on:{click:function(e){return e.preventDefault(),t.txnOnSave("draft",!1)}}},[a("i",{staticClass:"icon-file-text3"}),t._v(" Save as draft\n                                ")]),t._v(" "),a("a",{staticClass:"dropdown-item",attrs:{href:"/"},on:{click:function(e){return e.preventDefault(),t.txnOnSave("Approved",!1)}}},[a("i",{staticClass:"icon-file-check2"}),t._v(" Save and approve\n                                ")]),t._v(" "),a("a",{staticClass:"dropdown-item",attrs:{href:"/"},on:{click:function(e){return e.preventDefault(),t.txnOnSave("Approved",!0)}}},[a("i",{staticClass:"icon-mention"}),t._v(" Save, approve and send\n                                ")])])]),t._v(" "),a("button",{staticClass:"btn btn-danger font-weight-bold",attrs:{type:"submit"}},[a("i",{staticClass:"icon-file-plus2 mr-1"}),t._v(" "+t._s(t.txnSubmitBtnText)+"\n                        ")])])])],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-outline bg-purple-300 border-purple-300 text-purple-800 btn-icon border-2 dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown"}},[e("i",{staticClass:"icon-cog"})])}],!1,null,null,null);e.default=i.exports}}]);