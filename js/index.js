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
    // scrollUp 
function scrollUp() {
    const scrollUp = document.querySelector('.scroll-up');
    this.scrollY > 350 ? scrollUp.classList.add("active") : scrollUp.classList.remove("active")
}
window.addEventListener("scroll", scrollUp)
    //ANCHOR js menu
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