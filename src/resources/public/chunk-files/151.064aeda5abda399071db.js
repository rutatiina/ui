(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{hi6X:function(t,e,s){"use strict";s.r(e);var i={data:function(){return{formDisabled:!0,settings:{},financialAccounts:[]}},watch:{},mounted:function(){this.fetchSettings()},methods:{fetchSettings:function(){var t=this;axios.get("/pos/settings").then((function(e){t.settings=e.data.settings,t.financialAccounts=e.data.financial_accounts,t.formDisabled=!1}))},formSubmit:function(t){var e=this;t.preventDefault(),PNotify.removeAll();var s=this.$root.PNotifySettings,i=new PNotify(s);this.formDisabled=!0,axios.post("/pos/settings",this.settings).then((function(t){e.axiosResponseHandle({response:t,pNotify:i,onSuccess:function(){e.formDisabled=!1},onError:function(){}})}))}},ready:function(){},beforeUpdate:function(){},updated:function(){}},n=s("KHd+"),a=Object(n.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content-wrapper"},[s("div",{staticClass:"page-header page-header-light"},[t._m(0),t._v(" "),s("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[s("div",{staticClass:"d-flex"},[s("div",{staticClass:"breadcrumb"},[s("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[s("i",{staticClass:"icon-home2 mr-2"}),t._v(" "),s("span",{staticClass:"badge badge-primary font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(" "+t._s(t._f("truncate")(this.$root.tenant.name,30))+" ")])]),t._v(" "),s("span",{staticClass:"breadcrumb-item"},[t._v("POS")]),t._v(" "),s("span",{staticClass:"breadcrumb-item active"},[t._v("Settings")])]),t._v(" "),t._m(1)])])]),t._v(" "),s("div",{staticClass:"content border-0"},[s("loading-animation"),t._v(" "),s("div",{staticClass:"card shadow-none rounded-0 border-0"},[s("form",{staticClass:"max-width-1040",on:{submit:t.formSubmit}},[s("fieldset",{attrs:{disabled:t.formDisabled}},[s("div",{staticClass:"form-group row mb-2"},[s("label",{staticClass:"col-lg-2 col-form-label"},[t._v("POS ")]),t._v(" "),s("div",{staticClass:"col-lg-2 pt-1"},[s("div",{staticClass:"custom-control custom-checkbox custom-control-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.print_receipt,expression:"settings.print_receipt"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"txn-is-recurring"},domProps:{checked:Array.isArray(t.settings.print_receipt)?t._i(t.settings.print_receipt,null)>-1:t.settings.print_receipt},on:{change:function(e){var s=t.settings.print_receipt,i=e.target,n=!!i.checked;if(Array.isArray(s)){var a=t._i(s,null);i.checked?a<0&&t.$set(t.settings,"print_receipt",s.concat([null])):a>-1&&t.$set(t.settings,"print_receipt",s.slice(0,a).concat(s.slice(a+1)))}else t.$set(t.settings,"print_receipt",n)}}}),t._v(" "),s("label",{staticClass:"custom-control-label",attrs:{for:"txn-is-recurring"}},[t._v("Print receipts")])])])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label text-danger"},[t._v("\n                            Document name\n                        ")]),t._v(" "),s("div",{staticClass:"col-lg-5"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.document_name,expression:"settings.document_name"}],staticClass:"form-control rounded-0",attrs:{type:"text",placeholder:"Document name",maxlength:"50"},domProps:{value:t.settings.document_name},on:{input:function(e){e.target.composing||t.$set(t.settings,"document_name",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label text-danger"},[t._v("\n                            Number Prefix\n                        ")]),t._v(" "),s("div",{staticClass:"col-lg-5"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.number_prefix,expression:"settings.number_prefix"}],staticClass:"form-control rounded-0",attrs:{type:"text",placeholder:"Number Prefix",maxlength:"20"},domProps:{value:t.settings.number_prefix},on:{input:function(e){e.target.composing||t.$set(t.settings,"number_prefix",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label text-danger"},[t._v("\n                            Min. Number Length\n                        ")]),t._v(" "),s("div",{staticClass:"col-lg-5"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.minimum_number_length,expression:"settings.minimum_number_length"}],staticClass:"form-control rounded-0",attrs:{type:"text",placeholder:"Min. Number Length"},domProps:{value:t.settings.minimum_number_length},on:{input:function(e){e.target.composing||t.$set(t.settings,"minimum_number_length",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label text-danger"},[t._v("\n                            Number Postfix\n                        ")]),t._v(" "),s("div",{staticClass:"col-lg-5"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.number_postfix,expression:"settings.number_postfix"}],staticClass:"form-control rounded-0",attrs:{type:"text",placeholder:"Number Postfix",maxlength:"20"},domProps:{value:t.settings.number_postfix},on:{input:function(e){e.target.composing||t.$set(t.settings,"number_postfix",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label text-danger"},[t._v("\n                            Minimum Number\n                        ")]),t._v(" "),s("div",{staticClass:"col-lg-5"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.minimum_number,expression:"settings.minimum_number"}],staticClass:"form-control rounded-0",attrs:{type:"text",placeholder:"Minimum Number"},domProps:{value:t.settings.minimum_number},on:{input:function(e){e.target.composing||t.$set(t.settings,"minimum_number",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label"},[t._v("\n                            Debit account\n                        ")]),t._v(" "),s("div",{staticClass:"col-lg-5"},[s("model-list-select",{staticClass:"font-weight-bold",attrs:{list:t.financialAccounts,"option-value":"code","option-text":"name",placeholder:"Select Financial account to debit"},model:{value:t.settings.debit_financial_account_code,callback:function(e){t.$set(t.settings,"debit_financial_account_code",e)},expression:"settings.debit_financial_account_code"}})],1)]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-lg-2 col-form-label"},[t._v("\n                            Credit account\n                        ")]),t._v(" "),s("div",{staticClass:"col-lg-5"},[s("model-list-select",{staticClass:"font-weight-bold",attrs:{list:t.financialAccounts,"option-value":"code","option-text":"name",placeholder:"Select Financial account to credit"},model:{value:t.settings.credit_financial_account_code,callback:function(e){t.$set(t.settings,"credit_financial_account_code",e)},expression:"settings.credit_financial_account_code"}})],1)]),t._v(" "),t._m(2)])])])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-header-content header-elements-md-inline"},[e("div",{staticClass:"page-title d-flex"},[e("h4",[e("i",{staticClass:"icon-drawer3 mr-2"}),this._v(" "),e("span",{staticClass:"font-weight-semibold"},[this._v("POS Orders")])]),this._v(" "),e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])]),this._v(" "),e("div",{staticClass:"header-elements"},[e("div",{staticClass:"breadcrumb justify-content-center"},[e("a",{staticClass:"btn btn-outline btn-success border-success text-success-800 border-2 btn-sm rounded font-weight-bold mr-2",attrs:{href:"/pos"}},[e("i",{staticClass:"icon-files-empty2 mr-1"}),this._v(" Point of sales\n                    ")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-lg-2 col-form-label"}),this._v(" "),e("div",{staticClass:"col-lg-5"},[e("button",{staticClass:"btn btn-outline btn-primary border-primary text-primary-800 border-2 rounded font-weight-bold",attrs:{type:"submit"}},[e("i",{staticClass:"icon-files-empty2 mr-1"}),this._v("\n                                Update POS settings\n                            ")])])])}],!1,null,null,null);e.default=a.exports}}]);