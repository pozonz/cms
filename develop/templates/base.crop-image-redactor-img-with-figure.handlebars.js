!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{})["base.crop-image-redactor-img-with-figure"]=n({1:function(n,l,e,a,o){var r,t,c=null!=l?l:n.nullContext||{},u=n.hooks.helperMissing,p="function",i=n.escapeExpression,s=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'    <a href="'+i(typeof(t=null!=(t=s(e,"url")||(null!=l?s(l,"url"):l))?t:u)==p?t.call(c,{name:"url",hash:{},data:o,loc:{start:{line:2,column:13},end:{line:2,column:20}}}):t)+'" '+(null!=(r=(s(e,"compare")||l&&s(l,"compare")||u).call(c,null!=l?s(l,"target"):l,1,{name:"compare",hash:{},fn:n.program(2,o,0),inverse:n.noop,data:o,loc:{start:{line:2,column:22},end:{line:2,column:70}}}))?r:"")+'>\n        <img src="'+i(typeof(t=null!=(t=s(e,"src")||(null!=l?s(l,"src"):l))?t:u)==p?t.call(c,{name:"src",hash:{},data:o,loc:{start:{line:3,column:18},end:{line:3,column:25}}}):t)+'" alt="'+i(typeof(t=null!=(t=s(e,"alt")||(null!=l?s(l,"alt"):l))?t:u)==p?t.call(c,{name:"alt",hash:{},data:o,loc:{start:{line:3,column:32},end:{line:3,column:39}}}):t)+'">\n    </a>\n    '+(null!=(r=(s(e,"compare")||l&&s(l,"compare")||u).call(c,null!=l?s(l,"caption"):l,"",{name:"compare",hash:{operator:"!="},fn:n.program(4,o,0),inverse:n.noop,data:o,loc:{start:{line:5,column:4},end:{line:5,column:89}}}))?r:"")+"\n"},2:function(n,l,e,a,o){return'target="_blank"'},4:function(n,l,e,a,o){var r=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return"<figcaption>"+n.escapeExpression("function"==typeof(r=null!=(r=r(e,"caption")||(null!=l?r(l,"caption"):l))?r:n.hooks.helperMissing)?r.call(null!=l?l:n.nullContext||{},{name:"caption",hash:{},data:o,loc:{start:{line:5,column:53},end:{line:5,column:64}}}):r)+"</figcaption>"},6:function(n,l,e,a,o){var r,t=null!=l?l:n.nullContext||{},c=n.hooks.helperMissing,u="function",p=n.escapeExpression,i=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'    <img src="'+p(typeof(r=null!=(r=i(e,"src")||(null!=l?i(l,"src"):l))?r:c)==u?r.call(t,{name:"src",hash:{},data:o,loc:{start:{line:9,column:14},end:{line:9,column:21}}}):r)+'" alt="'+p(typeof(r=null!=(r=i(e,"alt")||(null!=l?i(l,"alt"):l))?r:c)==u?r.call(t,{name:"alt",hash:{},data:o,loc:{start:{line:9,column:28},end:{line:9,column:35}}}):r)+'">\n    '+(null!=(o=(i(e,"compare")||l&&i(l,"compare")||c).call(t,null!=l?i(l,"caption"):l,"",{name:"compare",hash:{operator:"!="},fn:n.program(4,o,0),inverse:n.noop,data:o,loc:{start:{line:10,column:4},end:{line:10,column:89}}}))?o:"")+"\n"},compiler:[8,">= 4.3.0"],main:function(n,l,e,a,o){var r,t=null!=l?l:n.nullContext||{},c=n.hooks.helperMissing,u=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return(null!=(r=(u(e,"compare")||l&&u(l,"compare")||c).call(t,null!=l?u(l,"url"):l,"",{name:"compare",hash:{operator:"!="},fn:n.program(1,o,0),inverse:n.noop,data:o,loc:{start:{line:1,column:0},end:{line:6,column:12}}}))?r:"")+"\n"+(null!=(r=(u(e,"compare")||l&&u(l,"compare")||c).call(t,null!=l?u(l,"url"):l,"",{name:"compare",hash:{operator:"=="},fn:n.program(6,o,0),inverse:n.noop,data:o,loc:{start:{line:8,column:0},end:{line:11,column:12}}}))?r:"")},useData:!0})}();