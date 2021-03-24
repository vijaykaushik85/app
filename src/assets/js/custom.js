$(window).scroll(function(){
    if ($(window).scrollTop() >= 100) {
        $('.navscroll').addClass('fixed-header');
    }
    else {
        $('.navscroll').removeClass('fixed-header');
    }
});