!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{})["orm.fragment-modal-section"]=n({1:function(n,l,e,t,a,o,s){var i,r=null!=l?l:n.nullContext||{},u=n.hooks.helperMissing,c="function",p=n.escapeExpression,m=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return"                <option "+(null!=(i=(m(e,"ifHasIt")||l&&m(l,"ifHasIt")||u).call(r,null!=(i=null!=s[1]?m(s[1],"section"):s[1])?m(i,"tags"):i,null!=l?m(l,"id"):l,{name:"ifHasIt",hash:{},fn:n.program(2,a,0,o,s),inverse:n.noop,data:a,loc:{start:{line:17,column:24},end:{line:17,column:76}}}))?i:"")+' value="'+p(typeof(i=null!=(i=m(e,"id")||(null!=l?m(l,"id"):l))?i:u)==c?i.call(r,{name:"id",hash:{},data:a,loc:{start:{line:17,column:84},end:{line:17,column:90}}}):i)+'">'+p(typeof(i=null!=(i=m(e,"title")||(null!=l?m(l,"title"):l))?i:u)==c?i.call(r,{name:"title",hash:{},data:a,loc:{start:{line:17,column:92},end:{line:17,column:101}}}):i)+"</option>\n"},2:function(n,l,e,t,a){return"selected"},compiler:[8,">= 4.3.0"],main:function(n,l,e,t,a,o,s){var i,r=n.lambda,u=n.escapeExpression,c=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'\n    <input type="hidden" name="id" value="'+u(r(null!=(i=null!=l?c(l,"section"):l)?c(i,"id"):i,l))+'">\n    <input type="hidden" name="status" value="'+u(r(null!=(i=null!=l?c(l,"section"):l)?c(i,"status"):i,l))+'">\n\n    <div class="form-group">\n        <label>Section name:</label>\n        <input type="text" name="name" value="'+u(r(null!=(i=null!=l?c(l,"section"):l)?c(i,"title"):i,l))+'" placeholder="Enter a name" class="form-control">\n    </div>\n    <div class="form-group">\n        <label>Section ID:</label>\n        <input type="text" name="attr" value="'+u(r(null!=(i=null!=l?c(l,"section"):l)?c(i,"attr"):i,l))+'" placeholder="Enter an ID" class="form-control">\n    </div>\n    <div class="form-group">\n        <label>Relationship tags:</label>\n        <select name="tags" class="no-chosen js-after-chosen form-control js-tag" data-placeholder="Choose tags" multiple>\n'+(null!=(i=c(e,"each").call(null!=l?l:n.nullContext||{},null!=l?c(l,"optionTags"):l,{name:"each",hash:{},fn:n.program(1,a,0,o,s),inverse:n.noop,data:a,loc:{start:{line:16,column:12},end:{line:18,column:21}}}))?i:"")+"        </select>\n    </div>\n"},useData:!0,useDepths:!0})}();