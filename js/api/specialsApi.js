import axiosClient from "./axiosClient";
const specialist = {
    getAll(params) {
        const url = `./specials`;
        return axiosClient.get(url, ({ params }))
    }
}
export default specialist;