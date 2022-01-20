$(function() {
    locationofmenu = $('#levels').offset().top;
    console.log(location);

    $(".menu-one").click(function() {
        $('body, html').animate({
            scrollTop: locationofmenu
        });
        return false;
    })
})
$('.dangky ').click(function(event) {
    $('.scrollbar-registration ').addClass('hint-scrollbar');
    $('.black ').toggleClass('hint-black');

});
// js login-register
$(' .black').click(function(event) {
    $('.scrollbar-registration ').toggleClass('hint-scrollbar');
    $('.black ').toggleClass('hint-black');

});
$('.black-two').click(function(event) {
    $('.scrollbar-login').toggleClass('hint-scrollbar');
    $('.black-two').toggleClass('hint-black');
});
$('.dangnhap').click(function(event) {
    $('.scrollbar-login ').toggleClass('hint-scrollbar');
    $('.black-two ').toggleClass('hint-black');

});
// jsmenu
var menuxam = document.querySelector('.logoandmenu');
trangthaimenuxam = "duoi300";
nuttron = document.querySelector('.nutron');
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 500) {
        if (trangthaimenuxam == "duoi300") {
            trangthaimenuxam = "tren300";
            menuxam.classList.add('fix-top');
            nuttron.classList.add('hien-nut')
        }
    } else if (window.pageYOffset < 500) {
        if (trangthaimenuxam == "tren300") {
            trangthaimenuxam = "duoi300";
            menuxam.classList.remove('fix-top');
            nuttron.classList.remove('hien-nut');
        }
    }

})
$(".nutron").click(function() {
    $('body,html').animate({
        scrollTop: 0
    }, 1000)
})