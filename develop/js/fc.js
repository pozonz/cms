"use strict";
var fc = {}

fc = {
    init: function (options = {}) {
        window._fcCallback = null;

        //Setup image crop
        var template_crop_image = Handlebars.compile($('#crop-image').html());
        $(document).on('click', '.js-cropping-options', function () {
            var ormInfo = $(this).closest('.js-orm-info');
            $('#crop-image-modal').html(template_crop_image({
                code: ormInfo.data('code'),
                width: ormInfo.data('width'),
                height: ormInfo.data('height'),
                imageSizes: window._imageSizes,
                size: null,
            }));
            fc.setUpCropModal();
            return false;
        });
    },

    setUpCropModal: function () {
        $('.js-preset-ratio').click(function (e) {
            var x = $(this).data('x');
            var y = $(this).data('y');
            var width = $(this).closest('.js-crop-container').data('width');
            var height = $(this).closest('.js-crop-container').data('height');

            if (x != 0 && y != 0) {
                var ratio = x / y;
                window._jcrop_api.setOptions({
                    aspectRatio: ratio,
                });

                var w = ratio * height;
                var h = (1 / ratio) * width;

                window._jcrop_api.animateTo([0, 0, Math.min(w, width), Math.min(h, height)]);
            } else {
                window._jcrop_api.setOptions({
                    aspectRatio: 0,
                });

                window._jcrop_api.animateTo([0, 0, width, height]);
            }

            return false;
        });

        $('.js-crop-close').click(function () {
            $.fancybox.close();
        });

        $('.js-crop-apply, .js-crop-apply-close').click(function () {
            var width = $(this).closest('.js-crop-container').data('width');
            var height = $(this).closest('.js-crop-container').data('height');
            var assetId = $(this).closest('.js-crop-container').data('code');

            var _this = this;
            var select = window._jcrop_api.tellSelect();
            if (select) {
                var x = Math.max(0, parseInt(select.x, 10));
                var y = Math.max(0, parseInt(select.y, 10))
                var width = Math.min(width, parseInt(select.w, 10));
                var height = Math.min(height, parseInt(select.h, 10));

                var data = 'x=' + x;
                data += '&y=' + y;
                data += '&width=' + width;
                data += '&height=' + height;
                data += '&assetId=' + assetId;
                data += '&assetSizeId=' + $('#redactor_image_size').val();
                $.ajax({
                    type: 'GET',
                    url: '/manage/rest/asset/file/crop',
                    data: data,
                    success: function (msg) {
                        fc.setCropPreview();
                        if ($(_this).hasClass('js-crop-apply-close')) {
                            if (window._fcCallback) {
                                window._fcCallback();
                            }
                            $.fancybox.close();
                        }
                    }
                });
            }
        });

        $('#redactor_image_size').change(function () {
            fc.setCropPreview();
        });

        $.fancybox.open({
            href: '#crop-image-modal',
            type: 'inline',
            afterShow: function () {
                $('#image_crop').Jcrop({
                    boxWidth: 320,
                    boxHeight: 300,
                }, function () {
                    window._jcrop_api = this;
                    fc.setCropPreview();
                });
            },
            beforeClose: function () {
                if (window._fcCallback) {
                    window._fcCallback();
                }
            }
        });

        setTimeout(function () {
            $('#crop-image-modal').find('.crop_area').show();
            $('#crop-image-modal').find('.ajax-load').hide();
            $.fancybox.update();
        }, 2000);
    },

    setCropPreview: function () {
        var assetCode = $('.js-crop-container').data('code');
        var sizeCode = $('#redactor_image_size option:selected').data('code');
        $('#previewCrop').attr('src', '/images/assets/' + assetCode + (sizeCode ? '/' + sizeCode : '/1') + '?v=' + Math.random());

        $('#imageSizeCrop').find('.js-crop-preivew-width').html('...');
        $('#imageSizeCrop').find('.js-crop-preivew-height').html('...');

        var timeOuts = [1000, 2000, 5000, 8000, 10000, 15000, 20000];
        for (var idx in timeOuts) {
            var itm = timeOuts[idx];
            setTimeout(function () {
                var width = $('#previewCrop')[0].naturalWidth;
                var height = $('#previewCrop')[0].naturalHeight;
                $('#imageSizeCrop').find('.js-crop-preivew-width').html( width != 0 ? width : '...');
                $('#imageSizeCrop').find('.js-crop-preivew-height').html(height != 0 ? height : '...');
            }, itm);
        }
    },
};
window.fc = fc;