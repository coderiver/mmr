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
	

	$('.post__info p').click(function(event){

		if($(event.target).closest('a').length){
	  
		}
		else{
		$(this).parents('.post').find('.post__bottom').slideToggle('fast');
		}
	});
});