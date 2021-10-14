(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{qtfe:function(t,e,s){"use strict";s.r(e);var a=s("o0o1"),i=s.n(a);function r(t,e,s,a,i,r,o){try{var n=t[r](o),l=n.value}catch(t){return void s(t)}n.done?e(l):Promise.resolve(l).then(a,i)}var o={components:{},data:function(){return{pageTitle:"Create Service",urlPost:"/workshop/services",attributes:[],tab:"basics"}},mounted:function(){this.fetchAttributes(),this.appFetchGlobalsTaxes(),this.appFetchGlobalsAccounts("income"),this.txnFetchItems("-initiate-"),this.txnFetchTaxes()},watch:{$route:function(){this.fetchAttributes()}},methods:{fetchAttributes:function(){var t,e=this;return(t=i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.$root.loadingTxn=!0,t.next=4,axios.get(e.$route.fullPath).then((function(t){e.$root.loadingTxn=!1,e.attributes=t.data.attributes,e.txnAttributes.items=t.data.attributes.sub_items})).catch((function(t){console.log(t)})).finally((function(t){}));case 4:return t.abrupt("return",t.sent);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})),function(){var e=this,s=arguments;return new Promise((function(a,i){var o=t.apply(e,s);function n(t){r(o,a,i,n,l,"next",t)}function l(t){r(o,a,i,n,l,"throw",t)}n(void 0)}))})()},formSubmit:function(t){var e=this;t.preventDefault(),PNotify.removeAll();var s=new PNotify({title:!1,text:"Please wait as we do our thing",addclass:"bg-warning-400 border-warning-400",hide:!1,buttons:{closer:!1,sticker:!1}});this.attributes.sub_items=this.txnAttributes.items,axios.post(this.urlPost,this.attributes).then((function(t){e.axiosResponseHandle({response:t,pNotify:s,onSuccess:function(){},onError:function(){}})}))}}},n=s("KHd+"),l=Object(n.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content-wrapper"},[s("div",{staticClass:"page-header page-header-light"},[s("div",{staticClass:"page-header-content header-elements-md-inline"},[s("div",{staticClass:"page-title d-flex"},[s("h4",[s("i",{staticClass:"icon-hammer-wrench"}),t._v("\n                    "+t._s(t.pageTitle)+"\n                ")])])]),t._v(" "),s("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[s("div",{staticClass:"d-flex"},[s("div",{staticClass:"breadcrumb"},[s("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[s("i",{staticClass:"icon-home2 mr-2"}),t._v(" "),s("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(" "+t._s(t._f("truncate")(this.$root.tenant.name,30))+" ")])]),t._v(" "),s("span",{staticClass:"breadcrumb-item"},[t._v("Workshop")]),t._v(" "),s("span",{staticClass:"breadcrumb-item"},[t._v("Services")]),t._v(" "),s("span",{staticClass:"breadcrumb-item active"},[t._v("Create")])]),t._v(" "),t._m(0)]),t._v(" "),s("div",{staticClass:"header-elements"},[s("div",{staticClass:"breadcrumb justify-content-center"},[s("router-link",{staticClass:" btn btn-danger btn-sm rounded-round font-weight-bold",attrs:{to:"/workshop/services"}},[s("i",{staticClass:"icon-hammer-wrench mr-1"}),t._v("\n                        Services\n                    ")])],1)])])]),t._v(" "),s("div",{staticClass:"content border-0 padding-0"},[s("div",{staticClass:"card shadow-none rounded-0 border-0"},[s("div",{staticClass:"card-body p-0"},[s("loading-animation"),t._v(" "),this.$root.loading?t._e():s("form",{staticClass:"max-width-1040",staticStyle:{"margin-bottom":"100px"},attrs:{action:"",method:"post",autocomplete:"off"},on:{submit:t.formSubmit}},[s("fieldset",[s("div",{staticClass:"form-group"},[s("label",[t._v("Name:")]),t._v(" "),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.name,expression:"attributes.name"}],staticClass:"form-control col-lg-6",attrs:{type:"text",placeholder:"Service name"},domProps:{value:t.attributes.name},on:{input:function(e){e.target.composing||t.$set(t.attributes,"name",e.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"p-0",attrs:{id:"item_rates"}},[s("div",{staticClass:"card border-0 shadow-0 m-0"},[s("div",{staticClass:"card-body p-0"},[s("ul",{staticClass:"nav nav-tabs nav-tabs-bottom font-weight-bold"},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link active",attrs:{href:"#service-basics","data-toggle":"tab"},on:{click:function(e){t.tab="basics"}}},[t._v("Basic / Sales information")])]),t._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#service-sub-items","data-toggle":"tab"},on:{click:function(e){t.tab="sub-items"}}},[t._v("Sub services / parts & accessories")])])]),t._v(" "),s("div",{staticClass:"tab-content"},["basics"===t.tab?s("div",{staticClass:"tab-pane fade show active",attrs:{id:"service-basics"}},[s("div",{staticClass:"row m-0"},[s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-group row mr-0"},[s("div",{staticClass:"input-group"},[t._m(1),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.selling_rate,expression:"attributes.selling_rate"}],staticClass:"form-control font-weight-bold",attrs:{type:"text",placeholder:"0.00"},domProps:{value:t.attributes.selling_rate},on:{input:function(e){e.target.composing||t.$set(t.attributes,"selling_rate",e.target.value)}}}),t._v(" "),s("span",{staticClass:"input-group-append"},[s("span",{staticClass:"input-group-text"},[t._v(t._s(t.attributes.selling_currency))])])])]),t._v(" "),s("div",{staticClass:"form-group row mr-0"},[s("label",{staticClass:"col-auto col-form-label text-right bg-light border rounded-left border-right-0",staticStyle:{"white-space":"nowrap"}},[t._v("\n                                                        Account:\n                                                    ")]),t._v(" "),s("div",{staticClass:"col pl-0 pr-0"},[s("model-list-select",{staticClass:"rounded-left-0",attrs:{list:t.globalsAccounts,"option-value":"id","option-text":"name",placeholder:"select account"},model:{value:t.attributes.selling_financial_account_code,callback:function(e){t.$set(t.attributes,"selling_financial_account_code",e)},expression:"attributes.selling_financial_account_code"}})],1)]),t._v(" "),s("div",{staticClass:"form-group row mr-0"},[s("label",{staticClass:"col-auto col-form-label text-right bg-light border rounded-left border-right-0",staticStyle:{"white-space":"nowrap"}},[t._v("\n                                                        Tax:\n                                                    ")]),t._v(" "),s("div",{staticClass:"col-md-6 pl-0 pr-0"},[s("model-list-select",{staticClass:"rounded-0",attrs:{list:t.globalsTaxes,"option-value":"id","option-text":"name",placeholder:"select account"},model:{value:t.attributes.selling_tax_code,callback:function(e){t.$set(t.attributes,"selling_tax_code",e)},expression:"attributes.selling_tax_code"}})],1),t._v(" "),s("div",{staticClass:"col p-0"},[s("span",{staticClass:"input-group-text h-100 rg-rounded-right-only border-left-0"},[s("div",{staticClass:"custom-control custom-checkbox custom-control-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.selling_tax_inclusive,expression:"attributes.selling_tax_inclusive"}],staticClass:"custom-control-input",attrs:{type:"checkbox",value:"1",id:"selling_tax_inclusive",checked:""},domProps:{checked:Array.isArray(t.attributes.selling_tax_inclusive)?t._i(t.attributes.selling_tax_inclusive,"1")>-1:t.attributes.selling_tax_inclusive},on:{change:function(e){var s=t.attributes.selling_tax_inclusive,a=e.target,i=!!a.checked;if(Array.isArray(s)){var r=t._i(s,"1");a.checked?r<0&&t.$set(t.attributes,"selling_tax_inclusive",s.concat(["1"])):r>-1&&t.$set(t.attributes,"selling_tax_inclusive",s.slice(0,r).concat(s.slice(r+1)))}else t.$set(t.attributes,"selling_tax_inclusive",i)}}}),t._v(" "),s("label",{staticClass:"custom-control-label",attrs:{for:"selling_tax_inclusive"}},[t._v("Inclusive")])])])])]),t._v(" "),s("div",{staticClass:"form-group row mr-0"},[s("label",[t._v("Sales description")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.attributes.selling_description,expression:"attributes.selling_description"}],staticClass:"form-control ",attrs:{type:"text",placeholder:"Sales description",rows:"3"},domProps:{value:t.attributes.selling_description},on:{input:function(e){e.target.composing||t.$set(t.attributes,"selling_description",e.target.value)}}})])])])]):t._e(),t._v(" "),"sub-items"===t.tab?s("div",{staticClass:"tab-pane fade",attrs:{id:"service-sub-items"}},[s("div",{staticClass:"card-body p-0"},[s("fieldset",{},[s("div",{staticClass:"form-group row"},[s("table",{staticClass:"table table-bordered border-left-0 border-right-0 border-bottom-0"},[s("thead",{staticClass:"thead-default bg-light"},[s("tr",[s("th",{staticClass:"font-weight-bold",attrs:{width:"50%"}},[t._v("Service, Part, or Accessories")]),t._v(" "),s("th",{staticClass:"text-right font-weight-bold",attrs:{width:"8%"}},[t._v("Quantity")]),t._v(" "),s("th",{staticClass:"text-right font-weight-bold",attrs:{width:"11%"}},[t._v("Rate")]),t._v(" "),s("th",{staticClass:"font-weight-bold",attrs:{width:"13%"}},[t._v("Tax")]),t._v(" "),s("th",{staticClass:"text-right font-weight-bold p-0",attrs:{width:"18%"}},[s("div",{staticClass:"input-group"},[s("input",{staticClass:"rg-txn-item-row-total form-control border-0 text-right font-weight-bold bg-transparent",attrs:{type:"text",value:"Total",readonly:"",placeholder:"0.00"}}),t._v(" "),s("span",{staticClass:"input-group-append border-0 rounded-0"},[s("button",{staticClass:"btn bg-danger bg-transparent text-danger btn-icon",attrs:{type:"button",title:"Clear all items"},on:{click:t.txnItemsClearAll}},[s("i",{staticClass:"icon-cross3"})])])])])])]),t._v(" "),s("tbody",{attrs:{id:"items_field_rows"}},t._l(t.txnAttributes.items,(function(e,a){return s("tr",[s("td",{staticClass:"td_item_selector p-0 rg_select2_border_none"},[s("model-list-select",{staticClass:"border-0",attrs:{list:t.txnItems,"option-value":"id","option-text":"name","option-item-row":a,"option-tag":"",placeholder:"Select item"},on:{input:t.txnItemsSelect,searchchange:t.txnFetchItems},model:{value:e.selectedItem,callback:function(s){t.$set(e,"selectedItem",s)},expression:"item.selectedItem"}}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.type_id||e.name,expression:"item.type_id || item.name"}],staticClass:"ml-2 mr-2"},[s("p",{staticClass:"small border-left-3 border-left-grey-400 pl-2"},[t._v(t._s(e.description))])])],1),t._v(" "),s("td",{staticClass:"p-0"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.quantity,expression:"item.quantity"}],staticClass:"item_row_quantity form-control border-0 text-right",attrs:{type:"text","data-row":a,placeholder:"1"},domProps:{value:e.quantity},on:{keyup:t.txnTotal,input:function(s){s.target.composing||t.$set(e,"quantity",s.target.value)}}})]),t._v(" "),s("td",{staticClass:"p-0"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.rate,expression:"item.rate"}],staticClass:"bg-transparent form-control m-input border-0 text-right",attrs:{type:"text","data-row":a,readonly:"",placeholder:"0.00"},domProps:{value:e.rate},on:{keyup:t.txnTotal,input:function(s){s.target.composing||t.$set(e,"rate",s.target.value)}}})]),t._v(" "),s("td",{staticClass:"p-0"},[s("multi-list-select",{staticClass:"border-0",attrs:{list:t.txnTaxes,"option-value":"id","option-text":"display_name","option-item-row":a,"selected-items":e.selectedTaxes,placeholder:"select tax","show-count-of-selected-options":""},on:{select:t.txnItemTaxes}})],1),t._v(" "),s("td",{staticClass:"p-0"},[s("div",{staticStyle:{position:"relative"}},[s("div",{staticClass:"input-group"},[s("input",{staticClass:"rg-txn-item-row-total form-control border-0 text-right bg-transparent",attrs:{type:"text",readonly:"",placeholder:"0.00"},domProps:{value:t.rgNumberFormat(e.displayTotal,2)}}),t._v(" "),s("span",{staticClass:"input-group-append border-0 rounded-0"},[s("button",{staticClass:"btn bg-danger bg-transparent text-danger btn-icon",attrs:{type:"button",title:"Delete row"},on:{click:function(e){return t.txnItemsRemove(a)}}},[s("i",{staticClass:"icon-cross3"})])])])])])])})),0),t._v(" "),s("tbody",[s("tr",[s("td",{staticClass:"border-0"},[s("button",{staticClass:"btn btn-link pt-0 pb-0 font-weight-bold",attrs:{type:"button"},on:{click:t.txnItemsCreate}},[s("i",{staticClass:"icon-plus2 mr-2"}),t._v(" Add another line\n                                                                ")])]),t._v(" "),s("td",{staticClass:"pl-15 border-left-0 border-top-0 border-right-0 font-weight-bold",attrs:{colspan:"2"}},[t._v("Sub Total")]),t._v(" "),s("td",{staticClass:"border-left-0 border-top-0 border-right-0 text-right rg-txn-total-pr",attrs:{id:"txn_subtotal",colspan:"2"}},[t._v("\n                                                                "+t._s(t.rgNumberFormat(t.txnAttributes.taxable_amount,2))+"\n                                                            ")])])]),t._v(" "),s("tbody",{staticClass:"border-0"},t._l(t.txnAttributes.taxes,(function(e){return s("tr",[s("td",{staticClass:"p-15 border-0"}),t._v(" "),s("td",{staticClass:"p-15 border-left-0 border-top-0 border-right-0 font-weight-bold",attrs:{colspan:"2"}},[t._v(t._s(e.name))]),t._v(" "),s("td",{staticClass:"border-left-0 border-top-0 border-right-0 text-right pr-0",attrs:{colspan:"2"}},[s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.total,expression:"tax.total"}],staticClass:"rg-txn-item-row-total form-control text-right",attrs:{type:"text",placeholder:"0.00"},domProps:{value:e.total},on:{input:function(s){s.target.composing||t.$set(e,"total",s.target.value)}}}),t._v(" "),s("span",{staticClass:"input-group-append border-0 rounded-0"},[s("button",{staticClass:"btn bg-danger bg-transparent text-danger btn-icon",attrs:{type:"button",title:"Remove Tax"},on:{click:function(s){return t.txnItemsTaxRemove(e.id)}}},[s("i",{staticClass:"icon-cross3"})])])])])])})),0),t._v(" "),s("tfoot",[s("tr",[s("td",{staticClass:"p-15 border-0"}),t._v(" "),s("td",{staticClass:"p-15 border-left-0 border-top-0 border-right-0 font-weight-bold size4of5",attrs:{colspan:"2"}},[t._v("\n                                                                TOTAL\n                                                                "),t.txnAttributes.base_currency?s("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v("\n                                                                    "+t._s(t.txnAttributes.base_currency)+"\n                                                                ")]):t._e()]),t._v(" "),s("td",{staticClass:"border-left-0 border-top-0 border-right-0 font-weight-bold size4of5 text-right rg-txn-total-pr",attrs:{id:"txn_total",colspan:"2"}},[t._v("\n                                                                "+t._s(t.rgNumberFormat(t.txnAttributes.total,2))+"\n                                                            ")])])])])])])])]):t._e()])])])]),t._v(" "),s("div",{staticClass:"text-left p-0"},[s("button",{staticClass:"btn btn-danger font-weight-bold",attrs:{type:"submit"}},[s("i",{staticClass:"icon-hammer-wrench mr-1"}),t._v(" "+t._s(t.pageTitle)+"\n                        ")])])])],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[this._v("Rate:")])])}],!1,null,null,null);e.default=l.exports}}]);