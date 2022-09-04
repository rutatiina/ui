(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{av28:function(t,e,s){"use strict";s.r(e);var i=s("o0o1"),a=s.n(i);function n(t,e,s,i,a,n,r){try{var c=t[n](r),o=c.value}catch(t){return void s(t)}c.done?e(o):Promise.resolve(o).then(i,a)}function r(t){return function(){var e=this,s=arguments;return new Promise((function(i,a){var r=t.apply(e,s);function c(t){n(r,i,a,c,o,"next",t)}function o(t){n(r,i,a,c,o,"throw",t)}c(void 0)}))}}var c={data:function(){return{pageTitle:"Job Inspection / Items",pageAction:"Update",urlStore:this.$route.fullPath,urlCreate:this.$route.fullPath,attributes:{},job:{},job_inspection_categories:{},selectedTechnicians:[],technicians:[]}},mounted:function(){this.$root.appMenu("workshop"),this.fetchJobItems(),this.txnFetchContacts("-initiate-"),this.txnFetchItems("-initiate-"),this.txnFetchTaxes(),this.fetchTechnicians("-initiate-")},methods:{fetchJobItems:function(){var t=this;return r(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.get(t.urlCreate).then((function(e){t.pageTitle=e.data.pageTitle,t.pageAction=e.data.pageAction,t.txnAttributes.items=e.data.job.items,t.txnUrlStore=e.data.urlStore,t.job=e.data.job,t.attributes=e.data.attributes,t.selectedTechnicians=e.data.attributes.technicians,t.job_inspection_categories=e.data.job_inspection_categories,t.attributes.job_id=e.data.job.id})).catch((function(t){console.log(t)})).finally((function(t){}));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()},fetchTechnicians:function(t){var e=this;return r(a.a.mark((function s(){var i;return a.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(t){s.next=2;break}return s.abrupt("return",!1);case 2:return i={search:[{column:"name",value:t="-initiate-"===t?"":t},{column:"display_name",value:t},{column:"types",value:"technician"}]},s.prev=4,s.next=7,axios.post("/contacts/search",i).then((function(t){e.technicians=t.data.data})).catch((function(t){console.log(t)})).finally((function(t){}));case 7:return s.abrupt("return",s.sent);case 10:s.prev=10,s.t0=s.catch(4),console.log(s.t0);case 13:case"end":return s.stop()}}),s,null,[[4,10]])})))()},setTechnicians:function(t,e,s){this.selectedTechnicians=t,this.attributes.technicians=t.map((function(t){return t.id}))},formSubmit:function(t){var e=this;t.preventDefault(),PNotify.removeAll();var s=this.$root.PNotifySettings,i=new PNotify(s);axios.post("/workshop/jobs/inspections/order",this.attributes).then((function(t){e.axiosResponseHandle({response:t,pNotify:i,onSuccess:function(){},onError:function(){}})}))}}},o=s("KHd+"),l=Object(o.a)(c,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content-wrapper"},[s("div",{staticClass:"page-header page-header-light"},[s("div",{staticClass:"page-header-content header-elements-md-inline"},[s("div",{staticClass:"page-title d-flex"},[s("h4",[s("i",{staticClass:"icon-file-plus"}),t._v("\n                    "+t._s(t.pageTitle)+"\n                ")])])]),t._v(" "),s("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[s("div",{staticClass:"d-flex"},[s("div",{staticClass:"breadcrumb"},[s("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[s("i",{staticClass:"icon-home2 mr-2"}),t._v(" "),s("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(" "+t._s(t._f("truncate")(this.$root.tenant.name,30))+" ")])]),t._v(" "),s("span",{staticClass:"breadcrumb-item"},[t._v("Workshop")]),t._v(" "),s("span",{staticClass:"breadcrumb-item"},[t._v("Job")]),t._v(" "),s("span",{staticClass:"breadcrumb-item"},[t._v("Inspection")]),t._v(" "),s("span",{staticClass:"breadcrumb-item active"},[t._v(t._s(t.pageAction))])]),t._v(" "),t._m(0)]),t._v(" "),s("div",{staticClass:"header-elements"},[s("div",{staticClass:"breadcrumb justify-content-center"},[s("router-link",{staticClass:" btn btn-danger btn-sm rounded-round font-weight-bold",attrs:{to:"/workshop/jobs/"+t.$route.params.id}},[s("i",{staticClass:"icon-drawer3 mr-2"}),t._v("\n                        Back to Job #"+t._s(t.$route.params.id)+"\n                    ")])],1)])])]),t._v(" "),s("div",{staticClass:"content border-0 padding-0"},[s("loading-animation"),t._v(" "),this.$root.loading?t._e():s("form",{staticClass:"max-width-1040",staticStyle:{"margin-bottom":"100px"},attrs:{action:"",method:"post",autocomplete:"off"},on:{submit:t.formSubmit}},[s("div",{staticClass:"card p-0"},[s("div",{staticClass:"card-header bg-light d-flex justify-content-between"},[s("span",{staticClass:"font-size-sm text-uppercase font-weight-semibold"},[t._v("Job "),s("a",{attrs:{href:"#"}},[t._v("#"+t._s(t.job.id))])]),t._v(" "),s("span",{staticClass:"font-size-sm text-uppercase"},[t._v("\n                        Date: "),s("span",{staticClass:"font-weight-semibold"},[t._v(t._s(t.job.date))])])]),t._v(" "),s("div",{staticClass:"card-body"},[t.job.vehicle?s("div",{staticClass:"card-title"},[s("span",{staticClass:"h4 font-weight-semibold pr-3"},[t._v(t._s(t.job.vehicle.registration_number))]),t._v(" "),t.job.contact?s("span",[s("span",{staticClass:"badge badge-secondary badge-pill font-weight-semibold"},[t._v(" Customer ")]),t._v(" "),s("span",{staticClass:"h6"},[t._v(t._s(t.job.contact.display_name))])]):t._e()]):t._e(),t._v(" "),t.job.service_defaults&&t.job.service_defaults.length>0?s("div",{staticClass:"card-text border-left-3 border-primary pl-2 pt-2 pb-2"},[t._m(1),t._v(" "),s("div",{staticClass:"mt-2",staticStyle:{"white-space":"pre"}},[t._v(t._s(t.job.service_defaults.join("\n")))])]):t._e(),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.job.description,expression:"job.description"}],staticClass:"card-text border-left-3 border-primary pl-2 pt-2 pb-2"},[t._m(2),t._v(" "),s("div",{staticClass:"mt-2",staticStyle:{"white-space":"pre"}},[t._v(t._s(t.job.description))])]),t._v(" "),s("div",{staticClass:"card-text border-left-3 border-warning pl-2 pt-2 pb-2 mt-3"},[s("label",{staticClass:"font-weight-bold"},[t._v("Assign Technicians for the Job")]),t._v(" "),s("div",[s("multi-list-select",{attrs:{list:t.technicians,"option-value":"id","option-text":"display_name","selected-items":t.selectedTechnicians,placeholder:"Select Technicians"},on:{select:t.setTechnicians}})],1)])]),t._v(" "),s("div",{staticClass:"card-footer d-flex justify-content-between"},[t.job.supervisor?s("span",{staticClass:"text-muted"},[t._v("Supervisor "+t._s(t.job.supervisor.display_name))]):t._e()])]),t._v(" "),s("div",{staticClass:"row"},t._l(t.job_inspection_categories,(function(e){return s("div",{staticClass:"col-lg-6"},[s("div",{staticClass:"card shadow-0 p-0"},[s("div",{staticClass:"card-header bg-light header-elements-inline"},[s("h6",{staticClass:"card-title"},[t._v(t._s(e.name))]),t._v(" "),t._m(3,!0)]),t._v(" "),s("div",{staticClass:"card-body p-0"},[s("table",{staticClass:"table"},[s("tbody",t._l(e.items,(function(i){return s("tr",[s("td",[s("div",{staticClass:"custom-control custom-checkbox custom-control-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.items[i.id].inspect_item,expression:"attributes.items[item.id].inspect_item"}],staticClass:"custom-control-input",attrs:{type:"checkbox",value:"true",id:"rg-cb-"+e.id+"-"+i.id},domProps:{checked:Array.isArray(t.attributes.items[i.id].inspect_item)?t._i(t.attributes.items[i.id].inspect_item,"true")>-1:t.attributes.items[i.id].inspect_item},on:{change:function(e){var s=t.attributes.items[i.id].inspect_item,a=e.target,n=!!a.checked;if(Array.isArray(s)){var r=t._i(s,"true");a.checked?r<0&&t.$set(t.attributes.items[i.id],"inspect_item",s.concat(["true"])):r>-1&&t.$set(t.attributes.items[i.id],"inspect_item",s.slice(0,r).concat(s.slice(r+1)))}else t.$set(t.attributes.items[i.id],"inspect_item",n)}}}),t._v(" "),s("label",{staticClass:"custom-control-label",attrs:{for:"rg-cb-"+e.id+"-"+i.id}},[t._v(t._s(i.name))])])]),t._v(" "),s("td",{staticClass:"p-0"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.items[i.id].comment,expression:"attributes.items[item.id].comment"}],staticClass:"form-control border-0",attrs:{type:"text",placeholder:"Comment"},domProps:{value:t.attributes.items[i.id].comment},on:{input:function(e){e.target.composing||t.$set(t.attributes.items[i.id],"comment",e.target.value)}}})])])})),0)])])])])})),0),t._v(" "),t._m(4)])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group text-left text-muted content-divider pl-3 mb-0"},[e("span",{staticClass:"badge badge-flat border-grey-400 text-grey-300 font-weight-semibold"},[this._v(" Job Services ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group text-left text-muted content-divider pl-3 mb-0"},[e("span",{staticClass:"badge badge-flat border-grey-400 text-grey-300 font-weight-semibold"},[this._v(" Job description ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-elements"},[e("div",{staticClass:"list-icons"},[e("a",{staticClass:"list-icons-item",attrs:{"data-action":"collapse"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-left p-0"},[e("button",{staticClass:"btn btn-danger font-weight-bold",attrs:{type:"submit"}},[e("i",{staticClass:"icon-file-plus2 mr-1"}),this._v(" Update Job Inspection Order\n                ")])])}],!1,null,null,null);e.default=l.exports}}]);