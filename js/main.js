// Header
// $(document).scroll (function () {
//     if ($(document).width () > 785) {
//         if ($(document).scrollTop () > $('header').height () + 10)
//         $('.header').addClass ('fixed');
//     else
//         $('.header').removeClass ('fixed');
//     }
        
// });

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let scrollPos = 90;
    let header = document.getElementById('header__inner');

    if(document.body.scrollTop > scrollPos || document.documentElement.scrollTop > scrollPos) {
        header.classList.add('fixed');
    }else {
        header.classList.remove('fixed');
    }
}