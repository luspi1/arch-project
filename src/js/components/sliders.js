import { Swiper } from 'swiper/bundle'

const swiperServices = new Swiper('.swiper-services', {
	navigation: {
		nextEl: '.services-swiper-button-next',
		prevEl: '.services-swiper-button-prev',
	},
	spaceBetween: 20,
	pagination: {
		el: '.swiper-pagination',
	},
})

const swiperFeatures = new Swiper('.swiper-features', {
	navigation: {
		nextEl: '.features-swiper-button-next',
		prevEl: '.features-swiper-button-prev',
	},
	slidesPerView: 1,
	spaceBetween: 50,
	pagination: {
		el: '.swiper-pagination',
	},
})

const swiperCommand = new Swiper('.swiper-command', {
	navigation: {
		nextEl: '.command-swiper-button-next',
		prevEl: '.command-swiper-button-prev',
	},
	slidesPerView: 1,
	spaceBetween: 55,
	pagination: {
		el: '.swiper-pagination',
	},
	breakpoints: {
		576: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
		1024: {
			slidesPerView: 4,
		},
	},
})

const swiperProjects = new Swiper('.swiper-projects', {
	navigation: {
		nextEl: '.projects-swiper-button-next',
		prevEl: '.projects-swiper-button-prev',
	},
	spaceBetween: 350,
	slidesPerView: 'auto',
	centeredSlides: true,
	pagination: {
		el: '.swiper-pagination',
	},
})

const swiperClients = new Swiper('.swiper-clients', {
	navigation: {
		nextEl: '.clients-swiper-button-next',
		prevEl: '.clients-swiper-button-prev',
	},
	slidesPerView: 1,
	spaceBetween: 50,
	pagination: {
		el: '.swiper-pagination',
	},
	breakpoints: {
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
		1200: {
			slidesPerView: 4,
		},
	},
})
