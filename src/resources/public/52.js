(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{UBNn:function(t,s,n){"use strict";n.r(s);var i=n("o0o1"),e=n.n(i);function a(t,s,n,i,e,a,r){try{var o=t[a](r),c=o.value}catch(t){return void n(t)}o.done?s(c):Promise.resolve(c).then(i,e)}function r(t){return function(){var s=this,n=arguments;return new Promise((function(i,e){var r=t.apply(s,n);function o(t){a(r,i,e,o,c,"next",t)}function c(t){a(r,i,e,o,c,"throw",t)}o(void 0)}))}}var o={data:function(){return{permissionsCount:0,rolesCount:0}},mounted:function(){this.fetchPermissionsCount(),this.fetchRolesCount()},methods:{fetchPermissionsCount:function(){var t=this;return r(e.a.mark((function s(){return e.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,axios.get("/settings/permissions/count").then((function(s){t.permissionsCount=s.data})).catch((function(t){console.log(t)})).finally((function(t){}));case 3:return s.abrupt("return",s.sent);case 6:s.prev=6,s.t0=s.catch(0),console.log(s.t0);case 9:case"end":return s.stop()}}),s,null,[[0,6]])})))()},fetchRolesCount:function(){var t=this;return r(e.a.mark((function s(){return e.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,axios.get("/settings/roles/count").then((function(s){t.rolesCount=s.data})).catch((function(t){console.log(t)})).finally((function(t){}));case 3:return s.abrupt("return",s.sent);case 6:s.prev=6,s.t0=s.catch(0),console.log(s.t0);case 9:case"end":return s.stop()}}),s,null,[[0,6]])})))()}}},c=n("KHd+"),l=Object(c.a)(o,(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"sidebar sidebar-light sidebar-secondary sidebar-expand-md"},[t._m(0),t._v(" "),n("div",{staticClass:"sidebar-content "},[n("div",{staticClass:"position-fixed h-100",staticStyle:{width:"16.875rem",overflow:"hidden"},attrs:{id:"rg-sidebar-secondary-fixed-content-scroll"}},[n("div",[n("div",{staticClass:"card mb-2"},[n("div",{staticClass:"card-body p-0"},[n("ul",{staticClass:"nav nav-sidebar",attrs:{"data-nav-type":"accordion"}},[n("li",{staticClass:"nav-item-header"},[t._v("Roles")]),t._v(" "),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/settings/roles"}},[n("i",{staticClass:"icon-key"}),t._v("\n                                    All Roles\n                                    "),n("span",{staticClass:"badge bg-primary badge-pill font-weight-bold ml-auto"},[t._v(t._s(t.rolesCount))])])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/settings/roles/assign"}},[n("i",{staticClass:"icon-user-lock"}),t._v(" Assign Role(s)\n                                ")])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/settings/roles/create"}},[n("i",{staticClass:"icon-plus-circle2"}),t._v(" Create Role\n                                ")])],1),t._v(" "),n("li",{staticClass:"nav-item-header"},[t._v("Permissions")]),t._v(" "),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/settings/permissions"}},[n("i",{staticClass:"icon-user-lock"}),t._v("\n                                    Permissions\n                                    "),n("span",{staticClass:"badge bg-primary badge-pill font-weight-bold ml-auto"},[t._v(t._s(t.permissionsCount))])])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/settings/permissions/assign"}},[n("i",{staticClass:"icon-user-lock"}),t._v(" Assign Permissions\n                                ")])],1)])])])])])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"sidebar-mobile-toggler text-center"},[s("a",{staticClass:"sidebar-mobile-secondary-toggle",attrs:{href:"#"}},[s("i",{staticClass:"icon-arrow-left8"})]),this._v(" "),s("span",{staticClass:"font-weight-semibold"},[this._v("Secondary sidebar")]),this._v(" "),s("a",{staticClass:"sidebar-mobile-expand",attrs:{href:"#"}},[s("i",{staticClass:"icon-screen-full"}),this._v(" "),s("i",{staticClass:"icon-screen-normal"})])])}],!1,null,null,null);s.default=l.exports}}]);