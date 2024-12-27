import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const swiper = new Swiper('.swiper-container', {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
