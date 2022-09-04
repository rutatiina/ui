(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{XqN0:function(t,e,a){"use strict";a.r(e);var s=a("o0o1"),i=a.n(s);function r(t,e,a,s,i,r,o){try{var l=t[r](o),n=l.value}catch(t){return void a(t)}l.done?e(n):Promise.resolve(n).then(s,i)}var o={data:function(){return{pageTitle:"Create Supplier",urlPost:"/workshop/suppliers",attributes:[]}},mounted:function(){this.fetchAttributes(),this.appFetchGlobalsCurrencies(),this.appFetchGlobalsCountries(),this.appFetchGlobalsPaymentTerms(),this.appFetchGlobalsSalutations()},watch:{$route:function(){this.fetchAttributes()}},methods:{fetchAttributes:function(){var t,e=this;return(t=i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,axios.get(e.$route.fullPath).then((function(t){e.attributes=t.data.attributes,e.urlPost=t.data.urlPost,e.pageTitle=t.data.pageTitle,e.globalsCurrenciesSelected=t.data.selectedCurrencies})).catch((function(t){console.log(t)})).finally((function(t){}));case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})),function(){var e=this,a=arguments;return new Promise((function(s,i){var o=t.apply(e,a);function l(t){r(o,s,i,l,n,"next",t)}function n(t){r(o,s,i,l,n,"throw",t)}l(void 0)}))})()},setCurrencies:function(t,e,a){this.globalsCurrenciesSelected=t,this.attributes.currencies=t.map((function(t){return t.value}))},addContactPerson:function(){this.attributes.contact_persons.push({salutation:null,first_name:null,last_name:null,email:null,work_phone:null,mobile:null})},formSubmit:function(t){t.preventDefault();var e=this;PNotify.removeAll();var a={title:!1,text:"Please wait as we do our thing",addclass:"bg-warning-400 border-warning-400",hide:!1,buttons:{closer:!1,sticker:!1}},s=new PNotify(a);console.log(this.attributes),axios.post(e.urlPost,this.attributes).then((function(t){a.text=t.data.messages.join("\n"),!0===t.data.status?(a.title="Success",a.type="success",a.addclass="bg-success-400 border-success-400"):(a.title="! Error",a.type="error",a.addclass="bg-warning-400 border-warning-400"),s.update(a),s.get().click((function(){s.remove()}))})).catch((function(t){e.response=t}))}},ready:function(){},beforeUpdate:function(){},updated:function(){}},l=a("KHd+"),n=Object(l.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"page-header page-header-light"},[a("div",{staticClass:"page-header-content header-elements-md-inline"},[a("div",{staticClass:"page-title d-flex"},[a("h4",[a("i",{staticClass:"icon-clipboard3 mr-1"}),t._v("\n                    "+t._s(t.pageTitle)+"\n                ")])])]),t._v(" "),a("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[a("div",{staticClass:"d-flex"},[a("div",{staticClass:"breadcrumb"},[a("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[a("i",{staticClass:"icon-home2 mr-2"}),t._v(" "),a("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(" "+t._s(t._f("truncate")(this.$root.tenant.name,30))+" ")])]),t._v(" "),a("span",{staticClass:"breadcrumb-item"},[t._v("Workshop")]),t._v(" "),a("span",{staticClass:"breadcrumb-item"},[t._v("Suppliers")]),t._v(" "),a("span",{staticClass:"breadcrumb-item active"},[t._v("Create")])]),t._v(" "),t._m(0)]),t._v(" "),a("div",{staticClass:"header-elements"},[a("div",{staticClass:"breadcrumb justify-content-center"},[a("router-link",{staticClass:" btn btn-danger btn-sm rounded-round font-weight-bold",attrs:{to:"/workshop/suppliers"}},[a("i",{staticClass:"icon-clipboard3 mr-1"}),t._v("\n                        Suppliers\n                    ")])],1)])])]),t._v(" "),a("div",{staticClass:"content border-0 padding-0"},[a("div",{staticClass:"card shadow-none rounded-0 border-0"},[a("div",{staticClass:"card-body p-0"},[a("loading-animation"),t._v(" "),this.$root.loading?t._e():a("form",{staticClass:"max-width-820",staticStyle:{"margin-bottom":"100px"},attrs:{id:"counterparty_update_form",action:"",method:"post",autocomplete:"off"},on:{submit:t.formSubmit}},[a("fieldset",{},[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-2 control-label"},[t._v("\n                                Contact name:\n                            ")]),t._v(" "),a("div",{staticClass:"col-lg-2"},[a("model-select",{attrs:{options:t.globalsSalutations,placeholder:"Salutation ..."},model:{value:t.attributes.salutation,callback:function(e){t.$set(t.attributes,"salutation",e)},expression:"attributes.salutation"}})],1),t._v(" "),a("div",{staticClass:"col-lg-8"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.name,expression:"attributes.name"}],staticClass:"form-control ",attrs:{type:"text",value:"",placeholder:"Full name"},domProps:{value:t.attributes.name},on:{input:function(e){e.target.composing||t.$set(t.attributes,"name",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-2 col-form-label"},[t._v("\n                                Display name:\n                            ")]),t._v(" "),a("div",{staticClass:"col-lg-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.display_name,expression:"attributes.display_name"}],staticClass:"form-control ",attrs:{type:"text",value:"",placeholder:"Display name"},domProps:{value:t.attributes.display_name},on:{input:function(e){e.target.composing||t.$set(t.attributes,"display_name",e.target.value)}}})])])]),t._v(" "),t._m(1),t._v(" "),a("div",{staticClass:"card p-0 shadow-none border-0"},[a("div",{staticClass:"card-body p-0"},[a("div",{staticClass:"tab-content"},[a("div",{staticClass:"tab-pane active",attrs:{id:"bottom-divided-tab1"}},[a("fieldset",{},[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-2 col-form-label"},[t._v("\n                                                Country\n                                            ")]),t._v(" "),a("div",{staticClass:"col-lg-10"},[a("model-list-select",{attrs:{list:t.globalsCountries,"option-value":"value","option-text":"text",placeholder:"Select item"},model:{value:t.attributes.country,callback:function(e){t.$set(t.attributes,"country",e)},expression:"attributes.country"}})],1)]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-2 col-form-label"},[t._v("\n                                                Default currency\n                                            ")]),t._v(" "),a("div",{staticClass:"col-lg-10"},[a("model-list-select",{attrs:{list:t.globalsCurrencies,"option-value":"value","option-text":"text",placeholder:"Select currency"},model:{value:t.attributes.currency,callback:function(e){t.$set(t.attributes,"currency",e)},expression:"attributes.currency"}})],1)]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-2 col-form-label"},[t._v("\n                                                Currencies\n                                            ")]),t._v(" "),a("div",{staticClass:"col-lg-10"},[a("multi-list-select",{attrs:{list:t.globalsCurrencies,"option-value":"value","option-text":"text","selected-items":t.globalsCurrenciesSelected,placeholder:"Currencies"},on:{select:t.setCurrencies}})],1)]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-2 col-form-label"},[t._v("\n                                                Payment terms\n                                            ")]),t._v(" "),a("div",{staticClass:"col-lg-10"},[a("model-select",{attrs:{options:t.globalsPaymentTerms,placeholder:"Payment terms ..."},model:{value:t.attributes.payment_terms,callback:function(e){t.$set(t.attributes,"payment_terms",e)},expression:"attributes.payment_terms"}})],1)]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-2 col-form-label"},[t._v("\n                                                Facebook\n                                            ")]),t._v(" "),a("div",{staticClass:"col-lg-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.facebook_link,expression:"attributes.facebook_link"}],staticClass:"form-control ",attrs:{type:"text",value:"",placeholder:"Facebook link"},domProps:{value:t.attributes.facebook_link},on:{input:function(e){e.target.composing||t.$set(t.attributes,"facebook_link",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-2 col-form-label"},[t._v("\n                                                Twitter\n                                            ")]),t._v(" "),a("div",{staticClass:"col-lg-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.twitter_link,expression:"attributes.twitter_link"}],staticClass:"form-control ",attrs:{type:"text",value:"",placeholder:"Twitter link"},domProps:{value:t.attributes.twitter_link},on:{input:function(e){e.target.composing||t.$set(t.attributes,"twitter_link",e.target.value)}}})])])])]),t._v(" "),a("div",{staticClass:"tab-pane ",attrs:{id:"bottom-divided-tab2"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("fieldset",{staticClass:"col-md-11"},[a("span",{staticClass:"badge badge-primary font-weight-bold "},[t._v("BILLING ADDRESS")]),t._v(" "),a("div",{staticClass:"form-group row mt-2"},[a("div",{staticClass:"col-lg-12",attrs:{title:"Attention"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.billing_address_attention,expression:"attributes.billing_address_attention"}],staticClass:"form-control ",attrs:{type:"text",value:"",placeholder:"Attention"},domProps:{value:t.attributes.billing_address_attention},on:{input:function(e){e.target.composing||t.$set(t.attributes,"billing_address_attention",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group row",attrs:{title:"Address"}},[a("div",{staticClass:"col-lg-12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.billing_address_street1,expression:"attributes.billing_address_street1"}],staticClass:"form-control  mb-2",attrs:{type:"text",value:"",placeholder:"Street 1"},domProps:{value:t.attributes.billing_address_street1},on:{input:function(e){e.target.composing||t.$set(t.attributes,"billing_address_street1",e.target.value)}}}),t._v(" "),a("div",{staticClass:"clearfix"}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.billing_address_street2,expression:"attributes.billing_address_street2"}],staticClass:"form-control ",attrs:{type:"text",value:"",placeholder:"Street 2"},domProps:{value:t.attributes.billing_address_street2},on:{input:function(e){e.target.composing||t.$set(t.attributes,"billing_address_street2",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group row",attrs:{title:"City"}},[a("div",{staticClass:"col-lg-12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.billing_address_city,expression:"attributes.billing_address_city"}],staticClass:"form-control ",attrs:{type:"text",value:"",placeholder:"City"},domProps:{value:t.attributes.billing_address_city},on:{input:function(e){e.target.composing||t.$set(t.attributes,"billing_address_city",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group row",attrs:{title:"State"}},[a("div",{staticClass:"col-lg-12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.billing_address_state,expression:"attributes.billing_address_state"}],staticClass:"form-control ",attrs:{type:"text",value:"",placeholder:"State"},domProps:{value:t.attributes.billing_address_state},on:{input:function(e){e.target.composing||t.$set(t.attributes,"billing_address_state",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group row",attrs:{title:"Zip code"}},[a("div",{staticClass:"col-lg-12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.billing_address_zip_code,expression:"attributes.billing_address_zip_code"}],staticClass:"form-control ",attrs:{type:"text",value:"",placeholder:"Name"},domProps:{value:t.attributes.billing_address_zip_code},on:{input:function(e){e.target.composing||t.$set(t.attributes,"billing_address_zip_code",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group row",attrs:{title:"Country"}},[a("div",{staticClass:"col-lg-12"},[a("model-list-select",{attrs:{list:t.globalsCountries,"option-value":"value","option-text":"text",placeholder:"Select country"},model:{value:t.attributes.billing_address_country,callback:function(e){t.$set(t.attributes,"billing_address_country",e)},expression:"attributes.billing_address_country"}})],1)]),t._v(" "),a("div",{staticClass:"form-group row hidden"},[a("div",{staticClass:"col-lg-12",attrs:{title:"Fax"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.billing_address_fax,expression:"attributes.billing_address_fax"}],staticClass:"form-control ",attrs:{type:"text",value:"",placeholder:"Name"},domProps:{value:t.attributes.billing_address_fax},on:{input:function(e){e.target.composing||t.$set(t.attributes,"billing_address_fax",e.target.value)}}})])])])]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("fieldset",{staticClass:"col-md-12 pr-0"},[a("span",{staticClass:"badge badge-primary font-weight-bold "},[t._v("SHIPPING ADDRESS")]),t._v(" "),a("div",{staticClass:"form-group row mt-2"},[a("div",{staticClass:"col-lg-12",attrs:{title:"Attention"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.shipping_address_attention,expression:"attributes.shipping_address_attention"}],staticClass:"form-control ",attrs:{type:"text",value:"",placeholder:"Attention"},domProps:{value:t.attributes.shipping_address_attention},on:{input:function(e){e.target.composing||t.$set(t.attributes,"shipping_address_attention",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("div",{staticClass:"col-lg-12",attrs:{title:"Address"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.shipping_address_street1,expression:"attributes.shipping_address_street1"}],staticClass:"form-control  mb-2",attrs:{type:"text",value:"",placeholder:"Street 1"},domProps:{value:t.attributes.shipping_address_street1},on:{input:function(e){e.target.composing||t.$set(t.attributes,"shipping_address_street1",e.target.value)}}}),t._v(" "),a("div",{staticClass:"clearfix"}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.shipping_address_street2,expression:"attributes.shipping_address_street2"}],staticClass:"form-control ",attrs:{type:"text",value:"",placeholder:"Street 2"},domProps:{value:t.attributes.shipping_address_street2},on:{input:function(e){e.target.composing||t.$set(t.attributes,"shipping_address_street2",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("div",{staticClass:"col-lg-12",attrs:{title:"City"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.shipping_address_city,expression:"attributes.shipping_address_city"}],staticClass:"form-control ",attrs:{type:"text",value:"",placeholder:"City"},domProps:{value:t.attributes.shipping_address_city},on:{input:function(e){e.target.composing||t.$set(t.attributes,"shipping_address_city",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("div",{staticClass:"col-lg-12",attrs:{title:"State"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.shipping_address_state,expression:"attributes.shipping_address_state"}],staticClass:"form-control ",attrs:{type:"text",value:"",placeholder:"State"},domProps:{value:t.attributes.shipping_address_state},on:{input:function(e){e.target.composing||t.$set(t.attributes,"shipping_address_state",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("div",{staticClass:"col-lg-12",attrs:{title:"Zip code"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.shipping_address_zip_code,expression:"attributes.shipping_address_zip_code"}],staticClass:"form-control ",attrs:{type:"text",value:"",placeholder:"Zip code"},domProps:{value:t.attributes.shipping_address_zip_code},on:{input:function(e){e.target.composing||t.$set(t.attributes,"shipping_address_zip_code",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("div",{staticClass:"col-lg-12",attrs:{title:"Country"}},[a("model-list-select",{attrs:{list:t.globalsCountries,"option-value":"value","option-text":"text",placeholder:"Select country"},model:{value:t.attributes.shipping_address_country,callback:function(e){t.$set(t.attributes,"shipping_address_country",e)},expression:"attributes.shipping_address_country"}})],1)]),t._v(" "),a("div",{staticClass:"form-group row hidden"},[a("div",{staticClass:"col-lg-12",attrs:{title:"Fax"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.shipping_address_fax,expression:"attributes.shipping_address_fax"}],staticClass:"form-control ",attrs:{type:"text",value:"",placeholder:"Fax"},domProps:{value:t.attributes.shipping_address_fax},on:{input:function(e){e.target.composing||t.$set(t.attributes,"shipping_address_fax",e.target.value)}}})])])])])])]),t._v(" "),a("div",{staticClass:"tab-pane ",attrs:{id:"bottom-divided-tab3"}},[a("table",{staticClass:"table table-bordered no-border-left no-border-right no-border-bottom",attrs:{id:"primary-contact"}},[t._m(2),t._v(" "),a("tbody",[a("tr",{},[a("td",{staticClass:"p-0"},[a("model-select",{staticClass:"border-0",attrs:{options:t.globalsSalutations,placeholder:"Salutation ..."},model:{value:t.attributes.contact_salutation,callback:function(e){t.$set(t.attributes,"contact_salutation",e)},expression:"attributes.contact_salutation"}})],1),t._v(" "),a("td",{staticClass:"p-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.contact_first_name,expression:"attributes.contact_first_name"}],staticClass:"item_row_quantity form-control border-0",attrs:{type:"text",value:"",placeholder:"First Name"},domProps:{value:t.attributes.contact_first_name},on:{input:function(e){e.target.composing||t.$set(t.attributes,"contact_first_name",e.target.value)}}})]),t._v(" "),a("td",{staticClass:"p-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.contact_last_name,expression:"attributes.contact_last_name"}],staticClass:"item_row_rate form-control m-input border-0",attrs:{type:"text",value:"",placeholder:"Last Name"},domProps:{value:t.attributes.contact_last_name},on:{input:function(e){e.target.composing||t.$set(t.attributes,"contact_last_name",e.target.value)}}})]),t._v(" "),a("td",{staticClass:"p-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.contact_email,expression:"attributes.contact_email"}],staticClass:"item_row_rate form-control m-input border-0",attrs:{type:"text",value:"",placeholder:"Email Address"},domProps:{value:t.attributes.contact_email},on:{input:function(e){e.target.composing||t.$set(t.attributes,"contact_email",e.target.value)}}})]),t._v(" "),a("td",{staticClass:"p-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.contact_work_phone,expression:"attributes.contact_work_phone"}],staticClass:"item_row_rate form-control m-input border-0",attrs:{type:"text",value:"",placeholder:"Work Phone"},domProps:{value:t.attributes.contact_work_phone},on:{input:function(e){e.target.composing||t.$set(t.attributes,"contact_work_phone",e.target.value)}}})]),t._v(" "),a("td",{staticClass:"p-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.contact_mobile,expression:"attributes.contact_mobile"}],staticClass:"item_row_rate form-control m-input border-0",attrs:{type:"text",value:"",placeholder:"Mobile"},domProps:{value:t.attributes.contact_mobile},on:{input:function(e){e.target.composing||t.$set(t.attributes,"contact_mobile",e.target.value)}}})])]),t._v(" "),t._l(t.attributes.contact_persons,(function(e,s){return a("tr",{staticClass:"contact_person_row"},[a("td",{staticClass:"p-0"},[a("model-select",{staticClass:"border-0",attrs:{options:t.globalsSalutations,placeholder:"Salutation ..."},model:{value:e.salutation,callback:function(a){t.$set(e,"salutation",a)},expression:"contact_person.salutation"}})],1),t._v(" "),a("td",{staticClass:"p-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.first_name,expression:"contact_person.first_name"}],staticClass:"form-control border-0",attrs:{type:"text",value:"",placeholder:"First Name"},domProps:{value:e.first_name},on:{input:function(a){a.target.composing||t.$set(e,"first_name",a.target.value)}}})]),t._v(" "),a("td",{staticClass:"p-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.last_name,expression:"contact_person.last_name"}],staticClass:"form-control m-input border-0",attrs:{type:"text",value:"",placeholder:"Last Name"},domProps:{value:e.last_name},on:{input:function(a){a.target.composing||t.$set(e,"last_name",a.target.value)}}})]),t._v(" "),a("td",{staticClass:"p-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"contact_person.email"}],staticClass:"form-control m-input border-0",attrs:{type:"text",value:"",placeholder:"Email Address"},domProps:{value:e.email},on:{input:function(a){a.target.composing||t.$set(e,"email",a.target.value)}}})]),t._v(" "),a("td",{staticClass:"p-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.work_phone,expression:"contact_person.work_phone"}],staticClass:"form-control m-input border-0",attrs:{type:"text",value:"",placeholder:"Work Phone"},domProps:{value:e.work_phone},on:{input:function(a){a.target.composing||t.$set(e,"work_phone",a.target.value)}}})]),t._v(" "),a("td",{staticClass:"p-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.mobile,expression:"contact_person.mobile"}],staticClass:"form-control m-input border-0",attrs:{type:"text",value:"",placeholder:"Mobile"},domProps:{value:e.mobile},on:{input:function(a){a.target.composing||t.$set(e,"mobile",a.target.value)}}})])])}))],2)]),t._v(" "),a("button",{staticClass:"btn btn-link btn-xs font-weight-bold",attrs:{type:"button"},on:{click:t.addContactPerson}},[a("i",{staticClass:"icon-plus22 position-left"}),t._v(" Add Contact Person\n                                    ")])]),t._v(" "),a("div",{staticClass:"tab-pane ",attrs:{id:"bottom-divided-tab4"}},[a("fieldset",{},[a("div",{staticClass:"form-group row"},[t._m(3),t._v(" "),a("div",{staticClass:"col-lg-12"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.attributes.remarks,expression:"attributes.remarks"}],staticClass:"form-control ",attrs:{placeholder:"Remarks"},domProps:{value:t.attributes.remarks},on:{input:function(e){e.target.composing||t.$set(t.attributes,"remarks",e.target.value)}}})])])])])])])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-2 col-form-label"}),t._v(" "),a("div",{staticClass:"col-lg-10"},[a("button",{staticClass:"btn btn-danger font-weight-bold",attrs:{type:"submit"}},[a("i",{staticClass:"icon-clipboard3 mr-1"}),t._v(" "+t._s(t.pageTitle)+"\n                            ")])])])])],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card shadow-none rounded-0 border-0 mb-0"},[e("div",{staticClass:"card-body pb-0 pt-2"},[e("ul",{staticClass:"nav nav-tabs nav-tabs-bottom border-bottom-0 font-weight-semibold"},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link active",attrs:{href:"#bottom-divided-tab1","data-toggle":"tab"}},[this._v("Other details")])]),this._v(" "),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#bottom-divided-tab2","data-toggle":"tab"}},[this._v("Address")])]),this._v(" "),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#bottom-divided-tab3","data-toggle":"tab"}},[this._v("Contact persons")])]),this._v(" "),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#bottom-divided-tab4","data-toggle":"tab"}},[this._v("Remarks")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"thead-default"},[a("tr",[a("th",{staticClass:"pl-10"},[t._v("Salutation")]),t._v(" "),a("th",{staticClass:"pl-15"},[t._v("First Name")]),t._v(" "),a("th",{staticClass:"pl-15"},[t._v("Last Name")]),t._v(" "),a("th",{staticClass:"pl-15",staticStyle:{width:"30%"},attrs:{nowrap:""}},[t._v("Email Address")]),t._v(" "),a("th",{staticClass:"pl-15",attrs:{nowrap:""}},[t._v("Work Phone")]),t._v(" "),a("th",{staticClass:"pl-15"},[t._v("Mobile")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"col-lg-12 col-form-label"},[e("span",{staticClass:"text-semibold"},[this._v("Remarks")]),this._v(" (\n                                                "),e("small",[this._v("For internal use")]),this._v("\n                                                )\n                                            ")])}],!1,null,null,null);e.default=n.exports}}]);