var init = function() {
    $('a').on('click', function() {
        var target = $(this).attr('href');

        $('body,html').stop().animate({
            scrollTop: $(target).offset().top - 90
        }, 1000);
    });
    $(window).on('load scroll', setHeader);

};

var setHeader = function() {
    var y = $(window).scrollTop();

    if (y > 300) {
    	$('nav').addClass('scroll');
    } else $('nav').removeClass('scroll'); 
    console.log(y);
    


};


init();
