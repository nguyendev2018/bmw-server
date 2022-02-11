import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import blogs from '../api/blogApi.js';
dayjs.extend(relativeTime);
async function renderBlogs(itemData) {
    const { data } = await blogs.getAll();

    data.forEach((itemData) => {
        const blogList = document.querySelector('.blog-list');
        const itemElement = createItemBlogs(itemData);
        blogList.insertAdjacentHTML('beforeend', itemElement);
    });

    $('.blog-list').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
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

function createItemBlogs(itemData) {
    const htmls = `
    <div class="blog-list--item">
    <div class="layer-img" >
        <img src="${itemData.imgUrl}"  title= " ${itemData.title}" alt="" class="img-100">
    </div>
    <div class="layer-text">
        <div class="layer-text--top">
            <div class="">
                <i class="fas fa-calendar icon"></i>
                <span> ${dayjs(itemData.createdAt).format('DD/MM/YYYY')}
                </span>
            </div>
            <div class="">
                <i class="fas fa-user icon"></i>
                <span>By <span style="color: gray">${itemData.author}</span> </span>
            </div>
        </div>
        <div class="blog-title" title= " ${itemData.title}">
            ${itemData.title}
        </div>
    </div>
</div>
    `
    clickImg(itemData)
    return htmls
}

function clickImg(itemData) {
    const blogList = document.querySelectorAll(".blog-list--item");
    console.log(itemData);
    blogList.forEach(element => {
        console.log(element);
    });

}
renderBlogs()
export default renderBlogs