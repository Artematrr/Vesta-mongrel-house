new Swiper('.histories__swiper', {
	grabCursor: true,
	slidesPerView: 1,
	spaceBetween: 30,

	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		1440: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		2560: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
})

new Swiper('.gallery__swiper', {
	grabCursor: true,
	slidesPerView: 1,
	spaceBetween: 15,
	breakpoints: {
		320: {
			centeredSlides: true,
			slidesPerView: 1.1,
			spaceBetween: 15,
		},
		540: {
			centeredSlides: true,
			slidesPerView: 2.2,
			spaceBetween: 15,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		1440: {
			slidesPerView: 5,
			spaceBetween: 30,
		},
		2560: {
			slidesPerView: 6,
			spaceBetween: 30,
		},
	},
})

new Swiper('.news__swiper', {
	grabCursor: true,
	slidesPerView: 1,
	spaceBetween: 15,
	breakpoints: {
		320: {
			centeredSlides: true,
			slidesPerView: 1,
			spaceBetween: 15,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		1440: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},
})

new Swiper('.partner__swiper', {
	grabCursor: true,
	slidesPerView: 1,
	spaceBetween: 15,
	breakpoints: {
		320: {
			centeredSlides: true,
			slidesPerView: 1.5,
			spaceBetween: 15,
		},
		480: {
			centeredSlides: true,
			slidesPerView: 2,
			spaceBetween: 15,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		992: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
		1440: {
			slidesPerView: 5,
			spaceBetween: 30,
		},
	},
})

new Swiper('.animals__swiper', {
	grabCursor: true,
	slidesPerView: 1,
	spaceBetween: 15,
	breakpoints: {
		540: {
			centeredSlides: true,
			slidesPerView: 1,
			spaceBetween: 15,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		1440: {
			slidesPerView: 5,
			spaceBetween: 30,
		},
		2560: {
			slidesPerView: 6,
			spaceBetween: 30,
		},
	},
})

new Swiper('.animals__tabs', {
	slidesPerView: 'auto',
	spaceBetween: 10,
	mousewheel: true,
	freeMode: true,
	scrollbar: {
		el: '.swiper-scrollbar',
	},
})

const animalSwiper = new Swiper('.animal__swiper', {
	grabCursor: true,
	slidesPerView: 1,
	spaceBetween: 10,
	watchSlidesProgress: true,
	breakpoints: {
		320: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
	},
	navigation: {
		prevEl: '.swiper-button-prev',
		nextEl: '.swiper-button-next',
	},
})

const animalSwiperPreview = new Swiper('.animal__swiper-preview', {
	grabCursor: true,
	slidesPerView: 1,
	spaceBetween: 30,
	thumbs: { swiper: `.animal__swiper` },
})
