window.addEventListener('DOMContentLoaded', e => {
	
	const initSliders = () => {
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
	
		const wonderClubSlider = new Swiper('.js__wonder-club__slider', {
			loop: true,
	
			slidesPerView: 'auto',
			loopedSlides: 5,
			spaceBetween: 0,
			
			navigation: {
				nextEl: '.js__wonder-club__next-btn',
				prevEl: '.js__wonder-club__prev-btn',
			},
		});
	
		const placeSlider = new Swiper('.js__doctors-place__slider', {
			loop: true,
	
			slidesPerView: 'auto',
			centeredSlides: true,
			loopedSlides: 4,
			// spaceBetween: 80,
			
			navigation: {
				nextEl: '.js__doctors-place__next-btn',
				prevEl: '.js__doctors-place__prev-btn',
			},
		});
	
		const eventSlider = new Swiper('.js__event__slider', {
			loop: false,
	
			slidesPerView: 2,
			spaceBetween: 30,
	
			pagination: {
				el: '.js__event__pagination',
			},
			
			navigation: {
				nextEl: '.js__event__next-btn',
				prevEl: '.js__event__prev-btn',
			},
		});
	};

	const bindEvents = () => {
		window.addEventListener('scroll', e => {
			const $header = document.querySelector('.fb__header');
			const $scrollTop = document.querySelector('.scroll-top');

			const scrollClassName = 'is-scroll';

			if(window.scrollY > 0) {
					$header.classList.add(scrollClassName);
					$scrollTop.classList.add('show');
				} else {
					$header.classList.remove(scrollClassName);
					$scrollTop.classList.remove('show');
			}
		});
	};

	const init = () => {
		initSliders();
		bindEvents();
	};

	init();
});