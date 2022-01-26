window.addEventListener('DOMContentLoaded', function() {

	// Dropdown ----------------------------------------------------------------

  // document.querySelectorAll('.header__bottom-block').forEach(function(el) {
	// 	el.addEventListener('click', function(e) {
  //     const path = e.currentTarget.dataset.path
  //     document.querySelector(`[data-target="${path}"]`).classList.toggle('is-active')
  //   })
  // })

	document.querySelectorAll(".header__bottom-block").forEach(item => {
		item.addEventListener("click", function() {
			let btn = this;
			// console.log(btn)
			let dropdown = this.parentElement.querySelector(".header__bottom-dropdown-block");

			let simplebar = this.parentElement.querySelector(".header__bottom-dropdown-list");
			// console.log(simplebar)
			
			document.querySelectorAll(".header__bottom-block").forEach(el => {
				if (el != btn) {
					el.classList.remove("active--btn");
				}
			});
			
			document.querySelectorAll(".header__bottom-dropdown-block").forEach(el => {
				if (el != dropdown) {
					el.classList.remove("is-active");
					// el.classList.remove("simplebar");
				}
			})
			dropdown.classList.toggle("is-active");
			// simplebar.classList.toggle("simplebar");
			btn.classList.toggle("active--btn")
		})
		
	})
	
	document.addEventListener("click", function(e) {
		let target = e.target;
		if (!target.closest(".header__bottom-list")) {
			document.querySelectorAll(".header__bottom-dropdown-block").forEach(el => {
					el.classList.remove("is-active");
			})
			 document.querySelectorAll(".header__bottom-block").forEach(el => {
					el.classList.remove("active--btn");
			});
		}
	})


	// SELECT --------------------------------------------------------------------

	const element = document.querySelector('#gallery__select')
	const choices = new Choices(element, {
		searchEnabled: false,
		resetScrollPosition: true,
		itemSelectText: '',
	})

// Simplebar -------------------------------------------------------------------

	document.querySelectorAll('.simplebar').forEach(el => {
		new SimpleBar(el), {
			autoHide: false,
			/* с помощью этого значения вы можете управлять высотой ползунка*/
			scrollbarMaxSize: 28,	
		}
	})

	// new SimpleBar(document.querySelector(".simplebar"), {
	// 	/* чтобы изначально ползунок был виден */
	// 	autoHide: false,
	// 	/* с помощью этого значения вы можете управлять высотой ползунка*/
	// 	scrollbarMaxSize: 28,
	// });

	// menu-open
	document.querySelector(".header__top-open-menu").addEventListener("click", function() {
		document.querySelector(".header__nav-menu").classList.add("active");
		document.querySelector(".body").classList.add('overflow-body')
	})
	document.querySelector(".header__nav-close").addEventListener("click", function() {
		document.querySelector(".header__nav-menu").classList.remove("active");
		document.querySelector(".body").classList.remove('overflow-body')
	})

	// SEARCH-dropdown
	document.querySelector(".header__top-search-btn").addEventListener("click", function() {
		document.querySelector(".header__top-search-form").classList.add("form__active");
		this.classList.add("active");
	})

	document.querySelector('.header__top-search-close').addEventListener('click', function() {
		document.querySelector(".header__top-search-form").classList.remove("form__active");
		document.querySelector(".header__top-search-btn").classList.remove('active')
	})
	
	document.addEventListener("click", function(e) {
		let target = e.target;
		let form = document.querySelector(".header__top-search-form");
		if (!target.closest(".header__top-search")) {
		form.classList.remove("form__active");
			form.querySelector("input").value = "";
			document.querySelector(".header__top-search-btn").classList.remove("active")
		}
	})


	// document.querySelectorAll('.catalog__header-item-btn').forEach(item => {
	// 	item.addEventListener('click', function(e) {
	// 		let path = e.currentTarget.dataset.path
	// 		document.querySelectorAll('.catalog__tab').forEach(el => {
  //       el.classList.remove("tab-active");
  //     })

	// 		document.querySelectorAll('.catalog__header-item-btn').forEach(el => {
	// 			el.classList.remove('btn-active')
	// 		})

  //     document.querySelector(`[data-target="${path}"]`).classList.add('tab-active')

	// 		this.classList.add('btn-active')
	// 	})
	// }) 

	function tabsActive(tabPath, tabTarget) {
		document.querySelectorAll(tabPath).forEach(item => {
		item.addEventListener("click", function(e) {
			let path = e.currentTarget.dataset.path;
			document.querySelectorAll(tabTarget).forEach(el => {
				el.classList.remove("tab-active");
			})
			document.querySelectorAll(tabPath).forEach(el => {
				el.classList.remove("btn-active");
			})
			document.querySelector(`[data-target="${path}"]`).classList.add("tab-active");
			
			this.classList.add("btn-active");
		})
	})
	};
	tabsActive(".catalog__header-item-btn", ".catalog__tab");
	tabsActive(".catalog__tab-active-right-link", ".tab-down-left")


	$( function() {
    $( "#accordion" ).accordion({
			icons: false,
			collapsible:true,
			heightStyle: "content",
		});
  } );

	$( function() {
    $( "#accordion__empty" ).accordion({
			icons: false,
			heightStyle: "content",
			collapsible:true,
		});
  } );



	let open_btn = document.querySelector('.checkbox__heading')
	let checklist = document.querySelector('.checkbox__list')
	open_btn.addEventListener('click', function() {
		checklist.classList.toggle('checklist__active')
		document.querySelectorAll('.checkbox__item').forEach(el => {
			el.classList.toggle('active')
			let checkbox = el.querySelector(".checkbox");
			if (checkbox.checked) {
				// console.log('активен')
				el.classList.add('active')
			}
		})
	})

	// document.querySelectorAll('.checkbox__item').forEach(el => {
	// 	// console.log(el)
	// 	el.addEventListener('click', function() {
	// 		document.querySelectorAll('.checkbox__item-close').forEach(le => {
	// 			le.classList.add('active')
	// 		})
	// 	})
	// })

	document.querySelectorAll('.checkbox__item').forEach(el => {
		el.addEventListener('click', function() {
			let label = this
			if (!checklist.classList.contains("checklist__active")) {
				label.classList.remove("active");
			} 
		})
	})
	// document.querySelector('.checkbox__heading').addEventListener('click', function() {
	// 	document.querySelector('.checkbox__arrow').classList.toggle('checkbox__rotate')
	// 	document.querySelectorAll('.checkbox__item').forEach(el => {
	// 		el.classList.toggle('checkbox-block__active')
	// 	})
	// })

	// document.querySelectorAll('.checkbox__item').forEach(el => {
	// 	el.addEventListener('click', function() {
	// 		el.classList.add('checkbox-active')
	// 	})
	// })

// 	let btn = document.querySelector('.checkbox__arrow')
// 	let checklist = document.querySelector('.checkbox__list')
// 	btn.addEventListener('click', function() {
// 		checklist.classList.toggle('checkbox__list-active')
// 		document.querySelectorAll('.checkbox__item-label').forEach(el => {
// 			el.classList.toggle('active')
// 	    let checkbox = el.querySelector(".checkbox");
 
//   	  if (checkbox.checked) {
//       	e.classList.add('active')
// 			}
// 		})
// 	})


	
// document.querySelectorAll(".checkbox__item-label").forEach(el => {
//   el.addEventListener("click", function() {
//     let label = this;
//     if (!checklist.classList.contains("checkbox__list-active")) {
// 			label.classList.remove('active')
// 		}
// 	})
// })




	// MAP
	ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [55.75846806898367,37.60108849999989],
            zoom: 15
        });
			var myGeoObject = new ymaps.GeoObject({
				geometry: {
						type: "Point", // тип геометрии - точка
						coordinates: [55.75846806898367,37.60108849999989] // координаты точки
				}
			});

			myPlacemark = new ymaps.Placemark([55.75846806898367,37.60108849999989], {}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/map.svg',
				iconImageSize: [20, 20],
		});
		
			// Размещение геообъекта на карте.
			myMap.geoObjects.add(myPlacemark);
			// myMap.geoObjects.add(myGeoObject);

			myMap.controls.remove('geolocationControl');
			myMap.controls.remove('searchControl');
			myMap.controls.remove('trafficControl');
			myMap.controls.remove('typeSelector');
			myMap.controls.remove('fullscreenControl');
			myMap.controls.remove('rulerControl');
			myMap.behaviors.disable(['scrollZoom']);
    }


		tippy('#first-tooltip', {
			content: 'Пример современных тенденций - современная методология разработки',
			theme:'tool-tips',
		});
		tippy('#second-tooltip', {
			content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции  ',
			theme:'tool-tips',
		});
		tippy('#third-tooltip', {
			content: 'В стремлении повысить качество ',
			theme:'tool-tips',
		});


		// FORM
	var selector = document.querySelector("input[type='tel']");
	var im = new Inputmask("+7 (999)-999-99-99");
	im.mask(selector);

	new JustValidate('.contacts__form', {
		rules: {
			name: {
				required:true,
				minLength:2,
				maxLength:40,
			},
			tel:{
				required:true,
				function:(name,value) => {
					const phone = selector.inputmask.unmaskedvalue()
					return Number(phone) && phone.length === 10
				}
			},
		},
			messages: {
				name: {
					required:'Недопустимый формат'
				},
				tel: {
					required:'Недопустимый формат'
				},
			},

			submitHandler: function(form) {
				let formData = new FormData(form);

				let xhr = new XMLHttpRequest();

				xhr.onreadystatechange = function() {
					if (xhr.readyState === 4) {
						if (xhr.status === 200) {
							console.log('Отправлено')
						}
					}
				}

				xhr.open('POST', 'mail.php', true);
				xhr.send(formData)

				form.reset()
			},

		colorWrong: '#D11616'
	})



	// MODALS
	const modalImg = document.querySelectorAll('.image-slider__image-link')
	const modalOverlay = document.querySelector('.modal-overlay')
	const closeModal = document.querySelectorAll('.modal-close')
	const modals = document.querySelectorAll('.modal-content')
	modalImg.forEach((el) =>{
		el.addEventListener('click', (e) => {
			let path = e.currentTarget.getAttribute('data-path')
			// console.log(path)


			modals.forEach((el) => {
				el.classList.remove('modal-content--visible')
			})


			document.querySelector(`[data-target="${path}"]`).classList.add('modal-content--visible')
			modalOverlay.classList.add('modal-overlay--visible')
			document.querySelector('.body').classList.add('overflow-body')


			closeModal.forEach((el) => {
				el.addEventListener('click', function() {
					modalOverlay.classList.remove('modal-overlay--visible')
					document.querySelector(`[data-target="${path}"]`).classList.add('modal-content--visible')
					document.querySelector('.body').classList.remove('overflow-body')
				})
			})

			// closeModal.addEventListener('click', function() {
			// 	modalOverlay.classList.remove('modal-overlay--visible')
			// 	document.querySelector(`[data-target="${path}"]`).classList.add('modal-content--visible')
			// 	document.querySelector('.body').classList.remove('overflow-body')
			// })
		})
	})


	$('.scrollto a').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 370,   // по умолчанию «400» 
        easing: "linear" // по умолчанию «swing» 
    });

    return false;
});
})


