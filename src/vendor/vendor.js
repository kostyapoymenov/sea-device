import './go-top/go-top'

// Swiper carousel

import Swiper, { Navigation, Pagination, EffectCoverflow } from 'swiper';

const swiper = new Swiper('#mainSwiper', {
  loop: true,
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const swiperSales = new Swiper('#salesSlider', {
  // loop: true,
  modules: [Navigation],
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 4,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    }
  }
});

const swiperStocks = new Swiper('#stocksSlider', {
  modules: [Navigation, Pagination, EffectCoverflow],
  grabCursor: true,
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".stocks-btn-next",
    prevEl: ".stocks-btn-prev",
  },
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 30,
    slideShadows: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    }
  }
});
