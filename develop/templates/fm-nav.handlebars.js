!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{})["fm-nav"]=n({1:function(n,l,e,o,a,r,t){var u=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'            <ol class="breadcrumb pull-left">\n'+(null!=(a=u(e,"each").call(null!=l?l:n.nullContext||{},null!=l?u(l,"path"):l,{name:"each",hash:{},fn:n.program(2,a,0,r,t),inverse:n.noop,data:a,loc:{start:{line:6,column:16},end:{line:17,column:25}}}))?a:"")+"            </ol>\n"},2:function(n,l,e,o,a,r,t){var u,c=null!=l?l:n.nullContext||{},i=n.hooks.helperMissing,p=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return(null!=(u=(p(e,"compare")||l&&p(l,"compare")||i).call(c,null!=l?p(l,"id"):l,null!=(u=null!=t[1]?p(t[1],"currentFolder"):t[1])?p(u,"id"):u,{name:"compare",hash:{operator:"!="},fn:n.program(3,a,0,r,t),inverse:n.noop,data:a,loc:{start:{line:7,column:20},end:{line:11,column:32}}}))?u:"")+(null!=(u=(p(e,"compare")||l&&p(l,"compare")||i).call(c,null!=l?p(l,"id"):l,null!=(u=null!=t[1]?p(t[1],"currentFolder"):t[1])?p(u,"id"):u,{name:"compare",hash:{operator:"=="},fn:n.program(5,a,0,r,t),inverse:n.noop,data:a,loc:{start:{line:12,column:20},end:{line:16,column:32}}}))?u:"")},3:function(n,l,e,o,a){var r=null!=l?l:n.nullContext||{},t=n.hooks.helperMissing,u="function",c=n.escapeExpression,i=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'                        <li>\n                            <a href="#" data-id="'+c(typeof(n=null!=(n=i(e,"id")||(null!=l?i(l,"id"):l))?n:t)==u?n.call(r,{name:"id",hash:{},data:a,loc:{start:{line:9,column:49},end:{line:9,column:55}}}):n)+'" title="'+c(typeof(n=null!=(n=i(e,"title")||(null!=l?i(l,"title"):l))?n:t)==u?n.call(r,{name:"title",hash:{},data:a,loc:{start:{line:9,column:64},end:{line:9,column:73}}}):n)+'">'+c(typeof(n=null!=(n=i(e,"title")||(null!=l?i(l,"title"):l))?n:t)==u?n.call(r,{name:"title",hash:{},data:a,loc:{start:{line:9,column:75},end:{line:9,column:84}}}):n)+"</a>\n                        </li>\n"},5:function(n,l,e,o,a){var r=null!=l?l:n.nullContext||{},t=n.hooks.helperMissing,u="function",c=n.escapeExpression,i=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'                        <li class="active">\n                            <strong title="'+c(typeof(n=null!=(n=i(e,"title")||(null!=l?i(l,"title"):l))?n:t)==u?n.call(r,{name:"title",hash:{},data:a,loc:{start:{line:14,column:43},end:{line:14,column:52}}}):n)+'">'+c(typeof(n=null!=(n=i(e,"title")||(null!=l?i(l,"title"):l))?n:t)==u?n.call(r,{name:"title",hash:{},data:a,loc:{start:{line:14,column:54},end:{line:14,column:63}}}):n)+"</strong>\n                        </li>\n"},7:function(n,l,e,o,a){var r=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'            <div>Search results for <span class="label label-warning pz-label">'+n.escapeExpression("function"==typeof(r=null!=(r=r(e,"keyword")||(null!=l?r(l,"keyword"):l))?r:n.hooks.helperMissing)?r.call(null!=l?l:n.nullContext||{},{name:"keyword",hash:{},data:a,loc:{start:{line:22,column:79},end:{line:22,column:90}}}):r)+"</span></div>\n"},9:function(n,l,e,o,a){var r=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return null!=(a=(r(e,"ifMoreThan1")||l&&r(l,"ifMoreThan1")||n.hooks.helperMissing).call(null!=l?l:n.nullContext||{},null!=l?r(l,"path"):l,{name:"ifMoreThan1",hash:{},fn:n.program(10,a,0),inverse:n.noop,data:a,loc:{start:{line:27,column:12},end:{line:31,column:28}}}))?a:""},10:function(n,l,e,o,a){return'                <button class="js-change-folder-name">\n                   Change folder name\n                </button>\n'},12:function(n,l,e,o,a){return'            <button class="js-add-subfolder">\n                Add subfolder\n            </button>\n'},14:function(n,l,e,o,a){var r=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return null!=(a=(r(e,"ifMoreThan1")||l&&r(l,"ifMoreThan1")||n.hooks.helperMissing).call(null!=l?l:n.nullContext||{},null!=l?r(l,"path"):l,{name:"ifMoreThan1",hash:{},fn:n.program(15,a,0),inverse:n.noop,data:a,loc:{start:{line:41,column:12},end:{line:45,column:28}}}))?a:""},15:function(n,l,e,o,a){var r=n.lambda,t=n.escapeExpression,u=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'                <button class="js-orm-delete" data-id="'+t(r(null!=(n=null!=l?u(l,"currentFolder"):l)?u(n,"id"):n,l))+'" data-parent="'+t(r(null!=(n=null!=l?u(l,"currentFolder"):l)?u(n,"parentId"):n,l))+'">\n                    Delete folder\n                </button>\n'},compiler:[8,">= 4.3.0"],main:function(n,l,e,o,a,r,t){var u,c=null!=l?l:n.nullContext||{},i=n.hooks.helperMissing,p=n.lambda,s=n.escapeExpression,d=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'\n<div id="h1">\n    <h1>\n'+(null!=(u=(d(e,"compare")||l&&d(l,"compare")||i).call(c,"",null!=l?d(l,"keyword"):l,{name:"compare",hash:{operator:"=="},fn:n.program(1,a,0,r,t),inverse:n.noop,data:a,loc:{start:{line:4,column:8},end:{line:19,column:20}}}))?u:"")+"\n"+(null!=(u=(d(e,"compare")||l&&d(l,"compare")||i).call(c,"",null!=l?d(l,"keyword"):l,{name:"compare",hash:{operator:"!="},fn:n.program(7,a,0,r,t),inverse:n.noop,data:a,loc:{start:{line:21,column:8},end:{line:23,column:20}}}))?u:"")+'    </h1>\n    <div class="addForm js-orm-info" id="'+s(p(null!=(u=null!=l?d(l,"currentFolder"):l)?d(u,"id"):u,l))+'" data-class="Asset" data-id="'+s(p(null!=(u=null!=l?d(l,"currentFolder"):l)?d(u,"id"):u,l))+'" data-title="'+s(p(null!=(u=null!=l?d(l,"currentFolder"):l)?d(u,"title"):u,l))+'" data-callback="callbackAfterDeleteFolder" data-parent="'+s(p(null!=(u=null!=l?d(l,"currentFolder"):l)?d(u,"parentId"):u,l))+'">\n'+(null!=(u=(d(e,"compare")||l&&d(l,"compare")||i).call(c,"",null!=l?d(l,"keyword"):l,{name:"compare",hash:{operator:"=="},fn:n.program(9,a,0,r,t),inverse:n.noop,data:a,loc:{start:{line:26,column:8},end:{line:32,column:20}}}))?u:"")+"\n"+(null!=(u=(d(e,"compare")||l&&d(l,"compare")||i).call(c,"",null!=l?d(l,"keyword"):l,{name:"compare",hash:{operator:"=="},fn:n.program(12,a,0,r,t),inverse:n.noop,data:a,loc:{start:{line:34,column:8},end:{line:38,column:20}}}))?u:"")+"\n"+(null!=(u=(d(e,"compare")||l&&d(l,"compare")||i).call(c,"",null!=l?d(l,"keyword"):l,{name:"compare",hash:{operator:"=="},fn:n.program(14,a,0,r,t),inverse:n.noop,data:a,loc:{start:{line:40,column:8},end:{line:46,column:20}}}))?u:"")+'    </div>\n</div>\n<div class="clearfix"></div>\n\n<div id="js-add-subfolder-dialog" style="display: none">\n    <label>Add a new folder:</label>\n    <input type="text" name="name" placeholder="Enter a new name" class="form-control">\n</div>\n\n <div id="js-change-folder-name-dialog" style="display: none">\n    <label>Change folder name:</label>\n    <input type="text" name="name" placeholder="Enter a new name" class="form-control">\n</div>\n\n\n'},useData:!0,useDepths:!0})}();