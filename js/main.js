//load play video 
const button = document.querySelector(".video-play--btn");
const video = document.querySelector(".video-clip");
const bg = document.querySelector(".bg-clip");
const close = document.querySelector(".close");
button.onclick = function() {
    video.classList.add("show");
    bg.classList.add('show');
}
bg.onclick = function() {
        video.classList.remove("show");
        bg.classList.remove('show');
    }
    // filter
const filter_buttons = document.querySelectorAll('.product-details .product-details--list');
const filter_boxs = document.querySelectorAll('.product-details--item .box-item');
Array.from(filter_buttons).forEach(filter_button =>
        // 
        filter_button.addEventListener("click", function() {
            for (let i = 0; i < filter_buttons.length; i++) {
                filter_buttons[i].classList.remove("active")
            }
            this.classList.add("active");
            let data_button = filter_button.dataset.filter;
            Array.from(filter_boxs).forEach(filter_box => {
                let data_box = filter_box.dataset.item;
                if (data_box === data_button || data_button === "all") {
                    filter_box.style.display = "grid"
                } else {
                    filter_box.style.display = "none"
                }
            });
        })
    )
    // scrollUp 
function scrollUp() {
    const scrollUp = document.querySelector('.scroll-up');
    this.scrollY > 350 ? scrollUp.classList.add("active") : scrollUp.classList.remove("active")
}
window.addEventListener("scroll", scrollUp)
    // header
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
$(".item-first").on("click", function(e) {
    var element = $(this);
    if (!element.hasClass("open")) {
        element.addClass("open");
        element.children("ul").slideDown(1000, "swing");
        element.siblings("li").children("ul").slideUp(1000, "swing");
        element.siblings("li").removeClass("open");
        element.siblings("li").find("li").removeClass("open");
        element.siblings("li").find("ul").slideUp(1000, "swing");

    } else {
        element.removeClass("open");
        element.find("li").removeClass("open");
        element.find("ul").slideUp(1000, "swing");
    }
});
$(".item-second").on("click", function(e) {
    e.stopPropagation();
    var element = $(this);
    if (!element.parent().hasClass("open")) {
        element.parent().addClass("open");
        element.parent().children("ul").slideDown(300, "swing");
        element
            .parent()
            .siblings(".dropdown-second")
            .children("ul")
            .slideUp(300, "swing");
        element.parent().siblings(".dropdown-second").removeClass("open");
        element.parent().siblings(".dropdown-second").find("li").removeClass("open");
        element.parent().siblings(".dropdown-second").find("ul").slideUp(300, "swing");
    } else {
        element.parent().removeClass("open");
        element.parent().find(".dropdown-second").removeClass("open");
        element.parent().find("ul").slideUp(300, "swing");
    }
});
// resize width menu
function widthMenu() {
    const liMenu = document.querySelectorAll('.item-first');
    liMenu.forEach(element => {
        const windowWidth = $(window).width();
        windowWidth > 992 ? element.classList.add("desktop") : element.classList.remove("desktop");
    });
}
window.addEventListener("resize", widthMenu)