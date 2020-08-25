$(function() {
    window.formFieldsId = 'orm_formFields';
    window._formbuilder = $("#formbuilder-source").html();

    $(document).on('keydown', '#' + window.formFieldsId + '_formbuilder .form-control', function(ev) {
        if(ev.keyCode == 13) {
            ev.preventDefault();
            return false;
        }
    });

    $(document).on('keyup', '#' + window.formFieldsId + '_formbuilder .form-control', function(ev) {
        assemble();
    });

    //Add field
    $(document).on('change', '#' + window.formFieldsId + '_add', function(ev) {
        var json = JSON.parse($('#' + window.formFieldsId).val() ? $('#' + window.formFieldsId).val() : '[]');
        var itm = {
            widget: $(this).val(),
            label: 'Title:',
            id: 'id',
            required: 0,
            sql: '',
            errorMessage: '',
            optionType: 1,
            options: [],
        };
        json.push(itm);
        $('#' + window.formFieldsId).val(JSON.stringify(json));
        repaint_add(itm, json.length - 1);
        setUpSortable();
    });

    //Delete field
    $(document).on('click', '#' + window.formFieldsId + '_formbuilder .js-formbuilderfield-delete', function(ev) {
        var idx = $(this).closest('tbody.js-row').data('idx');
        var json = JSON.parse($('#' + window.formFieldsId).val() ? $('#' + window.formFieldsId).val() : '[]');
        json.splice(idx, 1);
        $('#' + window.formFieldsId).val(JSON.stringify(json));
        repaint();
        return false;
    });

    //Change whether the field is mandatory
    $(document).on('change', '#' + window.formFieldsId + '_formbuilder .js-req', function(ev) {
        var idx = $(this).closest('tbody.js-row').data('idx');
        var json = JSON.parse($('#' + window.formFieldsId).val() ? $('#' + window.formFieldsId).val() : '[]');
        json[idx].required = $(this).is(':checked');
        $('#' + window.formFieldsId).val(JSON.stringify(json));
        repaint_update(json[idx], idx);
        setUpSortable();
        return false;
    });

    //Change widget type
    $(document).on('change', '#' + window.formFieldsId + '_formbuilder .wgt', function(ev) {
        var idx = $(this).closest('tbody.js-row').data('idx');
        var json = JSON.parse($('#' + window.formFieldsId).val() ? $('#' + window.formFieldsId).val() : '[]');
        json[idx].widget = $(this).val();
        $('#' + window.formFieldsId).val(JSON.stringify(json));
        repaint_update(json[idx], idx);
        setUpSortable();
        return false;
    });

    //Change choice option type
    $(document).on('change', '#' + window.formFieldsId + '_formbuilder .js-optiontype', function(ev) {
        var idx = $(this).closest('tbody.js-row').data('idx');
        var json = JSON.parse($('#' + window.formFieldsId).val() ? $('#' + window.formFieldsId).val() : '[]');
        json[idx].optionType = $(this).val() == 1 && $(this).is(':checked') ? 1 : 2;
        $('#' + window.formFieldsId).val(JSON.stringify(json));
        repaint_update(json[idx], idx);
        setUpSortable();
        return false;
    });

    //Delete an choice option
    $(document).on('click', '#' + window.formFieldsId + '_formbuilder .js-option-remove', function(ev) {
        var idx = $(this).closest('tbody.js-row').data('idx');
        var json = JSON.parse($('#' + window.formFieldsId).val() ? $('#' + window.formFieldsId).val() : '[]');
        json[idx].options.splice($(this).data('optidx'), 1);
        $('#' + window.formFieldsId).val(JSON.stringify(json));
        repaint_update(json[idx], idx);
        setUpSortable();
        return false;
    });

    //Add choice choice option
    $(document).on('click', '#' + window.formFieldsId + '_formbuilder .js-option-add', function(ev) {
        var idx = $(this).closest('tbody.js-row').data('idx');
        var json = JSON.parse($('#' + window.formFieldsId).val() ? $('#' + window.formFieldsId).val() : '[]');
        json[idx].options.push({
            key: '',
            val: '',
        });
        $('#' + window.formFieldsId).val(JSON.stringify(json));
        repaint_update(json[idx], idx);
        setUpSortable();
        return false;
    });

    repaint();
});

function repaint() {
    $('#' + window.formFieldsId + '_formbuilder').find('tbody').remove();
    var json = JSON.parse($('#' + window.formFieldsId).val() ? $('#' + window.formFieldsId).val() : '[]');
    for (var idx in json) {
        var itm = json[idx];
        //Fix old data model
        if (!itm.errorMessage) {
            itm.errorMessage = '';
        }
        if (!itm.optionType) {
            itm.optionType = 1;
        }
        if (!itm.options) {
            itm.options = [];
        }
        repaint_add(itm, idx);
    }
    $('#' + window.formFieldsId).val(JSON.stringify(json));
    setUpSortable();
};

function repaint_add(itm, idx) {
    var template = Handlebars.compile(window._formbuilder);
    $('#' + window.formFieldsId + '_formbuilder').append(template({
        widgets: window._formWidgets,
        itm: itm,
        idx: idx,
    }));
    $.each($('#' + window.formFieldsId + '_formbuilder td'), function (key, value) {
        $(value).css('width', $(value).outerWidth() + 'px');
    });
    $('#' + window.formFieldsId + '_add').val('');
    $('#' + window.formFieldsId + '_add').trigger("chosen:updated");
    $('#' + window.formFieldsId + '_formbuilder .wgt').chosen({
        allow_single_deselect: true
    });
};

function repaint_update(itm, idx) {
    var template = Handlebars.compile(window._formbuilder);
    $('#' + window.formFieldsId + '_formbuilder').find('.js-row-' + idx).replaceWith(template({
        widgets: window._formWidgets,
        itm: itm,
        idx: idx,
    }));
    $.each($('#' + window.formFieldsId + '_formbuilder td'), function (key, value) {
        $(value).css('width', $(value).outerWidth() + 'px');
    });
    $('#' + window.formFieldsId + '_formbuilder .wgt').chosen({
        allow_single_deselect: true
    });
};

function assemble() {
    var json = [];
    $.each($('#' + window.formFieldsId + '_formbuilder tbody'), function(key, value) {
        var f = {
            widget: $(value).find('.wgt').val(),
            label: $(value).find('.lbl').val(),
            id: $(value).find('.id').val(),
            required: $(value).find('.req').is(':checked') ? 1 : 0,
            sql: $(value).find('.sql').val(),
            errorMessage: $(value).find('.js-error-message').val(),
            optionType: $(value).find('.optiontype:checked').val(),
            options: [],
        };
        $.each($(value).find('.js-custom-option'), function (optIdx, optVal) {
            f.options.push({
                key: $(optVal).find('.js-option-key').val(),
                val: $(optVal).find('.js-option-val').val(),
            })
        });
        json.push(f);
    });
    $('#' + window.formFieldsId).val(JSON.stringify(json));
};

function setUpSortable() {
    $('#' + window.formFieldsId + '_formbuilder').sortable({
        items: 'tbody',
        stop: function(event, ui) {
            assemble();
            repaint();
        },
        placeholder: {
            element: function(currentItem) {
                return $('<tr><td colspan="5" style="background: lightyellow; height: ' + $(currentItem).height() + 'px">&nbsp;</td></tr>')[0];
            },
            update: function(container, p) {
                return;
            }
        }
    });
};