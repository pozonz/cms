!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{})["base.crop-image-redactor"]=n({1:function(n,e,a,l,t,o,i){var s=null!=e?e:n.nullContext||{},c=n.hooks.helperMissing,r="function",d=n.escapeExpression,p=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return"                                <option "+(null!=(n=(p(a,"compare")||e&&p(e,"compare")||c).call(s,null!=i[1]?p(i[1],"size"):i[1],null!=e?p(e,"code"):e,{name:"compare",hash:{operator:"=="},fn:n.program(2,t,0,o,i),inverse:n.noop,data:t,loc:{start:{line:13,column:40},end:{line:13,column:99}}}))?n:"")+' value="'+d(typeof(n=null!=(n=p(a,"id")||(null!=e?p(e,"id"):e))?n:c)==r?n.call(s,{name:"id",hash:{},data:t,loc:{start:{line:13,column:107},end:{line:13,column:113}}}):n)+'" data-code="'+d(typeof(n=null!=(n=p(a,"code")||(null!=e?p(e,"code"):e))?n:c)==r?n.call(s,{name:"code",hash:{},data:t,loc:{start:{line:13,column:126},end:{line:13,column:134}}}):n)+'">'+d(typeof(n=null!=(n=p(a,"title")||(null!=e?p(e,"title"):e))?n:c)==r?n.call(s,{name:"title",hash:{},data:t,loc:{start:{line:13,column:136},end:{line:13,column:145}}}):n)+"</option>\n"},2:function(n,e,a,l,t){return"selected"},4:function(n,e,a,l,t){return"checked"},compiler:[8,">= 4.3.0"],main:function(n,e,a,l,t,o,i){var s,c,r=null!=e?e:n.nullContext||{},d=n.hooks.helperMissing,p="function",u=n.escapeExpression,m=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<header id="redactor_modal_header" style="text-align: center;"><h2>Edit image</h2></header>\n<div id="redactor_modal_inner" class="js-crop-container" data-width="'+u(typeof(c=null!=(c=m(a,"width")||(null!=e?m(e,"width"):e))?c:d)==p?c.call(r,{name:"width",hash:{},data:t,loc:{start:{line:2,column:69},end:{line:2,column:78}}}):c)+'" data-height="'+u(typeof(c=null!=(c=m(a,"height")||(null!=e?m(e,"height"):e))?c:d)==p?c.call(r,{name:"height",hash:{},data:t,loc:{start:{line:2,column:93},end:{line:2,column:103}}}):c)+'" data-code="'+u(typeof(c=null!=(c=m(a,"code")||(null!=e?m(e,"code"):e))?c:d)==p?c.call(r,{name:"code",hash:{},data:t,loc:{start:{line:2,column:116},end:{line:2,column:126}}}):c)+'">\n    <table class="image-cropper">\n        <tbody>\n        <tr valign="top">\n            <td>\n                <form action="" class="redactor-modal-area js-redactor-edit-image">\n                    <section class="image-settings">\n                        <label>Choose a size</label>\n                        <select id="redactor_image_size" name="size">\n                            <option>All sizes</option>\n'+(null!=(s=m(a,"each").call(r,null!=e?m(e,"imageSizes"):e,{name:"each",hash:{},fn:n.program(1,t,0,o,i),inverse:n.noop,data:t,loc:{start:{line:12,column:28},end:{line:14,column:37}}}))?s:"")+'                        </select>\n                    </section>\n\n                    <section class="image-settings alt-settings" style="padding-top: 15px;">\n                        <label>Alt</label>\n                        <input type="text" name="alt" value="'+u(typeof(c=null!=(c=m(a,"alt")||(null!=e?m(e,"alt"):e))?c:d)==p?c.call(r,{name:"alt",hash:{},data:t,loc:{start:{line:20,column:61},end:{line:20,column:68}}}):c)+'">\n                    </section>\n\n                    <section class="image-settings caption-settings" style="padding-top: 15px;">\n                        <label>Caption</label>\n                        <input type="text" name="caption" value="'+u(typeof(c=null!=(c=m(a,"caption")||(null!=e?m(e,"caption"):e))?c:d)==p?c.call(r,{name:"caption",hash:{},data:t,loc:{start:{line:25,column:65},end:{line:25,column:76}}}):c)+'">\n                    </section>\n\n                    <section class="image-settings position-settings" style="padding-top: 15px;">\n                        <label>Position</label>\n                        <select id="redactor_image_size" name="align">\n                            <option value="none">None</option>\n                            <option '+(null!=(s=(m(a,"compare")||e&&m(e,"compare")||d).call(r,null!=e?m(e,"align"):e,"left",{name:"compare",hash:{},fn:n.program(2,t,0,o,i),inverse:n.noop,data:t,loc:{start:{line:32,column:36},end:{line:32,column:81}}}))?s:"")+' value="left">Left</option>\n                            <option '+(null!=(s=(m(a,"compare")||e&&m(e,"compare")||d).call(r,null!=e?m(e,"align"):e,"center",{name:"compare",hash:{},fn:n.program(2,t,0,o,i),inverse:n.noop,data:t,loc:{start:{line:33,column:36},end:{line:33,column:83}}}))?s:"")+' value="center">Center</option>\n                            <option '+(null!=(s=(m(a,"compare")||e&&m(e,"compare")||d).call(r,null!=e?m(e,"align"):e,"right",{name:"compare",hash:{},fn:n.program(2,t,0,o,i),inverse:n.noop,data:t,loc:{start:{line:34,column:36},end:{line:34,column:82}}}))?s:"")+' value="right">Right</option>\n                        </select>\n                    </section>\n\n                    <section class="image-settings link-settings" style="padding-top: 15px;">\n                        <label>Link</label>\n                        <input type="text" name="url" value="'+u(typeof(c=null!=(c=m(a,"url")||(null!=e?m(e,"url"):e))?c:d)==p?c.call(r,{name:"url",hash:{},data:t,loc:{start:{line:40,column:61},end:{line:40,column:68}}}):c)+'">\n                    </section>\n\n                    <section class="image-settings link-settings" style="padding-top: 15px;">\n                        <label class="checkbox"><input type="checkbox" name="target" '+(null!=(s=(m(a,"compare")||e&&m(e,"compare")||d).call(r,null!=e?m(e,"target"):e,1,{name:"compare",hash:{},fn:n.program(4,t,0,o,i),inverse:n.noop,data:t,loc:{start:{line:44,column:85},end:{line:44,column:125}}}))?s:"")+'> Open link in a new tab</label>\n                    </section>\n                </form>\n            </td>\n            <td width="750">\n                <table>\n                    <tbody>\n                    <tr>\n                        <td colspan="2">\n                            <div class="presets" id="preset_show">\n                                <div id="preset_crop_custom" class="js-preset-ratio" data-x="0" data-y="0"><span><i></i></span>Custom</div>\n                                <div id="preset_crop_square" class="js-preset-ratio" data-x="1" data-y="1"><span><i></i></span><b>Square</b></div>\n                                <div id="preset_crop_20_9" class="js-preset-ratio" data-x="20" data-y="9"><span><i></i></span><b>20:9</b></div>\n                                <div id="preset_crop_4_3" class="js-preset-ratio" data-x="4" data-y="3"><span><i></i></span><b>4:3</b></div>\n                                <div id="preset_crop_6_4" class="js-preset-ratio" data-x="6" data-y="4"><span><i></i></span><b>6:4</b></div>\n                                <div id="preset_crop_16_9" class="js-preset-ratio" data-x="16" data-y="9"><span><i></i></span><b>16:9</b></div>\n                            </div>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td width="50%" height="350">\n                            <img class="ajax-load" src="/cms/images/ajax-loader.gif">\n                            <div class="crop_area" style="display: none; height: 350px;"><label>Original</label>\n                                <div id="imageSize" class="image-size">'+u(typeof(c=null!=(c=m(a,"width")||(null!=e?m(e,"width"):e))?c:d)==p?c.call(r,{name:"width",hash:{},data:t,loc:{start:{line:67,column:71},end:{line:67,column:80}}}):c)+"x"+u(typeof(c=null!=(c=m(a,"height")||(null!=e?m(e,"height"):e))?c:d)==p?c.call(r,{name:"height",hash:{},data:t,loc:{start:{line:67,column:81},end:{line:67,column:91}}}):c)+'</div>\n                                <img id="image_crop" src="/images/assets/'+u(typeof(c=null!=(c=m(a,"code")||(null!=e?m(e,"code"):e))?c:d)==p?c.call(r,{name:"code",hash:{},data:t,loc:{start:{line:68,column:73},end:{line:68,column:83}}}):c)+'">\n                            </div>\n                        </td>\n                        <td width="50%" height="350">\n                            <div class="crop_area" style="display: none; height: 350px;"><label>Actual preview</label>\n                                <div id="imageSizeCrop" class="image-size"><span class="js-crop-preivew-width"></span>x<span class="js-crop-preivew-height"></span></div>\n                                <img id="previewCrop" src="" style="max-width: 320px; max-height: 350px">\n                            </div>\n                        </td>\n                    </tr>\n                    </tbody>\n                </table>\n            </td>\n        </tr>\n        </tbody>\n    </table>\n    <footer>\n        <a href="#" class="button js-crop-close">Close</a>\n        <input type="button" name="save" class="redactor_modal_btn js-crop-apply" style="background: #82ad1d;" value="Crop">\n        <input type="button" name="save" class="redactor_modal_btn js-redactor-save" style="background: orange;" value="Save">\n    </footer>\n</div>\n'},useData:!0,useDepths:!0})}();