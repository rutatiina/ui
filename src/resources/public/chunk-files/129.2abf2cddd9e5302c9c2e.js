(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{Ij2b:function(t,e,s){"use strict";s.r(e);var a=s("o0o1"),i=s.n(a);function r(t,e,s,a,i,r,n){try{var o=t[r](n),l=o.value}catch(t){return void s(t)}o.done?e(l):Promise.resolve(l).then(a,i)}var n={data:function(){return{payload:{},pageTitle:"Create Item category",urlPost:"/items/categories",imageMaxHeight:272,imageMaxWidth:272,imagesMaxHeight:125,imagesMaxWidth:125,attributes:{src:null,image_presently:{},sub_categories:[]},countries:[],currencies:[],accounts:[],taxes:[]}},mounted:function(){this.fetchAttributes()},watch:{$route:function(){this.fetchAttributes()}},methods:{fetchAttributes:function(){var t,e=this;return(t=i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.$root.loadingTxn=!0,t.next=4,axios.get(e.$route.fullPath).then((function(t){e.$root.loadingTxn=!1,e.pageTitle=t.data.pageTitle,e.urlPost=t.data.urlPost,e.attributes=t.data.attributes,e.countries=t.data.countries,e.currencies=t.data.currencies,e.taxes=t.data.taxes,e.accounts=t.data.accounts})).catch((function(t){console.log(t)})).finally((function(t){}));case 4:return t.abrupt("return",t.sent);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})),function(){var e=this,s=arguments;return new Promise((function(a,i){var n=t.apply(e,s);function o(t){r(n,a,i,o,l,"next",t)}function l(t){r(n,a,i,o,l,"throw",t)}o(void 0)}))})()},itemTypeChange:function(){},formSubmit:function(t){t.preventDefault();var e=this;PNotify.removeAll();var s={title:!1,text:"Please wait as we do our thing",addclass:"bg-warning-400 border-warning-400",hide:!1,buttons:{closer:!1,sticker:!1}},a=new PNotify(s);this.payload=JSON.parse(JSON.stringify(this.attributes)),delete this.payload.image,delete this.payload.images,console.log(this.payload);var i=rgFormData(this.payload);void 0!==e.$refs.image.files[0]&&i.append("image",e.$refs.image.files[0]),axios.post(e.urlPost,i).then((function(t){s.text=t.data.messages.join("\n"),!0===t.data.status?(s.title="Success",s.type="success",s.addclass="bg-success-400 border-success-400"):(s.title="! Error",s.type="error",s.addclass="bg-warning-400 border-warning-400"),a.update(s),a.get().click((function(){a.remove()}))})).catch((function(t){e.response=t}))},onFileChange:function(t,e){var s=t.target.files[0];null===e?this.attributes.image=URL.createObjectURL(s):this.attributes.images[e]=URL.createObjectURL(s)},onResize:function(){this.imagesMaxHeight=this.$refs.imagesHolderDimensions.offsetWidth,this.imagesMaxWidth=this.$refs.imagesHolderDimensions.offsetWidth,this.imageMaxHeight=this.$refs.imageHolderDimensions.offsetWidth,this.imageMaxWidth=this.$refs.imageHolderDimensions.offsetWidth},deleteImage:function(t){"profile"===t?this.attributes.image="/web/assets/template/l/global_assets/images/placeholders/placeholder.jpg":this.attributes.images[t]="/web/assets/template/l/global_assets/images/placeholders/placeholder.jpg",this.attributes.images_deleted.push(t)},resetImage:function(t){"profile"===t?this.attributes.image=this.attributes.image_presently:this.attributes.images[t]=this.attributes.images_presently[t];var e=this.attributes.images_deleted.indexOf(t);e>-1&&this.attributes.images_deleted.splice(e,1)},imageAddButton:function(t){return"profile"===t?!this.attributes.image||"/web/assets/template/l/global_assets/images/placeholders/placeholder.jpg"===this.attributes.image:!this.attributes.images[t]||"/web/assets/template/l/global_assets/images/placeholders/placeholder.jpg"===this.attributes.images[t]},imageRemoveButton:function(t){return"profile"===t?this.attributes.image&&"/web/assets/template/l/global_assets/images/placeholders/placeholder.jpg"!==attributes.image:this.attributes.images[t]&&"/web/assets/template/l/global_assets/images/placeholders/placeholder.jpg"!==this.attributes.images[t]},imageResetButton:function(t){return"profile"===t?this.attributes.image!==this.attributes.image_presently:this.attributes.images[t]!==this.attributes.images_presently[t]},addSubCategory:function(){this.attributes.sub_categories.push({})},deleteSubCategory:function(t){this.$delete(this.attributes.sub_categories,t)}},created:function(){window.addEventListener("resize",this.onResize)},destroyed:function(){window.removeEventListener("resize",this.onResize)},updated:function(){}},o=s("KHd+"),l=Object(o.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content-wrapper"},[s("div",{staticClass:"page-header page-header-light"},[s("div",{staticClass:"page-header-content header-elements-md-inline"},[s("div",{staticClass:"page-title d-flex"},[s("h4",[s("i",{staticClass:"icon-file-plus"}),t._v("\n                    "+t._s(t.pageTitle)+"\n                ")])]),t._v(" "),s("div",{staticClass:"header-elements"},[s("div",{staticClass:"breadcrumb justify-content-center"},[s("router-link",{staticClass:" btn btn-danger btn-sm font-weight-bold",attrs:{to:"/items/categories"}},[s("i",{staticClass:"icon-price-tags mr-1"}),t._v("\n                        Items categories\n                    ")])],1)])]),t._v(" "),t._m(0)]),t._v(" "),s("div",{staticClass:"content border-0 padding-0"},[s("div",{staticClass:"card shadow-none rounded-0 border-0"},[s("div",{staticClass:"card-body p-0"},[s("loading-animation"),t._v(" "),this.$root.loading?t._e():s("form",{staticClass:"max-width-1040",staticStyle:{"margin-bottom":"100px"},attrs:{action:"",method:"post",autocomplete:"off"},on:{submit:t.formSubmit}},[s("div",{staticClass:"border-top-0 border-right-0 border-bottom-0 border-left-3 border-left-grey"},[s("div",{staticClass:"form-group row d-table"},[t._m(1),t._v(" "),s("div",{staticClass:"col-auto d-table-cell"},[s("input",{ref:"image",staticClass:"d-none",attrs:{type:"file",name:"image"},on:{change:function(e){return t.onFileChange(e,null)}}}),t._v(" "),s("div",{ref:"imageHolderDimensions",staticClass:"card shadow-0 border-0 text-center h-100 mb-lg-0"},[s("div",{staticClass:"card-img-actions h-100 d-flex"},[s("img",{staticClass:"img-fluid",staticStyle:{"max-height":"75px","max-width":"75px",width:"auto"},attrs:{src:t.attributes.image,alt:"",onerror:"this.src='/web/assets/template/l/global_assets/images/placeholders/placeholder.jpg'"}}),t._v(" "),s("div",{staticClass:"card-img-actions-overlay card-img-top"},[t.attributes.image&&"/web/assets/template/l/global_assets/images/placeholders/placeholder.jpg"!==t.attributes.image?t._e():s("span",{staticClass:"btn btn-sm btn-icon btn-outline border-white border-2 text-white cursor-pointer",on:{click:function(e){return t.$refs.image.click()}}},[s("i",{staticClass:"icon-plus3 font-weight-bold"})]),t._v(" "),t.attributes.image&&"/web/assets/template/l/global_assets/images/placeholders/placeholder.jpg"!==t.attributes.image?s("span",{staticClass:"btn btn-sm btn-icon btn-outline border-white border-2 text-white cursor-pointer ml-lg-1",on:{click:function(e){return t.deleteImage("profile")}}},[s("i",{staticClass:"icon-cross2"})]):t._e(),t._v(" "),t.attributes.image!==t.attributes.image_presently?s("span",{staticClass:"btn btn-sm btn-icon btn-outline border-white border-2 text-white cursor-pointer ml-lg-1",on:{click:function(e){return t.resetImage("profile")}}},[s("i",{staticClass:"icon-reset"})]):t._e()])])])]),t._v(" "),s("div",{staticClass:"col d-table-cell align-top"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.name,expression:"attributes.name"}],staticClass:"form-control rounded-0",staticStyle:{"font-size":"38px !important"},attrs:{type:"text",placeholder:"Category name"},domProps:{value:t.attributes.name},on:{input:function(e){e.target.composing||t.$set(t.attributes,"name",e.target.value)}}})])])]),t._v(" "),t.attributes.sub_categories.length>0?s("div",[t._m(2)]):t._e(),t._v(" "),t._l(t.attributes.sub_categories,(function(e,a){return s("div",[s("input",{ref:"images"+a,refInFor:!0,staticClass:"d-none",attrs:{type:"file",name:"images"+a},on:{change:function(e){return t.onFileChange(e,a)}}}),t._v(" "),s("fieldset",{staticClass:"border-top-0 border-right-0 border-bottom-0 border-left-3 border-left-grey mb-2"},[s("div",{staticClass:"form-group row mb-0"},[s("label",{staticClass:"col-lg-2 col-form-label font-weight-bold"},[void 0===e.id||0===e.usages?s("button",{staticClass:"btn bg-danger bg-transparent text-danger btn-icon btn-sm",attrs:{type:"button",title:"Clear all items"},on:{click:function(e){return t.deleteSubCategory(a)}}},[s("i",{staticClass:"icon-cross3"})]):s("button",{staticClass:"btn bg-danger bg-transparent text-info btn-icon btn-sm",attrs:{type:"button",title:"This sub-category cannot be deleted because it's in use."}},[s("i",{staticClass:"icon-info22"})]),t._v("\n\n                                    Name "),s("span",{staticClass:"text-danger"},[t._v("*")])]),t._v(" "),s("div",{staticClass:"col pl-0"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"sub_categorie.name"}],staticClass:"form-control rounded-0 h-100",attrs:{type:"text",placeholder:"Sub-category name"},domProps:{value:e.name},on:{input:function(s){s.target.composing||t.$set(e,"name",s.target.value)}}})])])])])})),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"text-left col-md-10 offset-md-2 p-0"},[s("button",{staticClass:"btn btn-primary btn-sm font-weight-bold rounded-0 mr-4 float-left",attrs:{type:"button"},on:{click:t.addSubCategory}},[s("i",{staticClass:"icon-plus2 mr-1"}),t._v(" Add sub category\n                        ")]),t._v(" "),s("button",{staticClass:"btn btn-lg btn-success font-weight-bold rounded-0 float-right",attrs:{type:"submit"}},[s("i",{staticClass:"icon-square-right mr-1"}),t._v(" "+t._s(t.pageTitle)+"\n                        ")])])],2)],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[e("div",{staticClass:"d-flex"},[e("div",{staticClass:"breadcrumb"},[e("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[e("i",{staticClass:"icon-home2 mr-2"}),this._v(" Items")]),this._v(" "),e("span",{staticClass:"breadcrumb-item active"},[this._v("Categories")]),this._v(" "),e("span",{staticClass:"breadcrumb-item active"},[this._v("Create")])]),this._v(" "),e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"col-lg-2 col-form-label font-weight-bold align-middle d-table-cell"},[e("button",{staticClass:"btn bg-danger bg-transparent text-info btn-icon btn-sm",attrs:{type:"button",title:"This category name is required."}},[e("i",{staticClass:"icon-info22"})]),this._v("\n\n                                Name "),e("span",{staticClass:"text-danger"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("label",{staticClass:"col-lg-2 "}),this._v(" "),e("h3",{staticClass:"col text-uppercase"},[this._v("Sub-categories")])])}],!1,null,null,null);e.default=l.exports}}]);