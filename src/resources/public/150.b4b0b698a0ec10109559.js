(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{IUCG:function(t,e,a){"use strict";a.r(e);var s={data:function(){return{}},watch:{"$route.query.page":function(t){this.tableData.url=this.$router.currentRoute.path+"?page="+t}},mounted:function(){this.tableData.searchColumnOptions=[{value:"date",text:"Date"},{value:"number",text:"Document No"},{value:"reference",text:"Reference"},{value:"contact_name",text:"Contact name"},{value:"status",text:"Status"},{value:"expiry_date",text:"Expiry date"},{value:"total",text:"Total"}],this.tableData.initiate=!0,this.tableRecordsPerPage(230,80,45);void 0===this.$route.query.page?this.tableData.url=this.$router.currentRoute.path:this.tableData.url=this.$router.currentRoute.path+"?page="+this.$route.query.page},methods:{onRowClick:function(t){this.$router.push({path:"/journal-entries/"+t.id})}},ready:function(){},beforeUpdate:function(){},updated:function(){}},r=a("KHd+"),i=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"page-header page-header-light"},[a("div",{staticClass:"page-header-content header-elements-md-inline"},[t._m(0),t._v(" "),a("div",{staticClass:"header-elements"},[a("div",{staticClass:"breadcrumb justify-content-center"},[a("router-link",{staticClass:"btn btn-outline btn-primary border-primary text-primary-800 border-2 btn-sm font-weight-bold mr-2",attrs:{to:"/journal-entries/create"}},[a("i",{staticClass:"icon-files-empty2 mr-2"}),t._v("\n                        New Journal\n                    ")])],1)])]),t._v(" "),a("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[a("div",{staticClass:"d-flex"},[a("div",{staticClass:"breadcrumb"},[a("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[a("i",{staticClass:"icon-home2 mr-2"}),t._v(" "),a("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(" "+t._s(t._f("truncate")(this.$root.tenant.name,30))+" ")])]),t._v(" "),a("span",{staticClass:"breadcrumb-item"},[t._v("Financial Accounting")]),t._v(" "),a("span",{staticClass:"breadcrumb-item active"},[t._v("Journal Entries")])]),t._v(" "),t._m(1)])])]),t._v(" "),a("div",{staticClass:"content border-0 p-0"},[a("loading-animation"),t._v(" "),a("div",{staticClass:"card shadow-none rounded-0 border-0"},[a("div",{staticClass:"table-responsive overflow-visible"},[a("table",{staticClass:"table table-hover"},[t._m(2),t._v(" "),a("rg-tables-state"),t._v(" "),a("tbody",t._l(t.tableData.payload.data,(function(e){return a("tr",{on:{click:function(a){return t.onRowClick(e)}}},[a("td",{staticClass:"cursor-pointer",attrs:{nowrap:""}},[t._v(t._s(e.date))]),t._v(" "),a("td",{staticClass:"cursor-pointer"},[t._v(t._s(e.reference))]),t._v(" "),a("td",{staticClass:"cursor-pointer font-weight-bold text-right",attrs:{nowrap:""}},[a("span",{staticClass:"text-slate-800"},[t._v(t._s(t.$root.numberFormat(e.total)))]),t._v(" "),a("small",[t._v(t._s(e.currency))])])])})),0)],1),t._v(" "),a("rg-tables-pagination",{attrs:{"table-data-prop":t.tableData}})],1)])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-title d-flex"},[e("h4",[e("i",{staticClass:"icon-drawer3 mr-2"}),this._v(" "),e("span",{staticClass:"font-weight-semibold"},[this._v("Journals")])]),this._v(" "),e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",{},[e("tr",{staticClass:"table-active"},[e("th",{staticClass:"col-auto font-weight-bold"},[this._v("Date")]),this._v(" "),e("th",{staticClass:"col font-weight-bold",attrs:{nowrap:""}},[this._v("Reference")]),this._v(" "),e("th",{staticClass:"col font-weight-bold text-right",attrs:{nowrap:""}},[this._v("Total")])])])}],!1,null,null,null);e.default=i.exports}}]);