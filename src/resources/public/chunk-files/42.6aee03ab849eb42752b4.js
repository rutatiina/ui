(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{YBKT:function(t,s,e){"use strict";e.r(s);var a=e("o0o1"),i=e.n(a);function r(t,s,e,a,i,r,o){try{var n=t[r](o),l=n.value}catch(t){return void e(t)}n.done?s(l):Promise.resolve(l).then(a,i)}var o={data:function(){return{permissions:[],urlPost:"/settings/roles/assign",attributes:{roles:[]}}},mounted:function(){this.$root.appMenu("settings"),this.fetchRoles(),this.appFetchUsers()},methods:{fetchRoles:function(){var t,s=this;return(t=i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,axios.get("/settings/roles").then((function(t){s.roles=t.data})).catch((function(t){console.log(t)})).finally((function(t){}));case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})),function(){var s=this,e=arguments;return new Promise((function(a,i){var o=t.apply(s,e);function n(t){r(o,a,i,n,l,"next",t)}function l(t){r(o,a,i,n,l,"throw",t)}n(void 0)}))})()},selectAllRoles:function(t){var s=this;this.attributes.roles=[],t.target.checked&&this.roles.forEach((function(t){s.attributes.roles.push(t.name)}))},formSubmit:function(t){t.preventDefault();var s=this;PNotify.removeAll();var e={title:!1,text:"Please wait as we do our thing",addclass:"bg-warning-400 border-warning-400",hide:!1,buttons:{closer:!1,sticker:!1}},a=new PNotify(e);axios.post(s.urlPost,this.attributes).then((function(t){e.text=t.data.messages.join("\n"),!0===t.data.status?(e.title="Success",e.type="success",e.addclass="bg-success-400 border-success-400"):(e.title="! Error",e.type="error",e.addclass="bg-warning-400 border-warning-400"),a.update(e),a.get().click((function(){a.remove()}))})).catch((function(t){s.response=t}))}}},n=e("KHd+"),l=Object(n.a)(o,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"page-header page-header-light"},[e("div",{staticClass:"page-header-content header-elements-md-inline"},[t._m(0),t._v(" "),e("div",{staticClass:"header-elements"},[e("div",{staticClass:"breadcrumb justify-content-center"},[e("router-link",{staticClass:" btn btn-danger btn-sm font-weight-bold",attrs:{to:"/settings/roles"}},[e("i",{staticClass:"icon-plus-circle2 mr-1"}),t._v("\n                        Roles\n                    ")])],1)])]),t._v(" "),t._m(1)]),t._v(" "),e("div",{staticClass:"content border-0"},[e("loading-animation"),t._v(" "),this.$root.loading?t._e():e("form",{attrs:{action:"",method:"post",autocomplete:"off"},on:{submit:t.formSubmit}},[e("div",{staticClass:"card p-0 shadow-none border-0"},[e("div",{staticClass:"card-body p-0"},[e("div",{staticClass:"tab-content"},[e("div",{staticClass:"tab-pane active",attrs:{id:"bottom-divided-tab0"}},[t._m(2),t._v(" "),e("div",{staticClass:"form-group row",attrs:{title:"User"}},[e("div",{staticClass:"col-lg-12"},[e("model-list-select",{attrs:{list:t.globalsUsers,"option-value":"id","option-text":"email",placeholder:"Select User"},model:{value:t.attributes.user_id,callback:function(s){t.$set(t.attributes,"user_id",s)},expression:"attributes.user_id"}})],1)]),t._v(" "),t._m(3)]),t._v(" "),e("div",{staticClass:"tab-pane",attrs:{id:"bottom-divided-tab1"}},[t._m(4),t._v(" "),e("div",{staticClass:"form-group row"},[e("div",{staticClass:"col-lg-9"},[e("div",{staticClass:"custom-control custom-checkbox custom-control-inline pr-3"},[e("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",value:"customer",id:"select-all-permissions"},on:{click:function(s){return t.selectAllRoles(s)}}}),t._v(" "),e("label",{staticClass:"custom-control-label font-weight-bold",attrs:{for:"select-all-permissions"}},[t._v("All Roles")])])])]),t._v(" "),t._l(t.roles,(function(s,a){return e("div",{staticClass:"form-group row"},[e("div",{staticClass:"col-lg-12 ml-3"},[e("div",{staticClass:"custom-control custom-checkbox custom-control-inline"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.roles,expression:"attributes.roles"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:s.name},domProps:{value:s.name,checked:Array.isArray(t.attributes.roles)?t._i(t.attributes.roles,s.name)>-1:t.attributes.roles},on:{change:function(e){var a=t.attributes.roles,i=e.target,r=!!i.checked;if(Array.isArray(a)){var o=s.name,n=t._i(a,o);i.checked?n<0&&t.$set(t.attributes,"roles",a.concat([o])):n>-1&&t.$set(t.attributes,"roles",a.slice(0,n).concat(a.slice(n+1)))}else t.$set(t.attributes,"roles",r)}}}),t._v(" "),e("label",{staticClass:"custom-control-label",attrs:{for:s.name}},[t._v(t._s(s.name))])])])])})),t._v(" "),t._m(5)],2)])])])])],1)])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"page-title d-flex"},[s("h4",[s("i",{staticClass:"icon-files-empty2 mr-2"}),this._v(" "),s("span",{staticClass:"font-weight-semibold"},[this._v("Assign Roles")])]),this._v(" "),s("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[s("i",{staticClass:"icon-more"})])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[e("div",{staticClass:"d-flex"},[e("div",{staticClass:"breadcrumb"},[e("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[e("i",{staticClass:"icon-home2 mr-2"}),t._v(" Home")]),t._v(" "),e("span",{staticClass:"breadcrumb-item"},[t._v("Settings")]),t._v(" "),e("span",{staticClass:"breadcrumb-item"},[t._v("Roles")]),t._v(" "),e("span",{staticClass:"breadcrumb-item active"},[t._v("Assign")])]),t._v(" "),e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h6",[s("i",{staticClass:"icon-user mr-2"}),this._v(" Select User")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"form-group row"},[s("div",{staticClass:"col-lg-10"},[s("a",{staticClass:"btn btn-light font-weight-bold",attrs:{href:"#bottom-divided-tab1","data-toggle":"tab"}},[s("i",{staticClass:"icon-chevron-right mr-1"}),this._v(" Set Roles\n                                    ")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h6",[s("i",{staticClass:"icon-key mr-2"}),this._v(" Set Roles")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"form-group row"},[s("div",{staticClass:"col-lg-10"},[s("a",{staticClass:"btn btn-light font-weight-bold",attrs:{href:"#bottom-divided-tab0","data-toggle":"tab"}},[s("i",{staticClass:"icon-chevron-left mr-1"}),this._v(" Select User\n                                    ")]),this._v(" "),s("button",{staticClass:"btn btn-danger font-weight-bold",attrs:{type:"submit"}},[s("i",{staticClass:"icon-user-lock mr-1"}),this._v(" Assign Role(s) to User\n                                    ")])])])}],!1,null,null,null);s.default=l.exports}}]);