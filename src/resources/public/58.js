(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{"2tCY":function(t,e,a){"use strict";a.r(e);var n=a("o0o1"),s=a.n(n);function i(t,e,a,n,s,i,r){try{var c=t[i](r),o=c.value}catch(t){return void a(t)}c.done?e(o):Promise.resolve(o).then(n,s)}var r={data:function(){return{columns:[],transactions:[]}},mounted:function(){this.$root.appMenu("crbt"),this.fetchStatementRevenueCalculationsPreview()},methods:{fetchStatementRevenueCalculationsPreview:function(){var t,e=this;return(t=s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,axios.get(e.$route.fullPath).then((function(t){e.columns=t.data.columns,e.transactions=t.data.transactions})).catch((function(t){console.log(t)})).finally((function(t){}));case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})),function(){var e=this,a=arguments;return new Promise((function(n,s){var r=t.apply(e,a);function c(t){i(r,n,s,c,o,"next",t)}function o(t){i(r,n,s,c,o,"throw",t)}c(void 0)}))})()}}},c=a("KHd+"),o=Object(c.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"page-header page-header-light"},[t._m(0),t._v(" "),a("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[a("div",{staticClass:"d-flex"},[a("div",{staticClass:"breadcrumb"},[a("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[a("i",{staticClass:"icon-home2 mr-2"}),t._v(" "),a("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(" "+t._s(t._f("truncate")(this.$root.tenant.name,30))+" ")])]),t._v(" "),a("span",{staticClass:"breadcrumb-item"},[t._v("CRBT")]),t._v(" "),a("span",{staticClass:"breadcrumb-item active"},[t._v("Upload Report")])]),t._v(" "),t._m(1)]),t._v(" "),a("div",{staticClass:"header-elements"},[a("div",{staticClass:"breadcrumb justify-content-center"},[a("router-link",{staticClass:" btn btn-danger btn-sm rounded-round font-weight-bold",attrs:{to:"/crbt/statements/upload"}},[a("i",{staticClass:"icon-file-upload mr-2"}),t._v("\n                        Upload Statement\n                    ")])],1)])])]),t._v(" "),a("div",{staticClass:"content border-0 p-0"},[a("loading-animation"),t._v(" "),a("div",{staticClass:"card shadow-none rounded-0 border-0"},[this.$root.loading||0!=t.transactions.length?t._e():a("div",{staticClass:"card-body"},[t._m(2)]),t._v(" "),!this.$root.loading&&t.transactions.length?a("div",{staticClass:"table-responsive border-top-0"},[a("table",{staticClass:"table table-hover"},[a("tbody",[a("tr",{staticClass:"table-active"},t._l(t.columns,(function(e){return a("th",{staticClass:"font-weight-bold text-uppercase",attrs:{scope:"col"}},[t._v(t._s(e))])})),0),t._v(" "),t._l(t.transactions,(function(e){return a("tr",t._l(t.columns,(function(n){return isNaN(e[n])||!e[n]?a("td",[t._v(t._s(e[n]))]):a("td",{staticClass:"text-right"},[t._v(t._s(t.rgNumberFormat(e[n])))])})),0)}))],2)])]):t._e()])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-header-content header-elements-md-inline"},[e("div",{staticClass:"page-title d-flex"},[e("h4",[e("i",{staticClass:"icon-file-plus"}),this._v("\n                    CRBT Statement - Revenue Calculations Preview\n                ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h6",[e("i",{staticClass:"icon-files-empty mr-2"}),this._v("\n                    No records found\n                ")])}],!1,null,null,null);e.default=o.exports}}]);