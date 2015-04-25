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
		$('.js-nav-list').toggleClass('is-active');
		return false;
	});
	$(window).resize(function() {
		if ($(window).width() < 1360) {
			$('.js-nav-list').appendTo('.header');
		};
		if ($(window).width() > 1360) {
			$('.js-nav-list').appendTo('.js-nav');
		};
	});
	$(window).load(function() {
		if ($(window).width() < 1360) {
			$('.js-nav-list').appendTo('.header');
		};
		if ($(window).width() > 1360) {
			$('.js-nav-list').appendTo('.js-nav');
		};
	});
});