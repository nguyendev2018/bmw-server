import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import blogs from '../api/blogApi.js';
dayjs.extend(relativeTime);

export async function renderBlogs() {
    const blogList = document.querySelector('.blog-list');
    const { data } = await blogs.getAll();
    data.forEach((itemData) => {
        const itemElement = createItemBlogs(itemData);
        blogList.insertAdjacentHTML('beforeend', itemElement);

    })
}
export function createItemBlogs(itemData) {
    const htmls = `
    <div class="blog-list--item">
    <a href="" class="layer-img" >
        <img src="${itemData.imgUrl}" alt="" class="img-100">
    </a>
    <div class="layer-text">
        <div class="layer-text--top">
            <div class="">
                <i class="fas fa-calendar icon"></i>
                <span> ${dayjs(itemData.updateAt).fromNow()}
                </span>
            </div>
            <div class="">
                <i class="fas fa-user icon"></i>
                <span>By <span style="color: gray">${itemData.author}</span> </span>
            </div>
        </div>
        <a href="" class="blog-title">
            ${itemData.title}
        </a>
    </div>
</div>
    `

    return htmls;
}
export function clickImg() {
    const blogList = document.querySelector('.blog-list--item');
    blogList.addEventListener("click", (e) => {
        console.log("dsd");
    })
}