$(function () {
    $(document).on('click', '.toggle-icon', function (ev) {
        ev.preventDefault();
        $(this).toggleClass('selected');
        if ($(this).hasClass('selected')) {
            $('[data-source=' + $(this).attr('data-target') + ']').slideDown(150);
        } else {
            $('[data-source=' + $(this).attr('data-target') + ']').slideUp(150);
        }
    });

    $(document).on('click', '.js-model-note-button', function (ev) {
        var container = $('<div>').html(`<textarea>${$(this).data('content')}</textarea>`).appendTo('body');
        container.dialog({
            title: 'Editing note...',
            resizable: false,
            draggable: false,
            modal: true,
            dialogClass: 'confirmation',
            buttons: [
                {
                    text: 'Update', click: function () {
                        var _this = this;
                        var note = $(container).find('textarea').val();
                        $('.js-model-note-button').data('content', note);

                        $.ajax({
                            type: 'GET',
                            url: '/manage/rest/model/note',
                            data: 'className=' + $('body').data('class') + '&note=' + encodeURIComponent(note),
                            success: function (msg) {
                                $(_this).dialog('close');
                                $('.js-model-note-content').text(note);
                                if (note) {
                                    $('.js-model-note-content').show();
                                } else {
                                    $('.js-model-note-content').hide();
                                }
                            }
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
        return false;
    });

    //Setup delete orm
    $(document).on('click', '.js-orm-delete', function (ev) {
        var ormInfo = $(this).closest('.js-orm-info');
        if (ormInfo.length) {
            var container = $('<div>').html('<p>Are you sure? Please click "Confirm" to proceed.</p>').appendTo('body');
            container.dialog({
                title: 'Deleting data...',
                resizable: false,
                draggable: false,
                modal: true,
                dialogClass: 'confirmation',
                buttons: [
                    {
                        text: 'Confirm', click: function () {
                            var _this = this;
                            $.ajax({
                                type: 'GET',
                                url: '/manage/rest/delete',
                                data: 'id=' + encodeURIComponent($(ormInfo).attr('id')) + '&className=' + encodeURIComponent($(ormInfo).data('class') ? $(ormInfo).data('class') : $('body').data('class')),
                                success: function (msg) {
                                    if (ormInfo.data('callback')) {
                                        window[ormInfo.data('callback')].call(ormInfo);
                                    } else {
                                        ormInfo.remove();
                                    }
                                    $(_this).dialog("close");
                                }
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
        }
        return false;
    });

    //Setup change status
    $(document).on('click', '.js-orm-status', function() {
        var ormInfo = $(this).closest('.js-orm-info');
        if (ormInfo.length) {
            var status = $(this).data('status') ? 0 : 1;
            $(this).find('img').attr('src', '/cms/images/dot' + (status ? 'Green' : 'Red') + '.gif');
            $(this).data('status', status);
            $.ajax({
                type: 'GET',
                url: '/manage/rest/status',
                data: 'id=' + encodeURIComponent($(ormInfo).attr('id')) + '&className=' + encodeURIComponent($(ormInfo).data('class') ? $(ormInfo).data('class') : $('body').data('class')) + '&status=' + encodeURIComponent($(this).data('status')),
                success: function (msg) {
                }
            });
        }
        return false;
    });

    //Setup sortable table
    $.each($('.js-sort-column').find('td'), function (key, val) {
        $(val).css('width', $(val).outerWidth() + 'px');
    });
    $('.js-sort-column').sortable({
        stop: function (event, ui) {
            $.ajax({
                type: 'GET',
                url: '/manage/rest/column/sort',
                data: 'data=' + encodeURIComponent(JSON.stringify($('.js-sort-column').sortable("toArray"))) + '&className=' + encodeURIComponent($('body').data('class')),
                success: function (msg) {
                }
            });
        }
    });

    //Setup image crop
    fc.init();
});

function getRandomId() {
    return 'uniq_' + Math.random().toString(36).substr(2, 9) + new Date().getTime();
};