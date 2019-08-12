$(function() {
    $.each($('.js-page-template-widget'), function (idx, itm) {
        $(itm).on('change', 'select', function () {
            var value = $(this).val();
            $(itm).find('.js-template-id').val(value);
            if (value) {
                $(itm).find('.js-template-new').hide();
            } else {
                $(itm).find('.js-template-new').show();
                var templateName = $(itm).find('.js-template-name').val();
                var templateFile = $(itm).find('.js-template-file').val();
                if (templateName && templateFile) {
                    $(itm).find('.js-template-id').val(JSON.stringify({
                        name: templateName,
                        file: templateFile,
                    }));
                }
            }
        });

        $(itm).on('keyup', '.js-template-name, .js-template-file', function () {
            var templateName = $(itm).find('.js-template-name').val();
            var templateFile = $(itm).find('.js-template-file').val();
            if (templateName && templateFile) {
                $(itm).find('.js-template-id').val(JSON.stringify({
                    name: templateName,
                    file: templateFile,
                }));
            }
        });

        var value = $(itm).find('select').val();
        if (!value) {
            $(itm).find('.js-template-new').show();
            var templateName = $(itm).find('.js-template-name').val();
            var templateFile = $(itm).find('.js-template-file').val();
            if (templateName && templateFile) {
                $(itm).find('.js-template-id').val(JSON.stringify({
                    name: templateName,
                    file: templateFile,
                }));
            }
        }
    });

});
