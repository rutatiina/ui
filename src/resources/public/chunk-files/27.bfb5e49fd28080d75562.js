(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"5vGH":function(t,a,e){"use strict";e.r(a);var s={data:function(){return{}},watch:{"$route.query.page":function(t){this.tableData.url=this.$router.currentRoute.path+"?page="+t}},mounted:function(){this.tableData.initiate=!0;void 0===this.$route.query.page?this.tableData.url=this.$router.currentRoute.path:this.tableData.url=this.$router.currentRoute.path+"?page="+this.$route.query.page},methods:{onRowClick:function(t){this.$router.push({path:"/banking/accounts/"+t.id})}},ready:function(){},beforeUpdate:function(){},updated:function(){InputsCheckboxesRadios.initComponents()}},n=e("C7zm"),i=Object(n.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"page-header page-header-light"},[e("div",{staticClass:"page-header-content header-elements-md-inline"},[t._m(0),t._v(" "),e("div",{staticClass:"header-elements d-none"},[e("div",{staticClass:"breadcrumb justify-content-center"},[e("router-link",{staticClass:" btn btn-danger btn-sm font-weight-bold",attrs:{to:"/banking/accounts/create"}},[e("i",{staticClass:"icon-library2 mr-1"}),t._v("\n                        New Bank Account\n                    ")])],1)])]),t._v(" "),e("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[e("div",{staticClass:"d-flex"},[e("div",{staticClass:"breadcrumb"},[e("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[e("i",{staticClass:"icon-home2 mr-2"}),t._v(" "),e("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(" "+t._s(t._f("truncate")(this.$root.tenant.name,30))+" ")])]),t._v(" "),e("span",{staticClass:"breadcrumb-item"},[t._v("Banking")]),t._v(" "),e("span",{staticClass:"breadcrumb-item active"},[t._v("Accounts")])]),t._v(" "),t._m(1)])])]),t._v(" "),e("div",{staticClass:"content border-0 p-0"},[e("loading-animation"),t._v(" "),e("div",{staticClass:"card shadow-none rounded-0 border-0"},[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-hover"},[t._m(2),t._v(" "),e("rg-tables-state"),t._v(" "),e("tbody",t._l(t.tableData.payload.data,(function(a){return e("tr",{on:{click:function(e){return t.onRowClick(a)}}},[e("td",{staticClass:"cursor-pointer font-weight-semibold"},[t._v(t._s(a.name))]),t._v(" "),e("td",{staticClass:"cursor-pointer",attrs:{nowrap:""}},[t._v(t._s(a.bank.name))]),t._v(" "),e("td",{staticClass:"cursor-pointer"}),t._v(" "),e("td",{staticClass:"cursor-pointer text-right"},[t._v("0.00 "),e("small",[t._v(t._s(a.currency))])]),t._v(" "),e("td",{staticClass:"cursor-pointer text-right"},[t._v(t._s(t.$root.numberFormat(a.account.balance.debit-a.account.balance.credit))+" "),e("small",[t._v(t._s(a.account.balance.currency))])])])})),0)],1),t._v(" "),e("rg-tables-pagination",{attrs:{"table-data-prop":t.tableData}})],1)])],1)])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"page-title d-flex"},[a("h4",[a("i",{staticClass:"icon-library2 mr-2"}),this._v(" "),a("span",{staticClass:"font-weight-semibold"},[this._v("Bank Accounts")])]),this._v(" "),a("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[a("i",{staticClass:"icon-more"})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[a("i",{staticClass:"icon-more"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",{staticClass:"table-active"},[e("th",{staticClass:"font-weight-bold",attrs:{scope:"col"}},[t._v("Account Name")]),t._v(" "),e("th",{staticClass:"font-weight-bold",attrs:{scope:"col"}},[t._v("Bank")]),t._v(" "),e("th",{staticClass:"font-weight-bold",attrs:{scope:"col"}},[t._v("Uncategorized")]),t._v(" "),e("th",{staticClass:"font-weight-bold text-right",attrs:{scope:"col"}},[t._v("Amount in Bank")]),t._v(" "),e("th",{staticClass:"font-weight-bold text-right",attrs:{scope:"col"}},[t._v("Amount in System")])])])}],!1,null,null,null);a.default=i.exports}}]);