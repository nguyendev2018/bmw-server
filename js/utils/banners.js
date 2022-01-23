import banners from '../api/bannerApi.js';
async function renderBanners() {
    try {
        const { data } = await banners.getAll()
        const bannerList = document.querySelector('.banner-list');
        const htmls = data.map(itemData => {
            return `
            <div class="banner-list--item item-1 " style="background-image: url(${itemData.image})">
            </div>
            `
        })
        bannerList.innerHTML = htmls.join("")
        $('.banner-list').slick({ infinite: true, slidesToShow: 1, slidesToScroll: 1, prevArrow: $('.click-slide--prev'), nextArrow: $('.click-slide--next'), });
    } catch (error) {
        console.log(error);
    }

}
renderBanners();
export default renderBanners