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