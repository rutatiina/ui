!function(t){var e={};function a(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=e,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/",a(a.s=21)}({21:function(t,e,a){t.exports=a("hrPO")},hrPO:function(t,e){rg_recurring_expenses={init:function(){try{t=$(".rg_datatable_sidebar"),e=t.data("txn-id"),a=t.DataTable({pagingType:"simple",language:{paginate:{next:"Next &rarr;",previous:"&larr; Prev"}},columnDefs:[{targets:[0,1],orderable:!1}],select:{style:"multi",selector:"td:first-child"},order:[[0,!1]],ordering:!1,info:!1,bLengthChange:!1,iDisplayLength:20,aoColumns:[{mDataProp:"number",sClass:"pointer "},{mDataProp:"total",sClass:"pointer "}],fnRowCallback:function(t,a,n,r){a.id==e&&$(t).addClass("active");var o='<h6 class="no-margin"><span>'+a.contact_name+'</span><small class="display-block text-muted">'+a.number+"</small></h6>",l='<h6 class="no-margin text-right"><small>'+a.quote_currency+"</small> "+rg_number_format(a.total)+'<small class="display-block text-muted text-size-small">'+a.date+"</small></h6>";$("td:eq(0)",t).html(o),$("td:eq(1)",t).html(l),$(t).click((function(){document.location.href=a.link_show})),$(t).hover((function(){$(this).addClass("text-primary")}),(function(){$(this).removeClass("text-primary")}))}}),t.is(":visible")&&$("#navbar_top_search").keypress((function(t){13===t.which&&(t.preventDefault(),a.search($(this).val()).draw())}))}catch(t){console.log(t)}var t,e,a;try{!function(){var t=$(".rg-datatable-txns-table"),e=t.DataTable({buttons:{dom:{button:{className:"btn btn-default"}},buttons:[{extend:"copyHtml5",className:"btn btn-default btn-icon",text:'<i class="icon-copy3"></i>'},{extend:"excelHtml5",className:"btn btn-default btn-icon",text:'<i class="icon-file-excel"></i>'},{extend:"pdfHtml5",className:"btn btn-default btn-icon",text:'<i class="icon-file-pdf"></i>'}]},pagingType:"simple",language:{paginate:{next:"Next &rarr;",previous:"&larr; Prev"}},iDisplayLength:20,aLengthMenu:[[10,20,50,100],[10,20,50,100]],columnDefs:[{targets:0,orderable:!1,checkboxes:{selectRow:!0,selectCallback:function(t,e,a){t.column(0).checkboxes.selected().length>0?($(".rg_datatable_onselect_btns").show(),$(".page-header").hide()):($(".rg_datatable_onselect_btns").hide(),$(".page-header").show())}}},{targets:[0,5,6,7],orderable:!1}],select:{style:"multi",selector:"td:first-child"},order:[[0,!1]],ordering:!1,aoColumns:[{mDataProp:"id"},{mDataProp:null,sClass:"pl-5 pr-5"},{mDataProp:"date",sClass:"pl-5 pointer"},{mDataProp:null,sClass:"pointer"},{mDataProp:"reference",sClass:"pointer"},{mDataProp:"contact_name",sClass:"pointer"},{mDataProp:null,sClass:"pointer"},{mDataProp:"contact_name",sClass:"pointer"},{mDataProp:"total",sClass:"pointer text-right text-semibold"}],fnRowCallback:function(t,e,a,n){$("td:eq(3)",t).html(e.debit_account.name),$("td:eq(6)",t).html(e.credit_account.name),$("td:eq(8)",t).html(rg_number_format(e.total)+" "+e.base_currency);var r='                <ul class="icons-list">                    <li title="Copy"><a href="'+e.link_copy+'"><i class="icon-files-empty2"></i></a></li>                </ul>                ';$("td:eq(1)",t).html(r),$("td:gt(1)",t).click((function(){document.location.href=e.link_show})),$(t).hover((function(){$(this).addClass("text-primary")}),(function(){$(this).removeClass("text-primary")}))}});$("body").on("click",".rg_datatable_selected_delete, .rg_datatable_row_delete",(function(t){t.stopPropagation(),t.preventDefault();var a=[],n=rg_empty($(this).data("url"))?$(this).attr("href"):$(this).data("url"),r=e.column(0).checkboxes.selected();$.each(r,(function(t,e){a[t]=e})),swal({title:"Are you sure?",text:"You will not be able to recover the record(s)!",type:"warning",showCancelButton:!0,confirmButtonColor:"#EF5350",confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel pls!",closeOnConfirm:!1,closeOnCancel:!0,showLoaderOnConfirm:!0},(function(t){t&&$.ajax({url:n,method:"POST",data:{ids:a},dataType:"json",success:function(t,a,n,r){!0===t.status?(swal({title:"Deleted!",text:t.message,confirmButtonColor:"#66BB6A",type:"success",timer:2e3}),e.ajax.reload(),$(".rg_datatable_onselect_btns").slideUp(100)):swal({title:"Failed!",text:t.message,confirmButtonColor:"#66BB6A",type:"danger",timer:2e3})}})}))})),$("body").on("click",".rg_datatable_selected_export_to_excel",(function(t){console.log("export to excel"),t.stopPropagation(),t.preventDefault();var a=[],n=rg_empty($(this).data("url"))?$(this).attr("href"):$(this).data("url"),r=e.column(0).checkboxes.selected();try{$.each(r,(function(t,e){a["ids["+t+"]"]=e}))}catch(t){}rg_js_post(n,a,"post")})),t.is(":visible")&&$("#navbar_top_search").keypress((function(t){13===t.which&&(t.preventDefault(),e.search($(this).val()).draw())}))}()}catch(t){console.log(t)}}},jQuery(document).ready((function(){$.extend($.fn.dataTable.defaults,{autoWidth:!1,columnDefs:[{orderable:!1,width:"100px",targets:[5]}],dom:'<"datatable-scroll-wrap"t><"datatable-footer"ip>',language:{search:"<span>Filter:</span> _INPUT_",searchPlaceholder:"Type to filter...",lengthMenu:"<span>Show:</span> _MENU_",paginate:{first:"First",last:"Last",next:"&rarr;",previous:"&larr;"}},drawCallback:function(){$(this).find("tbody tr").slice(-3).find(".dropdown, .btn-group").addClass("dropup")},preDrawCallback:function(){$(this).find("tbody tr").slice(-3).find(".dropdown, .btn-group").removeClass("dropup")}}),rg_recurring_expenses.init()}))}});