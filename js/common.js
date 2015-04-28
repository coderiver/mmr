head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	// function scrollFixedElements() {
	//     var scroll_left = $(this).scrollLeft();
	//     $(".fixed-element").css({
	//         left: -scroll_left
	//     });
	// }
	// scrollFixedElements();
	// $(window).scroll(function(){
	//     scrollFixedElements()
	// });

	//tags
	$('.js-tags-links a').on('click', function() {
		$(this).parent('li').clone().appendTo('.js-tags');
		return false;
	});
	$('body').on('click', '.js-tags a', function() {
		$(this).parent('li').remove();
		return false;
	});

	//tabs
	$(".js-tab-link").click(function () {
		$('.js-tab-link').removeClass('is-active');
		$(this).addClass('is-active');
		var id = $(this).data("link"),
			$item = $('.js-tab-block');
		var $currItem = $('.js-tab-block[data-block=' + id + ']');
		$('.js-tab-block[data-block=' + id + ']').addClass('is-active');
		$item.not($currItem).removeClass('is-active');
		return false;
	});

	//nav
	$('.js-nav-btn').on('click', function() {
		$('.js-nav').toggleClass('is-active');
		return false;
	});
	// $(window).resize(function() {
	// 	if ($('.out').width() < 1360) {
	// 		$('.js-nav-list').appendTo('.header');
	// 	};
	// 	if ($('.out').width() > 1360) {
	// 		$('.js-nav-list').appendTo('.js-nav');
	// 	};
	// });
	// $(window).load(function() {
	// 	if ($('.out').width() < 1360) {
	// 		$('.js-nav-list').appendTo('.header');
	// 	};
	// 	if ($('.out').width() > 1360) {
	// 		$('.js-nav-list').appendTo('.js-nav');
	// 	};
	// });
	function getScrollTop(){
		if(typeof pageYOffset!= 'undefined'){
			return pageYOffset;
		}
		else{
			var b = document.body;
			var d = document.documentElement;
	    	d = (d.clientHeight)? d : b;
	    	return d.scrollTop;
		}
	}
	var scrollTop = 0;
	$(window).on('scroll', function() {
		var scrollNow = $(window).scrollTop();
		if (scrollNow > scrollTop) {
			if(getScrollTop() > 100) {
				$('.js-header').removeClass('is-full');
				$('.js-header').addClass('is-hidden');
			}
			else {
				$('.js-header').removeClass('is-full');
			}
		}
		else {
			if(getScrollTop() > 10) {
				$('.js-header').addClass('is-full');
				$('.js-header').removeClass('is-hidden');
			}
			else {
				$('.js-header').removeClass('is-hidden');
			}
		}
		scrollTop = scrollNow;
	});
	//posts
	

	$('.post__info').click(function(event){

		if($(event.target).closest('a').length){
	  
		}
		else{
		$(this).parents('.post').find('.post__bottom').slideToggle('fast');
		}
	});
	//chosen
	var config = {
	  '.chosen-select'           : {},
	  '.chosen-select-deselect'  : {allow_single_deselect:true},
	  '.chosen-select-no-single' : {disable_search_threshold:10},
	  '.chosen-select-no-results': {no_results_text:'Oops, nothing found!'},
	  '.chosen-select-width'     : {width:"95%"}
	}
	for (var selector in config) {
	  $(selector).chosen(config[selector]);
	};

	//datepick
	
	$.datepicker.regional['ru'] = { 
	closeText: 'Закрыть', 
	prevText: '&#x3c;Пред', 
	nextText: 'След&#x3e;', 
	currentText: 'Сегодня', 
	monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь', 
	'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'], 
	monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн', 
	'Июл','Авг','Сен','Окт','Ноя','Дек'], 
	dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'], 
	dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'], 
	dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'], 
	dateFormat: 'dd.mm.yy', 
	firstDay: 1, 
	isRTL: false 
	}; 
	$.datepicker.setDefaults($.datepicker.regional['ru']); 

	$('.js-datepick').datepicker({
		changeYear: true,
		changeMonth: true,
		dateFormat: "dd.mm.y"
	});

	//slider
	$('.js-slider').slick({
		infinite: true,
		arrows: true,
		dots: false,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 1110,
				settings: {
					// appendArrows: '.slider__btns'
					arrows: false,
					dots: true
				}
			}
		]
	});

	//search drop
	$('.js-search').each(function() {
		$('.js-search-input').on('click', function () {	
			if ($(this).parents('.js-search').find('.js-search-drop').hasClass('is-active')) {
				$(this).parents('.js-search').find('.js-search-drop').removeClass('is-active');
			}
			else {
				$(this).parents('.js-search').find('.js-search-drop').addClass('is-active');
			};
		});
		$('.js-search').on('click', function() {
			event.stopPropagation();
		});
		$('.js-search-drop li').on('click', function() {
			$(this).parents('.js-search').find('.js-search-input').val($(this).text());
			$('.js-search-drop').removeClass('is-active');
		});
		$('body').on('click', function(event) {		
			$('.js-search-drop').removeClass('is-active');
		});
	});
});