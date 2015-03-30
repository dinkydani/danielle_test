this["Squarecat"] = this["Squarecat"] || {};
this["Squarecat"]["templates"] = this["Squarecat"]["templates"] || {};

this["Squarecat"]["templates"]["src/templates/products.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3="function", buffer = 
  "  <div class=\"row\">\n    <span class=\"cell\"><img src=\"assets/pricing_images/table_icon"
    + alias2((helpers.inc || (depth0 && depth0.inc) || alias1).call(depth0,(data && data.index),{"name":"inc","hash":{},"data":data}))
    + ".png\" alt=\"\"></span>\n    <span class=\"cell\">"
    + alias2(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "<br>"
    + alias2(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "</span>\n";
  stack1 = ((helper = (helper = helpers.prices || (depth0 != null ? depth0.prices : depth0)) != null ? helper : alias1),(options={"name":"prices","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias3 ? helper.call(depth0,options) : helper));
  if (!helpers.prices) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "  </div>\n";
},"2":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "      <span class=\"cell\">£"
    + alias3(((helper = (helper = helpers.basic || (depth0 != null ? depth0.basic : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"basic","hash":{},"data":data}) : helper)))
    + "</span>\n      <span class=\"cell\">£"
    + alias3(((helper = (helper = helpers.pro || (depth0 != null ? depth0.pro : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"pro","hash":{},"data":data}) : helper)))
    + "</span>\n      <span class=\"cell\">£"
    + alias3(((helper = (helper = helpers.ultimate || (depth0 != null ? depth0.ultimate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"ultimate","hash":{},"data":data}) : helper)))
    + "</span>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<div class=\"row table-header\">\n  <span class=\"cell cell-header\">Item</span>\n  <span class=\"cell cell-header\">Description</span>\n  <span class=\"cell cell-header\">BASIC</span>\n  <span class=\"cell cell-header\">PRO</span>\n  <span class=\"cell cell-header\">ULT</span>\n</div>\n\n";
  stack1 = ((helper = (helper = helpers.products || (depth0 != null ? depth0.products : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"products","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.products) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});