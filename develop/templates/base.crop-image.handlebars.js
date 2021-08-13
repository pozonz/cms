!function(){var e=Handlebars.template;(Handlebars.templates=Handlebars.templates||{})["base.crop-image"]=e({1:function(e,a,n,l,t,i,s){var o=null!=a?a:e.nullContext||{},d=e.hooks.helperMissing,c="function",r=e.escapeExpression,p=e.lookupProperty||function(e,a){if(Object.prototype.hasOwnProperty.call(e,a))return e[a]};return"                            <option "+(null!=(e=(p(n,"compare")||a&&p(a,"compare")||d).call(o,null!=s[1]?p(s[1],"size"):s[1],null!=a?p(a,"code"):a,{name:"compare",hash:{operator:"=="},fn:e.program(2,t,0,i,s),inverse:e.noop,data:t,loc:{start:{line:12,column:36},end:{line:12,column:95}}}))?e:"")+' value="'+r(typeof(e=null!=(e=p(n,"id")||(null!=a?p(a,"id"):a))?e:d)==c?e.call(o,{name:"id",hash:{},data:t,loc:{start:{line:12,column:103},end:{line:12,column:109}}}):e)+'" data-code="'+r(typeof(e=null!=(e=p(n,"code")||(null!=a?p(a,"code"):a))?e:d)==c?e.call(o,{name:"code",hash:{},data:t,loc:{start:{line:12,column:122},end:{line:12,column:130}}}):e)+'">'+r(typeof(e=null!=(e=p(n,"title")||(null!=a?p(a,"title"):a))?e:d)==c?e.call(o,{name:"title",hash:{},data:t,loc:{start:{line:12,column:132},end:{line:12,column:141}}}):e)+"</option>\n"},2:function(e,a,n,l,t){return"selected"},compiler:[8,">= 4.3.0"],main:function(e,a,n,l,t,i,s){var o,d=null!=a?a:e.nullContext||{},c=e.hooks.helperMissing,r="function",p=e.escapeExpression,h=e.lookupProperty||function(e,a){if(Object.prototype.hasOwnProperty.call(e,a))return e[a]};return'<header id="redactor_modal_header" style="text-align: center;"><h2>Crop image</h2></header>\n<div id="redactor_modal_inner" class="js-crop-container" data-width="'+p(typeof(o=null!=(o=h(n,"width")||(null!=a?h(a,"width"):a))?o:c)==r?o.call(d,{name:"width",hash:{},data:t,loc:{start:{line:2,column:69},end:{line:2,column:78}}}):o)+'" data-height="'+p(typeof(o=null!=(o=h(n,"height")||(null!=a?h(a,"height"):a))?o:c)==r?o.call(d,{name:"height",hash:{},data:t,loc:{start:{line:2,column:93},end:{line:2,column:103}}}):o)+'" data-code="'+p(typeof(o=null!=(o=h(n,"code")||(null!=a?h(a,"code"):a))?o:c)==r?o.call(d,{name:"code",hash:{},data:t,loc:{start:{line:2,column:116},end:{line:2,column:126}}}):o)+'">\n    <table class="image-cropper">\n        <tbody>\n        <tr valign="top">\n            <td>\n                <section class="image-settings">\n                    <label>Choose a size</label>\n                    <select id="redactor_image_size">\n                        <option>All sizes</option>\n'+(null!=(e=h(n,"each").call(d,null!=a?h(a,"imageSizes"):a,{name:"each",hash:{},fn:e.program(1,t,0,i,s),inverse:e.noop,data:t,loc:{start:{line:11,column:24},end:{line:13,column:33}}}))?e:"")+'                    </select>\n                </section>\n            </td>\n            <td width="750">\n                <table>\n                    <tbody>\n                    <tr>\n                        <td colspan="2">\n                            <div class="presets" id="preset_show">\n                                <div id="preset_crop_custom" class="js-preset-ratio" data-x="0" data-y="0"><span><i></i></span>Custom</div>\n                                <div id="preset_crop_square" class="js-preset-ratio" data-x="1" data-y="1"><span><i></i></span><b>Square</b></div>\n                                <div id="preset_crop_20_9" class="js-preset-ratio" data-x="20" data-y="9"><span><i></i></span><b>20:9</b></div>\n                                <div id="preset_crop_4_3" class="js-preset-ratio" data-x="4" data-y="3"><span><i></i></span><b>4:3</b></div>\n                                <div id="preset_crop_6_4" class="js-preset-ratio" data-x="6" data-y="4"><span><i></i></span><b>6:4</b></div>\n                                <div id="preset_crop_16_9" class="js-preset-ratio" data-x="16" data-y="9"><span><i></i></span><b>16:9</b></div>\n                            </div>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td width="50%" height="350">\n                            <img class="ajax-load" src="/cms/images/ajax-loader.gif">\n                            <div class="crop_area" style="display: none; height: 350px;"><label>Original</label>\n                                <div id="imageSize" class="image-size">'+p(typeof(o=null!=(o=h(n,"width")||(null!=a?h(a,"width"):a))?o:c)==r?o.call(d,{name:"width",hash:{},data:t,loc:{start:{line:36,column:71},end:{line:36,column:80}}}):o)+"x"+p(typeof(o=null!=(o=h(n,"height")||(null!=a?h(a,"height"):a))?o:c)==r?o.call(d,{name:"height",hash:{},data:t,loc:{start:{line:36,column:81},end:{line:36,column:91}}}):o)+'</div>\n                                <img id="image_crop" src="/images/assets/'+p(typeof(o=null!=(o=h(n,"code")||(null!=a?h(a,"code"):a))?o:c)==r?o.call(d,{name:"code",hash:{},data:t,loc:{start:{line:37,column:73},end:{line:37,column:83}}}):o)+'">\n                            </div>\n                        </td>\n                        <td width="50%" height="350">\n                            <div class="crop_area" style="display: none; height: 350px;"><label>Actual preview</label>\n                                <div id="imageSizeCrop" class="image-size"><span class="js-crop-preivew-width"></span>x<span class="js-crop-preivew-height"></span></div>\n                                <img id="previewCrop" src="" style="max-width: 320px; max-height: 350px">\n                            </div>\n                        </td>\n                    </tr>\n                    </tbody>\n                </table>\n            </td>\n        </tr>\n        </tbody>\n    </table>\n    <footer>\n        <a href="#" class="button js-crop-close">Close</a>\n        <input type="button" name="save" class="redactor_modal_btn js-crop-apply" style="background: #82ad1d;" value="Crop">\n    </footer>\n</div>\n'},useData:!0,useDepths:!0})}();