this["Squarecat"] = this["Squarecat"] || {};
this["Squarecat"]["templates"] = this["Squarecat"]["templates"] || {};

this["Squarecat"]["templates"]["src/templates/pricing-cart.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "  <div class=\"row\"></span>\n    <span class=\"cell\"><i class=\"pricing-cart-item-delete fa fa-times-circle fa-2x\"data-cart-product-name="
    + alias3(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "></i></span>\n    <span class=\"cell pricing-cart-product-name\">"
    + alias3(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "</span>\n    <span class=\"cell\">£"
    + alias3(this.lambda(depth0, depth0))
    + "</span>\n  </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"pricing-cart-header\">\n  <p class=\"header-cart-text\">£"
    + this.escapeExpression((helpers.calculateTotalPrice || (depth0 && depth0.calculateTotalPrice) || helpers.helperMissing).call(depth0,depth0,{"name":"calculateTotalPrice","hash":{},"data":data}))
    + "</p>\n  <p class=\"header-cart-text\">Total</p>\n</div>\n\n<div class=\"pricing-cart-items\">\n"
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n\n<div class=\"pricing-cart-button\">\n  <div class=\"btn btn-green\">\n    <a href=\"#\">Checkout</a>\n  </div>\n</div>";
},"useData":true});

this["Squarecat"]["templates"]["src/templates/pricing-products.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, alias4=this.lambda;

  return "  <div class=\"row\" data-product-name="
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + ">\n    <span class=\"cell\"><img src=\"assets/pricing_images/table_icon"
    + alias3((helpers.inc || (depth0 && depth0.inc) || alias1).call(depth0,(data && data.index),{"name":"inc","hash":{},"data":data}))
    + ".png\" alt=\"\"></span>\n    <span class=\"cell\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "<br>"
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "</span>\n    <span class=\"cell selectable\" data-product-price="
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.prices : depth0)) != null ? stack1.basic : stack1), depth0))
    + ">£"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.prices : depth0)) != null ? stack1.basic : stack1), depth0))
    + "</span>\n    <span class=\"cell selectable\" data-product-price="
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.prices : depth0)) != null ? stack1.pro : stack1), depth0))
    + ">£"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.prices : depth0)) != null ? stack1.pro : stack1), depth0))
    + "</span>\n    <span class=\"cell selectable\" data-product-price="
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.prices : depth0)) != null ? stack1.ultimate : stack1), depth0))
    + ">£"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.prices : depth0)) != null ? stack1.ultimate : stack1), depth0))
    + "</span>\n  </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"row table-header\">\n  <span class=\"cell cell-header\">Item</span>\n  <span class=\"cell cell-header\">Description</span>\n  <span class=\"cell cell-header\">BASIC</span>\n  <span class=\"cell cell-header\">PRO</span>\n  <span class=\"cell cell-header\">ULT</span>\n</div>\n\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.products : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});