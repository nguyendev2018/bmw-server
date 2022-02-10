import axiosClient from "./axiosClient";
const productList = {
    getAll(params) {
        const url = `./product-filter`;
        return axiosClient.get(url, ({ params }))
    }
}
export default productList;