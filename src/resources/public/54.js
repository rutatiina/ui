(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{"LPX+":function(t,s,e){"use strict";e.r(s);var a=e("o0o1"),i=e.n(a);function l(t,s,e,a,i,l,r){try{var o=t[l](r),n=o.value}catch(t){return void e(t)}o.done?s(n):Promise.resolve(n).then(a,i)}var r={name:"ContactsCreate",components:{},data:function(){return{pageTitle:"User",urlPost:"/users",onLoginOptions:[],salutation:[{value:"",text:"None"},{value:"Mr",text:"Mr"},{value:"Miss",text:"Miss"},{value:"Ms",text:"Ms"}],attributes:{details:{}},taxes:[]}},mounted:function(){this.$root.appMenu("accounting"),this.$root.appFetchGlobalsCountries(),this.fetchAttributes()},watch:{$route:function(){this.fetchAttributes()}},methods:{fetchAttributes:function(){var t,s=this;return(t=i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,axios.get(s.$route.fullPath).then((function(t){s.pageTitle=t.data.pageTitle,s.urlPost=t.data.urlPost,s.onLoginOptions=t.data.onLoginOptions,s.attributes=t.data.attributes})).catch((function(t){console.log(t)})).finally((function(t){}));case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})),function(){var s=this,e=arguments;return new Promise((function(a,i){var r=t.apply(s,e);function o(t){l(r,a,i,o,n,"next",t)}function n(t){l(r,a,i,o,n,"throw",t)}o(void 0)}))})()},addContactPerson:function(){this.attributes.contact_persons.push({salutation:null,first_name:null,last_name:null,email:null,work_phone:null,mobile:null})},formSubmit:function(t){t.preventDefault();var s=this;PNotify.removeAll();var e={title:!1,text:"Please wait as we do our thing",addclass:"bg-warning-400 border-warning-400",hide:!1,buttons:{closer:!1,sticker:!1}},a=new PNotify(e);axios.post(s.urlPost,this.attributes).then((function(t){e.text=t.data.messages.join("\n"),!0===t.data.status?(e.title="Success",e.type="success",e.addclass="bg-success-400 border-success-400",a.update(e),s.$router.push({path:t.data.callback})):(e.title="! Error",e.type="error",e.addclass="bg-warning-400 border-warning-400",a.update(e)),a.get().click((function(){a.remove()}))})).catch((function(t){s.response=t}))}},ready:function(){},beforeUpdate:function(){},updated:function(){}},o=e("KHd+"),n=Object(o.a)(r,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"page-header page-header-light"},[e("div",{staticClass:"page-header-content header-elements-md-inline"},[e("div",{staticClass:"page-title d-flex"},[e("h4",[e("i",{staticClass:"icon-user-plus"}),t._v("\n                    "+t._s(t.pageTitle)+"\n                ")])]),t._v(" "),e("div",{staticClass:"header-elements"},[e("div",{staticClass:"breadcrumb justify-content-center"},[e("router-link",{staticClass:" btn btn-danger btn-sm font-weight-bold",attrs:{to:"/users"}},[e("i",{staticClass:"icon-users2 mr-1"}),t._v("\n                        Users\n                    ")])],1)])]),t._v(" "),t._m(0)]),t._v(" "),e("div",{staticClass:"content border-0 padding-0"},[e("div",{staticClass:"card shadow-none rounded-0 border-0"},[e("div",{staticClass:"card-body p-0"},[e("loading-animation"),t._v(" "),this.$root.loading?t._e():e("form",{staticClass:"max-width-820",staticStyle:{"margin-bottom":"100px"},attrs:{id:"counterparty_update_form",action:"",method:"post",autocomplete:"off"},on:{submit:t.formSubmit}},[e("div",{staticClass:"card shadow-none rounded-0 border-0 mb-0 offset-md-1"},[e("div",{staticClass:"card-body pb-0 pt-2 pl-0 pr-0"},[e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-lg-2 col-form-label"},[t._v("\n                                    Name:\n                                ")]),t._v(" "),e("div",{staticClass:"col-lg-2"},[e("model-select",{staticClass:"form-control form-control-sm",attrs:{options:t.salutation,placeholder:"Salutation"},model:{value:t.attributes.salutation,callback:function(s){t.$set(t.attributes,"salutation",s)},expression:"attributes.salutation"}})],1),t._v(" "),e("div",{staticClass:"col-lg-8"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.name,expression:"attributes.name"}],staticClass:"form-control ",attrs:{type:"text",placeholder:"Full name"},domProps:{value:t.attributes.name},on:{input:function(s){s.target.composing||t.$set(t.attributes,"name",s.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-lg-2 col-form-label"},[t._v("\n                                    Email\n                                ")]),t._v(" "),e("div",{staticClass:"col-lg-10"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.email,expression:"attributes.email"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Email"},domProps:{value:t.attributes.email},on:{input:function(s){s.target.composing||t.$set(t.attributes,"email",s.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-lg-2 col-form-label"},[t._v("\n                                    On login\n                                ")]),t._v(" "),e("div",{staticClass:"col-lg-10"},[e("model-select",{staticClass:"form-control form-control-sm",attrs:{options:t.onLoginOptions,autocomplete:"false",placeholder:"On login"},model:{value:t.attributes.details.on_login,callback:function(s){t.$set(t.attributes.details,"on_login",s)},expression:"attributes.details.on_login"}})],1)])])]),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"card p-0 shadow-none border-0 offset-md-1"},[e("div",{staticClass:"card-body p-0"},[e("div",{staticClass:"tab-content"},[e("div",{staticClass:"tab-pane active",attrs:{id:"bottom-divided-tab0"}},[e("fieldset",{},[e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-lg-2 col-form-label"},[t._v("\n                                                Password\n                                            ")]),t._v(" "),e("div",{staticClass:"col-lg-10"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.password,expression:"attributes.password"}],staticClass:"form-control ",attrs:{type:"password",value:"",placeholder:"Password"},domProps:{value:t.attributes.password},on:{input:function(s){s.target.composing||t.$set(t.attributes,"password",s.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-lg-2 col-form-label",staticStyle:{"white-space":"nowrap"}},[t._v("\n                                                Confirm password\n                                            ")]),t._v(" "),e("div",{staticClass:"col-lg-10"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.password_confirmation,expression:"attributes.password_confirmation"}],staticClass:"form-control ",attrs:{type:"password",value:"",placeholder:"Confirm password"},domProps:{value:t.attributes.password_confirmation},on:{input:function(s){s.target.composing||t.$set(t.attributes,"password_confirmation",s.target.value)}}})])])])]),t._v(" "),e("div",{staticClass:"tab-pane",attrs:{id:"bottom-divided-tab1"}},[e("fieldset",{},[e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-lg-2 col-form-label"},[t._v("\n                                                Facebook\n                                            ")]),t._v(" "),e("div",{staticClass:"col-lg-10"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.details.facebook_link,expression:"attributes.details.facebook_link"}],staticClass:"form-control ",attrs:{type:"text",value:"",placeholder:"Facebook link"},domProps:{value:t.attributes.details.facebook_link},on:{input:function(s){s.target.composing||t.$set(t.attributes.details,"facebook_link",s.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-lg-2 col-form-label"},[t._v("\n                                                Twitter\n                                            ")]),t._v(" "),e("div",{staticClass:"col-lg-10"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.details.twitter_link,expression:"attributes.details.twitter_link"}],staticClass:"form-control ",attrs:{type:"text",value:"",placeholder:"Twitter link"},domProps:{value:t.attributes.details.twitter_link},on:{input:function(s){s.target.composing||t.$set(t.attributes.details,"twitter_link",s.target.value)}}})])])])]),t._v(" "),e("div",{staticClass:"tab-pane",attrs:{id:"bottom-divided-tab2"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("fieldset",{},[e("span",{staticClass:"badge badge-primary font-weight-bold "},[t._v("BILLING ADDRESS")]),t._v(" "),e("div",{staticClass:"form-group row mt-2"},[e("div",{staticClass:"col-lg-12",attrs:{title:"Attention"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.details.billing_address_attention,expression:"attributes.details.billing_address_attention"}],staticClass:"form-control ",attrs:{type:"text",value:"",placeholder:"Attention"},domProps:{value:t.attributes.details.billing_address_attention},on:{input:function(s){s.target.composing||t.$set(t.attributes.details,"billing_address_attention",s.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group row",attrs:{title:"Address"}},[e("div",{staticClass:"col-lg-12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.details.billing_address_street1,expression:"attributes.details.billing_address_street1"}],staticClass:"form-control  mb-2",attrs:{type:"text",value:"",placeholder:"Street 1"},domProps:{value:t.attributes.details.billing_address_street1},on:{input:function(s){s.target.composing||t.$set(t.attributes.details,"billing_address_street1",s.target.value)}}}),t._v(" "),e("div",{staticClass:"clearfix"}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.details.billing_address_street2,expression:"attributes.details.billing_address_street2"}],staticClass:"form-control ",attrs:{type:"text",value:"",placeholder:"Street 2"},domProps:{value:t.attributes.details.billing_address_street2},on:{input:function(s){s.target.composing||t.$set(t.attributes.details,"billing_address_street2",s.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group row",attrs:{title:"City"}},[e("div",{staticClass:"col-lg-12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.details.billing_address_city,expression:"attributes.details.billing_address_city"}],staticClass:"form-control ",attrs:{type:"text",value:"",placeholder:"City"},domProps:{value:t.attributes.details.billing_address_city},on:{input:function(s){s.target.composing||t.$set(t.attributes.details,"billing_address_city",s.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group row",attrs:{title:"State"}},[e("div",{staticClass:"col-lg-12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.details.billing_address_state,expression:"attributes.details.billing_address_state"}],staticClass:"form-control ",attrs:{type:"text",value:"",placeholder:"State"},domProps:{value:t.attributes.details.billing_address_state},on:{input:function(s){s.target.composing||t.$set(t.attributes.details,"billing_address_state",s.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group row",attrs:{title:"Zip code"}},[e("div",{staticClass:"col-lg-12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.details.billing_address_zip_code,expression:"attributes.details.billing_address_zip_code"}],staticClass:"form-control ",attrs:{type:"text",value:"",placeholder:"Name"},domProps:{value:t.attributes.details.billing_address_zip_code},on:{input:function(s){s.target.composing||t.$set(t.attributes.details,"billing_address_zip_code",s.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group row",attrs:{title:"Country"}},[e("div",{staticClass:"col-lg-12"},[e("model-list-select",{attrs:{list:t.$root.globalsCountries,"option-value":"value","option-text":"text",placeholder:"Select country"},model:{value:t.attributes.details.billing_address_country,callback:function(s){t.$set(t.attributes.details,"billing_address_country",s)},expression:"attributes.details.billing_address_country"}})],1)]),t._v(" "),e("div",{staticClass:"form-group row hidden"},[e("div",{staticClass:"col-lg-12",attrs:{title:"Fax"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.details.billing_address_fax,expression:"attributes.details.billing_address_fax"}],staticClass:"form-control ",attrs:{type:"text",value:"",placeholder:"Name"},domProps:{value:t.attributes.details.billing_address_fax},on:{input:function(s){s.target.composing||t.$set(t.attributes.details,"billing_address_fax",s.target.value)}}})])])])]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("fieldset",{},[e("span",{staticClass:"badge badge-primary font-weight-bold "},[t._v("SHIPPING ADDRESS")]),t._v(" "),e("div",{staticClass:"form-group row mt-2"},[e("div",{staticClass:"col-lg-12",attrs:{title:"Attention"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.details.shipping_address_attention,expression:"attributes.details.shipping_address_attention"}],staticClass:"form-control ",attrs:{type:"text",value:"",placeholder:"Attention"},domProps:{value:t.attributes.details.shipping_address_attention},on:{input:function(s){s.target.composing||t.$set(t.attributes.details,"shipping_address_attention",s.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("div",{staticClass:"col-lg-12",attrs:{title:"Address"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.details.shipping_address_street1,expression:"attributes.details.shipping_address_street1"}],staticClass:"form-control  mb-2",attrs:{type:"text",value:"",placeholder:"Street 1"},domProps:{value:t.attributes.details.shipping_address_street1},on:{input:function(s){s.target.composing||t.$set(t.attributes.details,"shipping_address_street1",s.target.value)}}}),t._v(" "),e("div",{staticClass:"clearfix"}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.details.shipping_address_street2,expression:"attributes.details.shipping_address_street2"}],staticClass:"form-control ",attrs:{type:"text",value:"",placeholder:"Street 2"},domProps:{value:t.attributes.details.shipping_address_street2},on:{input:function(s){s.target.composing||t.$set(t.attributes.details,"shipping_address_street2",s.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("div",{staticClass:"col-lg-12",attrs:{title:"City"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.details.shipping_address_city,expression:"attributes.details.shipping_address_city"}],staticClass:"form-control ",attrs:{type:"text",value:"",placeholder:"City"},domProps:{value:t.attributes.details.shipping_address_city},on:{input:function(s){s.target.composing||t.$set(t.attributes.details,"shipping_address_city",s.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("div",{staticClass:"col-lg-12",attrs:{title:"State"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.details.shipping_address_state,expression:"attributes.details.shipping_address_state"}],staticClass:"form-control ",attrs:{type:"text",value:"",placeholder:"State"},domProps:{value:t.attributes.details.shipping_address_state},on:{input:function(s){s.target.composing||t.$set(t.attributes.details,"shipping_address_state",s.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("div",{staticClass:"col-lg-12",attrs:{title:"Zip code"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.details.shipping_address_zip_code,expression:"attributes.details.shipping_address_zip_code"}],staticClass:"form-control ",attrs:{type:"text",value:"",placeholder:"Zip code"},domProps:{value:t.attributes.details.shipping_address_zip_code},on:{input:function(s){s.target.composing||t.$set(t.attributes.details,"shipping_address_zip_code",s.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("div",{staticClass:"col-lg-12",attrs:{title:"Country"}},[e("model-list-select",{attrs:{list:t.$root.globalsCountries,"option-value":"value","option-text":"text",placeholder:"Select country"},model:{value:t.attributes.details.shipping_address_country,callback:function(s){t.$set(t.attributes.details,"shipping_address_country",s)},expression:"attributes.details.shipping_address_country"}})],1)]),t._v(" "),e("div",{staticClass:"form-group row hidden"},[e("div",{staticClass:"col-lg-12",attrs:{title:"Fax"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.details.shipping_address_fax,expression:"attributes.details.shipping_address_fax"}],staticClass:"form-control ",attrs:{type:"text",value:"",placeholder:"Fax"},domProps:{value:t.attributes.details.shipping_address_fax},on:{input:function(s){s.target.composing||t.$set(t.attributes.details,"shipping_address_fax",s.target.value)}}})])])])])])]),t._v(" "),e("div",{staticClass:"tab-pane ",attrs:{id:"bottom-divided-tab4"}},[e("fieldset",{},[e("div",{staticClass:"form-group row"},[t._m(2),t._v(" "),e("div",{staticClass:"col-lg-12"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.attributes.details.remarks,expression:"attributes.details.remarks"}],staticClass:"form-control ",attrs:{placeholder:"Remarks"},domProps:{value:t.attributes.details.remarks},on:{input:function(s){s.target.composing||t.$set(t.attributes.details,"remarks",s.target.value)}}})])])])])])])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-lg-1 col-form-label"}),t._v(" "),e("div",{staticClass:"col-lg-10"},[e("button",{staticClass:"btn btn-danger font-weight-bold",attrs:{type:"submit"}},[e("i",{staticClass:"icon-user-plus mr-1"}),t._v(" "+t._s(t.pageTitle)+"\n                            ")])])])])],1)])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[s("div",{staticClass:"d-flex"},[s("div",{staticClass:"breadcrumb"},[s("a",{staticClass:"breadcrumb-item",attrs:{href:"index.html"}},[s("i",{staticClass:"icon-home2 mr-2"}),this._v(" Users")]),this._v(" "),s("span",{staticClass:"breadcrumb-item active"},[this._v("Create")])]),this._v(" "),s("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[s("i",{staticClass:"icon-more"})])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"card shadow-none rounded-0 border-0 mb-0 offset-md-1"},[s("div",{staticClass:"card-body pb-0 pt-2 pl-0 pr-0"},[s("ul",{staticClass:"nav nav-tabs nav-tabs-bottom border-bottom-0 font-weight-semibold"},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link active",attrs:{href:"#bottom-divided-tab0","data-toggle":"tab"}},[this._v("Password")])]),this._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#bottom-divided-tab2","data-toggle":"tab"}},[this._v("Address")])]),this._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#bottom-divided-tab1","data-toggle":"tab"}},[this._v("Social Media Links")])]),this._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#bottom-divided-tab4","data-toggle":"tab"}},[this._v("Remarks")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("label",{staticClass:"col-lg-12 col-form-label"},[s("span",{staticClass:"text-semibold"},[this._v("Remarks")]),this._v(" (\n                                                "),s("small",[this._v("For internal use")]),this._v("\n                                                )\n                                            ")])}],!1,null,null,null);s.default=n.exports}}]);