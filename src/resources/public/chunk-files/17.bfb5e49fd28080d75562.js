(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{JLGL:function(t,e,a){(t.exports=a("81jI")(!1)).push([t.i,"\n.__report-content__ .mx-input-append {\n    display:none !important;\n}\n.__report-content__ .mx-datepicker input {\n    border-top:0px !important;\n    border-right:0px !important;\n    border-left:0px !important;\n    width:100px !important;\n    padding-right:10px !important;\n    text-align: center;\n}\n.__report-content__ .mx-datepicker {\n    width: 130px !important;\n}\n",""])},VYDb:function(t,e,a){var r=a("JLGL");"string"==typeof r&&(r=[[t.i,r,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a("SAvX")(r,s);r.locals&&(t.exports=r.locals)},iBPX:function(t,e,a){"use strict";a("VYDb")},zXKa:function(t,e,a){"use strict";a.r(e);var r=a("Zipl"),s=a.n(r);function n(t,e,a,r,s,n,i){try{var o=t[n](i),c=o.value}catch(t){return void a(t)}o.done?e(c):Promise.resolve(c).then(r,s)}var i={data:function(){return{report:{}}},watch:{"report.opening_date":function(t,e){this.changeDates(t,e)},"report.closing_date":function(t,e){this.changeDates(t,e)}},mounted:function(){this.generate()},methods:{generate:function(){var t,e=this;return(t=s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,axios.post("/financial-accounts/reports/sales-by-item",{opening_date:e.report.opening_date,closing_date:e.report.closing_date}).then((function(t){e.report=t.data}));case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})),function(){var e=this,a=arguments;return new Promise((function(r,s){var i=t.apply(e,a);function o(t){n(i,r,s,o,c,"next",t)}function c(t){n(i,r,s,o,c,"throw",t)}o(void 0)}))})()},changeDates:function(t,e){t===e||void 0===e||this.generate()}}},o=(a("iBPX"),a("C7zm")),c=Object(o.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"page-header page-header-light d-print-none"},[t._m(0),t._v(" "),a("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[a("div",{staticClass:"d-flex"},[a("div",{staticClass:"breadcrumb"},[a("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[a("i",{staticClass:"icon-home2 mr-2"}),t._v(" "),a("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(" "+t._s(t._f("truncate")(this.$root.tenant.name,30))+" ")])]),t._v(" "),a("span",{staticClass:"breadcrumb-item"},[t._v("Accounting")]),t._v(" "),a("span",{staticClass:"breadcrumb-item"},[t._v("Reports")]),t._v(" "),a("span",{staticClass:"breadcrumb-item"},[t._v("Sales")]),t._v(" "),a("span",{staticClass:"breadcrumb-item active"},[t._v("Sales by Item")])]),t._v(" "),t._m(1)]),t._v(" "),a("div",{staticClass:"header-elements d-none"},[a("div",{staticClass:"breadcrumb justify-content-center"},[a("a",{staticClass:"breadcrumb-elements-item font-weight-bold",attrs:{href:"javascript:"},on:{click:function(e){return e.preventDefault(),t.generate(e)}}},[a("i",{staticClass:"icon-loop3 mr-1"}),t._v(" Refresh\n                    ")])])])])]),t._v(" "),a("div",{staticClass:"content border-0 p-0 __report-content__"},[a("div",{staticClass:"card max-width-1280 shadow-none border-0 m-auto"},[a("div",{staticClass:"card-header text-center"},[a("h6",{staticClass:"card-title"},[t._v(t._s(this.$root.tenant.name))]),t._v(" "),a("h3",{staticClass:"card-title"},[t._v("Sales by Item")]),t._v(" "),a("p",[t._v("Basis: Accrual")]),t._v(" "),a("h6",[t._v("Form \n                "),a("date-picker",{staticClass:"font-weight-bold rounded-0 border-0",attrs:{valueType:"format",lang:t.vue2DatePicker.lang,placeholder:"Choose date",clearable:!1},model:{value:t.report.opening_date,callback:function(e){t.$set(t.report,"opening_date",e)},expression:"report.opening_date"}}),t._v("\n                to \n                "),a("date-picker",{staticClass:"font-weight-bold rounded-0 border-0",attrs:{valueType:"format",lang:t.vue2DatePicker.lang,placeholder:"Choose date"},model:{value:t.report.closing_date,callback:function(e){t.$set(t.report,"closing_date",e)},expression:"report.closing_date"}})],1)]),t._v(" "),a("div",{staticClass:"table-responsive overflow-visible"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",{staticStyle:{width:"60%"}},[t._v("ITEM NAME")]),t._v(" "),a("th",{staticClass:"text-right"},[t._v("QUANTITY SOLD")]),t._v(" "),a("th",{staticClass:"text-right"},[t._v("AMOUNT "),a("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(t._s(t.report.currency))])]),t._v(" "),a("th",{staticClass:"text-right"},[t._v("AVERAGE PRICE "),a("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(t._s(t.report.currency))])])])]),t._v(" "),a("tbody",t._l(t.report.items,(function(e){return a("tr",[a("td",{staticClass:"pl-4"},[t._v(t._s(e.name))]),t._v(" "),a("td",{staticClass:"text-right"},[t._v(t._s(t.$root.numberFormat(e.total_quantity)))]),t._v(" "),a("td",{staticClass:"text-right"},[a("span",[t._v(t._s(t.$root.numberFormat(e.total_total)))])]),t._v(" "),a("td",{staticClass:"text-right"},[a("span",[t._v(t._s(t.$root.numberFormat(e.avg_rate)))])])])})),0),t._v(" "),a("tfoot",[a("tr",[a("td",{staticClass:"font-weight-bold"},[t._v("Total")]),t._v(" "),a("td",{staticClass:"text-right font-weight-bold"},[t._v(t._s(t.$root.numberFormat(t.report.total_quantity)))]),t._v(" "),a("td",{staticClass:"text-right font-weight-bold"},[t._v(t._s(t.$root.numberFormat(t.report.total_amount)))]),t._v(" "),a("td",{staticClass:"text-right font-weight-bold"},[t._v(t._s(t.$root.numberFormat(t.report.total_avg_rate)))])])])])]),t._v(" "),a("div",{staticClass:"mb-5"})])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-header-content header-elements-md-inline"},[e("div",{staticClass:"page-title d-flex"},[e("h4",[e("i",{staticClass:"icon-stats-growth mr-2"}),this._v(" "),e("span",{staticClass:"font-weight-semibold"},[this._v("Reports")])]),this._v(" "),e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])}],!1,null,null,null);e.default=c.exports}}]);