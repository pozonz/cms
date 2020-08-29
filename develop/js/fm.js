"use strict";
var fm = {}

fm = {
    init: function (options = {}) {
        window.__currentFolderId = $('#currentFolderId').length ? $('#currentFolderId').val() : 0;
        window.__keyword = $('#currentKeyword').length ? $('#currentKeyword').val() : '';
        window.__pageNum = $('#currentPageNum').length ? $('#currentPageNum').val() : 1;

        fm.currentFolderId = window.__currentFolderId;
        fm.currentFolderId = isNaN(fm.currentFolderId) ? 0 : fm.currentFolderId;
        fm.keyword = window.__keyword;
        fm.filesPageNum = window.__pageNum;

        window.__returnUrl = location.pathname + '?currentFolderId=' + fm.currentFolderId;
        if (fm.keyword) {
            window.__returnUrl = location.pathname + '?keyword=' + fm.keyword;
        }


        fm.options = options;
        fm.mode = options.mode;
        fm.modelName = options.modelName;
        fm.attributeName = options.attributeName;
        fm.ormId = options.ormId;

        fm.templateLoading = Handlebars.compile($("#loading").html());
        fm.templateFolder = Handlebars.compile($("#folder").html());
        fm.templateFile = Handlebars.compile($("#file").html());
        fm.templateFiles = Handlebars.compile($("#files").html());
        fm.templateNav = Handlebars.compile($("#nav").html());
        fm.templateProgress = Handlebars.compile($("#file-progress").html());

        fm.ajaxFile = null;
        fm.ajaxFolder = null;
        fm.ajaxNav = null;

        // fm.keyword = '';
        fm.files = [];
        fm.folders = [];
        fm.currentFolder = null;
        fm.path = [];

        fm.getFolders();
        fm.getFiles();
        fm.getNav();

        //Remove previous events
        $('#popup-container').off();

        //Setup select folder events
        $('#popup-container').find('.jstree-anchor').off();
        $('#popup-container').on('click', '.jstree-anchor', function () {
            fm.selectFolder($(this).parent().attr('id'));

            $('.js-nav .pz-tools').html('');
            fm.filesPageNum = 1;

            fm.getFiles();
            fm.getNav();
            return false;
        });
        //Setup breadcrumb events
        $('#popup-container').find('.js-nav .breadcrumb a').off();
        $('#popup-container').on('click', '.js-nav .breadcrumb a', function () {
            fm.selectFolder($(this).data('id'));

            $('.js-nav .pz-tools').html('');

            fm.getFolders();
            fm.getFiles();
            fm.getNav();
            return false;
        });
        //Setup search events
        $('#popup-container').find('.js-search').off();
        $('#popup-container').on('change', '.js-search', function () {
            fm.keyword = $(this).val();
            fm.filesPageNum = 1;
            fm.renderFolders();
            fm.renderNav();
            fm.getFiles();
        });
        $('#popup-container').find('.js-search-button').off();
        $('#popup-container').on('click', '.js-search-button', function () {
            fm.keyword = $('.js-search').val();
            fm.renderFolders();
            fm.renderNav();
            fm.getFiles();
        });
        //Setup reset search events
        $('#popup-container').find('.js-reset').off();
        $('#popup-container').on('click', '.js-reset', function () {
            fm.keyword = '';
            fm.renderFolders();
            fm.renderNav();
            fm.getFiles();
            return false;
        });
        //Setup move file events
        $('#popup-container').mousedown(function (ev) {
            fm.currentFileId = $(ev.target).data('id');
            if (!fm.currentFileId) {
                var parentLi = $(ev.target).closest('.js-tableContent');
                fm.currentFileId = $(parentLi).data('id');
            }
        });
        $('#popup-container').mouseup(function (ev) {
            if ($(ev.target).closest('li.jstree-node').attr('aria-selected') != 'true') {
                var targetFolderId = $(ev.target).closest('li.jstree-node').attr('id')
                if (fm.currentFileId && targetFolderId) {
                    for (var idx in fm.files) {
                        var itm = fm.files[idx];
                        if (itm.id == fm.currentFileId) {
                            fm.files.splice(idx, 1)
                        }
                    }
                    fm.renderFiles();
                    $.ajax({
                        type: 'POST',
                        url: '/manage/rest/asset/file/move',
                        data: 'parentId=' + targetFolderId + '&id=' + fm.currentFileId,
                        success: function (data) {
                        }
                    });
                }
            }
            fm.currentFileId = null;
        });

        $('#popup-container').find('.js-add-subfolder').off();
        $('#popup-container').on('click', '.js-add-subfolder', function () {
            $('#js-add-subfolder-dialog').dialog({
                title: 'Adding a subfolder...',
                resizable: false,
                draggable: false,
                modal: true,
                dialogClass: 'confirmation',
                buttons: [
                    {
                        text: 'Save', click: function () {
                            $.ajax({
                                type: 'POST',
                                url: '/manage/rest/asset/files/add/folder',
                                data: 'parentId=' + fm.currentFolderId + '&title=' + $(this).find('input').val(),
                                success: function (msg) {
                                    fm.getFolders();
                                    $('#js-add-subfolder-dialog').find('input').val('')
                                }
                            });
                            $(this).dialog("close");
                        }
                    },
                    {
                        text: "Cancel", click: function () {
                            $(this).dialog("close");
                        }
                    },
                ]
            });
        });

        $('#popup-container').find('.js-change-folder-name').off();
        $('#popup-container').on('click', '.js-change-folder-name', function () {
            var ormInfo = $(this).closest('.js-orm-info');
            $('#js-change-folder-name-dialog').find('input').val(ormInfo.data('title'))
            $('#js-change-folder-name-dialog').dialog({
                title: 'Changing folder name...',
                resizable: false,
                draggable: false,
                modal: true,
                dialogClass: 'confirmation',
                buttons: [
                    {
                        text: 'Save', click: function () {
                            $.ajax({
                                type: 'POST',
                                url: '/manage/rest/asset/files/edit/folder',
                                data: 'id=' + ormInfo.data('id') + '&title=' + $(this).find('input').val(),
                                success: function (msg) {
                                    fm.getNav();
                                    fm.getFolders();
                                }
                            });
                            $(this).dialog("close");
                        }
                    },
                    {
                        text: "Cancel", click: function () {
                            $(this).dialog("close");
                        }
                    },
                ]
            });
        });

        $('#popup-container').find('.js-select').off();
        $('#popup-container').on('change', '.js-select', function () {
            var id = $(this).closest('.file-box').data('id');
            var file = fm.getById(fm.files, id);
            file._selected = $(this).is(':checked') ? 1 : 0;
            $.ajax({
                type: 'POST',
                url: '/manage/rest/asset/folders/file/select',
                data: 'modelName=' + fm.modelName + '&attributeName=' + fm.attributeName + '&ormId=' + fm.ormId + '&addOrDelete=' + file._selected + '&id[]=' + id,
                success: function (data) {
                }
            });
            fm.renderFiles();
            // return false;
        });
        $('#popup-container').find('.js-select-all').off();
        $('#popup-container').on('click', '.js-select-all', function () {
            var str = '';
            for (var idx in fm.files) {
                var itm = fm.files[idx];
                itm._selected = 1;
                str += '&id[]=' + itm.id;
            }
            $.ajax({
                type: 'POST',
                url: '/manage/rest/asset/folders/file/select',
                data: 'modelName=' + fm.modelName + '&attributeName=' + fm.attributeName + '&ormId=' + fm.ormId + '&addOrDelete=1' + str,
                success: function (data) {
                }
            });
            fm.renderFiles();
            return false;
        });
        $('#popup-container').find('.js-deselect-all').off();
        $('#popup-container').on('click', '.js-deselect-all', function () {
            var str = '';
            for (var idx in fm.files) {
                var itm = fm.files[idx];
                itm._selected = 0;
                str += '&id[]=' + itm.id;
            }
            $.ajax({
                type: 'POST',
                url: '/manage/rest/asset/folders/file/select',
                data: 'modelName=' + fm.modelName + '&attributeName=' + fm.attributeName + '&ormId=' + fm.ormId + '&addOrDelete=0' + str,
                success: function (data) {
                }
            });
            fm.renderFiles();
            return false;
        });

        $('#popup-container').on('click', '.js-files-pagenum', function () {
            fm.filesPageNum = $(this).data('pagenum');
            fm.getFiles();
            return false;
        });

    },

    getFolders: function () {
        $('#js-folders').html(fm.templateLoading());

        if (fm.ajaxFolder) {
            fm.ajaxFolder.abort();
        }
        fm.ajaxFolder = $.ajax({
            type: 'GET',
            url: '/manage/rest/asset/folders',
            data: 'currentFolderId=' + fm.currentFolderId,
            success: function (data) {
                fm.folders = data.folders;
                fm.renderFolders()
            }
        });
    },

    getFiles: function () {
        // $('.file-manager').css('position', '')
        $('.js-extra-stuff').hide();
        $('.js-files-pagination').hide();

        $('#js-files').html(fm.templateFiles({
            showUploadButton: 0,
        }));
        $('#js-files > ul').html('<img src="/cms/images/spinner.gif" alt="Loading..." />');

        window.__returnUrl = location.pathname + '?currentFolderId=' + fm.currentFolderId;
        if (fm.keyword) {
            window.__returnUrl = location.pathname + '?keyword=' + fm.keyword;
        }

        if (fm.ajaxFile) {
            fm.ajaxFile.abort();
        }
        fm.ajaxFile = $.ajax({
            type: 'GET',
            url: '/manage/rest/asset/files',
            data: 'currentFolderId=' + fm.currentFolderId + '&keyword=' + fm.keyword + '&modelName=' + fm.modelName + '&attributeName=' + fm.attributeName + '&ormId=' + fm.ormId + '&pageNum=' + fm.filesPageNum,
            success: function (data) {
                fm.files = data.files;
                fm.filesTotal = data.total;
                fm.filesPageNum = data.pageNum;

                fm.renderFiles()
            }
        });
    },

    getNav: function () {
        // $('.js-nav > div').css('opacity', '.1');

        if (fm.ajaxNav) {
            fm.ajaxNav.abort();
        }
        fm.ajaxNav = $.ajax({
            type: 'GET',
            url: '/manage/rest/asset/nav',
            data: 'currentFolderId=' + fm.currentFolderId,
            success: function (data) {
                fm.currentFolder = data.currentFolder;
                fm.path = data.path;
                fm.renderNav();
            }
        });
    },

    renderFolders: function () {
        $('#js-folders').html(fm.templateFolder({
            keyword: fm.keyword,
        }));

        $('#js-folders .jstree').jstree({
            core: {
                check_callback: function (operation, node, node_parent, node_position, more) {
                    if (!node_parent.parent) {
                        return false;
                    }
                    return true;
                },
                data: [fm.folders],
            },
            search: {
                show_only_matches: true
            },
            plugins: ['types', 'dnd', 'search'],
            types: {
                default: {
                    'icon': 'far fa-folder-open'
                },
            }
        });
        $('#js-folders .jstree').bind("move_node.jstree", function (e, data) {
            var nodes = $(this).jstree().get_json('#', {
                flat: true
            });
            var data = [];
            for (var idx in nodes) {
                var itm = nodes[idx];
                if (itm.parent != '#') {
                    data.push({
                        id: itm.id,
                        parentId: itm.parent,
                        rank: idx,
                    });
                }
            }
            $.ajax({
                type: 'POST',
                url: '/manage/rest/asset/folders/update',
                data: 'data=' + encodeURIComponent(JSON.stringify(data)),
                success: function (data) {
                }
            });
        });
    },

    renderFiles: function () {
        $('#js-files').html(fm.templateFiles({
            showUploadButton: fm.keyword ? 0 : 1,
        }));
        $("div#cmsFormDropzone").dropzone({
            url: "/manage/rest/asset/files/upload",
            params: {
                parentId: fm.currentFolderId,
            },
            previewTemplate: '<div></div>',
            complete: function (file, done) {
                if (this.getUploadingFiles().length === 0 && this.getQueuedFiles().length === 0) {
                    fm.getFiles();
                    return;
                }

                var result = jQuery.parseJSON(file.xhr.responseText);
                $('#dropzone-wrap').after(fm.templateProgress({
                    status: result.status,
                    file: result.orm,
                }));
            }
        });

        for (var idx in fm.files) {
            var itm = fm.files[idx];
            $('#js-files > ul').append(fm.templateFile({
                mode: fm.mode,
                file: itm,
                url: encodeURI(window.__returnUrl)
            }))
        }

        $('#js-files > ul').sortable({
            items: 'li.js-tableContent',
            cursorAt: {left: -10},
            stop: function () {
                var data = $('#js-files > ul').sortable("toArray");
                $.ajax({
                    type: 'POST',
                    url: '/manage/rest/column/sort',
                    data: {
                        data: JSON.stringify(data),
                        className: 'Asset',
                    },
                    success: function (data) {
                    }
                });
            }
        });

        if (fm.filesTotal > 1) {
            var whole = 11;
            var half = (whole - 1) / 2;

            fm.filesPageNum = parseInt(fm.filesPageNum, 10);

            if (fm.filesTotal > (fm.filesPageNum + half)) {
                var start = Math.max(fm.filesPageNum - half, 1);
                var end = Math.min(start + whole - 1, fm.filesTotal);
            } else {
                var start = Math.max(fm.filesTotal - whole + 1, 1);
                var end = fm.filesTotal;
            }

            $('.js-files-pagination ul').empty()
            for (var i = start, il = end; i <= il; i++) {
                $('.js-files-pagination ul').append('<li ' + (fm.filesPageNum == i ? 'class="selected"' : '') + '><a href="#" class="js-files-pagenum" data-pagenum="' + i + '">' + i + '</a></li>')
            }

            $('.js-files-pagination').show()
        } else {
            $('.js-files-pagination').hide()
        }

        if ($('#popup-container').parent().attr('id') === 'orm-popup-container') {
            $.fancybox.update()
        } else {
            $('html, body').animate({
                scrollTop: 0
            }, 1000, 'easeInOutQuint');
        }

        if (fm.mode == 2) {
            // $('.file-manager').css('position', 'absolute')
            $('.js-extra-stuff').show();
        }
    },

    renderNav: function () {
        $('.js-nav').html(fm.templateNav({
            keyword: fm.keyword,
            currentFolder: fm.currentFolder,
            path: fm.path,
        }));

        $('#fileupload').fileupload({
            url: '/manage/rest/asset/files/upload',
            dataType: 'json',
            sequentialUploads: true,
            formData: {
                parentId: fm.currentFolderId,
            },
            add: function (e, data) {
                var uploadErrors = [];
                if (data.files[0]['size'] == '' || data.files[0]['size'] > 50000000) {
                    uploadErrors.push('File size is too big');
                }
                if (uploadErrors.length > 0) {
                    alert(uploadErrors.join("\n"));
                } else {
                    $('.progress-bar').css('width', 0);
                    $('.progress').show();
                    data.submit();
                }
            },
            start: function () {
            },
            done: function (e, data) {
                if (typeof data.result.id != 'undefined') {
                    fm.files.unshift(data.result);
                    fm.renderFiles();
                }
            },
            progressall: function (e, data) {
                var progress = parseInt(data.loaded / data.total * 100, 10);
                $('.progress-bar').css('width', progress + '%');
            },
            stop: function (e) {
                $('.progress').fadeOut(3000);
            }
        }).prop('disabled', !$.support.fileInput).parent().addClass($.support.fileInput ? undefined : 'disabled');

        $('#js-add-dialog form').validate({
            rules: {
                name: "required",
            },
        });

        $('#js-add-dialog form').submit(function (ev) {
            ev.preventDefault();
            if ($(this).valid()) {
                $.ajax({
                    type: 'POST',
                    url: '/manage/rest/asset/files/add/folder',
                    data: {
                        title: $('#js-add-dialog form input[name=name]').val(),
                        parentId: fm.currentFolderId,
                    },
                    success: function (data) {
                        $('#js-add-dialog form input[name=name]').val('');
                        $('#js-add-dialog').modal('hide');
                        fm.getFolders();
                    }
                });
            }
            return false;
        });

        $('#js-edit-dialog form').validate({
            rules: {
                name: "required",
            },
        });

        $('#js-edit-dialog form').submit(function (ev) {
            ev.preventDefault();
            if ($(this).valid()) {
                $.ajax({
                    type: 'POST',
                    url: '/manage/rest/asset/files/edit/folder',
                    data: {
                        id: fm.currentFolderId,
                        title: $('#js-edit-dialog form input[name=name]').val(),
                    },
                    success: function (data) {
                        $('#js-edit-dialog').modal('hide');
                        $('body').removeClass('modal-open');
                        $('.modal-backdrop').remove();
                        fm.getFolders();
                        fm.getNav();
                    }
                });
            }
            return false;
        });
    },

    selectFolder: function(folderId) {
        fm.currentFolderId = folderId;
        fm.currentFolderId = isNaN(fm.currentFolderId) ? 0 : fm.currentFolderId;
        window.__currentFolderId = fm.currentFolderId;
        $('#currentFolderId').val(window.__currentFolderId);
    },

    getById: function (data, id) {
        for (var idx in data) {
            var itm = data[idx];
            if (itm.id == id) {
                return itm;
            }
        }
        return null;
    },
};
window.fm = fm;
