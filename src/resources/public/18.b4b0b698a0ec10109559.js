(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{IyyT:function(t,a,s){"use strict";s.r(a);var e=s("o0o1"),i=s.n(e);function n(t,a,s,e,i,n,r){try{var o=t[n](r),l=o.value}catch(t){return void s(t)}o.done?a(l):Promise.resolve(l).then(e,i)}var r={data:function(){return{txnData:{}}},watch:{"$route.params.id":function(t){this.posOrderFetchData()}},mounted:function(){this.posOrderFetchData()},methods:{hideSideBarRight:function(t){this.$root.showSideBarRight=!1},posOrderFetchData:function(){var t,a=this;return(t=i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a.$root.loadingTxn=!0,t.next=4,axios.get(a.$route.fullPath).then((function(t){a.txnData=t.data,a.$root.loadingTxn=!1})).catch((function(t){console.log(t)})).finally((function(t){}));case 4:return t.abrupt("return",t.sent);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})),function(){var a=this,s=arguments;return new Promise((function(e,i){var r=t.apply(a,s);function o(t){n(r,e,i,o,l,"next",t)}function l(t){n(r,e,i,o,l,"throw",t)}o(void 0)}))})()}},updated:function(){}},o=(s("JTL8"),s("KHd+")),l=Object(o.a)(r,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return t.$route.params.id?s("div",{staticClass:"sidebar sidebar-light sidebar-right sidebar-expand-md  position-fixed bg-white",staticStyle:{"z-index":"1031"}},[t._m(0),t._v(" "),s("div",{staticClass:"sidebar-content position-fixed bg-white",attrs:{id:"pos-order-container"}},[s("perfect-scrollbar",{ref:"scroll",staticClass:"card shadow-none rounded-0 border-0 fixed-top position-fixed h-100 overflow-hidden",attrs:{id:"pos-order"}},[s("div",{staticClass:"card-header bg-white header-elements-inline d-print-none"},[s("h6",{staticClass:"card-title"},[t._v("Order")]),t._v(" "),s("div",{staticClass:"header-elements"},[s("a",{staticClass:"btn btn-link text-primary-800 font-weight-bold mr-2",attrs:{href:"javascript:window.print()"}},[s("i",{staticClass:"icon-printer2 mr-2"}),t._v(" Print\n                    ")]),t._v(" "),s("router-link",{staticClass:"btn bg-transparent btn-icon text-danger font-weight-bold",attrs:{to:{name:"posOrders"}}},[s("i",{staticClass:"icon-cross2 font-weight-bold"})])],1)]),t._v(" "),s("div",{staticClass:"card-body"},[s("loading-animation"),t._v(" "),this.$root.loadingTxn?t._e():s("div",{staticClass:"position-relative",staticStyle:{"margin-bottom":"100px"}},[s("div",{staticClass:"form-group row"},[s("div",{staticClass:"col-12"},[s("ul",{staticClass:"list list-unstyled mb-0"},[s("li",[s("h5",{staticClass:"rg-font-weight-600"},[t._v(t._s(t.$root.tenant.name))])]),t._v(" "),t.$root.tenant.street_line_1||t.$root.tenant.street_line_2?s("li",[s("small",{staticClass:"text-muted"},[t._v("Street")]),t._v(" "+t._s(t.$root.tenant.street_line_1)+" "+t._s(t.$root.tenant.street_line_2))]):t._e(),t._v(" "),t.$root.tenant.city?s("li",[s("small",{staticClass:"text-muted"},[t._v("City")]),t._v(" "+t._s(t.$root.tenant.city))]):t._e(),t._v(" "),t.$root.tenant.phone?s("li",[s("small",{staticClass:"text-muted"},[t._v("Phone no.")]),t._v(" "+t._s(t.$root.tenant.phone))]):t._e(),t._v(" "),t.$root.tenant.website?s("li",[s("small",{staticClass:"text-muted"},[t._v("Website")]),t._v(" "+t._s(t.$root.tenant.website))]):t._e()])])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("div",{staticClass:"col-12 mt-2 text-uppercase font-size-lg font-weight-bold border-top-1 border-bottom-1 pt-1 pb-1"},[t._v("\n                            Cash sale / Tax invoice\n                        ")])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("div",{staticClass:"col-12"},[t._v("\n                            "+t._s(t.txnData.document_name)+" # "+t._s(t.txnData.number)+"\n                        ")]),t._v(" "),s("div",{staticClass:"col-12 "},[s("img",{attrs:{src:"data:image/png;base64,"+t.txnData.barcode_c39,alt:"barcode"}})])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("div",{staticClass:"col-12"},[t._v("\n                            Date: "+t._s(t.txnData.date)+"\n                        ")])]),t._v(" "),s("div",{staticClass:"form-group"},[s("hr",{staticClass:"m-0 p-0"}),t._v(" "),s("table",{staticClass:"table w-100"},[s("thead",{staticClass:"thead-default"},[s("tr",[s("th",{staticClass:"col font-weight-bold pl-2 text-uppercase"},[t._v("Item")]),t._v(" "),s("th",{staticClass:"col-auto font-weight-bold pr-0 text-right text-uppercase",staticStyle:{"min-width":"60px !important"}},[t._v("Qty")]),t._v(" "),s("th",{staticClass:"col-auto font-weight-bold pr-0 text-right text-uppercase",staticStyle:{"min-width":"60px !important"}},[t._v("Price")]),t._v(" "),s("th",{staticClass:"col-auto font-weight-bold text-right pr-0 text-uppercase"},[t._v("Amount")])])]),t._v(" "),s("tbody",[0===t.txnData.items.length?s("tr",[s("td",{staticClass:"text-muted",attrs:{colspan:"3"}},[s("div",[t._v("* No items added.")])])]):t._e(),t._v(" "),t._l(t.txnData.items,(function(a,e){return s("tr",[s("td",{staticClass:"td_item_selector pl-2",staticStyle:{"max-width":"240px"}},[s("div",{staticClass:"rg-nowrap-ellipsis"},[t._v(t._s(a.name))])]),t._v(" "),s("td",{staticClass:"text-right pr-0"},[t._v("\n                                    "+t._s(t.rgNumberFormat(a.quantity))+"\n                                ")]),t._v(" "),s("td",{staticClass:"text-right pr-0"},[t._v("\n                                    "+t._s(t.rgNumberFormat(a.rate))+"\n                                ")]),t._v(" "),s("td",{staticClass:"pr-0 text-right"},[t._v(t._s(t.rgNumberFormat(a.total)))])])}))],2)]),t._v(" "),s("hr",{staticClass:"m-0"})]),t._v(" "),s("div",{staticClass:"text-left col-12 p-0 rg-fixed-bottom-right bg-white"},[s("div",{staticStyle:{"border-top-color":"#ddd","border-top-width":"3px","border-top-style":"double"}},[s("table",{staticClass:"table"},[t._l(t.txnData.taxes,(function(a){return s("tr",[s("th",[t._v(t._s(a.tax.display_name))]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.rgNumberFormat(a.amount,t.$root.tenant.decimal_places)))])])})),t._v(" "),s("tr",{},[s("td",{},[s("span",{staticClass:"font-weight-semibold h6 m-0 p-0"},[t._v("Discount")])]),t._v(" "),s("td",{staticClass:"text-right pt-0 pb-0"},[t._v("\n                                        "+t._s(t.rgNumberFormat(t.txnData.discount))+" %\n                                    ")])]),t._v(" "),s("tr",{},[s("td",{},[s("span",{staticClass:"font-weight-semibold h4"},[t._v("Total due")])]),t._v(" "),s("td",{staticClass:"text-right"},[s("span",{staticClass:"h4 font-weight-bold"},[t._v(t._s(t.rgNumberFormat(t.txnData.total)))])])]),t._v(" "),s("tbody",[s("tr",{staticClass:"table-border-double"},[s("td",{},[s("span",{staticClass:"font-weight-semibold h4"},[t._v("Cash")])]),t._v(" "),s("td",{staticClass:"text-right"},[s("span",{staticClass:"h4 font-weight-bold"},[t._v(t._s(t.rgNumberFormat(t.txnData.cash_tendered)))])])]),t._v(" "),s("tr",{},[s("td",{},[s("span",{staticClass:"font-weight-semibold h4"},[t._v("Change")])]),t._v(" "),s("td",{staticClass:"text-right"},[s("span",{staticClass:"h4 font-weight-bold"},[t._v(t._s(t.rgNumberFormat(t.txnData.cash_change)))])])]),t._v(" "),s("tr",[s("td",{attrs:{colspan:"2"}})])])],2)])])])],1)])],1)]):t._e()}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"sidebar-mobile-toggler text-center"},[a("a",{staticClass:"sidebar-mobile-expand",attrs:{href:"#"}},[a("i",{staticClass:"icon-screen-full"}),this._v(" "),a("i",{staticClass:"icon-screen-normal"})]),this._v(" "),a("span",{staticClass:"font-weight-semibold"},[this._v("Right sidebar")]),this._v(" "),a("a",{staticClass:"sidebar-mobile-right-toggle",attrs:{href:"#"}},[a("i",{staticClass:"icon-arrow-right8"})])])}],!1,null,null,null);a.default=l.exports},JTL8:function(t,a,s){"use strict";s("R1Ak")},R1Ak:function(t,a,s){var e=s("xHHN");"string"==typeof e&&(e=[[t.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(e,i);e.locals&&(t.exports=e.locals)},xHHN:function(t,a,s){(t.exports=s("I1BE")(!1)).push([t.i,"\n@media screen {\n#pos-order {\n        width: 500px;\n        right: 0;\n        top:0px;\n        left: auto !important;\n        bottom: 0px;\n        border-left: 3px double #c9c9c9 !important;\n}\n#pos-order-container {\n        border-left: 2px solid rgba(0,0,0,0.125);\n        top:0px;\n        padding-top: 80px;\n        min-width: 500px;\n}\n}\n@media print {\n    /*only print the receipt part of the page*/\nbody * {\n        visibility: hidden;\n}\n#pos-order, #pos-order * {\n        visibility: visible;\n}\n#pos-order {\n        position: relative;\n        max-width: 500px;\n        margin-left: auto !important;\n        margin-right: auto !important;\n}\n}\n",""])}}]);