!function(t){var e={};function a(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=e,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/",a(a.s=12)}({12:function(t,e,a){t.exports=a("nTSm")},nTSm:function(t,e){var a,n,r,o;rg_receipt=(a=[],n=[],r=function(){$(".clear_amounts").click((function(t){return t.preventDefault(),t.stopPropagation(),$("#auto_pay").attr("checked",!1),$(".paid_in_full").attr("checked",!1),$(".item_row_rate").attr("readonly",!1),$(".item_row_rate").val(""),o(),!1}))},o=function(){var t,e=0,a=0;return t=rg_number($("[name=total]").val()),$("#txn_amount_received").html(rg_number_format(t,rg_decimal_places,".",",")),$.each($(".item_row_rate"),(function(t,e){a=rg_number(rg_number(a)+rg_number($(e).val()))})),$.each($(".item_row_max_receipt_amount"),(function(t,a){e=rg_number(rg_number(e)+rg_number($(a).val()))})),$("#txn_total_due").html(rg_number_format(e,rg_decimal_places,".",",")),rg_number_format(t,rg_decimal_places)==rg_number_format(a,rg_decimal_places)?($("#txn_amount_unallocated").html(rg_number_format(0,rg_decimal_places,".",",")).parents("tr").hide(),$("[name=total]").parents(".form-group").removeClass("has-error")):(total_unallocated=rg_number(rg_number(t)-rg_number(a)),$("#txn_amount_unallocated").html(rg_number_format(total_unallocated,rg_decimal_places,".",",")).parents("tr").show(),$("#no_txns").is(":checked")||$("[name=total]").parents(".form-group").addClass("has-error")),!0},{init:function(){$("body").on("click",".rg-ajax-accounting-sales-receipt-destroy",(function(t){var e=$(this),a=e.data("callback");t.stopPropagation(),t.preventDefault(),rutatiina.transaction_delete({datatable:null,url:e.attr("href"),method:"POST",data:{_method:"DELETE"},onSuccessCallback:function(){a&&window.location.replace(a)},onFailureCallback:function(){},title:"Are you sure?",text:"You will not be able to recover this Receipt!",type:"warning",confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel pls!"})})),$("body").on("change",'[name="contact_id"]',(function(){var t=$(this).val();$("#invoice_contact_ids").val([t]),$("#invoice_contact_ids").trigger("change")})),$("body").on("change","#invoice_contact_ids",(function(){var t=$(this),e=t.val();htmlString='            <tr>                <td class="text-center" colspan="5"><h1><i class="icon-spinner2 spinner"></i></h1></td>            </tr>',$("#contact_txns").html(htmlString),$.ajax({url:t.data("invoices-url"),method:"POST",data:{contact_ids:e},dataType:"json",success:function(t,e,r,o){a=t.txns,n=t.notes;var i="",l=$("#base_currency").val();0==a.length?i+='                        <tr>                            <td class="text-center text-danger" colspan="5"><h4>Oops: No invoices found</h4></td>                        </tr>':$.each(a,(function(t,e){if(e.base_currency==l){var a=rg_empty(e.due_date)?e.date:e.due_date;i+='                                <tr>                                    <td class="">                                        <span class="text-semibold">'+e.date+'</span><br>                                        <span class="text-muted text-size-small">Due '+a+'</span>                                    </td>                                    <td class="">                                        <div class="text-semibold text-nowrap">'+e.number+" - "+e.contact_name+'</div>                                        <div id="change_of_contact">                                            <div class="checkbox">                                                <label><input type="checkbox" class="paid_in_full"> Paid in full</label>                                            </div>                                        </div>                                    </td>                                    <td class="text-right">'+rg_number_format(e.total,rg_decimal_places)+" "+e.base_currency+'</td>                                    <td class="text-right text-semibold">'+rg_number_format(e.balance,rg_decimal_places)+" "+e.base_currency+'</td>                                    <td class="no-padding-top no-padding-bottom text-right">                                        <input type="hidden" name="items['+e.id+'][txn_contact_id]" value="'+e.contact_id+'" >                                        <input type="hidden" name="items['+e.id+'][txn_number]" value="'+e.number+'" >                                        <input type="hidden" name="items['+e.id+'][max_receipt_amount]" value="'+e.balance+'" class="item_row_max_receipt_amount" >                                        <input type="hidden" name="items['+e.id+'][txn_exchange_rate]" value="'+e.exchange_rate+'" >                                        <div class="form-group clearfix">                                            <input type="text" name="items['+e.id+'][rate]" value="" class="item_row_rate form-control input-roundless text-right" placeholder="0.00">                                        </div>                                    </td>                                </tr>'}})),$("#contact_txns").html(i)}})})),$("#auto_pay").change((function(){if($(this).is(":checked")){$(".item_row_rate").val("");var t=rg_number($("[name=total]").val()),e=0;$.each($("#contact_txns tr"),(function(a,n){e=$(n).find(".item_row_max_receipt_amount").val(),t>=e?$(n).find(".item_row_rate").val(e):t<e&&t>0&&$(n).find(".item_row_rate").val(t),t=rg_number(rg_number(t)-rg_number(e))})),o()}})),$("body").delegate(".paid_in_full","change",(function(){var t=$(this).parents("tr");$(this).is(":checked")?t.find(".item_row_rate").val(t.find(".item_row_max_receipt_amount").val()).attr("readonly",!0):t.find(".item_row_rate").attr("readonly",!1),o()})),r(),$("body").delegate(".pay_all_fully","click",(function(t){t.preventDefault(),t.stopPropagation();var e=0;return $.each($("#contact_txns tr"),(function(t,a){$(a).find(".item_row_rate").val($(a).find(".item_row_max_receipt_amount").val()),e=rg_number(rg_number(e)+rg_number($(a).find(".item_row_max_receipt_amount").val()))})),$("[name=total]").val(e),o(),!1})),$("body").delegate(".item_row_rate","change, keyup",(function(t){o()})),$("body").delegate("[name=total]","change, keyup",(function(t){o()})),o(),$("#base_currency").change((function(){$("[name=total]").val(""),r(),o();var t=$.extend({},$(this).select2("data")[0]);$("#txn_base_currency").html(t.id),$("[name=quote_currency]").val()!=t.id?(t=$.extend({},$(this).select2("data")[0]),txn_exchange_rate=rg_number(t.exchange_rate),$("#txn_exchange_rate").show(),$("[name=exchange_rate]").val(txn_exchange_rate)):($("#txn_exchange_rate").hide(),$("[name=exchange_rate]").val(t.exchange_rate),txn_exchange_rate=t.exchange_rate),rg_empty(n),$(".bootstrap-select").selectpicker("refresh"),o()})),$("#no_txns").change((function(){$(this).is(":checked")?$("#contact_txns_table, #auto_pay_txns").hide():$("#contact_txns_table, #auto_pay_txns").show()}));try{t=$(".rg_datatable_sidebar"),e=t.data("txn-id"),i=t.DataTable({pagingType:"simple",language:{paginate:{next:"Next &rarr;",previous:"&larr; Prev"}},columnDefs:[{targets:[0,1],orderable:!1}],ordering:!1,info:!1,bLengthChange:!1,iDisplayLength:20,aoColumns:[{mDataProp:"number",sClass:"pointer"},{mDataProp:"total",sClass:"pointer "}],fnRowCallback:function(t,a,n,r){a.id==e&&$(t).addClass("active");var o='<h6 class="no-margin"><span>'+a.contact_name+'</span><small class="display-block text-muted">'+a.number+"</small></h6>",i='<h6 class="no-margin text-right"><small>'+a.quote_currency+"</small> "+rg_number_format(a.total)+'<small class="display-block text-muted text-size-small">'+a.date+"</small></h6>";$("td:eq(0)",t).html(o),$("td:eq(1)",t).html(i),$("td",t).click((function(){document.location.href=a.link_show})),$(t).hover((function(){$(this).addClass("text-primary")}),(function(){$(this).removeClass("text-primary")}))}}),$(".sidebar-secondary").on("click",".rg_datatable_selected_delete, .rg_datatable_row_delete",(function(t){t.stopPropagation(),t.preventDefault();var e=[],a=rg_empty($(this).data("url"))?$(this).attr("href"):$(this).data("url"),n=i.column(0).checkboxes.selected();try{$.each(n,(function(t,a){e[t]=a}))}catch(t){}rutatiina.transaction_delete({datatable:i,url:a,data:{ids:e},onSuccessCallback:function(t){t.ajax.reload(),$(".rg_datatable_onselect_btns").slideUp(100)},onFailureCallback:function(){},title:"Are you sure?",text:"You will not be able to recover the Receipt(s)!",type:"warning",confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel pls!"})})),$("#quick-sort").on("click","ul li a",(function(){$(this).parents("#quick-sort").find(".dropdown-title").html($(this).html()).data("ajax",$(this).data("ajax")),i.ajax.url($(this).data("ajax")).load()})),t.is(":visible")&&$("#navbar_top_search").keypress((function(t){13===t.which&&(t.preventDefault(),i.search($(this).val()).draw())}))}catch(t){console.log(t)}var t,e,i;try{!function(){var t=$("body"),e=$(".rg-datatable-txns-table"),a=e.DataTable({buttons:{dom:{button:{className:"btn btn-default"}},buttons:[{extend:"copyHtml5",className:"btn btn-default btn-icon",text:'<i class="icon-copy3"></i>'},{extend:"excelHtml5",className:"btn btn-default btn-icon",text:'<i class="icon-file-excel"></i>'},{extend:"pdfHtml5",className:"btn btn-default btn-icon",text:'<i class="icon-file-pdf"></i>'}]},pagingType:"simple",language:{paginate:{next:"Next &rarr;",previous:"&larr; Prev"}},iDisplayLength:50,aLengthMenu:[[10,20,50,100],[10,20,50,100]],columnDefs:[{targets:0,orderable:!1,checkboxes:{selectRow:!0,selectCallback:function(t,e,a){t.column(0).checkboxes.selected().length>0?($(".rg_datatable_onselect_btns").show(),$(".page-header").hide()):($(".rg_datatable_onselect_btns").hide(),$(".page-header").show())}}},{targets:[0,4,5,6],orderable:!1}],select:{style:"multi",selector:"td:first-child"},order:[[0,!1]],ordering:!1,processing:!0,serverSide:!0,aoColumns:[{mDataProp:"id"},{mDataProp:"date",sClass:"pointer "},{mDataProp:"number",sClass:"pointer "},{mDataProp:null,sClass:"pointer "},{mDataProp:"payment_mode",sClass:"pointer "},{mDataProp:"reference",sClass:"pointer "},{mDataProp:"contact_name",sClass:"pointer text-left"},{mDataProp:"total",sClass:"pointer text-right text-semibold"}],fnRowCallback:function(t,e,a,n){$("td:eq(3)",t).html(e.debit_account.name),$("td:eq(7)",t).html(rg_number_format(e.total)+" "+e.base_currency),rg_empty(e.app)||$("td:eq(0)",t).find("input[type=checkbox]").attr("disabled",!0),$("td:gt(0)",t).click((function(){document.location.href=e.link_show})),$(t).hover((function(){$(this).addClass("text-primary")}),(function(){$(this).removeClass("text-primary")}))}});t.on("click",".rg_datatable_selected_delete, .rg_datatable_row_delete",(function(t){t.stopPropagation(),t.preventDefault();var e=[],n=rg_empty($(this).data("url"))?$(this).attr("href"):$(this).data("url"),r=a.column(0).checkboxes.selected();try{$.each(r,(function(t,a){e[t]=a}))}catch(t){}rutatiina.transaction_delete({datatable:a,url:n,data:{ids:e},onSuccessCallback:function(t){t.ajax.reload(),$(".rg_datatable_onselect_btns").slideUp(100)},onFailureCallback:function(){},title:"Are you sure?",text:"You will not be able to recover this Invoice(s)!",type:"warning",confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel pls!"})})),t.on("click",".rg_datatable_selected_export_to_excel",(function(t){console.log("export to excel"),t.stopPropagation(),t.preventDefault();var e=[],n=rg_empty($(this).data("url"))?$(this).attr("href"):$(this).data("url"),r=a.column(0).checkboxes.selected();try{$.each(r,(function(t,a){e["ids["+t+"]"]=a}))}catch(t){}rg_js_post(n,e,"post")})),e.is(":visible")&&$("#navbar_top_search").keypress((function(t){13===t.which&&(t.preventDefault(),a.search($(this).val()).draw())}))}()}catch(t){console.log(t)}},on_submit:function(t){!function(t){var e=$("#txn_form");e.find("[name=on_submit]").val(t);var a=e.serializeArray();PNotify.removeAll();var n=new PNotify({text:"Please wait as perform some magic ...",addclass:"bg-primary",type:"info",icon:"icon-spinner4 spinner",hide:!1,buttons:{closer:!0,sticker:!1},opacity:.9,width:"350px"}),r={buttons:{closer:!0,sticker:!0},width:"350px"};$.ajax({url:e.attr("action"),method:e.attr("method"),data:a,dataType:"json",success:function(t,e,o,i){if(!0===t.status){r.title="Done!",r.text=t.message,r.addclass="bg-success",r.type="success",r.icon="icon-checkmark3",r.opacity=1,r.width=PNotify.prototype.options.width,n.update(r),"view"===a.on_submit?window.location.href="/invoices/view/"+t.txn.id:"draft"===a.on_submit||a.on_submit;var l=$("#txn_form");$("#contact_txns").html(null),l.find("[name=number]").val(t.number),l.find("[name=contact_id]").val(null).trigger("change"),$("#txn_allocated").addClass("hidden"),l.trigger("reset")}else r.title="Error(s)!",r.text=t.message,r.addclass="bg-danger",r.type="danger",r.icon="icon-alert",n.update(r)}})}(t)}}),jQuery(document).ready((function(){$.extend($.fn.dataTable.defaults,{autoWidth:!1,columnDefs:[{orderable:!1,width:"100px",targets:[5]}],dom:'<"datatable-scroll-wrap"t><"datatable-footer"ip>',language:{search:"<span>Filter:</span> _INPUT_",searchPlaceholder:"Type to filter...",lengthMenu:"<span>Show:</span> _MENU_",paginate:{first:"First",last:"Last",next:"&rarr;",previous:"&larr;"}},drawCallback:function(){$(this).find("tbody tr").slice(-3).find(".dropdown, .btn-group").addClass("dropup")},preDrawCallback:function(){$(this).find("tbody tr").slice(-3).find(".dropdown, .btn-group").removeClass("dropup")}}),rg_receipt.init()}))}});