$(function(){

    $(".pricing-table").on("click", ".cell:not(.cell-header):nth-last-child(-n+3)", function(){

      $(this).siblings().removeClass("selected");
      $(this).toggleClass("selected");

    });

});