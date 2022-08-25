(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{"5g62":function(t,e,a){"use strict";a.r(e);var n=a("o0o1"),s=a.n(n),i=a("EyHm");function r(t,e,a,n,s,i,r){try{var c=t[i](r),o=c.value}catch(t){return void a(t)}c.done?e(o):Promise.resolve(o).then(n,s)}var c={name:"ApexChartsArea",components:{apexchart:a.n(i).a},data:function(){return{series:[],chartOptions:{}}},methods:{fetchMonthlyExpense:function(){var t,e=this;return(t=s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,axios.get("/financial-accounts/dashboard/incomes-and-expense").then((function(t){var a=t.data.chartOptions;a.yaxis.labels.formatter=function(t){return e.$root.tenant.base_currency+" "+e.rgNumberFormat(t,2)},a.xaxis.labels.formatter=function(t){return t},a.dataLabels.formatter=function(t,a){return e.rgNumberFormat(t)},e.series=t.data.series,e.chartOptions=a}));case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})),function(){var e=this,a=arguments;return new Promise((function(n,s){var i=t.apply(e,a);function c(t){r(i,n,s,c,o,"next",t)}function o(t){r(i,n,s,c,o,"throw",t)}c(void 0)}))})()}},mounted:function(){this.fetchMonthlyExpense()}},o=a("KHd+");function l(t,e,a,n,s,i,r){try{var c=t[i](r),o=c.value}catch(t){return void a(t)}c.done?e(o):Promise.resolve(o).then(n,s)}var d={data:function(){return{widgetData:0}},methods:{fetchWidgetData:function(){var t,e=this;return(t=s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,axios.get("/financial-accounts/widgets/total-expenses").then((function(t){e.widgetData=t.data}));case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})),function(){var e=this,a=arguments;return new Promise((function(n,s){var i=t.apply(e,a);function r(t){l(i,n,s,r,c,"next",t)}function c(t){l(i,n,s,r,c,"throw",t)}r(void 0)}))})()}},mounted:function(){this.fetchWidgetData()}};function u(t,e,a,n,s,i,r){try{var c=t[i](r),o=c.value}catch(t){return void a(t)}c.done?e(o):Promise.resolve(o).then(n,s)}var v={data:function(){return{widgetData:0}},methods:{fetchWidgetData:function(){var t,e=this;return(t=s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,axios.get("/financial-accounts/widgets/total-payables").then((function(t){e.widgetData=t.data}));case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})),function(){var e=this,a=arguments;return new Promise((function(n,s){var i=t.apply(e,a);function r(t){u(i,n,s,r,c,"next",t)}function c(t){u(i,n,s,r,c,"throw",t)}r(void 0)}))})()}},mounted:function(){this.fetchWidgetData()}};function h(t,e,a,n,s,i,r){try{var c=t[i](r),o=c.value}catch(t){return void a(t)}c.done?e(o):Promise.resolve(o).then(n,s)}var f={data:function(){return{widgetData:0}},methods:{fetchWidgetData:function(){var t,e=this;return(t=s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,axios.get("/financial-accounts/widgets/total-income").then((function(t){e.widgetData=t.data}));case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})),function(){var e=this,a=arguments;return new Promise((function(n,s){var i=t.apply(e,a);function r(t){h(i,n,s,r,c,"next",t)}function c(t){h(i,n,s,r,c,"throw",t)}r(void 0)}))})()}},mounted:function(){this.fetchWidgetData()}};function m(t,e,a,n,s,i,r){try{var c=t[i](r),o=c.value}catch(t){return void a(t)}c.done?e(o):Promise.resolve(o).then(n,s)}var p={data:function(){return{widgetData:0}},methods:{fetchWidgetData:function(){var t,e=this;return(t=s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,axios.get("/financial-accounts/widgets/total-income").then((function(t){e.widgetData=t.data}));case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})),function(){var e=this,a=arguments;return new Promise((function(n,s){var i=t.apply(e,a);function r(t){m(i,n,s,r,c,"next",t)}function c(t){m(i,n,s,r,c,"throw",t)}r(void 0)}))})()}},mounted:function(){this.fetchWidgetData()}},b={components:{ApexChartIncomesAndExpenses:Object(o.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"chart"}},[e("apexchart",{attrs:{type:"line",height:"450",options:this.chartOptions,series:this.series}})],1)}),[],!1,null,null,null).exports,TotalExpenses:Object(o.a)(d,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card card-body"},[a("div",{staticClass:"media"},[t._m(0),t._v(" "),a("div",{staticClass:"media-body text-right"},[a("h4",{staticClass:"font-weight-semibold mb-0"},[t._v(t._s(t.rgNumberFormat(t.widgetData,2)))]),t._v(" "),a("span",{staticClass:"badge badge-danger badge-pill font-weight-bold"},[t._v("Total Expenses")]),t._v(" "),a("span",{staticClass:"badge badge-secondary badge-pill font-weight-bold"},[t._v(t._s(t.$root.tenant.base_currency))])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mr-3 align-self-center"},[e("i",{staticClass:"icon-coin-dollar icon-3x text-danger-400"})])}],!1,null,null,null).exports,TotalPayable:Object(o.a)(v,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card card-body"},[a("div",{staticClass:"media"},[t._m(0),t._v(" "),a("div",{staticClass:"media-body text-right"},[a("h4",{staticClass:"font-weight-semibold mb-0"},[t._v(t._s(t.rgNumberFormat(t.widgetData,2)))]),t._v(" "),a("span",{staticClass:"badge bg-indigo-400 badge-pill font-weight-bold"},[t._v("Total Payable")]),t._v(" "),a("span",{staticClass:"badge badge-secondary badge-pill font-weight-bold"},[t._v(t._s(t.$root.tenant.base_currency))])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mr-3 align-self-center"},[e("i",{staticClass:"icon-price-tag icon-3x text-indigo-400"})])}],!1,null,null,null).exports,TotalIncome:Object(o.a)(f,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card card-body"},[a("div",{staticClass:"media"},[t._m(0),t._v(" "),a("div",{staticClass:"media-body text-right"},[a("h4",{staticClass:"font-weight-semibold mb-0"},[t._v(t._s(t.rgNumberFormat(t.widgetData,2)))]),t._v(" "),a("span",{staticClass:"badge bg-blue-400 badge-pill font-weight-bold"},[t._v("Total Income")]),t._v(" "),a("span",{staticClass:"badge badge-secondary badge-pill font-weight-bold"},[t._v(t._s(t.$root.tenant.base_currency))])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mr-3 align-self-center"},[e("i",{staticClass:"icon-cash3 icon-3x text-blue-400"})])}],!1,null,null,null).exports,TotalReceviable:Object(o.a)(p,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card card-body"},[a("div",{staticClass:"media"},[t._m(0),t._v(" "),a("div",{staticClass:"media-body text-right"},[a("h4",{staticClass:"font-weight-semibold mb-0"},[t._v(t._s(t.rgNumberFormat(t.widgetData,2)))]),t._v(" "),a("span",{staticClass:"badge badge-success badge-pill font-weight-bold"},[t._v("Total Receivable")]),t._v(" "),a("span",{staticClass:"badge badge-secondary badge-pill font-weight-bold"},[t._v(t._s(t.$root.tenant.base_currency))])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mr-3 align-self-center"},[e("i",{staticClass:"icon-stack-text icon-3x text-success-400"})])}],!1,null,null,null).exports},data:function(){return{}},watch:{},mounted:function(){this.$root.appMenu("workshop")},methods:{},ready:function(){},beforeUpdate:function(){},updated:function(){}},g=Object(o.a)(b,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"page-header page-header-light d-print-none"},[t._m(0),t._v(" "),a("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[a("div",{staticClass:"d-flex"},[a("div",{staticClass:"breadcrumb"},[a("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[a("i",{staticClass:"icon-home2 mr-2"}),t._v(" "),a("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(" "+t._s(t._f("truncate")(this.$root.tenant.name,30))+" ")])]),t._v(" "),a("span",{staticClass:"breadcrumb-item"},[t._v("Workshop")]),t._v(" "),a("span",{staticClass:"breadcrumb-item active"},[t._v("Dashboard")])]),t._v(" "),t._m(1)])])]),t._v(" "),a("div",{staticClass:"content border-0 p-0"},[a("div",{staticClass:"content max-width-1280"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6 col-xl-3"},[a("total-receviable")],1),t._v(" "),a("div",{staticClass:"col-sm-6 col-xl-3"},[a("total-payable")],1),t._v(" "),a("div",{staticClass:"col-sm-6 col-xl-3"},[a("total-income")],1),t._v(" "),a("div",{staticClass:"col-sm-6 col-xl-3"},[a("total-expenses")],1)]),t._v(" "),a("div",{staticClass:"card card-body shadow-none border-0 p-0"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("apex-chart-incomes-and-expenses")],1)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-header-content header-elements-md-inline"},[e("div",{staticClass:"page-title d-flex"},[e("h4",[e("i",{staticClass:"icon-stats-growth mr-2"}),this._v(" "),e("span",{staticClass:"font-weight-semibold"},[this._v("Dashboard")])]),this._v(" "),e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])}],!1,null,null,null);e.default=g.exports}}]);