(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{EkL6:function(t,e,a){"use strict";a.r(e);var s={name:"ContactsIndex",components:{},data:function(){return{}},watch:{"$route.query.page":function(t){this.tableData.url=this.$router.currentRoute.path+"?page="+t}},mounted:function(){this.tableData.initiate=!0;void 0===this.$route.query.page?this.tableData.url=this.$router.currentRoute.path:this.tableData.url=this.$router.currentRoute.path+"?page="+this.$route.query.page},methods:{onRowClick:function(t){this.$router.push({path:"/workshop/services/"+t.id+"/edit"})}},ready:function(){},beforeUpdate:function(){},updated:function(){InputsCheckboxesRadios.initComponents()}},l=a("KHd+"),r=Object(l.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"page-header page-header-light"},[t._m(0),t._v(" "),a("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[a("div",{staticClass:"d-flex"},[a("div",{staticClass:"breadcrumb"},[a("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[a("i",{staticClass:"icon-home2 mr-2"}),t._v(" "),a("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(" "+t._s(t._f("truncate")(this.$root.tenant.name,30))+" ")])]),t._v(" "),a("span",{staticClass:"breadcrumb-item"},[t._v("Workshop")]),t._v(" "),a("span",{staticClass:"breadcrumb-item active"},[t._v("Services")])]),t._v(" "),t._m(1)]),t._v(" "),a("div",{staticClass:"header-elements"},[a("div",{staticClass:"breadcrumb justify-content-center"},[a("router-link",{staticClass:" btn btn-danger btn-sm rounded-round font-weight-bold",attrs:{to:"/workshop/services/create"}},[a("i",{staticClass:"icon-hammer-wrench mr-1"}),t._v("\n                        New Service\n                    ")])],1)])])]),t._v(" "),a("div",{staticClass:"content border-0 p-0"},[a("loading-animation"),t._v(" "),this.$root.loading?t._e():a("div",{staticClass:"card shadow-none rounded-0 border-0"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-hover"},[a("thead",[a("tr",{staticClass:"table-active"},[a("th",{staticStyle:{width:"20px"},attrs:{scope:"col"}},[a("div",{staticClass:"custom-control custom-checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.rgTableSelectAll,expression:"rgTableSelectAll"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"row-checkbox-all"},domProps:{checked:Array.isArray(t.rgTableSelectAll)?t._i(t.rgTableSelectAll,null)>-1:t.rgTableSelectAll},on:{change:function(e){var a=t.rgTableSelectAll,s=e.target,l=!!s.checked;if(Array.isArray(a)){var r=t._i(a,null);s.checked?r<0&&(t.rgTableSelectAll=a.concat([null])):r>-1&&(t.rgTableSelectAll=a.slice(0,r).concat(a.slice(r+1)))}else t.rgTableSelectAll=l}}}),t._v(" "),a("label",{staticClass:"custom-control-label",attrs:{for:"row-checkbox-all"}})])]),t._v(" "),a("th",{staticClass:"font-weight-bold",attrs:{scope:"col"}},[t._v("Name")]),t._v(" "),a("th",{staticClass:"font-weight-bold",attrs:{scope:"col",nowrap:""}},[t._v("SKU")]),t._v(" "),a("th",{staticClass:"font-weight-bold",attrs:{scope:"col",nowrap:""}},[t._v("Rate")]),t._v(" "),a("th",{staticClass:"font-weight-bold",attrs:{scope:"col",nowrap:""}},[t._v("Cost")]),t._v(" "),a("th",{staticClass:"font-weight-bold",attrs:{scope:"col",nowrap:""}},[t._v("Description")]),t._v(" "),a("th",{staticClass:"font-weight-bold",attrs:{scope:"col",nowrap:""}},[t._v("Status")])])]),t._v(" "),a("rg-tables-state"),t._v(" "),a("tbody",t._l(t.tableData.payload.data,(function(e){return a("tr",{on:{click:function(a){return t.onRowClick(e)}}},[a("td",{staticClass:"pr-0",on:{click:function(t){t.stopPropagation()}}},[a("div",{staticClass:"custom-control custom-checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tableData.selected,expression:"tableData.selected"}],staticClass:"custom-control-input",attrs:{type:"checkbox",number:"",id:"row-checkbox-"+e.id,isabled:""},domProps:{value:e.id,checked:Array.isArray(t.tableData.selected)?t._i(t.tableData.selected,e.id)>-1:t.tableData.selected},on:{change:function(a){var s=t.tableData.selected,l=a.target,r=!!l.checked;if(Array.isArray(s)){var i=e.id,c=t._i(s,i);l.checked?c<0&&t.$set(t.tableData,"selected",s.concat([i])):c>-1&&t.$set(t.tableData,"selected",s.slice(0,c).concat(s.slice(c+1)))}else t.$set(t.tableData,"selected",r)}}}),t._v(" "),a("label",{staticClass:"custom-control-label",attrs:{for:"row-checkbox-"+e.id}})])]),t._v(" "),a("td",{staticClass:"cursor-pointer",attrs:{nowrap:""}},[t._v(t._s(e.salutaion)+" "+t._s(e.name))]),t._v(" "),a("td",{staticClass:"cursor-pointer"},[t._v(t._s(e.sku))]),t._v(" "),a("td",{staticClass:"cursor-pointer"},[t._v(t._s(e.selling_rate))]),t._v(" "),a("td",{staticClass:"cursor-pointer"},[t._v(t._s(e.billing_rate))]),t._v(" "),a("td",{staticClass:"cursor-pointer"},[t._v(t._s(e.selling_description))]),t._v(" "),a("td",{staticClass:"cursor-pointer"},[a("span",{staticClass:"badge badge-light mr-2"},[t._v(t._s(e.type))]),t._v(" "),a("span",{staticClass:"badge badge-light mr-2"},[t._v(t._s(e.status))])])])})),0)],1),t._v(" "),a("rg-tables-pagination",{attrs:{"table-data-prop":t.tableData}})],1)])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-header-content header-elements-md-inline"},[e("div",{staticClass:"page-title d-flex"},[e("h4",[e("i",{staticClass:"icon-hammer-wrench mr-2"}),this._v(" "),e("span",{staticClass:"font-weight-semibold"},[this._v("Services")])]),this._v(" "),e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])}],!1,null,null,null);e.default=r.exports}}]);