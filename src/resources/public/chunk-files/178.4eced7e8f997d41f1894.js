(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{LFml:function(t,a,s){"use strict";s.r(a);var e={data:function(){return{}},watch:{"$route.query.page":function(t){this.tableData.url="/purchase-orders?page="+t,this.$root.LoadingTxnSideBarLeft=!0}},mounted:function(){this.tableData.initiate=!0;this.tableData.url="/purchase-orders",void 0===this.$route.query.page?this.tableData.url="/purchase-orders":this.tableData.url="/purchase-orders?page="+this.$route.query.page,this.tableData.recordsPerPage=Math.floor((window.innerHeight-70-70-70)/70),this.tableData.paginationLength=1},methods:{onRowClick:function(t){var a="/purchase-orders/"+t.id;this.$route.path===a||this.$router.push({path:a,query:{page:this.$route.query.page}})}},updated:function(){}},r=s("KHd+"),i=Object(r.a)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"sidebar sidebar-light sidebar-secondary sidebar-expand-md d-print-none",staticStyle:{width:"350px"}},[t._m(0),t._v(" "),s("div",{staticClass:"sidebar-content "},[s("perfect-scrollbar",{ref:"scroll",staticClass:"position-fixed h-100",staticStyle:{width:"350px",overflow:"hidden","padding-bottom":"80px !important","margin-top":"-50px","padding-top":"50px"},attrs:{id:"rg-sidebar-secondary-fixed-content-scroll"}},[s("div",[s("div",{staticClass:"card mb-2"},[s("div",{staticClass:"card-body p-0"},[s("ul",{staticClass:"nav nav-sidebar",attrs:{"data-nav-type":"accordion"}},[s("li",{staticClass:"nav-item-header"},[t._v("\n                                Purchase Orders\n                                "),s("span",{staticClass:"badge bg-primary badge-pill ml-auto float-right"},[t._v(t._s(t.tableData.payload.total))])])])])]),t._v(" "),s("div",{staticClass:"card shadow-none rounded-0 border-0"},[s("loading-txn-side-bar-left-animation"),t._v(" "),s("table",{staticClass:"table table-hover w-100"},[s("tbody",t._l(t.tableData.payload.data,(function(a){return s("tr",{class:"row ml-0 mr-0 "+[a.id==t.$route.params.id?"table-warning border-left-3 border-warning":""],on:{click:function(s){return t.onRowClick(a)}}},[s("td",{staticClass:"col-md-6 cursor-pointer"},[s("h6",{staticClass:"row"},[s("div",{staticClass:"col-12 text-truncate",attrs:{title:a.contact_name}},[t._v("\n                                        "+t._s(a.contact_name)+"\n                                    ")]),t._v(" "),s("small",{staticClass:"col-12 display-block text-muted"},[t._v("\n                                        "+t._s(a.date)+" -\n                                        "),s("span",{staticClass:"text-primary",attrs:{title:a.number_string}},[t._v(t._s(a.number_string))])])])]),t._v(" "),s("td",{staticClass:"col-md-6 cursor-pointer"},[s("div",{staticClass:"text-right"},[s("div",{staticClass:"rg-nowrap-ellipsis"},[t._v("\n                                        "+t._s(t.rgNumberFormat(a.total,2))+" "),s("small",[t._v(t._s(a.base_currency))])]),t._v(" "),s("small",{class:"display-block text-size-small text-uppercase font-weight-bold "+["draft"===a.status?"text-danger":"text-success"]},[t._v("\n                                        "+t._s(a.status)+"\n                                    ")])])])])})),0)]),t._v(" "),s("rg-tables-pagination",{attrs:{"table-data-prop":t.tableData}})],1)])]),t._v(">\n\n    ")],1)])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"sidebar-mobile-toggler text-center"},[a("a",{staticClass:"sidebar-mobile-secondary-toggle",attrs:{href:"#"}},[a("i",{staticClass:"icon-arrow-left8"})]),this._v(" "),a("span",{staticClass:"font-weight-semibold"},[this._v("Secondary sidebar")]),this._v(" "),a("a",{staticClass:"sidebar-mobile-expand",attrs:{href:"#"}},[a("i",{staticClass:"icon-screen-full"}),this._v(" "),a("i",{staticClass:"icon-screen-normal"})])])}],!1,null,null,null);a.default=i.exports}}]);