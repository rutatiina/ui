!function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o(o.s=3)}({3:function(t,e,o){t.exports=o("rqdG")},rqdG:function(t,e){var o,n,r,i,s;rg_pnotify_options={initiate:{text:"Please wait as perform some magic ...",addclass:"bg-primary",type:"info",icon:"icon-spinner4 spinner",hide:!1,buttons:{closer:!0,sticker:!1},opacity:.9,width:"350px"},success:(o={buttons:{closer:!0,sticker:!0},width:"350px",title:"Done!",text:"",addclass:"bg-success",type:"success",icon:"icon-checkmark3",opacity:1},n="width",r=PNotify.prototype.options.width,n in o?Object.defineProperty(o,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):o[n]=r,o),error:{buttons:{closer:!0,sticker:!0},width:"350px",title:"Error(s)!",text:"",addclass:"bg-danger",type:"danger",icon:"icon-alert"}},rutatiina=(i=function(){console.log("Success: Load rutatiina > metronic js")},s=function(t){return t.serializeArray()},{init:function(){var t,e,o;(t=$("body")).on("click",".btn-update-text ul li a",(function(){var t=$(this);t.parents(".btn-update-text").find(".btn-text").html(t.data("text"))})),t.on("click",".rg_ajax_call",(function(t){var e=$(this);t.preventDefault(),method=void 0!==e.data("method")?e.data("method"):"POST",_method=void 0!==e.data("_method")?e.data("_method"):"POST",PNotify.removeAll(),rg_pnotify=new PNotify(rg_pnotify_options.initiate),$.ajax({url:e.attr("href"),method:method,data:{_method:_method},dataType:"json",success:function(t,e,o,n){!0===t.status?(rg_pnotify_options.success.text=t.message,rg_pnotify.update(rg_pnotify_options.success)):(rg_pnotify_options.error.text=t.message,rg_pnotify.update(rg_pnotify_options.error)),rg_empty(t.redirect)||window.location.replace(t.redirect)}})})),t.on("click","#transaction_comment_add_link, #transaction_comment_form_cancel",(function(t){t.stopPropagation(),t.preventDefault(),$("#transaction_comment_form_tr, #transaction_comment_add_link").toggleClass("hidden")})),$("body").on("click","[data-href]",(function(t){t.preventDefault(),window.location.href=$(this).data("href")})),i(),$(".rg_select2_basic").select2({}),$("#rg_modal_counterparty").on("shown.bs.modal",(function(){$("#rg_select2_tags_modal").select2({tags:!0})})),$(".hr_form_with_file").submit((function(t){var e=new FormData(this),o=$(this).attr("name"),n=$("#description").summernote("code");e.append("is_ajax",1),e.append("description",n),e.append("form",o),t.preventDefault(),$(".save").prop("disabled",!0),PNotify.removeAll(),rg_pnotify=new PNotify(rg_pnotify_options.initiate),$.ajax({url:t.target.action,type:"POST",data:e,contentType:!1,cache:!1,processData:!1,success:function(t){Ladda.stopAll(),""!=t.error?(rg_pnotify_options.error.text=t.error,rg_pnotify.update(rg_pnotify_options.error),$(".save").prop("disabled",!1),$(".icon-spinner3").hide()):(rg_pnotify_options.success.text=t.result,rg_pnotify.update(rg_pnotify_options.success),xin_table.api().ajax.reload((function(){}),!0),$(".add-form").fadeOut("slow"),$("#xin-form")[0].reset(),$(".save").prop("disabled",!1)),Ladda.stopAll()},error:function(){rg_pnotify_options.error.text=JSON.error,rg_pnotify.update(rg_pnotify_options.error),$(".icon-spinner3").hide(),$(".save").prop("disabled",!1)}})})),e="",o="/import/",$("body").delegate(".import_btn","click",(function(){e=$(this).data("import"),o=$(this).data("url"),console.log($(this).data("import"))})),Dropzone.options.rgDropzone={uploadMultiple:!1,parallelUploads:5,paramName:"file",maxFiles:1,maxFilesize:5,dictDefaultMessage:"Drop files to upload <span>or CLICK</span>",clickable:".import_btn",createImageThumbnails:!1,init:function(){var t=this;t.on("addedfile",(function(t){setTimeout((function(){}),10)})),t.on("sending",(function(t,o,n){n.append("import",e),n.append("_token",$('meta[name="csrf-token"]').attr("content")),n.append("_method","post")})),t.on("processing",(function(e){t.options.url=o})),t.on("success",(function(e,o){t.removeAllFiles(),o=JSON.parse(o),PNotify.removeAll(),rg_pnotify=new PNotify(rg_pnotify_options.initiate),!0===o.status?(rg_pnotify_options.success.text=o.message,rg_pnotify.update(rg_pnotify_options.success)):(rg_pnotify_options.error.text=o.message,rg_pnotify.update(rg_pnotify_options.error))}))}}},showResponse:function(t,e,o){!function(t,e,o){var n=$('<div class="alert alert-'+e+' alert-dismissible fade show ml-4 mr-4 mt-4" role="alert">            <button type="button" class="close" data-dismiss="alert" aria-label="Close"></button>            <span></span>        </div>');t.find(".alert").remove(),n.appendTo(t.find(".m-portlet__body")),n.animateClass("fadeIn animated"),n.find("span").html(o)}(t,e,o)},testFunction:function(){i()},js_ucfirst:function(t){},notifyResponse:function(t,e){!function(t,e){$.notify(e,{type:t,allow_dismiss:!0,newest_on_top:!0,timer:$("#m_notify_timer").val(),placement:{from:"top",align:"right"},offset:{x:30,y:30},delay:1e3,z_index:1e4,animate:{enter:"animated bounce",exit:"animated bounce"}})}(t,e)},select2BasicInit:function(){$(".rg-select2-basic").select2(),console.log("basic select2 inited")},select2FieldInit:function(){$("#rg_select2_users").select2({ajax:{url:"/users/select2/",processResults:function(t){return{results:t}}},minimumInputLength:0,placeholder:"Choose user / client"}),$("#rg_select2_asset").select2({ajax:{url:"/asset/select2/",processResults:function(t){return{results:t}}},minimumInputLength:0,placeholder:"Choose asset"}),$("#rg_select2_asset_category").select2({ajax:{url:"/asset/category/select2/",processResults:function(t){return{results:t}}},minimumInputLength:0,placeholder:"Choose / enter asset category",tags:!0})},form_ajax_submit:function(t,e){!function(t,e){e=void 0===e||e,console.log("Ajax processing form: "+t+", form_reset: "+e);var o=$(t);PNotify.removeAll(),rg_pnotify=new PNotify(rg_pnotify_options.initiate);var n=s(o);$.ajax({url:o.attr("action"),method:o.attr("method"),data:n,dataType:"json",success:function(r,i,s,a){!0===r.status?(rg_pnotify_options.success.text=r.message,rg_pnotify.update(rg_pnotify_options.success),!0===e&&(o.find("._remove_on_success_").remove(),console.log("Form "+t+" has been reset"),o.trigger("reset"),o.find(".select-search, .select").val("").trigger("change"),"#item_form"===t&&(console.log("#item_type_"+n.type),o.find("#item_type_"+n.type).trigger("click")))):(rg_pnotify_options.error.text=r.message,rg_pnotify.update(rg_pnotify_options.error))}})}(t,e)},hr_form_ajax_submit:function(t,e){!function(t,e){e=void 0===e||e;var o=$(t);PNotify.removeAll(),rg_pnotify=new PNotify(rg_pnotify_options.initiate);var n=s(o);$.ajax({url:o.attr("action"),method:o.attr("method"),data:n,dataType:"json",success:function(t,n,r,i){Ladda.stopAll(),rg_empty(t.result)?(rg_pnotify_options.error.text=t.error,rg_pnotify.update(rg_pnotify_options.error)):(rg_pnotify_options.success.text=t.result,rg_pnotify.update(rg_pnotify_options.success),!0===e&&(o.trigger("reset"),o.find(".select-search, .select").val("").trigger("change")))}})}(t,e)},txn_comment_form_ajax_submit:function(t,e){!function(t,e){e=void 0===e||e,console.log("Ajax processing form: "+t+", form_reset: "+e);var o=$(t);PNotify.removeAll(),rg_pnotify=new PNotify(rg_pnotify_options.initiate);var n=s(o);$.ajax({url:o.attr("action"),method:o.attr("method"),data:n,dataType:"json",success:function(t,n,r,i){if(!0===t.status){rg_pnotify_options.success.text=t.message,rg_pnotify.update(rg_pnotify_options.success);var s='<tr>    <td class="col-lg-1 text-nowrap text-muted text-size-mini">'+t.data.created_on+'</td>    <td class="">        <span class="btn btn-icon btn-rounded border-green btn-xs text-green-600"><i class="icon-file-text2"></i></span>    </td>    <td class="col-lg-10">'+t.data.comment+"</td></tr>";$("#transaction_comments_table tbody").prepend(s),!0===e&&o.trigger("reset")}else rg_pnotify_options.error.text=t.message,rg_pnotify.update(rg_pnotify_options.error)}})}(t,e)},item_type_change:function(t){!function(t){var e=$(t).parents(".rg-item-form");if("product"==$(t).val()?$("#track_inventory").show():$("#track_inventory").hide(),t.checked){e.find("#item_rates").removeClass("service_rates"),e.find("#item_rates").removeClass("cost_center_rates");var o=$(t).val();"cost_center"==o?e.find("#item_rates").addClass("cost_center_rates"):"service"==o&&e.find("#item_rates").addClass("service_rates")}}(t)},transaction_delete:function(t){!function(t){var e=$.extend({url:"/missing-url-parameter/",data:{},method:"POST",onSuccessCallback:function(){},onFailureCallback:function(){},title:"Are you sure?",text:"You will not be able to recover this Invoice(s)!",type:"warning",showCancelButton:!0,confirmButtonColor:"#EF5350",confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel pls!",closeOnConfirm:!1,closeOnCancel:!0,showLoaderOnConfirm:!0},t);swal({title:e.title,text:e.text,type:e.type,showCancelButton:e.showCancelButton,confirmButtonColor:e.confirmButtonColor,confirmButtonText:e.confirmButtonText,cancelButtonText:e.cancelButtonText,closeOnConfirm:e.closeOnConfirm,closeOnCancel:e.closeOnCancel,showLoaderOnConfirm:e.showLoaderOnConfirm},(function(t){t&&$.ajax({url:e.url,method:e.method,data:e.data,dataType:"json",success:function(t,o,n,r){!0===t.status?(swal({title:"Deleted!",text:t.message,confirmButtonColor:"#66BB6A",type:"success",timer:4e3}),$(".rg_datatable_onselect_btns").slideUp(100),e.onSuccessCallback(e.datatable)):(swal({title:"Failed!",text:t.message,confirmButtonColor:"#66BB6A",type:"error",timer:6e3}),e.onFailureCallback())}})}))}(t)},new_contact_person:function(t){!function(t){var e=$("#contact_person_field_rows tr"),o=e.length,n=o-1;if(o>1&&!1===t)return e.not(".contact_person_row_template").find("select").select2({minimumResultsForSearch:1/0}),!0;var r=$(".contact_person_row_template").clone();r.removeClass("contact_person_row_template hidden"),r.attr("id","row_"+n),r.find("[name^=contact_person]").each((function(){var t=$(this).attr("name");$(this).attr("name",t.replace("_index_",n)),$(this).attr("data-row",n)})),r.appendTo("#contact_person_field_rows"),r.find("select").select2({minimumResultsForSearch:1/0})}(t)}}),jQuery(document).ready((function(){rutatiina.init(),rutatiina.new_contact_person(!1)}))}});