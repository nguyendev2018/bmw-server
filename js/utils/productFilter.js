import productList from "../api/productFilterApi";
export async function renderProductFilter() {
    const { data } = await productList.getAll();
    const productItem = document.querySelector('.product-details--item');
    data.forEach((itemData) => {
        const itemElement = createItemProduct(itemData);
        productItem.insertAdjacentHTML("beforeend", itemElement);
    })
    filterImg();
}

function createItemProduct(itemData) {
    const htmls = `
    <div class="box-item" data-item="${itemData.item}">
    <a href="" class="box-img">
        <img src="${itemData.imgUrl}" alt="" class="img-100">
        <div class="layer-black"></div>

    </a>
    <div class="box-content">
        <div class="box-content--top">
            <b class="box-content--name">
                ${itemData.title}
            </b>
            <span class="box-content--number">${itemData.price}</span>
        </div>

        <span class="box-content--text">${itemData.note}</span>
    </div>
</div>
    `
    return htmls;
}

function filterImg() {
    const listProduct = document.querySelectorAll('.product-details--list');
    const itemProduct = document.querySelectorAll('.box-item');
    const arrayItem = [...itemProduct];
    const arrayList = [...listProduct];
    arrayList.forEach(element => {
        element.addEventListener("click", () => {
            for (let i = 0; i < arrayList.length; i++) {
                arrayList[i].classList.remove("active");
            }
            element.classList.add("active")
            const data_button = element.dataset.filter;
            arrayItem.forEach(elementItem => {
                const data_item = elementItem.dataset.item;
                if (data_button === data_item || data_button === "all") {
                    elementItem.style.display = "grid"
                } else {
                    elementItem.style.display = "none"
                }
            });
        })

    });
}
renderProductFilter();
export default renderProductFilter;