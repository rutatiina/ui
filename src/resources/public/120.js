(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{A1DI:function(t,a,e){"use strict";e.r(a);var s={name:"SideBarLeftTransactions",data:function(){return{PerfectScrollbar:null}},watch:{"$route.query.page":function(t){this.tableData.url="/goods-delivered?page="+t}},mounted:function(){this.tableData.initiate=!0;this.tableData.url="/goods-delivered",void 0===this.$route.query.page?this.tableData.url="/goods-delivered":this.tableData.url="/goods-delivered?page="+this.$route.query.page,this.tableData.recordsPerPage=Math.floor((window.innerHeight-70-70-70)/70),this.tableData.paginationLength=1,this.PerfectScrollbar=new PerfectScrollbar("#rg-sidebar-secondary-fixed-content-scroll")},methods:{onRowClick:function(t){var a="/goods-delivered/"+t.id;this.$route.path===a||this.$router.push({path:a,query:{page:this.$route.query.page}})}},updated:function(){this.PerfectScrollbar.update()}},i=e("KHd+"),r=Object(i.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"sidebar sidebar-light sidebar-secondary sidebar-expand-md d-print-none",staticStyle:{width:"350px"}},[t._m(0),t._v(" "),e("div",{staticClass:"sidebar-content "},[e("div",{staticClass:"position-fixed h-100",staticStyle:{width:"350px",overflow:"hidden","padding-bottom":"80px !important"},attrs:{id:"rg-sidebar-secondary-fixed-content-scroll"}},[e("div",[e("div",{staticClass:"card mb-2"},[e("div",{staticClass:"card-body p-0"},[e("ul",{staticClass:"nav nav-sidebar",attrs:{"data-nav-type":"accordion"}},[e("li",{staticClass:"nav-item-header"},[t._v("\n                                Delivery Notes\n                                "),e("span",{staticClass:"badge bg-primary badge-pill ml-auto float-right"},[t._v(t._s(t.tableData.payload.total))])])])])]),t._v(" "),e("div",{staticClass:"card shadow-none rounded-0 border-0"},[e("loading-txn-side-bar-left-animation"),t._v(" "),e("table",{staticClass:"table table-hover w-100"},[e("tbody",t._l(t.tableData.payload.data,(function(a){return e("tr",{class:"row ml-0 mr-0 "+[a.id==t.$route.params.id?"table-warning border-left-3 border-warning":""],on:{click:function(e){return t.onRowClick(a)}}},[e("td",{staticClass:"col-md-6 cursor-pointer"},[e("h6",{staticClass:"row"},[e("div",{staticClass:"col-12 text-truncate",attrs:{title:a.contact_name}},[t._v("\n                                        "+t._s(a.contact_name)+"\n                                    ")]),t._v(" "),e("small",{staticClass:"col-12 display-block text-muted"},[t._v("\n                                        "+t._s(a.date)+" -\n                                        "),e("span",{staticClass:"text-primary",attrs:{title:a.number_string}},[t._v(t._s(a.number_string))])])])]),t._v(" "),e("td",{staticClass:"col-md-6 cursor-pointer"},[e("div",{staticClass:"text-right"},[e("div",{staticClass:"rg-nowrap-ellipsis"},[t._v("\n                                        "+t._s(t.rgNumberFormat(a.total,2))+" "),e("small",[t._v(t._s(a.base_currency))])]),t._v(" "),e("small",{class:"display-block text-size-small text-uppercase font-weight-bold "+["draft"===a.status?"text-danger":"text-success"]},[t._v("\n                                        "+t._s(a.status)+"\n                                    ")])])])])})),0)]),t._v(" "),e("rg-tables-pagination",{attrs:{"table-data-prop":t.tableData}})],1)])])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"sidebar-mobile-toggler text-center"},[a("a",{staticClass:"sidebar-mobile-secondary-toggle",attrs:{href:"#"}},[a("i",{staticClass:"icon-arrow-left8"})]),this._v(" "),a("span",{staticClass:"font-weight-semibold"},[this._v("Secondary sidebar")]),this._v(" "),a("a",{staticClass:"sidebar-mobile-expand",attrs:{href:"#"}},[a("i",{staticClass:"icon-screen-full"}),this._v(" "),a("i",{staticClass:"icon-screen-normal"})])])}],!1,null,null,null);a.default=r.exports}}]);