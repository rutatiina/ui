(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1147:function(t,e,a){var s=a("k4sk");"string"==typeof s&&(s=[[t.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,i);s.locals&&(t.exports=s.locals)},KxAT:function(t,e,a){"use strict";a("1147")},k4sk:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,"\n.mx-input {\n     border-radius: 0px !important; /* remove the border radius on the date selection */\n}\n",""])},uOxM:function(t,e,a){"use strict";a.r(e);var s=a("o0o1"),i=a.n(s);function l(t,e,a,s,i,l,o){try{var r=t[l](o),c=r.value}catch(t){return void a(t)}r.done?e(c):Promise.resolve(c).then(s,i)}var o={components:{},data:function(){return{pageTitle:"Taxes",urlPost:"/taxes",pageAction:"Create",attributes:[],taxBasedOn:[{value:"item",text:"Item"},{value:"total",text:"Total"}],taxMethods:[{value:"inclusive",text:"Inclusive"},{value:"exclusive",text:"Exclusive"}],taxEffect:[{value:"debit",text:"Debit"},{value:"credit",text:"Credit"}],accounts:[]}},mounted:function(){this.$root.appMenu("accounting"),this.$root.appFetchGlobalsCountries(),this.fetchAttributes()},watch:{$route:function(){this.fetchAttributes()}},methods:{fetchAttributes:function(){var t,e=this;return(t=i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,axios.get(e.$route.fullPath).then((function(t){e.pageTitle=t.data.pageTitle,e.attributes=t.data.attributes,e.urlPost=t.data.urlPost,e.accounts=t.data.accounts})).catch((function(t){console.log(t)})).finally((function(t){}));case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})),function(){var e=this,a=arguments;return new Promise((function(s,i){var o=t.apply(e,a);function r(t){l(o,s,i,r,c,"next",t)}function c(t){l(o,s,i,r,c,"throw",t)}r(void 0)}))})()},formSubmit:function(t){t.preventDefault();var e=this;PNotify.removeAll();var a={title:!1,text:"Please wait as we do our thing",addclass:"bg-warning-400 border-warning-400",hide:!1,buttons:{closer:!1,sticker:!1}},s=new PNotify(a);axios.post(e.urlPost,this.attributes).then((function(t){a.text=t.data.messages.join("\n"),!0===t.data.status?(a.title="Success",a.type="success",a.addclass="bg-success-400 border-success-400"):(a.title="! Error",a.type="error",a.addclass="bg-warning-400 border-warning-400"),s.update(a),s.get().click((function(){s.remove()})),e.$router.push({path:t.data.callback})})).catch((function(t){e.response=t}))}},ready:function(){},beforeUpdate:function(){},updated:function(){},destroyed:function(){}},r=(a("KxAT"),a("KHd+")),c=Object(r.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"page-header page-header-light"},[a("div",{staticClass:"page-header-content header-elements-md-inline"},[a("div",{staticClass:"page-title d-flex"},[a("h4",[a("i",{staticClass:"icon-file-plus"}),t._v("\n                    "+t._s(t.pageTitle)+"\n                ")])]),t._v(" "),a("div",{staticClass:"header-elements"},[a("div",{staticClass:"breadcrumb justify-content-center"},[a("router-link",{staticClass:" btn btn-danger btn-sm font-weight-bold",attrs:{to:"/taxes"}},[a("i",{staticClass:"icon-price-tags mr-1"}),t._v("\n                        Taxes\n                    ")])],1)])]),t._v(" "),a("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[a("div",{staticClass:"d-flex"},[a("div",{staticClass:"breadcrumb"},[t._m(0),t._v(" "),a("span",{staticClass:"breadcrumb-item active"},[t._v(t._s(t.pageAction))])]),t._v(" "),t._m(1)])])]),t._v(" "),a("div",{staticClass:"content border-0 padding-0"},[a("div",{staticClass:"card shadow-none rounded-0 border-0"},[a("div",{staticClass:"card-body p-0"},[a("loading-animation"),t._v(" "),this.$root.loading?t._e():a("form",{staticClass:"max-width-1040",attrs:{method:"post",autocomplete:"off"},on:{submit:t.formSubmit}},[a("fieldset",[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-2 col-form-label"}),t._v(" "),a("div",{staticClass:"col-lg-10"},[a("div",{staticClass:"input-group"},[t._m(2),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.name,expression:"attributes.name"}],staticClass:"form-control input-roundless",attrs:{type:"text",placeholder:"Tax name"},domProps:{value:t.attributes.name},on:{input:function(e){e.target.composing||t.$set(t.attributes,"name",e.target.value)}}})])])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-2 col-form-label"}),t._v(" "),a("div",{staticClass:"col-lg-4"},[a("div",{staticClass:"input-group"},[t._m(3),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.display_name,expression:"attributes.display_name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Display name"},domProps:{value:t.attributes.display_name},on:{input:function(e){e.target.composing||t.$set(t.attributes,"display_name",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"row mr-0"},[a("label",{staticClass:"col-auto col-form-label text-right bg-light border rounded-left border-right-0",staticStyle:{"white-space":"nowrap"}},[t._v("\n                                        Country\n                                    ")]),t._v(" "),a("div",{staticClass:"col pl-0 pr-0"},[a("model-list-select",{staticClass:"rounded-left-0",attrs:{list:t.$root.globalsCountries,"option-value":"value","option-text":"text",placeholder:"Select Country"},model:{value:t.attributes.country,callback:function(e){t.$set(t.attributes,"country",e)},expression:"attributes.country"}})],1)])])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-2 col-form-label"}),t._v(" "),a("div",{staticClass:"col-lg-4"},[a("div",{staticClass:"input-group"},[t._m(4),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.value,expression:"attributes.value"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Value e.g 500 or 10%"},domProps:{value:t.attributes.value},on:{input:function(e){e.target.composing||t.$set(t.attributes,"value",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"form-group row mr-0"},[a("label",{staticClass:"col-auto col-form-label text-right bg-light border rounded-left border-right-0",staticStyle:{"white-space":"nowrap"}},[t._v("\n                                        Based on\n                                    ")]),t._v(" "),a("div",{staticClass:"col pl-0 pr-0"},[a("model-list-select",{staticClass:"rounded-left-0 rounded-right-0",attrs:{list:t.taxBasedOn,"option-value":"value","option-text":"text",placeholder:"select account"},model:{value:t.attributes.based_on,callback:function(e){t.$set(t.attributes,"based_on",e)},expression:"attributes.based_on"}})],1),t._v(" "),a("span",{staticClass:"input-group-append"},[a("div",{staticClass:"input-group-text"},[a("div",{staticClass:"custom-control custom-checkbox custom-control-inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.inclusive,expression:"attributes.inclusive"}],staticClass:"custom-control-input",attrs:{type:"checkbox",value:"1",id:"tax-inclusive"},domProps:{checked:Array.isArray(t.attributes.inclusive)?t._i(t.attributes.inclusive,"1")>-1:t.attributes.inclusive},on:{change:function(e){var a=t.attributes.inclusive,s=e.target,i=!!s.checked;if(Array.isArray(a)){var l=t._i(a,"1");s.checked?l<0&&t.$set(t.attributes,"inclusive",a.concat(["1"])):l>-1&&t.$set(t.attributes,"inclusive",a.slice(0,l).concat(a.slice(l+1)))}else t.$set(t.attributes,"inclusive",i)}}}),t._v(" "),a("label",{staticClass:"custom-control-label font-weight-semibold",attrs:{for:"tax-inclusive"}},[t._v("Tax is Inclusive")])])])])])])])]),t._v(" "),a("div",{staticClass:"col-md-10 offset-md-2 p-0",attrs:{id:"item_rates"}},[a("div",{staticClass:"row m-0"},[a("div",{staticClass:"col-md-6"},[t._m(5),t._v(" "),a("div",{staticClass:"form-group row"},[a("div",{staticClass:"custom-control custom-checkbox custom-control-inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.on_sale,expression:"attributes.on_sale"}],staticClass:"custom-control-input",attrs:{type:"checkbox",value:"customer",id:"tax-on-sale",checked:""},domProps:{checked:Array.isArray(t.attributes.on_sale)?t._i(t.attributes.on_sale,"customer")>-1:t.attributes.on_sale},on:{change:function(e){var a=t.attributes.on_sale,s=e.target,i=!!s.checked;if(Array.isArray(a)){var l=t._i(a,"customer");s.checked?l<0&&t.$set(t.attributes,"on_sale",a.concat(["customer"])):l>-1&&t.$set(t.attributes,"on_sale",a.slice(0,l).concat(a.slice(l+1)))}else t.$set(t.attributes,"on_sale",i)}}}),t._v(" "),a("label",{staticClass:"custom-control-label",attrs:{for:"tax-on-sale"}},[t._v("Tax is applied on Sales - effect of tax when making sales.")])])]),t._v(" "),a("div",{staticClass:"form-group row mr-0"},[a("label",{staticClass:"col-auto col-form-label text-right bg-light border rounded-left border-right-0",staticStyle:{"white-space":"nowrap"}},[t._v("\n                                        Effect\n                                    ")]),t._v(" "),a("div",{staticClass:"col pl-0 pr-0"},[a("model-list-select",{staticClass:"rounded-left-0",attrs:{list:t.taxEffect,"option-value":"value","option-text":"text",placeholder:"select account"},model:{value:t.attributes.on_sale_effect,callback:function(e){t.$set(t.attributes,"on_sale_effect",e)},expression:"attributes.on_sale_effect"}})],1)]),t._v(" "),a("div",{staticClass:"form-group row mr-0"},[a("label",{staticClass:"col-auto col-form-label text-right bg-light border rounded-left border-right-0",staticStyle:{"white-space":"nowrap"}},[t._v("\n                                        Account\n                                    ")]),t._v(" "),a("div",{staticClass:"col pl-0 pr-0"},[a("model-list-select",{staticClass:"rounded-left-0",attrs:{list:t.accounts,"option-value":"code","option-text":"name",placeholder:"select account"},model:{value:t.attributes.on_sale_financial_account_code,callback:function(e){t.$set(t.attributes,"on_sale_financial_account_code",e)},expression:"attributes.on_sale_financial_account_code"}})],1)])]),t._v(" "),a("div",{staticClass:"col-md-6"},[t._m(6),t._v(" "),a("div",{staticClass:"form-group"},[a("div",{staticClass:"custom-control custom-checkbox custom-control-inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.on_bill,expression:"attributes.on_bill"}],staticClass:"custom-control-input",attrs:{type:"checkbox",value:"customer",id:"tax-on-bill",checked:""},domProps:{checked:Array.isArray(t.attributes.on_bill)?t._i(t.attributes.on_bill,"customer")>-1:t.attributes.on_bill},on:{change:function(e){var a=t.attributes.on_bill,s=e.target,i=!!s.checked;if(Array.isArray(a)){var l=t._i(a,"customer");s.checked?l<0&&t.$set(t.attributes,"on_bill",a.concat(["customer"])):l>-1&&t.$set(t.attributes,"on_bill",a.slice(0,l).concat(a.slice(l+1)))}else t.$set(t.attributes,"on_bill",i)}}}),t._v(" "),a("label",{staticClass:"custom-control-label",attrs:{for:"tax-on-bill"}},[t._v("Tax is applied to Bills - effect of tax when bills are received.")])])]),t._v(" "),a("div",{staticClass:"form-group row pl-2"},[a("label",{staticClass:"col-auto col-form-label text-right bg-light border rounded-left border-right-0",staticStyle:{"white-space":"nowrap"}},[t._v("\n                                        Effect\n                                    ")]),t._v(" "),a("div",{staticClass:"col pl-0 pr-0"},[a("model-list-select",{staticClass:"rounded-left-0",attrs:{list:t.taxEffect,"option-value":"value","option-text":"text",placeholder:"select account"},model:{value:t.attributes.on_bill_effect,callback:function(e){t.$set(t.attributes,"on_bill_effect",e)},expression:"attributes.on_bill_effect"}})],1)]),t._v(" "),a("div",{staticClass:"form-group row pl-2"},[a("label",{staticClass:"col-auto col-form-label text-right bg-light border rounded-left border-right-0",staticStyle:{"white-space":"nowrap"}},[t._v("\n                                        Account\n                                    ")]),t._v(" "),a("div",{staticClass:"col pl-0 pr-0"},[a("model-list-select",{staticClass:"rounded-left-0",attrs:{list:t.accounts,"option-value":"code","option-text":"name",placeholder:"select account"},model:{value:t.attributes.on_bill_financial_account_code,callback:function(e){t.$set(t.attributes,"on_bill_financial_account_code",e)},expression:"attributes.on_bill_financial_account_code"}})],1)])])])]),t._v(" "),a("div",{staticClass:"col-md-10 offset-md-2 p-0"},[t._m(7),t._v(" "),a("div",{staticClass:"row m-0"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group row mr-0"},[a("label",{staticClass:"col-auto col-form-label text-right bg-light border rounded-left border-right-0",staticStyle:{"white-space":"nowrap"}},[t._v("\n                                        Date Tax goes in force:\n                                    ")]),t._v(" "),a("div",{staticClass:"col pl-0 pr-0"},[a("date-picker",{staticClass:"font-weight-bold w-100 h-100 rounded-0",attrs:{valueType:"format",lang:t.vue2DatePicker.lang,placeholder:"Choose date"},model:{value:t.attributes.enforceable_from,callback:function(e){t.$set(t.attributes,"enforceable_from",e)},expression:"attributes.enforceable_from"}})],1)])]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group row ml-0 mr-0"},[a("label",{staticClass:"col-auto col-form-label text-right bg-light border rounded-left border-right-0",staticStyle:{"white-space":"nowrap"}},[t._v("\n                                        Date tax is abolished:\n                                    ")]),t._v(" "),a("div",{staticClass:"col pl-0 pr-0"},[a("date-picker",{staticClass:"font-weight-bold w-100 h-100 rounded-0",attrs:{valueType:"format",lang:t.vue2DatePicker.lang,placeholder:"Choose date"},model:{value:t.attributes.abolished_on,callback:function(e){t.$set(t.attributes,"abolished_on",e)},expression:"attributes.abolished_on"}})],1)])])])]),t._v(" "),a("div",{staticClass:"text-left col-md-10 offset-md-2 p-0"},[a("button",{staticClass:"btn btn-danger font-weight-bold",attrs:{type:"submit"}},[a("i",{staticClass:"icon-price-tags2 mr-1"}),t._v(" "+t._s(t.pageTitle)+"\n                        ")])])])],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[e("i",{staticClass:"icon-home2 mr-2"}),this._v(" Taxes")])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[this._v("Name")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[this._v("Display name")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[this._v("Value")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group row mr-0"},[e("span",{staticClass:"badge bg-purple badge-pill font-weight-bold"},[this._v("ON SALES")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group row ml-0"},[e("span",{staticClass:"badge bg-purple badge-pill font-weight-bold"},[this._v("ON BILLING")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row col-12 mb-3"},[e("span",{staticClass:"badge bg-purple badge-pill font-weight-bold"},[this._v("Important dates")])])}],!1,null,null,null);e.default=c.exports}}]);