(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{DCNg:function(t,e,s){"use strict";s("rHZ3")},NoF0:function(t,e,s){(t.exports=s("81jI")(!1)).push([t.i,"\n#contact-form>tr>td, \n#contact-form>tr>tbody>td  {\n        padding: 0.45rem 1.25rem;\n}\n.ui.label {\n    border-radius: 0 !important;\n}\n#contact-form tr.border-0>td, \n#contact-form tr.border-0>th {\n    border: 0;\n}\n#contact-form.table tbody + tbody {\n    border-top: 0 !important;\n}\n",""])},neih:function(t,e,s){"use strict";s.r(e);var a=s("Zipl"),r=s.n(a);function i(t,e,s,a,r,i,o){try{var n=t[i](o),l=n.value}catch(t){return void s(t)}n.done?e(l):Promise.resolve(l).then(a,r)}var o={components:{LoadingComponent:s("b6V/").default},data:function(){return{pageTitle:"Contact",urlPost:"/contacts",types:[],selectedTaxes:[],attributes:[],form:{disabled:!1}}},mounted:function(){this.fetchAttributes(),this.appFetchGlobalsCurrencies(),this.appFetchGlobalsCountries(),this.txnFetchTaxes(),this.appFetchGlobalsPaymentTerms(),this.appFetchGlobalsSalutations()},watch:{$route:function(){this.fetchAttributes()}},methods:{fetchAttributes:function(){var t,e=this;return(t=r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.$root.loadingTxn=!0,t.next=4,axios.get(e.$route.fullPath).then((function(t){e.pageTitle=t.data.pageTitle,e.urlPost=t.data.urlPost,e.types=t.data.types,e.attributes=t.data.attributes,e.currencies=t.data.currencies,e.globalsCurrenciesSelected=t.data.selectedCurrencies,e.selectedTaxes=t.data.selectedTaxes})).catch((function(t){console.log(t)})).finally((function(t){}));case 4:return t.abrupt("return",t.sent);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})),function(){var e=this,s=arguments;return new Promise((function(a,r){var o=t.apply(e,s);function n(t){i(o,a,r,n,l,"next",t)}function l(t){i(o,a,r,n,l,"throw",t)}n(void 0)}))})()},setCurrencies:function(t,e,s){this.globalsCurrenciesSelected=t,this.attributes.currencies=t.map((function(t){return t.value}))},setTaxes:function(t,e,s){this.selectedTaxes=t,this.attributes.taxes=t.map((function(t){return t.id}))},addContactPerson:function(){this.attributes.contact_persons.push({salutation:null,first_name:null,last_name:null,email:null,work_phone:null,mobile:null})},formSubmit:function(t){var e=this;t.preventDefault(),this.form.disabled=!0,PNotify.removeAll();var s=structuredClone(this.$root.PNotifySettings),a=new PNotify(s);(null===this.attributes.display_name||null!==this.attributes.display_name&&0===this.attributes.display_name.trim().length)&&(this.attributes.display_name=this.attributes.name),axios.post(this.urlPost,this.attributes).then((function(t){e.form.disabled=!1,s.text=t.data.messages.join("\n"),!0===t.data.status?(s.title="Success",s.type="success",s.addclass="bg-success-400 border-success-400",e.fetchAttributes()):(s.title="! Error",s.type="error",s.addclass="bg-warning-400 border-warning-400"),a.update(s),a.get().click((function(){a.remove()}))})).catch((function(t){e.response=t}))}}},n=(s("DCNg"),s("C7zm")),l=Object(n.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content-wrapper"},[s("div",{staticClass:"page-header page-header-light"},[s("div",{staticClass:"page-header-content header-elements-md-inline"},[s("div",{staticClass:"page-title d-flex"},[s("h4",[s("i",{staticClass:"icon-file-plus"}),t._v("\n                    "+t._s(t.pageTitle)+"\n                ")])])]),t._v(" "),s("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[t._m(0),t._v(" "),s("div",{staticClass:"header-elements"},[s("div",{staticClass:"breadcrumb justify-content-center"},[s("router-link",{staticClass:" btn btn-link btn-sm font-weight-bold",attrs:{to:"/contacts"}},[s("i",{staticClass:"icon-users2 mr-1"}),t._v("\n                        Contacts\n                    ")])],1)])])]),t._v(" "),s("div",{staticClass:"content border-0 padding-0 p-0"},[s("div",{staticClass:"card shadow-none rounded-0 border-0"},[s("LoadingComponent"),t._v(" "),this.$root.loading?t._e():s("form",{staticClass:"max-width-820",staticStyle:{"margin-bottom":"100px"},attrs:{action:"",method:"post",autocomplete:"off"},on:{submit:t.formSubmit}},[s("fieldset",{attrs:{disabled:t.form.disabled}},[s("table",{staticClass:"table",attrs:{id:"contact-form"}},[s("tbody",{attrs:{id:"contact-basic-info"}},[t._m(1),t._v(" "),s("tr",{staticClass:"border-0"},[s("td",{staticClass:"text-nowrap text-danger"},[t._v("* Contact type")]),t._v(" "),s("td",{attrs:{colspan:"2"}},t._l(t.types,(function(e,a){return s("div",{staticClass:"custom-control custom-checkbox custom-control-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.types,expression:"attributes.types"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"contact-type-"+a,checked:""},domProps:{value:e,checked:Array.isArray(t.attributes.types)?t._i(t.attributes.types,e)>-1:t.attributes.types},on:{change:function(s){var a=t.attributes.types,r=s.target,i=!!r.checked;if(Array.isArray(a)){var o=e,n=t._i(a,o);r.checked?n<0&&t.$set(t.attributes,"types",a.concat([o])):n>-1&&t.$set(t.attributes,"types",a.slice(0,n).concat(a.slice(n+1)))}else t.$set(t.attributes,"types",i)}}}),t._v(" "),s("label",{staticClass:"custom-control-label text-capitalize",attrs:{for:"contact-type-"+a}},[t._v(t._s(e.replace("-"," ")))])])})),0)]),t._v(" "),s("tr",{staticClass:"border-0"},[s("td",{staticClass:"text-nowrap text-danger"},[t._v("* Contact name")]),t._v(" "),s("td",{attrs:{colspan:"2"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.name,expression:"attributes.name"}],staticClass:"form-control rounded-0",attrs:{type:"text",value:"",placeholder:"Full name"},domProps:{value:t.attributes.name},on:{input:function(e){e.target.composing||t.$set(t.attributes,"name",e.target.value)}}})])]),t._v(" "),s("tr",{staticClass:"border-0"},[s("td",{staticClass:"text-nowrap"},[t._v("Display name")]),t._v(" "),s("td",{attrs:{colspan:"2"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.display_name,expression:"attributes.display_name"}],staticClass:"form-control rounded-0",attrs:{type:"text",placeholder:"Display name"},domProps:{value:t.attributes.display_name},on:{input:function(e){e.target.composing||t.$set(t.attributes,"display_name",e.target.value)}}})])]),t._v(" "),s("tr",{staticClass:"border-0"},[s("td",{staticClass:"text-nowrap"},[t._v("Country")]),t._v(" "),s("td",{attrs:{colspan:"2"}},[s("model-list-select",{staticClass:"rounded-0",attrs:{"is-disabled":t.form.disabled,list:t.globalsCountries,"option-value":"value","option-text":"text",placeholder:"Select country"},model:{value:t.attributes.country,callback:function(e){t.$set(t.attributes,"country",e)},expression:"attributes.country"}})],1)]),t._v(" "),s("tr",{staticClass:"border-0"},[s("td",{staticClass:"text-nowrap"},[t._v("Default(s)")]),t._v(" "),s("td",{},[s("div",[t._v("Default currency")]),t._v(" "),s("model-list-select",{staticClass:"rounded-0",attrs:{"is-disabled":t.form.disabled,list:t.globalsCurrencies,"option-value":"value","option-text":"text",placeholder:"Select currency"},model:{value:t.attributes.currency,callback:function(e){t.$set(t.attributes,"currency",e)},expression:"attributes.currency"}})],1),t._v(" "),s("td",[s("div",[t._v("Default Payment terms")]),t._v(" "),s("model-select",{staticClass:"rounded-0",attrs:{"is-disabled":t.form.disabled,options:t.globalsPaymentTerms,placeholder:"Payment terms ..."},model:{value:t.attributes.payment_terms,callback:function(e){t.$set(t.attributes,"payment_terms",e)},expression:"attributes.payment_terms"}})],1)]),t._v(" "),s("tr",{staticClass:"border-0"},[s("td",{staticClass:"text-nowrap"},[t._v("Currencies")]),t._v(" "),s("td",{attrs:{colspan:"2"}},[s("multi-list-select",{staticClass:"rounded-0",attrs:{"is-disabled":t.form.disabled,list:t.globalsCurrencies,"option-value":"value","option-text":"text","selected-items":t.globalsCurrenciesSelected,placeholder:"Currencies"},on:{select:t.setCurrencies}})],1)])]),t._v(" "),s("tbody",{attrs:{id:"contact-address"}},[t._m(2),t._v(" "),s("tr",{staticClass:"border-0"},[s("td",{},[t._v("Attention")]),t._v(" "),s("td",{attrs:{title:"Attention"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.billing_address_attention,expression:"attributes.billing_address_attention"}],staticClass:"form-control rounded-0",staticStyle:{"min-width":"400px"},attrs:{type:"text",value:"",placeholder:"Attention"},domProps:{value:t.attributes.billing_address_attention},on:{input:function(e){e.target.composing||t.$set(t.attributes,"billing_address_attention",e.target.value)}}})]),t._v(" "),s("td",{},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.shipping_address_attention,expression:"attributes.shipping_address_attention"}],staticClass:"form-control rounded-0",staticStyle:{"min-width":"400px"},attrs:{type:"text",value:"",placeholder:"Attention"},domProps:{value:t.attributes.shipping_address_attention},on:{input:function(e){e.target.composing||t.$set(t.attributes,"shipping_address_attention",e.target.value)}}})])]),t._v(" "),s("tr",{staticClass:"border-0"},[s("td",{},[t._v("Street 1")]),t._v(" "),s("td",{},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.attributes.billing_address_street1,expression:"attributes.billing_address_street1"}],staticClass:"form-control rounded-0",attrs:{placeholder:"Street 1"},domProps:{value:t.attributes.billing_address_street1},on:{input:function(e){e.target.composing||t.$set(t.attributes,"billing_address_street1",e.target.value)}}})]),t._v(" "),s("td",{},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.attributes.shipping_address_street1,expression:"attributes.shipping_address_street1"}],staticClass:"form-control rounded-0",attrs:{placeholder:"Street 1"},domProps:{value:t.attributes.shipping_address_street1},on:{input:function(e){e.target.composing||t.$set(t.attributes,"shipping_address_street1",e.target.value)}}})])]),t._v(" "),s("tr",{staticClass:"border-0"},[s("td",{},[t._v("Street 2")]),t._v(" "),s("td",{},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.attributes.billing_address_street2,expression:"attributes.billing_address_street2"}],staticClass:"form-control rounded-0",attrs:{placeholder:"Street 2"},domProps:{value:t.attributes.billing_address_street2},on:{input:function(e){e.target.composing||t.$set(t.attributes,"billing_address_street2",e.target.value)}}})]),t._v(" "),s("td",{},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.attributes.shipping_address_street2,expression:"attributes.shipping_address_street2"}],staticClass:"form-control rounded-0",attrs:{placeholder:"Street 2"},domProps:{value:t.attributes.shipping_address_street2},on:{input:function(e){e.target.composing||t.$set(t.attributes,"shipping_address_street2",e.target.value)}}})])]),t._v(" "),s("tr",{staticClass:"border-0"},[s("td",{},[t._v("City")]),t._v(" "),s("td",{},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.billing_address_city,expression:"attributes.billing_address_city"}],staticClass:"form-control rounded-0",attrs:{type:"text",value:"",placeholder:"City"},domProps:{value:t.attributes.billing_address_city},on:{input:function(e){e.target.composing||t.$set(t.attributes,"billing_address_city",e.target.value)}}})]),t._v(" "),s("td",{},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.shipping_address_city,expression:"attributes.shipping_address_city"}],staticClass:"form-control rounded-0",attrs:{type:"text",value:"",placeholder:"City"},domProps:{value:t.attributes.shipping_address_city},on:{input:function(e){e.target.composing||t.$set(t.attributes,"shipping_address_city",e.target.value)}}})])]),t._v(" "),s("tr",{staticClass:"border-0"},[s("td",{},[t._v("State")]),t._v(" "),s("td",{},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.billing_address_state,expression:"attributes.billing_address_state"}],staticClass:"form-control rounded-0",attrs:{type:"text",value:"",placeholder:"State"},domProps:{value:t.attributes.billing_address_state},on:{input:function(e){e.target.composing||t.$set(t.attributes,"billing_address_state",e.target.value)}}})]),t._v(" "),s("td",{},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.shipping_address_state,expression:"attributes.shipping_address_state"}],staticClass:"form-control rounded-0",attrs:{type:"text",value:"",placeholder:"State"},domProps:{value:t.attributes.shipping_address_state},on:{input:function(e){e.target.composing||t.$set(t.attributes,"shipping_address_state",e.target.value)}}})])]),t._v(" "),s("tr",{staticClass:"border-0"},[s("td",{},[t._v("Zip code")]),t._v(" "),s("td",{},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.billing_address_zip_code,expression:"attributes.billing_address_zip_code"}],staticClass:"form-control rounded-0",attrs:{type:"text",value:"",placeholder:"ZIP code"},domProps:{value:t.attributes.billing_address_zip_code},on:{input:function(e){e.target.composing||t.$set(t.attributes,"billing_address_zip_code",e.target.value)}}})]),t._v(" "),s("td",{},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.shipping_address_zip_code,expression:"attributes.shipping_address_zip_code"}],staticClass:"form-control rounded-0",attrs:{type:"text",value:"",placeholder:"ZIP code"},domProps:{value:t.attributes.shipping_address_zip_code},on:{input:function(e){e.target.composing||t.$set(t.attributes,"shipping_address_zip_code",e.target.value)}}})])]),t._v(" "),s("tr",{staticClass:"border-0"},[s("td",{},[t._v("Country")]),t._v(" "),s("td",{},[s("model-list-select",{staticClass:" rounded-0",attrs:{"is-disabled":t.form.disabled,list:t.globalsCountries,"option-value":"value","option-text":"text",placeholder:"Select billing country"},model:{value:t.attributes.billing_address_country,callback:function(e){t.$set(t.attributes,"billing_address_country",e)},expression:"attributes.billing_address_country"}})],1),t._v(" "),s("td",{},[s("model-list-select",{staticClass:" rounded-0",attrs:{"is-disabled":t.form.disabled,list:t.globalsCountries,"option-value":"value","option-text":"text",placeholder:"Select shipping country"},model:{value:t.attributes.shipping_address_country,callback:function(e){t.$set(t.attributes,"shipping_address_country",e)},expression:"attributes.shipping_address_country"}})],1)]),t._v(" "),s("tr",{staticClass:"border-0"},[s("td",{},[t._v("Fax")]),t._v(" "),s("td",{},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.billing_address_fax,expression:"attributes.billing_address_fax"}],staticClass:"form-control rounded-0",attrs:{type:"text",value:"",placeholder:"Fax"},domProps:{value:t.attributes.billing_address_fax},on:{input:function(e){e.target.composing||t.$set(t.attributes,"billing_address_fax",e.target.value)}}})]),t._v(" "),s("td",{},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.shipping_address_fax,expression:"attributes.shipping_address_fax"}],staticClass:"form-control rounded-0",attrs:{type:"text",value:"",placeholder:"Fax"},domProps:{value:t.attributes.shipping_address_fax},on:{input:function(e){e.target.composing||t.$set(t.attributes,"shipping_address_fax",e.target.value)}}})])])]),t._v(" "),s("tbody",{attrs:{id:"contact-contact-persons"}},[t._m(3),t._v(" "),s("tr",{staticClass:"border-0"},[s("td",{staticClass:"text-nowrap"},[t._v("Contact person(s)")]),t._v(" "),s("td",{attrs:{colspan:"2"}},[s("table",{staticClass:"table table-bordered no-border-left no-border-right no-border-bottom"},[t._m(4),t._v(" "),s("tbody",{attrs:{id:""}},[s("tr",{},[s("td",{staticClass:"p-0 border-left-1"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.contact_first_name,expression:"attributes.contact_first_name"}],staticClass:"item_row_quantity form-control border-0 rounded-0",attrs:{type:"text",value:"",placeholder:"First Name"},domProps:{value:t.attributes.contact_first_name},on:{input:function(e){e.target.composing||t.$set(t.attributes,"contact_first_name",e.target.value)}}})]),t._v(" "),s("td",{staticClass:"p-0 border-left-1"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.contact_last_name,expression:"attributes.contact_last_name"}],staticClass:"item_row_rate form-control m-input border-0 rounded-0",attrs:{type:"text",value:"",placeholder:"Last Name"},domProps:{value:t.attributes.contact_last_name},on:{input:function(e){e.target.composing||t.$set(t.attributes,"contact_last_name",e.target.value)}}})]),t._v(" "),s("td",{staticClass:"p-0 border-left-1"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.contact_email,expression:"attributes.contact_email"}],staticClass:"item_row_rate form-control m-input border-0 rounded-0",attrs:{type:"text",value:"",placeholder:"Email Address"},domProps:{value:t.attributes.contact_email},on:{input:function(e){e.target.composing||t.$set(t.attributes,"contact_email",e.target.value)}}})]),t._v(" "),s("td",{staticClass:"p-0 border-left-1"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.contact_work_phone,expression:"attributes.contact_work_phone"}],staticClass:"item_row_rate form-control m-input border-0 rounded-0",attrs:{type:"text",value:"",placeholder:"Work Phone"},domProps:{value:t.attributes.contact_work_phone},on:{input:function(e){e.target.composing||t.$set(t.attributes,"contact_work_phone",e.target.value)}}})]),t._v(" "),s("td",{staticClass:"p-0 border-left-1"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.contact_mobile,expression:"attributes.contact_mobile"}],staticClass:"item_row_rate form-control m-input border-0 rounded-0",attrs:{type:"text",value:"",placeholder:"Mobile"},domProps:{value:t.attributes.contact_mobile},on:{input:function(e){e.target.composing||t.$set(t.attributes,"contact_mobile",e.target.value)}}})])]),t._v(" "),t._l(t.attributes.contact_persons,(function(e,a){return s("tr",{staticClass:"contact_person_row"},[s("td",{staticClass:"p-0"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.first_name,expression:"contact_person.first_name"}],staticClass:"form-control border-0 rounded-0",attrs:{type:"text",value:"",placeholder:"First Name"},domProps:{value:e.first_name},on:{input:function(s){s.target.composing||t.$set(e,"first_name",s.target.value)}}})]),t._v(" "),s("td",{staticClass:"p-0"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.last_name,expression:"contact_person.last_name"}],staticClass:"form-control m-input border-0 rounded-0",attrs:{type:"text",value:"",placeholder:"Last Name"},domProps:{value:e.last_name},on:{input:function(s){s.target.composing||t.$set(e,"last_name",s.target.value)}}})]),t._v(" "),s("td",{staticClass:"p-0"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"contact_person.email"}],staticClass:"form-control m-input border-0 rounded-0",attrs:{type:"text",value:"",placeholder:"Email Address"},domProps:{value:e.email},on:{input:function(s){s.target.composing||t.$set(e,"email",s.target.value)}}})]),t._v(" "),s("td",{staticClass:"p-0"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.work_phone,expression:"contact_person.work_phone"}],staticClass:"form-control m-input border-0 rounded-0",attrs:{type:"text",value:"",placeholder:"Work Phone"},domProps:{value:e.work_phone},on:{input:function(s){s.target.composing||t.$set(e,"work_phone",s.target.value)}}})]),t._v(" "),s("td",{staticClass:"p-0"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.mobile,expression:"contact_person.mobile"}],staticClass:"form-control m-input border-0 rounded-0",attrs:{type:"text",value:"",placeholder:"Mobile"},domProps:{value:e.mobile},on:{input:function(s){s.target.composing||t.$set(e,"mobile",s.target.value)}}})])])}))],2)]),t._v(" "),s("button",{staticClass:"btn btn-link btn-xs font-weight-bold",attrs:{type:"button"},on:{click:t.addContactPerson}},[s("i",{staticClass:"icon-plus22 position-left"}),t._v(" Add Contact Person\n                                    ")])])])]),t._v(" "),s("tbody",{attrs:{id:"contact-links"}},[t._m(5),t._v(" "),s("tr",{staticClass:"border-0"},[s("td",{staticClass:"text-nowrap"},[t._v("Facebook")]),t._v(" "),s("td",{attrs:{colspan:"2"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.facebook_link,expression:"attributes.facebook_link"}],staticClass:"form-control rounded-0",attrs:{type:"text",placeholder:"Facebook link"},domProps:{value:t.attributes.facebook_link},on:{input:function(e){e.target.composing||t.$set(t.attributes,"facebook_link",e.target.value)}}})])]),t._v(" "),s("tr",{staticClass:"border-0"},[s("td",{staticClass:"text-nowrap"},[t._v("Twitter")]),t._v(" "),s("td",{attrs:{colspan:"2"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.twitter_link,expression:"attributes.twitter_link"}],staticClass:"form-control rounded-0",attrs:{type:"text",placeholder:"Twitter link"},domProps:{value:t.attributes.twitter_link},on:{input:function(e){e.target.composing||t.$set(t.attributes,"twitter_link",e.target.value)}}})])])]),t._v(" "),s("tr",{staticClass:"border-0"},[t._m(6),t._v(" "),s("td",{attrs:{colspan:"2"}},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.attributes.remarks,expression:"attributes.remarks"}],staticClass:"form-control rounded-0",attrs:{placeholder:"Remarks"},domProps:{value:t.attributes.remarks},on:{input:function(e){e.target.composing||t.$set(t.attributes,"remarks",e.target.value)}}})])]),t._v(" "),s("tr",{staticClass:"border-0"},[s("td",{staticClass:"text-nowrap"},[t._v("Taxes")]),t._v(" "),s("td",{attrs:{colspan:"2"}},[s("div",[t._v("Taxes collected by tax body / contact being created;")]),t._v(" "),s("multi-list-select",{staticClass:"rounded-0",attrs:{"is-disabled":t.form.disabled,list:t.txnTaxes,"option-value":"id","option-text":"display_name","selected-items":t.selectedTaxes,placeholder:"Select taxes"},on:{select:t.setTaxes}})],1)]),t._v(" "),s("tr",{staticClass:"border-0"},[s("td",{staticClass:"text-nowrap"}),t._v(" "),s("td",{attrs:{colspan:"2"}},[s("button",{staticClass:"btn btn-danger font-weight-bold",attrs:{type:"submit"}},[s("i",{staticClass:"icon-user-plus"}),t._v(" "+t._s(t.pageTitle)+"\n                                ")])])])])])])],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"d-flex"},[e("div",{staticClass:"breadcrumb"},[e("a",{staticClass:"breadcrumb-item",attrs:{href:"index.html"}},[e("i",{staticClass:"icon-home2 mr-2"}),this._v(" Contacts")]),this._v(" "),e("span",{staticClass:"breadcrumb-item active"},[this._v("Create")])]),this._v(" "),e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",{staticClass:"border-0"},[e("td",{staticClass:"col-lg-2"}),this._v(" "),e("td",{staticClass:"col-lg-3"},[e("span",{staticClass:"badge badge-primary font-weight-bold "},[this._v("BASICS")])]),this._v(" "),e("td",{staticClass:"col-lg-2"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",{staticClass:"border-0"},[e("td",{}),this._v(" "),e("td",{},[e("span",{staticClass:"badge badge-primary font-weight-bold "},[this._v("BILLING ADDRESS")])]),this._v(" "),e("td",{},[e("span",{staticClass:"badge badge-primary font-weight-bold "},[this._v("SHIPPING ADDRESS")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",{staticClass:"border-0"},[e("td",{}),this._v(" "),e("td",{},[e("span",{staticClass:"badge badge-primary font-weight-bold "},[this._v("Contact person(s)")])]),this._v(" "),e("td",{})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",{staticClass:"thead-default"},[s("tr",[s("th",{staticClass:"pl-15"},[t._v("First Name")]),t._v(" "),s("th",{staticClass:"pl-15"},[t._v("Last Name")]),t._v(" "),s("th",{staticClass:"pl-15",staticStyle:{width:"30%"}},[t._v("Email Address")]),t._v(" "),s("th",{staticClass:"pl-15"},[t._v("Work Phone")]),t._v(" "),s("th",{staticClass:"pl-15"},[t._v("Mobile")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",{staticClass:"border-0"},[e("td",{}),this._v(" "),e("td",{},[e("span",{staticClass:"badge badge-primary font-weight-bold "},[this._v("Links")])]),this._v(" "),e("td",{})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"text-nowrap"},[this._v("\n                                Remarks"),e("br"),this._v(" "),e("small",[this._v("(For internal use)")])])}],!1,null,null,null);e.default=l.exports},rHZ3:function(t,e,s){var a=s("NoF0");"string"==typeof a&&(a=[[t.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};s("SAvX")(a,r);a.locals&&(t.exports=a.locals)}}]);