$(document).ready(function () {
  $(".wrapper").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    speed:300,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      
      {
        breakpoint: 991,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });


  // owlcarousel
  $(document).ready(function(){
    $('.owl-carousel').owlCarousel();
  });
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

