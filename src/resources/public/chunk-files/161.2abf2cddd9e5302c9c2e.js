(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{"3iWz":function(t,e,a){"use strict";a.r(e);var s={components:{},data:function(){return{}},created:function(){this.pageTitle="Create Retainer Invoice",this.pageAction="Create"},mounted:function(){this.$root.appMenu("accounting"),this.txnCreateData(),this.txnFetchCustomers("-initiate-"),this.txnFetchItems("-initiate-"),this.txnFetchTaxes()},methods:{},beforeUpdate:function(){},updated:function(){},destroyed:function(){}},r=a("KHd+"),n=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"page-header page-header-light"},[a("div",{staticClass:"page-header-content header-elements-md-inline"},[a("div",{staticClass:"page-title d-flex"},[a("h4",[a("i",{staticClass:"icon-file-plus"}),t._v("\n                        "+t._s(t.pageTitle)+"\n                    ")])]),t._v(" "),a("div",{staticClass:"header-elements"},[a("div",{staticClass:"breadcrumb justify-content-center"},[a("router-link",{staticClass:" btn btn-danger btn-sm font-weight-bold",attrs:{to:t.txnUrlStore}},[a("i",{staticClass:"icon-drawer3 mr-2"}),t._v("\n                            Retainer Invoices\n                        ")])],1)])]),t._v(" "),a("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[a("div",{staticClass:"d-flex"},[a("div",{staticClass:"breadcrumb"},[a("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[a("i",{staticClass:"icon-home2 mr-2"}),t._v(" "),a("span",{staticClass:"badge badge-primary font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(" "+t._s(t._f("truncate")(this.$root.tenant.name,30))+" ")])]),t._v(" "),a("span",{staticClass:"breadcrumb-item"},[t._v("Retainer Invoices")]),t._v(" "),a("span",{staticClass:"breadcrumb-item active"},[t._v(t._s(t.pageAction))])]),t._v(" "),t._m(0)])])]),t._v(" "),a("div",{staticClass:"content border-0 padding-0"},[a("div",{staticClass:"card shadow-none rounded-0 border-0"},[a("div",{staticClass:"card-body p-0"},[a("loading-animation"),t._v(" "),this.$root.loading?t._e():a("form",{staticClass:"max-width-1040",staticStyle:{"margin-bottom":"100px"},attrs:{action:"",method:"post",autocomplete:"off"},on:{submit:t.txnFormSubmit}},[a("fieldset",{attrs:{disabled:t.txnForm.disabled}},[a("input",{attrs:{type:"hidden",name:"submit",value:"1"}}),t._v(" "),a("input",{attrs:{type:"hidden",name:"id"},domProps:{value:t.txnAttributes.id}}),t._v(" "),a("input",{attrs:{type:"hidden",name:"contact_name",value:""}}),t._v(" "),a("input",{attrs:{type:"hidden",name:"internal_ref"},domProps:{value:t.txnAttributes.internal_ref}}),t._v(" "),a("input",{attrs:{type:"hidden",name:"quote_currency"},domProps:{value:t.$root.tenant.base_currency}}),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-form-label col-lg-2 text-danger"},[t._v("Customer *")]),t._v(" "),a("div",{staticClass:"col-lg-5"},[a("model-list-select",{staticClass:"rounded-0",attrs:{list:t.txnContacts,"is-disabled":t.txnForm.disabled,"option-value":"id","option-text":"display_name",placeholder:"select contact"},on:{searchchange:t.txnFetchCustomers,input:t.txnContactSelect},model:{value:t.txnAttributes.contact,callback:function(e){t.$set(t.txnAttributes,"contact",e)},expression:"txnAttributes.contact"}})],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.txnAttributes.contact_id,expression:"txnAttributes.contact_id"}],staticClass:"col-lg-1 p-0"},[a("model-list-select",{staticClass:"rounded-0",attrs:{list:t.txnAttributes.contact.currencies,"option-value":"code","option-text":"code",placeholder:"select currency"},model:{value:t.txnAttributes.contact.currency,callback:function(e){t.$set(t.txnAttributes.contact,"currency",e)},expression:"txnAttributes.contact.currency"}})],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.txnAttributes.contact_id&&t.txnAttributes.base_currency!=t.txnAttributes.quote_currency,expression:"txnAttributes.contact_id && txnAttributes.base_currency != txnAttributes.quote_currency"}],staticClass:"col-lg-3 pr-0"},[a("div",{staticClass:"input-group"},[t._m(1),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.txnAttributes.exchange_rate,expression:"txnAttributes.exchange_rate"}],staticClass:"form-control text-right rounded-0",attrs:{type:"text",placeholder:"Exchange rate"},domProps:{value:t.txnAttributes.exchange_rate},on:{input:function(e){e.target.composing||t.$set(t.txnAttributes,"exchange_rate",e.target.value)}}})])])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-2 col-form-label text-danger"},[t._v("\n                                    Invoice Number & Date *\n                                ")]),t._v(" "),a("div",{staticClass:"col-lg-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.txnAttributes.number,expression:"txnAttributes.number"}],staticClass:"form-control rounded-0",attrs:{type:"text",name:"number",placeholder:"Number"},domProps:{value:t.txnAttributes.number},on:{input:function(e){e.target.composing||t.$set(t.txnAttributes,"number",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"col-lg-2",attrs:{title:"Invoice date"}},[a("date-picker",{staticClass:"font-weight-bold w-100 h-100",attrs:{valueType:"format",lang:t.vue2DatePicker.lang,placeholder:"Invoice date"},model:{value:t.txnAttributes.date,callback:function(e){t.$set(t.txnAttributes,"date",e)},expression:"txnAttributes.date"}})],1)]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-2 col-form-label"},[t._v("\n                                    Reference\n                                ")]),t._v(" "),a("div",{staticClass:"col-lg-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.txnAttributes.reference,expression:"txnAttributes.reference"}],staticClass:"form-control rounded-0",attrs:{type:"text",name:"reference",placeholder:"Enter reference"},domProps:{value:t.txnAttributes.reference},on:{input:function(e){e.target.composing||t.$set(t.txnAttributes,"reference",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("table",{staticClass:"table table-bordered border-left-0 border-right-0 border-bottom-0"},[a("thead",{staticClass:"thead-default bg-light"},[a("tr",[a("th",{staticClass:"font-weight-bold",attrs:{width:"50%"}},[t._v("Item / description")]),t._v(" "),a("th",{staticClass:"text-right font-weight-bold",attrs:{width:"8%"}},[t._v("Quantity")]),t._v(" "),a("th",{staticClass:"text-right font-weight-bold",attrs:{width:"11%"}},[t._v("Rate")]),t._v(" "),a("th",{staticClass:"text-right font-weight-bold p-0",attrs:{width:"18%"}},[a("div",{staticClass:"input-group"},[a("input",{staticClass:"rg-txn-item-row-total form-control border-0 text-right font-weight-bold bg-transparent",attrs:{type:"text",value:"Total",readonly:"",placeholder:"0.00"}}),t._v(" "),a("span",{staticClass:"input-group-append border-0 rounded-0"},[a("button",{staticClass:"btn bg-danger bg-transparent text-danger btn-icon",attrs:{type:"button",title:"Clear all items"},on:{click:t.txnItemsClearAll}},[a("i",{staticClass:"icon-cross3"})])])])])])]),t._v(" "),a("tbody",{attrs:{id:"items_field_rows"}},t._l(t.txnAttributes.items,(function(e,s){return a("tr",[a("td",{staticClass:"td_item_selector p-0 rg_select2_border_none"},[a("model-list-select",{ref:"rowItemSelector",refInFor:!0,staticClass:"border-0 rounded-0",attrs:{list:t.txnItems,"is-disabled":t.txnForm.disabled,"option-value":"id","option-text":"name","option-item-row":s,"option-tag":"",placeholder:"Select item"},on:{input:t.txnItemsSelect,searchchange:t.txnFetchItems},model:{value:e.selectedItem,callback:function(a){t.$set(e,"selectedItem",a)},expression:"item.selectedItem"}}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.type_id||e.name,expression:"item.type_id || item.name"}],staticClass:"ml-1 mr-1"},[a("textarea-autosize",{staticClass:"form-control border-top-0 border-right-0 border-bottom-0 border-left-2 rounded-0 mb-1 border-left-grey",staticStyle:{"min-height":"30px",overflow:"hidden"},attrs:{"data-value":e.description,"data-row":s,rows:"1",onkeyup:"rg_auto_grow(this);",placeholder:"Description"},model:{value:e.description,callback:function(a){t.$set(e,"description",a)},expression:"item.description"}})],1)],1),t._v(" "),a("td",{staticClass:"p-0"},[a("vue-numeric",{staticClass:"item_row_quantity form-control border-0 text-right",attrs:{separator:",",min:0,precision:2},on:{input:t.txnTotal},model:{value:e.quantity,callback:function(a){t.$set(e,"quantity",a)},expression:"item.quantity"}})],1),t._v(" "),a("td",{staticClass:"p-0"},[a("vue-numeric",{staticClass:"item_row_rate form-control m-input border-0 text-right",attrs:{separator:",",min:0,precision:2},on:{input:t.txnTotal},model:{value:e.rate,callback:function(a){t.$set(e,"rate",a)},expression:"item.rate"}})],1),t._v(" "),a("td",{staticClass:"p-0"},[a("div",{staticStyle:{position:"relative"}},[a("div",{staticClass:"input-group"},[a("input",{staticClass:"rg-txn-item-row-total form-control border-0 text-right bg-transparent",attrs:{type:"text",readonly:"",placeholder:"0.00"},domProps:{value:t.rgNumberFormat(e.total,2)}}),t._v(" "),a("span",{staticClass:"input-group-append border-0 rounded-0"},[a("button",{staticClass:"btn bg-danger bg-transparent text-danger btn-icon",attrs:{type:"button",title:"Delete row"},on:{click:function(e){return t.txnItemsRemove(s)}}},[a("i",{staticClass:"icon-cross3"})])])])])])])})),0),t._v(" "),a("tbody",[a("tr",[a("td",{staticClass:"border-0"},[a("button",{staticClass:"btn btn-link pt-0 pb-0 font-weight-bold",attrs:{type:"button"},on:{click:t.txnItemsCreate}},[a("i",{staticClass:"icon-plus2 mr-2"}),t._v(" Add another line\n                                                ")])]),t._v(" "),a("td",{staticClass:"pl-15 border-left-0 border-top-0 border-right-0 font-weight-bold",attrs:{colspan:"2"}},[t._v("Sub Total")]),t._v(" "),a("td",{staticClass:"border-left-0 border-top-0 border-right-0 text-right rg-txn-total-pr",attrs:{id:"txn_subtotal"}},[t._v("\n                                                "+t._s(t.rgNumberFormat(t.txnAttributes.taxable_amount,2))+"\n                                            ")])])]),t._v(" "),a("tbody",{staticClass:"border-0"}),t._v(" "),a("tfoot",[a("tr",[a("td",{staticClass:"p-15 border-0"}),t._v(" "),a("td",{staticClass:"p-15 border-left-0 border-top-0 border-right-0 font-weight-bold size4of5",attrs:{colspan:"2"}},[t._v("\n                                                TOTAL\n                                                "),t.txnAttributes.base_currency?a("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v("\n                                                    "+t._s(t.txnAttributes.base_currency)+"\n                                                ")]):t._e()]),t._v(" "),a("td",{staticClass:"border-left-0 border-top-0 border-right-0 font-weight-bold size4of5 text-right rg-txn-total-pr",attrs:{id:"txn_total"}},[t._v("\n                                                "+t._s(t.rgNumberFormat(t.txnAttributes.total,2))+"\n                                            ")])])])])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-2 col-form-label"},[t._v("\n                                    Memo\n                                ")]),t._v(" "),a("div",{staticClass:"col-lg-10"},[a("textarea-autosize",{staticClass:"form-control rounded-0",attrs:{rows:"2",placeholder:"Memo"},model:{value:t.txnAttributes.contact_notes,callback:function(e){t.$set(t.txnAttributes,"contact_notes",e)},expression:"txnAttributes.contact_notes"}})],1)]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-2 col-form-label"},[t._v("\n                                    Terms and conditions:\n                                ")]),t._v(" "),a("div",{staticClass:"col-lg-10"},[a("textarea-autosize",{staticClass:"form-control rounded-0",attrs:{rows:"2",placeholder:"Mention your company's Terms and Conditions."},model:{value:t.txnAttributes.terms_and_conditions,callback:function(e){t.$set(t.txnAttributes,"terms_and_conditions",e)},expression:"txnAttributes.terms_and_conditions"}})],1)]),t._v(" "),a("div",{staticClass:"text-left col-md-10 offset-md-2 p-0"},[a("div",{staticClass:"btn-group ml-1"},[t._m(2),t._v(" "),a("div",{staticClass:"dropdown-menu dropdown-menu-left"},[a("a",{staticClass:"dropdown-item",attrs:{href:"/"},on:{click:function(e){return e.preventDefault(),t.txnOnSave("draft",!1)}}},[a("i",{staticClass:"icon-file-text3"}),t._v(" Save as draft\n                                        ")]),t._v(" "),a("a",{staticClass:"dropdown-item",attrs:{href:"/"},on:{click:function(e){return e.preventDefault(),t.txnOnSave("Approved",!1)}}},[a("i",{staticClass:"icon-file-check2"}),t._v(" Save and Approve\n                                        ")]),t._v(" "),a("a",{staticClass:"dropdown-item",attrs:{href:"/"},on:{click:function(e){return e.preventDefault(),t.txnOnSave("Approved",!0)}}},[a("i",{staticClass:"icon-mention"}),t._v(" Save, approve and send\n                                        ")])])]),t._v(" "),a("button",{staticClass:"btn btn-danger font-weight-bold",attrs:{type:"submit"}},[a("i",{staticClass:"icon-file-plus2 mr-1"}),t._v(" "+t._s(t.txnSubmitBtnText)+"\n                                ")])])])])],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[this._v("Exchange rate:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-outline bg-purple-300 border-purple-300 text-purple-800 btn-icon border-2 dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown"}},[e("i",{staticClass:"icon-cog"})])}],!1,null,null,null);e.default=n.exports}}]);