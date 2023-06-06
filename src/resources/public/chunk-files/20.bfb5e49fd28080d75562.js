(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"+tMb":function(t,a,e){"use strict";e.r(a);var s=e("Zipl"),n=e.n(s);function r(t,a,e,s,n,r,o){try{var i=t[r](o),c=i.value}catch(t){return void e(t)}i.done?a(c):Promise.resolve(c).then(s,n)}var o={data:function(){return{financialAccounts:[],paymentAccount:0}},watch:{"$route.query.page":function(t){this.tableData.url=this.$router.currentRoute.path+"?page="+t},"$root.PageSearchValue":function(t){this.$route.query.search=t,this.tableData.url=this.$router.currentRoute.path+"?"+new URLSearchParams(this.$route.query).toString()}},mounted:function(){var t=this;this.afterTableDataUpdate=function(a){t.financialAccounts=a.data.financialAccounts},this.tableData.searchColumnOptions=[{value:"date",text:"Date"},{value:"number",text:"Document No"},{value:"reference",text:"Reference"},{value:"contact_name",text:"Contact name"},{value:"status",text:"Status"},{value:"expiry_date",text:"Expiry date"},{value:"total",text:"Total"}],this.tableData.initiate=!0,void 0===this.$route.query.page?this.tableData.url=this.$router.currentRoute.path:this.tableData.url=this.$router.currentRoute.path+"?page="+this.$route.query.page},methods:{onRowClick:function(t){this.$router.push({path:"/financial-accounts/reports/account-statement/"+t.id})},formSubmit:function(t){var a=this;t.preventDefault();var e=structuredClone(this.$root.PNotifySettings),s=new PNotify(e),n=rgFormData({account:this.paymentAccount});axios.post(this.$router.currentRoute.path,n).then((function(t){e.text=t.data.messages.join("\n"),!0===t.data.status?(e.title="Success",e.type="success",e.addclass="bg-success-400 border-success-400",s.update(e),a.tableDataUpdate()):(e.title="! Error",e.type="error",e.addclass="bg-warning-400 border-warning-400",s.update(e)),s.get().click((function(){s.remove()})),$("#formModal").modal("toggle")})).catch((function(t){a.response=t}))},rowDelete:function(t){var a,e=this;return(a=n.a.mark((function a(){var s,r;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,s=structuredClone(e.$root.PNotifySettings),r=new PNotify(s),a.abrupt("return",axios.delete("/payments-made/accounts/"+t.id).then((function(t){s.text=t.data.messages.join("\n"),!0===t.data.status?(s.title="Success",s.type="success",s.addclass="bg-success-400 border-success-400",r.update(s),e.tableDataUpdate()):(s.title="! Error",s.type="error",s.addclass="bg-warning-400 border-warning-400",r.update(s)),e.tableDataUpdate(),r.get().click((function(){r.remove()}))})).catch((function(t){})));case 6:a.prev=6,a.t0=a.catch(0),console.log(a.t0);case 9:case"end":return a.stop()}}),a,null,[[0,6]])})),function(){var t=this,e=arguments;return new Promise((function(s,n){var o=a.apply(t,e);function i(t){r(o,s,n,i,c,"next",t)}function c(t){r(o,s,n,i,c,"throw",t)}i(void 0)}))})()}},ready:function(){},beforeUpdate:function(){},updated:function(){var t=this;$(".select-search").select2({dropdownCssClass:"select2-dropdown-width"}).on("select2:select",(function(a){t.paymentAccount=$(a.target).val()}))},destroyed:function(){$(".select-search").select2("destroy")}},i=(e("DBjO"),e("C7zm")),c=Object(i.a)(o,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"page-header page-header-light"},[t._m(0),t._v(" "),e("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[e("div",{staticClass:"d-flex"},[e("div",{staticClass:"breadcrumb"},[e("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[e("i",{staticClass:"icon-home2 mr-2"}),t._v(" "),e("span",{staticClass:"badge badge-primary font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(" "+t._s(t._f("truncate")(this.$root.tenant.name,30))+" ")])]),t._v(" "),e("span",{staticClass:"breadcrumb-item"},[t._v("Payment made")]),t._v(" "),e("span",{staticClass:"breadcrumb-item active"},[t._v("Accounts")])]),t._v(" "),t._m(1)])])]),t._v(" "),e("div",{staticClass:"content border-0 p-0"},[e("loading-animation"),t._v(" "),e("div",{staticClass:"card shadow-none rounded-0 border-0"},[e("div",{staticClass:"modal fade",attrs:{id:"formModal",tabindex:"-1"}},[e("div",{staticClass:"modal-dialog"},[e("div",{staticClass:"modal-content"},[t._m(2),t._v(" "),e("div",{staticClass:"modal-body"},[e("p",[t._v("Choose an account that is used to make payments - "+t._s(t.paymentAccount))]),t._v(" "),this.$root.loading?t._e():e("form",{staticClass:"max-width-1040 mt-2",attrs:{action:"",method:"post",autocomplete:"off"},on:{submit:t.formSubmit}},[e("fieldset",{attrs:{disabled:t.txnForm.disabled}},[e("div",{staticClass:"form-group row"},[e("div",{staticClass:"col-12"},[e("select",{staticClass:"form-control select-search",attrs:{"data-container-css-class":"rounded-0 h-100","data-placeholder":"Select account"}},[e("option"),t._v(" "),t._l(t.financialAccounts,(function(a,s){return e("optgroup",{attrs:{label:s}},t._l(a,(function(a){return e("option",{domProps:{value:a.code}},[t._v(t._s(a.name))])})),0)}))],2)])]),t._v(" "),t._m(3)])])])])])]),t._v(" "),e("loading-animation"),t._v(" "),e("div",{staticClass:"table-responsive overflow-visible"},[e("table",{staticClass:"table table-hover overflow-visible"},[e("thead",{directives:[{name:"show",rawName:"v-show",value:t.tableData.payload.data.length>0,expression:"tableData.payload.data.length>0"}]},[t._m(4)]),t._v(" "),e("rg-tables-state"),t._v(" "),e("tbody",t._l(t.tableData.payload.data,(function(a){return e("tr",[e("td",{staticClass:"cursor-pointer"},[t._v(t._s(a.code))]),t._v(" "),e("td",{staticClass:"cursor-pointer font-weight-semibold",attrs:{nowrap:""}},[t._v(t._s(a.name))]),t._v(" "),e("td",{staticClass:"cursor-pointer",attrs:{nowrap:""}},[a.financial_account_category?[e("span",{staticClass:"font-weight-semibold"},[t._v(t._s(a.financial_account_category.title))]),t._v(" : "+t._s(a.financial_account_category.category_name)+"\n                                    ")]:t._e()],2),t._v(" "),e("td",{staticClass:"cursor-pointer font-weight-bold text-right text-nowrap"},[e("span",{staticClass:"text-danger-800"},[t._v(t._s(t.$root.numberFormat(a.balance.debit)))]),t._v(" "),e("small",[t._v(t._s(a.balance.currency))])]),t._v(" "),e("td",{staticClass:"cursor-pointer font-weight-bold text-right text-nowrap"},[e("span",{staticClass:"text-danger-800"},[t._v(t._s(t.$root.numberFormat(a.balance.credit)))]),t._v(" "),e("small",[t._v(t._s(a.balance.currency))])]),t._v(" "),e("td",[e("a",{attrs:{href:"",title:"Remove"},on:{click:function(e){return e.preventDefault(),t.rowDelete(a)}}},[e("i",{staticClass:"icon-bin2 text-danger"})])])])})),0)],1),t._v(" "),e("rg-tables-pagination",{attrs:{"table-data-prop":t.tableData}})],1)],1)],1)])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"page-header-content header-elements-md-inline"},[a("div",{staticClass:"page-title d-flex"},[a("h4",[a("i",{staticClass:"icon-drawer3 mr-2"}),this._v(" "),a("span",{staticClass:"font-weight-semibold"},[this._v("Payment accounts")])]),this._v(" "),a("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[a("i",{staticClass:"icon-more"})])]),this._v(" "),a("div",{staticClass:"header-elements"},[a("div",{staticClass:"breadcrumb justify-content-center"},[a("button",{staticClass:"btn btn-outline btn-primary border-primary text-primary-800 border-2 btn-sm rounded font-weight-bold",attrs:{type:"button","data-toggle":"modal","data-target":"#formModal"}},[a("i",{staticClass:"icon-files-empty2 mr-1"}),this._v("\n                            Add account for making Payments\n                        ")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[a("i",{staticClass:"icon-more"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[this._v("Add account for making Payments")]),this._v(" "),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"}},[this._v("×")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"form-group row"},[a("div",{staticClass:"col-12"},[a("button",{staticClass:"btn btn-success font-weight-bold",attrs:{type:"submit"}},[a("i",{staticClass:"icon-file-plus2 mr-1"}),this._v(" Configure account to receive payments\n                                                ")]),this._v(" "),a("button",{staticClass:"btn btn-outline bg-danger border-danger text-danger-800 btn-icon border-2 float-right",attrs:{type:"button","data-dismiss":"modal"}},[a("i",{staticClass:"icon-cross2"})])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",{staticClass:"table-active"},[e("th",{staticClass:"col-auto font-weight-bold",attrs:{nowrap:""}},[t._v("Code")]),t._v(" "),e("th",{staticClass:"col font-weight-bold"},[t._v("Name")]),t._v(" "),e("th",{staticClass:"col-auto font-weight-bold"},[t._v("Type")]),t._v(" "),e("th",{staticClass:"col-auto font-weight-bold text-right",attrs:{nowrap:""}},[t._v("Debit Balance")]),t._v(" "),e("th",{staticClass:"col-auto font-weight-bold text-right",attrs:{nowrap:""}},[t._v("Credit Balance")]),t._v(" "),e("th",{staticClass:"col-auto font-weight-bold text-right",attrs:{nowrap:""}},[e("i",{staticClass:"icon-bin2 text-muted"})])])}],!1,null,null,null);a.default=c.exports},"1Uub":function(t,a,e){(t.exports=e("81jI")(!1)).push([t.i,"\n.select2-selection--single {\n    height: calc(1.5385em + .875rem + 4px) !important;\n}\n",""])},DBjO:function(t,a,e){"use strict";e("OuIT")},OuIT:function(t,a,e){var s=e("1Uub");"string"==typeof s&&(s=[[t.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("SAvX")(s,n);s.locals&&(t.exports=s.locals)}}]);