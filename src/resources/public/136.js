(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{"Or/e":function(t,s,a){"use strict";a.r(s);var e={data:function(){return{}},watch:{$route:function(t,s){this.txnShowId!==this.$route.params.id&&this.txnFetchData()}},mounted:function(){this.$root.appMenu("accounting"),this.txnFetchData(),this.txnShowId=this.$route.params.id},methods:{},ready:function(){},beforeUpdate:function(){},updated:function(){this.txnShowId=this.$route.params.id,document.title=this.txnData.document_name+" "+this.txnData.number}},i=a("KHd+"),n=Object(i.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"page-header page-header-light d-print-none"},[a("div",{staticClass:"page-header-content header-elements-md-inline"},[t._m(0),t._v(" "),a("div",{staticClass:"header-elements"},[a("div",{staticClass:"breadcrumb justify-content-center"},[a("router-link",{staticClass:"btn btn-outline btn-primary border-primary text-primary-800 border-2 btn-sm rounded font-weight-bold mr-2",attrs:{to:"/invoices/create"}},[a("i",{staticClass:"icon-files-empty2 mr-1"}),t._v("\n                            New Invoice\n                        ")]),t._v(" "),a("button",{staticClass:"btn btn-outline btn-primary border-primary text-primary-800 border-2 btn-sm rounded btn-icon",attrs:{type:"button"},on:{click:function(s){t.$root.showSideBarRight=!0}}},[a("i",{staticClass:"icon-cog52"})])],1)])]),t._v(" "),a("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[a("div",{staticClass:"d-flex"},[a("div",{staticClass:"breadcrumb"},[a("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[a("i",{staticClass:"icon-home2 mr-2"}),t._v(" "),a("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(" "+t._s(t._f("truncate")(this.$root.tenant.name,30))+" ")])]),t._v(" "),a("span",{staticClass:"breadcrumb-item active"},[t._v("Invoices")])]),t._v(" "),t._m(1)])])]),t._v(" "),a("div",{staticClass:"content border-0 p-0"},[a("loading-txn-animation"),t._v(" "),!this.$root.loadingTxn&&t.txnData?a("div",{staticClass:"content"},["draft"===t.txnData.status?a("div",{staticClass:"card border-left-3 border-warning rounded-0 max-width-960 ml-auto mr-auto rg-print-border-0"},[a("div",{staticClass:"card-header header-elements-inline d-print-none text-danger"},[a("h6",{staticClass:"card-title font-weight-bold"},[t._v("\n                            Approve "+t._s(t.txnData.document_name)),a("br"),t._v(" "),a("small",[t._v("You are viewing a draft")])]),t._v(" "),a("div",{staticClass:"header-elements"},[a("button",{staticClass:"btn bg-success font-weight-bold mr-1",attrs:{type:"button"},on:{click:function(s){return t.txnApprove("/invoices/"+t.txnData.id+"/approve")}}},[a("i",{staticClass:"icon-printer mr-2"}),t._v(" Click here to Approve\n                            ")]),t._v(" "),a("router-link",{staticClass:"btn bg-warning font-weight-bold mr-1",attrs:{to:"/invoices/"+t.$route.params.id+"/edit"}},[a("i",{staticClass:"icon-pencil7 mr-2"}),t._v("\n                                Edit\n                            ")]),t._v(" "),a("button",{staticClass:"btn bg-danger font-weight-bold",attrs:{type:"button"},on:{click:function(s){return t.txnDelete("/invoices/"+t.txnData.id)}}},[a("i",{staticClass:"icon-bin mr-2"}),t._v(" Delete\n                            ")])],1)])]):t._e(),t._v(" "),this.$root.loadingTxn?t._e():a("div",{staticClass:"card max-width-960 m-auto rg-print-border-0"},[a("div",{staticClass:"card-header bg-transparent header-elements-inline d-print-none"},[a("h6",{staticClass:"card-title"},[t._v(t._s(t.txnData.document_name)+" #"+t._s(t.txnData.number))]),t._v(" "),a("div",{staticClass:"header-elements"},[t.txnData.balance>0?a("router-link",{staticClass:"btn btn-success btn-sm ml-1 btn-labeled btn-labeled-left font-weight-bold",attrs:{to:"/payments-received/create?invoice="+t.$route.params.id}},[a("b",[a("i",{staticClass:"icon-cash3"})]),t._v("\n                                Receipt\n                            ")]):t._e(),t._v(" "),a("router-link",{staticClass:"btn btn-light btn-sm ml-1",attrs:{to:"/invoices/"+t.$route.params.id+"/copy"}},[a("i",{staticClass:"icon-copy"}),t._v("\n                                Copy\n                            ")]),t._v(" "),t._m(2)],1)]),t._v(" "),a("div",{staticClass:"card-body"},[t.$root.tenant.logo?a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6 mb-2"},[a("img",{attrs:{src:"/timthumb.php?src=storage/"+t.$root.tenant.logo+"&h=27&q=100",alt:t.$root.tenant.name}})])]):t._e(),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"mb-4"},[a("ul",{staticClass:"list list-unstyled mb-0"},[a("li",[a("h5",{staticClass:"rg-font-weight-600"},[t._v(t._s(t.$root.tenant.name))])]),t._v(" "),t.$root.tenant.street_line_1?a("li",[a("small",{staticClass:"text-muted"},[t._v("Street #1")]),t._v(" "+t._s(t.$root.tenant.street_line_1))]):t._e(),t._v(" "),t.$root.tenant.street_line_2?a("li",[a("small",{staticClass:"text-muted"},[t._v("Street #2")]),t._v(" "+t._s(t.$root.tenant.street_line_2))]):t._e(),t._v(" "),t.$root.tenant.city?a("li",[a("small",{staticClass:"text-muted"},[t._v("City")]),t._v(" "+t._s(t.$root.tenant.city))]):t._e(),t._v(" "),t.$root.tenant.state_province?a("li",[a("small",{staticClass:"text-muted"},[t._v("Province")]),t._v(" "+t._s(t.$root.tenant.state_province))]):t._e(),t._v(" "),t.$root.tenant.phone?a("li",[a("small",{staticClass:"text-muted"},[t._v("Phone no.")]),t._v(" "+t._s(t.$root.tenant.phone))]):t._e(),t._v(" "),t.$root.tenant.website?a("li",[a("small",{staticClass:"text-muted"},[t._v("Website")]),t._v(" "+t._s(t.$root.tenant.website))]):t._e()])])]),t._v(" "),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"mb-4"},[a("div",{staticClass:"text-sm-right"},[a("h4",{staticClass:"text-primary mb-2 mt-md-2"},[t._v(t._s(t.txnData.document_name)+" #"+t._s(t.txnData.number))]),t._v(" "),a("ul",{staticClass:"list list-unstyled mb-0"},[a("li",[t._v("Date: "),a("span",{staticClass:"font-weight-semibold"},[t._v(t._s(t.txnData.date))])]),t._v(" "),t.txnData.due_date?a("li",[t._v("Due date: "),a("span",{staticClass:"font-weight-semibold"},[t._v(t._s(t.txnData.due_date))])]):t._e()])])])])]),t._v(" "),a("div",{staticClass:"d-md-flex flex-md-wrap"},[a("div",{staticClass:"mb-4 mb-md-2"},[a("span",{staticClass:"text-muted"},[t._v(t._s(t.txnData.document_name)+" To:")]),t._v(" "),t.txnData.contact?a("ul",{staticClass:"list list-unstyled mb-0"},[a("li",[a("h5",{staticClass:"my-2"},[t._v(t._s(t.txnData.contact.contact_salutation)+" "+t._s(t.txnData.contact_name))])]),t._v(" "),t.txnData.contact.shipping_address_street1&&t.txnData.contact.shipping_address_street2?a("li",[a("span",{staticClass:"font-weight-semibold"},[t._v(t._s(t.txnData.contact.shipping_address_street1)+" "+t._s(t.txnData.contact.shipping_address_street2))])]):t._e(),t._v(" "),t.txnData.contact.shipping_address_city?a("li",[t._v(t._s(t.txnData.contact.shipping_address_city))]):t._e(),t._v(" "),t.txnData.contact.shipping_address_state?a("li",[t._v(t._s(t.txnData.contact.shipping_address_state))]):t._e(),t._v(" "),t.txnData.contact.shipping_address_country?a("li",[t._v(t._s(t.txnData.contact.shipping_address_country))]):t._e(),t._v(" "),t.txnData.contact.contact_work_phone?a("li",[t._v(t._s(t.txnData.contact.contact_work_phone))]):t._e(),t._v(" "),t.txnData.contact.contact_email?a("li",[a("a",{attrs:{href:"#"}},[t._v(t._s(t.txnData.contact.contact_email))])]):t._e()]):t._e()]),t._v(" "),a("div",{staticClass:"mb-2 ml-auto"},[a("span",{staticClass:"text-muted"},[t._v("Summary:")]),t._v(" "),a("div",{staticClass:"d-flex flex-wrap wmin-md-400"},[a("ul",{staticClass:"list list-unstyled mb-0"},[t._m(3),t._v(" "),t.txnData.reference?a("li",[t._v("Reference:")]):t._e()]),t._v(" "),a("ul",{staticClass:"list list-unstyled text-right mb-0 ml-auto"},[a("li",[a("h5",{staticClass:"font-weight-semibold my-2"},[t._v(t._s(t.$root.numberFormat(t.txnData.total)))])]),t._v(" "),t.txnData.reference?a("li",[t._v(t._s(t.txnData.reference))]):t._e()])])])])]),t._v(" "),a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-lg"},[a("thead",[a("tr",{staticClass:"bg-light"},[a("th",{staticClass:"font-weight-bold"},[t._v("Description")]),t._v(" "),a("th",{staticClass:"font-weight-bold text-right"},[t._v("Rate")]),t._v(" "),a("th",{staticClass:"font-weight-bold text-right"},[t._v("Quantity")]),t._v(" "),a("th",{staticClass:"font-weight-bold text-right"},[t._v("Total "),a("small",[t._v(" "+t._s(t.txnData.base_currency))])])])]),t._v(" "),a("tbody",t._l(t.txnData.items,(function(s){return["receipt","txn","txn_type","tax"].includes(s.type)?t._e():a("tr",[a("td",[a("h6",{staticClass:"mb-0"},[t._v(t._s(s.name))]),t._v(" "),s.description?a("div",{staticClass:"ml-1 mt-1 pl-2 border-left-2 border-left-grey-300",domProps:{innerHTML:t._s(t.rgNl2br(s.description))}}):t._e()]),t._v(" "),a("td",{staticClass:"text-right"},[t._v(t._s(t.$root.numberFormat(s.rate)))]),t._v(" "),a("td",{staticClass:"text-right"},[t._v(t._s(t.$root.numberFormat(s.quantity)))]),t._v(" "),a("td",{staticClass:"text-right"},[a("span",{staticClass:"font-weight-semibold"},[t._v(t._s(t.$root.numberFormat(s.total)))])])])})),0)])]),t._v(" "),a("div",{staticClass:"card-body pr-0"},[a("div",{staticClass:"d-md-flex flex-md-wrap"},[t._m(4),t._v(" "),a("div",{staticClass:"mb-3 wmin-md-400 ml-auto"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table"},[a("tbody",[a("tr",[a("th",[t._v("Subtotal:")]),t._v(" "),a("td",{staticClass:"text-right"},[t._v(t._s(t.$root.numberFormat(t.txnData.taxable_amount)))])]),t._v(" "),t._l(t.txnData.taxes,(function(s){return a("tr",[a("th",[t._v(t._s(s.tax.display_name))]),t._v(" "),a("td",{staticClass:"text-right"},[t._v(t._s(t.$root.numberFormat(s.amount)))])])})),t._v(" "),a("tr",[a("th",[t._v("Total:")]),t._v(" "),a("td",{staticClass:"text-right"},[a("span",[t._v(t._s(t.txnData.base_currency))]),t._v(" "),a("span",{staticClass:"h5 font-weight-semibold"},[t._v(t._s(t.$root.numberFormat(t.txnData.total)))])])])],2)])]),t._v(" "),a("div",{staticClass:"text-right mt-3 mr-3 d-print-none"},[a("button",{staticClass:"btn btn-primary btn-labeled btn-labeled-left",attrs:{type:"button"}},[t._m(5),t._v(" Send "+t._s(t.txnData.document_name)+"\n                                    ")])])])])]),t._v(" "),a("div",{staticClass:"card-body"},[a("h6",[t._v("Amount in words:")]),t._v(" "),a("p",{staticClass:"text-muted"},[t._v(t._s(t.txnData.total_in_words))])]),t._v(" "),t._m(6)]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12 max-width-960 m-auto p-0"},t._l(t.txnData.annexes,(function(s){return"receipt"===s.name?a("div",{staticClass:"card border-left-3 border-left-success rounded-left-0 mt-2"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"d-sm-flex align-item-sm-center flex-sm-nowrap"},[a("div",[a("h6",{staticClass:"font-weight-semibold"},[t._v(t._s(s.receipt.contact_name))]),t._v(" "),a("ul",{staticClass:"list list-unstyled mb-0"},[a("li",[t._v("Date: "),a("span",{staticClass:"text-semibold"},[t._v(t._s(s.receipt.date))])]),t._v(" "),a("li",[t._v("Receipt #:  "+t._s(s.receipt.number))]),t._v(" "),a("li",[t._v("Reference: "),a("span",{staticClass:"text-semibold"},[t._v(t._s(s.receipt.reference))])])])]),t._v(" "),a("div",{staticClass:"text-sm-right mb-0 mt-3 mt-sm-0 ml-auto"},[a("h6",{staticClass:"font-weight-semibold"},[t._v(t._s(t.$root.numberFormat(s.receipt.total))+" "+t._s(s.receipt.base_currency))]),t._v(" "),a("ul",{staticClass:"list list-unstyled mb-0"},[a("li",[t._v("Method: "),a("span",{staticClass:"font-weight-semibold"},[t._v(t._s(s.receipt.payment_mode))])]),t._v(" "),a("li",[t._v("Account: "),a("span",{staticClass:"text-semibold"},[t._v(" "+t._s(s.receipt.debit_account.name))])]),t._v(" "),t._m(7,!0)])])])]),t._v(" "),a("div",{staticClass:"card-footer d-sm-flex justify-content-sm-between align-items-sm-center"},[a("span",[a("span",{staticClass:"badge badge-mark border-success mr-2"}),t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.receipt.items[0].name)+"\n\t\t\t\t\t\t\t\t\t\t\t"),a("span",{staticClass:"font-weight-semibold"},[t._v("Receipt")])]),t._v(" "),a("ul",{staticClass:"list-inline list-inline-condensed mb-0 mt-2 mt-sm-0"},[a("li",{staticClass:"list-inline-item"},[a("a",{staticClass:"text-default",attrs:{href:"/receipts/"+s.receipt.id}},[a("i",{staticClass:"icon-eye8"})])])])])]):t._e()})),0)])]):t._e()],1)])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"page-title d-flex"},[s("h4",[s("i",{staticClass:"icon-files-empty2 mr-2"}),this._v(" "),s("span",{staticClass:"font-weight-semibold"},[this._v("Invoice")])]),this._v(" "),s("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[s("i",{staticClass:"icon-more"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[s("i",{staticClass:"icon-more"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("button",{staticClass:"btn btn-light btn-sm ml-2",attrs:{type:"button",onclick:"window.print();"}},[s("i",{staticClass:"icon-printer mr-2"}),this._v(" Print")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("h5",{staticClass:"my-2"},[this._v("Total Due:")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"pt-2 mb-3 text-muted"},[s("h6",[this._v("Authorized Stamp / Signature")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("b",[s("i",{staticClass:"icon-paperplane"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"card-footer"},[s("span",{staticClass:"text-muted"},[this._v("Thank you for working with us. Always contact us for any feedback.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",{staticClass:"dropdown"},[this._v("\n                                                Status:  \n                                                "),s("span",{staticClass:"badge bg-success-400 align-top font-weight-bold"},[this._v("Completed")])])}],!1,null,null,null);s.default=n.exports}}]);