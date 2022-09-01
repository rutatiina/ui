(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{"/v0t":function(t,s,e){"use strict";e.r(s);var a=e("o0o1"),i=e.n(a);function n(t,s,e,a,i,n,r){try{var c=t[n](r),o=c.value}catch(t){return void e(t)}c.done?s(o):Promise.resolve(o).then(a,i)}function r(t){return function(){var s=this,e=arguments;return new Promise((function(a,i){var r=t.apply(s,e);function c(t){n(r,a,i,c,o,"next",t)}function o(t){n(r,a,i,c,o,"throw",t)}c(void 0)}))}}var c={data:function(){return{invoicesSummary:{},billsSummary:{},dataCounts:{}}},watch:{"$route.query.page":function(t){this.tableData.url="/financial-accounts/sales/invoices?page="+t}},methods:{fetchInvoicesSummary:function(){var t=this;return r(i.a.mark((function s(){return i.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,axios.get("/financial-accounts/dashboard/invoices-summary").then((function(s){t.invoicesSummary=s.data,t.progressPercentage("#progress_percentage_invoices",46,3,"#eee","#2196F3",t.invoicesSummary.percentagePaid)}));case 3:return s.abrupt("return",s.sent);case 6:s.prev=6,s.t0=s.catch(0);case 8:case"end":return s.stop()}}),s,null,[[0,6]])})))()},fetchBillsSummary:function(){var t=this;return r(i.a.mark((function s(){return i.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,axios.get("/financial-accounts/dashboard/bills-summary").then((function(s){t.billsSummary=s.data,t.progressPercentage("#progress_percentage_bills",46,3,"#eee","#2196F3",t.billsSummary.percentagePaid)}));case 3:return s.abrupt("return",s.sent);case 6:s.prev=6,s.t0=s.catch(0);case 8:case"end":return s.stop()}}),s,null,[[0,6]])})))()},fetchDataCounts:function(){var t=this;return r(i.a.mark((function s(){return i.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,axios.get("/financial-accounts/dashboard/data-count").then((function(s){t.dataCounts=s.data})).catch((function(t){console.log(t)})).finally((function(t){}));case 3:return s.abrupt("return",s.sent);case 6:s.prev=6,s.t0=s.catch(0),console.log(s.t0);case 9:case"end":return s.stop()}}),s,null,[[0,6]])})))()},progressPercentage:function(t,s,e,a,i,n){if("undefined"!=typeof d3){if(t){var r=d3.select(t),c=n,o=2*Math.PI,l=d3.format(".0%"),d=2*s,u=Math.abs((c-0)/.01),v=c<0?-.01:.01,m=r.append("svg").attr("width",d).attr("height",d).append("g").attr("transform","translate("+s+","+s+")"),p=d3.svg.arc().startAngle(0).innerRadius(s).outerRadius(s-e).cornerRadius(20);m.append("path").attr("class","d3-progress-background").attr("d",p.endAngle(o)).style("fill",a);var f=m.append("path").attr("class","d3-progress-foreground").attr("filter","url(#blur)").style({fill:i,stroke:i}),b=m.append("path").attr("class","d3-progress-front").style({fill:i,"fill-opacity":1}),h=m.append("text").attr("dx",0).attr("dy",11-e).style({"font-size":"22px","line-height":1,fill:i,"text-anchor":"middle"}),_=0;!function t(){!function(t){f.attr("d",p.endAngle(o*t)),b.attr("d",p.endAngle(o*t)),h.text(l(t))}(_),u>0&&(u--,_+=v,setTimeout(t,10))}()}}else console.warn("Warning - d3.min.js is not loaded.")}},mounted:function(){var t=document.createElement("script");t.setAttribute("src","/web/assets/template/l/global_assets/js/plugins/visualization/d3/d3.min.js"),document.head.appendChild(t),this.fetchDataCounts();var s=this,e=setInterval((function(){/loaded|complete/.test(document.readyState)&&(clearInterval(e),s.fetchInvoicesSummary(),s.fetchBillsSummary())}),10)},updated:function(){}},o=e("KHd+"),l=Object(o.a)(c,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"sidebar sidebar-light sidebar-secondary sidebar-expand-md d-print-none",staticStyle:{width:"350px"}},[t._m(0),t._v(" "),e("perfect-scrollbar",{staticClass:"sidebar-content "},[e("div",{staticClass:"card text-center"},[e("div",{staticClass:"card-body"},[e("h6",{staticClass:"font-weight-semibold mb-0 mt-1"},[t._v("Invoicing summary")]),t._v(" "),e("div",{staticClass:"text-muted mb-3"},[t._v(t._s(t.rgNumber(t.invoicesSummary.count))+" invoices issued")]),t._v(" "),e("div",{staticClass:"svg-center position-relative mb-1",attrs:{id:"progress_percentage_invoices"}})]),t._v(" "),e("div",{staticClass:"card-body border-top-0 pt-0"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-4"},[e("div",{staticClass:"text-uppercase font-size-xs text-muted"},[t._v("Fully Paid")]),t._v(" "),e("h5",{staticClass:"font-weight-semibold line-height-1 mt-1 mb-0"},[t._v(t._s(t.rgNumber(t.invoicesSummary.fullyPaid)))])]),t._v(" "),e("div",{staticClass:"col-4"},[e("div",{staticClass:"text-uppercase font-size-xs text-muted"},[t._v("Pending")]),t._v(" "),e("h5",{staticClass:"font-weight-semibold line-height-1 mt-1 mb-0"},[t._v(t._s(t.rgNumber(t.invoicesSummary.pending)))])])])])]),t._v(" "),e("div",{staticClass:"card text-center"},[e("div",{staticClass:"card-body"},[e("h6",{staticClass:"font-weight-semibold mb-0 mt-1"},[t._v("Billing summary")]),t._v(" "),e("div",{staticClass:"text-muted mb-3"},[t._v(t._s(t.rgNumber(t.billsSummary.count))+" bills received")]),t._v(" "),e("div",{staticClass:"svg-center position-relative mb-1",attrs:{id:"progress_percentage_bills"}})]),t._v(" "),e("div",{staticClass:"card-body border-top-0 pt-0"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-4"},[e("div",{staticClass:"text-uppercase font-size-xs text-muted"},[t._v("Fully Paid")]),t._v(" "),e("h5",{staticClass:"font-weight-semibold line-height-1 mt-1 mb-0"},[t._v(t._s(t.rgNumber(t.billsSummary.fullyPaid)))])]),t._v(" "),e("div",{staticClass:"col-4"},[e("div",{staticClass:"text-uppercase font-size-xs text-muted"},[t._v("Pending")]),t._v(" "),e("h5",{staticClass:"font-weight-semibold line-height-1 mt-1 mb-0"},[t._v(t._s(t.rgNumber(t.billsSummary.pending)))])])])])]),t._v(" "),e("div",{staticClass:"card card-body mt-3"},[e("div",{staticClass:"row text-center"},[e("div",{staticClass:"col-4"},[e("p",[e("i",{staticClass:"icon-users2 icon-2x d-inline-block text-info"})]),t._v(" "),e("h5",{staticClass:"font-weight-semibold mb-0"},[t._v(t._s(t.rgNumber(t.dataCounts.customers)))]),t._v(" "),e("span",{staticClass:"text-muted font-size-sm"},[t._v("Customers")])]),t._v(" "),e("div",{staticClass:"col-4"},[e("p",[e("i",{staticClass:"icon-truck icon-2x d-inline-block text-warning"})]),t._v(" "),e("h5",{staticClass:"font-weight-semibold mb-0"},[t._v(t._s(t.rgNumber(t.dataCounts.suppliers)))]),t._v(" "),e("span",{staticClass:"text-muted font-size-sm"},[t._v("Suppliers")])]),t._v(" "),e("div",{staticClass:"col-4"},[e("p",[e("i",{staticClass:"icon-price-tags icon-2x d-inline-block text-success"})]),t._v(" "),e("h5",{staticClass:"font-weight-semibold mb-0"},[t._v(t._s(t.rgNumber(t.dataCounts.items)))]),t._v(" "),e("span",{staticClass:"text-muted font-size-sm"},[t._v("Items")])])])]),t._v(" "),e("div",{staticClass:"card card-body mt-3"},[e("div",{staticClass:"row text-center"},[e("div",{staticClass:"col-4"},[e("p",[e("i",{staticClass:"icon-cash3 icon-2x d-inline-block text-info"})]),t._v(" "),e("h5",{staticClass:"font-weight-semibold mb-0"},[t._v(t._s(t.rgNumber(t.dataCounts.invoices)))]),t._v(" "),e("span",{staticClass:"text-muted font-size-sm"},[t._v("Invoices")])]),t._v(" "),e("div",{staticClass:"col-4"},[e("p",[e("i",{staticClass:"icon-coin-dollar icon-2x d-inline-block text-warning"})]),t._v(" "),e("h5",{staticClass:"font-weight-semibold mb-0"},[t._v(t._s(t.rgNumber(t.dataCounts.bills)))]),t._v(" "),e("span",{staticClass:"text-muted font-size-sm"},[t._v("Bills")])]),t._v(" "),e("div",{staticClass:"col-4"},[e("p",[e("i",{staticClass:"icon-cart icon-2x d-inline-block text-success"})]),t._v(" "),e("h5",{staticClass:"font-weight-semibold mb-0"},[t._v(t._s(t.rgNumber(t.dataCounts.orders)))]),t._v(" "),e("span",{staticClass:"text-muted font-size-sm"},[t._v("Orders")])])])])])],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"sidebar-mobile-toggler text-center"},[s("a",{staticClass:"sidebar-mobile-secondary-toggle",attrs:{href:"#"}},[s("i",{staticClass:"icon-arrow-left8"})]),this._v(" "),s("span",{staticClass:"font-weight-semibold"},[this._v("Secondary sidebar")]),this._v(" "),s("a",{staticClass:"sidebar-mobile-expand",attrs:{href:"#"}},[s("i",{staticClass:"icon-screen-full"}),this._v(" "),s("i",{staticClass:"icon-screen-normal"})])])}],!1,null,null,null);s.default=l.exports}}]);