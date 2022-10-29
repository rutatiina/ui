(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{"1Saq":function(t,s,a){"use strict";a.r(s);var e={watch:{"$route.query.page":function(t){this.tableData.url=this.$router.currentRoute.path+"?page="+t}},mounted:function(){this.$root.appMenu("settings"),this.tableData.initiate=!0;void 0===this.$route.query.page?this.tableData.url=this.$router.currentRoute.path:this.tableData.url=this.$router.currentRoute.path+"?page="+this.$route.query.page},methods:{onRowClick:function(t){this.$router.push({path:"/settings/organisations/"+t.id+"/edit"})},deleteTxns:function(t){swal.mixin({buttonsStyling:!1,confirmButtonClass:"btn btn-primary",cancelButtonClass:"btn btn-light"})({title:t.name,html:"Are you sure you want to delete <b>all</b> transactions",type:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",showLoaderOnConfirm:!0,allowOutsideClick:!1,preConfirm:function(){return axios.delete("/settings/organisations/"+t.id+"/delete-transactions").then((function(t){return console.log(t),t.data.message}))}}).then((function(t){console.log(t),t.value&&Swal.fire({title:t.value,showConfirmButton:!1})}))}},ready:function(){},beforeUpdate:function(){},updated:function(){InputsCheckboxesRadios.initComponents()}},i=a("KHd+"),n=Object(i.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"page-header page-header-light"},[a("div",{staticClass:"page-header-content header-elements-md-inline"},[t._m(0),t._v(" "),a("div",{staticClass:"header-elements d-none"},[a("div",{staticClass:"breadcrumb justify-content-center"},[a("router-link",{staticClass:" btn btn-danger btn-sm font-weight-bold",attrs:{to:"/settings/organisations/create"}},[a("i",{staticClass:"icon-user-plus mr-1"}),t._v("\n                        New Organisation\n                    ")])],1)])]),t._v(" "),t._m(1)]),t._v(" "),a("div",{staticClass:"content border-0 p-0"},[a("loading-animation"),t._v(" "),a("div",{staticClass:"card shadow-none rounded-0 border-0"},[this.$root.loading||0!==t.tableData.payload.data.length?t._e():a("div",{staticClass:"card-body"},[t._m(2)]),t._v(" "),a("div",{staticClass:"table-responsive overflow-visible"},[a("table",{staticClass:"table table-hover"},[a("tbody",[t._m(3),t._v(" "),t._l(t.tableData.payload.data,(function(s){return a("tr",[a("td",{staticClass:"cursor-pointer font-weight-bold",on:{click:function(t){t.stopPropagation()}}},[a("a",{attrs:{href:"/settings/organisations/"+s.id+"/switch"}},[a("i",{staticClass:"icon-loop position-left"})])]),t._v(" "),a("td",{staticClass:"cursor-pointer font-weight-semibold",attrs:{nowrap:""},on:{click:function(a){return t.onRowClick(s)}}},[t._v(t._s(s.name))]),t._v(" "),a("td",[t._v(t._s(s.country))]),t._v(" "),a("td",{staticClass:"cursor-pointer"},[t._v(t._s(s.base_currency))]),t._v(" "),a("td",{staticClass:"cursor-pointer",attrs:{nowrap:""}},[t._v(t._s(s.fiscal_year))]),t._v(" "),a("td",{attrs:{nowrap:""}},[t._v(t._s(s.time_zone))]),t._v(" "),a("td",{attrs:{nowrap:""}},[t._v(t._s(s.date_format))]),t._v(" "),a("td",{staticClass:"cursor-pointer"},[a("div",{staticClass:"list-icons"},[a("a",{staticClass:"list-icons-item text-primary-600",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.onRowClick(s)}}},[a("i",{staticClass:"icon-pencil7"})]),t._v(" "),a("a",{staticClass:"list-icons-item text-danger-600",attrs:{href:"#",title:"Delete all transactions"},on:{click:function(a){return a.preventDefault(),t.deleteTxns(s)}}},[a("i",{staticClass:"icon-trash"})]),t._v(" "),a("div",{staticClass:"dropdown"},[t._m(4,!0),t._v(" "),a("div",{staticClass:"dropdown-menu"},[a("a",{staticClass:"dropdown-item",attrs:{href:"/settings/organisations/"+s.id+"/switch"}},[a("i",{staticClass:"icon-loop position-left"}),t._v(" Switch to this organization\n                                        ")]),t._v(" "),a("router-link",{staticClass:"dropdown-item",attrs:{to:"/settings/organisations/payment-details"}},[a("i",{staticClass:"icon-cash3"}),t._v(" Manage payment details")]),t._v(" "),a("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.onRowClick(s)}}},[a("i",{staticClass:"icon-file-excel"}),t._v(" Edit organization")])],1)])])])])}))],2)]),t._v(" "),a("rg-tables-pagination",{attrs:{"table-data-prop":t.tableData}})],1)])],1)])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"page-title d-flex"},[s("h4",[s("i",{staticClass:"icon-users2 mr-2"}),this._v(" "),s("span",{staticClass:"font-weight-semibold"},[this._v("Organisations")])]),this._v(" "),s("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[s("i",{staticClass:"icon-more"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[s("div",{staticClass:"d-flex"},[s("div",{staticClass:"breadcrumb"},[s("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[s("i",{staticClass:"icon-home2 mr-2"}),this._v(" Home")]),this._v(" "),s("span",{staticClass:"breadcrumb-item active"},[this._v("Organisations")])]),this._v(" "),s("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[s("i",{staticClass:"icon-more"})])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h6",[s("i",{staticClass:"icon-files-empty mr-2"}),this._v("\n                    No records found\n                ")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("tr",{staticClass:"table-active"},[a("th",{staticClass:"col-auto font-weight-bold",attrs:{scope:"col"}},[a("i",{staticClass:"icon-loop text-muted"})]),t._v(" "),a("th",{staticClass:"col font-weight-bold",attrs:{scope:"col"}},[t._v("Name")]),t._v(" "),a("th",{staticClass:"col-auto font-weight-bold",attrs:{scope:"col",nowrap:""}},[t._v("Country")]),t._v(" "),a("th",{staticClass:"col-auto font-weight-bold",attrs:{scope:"col",nowrap:""}},[t._v("Currency")]),t._v(" "),a("th",{staticClass:"col-auto font-weight-bold",attrs:{scope:"col",nowrap:""}},[t._v("Fiscal Year")]),t._v(" "),a("th",{staticClass:"col-auto font-weight-bold",attrs:{scope:"col",nowrap:""}},[t._v("Time Zone")]),t._v(" "),a("th",{staticClass:"col-auto font-weight-bold",attrs:{scope:"col",nowrap:""}},[t._v("Date Format")]),t._v(" "),a("th",{staticClass:"col-auto font-weight-bold",attrs:{scope:"col",nowrap:""}},[t._v("Options")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{staticClass:"list-icons-item dropdown-toggle",attrs:{href:"#","data-toggle":"dropdown"}},[s("i",{staticClass:"icon-menu7"})])}],!1,null,null,null);s.default=n.exports}}]);