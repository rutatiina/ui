(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{G7ZM:function(t,s,a){"use strict";a.r(s);var e={data:function(){return{}},watch:{$route:function(t,s){this.txnShowId!==this.$route.params.id&&this.txnFetchData()}},mounted:function(){this.$root.appMenu("accounting"),this.txnFetchData(),this.txnShowId=this.$route.params.id},methods:{},ready:function(){},beforeUpdate:function(){},updated:function(){this.txnShowId=this.$route.params.id,document.title=this.txnData.document_name+" "+this.txnData.number}},i=a("KHd+"),n=Object(i.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"page-header page-header-light d-print-none"},[t._m(0),t._v(" "),a("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[a("div",{staticClass:"d-flex"},[a("div",{staticClass:"breadcrumb"},[a("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[a("i",{staticClass:"icon-home2 mr-2"}),t._v(" "),a("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(" "+t._s(t._f("truncate")(this.$root.tenant.name,30))+" ")])]),t._v(" "),a("span",{staticClass:"breadcrumb-item"},[t._v("Accounting")]),t._v(" "),a("span",{staticClass:"breadcrumb-item"},[t._v("Inventory")]),t._v(" "),a("span",{staticClass:"breadcrumb-item active"},[t._v("Goods Issued Note")])]),t._v(" "),t._m(1)]),t._v(" "),a("div",{staticClass:"header-elements"},[a("div",{staticClass:"breadcrumb justify-content-center"},[a("router-link",{staticClass:"btn btn-outline btn-primary border-primary text-primary-800 border-2 btn-sm rounded font-weight-bold mr-2",attrs:{to:"/goods-issued/create"}},[a("i",{staticClass:"icon-files-empty2 mr-1"}),t._v("\n                        New Goods Issued Note\n                    ")]),t._v(" "),a("button",{staticClass:"btn btn-outline btn-primary border-primary text-primary-800 border-2 btn-sm rounded btn-icon",attrs:{type:"button"},on:{click:function(s){t.$root.showSideBarRight=!0}}},[a("i",{staticClass:"icon-cog52"})])],1)])])]),t._v(" "),a("div",{staticClass:"content border-0 p-0"},[a("loading-txn-animation"),t._v(" "),!this.$root.loadingTxn&&t.txnData?a("div",{staticClass:"content"},["draft"===t.txnData.status?a("div",{staticClass:"card border-left-3 border-warning rounded-0 max-width-960 ml-auto mr-auto rg-print-border-0"},[a("div",{staticClass:"card-header header-elements-inline d-print-none text-danger"},[a("h6",{staticClass:"card-title font-weight-bold"},[t._v("\n                        Approve "+t._s(t.txnData.document_name)),a("br"),t._v(" "),a("small",[t._v("You are viewing a draft")])]),t._v(" "),a("div",{staticClass:"header-elements"},[a("button",{staticClass:"btn bg-warning font-weight-bold",attrs:{type:"button"},on:{click:function(s){return t.txnApprove("/goods-issued/"+t.txnData.id+"/approve")}}},[a("i",{staticClass:"icon-printer mr-2"}),t._v(" Click here to Approve")])])])]):t._e(),t._v(" "),this.$root.loadingTxn?t._e():a("div",{staticClass:"card max-width-960 m-auto rg-print-border-0"},[a("div",{staticClass:"card-header bg-transparent header-elements-inline d-print-none"},[a("h6",{staticClass:"card-title"},[t._v(t._s(t.txnData.document_name)+" #"+t._s(t.txnData.number))]),t._v(" "),a("div",{staticClass:"header-elements"},[a("router-link",{staticClass:"btn btn-light btn-sm",attrs:{to:"/goods-issued/"+t.$route.params.id+"/edit"}},[a("i",{staticClass:"icon-pencil mr-2"}),t._v("\n                            Edit\n                        ")]),t._v(" "),t._m(2)],1)]),t._v(" "),a("div",{staticClass:"card-body"},[t.$root.tenant.logo?a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6 mb-2"},[a("img",{attrs:{src:"/timthumb.php?src=storage/"+t.$root.tenant.logo+"&h=27&q=100",alt:t.$root.tenant.name}})])]):t._e(),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"mb-4"},[a("ul",{staticClass:"list list-unstyled mb-0"},[a("li",[a("h5",{staticClass:"rg-font-weight-600"},[t._v(t._s(t.$root.tenant.name))])]),t._v(" "),t.$root.tenant.street_line_1?a("li",[a("small",{staticClass:"text-muted"},[t._v("Street #1")]),t._v(" "+t._s(t.$root.tenant.street_line_1))]):t._e(),t._v(" "),t.$root.tenant.street_line_2?a("li",[a("small",{staticClass:"text-muted"},[t._v("Street #2")]),t._v(" "+t._s(t.$root.tenant.street_line_2))]):t._e(),t._v(" "),t.$root.tenant.city?a("li",[a("small",{staticClass:"text-muted"},[t._v("City")]),t._v(" "+t._s(t.$root.tenant.city))]):t._e(),t._v(" "),t.$root.tenant.state_province?a("li",[a("small",{staticClass:"text-muted"},[t._v("Province")]),t._v(" "+t._s(t.$root.tenant.state_province))]):t._e(),t._v(" "),t.$root.tenant.phone?a("li",[a("small",{staticClass:"text-muted"},[t._v("Phone no.")]),t._v(" "+t._s(t.$root.tenant.phone))]):t._e(),t._v(" "),t.$root.tenant.website?a("li",[a("small",{staticClass:"text-muted"},[t._v("Website")]),t._v(" "+t._s(t.$root.tenant.website))]):t._e()])])]),t._v(" "),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"mb-4"},[a("div",{staticClass:"text-sm-right"},[a("h4",{staticClass:"text-primary mb-2 mt-md-2"},[t._v(t._s(t.txnData.document_name)+" #"+t._s(t.txnData.number))]),t._v(" "),a("ul",{staticClass:"list list-unstyled mb-0"},[a("li",[t._v("Date: "),a("span",{staticClass:"font-weight-semibold"},[t._v(t._s(t.txnData.date))])]),t._v(" "),t.txnData.due_date?a("li",[t._v("Due date: "),a("span",{staticClass:"font-weight-semibold"},[t._v(t._s(t.txnData.due_date))])]):t._e()])])])])]),t._v(" "),a("div",{staticClass:"d-md-flex flex-md-wrap"},[a("div",{staticClass:"mb-4 mb-md-2"},[a("span",{staticClass:"text-muted"},[t._v(t._s(t.txnData.document_name)+" To:")]),t._v(" "),t.txnData.contact?a("ul",{staticClass:"list list-unstyled mb-0"},[a("li",[a("h5",{staticClass:"my-2"},[t._v(t._s(t.txnData.contact.contact_salutation)+" "+t._s(t.txnData.contact_name))])]),t._v(" "),t.txnData.contact.shipping_address_street1&&t.txnData.contact.shipping_address_street2?a("li",[a("span",{staticClass:"font-weight-semibold"},[t._v(t._s(t.txnData.contact.shipping_address_street1)+" "+t._s(t.txnData.contact.shipping_address_street2))])]):t._e(),t._v(" "),t.txnData.contact.shipping_address_city?a("li",[t._v(t._s(t.txnData.contact.shipping_address_city))]):t._e(),t._v(" "),t.txnData.contact.shipping_address_state?a("li",[t._v(t._s(t.txnData.contact.shipping_address_state))]):t._e(),t._v(" "),t.txnData.contact.shipping_address_country?a("li",[t._v(t._s(t.txnData.contact.shipping_address_country))]):t._e(),t._v(" "),t.txnData.contact.contact_work_phone?a("li",[t._v(t._s(t.txnData.contact.contact_work_phone))]):t._e(),t._v(" "),t.txnData.contact.contact_email?a("li",[a("a",{attrs:{href:"#"}},[t._v(t._s(t.txnData.contact.contact_email))])]):t._e()]):t._e()])])]),t._v(" "),a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-lg"},[t._m(3),t._v(" "),a("tbody",t._l(t.txnData.items,(function(s){return["txn","txn_type","tax"].includes(s.type)?t._e():a("tr",[a("td",[a("h6",{staticClass:"mb-0"},[t._v(t._s(s.name))]),t._v(" "),a("span",{},[t._v(t._s(s.description))])]),t._v(" "),a("td",{},[t._v(t._s(s.batch))]),t._v(" "),a("td",{staticClass:"text-right font-weight-bold"},[t._v(t._s(t.$root.numberFormat(s.quantity)))])])})),0)])]),t._v(" "),t._m(4),t._v(" "),t._m(5)])]):t._e()],1)])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"page-header-content header-elements-md-inline"},[s("div",{staticClass:"page-title d-flex"},[s("h4",[s("i",{staticClass:"icon-files-empty2 mr-2"}),this._v(" "),s("span",{staticClass:"font-weight-semibold"},[this._v("Goods Issued Note")])]),this._v(" "),s("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[s("i",{staticClass:"icon-more"})])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[s("i",{staticClass:"icon-more"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("button",{staticClass:"btn btn-light btn-sm ml-1",attrs:{type:"button",onclick:"window.print();"}},[s("i",{staticClass:"icon-printer mr-2"}),this._v(" Print")])},function(){var t=this.$createElement,s=this._self._c||t;return s("thead",[s("tr",{staticClass:"bg-light"},[s("th",{staticClass:"font-weight-bold"},[this._v("Description")]),this._v(" "),s("th",{staticClass:"font-weight-bold"},[this._v("Batch")]),this._v(" "),s("th",{staticClass:"font-weight-bold text-right"},[this._v("Quantity")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"card-body pr-0"},[s("div",{staticClass:"d-md-flex flex-md-wrap"},[s("div",{staticClass:"pt-2 mb-3 text-muted"},[s("h6",[this._v("Authorized Stamp / Signature")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"card-footer"},[s("span",{staticClass:"text-muted"},[this._v("Thank you for working with us. Always contact us for any feedback.")])])}],!1,null,null,null);s.default=n.exports}}]);