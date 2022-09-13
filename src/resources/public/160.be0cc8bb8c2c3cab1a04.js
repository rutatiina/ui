(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{HXXg:function(t,e,s){"use strict";s.r(e);var i={data:function(){return{settings:{},financialAccounts:[]}},watch:{},mounted:function(){this.fetchSettings()},methods:{hideSideBarRight:function(t){this.$root.showSideBarRight=!1},fetchSettings:function(){var t=this;axios.get("/payments-made/settings").then((function(e){t.settings=e.data.settings,t.financialAccounts=e.data.financial_accounts}))},formSubmit:function(t){var e=this;t.preventDefault(),PNotify.removeAll();var s=this.$root.PNotifySettings,i=new PNotify(s);axios.post("/payments-made/settings",this.settings).then((function(t){e.axiosResponseHandle({response:t,pNotify:i,onSuccess:function(){},onError:function(){}})}))}},updated:function(){}},n=s("KHd+"),a=Object(n.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.$root.showSideBarRight?s("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.hideSideBarRight,expression:"hideSideBarRight"}],staticClass:"sidebar sidebar-light sidebar-right sidebar-expand-md  position-fixed bg-white",staticStyle:{"z-index":"1031"}},[t._m(0),t._v(" "),s("div",{staticClass:"sidebar-content position-fixed  bg-white",staticStyle:{"border-left":"2px solid rgba(0,0,0,0.125)",top:"0px","padding-top":"80px","min-width":"400px"}},[s("div",{staticClass:"card"},[t._m(1),t._v(" "),s("div",{staticClass:"card-body"},[s("form",{on:{submit:t.formSubmit}},[s("div",{staticClass:"form-group"},[s("div",{staticClass:"row"},[t._m(2),t._v(" "),s("div",{staticClass:"col pl-0"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.document_name,expression:"settings.document_name"}],staticClass:"form-control rounded-0",attrs:{type:"text",placeholder:"Document name",maxlength:"50"},domProps:{value:t.settings.document_name},on:{input:function(e){e.target.composing||t.$set(t.settings,"document_name",e.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"form-group"},[s("div",{staticClass:"row"},[t._m(3),t._v(" "),s("div",{staticClass:"col pl-0"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.number_prefix,expression:"settings.number_prefix"}],staticClass:"form-control rounded-0",attrs:{type:"text",placeholder:"Number Prefix",maxlength:"20"},domProps:{value:t.settings.number_prefix},on:{input:function(e){e.target.composing||t.$set(t.settings,"number_prefix",e.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"form-group"},[s("div",{staticClass:"row"},[t._m(4),t._v(" "),s("div",{staticClass:"col pl-0"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.minimum_number_length,expression:"settings.minimum_number_length"}],staticClass:"form-control rounded-0",attrs:{type:"text",placeholder:"Min. Number Length"},domProps:{value:t.settings.minimum_number_length},on:{input:function(e){e.target.composing||t.$set(t.settings,"minimum_number_length",e.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"form-group"},[s("div",{staticClass:"row"},[t._m(5),t._v(" "),s("div",{staticClass:"col pl-0"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.number_postfix,expression:"settings.number_postfix"}],staticClass:"form-control rounded-0",attrs:{type:"text",placeholder:"Number Postfix",maxlength:"20"},domProps:{value:t.settings.number_postfix},on:{input:function(e){e.target.composing||t.$set(t.settings,"number_postfix",e.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"form-group"},[s("div",{staticClass:"row"},[t._m(6),t._v(" "),s("div",{staticClass:"col pl-0"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.minimum_number,expression:"settings.minimum_number"}],staticClass:"form-control rounded-0",attrs:{type:"text",placeholder:"Minimum Number"},domProps:{value:t.settings.minimum_number},on:{input:function(e){e.target.composing||t.$set(t.settings,"minimum_number",e.target.value)}}})])])]),t._v(" "),s("h5",[t._v("Double entry settings")]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{staticClass:"font-weight-bold"},[t._v("Financial account to Debit")]),t._v(" "),s("model-list-select",{staticClass:"font-weight-bold",attrs:{list:t.financialAccounts,"option-value":"code","option-text":"name",placeholder:"Select Financial account to debit"},model:{value:t.settings.debit_financial_account_code,callback:function(e){t.$set(t.settings,"debit_financial_account_code",e)},expression:"settings.debit_financial_account_code"}})],1),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{staticClass:"font-weight-bold"},[t._v("Financial account to Credit")]),t._v(" "),s("model-list-select",{staticClass:"font-weight-bold",attrs:{list:t.financialAccounts,"option-value":"code","option-text":"name",placeholder:"Select Financial account to credit"},model:{value:t.settings.credit_financial_account_code,callback:function(e){t.$set(t.settings,"credit_financial_account_code",e)},expression:"settings.credit_financial_account_code"}})],1),t._v(" "),t._m(7)])])])])]):t._e()}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sidebar-mobile-toggler text-center"},[e("a",{staticClass:"sidebar-mobile-expand",attrs:{href:"#"}},[e("i",{staticClass:"icon-screen-full"}),this._v(" "),e("i",{staticClass:"icon-screen-normal"})]),this._v(" "),e("span",{staticClass:"font-weight-semibold"},[this._v("Right sidebar")]),this._v(" "),e("a",{staticClass:"sidebar-mobile-right-toggle",attrs:{href:"#"}},[e("i",{staticClass:"icon-arrow-right8"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header"},[e("h2",[this._v("Settings")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col pr-0"},[e("span",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text w-100 rounded-0"},[this._v("Document name")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col pr-0"},[e("span",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text w-100 rounded-0"},[this._v("Number Prefix")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col pr-0"},[e("span",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text w-100 rounded-0"},[this._v("Min. Number Length")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col pr-0"},[e("span",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text w-100 rounded-0"},[this._v("Number Postfix")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col pr-0"},[e("span",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text w-100 rounded-0"},[this._v("Minimum Number")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-outline btn-primary border-primary text-primary-800 border-2 rounded font-weight-bold",attrs:{type:"submit"}},[e("i",{staticClass:"icon-files-empty2 mr-1"}),this._v("\n                        Update Estimate settings\n                    ")])}],!1,null,null,null);e.default=a.exports}}]);