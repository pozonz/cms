!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{})["model.tr"]=n({1:function(n,l,e,t,o,a,r){var c,s=null!=l?l:n.nullContext||{},u=n.hooks.helperMissing,i=n.escapeExpression,d=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return"                <option "+(null!=(c=(d(e,"compare")||l&&d(l,"compare")||u).call(s,l,null!=(c=null!=r[1]?d(r[1],"itm"):r[1])?d(c,"widget"):c,{name:"compare",hash:{operator:"=="},fn:n.program(2,o,0,a,r),inverse:n.noop,data:o,loc:{start:{line:6,column:24},end:{line:6,column:89}}}))?c:"")+' value="'+i(n.lambda(l,l))+'">'+i("function"==typeof(d=null!=(d=d(e,"key")||o&&d(o,"key"))?d:u)?d.call(s,{name:"key",hash:{},data:o,loc:{start:{line:6,column:107},end:{line:6,column:117}}}):d)+"</option>\n"},2:function(n,l,e,t,o){return"selected"},4:function(n,l,e,t,o){return"checked"},compiler:[8,">= 4.3.0"],main:function(n,l,e,t,o,a,r){var c,s=null!=l?l:n.nullContext||{},u=n.lambda,i=n.escapeExpression,d=n.hooks.helperMissing,m=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'<tbody class="js-model-fields">\n    <tr class="column">\n        <td>\n            <select class="wgt form-control">\n'+(null!=(c=m(e,"each").call(s,null!=l?m(l,"widgets"):l,{name:"each",hash:{},fn:n.program(1,o,0,a,r),inverse:n.noop,data:o,loc:{start:{line:5,column:16},end:{line:7,column:25}}}))?c:"")+'            </select>\n        </td>\n        <td><input class="lbl form-control" type="text" value="'+i(u(null!=(c=null!=l?m(l,"itm"):l)?m(c,"label"):c,l))+'"/></td>\n        <td><input class="fld form-control" type="text" value="'+i(u(null!=(c=null!=l?m(l,"itm"):l)?m(c,"field"):c,l))+'"/></td>\n        <td class="column">\n            '+i(u(null!=(c=null!=l?m(l,"itm"):l)?m(c,"column"):c,l))+'\n            <input class="id" type="hidden" value="'+i(u(null!=(c=null!=l?m(l,"itm"):l)?m(c,"id"):c,l))+'" />\n            <input class="col" type="hidden" value="'+i(u(null!=(c=null!=l?m(l,"itm"):l)?m(c,"column"):c,l))+'" />\n        </td>\n        <td>\n            <input type="checkbox" class="req" '+(null!=(c=(m(e,"compare")||l&&m(l,"compare")||d).call(s,null!=(c=null!=l?m(l,"itm"):l)?m(c,"required"):c,1,{name:"compare",hash:{operator:"=="},fn:n.program(4,o,0,a,r),inverse:n.noop,data:o,loc:{start:{line:18,column:47},end:{line:18,column:107}}}))?c:"")+'/>\n        </td>\n        <td>\n            <input type="checkbox" class="uni" '+(null!=(c=(m(e,"compare")||l&&m(l,"compare")||d).call(s,null!=(c=null!=l?m(l,"itm"):l)?m(c,"unique"):c,1,{name:"compare",hash:{operator:"=="},fn:n.program(4,o,0,a,r),inverse:n.noop,data:o,loc:{start:{line:21,column:47},end:{line:21,column:105}}}))?c:"")+'/>\n        </td>\n        <td>\n            <a href="#" class="js-rm-field"><img alt="Delete Record" title="Delete Record" src="/cms/images/binIcon.gif" border="0"></a>\n        </td>\n    </tr>\n    <tr style="display: none;"></tr>\n    <tr id="sql'+i(u(null!=(c=null!=l?m(l,"itm"):l)?m(c,"id"):c,l))+'" style="display: none;">\n        <td></td>\n        <td colspan="5"><textarea class="form-control" placeholder="SQL statement">'+i(u(null!=(c=null!=l?m(l,"itm"):l)?m(c,"sql"):c,l))+"</textarea></td>\n        <td></td>\n    </tr>\n</tbody>\n"},useData:!0,useDepths:!0})}();