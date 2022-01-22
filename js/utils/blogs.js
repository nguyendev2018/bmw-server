export function renderBlogs(data) {

    const blogList = document.querySelector('.blog-list');
    const htmls = data.map(itemData => {
        return `
        <div class="blog-list--item">
        <a href="" class="layer-img">
            <img src="${itemData.imgUrl}" alt="" class="img-100">
        </a>
        <div class="layer-text">
            <div class="layer-text--top">
                <div class="">
                    <i class="fas fa-calendar icon"></i>
                    <span>July 26,2018</span>
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
    })
    blogList.innerHTML = htmls.join("")

}