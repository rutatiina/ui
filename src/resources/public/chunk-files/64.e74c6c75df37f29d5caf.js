(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{"0kWr":function(t,e,a){"use strict";a.r(e);var s=a("o0o1"),i=a.n(s);function n(t,e,a,s,i,n,r){try{var o=t[n](r),l=o.value}catch(t){return void a(t)}o.done?e(l):Promise.resolve(l).then(s,i)}var r={data:function(){return{attributes:{encoding:null},networks:[],characterEncoding:[{value:"UTF-8 (Unicode)",text:"UTF-8 (Unicode)"},{value:"UTF-16 (Unicode)",text:"UTF-16 (Unicode)"},{value:"ISO-8859-1",text:"ISO-8859-1"},{value:"ISO-8859-2",text:"ISO-8859-2"},{value:"ISO-8859-9",text:"ISO-8859-9 (Turkish)"},{value:"GB2312",text:"GB2312 (Simplified Chinese)"},{value:"Big5",text:"Big5 (Traditional Chinese)"},{value:"Shift_JIS",text:"Shift_JIS (Japanese)"}]}},mounted:function(){this.$root.appMenu("crbt"),this.fetchAttributes()},methods:{fetchAttributes:function(){var t,e=this;return(t=i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,axios.get(e.$route.fullPath).then((function(t){e.pageTitle=t.data.pageTitle,e.attributes=t.data.attributes,e.urlPost=t.data.urlPost,e.networks=t.data.networks})).catch((function(t){console.log(t)})).finally((function(t){}));case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})),function(){var e=this,a=arguments;return new Promise((function(s,i){var r=t.apply(e,a);function o(t){n(r,s,i,o,l,"next",t)}function l(t){n(r,s,i,o,l,"throw",t)}o(void 0)}))})()},formSubmit:function(t){t.preventDefault();var e=this;PNotify.removeAll();var a={title:!1,text:"Please wait as we do our thing",addclass:"bg-warning-400 border-warning-400",hide:!1,buttons:{closer:!1,sticker:!1}},s=new PNotify(a),i=new FormData;$.each(e.attributes,(function(t,e){i.append(t,e)})),i.append("file",e.$refs.fileInput.files[0]),axios.post("/crbt/statements",i,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){a.text=e.data.message,!0===e.data.status?(a.title="Success",a.type="success",a.addclass="bg-success-400 border-success-400",t.target.reset()):(a.title="Error!",a.type="error",a.addclass="bg-warning-400 border-warning-400"),s.update(a),s.get().click((function(){s.remove()}))})).catch((function(t){e.response=t}))}}},o=a("KHd+"),l=Object(o.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"page-header page-header-light"},[t._m(0),t._v(" "),a("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[a("div",{staticClass:"d-flex"},[a("div",{staticClass:"breadcrumb"},[a("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[a("i",{staticClass:"icon-home2 mr-2"}),t._v(" "),a("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(" "+t._s(t._f("truncate")(this.$root.tenant.name,30))+" ")])]),t._v(" "),a("span",{staticClass:"breadcrumb-item"},[t._v("CRBT")]),t._v(" "),a("span",{staticClass:"breadcrumb-item active"},[t._v("Upload Report")])]),t._v(" "),t._m(1)]),t._v(" "),a("div",{staticClass:"header-elements"},[a("div",{staticClass:"breadcrumb justify-content-center"},[a("router-link",{staticClass:" btn btn-danger btn-sm rounded-round font-weight-bold",attrs:{to:"/crbt/statements"}},[a("i",{staticClass:"icon-drawer3 mr-2"}),t._v("\n                        Statements\n                    ")])],1)])])]),t._v(" "),a("div",{staticClass:"content border-0 padding-0"},[a("loading-animation"),t._v(" "),a("div",{staticClass:"card shadow-none rounded-0 border-0"},[a("div",{staticClass:"card-body p-0"},[this.$root.loading?t._e():a("form",{staticClass:"max-width-820",staticStyle:{"margin-bottom":"100px"},attrs:{action:"",method:"post",autocomplete:"off"},on:{submit:t.formSubmit}},[a("fieldset",{},[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-form-label col-lg-2"},[t._v("Attach files")]),t._v(" "),a("div",{staticClass:"col-lg-6"},[a("input",{ref:"fileInput",staticClass:"form-control border-0 p-0 h-auto",attrs:{type:"file",name:"file"}}),t._v(" "),t._m(2)])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-form-label col-md-2"},[t._v("Network")]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("model-list-select",{attrs:{list:t.networks,"option-value":"id","option-text":"name",placeholder:"Select network"},model:{value:t.attributes.network_id,callback:function(e){t.$set(t.attributes,"network_id",e)},expression:"attributes.network_id"}})],1)]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-form-label col-md-2"},[t._v("Character Encoding")]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("model-list-select",{attrs:{list:t.characterEncoding,"option-value":"value","option-text":"text",placeholder:"Character Encoding"},model:{value:t.attributes.encoding,callback:function(e){t.$set(t.attributes,"encoding",e)},expression:"attributes.encoding"}})],1)]),t._v(" "),t._m(3)])])])])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-header-content header-elements-md-inline"},[e("div",{staticClass:"page-title d-flex"},[e("h4",[e("i",{staticClass:"icon-file-plus"}),this._v("\n                    Upload Statement - Select File\n                ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-muted pl-0"},[e("small",[this._v("File format: CSV or TSV or OFX or QIF or CAMT.053")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-form-label col-lg-2"}),this._v(" "),e("div",{staticClass:"col-lg-10"},[e("button",{staticClass:"btn btn-danger btn-labeled btn-labeled-left font-weight-bold",attrs:{type:"submit"}},[e("b",[e("i",{staticClass:"icon-chevron-right"})]),this._v(" Upload & Continue\n                                ")])])])}],!1,null,null,null);e.default=l.exports}}]);