$(function () {
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

        if (!isNaN(lvalue)) {
            lvalue = parseFloat(lvalue, 10);
        }

        if (!isNaN(rvalue)) {
            rvalue = parseFloat(rvalue, 10);
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

    Handlebars.registerHelper('formatMoney', function(n, c, d, t, symbol, options) {
        if (n === '' || n === null) {
            return '';
        }

        var symbol = symbol == undefined ? '' : symbol;
            c = isNaN(c = Math.abs(c)) ? 2 : c,
            d = d == undefined ? "." : d,
            t = t == undefined ? "," : t,
            s = n < 0 ? "-" : "",
            i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
            j = (j = i.length) > 3 ? j % 3 : 0;

        return s + symbol + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
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

    Handlebars.registerHelper('isLessIfSet', function(lvalue, rvalue, options) {
        if (!rvalue) {
            return options.inverse(this);
        }

        if (lvalue <= rvalue) {
            return options.fn(this);
        }

        return options.inverse(this);
    });

    Handlebars.registerHelper('myOptionKey', function(str) {
        var pos = str.indexOf('-');
        return str.substr(0, pos);
    });

    Handlebars.registerHelper('myOptionValue', function(str) {
        var pos = str.indexOf('-');
        return str.substr(parseInt(pos, 10) + 1);
    });

    Handlebars.registerHelper('getByValueAndCompare', function(array, key, value, options) {
        array = array && typeof array == 'object' ? array : [];
        var pos = value.indexOf('-');
        if (pos != -1) {
            value = value.substr(0, pos);
        }
        if (!value) {
            return options.inverse(this);
        }
        if (typeof array[key] == 'object') {
            return array[key] && array[key].indexOf(value) != -1 ? options.fn(this) : options.inverse(this);
        } else {
            return array[key] && array[key] == value ? options.fn(this) : options.inverse(this);
        }
    });

    Handlebars.registerHelper('isNotChoiceType', function(str, options) {
        var choiceTypes = [
            '\\Symfony\\Component\\Form\\Extension\\Core\\Type\\ChoiceType',
            '\\MillenniumFalcon\\FormDescriptor\\Type\\CheckboxesType',
            '\\MillenniumFalcon\\FormDescriptor\\Type\\RadioButtonsType'
        ];

        if (choiceTypes.indexOf(str) === -1) {
            return options.fn(this);
        }

        return options.inverse(this);
    });

    Handlebars.registerHelper('paddingLevel', function(level, options) {
        return 'padding-left: ' + (level * 25) + 'px;'
    });
});
