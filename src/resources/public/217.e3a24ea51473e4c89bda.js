(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{Okn2:function(t,e,s){"use strict";s.r(e);var a=s("o0o1"),i=s.n(a);function r(t,e,s,a,i,r,n){try{var l=t[r](n),o=l.value}catch(t){return void s(t)}l.done?e(o):Promise.resolve(o).then(a,i)}var n={components:{},data:function(){return{pageTitle:"Create Part / Accessory",urlPost:"/workshop/parts-and-accessories",attributes:[]}},mounted:function(){this.fetchAttributes(),this.appFetchGlobalsTaxes(),this.appFetchGlobalsAccounts("income")},watch:{$route:function(){this.fetchAttributes()}},methods:{fetchAttributes:function(){var t,e=this;return(t=i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.$root.loadingTxn=!0,t.next=4,axios.get(e.$route.fullPath).then((function(t){e.$root.loadingTxn=!1,e.attributes=t.data.attributes,e.countries=t.data.countries,e.currencies=t.data.currencies,e.taxes=t.data.taxes,e.accounts=t.data.accounts})).catch((function(t){console.log(t)})).finally((function(t){}));case 4:return t.abrupt("return",t.sent);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})),function(){var e=this,s=arguments;return new Promise((function(a,i){var n=t.apply(e,s);function l(t){r(n,a,i,l,o,"next",t)}function o(t){r(n,a,i,l,o,"throw",t)}l(void 0)}))})()},itemTypeChange:function(){},formSubmit:function(t){t.preventDefault();var e=this;PNotify.removeAll();var s={title:!1,text:"Please wait as we do our thing",addclass:"bg-warning-400 border-warning-400",hide:!1,buttons:{closer:!1,sticker:!1}},a=new PNotify(s);axios.post(e.urlPost,this.attributes).then((function(t){s.text=t.data.messages.join("\n"),!0===t.data.status?(s.title="Success",s.type="success",s.addclass="bg-success-400 border-success-400"):(s.title="! Error",s.type="error",s.addclass="bg-warning-400 border-warning-400"),a.update(s),a.get().click((function(){a.remove()}))})).catch((function(t){e.response=t}))}},ready:function(){},beforeUpdate:function(){$(".select, .select-search").each((function(t,e){$(e).hasClass("select2-hidden-accessible")&&$(e).off().select2("destroy")}))},updated:function(){},destroyed:function(){console.log("ItemsCreate componet :: destroyed")}},l=s("KHd+"),o=Object(l.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content-wrapper"},[s("div",{staticClass:"page-header page-header-light"},[s("div",{staticClass:"page-header-content header-elements-md-inline"},[s("div",{staticClass:"page-title d-flex"},[s("h4",[s("i",{staticClass:"icon-price-tags"}),t._v("\n                    "+t._s(t.pageTitle)+"\n                ")])])]),t._v(" "),s("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[s("div",{staticClass:"d-flex"},[s("div",{staticClass:"breadcrumb"},[s("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[s("i",{staticClass:"icon-home2 mr-2"}),t._v(" "),s("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(" "+t._s(t._f("truncate")(this.$root.tenant.name,30))+" ")])]),t._v(" "),s("span",{staticClass:"breadcrumb-item"},[t._v("Workshop")]),t._v(" "),s("span",{staticClass:"breadcrumb-item"},[t._v("Parts & Accessories")]),t._v(" "),s("span",{staticClass:"breadcrumb-item active"},[t._v("Create")])]),t._v(" "),t._m(0)]),t._v(" "),s("div",{staticClass:"header-elements"},[s("div",{staticClass:"breadcrumb justify-content-center"},[s("router-link",{staticClass:" btn btn-danger btn-sm rounded-round font-weight-bold",attrs:{to:"/workshop/parts-and-accessories"}},[s("i",{staticClass:"icon-price-tags mr-1"}),t._v("\n                        Parts & Accessories\n                    ")])],1)])])]),t._v(" "),s("div",{staticClass:"content border-0 padding-0"},[s("div",{staticClass:"card shadow-none rounded-0 border-0"},[s("div",{staticClass:"card-body p-0"},[s("loading-animation"),t._v(" "),this.$root.loading?t._e():s("form",{staticClass:"max-width-1040",staticStyle:{"margin-bottom":"100px"},attrs:{action:"",method:"post",autocomplete:"off"},on:{submit:t.formSubmit}},[s("fieldset",[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label"},[t._v("\n                                Name:\n                            ")]),t._v(" "),s("div",{staticClass:"col-lg-10"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.name,expression:"attributes.name"}],staticClass:"form-control input-roundless",attrs:{type:"text",placeholder:"Item name"},domProps:{value:t.attributes.name},on:{input:function(e){e.target.composing||t.$set(t.attributes,"name",e.target.value)}}})])]),t._v(" "),"product"==t.attributes.type?s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label"},[t._v("Units & SKU")]),t._v(" "),s("div",{staticClass:"col-lg-3"},[s("div",{staticClass:"input-group"},[t._m(1),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.units,expression:"attributes.units"}],staticClass:"form-control",attrs:{type:"text",placeholder:"0.00"},domProps:{value:t.attributes.units},on:{input:function(e){e.target.composing||t.$set(t.attributes,"units",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"col-lg-7"},[s("div",{staticClass:"input-group"},[t._m(2),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.sku,expression:"attributes.sku"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Stock keeping unit code"},domProps:{value:t.attributes.sku},on:{input:function(e){e.target.composing||t.$set(t.attributes,"sku",e.target.value)}}}),t._v(" "),s("span",{staticClass:"input-group-append"},[s("div",{staticClass:"input-group-text"},[s("div",{staticClass:"custom-control custom-checkbox custom-control-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.inventory_tracking,expression:"attributes.inventory_tracking"}],staticClass:"custom-control-input",attrs:{type:"checkbox",value:"1",id:"inventory_tracking"},domProps:{checked:Array.isArray(t.attributes.inventory_tracking)?t._i(t.attributes.inventory_tracking,"1")>-1:t.attributes.inventory_tracking},on:{change:function(e){var s=t.attributes.inventory_tracking,a=e.target,i=!!a.checked;if(Array.isArray(s)){var r=t._i(s,"1");a.checked?r<0&&t.$set(t.attributes,"inventory_tracking",s.concat(["1"])):r>-1&&t.$set(t.attributes,"inventory_tracking",s.slice(0,r).concat(s.slice(r+1)))}else t.$set(t.attributes,"inventory_tracking",i)}}}),t._v(" "),s("label",{staticClass:"custom-control-label",attrs:{for:"inventory_tracking"}},[t._v("Track item inventory")])])])])])])]):t._e()]),t._v(" "),s("div",{},[s("div",{staticClass:"col-md-10 offset-md-2 p-0",attrs:{id:"item_rates"}},[s("div",{staticClass:"row m-0"},[s("div",{staticClass:"col-md-6"},[t._m(3),t._v(" "),s("div",{staticClass:"form-group row mr-0"},[s("div",{staticClass:"input-group"},[t._m(4),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.selling_rate,expression:"attributes.selling_rate"}],staticClass:"form-control font-weight-bold",attrs:{type:"text",placeholder:"0.00"},domProps:{value:t.attributes.selling_rate},on:{input:function(e){e.target.composing||t.$set(t.attributes,"selling_rate",e.target.value)}}}),t._v(" "),s("span",{staticClass:"input-group-append"},[s("span",{staticClass:"input-group-text"},[t._v(t._s(t.attributes.selling_currency))])])])]),t._v(" "),s("div",{staticClass:"form-group row mr-0"},[s("label",{staticClass:"col-auto col-form-label text-right bg-light border rounded-left border-right-0",staticStyle:{"white-space":"nowrap"}},[t._v("\n                                            Account:\n                                        ")]),t._v(" "),s("div",{staticClass:"col pl-0 pr-0"},[s("model-list-select",{staticClass:"rounded-left-0",attrs:{list:t.globalsAccounts,"option-value":"id","option-text":"name",placeholder:"select account"},model:{value:t.attributes.selling_financial_account_code,callback:function(e){t.$set(t.attributes,"selling_financial_account_code",e)},expression:"attributes.selling_financial_account_code"}})],1)]),t._v(" "),s("div",{staticClass:"form-group row mr-0"},[s("label",{staticClass:"col-auto col-form-label text-right bg-light border rounded-left border-right-0",staticStyle:{"white-space":"nowrap"}},[t._v("\n                                            Tax:\n                                        ")]),t._v(" "),s("div",{staticClass:"col-md-6 pl-0 pr-0"},[s("model-list-select",{staticClass:"rounded-0",attrs:{list:t.globalsTaxes,"option-value":"id","option-text":"name",placeholder:"select account"},model:{value:t.attributes.selling_tax_code,callback:function(e){t.$set(t.attributes,"selling_tax_code",e)},expression:"attributes.selling_tax_code"}})],1),t._v(" "),s("div",{staticClass:"col p-0"},[s("span",{staticClass:"input-group-text h-100 rg-rounded-right-only border-left-0"},[s("div",{staticClass:"custom-control custom-checkbox custom-control-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.selling_tax_inclusive,expression:"attributes.selling_tax_inclusive"}],staticClass:"custom-control-input",attrs:{type:"checkbox",value:"1",id:"selling_tax_inclusive",checked:""},domProps:{checked:Array.isArray(t.attributes.selling_tax_inclusive)?t._i(t.attributes.selling_tax_inclusive,"1")>-1:t.attributes.selling_tax_inclusive},on:{change:function(e){var s=t.attributes.selling_tax_inclusive,a=e.target,i=!!a.checked;if(Array.isArray(s)){var r=t._i(s,"1");a.checked?r<0&&t.$set(t.attributes,"selling_tax_inclusive",s.concat(["1"])):r>-1&&t.$set(t.attributes,"selling_tax_inclusive",s.slice(0,r).concat(s.slice(r+1)))}else t.$set(t.attributes,"selling_tax_inclusive",i)}}}),t._v(" "),s("label",{staticClass:"custom-control-label",attrs:{for:"selling_tax_inclusive"}},[t._v("Inclusive")])])])])]),t._v(" "),s("div",{staticClass:"form-group row mr-0"},[s("label",[t._v("Sales description")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.attributes.selling_description,expression:"attributes.selling_description"}],staticClass:"form-control input-roundless",attrs:{type:"text",placeholder:"Sales description",rows:"3"},domProps:{value:t.attributes.selling_description},on:{input:function(e){e.target.composing||t.$set(t.attributes,"selling_description",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"col-md-6"},[t._m(5),t._v(" "),s("div",{staticClass:"form-group row ml-0"},[s("div",{staticClass:"input-group"},[t._m(6),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.billing_rate,expression:"attributes.billing_rate"}],staticClass:"form-control font-weight-bold",attrs:{type:"text",placeholder:"0.00"},domProps:{value:t.attributes.billing_rate},on:{input:function(e){e.target.composing||t.$set(t.attributes,"billing_rate",e.target.value)}}}),t._v(" "),s("span",{staticClass:"input-group-append"},[s("span",{staticClass:"input-group-text"},[t._v(t._s(t.attributes.billing_currency))])])])]),t._v(" "),s("div",{staticClass:"form-group row pl-2"},[s("label",{staticClass:"col-auto col-form-label text-right bg-light border rounded-left border-right-0",staticStyle:{"white-space":"nowrap"}},[t._v("\n                                            Account:\n                                        ")]),t._v(" "),s("div",{staticClass:"col pl-0 pr-0"},[s("model-list-select",{staticClass:"rounded-left-0",attrs:{list:t.globalsAccounts,"option-value":"id","option-text":"name",placeholder:"select account"},model:{value:t.attributes.billing_financial_account_code,callback:function(e){t.$set(t.attributes,"billing_financial_account_code",e)},expression:"attributes.billing_financial_account_code"}})],1)]),t._v(" "),s("div",{staticClass:"form-group row ml-0"},[s("label",{staticClass:"col-auto col-form-label text-right bg-light border rounded-left border-right-0",staticStyle:{"white-space":"nowrap"}},[t._v("\n                                            Tax:\n                                        ")]),t._v(" "),s("div",{staticClass:"col-md-6 pl-0 pr-0"},[s("model-list-select",{staticClass:"rounded-0",attrs:{list:t.globalsTaxes,"option-value":"id","option-text":"name",placeholder:"select account"},model:{value:t.attributes.billing_tax_code,callback:function(e){t.$set(t.attributes,"billing_tax_code",e)},expression:"attributes.billing_tax_code"}})],1),t._v(" "),s("div",{staticClass:"col p-0"},[s("span",{staticClass:"input-group-text h-100 rg-rounded-right-only border-left-0"},[s("div",{staticClass:"custom-control custom-checkbox custom-control-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.billing_tax_inclusive,expression:"attributes.billing_tax_inclusive"}],staticClass:"custom-control-input",attrs:{type:"checkbox",value:"1",id:"billing_tax_inclusive",checked:""},domProps:{checked:Array.isArray(t.attributes.billing_tax_inclusive)?t._i(t.attributes.billing_tax_inclusive,"1")>-1:t.attributes.billing_tax_inclusive},on:{change:function(e){var s=t.attributes.billing_tax_inclusive,a=e.target,i=!!a.checked;if(Array.isArray(s)){var r=t._i(s,"1");a.checked?r<0&&t.$set(t.attributes,"billing_tax_inclusive",s.concat(["1"])):r>-1&&t.$set(t.attributes,"billing_tax_inclusive",s.slice(0,r).concat(s.slice(r+1)))}else t.$set(t.attributes,"billing_tax_inclusive",i)}}}),t._v(" "),s("label",{staticClass:"custom-control-label",attrs:{for:"billing_tax_inclusive"}},[t._v("Inclusive")])])])])]),t._v(" "),s("div",{staticClass:"form-group row ml-0"},[s("label",{},[t._v("Billing description")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.attributes.billing_description,expression:"attributes.billing_description"}],staticClass:"form-control input-roundless",attrs:{placeholder:"Billing description",rows:"3"},domProps:{value:t.attributes.billing_description},on:{input:function(e){e.target.composing||t.$set(t.attributes,"billing_description",e.target.value)}}})])])])])]),t._v(" "),s("div",{staticClass:"text-left col-md-10 offset-md-2 p-0"},[s("button",{staticClass:"btn btn-danger font-weight-bold",attrs:{type:"submit"}},[s("i",{staticClass:"icon-price-tags2 mr-1"}),t._v(" "+t._s(t.pageTitle)+"\n                        ")])])])],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[this._v("Units:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[this._v("SKU:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group row mr-0"},[e("span",{staticClass:"badge bg-purple badge-pill"},[this._v("Sales information")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[this._v("Rate:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group row ml-0"},[e("span",{staticClass:"badge bg-purple badge-pill"},[this._v("Cost / Purchase information")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[this._v("Rate:")])])}],!1,null,null,null);e.default=o.exports}}]);