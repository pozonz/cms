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

    var productUniqid = $('#orm_uniqid').val();
    $(document).on('click', '.js-add-variant', function () {
        $.fancybox.open({
            href: '/manage/orms/ProductVariant/new?fragment=1&productUniqid=' + productUniqid,
            type: 'iframe',
            width: 1200,
            beforeShow: function(){
                $(".fancybox-skin").css("background-color", "white");
            },
            beforeClose: function(){
                getVariants();
            }
        });
        return false;
    });
    $(document).on('click', '.js-edit-variant', function () {
        var ormInfo = $(this).closest('.js-orm-info');
        $.fancybox.open({
            href: '/manage/orms/ProductVariant/' + $(ormInfo).attr('id') + '?fragment=1',
            type: 'iframe',
            width: 1200,
            beforeShow: function(){
                $(".fancybox-skin").css("background-color", "white");
            },
            beforeClose: function(){
                getVariants();
            }
        });
        return false;
    });

    $(document).on('click', '.js-copy-variant', function () {
        var ormInfo = $(this).closest('.js-orm-info');
        $.fancybox.open({
            href: '/manage/orms/ProductVariant/copy/' + $(ormInfo).attr('id') + '?fragment=1',
            type: 'iframe',
            width: 1200,
            beforeShow: function(){
                $(".fancybox-skin").css("background-color", "white");
            },
            beforeClose: function(){
                getVariants();
            }
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

function getVariants() {
    $('.js-product-variants-table').find('tbody').remove();
    $('.js-product-variants-table').append('<tbody><tr class="column"><td colspan="8"><img src="/cms/images/spinner.gif"></td></tr></tbody>');

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
                $('.js-product-variants-table').append('<tbody><tr class="column"><td colspan="8" class="no-result">No product variants created</td></tr></tbody>');
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