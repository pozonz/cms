!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{})["fm-folders"]=n({1:function(n,e,a,o,l){return'    <div class="jstree"></div>\n'},3:function(n,e,a,o,l){return'    <a href="#" class="js-reset">&#10096; Browse by folders</a>\n'},compiler:[8,">= 4.3.0"],main:function(n,e,a,o,l){var r,t=null!=e?e:n.nullContext||{},s=n.hooks.helperMissing,c=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<form novalidate method="get" autocomplete="off">\n    <div class="input-group">\n        <input type="text" class="form-control js-search pz-search" name="keyword" value="'+n.escapeExpression("function"==typeof(r=null!=(r=c(a,"keyword")||(null!=e?c(e,"keyword"):e))?r:s)?r.call(t,{name:"keyword",hash:{},data:l,loc:{start:{line:3,column:90},end:{line:3,column:101}}}):r)+'">\n        <span class="input-group-btn">\n            <button type="button" class="btn btn-default js-search-button"><i class="fa fa-search"></i></button>\n        </span>\n    </div>\n</form>\n\n\x3c!--<div class="hr-line-dashed"></div>--\x3e\n'+(null!=(r=(c(a,"compare")||e&&c(e,"compare")||s).call(t,"",null!=e?c(e,"keyword"):e,{name:"compare",hash:{operator:"=="},fn:n.program(1,l,0),inverse:n.noop,data:l,loc:{start:{line:11,column:0},end:{line:13,column:12}}}))?r:"")+"\n"+(null!=(r=(c(a,"compare")||e&&c(e,"compare")||s).call(t,"",null!=e?c(e,"keyword"):e,{name:"compare",hash:{operator:"!="},fn:n.program(3,l,0),inverse:n.noop,data:l,loc:{start:{line:15,column:0},end:{line:17,column:12}}}))?r:"")+'<div class="clearfix"></div>\n'},useData:!0})}();