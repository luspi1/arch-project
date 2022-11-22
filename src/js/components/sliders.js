import { Swiper } from "swiper/bundle";

const swiperServices = new Swiper(".swiper-services", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


const swiperFeatures = new Swiper(".swiper-features", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
});

const swiperCommand = new Swiper(".swiper-command", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 4,
  spaceBetween: 25,
});

const swiperProjects = new Swiper(".swiper-projects", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 350,
  slidesPerView: "auto",
  centeredSlides: true,
});

const swiperClients = new Swiper(".swiper-clients", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 6,
  spaceBetween: 52,
  freeMode: true,
});


