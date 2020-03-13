"use strict";var fm={};fm={init:function(e={}){window.__currentFolderId=$("#currentFolderId").length?$("#currentFolderId").val():0,fm.currentFolderId=window.__currentFolderId,fm.currentFolderId=isNaN(fm.currentFolderId)?0:fm.currentFolderId,fm.options=e,fm.mode=e.mode,fm.modelName=e.modelName,fm.attributeName=e.attributeName,fm.ormId=e.ormId,fm.templateLoading=Handlebars.compile($("#loading").html()),fm.templateFolder=Handlebars.compile($("#folder").html()),fm.templateFile=Handlebars.compile($("#file").html()),fm.templateFiles=Handlebars.compile($("#files").html()),fm.templateNav=Handlebars.compile($("#nav").html()),fm.templateProgress=Handlebars.compile($("#file-progress").html()),fm.ajaxFile=null,fm.ajaxFolder=null,fm.ajaxNav=null,fm.keyword="",fm.files=[],fm.folders=[],fm.currentFolder=null,fm.path=[],fm.getFolders(),fm.getFiles(),fm.getNav(),$("#popup-container").off(),$("#popup-container").find(".jstree-anchor").off(),$("#popup-container").on("click",".jstree-anchor",function(){return fm.selectFolder($(this).parent().attr("id")),$(".js-nav .pz-tools").html(""),fm.getFiles(),fm.getNav(),!1}),$("#popup-container").find(".js-nav .breadcrumb a").off(),$("#popup-container").on("click",".js-nav .breadcrumb a",function(){return fm.selectFolder($(this).data("id")),$(".js-nav .pz-tools").html(""),fm.getFolders(),fm.getFiles(),fm.getNav(),!1}),$("#popup-container").find(".js-search").off(),$("#popup-container").on("change",".js-search",function(){fm.keyword=$(this).val(),fm.renderFolders(),fm.renderNav(),fm.getFiles()}),$("#popup-container").find(".js-search-button").off(),$("#popup-container").on("click",".js-search-button",function(){fm.keyword=$(this).val(),fm.renderFolders(),fm.renderNav(),fm.getFiles()}),$("#popup-container").find(".js-reset").off(),$("#popup-container").on("click",".js-reset",function(){return fm.keyword="",fm.renderFolders(),fm.renderNav(),fm.getFiles(),!1}),$("#popup-container").mousedown(function(e){if(fm.currentFileId=$(e.target).data("id"),!fm.currentFileId){var t=$(e.target).closest(".js-tableContent");fm.currentFileId=$(t).data("id")}}),$("#popup-container").mouseup(function(e){if("true"!=$(e.target).closest("li.jstree-node").attr("aria-selected")){var t=$(e.target).closest("li.jstree-node").attr("id");if(fm.currentFileId&&t){for(var a in fm.files){fm.files[a].id==fm.currentFileId&&fm.files.splice(a,1)}fm.renderFiles(),$.ajax({type:"POST",url:"/manage/rest/asset/file/move",data:"parentId="+t+"&id="+fm.currentFileId,success:function(e){}})}}fm.currentFileId=null}),$("#popup-container").find(".js-add-subfolder").off(),$("#popup-container").on("click",".js-add-subfolder",function(){$("#js-add-subfolder-dialog").dialog({title:"Adding a subfolder...",resizable:!1,draggable:!1,modal:!0,dialogClass:"confirmation",buttons:[{text:"Save",click:function(){$.ajax({type:"POST",url:"/manage/rest/asset/files/add/folder",data:"parentId="+fm.currentFolderId+"&title="+$(this).find("input").val(),success:function(e){fm.getFolders(),$("#js-add-subfolder-dialog").find("input").val("")}}),$(this).dialog("close")}},{text:"Cancel",click:function(){$(this).dialog("close")}}]})}),$("#popup-container").find(".js-change-folder-name").off(),$("#popup-container").on("click",".js-change-folder-name",function(){var e=$(this).closest(".js-orm-info");$("#js-change-folder-name-dialog").find("input").val(e.data("title")),$("#js-change-folder-name-dialog").dialog({title:"Changing folder name...",resizable:!1,draggable:!1,modal:!0,dialogClass:"confirmation",buttons:[{text:"Save",click:function(){$.ajax({type:"POST",url:"/manage/rest/asset/files/edit/folder",data:"id="+e.data("id")+"&title="+$(this).find("input").val(),success:function(e){fm.getNav(),fm.getFolders()}}),$(this).dialog("close")}},{text:"Cancel",click:function(){$(this).dialog("close")}}]})}),$("#popup-container").find(".js-select").off(),$("#popup-container").on("change",".js-select",function(){var e=$(this).closest(".file-box").data("id"),t=fm.getById(fm.files,e);t._selected=$(this).is(":checked")?1:0,$.ajax({type:"POST",url:"/manage/rest/asset/folders/file/select",data:"modelName="+fm.modelName+"&attributeName="+fm.attributeName+"&ormId="+fm.ormId+"&addOrDelete="+t._selected+"&id[]="+e,success:function(e){}}),fm.renderFiles()}),$("#popup-container").find(".js-select-all").off(),$("#popup-container").on("click",".js-select-all",function(){var e="";for(var t in fm.files){var a=fm.files[t];a._selected=1,e+="&id[]="+a.id}return $.ajax({type:"POST",url:"/manage/rest/asset/folders/file/select",data:"modelName="+fm.modelName+"&attributeName="+fm.attributeName+"&ormId="+fm.ormId+"&addOrDelete=1"+e,success:function(e){}}),fm.renderFiles(),!1}),$("#popup-container").find(".js-deselect-all").off(),$("#popup-container").on("click",".js-deselect-all",function(){var e="";for(var t in fm.files){var a=fm.files[t];a._selected=0,e+="&id[]="+a.id}return $.ajax({type:"POST",url:"/manage/rest/asset/folders/file/select",data:"modelName="+fm.modelName+"&attributeName="+fm.attributeName+"&ormId="+fm.ormId+"&addOrDelete=0"+e,success:function(e){}}),fm.renderFiles(),!1})},getFolders:function(){$("#js-folders").html(fm.templateLoading()),fm.ajaxFolder&&fm.ajaxFolder.abort(),fm.ajaxFolder=$.ajax({type:"GET",url:"/manage/rest/asset/folders",data:"currentFolderId="+fm.currentFolderId,success:function(e){fm.folders=e.folders,fm.renderFolders()}})},getFiles:function(){$(".js-extra-stuff").hide(),$("#js-files").html(fm.templateFiles({showUploadButton:0})),$("#js-files > ul").html('<img src="/cms/images/spinner.gif" alt="Loading..." />'),fm.ajaxFile&&fm.ajaxFile.abort(),fm.ajaxFile=$.ajax({type:"GET",url:"/manage/rest/asset/files",data:"currentFolderId="+fm.currentFolderId+"&keyword="+fm.keyword+"&modelName="+fm.modelName+"&attributeName="+fm.attributeName+"&ormId="+fm.ormId,success:function(e){fm.files=e.files,fm.renderFiles()}})},getNav:function(){fm.ajaxNav&&fm.ajaxNav.abort(),fm.ajaxNav=$.ajax({type:"GET",url:"/manage/rest/asset/nav",data:"currentFolderId="+fm.currentFolderId,success:function(e){fm.currentFolder=e.currentFolder,fm.path=e.path,fm.renderNav()}})},renderFolders:function(){$("#js-folders").html(fm.templateFolder({keyword:fm.keyword})),$("#js-folders .jstree").jstree({core:{check_callback:function(e,t,a,r,o){return!!a.parent},data:[fm.folders]},search:{show_only_matches:!0},plugins:["types","dnd","search"],types:{default:{icon:"far fa-folder-open"}}}),$("#js-folders .jstree").bind("move_node.jstree",function(e,t){var a=$(this).jstree().get_json("#",{flat:!0});t=[];for(var r in a){var o=a[r];"#"!=o.parent&&t.push({id:o.id,parentId:o.parent,rank:r})}$.ajax({type:"POST",url:"/manage/rest/asset/folders/update",data:"data="+encodeURIComponent(JSON.stringify(t)),success:function(e){}})})},renderFiles:function(){for(var e in $("#js-files").html(fm.templateFiles({showUploadButton:fm.keyword?0:1})),$("div#cmsFormDropzone").dropzone({url:"/manage/rest/asset/files/upload",params:{parentId:fm.currentFolderId},previewTemplate:"<div></div>",complete:function(e,t){if(0!==this.getUploadingFiles().length||0!==this.getQueuedFiles().length){var a=jQuery.parseJSON(e.xhr.responseText);$("#dropzone-wrap").after(fm.templateProgress({status:a.status,file:a.orm}))}else fm.getFiles()}}),fm.files){var t=fm.files[e];$("#js-files > ul").append(fm.templateFile({mode:fm.mode,file:t}))}$("#js-files > ul").sortable({items:"li.js-tableContent",cursorAt:{left:-30,top:-30},stop:function(){var e=$("#js-files > ul").sortable("toArray");$.ajax({type:"POST",url:"/manage/rest/column/sort",data:{data:JSON.stringify(e),className:"Asset"},success:function(e){}})}}),2==fm.mode&&$(".js-extra-stuff").show()},renderNav:function(){$(".js-nav").html(fm.templateNav({keyword:fm.keyword,currentFolder:fm.currentFolder,path:fm.path})),$("#fileupload").fileupload({url:"/manage/rest/asset/files/upload",dataType:"json",sequentialUploads:!0,formData:{parentId:fm.currentFolderId},add:function(e,t){var a=[];(""==t.files[0].size||t.files[0].size>5e7)&&a.push("File size is too big"),a.length>0?alert(a.join("\n")):($(".progress-bar").css("width",0),$(".progress").show(),t.submit())},start:function(){},done:function(e,t){void 0!==t.result.id&&(fm.files.unshift(t.result),fm.renderFiles())},progressall:function(e,t){var a=parseInt(t.loaded/t.total*100,10);$(".progress-bar").css("width",a+"%")},stop:function(e){$(".progress").fadeOut(3e3)}}).prop("disabled",!$.support.fileInput).parent().addClass($.support.fileInput?void 0:"disabled"),$("#js-add-dialog form").validate({rules:{name:"required"}}),$("#js-add-dialog form").submit(function(e){return e.preventDefault(),$(this).valid()&&$.ajax({type:"POST",url:"/manage/rest/asset/files/add/folder",data:{title:$("#js-add-dialog form input[name=name]").val(),parentId:fm.currentFolderId},success:function(e){$("#js-add-dialog form input[name=name]").val(""),$("#js-add-dialog").modal("hide"),fm.getFolders()}}),!1}),$("#js-edit-dialog form").validate({rules:{name:"required"}}),$("#js-edit-dialog form").submit(function(e){return e.preventDefault(),$(this).valid()&&$.ajax({type:"POST",url:"/manage/rest/asset/files/edit/folder",data:{id:fm.currentFolderId,title:$("#js-edit-dialog form input[name=name]").val()},success:function(e){$("#js-edit-dialog").modal("hide"),$("body").removeClass("modal-open"),$(".modal-backdrop").remove(),fm.getFolders(),fm.getNav()}}),!1})},selectFolder:function(e){fm.currentFolderId=e,fm.currentFolderId=isNaN(fm.currentFolderId)?0:fm.currentFolderId,window.__currentFolderId=fm.currentFolderId,$("#currentFolderId").val(window.__currentFolderId)},getById:function(e,t){for(var a in e){var r=e[a];if(r.id==t)return r}return null}},window.fm=fm;