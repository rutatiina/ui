(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{EhzN:function(t,e,a){"use strict";a.r(e);var s=a("o0o1"),c=a.n(s),r=a("KHd+");function i(t,e,a,s,c,r,i){try{var n=t[r](i),l=n.value}catch(t){return void a(t)}n.done?e(l):Promise.resolve(l).then(s,c)}function n(t){return function(){var e=this,a=arguments;return new Promise((function(s,c){var r=t.apply(e,a);function n(t){i(r,s,c,n,l,"next",t)}function l(t){i(r,s,c,n,l,"throw",t)}n(void 0)}))}}var l={components:{IndexTableRowsSelectedActions:Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.$parent.tableData.selected.length>0?a("tr",{staticClass:"table-info"},[a("td",{staticClass:"pr-0",on:{click:function(t){t.stopPropagation()}}},[a("span",{staticClass:"badge badge-primary badge-pill font-weight-bold"},[t._v(t._s(t.$parent.tableData.selected.length))])]),t._v(" "),a("td",{staticClass:"cursor-pointer p-0",attrs:{nowrap:"",colspan:"7"}},[a("button",{staticClass:"btn btn-sm btn-link font-weight-bold text-success",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.$parent.appFetchGlobalsActivateRecord(e)}}},[a("i",{staticClass:"icon-shield-check mr-2"}),t._v(" Activate")]),t._v(" "),a("button",{staticClass:"btn btn-sm btn-link font-weight-bold text-warning",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.$parent.appFetchGlobalsDeactivateRecord(e)}}},[a("i",{staticClass:"icon-shield-notice mr-2"}),t._v(" De-activate")]),t._v(" "),a("button",{staticClass:"btn btn-sm btn-link font-weight-bold text-danger",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.$parent.appFetchGlobalsDeleteRecord(e)}}},[a("i",{staticClass:"icon-bin2 mr-2"}),t._v(" Delete")])])]):t._e()}),[],!1,null,null,null).exports},data:function(){return{}},watch:{"$route.query.page":function(t){this.tableData.url=this.$router.currentRoute.path+"?page="+t}},mounted:function(){this.appFetchGlobalsRoutes("items"),this.tableData.initiate=!0;void 0===this.$route.query.page?this.tableData.url=this.$router.currentRoute.path:this.tableData.url=this.$router.currentRoute.path+"?page="+this.$route.query.page},methods:{onRowClick:function(t){this.$router.push({path:"/items/"+t.id+"/edit"})},deactivateItems:function(){var t=this;return n(c.a.mark((function e(){var a,s,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={_method:"PATCH",ids:[t.contact.id]},s=t.$root.PNotifySettings,r=new PNotify(s),e.next=6,axios.post(t.routes.deactivate,a).then((function(e){t.contact.status=e.data.contact.status,s.text=e.data.messages.join("\n"),!0===e.data.status?(s.title="Success",s.type="success",s.addclass="bg-success-400 border-success-400"):(s.title="! Error",s.type="error",s.addclass="bg-warning-400 border-warning-400"),r.update(s),r.get().click((function(){r.remove()})),e.data.callback&&t.$router.push({path:e.data.callback})})).catch((function(t){console.log(t)})).finally((function(t){}));case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},activateItems:function(){var t=this;return n(c.a.mark((function e(){var a,s,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={_method:"PATCH",ids:[t.contact.id]},s=t.$root.PNotifySettings,r=new PNotify(s),e.next=6,axios.post(t.routes.activate,a).then((function(e){t.contact.status=e.data.contact.status,s.text=e.data.messages.join("\n"),!0===e.data.status?(s.title="Success",s.type="success",s.addclass="bg-success-400 border-success-400"):(s.title="! Error",s.type="error",s.addclass="bg-warning-400 border-warning-400"),r.update(s),r.get().click((function(){r.remove()})),e.data.callback&&t.$router.push({path:e.data.callback})})).catch((function(t){console.log(t)})).finally((function(t){}));case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}},ready:function(){},beforeUpdate:function(){},updated:function(){console.log(this.routes),InputsCheckboxesRadios.initComponents()}},o=Object(r.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"page-header page-header-light"},[a("div",{staticClass:"page-header-content header-elements-md-inline"},[t._m(0),t._v(" "),a("div",{staticClass:"header-elements"},[a("div",{staticClass:"breadcrumb justify-content-center"},[a("router-link",{staticClass:" btn btn-danger btn-sm font-weight-bold",attrs:{to:"/items/create"}},[a("i",{staticClass:"icon-price-tags2 mr-1"}),t._v("\n                        New Item\n                    ")])],1)])]),t._v(" "),t._m(1)]),t._v(" "),a("div",{staticClass:"content border-0 p-0"},[a("loading-animation"),t._v(" "),a("div",{staticClass:"card shadow-none rounded-0 border-0"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-hover"},[a("thead",[a("tr",{staticClass:"table-active"},[a("th",{staticStyle:{width:"20px"},attrs:{scope:"col"}},[a("div",{staticClass:"custom-control custom-checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.rgTableSelectAll,expression:"rgTableSelectAll"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"row-checkbox-all"},domProps:{checked:Array.isArray(t.rgTableSelectAll)?t._i(t.rgTableSelectAll,null)>-1:t.rgTableSelectAll},on:{change:function(e){var a=t.rgTableSelectAll,s=e.target,c=!!s.checked;if(Array.isArray(a)){var r=t._i(a,null);s.checked?r<0&&(t.rgTableSelectAll=a.concat([null])):r>-1&&(t.rgTableSelectAll=a.slice(0,r).concat(a.slice(r+1)))}else t.rgTableSelectAll=c}}}),t._v(" "),a("label",{staticClass:"custom-control-label",attrs:{for:"row-checkbox-all"}})])]),t._v(" "),a("th",{staticClass:"font-weight-bold",staticStyle:{width:"32px"},attrs:{scope:"col"}}),t._v(" "),a("th",{staticClass:"font-weight-bold",attrs:{scope:"col"}},[t._v("Name")]),t._v(" "),a("th",{staticClass:"font-weight-bold",attrs:{scope:"col",nowrap:""}},[t._v("SKU")]),t._v(" "),a("th",{staticClass:"font-weight-bold text-right",attrs:{scope:"col",nowrap:""}},[t._v("Rate")]),t._v(" "),a("th",{staticClass:"font-weight-bold text-right",attrs:{scope:"col",nowrap:""}},[t._v("Cost")]),t._v(" "),a("th",{staticClass:"font-weight-bold",attrs:{scope:"col",nowrap:""}},[t._v("Type")]),t._v(" "),a("th",{staticClass:"font-weight-bold",attrs:{scope:"col",nowrap:""}},[t._v("Status")])])]),t._v(" "),a("rg-tables-state"),t._v(" "),a("tbody",[a("index-table-rows-selected-actions"),t._v(" "),t._l(t.tableData.payload.data,(function(e){return a("tr",{on:{click:function(a){return t.onRowClick(e)}}},[a("td",{staticClass:"pr-0",on:{click:function(t){t.stopPropagation()}}},[a("div",{staticClass:"custom-control custom-checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tableData.selected,expression:"tableData.selected"}],staticClass:"custom-control-input",attrs:{type:"checkbox",number:"",id:"row-checkbox-"+e.id,isabled:""},domProps:{value:e.id,checked:Array.isArray(t.tableData.selected)?t._i(t.tableData.selected,e.id)>-1:t.tableData.selected},on:{change:function(a){var s=t.tableData.selected,c=a.target,r=!!c.checked;if(Array.isArray(s)){var i=e.id,n=t._i(s,i);c.checked?n<0&&t.$set(t.tableData,"selected",s.concat([i])):n>-1&&t.$set(t.tableData,"selected",s.slice(0,n).concat(s.slice(n+1)))}else t.$set(t.tableData,"selected",r)}}}),t._v(" "),a("label",{staticClass:"custom-control-label",attrs:{for:"row-checkbox-"+e.id}})])]),t._v(" "),a("td",{staticClass:"cursor-pointer pl-0 pr-0",attrs:{nowrap:""}},[e.image_path?a("img",{staticClass:"rounded-circle",attrs:{src:"/"+e.image_path,width:"32",height:"32",alt:""}}):a("img",{staticClass:"rounded-circle",attrs:{src:"/template/l/global_assets/images/placeholders/placeholder.jpg",width:"32",height:"32",alt:""}})]),t._v(" "),a("td",{staticClass:"cursor-pointer",attrs:{nowrap:""}},[a("div",{staticClass:"font-weight-semibold"},[t._v(t._s(e.salutaion)+" "+t._s(e.name))]),t._v(" "),a("div",{staticClass:"text-muted"},[t._v(t._s(e.selling_description))])]),t._v(" "),a("td",{staticClass:"cursor-pointer"},[t._v(t._s(e.sku))]),t._v(" "),a("td",{staticClass:"cursor-pointer text-right"},[t._v(t._s(t.$root.numberFormat(e.selling_rate)))]),t._v(" "),a("td",{staticClass:"cursor-pointer text-right"},[t._v(t._s(t.$root.numberFormat(e.billing_rate)))]),t._v(" "),a("td",{staticClass:"cursor-pointer"},[a("span",{staticClass:"badge badge-primary text-capitalize font-weight-semibold"},[t._v(t._s(e.type))])]),t._v(" "),a("td",{staticClass:"cursor-pointer"},[a("span",{class:"badge text-capitalize font-weight-semibold "+["active"===e.status?"badge-success":"badge-danger"]},[t._v(t._s(e.status))])])])})),t._v(" "),a("index-table-rows-selected-actions")],2)],1),t._v(" "),a("rg-tables-pagination",{attrs:{"table-data-prop":t.tableData}})],1)])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-title d-flex"},[e("h4",[e("i",{staticClass:"icon-price-tags mr-2"}),this._v(" "),e("span",{staticClass:"font-weight-semibold"},[this._v("Items")])]),this._v(" "),e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[e("div",{staticClass:"d-flex"},[e("div",{staticClass:"breadcrumb"},[e("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[e("i",{staticClass:"icon-home2 mr-2"}),this._v(" Home")]),this._v(" "),e("span",{staticClass:"breadcrumb-item active"},[this._v("Items")])]),this._v(" "),e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])])])}],!1,null,null,null);e.default=o.exports}}]);