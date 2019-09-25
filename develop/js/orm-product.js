$(function () {
    getVariants();

    $.pjax.defaults.timeout = 30000;
    $(document).on('submit', '#product-vairant form', function (event) {
        event.preventDefault();
        $.pjax.submit(event, {
            scrollTo: false,
            container: '#product-vairant',
            fragment: '#product-vairant',
        });
        $(this).html('Loading...');
        $('.ui-dialog-buttonpane').hide();
    });

    var returnUrl = $('.js-returnUrl').attr('href');
    $(document).on('click', '.js-add-variant', function () {
        initDialog();
        $.pjax.reload({
            url: location.pathname + '?returnUrl=' + encodeURIComponent(returnUrl),
            // url: document.URL,
            container: '#product-vairant',
            fragment: '#product-vairant',
        });
        return false;
    });
    $(document).on('click', '.js-edit-variant', function () {
        initDialog();
        $.pjax.reload({
            url: location.pathname + '?returnUrl=' + encodeURIComponent(returnUrl) + '&variantId=' + $(this).closest('tbody').attr('id'),
            // url: document.URL,
            container: '#product-vairant',
            fragment: '#product-vairant',
        });
        return false;
    });

    $('#product-vairant').on('pjax:complete', function () {
        $('.ui-dialog-buttonpane').show();
        if ($(this).find('.js-submitted').length) {
            $(".ui-dialog-content").dialog("close");
            getVariants();
        }
    });
});

function initDialog() {
    $('#product-vairant').html('Loading...')
    $('.ui-dialog-buttonpane').hide();

    $('#product-vairant').dialog({
        title: 'Adding a variant...',
        resizable: false,
        draggable: false,
        modal: true,
        dialogClass: 'confirmation',
        buttons: [
            {
                class: 'bg-blue',
                text: 'Save', click: function () {
                    $('#product-vairant').find('form').submit();
                }
            },
            {
                text: "Cancel", click: function () {
                    $(this).dialog("close");
                }
            },
        ]
    });
};

function getVariants() {
    $('.js-product-variants-table').find('tbody').remove();
    $('.js-product-variants-table').append('<tbody><tr class="column"><td colspan="7">Loading...</td></tr></tbody>');

    var productVariantListItem = Handlebars.compile($('#product-variant-list-item').html());

    $.ajax({
        type: 'GET',
        url: '/manage/rest/product-variants',
        data: 'productUniqid=' + $('#orm_uniqid').val(),
        success: function (data) {
            $('.js-product-variants-table').find('tbody').remove();
            for (var idx in data) {
                var itm = data[idx];
                $('.js-product-variants-table').append(productVariantListItem({
                    itm: itm,
                }));
            }

            if (data.length == 0) {
                $('.js-product-variants-table').append('<tbody><tr class="column"><td colspan="7">No results found</td></tr></tbody>');
            } else {
                //Setup sortable table
                $.each($('.js-product-variants-table').find('td'), function (key, val) {
                    $(val).css('width', $(val).outerWidth() + 'px');
                });
                $('.js-product-variants-table').sortable({
                    items: '> tbody',
                    stop: function (event, ui) {
                        $.ajax({
                            type: 'GET',
                            url: '/manage/rest/column/sort',
                            data: 'data=' + encodeURIComponent(JSON.stringify($('.js-product-variants-table').sortable("toArray"))) + '&className=ProductVariant',
                            success: function (msg) {
                            }
                        });
                    }
                });
            }
        }
    });
};