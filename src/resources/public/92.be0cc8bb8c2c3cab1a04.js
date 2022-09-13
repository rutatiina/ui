(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{lAm2:function(t,e,s){"use strict";s.r(e);var a={created:function(){this.pageTitle="Create Journal",this.pageAction="Create"},mounted:function(){this.appFetchGlobalsCurrencies(),this.txnCreateData(),this.txnFetchCustomers("-initiate-"),this.txnFetchItems("-initiate-"),this.txnFetchTaxes(),this.txnFetchAccounts()},methods:{itemDebit:function(t){isNaN(this.txnAttributes.items[t].debit)&&(this.txnAttributes.items[t].debit=null),this.txnAttributes.items[t].credit=null,this.journalTotals()},itemCredit:function(t){isNaN(this.txnAttributes.items[t].credit)&&(this.txnAttributes.items[t].credit=null),this.txnAttributes.items[t].debit=null,this.journalTotals()},journalTotals:function(){var t=this;this.txnAttributes.total=0,this.txnAttributes.totalDebit=0,this.txnAttributes.totalCredit=0,this.txnAttributes.items.forEach((function(e){if(e.type="account",e.quantity=1,e.debit>0&&e.credit>0)return t.txnAttributes.totalDebit="Error!",t.txnAttributes.totalCredit="Error!",!1;e.debit>0?(e.effect="debit",e.rate=e.debit,e.total=e.debit,t.txnAttributes.totalDebit+=e.debit,t.txnAttributes.total+=e.debit):(e.effect="credit",e.rate=e.credit,e.total=e.credit,t.txnAttributes.totalCredit+=e.credit),e.displayTotal=e.total,t.txnAttributes.total+=e.total}))}}},i=s("KHd+"),r=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content-wrapper"},[s("div",{staticClass:"page-header page-header-light"},[s("div",{staticClass:"page-header-content header-elements-md-inline"},[s("div",{staticClass:"page-title d-flex"},[s("h4",[s("i",{staticClass:"icon-file-plus"}),t._v("\n                    "+t._s(t.pageTitle)+"\n                ")])])]),t._v(" "),s("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[s("div",{staticClass:"d-flex"},[s("div",{staticClass:"breadcrumb"},[s("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[s("i",{staticClass:"icon-home2 mr-2"}),t._v(" "),s("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(" "+t._s(t._f("truncate")(this.$root.tenant.name,30))+" ")])]),t._v(" "),s("span",{staticClass:"breadcrumb-item"},[t._v("Accounting")]),t._v(" "),s("span",{staticClass:"breadcrumb-item"},[t._v("Advanced")]),t._v(" "),s("span",{staticClass:"breadcrumb-item"},[t._v("Journals")]),t._v(" "),s("span",{staticClass:"breadcrumb-item active"},[t._v(t._s(t.pageAction))])]),t._v(" "),t._m(0)]),t._v(" "),s("div",{staticClass:"header-elements"},[s("div",{staticClass:"breadcrumb justify-content-center"},[s("router-link",{staticClass:" btn btn-danger btn-sm rounded-round font-weight-bold",attrs:{to:"/financial-accounts/advanced/journals"}},[s("i",{staticClass:"icon-drawer3 mr-2"}),t._v("\n                        Journals\n                    ")])],1)])])]),t._v(" "),s("div",{staticClass:"content border-0 padding-0"},[s("div",{staticClass:"card shadow-none rounded-0 border-0"},[s("div",{staticClass:"card-body p-0"},[s("loading-animation"),t._v(" "),this.$root.loading?t._e():s("form",{staticClass:"max-width-1040",staticStyle:{"margin-bottom":"100px"},attrs:{action:"",method:"post",autocomplete:"off"},on:{submit:t.txnFormSubmit}},[s("fieldset",{staticClass:"select_contact_required",attrs:{id:"fieldset_select_contact"}},[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label font-weight-bold"},[t._v("\n                                Date & Currency:\n                            ")]),t._v(" "),s("div",{staticClass:"col-lg-2"},[s("date-picker",{staticClass:"font-weight-bold w-100 h-100",attrs:{valueType:"format",lang:t.vue2DatePicker.lang,placeholder:"Choose date"},model:{value:t.txnAttributes.date,callback:function(e){t.$set(t.txnAttributes,"date",e)},expression:"txnAttributes.date"}})],1),t._v(" "),s("div",{staticClass:"col-lg-4"},[s("model-list-select",{attrs:{list:t.globalsCurrencies,"option-value":"value","option-text":"text",placeholder:"Select currency"},model:{value:t.txnAttributes.base_currency,callback:function(e){t.$set(t.txnAttributes,"base_currency",e)},expression:"txnAttributes.base_currency"}})],1)]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label font-weight-bold"},[t._v("\n                                Reference:\n                            ")]),t._v(" "),s("div",{staticClass:"col-lg-6"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.txnAttributes.reference,expression:"txnAttributes.reference"}],staticClass:"form-control input-roundless",attrs:{type:"text",name:"reference",placeholder:"Reference"},domProps:{value:t.txnAttributes.reference},on:{input:function(e){e.target.composing||t.$set(t.txnAttributes,"reference",e.target.value)}}})])])]),t._v(" "),s("fieldset",{},[s("div",{staticClass:"form-group row"},[s("table",{staticClass:"table table-bordered border-left-0 border-right-0 border-bottom-0"},[s("thead",{staticClass:"thead-default bg-light"},[s("tr",[s("th",{staticClass:"font-weight-bold",attrs:{width:"25%"}},[t._v("Account")]),t._v(" "),s("th",{staticClass:"font-weight-bold",attrs:{width:"27%"}},[t._v("Description")]),t._v(" "),s("th",{staticClass:"font-weight-bold",attrs:{width:"24%"}},[t._v("Contact")]),t._v(" "),s("th",{staticClass:"font-weight-bold",attrs:{width:"12%"}},[t._v("Debit")]),t._v(" "),s("th",{staticClass:"text-right font-weight-bold p-0",attrs:{width:"12%"}},[s("div",{staticClass:"input-group"},[s("input",{staticClass:"rg-txn-item-row-total form-control border-0 text-right font-weight-bold bg-transparent",attrs:{type:"text",value:"Credit",readonly:"",placeholder:"0.00"}}),t._v(" "),s("span",{staticClass:"input-group-append border-0 rounded-0"},[s("button",{staticClass:"btn bg-danger bg-transparent text-danger btn-icon",attrs:{type:"button",title:"Clear all items"},on:{click:t.txnItemsClearAll}},[s("i",{staticClass:"icon-cross3"})])])])])])]),t._v(" "),s("tbody",{attrs:{id:"items_field_rows"}},t._l(t.txnAttributes.items,(function(e,a){return s("tr",[s("td",{staticClass:"td_item_selector p-0 rg_select2_border_none"},[s("model-list-select",{staticClass:"border-0",attrs:{list:t.txnAccounts,"option-value":"id","option-text":"name","option-item-row":a,"option-tag":"",placeholder:"Select Account"},on:{searchchange:t.txnFetchAccounts},model:{value:e.type_id,callback:function(s){t.$set(e,"type_id",s)},expression:"item.type_id"}})],1),t._v(" "),s("td",{staticClass:"p-0"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"item.description"}],staticClass:"form-control border-0",attrs:{type:"text","data-row":a,placeholder:"Description"},domProps:{value:e.description},on:{input:function(s){s.target.composing||t.$set(e,"description",s.target.value)}}})]),t._v(" "),s("td",{staticClass:"p-0"},[s("model-list-select",{staticClass:"border-0",attrs:{list:t.txnContacts,"option-value":"id","option-text":"display_name",placeholder:"select contact"},on:{searchchange:t.txnFetchCustomers,input:t.txnContactSelect},model:{value:e.contact_id,callback:function(s){t.$set(e,"contact_id",s)},expression:"item.contact_id"}})],1),t._v(" "),s("td",{staticClass:"p-0"},[s("input",{directives:[{name:"model",rawName:"v-model.number",value:e.debit,expression:"item.debit",modifiers:{number:!0}}],staticClass:"form-control border-0 text-right bg-transparent",attrs:{type:"text"},domProps:{value:e.debit},on:{change:function(e){return t.itemDebit(a)},input:function(s){s.target.composing||t.$set(e,"debit",t._n(s.target.value))},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),s("td",{staticClass:"p-0"},[s("div",{staticStyle:{position:"relative"}},[s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model.number",value:e.credit,expression:"item.credit",modifiers:{number:!0}}],staticClass:"form-control border-0 text-right bg-transparent",attrs:{type:"text"},domProps:{value:e.credit},on:{change:function(e){return t.itemCredit(a)},input:function(s){s.target.composing||t.$set(e,"credit",t._n(s.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),s("span",{staticClass:"input-group-append border-0 rounded-0"},[s("button",{staticClass:"btn bg-danger bg-transparent text-danger btn-icon",attrs:{type:"button",title:"Delete row"},on:{click:function(e){return t.txnItemsRemove(a)}}},[s("i",{staticClass:"icon-cross3"})])])])])])])})),0),t._v(" "),s("tfoot",[s("tr",[s("td",{staticClass:"border-0",attrs:{colspan:"2"}},[s("button",{staticClass:"btn btn-link pt-0 pb-0 font-weight-bold",attrs:{type:"button"},on:{click:t.txnItemsCreate}},[s("i",{staticClass:"icon-plus2 mr-2"}),t._v(" Add another line\n                                            ")])]),t._v(" "),s("td",{staticClass:"p-15 border-left-0 border-top-0 border-right-0 font-weight-bold size4of5"},[t._v("\n                                            TOTAL\n                                            "),t.txnAttributes.base_currency?s("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v("\n                                                "+t._s(t.txnAttributes.base_currency)+"\n                                            ")]):t._e()]),t._v(" "),s("td",{staticClass:"border-left-0 border-top-0 border-right-0 font-weight-bold size4of5 text-right pr-3"},[t._v("\n                                            "+t._s(t.$root.numberFormat(t.txnAttributes.totalDebit))+"\n                                        ")]),t._v(" "),s("td",{staticClass:"border-left-0 border-top-0 border-right-0 font-weight-bold size4of5 text-right pr-5"},[t._v("\n                                            "+t._s(t.$root.numberFormat(t.txnAttributes.totalCredit))+"\n                                        ")])])])])])]),t._v(" "),s("fieldset",{},[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label"},[t._v("\n                                Notes:\n                            ")]),t._v(" "),s("div",{staticClass:"col-lg-10"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.txnAttributes.contact_notes,expression:"txnAttributes.contact_notes"}],staticClass:"form-control input-roundless",attrs:{rows:"2",placeholder:"Notes"},domProps:{value:t.txnAttributes.contact_notes},on:{input:function(e){e.target.composing||t.$set(t.txnAttributes,"contact_notes",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-form-label col-lg-2"},[t._v("Attach files")]),t._v(" "),s("div",{staticClass:"col-lg-10"},[s("input",{ref:"filesAttached",staticClass:"form-control border-0 p-1 h-auto",attrs:{type:"file",multiple:""}})])])]),t._v(" "),s("div",{staticClass:"text-left col-md-10 offset-md-2 p-0"},[s("div",{staticClass:"btn-group ml-1"},[t._m(1),t._v(" "),s("div",{staticClass:"dropdown-menu dropdown-menu-left"},[s("a",{staticClass:"dropdown-item",attrs:{href:"/"},on:{click:function(e){return e.preventDefault(),t.txnOnSave("draft",!1)}}},[s("i",{staticClass:"icon-file-text3"}),t._v(" Save as draft\n                                ")]),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"/"},on:{click:function(e){return e.preventDefault(),t.txnOnSave("Approved",!1)}}},[s("i",{staticClass:"icon-file-check2"}),t._v(" Save and Approve\n                                ")]),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"/"},on:{click:function(e){return e.preventDefault(),t.txnOnSave("Approved",!0)}}},[s("i",{staticClass:"icon-mention"}),t._v(" Save, approve and send\n                                ")])])]),t._v(" "),s("button",{staticClass:"btn btn-danger font-weight-bold",attrs:{type:"submit"}},[s("i",{staticClass:"icon-file-plus2 mr-1"}),t._v(" "+t._s(t.txnSubmitBtnText)+"\n                        ")])])])],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-outline bg-purple-300 border-purple-300 text-purple-800 btn-icon border-2 dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown"}},[e("i",{staticClass:"icon-cog"})])}],!1,null,null,null);e.default=r.exports}}]);