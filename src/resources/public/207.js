(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{"0Xcx":function(t,a,s){"use strict";s.r(a);var e={data:function(){return{}},watch:{$route:function(t,a){this.txnShowId!==this.$route.params.id&&this.txnFetchData()}},mounted:function(){this.txnFetchData(),this.txnShowId=this.$route.params.id},methods:{},ready:function(){},beforeUpdate:function(){},updated:function(){this.txnShowId=this.$route.params.id,this.txnData.type&&void 0!==this.txnData.type.name&&(document.title=this.txnData.type.name+" "+this.txnData.number)}},i=s("KHd+"),n=Object(i.a)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content-wrapper"},[s("div",{staticClass:"page-header page-header-light d-print-none"},[s("div",{staticClass:"page-header-content header-elements-md-inline"},[t._m(0),t._v(" "),s("div",{staticClass:"header-elements d-none"},[s("router-link",{staticClass:"btn btn-outline btn-primary border-primary text-primary-800 border-2 btn-sm rounded font-weight-bold mr-2",attrs:{to:"/workshop/jobs/create"}},[s("i",{staticClass:"icon-files-empty2 mr-1"}),t._v("\n                    New Job\n                ")])],1)]),t._v(" "),s("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[s("div",{staticClass:"d-flex"},[s("div",{staticClass:"breadcrumb"},[s("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[s("i",{staticClass:"icon-home2 mr-2"}),t._v(" "),s("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(" "+t._s(t._f("truncate")(this.$root.tenant.name,30))+" ")])]),t._v(" "),s("span",{staticClass:"breadcrumb-item"},[t._v("Workshop")]),t._v(" "),s("span",{staticClass:"breadcrumb-item active"},[t._v("Job")])]),t._v(" "),t._m(1)]),t._v(" "),s("div",{staticClass:"header-elements"},[s("div",{staticClass:"breadcrumb justify-content-center"},[s("router-link",{staticClass:"btn btn-outline btn-warning border-warning text-warning-800 border-2 btn-sm rounded font-weight-bold mr-2",attrs:{to:"/workshop/jobs/"+t.txnData.id+"/inspection/order"}},[s("i",{staticClass:"icon-files-empty2 mr-1"}),t._v("\n                        Inspection Order\n                    ")]),t._v(" "),!this.$root.loadingTxn&&t.txnData?s("div",{staticClass:"btn-group"},[t._m(2),t._v(" "),s("div",{staticClass:"dropdown-menu dropdown-menu-right"},[s("router-link",{staticClass:"dropdown-item",attrs:{to:"/workshop/jobs/"+t.txnData.id+"/sales-order"}},[s("i",{staticClass:"icon-files-empty2"}),t._v(" Sales Order")]),t._v(" "),s("router-link",{staticClass:"dropdown-item",attrs:{to:"/workshop/jobs/"+t.txnData.id+"/invoice"}},[s("i",{staticClass:"icon-files-empty2"}),t._v(" Invoice")]),t._v(" "),t.txnData.inspection_orders.length>0?s("router-link",{staticClass:"dropdown-item",attrs:{to:"/workshop/jobs/"+t.txnData.id+"/inspection"}},[s("i",{staticClass:"icon-files-empty2"}),t._v("\n                                Inspection\n                            ")]):t._e()],1)]):t._e()],1)])])]),t._v(" "),s("div",{staticClass:"content border-0 p-0"},[s("loading-txn-animation"),t._v(" "),!this.$root.loadingTxn&&t.txnData?s("div",{staticClass:"content"},["draft"===t.txnData.status?s("div",{staticClass:"card border-left-3 border-warning rounded-0 max-width-960 ml-auto mr-auto rg-print-border-0"},[s("div",{staticClass:"card-header header-elements-inline d-print-none text-danger"},[t.txnData.type?s("h6",{staticClass:"card-title font-weight-bold"},[t._v("\n                        Approve "+t._s(t.txnData.type.name)),s("br"),t._v(" "),s("small",[t._v("You are viewing a draft")])]):t._e(),t._v(" "),s("div",{staticClass:"header-elements"},[s("button",{staticClass:"btn bg-warning font-weight-bold",attrs:{type:"button"},on:{click:function(a){return t.txnApprove("/workshop/jobs/"+t.txnData.id+"/approve")}}},[s("i",{staticClass:"icon-printer mr-2"}),t._v(" Click here to Approve")])])])]):t._e(),t._v(" "),s("div",{staticClass:"card max-width-960 m-auto rg-print-border-0"},[s("div",{staticClass:"card-header bg-transparent header-elements-inline d-print-none"},[s("h6",{staticClass:"card-title"},[t._v("Job #"+t._s(t.txnData.id))]),t._v(" "),s("div",{staticClass:"header-elements"},[t._m(3),t._v(" "),s("a",{staticClass:"btn btn-light btn-sm ml-1",attrs:{href:"/workshop/jobs/"+t.$route.params.id+"/pdf",type:"button"}},[s("i",{staticClass:"icon-file-pdf mr-2"}),t._v("Pdf")])])]),t._v(" "),s("div",{staticClass:"card-body"},[t.$root.tenant.logo?s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-6 mb-2"},[s("img",{attrs:{src:"/timthumb.php?src=storage/"+t.$root.tenant.logo+"&h=27&q=100",alt:t.$root.tenant.name}})])]):t._e(),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-6"},[s("div",{staticClass:"mb-4"},[s("ul",{staticClass:"list list-unstyled mb-0"},[s("li",[s("h5",{staticClass:"rg-font-weight-600"},[t._v(t._s(t.$root.tenant.name))])]),t._v(" "),t.$root.tenant.street_line_1?s("li",[t._v(t._s(t.$root.tenant.street_line_1))]):t._e(),t._v(" "),t.$root.tenant.street_line_2?s("li",[t._v(t._s(t.$root.tenant.street_line_2))]):t._e(),t._v(" "),t.$root.tenant.phone?s("li",[t._v(t._s(t.$root.tenant.phone))]):t._e(),t._v(" "),t.$root.tenant.website?s("li",[t._v(t._s(t.$root.tenant.website))]):t._e()])])]),t._v(" "),s("div",{staticClass:"col-sm-6"},[s("div",{staticClass:"mb-4"},[s("div",{staticClass:"text-sm-right"},[t.txnData.type?s("h4",{staticClass:"text-primary mb-2 mt-md-2"},[t._v(t._s(t.txnData.type.name)+" #"+t._s(t.txnData.number))]):t._e(),t._v(" "),s("ul",{staticClass:"list list-unstyled mb-0"},[s("li",[t._v("Date: "),s("span",{staticClass:"font-weight-semibold"},[t._v(t._s(t.txnData.date))])]),t._v(" "),t.txnData.due_date?s("li",[t._v("Due date: "),s("span",{staticClass:"font-weight-semibold"},[t._v(t._s(t.txnData.due_date))])]):t._e()])])])])]),t._v(" "),s("div",{staticClass:"d-md-flex flex-md-wrap"},[s("div",{staticClass:"mb-4 mb-md-2"},[s("span",{staticClass:"text-muted"},[t._v("Customer:")]),t._v(" "),t.txnData.type?s("span",{staticClass:"text-muted"},[t._v(t._s(t.txnData.type.name)+" To:")]):t._e(),t._v(" "),t.txnData.contact?s("ul",{staticClass:"list list-unstyled mb-0"},[s("li",[s("h5",{staticClass:"my-2"},[t._v(t._s(t.txnData.contact.contact_salutation)+" "+t._s(t.txnData.contact_name))])]),t._v(" "),t.txnData.contact.shipping_address_street1&&t.txnData.contact.shipping_address_street2?s("li",[s("span",{staticClass:"font-weight-semibold"},[t._v(t._s(t.txnData.contact.shipping_address_street1)+" "+t._s(t.txnData.contact.shipping_address_street2))])]):t._e(),t._v(" "),t.txnData.contact.shipping_address_city?s("li",[t._v(t._s(t.txnData.contact.shipping_address_city))]):t._e(),t._v(" "),t.txnData.contact.shipping_address_state?s("li",[t._v(t._s(t.txnData.contact.shipping_address_state))]):t._e(),t._v(" "),t.txnData.contact.shipping_address_country?s("li",[t._v(t._s(t.txnData.contact.shipping_address_country))]):t._e(),t._v(" "),t.txnData.contact.contact_work_phone?s("li",[t._v(t._s(t.txnData.contact.contact_work_phone))]):t._e(),t._v(" "),t.txnData.contact.contact_email?s("li",[s("a",{attrs:{href:"#"}},[t._v(t._s(t.txnData.contact.contact_email))])]):t._e()]):t._e()]),t._v(" "),s("div",{staticClass:"mb-2 ml-auto"},[s("span",{staticClass:"text-muted"},[t._v("Summary:")]),t._v(" "),s("div",{staticClass:"d-flex flex-wrap wmin-md-400"},[t._m(4),t._v(" "),s("ul",{staticClass:"list list-unstyled text-right mb-0 ml-auto"},[s("li",[s("h5",{staticClass:"font-weight-semibold my-2"},[t._v(t._s(t.txnData.end_date))])]),t._v(" "),s("li",[t._v(t._s(t.txnData.reference))])])])])])]),t._v(" "),s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-lg"},[t._m(5),t._v(" "),s("tbody",[s("tr",[s("td",{staticClass:"align-top text-right",attrs:{width:"120"}},[t._v("Services :")]),t._v(" "),s("td",{staticStyle:{"white-space":"pre"}},[t._v(t._s(t.txnData.service_defaults.join("\n")))])]),t._v(" "),s("tr",{directives:[{name:"show",rawName:"v-show",value:t.txnData.description,expression:"txnData.description"}]},[s("td",{staticClass:"align-top text-right",attrs:{width:"120"}},[t._v("Description :")]),t._v(" "),s("td",{staticStyle:{"white-space":"pre"}},[t._v(t._s(t.txnData.description))])]),t._v(" "),s("tr",{directives:[{name:"show",rawName:"v-show",value:t.txnData.comments&&t.txnData.comments.length>0,expression:"txnData.comments && txnData.comments.length > 0"}]},[s("td",{staticClass:"align-top text-right",attrs:{width:"120"}},[t._v("Comments :")]),t._v(" "),s("td",t._l(t.txnData.comments,(function(a){return s("div",{staticClass:"border-left-3 border-warning pl-2 pt-1 pb-1"},[t._v("\n                                        "+t._s(a.comment)+"\n                                    ")])})),0)])])])]),t._v(" "),t._m(6),t._v(" "),t._m(7)])]):t._e()],1)])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"page-title d-flex"},[a("h4",[a("i",{staticClass:"icon-files-empty2 mr-2"}),this._v(" "),a("span",{staticClass:"font-weight-semibold"},[this._v("Job")])]),this._v(" "),a("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[a("i",{staticClass:"icon-more"})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[a("i",{staticClass:"icon-more"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"btn btn-sm dropdown-toggle btn-warning border-warning border-2 font-weight-bold",attrs:{type:"button","data-toggle":"dropdown"}},[a("i",{staticClass:"icon-cog mr-1"}),this._v(" Generate ")])},function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"btn btn-light btn-sm ml-1",attrs:{type:"button",onclick:"window.print();"}},[a("i",{staticClass:"icon-printer mr-2"}),this._v(" Print")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",{staticClass:"list list-unstyled mb-0"},[a("li",[a("h5",{staticClass:"my-2"},[this._v("End date:")])]),this._v(" "),a("li",[this._v("Reference:")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("thead",[a("tr",{staticClass:"bg-light"},[a("th",{staticClass:"font-weight-bold",attrs:{colspan:"2"}},[this._v("Jod details description")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-body pr-0"},[a("div",{staticClass:"d-md-flex flex-md-wrap"},[a("div",{staticClass:"pt-2 mb-3 text-muted"},[a("h6",[this._v("Authorized Stamp / Signature")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-footer"},[a("span",{staticClass:"text-muted"},[this._v("Thank you for working with us. Always contact us for any feedback.")])])}],!1,null,null,null);a.default=n.exports}}]);