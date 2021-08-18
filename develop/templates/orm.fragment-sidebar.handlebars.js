!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{})["orm.fragment-sidebar"]=n({1:function(n,e,l,t,a){return'checked=""'},3:function(n,e,l,t,a){return'                    <a class="page-overview__preview link js-orm-preview" href="#">\n                        <i class="icon icon--preview icon--l"></i><span class="button-label">Preview</span>\n                    </a>\n'},5:function(n,e,l,t,a){return"                        Current version\n"},7:function(n,e,l,t,a){var o=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return null!=(a=(o(l,"compare")||e&&o(e,"compare")||n.hooks.helperMissing).call(null!=e?e:n.nullContext||{},null!=e?o(e,"isDraft"):e,1,{name:"compare",hash:{operator:"=="},fn:n.program(8,a,0),inverse:n.noop,data:a,loc:{start:{line:31,column:24},end:{line:33,column:36}}}))?a:""},8:function(n,e,l,t,a){return"                            Draft\n"},10:function(n,e,l,t,a){var o=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return null!=(a=(o(l,"compare")||e&&o(e,"compare")||n.hooks.helperMissing).call(null!=e?e:n.nullContext||{},null!=e?o(e,"isDraft"):e,1,{name:"compare",hash:{operator:"!="},fn:n.program(11,a,0),inverse:n.noop,data:a,loc:{start:{line:37,column:24},end:{line:39,column:36}}}))?a:""},11:function(n,e,l,t,a){return"                            Revision\n"},13:function(n,e,l,t,a){return"active"},15:function(n,e,l,t,a,o,r){var i=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'                            <li class="article-version-list__item">\n                                <h2 class="article-version-list__cat">Drafts</h2>\n'+(null!=(e=i(l,"each").call(null!=e?e:n.nullContext||{},null!=(e=null!=e?i(e,"history"):e)?i(e,"drafts"):e,{name:"each",hash:{},fn:n.program(16,a,0,o,r),inverse:n.noop,data:a,loc:{start:{line:59,column:32},end:{line:69,column:41}}}))?e:"")+"                            </li>\n"},16:function(n,e,l,t,a,o,r){var i=null!=e?e:n.nullContext||{},s=n.hooks.helperMissing,c="function",u=n.escapeExpression,m=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'                                   <div class="article-version-link-item">\n                                        <a class="article-version-link article-version-link--draft '+(null!=(n=(m(l,"compare")||e&&m(e,"compare")||s).call(i,null!=e?m(e,"deleteId"):e,null!=r[1]?m(r[1],"versionOrmId"):r[1],{name:"compare",hash:{operator:"=="},fn:n.program(13,a,0,o,r),inverse:n.noop,data:a,loc:{start:{line:61,column:99},end:{line:61,column:169}}}))?n:"")+'" href="'+u(typeof(n=null!=(n=m(l,"url")||(null!=e?m(e,"url"):e))?n:s)==c?n.call(i,{name:"url",hash:{},data:a,loc:{start:{line:61,column:177},end:{line:61,column:186}}}):n)+'">\n                                            '+u(typeof(n=null!=(n=m(l,"datetime")||(null!=e?m(e,"datetime"):e))?n:s)==c?n.call(i,{name:"datetime",hash:{},data:a,loc:{start:{line:62,column:44},end:{line:62,column:58}}}):n)+'\n                                            <div class="article-version-link__name">'+u(typeof(n=null!=(n=m(l,"author")||(null!=e?m(e,"author"):e))?n:s)==c?n.call(i,{name:"author",hash:{},data:a,loc:{start:{line:63,column:84},end:{line:63,column:96}}}):n)+'</div>\n                                        </a>\n                                        <button class="js-delete-version icon article-version-link__remove" data-classname="'+u(typeof(n=null!=(n=m(l,"deleteClass")||(null!=e?m(e,"deleteClass"):e))?n:s)==c?n.call(i,{name:"deleteClass",hash:{},data:a,loc:{start:{line:65,column:124},end:{line:65,column:140}}}):n)+'" data-id="'+u(typeof(n=null!=(n=m(l,"deleteId")||(null!=e?m(e,"deleteId"):e))?n:s)==c?n.call(i,{name:"deleteId",hash:{},data:a,loc:{start:{line:65,column:151},end:{line:65,column:165}}}):n)+'" title="Remove this">\n                                            <span class="visuallyhidden">Remove</span>\n                                        </button>\n                                    </div>\n'},18:function(n,e,l,t,a,o,r){var i=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'                            <li class="article-version-list__item">\n                                <h2 class="article-version-list__cat">Recent</h2>\n'+(null!=(e=i(l,"each").call(null!=e?e:n.nullContext||{},null!=(e=null!=e?i(e,"history"):e)?i(e,"versions"):e,{name:"each",hash:{},fn:n.program(19,a,0,o,r),inverse:n.noop,data:a,loc:{start:{line:76,column:32},end:{line:86,column:41}}}))?e:"")+"                            </li>\n"},19:function(n,e,l,t,a,o,r){var i=null!=e?e:n.nullContext||{},s=n.hooks.helperMissing,c="function",u=n.escapeExpression,m=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'                                   <div class="article-version-link-item">\n                                        <a class="article-version-link article-version-link--revision '+(null!=(n=(m(l,"compare")||e&&m(e,"compare")||s).call(i,null!=e?m(e,"deleteId"):e,null!=r[1]?m(r[1],"versionOrmId"):r[1],{name:"compare",hash:{operator:"=="},fn:n.program(13,a,0,o,r),inverse:n.noop,data:a,loc:{start:{line:78,column:102},end:{line:78,column:172}}}))?n:"")+'" href="'+u(typeof(n=null!=(n=m(l,"url")||(null!=e?m(e,"url"):e))?n:s)==c?n.call(i,{name:"url",hash:{},data:a,loc:{start:{line:78,column:180},end:{line:78,column:189}}}):n)+'">\n                                            '+u(typeof(n=null!=(n=m(l,"datetime")||(null!=e?m(e,"datetime"):e))?n:s)==c?n.call(i,{name:"datetime",hash:{},data:a,loc:{start:{line:79,column:44},end:{line:79,column:58}}}):n)+'\n                                            <div class="article-version-link__name">'+u(typeof(n=null!=(n=m(l,"author")||(null!=e?m(e,"author"):e))?n:s)==c?n.call(i,{name:"author",hash:{},data:a,loc:{start:{line:80,column:84},end:{line:80,column:96}}}):n)+'</div>\n                                        </a>\n                                        <button class="js-delete-version icon article-version-link__remove" data-classname="'+u(typeof(n=null!=(n=m(l,"deleteClass")||(null!=e?m(e,"deleteClass"):e))?n:s)==c?n.call(i,{name:"deleteClass",hash:{},data:a,loc:{start:{line:82,column:124},end:{line:82,column:140}}}):n)+'" data-id="'+u(typeof(n=null!=(n=m(l,"deleteId")||(null!=e?m(e,"deleteId"):e))?n:s)==c?n.call(i,{name:"deleteId",hash:{},data:a,loc:{start:{line:82,column:151},end:{line:82,column:165}}}):n)+'" title="Remove this">\n                                            <span class="visuallyhidden">Remove</span>\n                                        </button>\n                                    </div>\n'},21:function(n,e,l,t,a){var o=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return null!=(a=(o(l,"compare")||e&&o(e,"compare")||n.hooks.helperMissing).call(null!=e?e:n.nullContext||{},null!=e?o(e,"isDraft"):e,1,{name:"compare",hash:{operator:"=="},fn:n.program(22,a,0),inverse:n.noop,data:a,loc:{start:{line:184,column:20},end:{line:189,column:32}}}))?a:""},22:function(n,e,l,t,a){var o=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'                        <button class="button button--article-state button--article-draft update" type="button">Save draft</button>\n                        <button class="button button--article-state button--article-publish restore" type="button">Publish draft</button>\n                        \x3c!-- <button class="button--article-link button--article-link--delete" type="button"><i class="button--article-link--delete__icon"></i>Delete draft</a> --\x3e\n                        <a class="button--article-link" href="'+n.escapeExpression("function"==typeof(o=null!=(o=o(l,"cancelVersionRestoreUrl")||(null!=e?o(e,"cancelVersionRestoreUrl"):e))?o:n.hooks.helperMissing)?o.call(null!=e?e:n.nullContext||{},{name:"cancelVersionRestoreUrl",hash:{},data:a,loc:{start:{line:188,column:62},end:{line:188,column:91}}}):o)+'">Return to current</a>\n'},24:function(n,e,l,t,a){var o,r=null!=e?e:n.nullContext||{},i=n.hooks.helperMissing,s=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'                    <button class="button button--article-state button--article-publish js-orm-apply" type="button" value="Apply">Save</button>\n'+(null!=(o=(s(l,"compare")||e&&s(e,"compare")||i).call(r,null!=e?s(e,"canBePreviewed"):e,1,{name:"compare",hash:{operator:"=="},fn:n.program(25,a,0),inverse:n.noop,data:a,loc:{start:{line:195,column:20},end:{line:199,column:32}}}))?o:"")+"                    \x3c!--\n"+(null!=(o=(s(l,"compare")||e&&s(e,"compare")||i).call(r,null!=e?s(e,"returnUrl"):e,"",{name:"compare",hash:{operator:"!="},fn:n.program(28,a,0),inverse:n.noop,data:a,loc:{start:{line:201,column:20},end:{line:203,column:32}}}))?o:"")+"                    --\x3e\n"},25:function(n,e,l,t,a){var o=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return null!=(a=(o(l,"compare")||e&&o(e,"compare")||n.hooks.helperMissing).call(null!=e?e:n.nullContext||{},null!=e?o(e,"isNew"):e,1,{name:"compare",hash:{operator:"!="},fn:n.program(26,a,0),inverse:n.noop,data:a,loc:{start:{line:196,column:24},end:{line:198,column:36}}}))?a:""},26:function(n,e,l,t,a){return'                            <button class="button--article-link js-orm-draft" type="button">Save as new draft version</button>\n'},28:function(n,e,l,t,a){var o=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'                        <a class="button--article-link" href="'+n.escapeExpression("function"==typeof(o=null!=(o=o(l,"returnUrl")||(null!=e?o(e,"returnUrl"):e))?o:n.hooks.helperMissing)?o.call(null!=e?e:n.nullContext||{},{name:"returnUrl",hash:{},data:a,loc:{start:{line:202,column:62},end:{line:202,column:77}}}):o)+'">Cancel</a>\n'},30:function(n,e,l,t,a){var o=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return null!=(a=(o(l,"compare")||e&&o(e,"compare")||n.hooks.helperMissing).call(null!=e?e:n.nullContext||{},null!=e?o(e,"isDraft"):e,1,{name:"compare",hash:{operator:"!="},fn:n.program(31,a,0),inverse:n.noop,data:a,loc:{start:{line:209,column:20},end:{line:212,column:32}}}))?a:""},31:function(n,e,l,t,a){var o=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'                        <button class="button button--article-state button--article-publish restore" type="button">Restore</button>\n                        <a class="button--article-link" href="'+n.escapeExpression("function"==typeof(o=null!=(o=o(l,"cancelVersionRestoreUrl")||(null!=e?o(e,"cancelVersionRestoreUrl"):e))?o:n.hooks.helperMissing)?o.call(null!=e?e:n.nullContext||{},{name:"cancelVersionRestoreUrl",hash:{},data:a,loc:{start:{line:211,column:62},end:{line:211,column:91}}}):o)+'">Return to current</a>\n'},33:function(n,e,l,t,a){var o,r=null!=e?e:n.nullContext||{},i=n.hooks.helperMissing,s=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return(null!=(o=(s(l,"compare")||e&&s(e,"compare")||i).call(r,null!=e?s(e,"canBePreviewed"):e,1,{name:"compare",hash:{operator:"=="},fn:n.program(34,a,0),inverse:n.noop,data:a,loc:{start:{line:228,column:16},end:{line:232,column:28}}}))?o:"")+'\n                <div class="submit-buttons submit-buttons-bottom">\n\n'+(null!=(o=(s(l,"compare")||e&&s(e,"compare")||i).call(r,null!=e?s(e,"isDraft"):e,1,{name:"compare",hash:{operator:"=="},fn:n.program(36,a,0),inverse:n.noop,data:a,loc:{start:{line:236,column:20},end:{line:239,column:32}}}))?o:"")+"\n"+(null!=(o=(s(l,"compare")||e&&s(e,"compare")||i).call(r,null!=e?s(e,"isDraft"):e,1,{name:"compare",hash:{operator:"!="},fn:n.program(38,a,0),inverse:n.noop,data:a,loc:{start:{line:241,column:20},end:{line:243,column:32}}}))?o:"")+'\n                    <a href="'+n.escapeExpression("function"==typeof(e=null!=(e=s(l,"cancelVersionRestoreUrl")||(null!=e?s(e,"cancelVersionRestoreUrl"):e))?e:i)?e.call(r,{name:"cancelVersionRestoreUrl",hash:{},data:a,loc:{start:{line:245,column:29},end:{line:245,column:58}}}):e)+'" class="js-orm-restore-cancel submit button cancel">Back</a>\n                </div>\n'},34:function(n,e,l,t,a){return"                    <div class=\"preview\">\n                        <button class=\"js-orm-preview submit button preview\" name='submit' value='Preview'>Preview</button>\n                    </div>\n"},36:function(n,e,l,t,a){return"                        <button class=\"js-orm-restore submit button restore\" name='submit' value='Restore'>Publish</button>\n                        <button class=\"js-orm-update submit button update\" name='submit' value='Update'>Update</button>\n"},38:function(n,e,l,t,a){return"                        <button class=\"js-orm-restore submit button restore restore-button-only\" name='submit' value='Restore'>Restore</button>\n"},40:function(n,e,l,t,a){var o,r=null!=e?e:n.nullContext||{},i=n.hooks.helperMissing,s=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return"\n"+(null!=(o=(s(l,"compare")||e&&s(e,"compare")||i).call(r,null!=e?s(e,"canBePreviewed"):e,1,{name:"compare",hash:{operator:"=="},fn:n.program(41,a,0),inverse:n.noop,data:a,loc:{start:{line:251,column:16},end:{line:256,column:28}}}))?o:"")+'\n                <div class="enabled-status">\n                    <div class="formStyle choice">\n                        <div id="sidebar_submit_area_orm_status">\n                            <div>\n                                <input class="js-sidebar-submit-orm-status" name="sidebar_submit_area_orm_status" type="radio" id="sidebar_submit_area_orm_status_0" value="1">\n                                <label for="sidebar_submit_area_orm_status_0" class="required">Enabled</label>\n                            </div>\n                            <div>\n                                <input class="js-sidebar-submit-orm-status" name="sidebar_submit_area_orm_status" type="radio" id="sidebar_submit_area_orm_status_1" value="0">\n                                <label for="sidebar_submit_area_orm_status_1" class="required">Disabled</label>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class="submit-buttons submit-buttons-bottom">\n'+(null!=(o=(s(l,"compare")||e&&s(e,"compare")||i).call(r,null!=e?s(e,"returnUrl"):e,"",{name:"compare",hash:{operator:"!="},fn:n.program(43,a,0),inverse:n.noop,data:a,loc:{start:{line:274,column:20},end:{line:276,column:32}}}))?o:"")+'\n                    <button class="js-orm-apply submit button save-content '+(null!=(o=(s(l,"compare")||e&&s(e,"compare")||i).call(r,null!=e?s(e,"returnUrl"):e,"",{name:"compare",hash:{operator:"=="},fn:n.program(45,a,0),inverse:n.noop,data:a,loc:{start:{line:278,column:75},end:{line:278,column:142}}}))?o:"")+"\" style=\"background: #2281cf;\" name='submit' value='Apply'>Apply</button>\n\n"+(null!=(o=(s(l,"compare")||e&&s(e,"compare")||i).call(r,null!=e?s(e,"returnUrl"):e,"",{name:"compare",hash:{operator:"!="},fn:n.program(47,a,0),inverse:n.noop,data:a,loc:{start:{line:280,column:20},end:{line:282,column:32}}}))?o:"")+"                </div>\n\n"},41:function(n,e,l,t,a){return"                    <div class=\"preview\">\n                        <button class=\"js-orm-preview submit button preview\" name='submit' value='Preview'>Preview</button>\n                        <button class=\"js-orm-draft submit button draft\" name='submit' value='Save as draft'>Save as draft</button>\n                    </div>\n"},43:function(n,e,l,t,a){var o=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'                        <a class="back-button button js-returnUrl" href="'+n.escapeExpression("function"==typeof(o=null!=(o=o(l,"returnUrl")||(null!=e?o(e,"returnUrl"):e))?o:n.hooks.helperMissing)?o.call(null!=e?e:n.nullContext||{},{name:"returnUrl",hash:{},data:a,loc:{start:{line:275,column:73},end:{line:275,column:88}}}):o)+'">‹ Back</a>\n'},45:function(n,e,l,t,a){return"one-button-only"},47:function(n,e,l,t,a){return"                        <button class=\"js-orm-save submit button save\" name='submit' value='Save'>Save</button>\n"},compiler:[8,">= 4.3.0"],main:function(n,e,l,t,a,o,r){var i,s,c=null!=e?e:n.nullContext||{},u=n.hooks.helperMissing,m="function",p=n.escapeExpression,v=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'\n    <div class="cms_from_various_snippets_container panel panel-info content-block-sidebar '+p(typeof(s=null!=(s=v(l,"className")||(null!=e?v(e,"className"):e))?s:u)==m?s.call(c,{name:"className",hash:{},data:a,loc:{start:{line:2,column:91},end:{line:2,column:106}}}):s)+'">\n        <div class="article-state-controls">\n\n            <div class="article-state-controls__toggle-preview js-sidebar-preview-area">\n\n                <div class="state-toggle">\n                    <input class="switch-toggle-input visuallyhidden" type="checkbox" id="state-toggle-input" name="state-toggle" value="" '+(null!=(i=(v(l,"compare")||e&&v(e,"compare")||u).call(c,null!=e?v(e,"enabled"):e,1,{name:"compare",hash:{operator:"=="},fn:n.program(1,a,0,o,r),inverse:n.noop,data:a,loc:{start:{line:8,column:139},end:{line:8,column:198}}}))?i:"")+'>\n                    <label class="switch-toggle-label" for="state-toggle-input">\n                        <div class="switch-toggle__switch"></div>\n                        <div class="switch-toggle__label switch-toggle__label--active">Enabled</div>\n                        <div class="switch-toggle__label switch-toggle__label--inactive">Disabled</div>\n                    </label>\n                </div>\n\n'+(null!=(i=(v(l,"compare")||e&&v(e,"compare")||u).call(c,null!=e?v(e,"canBePreviewed"):e,1,{name:"compare",hash:{operator:"=="},fn:n.program(3,a,0,o,r),inverse:n.noop,data:a,loc:{start:{line:16,column:16},end:{line:20,column:28}}}))?i:"")+'            </div>\n\n            <ul class="js-article-version-list article-version-list">\n                <li class="article-version-list__active-item">\n                    \x3c!--\n'+(null!=(i=(v(l,"compare")||e&&v(e,"compare")||u).call(c,null!=e?v(e,"isRestoringFromVersion"):e,1,{name:"compare",hash:{operator:"!="},fn:n.program(5,a,0,o,r),inverse:n.noop,data:a,loc:{start:{line:26,column:20},end:{line:28,column:32}}}))?i:"")+"\n"+(null!=(i=(v(l,"compare")||e&&v(e,"compare")||u).call(c,null!=e?v(e,"isRestoringFromVersion"):e,1,{name:"compare",hash:{operator:"=="},fn:n.program(7,a,0,o,r),inverse:n.noop,data:a,loc:{start:{line:30,column:20},end:{line:34,column:32}}}))?i:"")+"\n"+(null!=(i=(v(l,"compare")||e&&v(e,"compare")||u).call(c,null!=e?v(e,"isRestoringFromVersion"):e,1,{name:"compare",hash:{operator:"=="},fn:n.program(10,a,0,o,r),inverse:n.noop,data:a,loc:{start:{line:36,column:20},end:{line:40,column:32}}}))?i:"")+'                    --\x3e\n\n                    Versions\n\n                    <ul class="article-version-list__dropdown">\n                        <li class="article-version-list__item">\n                            <h2 class="article-version-list__cat">Current version</h2>\n                            <div class="article-version-link-item">\n                                <a class="article-version-link article-version-link--current '+(null!=(i=(v(l,"compare")||e&&v(e,"compare")||u).call(c,null!=e?v(e,"isRestoringFromVersion"):e,1,{name:"compare",hash:{operator:"!="},fn:n.program(13,a,0,o,r),inverse:n.noop,data:a,loc:{start:{line:49,column:93},end:{line:49,column:163}}}))?i:"")+'" href="'+p(typeof(s=null!=(s=v(l,"cancelVersionRestoreUrl")||(null!=e?v(e,"cancelVersionRestoreUrl"):e))?s:u)==m?s.call(c,{name:"cancelVersionRestoreUrl",hash:{},data:a,loc:{start:{line:49,column:171},end:{line:49,column:200}}}):s)+'">\n                                    '+p(typeof(s=null!=(s=v(l,"currentOrmDateTime")||(null!=e?v(e,"currentOrmDateTime"):e))?s:u)==m?s.call(c,{name:"currentOrmDateTime",hash:{},data:a,loc:{start:{line:50,column:36},end:{line:50,column:60}}}):s)+'\n                                    <div class="article-version-link__name">'+p(typeof(s=null!=(s=v(l,"currentOrmAuthor")||(null!=e?v(e,"currentOrmAuthor"):e))?s:u)==m?s.call(c,{name:"currentOrmAuthor",hash:{},data:a,loc:{start:{line:51,column:76},end:{line:51,column:98}}}):s)+"</div>\n                                </a>\n                            </div>\n                        </li>\n\n"+(null!=(i=(v(l,"ifNotEmpty")||e&&v(e,"ifNotEmpty")||u).call(c,null!=(i=null!=e?v(e,"history"):e)?v(i,"drafts"):i,{name:"ifNotEmpty",hash:{},fn:n.program(15,a,0,o,r),inverse:n.noop,data:a,loc:{start:{line:56,column:24},end:{line:71,column:39}}}))?i:"")+"\n"+(null!=(i=(v(l,"ifNotEmpty")||e&&v(e,"ifNotEmpty")||u).call(c,null!=(i=null!=e?v(e,"history"):e)?v(i,"versions"):i,{name:"ifNotEmpty",hash:{},fn:n.program(18,a,0,o,r),inverse:n.noop,data:a,loc:{start:{line:73,column:24},end:{line:88,column:39}}}))?i:"")+'\n                        \x3c!--\n                        <li class="article-version-list__item">\n                            <h2 class="article-version-list__cat">Drafts</h2>\n                            <div class="article-version-link-item">\n                                <a class="article-version-link active" href="#">\n                                    15/02/2021 @ 09:57am\n                                    <div class="article-version-link__name">John Smith</div>\n                                </a>\n                                <button class="icon article-version-link__remove" title="Remove this">Remove</button>\n                            </div>\n                        </li>\n                        <li class="article-version-list__item">\n                            <h2 class="article-version-list__cat">Revisions</h2>\n                            <div class="article-version-link-item">\n                                <a class="article-version-link" href="#">\n                                    15/02/2021 @ 09:57am\n                                    <div class="article-version-link__name">John Smith</div>\n                                </a>\n                                <button class="icon article-version-link__remove" title="Remove this">Remove</button>\n                            </div>\n                            <div class="article-version-link-item">\n                                <a class="article-version-link" href="#">\n                                    15/02/2021 @ 09:57am\n                                    <div class="article-version-link__name">John Smith</div>\n\n                                </a>\n                                <button class="icon article-version-link__remove" title="Remove this">Remove</button>\n                            </div>\n                            <div class="article-version-link-item">\n                                <a class="article-version-link" href="#">\n                                    15/02/2021 @ 09:57am\n                                    <div class="article-version-link__name">John Smith</div>\n\n                                </a>\n                                <button class="icon article-version-link__remove" title="Remove this">Remove</button>\n                            </div>\n                            <div class="article-version-link-item">\n                                <a class="article-version-link" href="#">\n                                    15/02/2021 @ 09:57am\n                                    <div class="article-version-link__name">John Smith</div>\n\n                                </a>\n                                <button class="icon article-version-link__remove" title="Remove this">Remove</button>\n                            </div>\n                            <div class="article-version-link-item">\n                                <a class="article-version-link" href="#">\n                                    15/02/2021 @ 09:57am\n                                    <div class="article-version-link__name">John Smith</div>\n\n                                </a>\n                                <button class="icon article-version-link__remove" title="Remove this">Remove</button>\n                            </div>\n                            <div class="article-version-link-item">\n                                <a class="article-version-link" href="#">\n                                    15/02/2021 @ 09:57am\n                                    <div class="article-version-link__name">John Smith</div>\n\n                                </a>\n                                <button class="icon article-version-link__remove" title="Remove this">Remove</button>\n                            </div>\n                            <div class="article-version-link-item">\n                                <a class="article-version-link" href="#">\n                                    15/02/2021 @ 09:57am\n                                    <div class="article-version-link__name">John Smith</div>\n\n                                </a>\n                                <button class="icon article-version-link__remove" title="Remove this">Remove</button>\n                            </div>\n                            <div class="article-version-link-item">\n                                <a class="article-version-link" href="#">\n                                    15/02/2021 @ 09:57am\n                                    <div class="article-version-link__name">John Smith</div>\n\n                                </a>\n                                <button class="icon article-version-link__remove" title="Remove this">Remove</button>\n                            </div>\n                            <div class="article-version-link-item">\n                                <a class="article-version-link" href="#">\n                                    15/02/2021 @ 09:57am\n                                    <div class="article-version-link__name">John Smith</div>\n\n                                </a>\n                                <button class="icon article-version-link__remove" title="Remove this">Remove</button>\n                            </div>\n                            --\x3e\n                        </li>\n                    </ul>\n                </li>\n            </ul>\n\n\n            <div class="buttons--article-state js-submit-area-sidebar">\n                \x3c!-- Drafts --\x3e\n'+(null!=(i=(v(l,"compare")||e&&v(e,"compare")||u).call(c,null!=e?v(e,"isRestoringFromVersion"):e,1,{name:"compare",hash:{operator:"=="},fn:n.program(21,a,0,o,r),inverse:n.noop,data:a,loc:{start:{line:183,column:16},end:{line:190,column:28}}}))?i:"")+"\n                \x3c!-- Current --\x3e\n"+(null!=(i=(v(l,"compare")||e&&v(e,"compare")||u).call(c,null!=e?v(e,"isRestoringFromVersion"):e,1,{name:"compare",hash:{operator:"!="},fn:n.program(24,a,0,o,r),inverse:n.noop,data:a,loc:{start:{line:193,column:16},end:{line:205,column:28}}}))?i:"")+"\n                \x3c!-- Version --\x3e\n"+(null!=(i=(v(l,"compare")||e&&v(e,"compare")||u).call(c,null!=e?v(e,"isRestoringFromVersion"):e,1,{name:"compare",hash:{operator:"=="},fn:n.program(30,a,0,o,r),inverse:n.noop,data:a,loc:{start:{line:208,column:16},end:{line:213,column:28}}}))?i:"")+'            </div>\n        </div>\n\n        <div class="panel-heading">\n            <i class="fa fa-info-circle"></i> Content overview\n        </div>\n        <div class="panel-body scroll-content"></div>\n    </div>\n\n\n\n{#\n<div class="submit-area submit-area-sidebar js-submit-area-sidebar">\n'+(null!=(i=(v(l,"compare")||e&&v(e,"compare")||u).call(c,null!=e?v(e,"isRestoringFromVersion"):e,1,{name:"compare",hash:{operator:"=="},fn:n.program(33,a,0,o,r),inverse:n.noop,data:a,loc:{start:{line:227,column:12},end:{line:247,column:24}}}))?i:"")+"\n"+(null!=(i=(v(l,"compare")||e&&v(e,"compare")||u).call(c,null!=e?v(e,"isRestoringFromVersion"):e,1,{name:"compare",hash:{operator:"!="},fn:n.program(40,a,0,o,r),inverse:n.noop,data:a,loc:{start:{line:249,column:12},end:{line:285,column:24}}}))?i:"")+'        </div>\n    #}\n\n{#\n\n<div class="submit-area">\n    <div class="sidebar-preview-area js-sidebar-preview-area preview" style="display: none;" >\n        <button style="" class="submit button save-content preview">Preview</button>\n        <button style="display: none;" class="submit button save-content draft">Save as draft</button>\n    </div>\n\n    <div class="sidebar-submit-area submit-buttons">\n        <input style="display: none;" class="submit button save-content apply" class="bg-blue" style="margin-right: .5em;" type="submit" value="Apply" name="submit" />\n        <input style="display: none;" class="submit button save-content save" class="bg-green" type="submit" value="Save" name="submit" />\n        <input style="display: none;" class="submit button save-content restore" class="bg-restore" type="submit" value="Publish" name="submit" />\n        <a style="display: none;" class="submit button save-content cancel" class="bg-cancel">Back</a>\n    </div>\n</div>\n</div>\n#}\n'},useData:!0,useDepths:!0})}();