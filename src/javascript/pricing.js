var Squarecat = window.Squarecat || {};

$(function(){

  "use strict";

  var productsTemplate = Squarecat.templates["src/templates/pricing-products.hbs"];
  var cartTemplate = Squarecat.templates["src/templates/pricing-cart.hbs"];

  var $pricingTable = $(".pricing-table");
  var $pricingTableHeader = $(".pricing-table .table-header");

  var $pricingCartPanel = $(".pricing-cart-panel");
  var $pricingCartHeader = $(".pricing-cart-header");
  var $pricingCartItems = $(".pricing-cart-items");
  var $pricingDescription = $(".pricing-description");

  var selectedProducts = {};


  var initialise = function () {
    renderTemplates().then(function (data) {

      $pricingTable.html(productsTemplate(data));

      setupEventHandlers();

    });
  };

  Handlebars.registerHelper("inc", function (value, options) {
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

  var renderCartItems = function () {

    $pricingCartItems.html(cartTemplate(selectedProducts));
    $(".header-cart-amount").text("£" + calculateTotalPrice());
    
    var scrollTop = $(window).scrollTop();
    calculateCartAffixDesktop(scrollTop);

  };

  var calculateTotalPrice = function () {
    var total = 0;
    $.each(selectedProducts, function (key, item){
      total += parseInt(item);
    });
    return total;
  };

  var renderTemplates = function () {
    return $.getJSON("data/products.json");
  };

  var setupEventHandlers = function () {
    $pricingTable.on("click", ".cell.selectable", clickSelectableCell);
    $pricingCartItems.on("click", ".pricing-cart-item-delete", clickCartDelete);
    $(window).on("scroll", handleWindowScroll);
  };

  var calculateCartAffixDesktop = function (scrollTop) {
    var $panelTop = $pricingCartPanel.offset().top;
    var whereToAffix = $pricingDescription.offset().top + $pricingDescription.outerHeight() - $pricingCartHeader.height();

    var tablePadding = parseInt($pricingTable.css("padding-bottom"));
    var tableBottom = $pricingTable.offset().top + ($pricingTable.height() + tablePadding) - $pricingCartPanel.height();

    // If not fixed and window scrolled past
    if (!$pricingCartPanel.hasClass("fixed") && scrollTop > $panelTop) {
      $pricingCartPanel.addClass("fixed");
    } 
    // Window scroll up past original affixed point
    else if (scrollTop < whereToAffix) {
      $pricingCartPanel.removeClass("fixed");
    }
    // Leave box at the bottom if scrolled past
    else if (!$pricingCartPanel.hasClass("bottom") && scrollTop > tableBottom) {
      $pricingCartPanel.addClass("bottom");
    }
    // Box has been left at the bottom and scroll up again
    else if ($pricingCartPanel.hasClass("bottom") && scrollTop < tableBottom) {
      $pricingCartPanel.removeClass("bottom");
    }
  };

  var calculateCartAffixMobileTablet = function (scrollTop) {
    var viewportHeight = $(window).height();
    
    var pricingTableHeight = $pricingTable.height();
    var pricingTableHeaderHeight = $pricingTableHeader.height();

    var pricingCartHeaderHeight = $pricingCartHeader.height();

    var tableTop = $pricingTable.offset().top + pricingTableHeaderHeight + pricingCartHeaderHeight;
    var tableBottom = $pricingTable.offset().top + pricingTableHeight + pricingCartHeaderHeight * 2;

    var affixTop = (scrollTop + viewportHeight) > tableTop;
    var affixBottom = (scrollTop + viewportHeight) < tableBottom;

    if (affixTop && affixBottom) {
      $pricingCartHeader.addClass("fixed");
    } else {
      $pricingCartHeader.removeClass("fixed");
    }
  };

  var handleWindowScroll = function (e) {

    var scrollTop = $(e.currentTarget).scrollTop();
    var windowWidth = $(e.currentTarget).width();
    
    if (windowWidth < 1024) {
      calculateCartAffixMobileTablet(scrollTop);
    } 
    else {
      calculateCartAffixDesktop(scrollTop);
    }
  };

  initialise();
  
});