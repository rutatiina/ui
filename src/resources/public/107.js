(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{qHgu:function(t,e,a){"use strict";a.r(e);var s=a("o0o1"),r=a.n(s);function i(t,e,a,s,r,i,n){try{var c=t[i](n),o=c.value}catch(t){return void a(t)}c.done?e(o):Promise.resolve(o).then(s,r)}var n={data:function(){return{report:{}}},watch:{},mounted:function(){this.generate()},methods:{generate:function(){var t,e=this;return(t=r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,axios.post("/financial-accounts/reports/sales-by-customer").then((function(t){e.report=t.data}));case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})),function(){var e=this,a=arguments;return new Promise((function(s,r){var n=t.apply(e,a);function c(t){i(n,s,r,c,o,"next",t)}function o(t){i(n,s,r,c,o,"throw",t)}c(void 0)}))})()}}},c=a("KHd+"),o=Object(c.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"page-header page-header-light d-print-none"},[t._m(0),t._v(" "),a("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[a("div",{staticClass:"d-flex"},[a("div",{staticClass:"breadcrumb"},[a("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[a("i",{staticClass:"icon-home2 mr-2"}),t._v(" "),a("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(" "+t._s(t._f("truncate")(this.$root.tenant.name,30))+" ")])]),t._v(" "),a("span",{staticClass:"breadcrumb-item"},[t._v("Accounting")]),t._v(" "),a("span",{staticClass:"breadcrumb-item"},[t._v("Reports")]),t._v(" "),a("span",{staticClass:"breadcrumb-item"},[t._v("Sales")]),t._v(" "),a("span",{staticClass:"breadcrumb-item active"},[t._v("Sales by Customer")])]),t._v(" "),t._m(1)])])]),t._v(" "),a("div",{staticClass:"content border-0 p-0"},[a("div",{staticClass:"card max-width-1280 shadow-none border-0 m-auto"},[a("div",{staticClass:"card-header text-center"},[a("h6",{staticClass:"card-title"},[t._v(t._s(this.$root.tenant.name))]),t._v(" "),a("h3",{staticClass:"card-title"},[t._v("Sales by Customer")]),t._v(" "),a("p",[t._v("Basis: Accrual")]),t._v(" "),a("h6",[t._v("For "+t._s(t.report.opening_date)+" to "+t._s(t.report.closing_date))])]),t._v(" "),a("div",{staticClass:"table-responsive overflow-visible"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",{staticStyle:{width:"60%"}},[t._v("NAME")]),t._v(" "),a("th",{staticClass:"text-right"},[t._v("INVOICE COUNT")]),t._v(" "),a("th",{staticClass:"text-right"},[t._v("SALES "),a("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(t._s(t.report.currency))])]),t._v(" "),a("th",{staticClass:"text-right"},[t._v("SALES WITH TAX "),a("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(t._s(t.report.currency))])])])]),t._v(" "),a("tbody",t._l(t.report.contacts,(function(e){return a("tr",[a("td",{staticClass:"pl-4 text-primary"},[t._v(t._s(e.name))]),t._v(" "),a("td",{staticClass:"text-right"},[t._v(t._s(e.invoice_count))]),t._v(" "),a("td",{staticClass:"text-right"},[a("span",[t._v(t._s(t.rgNumberFormat(e.sales,2)))])]),t._v(" "),a("td",{staticClass:"text-right"},[a("span",[t._v(t._s(t.rgNumberFormat(e.sales_with_tax,2)))])])])})),0),t._v(" "),a("tfoot",[a("tr",{class:[t.report.balancingFigure&&0!==t.report.balancingFigure?"bg-danger":""]},[a("td",{staticClass:"font-weight-bold"},[t._v("Total")]),t._v(" "),a("td",{staticClass:"text-right font-weight-bold"},[t._v(t._s(t.rgNumberFormat(t.report.total_invoices,2)))]),t._v(" "),a("td",{staticClass:"text-right font-weight-bold"},[t._v(t._s(t.rgNumberFormat(t.report.total_sales,2)))]),t._v(" "),a("td",{staticClass:"text-right font-weight-bold"},[t._v(t._s(t.rgNumberFormat(t.report.total_sales_with_tax,2)))])])])])]),t._v(" "),a("div",{staticClass:"mb-5"})])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-header-content header-elements-md-inline"},[e("div",{staticClass:"page-title d-flex"},[e("h4",[e("i",{staticClass:"icon-stats-growth mr-2"}),this._v(" "),e("span",{staticClass:"font-weight-semibold"},[this._v("Reports")])]),this._v(" "),e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])}],!1,null,null,null);e.default=o.exports}}]);