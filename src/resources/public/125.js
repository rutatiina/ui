(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{elsO:function(t,e,a){"use strict";a.r(e);var s=a("o0o1"),o=a.n(s),r=a("KHd+");function n(t,e,a,s,o,r,n){try{var i=t[r](n),c=i.value}catch(t){return void a(t)}i.done?e(c):Promise.resolve(c).then(s,o)}var i={components:{IndexTableRowsSelectedActions:Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",{staticClass:"table-border-double"},[a("td",{staticClass:"pr-0",on:{click:function(t){t.stopPropagation()}}},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.$parent.tableData.selected.length,expression:"$parent.tableData.selected.length"}],staticClass:"badge badge-primary font-weight-bold"},[t._v(t._s(t.$parent.tableData.selected.length))])]),t._v(" "),a("td",{staticClass:"cursor-pointer",attrs:{nowrap:"",colspan:"7"}},[t.$parent.tableData.selected.length>0?a("div",[a("span",{staticClass:"font-weight-bold text-danger mr-2 border-left-2 pl-1",on:{click:function(e){return e.preventDefault(),t.$parent.appFetchGlobalsDeleteRecord(e)}}},[a("i",{staticClass:"icon-bin2"}),t._v(" Delete")])]):a("div",{staticClass:"text-muted"},[t._v("* Use checkbox at the begining of the row to select entry")])])])}),[],!1,null,null,null).exports},data:function(){return{}},watch:{"$route.query.page":function(t){this.tableData.url=this.$router.currentRoute.path+"?page="+t}},mounted:function(){this.appFetchGlobalsRoutes("goods-received"),this.tableData.searchColumnOptions=[{value:"date",text:"Date"},{value:"number",text:"Document No"},{value:"reference",text:"Reference"},{value:"contact_name",text:"Contact name"},{value:"status",text:"Status"},{value:"expiry_date",text:"Expiry date"},{value:"total",text:"Total"}],this.tableData.initiate=!0,this.tableRecordsPerPage(230,80,45),void 0===this.$route.query.page?this.tableData.url=this.$router.currentRoute.path:this.tableData.url=this.$router.currentRoute.path+"?page="+this.$route.query.page},methods:{onRowClick:function(t){this.$router.push({path:"/goods-received/"+t.id})},rowEdit:function(t){this.$router.push({path:"/goods-received/"+t.id+"/edit"})},rowDelete:function(t){var e,a=this;return(e=o.a.mark((function e(){var s,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s={title:!1,text:"Please wait as we do our thing",addclass:"bg-warning-400 border-warning-400",hide:!1,buttons:{closer:!1,sticker:!1}},r=new PNotify(s),e.abrupt("return",axios.delete("/goods-received/"+t.id).then((function(t){s.text=t.data.messages.join("\n"),!0===t.data.status?(s.title="Success",s.type="success",s.addclass="bg-success-400 border-success-400",r.update(s),a.tableDataUpdate()):(s.title="! Error",s.type="error",s.addclass="bg-warning-400 border-warning-400",r.update(s)),a.tableDataUpdate(),r.get().click((function(){r.remove()}))})).catch((function(t){})));case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})),function(){var t=this,a=arguments;return new Promise((function(s,o){var r=e.apply(t,a);function i(t){n(r,s,o,i,c,"next",t)}function c(t){n(r,s,o,i,c,"throw",t)}i(void 0)}))})()}},ready:function(){},beforeUpdate:function(){},updated:function(){}},c=Object(r.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"page-header page-header-light"},[t._m(0),t._v(" "),a("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[a("div",{staticClass:"d-flex"},[a("div",{staticClass:"breadcrumb"},[a("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[a("i",{staticClass:"icon-home2 mr-2"}),t._v(" "),a("span",{staticClass:"badge badge-primary font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(" "+t._s(t._f("truncate")(this.$root.tenant.name,30))+" ")])]),t._v(" "),a("span",{staticClass:"breadcrumb-item"},[t._v("Accounting")]),t._v(" "),a("span",{staticClass:"breadcrumb-item"},[t._v("Inventory")]),t._v(" "),a("span",{staticClass:"breadcrumb-item active"},[t._v("Goods Received Notes")])]),t._v(" "),t._m(1)]),t._v(" "),a("div",{staticClass:"header-elements"},[a("div",{staticClass:"breadcrumb justify-content-center"},[a("router-link",{staticClass:"btn btn-outline btn-primary border-primary text-primary-800 border-2 btn-sm rounded font-weight-bold mr-2",attrs:{to:"/goods-received/create"}},[a("i",{staticClass:"icon-files-empty2 mr-1"}),t._v("\n                        New Goods Received Note\n                    ")]),t._v(" "),a("button",{staticClass:"btn btn-danger btn-sm rounded border-2 border-danger-400 btn-icon pl-2 pr-2",attrs:{type:"button"},on:{click:function(e){t.tableData.settingsDisplay=!t.tableData.settingsDisplay}}},[a("i",{staticClass:"icon-cog"})])],1)])])]),t._v(" "),a("div",{staticClass:"content border-0 p-0"},[a("loading-animation"),t._v(" "),a("div",{staticClass:"card shadow-none rounded-0 border-0"},[a("div",{staticClass:"table-responsive overflow-visible"},[a("table",{staticClass:"table table-hover"},[t._m(2),t._v(" "),a("rg-tables-state"),t._v(" "),a("tbody",[a("index-table-rows-selected-actions"),t._v(" "),t._l(t.tableData.payload.data,(function(e){return[0==e.items.length?a("tr",{staticClass:"cursor-pointer"},[a("td",{staticClass:"pr-0",on:{click:function(t){t.stopPropagation()}}},[a("div",{staticClass:"custom-control custom-checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tableData.selected,expression:"tableData.selected"}],staticClass:"custom-control-input",attrs:{type:"checkbox",number:"",id:"row-checkbox-"+e.id,isabled:""},domProps:{value:e.id,checked:Array.isArray(t.tableData.selected)?t._i(t.tableData.selected,e.id)>-1:t.tableData.selected},on:{change:function(a){var s=t.tableData.selected,o=a.target,r=!!o.checked;if(Array.isArray(s)){var n=e.id,i=t._i(s,n);o.checked?i<0&&t.$set(t.tableData,"selected",s.concat([n])):i>-1&&t.$set(t.tableData,"selected",s.slice(0,i).concat(s.slice(i+1)))}else t.$set(t.tableData,"selected",r)}}}),t._v(" "),a("label",{staticClass:"custom-control-label",attrs:{for:"row-checkbox-"+e.id}})])]),t._v(" "),a("td",{staticClass:"pl-2 pr-2",attrs:{nowrap:""}},[a("div",{staticClass:"btn-group ml-1"},[t._m(3,!0),t._v(" "),a("div",{staticClass:"dropdown-menu dropdown-menu-left rounded-0"},[a("a",{staticClass:"dropdown-item font-weight-semibold",attrs:{href:""},on:{click:function(a){return a.preventDefault(),t.rowEdit(e)}}},[a("i",{staticClass:"icon-pencil5"}),t._v(" Edit\n                                            ")]),t._v(" "),a("a",{staticClass:"dropdown-item font-weight-semibold",attrs:{href:""},on:{click:function(a){return a.preventDefault(),t.rowDelete(e)}}},[a("i",{staticClass:"icon-bin2 text-danger"}),t._v(" Delete")])])])]),t._v(" "),a("td",{attrs:{nowrap:""},on:{click:function(a){return t.onRowClick(e)}}},[t._v(t._s(e.date))]),t._v(" "),a("td",{staticClass:"text-nowrap",attrs:{nowrap:""},on:{click:function(a){return t.onRowClick(e)}}},[t._v(t._s(e.number))]),t._v(" "),a("td",{staticClass:"font-italic small",attrs:{colspan:"4"},on:{click:function(a){return t.onRowClick(e)}}},[t._v("* Goods received note has NO items")])]):t._e(),t._v(" "),t._l(e.items,(function(s,o){return a("tr",{staticClass:"cursor-pointer"},[a("td",{staticClass:"pr-0"},[a("div",{staticClass:"custom-control custom-checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tableData.selected,expression:"tableData.selected"}],staticClass:"custom-control-input",attrs:{type:"checkbox",number:"",id:"row-checkbox-"+e.id,isabled:""},domProps:{value:e.id,checked:Array.isArray(t.tableData.selected)?t._i(t.tableData.selected,e.id)>-1:t.tableData.selected},on:{change:function(a){var s=t.tableData.selected,o=a.target,r=!!o.checked;if(Array.isArray(s)){var n=e.id,i=t._i(s,n);o.checked?i<0&&t.$set(t.tableData,"selected",s.concat([n])):i>-1&&t.$set(t.tableData,"selected",s.slice(0,i).concat(s.slice(i+1)))}else t.$set(t.tableData,"selected",r)}}}),t._v(" "),a("label",{staticClass:"custom-control-label",attrs:{for:"row-checkbox-"+e.id}})])]),t._v(" "),a("td",{staticClass:"pl-2 pr-2",attrs:{nowrap:""}},[a("div",{staticClass:"btn-group ml-1"},[t._m(4,!0),t._v(" "),a("div",{staticClass:"dropdown-menu dropdown-menu-left rounded-0"},[a("a",{staticClass:"dropdown-item font-weight-semibold",attrs:{href:""},on:{click:function(a){return a.preventDefault(),t.rowEdit(e)}}},[a("i",{staticClass:"icon-pencil5"}),t._v(" Edit\n                                            ")]),t._v(" "),a("a",{staticClass:"dropdown-item font-weight-semibold",attrs:{href:""},on:{click:function(a){return a.preventDefault(),t.rowDelete(e)}}},[a("i",{staticClass:"icon-bin2 text-danger"}),t._v(" Delete")])])])]),t._v(" "),a("td",{attrs:{nowrap:""},on:{click:function(a){return t.onRowClick(e)}}},[t._v(t._s(e.date))]),t._v(" "),a("td",{staticClass:"text-nowrap",attrs:{nowrap:""},on:{click:function(a){return t.onRowClick(e)}}},[t._v(t._s(e.number))]),t._v(" "),a("td",{on:{click:function(a){return t.onRowClick(e)}}},[t._v(t._s(s.name))]),t._v(" "),a("td",{staticClass:"text-nowrap",on:{click:function(a){return t.onRowClick(e)}}},[t._v(t._s(s.batch))]),t._v(" "),a("td",{staticClass:"font-weight-bold text-right",on:{click:function(a){return t.onRowClick(e)}}},[t._v(t._s(t.rgNumberFormat(s.quantity,2)))]),t._v(" "),a("td",{staticClass:"font-weight-bold text-right",on:{click:function(a){return t.onRowClick(e)}}},[t._v(t._s(t.rgNumberFormat(s.quantity,2)))])])}))]})),t._v(" "),a("index-table-rows-selected-actions")],2)],1),t._v(" "),a("rg-tables-pagination",{attrs:{"table-data-prop":t.tableData}})],1)])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-header-content header-elements-md-inline"},[e("div",{staticClass:"page-title d-flex"},[e("h4",[e("i",{staticClass:"icon-drawer3 mr-2"}),this._v(" "),e("span",{staticClass:"font-weight-semibold"},[this._v("Goods Received Notes")])]),this._v(" "),e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",{staticClass:"table-active"},[a("th",{staticClass:"col-auto font-weight-bold",attrs:{scope:"col"}}),t._v(" "),a("th",{staticClass:"col-auto font-weight-bold",attrs:{scope:"col"}}),t._v(" "),a("th",{staticClass:"col-auto font-weight-bold",attrs:{scope:"col"}},[t._v("Date")]),t._v(" "),a("th",{staticClass:"col-auto font-weight-bold",attrs:{scope:"col"}},[t._v("#")]),t._v(" "),a("th",{staticClass:"col font-weight-bold",attrs:{scope:"col",nowrap:""}},[t._v("Item name")]),t._v(" "),a("th",{staticClass:"col font-weight-bold",attrs:{scope:"col",nowrap:""}},[t._v("Batch")]),t._v(" "),a("th",{staticClass:"col-auto font-weight-bold text-right",attrs:{scope:"col"}},[t._v("Units")]),t._v(" "),a("th",{staticClass:"col-auto font-weight-bold text-right",attrs:{scope:"col"}},[t._v("Quantity")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-sm bg-transparent border-purple-300 text-purple-800 btn-icon border-2 border-top-0 border-right-0 border-bottom-0 pt-0 pb-0",attrs:{type:"button","data-toggle":"dropdown"}},[e("i",{staticClass:"icon-menu8"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-sm bg-transparent border-purple-300 text-purple-800 btn-icon border-2 border-top-0 border-right-0 border-bottom-0 pt-0 pb-0",attrs:{type:"button","data-toggle":"dropdown"}},[e("i",{staticClass:"icon-menu8"})])}],!1,null,null,null);e.default=c.exports}}]);