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

    $(document).on('change', '#orm_type', function (ev) {
        setByPageType();
    });
    setByPageType();
});

function setByPageType() {
    if ($('#orm_type').val() == 2) {
        $.each($('.formStyle '), function (idx, itm) {
            if (idx > 3) {
                $(itm).hide();
            } else {
                $(itm).show();
            }
        });
        $('.js-article-version-list').hide();
        // $('.sidebarorm_content').hide();
        $('.js-orm-preview').hide();
        $('.js-orm-draft').hide();
        $('.sidebarorm_content').find('.panel-heading').hide();
        $('.sidebarorm_content').find('.panel-body').hide();
        // $('.js-version-container').hide();
        $('hr').hide();

        $('#orm_redirectTo').closest('.formStyle').show();
    } else {
        $.each($('.formStyle '), function (idx, itm) {
            $(itm).show();
        });
        $('.js-article-version-list').show();
        // $('.sidebarorm_content').show();
        $('.js-orm-preview').show();
        $('.js-orm-draft').show();
        $('.sidebarorm_content').find('.panel-heading').show();
        $('.sidebarorm_content').find('.panel-body').show();
        // $('.js-version-container').show();
        $('hr').show();

        $('#orm_redirectTo').closest('.formStyle').hide();
    }
};