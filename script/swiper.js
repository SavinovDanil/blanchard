window.addEventListener('DOMContentLoaded', function() {

	// Swiper ------------------------------------------------------------------
	const swiper = new Swiper('.swiper', {
		// Optional parameters
		// direction: 'horizontal',
		// loop: true,
		slidesPerView:1,
		spaceBetween: 10,
		speed:2000,
		autoplay: {
			delay:2000
		},
		effect: "fade",
		allowTouchMove: false,
		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});



	// Second Swiper ---------------------------------------------------------------
	new Swiper('.image-slider', {
		navigation: {
			nextEl: '.gallery__swiper-button-next',
			prevEl: '.gallery__swiper-button-prev'
		},

		pagination: {
			el: '.gallery__swiper-fraction',
			type: 'fraction',
			// clickable: true,
		},

		a11y: {
      prevSlideMessage: 'Предудщий слайд',
      nextSlideMessage: 'Следующий слайд',
    },

		grid: {
			rows:2
		},
		breakpoints: {
			320: {
				slidesPerGroup:1,
				slidesPerView: 1,
				grid: {
					rows: 1
				},
				spaceBetween: 0
			},
			576: {
				slidesPerGroup:2,
				slidesPerView: 2,
				grid: {
					rows: 2
				},
				spaceBetween: 30
			},
	
			1200: {
				slidesPerGroup:3,
				slidesPerView: 3,
				grid: {
					rows: 2
				},
				spaceBetween: 50
			}
		},
		// Кол-во слайдов для показа
		slidesPerView: '3',

		// Отступы между слайдами
		spaceBetween: 50,

		// Кол-во пролистываемых слайдов
		slidesPerGroup:3,
		// Кол-во колонок
		slidesPerColumn:2,
	})

	new Swiper('.event__block', {
		// Кол-во слайдов для показа
		slidesPerView: 1,

		// Отступы между слайдами
		spaceBetween: 50,

		// Кол-во пролистываемых слайдов
		slidesPerGroup:1,

		navigation: {
			nextEl: '.event-button-next',
			prevEl: '.event-button-prev'
		},


		pagination: {
			el: '.event-pagination',
			// clickable:true,
			// type: 'fraction',
		},
		
		breakpoints: {
			320: {
				slidesPerGroup:1,
				slidesPerView: 1,
				spaceBetween: 30
			},
			568: {
				slidesPerGroup:1,
				slidesPerView: 2,
				spaceBetween: 30
			},
			
			769: {
				slidesPerGroup:1,
				slidesPerView: 3,
				spaceBetween: 30
			},
	
			1200: {
				slidesPerGroup:1,
				slidesPerView: 3,
				spaceBetween: 50
			}
		},

	})


	// EDITION SWIPER 

	new Swiper('.edition__swiper', {
		navigation: {
			nextEl: '.edition__swiper-button-next',
			prevEl: '.edition__swiper-button-prev'
		},

		a11y: {
      prevSlideMessage: 'Предудщий слайд',
      nextSlideMessage: 'Следующий слайд',
    },

		pagination: {
			el: '.edition__swiper-fraction',
			type: 'fraction',
		},

		grid: {
			rows:1
		},
		breakpoints: {
			320: {
				slidesPerGroup:2,
				slidesPerView: 2,
				grid: {
					rows: 1
				},
				spaceBetween: 15
			},
			576: {
				slidesPerGroup:2,
				slidesPerView: 2,
				grid: {
					rows: 1
				},
				spaceBetween: 34
			},

			992: {
				slidesPerGroup:2,
				slidesPerView: 2,
				grid: {
					rows: 1
				},
				spaceBetween: 50
			},
	
			1200: {
				slidesPerGroup:1,
				slidesPerView: 3,
				grid: {
					rows: 1
				},
				spaceBetween: 50
			}
		},
		// Кол-во слайдов для показа
		slidesPerView: '3',

		// Отступы между слайдами
		spaceBetween: 50,

		// Кол-во пролистываемых слайдов
		slidesPerGroup:1,
		// Кол-во колонок
	})

	new Swiper('.project__slider', {
		navigation: {
			nextEl: '.projects__swiper-button-next',
			prevEl: '.projects__swiper-button-prev'
		},

		a11y: {
      prevSlideMessage: 'Предудщий слайд',
      nextSlideMessage: 'Следующий слайд',
    },

		slidesPerView:3,
		spaceBetween:50,
		slidesPerGroup:1,

		breakpoints: {
			320: {
				slidesPerGroup:1,
				slidesPerView: 1,
				grid: {
					rows: 1
				},
				spaceBetween: 15
			},
			576: {
				slidesPerGroup:1,
				slidesPerView: 2,
				grid: {
					rows: 1
				},
				spaceBetween: 34
			},

			992: {
				slidesPerGroup:1,
				slidesPerView: 2,
				grid: {
					rows: 1
				},
				spaceBetween: 50
			},
	
			1200: {
				slidesPerGroup:1,
				slidesPerView: 3,
				grid: {
					rows: 1
				},
				spaceBetween: 50
			}
		}
	})
	
})


