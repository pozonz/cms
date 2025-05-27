(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['orm.fragment-sidebar'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "checked=\"\"";
},"3":function(container,depth0,helpers,partials,data) {
    return "                <a class=\"page-overview__preview link js-orm-preview\" href=\"#\">\n                    <i class=\"icon icon--preview icon--l\"></i><span class=\"button-label\">Preview</span>\n                </a>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "                        Current version\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"compare")||(depth0 && lookupProperty(depth0,"compare"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"isDraft") : depth0),1,{"name":"compare","hash":{"operator":"=="},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":24},"end":{"line":31,"column":36}}})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    return "                            Draft\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"compare")||(depth0 && lookupProperty(depth0,"compare"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"isDraft") : depth0),1,{"name":"compare","hash":{"operator":"!="},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":24},"end":{"line":36,"column":36}}})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    return "                            Revision\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "active";
},"15":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <li class=\"article-version-list__item\">\n                            <h2 class=\"article-version-list__cat\">Drafts</h2>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"history") : depth0)) != null ? lookupProperty(stack1,"drafts") : stack1),{"name":"each","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":56,"column":28},"end":{"line":66,"column":37}}})) != null ? stack1 : "")
    + "                        </li>\n";
},"16":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                <div class=\"article-version-link-item\">\n                                    <a class=\"article-version-link article-version-link--draft "
    + ((stack1 = (lookupProperty(helpers,"compare")||(depth0 && lookupProperty(depth0,"compare"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"deleteId") : depth0),(depths[1] != null ? lookupProperty(depths[1],"versionOrmId") : depths[1]),{"name":"compare","hash":{"operator":"=="},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":58,"column":95},"end":{"line":58,"column":165}}})) != null ? stack1 : "")
    + "\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":58,"column":173},"end":{"line":58,"column":182}}}) : helper)))
    + "\">\n                                        "
    + alias4(((helper = (helper = lookupProperty(helpers,"datetime") || (depth0 != null ? lookupProperty(depth0,"datetime") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"datetime","hash":{},"data":data,"loc":{"start":{"line":59,"column":40},"end":{"line":59,"column":54}}}) : helper)))
    + "\n                                        <div class=\"article-version-link__name\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"author") || (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data,"loc":{"start":{"line":60,"column":80},"end":{"line":60,"column":92}}}) : helper)))
    + "</div>\n                                    </a>\n                                    <button class=\"js-delete-version icon article-version-link__remove\" data-classname=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"deleteClass") || (depth0 != null ? lookupProperty(depth0,"deleteClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"deleteClass","hash":{},"data":data,"loc":{"start":{"line":62,"column":120},"end":{"line":62,"column":136}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"deleteId") || (depth0 != null ? lookupProperty(depth0,"deleteId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"deleteId","hash":{},"data":data,"loc":{"start":{"line":62,"column":147},"end":{"line":62,"column":161}}}) : helper)))
    + "\" title=\"Remove this\">\n                                        <span class=\"visuallyhidden\">Remove</span>\n                                    </button>\n                                </div>\n";
},"18":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <li class=\"article-version-list__item\">\n                            <h2 class=\"article-version-list__cat\">Recent</h2>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"history") : depth0)) != null ? lookupProperty(stack1,"versions") : stack1),{"name":"each","hash":{},"fn":container.program(19, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":73,"column":28},"end":{"line":83,"column":37}}})) != null ? stack1 : "")
    + "                        </li>\n";
},"19":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                <div class=\"article-version-link-item\">\n                                    <a class=\"article-version-link article-version-link--revision "
    + ((stack1 = (lookupProperty(helpers,"compare")||(depth0 && lookupProperty(depth0,"compare"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"deleteId") : depth0),(depths[1] != null ? lookupProperty(depths[1],"versionOrmId") : depths[1]),{"name":"compare","hash":{"operator":"=="},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":75,"column":98},"end":{"line":75,"column":168}}})) != null ? stack1 : "")
    + "\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":75,"column":176},"end":{"line":75,"column":185}}}) : helper)))
    + "\">\n                                        "
    + alias4(((helper = (helper = lookupProperty(helpers,"datetime") || (depth0 != null ? lookupProperty(depth0,"datetime") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"datetime","hash":{},"data":data,"loc":{"start":{"line":76,"column":40},"end":{"line":76,"column":54}}}) : helper)))
    + "\n                                        <div class=\"article-version-link__name\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"author") || (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data,"loc":{"start":{"line":77,"column":80},"end":{"line":77,"column":92}}}) : helper)))
    + "</div>\n                                    </a>\n                                    <button class=\"js-delete-version icon article-version-link__remove\" data-classname=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"deleteClass") || (depth0 != null ? lookupProperty(depth0,"deleteClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"deleteClass","hash":{},"data":data,"loc":{"start":{"line":79,"column":120},"end":{"line":79,"column":136}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"deleteId") || (depth0 != null ? lookupProperty(depth0,"deleteId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"deleteId","hash":{},"data":data,"loc":{"start":{"line":79,"column":147},"end":{"line":79,"column":161}}}) : helper)))
    + "\" title=\"Remove this\">\n                                        <span class=\"visuallyhidden\">Remove</span>\n                                    </button>\n                                </div>\n";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"compare")||(depth0 && lookupProperty(depth0,"compare"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"isDraft") : depth0),1,{"name":"compare","hash":{"operator":"=="},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":173,"column":16},"end":{"line":178,"column":28}}})) != null ? stack1 : "");
},"22":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <button class=\"button button--article-state button--article-draft update\" type=\"button\">Save draft</button>\n                    <button class=\"button button--article-state button--article-publish restore\" type=\"button\">Publish draft</button>\n                    <!-- <button class=\"button--article-link button--article-link--delete\" type=\"button\"><i class=\"button--article-link--delete__icon\"></i>Delete draft</a> -->\n                    <a class=\"button--article-link\" href=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"cancelVersionRestoreUrl") || (depth0 != null ? lookupProperty(depth0,"cancelVersionRestoreUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"cancelVersionRestoreUrl","hash":{},"data":data,"loc":{"start":{"line":177,"column":58},"end":{"line":177,"column":87}}}) : helper)))
    + "\">Return to current</a>\n";
},"24":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <button class=\"button button--article-state button--article-publish js-orm-apply\" type=\"button\" value=\"Apply\">Save</button>\n"
    + ((stack1 = (lookupProperty(helpers,"compare")||(depth0 && lookupProperty(depth0,"compare"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"canBePreviewed") : depth0),1,{"name":"compare","hash":{"operator":"=="},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":184,"column":16},"end":{"line":188,"column":28}}})) != null ? stack1 : "")
    + "                <!--\n"
    + ((stack1 = (lookupProperty(helpers,"compare")||(depth0 && lookupProperty(depth0,"compare"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"returnUrl") : depth0),"",{"name":"compare","hash":{"operator":"!="},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":190,"column":20},"end":{"line":192,"column":32}}})) != null ? stack1 : "")
    + "                    -->\n";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"compare")||(depth0 && lookupProperty(depth0,"compare"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"isNew") : depth0),1,{"name":"compare","hash":{"operator":"!="},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":185,"column":20},"end":{"line":187,"column":32}}})) != null ? stack1 : "");
},"26":function(container,depth0,helpers,partials,data) {
    return "                        <button class=\"button--article-link js-orm-draft\" type=\"button\">Save as new draft version</button>\n";
},"28":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <a class=\"button--article-link\" href=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"returnUrl") || (depth0 != null ? lookupProperty(depth0,"returnUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"returnUrl","hash":{},"data":data,"loc":{"start":{"line":191,"column":62},"end":{"line":191,"column":77}}}) : helper)))
    + "\">Cancel</a>\n";
},"30":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"compare")||(depth0 && lookupProperty(depth0,"compare"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"isDraft") : depth0),1,{"name":"compare","hash":{"operator":"!="},"fn":container.program(31, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":198,"column":16},"end":{"line":201,"column":28}}})) != null ? stack1 : "");
},"31":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <button class=\"button button--article-state button--article-publish restore\" type=\"button\">Restore</button>\n                    <a class=\"button--article-link\" href=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"cancelVersionRestoreUrl") || (depth0 != null ? lookupProperty(depth0,"cancelVersionRestoreUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"cancelVersionRestoreUrl","hash":{},"data":data,"loc":{"start":{"line":200,"column":58},"end":{"line":200,"column":87}}}) : helper)))
    + "\">Return to current</a>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"cms_from_various_snippets_container panel panel-info content-block-sidebar "
    + alias4(((helper = (helper = lookupProperty(helpers,"className") || (depth0 != null ? lookupProperty(depth0,"className") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"className","hash":{},"data":data,"loc":{"start":{"line":1,"column":87},"end":{"line":1,"column":102}}}) : helper)))
    + "\">\n    <div class=\"article-state-controls\">\n\n        <div class=\"article-state-controls__toggle-preview js-sidebar-preview-area\">\n\n            <div class=\"state-toggle\">\n                <input class=\"switch-toggle-input visuallyhidden\" type=\"checkbox\" id=\"state-toggle-input\" name=\"state-toggle\" value=\"\" "
    + ((stack1 = (lookupProperty(helpers,"compare")||(depth0 && lookupProperty(depth0,"compare"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"enabled") : depth0),1,{"name":"compare","hash":{"operator":"=="},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":135},"end":{"line":7,"column":194}}})) != null ? stack1 : "")
    + ">\n                <label class=\"switch-toggle-label\" for=\"state-toggle-input\">\n                    <div class=\"switch-toggle__switch\"></div>\n                    <div class=\"switch-toggle__label switch-toggle__label--active\">Enabled</div>\n                    <div class=\"switch-toggle__label switch-toggle__label--inactive\">Disabled</div>\n                </label>\n            </div>\n\n"
    + ((stack1 = (lookupProperty(helpers,"compare")||(depth0 && lookupProperty(depth0,"compare"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"canBePreviewed") : depth0),1,{"name":"compare","hash":{"operator":"=="},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":12},"end":{"line":19,"column":24}}})) != null ? stack1 : "")
    + "        </div>\n\n        <ul class=\"js-article-version-list article-version-list\">\n            <li class=\"article-version-list__active-item\">\n                    <!--\n"
    + ((stack1 = (lookupProperty(helpers,"compare")||(depth0 && lookupProperty(depth0,"compare"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"isRestoringFromVersion") : depth0),1,{"name":"compare","hash":{"operator":"!="},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":20},"end":{"line":27,"column":32}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"compare")||(depth0 && lookupProperty(depth0,"compare"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"isRestoringFromVersion") : depth0),1,{"name":"compare","hash":{"operator":"=="},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":20},"end":{"line":32,"column":32}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"compare")||(depth0 && lookupProperty(depth0,"compare"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"isRestoringFromVersion") : depth0),1,{"name":"compare","hash":{"operator":"=="},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":20},"end":{"line":37,"column":32}}})) != null ? stack1 : "")
    + "                    -->\n\n                Versions\n\n                <ul class=\"article-version-list__dropdown\">\n                    <li class=\"article-version-list__item\">\n                        <h2 class=\"article-version-list__cat\">Current version</h2>\n                        <div class=\"article-version-link-item\">\n                            <a class=\"article-version-link article-version-link--current "
    + ((stack1 = (lookupProperty(helpers,"compare")||(depth0 && lookupProperty(depth0,"compare"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"isRestoringFromVersion") : depth0),1,{"name":"compare","hash":{"operator":"!="},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":46,"column":89},"end":{"line":46,"column":159}}})) != null ? stack1 : "")
    + "\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"cancelVersionRestoreUrl") || (depth0 != null ? lookupProperty(depth0,"cancelVersionRestoreUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cancelVersionRestoreUrl","hash":{},"data":data,"loc":{"start":{"line":46,"column":167},"end":{"line":46,"column":196}}}) : helper)))
    + "\">\n                                "
    + alias4(((helper = (helper = lookupProperty(helpers,"currentOrmDateTime") || (depth0 != null ? lookupProperty(depth0,"currentOrmDateTime") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currentOrmDateTime","hash":{},"data":data,"loc":{"start":{"line":47,"column":32},"end":{"line":47,"column":56}}}) : helper)))
    + "\n                                <div class=\"article-version-link__name\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"currentOrmAuthor") || (depth0 != null ? lookupProperty(depth0,"currentOrmAuthor") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currentOrmAuthor","hash":{},"data":data,"loc":{"start":{"line":48,"column":72},"end":{"line":48,"column":94}}}) : helper)))
    + "</div>\n                            </a>\n                        </div>\n                    </li>\n\n"
    + ((stack1 = (lookupProperty(helpers,"ifNotEmpty")||(depth0 && lookupProperty(depth0,"ifNotEmpty"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"history") : depth0)) != null ? lookupProperty(stack1,"drafts") : stack1),{"name":"ifNotEmpty","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":53,"column":20},"end":{"line":68,"column":35}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"ifNotEmpty")||(depth0 && lookupProperty(depth0,"ifNotEmpty"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"history") : depth0)) != null ? lookupProperty(stack1,"versions") : stack1),{"name":"ifNotEmpty","hash":{},"fn":container.program(18, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":70,"column":20},"end":{"line":85,"column":35}}})) != null ? stack1 : "")
    + "\n                    <!--\n                    <li class=\"article-version-list__item\">\n                        <h2 class=\"article-version-list__cat\">Drafts</h2>\n                        <div class=\"article-version-link-item\">\n                            <a class=\"article-version-link active\" href=\"#\">\n                                15/02/2021 @ 09:57am\n                                <div class=\"article-version-link__name\">John Smith</div>\n                            </a>\n                            <button class=\"icon article-version-link__remove\" title=\"Remove this\">Remove</button>\n                        </div>\n                    </li>\n                    <li class=\"article-version-list__item\">\n                        <h2 class=\"article-version-list__cat\">Revisions</h2>\n                        <div class=\"article-version-link-item\">\n                            <a class=\"article-version-link\" href=\"#\">\n                                15/02/2021 @ 09:57am\n                                <div class=\"article-version-link__name\">John Smith</div>\n                            </a>\n                            <button class=\"icon article-version-link__remove\" title=\"Remove this\">Remove</button>\n                        </div>\n                        <div class=\"article-version-link-item\">\n                            <a class=\"article-version-link\" href=\"#\">\n                                15/02/2021 @ 09:57am\n                                <div class=\"article-version-link__name\">John Smith</div>\n                            </a>\n                            <button class=\"icon article-version-link__remove\" title=\"Remove this\">Remove</button>\n                        </div>\n                        <div class=\"article-version-link-item\">\n                            <a class=\"article-version-link\" href=\"#\">\n                                15/02/2021 @ 09:57am\n                                <div class=\"article-version-link__name\">John Smith</div>\n                            </a>\n                            <button class=\"icon article-version-link__remove\" title=\"Remove this\">Remove</button>\n                        </div>\n                        <div class=\"article-version-link-item\">\n                            <a class=\"article-version-link\" href=\"#\">\n                                15/02/2021 @ 09:57am\n                                <div class=\"article-version-link__name\">John Smith</div>\n                            </a>\n                            <button class=\"icon article-version-link__remove\" title=\"Remove this\">Remove</button>\n                        </div>\n                        <div class=\"article-version-link-item\">\n                            <a class=\"article-version-link\" href=\"#\">\n                                15/02/2021 @ 09:57am\n                                <div class=\"article-version-link__name\">John Smith</div>\n                            </a>\n                            <button class=\"icon article-version-link__remove\" title=\"Remove this\">Remove</button>\n                        </div>\n                        <div class=\"article-version-link-item\">\n                            <a class=\"article-version-link\" href=\"#\">\n                                15/02/2021 @ 09:57am\n                                <div class=\"article-version-link__name\">John Smith</div>\n                            </a>\n                            <button class=\"icon article-version-link__remove\" title=\"Remove this\">Remove</button>\n                        </div>\n                        <div class=\"article-version-link-item\">\n                            <a class=\"article-version-link\" href=\"#\">\n                                15/02/2021 @ 09:57am\n                                <div class=\"article-version-link__name\">John Smith</div>\n                            </a>\n                            <button class=\"icon article-version-link__remove\" title=\"Remove this\">Remove</button>\n                        </div>\n                        <div class=\"article-version-link-item\">\n                            <a class=\"article-version-link\" href=\"#\">\n                                15/02/2021 @ 09:57am\n                                <div class=\"article-version-link__name\">John Smith</div>\n                            </a>\n                            <button class=\"icon article-version-link__remove\" title=\"Remove this\">Remove</button>\n                        </div>\n                        <div class=\"article-version-link-item\">\n                            <a class=\"article-version-link\" href=\"#\">\n                                15/02/2021 @ 09:57am\n                                <div class=\"article-version-link__name\">John Smith</div>\n                            </a>\n                            <button class=\"icon article-version-link__remove\" title=\"Remove this\">Remove</button>\n                        </div>\n                        -->\n                    </li>\n                </ul>\n            </li>\n        </ul>\n\n\n        <div class=\"buttons--article-state js-submit-area-sidebar\">\n            <!-- Drafts -->\n"
    + ((stack1 = (lookupProperty(helpers,"compare")||(depth0 && lookupProperty(depth0,"compare"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"isRestoringFromVersion") : depth0),1,{"name":"compare","hash":{"operator":"=="},"fn":container.program(21, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":172,"column":12},"end":{"line":179,"column":24}}})) != null ? stack1 : "")
    + "\n            <!-- Current -->\n"
    + ((stack1 = (lookupProperty(helpers,"compare")||(depth0 && lookupProperty(depth0,"compare"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"isRestoringFromVersion") : depth0),1,{"name":"compare","hash":{"operator":"!="},"fn":container.program(24, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":182,"column":12},"end":{"line":194,"column":24}}})) != null ? stack1 : "")
    + "\n            <!-- Version -->\n"
    + ((stack1 = (lookupProperty(helpers,"compare")||(depth0 && lookupProperty(depth0,"compare"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"isRestoringFromVersion") : depth0),1,{"name":"compare","hash":{"operator":"=="},"fn":container.program(30, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":197,"column":12},"end":{"line":202,"column":24}}})) != null ? stack1 : "")
    + "        </div>\n    </div>\n\n    <div class=\"panel-heading\">\n        <i class=\"fa fa-info-circle\"></i> Content overview\n    </div>\n    <div class=\"panel-body scroll-content\"></div>\n</div>\n";
},"useData":true,"useDepths":true});
})();