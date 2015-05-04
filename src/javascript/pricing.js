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

    var productName = $(e.currentTarget).closest(".row").data("productName");

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
    var productName = $(e.currentTarget).data("cartProductName");
    var $selectedCell = $("[data-product-name='" + productName + "'] .cell.selected");
    $selectedCell.toggleClass("selected");
    delete selectedProducts[productName];
    renderCart();  
  };


  $(".pricing-table").on("click", ".cell.selectable", clickSelectableCell);

  $(".pricing-cart-panel").on("click", ".pricing-cart-item-delete", clickCartDelete);
  

  var renderCart = function () {
    var cartTemplate = Squarecat.templates["src/templates/pricing-cart.hbs"];
    $(".pricing-cart-panel").html(cartTemplate(selectedProducts));
  };

  var renderTemplates = function () {

    var productsTemplate = Squarecat.templates["src/templates/pricing-products.hbs"];
    var data = $.getJSON("data/products.json", function (data) {
      $(".pricing-table").html(productsTemplate(data));
    });

    renderCart();

  };


  renderTemplates();
  

  var $pricingTable = $(".pricing-table");
  var $tableHeader = $(".pricing-table .table-header");
  var $cartHeader = $(".pricing-cart-header");
  var $pricingCartHeader = $(".pricing-cart-header");

  $(window).on("scroll", function () {
    var scrollTop = $(this).scrollTop();
    var viewportHeight = $(window).height();
    //when scrolltop plus viewport equals table plus header 

    var pricingTableHeight = $pricingTable.height();
    var tableHeaderHeight = $tableHeader.height();
    var cartHeaderHeight = $cartHeader.height();

    var offsetTop = $pricingTable.offset().top + tableHeaderHeight + cartHeaderHeight;
    var offsetBottom = $pricingTable.offset().top + pricingTableHeight + cartHeaderHeight;;

    var topCond = (scrollTop + viewportHeight) > offsetTop;
    var botCond = (scrollTop + viewportHeight) < offsetBottom;

    if(topCond && botCond) {
      $pricingCartHeader.addClass("fixed");
    } else {
      $pricingCartHeader.removeClass("fixed");
    }
  });



  
});