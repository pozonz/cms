$(function () {
    $(document).on('click', '.js-delete', function(ev) {
        var _this = this;
        swal({
            title: "Are you sure?",
            text: "You will not be able to recover this data!",
            icon: "warning",
            dangerMode: true,
            buttons: {
                cancel: {
                    text: "Cancel",
                    visible: true,
                    closeModal: true,
                },
                confirm: {
                    text: "Delete",
                    closeModal: false
                }
            }
        }).
        then((willDelete) => {
            if (willDelete) {
                $.ajax({
                    type: 'GET',
                    url: '/pz/ajax/delete',
                    data: 'id=' + encodeURIComponent($(_this).data('id')) + '&className=' + encodeURIComponent($(_this).data('classname') ? $(_this).data('classname') : $(_this).closest('tbody').data('classname')),
                    success: function (msg) {
                        swal({
                            title: "Deleted",
                            text: "Your data has been deleted.",
                            icon: 'success',
                            timer: 1000,
                            buttons: false
                        });

                        setTimeout(function () {
                            if ($(_this).closest('.dd-item').length) {
                                if ($(_this).closest('.dd-list').find('.dd-item').length == 1) {
                                    $(_this).closest('.dd-list').remove();
                                } else {
                                    $(_this).closest('.dd-item').remove();
                                }
                            } else {
                                $(_this).closest('.content-container').remove();
                            }
                        }, 800)
                    }
                });
            }
        });
        return false;
    });

    Handlebars.registerHelper('compare', function(lvalue, rvalue, options) {
        if (arguments.length < 3)
            throw new Error("Handlerbars Helper 'compare' needs 2 parameters");

        var operator = options.hash.operator || "==";
        var operators = {
            '==':       function(l,r) { return l == r; },
            '===':      function(l,r) { return l === r; },
            '!=':       function(l,r) { return l != r; },
            '<':        function(l,r) { return l < r; },
            '>':        function(l,r) { return l > r; },
            '<=':       function(l,r) { return l <= r; },
            '>=':       function(l,r) { return l >= r; },
            'typeof':   function(l,r) { return typeof l == r; }
        }

        if (!operators[operator])
            throw new Error("Handlerbars Helper 'compare' doesn't know the operator "+operator);

        var result = operators[operator](lvalue,rvalue);
        if( result ) {
            return options.fn(this);
        } else {
            return options.inverse(this);
        }
    });

    Handlebars.registerHelper('ifNotEmpty', function(array, options) {
        array = array && typeof array == 'object' ? array : [];
        return array.length > 0 ? options.fn(this) : options.inverse(this);
    });

    Handlebars.registerHelper('ifMoreThan1', function(array, options) {
        array = array && typeof array == 'object' ? array : [];
        return array.length > 1 ? options.fn(this) : options.inverse(this);
    });

    Handlebars.registerHelper('ifHasIt', function(array, item, options) {
        array = array && typeof array == 'object' ? array : [];
        return array.indexOf(item) !== -1 ? options.fn(this) : options.inverse(this);
    });

    Handlebars.registerHelper('ifGetByKey', function(array, key, options) {
        array = array && typeof array == 'object' ? array : [];
        return !array[key] ? options.fn(this) : options.inverse(this);
    });

    Handlebars.registerHelper('length', function(array) {
        array = array && typeof array == 'object' ? array : [];
        return array.length;
    });

    Handlebars.registerHelper('getByKey', function(array, key) {
        array = array && typeof array == 'object' ? array : [];
        return array[key];
    });

    Handlebars.registerHelper('getByKey0', function(array, key) {
        array = array && typeof array == 'object' ? array : [];
        return array[key] ? array[key] : 0;
    });

    Handlebars.registerHelper('getByKeyAndCompare', function(array, key, value, options) {
        array = array && typeof array == 'object' ? array : [];
        if (typeof array[key] == 'object') {
            return array[key] && array[key].indexOf(value) != -1 ? options.fn(this) : options.inverse(this);
        } else {
            return array[key] && array[key] == value ? options.fn(this) : options.inverse(this);
        }
    });

    Handlebars.registerHelper('random', function() {
        return Math.random();
    });
});
