(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{gBDJ:function(t,s,e){"use strict";e.r(s);var i=e("o0o1"),a=e.n(i);function n(t,s,e,i,a,n,r){try{var o=t[n](r),c=o.value}catch(t){return void e(t)}o.done?s(c):Promise.resolve(c).then(i,a)}function r(t){return function(){var s=this,e=arguments;return new Promise((function(i,a){var r=t.apply(s,e);function o(t){n(r,i,a,o,c,"next",t)}function c(t){n(r,i,a,o,c,"throw",t)}o(void 0)}))}}var o={data:function(){return{pageTitle:"",permissions:[],urlPost:"/settings/roles",attributes:{permissions:[]}}},mounted:function(){this.$root.appMenu("settings"),this.fetchAttributes(),this.fetchPermissions()},methods:{fetchAttributes:function(){var t=this;return r(a.a.mark((function s(){return a.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,t.$root.loadingTxn=!0,s.next=4,axios.get(t.$route.fullPath).then((function(s){t.$root.loadingTxn=!1,t.pageTitle=s.data.pageTitle,t.urlPost=s.data.urlPost,t.attributes=s.data.attributes,t.pageTitle=s.data.pageTitle})).catch((function(t){console.log(t)})).finally((function(t){}));case 4:return s.abrupt("return",s.sent);case 7:s.prev=7,s.t0=s.catch(0),console.log(s.t0);case 10:case"end":return s.stop()}}),s,null,[[0,7]])})))()},fetchPermissions:function(){var t=this;return r(a.a.mark((function s(){return a.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,axios.get("/settings/permissions").then((function(s){t.permissions=s.data})).catch((function(t){console.log(t)})).finally((function(t){}));case 3:return s.abrupt("return",s.sent);case 6:s.prev=6,s.t0=s.catch(0),console.log(s.t0);case 9:case"end":return s.stop()}}),s,null,[[0,6]])})))()},rgPermissionHumanReadableName:function(t){return(t=this.rgUcwords(t.replace(/\./g,": "))).replace(/-/g," ")},selectAllRowPermissions:function(t,s){var e=this;this.permissions[s].forEach((function(t){var s=e.attributes.permissions.indexOf(t.name);s>-1&&e.attributes.permissions.splice(s,1)})),t.target.checked&&this.permissions[s].forEach((function(t){e.attributes.permissions.push(t.name)}))},selectAllPermissions:function(t){var s=this;if(this.attributes.permissions=[],t.target.checked)for(var e in this.permissions)this.permissions[e].forEach((function(t){s.attributes.permissions.push(t.name)}))},formSubmit:function(t){t.preventDefault();var s=this;PNotify.removeAll();var e={title:!1,text:"Please wait as we do our thing",addclass:"bg-warning-400 border-warning-400",hide:!1,buttons:{closer:!1,sticker:!1}},i=new PNotify(e);axios.post(s.urlPost,this.attributes).then((function(t){e.text=t.data.messages.join("\n"),!0===t.data.status?(e.title="Success",e.type="success",e.addclass="bg-success-400 border-success-400"):(e.title="! Error",e.type="error",e.addclass="bg-warning-400 border-warning-400"),i.update(e),i.get().click((function(){i.remove()}))})).catch((function(t){s.response=t}))}}},c=e("KHd+"),l=Object(c.a)(o,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"page-header page-header-light"},[e("div",{staticClass:"page-header-content header-elements-md-inline"},[t._m(0),t._v(" "),e("div",{staticClass:"header-elements"},[e("div",{staticClass:"breadcrumb justify-content-center"},[e("router-link",{staticClass:" btn btn-danger btn-sm font-weight-bold",attrs:{to:"/settings/roles"}},[e("i",{staticClass:"icon-plus-circle2 mr-1"}),t._v("\n                        Roles\n                    ")])],1)])]),t._v(" "),t._m(1)]),t._v(" "),e("div",{staticClass:"content border-0 p-0"},[e("loading-animation"),t._v(" "),this.$root.loading?t._e():e("form",{attrs:{action:"",method:"post",autocomplete:"off"},on:{submit:t.formSubmit}},[e("div",{staticClass:"card p-0 shadow-none border-0"},[e("table",{staticClass:"table w-100"},[e("tr",{staticClass:"bg-light"},[e("td",{staticClass:"col-auto text-danger font-weight-semibold"},[t._v("* Role name")]),t._v(" "),e("td",{staticClass:"col"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.name,expression:"attributes.name"}],staticClass:"form-control rounded-0",staticStyle:{"max-width":"400px"},attrs:{type:"text",placeholder:"Role name"},domProps:{value:t.attributes.name},on:{input:function(s){s.target.composing||t.$set(t.attributes,"name",s.target.value)}}})])]),t._v(" "),e("tr",[e("td",{staticClass:"text-nowrap"},[t._v("All Permissions")]),t._v(" "),e("td",[e("div",{staticClass:"custom-control custom-checkbox custom-control-inline pr-3"},[e("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",value:"customer",id:"select-all-permissions"},on:{click:function(s){return t.selectAllPermissions(s)}}}),t._v(" "),e("label",{staticClass:"custom-control-label font-weight-bold",attrs:{for:"select-all-permissions"}},[t._v("All Permissions")])])])]),t._v(" "),t._l(t.permissions,(function(s,i){return e("tr",[e("td",{staticClass:"text-nowrap"},[t._v("\n                            "+t._s(t.rgPermissionHumanReadableName(i))+"\n                        ")]),t._v(" "),e("td",[e("div",{staticClass:"custom-control custom-checkbox custom-control-inline pr-3"},[e("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",value:"customer",id:i},on:{click:function(s){return t.selectAllRowPermissions(s,i)}}}),t._v(" "),e("label",{staticClass:"custom-control-label font-weight-bold",attrs:{for:i}},[t._v("All ")])]),t._v(" "),t._l(s,(function(s){return e("div",{staticClass:"custom-control custom-checkbox custom-control-inline"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.permissions,expression:"attributes.permissions"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:s.name},domProps:{value:s.name,checked:Array.isArray(t.attributes.permissions)?t._i(t.attributes.permissions,s.name)>-1:t.attributes.permissions},on:{change:function(e){var i=t.attributes.permissions,a=e.target,n=!!a.checked;if(Array.isArray(i)){var r=s.name,o=t._i(i,r);a.checked?o<0&&t.$set(t.attributes,"permissions",i.concat([r])):o>-1&&t.$set(t.attributes,"permissions",i.slice(0,o).concat(i.slice(o+1)))}else t.$set(t.attributes,"permissions",n)}}}),t._v(" "),e("label",{staticClass:"custom-control-label",attrs:{for:s.name}},[t._v(t._s(s.label))])])}))],2)])})),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[e("button",{staticClass:"btn btn-danger font-weight-bold",attrs:{type:"submit"}},[e("i",{staticClass:"icon-user-lock mr-1"}),t._v(" "+t._s(t.pageTitle)+"\n                            ")])])])],2)])])],1)])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"page-title d-flex"},[s("h4",[s("i",{staticClass:"icon-files-empty2 mr-2"}),this._v(" "),s("span",{staticClass:"font-weight-semibold"},[this._v("Create Roles")])]),this._v(" "),s("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[s("i",{staticClass:"icon-more"})])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[e("div",{staticClass:"d-flex"},[e("div",{staticClass:"breadcrumb"},[e("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[e("i",{staticClass:"icon-home2 mr-2"}),t._v(" Home")]),t._v(" "),e("span",{staticClass:"breadcrumb-item"},[t._v("Settings")]),t._v(" "),e("span",{staticClass:"breadcrumb-item"},[t._v("Roles")]),t._v(" "),e("span",{staticClass:"breadcrumb-item active"},[t._v("Create")])]),t._v(" "),e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])])])}],!1,null,null,null);s.default=l.exports}}]);