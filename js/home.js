import { renderBlogs, clickImg } from "./utils";
import specialist from "./utils/special";
import renderBanners from "./utils/banners";
import renderProductFilter from "./utils/productFilter"
renderBlogs().then(data => {
    clickImg()
})