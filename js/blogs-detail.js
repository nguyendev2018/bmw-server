import blogs from "./api/blogApi";
import dayjs from 'dayjs';

// này vì hiện tại khi bạn click vào ý nó sẽ có id rồi nên chỉ cần vào get id về sẽ có nội dung thôi, không liên quan tới việc kết nối với file blog đâu nha
function renderTitle(postItem) {
    const item = postItem.data;
    const htmls = `
    <li class="breadcrumb-list--item active">
    <a href="" class="text-active">Home</a>
</li>
<li class="breadcrumb-list--item active">
    <a href="" class="text-active">Blog details</a>
</li>

<li class="breadcrumb-list--item ">
    <a href="">${item.title}</a>
</li>
         `
    return htmls;

}

function renderBlogDetails(postItem) {
    const item = postItem.data;
    const htmls = `
        <h3 class="post-title" >
           ${item.title}
    </h3>
    <ul class="post-info--list">
        <li class="post-info--list__item">
            <i class="icon far fa-calendar"></i> ${dayjs(item.createdAt).format('DD/MM/YYYY')}
        </li>
        <li class="post-info--list__item">
            <i class="icon far fa-user"></i> By ${item.author}
        </li>
        <li class="post-info--list__item">
            <i class="icon far fa-comment"></i>0 comments
        </li>
    </ul>
    <div class="post-single">
    <p class="post-single--item">${item.desc}</p>
    </div>
         `
    return htmls;


}
(async() => {
    try {
        const postSingle = document.querySelector('.post');
        const breadcrumbTitle = document.querySelector('.breadcrumb-list');
        const searchParam = new URLSearchParams(window.location.search);
        const postId = searchParam.get('id');
        const postItem = await blogs.getById(postId);
        const element = renderBlogDetails(postItem);
        const elementTitle = renderTitle(postItem);
        postSingle.insertAdjacentHTML('beforeend', element);
        breadcrumbTitle.insertAdjacentHTML('beforeend', elementTitle);

    } catch (error) {
        console.log(error);
    }
})()