(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"5xwI":function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,"\n.date-picker-field-height {\n    height: calc(1.5385em + 0.875rem);\n}\n",""])},bG9C:function(t,e,a){"use strict";a("lsBF")},lsBF:function(t,e,a){var s=a("5xwI");"string"==typeof s&&(s=[[t.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,i);s.locals&&(t.exports=s.locals)},vjks:function(t,e,a){"use strict";a.r(e);var s=a("o0o1"),i=a.n(s);function r(t,e,a,s,i,r,o){try{var l=t[r](o),n=l.value}catch(t){return void a(t)}l.done?e(n):Promise.resolve(n).then(s,i)}function o(t){return function(){var e=this,a=arguments;return new Promise((function(s,i){var o=t.apply(e,a);function l(t){r(o,s,i,l,n,"next",t)}function n(t){r(o,s,i,l,n,"throw",t)}l(void 0)}))}}var l={data:function(){return{pageTitle:"Vehicle",urlPost:"/workshop/vehicles",attributes:{},customers:[],vehicleMakes:[],vehicleModels:[]}},mounted:function(){this.$root.appFetchGlobalsCountries(),this.fetchAttributes(),this.fetchCustomers("-initiate-"),this.fetchVehicleMakes("-initiate-")},watch:{},methods:{fetchAttributes:function(){var t=this;return o(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.get(t.$route.fullPath).then((function(e){t.attributes=e.data.attributes})).catch((function(t){console.log(t)})).finally((function(t){}));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()},fetchCustomers:function(t){var e=this;return o(i.a.mark((function a(){var s;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t){a.next=2;break}return a.abrupt("return",!1);case 2:return s={search:[{column:"name",value:t="-initiate-"===t?"":t},{column:"display_name",value:t},{column:"types",value:"customer"}]},a.prev=4,a.next=7,axios.post("/contacts/search",s).then((function(t){e.customers=t.data.data}));case 7:return a.abrupt("return",a.sent);case 10:a.prev=10,a.t0=a.catch(4),console.log(a.t0);case 13:case"end":return a.stop()}}),a,null,[[4,10]])})))()},fetchVehicleMakes:function(t){var e=this;return o(i.a.mark((function a(){var s;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t){a.next=2;break}return a.abrupt("return",!1);case 2:return s={search:[{column:"name",value:t="-initiate-"===t?"":t}]},a.prev=4,a.next=7,axios.post("/workshop/vehicles/makes/vue-search-select",s).then((function(t){e.vehicleMakes=t.data}));case 7:return a.abrupt("return",a.sent);case 10:a.prev=10,a.t0=a.catch(4),console.log(a.t0);case 13:case"end":return a.stop()}}),a,null,[[4,10]])})))()},fetchVehicleModels:function(){var t=this;return o(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={search:[{column:"make_id",value:t.attributes.make_id}]},e.prev=1,e.next=4,axios.post("/workshop/vehicles/models/vue-search-select",a).then((function(e){t.vehicleModels=e.data}));case 4:return e.abrupt("return",e.sent);case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))()},formSubmit:function(t){t.preventDefault();var e=this;PNotify.removeAll();var a={title:!1,text:"Please wait as we do our thing",addclass:"bg-warning-400 border-warning-400",hide:!1,buttons:{closer:!1,sticker:!1}},s=new PNotify(a);axios.post(e.urlPost,this.attributes).then((function(t){a.text=t.data.messages.join("\n"),!0===t.data.status?(a.title="Success",a.type="success",a.addclass="bg-success-400 border-success-400",e.attributes={name:"",code:"",country:""}):(a.title="! Error",a.type="error",a.addclass="bg-warning-400 border-warning-400"),s.update(a),s.get().click((function(){s.remove()}))}))}}},n=(a("bG9C"),a("KHd+")),c=Object(n.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"page-header page-header-light"},[a("div",{staticClass:"page-header-content header-elements-md-inline"},[a("div",{staticClass:"page-title d-flex"},[a("h4",[a("i",{staticClass:"icon-car"}),t._v("\n                    "+t._s(t.pageTitle)+"\n                ")])])]),t._v(" "),a("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[a("div",{staticClass:"d-flex"},[a("div",{staticClass:"breadcrumb"},[a("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[a("i",{staticClass:"icon-home2 mr-2"}),t._v(" "),a("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(" "+t._s(t._f("truncate")(this.$root.tenant.name,30))+" ")])]),t._v(" "),a("span",{staticClass:"breadcrumb-item"},[t._v("Workshop")]),t._v(" "),a("span",{staticClass:"breadcrumb-item active"},[t._v("Vehicles")])]),t._v(" "),t._m(0)]),t._v(" "),a("div",{staticClass:"header-elements"},[a("div",{staticClass:"breadcrumb justify-content-center"},[a("router-link",{staticClass:" btn btn-danger btn-sm rounded-round font-weight-bold",attrs:{to:"/workshop/vehicles"}},[a("i",{staticClass:"icon-car mr-1"}),t._v("\n                        Vehicles\n                    ")])],1)])])]),t._v(" "),a("div",{staticClass:"content border-0 padding-0"},[a("div",{staticClass:"card shadow-none rounded-0 border-0"},[a("div",{staticClass:"card-body p-0"},[a("loading-animation"),t._v(" "),this.$root.loading?t._e():a("form",{staticClass:"max-width-1040",staticStyle:{"margin-bottom":"100px"},attrs:{action:"",method:"post",autocomplete:"off"},on:{submit:t.formSubmit}},[a("fieldset",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"font-weight-bold"},[t._v("Customer")]),t._v(" "),a("div",{staticClass:"input-group"},[a("div",{staticClass:"col pl-0 pr-0"},[a("model-list-select",{attrs:{list:t.customers,"option-value":"id","option-text":"display_name",placeholder:"Select customer"},on:{searchchange:t.fetchCustomers},model:{value:t.attributes.contact_id,callback:function(e){t.$set(t.attributes,"contact_id",e)},expression:"attributes.contact_id"}})],1),t._v(" "),a("div",{staticClass:"col-auto"},[a("span",{staticClass:"input-group-append"},[a("router-link",{staticClass:"btn btn-outline bg-primary border-primary text-primary-800 btn-icon border-2 ml-2",attrs:{to:"/workshop/contacts/create",title:"Create new Customer"}},[a("i",{staticClass:"icon-user-plus"})])],1)])])])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"font-weight-bold"},[t._v("Registration No.")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.registration_number,expression:"attributes.registration_number"}],staticClass:"form-control border-danger font-weight-bold",attrs:{type:"text",placeholder:"Registration No"},domProps:{value:t.attributes.registration_number},on:{input:function(e){e.target.composing||t.$set(t.attributes,"registration_number",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Make:")]),t._v(" "),a("model-list-select",{attrs:{list:t.vehicleMakes,"option-value":"id","option-text":"name",placeholder:"Select make"},on:{searchchange:t.fetchVehicleMakes,input:t.fetchVehicleModels},model:{value:t.attributes.make_id,callback:function(e){t.$set(t.attributes,"make_id",e)},expression:"attributes.make_id"}})],1)]),t._v(" "),a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Model:")]),t._v(" "),a("model-list-select",{attrs:{list:t.vehicleModels,"option-value":"id","option-text":"name",placeholder:"Select Model"},on:{searchchange:t.fetchVehicleModels},model:{value:t.attributes.model_id,callback:function(e){t.$set(t.attributes,"model_id",e)},expression:"attributes.model_id"}})],1)]),t._v(" "),a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Model code:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.model_code,expression:"attributes.model_code"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Model code"},domProps:{value:t.attributes.model_code},on:{input:function(e){e.target.composing||t.$set(t.attributes,"model_code",e.target.value)}}})])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Model Series:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.model_series,expression:"attributes.model_series"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Model Series"},domProps:{value:t.attributes.model_series},on:{input:function(e){e.target.composing||t.$set(t.attributes,"model_series",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",[t._v("VIN:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.vin,expression:"attributes.vin"}],staticClass:"form-control",attrs:{type:"text",placeholder:"VIN"},domProps:{value:t.attributes.vin},on:{input:function(e){e.target.composing||t.$set(t.attributes,"vin",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Engine No.:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.engine_number,expression:"attributes.engine_number"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Engine No."},domProps:{value:t.attributes.engine_number},on:{input:function(e){e.target.composing||t.$set(t.attributes,"engine_number",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Transmission:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.transmission,expression:"attributes.transmission"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Transmission"},domProps:{value:t.attributes.transmission},on:{input:function(e){e.target.composing||t.$set(t.attributes,"transmission",e.target.value)}}})])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Body type:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.body_type,expression:"attributes.body_type"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Body type"},domProps:{value:t.attributes.body_type},on:{input:function(e){e.target.composing||t.$set(t.attributes,"body_type",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Color:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.color,expression:"attributes.color"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Color"},domProps:{value:t.attributes.color},on:{input:function(e){e.target.composing||t.$set(t.attributes,"color",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Seating capacity:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.seating_capacity,expression:"attributes.seating_capacity"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Seating capacity"},domProps:{value:t.attributes.seating_capacity},on:{input:function(e){e.target.composing||t.$set(t.attributes,"seating_capacity",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Odometer/Hours:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.odometer_or_hours,expression:"attributes.odometer_or_hours"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Odometer/Hours"},domProps:{value:t.attributes.odometer_or_hours},on:{input:function(e){e.target.composing||t.$set(t.attributes,"odometer_or_hours",e.target.value)}}})])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Drive type:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.drive_type,expression:"attributes.drive_type"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Drive type"},domProps:{value:t.attributes.drive_type},on:{input:function(e){e.target.composing||t.$set(t.attributes,"drive_type",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Engine Code:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.engine_code,expression:"attributes.engine_code"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Engine Code"},domProps:{value:t.attributes.engine_code},on:{input:function(e){e.target.composing||t.$set(t.attributes,"engine_code",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Fuel type:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.fuel_type,expression:"attributes.fuel_type"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Fuel type"},domProps:{value:t.attributes.fuel_type},on:{input:function(e){e.target.composing||t.$set(t.attributes,"fuel_type",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Tyre size:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.tyre_size,expression:"attributes.tyre_size"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Tyre size"},domProps:{value:t.attributes.tyre_size},on:{input:function(e){e.target.composing||t.$set(t.attributes,"tyre_size",e.target.value)}}})])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Registration Date:")]),t._v(" "),a("date-picker",{staticClass:"font-weight-bold w-100 date-picker-field-height",attrs:{valueType:"format",lang:t.vue2DatePicker.lang,placeholder:"Reg date"},model:{value:t.attributes.registration_date,callback:function(e){t.$set(t.attributes,"registration_date",e)},expression:"attributes.registration_date"}})],1)]),t._v(" "),a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Build Date:")]),t._v(" "),a("date-picker",{staticClass:"font-weight-bold w-100 date-picker-field-height",attrs:{valueType:"format",lang:t.vue2DatePicker.lang,placeholder:"Build date"},model:{value:t.attributes.build_date,callback:function(e){t.$set(t.attributes,"build_date",e)},expression:"attributes.build_date"}})],1)]),t._v(" "),a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Production Date:")]),t._v(" "),a("date-picker",{staticClass:"font-weight-bold w-100 date-picker-field-height",attrs:{valueType:"format",lang:t.vue2DatePicker.lang,placeholder:"Production date"},model:{value:t.attributes.production_date,callback:function(e){t.$set(t.attributes,"production_date",e)},expression:"attributes.production_date"}})],1)]),t._v(" "),a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Last in date:")]),t._v(" "),a("date-picker",{staticClass:"font-weight-bold w-100 date-picker-field-height",attrs:{valueType:"format",lang:t.vue2DatePicker.lang,placeholder:"Last in date"},model:{value:t.attributes.last_in_date,callback:function(e){t.$set(t.attributes,"last_in_date",e)},expression:"attributes.last_in_date"}})],1)])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Notes:")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.attributes.notes,expression:"attributes.notes"}],staticClass:"form-control",attrs:{rows:"5",cols:"5",placeholder:"Notes"},domProps:{value:t.attributes.notes},on:{input:function(e){e.target.composing||t.$set(t.attributes,"notes",e.target.value)}}})])]),t._v(" "),t._m(1)])],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group row"},[e("div",{staticClass:"col-lg-10"},[e("button",{staticClass:"btn btn-danger font-weight-bold",attrs:{type:"submit"}},[e("i",{staticClass:"icon-car"}),this._v(" Create Vehicle\n                            ")])])])}],!1,null,null,null);e.default=c.exports}}]);