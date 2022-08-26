(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{Kh18:function(t,a,e){"use strict";e.r(a);var s={data:function(){return{}},watch:{"$route.query.page":function(t){this.tableData.url=this.$router.currentRoute.path+"?page="+t}},mounted:function(){this.$root.appMenu("accounting"),this.tableData.searchColumnOptions=[{value:"date",text:"Date"},{value:"number",text:"Document No"},{value:"reference",text:"Reference"},{value:"contact_name",text:"Contact name"},{value:"status",text:"Status"},{value:"expiry_date",text:"Expiry date"},{value:"total",text:"Total"}],this.tableData.initiate=!0,this.tableRecordsPerPage(230,80,45);void 0===this.$route.query.page?this.tableData.url=this.$router.currentRoute.path:this.tableData.url=this.$router.currentRoute.path+"?page="+this.$route.query.page},methods:{onRowClick:function(t){this.$router.push({path:"/cash-sales/"+t.id})}},ready:function(){},beforeUpdate:function(){},updated:function(){InputsCheckboxesRadios.initComponents()}},r=e("KHd+"),i=Object(r.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"page-header page-header-light"},[t._m(0),t._v(" "),e("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[e("div",{staticClass:"d-flex"},[e("div",{staticClass:"breadcrumb"},[e("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[e("i",{staticClass:"icon-home2 mr-2"}),t._v(" "),e("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(" "+t._s(t._f("truncate")(this.$root.tenant.name,30))+" ")])]),t._v(" "),e("span",{staticClass:"breadcrumb-item active"},[t._v("Cash sales")])]),t._v(" "),t._m(1)]),t._v(" "),e("div",{staticClass:"header-elements"},[e("div",{staticClass:"breadcrumb justify-content-center"},[e("router-link",{staticClass:"btn btn-outline btn-primary border-primary text-primary-800 border-2 btn-sm rounded font-weight-bold mr-2",attrs:{to:"/cash-sales/create"}},[e("i",{staticClass:"icon-files-empty2 mr-2"}),t._v("\n                        New Cash sale\n                    ")]),t._v(" "),e("button",{staticClass:"btn btn-danger btn-sm rounded border-2 border-danger-400 btn-icon pl-2 pr-2",attrs:{type:"button"},on:{click:function(a){t.tableData.settingsDisplay=!t.tableData.settingsDisplay}}},[e("i",{staticClass:"icon-cog"})])],1)])])]),t._v(" "),e("div",{staticClass:"content border-0 p-0"},[e("loading-animation"),t._v(" "),e("div",{staticClass:"card shadow-none rounded-0 border-0"},[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-hover"},[t._m(2),t._v(" "),e("rg-tables-state"),t._v(" "),e("tbody",t._l(t.tableData.payload.data,(function(a){return e("tr",{attrs:{title:"Created on "+a.created_at},on:{click:function(e){return t.onRowClick(a)}}},[e("td",{staticClass:"cursor-pointer",attrs:{nowrap:""}},[t._v(t._s(a.date))]),t._v(" "),e("td",{staticClass:"cursor-pointer"},[t._v(t._s(a.number_string))]),t._v(" "),e("td",{staticClass:"cursor-pointer"},[t._v(t._s(a.reference))]),t._v(" "),e("td",{staticClass:"cursor-pointer"},[t._v(t._s(a.contact_name))]),t._v(" "),e("td",{staticClass:"cursor-pointer"},[t._v(t._s(a.status))]),t._v(" "),e("td",{staticClass:"cursor-pointer"},[t._v(t._s(a.due_date))]),t._v(" "),e("td",{staticClass:"cursor-pointer font-weight-bold text-right"},[e("span",{staticClass:"text-slate-800"},[t._v(t._s(t.rgNumberFormat(a.total,2)))]),t._v(" "),e("small",[t._v(t._s(a.base_currency))])]),t._v(" "),e("td",{staticClass:"cursor-pointer font-weight-bold text-right"},[e("span",{staticClass:"text-danger-800"},[t._v(t._s(t.rgNumberFormat(a.balance,2)))]),t._v(" "),e("small",[t._v(t._s(a.base_currency))])])])})),0)],1),t._v(" "),e("rg-tables-pagination",{attrs:{"table-data-prop":t.tableData}})],1)])],1)])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"page-header-content header-elements-md-inline"},[a("div",{staticClass:"page-title d-flex"},[a("h4",[a("i",{staticClass:"icon-drawer3 mr-2"}),this._v(" "),a("span",{staticClass:"font-weight-semibold"},[this._v("Cash sales")])]),this._v(" "),a("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[a("i",{staticClass:"icon-more"})])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[a("i",{staticClass:"icon-more"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",{staticClass:"table-active"},[e("th",{staticClass:"font-weight-bold",attrs:{scope:"col"}},[t._v("Date")]),t._v(" "),e("th",{staticClass:"font-weight-bold",attrs:{scope:"col",nowrap:""}},[t._v("Document No")]),t._v(" "),e("th",{staticClass:"font-weight-bold",attrs:{scope:"col",nowrap:""}},[t._v("Reference")]),t._v(" "),e("th",{staticClass:"font-weight-bold",attrs:{scope:"col",nowrap:""}},[t._v("Contact name")]),t._v(" "),e("th",{staticClass:"font-weight-bold",attrs:{scope:"col"}},[t._v("Status")]),t._v(" "),e("th",{staticClass:"font-weight-bold",attrs:{scope:"col",nowrap:""}},[t._v("Due date")]),t._v(" "),e("th",{staticClass:"font-weight-bold text-right",attrs:{scope:"col",nowrap:""}},[t._v("Total")]),t._v(" "),e("th",{staticClass:"font-weight-bold text-right",attrs:{scope:"col",nowrap:""}},[t._v("Balance")])])])}],!1,null,null,null);a.default=i.exports}}]);