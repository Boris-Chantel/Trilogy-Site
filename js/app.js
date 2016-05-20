$('a').on('click', function() {
	var target = $(this).attr('href');

	$('body').stop().animate({
		scrollTop: $(target).offset().top -30}, 1000);
});