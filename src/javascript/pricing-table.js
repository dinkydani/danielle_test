$(function(){

  "use strict";

  $(".pricing-table").on("click", ".cell:not(.cell-header):nth-last-child(-n+3)", function(){

    $(this).siblings().removeClass("selected");
    $(this).toggleClass("selected");

  });


  var render_templates = function () {
    Handlebars.registerHelper("inc", function(value, options) {
      return parseInt(value) + 1;
    });

    var template = Squarecat.templates["src/templates/products.hbs"];
    var data = $.getJSON("data/products.json", function (data) {
      $(".pricing-table").html(template(data));
    });
  };

  render_templates();
  
});