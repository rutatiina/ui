(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{QnYH:function(t,e,a){"use strict";a.r(e);var s={data:function(){return{report:{}}},watch:{"$route.query.page":function(t){this.tableData.url="/financial-accounts/reports/payments-received?page="+t}},mounted:function(){this.tableData.method="post",this.tableData.initiate=!0,this.tableRecordsPerPage(230,80,45),void 0===this.$route.query.page?this.tableData.url="/financial-accounts/reports/payments-received":this.tableData.url="/financial-accounts/reports/payments-received?page="+this.$route.query.page},methods:{}},i=a("KHd+"),r=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"page-header page-header-light d-print-none"},[t._m(0),t._v(" "),a("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[a("div",{staticClass:"d-flex"},[a("div",{staticClass:"breadcrumb"},[a("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[a("i",{staticClass:"icon-home2 mr-2"}),t._v(" "),a("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(" "+t._s(t._f("truncate")(this.$root.tenant.name,30))+" ")])]),t._v(" "),a("span",{staticClass:"breadcrumb-item"},[t._v("Accounting")]),t._v(" "),a("span",{staticClass:"breadcrumb-item"},[t._v("Reports")]),t._v(" "),a("span",{staticClass:"breadcrumb-item"},[t._v("Payments Received")]),t._v(" "),a("span",{staticClass:"breadcrumb-item active"},[t._v("Payments Received")])]),t._v(" "),t._m(1)])])]),t._v(" "),a("div",{staticClass:"content border-0 p-0"},[a("div",{staticClass:"card shadow-none border-0 m-auto"},[a("div",{staticClass:"card-header text-center"},[a("h6",{staticClass:"card-title"},[t._v(t._s(this.$root.tenant.name))]),t._v(" "),a("h3",{staticClass:"card-title"},[t._v("Payments Received")]),t._v(" "),a("p",[t._v("Basis: Accrual")]),t._v(" "),t.tableData.response?a("h6",[t._v("For "+t._s(t.tableData.response.opening_date)+" to "+t._s(t.tableData.response.closing_date))]):t._e()]),t._v(" "),a("div",{staticClass:"table-responsive overflow-visible"},[a("table",{staticClass:"table"},[t._m(2),t._v(" "),a("rg-tables-state"),t._v(" "),a("tbody",t._l(t.tableData.payload.data,(function(e){return a("tr",[a("td",[t._v(t._s(e.number))]),t._v(" "),a("td",[t._v(t._s(e.date))]),t._v(" "),a("td",[t._v(t._s(e.reference))]),t._v(" "),a("td",[t._v(t._s(e.contact_name))]),t._v(" "),a("td",[t._v(t._s(e.payment_mode))]),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td",{staticClass:"cursor-pointer font-weight-bold text-right"},[a("span",{staticClass:"text-slate-800"},[t._v(t._s(t.$root.numberFormat(e.total)))]),t._v(" "),a("small",[t._v(t._s(e.base_currency))])]),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td")])})),0)],1),t._v(" "),a("rg-tables-pagination",{attrs:{"table-data-prop":t.tableData}})],1),t._v(" "),a("div",{staticClass:"mb-5"})])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-header-content header-elements-md-inline"},[e("div",{staticClass:"page-title d-flex"},[e("h4",[e("i",{staticClass:"icon-stats-growth mr-2"}),this._v(" "),e("span",{staticClass:"font-weight-semibold"},[this._v("Reports")])]),this._v(" "),e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("PAYMENT NUMBER")]),t._v(" "),a("th",[t._v("DATE")]),t._v(" "),a("th",[t._v("REFERENCE")]),t._v(" "),a("th",[t._v("CUSTOMER NAME")]),t._v(" "),a("th",[t._v("PAYMENT MODE")]),t._v(" "),a("th",[t._v("NOTES")]),t._v(" "),a("th",[t._v("INVOICE #")]),t._v(" "),a("th",{staticClass:"text-right"},[t._v("AMOUNT (FCY)")]),t._v(" "),a("th",{staticClass:"text-right"},[t._v("UNUSED AMOUNT (FCY)")]),t._v(" "),a("th",{staticClass:"text-right"},[t._v("AMOUNT (BCY)")]),t._v(" "),a("th",{staticClass:"text-right"},[t._v("UNUSED AMOUNT (BCY)")])])])}],!1,null,null,null);e.default=r.exports}}]);