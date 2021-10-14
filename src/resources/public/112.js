(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{zXKa:function(t,a,e){"use strict";e.r(a);var s=e("o0o1"),r=e.n(s);function i(t,a,e,s,r,i,n){try{var c=t[i](n),o=c.value}catch(t){return void e(t)}c.done?a(o):Promise.resolve(o).then(s,r)}var n={data:function(){return{report:{}}},watch:{},mounted:function(){this.generate()},methods:{generate:function(){var t,a=this;return(t=r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,axios.post("/financial-accounts/reports/sales-by-item").then((function(t){a.report=t.data}));case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})),function(){var a=this,e=arguments;return new Promise((function(s,r){var n=t.apply(a,e);function c(t){i(n,s,r,c,o,"next",t)}function o(t){i(n,s,r,c,o,"throw",t)}c(void 0)}))})()}}},c=e("KHd+"),o=Object(c.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"page-header page-header-light d-print-none"},[t._m(0),t._v(" "),e("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[e("div",{staticClass:"d-flex"},[e("div",{staticClass:"breadcrumb"},[e("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[e("i",{staticClass:"icon-home2 mr-2"}),t._v(" "),e("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(" "+t._s(t._f("truncate")(this.$root.tenant.name,30))+" ")])]),t._v(" "),e("span",{staticClass:"breadcrumb-item"},[t._v("Accounting")]),t._v(" "),e("span",{staticClass:"breadcrumb-item"},[t._v("Reports")]),t._v(" "),e("span",{staticClass:"breadcrumb-item"},[t._v("Sales")]),t._v(" "),e("span",{staticClass:"breadcrumb-item active"},[t._v("Sales by Item")])]),t._v(" "),t._m(1)])])]),t._v(" "),e("div",{staticClass:"content border-0 p-0"},[e("div",{staticClass:"card max-width-1280 shadow-none border-0 m-auto"},[e("div",{staticClass:"card-header text-center"},[e("h6",{staticClass:"card-title"},[t._v(t._s(this.$root.tenant.name))]),t._v(" "),e("h3",{staticClass:"card-title"},[t._v("Sales by Item")]),t._v(" "),e("p",[t._v("Basis: Accrual")]),t._v(" "),e("h6",[t._v("For "+t._s(t.report.opening_date)+" to "+t._s(t.report.closing_date))])]),t._v(" "),e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table"},[e("thead",[e("tr",[e("th",{staticStyle:{width:"60%"}},[t._v("ITEM NAME")]),t._v(" "),e("th",{staticClass:"text-right"},[t._v("QUANTITY SOLD")]),t._v(" "),e("th",{staticClass:"text-right"},[t._v("AMOUNT "),e("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(t._s(t.report.currency))])]),t._v(" "),e("th",{staticClass:"text-right"},[t._v("AVERAGE PRICE "),e("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(t._s(t.report.currency))])])])]),t._v(" "),e("tbody",t._l(t.report.items,(function(a){return e("tr",[e("td",{staticClass:"pl-4 text-primary"},[t._v(t._s(a.name))]),t._v(" "),e("td",{staticClass:"text-right"},[t._v(t._s(t.rgNumberFormat(a.total_quantity)))]),t._v(" "),e("td",{staticClass:"text-right"},[e("span",[t._v(t._s(t.rgNumberFormat(a.total_total,2)))])]),t._v(" "),e("td",{staticClass:"text-right"},[e("span",[t._v(t._s(t.rgNumberFormat(a.avg_rate,2)))])])])})),0),t._v(" "),e("tfoot",[e("tr",[e("td",{staticClass:"font-weight-bold"},[t._v("Total")]),t._v(" "),e("td",{staticClass:"text-right font-weight-bold"},[t._v(t._s(t.rgNumberFormat(t.report.total_quantity,2)))]),t._v(" "),e("td",{staticClass:"text-right font-weight-bold"},[t._v(t._s(t.rgNumberFormat(t.report.total_amount,2)))]),t._v(" "),e("td",{staticClass:"text-right font-weight-bold"},[t._v(t._s(t.rgNumberFormat(t.report.total_avg_rate,2)))])])])])]),t._v(" "),e("div",{staticClass:"mb-5"})])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"page-header-content header-elements-md-inline"},[a("div",{staticClass:"page-title d-flex"},[a("h4",[a("i",{staticClass:"icon-stats-growth mr-2"}),this._v(" "),a("span",{staticClass:"font-weight-semibold"},[this._v("Reports")])]),this._v(" "),a("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[a("i",{staticClass:"icon-more"})])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[a("i",{staticClass:"icon-more"})])}],!1,null,null,null);a.default=o.exports}}]);