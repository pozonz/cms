(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['orm.gallery-file'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "";
},"3":function(container,depth0,helpers,partials,data) {
    return "Green";
},"5":function(container,depth0,helpers,partials,data) {
    return "Red";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }, buffer = 
  "\n    <li class=\"tableContent js-tableContent js-orm-info file-box gallery-file-box\" id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":2,"column":87},"end":{"line":2,"column":93}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":2,"column":104},"end":{"line":2,"column":110}}}) : helper)))
    + "\" data-code=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"code") || (depth0 != null ? lookupProperty(depth0,"code") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"code","hash":{},"data":data,"loc":{"start":{"line":2,"column":123},"end":{"line":2,"column":131}}}) : helper)))
    + "\" data-width=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"width") || (depth0 != null ? lookupProperty(depth0,"width") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"width","hash":{},"data":data,"loc":{"start":{"line":2,"column":145},"end":{"line":2,"column":154}}}) : helper)))
    + "\" data-height=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"height") || (depth0 != null ? lookupProperty(depth0,"height") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"height","hash":{},"data":data,"loc":{"start":{"line":2,"column":169},"end":{"line":2,"column":179}}}) : helper)))
    + "\" data-callback=\"callbackAfterDeleteFile\" data-class=\"Asset\">\n        <div class=\"asset-img\">\n            <a class=\"js-cropping-options cropping-options\" href=\"#\" title=\"Crop this image ›\">Cropping Options</a>\n            <img src=\"/images/assets/"
    + alias4(((helper = (helper = lookupProperty(helpers,"code") || (depth0 != null ? lookupProperty(depth0,"code") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"code","hash":{},"data":data,"loc":{"start":{"line":5,"column":37},"end":{"line":5,"column":45}}}) : helper)))
    + "/cms_small?v=";
  stack1 = ((helper = (helper = lookupProperty(helpers,"random") || (depth0 != null ? lookupProperty(depth0,"random") : depth0)) != null ? helper : alias2),(options={"name":"random","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":58},"end":{"line":5,"column":80}}}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!lookupProperty(helpers,"random")) { stack1 = container.hooks.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\" alt=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":5,"column":87},"end":{"line":5,"column":96}}}) : helper)))
    + "\" class=\"mceImage\" border=\"0\">\n        </div>\n        <div class=\"details\">\n            <div class=\"gallery-file-title\" title=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":8,"column":51},"end":{"line":8,"column":60}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":8,"column":62},"end":{"line":8,"column":71}}}) : helper)))
    + "</div>\n\n            <div class=\"asset-controls\">\n                <!--<a href=\"#\" class=\"icon approve js-orm-status\" data-status=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"status") || (depth0 != null ? lookupProperty(depth0,"status") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"status","hash":{},"data":data,"loc":{"start":{"line":11,"column":80},"end":{"line":11,"column":92}}}) : helper)))
    + "\"><img src=\"/cms/images/dot"
    + ((stack1 = (lookupProperty(helpers,"compare")||(depth0 && lookupProperty(depth0,"compare"))||alias2).call(alias1,1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),{"name":"compare","hash":{"operator":"=="},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":119},"end":{"line":11,"column":171}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"compare")||(depth0 && lookupProperty(depth0,"compare"))||alias2).call(alias1,0,(depth0 != null ? lookupProperty(depth0,"status") : depth0),{"name":"compare","hash":{"operator":"=="},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":171},"end":{"line":11,"column":221}}})) != null ? stack1 : "")
    + ".gif\" alt=\"\" border=\"0\"></a>-->\n                <a class=\"icon\" href=\"/downloads/assets/"
    + alias4(((helper = (helper = lookupProperty(helpers,"code") || (depth0 != null ? lookupProperty(depth0,"code") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"code","hash":{},"data":data,"loc":{"start":{"line":12,"column":56},"end":{"line":12,"column":64}}}) : helper)))
    + "/"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":12,"column":65},"end":{"line":12,"column":74}}}) : helper)))
    + "\"><img src=\"/cms/images/icon-download.png\" alt=\"\" border=\"0\"></a>\n                <a class=\"icon pz-file-delete js-file-delete\" href=\"#\"><img src=\"/cms/develop/images/unlink.png\" alt=\"\" border=\"0\"></a>\n                <div class=\"doc-code-meta\">\n                    <label>\n                        "
    + alias4(((helper = (helper = lookupProperty(helpers,"code") || (depth0 != null ? lookupProperty(depth0,"code") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"code","hash":{},"data":data,"loc":{"start":{"line":16,"column":24},"end":{"line":16,"column":32}}}) : helper)))
    + "\n                    </label>\n                </div>\n            </div>\n        </div>\n    </li>\n";
},"useData":true});
})();