// // script.js

// (function($) {
//   "use strict";

//   var initSwiper = function() {
//     // Main Swiper initialization
//     var swiper = new Swiper('.swiper-container', {
//       modules: [Navigation, Pagination],
//       speed: 500,
//       pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//       },
//     });

//     var category_swiper = new Swiper('.category-carousel', {
//       modules: [Navigation],
//       slidesPerView: 8,
//       spaceBetween: 30,
//       speed: 500,
//       navigation: {
//         nextEl: '.category-carousel-next',
//         prevEl: '.category-carousel-prev',
//       },
//       breakpoints: {
//         0: {
//           slidesPerView: 2,
//         },
//         768: {
//           slidesPerView: 3,
//         },
//         991: {
//           slidesPerView: 5,
//         },
//         1500: {
//           slidesPerView: 8,
//         },
//       }
//     });

//     $(".products-carousel").each(function(){
//       var $el_id = $(this).attr('id');
//       var products_swiper = new Swiper("#" + $el_id + " .swiper", {
//         modules: [Navigation],
//         slidesPerView: 5,
//         spaceBetween: 30,
//         speed: 500,
//         navigation: {
//           nextEl: "#" + $el_id + " .products-carousel-next",
//           prevEl: "#" + $el_id + " .products-carousel-prev",
//         },
//         breakpoints: {
//           0: {
//             slidesPerView: 1,
//           },
//           768: {
//             slidesPerView: 3,
//           },
//           991: {
//             slidesPerView: 4,
//           },
//           1500: {
//             slidesPerView: 5,
//           },
//         }
//       });
//     });

//     // Thumbnail and large slider setup
//     var thumb_slider = new Swiper(".product-thumbnail-slider", {
//       modules: [],
//       slidesPerView: 5,
//       spaceBetween: 20,
//       direction: "vertical",
//       breakpoints: {
//         0: {
//           direction: "horizontal"
//         },
//         992: {
//           direction: "vertical"
//         },
//       },
//     });

//     var large_slider = new Swiper(".product-large-slider", {
//       modules: [],
//       slidesPerView: 1,
//       spaceBetween: 0,
//       effect: 'fade',
//       thumbs: {
//         swiper: thumb_slider,
//       },
//       pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//       },
//     });
//   }

//   // Document ready
//   $(document).ready(function() {
//     initSwiper();
//   });
// })(jQuery);
