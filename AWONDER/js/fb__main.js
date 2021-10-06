window.addEventListener('DOMContentLoaded', e => {
	const visualSlider = new Swiper('.js__visual__slider', {
		loop: true,
	  
		pagination: {
		  el: '.js__visual__pagination',
		},
	  
		navigation: {
		  nextEl: '.js__visual__next-btn',
		  prevEl: '.js__visual__prev-btn',
		},
	});

	const historySlider = new Swiper('.js__history__slider', {
		loop: true,
		effect: "fade",
	});

	const brandSlider = new Swiper('.js__brand__slider', {
		loop: false,

		pagination: {
			el: '.js__brand__pagination',
		},
	
		navigation: {
			nextEl: '.js__brand__next-btn',
			prevEl: '.js__brand__prev-btn',
		},
	});

	const bestProductSlider = new Swiper('.js__best-product__slider', {
		loop: false,

		slidesPerView: 3,
		spaceBetween: 60,
	});

	const middleBannerSlider = new Swiper('.js__middle-banner__slider', {
		loop: true,

		pagination: {
			el: '.js__middle-banner__pagination',
		  },
		
		  navigation: {
			nextEl: '.js__middle-banner__next-btn',
			prevEl: '.js__middle-banner__prev-btn',
		  },
	});
});