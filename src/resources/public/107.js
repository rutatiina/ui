(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{X69J:function(t,a,e){"use strict";e.r(a);var s={data:function(){return{report:{}}},watch:{"$route.query.page":function(t){this.tableData.url="/financial-accounts/reports/invoice-details?page="+t}},mounted:function(){this.tableData.method="post",this.tableData.initiate=!0,this.tableRecordsPerPage(230,80,45),void 0===this.$route.query.page?this.tableData.url="/financial-accounts/reports/invoice-details":this.tableData.url="/financial-accounts/reports/invoice-details?page="+this.$route.query.page},methods:{}},i=e("KHd+"),r=Object(i.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"page-header page-header-light d-print-none"},[t._m(0),t._v(" "),e("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[e("div",{staticClass:"d-flex"},[e("div",{staticClass:"breadcrumb"},[e("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[e("i",{staticClass:"icon-home2 mr-2"}),t._v(" "),e("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(" "+t._s(t._f("truncate")(this.$root.tenant.name,30))+" ")])]),t._v(" "),e("span",{staticClass:"breadcrumb-item"},[t._v("Accounting")]),t._v(" "),e("span",{staticClass:"breadcrumb-item"},[t._v("Reports")]),t._v(" "),e("span",{staticClass:"breadcrumb-item"},[t._v("Receivables")]),t._v(" "),e("span",{staticClass:"breadcrumb-item active"},[t._v("Invoice Details")])]),t._v(" "),t._m(1)])])]),t._v(" "),e("div",{staticClass:"content border-0 p-0"},[e("div",{staticClass:"card max-width-1280 shadow-none border-0 m-auto"},[e("div",{staticClass:"card-header text-center"},[e("h6",{staticClass:"card-title"},[t._v(t._s(this.$root.tenant.name))]),t._v(" "),e("h3",{staticClass:"card-title"},[t._v("Invoice Details")]),t._v(" "),e("p",[t._v("Basis: Accrual")]),t._v(" "),t.tableData.response?e("h6",[t._v("For "+t._s(t.tableData.response.opening_date)+" to "+t._s(t.tableData.response.closing_date))]):t._e()]),t._v(" "),e("div",{staticClass:"table-responsive overflow-visible"},[e("table",{staticClass:"table"},[t._m(2),t._v(" "),e("rg-tables-state"),t._v(" "),e("tbody",t._l(t.tableData.payload.data,(function(a){return e("tr",[e("td",[t._v(t._s(a.status))]),t._v(" "),e("td",[t._v(t._s(a.date))]),t._v(" "),e("td",[t._v(t._s(a.due_date))]),t._v(" "),e("td",[t._v(t._s(a.number))]),t._v(" "),e("td",[t._v(t._s(a.order_number))]),t._v(" "),e("td",[t._v(t._s(a.contact_name))]),t._v(" "),e("td",{staticClass:"cursor-pointer font-weight-bold text-right"},[e("span",{staticClass:"text-slate-800"},[t._v(t._s(t.rgNumberFormat(a.total,2)))]),t._v(" "),e("small",[t._v(t._s(a.base_currency))])]),t._v(" "),e("td",{staticClass:"cursor-pointer font-weight-bold text-right"},[e("span",{staticClass:"text-danger-800"},[t._v(t._s(t.rgNumberFormat(a.balance,2)))]),t._v(" "),e("small",[t._v(t._s(a.base_currency))])])])})),0)],1),t._v(" "),e("rg-tables-pagination",{attrs:{"table-data-prop":t.tableData}})],1),t._v(" "),e("div",{staticClass:"mb-5"})])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"page-header-content header-elements-md-inline"},[a("div",{staticClass:"page-title d-flex"},[a("h4",[a("i",{staticClass:"icon-stats-growth mr-2"}),this._v(" "),a("span",{staticClass:"font-weight-semibold"},[this._v("Reports")])]),this._v(" "),a("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[a("i",{staticClass:"icon-more"})])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[a("i",{staticClass:"icon-more"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",[t._v("STATUS")]),t._v(" "),e("th",[t._v("INVOICE DATE")]),t._v(" "),e("th",[t._v("DUE DATE")]),t._v(" "),e("th",[t._v("INVOICE #")]),t._v(" "),e("th",[t._v("ORDER NUMBER")]),t._v(" "),e("th",[t._v("CUSTOMER NAME")]),t._v(" "),e("th",{staticClass:"text-right"},[t._v("TOTAL")]),t._v(" "),e("th",{staticClass:"text-right"},[t._v("BALANCE")])])])}],!1,null,null,null);a.default=r.exports}}]);