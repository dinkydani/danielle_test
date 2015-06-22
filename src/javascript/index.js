var Squarecat = window.Squarecat || {};

$(function () {
  
  "use strict";

  var testimonialsTemplate = Squarecat.templates["src/templates/testimonials.hbs"];
  var $testimonialsCarousel = $(".testimonials-carousel");

  var initialise = function () {
    getTestimonials().then(function (data) {

      $testimonialsCarousel.html(testimonialsTemplate(data));
      initCarousel();
    
    });
  };

  var getTestimonials = function () {
    return $.getJSON("data/testimonials.json");
  };

  var initCarousel = function () {
    $testimonialsCarousel.owlCarousel({
      
      autoPlay: true,
      slideSpeed : 300,
      paginationSpeed : 500,
      rewindSpeed: 300,
      singleItem:true

    }); 
  };

  initialise();

});