(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{sUhn:function(t,e,s){"use strict";s.r(e);var n=s("o0o1"),i=s.n(n);function o(t,e,s,n,i,o,a){try{var r=t[o](a),c=r.value}catch(t){return void s(t)}r.done?e(c):Promise.resolve(c).then(n,i)}var a={data:function(){return{job_inspection_category:{},job_inspection_categories:[],job_inspection_items:[{inspection_category_id:null,name:null,options:null}]}},mounted:function(){this.$root.appMenu("workshop"),this.fetchSettings()},methods:{fetchSettings:function(){var t,e=this;return(t=i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.$root.loadingTxn=!0,t.next=4,axios.get(e.$route.fullPath).then((function(t){e.job_inspection_categories=t.data.job_inspection_categories,e.job_inspection_items=t.data.job_inspection_items})).catch((function(t){console.log(t)})).finally((function(t){}));case 4:return t.abrupt("return",t.sent);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})),function(){var e=this,s=arguments;return new Promise((function(n,i){var a=t.apply(e,s);function r(t){o(a,n,i,r,c,"next",t)}function c(t){o(a,n,i,r,c,"throw",t)}r(void 0)}))})()},addContactPerson:function(){this.job_inspection_items.push({inspection_category_id:null,name:null,options:null})},storeJobInspectionCategory:function(t){var e=this;t.preventDefault(),PNotify.removeAll();var s=this.$root.PNotifySettings,n=new PNotify(s);axios.post("/workshop/jobs/inspections/categories",this.job_inspection_category).then((function(t){e.axiosResponseHandle({response:t,pNotify:n,onSuccess:function(){},onError:function(){}})}))},storeJobInspectionItems:function(t){t.preventDefault(),PNotify.removeAll();var e=this.$root.PNotifySettings,s=new PNotify(e);axios.post("/workshop/jobs/inspections/items",{items:this.job_inspection_items}).then((function(t){this.axiosResponseHandle({response:t,pNotify:s,onSuccess:function(){},onError:function(){}})}))}}},r=s("KHd+"),c=Object(r.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content-wrapper"},[s("div",{staticClass:"page-header page-header-light"},[t._m(0),t._v(" "),s("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[s("div",{staticClass:"d-flex"},[s("div",{staticClass:"breadcrumb"},[s("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[s("i",{staticClass:"icon-home2 mr-2"}),t._v(" "),s("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(" "+t._s(t._f("truncate")(this.$root.tenant.name,30))+" ")])]),t._v(" "),s("span",{staticClass:"breadcrumb-item"},[t._v("Workshop")]),t._v(" "),s("span",{staticClass:"breadcrumb-item"},[t._v("Job")]),t._v(" "),s("span",{staticClass:"breadcrumb-item"},[t._v("Inspection")]),t._v(" "),s("span",{staticClass:"breadcrumb-item active"},[t._v("Settings")])]),t._v(" "),t._m(1)]),t._v(" "),s("div",{staticClass:"header-elements"},[s("div",{staticClass:"breadcrumb justify-content-center"},[s("router-link",{staticClass:" btn btn-danger btn-sm rounded-round font-weight-bold",attrs:{to:"/workshop/jobs"}},[s("i",{staticClass:"icon-drawer3 mr-2"}),t._v("\n                        Back to Jobs\n                    ")])],1)])])]),t._v(" "),s("div",{staticClass:"content border-0 padding-0"},[s("div",{staticClass:"card shadow-none rounded-0 border-0"},[s("div",{staticClass:"card-body p-0"},[s("loading-animation"),t._v(" "),s("div",{staticClass:"card border-0 shadow-0 p-0 max-width-1040"},[s("div",{staticClass:"card-body p-0"},[s("div",{staticClass:"card-text pl-2 pt-2 pb-2"},[this.$root.loading?t._e():s("form",{attrs:{action:"",method:"post",autocomplete:"off"},on:{submit:t.storeJobInspectionCategory}},[t._m(2),t._v(" "),s("label",{staticClass:"font-weight-bold"},[t._v("Job Inspection category")]),t._v(" "),s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.job_inspection_category.name,expression:"job_inspection_category.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Name"},domProps:{value:t.job_inspection_category.name},on:{input:function(e){e.target.composing||t.$set(t.job_inspection_category,"name",e.target.value)}}}),t._v(" "),t._m(3)])])]),t._v(" "),s("div",{staticClass:"card-text pl-2 pt-2 pb-2 mt-1"},[this.$root.loading?t._e():s("form",{attrs:{action:"",method:"post",autocomplete:"off"},on:{submit:t.storeJobInspectionItems}},[t._m(4),t._v(" "),s("table",{staticClass:"table table-bordered no-border-left no-border-right no-border-bottom"},[t._m(5),t._v(" "),s("tbody",t._l(t.job_inspection_items,(function(e){return s("tr",[s("td",{staticClass:"p-0"},[s("model-list-select",{staticClass:"border-0",attrs:{list:t.job_inspection_categories,"option-value":"id","option-text":"name",placeholder:"Category"},model:{value:e.inspection_category_id,callback:function(s){t.$set(e,"inspection_category_id",s)},expression:"item.inspection_category_id"}})],1),t._v(" "),s("td",{staticClass:"p-0"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"item.name"}],staticClass:"form-control border-0",attrs:{type:"text",value:"",placeholder:"Name"},domProps:{value:e.name},on:{input:function(s){s.target.composing||t.$set(e,"name",s.target.value)}}})]),t._v(" "),s("td",{staticClass:"p-0"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.options,expression:"item.options"}],staticClass:"form-control m-input border-0",attrs:{type:"text",value:"",placeholder:"Options"},domProps:{value:e.options},on:{input:function(s){s.target.composing||t.$set(e,"options",s.target.value)}}})])])})),0)]),t._v(" "),s("button",{staticClass:"btn btn-link btn-xs font-weight-bold",attrs:{type:"button"},on:{click:t.addContactPerson}},[s("i",{staticClass:"icon-plus22 position-left"}),t._v(" Add inspection item\n                                ")]),t._v(" "),t._m(6)])])])])],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-header-content header-elements-md-inline"},[e("div",{staticClass:"page-title d-flex"},[e("h4",[e("i",{staticClass:"icon-file-plus"}),this._v("\n                    Job Inspection Settings\n                ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group text-left text-muted content-divider pl-3"},[e("span",{staticClass:"badge badge-flat border-grey-400 text-grey-300 font-weight-semibold"},[this._v(" Job Inspection categories  ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-danger font-weight-bold",attrs:{type:"submit"}},[e("i",{staticClass:"icon-plus2 mr-1"}),this._v(" Save Inspection category\n                                        ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group text-left text-muted content-divider pl-3 mb-2"},[e("span",{staticClass:"badge badge-flat border-grey-400 text-grey-300 font-weight-semibold"},[this._v(" Job Inspection Items (Services / parts / accessories) ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",{staticClass:"thead-default"},[e("tr",[e("th",{staticClass:"pl-10"},[this._v("Category")]),this._v(" "),e("th",{staticClass:"pl-15"},[this._v("Item Name")]),this._v(" "),e("th",{staticClass:"pl-15"},[this._v("Item Options")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mt-3"},[e("button",{staticClass:"btn btn-danger font-weight-bold",attrs:{type:"submit"}},[e("i",{staticClass:"icon-file-plus2 mr-1"}),this._v(" Update Job Inspection\n                                    ")])])}],!1,null,null,null);e.default=c.exports}}]);