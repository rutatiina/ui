(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{m3Dc:function(t,a,e){"use strict";e.r(a);var s={name:"CrbtTransactionsIndex",components:{},data:function(){return{}},watch:{"$route.query.page":function(t){this.tableData.url=this.$router.currentRoute.path+"?page="+t}},mounted:function(){this.$root.appMenu("crbt"),this.tableData.initiate=!0,this.tableRecordsPerPage(230,80,45);void 0===this.$route.query.page?this.tableData.url=this.$router.currentRoute.path:this.tableData.url=this.$router.currentRoute.path+"?page="+this.$route.query.page},methods:{tableRowDestroy:function(t){}},ready:function(){},beforeUpdate:function(){},updated:function(){}},r=e("KHd+"),i=Object(r.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"page-header page-header-light"},[t._m(0),t._v(" "),e("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[e("div",{staticClass:"d-flex"},[e("div",{staticClass:"breadcrumb"},[e("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[e("i",{staticClass:"icon-home2 mr-2"}),t._v(" "),e("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(" "+t._s(t._f("truncate")(this.$root.tenant.name,30))+" ")])]),t._v(" "),e("span",{staticClass:"breadcrumb-item"},[t._v("CRBT")]),t._v(" "),e("span",{staticClass:"breadcrumb-item active"},[t._v("Upload Report")])]),t._v(" "),t._m(1)]),t._v(" "),e("div",{staticClass:"header-elements"},[e("div",{staticClass:"breadcrumb justify-content-center"},[e("router-link",{staticClass:" btn btn-danger btn-sm rounded-round font-weight-bold",attrs:{to:"/crbt/statements/upload"}},[e("i",{staticClass:"icon-file-upload mr-2"}),t._v("\n                        Upload Statement\n                    ")])],1)])])]),t._v(" "),e("div",{staticClass:"content border-0 p-0"},[e("loading-animation"),t._v(" "),e("div",{staticClass:"card shadow-none rounded-0 border-0"},[this.$root.loading||0!=t.tableData.payload.data.length?t._e():e("div",{staticClass:"card-body"},[t._m(2)]),t._v(" "),e("div",{staticClass:"table-responsive border-top-0"},[e("table",{staticClass:"table table-hover"},[e("tbody",[t._m(3),t._v(" "),t._l(t.tableData.payload.data,(function(a){return e("tr",[e("td",[t._v(t._s(a.country))]),t._v(" "),e("td",{attrs:{nowrap:""}},[t._v(t._s(a.network))]),t._v(" "),e("td",[t._v(t._s(a.label))]),t._v(" "),e("td",[t._v(t._s(a.artiste))]),t._v(" "),e("td",[t._v(t._s(a.year))]),t._v(" "),e("td",[t._v(t._s(a.month))]),t._v(" "),e("td",{staticClass:"text-right font-weight-bold"},[t._v(t._s(t.rgNumberFormat(a.gross_revenue)))])])}))],2)]),t._v(" "),e("div",{staticClass:"card card-body border-0 text-center shadow-0"},[e("ul",{staticClass:"pagination pagination-separated pagination-rounded align-self-center"},[e("li",{staticClass:"page-item"},[e("router-link",{staticClass:"page-link",attrs:{to:t.$router.currentRoute.path+"?page="+(t.tableData.payload.current_page-1)}},[t._v("←   Prev")])],1),t._v(" "),t._l(t.tableData.payload.last_page,(function(a){return a<=5?e("li",{staticClass:"page-item",class:[t.tableData.payload.current_page==a?t.tableData.activeClass:"",t.tableData.errorClass]},[e("router-link",{staticClass:"page-link",attrs:{to:t.$router.currentRoute.path+"?page="+a}},[t._v(t._s(a))])],1):t._e()})),t._v(" "),e("li",{staticClass:"page-item"},[e("router-link",{staticClass:"page-link",attrs:{to:t.$router.currentRoute.path+"?page="+(t.tableData.payload.current_page+1)}},[t._v("Next   →")])],1)],2)])])])],1)])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"page-header-content header-elements-md-inline"},[a("div",{staticClass:"page-title d-flex"},[a("h4",[a("i",{staticClass:"icon-file-plus"}),this._v("\n                    CRBT Statements\n                ")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[a("i",{staticClass:"icon-more"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("h6",[a("i",{staticClass:"icon-files-empty mr-2"}),this._v("\n                    No records found\n                ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",{staticClass:"table-active"},[e("th",{staticClass:"font-weight-bold",attrs:{scope:"col"}},[t._v("Country")]),t._v(" "),e("th",{staticClass:"font-weight-bold",attrs:{scope:"col"}},[t._v("Network")]),t._v(" "),e("th",{staticClass:"font-weight-bold",attrs:{scope:"col"}},[t._v("Label")]),t._v(" "),e("th",{staticClass:"font-weight-bold",attrs:{scope:"col",nowrap:""}},[t._v("Artist")]),t._v(" "),e("th",{staticClass:"font-weight-bold",attrs:{scope:"col",nowrap:""}},[t._v("Year")]),t._v(" "),e("th",{staticClass:"font-weight-bold",attrs:{scope:"col",nowrap:""}},[t._v("Month")]),t._v(" "),e("th",{staticClass:"font-weight-bold text-right",attrs:{scope:"col",nowrap:""}},[t._v("Gross Revenue")])])}],!1,null,null,null);a.default=i.exports}}]);