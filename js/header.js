document.addEventListener("DOMContentLoaded", function() {
    $(".header-mobile li").on("click", function(e) {
        e.stopPropagation();
        var element = $(this);
        if (element.hasClass("open")) {
            element.removeClass("open");
            element.find("li").removeClass("open");
            element.find("ul").slideUp(400,
                "swing");
        } else {
            element.addClass("open");
            element.children("ul").slideDown(400, "swing");
            element.siblings("li").children("ul").slideUp(400, "swing");
            element.siblings("li").removeClass("open");
            element.siblings("li").find("li").removeClass("open");
            element.siblings("li").find("ul").slideUp(400, "swing");
        }
    })
});
//ANCHOR js menu

window.addEventListener("scroll", function() {
    let header = document.querySelector(".header-menu");
    header.classList.toggle("fix-top", window.scrollY > 1000)
})

//ANCHOR load header 

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