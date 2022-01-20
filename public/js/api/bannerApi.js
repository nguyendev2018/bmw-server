import axiosClient from "./axiosClient";
const banners = {
    getAllBanner(params) {
        const url = `./banners`;
        return axiosClient.get(url, ({ params }))
    }
}
export default banners;