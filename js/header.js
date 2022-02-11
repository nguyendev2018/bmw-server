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