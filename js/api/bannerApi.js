import axiosClient from "./axiosClient";
const banners = {
    getAll(params) {
        const url = `./banners`;
        return axiosClient.get(url, ({ params }))

    }
}
export default banners;