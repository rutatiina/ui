(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{bJPc:function(t,e,a){"use strict";a.r(e);var s={data:function(){return{}},watch:{"$route.query.page":function(t){this.tableData.url=this.$router.currentRoute.path+"?page="+t}},mounted:function(){this.$root.appMenu("crbt"),this.tableData.initiate=!0;void 0===this.$route.query.page?this.tableData.url=this.$router.currentRoute.path:this.tableData.url=this.$router.currentRoute.path+"?page="+this.$route.query.page},methods:{onRowClick:function(t){this.$router.push({path:"/crbt/networks/"+t.id+"/edit"})}},ready:function(){},beforeUpdate:function(){},updated:function(){InputsCheckboxesRadios.initComponents()}},l=a("KHd+"),i=Object(l.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"page-header page-header-light"},[t._m(0),t._v(" "),a("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[a("div",{staticClass:"d-flex"},[a("div",{staticClass:"breadcrumb"},[a("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[a("i",{staticClass:"icon-home2 mr-2"}),t._v(" "),a("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(" "+t._s(t._f("truncate")(this.$root.tenant.name,30))+" ")])]),t._v(" "),a("span",{staticClass:"breadcrumb-item"},[t._v("CRBT")]),t._v(" "),a("span",{staticClass:"breadcrumb-item active"},[t._v("Networks")])]),t._v(" "),t._m(1)]),t._v(" "),a("div",{staticClass:"header-elements d-none"},[a("div",{staticClass:"breadcrumb justify-content-center"},[a("router-link",{staticClass:" btn btn-danger btn-sm rounded-round font-weight-bold",attrs:{to:"/crbt/networks/create"}},[a("i",{staticClass:"icon-user-plus mr-1"}),t._v("\n                        New Network\n                    ")])],1)])])]),t._v(" "),a("div",{staticClass:"content border-0 p-0"},[a("loading-animation"),t._v(" "),a("div",{staticClass:"card shadow-none rounded-0 border-0"},[this.$root.loading||0!=t.tableData.payload.data.length?t._e():a("div",{staticClass:"card-body"},[t._m(2)]),t._v(" "),a("div",{staticClass:"table-responsive overflow-visible"},[a("table",{staticClass:"table table-hover"},[a("tbody",[a("tr",{staticClass:"table-active"},[a("th",{staticClass:"font-weight-bold",staticStyle:{width:"20px"},attrs:{scope:"col"}},[a("div",{staticClass:"custom-control custom-checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.rgTableSelectAll,expression:"rgTableSelectAll"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"row-checkbox-all"},domProps:{checked:Array.isArray(t.rgTableSelectAll)?t._i(t.rgTableSelectAll,null)>-1:t.rgTableSelectAll},on:{change:function(e){var a=t.rgTableSelectAll,s=e.target,l=!!s.checked;if(Array.isArray(a)){var i=t._i(a,null);s.checked?i<0&&(t.rgTableSelectAll=a.concat([null])):i>-1&&(t.rgTableSelectAll=a.slice(0,i).concat(a.slice(i+1)))}else t.rgTableSelectAll=l}}}),t._v(" "),a("label",{staticClass:"custom-control-label",attrs:{for:"row-checkbox-all"}})])]),t._v(" "),a("th",{staticClass:"font-weight-bold",attrs:{scope:"col"}},[t._v("Name")]),t._v(" "),a("th",{staticClass:"font-weight-bold",attrs:{scope:"col"}},[t._v("Code")]),t._v(" "),a("th",{staticClass:"font-weight-bold",attrs:{scope:"col",width:"65"}},[t._v("Country")])]),t._v(" "),t._l(t.tableData.payload.data,(function(e){return a("tr",{on:{click:function(a){return t.onRowClick(e)}}},[a("td",{staticClass:"pr-0",on:{click:function(t){t.stopPropagation()}}},[a("div",{staticClass:"custom-control custom-checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tableData.selected,expression:"tableData.selected"}],staticClass:"custom-control-input",attrs:{type:"checkbox",number:"",id:"row-checkbox-"+e.id,isabled:""},domProps:{value:e.id,checked:Array.isArray(t.tableData.selected)?t._i(t.tableData.selected,e.id)>-1:t.tableData.selected},on:{change:function(a){var s=t.tableData.selected,l=a.target,i=!!l.checked;if(Array.isArray(s)){var r=e.id,c=t._i(s,r);l.checked?c<0&&t.$set(t.tableData,"selected",s.concat([r])):c>-1&&t.$set(t.tableData,"selected",s.slice(0,c).concat(s.slice(c+1)))}else t.$set(t.tableData,"selected",i)}}}),t._v(" "),a("label",{staticClass:"custom-control-label",attrs:{for:"row-checkbox-"+e.id}})])]),t._v(" "),a("td",{staticClass:"cursor-pointer font-weight-semibold"},[t._v(t._s(e.name))]),t._v(" "),a("td",{staticClass:"cursor-pointer",attrs:{nowrap:""}},[t._v(t._s(e.code))]),t._v(" "),a("td",{staticClass:"cursor-pointer"},[t._v(t._s(e.country))])])}))],2)]),t._v(" "),a("rg-tables-pagination",{attrs:{"table-data-prop":t.tableData}})],1)])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-header-content header-elements-md-inline"},[e("div",{staticClass:"page-title d-flex"},[e("h4",[e("i",{staticClass:"icon-users2 mr-2"}),this._v(" "),e("span",{staticClass:"font-weight-semibold"},[this._v("Networks")]),this._v(" "),e("span",{staticClass:"pl-3 small"},[this._v("Manage, Networks")])]),this._v(" "),e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h6",[e("i",{staticClass:"icon-files-empty mr-2"}),this._v("\n                    No records found\n                ")])}],!1,null,null,null);e.default=i.exports}}]);