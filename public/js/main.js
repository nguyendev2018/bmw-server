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