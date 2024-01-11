$('#menu__toggle').click(function(e) {
    e.preventDefault();
    $('.mobile__nav').toggleClass('mobile-nav-active');
})
window.onscroll = function showHeader() {
    var header = document.querySelector('.header');
    if(window.pageYOffset > 600){
        header.classList.add('header_fixed');
    } else{
        header.classList.remove('header_fixed');
    }
}