(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{XLOy:function(t,e,s){"use strict";var i=s("o0o1"),a=s.n(i);function n(t,e,s,i,a,n,o){try{var r=t[n](o),c=r.value}catch(t){return void s(t)}r.done?e(c):Promise.resolve(c).then(i,a)}e.a={mounted:function(){this.sourceUrls.items="/workshop/parts-and-accessories/vue-search-select-sales",this.sourceUrls.contacts="/workshop/contacts/search"},methods:{fetchPartsAndAccessories:function(t){var e,s=this;return(e=a.a.mark((function e(){var i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s.txnItems[0].name="-initiate-"===t?"":t,t){e.next=3;break}return e.abrupt("return",!1);case 3:return i={search_text:t,search:[{column:"name",value:t}]},e.prev=4,e.next=7,axios.post("/workshop/parts-and-accessories/vue-search-select-sales",i).then((function(e){e.data[0].name="-initiate-"===t?"":t,s.txnItems=e.data})).catch((function(t){console.log(t)})).finally((function(t){}));case 7:return e.abrupt("return",e.sent);case 10:e.prev=10,e.t0=e.catch(4),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[4,10]])})),function(){var t=this,s=arguments;return new Promise((function(i,a){var o=e.apply(t,s);function r(t){n(o,i,a,r,c,"next",t)}function c(t){n(o,i,a,r,c,"throw",t)}r(void 0)}))})()}}}},o6jb:function(t,e,s){"use strict";s.r(e);var i=s("o0o1"),a=s.n(i);function n(t,e,s,i,a,n,o){try{var r=t[n](o),c=r.value}catch(t){return void s(t)}r.done?e(c):Promise.resolve(c).then(i,a)}var o={mixins:[s("XLOy").a],data:function(){return{pageTitle:"Job Inspection",pageAction:"Update",urlStore:this.$route.fullPath,urlCreate:this.$route.fullPath,tab:"job-inspection-tab1",attributes:{},job:{},jobInspectionCategory:{},jobInspectionOrder:{},items:[]}},mounted:function(){this.$root.appMenu("workshop"),this.fetchAttributes(),this.txnFetchContacts("-initiate-"),this.txnFetchItems("-initiate-")},methods:{itemsCreate:function(){this.items.push({inspection_item_id:this.jobInspectionOrder.job_inspection_item_id,item:{},quantity:""})},inspectionItemItems:function(t,e){this.tab="job-inspection-tab3",this.jobInspectionCategory=t,this.jobInspectionOrder=e,this.items=e.items},addInspectionItemItems:function(){this.tab="job-inspection-tab1",this.attributes.categories[this.jobInspectionCategory.id].orders[this.jobInspectionOrder.id].items[this.items.id]=this.items},fetchAttributes:function(){var t,e=this;return(t=a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.$root.loadingTxn=!0,t.next=4,axios.get("/workshop/jobs/"+e.$route.params.id+"/inspection").then((function(t){e.attributes=t.data.attributes,e.job=t.data.job,e.attributes.job_id=t.data.job.id})).catch((function(t){console.log(t)})).finally((function(t){}));case 4:return t.abrupt("return",t.sent);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})),function(){var e=this,s=arguments;return new Promise((function(i,a){var o=t.apply(e,s);function r(t){n(o,i,a,r,c,"next",t)}function c(t){n(o,i,a,r,c,"throw",t)}r(void 0)}))})()},formSubmit:function(t){var e=this;t.preventDefault(),PNotify.removeAll();var s=this.$root.PNotifySettings,i=new PNotify(s);axios.post("/workshop/jobs/inspections",this.attributes).then((function(t){e.axiosResponseHandle({response:t,pNotify:i,onSuccess:function(){},onError:function(){}})}))}}},r=s("KHd+"),c=Object(r.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content-wrapper"},[s("div",{staticClass:"page-header page-header-light"},[s("div",{staticClass:"page-header-content header-elements-md-inline"},[s("div",{staticClass:"page-title d-flex"},[s("h4",[s("i",{staticClass:"icon-file-plus"}),t._v("\n                    "+t._s(t.pageTitle)+"\n                ")])])]),t._v(" "),s("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[s("div",{staticClass:"d-flex"},[s("div",{staticClass:"breadcrumb"},[s("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[s("i",{staticClass:"icon-home2 mr-2"}),t._v(" "),s("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(" "+t._s(t._f("truncate")(this.$root.tenant.name,30))+" ")])]),t._v(" "),s("span",{staticClass:"breadcrumb-item"},[t._v("Workshop")]),t._v(" "),s("span",{staticClass:"breadcrumb-item"},[t._v("Job")]),t._v(" "),s("span",{staticClass:"breadcrumb-item"},[t._v("Inspection")]),t._v(" "),s("span",{staticClass:"breadcrumb-item active"},[t._v(t._s(t.pageAction))])]),t._v(" "),t._m(0)]),t._v(" "),s("div",{staticClass:"header-elements"},[s("div",{staticClass:"breadcrumb justify-content-center"},[s("router-link",{staticClass:" btn btn-danger btn-sm rounded-round font-weight-bold",attrs:{to:"/workshop/jobs/"+t.$route.params.id}},[s("i",{staticClass:"icon-drawer3 mr-2"}),t._v("\n                        Back to Job #"+t._s(t.$route.params.id)+"\n                    ")])],1)])])]),t._v(" "),s("div",{staticClass:"content border-0 padding-0"},[s("div",{staticClass:"card shadow-none rounded-0 border-0"},[s("div",{staticClass:"card-body p-0"},[s("loading-animation"),t._v(" "),this.$root.loading?t._e():s("form",{staticClass:"max-width-1040",staticStyle:{"margin-bottom":"100px"},attrs:{action:"",method:"post",autocomplete:"off"},on:{submit:t.formSubmit}},[s("ul",{staticClass:"nav nav-tabs nav-tabs-bottom font-weight-semibold"},[s("li",{staticClass:"nav-item"},[s("a",{class:"nav-link "+["job-inspection-tab1"===t.tab?"active":""],attrs:{href:""},on:{click:function(e){e.preventDefault(),t.tab="job-inspection-tab1"}}},[t._v("Job Inspection")])]),t._v(" "),s("li",{staticClass:"nav-item"},[s("a",{class:"nav-link "+["job-inspection-tab2"===t.tab?"active":""],attrs:{href:""},on:{click:function(e){e.preventDefault(),t.tab="job-inspection-tab2"}}},[t._v("Job Details")])])]),t._v(" "),s("div",{staticClass:"tab-content"},[s("div",{class:"tab-pane "+["job-inspection-tab1"===t.tab?"active":""],attrs:{id:"job-inspection-tab1"}},[s("div",{staticClass:"card border-0 shadow-0 p-0"},[s("div",{staticClass:"card-header border-0 d-flex justify-content-between mb-3"},[s("span",{staticClass:"font-size-lg text-uppercase font-weight-semibold"},[t._v("Job "),s("a",{attrs:{href:"#"}},[t._v("#"+t._s(t.job.id))])]),t._v(" "),s("span",{staticClass:"font-size-sm text-uppercase"},[t._v("\n                                        Date: "),s("span",{staticClass:"font-weight-semibold"},[t._v(t._s(t.job.checkin_date))])])]),t._v(" "),s("div",{staticClass:"card-body p-0"},[s("table",{staticClass:"table table-bordered border-left-0 border-right-0 border-bottom-0"},t._l(t.attributes.categories,(function(e){return e.orders?s("tbody",[s("tr",{staticClass:"table-border-double table-active"},[s("th",{attrs:{colspan:"4"}},[t._v(t._s(e.name))])]),t._v(" "),t._l(e.orders,(function(i){return s("tr",[s("td",[t._v(t._s(i.inspection_item.name))]),t._v(" "),s("td",[s("div",[t._l(i.inspection_item.options_array,(function(a,n){return s("div",{staticClass:"custom-control custom-checkbox custom-control-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:i.inspection_item.inspection_options,expression:"order.inspection_item.inspection_options"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"rg-cb-"+e.id+"-"+i.inspection_item.id+"-"+n},domProps:{value:a,checked:Array.isArray(i.inspection_item.inspection_options)?t._i(i.inspection_item.inspection_options,a)>-1:i.inspection_item.inspection_options},on:{change:function(e){var s=i.inspection_item.inspection_options,n=e.target,o=!!n.checked;if(Array.isArray(s)){var r=a,c=t._i(s,r);n.checked?c<0&&t.$set(i.inspection_item,"inspection_options",s.concat([r])):c>-1&&t.$set(i.inspection_item,"inspection_options",s.slice(0,c).concat(s.slice(c+1)))}else t.$set(i.inspection_item,"inspection_options",o)}}}),t._v(" "),s("label",{staticClass:"custom-control-label",attrs:{for:"rg-cb-"+e.id+"-"+i.inspection_item.id+"-"+n}},[t._v(t._s(a))])])})),t._v(" "),i.comment?s("div",{staticClass:"small mt-2"},[t._v("* "+t._s(i.comment))]):t._e()],2),t._v(" "),i.items?s("div",{staticClass:"mt-2"},t._l(i.items,(function(e,a){return s("div",{staticClass:"font-weight-bold"},[s("button",{staticClass:"btn bg-danger bg-transparent text-danger btn-icon p-1",attrs:{type:"button",title:"Delete row"},on:{click:function(e){return t.$delete(i.items,a)}}},[s("i",{staticClass:"icon-cross3"})]),t._v(" "),s("span",{staticClass:"badge badge-success badge-pill font-weight-bold"},[t._v(" "+t._s(e.quantity)+" ")]),t._v("\n                                                            "+t._s(e.item.name)+"\n                                                        ")])})),0):t._e()]),t._v(" "),s("td",{staticClass:"p-0",attrs:{title:"Comment"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:i.inspection_item.inspection_comment,expression:"order.inspection_item.inspection_comment"}],staticClass:"form-control border-0",attrs:{type:"text",placeholder:"Comment"},domProps:{value:i.inspection_item.inspection_comment},on:{input:function(e){e.target.composing||t.$set(i.inspection_item,"inspection_comment",e.target.value)}}})]),t._v(" "),s("td",{staticClass:"p-0"},[s("button",{staticClass:"btn btn-link btn-sm",attrs:{type:"button"},on:{click:function(s){return t.inspectionItemItems(e,i)}}},[s("i",{staticClass:"icon-plus2 mr-2"}),t._v(" Service/Part/Accessory\n                                                    ")])])])}))],2):t._e()})),0)])]),t._v(" "),t._m(1)]),t._v(" "),s("div",{class:"tab-pane "+["job-inspection-tab2"===t.tab?"active":""],attrs:{id:"job-inspection-tab2"}},[s("div",{staticClass:"card p-0"},[s("div",{staticClass:"card-header bg-light d-flex justify-content-between"},[s("span",{staticClass:"font-size-sm text-uppercase font-weight-semibold"},[t._v("Job "),s("a",{attrs:{href:"#"}},[t._v("#"+t._s(t.job.id))])]),t._v(" "),s("span",{staticClass:"font-size-sm text-uppercase"},[t._v("\n                                        Date: "),s("span",{staticClass:"font-weight-semibold"},[t._v(t._s(t.job.checkin_date))])])]),t._v(" "),s("div",{staticClass:"card-body"},[t.job.vehicle?s("div",{staticClass:"card-title"},[s("span",{staticClass:"h4 font-weight-semibold pr-3"},[t._v(t._s(t.job.vehicle.registration_number))]),t._v(" "),t.job.contact?s("span",[s("span",{staticClass:"badge badge-secondary badge-pill font-weight-semibold"},[t._v(" Customer ")]),t._v(" "),s("span",{staticClass:"h6"},[t._v(t._s(t.job.contact.display_name))])]):t._e()]):t._e(),t._v(" "),t.job.service_defaults&&t.job.service_defaults.length>0?s("div",{staticClass:"card-text border-left-3 border-primary pl-2 pt-2 pb-2"},[t._m(2),t._v(" "),s("div",{staticClass:"mt-2",staticStyle:{"white-space":"pre"}},[t._v(t._s(t.job.service_defaults.join("\n")))])]):t._e(),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.job.description,expression:"job.description"}],staticClass:"card-text border-left-3 border-primary pl-2 pt-2 pb-2"},[t._m(3),t._v(" "),s("div",{staticClass:"mt-2",staticStyle:{"white-space":"pre"}},[t._v(t._s(t.job.description))])]),t._v(" "),s("div",{staticClass:"card-text border-left-3 border-success pl-2 pt-2 pb-2 mt-1"},[t._m(4),t._v(" "),t.job.user?s("p",[s("small",[t._v("Issued by:")]),t._v(" "+t._s(t.job.user.name))]):t._e(),t._v(" "),s("p",[s("small",[t._v("Issued on:")]),t._v(" "+t._s(t.job.checkin_date))])]),t._v(" "),s("div",{staticClass:"card-text border-left-3 border-warning pl-2 pt-2 pb-2 mt-1"},[t._m(5),t._v(" "),s("ol",t._l(t.job.technicians,(function(e){return s("li",[s("span",{staticClass:"h6"},[t._v(t._s(e.contact.display_name))])])})),0)])]),t._v(" "),s("div",{staticClass:"card-footer d-flex justify-content-between"},[t.job.supervisor?s("span",{staticClass:"text-muted"},[t._v("Supervisor "+t._s(t.job.supervisor.display_name))]):t._e()])])]),t._v(" "),s("div",{class:"tab-pane "+["job-inspection-tab3"===t.tab?"active":""],attrs:{id:"job-inspection-tab3"}},[s("div",{staticClass:"card border-0 shadow-0 p-0"},[s("div",{staticClass:"card-body p-0"},[s("div",[s("span",{staticClass:"h5"},[t._v(t._s(t.jobInspectionCategory.name))]),t._v(" "),t.jobInspectionOrder.inspection_item?s("span",{staticClass:"h6 pl-3"},[t._v(t._s(t.jobInspectionOrder.inspection_item.name))]):t._e()]),t._v(" "),s("table",{directives:[{name:"show",rawName:"v-show",value:t.items.length>0,expression:"items.length > 0"}],staticClass:"table table-bordered border-left-0 border-right-0 border-bottom-0 mt-2"},[t._m(6),t._v(" "),s("tbody",t._l(t.items,(function(e,i){return s("tr",[s("td",{staticClass:"td_item_selector p-0 rg_select2_border_none"},[s("model-list-select",{staticClass:"border-0",attrs:{list:t.txnItems,"option-value":"id","option-text":"name","option-item-row":i,"option-tag":"",placeholder:"Select item"},on:{searchchange:t.txnFetchItems},model:{value:e.item,callback:function(s){t.$set(e,"item",s)},expression:"item.item"}})],1),t._v(" "),s("td",{staticClass:"p-0"},[s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.quantity,expression:"item.quantity"}],staticClass:"form-control border-0 text-right",attrs:{type:"text","data-row":i,placeholder:"0"},domProps:{value:e.quantity},on:{input:function(s){s.target.composing||t.$set(e,"quantity",s.target.value)}}}),t._v(" "),s("span",{staticClass:"input-group-append border-0 rounded-0"},[s("button",{staticClass:"btn bg-danger bg-transparent text-danger btn-icon",attrs:{type:"button",title:"Delete row"},on:{click:function(e){return t.$delete(t.items,i)}}},[s("i",{staticClass:"icon-cross3"})])])])])])})),0)]),t._v(" "),s("div",{staticClass:"mt-2"},[s("button",{staticClass:"btn btn-outline bg-primary border-left-3 border-primary text-primary-800 font-weight-bold border-top-0 border-right-0 border-bottom-0 rounded-0",attrs:{type:"button"},on:{click:t.itemsCreate}},[s("i",{staticClass:"icon-plus2 mr-2"}),t._v(" Add another line\n                                        ")])]),t._v(" "),s("div",{staticClass:"mt-2"},[s("button",{staticClass:"btn btn-success font-weight-bold",attrs:{type:"button"},on:{click:t.addInspectionItemItems}},[s("i",{staticClass:"icon-square-left mr-1"}),t._v(" Add items & go back to Job Inspection\n                                        ")])])])])])])])],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-left p-0"},[e("button",{staticClass:"btn btn-danger font-weight-bold",attrs:{type:"submit"}},[e("i",{staticClass:"icon-file-plus2 mr-1"}),this._v(" Update Job Inspection\n                                ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group text-left text-muted content-divider pl-3 mb-0"},[e("span",{staticClass:"badge badge-flat border-grey-400 text-grey-300 font-weight-semibold"},[this._v(" Job Services ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group text-left text-muted content-divider pl-3 mb-0"},[e("span",{staticClass:"badge badge-flat border-grey-400 text-grey-300 font-weight-semibold"},[this._v(" Job description ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group text-left text-muted content-divider pl-3 mb-2"},[e("span",{staticClass:"badge badge-flat border-grey-400 text-grey-300 font-weight-semibold"},[this._v(" Job Inspection Order ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group text-left text-muted content-divider pl-3 mb-2"},[e("span",{staticClass:"badge badge-flat border-grey-400 text-grey-300 font-weight-bold"},[this._v(" Job Technicians ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",{staticClass:"thead-default bg-light"},[e("tr",[e("th",{staticClass:"font-weight-bold",attrs:{width:"80%"}},[this._v("Service, Part, or Accessories")]),this._v(" "),e("th",{staticClass:"text-right font-weight-bold",attrs:{width:"20%"}},[this._v("Quantity")])])])}],!1,null,null,null);e.default=c.exports}}]);