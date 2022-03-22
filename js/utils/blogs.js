import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import blogs from '../api/blogApi.js';
dayjs.extend(relativeTime);
async function renderBlogs(itemData) {
    const { data } = await blogs.getAll();
    const blogList = document.querySelector('.blog-list');
    data.forEach((itemData) => {

        const itemElement = createItemBlogs(itemData);
        blogList.insertAdjacentHTML('beforeend', itemElement);
    });
    // clickImg(itemData)
    $('.blog-list').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,

        prevArrow: $('.prev-blog'),
        nextArrow: $('.next-blog'),
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,

            }
        }, {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    return itemData;
}
// {/* */}
function createItemBlogs(itemData) {
    const htmls = `
    <a href="blog-details.html?id=${itemData.id}" data-id="${itemData.id}">
    <div class="blog-list--item" onclick="goToDetail(${itemData.id})" >
    <div class="layer-img" >
        <img src="${itemData.imgUrl}"  title= " ${itemData.title}" alt="" class="img-100">
    </div>
    <div class="layer-text">
        <div class="layer-text--top">
            <div class="">
                <i class="fas fa-calendar icon"></i>
                <span class="text"> ${dayjs(itemData.updateAt).format('DD/MM/YYYY')}
                </span>
            </div>
            <div class="">
                <i class="fas fa-user icon"></i>
                <span  class="text">By <span >${itemData.author}</span> </span>
            </div>
        </div>
        <div class="blog-title" title= " ${itemData.title}">
            ${itemData.title}
        </div>
    </div>
</div>
</a>
    `
    return htmls
}

export default renderBlogs()