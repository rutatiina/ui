(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{y4cG:function(t,a,s){"use strict";s.r(a);var e={name:"AccountingSalesRetainerInvoicesShow",data:function(){return{}},watch:{$route:function(t,a){this.txnShowId!==this.$route.params.id&&this.txnFetchData()}},mounted:function(){this.$root.appMenu("accounting"),this.txnFetchData(),this.txnShowId=this.$route.params.id},methods:{},ready:function(){},beforeUpdate:function(){},updated:function(){this.txnShowId=this.$route.params.id,document.title=this.txnData.document_name+" "+this.txnData.number}},i=s("KHd+"),n=Object(i.a)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content-wrapper"},[s("div",{staticClass:"page-header page-header-light d-print-none"},[t._m(0),t._v(" "),s("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[s("div",{staticClass:"d-flex"},[s("div",{staticClass:"breadcrumb"},[s("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[s("i",{staticClass:"icon-home2 mr-2"}),t._v(" "),s("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(" "+t._s(t._f("truncate")(this.$root.tenant.name,30))+" ")])]),t._v(" "),s("span",{staticClass:"breadcrumb-item active"},[t._v("Retainer Invoices")])]),t._v(" "),t._m(1)]),t._v(" "),s("div",{staticClass:"header-elements"},[s("div",{staticClass:"breadcrumb justify-content-center"},[s("router-link",{staticClass:"btn btn-outline btn-primary border-primary text-primary-800 border-2 btn-sm rounded font-weight-bold mr-2",attrs:{to:"/retainer-invoices/create"}},[s("i",{staticClass:"icon-files-empty2 mr-1"}),t._v("\n                        New Retainer Invoice\n                    ")]),t._v(" "),s("button",{staticClass:"btn btn-outline btn-primary border-primary text-primary-800 border-2 btn-sm rounded btn-icon",attrs:{type:"button"},on:{click:function(a){t.$root.showSideBarRight=!0}}},[s("i",{staticClass:"icon-cog52"})])],1)])])]),t._v(" "),s("div",{staticClass:"content border-0 p-0"},[s("loading-txn-animation"),t._v(" "),!this.$root.loadingTxn&&t.txnData?s("div",{staticClass:"content"},["draft"===t.txnData.status?s("div",{staticClass:"card border-left-3 border-warning rounded-0 max-width-960 ml-auto mr-auto rg-print-border-0"},[s("div",{staticClass:"card-header header-elements-inline d-print-none text-danger"},[s("h6",{staticClass:"card-title font-weight-bold"},[t._v("\n                        Approve "+t._s(t.txnData.document_name)),s("br"),t._v(" "),s("small",[t._v("You are viewing a draft")])]),t._v(" "),s("div",{staticClass:"header-elements"},[s("button",{staticClass:"btn bg-success font-weight-bold mr-1",attrs:{type:"button"},on:{click:function(a){return t.txnApprove("/retainer-invoices/"+t.txnData.id+"/approve")}}},[s("i",{staticClass:"icon-printer mr-2"}),t._v(" Click here to Approve\n                        ")]),t._v(" "),s("router-link",{staticClass:"btn bg-warning font-weight-bold mr-1",attrs:{to:"/retainer-invoices/"+t.$route.params.id+"/edit"}},[s("i",{staticClass:"icon-pencil7 mr-2"}),t._v("\n                            Edit\n                        ")]),t._v(" "),s("button",{staticClass:"btn bg-danger font-weight-bold",attrs:{type:"button"},on:{click:function(a){return t.txnDelete("/retainer-invoices/"+t.txnData.id)}}},[s("i",{staticClass:"icon-bin mr-2"}),t._v(" Delete\n                        ")])],1)])]):t._e(),t._v(" "),this.$root.loadingTxn?t._e():s("div",{staticClass:"card max-width-960 m-auto rg-print-border-0"},[s("div",{staticClass:"card-header bg-transparent header-elements-inline d-print-none"},[s("h6",{staticClass:"card-title"},[t._v(t._s(t.txnData.document_name)+" #"+t._s(t.txnData.number))]),t._v(" "),s("div",{staticClass:"header-elements"},[s("router-link",{staticClass:"btn btn-light btn-sm",attrs:{to:"/retainer-invoices/"+t.$route.params.id+"/copy"}},[s("i",{staticClass:"icon-copy"}),t._v("\n                            Copy\n                        ")]),t._v(" "),t._m(2)],1)]),t._v(" "),s("div",{staticClass:"card-body"},[t.$root.tenant.logo?s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-6 mb-2"},[s("img",{attrs:{src:"/timthumb.php?src=storage/"+t.$root.tenant.logo+"&h=27&q=100",alt:t.$root.tenant.name}})])]):t._e(),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-6"},[s("div",{staticClass:"mb-4"},[s("ul",{staticClass:"list list-unstyled mb-0"},[s("li",[s("h5",{staticClass:"rg-font-weight-600"},[t._v(t._s(t.$root.tenant.name))])]),t._v(" "),t.$root.tenant.street_line_1?s("li",[s("small",{staticClass:"text-muted"},[t._v("Street #1")]),t._v(" "+t._s(t.$root.tenant.street_line_1))]):t._e(),t._v(" "),t.$root.tenant.street_line_2?s("li",[s("small",{staticClass:"text-muted"},[t._v("Street #2")]),t._v(" "+t._s(t.$root.tenant.street_line_2))]):t._e(),t._v(" "),t.$root.tenant.city?s("li",[s("small",{staticClass:"text-muted"},[t._v("City")]),t._v(" "+t._s(t.$root.tenant.city))]):t._e(),t._v(" "),t.$root.tenant.state_province?s("li",[s("small",{staticClass:"text-muted"},[t._v("Province")]),t._v(" "+t._s(t.$root.tenant.state_province))]):t._e(),t._v(" "),t.$root.tenant.phone?s("li",[s("small",{staticClass:"text-muted"},[t._v("Phone no.")]),t._v(" "+t._s(t.$root.tenant.phone))]):t._e(),t._v(" "),t.$root.tenant.website?s("li",[s("small",{staticClass:"text-muted"},[t._v("Website")]),t._v(" "+t._s(t.$root.tenant.website))]):t._e()])])]),t._v(" "),s("div",{staticClass:"col-sm-6"},[s("div",{staticClass:"mb-4"},[s("div",{staticClass:"text-sm-right"},[s("h4",{staticClass:"text-primary mb-2 mt-md-2"},[t._v(t._s(t.txnData.document_name)+" #"+t._s(t.txnData.number))]),t._v(" "),s("ul",{staticClass:"list list-unstyled mb-0"},[s("li",[t._v("Date: "),s("span",{staticClass:"font-weight-semibold"},[t._v(t._s(t.txnData.date))])]),t._v(" "),t.txnData.due_date?s("li",[t._v("Due date: "),s("span",{staticClass:"font-weight-semibold"},[t._v(t._s(t.txnData.due_date))])]):t._e()])])])])]),t._v(" "),s("div",{staticClass:"d-md-flex flex-md-wrap"},[s("div",{staticClass:"mb-4 mb-md-2"},[s("span",{staticClass:"text-muted"},[t._v(t._s(t.txnData.document_name)+" To:")]),t._v(" "),t.txnData.contact?s("ul",{staticClass:"list list-unstyled mb-0"},[s("li",[s("h5",{staticClass:"my-2"},[t._v(t._s(t.txnData.contact.contact_salutation)+" "+t._s(t.txnData.contact_name))])]),t._v(" "),t.txnData.contact.shipping_address_street1&&t.txnData.contact.shipping_address_street2?s("li",[s("span",{staticClass:"font-weight-semibold"},[t._v(t._s(t.txnData.contact.shipping_address_street1)+" "+t._s(t.txnData.contact.shipping_address_street2))])]):t._e(),t._v(" "),t.txnData.contact.shipping_address_city?s("li",[t._v(t._s(t.txnData.contact.shipping_address_city))]):t._e(),t._v(" "),t.txnData.contact.shipping_address_state?s("li",[t._v(t._s(t.txnData.contact.shipping_address_state))]):t._e(),t._v(" "),t.txnData.contact.shipping_address_country?s("li",[t._v(t._s(t.txnData.contact.shipping_address_country))]):t._e(),t._v(" "),t.txnData.contact.contact_work_phone?s("li",[t._v(t._s(t.txnData.contact.contact_work_phone))]):t._e(),t._v(" "),t.txnData.contact.contact_email?s("li",[s("a",{attrs:{href:"#"}},[t._v(t._s(t.txnData.contact.contact_email))])]):t._e()]):t._e()]),t._v(" "),s("div",{staticClass:"mb-2 ml-auto"},[s("span",{staticClass:"text-muted"},[t._v("Summary:")]),t._v(" "),s("div",{staticClass:"d-flex flex-wrap wmin-md-400"},[s("ul",{staticClass:"list list-unstyled mb-0"},[t._m(3),t._v(" "),t.txnData.reference?s("li",[t._v("Reference:")]):t._e()]),t._v(" "),s("ul",{staticClass:"list list-unstyled text-right mb-0 ml-auto"},[s("li",[s("h5",{staticClass:"font-weight-semibold my-2"},[t._v(t._s(t.rgNumberFormat(t.txnData.total,2)))])]),t._v(" "),t.txnData.reference?s("li",[t._v(t._s(t.txnData.reference))]):t._e()])])])])]),t._v(" "),s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-lg"},[s("thead",[s("tr",{staticClass:"bg-light"},[s("th",{staticClass:"font-weight-bold"},[t._v("Description")]),t._v(" "),s("th",{staticClass:"font-weight-bold text-right"},[t._v("Rate")]),t._v(" "),s("th",{staticClass:"font-weight-bold text-right"},[t._v("Quantity")]),t._v(" "),s("th",{staticClass:"font-weight-bold text-right"},[t._v("Total "),s("small",[t._v(" "+t._s(t.txnData.base_currency))])])])]),t._v(" "),s("tbody",t._l(t.txnData.items,(function(a){return["txn","txn_type","tax"].includes(a.type)?t._e():s("tr",[s("td",[s("h6",{staticClass:"mb-0"},[t._v(t._s(a.name))]),t._v(" "),s("span",{},[t._v(t._s(a.description))])]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.rgNumberFormat(a.rate,2)))]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.rgNumberFormat(a.quantity)))]),t._v(" "),s("td",{staticClass:"text-right"},[s("span",{staticClass:"font-weight-semibold"},[t._v(t._s(t.rgNumberFormat(a.total,2)))])])])})),0)])]),t._v(" "),s("div",{staticClass:"card-body pr-0"},[s("div",{staticClass:"d-md-flex flex-md-wrap"},[t._m(4),t._v(" "),s("div",{staticClass:"mb-3 wmin-md-400 ml-auto"},[s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table"},[s("tbody",[s("tr",[s("th",[t._v("Subtotal:")]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.rgNumberFormat(t.txnData.taxable_amount,2)))])]),t._v(" "),t._l(t.txnData.taxes,(function(a){return s("tr",[s("th",[t._v(t._s(a.tax.display_name))]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.rgNumberFormat(a.amount,t.$root.tenant.decimal_places)))])])})),t._v(" "),s("tr",[s("th",[t._v("Total:")]),t._v(" "),s("td",{staticClass:"text-right"},[s("span",[t._v(t._s(t.txnData.base_currency))]),t._v(" "),s("span",{staticClass:"h5 font-weight-semibold"},[t._v(t._s(t.rgNumberFormat(t.txnData.total,2)))])])])],2)])]),t._v(" "),s("div",{staticClass:"text-right mt-3 mr-3 d-print-none"},[s("button",{staticClass:"btn btn-primary btn-labeled btn-labeled-left",attrs:{type:"button"}},[t._m(5),t._v(" Send "+t._s(t.txnData.document_name)+"\n                                ")])])])])]),t._v(" "),s("div",{staticClass:"card-body"},[s("h6",[t._v("Amount in words:")]),t._v(" "),s("p",{staticClass:"text-muted"},[t._v(t._s(t.txnData.total_in_words))])]),t._v(" "),t._m(6)])]):t._e()],1)])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"page-header-content header-elements-md-inline"},[a("div",{staticClass:"page-title d-flex"},[a("h4",[a("i",{staticClass:"icon-files-empty2 mr-2"}),this._v(" "),a("span",{staticClass:"font-weight-semibold"},[this._v("Retainer Invoices")])]),this._v(" "),a("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[a("i",{staticClass:"icon-more"})])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[a("i",{staticClass:"icon-more"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"btn btn-light btn-sm ml-1",attrs:{type:"button",onclick:"window.print();"}},[a("i",{staticClass:"icon-printer mr-2"}),this._v(" Print")])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[a("h5",{staticClass:"my-2"},[this._v("Total Due:")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"pt-2 mb-3 text-muted"},[a("h6",[this._v("Authorized Stamp / Signature")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("b",[a("i",{staticClass:"icon-paperplane"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-footer"},[a("span",{staticClass:"text-muted"},[this._v("Thank you for working with us. Always contact us for any feedback.")])])}],!1,null,null,null);a.default=n.exports}}]);