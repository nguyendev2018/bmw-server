import specialist from '../api/specialsApi.js';
async function renderSpecials() {
    const { data } = await specialist.getAll();
    console.log(data);
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
}
renderSpecials()