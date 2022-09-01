(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{Qhc3:function(t,e,s){"use strict";s.r(e);var a=s("o0o1"),r=s.n(a);function i(t,e,s,a,r,i,c){try{var o=t[i](c),n=o.value}catch(t){return void s(t)}o.done?e(n):Promise.resolve(n).then(a,r)}function c(t){return function(){var e=this,s=arguments;return new Promise((function(a,r){var c=t.apply(e,s);function o(t){i(c,a,r,o,n,"next",t)}function n(t){i(c,a,r,o,n,"throw",t)}o(void 0)}))}}var o={data:function(){return{pageTitle:"Create Job",pageAction:"Create",urlPost:"/workshop/jobs",attributes:{},vehicles:[],selectedMechanics:[],selectedServiceAdvisers:[],mechanics:[],serviceAdvisers:[],supervisors:[]}},mounted:function(){this.fetchAttributes(),this.appFetchVehicles(),this.fetchServiceAdvisers("-initiate-")},methods:{fetchAttributes:function(){var t=this;return c(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.get(t.$route.fullPath).then((function(e){t.attributes=e.data.attributes})).catch((function(t){console.log(t)})).finally((function(t){}));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()},appFetchVehicles:function(){var t=this;return c(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.get("/workshop/vehicles/vue-search-select").then((function(e){t.vehicles=e.data})).catch((function(t){console.log(t)})).finally((function(t){}));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()},setServiceAdvisers:function(t,e,s){this.selectedServiceAdvisers=t,this.attributes.service_adviser_contact_id=t.map((function(t){return t.id}))},setMechanics:function(t,e,s){this.selectedMechanics=t,this.attributes.mechanics=t.map((function(t){return t.id}))},fetchServiceAdvisers:function(t){var e=this;return c(r.a.mark((function s(){var a;return r.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(t){s.next=2;break}return s.abrupt("return",!1);case 2:return a={search:[{column:"name",value:t="-initiate-"===t?"":t},{column:"display_name",value:t},{column:"types",value:"service-adviser"}]},s.prev=4,s.next=7,axios.post("/contacts/search",a).then((function(t){e.serviceAdvisers=t.data.data}));case 7:return s.abrupt("return",s.sent);case 10:s.prev=10,s.t0=s.catch(4),console.log(s.t0);case 13:case"end":return s.stop()}}),s,null,[[4,10]])})))()},fetchMechanics:function(t){var e=this;return c(r.a.mark((function s(){var a;return r.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(t){s.next=2;break}return s.abrupt("return",!1);case 2:return a={search:[{column:"name",value:t="-initiate-"===t?"":t},{column:"display_name",value:t},{column:"types",value:"mechanic"}]},s.prev=4,s.next=7,axios.post("/contacts/search",a).then((function(t){e.mechanics=t.data.data})).catch((function(t){console.log(t)})).finally((function(t){}));case 7:return s.abrupt("return",s.sent);case 10:s.prev=10,s.t0=s.catch(4),console.log(s.t0);case 13:case"end":return s.stop()}}),s,null,[[4,10]])})))()},fetchSupervisors:function(t){var e=this;return c(r.a.mark((function s(){var a;return r.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(t){s.next=2;break}return s.abrupt("return",!1);case 2:return a={search:[{column:"name",value:t="-initiate-"===t?"":t},{column:"display_name",value:t}]},s.prev=4,s.next=7,axios.post("/contacts/search",a).then((function(t){e.supervisors=t.data.data})).catch((function(t){console.log(t)})).finally((function(t){}));case 7:return s.abrupt("return",s.sent);case 10:s.prev=10,s.t0=s.catch(4),console.log(s.t0);case 13:case"end":return s.stop()}}),s,null,[[4,10]])})))()},formSubmit:function(t){var e=this;t.preventDefault(),PNotify.removeAll();var s=this.$root.PNotifySettings,a=new PNotify(s);axios.post(this.urlPost,this.attributes).then((function(t){e.axiosResponseHandle({response:t,pNotify:a,onSuccess:function(){},onError:function(){}})}))}}},n=s("KHd+"),l=Object(n.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content-wrapper"},[s("div",{staticClass:"page-header page-header-light"},[s("div",{staticClass:"page-header-content header-elements-md-inline"},[s("div",{staticClass:"page-title d-flex"},[s("h4",[s("i",{staticClass:"icon-file-plus"}),t._v("\n                    "+t._s(t.pageTitle)+"\n                ")])])]),t._v(" "),s("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[s("div",{staticClass:"d-flex"},[s("div",{staticClass:"breadcrumb"},[s("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[s("i",{staticClass:"icon-home2 mr-2"}),t._v(" "),s("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(" "+t._s(t._f("truncate")(this.$root.tenant.name,30))+" ")])]),t._v(" "),s("span",{staticClass:"breadcrumb-item"},[t._v("Workshop")]),t._v(" "),s("span",{staticClass:"breadcrumb-item"},[t._v("Job")]),t._v(" "),s("span",{staticClass:"breadcrumb-item active"},[t._v(t._s(t.pageAction))])]),t._v(" "),t._m(0)]),t._v(" "),s("div",{staticClass:"header-elements"},[s("div",{staticClass:"breadcrumb justify-content-center"},[s("router-link",{staticClass:" btn btn-danger btn-sm rounded-round font-weight-bold",attrs:{to:"/workshop/jobs"}},[s("i",{staticClass:"icon-drawer3 mr-2"}),t._v("\n                        Jobs\n                    ")])],1)])])]),t._v(" "),s("div",{staticClass:"content border-0 padding-0"},[s("div",{staticClass:"card shadow-none rounded-0 border-0"},[s("div",{staticClass:"card-body p-0"},[s("loading-animation"),t._v(" "),this.$root.loading?t._e():s("form",{staticClass:"max-width-1040",staticStyle:{"margin-bottom":"100px"},attrs:{action:"",method:"post",autocomplete:"off"},on:{submit:t.formSubmit}},[s("input",{attrs:{type:"hidden",name:"submit",value:"1"}}),t._v(" "),s("input",{attrs:{type:"hidden",name:"contact_name",value:""}}),t._v(" "),s("div",{staticClass:"card border-0 shadow-0 p-0"},[s("div",{staticClass:"card-body p-0"},[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-form-label col-lg-2 text-danger font-weight-bold"},[t._v("Vehicle RegNo.")]),t._v(" "),s("div",{staticClass:"col-lg-10"},[s("model-list-select",{attrs:{list:t.vehicles,"option-value":"id","option-text":"registration_number",placeholder:"Select Vehicle RegNo"},on:{searchchange:t.appFetchVehicles},model:{value:t.attributes.vehicle_id,callback:function(e){t.$set(t.attributes,"vehicle_id",e)},expression:"attributes.vehicle_id"}})],1)]),t._v(" "),s("div",{staticClass:"form-group row"},[s("div",{staticClass:"col-md-2"}),t._v(" "),s("div",{staticClass:"col-md-3"},[s("div",{staticClass:"form-group"},[s("label",[t._v("Job Number:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.number,expression:"attributes.number"}],staticClass:"form-control input-roundless",attrs:{type:"text",placeholder:"Job Number"},domProps:{value:t.attributes.number},on:{input:function(e){e.target.composing||t.$set(t.attributes,"number",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"col-md-2"},[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"font-weight-bold"},[t._v("Checkin date")]),t._v(" "),s("date-picker",{staticClass:"font-weight-bold w-100",staticStyle:{height:"36px"},attrs:{valueType:"format",lang:t.vue2DatePicker.lang,placeholder:"Checkin date"},model:{value:t.attributes.checkin_date,callback:function(e){t.$set(t.attributes,"checkin_date",e)},expression:"attributes.checkin_date"}})],1)]),t._v(" "),s("div",{staticClass:"col-md-5"},[s("div",{staticClass:"form-group"},[s("label",[t._v("Odometer:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.odometer,expression:"attributes.odometer"}],staticClass:"form-control input-roundless",attrs:{type:"text",name:"reference",placeholder:"Odometer"},domProps:{value:t.attributes.odometer},on:{input:function(e){e.target.composing||t.$set(t.attributes,"odometer",e.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-form-label col-lg-2 font-weight-bold"},[t._v("Inspection Adviser")]),t._v(" "),s("div",{staticClass:"col-lg-10"},[s("model-list-select",{attrs:{list:t.serviceAdvisers,"option-value":"id","option-text":"display_name",placeholder:"Select Supervisor"},on:{searchchange:t.fetchServiceAdvisers},model:{value:t.attributes.service_adviser_contact_id,callback:function(e){t.$set(t.attributes,"service_adviser_contact_id",e)},expression:"attributes.service_adviser_contact_id"}})],1)]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label font-weight-bold"},[t._v("\n                                    Description\n                                ")]),t._v(" "),s("div",{staticClass:"col-lg-10"},[s("div",{staticClass:"h3"},[t._v("General Inspection / Nature of problem")]),t._v(" "),s("div",{staticClass:"custom-control custom-checkbox font-size-lg"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.service_defaults,expression:"attributes.service_defaults"}],staticClass:"custom-control-input",attrs:{type:"checkbox",value:"Standard service",id:"rg-cb-1"},domProps:{checked:Array.isArray(t.attributes.service_defaults)?t._i(t.attributes.service_defaults,"Standard service")>-1:t.attributes.service_defaults},on:{change:function(e){var s=t.attributes.service_defaults,a=e.target,r=!!a.checked;if(Array.isArray(s)){var i="Standard service",c=t._i(s,i);a.checked?c<0&&t.$set(t.attributes,"service_defaults",s.concat([i])):c>-1&&t.$set(t.attributes,"service_defaults",s.slice(0,c).concat(s.slice(c+1)))}else t.$set(t.attributes,"service_defaults",r)}}}),t._v(" "),s("label",{staticClass:"custom-control-label",attrs:{for:"rg-cb-1"}},[t._v("Standard service")])]),t._v(" "),s("div",{staticClass:"custom-control custom-checkbox font-size-lg"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.service_defaults,expression:"attributes.service_defaults"}],staticClass:"custom-control-input",attrs:{type:"checkbox",value:"Spraying",id:"rg-cb-2"},domProps:{checked:Array.isArray(t.attributes.service_defaults)?t._i(t.attributes.service_defaults,"Spraying")>-1:t.attributes.service_defaults},on:{change:function(e){var s=t.attributes.service_defaults,a=e.target,r=!!a.checked;if(Array.isArray(s)){var i=t._i(s,"Spraying");a.checked?i<0&&t.$set(t.attributes,"service_defaults",s.concat(["Spraying"])):i>-1&&t.$set(t.attributes,"service_defaults",s.slice(0,i).concat(s.slice(i+1)))}else t.$set(t.attributes,"service_defaults",r)}}}),t._v(" "),s("label",{staticClass:"custom-control-label",attrs:{for:"rg-cb-2"}},[t._v("Spraying")])]),t._v(" "),s("div",{staticClass:"custom-control custom-checkbox font-size-lg"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.service_defaults,expression:"attributes.service_defaults"}],staticClass:"custom-control-input",attrs:{type:"checkbox",value:"Electrical",id:"rg-cb-3"},domProps:{checked:Array.isArray(t.attributes.service_defaults)?t._i(t.attributes.service_defaults,"Electrical")>-1:t.attributes.service_defaults},on:{change:function(e){var s=t.attributes.service_defaults,a=e.target,r=!!a.checked;if(Array.isArray(s)){var i="Electrical",c=t._i(s,i);a.checked?c<0&&t.$set(t.attributes,"service_defaults",s.concat([i])):c>-1&&t.$set(t.attributes,"service_defaults",s.slice(0,c).concat(s.slice(c+1)))}else t.$set(t.attributes,"service_defaults",r)}}}),t._v(" "),s("label",{staticClass:"custom-control-label",attrs:{for:"rg-cb-3"}},[t._v("Electrical")])]),t._v(" "),s("div",{staticClass:"custom-control custom-checkbox font-size-lg"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.service_defaults,expression:"attributes.service_defaults"}],staticClass:"custom-control-input",attrs:{type:"checkbox",value:"Suspension",id:"rg-cb-4"},domProps:{checked:Array.isArray(t.attributes.service_defaults)?t._i(t.attributes.service_defaults,"Suspension")>-1:t.attributes.service_defaults},on:{change:function(e){var s=t.attributes.service_defaults,a=e.target,r=!!a.checked;if(Array.isArray(s)){var i="Suspension",c=t._i(s,i);a.checked?c<0&&t.$set(t.attributes,"service_defaults",s.concat([i])):c>-1&&t.$set(t.attributes,"service_defaults",s.slice(0,c).concat(s.slice(c+1)))}else t.$set(t.attributes,"service_defaults",r)}}}),t._v(" "),s("label",{staticClass:"custom-control-label",attrs:{for:"rg-cb-4"}},[t._v("Suspension")])]),t._v(" "),s("div",{staticClass:"custom-control custom-checkbox font-size-lg"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.service_defaults,expression:"attributes.service_defaults"}],staticClass:"custom-control-input",attrs:{type:"checkbox",value:"Engine",id:"rg-cb-5"},domProps:{checked:Array.isArray(t.attributes.service_defaults)?t._i(t.attributes.service_defaults,"Engine")>-1:t.attributes.service_defaults},on:{change:function(e){var s=t.attributes.service_defaults,a=e.target,r=!!a.checked;if(Array.isArray(s)){var i=t._i(s,"Engine");a.checked?i<0&&t.$set(t.attributes,"service_defaults",s.concat(["Engine"])):i>-1&&t.$set(t.attributes,"service_defaults",s.slice(0,i).concat(s.slice(i+1)))}else t.$set(t.attributes,"service_defaults",r)}}}),t._v(" "),s("label",{staticClass:"custom-control-label",attrs:{for:"rg-cb-5"}},[t._v("Engine")])]),t._v(" "),s("div",{staticClass:"custom-control custom-checkbox font-size-lg"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.service_defaults,expression:"attributes.service_defaults"}],staticClass:"custom-control-input",attrs:{type:"checkbox",value:"Full car check",id:"rg-cb-6"},domProps:{checked:Array.isArray(t.attributes.service_defaults)?t._i(t.attributes.service_defaults,"Full car check")>-1:t.attributes.service_defaults},on:{change:function(e){var s=t.attributes.service_defaults,a=e.target,r=!!a.checked;if(Array.isArray(s)){var i="Full car check",c=t._i(s,i);a.checked?c<0&&t.$set(t.attributes,"service_defaults",s.concat([i])):c>-1&&t.$set(t.attributes,"service_defaults",s.slice(0,c).concat(s.slice(c+1)))}else t.$set(t.attributes,"service_defaults",r)}}}),t._v(" "),s("label",{staticClass:"custom-control-label",attrs:{for:"rg-cb-6"}},[t._v("Full car check")])]),t._v(" "),s("div",{staticClass:"custom-control custom-checkbox font-size-lg"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.service_defaults,expression:"attributes.service_defaults"}],staticClass:"custom-control-input",attrs:{type:"checkbox",value:"Other",id:"rg-cb-7"},domProps:{checked:Array.isArray(t.attributes.service_defaults)?t._i(t.attributes.service_defaults,"Other")>-1:t.attributes.service_defaults},on:{change:function(e){var s=t.attributes.service_defaults,a=e.target,r=!!a.checked;if(Array.isArray(s)){var i=t._i(s,"Other");a.checked?i<0&&t.$set(t.attributes,"service_defaults",s.concat(["Other"])):i>-1&&t.$set(t.attributes,"service_defaults",s.slice(0,i).concat(s.slice(i+1)))}else t.$set(t.attributes,"service_defaults",r)}}}),t._v(" "),t._m(1),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.description,expression:"attributes.description"}],staticClass:"form-control col-lg-6 mt-2",attrs:{type:"text",placeholder:"Description"},domProps:{value:t.attributes.description},on:{input:function(e){e.target.composing||t.$set(t.attributes,"description",e.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-form-label col-lg-2"},[t._v("Comment")]),t._v(" "),s("div",{staticClass:"col-lg-10"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.comment,expression:"attributes.comment"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Comment / Extra Instructions"},domProps:{value:t.attributes.comment},on:{input:function(e){e.target.composing||t.$set(t.attributes,"comment",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"form-group row d-none"},[s("label",{staticClass:"col-form-label col-lg-2"},[t._v("Attach files")]),t._v(" "),s("div",{staticClass:"col-lg-10"},[s("input",{ref:"filesAttached",staticClass:"form-control border-0 p-0 h-auto",attrs:{type:"file",multiple:""}})])])])]),t._v(" "),t._m(2)])],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"custom-control-label",attrs:{for:"rg-cb-7"}},[this._v("Other "),e("small",[this._v("(type description below)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-left col-md-12 offset-md-2 pl-0"},[e("button",{staticClass:"btn btn-danger font-weight-bold",attrs:{type:"submit"}},[e("i",{staticClass:"icon-file-plus2 mr-1"}),this._v(" Save Job details\n                        ")])])}],!1,null,null,null);e.default=l.exports}}]);