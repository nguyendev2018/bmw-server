let box_button = $(".box-button");
for (let i = 0; i < box_button.length; i++) {
    $(box_button[i]).on("click", function() {
        $(this).parent().find(".sub-menu").slideToggle();
        $(".icon-chevron").classList.toggle("active")
    });
}
//ANCHOR js menu

window.addEventListener("scroll", function() {
        let header = document.querySelector(".header-menu");
        header.classList.toggle("fix-top", window.scrollY > 1000)
    })
    //ANCHOR login-register
let nut = document.querySelectorAll('.item-click');
let btn_cancel = document.querySelectorAll('.btn-cancel');
let layer_black = document.querySelector('.layer-black');
let icon_bars = document.querySelectorAll('.icon-bars');
let menu_mobile = document.querySelector('.header-menu--list_item');
for (let i = 0; i < nut.length; i++) {
    nut[i].addEventListener("click", function() {
        var content_show = this.getAttribute("data-show");
        var current_show = document.getElementById(content_show);
        current_show.classList.toggle("active");
        layer_black.classList.add("active");
        current_show.querySelector(".btn-cancel").onclick = function() {
            current_show.classList.remove("active");
            layer_black.classList.remove("active");
        }
    });
}
// icon-bars add/close
icon_bars.forEach(element => {
    element.addEventListener("click", () => {
        menu_mobile.classList.toggle("active");
    })
});
//ANCHOR load header 
$(".header-mobile li").on("click", function(e) {
    e.stopPropagation();
    var element = $(this);
    if (element.hasClass("open")) {
        element.removeClass("open");
        element.find("li").removeClass("open");
        element.find("ul").slideUp(400, "swing");
    } else {
        element.addClass("open");
        element.children("ul").slideDown(400, "swing");
        element.siblings("li").children("ul").slideUp(400, "swing");
        element.siblings("li").removeClass("open");
        element.siblings("li").find("li").removeClass("open");
        element.siblings("li").find("ul").slideUp(400, "swing");
    }
});
// resize width menu
function itemFirstDesktop() {
    const liMenu = document.querySelectorAll('.item-first');
    liMenu.forEach(element => {
        const windowWidth = $(window).width();
        windowWidth >= 992 ? element.classList.add("desktop") : element.classList.remove("desktop");
    });
}
window.addEventListener("resize", itemFirstDesktop)

function itemFirstMobile() {
    const liMenu = document.querySelectorAll('.item-first');
    liMenu.forEach(element => {
        const windowWidth = $(window).width();
        windowWidth <= 992 ? element.classList.add("mobile") : element.classList.remove("mobile");
    });
}
window.addEventListener("resize", itemFirstMobile)