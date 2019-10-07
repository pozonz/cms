$(function() {

    //closed
    $(document).on('click', '.js-update-category', function () {
        $.ajax({
            type: 'GET',
            url: '/manage/rest/product-categories',
            success : function(msg) {
                location.reload();
            }
        });
    });

});

