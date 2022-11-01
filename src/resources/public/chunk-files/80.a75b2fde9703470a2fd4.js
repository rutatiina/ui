(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{Bmab:function(t,a,e){"use strict";e.r(a);var s=e("o0o1"),r=e.n(s);function n(t,a,e,s,r,n,i){try{var o=t[n](i),c=o.value}catch(t){return void e(t)}o.done?a(c):Promise.resolve(c).then(s,r)}var i={data:function(){return{report:{}}},watch:{},mounted:function(){this.generate()},methods:{generate:function(){var t,a=this;return(t=r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,axios.post("/financial-accounts/reports/inventory-summary").then((function(t){a.report=t.data}));case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})),function(){var a=this,e=arguments;return new Promise((function(s,r){var i=t.apply(a,e);function o(t){n(i,s,r,o,c,"next",t)}function c(t){n(i,s,r,o,c,"throw",t)}o(void 0)}))})()}}},o=e("KHd+"),c=Object(o.a)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"page-header page-header-light d-print-none"},[t._m(0),t._v(" "),e("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[e("div",{staticClass:"d-flex"},[e("div",{staticClass:"breadcrumb"},[e("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[e("i",{staticClass:"icon-home2 mr-2"}),t._v(" "),e("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(" "+t._s(t._f("truncate")(this.$root.tenant.name,30))+" ")])]),t._v(" "),e("span",{staticClass:"breadcrumb-item"},[t._v("Accounting")]),t._v(" "),e("span",{staticClass:"breadcrumb-item"},[t._v("Reports")]),t._v(" "),e("span",{staticClass:"breadcrumb-item"},[t._v("Inventory")]),t._v(" "),e("span",{staticClass:"breadcrumb-item active"},[t._v("Inventory summary")])]),t._v(" "),t._m(1)])])]),t._v(" "),e("div",{staticClass:"content border-0 p-0"},[e("div",{staticClass:"card shadow-none border-0 m-auto"},[e("div",{staticClass:"card-header text-center"},[e("h6",{staticClass:"card-title"},[t._v(t._s(this.$root.tenant.name))]),t._v(" "),e("h3",{staticClass:"card-title"},[t._v("Inventory summary")]),t._v(" "),e("h6",[t._v("As of "+t._s((new Date).toLocaleDateString()))])]),t._v(" "),e("div",{staticClass:"table-responsive overflow-visible"},[e("table",{staticClass:"table table-bordered"},[t._m(2),t._v(" "),e("tbody",t._l(t.report.items,(function(a){return e("tr",[e("td",[t._v(t._s(a.name))]),t._v(" "),e("td",[t._v(t._s(a.sku))]),t._v(" "),e("td",{staticClass:"text-right"},[t._v(t._s(t.$root.numberFormat(a.quantity_ordered)))]),t._v(" "),e("td",{staticClass:"text-right"},[t._v(t._s(t.$root.numberFormat(a.quantity_in)))]),t._v(" "),e("td",{staticClass:"text-right"},[t._v(t._s(t.$root.numberFormat(a.quantity_out)))]),t._v(" "),e("td",{staticClass:"text-right"},[t._v(t._s(t.$root.numberFormat(a.stock_on_hand)))]),t._v(" "),e("td",{staticClass:"text-right"},[t._v(t._s(t.$root.numberFormat(a.stock_committed)))]),t._v(" "),e("td",{staticClass:"text-right"},[t._v(t._s(t.$root.numberFormat(a.stock_available_for_sale)))])])})),0)])]),t._v(" "),e("div",{staticClass:"mb-5"})])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"page-header-content header-elements-md-inline"},[a("div",{staticClass:"page-title d-flex"},[a("h4",[a("i",{staticClass:"icon-stats-growth mr-2"}),this._v(" "),a("span",{staticClass:"font-weight-semibold"},[this._v("Reports")])]),this._v(" "),a("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[a("i",{staticClass:"icon-more"})])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[a("i",{staticClass:"icon-more"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{attrs:{rowspan:"2"}},[t._v("ITEM NAME")]),t._v(" "),e("th",{attrs:{rowspan:"2"}},[t._v("SKU")]),t._v(" "),e("th",{staticClass:"text-right",attrs:{rowspan:"2"}},[t._v("QUANTITY ORDERED")]),t._v(" "),e("th",{staticClass:"text-right",attrs:{rowspan:"2"}},[t._v("QUANTITY IN")]),t._v(" "),e("th",{staticClass:"text-right",attrs:{rowspan:"2"}},[t._v("QUANTITY OUT")]),t._v(" "),e("th",{staticClass:"text-center pt-1 pb-1",attrs:{colspan:"3"}},[t._v("STOCK DETAIL")])]),t._v(" "),e("tr",[e("th",{staticClass:"text-right pt-1 pb-1"},[t._v("STOCK ON HAND")]),t._v(" "),e("th",{staticClass:"text-right pt-1 pb-1"},[t._v("COMMITTED STOCK")]),t._v(" "),e("th",{staticClass:"text-right pt-1 pb-1"},[t._v("AVAILABLE FOR SALE")])])])}],!1,null,null,null);a.default=c.exports}}]);