(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{DWPA:function(t,a,s){(t.exports=s("I1BE")(!1)).push([t.i,"\n.dropdown-menu-center {\n    right: auto !important;;\n    left: 50% !important;;\n    transform: translate(-50%, 68px) !important;\n}\n",""])},"I3/q":function(t,a,s){"use strict";s.r(a);var e={components:{FinancialAccountingFooter:s("rfm/").a},data:function(){return{UpdateRecurringConfiguration:!1}},watch:{$route:function(t,a){this.txnShowId!==this.$route.params.id&&this.txnFetchData()},"txnData.recurring.frequency":function(t,a){if(void 0===a)return!1;this.RecurringPropertiesOnChange()},"txnData.recurring.status":function(t,a){this.RecurringPropertiesOnChange()}},mounted:function(){this.$root.appMenu("accounting"),this.txnFetchData(),this.txnShowId=this.$route.params.id},methods:{RecurringPropertiesOnChange:function(){JSON.stringify(this.txnData.recurring)!==JSON.stringify(this.txnDataOriginal.recurring)?this.UpdateRecurringConfiguration=!0:this.UpdateRecurringConfiguration=!1},RecurringPropertiesUpdate:function(t){t.preventDefault();var a=this;PNotify.removeAll();var s=JSON.parse(JSON.stringify(this.$root.PNotifySettings)),e=new PNotify(s);axios.patch("/recurring-bills/recurring/"+this.txnData.id+"/properties/"+this.txnData.recurring.id,this.txnData.recurring).then((function(t){s.text=t.data.messages.join("\n"),!0===t.data.status?(s.title="Success",s.type="success",s.addclass="bg-success-400 border-success-400",e.update(s),a.UpdateRecurringConfiguration=!1,a.txnDataOriginal.recurring=t.data.recurringProperties):(s.title="! Error",s.type="error",s.addclass="bg-warning-400 border-warning-400",e.update(s)),e.get().click((function(){e.remove()}))})).catch((function(t){}))}},ready:function(){},beforeUpdate:function(){},updated:function(){this.txnShowId=this.$route.params.id,document.title=this.txnData.document_name+" "+this.txnData.number}},i=(s("o13l"),s("KHd+")),n=Object(i.a)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content-wrapper"},[s("div",{staticClass:"page-header page-header-light d-print-none"},[t._m(0),t._v(" "),s("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[s("div",{staticClass:"d-flex"},[s("div",{staticClass:"breadcrumb"},[s("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[s("i",{staticClass:"icon-home2 mr-2"}),t._v(" "),s("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(" "+t._s(t._f("truncate")(this.$root.tenant.name,30))+" ")])]),t._v(" "),s("span",{staticClass:"breadcrumb-item"},[t._v("Accounting")]),t._v(" "),s("span",{staticClass:"breadcrumb-item"},[t._v("Purchases")]),t._v(" "),s("span",{staticClass:"breadcrumb-item active"},[t._v("Recurring Bill")])]),t._v(" "),t._m(1)]),t._v(" "),s("div",{staticClass:"header-elements"},[s("div",{staticClass:"breadcrumb justify-content-center"},[s("router-link",{staticClass:"btn btn-outline btn-primary border-primary text-primary-800 border-2 btn-sm rounded font-weight-bold mr-2",attrs:{to:"/recurring-bills/create"}},[s("i",{staticClass:"icon-files-empty2 mr-1"}),t._v("\n                        New Recurring Bill\n                    ")]),t._v(" "),s("button",{staticClass:"btn btn-outline btn-primary border-primary text-primary-800 border-2 btn-sm rounded btn-icon",attrs:{type:"button"},on:{click:function(a){t.$root.showSideBarRight=!0}}},[s("i",{staticClass:"icon-cog52"})])],1)])])]),t._v(" "),s("div",{staticClass:"content border-0 p-0"},[s("loading-txn-animation"),t._v(" "),!this.$root.loadingTxn&&t.txnData?s("div",{staticClass:"content"},[s("div",{staticClass:"card rounded-0 max-width-960 ml-auto mr-auto rg-print-border-0"},[t._m(2),t._v(" "),s("div",{staticClass:"card-body"},[s("div",{staticClass:"row text-center"},[s("div",{staticClass:"col-sm-12 col-md-4 border-right-1 border-light"},[t._m(3),t._v(" "),s("div",{staticClass:"justify-content-center"},[s("div",{staticClass:"dropdown-toggle font-weight-semibold h5 mb-0 text-capitalize cursor-pointer",attrs:{"data-toggle":"dropdown"}},[t._v(t._s(t.txnData.recurring.frequency))]),t._v(" "),t.txnData.recurringOptions.frequency?s("div",{staticClass:"dropdown-menu dropdown-menu-center"},t._l(t.txnData.recurringOptions.frequency,(function(a){return s("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:[function(t){t.preventDefault()},function(s){t.txnData.recurring.frequency=a.value}]}},[t._v(t._s(a.text))])})),0):t._e()]),t._v(" "),s("span",{staticClass:"text-muted font-size-sm"},[t._v("Frequency")])]),t._v(" "),s("div",{staticClass:"col-sm-12 col-md-4 border-right-1 border-light"},[t._m(4),t._v(" "),s("h5",{staticClass:"font-weight-semibold mb-0"},[t._v(t._s(t.txnData.recurring.start_date)+" to "+t._s(t.txnData.recurring.end_date))]),t._v(" "),s("span",{staticClass:"text-muted font-size-sm"},[t._v("Date range")])]),t._v(" "),s("div",{staticClass:"col-sm-12 col-md-4"},[t._m(5),t._v(" "),s("div",{staticClass:"justify-content-center"},[s("div",{staticClass:"dropdown-toggle font-weight-semibold h5 mb-0 text-capitalize cursor-pointer",attrs:{"data-toggle":"dropdown"}},[t._v(t._s(t.txnData.recurring.status))]),t._v(" "),s("div",{staticClass:"dropdown-menu dropdown-menu-center"},[s("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:[function(t){t.preventDefault()},function(a){t.txnData.recurring.status="active"}]}},[t._v("Active")]),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:[function(t){t.preventDefault()},function(a){t.txnData.recurring.status="paused"}]}},[t._v("Paused")]),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:[function(t){t.preventDefault()},function(a){t.txnData.recurring.status="de-activated"}]}},[t._v("De-activated")])])]),t._v(" "),s("span",{staticClass:"text-muted font-size-sm"},[t._v("Status")])])]),t._v(" "),t.UpdateRecurringConfiguration?s("div",{staticClass:"row text-center mt-3"},[s("div",{staticClass:"col-12"},[s("button",{staticClass:"btn btn-primary btn-labeled btn-labeled-left font-weight-bold",attrs:{type:"button"},on:{click:t.RecurringPropertiesUpdate}},[t._m(6),t._v(" Update recurring Properties\n                            ")])])]):t._e()]),t._v(" "),t._m(7)]),t._v(" "),"draft"===t.txnData.status?s("div",{staticClass:"card border-left-3 border-warning rounded-0 max-width-960 ml-auto mr-auto rg-print-border-0"},[s("div",{staticClass:"card-header header-elements-inline d-print-none text-danger"},[s("h6",{staticClass:"card-title font-weight-bold"},[t._v("\n                        Approve "+t._s(t.txnData.document_name)),s("br"),t._v(" "),s("small",[t._v("You are viewing a draft")])]),t._v(" "),s("div",{staticClass:"header-elements"},[s("button",{staticClass:"btn bg-warning font-weight-bold",attrs:{type:"button"},on:{click:function(a){return t.txnApprove("/recurring-bills/"+t.txnData.id+"/approve")}}},[s("i",{staticClass:"icon-printer mr-2"}),t._v(" Click here to Approve")])])])]):t._e(),t._v(" "),this.$root.loadingTxn?t._e():s("div",{staticClass:"card max-width-960 m-auto rg-print-border-0"},[s("div",{staticClass:"card-header bg-transparent header-elements-inline d-print-none"},[s("h6",{staticClass:"card-title"},[t._v(t._s(t.txnData.document_name)+" #"+t._s(t.txnData.number))]),t._v(" "),s("div",{staticClass:"header-elements"},[s("router-link",{staticClass:"btn btn-light btn-sm",attrs:{to:"/recurring-bills/"+t.$route.params.id+"/copy"}},[s("i",{staticClass:"icon-copy"}),t._v("\n                            Copy\n                        ")]),t._v(" "),t._m(8)],1)]),t._v(" "),s("div",{staticClass:"card-body"},[t.$root.tenant.logo?s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-6 mb-2"},[s("img",{attrs:{src:"/timthumb.php?src=storage/"+t.$root.tenant.logo+"&h=27&q=100",alt:t.$root.tenant.name}})])]):t._e(),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-6"},[s("div",{staticClass:"mb-4"},[s("ul",{staticClass:"list list-unstyled mb-0"},[s("li",[s("h5",{staticClass:"rg-font-weight-600"},[t._v(t._s(t.$root.tenant.name))])]),t._v(" "),t.$root.tenant.street_line_1?s("li",[s("small",{staticClass:"text-muted"},[t._v("Street #1")]),t._v(" "+t._s(t.$root.tenant.street_line_1))]):t._e(),t._v(" "),t.$root.tenant.street_line_2?s("li",[s("small",{staticClass:"text-muted"},[t._v("Street #2")]),t._v(" "+t._s(t.$root.tenant.street_line_2))]):t._e(),t._v(" "),t.$root.tenant.city?s("li",[s("small",{staticClass:"text-muted"},[t._v("City")]),t._v(" "+t._s(t.$root.tenant.city))]):t._e(),t._v(" "),t.$root.tenant.state_province?s("li",[s("small",{staticClass:"text-muted"},[t._v("Province")]),t._v(" "+t._s(t.$root.tenant.state_province))]):t._e(),t._v(" "),t.$root.tenant.phone?s("li",[s("small",{staticClass:"text-muted"},[t._v("Phone no.")]),t._v(" "+t._s(t.$root.tenant.phone))]):t._e(),t._v(" "),t.$root.tenant.website?s("li",[s("small",{staticClass:"text-muted"},[t._v("Website")]),t._v(" "+t._s(t.$root.tenant.website))]):t._e()])])]),t._v(" "),s("div",{staticClass:"col-sm-6"},[s("div",{staticClass:"mb-4"},[s("div",{staticClass:"text-sm-right"},[s("h4",{staticClass:"text-primary mb-2 mt-md-2"},[t._v(t._s(t.txnData.document_name)+" #"+t._s(t.txnData.number))]),t._v(" "),s("ul",{staticClass:"list list-unstyled mb-0"},[s("li",[t._v("Date: "),s("span",{staticClass:"font-weight-semibold"},[t._v(t._s(t.txnData.date))])]),t._v(" "),t.txnData.due_date?s("li",[t._v("Due date: "),s("span",{staticClass:"font-weight-semibold"},[t._v(t._s(t.txnData.due_date))])]):t._e()])])])])]),t._v(" "),s("div",{staticClass:"d-md-flex flex-md-wrap"},[s("div",{staticClass:"mb-4 mb-md-2"},[s("span",{staticClass:"text-muted"},[t._v(t._s(t.txnData.document_name)+" To:")]),t._v(" "),t.txnData.contact?s("ul",{staticClass:"list list-unstyled mb-0"},[s("li",[s("h5",{staticClass:"my-2"},[t._v(t._s(t.txnData.contact.contact_salutation)+" "+t._s(t.txnData.contact_name))])]),t._v(" "),t.txnData.contact.shipping_address_street1&&t.txnData.contact.shipping_address_street2?s("li",[s("span",{staticClass:"font-weight-semibold"},[t._v(t._s(t.txnData.contact.shipping_address_street1)+" "+t._s(t.txnData.contact.shipping_address_street2))])]):t._e(),t._v(" "),t.txnData.contact.shipping_address_city?s("li",[t._v(t._s(t.txnData.contact.shipping_address_city))]):t._e(),t._v(" "),t.txnData.contact.shipping_address_state?s("li",[t._v(t._s(t.txnData.contact.shipping_address_state))]):t._e(),t._v(" "),t.txnData.contact.shipping_address_country?s("li",[t._v(t._s(t.txnData.contact.shipping_address_country))]):t._e(),t._v(" "),t.txnData.contact.contact_work_phone?s("li",[t._v(t._s(t.txnData.contact.contact_work_phone))]):t._e(),t._v(" "),t.txnData.contact.contact_email?s("li",[s("a",{attrs:{href:"#"}},[t._v(t._s(t.txnData.contact.contact_email))])]):t._e()]):t._e()]),t._v(" "),s("div",{staticClass:"mb-2 ml-auto"},[s("span",{staticClass:"text-muted"},[t._v("Summary:")]),t._v(" "),s("div",{staticClass:"d-flex flex-wrap wmin-md-400"},[s("ul",{staticClass:"list list-unstyled mb-0"},[t._m(9),t._v(" "),t.txnData.reference?s("li",[t._v("Reference:")]):t._e()]),t._v(" "),s("ul",{staticClass:"list list-unstyled text-right mb-0 ml-auto"},[s("li",[s("h5",{staticClass:"font-weight-semibold my-2"},[t._v(t._s(t.rgNumberFormat(t.txnData.total,2)))])]),t._v(" "),t.txnData.reference?s("li",[t._v(t._s(t.txnData.reference))]):t._e()])])])])]),t._v(" "),s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-lg"},[s("thead",[s("tr",{staticClass:"bg-light"},[s("th",{staticClass:"font-weight-bold"},[t._v("Description")]),t._v(" "),s("th",{staticClass:"font-weight-bold text-right"},[t._v("Rate")]),t._v(" "),s("th",{staticClass:"font-weight-bold text-right"},[t._v("Quantity")]),t._v(" "),s("th",{staticClass:"font-weight-bold text-right"},[t._v("Total "),s("small",[t._v(" "+t._s(t.txnData.base_currency))])])])]),t._v(" "),s("tbody",t._l(t.txnData.items,(function(a){return["txn","txn_type","tax"].includes(a.type)?t._e():s("tr",[s("td",[s("h6",{staticClass:"mb-0"},[t._v(t._s(a.name))]),t._v(" "),s("span",{},[t._v(t._s(a.description))])]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.rgNumberFormat(a.rate,2)))]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.rgNumberFormat(a.quantity)))]),t._v(" "),s("td",{staticClass:"text-right"},[s("span",{staticClass:"font-weight-semibold"},[t._v(t._s(t.rgNumberFormat(a.total,2)))])])])})),0)])]),t._v(" "),s("div",{staticClass:"card-body pr-0"},[s("div",{staticClass:"d-md-flex flex-md-wrap"},[t._m(10),t._v(" "),s("div",{staticClass:"mb-3 wmin-md-400 ml-auto"},[s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table"},[s("tbody",[s("tr",[s("th",[t._v("Subtotal:")]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.rgNumberFormat(t.txnData.taxable_amount,2)))])]),t._v(" "),t._l(t.txnData.items,(function(a){return["txn_type","tax"].includes(a.type)?s("tr",[s("th",[t._v(t._s(a.description))]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.rgNumberFormat(a.total,t.$root.tenant.decimal_places)))])]):t._e()})),t._v(" "),s("tr",[s("th",[t._v("Total:")]),t._v(" "),s("td",{staticClass:"text-right"},[s("span",[t._v(t._s(t.txnData.base_currency))]),t._v(" "),s("span",{staticClass:"h5 font-weight-semibold"},[t._v(t._s(t.rgNumberFormat(t.txnData.total,2)))])])])],2)])])])])]),t._v(" "),s("div",{staticClass:"card-body"},[s("h6",[t._v("Amount in words:")]),t._v(" "),s("p",{staticClass:"text-muted"},[t._v(t._s(t.txnData.total_in_words))])]),t._v(" "),t._m(11)])]):t._e()],1),t._v(" "),s("financial-accounting-footer")],1)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"page-header-content header-elements-md-inline"},[a("div",{staticClass:"page-title d-flex"},[a("h4",[a("i",{staticClass:"icon-files-empty2 mr-2"}),this._v(" "),a("span",{staticClass:"font-weight-semibold"},[this._v("Recurring Bill")])]),this._v(" "),a("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[a("i",{staticClass:"icon-more"})])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[a("i",{staticClass:"icon-more"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-body"},[a("p",{staticClass:"card-text"},[a("i",{staticClass:"mi-info-outline mr-2"}),this._v(" Click on the status to change by choosing an option from the dropdown menu that appears\n                    ")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("i",{staticClass:"icon-pulse2 icon-2x d-inline-block text-info"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("i",{staticClass:"icon-calendar2 icon-2x d-inline-block text-warning"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("i",{staticClass:"icon-cash3 icon-2x d-inline-block text-success"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("b",[a("i",{staticClass:"mi-save"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-footer d-flex justify-content-between"},[a("span",{staticClass:"text-muted"},[a("i",{staticClass:"mi-info-outline mr-2"}),this._v(" This recurring transaction is automatically run on the due time.")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"btn btn-light btn-sm ml-3",attrs:{type:"button",onclick:"window.print();"}},[a("i",{staticClass:"icon-printer mr-2"}),this._v(" Print")])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[a("h5",{staticClass:"my-2"},[this._v("Total Due:")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"pt-2 mb-3 text-muted"},[a("h6",[this._v("Authorized Stamp / Signature")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-footer"},[a("span",{staticClass:"text-muted"},[this._v("Thank you for working with us. Always contact us for any feedback.")])])}],!1,null,null,null);a.default=n.exports},jQgg:function(t,a,s){var e=s("DWPA");"string"==typeof e&&(e=[[t.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(e,i);e.locals&&(t.exports=e.locals)},o13l:function(t,a,s){"use strict";s("jQgg")},"rfm/":function(t,a,s){"use strict";var e=s("KHd+"),i=Object(e.a)({},(function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"navbar navbar-expand-lg navbar-light"},[this._m(0),this._v(" "),a("div",{staticClass:"navbar-collapse collapse",attrs:{id:"navbar-footer"}},[a("span",{staticClass:"navbar-text"},[this._v("\n            © 2012 - 2021. "+this._s(this.$root.system.name)+"\n        ")]),this._v(" "),this._m(1)])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"text-center d-lg-none w-100"},[a("button",{staticClass:"navbar-toggler dropdown-toggle",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbar-footer"}},[a("i",{staticClass:"icon-unfold mr-2"}),this._v("\n            Footer\n        ")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",{staticClass:"navbar-nav ml-lg-auto"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"navbar-nav-link",attrs:{href:"/support",target:"_blank"}},[a("i",{staticClass:"icon-info22 mr-2"}),this._v(" Support")])]),this._v(" "),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"navbar-nav-link",attrs:{href:"/docs",target:"_blank"}},[a("i",{staticClass:"icon-file-text2 mr-2"}),this._v(" Docs")])]),this._v(" "),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"navbar-nav-link font-weight-semibold",attrs:{href:"/purchase"}},[a("span",{staticClass:"text-success-700"},[a("i",{staticClass:"icon-cart2 mr-2"}),this._v(" Purchase")])])])])}],!1,null,null,null);a.a=i.exports}}]);