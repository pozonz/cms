$(function() {

    //closed
    $(document).on('click', '.js-update-category', function () {
        var container = $('<div>').html('<h3>It will take a while, please wait...</h3>').appendTo('body');
        container.dialog({
            title: 'Updating',
            resizable: false,
            draggable: false,
            modal: true,
            dialogClass: 'confirmation',
        });

        $.ajax({
            type: 'GET',
            url: '/manage/rest/product-categories',
            success : function(msg) {
                location.reload();
            }
        });
    });

});

