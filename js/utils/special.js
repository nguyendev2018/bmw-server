import specialist from '../api/specialsApi.js';
async function renderSpecials() {
    try {
        const { data } = await specialist.getAll();
        const specials = document.querySelector('.multiple-items');
        const htmls = data.map(itemData => {
            return `
            <div class="slide-limit--list">
            <img src="${itemData.imgUrl}" alt="">
            <span class="number">${itemData.price}</span>
            <span class="name">${itemData.title}</span>
            <span class="name-sub">
            ${itemData.note}
        </span>
        </div>
            `
        })
        specials.innerHTML = htmls.join("");

        $('.multiple-items').slick({
            slidesToShow: 6,
            slidesToScroll: 3,
            prevArrow: $('.control-right'),
            nextArrow: $('.control-left'),
            responsive: [{ breakpoint: 1024, settings: { slidesToShow: 4, } }, { breakpoint: 567, settings: { slidesToShow: 3, } }]
        })
    } catch (error) {
        console.log(error);
    }

}
renderSpecials();
export default renderSpecials