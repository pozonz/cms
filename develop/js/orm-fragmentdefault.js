$(function() {
    window._template = Handlebars.compile($("#row").html());;
    $('#add').click(function () {
        try {
            var data = JSON.parse($('#orm_content').val());
        } catch (ex) {
            var data = [];
        }
        data.push({
            id: 'content',
            title: 'Content:',
            tags: [],
        });
        $('#orm_content').val(JSON.stringify(data));
        render();
    });

    $(document).on('click', '.js-remove', function () {
        try {
            var data = JSON.parse($('#orm_content').val());
        } catch (ex) {
            var data = [];
        }
        data.splice($(this).closest('tbody.js-row').data('idx'), 1);
        $('#orm_content').val(JSON.stringify(data));
        render();
    });
    render();
});

function render() {
    $("#content-block-container tbody.js-row").remove();
    var data = $('#orm_content').val() ? JSON.parse($('#orm_content').val()) : [];
    for (var idx in data) {
        var itm = data[idx];
        $("#content-block-container").append(_template({
            tags: window._blockWidgets,
            data: itm,
            idx: idx,
        }));
    }
    $('#content-block-container').sortable({
        items: 'tbody.js-row',
        stop: function(event, ui) {
            assembleform_content();
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

    $('.js-cbi-tags').chosen();

    $('.js-cbi-item').on('keyup', function () {
        assembleform_content();
    });
    $('.js-cbi-tags').on('change', function () {
        assembleform_content();
        render();
    });
    $.each($('#content-block-container td'), function (key, value) {
        $(value).css('width', $(value).outerWidth() + 'px');
    });
};

function assembleform_content() {
    var data = [];
    $.each($('#content-block-container tbody.js-row'), function (idx, itm) {
        data.push({
            id: $(itm).find('.js-cbi-id').val(),
            title: $(itm).find('.js-cbi-title').val(),
            tags: $(itm).find('.js-cbi-tags').val(),
        });
    });
    $('#orm_content').val(JSON.stringify(data));
};