(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"9+IA":function(t,e,s){"use strict";s.r(e);var a=s("o0o1"),r=s.n(a);function i(t,e,s,a,r,i,n){try{var o=t[i](n),c=o.value}catch(t){return void s(t)}o.done?e(c):Promise.resolve(c).then(a,r)}function n(t){return function(){var e=this,s=arguments;return new Promise((function(a,r){var n=t.apply(e,s);function o(t){i(n,a,r,o,c,"next",t)}function c(t){i(n,a,r,o,c,"throw",t)}o(void 0)}))}}var o={components:{},data:function(){return{contentType:"",ordersOnHold:[],checkout:!1,itemCategory:{},itemCategories:[],itemCategoryId:0,itemSubCategories:[],itemSubCategoryId:0,searchFieldValue:"",barcodeFieldValue:"",barcodeScannerEnabled:!0}},created:function(){this.pageTitle="POS",this.pageAction=""},mounted:function(){var t=this;window.addEventListener("keyup",(function(e){"search-field"!==e.target.id&&("Enter"!==e.key||!1!==t.barcodeScannerEnabled?"Enter"!==e.key&&!1!==t.barcodeScannerEnabled&&t.barcodeScannerEnabled&&(rg_empty(t.barcodeFieldValue)&&(t.barcodeFieldValue=e.key),t.$refs.barcodeField.focus()):t.$refs.barcodeField.focus())})),this.createData(),this.fetchItems(),this.txnFetchTaxes()},methods:{createData:function(){var t=this;return n(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.get(t.$route.fullPath).then((function(e){t.pageTitle=e.data.pageTitle,t.pageAction=e.data.pageAction,t.txnAttributes=e.data.txnAttributes,t.txnUrlStore=e.data.txnUrlStore,t.txnOnSave(e.data.txnAttributes.status,!1),t.txnTotal()})).catch((function(t){console.log(t)})).finally((function(t){}));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()},fetchItems:function(){var t=this;return n(r.a.mark((function e(){var s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.contentType="loading",s={search:t.searchFieldValue,item_category:t.itemCategoryId,item_sub_category:t.itemSubCategoryId},e.prev=2,e.next=5,axios.post("/items/vue-pos",s).then((function(e){t.txnItems=e.data.items,t.itemCategory=e.data.item_category,t.contentType="items"})).catch((function(t){console.log(t)})).finally((function(t){}));case 5:return e.abrupt("return",e.sent);case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})))()},fetchCategories:function(){var t=this;return n(r.a.mark((function e(){var s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.contentType="loading",s={search_text:t.searchFieldValue,data_format:"select2",search:[{column:"name",value:t.searchFieldValue}]},e.prev=2,e.next=5,axios.post("/items/categories/search",s).then((function(e){t.itemCategories=e.data,t.contentType="categories",console.log("here")})).catch((function(t){console.log(t)})).finally((function(t){}));case 5:return e.abrupt("return",e.sent);case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})))()},fetchSubCategories:function(t){var e=this;return n(r.a.mark((function s(){var a;return r.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return e.contentType="loading",e.itemCategoryId=t,a={search_text:e.searchFieldValue,item_category:e.itemCategoryId,data_format:"select2",search:[{column:"name",value:e.searchFieldValue},{column:"item_category_id",value:e.itemCategoryId}]},s.prev=3,s.next=6,axios.post("/items/sub-categories/search",a).then((function(t){e.itemCategory=t.data.item_category,e.itemSubCategories=t.data.item_sub_category,e.contentType="sub-categories"})).catch((function(t){console.log(t)})).finally((function(t){}));case 6:return s.abrupt("return",s.sent);case 9:s.prev=9,s.t0=s.catch(3),console.log(s.t0);case 12:case"end":return s.stop()}}),s,null,[[3,9]])})))()},fetchSubCategoryItems:function(t){var e=this;return n(r.a.mark((function s(){var a;return r.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return e.contentType="loading",e.itemSubCategoryId=t,a={search_text:e.searchFieldValue,search:e.searchFieldValue,item_category:e.itemCategoryId,item_sub_category:e.itemSubCategoryId},s.prev=3,s.next=6,axios.post("/items/vue-pos",a).then((function(t){e.txnItems=t.data.items,e.itemCategory=t.data.item_category,e.contentType="items"})).catch((function(t){console.log(t)})).finally((function(t){}));case 6:return s.abrupt("return",s.sent);case 9:s.prev=9,s.t0=s.catch(3),console.log(s.t0);case 12:case"end":return s.stop()}}),s,null,[[3,9]])})))()},orderItemsTotal:function(){var t=this;this.txnAttributes.total=0,this.txnAttributes.taxes={},this.txnAttributes.items.forEach((function(e){e.taxes=[],e.total=e.rate*e.quantity,e.displayTotal=e.total,t.txnAttributes.total+=e.total,e.selectedTaxes.forEach((function(s,a){var r="tax_"+s.id,i=e.total,n=t.txnTaxValue(s.value,i,s.inclusive);n=n.toFixed(2),1===s.inclusive||!0===t.txnTaxesAllInclusive?(void 0!==t.txnAttributes.taxes[r]?(t.txnAttributes.taxes[r].total=(rg_number(t.txnAttributes.taxes[r].total)+rg_number(n)).toFixed(2),t.txnAttributes.taxes[r].inclusive=(rg_number(t.txnAttributes.taxes[r].inclusive)+rg_number(n)).toFixed(2)):(t.txnAttributes.taxes[r]={code:s.code,name:s.display_name,total:n,inclusive:n,exclusive:0},e.taxable_amount=e.total-n),e.taxes.push(t.txnAttributes.taxes[r])):(e.displayTotal=e.displayTotal+rg_number(n),t.txnAttributes.total+=rg_number(n),void 0!==t.txnAttributes.taxes[r]?(t.txnAttributes.taxes[r].total=(rg_number(t.txnAttributes.taxes[r].total)+rg_number(n)).toFixed(2),t.txnAttributes.taxes[r].exclusive=(rg_number(t.txnAttributes.taxes[r].exclusive)+rg_number(n)).toFixed(2)):(t.txnAttributes.taxes[r]={code:s.code,name:s.display_name,total:n,inclusive:0,exclusive:n},e.taxable_amount=e.total),e.taxes.push(t.txnAttributes.taxes[r]))}))})),this.txnAttributes.sub_total=this.txnAttributes.total,this.txnAttributes.total=this.txnAttributes.total*(1-rg_number(this.txnAttributes.discount)/100),this.txnAttributes.taxable_amount=this.txnAttributes.total,this.calculateChange()},orderItemsRemove:function(t){this.$delete(this.txnAttributes.items,t),this.orderItemsTotal()},orderItemsClearAll:function(){this.txnAttributes.items=[],this.orderItemsTotal(),this.txnAttributes.taxes={}},addToCart:function(t){if(void 0!==t.rate){for(var e in this.txnAttributes.items)if(t.id===this.txnAttributes.items[e].item_id)return this.txnAttributes.items[e].quantity+=1,this.orderItemsTotal(),!0;this.txnTaxes.find((function(t){return"vat"===t.code}));this.txnAttributes.items.push({selectedItem:{},selectedTaxes:t.sales_taxes,item_id:t.id,name:t.name,description:t.description,rate:t.rate,quantity:1,total:t.rate,taxes:[],tax_id:""}),this.orderItemsTotal(),this.$refs.scroll.$el.scrollTop=this.$refs.scroll.$el.scrollHeight}},updatePaymentMode:function(t){this.txnAttributes.payment_mode=t,this.checkout="cash",this.contentType="checkout"},holdOrder:function(){this.txnAttributes.items.length>0&&(this.ordersOnHold.push(JSON.parse(JSON.stringify(this.txnAttributes))),this.txnAttributes.items=[],this.orderItemsTotal())},orderDescription:function(t){var e="",s=[];return t.items.forEach((function(t){s.includes(t.item_id)||(s.push(t.item_id),e+="\n"+t.name)})),e},completeOrder:function(t){this.txnAttributes=JSON.parse(JSON.stringify(this.ordersOnHold[t])),this.$delete(this.ordersOnHold,t),this.contentType="items"},deleteOrderOnHold:function(t){this.$delete(this.ordersOnHold,t),0===this.ordersOnHold.length&&(this.showOrdersOnHold=!1)},calculateChange:function(){rg_number(this.txnAttributes.cash_tendered)>0&&(this.txnAttributes.cash_change=rg_number(this.txnAttributes.cash_tendered)-rg_number(this.txnAttributes.total))},cancelCheckout:function(){this.checkout=!1,this.contentType="items"},submitOrder:function(t){var e=this;t.preventDefault(),this.txnForn.disabled=!0;var s=this;PNotify.removeAll();var a={title:!1,text:"Please wait as we do our thing",addclass:"bg-warning-400 border-warning-400",hide:!1,buttons:{closer:!1,sticker:!1}},r=new PNotify(a),i=s.txnFormData();axios.post(s.txnUrlStore,i,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){a.text=t.data.messages.join("\n"),!0===t.data.status?(a.title="Success",a.type="success",a.addclass="bg-success-400 border-success-400",r.update(a),s.txnAttributes.items=[],s.checkout=!1,s.createData(),s.contentType="items"):(a.title="! Error",a.type="error",a.addclass="bg-warning-400 border-warning-400",r.update(a)),e.txnForn.disabled=!1,r.get().click((function(){r.remove()}))})).catch((function(t){this.txnForn.disabled=!1}))},imageCacheUrl:function(t){return"/imagecache/250"+t.replace("storage","")},searchItem:function(){var t=this;return n(r.a.mark((function e(){var s,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!rg_empty(t.searchFieldValue)){e.next=2;break}return e.abrupt("return",!1);case 2:if(s=!1,t.txnItems.forEach((function(e){if(e.barcode===t.searchFieldValue)return s=!0,t.addToCart(e)})),!1!==s){e.next=15;break}return e.prev=5,a={search:t.searchFieldValue,item_category:t.itemCategoryId,item_sub_category:t.itemSubCategoryId},e.next=9,axios.post("/items/vue-pos",a).then((function(e){e.data.items.forEach((function(e){if(e.barcode===t.searchFieldValue)return t.addToCart(e)})),t.searchFieldValue=null})).catch((function(t){console.log(t)}));case 9:return e.abrupt("return",e.sent);case 12:e.prev=12,e.t0=e.catch(5),console.log(e.t0);case 15:t.searchFieldValue=null;case 16:case"end":return e.stop()}}),e,null,[[5,12]])})))()},searchItemByBarcode:function(){var t=this;return n(r.a.mark((function e(){var s,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!rg_empty(t.barcodeFieldValue)){e.next=2;break}return e.abrupt("return",!1);case 2:if(s=!1,t.txnItems.forEach((function(e){if(e.barcode===t.barcodeFieldValue)return s=!0,t.addToCart(e)})),!1!==s){e.next=15;break}return e.prev=5,a={barcode:t.barcodeFieldValue,item_category:t.itemCategoryId,item_sub_category:t.itemSubCategoryId},e.next=9,axios.post("/items/vue-pos",a).then((function(e){e.data.items.forEach((function(e){if(e.barcode===t.barcodeFieldValue)return t.addToCart(e)})),t.barcodeFieldValue=null})).catch((function(t){console.log(t)}));case 9:return e.abrupt("return",e.sent);case 12:e.prev=12,e.t0=e.catch(5),console.log(e.t0);case 15:t.barcodeFieldValue=null;case 16:case"end":return e.stop()}}),e,null,[[5,12]])})))()}},beforeUpdate:function(){},updated:function(){},destroyed:function(){}},c=(s("Ycvd"),s("KHd+")),l=Object(c.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content-wrapper"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.barcodeFieldValue,expression:"barcodeFieldValue"}],ref:"barcodeField",staticClass:"form-control rounded-0 border-0 p-0 m-0",staticStyle:{position:"fixed",top:"0",left:"0",width:"1px",height:"1px"},attrs:{id:"barcode-field",type:"text",autofocus:""},domProps:{value:t.barcodeFieldValue},on:{change:t.searchItemByBarcode,input:function(e){e.target.composing||(t.barcodeFieldValue=e.target.value)}}}),t._v(" "),s("div",{staticClass:"d-table"},[s("div",{staticClass:"d-table-cell align-top"},[s("div",{staticClass:"page-header mb-3"},[s("div",{staticClass:"page-title pt-2 pb-3"},[s("div",{staticClass:"text-center",staticStyle:{"min-height":"50px"}},[t._m(0),t._v(" "),s("button",{staticClass:"btn bg-warning-400 font-weight-bold",attrs:{type:"button"},on:{click:function(e){return t.fetchCategories()}}},[s("i",{class:"icon-folder2 mr-1 "+["categories"===t.contentType||"sub-categories"===t.contentType?"icon-2x":""]}),t._v(" "),s("span",[t._v("Categories")])]),t._v(" "),s("button",{staticClass:"btn bg-indigo-400 font-weight-bold",attrs:{type:"button"},on:{click:t.fetchItems}},[s("i",{class:"icon-price-tags2 mr-1 "+["items"===t.contentType?"icon-2x":""]}),t._v(" "),s("span",[t._v("Items")])]),t._v(" "),s("button",{staticClass:"btn btn-danger font-weight-bold",attrs:{type:"button"},on:{click:function(e){t.contentType="orders-on-hold"}}},[s("i",{class:"icon-pause mr-1 "+["orders-on-hold"===t.contentType?"icon-2x":""]}),t._v(" "),s("span",[t._v("Orders on hold")]),t._v(" "),t.ordersOnHold.length>0?s("span",[t._v("| "+t._s(t.ordersOnHold.length))]):t._e()]),t._v(" "),t._m(1)])]),t._v(" "),s("div",{staticClass:"page-header-content pl-2 pr-2"},[s("div",{staticClass:"mt-2 mb-2"},[s("div",{staticClass:"input-group"},[t._m(2),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchFieldValue,expression:"searchFieldValue"}],ref:"searchField",staticClass:"form-control rounded-0",attrs:{id:"search-field",type:"text",autocomplete:"off",placeholder:"Search ... "},domProps:{value:t.searchFieldValue},on:{change:t.fetchItems,keyup:t.fetchItems,input:function(e){e.target.composing||(t.searchFieldValue=e.target.value)}}})])])])]),t._v(" "),"checkout"===t.contentType&&"cash"===t.checkout?s("div",{staticClass:"row justify-content-md-center"},[s("div",{staticClass:"col-lg-8"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body p-0"},[s("table",{staticClass:"table table-borderless table-hover"},[s("tbody",[s("tr",{},[s("td",{staticStyle:{"font-size":"40px"}},[t._v("TOTAL")]),t._v(" "),s("td",{staticClass:"text-right rg-font-size-60-px "},[t._v(t._s(t.rgNumberFormat(t.txnAttributes.total)))])]),t._v(" "),s("tr",{staticClass:"rg-font-size-60-px"},[s("td",{staticClass:"font-weight-bold"},[t._v("CASH")]),t._v(" "),s("td",{},[s("vue-numeric",{staticClass:"form-control rounded-0 text-right border-0 bg-transparent rg-font-size-60-px p-0 font-weight-bold",attrs:{separator:",",min:0},on:{input:t.calculateChange,focus:function(e){t.barcodeScannerEnabled=!1},blur:function(e){t.barcodeScannerEnabled=!0}},model:{value:t.txnAttributes.cash_tendered,callback:function(e){t.$set(t.txnAttributes,"cash_tendered",e)},expression:"txnAttributes.cash_tendered"}}),t._v(" "),s("hr",{staticClass:"m-0",staticStyle:{"border-width":"5px"}})],1)]),t._v(" "),s("tr",{},[s("td",{staticStyle:{"font-size":"40px"}},[t._v("CHANGE")]),t._v(" "),s("td",{staticClass:"text-right rg-font-size-60-px font-weight-semibold"},[t._v(t._s(t.rgNumberFormat(t.txnAttributes.cash_change)))])])]),t._v(" "),s("tfoot",[s("tr",[s("td",{attrs:{colspan:"2"}},[s("div",{staticClass:"btn-group btn-block"},[s("div",{staticClass:"btn-group mr-1"},[s("button",{staticClass:"btn btn-danger btn-float",attrs:{type:"button"},on:{click:t.cancelCheckout}},[s("i",{staticClass:"icon-cross2 rg-font-size-3-rem"})])]),t._v(" "),s("div",{staticClass:"btn-group btn-block"},[s("button",{staticClass:"btn bg-success rg-font-size-3-rem text-uppercase font-weight-bold ",attrs:{type:"button"},on:{click:t.submitOrder}},[t._v("Complete")])])])])])])])])])])]):"orders-on-hold"===t.contentType?s("div",{staticClass:"card rounded-0"},[s("table",{staticClass:"table"},[t.ordersOnHold.length>0?s("thead",[s("tr",[s("th",{staticClass:"col-auto pr-0"},[t._v("#")]),t._v(" "),s("th",{staticClass:"col"},[t._v("Name - "+t._s(t.ordersOnHold.length))]),t._v(" "),s("th",{staticClass:"col-auto text-nowrap text-center"},[t._v("Items #")]),t._v(" "),s("th",{staticClass:"col-auto text-right"},[t._v("Total")]),t._v(" "),s("th",{staticClass:"col-auto"},[t._v("Action")]),t._v(" "),s("th",{staticClass:"col-auto"})])]):t._e(),t._v(" "),t.ordersOnHold.length>0?s("tbody",t._l(t.ordersOnHold,(function(e,a){return s("tr",[s("td",{staticClass:"text-right pr-0"},[t._v(t._s(a+1))]),t._v(" "),s("td",{staticClass:"p-0"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"order.name"}],staticClass:"form-control rounded-0 border-0 font-weight-bold",attrs:{type:"text",placeholder:"Order name"},domProps:{value:e.name},on:{input:function(s){s.target.composing||t.$set(e,"name",s.target.value)}}})]),t._v(" "),s("td",{staticClass:"text-center"},[t._v(t._s(e.items.length))]),t._v(" "),s("td",{staticClass:"text-right font-weight-bold"},[t._v(t._s(t.rgNumberFormat(e.total)))]),t._v(" "),s("td",{staticClass:"pt-0 pb-0 pr-2"},[s("button",{staticClass:"btn btn-outline bg-primary border-primary text-primary-800 border-2 text-nowrap font-weight-bold",attrs:{type:"button"},on:{click:function(e){return t.completeOrder(a)}}},[s("i",{staticClass:"fas fa-angle-double-right"}),t._v(" Complete order\n                                ")])]),t._v(" "),s("td",{staticClass:"pt-0 pb-0 pr-2 pl-0"},[s("button",{staticClass:"btn btn-outline bg-danger border-danger text-danger-800 btn-icon border-2",attrs:{type:"button"},on:{click:function(e){return t.deleteOrderOnHold(a)}}},[s("i",{staticClass:"icon-cross2"})])])])})),0):s("tbody",[t._m(3)])])]):"items"===t.contentType?s("div",{},[t.itemCategory.name?s("div",{staticClass:"row ml-0 mt-0 mr-0 mb-3"},[s("span",{staticClass:"col-auto font-weight-bold font-size-lg text-uppercase"},[t._v(t._s(t.itemCategory.name))]),t._v(" "),s("span",{staticClass:"col pl-0"},[s("i",{staticClass:"icon-chevron-right mr-1"}),t._v("\n                        "+t._s(t.itemCategory.sub_category.name)+"\n                    ")])]):t._e(),t._v(" "),0===t.txnItems.length?s("div",{staticClass:"row m-0"},[s("div",{staticClass:"col-12 font-weight-semibold"},[t._v("No items found")])]):t._e(),t._v(" "),t.txnItems.length>0?s("div",{staticClass:"row m-0"},[s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-hover"},[t._m(4),t._v(" "),s("tbody",t._l(t.txnItems,(function(e,a){return s("tr",{on:{click:function(s){return t.addToCart(e)}}},[s("td",{staticClass:"col-auto pl-1 pr-2 pt-2 pb-2 align-center"},[s("i",{class:"icon-box font-sixe-lg "+[e.inventory_tracking?"text-success":"text-muted"],attrs:{title:[e.inventory_tracking?"Has inentory tracking":"NO inventory tracking"]}})]),t._v(" "),s("td",{staticClass:"col-auto cursor-pointer p-0",attrs:{nowrap:""}},[e.image_path?s("img",{attrs:{src:"/"+e.image_path,onerror:"this.src='/web/assets/template/l/global_assets/images/placeholders/placeholder.jpg';",width:"30",height:"30",alt:""}}):s("img",{attrs:{src:"/web/assets/template/l/global_assets/images/placeholders/placeholder.jpg",width:"30",height:"30",alt:""}})]),t._v(" "),s("td",{staticClass:"col cursor-pointer",attrs:{nowrap:""}},[s("div",{staticClass:"font-weight-semibold"},[t._v(t._s(e.name))]),t._v(" "),s("div",{staticClass:"text-muted rg-nowrap-ellipsis"},[t._v(t._s(e.selling_description))])]),t._v(" "),s("td",{staticClass:"col-auto cursor-pointer"},[t._v(t._s(e.sku))]),t._v(" "),s("td",{staticClass:"col-auto cursor-pointer text-right font-weight-bold font-size-lg"},[t._v(t._s(t.$root.numberFormat(e.rate)))]),t._v(" "),s("td",{staticClass:"col-auto cursor-pointer"},[s("span",{staticClass:"badge badge-primary text-capitalize font-weight-semibold"},[t._v(t._s(e.type))])])])})),0)])])]):t._e()]):"categories"===t.contentType?s("div",{staticClass:"row m-0"},[0===t.itemCategories.length?s("div",{staticClass:"row m-0"},[s("div",{staticClass:"col-12 font-weight-semibold"},[t._v("No item categories found")])]):t._e(),t._v(" "),t._l(t.itemCategories,(function(e,a){return""!=e.name?s("div",{staticClass:"col-xl-2 col-sm-4"},[s("div",{staticClass:"card rounded-0 border-0"},[s("div",{staticClass:"card-body p-0 cursor-pointer"},[s("div",{staticClass:"card-img-actions"},[e.image_url?s("img",{staticClass:"card-img",attrs:{src:t.imageCacheUrl(e.image_path),onerror:"this.src='/web/assets/template/l/global_assets/images/placeholders/placeholder.jpg';",width:"96",alt:""}}):s("img",{staticClass:"card-img",attrs:{src:"/web/assets/template/l/global_assets/images/placeholders/placeholder.jpg",width:"96",alt:""}}),t._v(" "),s("div",{staticClass:"card-img-actions-overlay"},[s("button",{staticClass:"btn btn-outline bg-white text-white border-white border-2 font-weight-bold",attrs:{type:"button"},on:{click:function(s){return t.fetchSubCategories(e.id)}}},[s("i",{staticClass:"fas fa-cart-plus mr-2"}),t._v(" Sub-categories\n                                    ")])])])]),t._v(" "),s("div",{staticClass:"card-body p-2"},[s("div",{staticClass:"mb-1 font-size-lg text-nowrap overflow-hidden",staticStyle:{"text-overflow":"ellipsis"}},[t._v("\n                                "+t._s(e.name)+"\n                                "),e.description?s("div",{staticClass:"text-muted"},[t._v(t._s(e.description))]):t._e()])])])]):t._e()}))],2):"sub-categories"===t.contentType?s("div",{},[t.itemCategory.name?s("div",{staticClass:"row ml-0 mt-0 mr-0 mb-3"},[s("span",{staticClass:"col-auto font-weight-bold font-size-lg text-uppercase"},[t._v(t._s(t.itemCategory.name))])]):t._e(),t._v(" "),0===t.itemSubCategories.length?s("div",{staticClass:"row m-0"},[s("div",{staticClass:"col-12 font-weight-semibold"},[t._v("No item sub-categories found")])]):t._e(),t._v(" "),s("div",{staticClass:"row m-0"},t._l(t.itemSubCategories,(function(e,a){return""!=e.name?s("div",{staticClass:"col-xl-2 col-sm-4"},[s("div",{staticClass:"card rounded-0 border-0"},[s("div",{staticClass:"card-body p-0 cursor-pointer"},[s("div",{staticClass:"card-img-actions"},[e.image_url?s("img",{staticClass:"card-img",attrs:{src:t.imageCacheUrl(e.image_path),onerror:"this.src='/web/assets/template/l/global_assets/images/placeholders/placeholder.jpg';",width:"96",alt:""}}):s("img",{staticClass:"card-img",attrs:{src:"/web/assets/template/l/global_assets/images/placeholders/placeholder.jpg",width:"96",alt:""}}),t._v(" "),s("div",{staticClass:"card-img-actions-overlay"},[s("button",{staticClass:"btn btn-outline bg-white text-white border-white border-2 font-weight-bold",attrs:{type:"button"},on:{click:function(s){return t.fetchSubCategoryItems(e.id)}}},[s("i",{staticClass:"fas fa-cart-plus mr-2"}),t._v(" Show items\n                                        ")])])])]),t._v(" "),s("div",{staticClass:"card-body p-2"},[s("div",{staticClass:"mb-1 font-size-lg text-nowrap overflow-hidden",staticStyle:{"text-overflow":"ellipsis"}},[t._v("\n                                    "+t._s(e.name)+"\n                                    "),e.description?s("div",{staticClass:"text-muted"},[t._v(t._s(e.description))]):t._e()])])])]):t._e()})),0)]):s("div",{staticClass:"row p-5 text-center"},[t._m(5)])]),t._v(" "),s("div",{staticClass:"d-table-cell",staticStyle:{width:"500px"}},[s("perfect-scrollbar",{ref:"scroll",staticClass:"card shadow-none rounded-0 border-0 fixed-top position-fixed h-100 overflow-hidden",staticStyle:{width:"500px",right:"0",top:"0px",left:"auto !important",bottom:"0px","border-left":"3px double #c9c9c9 !important"}},[s("div",{staticClass:"card-body"},[s("loading-animation"),t._v(" "),this.$root.loading?t._e():s("form",{staticClass:"position-relative",staticStyle:{"margin-bottom":"100px"},attrs:{action:"",method:"post",autocomplete:"off"},on:{submit:t.submitOrder}},[s("fieldset",{attrs:{disabled:t.txnForn.disabled}},[s("input",{attrs:{type:"hidden",name:"submit",value:"1"}}),t._v(" "),s("input",{attrs:{type:"hidden",name:"id"},domProps:{value:t.txnAttributes.id}}),t._v(" "),s("input",{attrs:{type:"hidden",name:"contact_name",value:""}}),t._v(" "),s("input",{attrs:{type:"hidden",name:"internal_ref"},domProps:{value:t.txnAttributes.internal_ref}}),t._v(" "),s("input",{attrs:{type:"hidden",name:"quote_currency"},domProps:{value:t.$root.tenant.base_currency}}),t._v(" "),s("div",{staticClass:"form-group row"},[s("div",{staticClass:"col-12"},[s("ul",{staticClass:"list list-unstyled mb-0"},[s("li",[s("h5",{staticClass:"rg-font-weight-600"},[t._v(t._s(t.$root.tenant.name))])]),t._v(" "),t.$root.tenant.street_line_1||t.$root.tenant.street_line_2?s("li",[s("small",{staticClass:"text-muted"},[t._v("Street")]),t._v(" "+t._s(t.$root.tenant.street_line_1)+" "+t._s(t.$root.tenant.street_line_2))]):t._e(),t._v(" "),t.$root.tenant.city?s("li",[s("small",{staticClass:"text-muted"},[t._v("City")]),t._v(" "+t._s(t.$root.tenant.city))]):t._e(),t._v(" "),t.$root.tenant.phone?s("li",[s("small",{staticClass:"text-muted"},[t._v("Phone no.")]),t._v(" "+t._s(t.$root.tenant.phone))]):t._e(),t._v(" "),t.$root.tenant.website?s("li",[s("small",{staticClass:"text-muted"},[t._v("Website")]),t._v(" "+t._s(t.$root.tenant.website))]):t._e()])])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("div",{staticClass:"col-12"},[t._v("\n                                    Receipt No.: "+t._s(t.txnAttributes.number)+"\n                                ")])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("div",{staticClass:"col-12"},[t._v("\n                                    Date: "+t._s(t.txnAttributes.date)+"\n                                ")])]),t._v(" "),s("div",{staticClass:"form-group"},[s("hr",{staticClass:"m-0 p-0"}),t._v(" "),s("table",{staticClass:"table"},[s("thead",{staticClass:"thead-default"},[s("tr",[s("th",{staticClass:"col font-weight-bold pl-2 text-uppercase"},[t._v("Item")]),t._v(" "),s("th",{staticClass:"col-auto font-weight-bold pl-2 pr-0 text-right text-uppercase",staticStyle:{"min-width":"60px !important"}},[t._v("Qty")]),t._v(" "),s("th",{staticClass:"col-auto font-weight-bold text-right pr-0 text-uppercase"},[t._v("Amount")]),t._v(" "),s("th",{staticClass:"col-auto font-weight-bold p-0"},[s("button",{staticClass:"btn bg-danger bg-transparent text-danger btn-icon",attrs:{type:"button",title:"Clear all items"},on:{click:t.orderItemsClearAll}},[s("i",{staticClass:"icon-cross3"})])])])]),t._v(" "),s("tbody",[0===t.txnAttributes.items.length?s("tr",[s("td",{staticClass:"text-muted",attrs:{colspan:"4"}},[s("div",[t._v("* No items added.")]),t._v(" "),s("div",[t._v("* Click on any item on the left to add it.")])])]):t._e(),t._v(" "),t._l(t.txnAttributes.items,(function(e,a){return s("tr",[s("td",{staticClass:"td_item_selector pl-2 rg_select2_border_none"},[s("div",{staticClass:"font-weight-semibold"},[t._v(t._s(e.name))]),t._v(" "),s("div",{staticClass:"text-muted font-size-xs ml-2"},[t._v("@ "+t._s(t.rgNumberFormat(e.rate)))])]),t._v(" "),s("td",{staticClass:"p-0"},[s("vue-numeric",{staticClass:"form-control rounded-0 text-right pl-2 pr-2",attrs:{separator:",",min:0},on:{input:t.orderItemsTotal,focus:function(e){t.barcodeScannerEnabled=!1},blur:function(e){t.barcodeScannerEnabled=!0}},model:{value:e.quantity,callback:function(s){t.$set(e,"quantity",s)},expression:"item.quantity"}})],1),t._v(" "),s("td",{staticClass:"pr-0 text-right"},[t._v(t._s(t.rgNumberFormat(e.displayTotal)))]),t._v(" "),s("td",{staticClass:"p-0"},[s("button",{staticClass:"btn bg-danger bg-transparent text-danger btn-icon",attrs:{type:"button",title:"Delete row"},on:{click:function(e){return t.orderItemsRemove(a)}}},[s("i",{staticClass:"icon-cross3"})])])])}))],2)]),t._v(" "),s("hr",{staticClass:"m-0"})]),t._v(" "),s("div",{staticClass:"text-left col-12 p-0 rg-fixed-bottom-right bg-white"},[s("div",{staticStyle:{"border-top-color":"#ddd","border-top-width":"3px","border-top-style":"double"}},[s("table",{staticClass:"table"},[s("tr",{staticClass:"table-border-double"},[s("td",{},[s("span",{staticClass:"font-weight-semibold h6 m-0 p-0"},[t._v("Sub total")])]),t._v(" "),s("td",{staticClass:"text-right"},[t.txnAttributes.base_currency?s("span",{staticClass:"font-weight-semibold"},[t._v(t._s(t.txnAttributes.base_currency))]):t._e(),t._v(" "),s("span",{staticClass:"h6 m-0 p-0 font-weight-bold"},[t._v(t._s(t.rgNumberFormat(t.txnAttributes.sub_total)))])])]),t._v(" "),t._l(t.txnAttributes.taxes,(function(e){return s("tr",[s("td",{staticClass:"font-weight-bold"},[t._v(t._s(e.name))]),t._v(" "),s("td",{staticClass:"text-right font-weight-bold"},[t._v(t._s(t.rgNumberFormat(e.total)))])])})),t._v(" "),s("tr",{},[s("td",{},[s("span",{staticClass:"font-weight-semibold h6 m-0 p-0"},[t._v("Discount")])]),t._v(" "),s("td",{staticClass:"text-right pt-0 pb-0"},[s("vue-numeric",{staticClass:"form-control rounded-0 border-0 text-right h6 m-0 font-weight-bold pr-0",attrs:{separator:",",min:0,max:100,currency:"%","currency-symbol-position":"suffix"},on:{input:t.orderItemsTotal,focus:function(e){t.barcodeScannerEnabled=!1},blur:function(e){t.barcodeScannerEnabled=!0}},model:{value:t.txnAttributes.discount,callback:function(e){t.$set(t.txnAttributes,"discount",e)},expression:"txnAttributes.discount"}})],1)]),t._v(" "),s("tr",{},[s("td",{},[s("span",{staticClass:"font-weight-semibold rg-font-size-totals"},[t._v("Total due")])]),t._v(" "),s("td",{staticClass:"text-right"},[t.txnAttributes.base_currency?s("span",{staticClass:"font-weight-semibold"},[t._v(t._s(t.txnAttributes.base_currency))]):t._e(),t._v(" "),s("span",{staticClass:"rg-font-size-totals font-weight-bold"},[t._v(t._s(t.rgNumberFormat(t.txnAttributes.total)))])])])],2)]),t._v(" "),s("div",{staticClass:"btn-group btn-group-justified"},[s("div",{staticClass:"btn-group mr-1"},[s("button",{staticClass:"btn btn-outline-primary border-2 p-4 rg-font-size-action-btns",attrs:{type:"button"},on:{click:function(e){return t.holdOrder()}}},[t._v("Hold")])]),t._v(" "),s("div",{staticClass:"btn-group mr-1"},[s("button",{staticClass:"btn bg-success  p-4 rg-font-size-action-btns",attrs:{type:"button"},on:{click:function(e){return t.updatePaymentMode("cash")}}},[t._v("Cash")])]),t._v(" "),s("div",{staticClass:"btn-group"},[s("a",{staticClass:"btn bg-danger p-4 rg-font-size-action-btns",attrs:{href:"/"}},[t._v("Close")])])])])])])],1)])],1)]),t._v(" "),s("div",{staticClass:"content border-0 padding-0"})])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"btn bg-success-400 font-weight-bold",attrs:{href:"/"}},[e("i",{staticClass:"icon-home mr-1"}),this._v(" "),e("span",[this._v("Home")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"btn bg-primary-400 font-weight-bold",attrs:{href:"/pos/orders"}},[e("i",{staticClass:"icon-stack4 mr-1"}),this._v(" "),e("span",[this._v("Orders completed")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text rounded-0 bg-transparent"},[e("i",{staticClass:"icon-search4 text-muted text-size-base"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"text-muted text-center",attrs:{colspan:"6"}},[e("div",[this._v("* No orders on hold.")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",{staticClass:"d-none"},[s("tr",{staticClass:"table-active"},[s("th",{staticClass:"col-auto pl-2 pr-2 pt-2 pb-2",attrs:{scope:"col"}}),t._v(" "),s("th",{staticClass:"col-auto font-weight-bold",staticStyle:{width:"32px"},attrs:{scope:"col"}}),t._v(" "),s("th",{staticClass:"col font-weight-bold",attrs:{scope:"col"}},[t._v("Name")]),t._v(" "),s("th",{staticClass:"col-auto font-weight-bold",attrs:{scope:"col",nowrap:""}},[t._v("SKU")]),t._v(" "),s("th",{staticClass:"col-auto font-weight-bold text-right",attrs:{scope:"col",nowrap:""}},[t._v("Price")]),t._v(" "),s("th",{staticClass:"col-auto font-weight-bold",attrs:{scope:"col",nowrap:""}},[t._v("Type")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12"},[e("button",{staticClass:"btn btn-outline bg-primary-400 border-primary-400 text-primary-800 btn-float rounded-round border-2",attrs:{type:"button"}},[e("i",{staticClass:"icon-spinner4 spinner icon-12x"})])])}],!1,null,null,null);e.default=l.exports},"Eh+x":function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,"\n.rg-font-size-totals {\n    font-size: 24px !important;\n}\n.rg-font-size-action-btns {\n    font-size: 130% !important;\n    font-weight: bold;\n}\n.rg-font-size-60-px {\n    font-size: 60px !important;\n}\n.rg-font-size-3-rem {\n    font-size: 3rem !important;\n}\n.rg-fixed-bottom-right {\n    position: fixed;\n    top: auto;\n    bottom: 5px;\n    left: calc(100% - 495px);\n    z-index: 1030;\n    width: 490px !important;\n}\n",""])},RDHo:function(t,e,s){var a=s("Eh+x");"string"==typeof a&&(a=[[t.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(a,r);a.locals&&(t.exports=a.locals)},Ycvd:function(t,e,s){"use strict";s("RDHo")}}]);