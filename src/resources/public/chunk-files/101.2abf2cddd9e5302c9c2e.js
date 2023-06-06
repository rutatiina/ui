(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{"0ltj":function(t,s,e){"use strict";e.r(s);var i={data:function(){return{settings:{},financialAccounts:[]}},watch:{},mounted:function(){this.fetchSettings()},methods:{hideSideBarRight:function(t){this.$root.showSideBarRight=!1},fetchSettings:function(){var t=this;axios.get("/goods-delivered/settings").then((function(s){t.settings=s.data.settings,t.financialAccounts=s.data.financial_accounts}))},formSubmit:function(t){var s=this;t.preventDefault(),PNotify.removeAll();var e=this.$root.PNotifySettings,i=new PNotify(e);axios.post("/goods-delivered/settings",this.settings).then((function(t){s.axiosResponseHandle({response:t,pNotify:i,onSuccess:function(){},onError:function(){}})}))}},updated:function(){}},n=e("KHd+"),a=Object(n.a)(i,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.$root.showSideBarRight?e("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.hideSideBarRight,expression:"hideSideBarRight"}],staticClass:"sidebar sidebar-light sidebar-right sidebar-expand-md  position-fixed bg-white",staticStyle:{"z-index":"1031"}},[t._m(0),t._v(" "),e("div",{staticClass:"sidebar-content position-fixed  bg-white",staticStyle:{"border-left":"2px solid rgba(0,0,0,0.125)",top:"0px","padding-top":"80px","min-width":"400px"}},[e("div",{staticClass:"card"},[t._m(1),t._v(" "),e("div",{staticClass:"card-body"},[e("form",{on:{submit:t.formSubmit}},[e("div",{staticClass:"form-group"},[e("div",{staticClass:"row"},[t._m(2),t._v(" "),e("div",{staticClass:"col pl-0"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.document_name,expression:"settings.document_name"}],staticClass:"form-control rounded-0",attrs:{type:"text",placeholder:"Document name",maxlength:"50"},domProps:{value:t.settings.document_name},on:{input:function(s){s.target.composing||t.$set(t.settings,"document_name",s.target.value)}}})])])]),t._v(" "),e("div",{staticClass:"form-group"},[e("div",{staticClass:"row"},[t._m(3),t._v(" "),e("div",{staticClass:"col pl-0"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.number_prefix,expression:"settings.number_prefix"}],staticClass:"form-control rounded-0",attrs:{type:"text",placeholder:"Number Prefix",maxlength:"20"},domProps:{value:t.settings.number_prefix},on:{input:function(s){s.target.composing||t.$set(t.settings,"number_prefix",s.target.value)}}})])])]),t._v(" "),e("div",{staticClass:"form-group"},[e("div",{staticClass:"row"},[t._m(4),t._v(" "),e("div",{staticClass:"col pl-0"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.minimum_number_length,expression:"settings.minimum_number_length"}],staticClass:"form-control rounded-0",attrs:{type:"text",placeholder:"Min. Number Length"},domProps:{value:t.settings.minimum_number_length},on:{input:function(s){s.target.composing||t.$set(t.settings,"minimum_number_length",s.target.value)}}})])])]),t._v(" "),e("div",{staticClass:"form-group"},[e("div",{staticClass:"row"},[t._m(5),t._v(" "),e("div",{staticClass:"col pl-0"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.number_postfix,expression:"settings.number_postfix"}],staticClass:"form-control rounded-0",attrs:{type:"text",placeholder:"Number Postfix",maxlength:"20"},domProps:{value:t.settings.number_postfix},on:{input:function(s){s.target.composing||t.$set(t.settings,"number_postfix",s.target.value)}}})])])]),t._v(" "),e("div",{staticClass:"form-group"},[e("div",{staticClass:"row"},[t._m(6),t._v(" "),e("div",{staticClass:"col pl-0"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.minimum_number,expression:"settings.minimum_number"}],staticClass:"form-control rounded-0",attrs:{type:"text",placeholder:"Minimum Number"},domProps:{value:t.settings.minimum_number},on:{input:function(s){s.target.composing||t.$set(t.settings,"minimum_number",s.target.value)}}})])])]),t._v(" "),t._m(7)])])])])]):t._e()}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"sidebar-mobile-toggler text-center"},[s("a",{staticClass:"sidebar-mobile-expand",attrs:{href:"#"}},[s("i",{staticClass:"icon-screen-full"}),this._v(" "),s("i",{staticClass:"icon-screen-normal"})]),this._v(" "),s("span",{staticClass:"font-weight-semibold"},[this._v("Right sidebar")]),this._v(" "),s("a",{staticClass:"sidebar-mobile-right-toggle",attrs:{href:"#"}},[s("i",{staticClass:"icon-arrow-right8"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"card-header"},[s("h2",[this._v("Settings")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col pr-0"},[s("span",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text w-100 rounded-0"},[this._v("Document name")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col pr-0"},[s("span",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text w-100 rounded-0"},[this._v("Number Prefix")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col pr-0"},[s("span",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text w-100 rounded-0"},[this._v("Min. Number Length")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col pr-0"},[s("span",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text w-100 rounded-0"},[this._v("Number Postfix")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col pr-0"},[s("span",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text w-100 rounded-0"},[this._v("Minimum Number")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("button",{staticClass:"btn btn-outline btn-primary border-primary text-primary-800 border-2 rounded font-weight-bold",attrs:{type:"submit"}},[s("i",{staticClass:"icon-files-empty2 mr-1"}),this._v("\n                        Update settings\n                    ")])}],!1,null,null,null);s.default=a.exports}}]);