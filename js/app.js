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
    
var parallax = function() {
    var doucmentEl = $(document), 
    parallaxBg = $('header');

    documentEl.on('scroll', function() {
        var currScrollPos = documentEl.scrollTop();
        parallaxBg.css('background-position', '0 ' + -currScrollPos/4 + 'px');
    });
};

};


init();


