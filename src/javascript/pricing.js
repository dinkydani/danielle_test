var Squarecat = window.Squarecat || {};

$(function(){

  "use strict";

  var selectedProducts = {};

  Handlebars.registerHelper("inc", function(value, options) {
    return parseInt(value) + 1;
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
    renderCartItems();
  };

  var clickCartDelete = function (e) {
    var productName = $(e.currentTarget).data("cartProductName");
    var $selectedCell = $("[data-product-name='" + productName + "'] .cell.selected");
    $selectedCell.toggleClass("selected");
    delete selectedProducts[productName];
    renderCartItems();
  };


  $(".pricing-table").on("click", ".cell.selectable", clickSelectableCell);

  $(".pricing-cart-items").on("click", ".pricing-cart-item-delete", clickCartDelete);
  

  var renderCartItems = function () {
    var cartTemplate = Squarecat.templates["src/templates/pricing-cart.hbs"];
    $(".pricing-cart-items").html(cartTemplate(selectedProducts));
    $(".header-cart-amount").text("£" + calculateTotalPrice());
  };

  var calculateTotalPrice = function () {
    var total = 0;
    console.log(selectedProducts);
    $.each(selectedProducts, function (key, item){
      total += parseInt(item);
    });
    return total;
  };

  var renderTemplates = function () {

    var productsTemplate = Squarecat.templates["src/templates/pricing-products.hbs"];
    var data = $.getJSON("data/products.json", function (data) {
      $(".pricing-table").html(productsTemplate(data));
    });

    renderCartItems();

  };


  renderTemplates();
  

  var $pricingTable = $(".pricing-table");
  var $tableHeader = $(".pricing-table .table-header");
  var $cartHeader = $(".pricing-cart-header");
  var $cartItems = $(".pricing-cart-items");

  $(window).on("scroll", function () {
    var scrollTop = $(this).scrollTop();
    var viewportHeight = $(window).height();
    //when scrolltop plus viewport equals table plus header 

    var pricingTableHeight = $pricingTable.height();
    var tableHeaderHeight = $tableHeader.height();
    var cartHeaderHeight = $cartHeader.height();

    var offsetTop = $pricingTable.offset().top + tableHeaderHeight + cartHeaderHeight * 2;
    var offsetBottom = $pricingTable.offset().top + pricingTableHeight + cartHeaderHeight;

    var topCond = (scrollTop + viewportHeight) > offsetTop;
    var bottomCond = (scrollTop + viewportHeight) < offsetBottom;

    if(topCond && bottomCond) {
      $cartHeader.addClass("fixed");
    } else {
      $cartHeader.removeClass("fixed");
    }
  });



  
});