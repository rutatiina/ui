(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{f7KO:function(t,e,a){"use strict";a.r(e);var s={data:function(){return{}},watch:{"$route.query.page":function(t){this.tableData.url="/workshop/jobs/has-inspections/?page="+t}},mounted:function(){this.$root.appMenu("workshop"),this.tableData.searchColumnOptions=[{value:"date",text:"Date"},{value:"number",text:"Document No"},{value:"reference",text:"Reference"},{value:"contact_name",text:"Contact name"},{value:"status",text:"Status"},{value:"expiry_date",text:"Expiry date"},{value:"total",text:"Total"}],this.tableData.initiate=!0,this.tableRecordsPerPage(230,80,45);void 0===this.$route.query.page?this.tableData.url="/workshop/jobs/has-inspections":this.tableData.url="/workshop/jobs/has-inspections/?page="+this.$route.query.page},methods:{onRowClick:function(t){this.$router.push({path:"/workshop/jobs/"+t.id+"/inspection"})}},ready:function(){},beforeUpdate:function(){},updated:function(){InputsCheckboxesRadios.initComponents()}},l=a("KHd+"),o=Object(l.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"page-header page-header-light"},[t._m(0),t._v(" "),a("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[a("div",{staticClass:"d-flex"},[a("div",{staticClass:"breadcrumb"},[a("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[a("i",{staticClass:"icon-home2 mr-2"}),t._v(" "),a("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(" "+t._s(t._f("truncate")(this.$root.tenant.name,30))+" ")])]),t._v(" "),a("span",{staticClass:"breadcrumb-item"},[t._v("Workshop")]),t._v(" "),a("span",{staticClass:"breadcrumb-item active"},[t._v("Jobs")])]),t._v(" "),t._m(1)]),t._v(" "),a("div",{staticClass:"header-elements"},[a("div",{staticClass:"breadcrumb justify-content-center"},[a("button",{staticClass:"btn btn-danger btn-sm rounded border-2 border-danger-400 btn-icon pl-2 pr-2",attrs:{type:"button"},on:{click:function(e){t.tableData.settingsDisplay=!t.tableData.settingsDisplay}}},[a("i",{staticClass:"icon-cog"})])])])])]),t._v(" "),a("div",{staticClass:"content border-0 p-0"},[a("loading-animation"),t._v(" "),a("div",{staticClass:"card shadow-none rounded-0 border-0"},[t.tableData.settingsDisplay?a("div",{staticClass:"card-body"},[a("div",{staticClass:"form-group row mb-0"},[a("label",{staticClass:"col-lg-1 col-form-label text-right bg-light border rounded-left border-right-0",staticStyle:{"white-space":"nowrap"}},[t._v("\n                        Search by column:\n                    ")]),t._v(" "),a("div",{staticClass:"col-lg-2 pl-0"},[a("model-select",{staticClass:"rounded-left-0",attrs:{options:t.tableData.searchColumnOptions,placeholder:"Choose column"},model:{value:t.tableData.searchColumn,callback:function(e){t.$set(t.tableData,"searchColumn",e)},expression:"tableData.searchColumn"}})],1),t._v(" "),a("div",{staticClass:"col-lg-6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tableData.searchValue,expression:"tableData.searchValue"}],staticClass:"form-control h-100 input-roundless",attrs:{type:"text",placeholder:"Search by column"},domProps:{value:t.tableData.searchValue},on:{input:function(e){e.target.composing||t.$set(t.tableData,"searchValue",e.target.value)}}})]),t._v(" "),a("label",{staticClass:"col-lg-1 col-form-label text-right bg-light border rounded-left border-right-0",staticStyle:{"white-space":"nowrap"}},[t._v("\n                        Records per page:\n                    ")]),t._v(" "),a("div",{staticClass:"col-lg-1 pl-0"},[a("model-select",{staticClass:"rounded-left-0",attrs:{options:t.tableData.recordsPerPageOptions,placeholder:"..."},model:{value:t.tableData.recordsPerPage,callback:function(e){t.$set(t.tableData,"recordsPerPage",e)},expression:"tableData.recordsPerPage"}})],1),t._v(" "),a("div",{staticClass:"col-lg-1"},[a("button",{staticClass:"btn btn-danger rounded border-2 border-danger-400 w-100 h-100 pl-2 pr-2",attrs:{type:"button"},on:{click:t.tableDataUpdate}},[a("i",{staticClass:"icon-cog"}),t._v(" Search\n                        ")])])])]):t._e(),t._v(" "),a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-hover"},[a("thead",{},[a("tr",{staticClass:"table-active"},[a("th",{staticClass:"font-weight-bold",staticStyle:{width:"20px"},attrs:{scope:"col"}},[a("div",{staticClass:"custom-control custom-checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.rgTableSelectAll,expression:"rgTableSelectAll"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"row-checkbox-all"},domProps:{checked:Array.isArray(t.rgTableSelectAll)?t._i(t.rgTableSelectAll,null)>-1:t.rgTableSelectAll},on:{change:function(e){var a=t.rgTableSelectAll,s=e.target,l=!!s.checked;if(Array.isArray(a)){var o=t._i(a,null);s.checked?o<0&&(t.rgTableSelectAll=a.concat([null])):o>-1&&(t.rgTableSelectAll=a.slice(0,o).concat(a.slice(o+1)))}else t.rgTableSelectAll=l}}}),t._v(" "),a("label",{staticClass:"custom-control-label",attrs:{for:"row-checkbox-all"}})])]),t._v(" "),a("th",{staticClass:"font-weight-bold",attrs:{scope:"col"}},[t._v("No.")]),t._v(" "),a("th",{staticClass:"font-weight-bold",attrs:{scope:"col",nowrap:""}},[t._v("Vehicle Reg No.")]),t._v(" "),a("th",{staticClass:"font-weight-bold",attrs:{scope:"col"}},[t._v("Mileage")]),t._v(" "),a("th",{staticClass:"font-weight-bold",attrs:{scope:"col",nowrap:""}},[t._v("Checkin date")]),t._v(" "),a("th",{staticClass:"font-weight-bold",attrs:{scope:"col",nowrap:""}},[t._v("Checkout date")]),t._v(" "),a("th",{staticClass:"font-weight-bold",attrs:{scope:"col",nowrap:""}},[t._v("Service Advicsor")])])]),t._v(" "),a("rg-tables-state"),t._v(" "),a("tbody",t._l(t.tableData.payload.data,(function(e){return a("tr",{on:{click:function(a){return t.onRowClick(e)}}},[a("td",{staticClass:"pr-0",on:{click:function(t){t.stopPropagation()}}},[a("div",{staticClass:"custom-control custom-checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tableData.selected,expression:"tableData.selected"}],staticClass:"custom-control-input",attrs:{type:"checkbox",number:"",id:"row-checkbox-"+e.id,isabled:""},domProps:{value:e.id,checked:Array.isArray(t.tableData.selected)?t._i(t.tableData.selected,e.id)>-1:t.tableData.selected},on:{change:function(a){var s=t.tableData.selected,l=a.target,o=!!l.checked;if(Array.isArray(s)){var c=e.id,r=t._i(s,c);l.checked?r<0&&t.$set(t.tableData,"selected",s.concat([c])):r>-1&&t.$set(t.tableData,"selected",s.slice(0,r).concat(s.slice(r+1)))}else t.$set(t.tableData,"selected",o)}}}),t._v(" "),a("label",{staticClass:"custom-control-label",attrs:{for:"row-checkbox-"+e.id}})])]),t._v(" "),a("td",{staticClass:"cursor-pointer",attrs:{nowrap:""}},[t._v(t._s(e.number))]),t._v(" "),a("td",{staticClass:"cursor-pointer"},[e.vehicle?a("div",[t._v(t._s(e.vehicle.registration_number))]):t._e()]),t._v(" "),a("td",{staticClass:"cursor-pointer"},[t._v(t._s(e.mileage))]),t._v(" "),a("td",{staticClass:"cursor-pointer"},[t._v(t._s(e.checkin_date))]),t._v(" "),a("td",{staticClass:"cursor-pointer"},[t._v(t._s(e.checkout_date))]),t._v(" "),a("td",{staticClass:"cursor-pointer",attrs:{nowrap:""}},[e.service_adviser?a("div",[t._v(t._s(e.service_adviser.name))]):t._e()])])})),0)],1),t._v(" "),a("rg-tables-pagination",{attrs:{"table-data-prop":t.tableData}})],1)])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-header-content header-elements-md-inline"},[e("div",{staticClass:"page-title d-flex"},[e("h4",[e("i",{staticClass:"icon-drawer3 mr-2"}),this._v(" "),e("span",{staticClass:"font-weight-semibold"},[this._v("Job Inspections")])]),this._v(" "),e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])}],!1,null,null,null);e.default=o.exports}}]);