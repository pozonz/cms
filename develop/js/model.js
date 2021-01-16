$(function() {
    window._fieldSource = $("#field-source").html();

    // $('#model_dataType').on('change', function (ev) {
    //     if ($(this).val() == 0) {
    //         $('.js-model-data-group').fadeIn(400, function () {
    //             $('.js-choice_multi_json').chosen({
    //                 allow_single_deselect: true
    //             });
    //         });
    //     } else {
    //         $('.js-model-data-group').hide();
    //     }
    // });
    // if ($('#model_dataType').val() == 0) {
    //     $('.js-model-data-group').fadeIn(400, function () {
    //         $('.js-choice_multi_json').chosen({
    //             allow_single_deselect: true
    //         });
    //     });
    // }

    $('.js-choice_multi_json').chosen({
        allow_single_deselect: true
    });

    $('#model_listType').on('change', function (ev) {
        if ($(this).val() == 1) {
            $('.js-model-pagination-detail').fadeIn();
        } else {
            $('.js-model-pagination-detail').hide();
        }
    });
    if ($(this).val() == 1) {
        $('.js-model-pagination-detail').fadeIn();
    } else {
        $('.js-model-pagination-detail').hide();
    }

    $(document).on('change', '#fields', function (ev) {
        var template = Handlebars.compile(_fieldSource);
        $('#columns').append(template({
            itm: {
                id: 'z' + new Date().getTime(),
                column: $(this).val(),
                widget: $(this).find('option:selected').val().toLowerCase().indexOf('date') === -1 ? '\\Symfony\\Component\\Form\\Extension\\Core\\Type\\TextType' : '\\MillenniumFalcon\\Core\\Form\\Type\\DatePicker',
                label: $(this).find('option:selected').text().toLowerCase().replace('(date) ', '').replace(/\b[a-z]/g, function (letter) {
                    return letter.toUpperCase();
                }) + ':',
                field: $(this).find('option:selected').text().toLowerCase().replace('(date) ', ''),
                required: $(this).val() == 'title' ? 1 : 0,
                unique: $(this).val() == 'title' ? 1 : 0,
                sql: '',
            },
            widgets: _widgets,
        }));

        updateColumns();
        renderFields();
        renderDefaultSortBy();
    });


    renderColumns();
    renderFields();
    renderDefaultSortBy();
    $('#columns select').each(function(key, value) {
        if (
            $(value).val() == '\\Symfony\\Component\\Form\\Extension\\Core\\Type\\ChoiceType'
            || $(value).val() == '\\MillenniumFalcon\\Core\\Form\\Type\\ChoiceMultiJson'
            || $(value).val() == '\\MillenniumFalcon\\Core\\Form\\Type\\ChoiceMultiJsonTree'
            || $(value).val() == '\\MillenniumFalcon\\Core\\Form\\Type\\ChoiceTree'
            || $(value).val() == '\\MillenniumFalcon\\Core\\Form\\Type\\ChoiceSortable'
        ) {
            $('#sql' + $(value).closest('tbody').find('.id').val()).show();
        } else {
            $('#sql' + $(value).closest('tbody').find('.id').val()).hide();
        }
    });
    if (_columns.length == 0) {
        $('#fields').val('title').change();
    }

    //
    $(document).on('change', '#columns input, #columns textarea', function(ev) {
        updateColumns();
        renderDefaultSortBy();
    });

    //
    $(document).on('change', '#columns select', function(ev) {
        if ($(this).val() == '\\Symfony\\Component\\Form\\Extension\\Core\\Type\\ChoiceType'
            || $(this).val() == '\\MillenniumFalcon\\Core\\Form\\Type\\ChoiceMultiJson'
            || $(this).val() == '\\MillenniumFalcon\\Core\\Form\\Type\\ChoiceMultiJsonTree'
            || $(this).val() == '\\MillenniumFalcon\\Core\\Form\\Type\\ChoiceTree'
        ) {
            $('#sql' + $(this).closest('tbody').find('.id').val()).show();
        } else {
            $('#sql' + $(this).closest('tbody').find('.id').val()).hide();
        }
        updateColumns();
    });

    //
    $(document).on('click', '#columns .js-rm-field', function(ev) {
        $(this).closest('tbody').remove();
        updateColumns();
        renderFields();
        renderDefaultSortBy();
        return false;
    });

    $(document).on('change', '.js-choice_multi_json', function() {
        $(this).prev('input').val(JSON.stringify($(this).val()));
    });
});

function renderDefaultSortBy() {
    $('#model_defaultSortBy').empty();
    for (var idx in _columns) {
        var itm = _columns[idx];
        $('#model_defaultSortBy').append('<option value="' + itm.column + '">' + itm.field + '</option>');
    }

    for (var idx in _metas) {
        var itm = _metas[idx];
        $('#model_defaultSortBy').append('<option value="' + itm + '">' + itm + '</option>');
    }

    $('#model_defaultSortBy').val(_defaultSortBy);

};

function renderFields() {
    $('#fields').empty();
    $('#fields').append('<option></option>');
    for (var idx in _fields) {
        var itm = _fields[idx];
        var exist = false;
        for (var idx2 in _columns) {
            var itm2 = _columns[idx2];
            if (itm2.column == itm) {
                exist = true;
            }
        }
        if (!exist) {
            $('#fields').append('<option value="' + itm + '">' + (itm.indexOf('date') != -1 ? '(Date) ' : '') + itm.toLowerCase().replace(/\b[a-z]/g, function (letter) {
                    return letter.toUpperCase();
                }) + '</option>');
        }
    }

    $(".chosen-select").trigger("chosen:updated");
    $(".chosen-select").chosen({
        allow_single_deselect: true
    });
};

function renderColumns() {
    for (var idx in _columns) {
        var itm = _columns[idx];
        var template = Handlebars.compile(_fieldSource);
        $('#columns').append(template({
            itm: itm,
            widgets: _widgets,
        }));
    }
    updateColumns();
};

function updateColumns() {
    _columns = [];

    $.each($('#columns tbody'), function(key, elem) {
        if ( $(elem).find('.id').length > 0) {
            _columns.push({
                id: $(elem).find('.id').val(),
                column: $(elem).find('.col').val(),
                widget: $(elem).find('.wgt').val(),
                label: $(elem).find('.lbl').val(),
                field: $(elem).find('.fld').val(),
                required: $(elem).find('.req').is(':checked') ? 1 : 0,
                unique: $(elem).find('.uni').is(':checked') ? 1 : 0,
                sql: $('#sql' + $(elem).find('.id').val() + ' textarea').val(),
            });
        }
    });


    $('#columns').sortable({
        items: '.js-model-fields',
        stop: function(event, ui) {
            updateColumns();
        },
        placeholder: {
            element: function(currentItem) {
                return $('<tr><td colspan="7" style="background: lightyellow; height: ' + $(currentItem).height() + 'px">&nbsp;</td></tr>')[0];
            },
            update: function(container, p) {
                return;
            }
        }
    });

    $.each($('#columns td'), function (key, value) {
        $(value).css('width', $(value).outerWidth() + 'px');
    });

    $('#model_columnsJson').val(JSON.stringify(_columns));
};