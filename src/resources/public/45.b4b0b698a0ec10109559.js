(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{wTPX:function(t,s,e){"use strict";e.r(s);var i=e("o0o1"),a=e.n(i);function r(t,s,e,i,a,r,n){try{var o=t[r](n),c=o.value}catch(t){return void e(t)}o.done?s(c):Promise.resolve(c).then(i,a)}var n={data:function(){return{permissions:[],urlPost:"/settings/permissions",userPermissions:{},attributes:{permissions:[]}}},mounted:function(){this.$root.appMenu("settings"),this.fetchPermissions(),this.appFetchUsers()},watch:{"attributes.user_id":function(t){var s=this,e=this.globalsUsers.filter((function(s){return s.id===t}));if(void 0!==e[0]&&null!==e[0])for(var i in this.permissions)e[0].permissions.forEach((function(t){s.attributes.permissions.push(t.name)}))}},methods:{fetchPermissions:function(){var t,s=this;return(t=a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,axios.get("/settings/permissions").then((function(t){s.permissions=t.data})).catch((function(t){console.log(t)})).finally((function(t){}));case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})),function(){var s=this,e=arguments;return new Promise((function(i,a){var n=t.apply(s,e);function o(t){r(n,i,a,o,c,"next",t)}function c(t){r(n,i,a,o,c,"throw",t)}o(void 0)}))})()},rgPermissionHumanReadableName:function(t){return(t=this.rgUcwords(t.replace(/\./g,": "))).replace(/-/g," ")},selectAllRowPermissions:function(t,s){var e=this;this.permissions[s].forEach((function(t){var s=e.attributes.permissions.indexOf(t.name);s>-1&&e.attributes.permissions.splice(s,1)})),t.target.checked&&this.permissions[s].forEach((function(t){e.attributes.permissions.push(t.name)}))},selectAllPermissions:function(t){var s=this;if(this.attributes.permissions=[],t.target.checked)for(var e in this.permissions)this.permissions[e].forEach((function(t){s.attributes.permissions.push(t.name)}))},formSubmit:function(t){t.preventDefault();var s=this;PNotify.removeAll();var e={title:!1,text:"Please wait as we do our thing",addclass:"bg-warning-400 border-warning-400",hide:!1,buttons:{closer:!1,sticker:!1}},i=new PNotify(e);axios.post(s.urlPost,this.attributes).then((function(t){e.text=t.data.messages.join("\n"),!0===t.data.status?(e.title="Success",e.type="success",e.addclass="bg-success-400 border-success-400"):(e.title="! Error",e.type="error",e.addclass="bg-warning-400 border-warning-400"),i.update(e),i.get().click((function(){i.remove()}))})).catch((function(t){s.response=t}))}}},o=e("KHd+"),c=Object(o.a)(n,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"page-header page-header-light"},[e("div",{staticClass:"page-header-content header-elements-md-inline"},[t._m(0),t._v(" "),e("div",{staticClass:"header-elements"},[e("div",{staticClass:"breadcrumb justify-content-center"},[e("router-link",{staticClass:" btn btn-danger btn-sm font-weight-bold",attrs:{to:"/settings/permissions"}},[e("i",{staticClass:"icon-plus-circle2 mr-1"}),t._v("\n                        Permissions\n                    ")])],1)])]),t._v(" "),t._m(1)]),t._v(" "),e("div",{staticClass:"content border-0"},[e("loading-animation"),t._v(" "),this.$root.loading?t._e():e("form",{attrs:{action:"",method:"post",autocomplete:"off"},on:{submit:t.formSubmit}},[e("div",{staticClass:"card p-0 shadow-none border-0"},[e("div",{staticClass:"card-body p-0"},[e("div",{staticClass:"tab-content"},[e("div",{staticClass:"tab-pane active",attrs:{id:"bottom-divided-tab0"}},[t._m(2),t._v(" "),e("div",{staticClass:"form-group row",attrs:{title:"User"}},[e("div",{staticClass:"col-lg-12"},[e("model-list-select",{attrs:{list:t.globalsUsers,"option-value":"id","option-text":"email",placeholder:"Select User"},model:{value:t.attributes.user_id,callback:function(s){t.$set(t.attributes,"user_id",s)},expression:"attributes.user_id"}})],1)]),t._v(" "),t._m(3)]),t._v(" "),e("div",{staticClass:"tab-pane",attrs:{id:"bottom-divided-tab1"}},[t._m(4),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-lg-3 col-form-label"},[t._v("All Permissions")]),t._v(" "),e("div",{staticClass:"col-lg-9"},[e("div",{staticClass:"custom-control custom-checkbox custom-control-inline pr-3"},[e("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",value:"customer",id:"select-all-permissions"},on:{click:function(s){return t.selectAllPermissions(s)}}}),t._v(" "),e("label",{staticClass:"custom-control-label font-weight-bold",attrs:{for:"select-all-permissions"}},[t._v("All Permissions")])])])]),t._v(" "),t._l(t.permissions,(function(s,i){return e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-lg-3 col-form-label"},[t._v("\n                                    "+t._s(t.rgPermissionHumanReadableName(i))+"\n                                ")]),t._v(" "),e("div",{staticClass:"col-lg-9"},[e("div",{staticClass:"custom-control custom-checkbox custom-control-inline pr-3"},[e("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",value:"customer",id:i},on:{click:function(s){return t.selectAllRowPermissions(s,i)}}}),t._v(" "),e("label",{staticClass:"custom-control-label font-weight-bold",attrs:{for:i}},[t._v("All ")])]),t._v(" "),t._l(s,(function(s){return e("div",{staticClass:"custom-control custom-checkbox custom-control-inline"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.permissions,expression:"attributes.permissions"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:s.name},domProps:{value:s.name,checked:Array.isArray(t.attributes.permissions)?t._i(t.attributes.permissions,s.name)>-1:t.attributes.permissions},on:{change:function(e){var i=t.attributes.permissions,a=e.target,r=!!a.checked;if(Array.isArray(i)){var n=s.name,o=t._i(i,n);a.checked?o<0&&t.$set(t.attributes,"permissions",i.concat([n])):o>-1&&t.$set(t.attributes,"permissions",i.slice(0,o).concat(i.slice(o+1)))}else t.$set(t.attributes,"permissions",r)}}}),t._v(" "),e("label",{staticClass:"custom-control-label",attrs:{for:s.name}},[t._v(t._s(s.label))])])}))],2)])})),t._v(" "),t._m(5)],2)])])])])],1)])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"page-title d-flex"},[s("h4",[s("i",{staticClass:"icon-files-empty2 mr-2"}),this._v(" "),s("span",{staticClass:"font-weight-semibold"},[this._v("Permissions Assign")])]),this._v(" "),s("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[s("i",{staticClass:"icon-more"})])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[e("div",{staticClass:"d-flex"},[e("div",{staticClass:"breadcrumb"},[e("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[e("i",{staticClass:"icon-home2 mr-2"}),t._v(" Home")]),t._v(" "),e("span",{staticClass:"breadcrumb-item"},[t._v("Settings")]),t._v(" "),e("span",{staticClass:"breadcrumb-item"},[t._v("Permissions")]),t._v(" "),e("span",{staticClass:"breadcrumb-item active"},[t._v("Assign")])]),t._v(" "),e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h6",[s("i",{staticClass:"icon-user mr-2"}),this._v(" Select User")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"form-group row"},[s("div",{staticClass:"col-lg-10"},[s("a",{staticClass:"btn btn-light font-weight-bold",attrs:{href:"#bottom-divided-tab1","data-toggle":"tab"}},[s("i",{staticClass:"icon-chevron-right mr-1"}),this._v(" Set Permissions\n                                    ")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h6",[s("i",{staticClass:"icon-key mr-2"}),this._v(" Set Permissions")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"form-group row"},[s("div",{staticClass:"col-lg-10"},[s("a",{staticClass:"btn btn-light font-weight-bold",attrs:{href:"#bottom-divided-tab0","data-toggle":"tab"}},[s("i",{staticClass:"icon-chevron-left mr-1"}),this._v(" Select User\n                                    ")]),this._v(" "),s("button",{staticClass:"btn btn-danger font-weight-bold",attrs:{type:"submit"}},[s("i",{staticClass:"icon-user-lock mr-1"}),this._v(" Assign Permissions to User\n                                    ")])])])}],!1,null,null,null);s.default=c.exports}}]);