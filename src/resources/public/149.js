(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{iMSN:function(t,a,s){"use strict";s.r(a);var e={name:"AccountingSalesEstimatesShow",data:function(){return{}},watch:{$route:function(t,a){this.txnShowId!==this.$route.params.id&&this.txnFetchData()}},mounted:function(){this.$root.appMenu("accounting"),this.txnFetchData(),this.txnShowId=this.$route.params.id},methods:{},ready:function(){},beforeUpdate:function(){},updated:function(){this.txnShowId=this.$route.params.id,this.txnData.type&&(document.title=this.txnData.type.name+" "+this.txnData.number)}},n=s("KHd+"),i=Object(n.a)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content-wrapper"},[s("div",{staticClass:"page-header page-header-light d-print-none"},[s("div",{staticClass:"page-header-content header-elements-md-inline"},[t._m(0),t._v(" "),s("div",{staticClass:"header-elements"},[s("div",{staticClass:"breadcrumb justify-content-center"},[s("router-link",{staticClass:"btn btn-outline btn-primary border-primary text-primary-800 border-2 btn-sm font-weight-bold mr-2",attrs:{to:"/journal-entries/create"}},[s("i",{staticClass:"icon-files-empty2 mr-1"}),t._v("\n                        New Journal\n                    ")])],1)])]),t._v(" "),s("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[s("div",{staticClass:"d-flex"},[s("div",{staticClass:"breadcrumb"},[s("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[s("i",{staticClass:"icon-home2 mr-2"}),t._v(" "),s("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(" "+t._s(t._f("truncate")(this.$root.tenant.name,30))+" ")])]),t._v(" "),s("span",{staticClass:"breadcrumb-item"},[t._v("Accounting")]),t._v(" "),s("span",{staticClass:"breadcrumb-item"},[t._v("Advanced")]),t._v(" "),s("span",{staticClass:"breadcrumb-item active"},[t._v("Journals")])]),t._v(" "),t._m(1)])])]),t._v(" "),s("div",{staticClass:"content border-0 p-0"},[s("loading-txn-animation"),t._v(" "),!this.$root.loadingTxn&&t.txnData?s("div",{staticClass:"content"},["draft"===t.txnData.status?s("div",{staticClass:"card border-warning rounded-0 max-width-960 ml-auto mr-auto rg-print-border-0"},[s("div",{staticClass:"card-header header-elements-inline d-print-none text-danger"},[t._m(2),t._v(" "),s("div",{staticClass:"header-elements"},[s("button",{staticClass:"btn bg-success font-weight-bold mr-1",attrs:{type:"button"},on:{click:function(a){return t.txnApprove("/journal-entries/"+t.txnData.id+"/approve")}}},[s("i",{staticClass:"icon-printer mr-2"}),t._v(" Click here to Approve\n                        ")]),t._v(" "),s("router-link",{staticClass:"btn bg-warning font-weight-bold mr-1",attrs:{to:"/journal-entries/"+t.$route.params.id+"/edit"}},[s("i",{staticClass:"icon-pencil7 mr-2"}),t._v("\n                            Edit\n                        ")]),t._v(" "),s("button",{staticClass:"btn bg-danger font-weight-bold",attrs:{type:"button"},on:{click:function(a){return t.txnDelete("/journal-entries/"+t.txnData.id)}}},[s("i",{staticClass:"icon-bin mr-2"}),t._v(" Delete\n                        ")])],1)])]):t._e(),t._v(" "),s("div",{staticClass:"card max-width-960 m-auto rg-print-border-0"},[s("div",{staticClass:"card-header bg-transparent header-elements-inline d-print-none"},[t.txnData.type?s("h6",{staticClass:"card-title"},[t._v(t._s(t.txnData.type.name)+" #"+t._s(t.txnData.number))]):t._e(),t._v(" "),s("div",{staticClass:"header-elements"},[s("router-link",{staticClass:"btn btn-light btn-sm",attrs:{to:"/journal-entries/"+t.$route.params.id+"/copy"}},[s("i",{staticClass:"icon-copy mr-2"}),t._v("\n                            Copy\n                        ")]),t._v(" "),t._m(3),t._v(" "),s("a",{staticClass:"btn btn-light btn-sm ml-1",attrs:{href:"/journal-entries/"+t.$route.params.id+"/pdf",type:"button"}},[s("i",{staticClass:"icon-file-pdf mr-2"}),t._v("Pdf")])],1)]),t._v(" "),s("div",{staticClass:"card-body"},[t.$root.tenant.logo?s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-6 mb-2"},[s("img",{attrs:{src:"/timthumb.php?src=storage/"+t.$root.tenant.logo+"&h=27&q=100",alt:t.$root.tenant.name}})])]):t._e(),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-6"},[s("div",{staticClass:"mb-4"},[s("ul",{staticClass:"list list-unstyled mb-0"},[s("li",[s("h5",{staticClass:"rg-font-weight-600"},[t._v(t._s(t.$root.tenant.name))])]),t._v(" "),t.$root.tenant.street_line_1?s("li",[t._v(t._s(t.$root.tenant.street_line_1))]):t._e(),t._v(" "),t.$root.tenant.street_line_2?s("li",[t._v(t._s(t.$root.tenant.street_line_2))]):t._e(),t._v(" "),t.$root.tenant.city?s("li",[t._v("City: "+t._s(t.$root.tenant.city))]):t._e(),t._v(" "),t.$root.tenant.state_province?s("li",[t._v("State: "+t._s(t.$root.tenant.state_province))]):t._e(),t._v(" "),t.$root.tenant.phone?s("li",[t._v("Phone: "+t._s(t.$root.tenant.phone))]):t._e(),t._v(" "),t.$root.tenant.website?s("li",[t._v("Website: "+t._s(t.$root.tenant.website))]):t._e()])])]),t._v(" "),s("div",{staticClass:"col-sm-6"},[s("div",{staticClass:"mb-4"},[s("div",{staticClass:"text-sm-right"},[s("h4",{staticClass:"text-primary mb-2 mt-md-2"},[t._v("Journal Entry")]),t._v(" "),s("ul",{staticClass:"list list-unstyled mb-0"},[s("li",[t._v("Date: "),s("span",{staticClass:"font-weight-semibold"},[t._v(t._s(t.txnData.date))])])])])])])]),t._v(" "),s("div",{staticClass:"d-md-flex flex-md-wrap"},[s("div",{staticClass:"mb-4 mb-md-2"},[t.txnData.type?s("span",{staticClass:"text-muted"},[t._v(t._s(t.txnData.type.name)+" To:")]):t._e(),t._v(" "),t.txnData.contact?s("ul",{staticClass:"list list-unstyled mb-0"},[s("li",[s("h5",{staticClass:"my-2"},[t._v(t._s(t.txnData.contact.contact_salutation)+" "+t._s(t.txnData.contact_name))])]),t._v(" "),t.txnData.contact.shipping_address_street1&&t.txnData.contact.shipping_address_street2?s("li",[s("span",{staticClass:"font-weight-semibold"},[t._v(t._s(t.txnData.contact.shipping_address_street1)+" "+t._s(t.txnData.contact.shipping_address_street2))])]):t._e(),t._v(" "),t.txnData.contact.shipping_address_city?s("li",[t._v(t._s(t.txnData.contact.shipping_address_city))]):t._e(),t._v(" "),t.txnData.contact.shipping_address_state?s("li",[t._v(t._s(t.txnData.contact.shipping_address_state))]):t._e(),t._v(" "),t.txnData.contact.shipping_address_country?s("li",[t._v(t._s(t.txnData.contact.shipping_address_country))]):t._e(),t._v(" "),t.txnData.contact.contact_work_phone?s("li",[t._v(t._s(t.txnData.contact.contact_work_phone))]):t._e(),t._v(" "),t.txnData.contact.contact_email?s("li",[s("a",{attrs:{href:"#"}},[t._v(t._s(t.txnData.contact.contact_email))])]):t._e()]):t._e()])])]),t._v(" "),s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-lg"},[s("thead",[s("tr",{staticClass:"bg-light"},[s("th",{staticClass:"font-weight-bold"},[t._v("Account")]),t._v(" "),s("th",{staticClass:"font-weight-bold"},[t._v("Description")]),t._v(" "),s("th",{staticClass:"font-weight-bold"},[t._v("Contact")]),t._v(" "),s("th",{staticClass:"font-weight-bold text-right"},[t._v("Debit "),s("small",[t._v(" "+t._s(t.txnData.base_currency))])]),t._v(" "),s("th",{staticClass:"font-weight-bold text-right"},[t._v("Credit "),s("small",[t._v(" "+t._s(t.txnData.base_currency))])])])]),t._v(" "),s("tbody",t._l(t.txnData.recordings,(function(a){return["txn","txn_type","tax"].includes(a.type)?t._e():s("tr",[s("td",[s("h6",{staticClass:"mb-0"},[t._v(t._s(a.financial_account.name))])]),t._v(" "),s("td",{},[t._v(t._s(a.description))]),t._v(" "),s("td",{},[t._v(t._s(a.contact_name))]),t._v(" "),s("td",{staticClass:"text-right"},[s("span",{staticClass:"font-weight-semibold"},[t._v(t._s(t.$root.numberFormat(a.debit)))])]),t._v(" "),s("td",{staticClass:"text-right"},[s("span",{staticClass:"font-weight-semibold"},[t._v(t._s(t.$root.numberFormat(a.credit)))])])])})),0)])]),t._v(" "),t._m(4),t._v(" "),s("div",{staticClass:"card-body"},[s("h6",[t._v("Amount in words:")]),t._v(" "),s("p",{staticClass:"text-muted"},[t._v(t._s(t.txnData.total_in_words))])])])]):t._e()],1)])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"page-title d-flex"},[a("h4",[a("i",{staticClass:"icon-files-empty2 mr-2"}),this._v(" "),a("span",{staticClass:"font-weight-semibold"},[this._v("Journals")])]),this._v(" "),a("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[a("i",{staticClass:"icon-more"})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[a("i",{staticClass:"icon-more"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("h6",{staticClass:"card-title font-weight-bold"},[this._v("\n                        Approve Journal entry"),a("br"),this._v(" "),a("small",[this._v("You are viewing a draft")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"btn btn-light btn-sm ml-1",attrs:{type:"button",onclick:"window.print();"}},[a("i",{staticClass:"icon-printer mr-2"}),this._v(" Print")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-body pr-0"},[a("div",{staticClass:"d-md-flex flex-md-wrap"},[a("div",{staticClass:"pt-2 mb-3 text-muted"},[a("h6",[this._v("Authorized Stamp / Signature")])])])])}],!1,null,null,null);a.default=i.exports}}]);