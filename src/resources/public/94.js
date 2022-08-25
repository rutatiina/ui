(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{pcXh:function(t,a,e){"use strict";e.r(a);var s={data:function(){return{}},watch:{"$route.query.page":function(t){this.tableData.url=this.$router.currentRoute.path+"?page="+t},"$root.PageSearchValue":function(t){this.$route.query.search=t,this.tableData.url=this.$router.currentRoute.path+"?"+new URLSearchParams(this.$route.query).toString()}},mounted:function(){this.$root.appMenu("accounting"),this.tableData.searchColumnOptions=[{value:"date",text:"Date"},{value:"number",text:"Document No"},{value:"reference",text:"Reference"},{value:"contact_name",text:"Contact name"},{value:"status",text:"Status"},{value:"expiry_date",text:"Expiry date"},{value:"total",text:"Total"}],this.tableData.initiate=!0;void 0===this.$route.query.page?this.tableData.url=this.$router.currentRoute.path:this.tableData.url=this.$router.currentRoute.path+"?page="+this.$route.query.page},methods:{onRowClick:function(t){this.$router.push({path:"/financial-accounts/reports/account-statement/"+t.id})},deleteFinancialAccount:function(t){var a=this,e={dir1:"down",dir2:"right",firstpos1:25,firstpos2:$(window).width()/2-Number(PNotify.prototype.options.width.replace(/\D/g,""))/2};$(window).resize((function(){e.firstpos2=$(window).width()/2-Number(PNotify.prototype.options.width.replace(/\D/g,""))/2}));var s=new PNotify({title:"<b>Confirmation</b>",text:"<p>Are you sure you want to delete the finacial account?</p>",hide:!1,type:"warning",addclass:"border-danger bg-danger",stack:e,confirm:{confirm:!0,buttons:[{text:"Yes, delete transaction",addClass:"btn btn-sm btn-danger font-weight-bold"},{addClass:"btn btn-sm btn-link font-weight-bold"}]},buttons:{closer:!1,sticker:!1}});s.get().on("pnotify.confirm",(function(){var e=a.$root.PNotifySettings,s=new PNotify(e),i={_method:"DELETE",id:a.$route.params.id};axios.post(t,i).then((function(t){e.text=t.data.messages.join("\n"),!0===t.data.status?(e.title="Success",e.type="success",e.addclass="bg-success-400 border-success-400",a.tableDataUpdate()):(e.title="! Error",e.type="error",e.addclass="bg-warning-400 border-warning-400"),s.update(e),s.get().click((function(){s.remove()}))})).catch((function(t){a.response=t}))})),s.get().on("pnotify.cancel",(function(){}))}},ready:function(){},beforeUpdate:function(){},updated:function(){}},i=e("KHd+"),n=Object(i.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"page-header page-header-light"},[e("div",{staticClass:"page-header-content header-elements-md-inline"},[t._m(0),t._v(" "),e("div",{staticClass:"header-elements"},[e("div",{staticClass:"breadcrumb justify-content-center"},[e("router-link",{staticClass:"btn btn-outline btn-primary border-primary text-primary-800 border-2 btn-sm rounded font-weight-bold mr-2",attrs:{to:"/financial-accounts/create"}},[e("i",{staticClass:"icon-files-empty2 mr-1"}),t._v("\n                        Create Account\n                    ")])],1)])]),t._v(" "),e("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[e("div",{staticClass:"d-flex"},[e("div",{staticClass:"breadcrumb"},[e("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[e("i",{staticClass:"icon-home2 mr-2"}),t._v(" "),e("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(" "+t._s(t._f("truncate")(this.$root.tenant.name,30))+" ")])]),t._v(" "),e("span",{staticClass:"breadcrumb-item"},[t._v("Financial Accounting")]),t._v(" "),e("span",{staticClass:"breadcrumb-item"},[t._v("Advanced")]),t._v(" "),e("span",{staticClass:"breadcrumb-item active"},[t._v("Chats Of Accounts")])]),t._v(" "),t._m(1)])])]),t._v(" "),e("div",{staticClass:"content border-0 p-0"},[e("loading-animation"),t._v(" "),e("div",{staticClass:"card shadow-none rounded-0 border-0"},[e("div",{staticClass:"card-body p-0"},[e("form",{on:{submit:function(a){return a.preventDefault(),t.tableDataUpdate(a)}}},[e("div",{staticClass:"form-group row mb-0"},[e("div",{staticClass:"input-group col-12"},[t._m(2),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tableData.searchValue,expression:"tableData.searchValue"}],staticClass:"form-control h-100 rounded-0",attrs:{type:"text",placeholder:"Search"},domProps:{value:t.tableData.searchValue},on:{keyup:function(a){if(!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter"))return null;t.$root.PageSearchValue=a.target.value},input:function(a){a.target.composing||t.$set(t.tableData,"searchValue",a.target.value)}}}),t._v(" "),e("span",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-outline bg-primary border-primary text-primary border-2 rounded-0 font-weight-bold border-top-0 border-right-0 border-bottom-0",attrs:{type:"button"},on:{click:t.tableDataUpdate}},[e("i",{staticClass:"icon-search4 mr-2"}),t._v(" Search\n                                ")])])])])])]),t._v(" "),e("div",{staticClass:"table-responsive overflow-visible"},[e("table",{staticClass:"table table-hover overflow-visible"},[t._m(3),t._v(" "),e("rg-tables-state"),t._v(" "),e("tbody",t._l(t.tableData.payload.data,(function(a){return e("tr",[e("td",{staticClass:"cursor-pointer"},[t._v(t._s(a.code))]),t._v(" "),e("td",{staticClass:"cursor-pointer font-weight-semibold",attrs:{nowrap:""}},[t._v(t._s(a.name))]),t._v(" "),e("td",{staticClass:"cursor-pointer"},[e("span",{staticClass:"font-weight-semibold"},[t._v(t._s(a.financial_account_category.title))]),t._v(" : "+t._s(a.financial_account_category.category_name)+"\n                            ")]),t._v(" "),e("td",{staticClass:"cursor-pointer font-weight-bold text-right text-nowrap"},[e("span",{staticClass:"text-danger-800"},[t._v(t._s(t.rgNumberFormat(a.balance.debit,2)))]),t._v(" "),e("small",[t._v(t._s(a.balance.currency))])]),t._v(" "),e("td",{staticClass:"cursor-pointer font-weight-bold text-right text-nowrap"},[e("span",{staticClass:"text-danger-800"},[t._v(t._s(t.rgNumberFormat(a.balance.credit,2)))]),t._v(" "),e("small",[t._v(t._s(a.balance.currency))])]),t._v(" "),e("td",[e("div",{staticClass:"list-icons"},[e("div",{staticClass:"dropdown"},[t._m(4,!0),t._v(" "),e("div",{staticClass:"dropdown-menu"},[e("div",{staticClass:"dropdown-header"},[t._v("Account options")]),t._v(" "),e("router-link",{staticClass:"dropdown-item",attrs:{to:"/financial-accounts/"+a.id+"/edit"}},[e("i",{staticClass:"icon-pencil7"}),t._v(" Edit account\n                                            ")]),t._v(" "),e("a",{staticClass:"dropdown-item",on:{click:function(e){return e.preventDefault(),t.deleteFinancialAccount("/financial-accounts/"+a.id)}}},[e("i",{staticClass:"icon-bin"}),t._v("Delete account")])],1)])])])])})),0)],1),t._v(" "),e("rg-tables-pagination",{attrs:{"table-data-prop":t.tableData}})],1)])],1)])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"page-title d-flex"},[a("h4",[a("i",{staticClass:"icon-drawer3 mr-2"}),this._v(" "),a("span",{staticClass:"font-weight-semibold"},[this._v("Chats Of Accounts")])]),this._v(" "),a("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[a("i",{staticClass:"icon-more"})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[a("i",{staticClass:"icon-more"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"input-group-prepend"},[a("button",{staticClass:"btn btn-light btn-icon pl-3 pr-3",attrs:{type:"button"}},[a("i",{staticClass:"icon-search4"})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",{staticClass:"table-active"},[e("th",{staticClass:"col-auto font-weight-bold",attrs:{nowrap:""}},[t._v("Code")]),t._v(" "),e("th",{staticClass:"col-auto font-weight-bold"},[t._v("Name")]),t._v(" "),e("th",{staticClass:"col font-weight-bold"},[t._v("Type")]),t._v(" "),e("th",{staticClass:"col-auto font-weight-bold text-right",attrs:{nowrap:""}},[t._v("Debit Balance")]),t._v(" "),e("th",{staticClass:"col-auto font-weight-bold text-right",attrs:{nowrap:""}},[t._v("Credit Balance")]),t._v(" "),e("th",{staticClass:"col-auto font-weight-bold text-right",attrs:{nowrap:""}})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"list-icons-item dropdown-toggle",attrs:{href:"#","data-toggle":"dropdown"}},[a("i",{staticClass:"icon-list-unordered"})])}],!1,null,null,null);a.default=n.exports}}]);