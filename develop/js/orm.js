$(function () {
    if ($('body').hasClass('fragment-base')) {
        $('select').addClass('no-chosen');
    }

    $R.add('plugin', 'filePicker', {
        init: function (app) {
            this.app = app;
            this.toolbar = app.toolbar;
        },
        start: function () {
            var buttonData = {
                title: 'File picker',
                api: 'plugin.filePicker.toggle'
            };
            var $button = this.toolbar.addButton('my-button', buttonData);
            $button.setIcon('<i class="re-icon-file"></i>');
        },
        toggle: function () {
            window._redactor = this;
            window._callback = function () {
                window._redactor.app.insertion.insertHtml('<a target="_blank" href="/downloads/assets/' + $(this).closest('.js-orm-info').data('id') + '">' + $(this).closest('.js-orm-info').find('a').attr('title') + '</a>');
                $.fancybox.close();
            };
            filepicker(null);
        }
    });

    $R.add('plugin', 'imagePicker', {
        init: function (app) {
            this.app = app;
            this.toolbar = app.toolbar;
        },
        start: function () {
            var buttonData = {
                title: 'Image picker',
                api: 'plugin.imagePicker.toggle'
            };
            var $button = this.toolbar.addButton('my-button', buttonData);
            $button.setIcon('<i class="re-icon-image"></i>');
        },
        toggle: function () {
            window._redactor = this;
            window._callback = function () {
                window._redactor.app.insertion.insertHtml('<img src="/images/assets/' + $(this).closest('.js-orm-info').data('id') + '/large" alt="' + $(this).closest('.js-orm-info').find('a').attr('title') + '">');
                $.fancybox.close();
            };
            filepicker(null);
        }
    });

    var templateGalleryFile = Handlebars.compile($('#gallery-file').html());

    window._galleryFiles = [];
    window._File = [];

    window._parentId = 0;
    window._folders = [];
    window._files = [];
    window._ancestors = [];

    $(document).on('click', '.js-orm-apply,.js-orm-save', function (ev) {
        var form = $(this).closest('form')
        form.removeAttr('target', '_blank');
    });

    $(document).on('click', '.js-orm-preview', function (ev) {
        var form = $(this).closest('form')
        form.prop('target', '_blank');
    });

    $(document).on('click', '.js-closeFragmentWindow', function () {
        parent.$.fancybox.close();
    });

    $(document).on('change', '.js-choice_multi_json', function () {
        $(this).prev('input').val(JSON.stringify($(this).val()));
    });

    $(document).on('click', '.js-orm-fm .js-tableContent a.js-image-select', function () {
        window._callback.call(this);
        return false;
    });

    $(document).on('click', '.js-delete-version', function () {
        var id = $(this).data('id');
        var className = $(this).data('classname');

        $.ajax({
            type: 'GET',
            url: '/manage/rest/version/delete',
            data: {
                id: id,
                className: className,
            },
            success: function (data) {
                location.reload();
            }
        });

        return false;
    });

    var renderElements = function (container, callback) {
        $.each($(container).find('.assetfolderpicker'), function (idx, itm) {
            var modelName = $(itm).closest('form').data('modelname');
            var ormId = $(itm).closest('form').data('ormid');
            var attributeName = $(itm).find('input').data('attributename');

            var getFiles = function () {
                $(itm).find('.js-gallery-container').removeClass('no-result');
                $(itm).find('.js-gallery-container').html('<img src="/cms/images/spinner.gif" alt="Loading..." />');

                // $(itm).find('.js-no-results').hide();
                // $(itm).find('.js-loading').hide();
                // $(itm).find('.js-gallery-container').parent().addClass('sk-loading');
                $.ajax({
                    type: 'GET',
                    url: '/manage/rest/asset/files/chosen',
                    data: 'modelName=' + modelName + '&attributeName=' + attributeName + '&ormId=' + ormId,
                    success: function (data) {
                        window._galleryFiles[attributeName] = data;
                        renderFiles();
                    }
                });
            };
            var renderFiles = function () {
                var data = window._galleryFiles[attributeName];
                // $(itm).find('.js-loading').hide();
                // $(itm).find('.js-gallery-container').parent().removeClass('sk-loading');
                $(itm).find('.js-gallery-container').empty();

                for (var idxValue in data) {
                    var itmValue = data[idxValue];
                    $(itm).find('.js-gallery-container').append(templateGalleryFile(itmValue));
                }
                if (!data.length) {
                    // $(itm).find('.js-no-results').show();
                    $(itm).find('.js-gallery-container').addClass('no-result');
                    $(itm).find('.js-gallery-container').html('<li class="no-result">No files selected</li>');
                }
                $(itm).find('.js-gallery-container').sortable({
                    cursorAt: {left: -30, top: -30},
                    stop: function () {
                        var data = $(itm).find('.js-gallery-container').sortable("toArray");
                        $.ajax({
                            type: 'GET',
                            url: '/manage/rest/asset/files/chosen/rank',
                            data: 'modelName=' + modelName + '&attributeName=' + attributeName + '&ormId=' + ormId + '&ids=' + encodeURIComponent(JSON.stringify(data)),
                            success: function (data) {
                            }
                        });
                    }
                });
            };
            if (typeof window._galleryFiles[attributeName] !== 'undefined') {
                renderFiles();
            } else {
                getFiles();
            }

            $(itm).on('click', '.change', function (ev) {
                window._callback = function () {
                    $(this).next('div').find('a').click();
                };

                folderpicker(modelName, ormId, attributeName, function () {
                    getFiles();
                });
            });
            $(itm).on('click', '.delete', function (ev) {
                $(itm).find('.js-no-results').hide();
                $(itm).find('.js-loading').hide();
                // $(itm).find('.js-gallery-container').parent().addClass('sk-loading');
                $(itm).find('.js-gallery-container').html('<img src="/cms/images/spinner.gif" alt="Loading..." />');

                $.ajax({
                    type: 'GET',
                    url: '/manage/rest/asset/folders/file/select',
                    data: 'modelName=' + modelName + '&attributeName=' + attributeName + '&ormId=' + ormId + '&addOrDelete=2',
                    success: function (data) {
                        getFiles();
                    }
                });
            });
            $(itm).on('click', '.pz-file-delete', function () {
                // $(itm).find('.js-no-results').hide();
                // $(itm).find('.js-loading').show();
                // $(itm).find('.js-gallery-container').parent().addClass('sk-loading');
                var id = $(this).closest('.js-orm-info').data('id');
                $.ajax({
                    type: 'GET',
                    url: '/manage/rest/asset/folders/file/select',
                    data: 'modelName=' + modelName + '&attributeName=' + attributeName + '&ormId=' + ormId + '&addOrDelete=0' + '&id[]=' + id,
                    success: function (data) {
                        var files = window._galleryFiles[attributeName];
                        for (var idx in files) {
                            var itm = files[idx];
                            if (itm.id == id) {
                                files.splice(idx, 1);
                            }
                        }
                        window._galleryFiles[attributeName] = files;
                        renderFiles();
                    }
                });
                return false;
            });
            // $(itm).on('click', ".js-fancybox-gallery", function () {
            //     var images = [];
            //     images.push({
            //         href : $(this).attr('href'),
            //         type : 'image',
            //     });
            //
            //     $.each($(itm).find('a').not(this), function (idx, itm) {
            //         images.push({
            //             href : $(itm).attr('href'),
            //             type : 'image',
            //         });
            //     });
            //     $.fancybox.open(images, {
            //         padding : 0
            //     });
            //     return false;
            // });
        });

        $.each($(container).find('.assetpicker'), function (idx, itm) {
            var elemId = $(itm).find('input').attr('id');
            var fileId = $(itm).find('.js-orm-info').data('id');

            var getFile = function () {
                $.ajax({
                    type: 'GET',
                    url: '/manage/rest/asset/files/get/file',
                    data: 'id=' + fileId,
                    success: function (data) {
                        window._File[elemId] = data;
                        renderFile();
                    }
                });
            };
            var renderFile = function () {
                $(itm).find('.js-filePickFile').show();

                var data = window._File[elemId];
                if (data.id) {
                    $(itm).find('.js-orm-info').data('code', data.code);
                    $(itm).find('.js-orm-info').data('width', data.width);
                    $(itm).find('.js-orm-info').data('height', data.height);

                    $(itm).find('.js-filePickFile').attr('src', '/images/assets/' + data.code + '/cms_small');
                    $(itm).find('.js-filePickFile').show();
                    $(itm).find('.js-asset-delete').show();
                    $(itm).find('.js-cropping-options').show();
                    $(itm).find('.js-asset-change').show();

                } else {
                    $(itm).find('.js-orm-info').data('code', '');
                    $(itm).find('.js-orm-info').data('width', '');
                    $(itm).find('.js-orm-info').data('height', '');

                    $(itm).find('.js-filePickFile').attr('src', '/cms/images/spacer.gif');
                    $(itm).find('.js-filePickFile').show();
                    $(itm).find('.js-asset-delete').hide();
                    $(itm).find('.js-cropping-options').hide();
                    $(itm).find('.js-asset-change').show();
                }
            };
            if (typeof window._File[elemId] !== 'undefined') {
                renderFile();
            } else {
                getFile();
            }

            $(itm).on('click', '.js-asset-change', function (ev) {
                var _this = this;
                window._callback = function () {
                    var widgetContainer = $(_this).closest('.js-filePickWrap')
                    var ormInfo = $(this).closest('.js-orm-info');
                    widgetContainer.find('.js-fileId').val(ormInfo.data('id'));
                    widgetContainer.find('.js-filePickFile').attr('src', '/images/assets/' + ormInfo.data('code') + '/cms_small');
                    widgetContainer.data('id', ormInfo.data('id'));
                    widgetContainer.data('code', ormInfo.data('code'));
                    widgetContainer.data('width', ormInfo.data('width'));
                    widgetContainer.data('height', ormInfo.data('height'));
                    widgetContainer.find('.js-asset-delete').show();
                    widgetContainer.find('.js-cropping-options').show();
                    if (callback) {
                        callback();
                    }
                    ;
                    $.fancybox.close();
                };
                var ormInfo = $(this).closest('.js-orm-info');
                filepicker(ormInfo.data('id'));
                return false;
            });
            $(itm).on('click', '.js-asset-delete', function (ev) {
                var widgetContainer = $(this).closest('.js-filePickWrap')
                widgetContainer.find('.js-fileId').val('');
                widgetContainer.find('.js-filePickFile').attr('src', '/cms/images/spacer.gif');
                widgetContainer.find('.js-asset-delete').hide();
                widgetContainer.find('.js-cropping-options').hide();
                if (callback) {
                    callback();
                }
                ;
                return false;
            });
        });

        $.each($(container).find('.js-mkvp-widget'), function (idx, itm) {
            var isJson = function (str) {
                try {
                    var val = JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return (typeof val == 'array' || typeof val == 'object') ? true : false;
            };
            var rawValue = $(itm).find('textarea').val();
            var jsonValue = isJson(rawValue) ? JSON.parse(rawValue) : [];

            var render = function (mkvps) {
                $(itm).find('table').find('tbody').remove();
                for (var key in mkvps) {
                    var mkvp = mkvps[key];
                    $(itm).find('table').append(
                        `<tbody class="js-row"><tr>
                        <td><input class="js-key js-input" type="text" value="${mkvp.key}"></td>
                        <td><input class="js-value js-input" type="text" value="${mkvp.value}"></td>
                        <td><a class="js-delete" data-idx="${idx}" href="#"><img alt="Delete Record" title="Delete Record" src="/cms/images/binIcon.gif" border="0"></a></td>
                    </tr></tbody>`
                    )
                }

                $(itm).find('table').sortable({
                    items: 'tbody.js-row',
                    stop: function(event, ui) {
                        changeValue(mkvps);
                    },
                    placeholder: {
                        element: function(currentItem) {
                            return $('<tr><td colspan="3" style="background: lightyellow; height: ' + $(currentItem).height() + 'px">&nbsp;</td></tr>')[0];
                        },
                        update: function(container, p) {
                            return;
                        }
                    }
                });

                $.each($(itm).find('table').find('tbody.js-row').find('td'), function (key, td) {
                    $(td).css('width', $(td).outerWidth() + 'px');
                });

                changeValue(mkvps);
            };

            var changeValue = function (mkvps) {
                $.each($(itm).find('table').find('tbody.js-row'), function (key, tbody) {
                    mkvps[key].key = $(tbody).find('.js-key').val();
                    mkvps[key].value = $(tbody).find('.js-value').val();
                    $(tbody).find('.js-delete').data('idx', key);
                });
                $(itm).find('textarea').val(JSON.stringify(mkvps));
            };

            $(itm).on('keyup', '.js-input', function () {
                changeValue(jsonValue);
            });

            $(itm).on('click', '.js-add', function () {
                jsonValue.push({
                    key: '',
                    value: '',
                });
                render(jsonValue);
                return false;
            });

            $(itm).on('click', '.js-delete', function () {
                var idx = $(this).data('idx');
                jsonValue.splice(idx, 1);
                render(jsonValue);
                return false;
            });

            render(jsonValue);
        });

        $.each($(container).find('.js-abtest-widget'), function (idx, itm) {
            var choices = JSON.parse($(itm).find('.js-choices').val());

            var render = function (data) {
                $(itm).find('table').find('tbody').remove();
                for (var key in data) {
                    var val = data[key];

                    var pageOptions = '';
                    for (var choiceIdx in choices) {
                        var choice = choices[choiceIdx];
                        var selected = (choice == val.page) ? 'selected' : '';
                        pageOptions += `<option ${selected} value="${choice}">${choiceIdx}</option>`;
                    }

                    $(itm).find('table').append(
                        `<tbody class="js-row"><tr>
                            <td>
                                <select class="page form-control js-value js-page">${pageOptions}</select>
                            </td>
                            <td><input class="js-value js-token" type="text" value="${val.token}"></td>
                            <td><input class="js-value js-chance" type="text" value="${val.chance}"></td>
                            <td><a class="js-delete" data-idx="${idx}" href="#"><img alt="Delete Record" title="Delete Record" src="/cms/images/binIcon.gif" border="0"></a></td>
                        </tr></tbody>`
                    )
                }

                $(itm).find('select:not(.no-chosen)').chosen({
                    allow_single_deselect: true
                });

                $(itm).find('table').sortable({
                    items: 'tbody.js-row',
                    stop: function(event, ui) {
                        changeValue(data);
                    },
                    placeholder: {
                        element: function(currentItem) {
                            return $('<tr><td colspan="4" style="background: lightyellow; height: ' + $(currentItem).height() + 'px">&nbsp;</td></tr>')[0];
                        },
                        update: function(container, p) {
                            return;
                        }
                    }
                });

                $.each($(itm).find('table').find('tbody.js-row').find('td'), function (key, td) {
                    $(td).css('width', $(td).outerWidth() + 'px');
                });

                changeValue(data);
            };

            var addValue = function (data, page, token, chance) {
                data.push({
                    page: page,
                    token: token,
                    chance: chance,
                });
                return data;
            };

            var addDefault = function (data) {
                var firstPage = choices[Object.keys(choices)[0]];
                return addValue(data, firstPage, 'page-' + parseInt(Math.random() * 10000, 10), '50')
            };

            var changeValue = function (data) {
                $.each($(itm).find('table').find('tbody.js-row'), function (key, tbody) {
                    data[key].page = $(tbody).find('.js-page').val();
                    data[key].token = $(tbody).find('.js-token').val();
                    data[key].chance = $(tbody).find('.js-chance').val();
                    $(tbody).find('.js-delete').data('idx', key);
                });
                $(itm).find('textarea:not(.js-choices)').val(JSON.stringify(data));
            };

            var isJson = function (str) {
                try {
                    var val = JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return (typeof val == 'array' || typeof val == 'object') ? true : false;
            };
            var rawValue = $(itm).find('textarea').val();
            var jsonValue = isJson(rawValue) ? JSON.parse(rawValue) : [];
            if (jsonValue.length == 0) {
                for (var i = 0, il = 2; i < il; i++) {
                    jsonValue = addDefault(jsonValue);
                }
            }

            $(itm).on('keyup change', '.js-value', function () {
                changeValue(jsonValue);
            });

            $(itm).on('click', '.js-add', function () {
                jsonValue = addDefault(jsonValue);
                render(jsonValue);
                return false;
            });

            $(itm).on('click', '.js-delete', function () {
                var idx = $(this).data('idx');
                jsonValue.splice(idx, 1);
                render(jsonValue);
                return false;
            });

            render(jsonValue);
        });

        $(container).find('.formStyle.datepicker input,.inner-box.datepicker input').datetimepicker({
            timepicker: false,
            format: 'd M Y',
            scrollInput: false,
        });

        $(container).find('.formStyle.datetimepicker input,.inner-box.datetimepicker input').datetimepicker({
            step: 5,
            format: 'd M Y H:i',
            scrollInput: false,
        });

        $(container).find('.formStyle.timepicker input,.inner-box.timepicker input').datetimepicker({
            timepicker: true,
            datepicker: false,
            step: 5,
            format: 'H:i',
            scrollInput: false,
        });

        $(container).find('select:not(.no-chosen)').chosen({
            allow_single_deselect: true
        });

        $.each($(container).find('.js-selectize'), function (idx, itm) {
            var id = $(itm).attr('id');
            var choiceClass = id + '-choice';
            var options = [];
            $.each($('.' + choiceClass), function (choiceIdx, choiceItm) {
                options.push({
                    id: $(choiceItm).data('id'),
                    name: $(choiceItm).data('name'),
                });
            });

            $(itm).selectize({
                plugins: ['restore_on_backspace', 'remove_button', 'drag_drop'],
                persist: false,
                maxItems: null,
                valueField: 'id',
                labelField: 'name',
                searchField: ['name'],
                options: options,
                createFilter: function(input) {
                    return false;
                },
                create: function(input) {
                    return false;
                }
            });
        });

        $.each($(container).find('.js-selectize-block'), function (idx, itm) {
            var id = $(itm).attr('id');
            var choiceClass = id + '-choice';
            var options = [];
            $.each($('.' + choiceClass), function (choiceIdx, choiceItm) {
                options.push({
                    id: $(choiceItm).data('id'),
                    name: $(choiceItm).data('name'),
                });
            });

            $(itm).selectize({
                plugins: ['restore_on_backspace', 'remove_button', 'drag_drop'],
                persist: false,
                maxItems: null,
                valueField: 'id',
                labelField: 'name',
                searchField: ['name'],
                options: options,
                createFilter: function(input) {
                    return false;
                },
                create: function(input) {
                    return false;
                },
            });
        });

        var plugInType = $('#var_wysiwyg_no_image_video_buttons').val();
        var plugins = ['filePicker', 'imagePicker', 'video', 'table'];
        if (plugInType == 1) {
            plugins = ['table', 'line'];
        }
        $(container).find('.wysiwyg textarea').redactor({
            buttonsAdd: ['line'],
            plugins: plugins,
            minHeight: '300px',
            imageResizable: false,
            imageFigure: true,
            // imageEditable: false,
            imagePosition: {
                "left": "img-left",
                "right": "img-right",
                "center": "img-center"
            },
            callbacks: {
                image: {
                    changed: function(image) {
                        // console.log(image)
                    }
                },
                changed: function (e) {
                    if (callback) {
                        callback();
                    }
                }
            },
        });

        if (typeof renderCustomWidget !== "undefined") {
            renderCustomWidget(container);
        }
    };
    renderElements($('body'), null);

    $.each($('.js-fragment-container'), function (idx, itm) {
        var dataId = $(itm).data('id');
        var dataBlocks = JSON.parse($(itm).find('.js-blocks').val());
        var dataTags = JSON.parse($(itm).find('.js-tags').val());

        //Set up default
        var dataValue = JSON.parse($(itm).find('#' + dataId).val());
        var dataDefault = $(itm).find('.js-default').val() != 'null' ? JSON.parse($(itm).find('.js-default').val()) : null;
        if (!dataValue.length && dataDefault) {
            dataDefault.content = JSON.parse(dataDefault.content);

            for (var idx in dataDefault.content) {
                var itm = dataDefault.content[idx];
                dataValue.push({
                    id: getRandomId(),
                    title: itm.title,
                    attr: itm.id,
                    status: 1,
                    tags: itm.tags,
                    blocks: [],
                })
            }
        }

        for (var idx in dataBlocks) {
            var itm = dataBlocks[idx];
            itm.items = JSON.parse(itm.items);
        }
        for (var secIdx in dataValue) {
            var sec = dataValue[secIdx];
            for (var blkIdx in sec.blocks) {
                var blk = sec.blocks[blkIdx];
                var dataBlk = getById(dataBlocks, blk.block);
                blk.items = dataBlk.items;
            }
        }

        var template_section = Handlebars.compile($('#' + dataId + '_section').html());
        var template_block = Handlebars.compile($('#' + dataId + '_block').html());
        var template_modal_section = Handlebars.compile($('#' + dataId + '_modal_section').html());
        var template_modal_block = Handlebars.compile($('#' + dataId + '_modal_block').html());
        var template_sidebar = Handlebars.compile($('#' + dataId + '_sidebar').html());

        //Set blocks sort
        $('.js-blocks-' + dataId).sortable({
            connectWith: '.js-blocks-' + dataId,
            handle: ".panel-heading",
        }).disableSelection();

        //Set up sections sort
        $(document).on('click', '#' + dataId + '_wrap .js-section .js-down', function () {
            var id = $(this).closest('.js-section').data('id');
            for (var idx in dataValue) {
                var itm = dataValue[idx];
                if (itm.id == id && idx < (dataValue.length - 1)) {
                    idx = parseInt(idx, 10);
                    dataValue[idx] = JSON.parse(JSON.stringify(dataValue[idx + 1]));
                    dataValue[idx + 1] = JSON.parse(JSON.stringify(itm));
                    break;
                }
            }
            render();
            assemble();
            return false;
        });
        $(document).on('click', '#' + dataId + '_wrap .js-section .js-up', function () {
            var id = $(this).closest('.js-section').data('id');
            for (var idx in dataValue) {
                var itm = dataValue[idx];
                if (itm.id == id && idx > 0) {
                    idx = parseInt(idx, 10);
                    dataValue[idx] = JSON.parse(JSON.stringify(dataValue[idx - 1]));
                    dataValue[idx - 1] = JSON.parse(JSON.stringify(itm));
                    break;
                }
            }
            render();
            assemble();
            return false;
        });

        //Set up add / edit section
        $(document).on('click', '#' + dataId + '-add-section', function () {
            $('#' + dataId + '-modal-section').html(template_modal_section({
                section: {
                    id: getRandomId(),
                    title: 'Content',
                    attr: 'content',
                    status: 1,
                    tags: [],
                    blocks: [],
                },
                optionTags: dataTags,
            }));
            $('#' + dataId + '-modal-section').dialog({
                title: 'Adding a section...',
                resizable: false,
                draggable: false,
                modal: true,
                dialogClass: 'confirmation',
                buttons: [
                    {
                        text: 'Save', click: function () {
                            var _this = this;
                            saveSection(dataId, dataValue, function () {
                                $(_this).dialog("close");
                                render();
                            });
                        }
                    },
                    {
                        text: "Cancel", click: function () {
                            $(this).dialog("close");
                        }
                    },
                ]
            });
            $('#' + dataId + '-modal-section select.js-after-chosen').chosen({
                allow_single_deselect: true
            });
        });
        $(document).on('click', '#' + dataId + '_wrap .js-edit-section', function () {
            var id = $(this).closest('.js-section').data('id');
            var section = getById(dataValue, id);
            $('#' + dataId + '-modal-section').html(template_modal_section({
                section: section,
                optionTags: dataTags,
            }));
            $('#' + dataId + '-modal-section').dialog({
                title: 'Editing the section...',
                resizable: false,
                draggable: false,
                modal: true,
                dialogClass: 'confirmation',
                buttons: [
                    {
                        text: 'Save', click: function () {
                            var _this = this;
                            saveSection(dataId, dataValue, function () {
                                $(_this).dialog("close");
                                render();
                            });
                        }
                    },
                    {
                        text: "Cancel", click: function () {
                            $(this).dialog("close");
                        }
                    },
                ]
            });
            $('#' + dataId + '-modal-section select.js-after-chosen').chosen({
                allow_single_deselect: true
            });
            return false;
        });

        //Set up delete section & enable/disable status
        $(document).on('click', '#' + dataId + '_container .js-delete-section', function () {
            var secId = $(this).closest('.js-section').data('id');

            for (var idx in dataValue) {
                var itm = dataValue[idx];
                if (itm.id == secId) {
                    dataValue.splice(idx, 1)
                }
            }
            render();
            assemble();
            return false;
        });
        $(document).on('click', '#' + dataId + '_container .js-status-toggle', function () {
            var type = $(this).data('type');
            if (type == 'section') {
                var obj = getById(dataValue, $(this).closest('.js-section').data('id'));
            } else {
                var blocks = [];
                for (var idx in dataValue) {
                    var itm = dataValue[idx];
                    blocks = blocks.concat(itm.blocks);
                }
                var obj = getById(blocks, $(this).closest('.js-block').data('id'));
            }

            obj.status = $(this).data('status');
            render();
            assemble();
            return false;
        });
        $(document).on('change', '.js-section-' + dataId + ' .js-add-block', function () {
            var blockOption = getById(dataBlocks, $(this).val());
            var block = {
                id: getRandomId(),
                title: blockOption.title,
                status: 1,
                block: blockOption.id,
                twig: blockOption.twig,
                items: blockOption.items,
                values: {},
            };
            var section = getById(dataValue, $(this).closest('.js-section').data('id'));
            saveBlock(dataId, dataBlocks, dataValue, block.block, section.id, block.id, block.status, block.twig, blockOption.title, function () {
                render();
                assemble();
            });
            /**
            var section = getById(dataValue, $(this).closest('.js-section').data('id'));
            $('#' + dataId + '-modal-block').html(template_modal_block({
                block: block,
                section: section,
            }));
            $('#' + dataId + '-modal-block').dialog({
                title: 'Adding a block...',
                resizable: false,
                draggable: false,
                modal: true,
                dialogClass: 'confirmation',
                buttons: [
                    {
                        text: 'Save', click: function () {
                            var _this = this;
                            saveBlock(dataId, dataBlocks, dataValue, block.block, section.id, block.id, block.status, block.twig, blockOption.title, function () {
                                $(_this).dialog("close");
                                render();
                                assemble();
                            });
                        }
                    },
                    {
                        text: "Cancel", click: function () {
                            $(this).dialog("close");
                        }
                    },
                ]
            });*/
            $(this).val('');
        });

        $(document).on('click', '#' + dataId + '_wrap .js-edit-block', function () {
            var blocks = [];
            for (var idx in dataValue) {
                var itm = dataValue[idx];
                blocks = blocks.concat(itm.blocks);
            }
            var block = getById(blocks, $(this).closest('.js-block').data('id'));
            var section = getById(dataValue, $(this).closest('.js-section').data('id'));
            $('#' + dataId + '-modal-block').html(template_modal_block({
                block: block,
                section: section,
            }));
            $('#' + dataId + '-modal-block').dialog({
                title: 'Editing the block...',
                resizable: false,
                draggable: false,
                modal: true,
                dialogClass: 'confirmation',
                buttons: [
                    {
                        text: 'Save', click: function () {
                            var _this = this;
                            saveBlock(dataId, dataBlocks, dataValue, block.block, section.id, block.id, block.status, block.twig, block.title, function () {
                                $(_this).dialog("close");
                                render();
                                assemble();
                            });
                        }
                    },
                    {
                        text: "Cancel", click: function () {
                            $(this).dialog("close");
                        }
                    },
                ]
            });
            $(this).val('');
            return false;
        });

        $(document).on('click', '#' + dataId + '_container .js-delete-block', function () {
            var secId = $(this).closest('.js-section').data('id');
            var blkId = $(this).closest('.js-block').data('id');

            var section = getById(dataValue, secId);
            for (var idx in section.blocks) {
                var itm = section.blocks[idx];
                if (itm.id == blkId) {
                    section.blocks.splice(idx, 1)
                }
            }
            render();
            assemble();
            return false;
        });

        var render = function () {
            render_content();
            render_sidebar();
        };

        var render_content = function () {
            $('#' + dataId + '_container').empty();

            for (var idx in dataValue) {
                var itm = dataValue[idx];
                var blocks = [];
                for (idxBlk in dataBlocks) {
                    var dataBlk = dataBlocks[idxBlk];
                    if (typeof dataBlk.tags == 'string') {
                        var tags = itm.tags.filter(value => -1 !== dataBlk.tags.indexOf(`"${value}"`));
                        if (tags.length || !itm.tags.length) {
                            blocks.push(dataBlk);
                        }
                    }
                }
                $('#' + dataId + '_container').append(template_section({
                    id: dataId,
                    blockOptions: blocks,
                    section: itm,
                    idx: idx,
                    total: dataValue.length - 1,
                }));

                for (var idxBlk in itm.blocks) {
                    var block = itm.blocks[idxBlk];
                    $('.js-section-' + dataId + '-' + itm.id + ' .js-blocks').append(template_block({
                        id: dataId,
                        block: block,
                        idx: idxBlk,
                    }));
                }

                if (!itm.blocks.length) {
                    $('.js-section-' + dataId + '-' + itm.id + ' .js-blocks .js-no-blocks').fadeIn();
                } else {
                    $('.js-section-' + dataId + '-' + itm.id + ' .js-blocks .js-no-blocks').hide();
                }
            }

            $('#' + dataId + '_container').sortable({
                handle: '.js-heading',
                items: '.js-block',
                stop: function (event, ui) {
                    assemble();
                    render();
                },
                placeholder: {
                    element: function (currentItem) {
                        return $('<div class="panel panel-default js-block" colspan="3" style="background: lightyellow; height: ' + $(currentItem).height() + 'px">&nbsp;</div>')[0];
                    },
                    update: function (container, p) {
                        return;
                    }
                }
            });

            $('#' + dataId + '_container select.js-after-chosen').chosen({
                allow_single_deselect: true
            });

            renderElements($('#' + dataId + '_container'), function () {
                assemble();
            });

            $('.js-elem').change(function () {
                assemble();
            });

            $('.js-cbi-item').on('keyup', function () {
                assemble();
            });
        };

        var render_sidebar = function () {
            $('.sidebar' + dataId).remove();
            $('body').append(template_sidebar({
                className: 'sidebar' + dataId,
            }));
            $('.sidebar' + dataId + ' .panel-body').append('<div class="jstree"></div>');

            if ($(window).scrollTop() > 150) {
                $('.sidebar' + dataId).css('top', '100px');
            } else {
                $('.sidebar' + dataId).css('top', '200px');
            }
            $(window).on('scroll resize', function () {
                if ($(window).scrollTop() > 150) {
                    $('.sidebar' + dataId).css('top', '100px');
                } else {
                    $('.sidebar' + dataId).css('top', '200px');
                }
            });

            var data = [];
            for (var idxSec in dataValue) {
                var section = dataValue[idxSec];
                var obj = {
                    id: section.id,
                    text: section.title,
                    state: {
                        opened: true,
                        selected: false
                    },
                    children: [],
                    type: section.status == 1 ? 'section' : 'section-disabled',
                };
                for (var idxBlk in section.blocks) {
                    var block = section.blocks[idxBlk];
                    var t = block.title;
                    if (typeof block.values.title !== 'undefined' && block.values.title) {
                        t = block.values.title;
                    } else if (typeof block.values.heading !== 'undefined' && block.values.heading) {
                        t = block.values.heading;
                    } else if (typeof block.values.title !== 'undefined' && block.values.header) {
                        t = block.values.header;
                    }
                    obj.children.push({
                        id: block.id,
                        text: t,
                        type: block.status == 1 ? 'block' : 'block-disabled',
                    })
                }
                data.push(obj);
            }

            $('.sidebar' + dataId + ' .jstree').jstree({
                core: {
                    check_callback: true,
                    data: data,
                },
                'plugins': ['types', 'dnd'],
                'types': {
                    "#": {
                        "valid_children": ["section"]
                    },
                    "section": {
                        'icon': 'far fa-folder-open',
                        "valid_children": ["block"]
                    },
                    "section-disabled": {
                        'icon': 'far fa-folder-open text-danger',
                        "valid_children": ["block"]
                    },
                    "block": {
                        'icon': 'far fa-file',
                        "valid_children": [],
                    },
                    "block-disabled": {
                        'icon': 'far fa-file text-danger',
                        "valid_children": [],
                    },
                },
            }).on('ready.jstree',
                function () {
                    setTimeout($.proxy(function () {
                        $('.sidebar' + dataId + ' .scroll-content').slimscroll({
                            height: Math.max($('.sidebar' + dataId + ' .panel-body').outerHeight(), 75) + 'px',
                        })
                    }, this), 500);
                }
            );

            $('.sidebar' + dataId + ' .jstree').bind("move_node.jstree", function (e, data) {
                var nodes = $(this).jstree().get_json('#', {
                    flat: true
                });

                var blocks = [];
                for (var idx in dataValue) {
                    var itm = dataValue[idx];
                    blocks = blocks.concat(itm.blocks);
                }

                var result = [];
                for (var idx in nodes) {
                    var itm = nodes[idx];
                    if (itm.parent == '#') {
                        var section = getById(dataValue, itm.id);
                        section.blocks = [];
                        for (var idxBlk in nodes) {
                            var blk = nodes[idxBlk];
                            if (blk.parent == itm.id) {
                                section.blocks.push(getById(blocks, blk.id));
                            }
                        }
                        result.push(section);
                    }
                }

                dataValue = result;
                render_content();
                assemble();

            });
            $('.sidebar' + dataId + ' .jstree').on("select_node.jstree", function (e, data) {
                if (data.node.parent == '#') {
                    var selector = '.js-section-' + dataId + '-' + data.node.id;
                } else {
                    var selector = '.js-block-' + data.node.id;
                }
                $("html, body").animate({scrollTop: $(selector).position().top});
            });

            $('.sidebar' + dataId).find('.sidebar-submit-area .js-back').click(function () {
                location.href = $('form').find('.js-back').attr('href');
                return false;
            });

            $('.sidebar' + dataId).find('.sidebar-submit-area [value=Apply]').click(function () {
                $('form').find('[value=Apply]').click();
            });

            $('.sidebar' + dataId).find('.sidebar-submit-area [value=Save]').click(function () {
                $('form').find('[value=Save]').click();
            });

            $('.sidebar' + dataId).find('.sidebar-submit-area .restore').click(function () {
                $('form').find('.restore').click();
            });

            if ($('#canBePreviewed').val() == 1) {
                $('.sidebar' + dataId).find('.js-sidebar-preview-area').show();
                $('.sidebar' + dataId).find('.js-sidebar-preview-area').click(function () {
                    $('form').find('[value=Preview]').click();
                });
            } else {
                $('.sidebar' + dataId).find('.js-sidebar-preview-area').hide();
            }

            if ($('#isRestoringFromVersion').val() == 1) {
                $('.sidebar' + dataId).find('.sidebar-submit-area .cancel').attr('href', $('.js-orm-restore-cancel').attr('href'));

                $('.sidebar' + dataId).find('.sidebar-submit-area [value=Save]').hide();
                $('.sidebar' + dataId).find('.sidebar-submit-area [value=Apply]').hide();
                $('.sidebar' + dataId).find('.sidebar-submit-area .restore').show();
                $('.sidebar' + dataId).find('.sidebar-submit-area .cancel').show();
            } else {
                $('.sidebar' + dataId).find('.sidebar-submit-area [value=Save]').show();
                $('.sidebar' + dataId).find('.sidebar-submit-area [value=Apply]').show();
                $('.sidebar' + dataId).find('.sidebar-submit-area .restore').hide();
                $('.sidebar' + dataId).find('.sidebar-submit-area .cancel').hide();
            }
        };

        //assemble all data
        var assemble = function () {
            var blocks = [];
            for (var idx in dataValue) {
                var itm = dataValue[idx];
                blocks = blocks.concat(itm.blocks);
            }

            $.each($('#' + dataId + '_container .js-section'), function (idx, itm) {
                var section = getById(dataValue, $(itm).data('id'));
                section.blocks = [];
                $.each($(itm).find('.js-block'), function (idxBlk, itmBlk) {
                    var block = getById(blocks, $(itmBlk).data('id'));
                    if (block) {
                        $.each($(itmBlk).find('.js-elem'), function (idxElem, itmElem) {
                            if ($(itmElem).attr('type') == 'checkbox') {
                                block.values[$(itmElem).data('id')] = $(itmElem).is(':checked') ? 1 : 0;
                            } else {
                                block.values[$(itmElem).data('id')] = $(itmElem).val();
                            }
                        });
                        section.blocks.push(block)
                    }
                });
            });
            $('#' + dataId).val(cleanString(dataValue));
        };

        render();
    });
});

function saveSection(dataId, dataValue, callback) {
    var section = {
        id: $('#' + dataId + '-modal-section [name=id]').val(),
        title: $('#' + dataId + '-modal-section [name=name]').val(),
        attr: $('#' + dataId + '-modal-section [name=attr]').val(),
        status: $('#' + dataId + '-modal-section [name=status]').val(),
        tags: typeof $('#' + dataId + '-modal-section [name=tags]').val() == 'object' ? $('#' + dataId + '-modal-section [name=tags]').val() : [],
        blocks: [],
    };
    var existSection = getById(dataValue, section.id)
    if (!existSection) {
        dataValue.push(section);
    } else {
        existSection.title = section.title;
        existSection.attr = section.attr;
        existSection.tags = section.tags;
    }
    $('#' + dataId).val(cleanString(dataValue));
    callback();
};

function saveBlock(dataId, dataBlocks, dataValue, blockOptionId, sectionId, blockId, blockStatus, blockTwig, blockTitle, callback) {
    var blockOption = getById(dataBlocks, blockOptionId);

    var block = {
        id: blockId,
        title: blockTitle,
        status: blockStatus,
        block: blockOptionId,
        twig: blockTwig,
        items: blockOption.items,
        values: {},
    };

    var section = getById(dataValue, sectionId);

    var blocks = [];
    for (var idx in dataValue) {
        var itm = dataValue[idx];
        blocks = blocks.concat(itm.blocks);
    }
    var existBlock = getById(blocks, blockId);
    if (!existBlock) {
        section.blocks.push(block);
    } else {
        existBlock.title = block.title
    }
    $('#' + dataId).val(cleanString(dataValue));
    callback();
}

function getById(data, id) {
    for (var idx in data) {
        var itm = data[idx];
        if (itm.id == id) {
            return itm;
        }
    }
    return null;
};

function cleanString(sections) {
    sections = JSON.parse(JSON.stringify(sections));
    for (var idxSection in sections) {
        var section = sections[idxSection];
        for (var idxBlock in section.blocks) {
            var block = section.blocks[idxBlock];
            delete block.items;
        }
    }
    return JSON.stringify(sections)
};

function folderpicker(modelName, ormId, attributeName, callback) {
    $.ajax({
        type: 'GET',
        url: '/manage/rest/asset/file/current-folder',
        data: 'modelName=' + modelName + '&ormId=' + ormId + '&attributeName=' + attributeName,
        success: function (data) {
            $('#currentFolderId').val(data.currentFolderId)

            $.fancybox.open([
                {
                    href: '#orm-popup-container',
                    type: 'inline',
                    minWidth: 1150,
                    minHeight: 600,
                    maxWidth: 1150,
                    maxHeight: 600,
                    beforeClose: function () {
                        callback()
                    }
                },
            ], {
                padding: 0
            });

            fm.init({
                mode: 2,
                modelName: modelName,
                attributeName: attributeName,
                ormId: ormId,
            });
        }
    });
};

function filepicker(currentAssetId) {
    if (!currentAssetId) {
        $.fancybox.open([
            {
                href: '#orm-popup-container',
                type: 'inline',
                minWidth: 1150,
                minHeight: 600,
                maxWidth: 1150,
                maxHeight: 600,
            },
        ], {
            padding: 0
        });

        fm.init({
            mode: 1,
            modelName: null,
            attributeName: null,
            ormId: null,
        });
    } else {
        $.ajax({
            type: 'GET',
            url: '/manage/rest/asset/file/current-folder',
            data: 'currentAssetId=' + currentAssetId,
            success: function (data) {
                $('#currentFolderId').val(data.currentFolderId)

                $.fancybox.open([
                    {
                        href: '#orm-popup-container',
                        type: 'inline',
                        minWidth: 1150,
                        minHeight: 600,
                        maxWidth: 1150,
                        maxHeight: 600,
                    },
                ], {
                    padding: 0
                });

                fm.init({
                    mode: 1,
                    modelName: null,
                    attributeName: null,
                    ormId: null,
                });
            }
        });
    }
};
