// Generated by CoffeeScript 1.9.3
(function() {
  $(document).ready(function() {
    $('.owl-carousel-main').owlCarousel({
      singleItem: true,
      dots: true,
      autoplay: true
    });
    $('.owl-carousel__reddots').owlCarousel({
      singleItem: true,
      dots: true,
      autoplay: true
    });
    $(".owl-carousel__popular-tours").owlCarousel({
      items: 4,
      margin: 100,
      dots: true,
      autoWidth: true
    });
    return $('.owl-carousel__testimonials').owlCarousel({
      navigation: true,
      navigationText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
      singleItem: true,
      pagination: false,
      loop: false
    });
  });

}).call(this);

//# sourceMappingURL=main.js.map
