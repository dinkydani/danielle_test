$(function(){

  "use strict";

  var selectedProducts = {};

  Handlebars.registerHelper("inc", function(value, options) {
    return parseInt(value) + 1;
  });

  Handlebars.registerHelper("calculateTotalPrice", function(options){
    var total = 0;
    $.each(this, function (key, item){
      total += parseInt(item);
    });
    return total;
  });

  var clickSelectableCell = function (e) {
    $(this).siblings().removeClass("selected");
    $(this).toggleClass("selected");

    var productName = $(e.currentTarget).closest(".row").data('productName');

    if( $(this).hasClass("selected") ){
      var productPrice = this.getAttribute("data-product-price");
      selectedProducts[productName] = productPrice;
    }
    else {
      delete selectedProducts[productName];
    }
    renderCart();
  };

  var clickCartDelete = function (e) {
    var productName = $(e.currentTarget).data("totalName");
    var $selectedCell = $("[data-product-name='" + productName + "'] .cell.selected");
    $selectedCell.toggleClass("selected");
    delete selectedProducts[productName];
    renderCart();  
  };


  $(".pricing-table").on("click", ".cell.selectable", clickSelectableCell);

  $(".pricing-total-panel").on("click", ".cart-delete", clickCartDelete);
  

  var renderCart = function () {
    var cartTemplate = Squarecat.templates["src/templates/pricingTotal.hbs"];
    $(".pricing-total-panel").html(cartTemplate(selectedProducts));
  };

  var renderTemplates = function () {

    var productsTemplate = Squarecat.templates["src/templates/pricingProducts.hbs"];
    var data = $.getJSON("data/products.json", function (data) {
      $(".pricing-table").html(productsTemplate(data));
    });

    renderCart();

  };


  renderTemplates();

  
});