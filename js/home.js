import blogs from './api/blogApi';
import { renderBlogs } from './utils';
(async() => {
    try {
        let { data } = await blogs.getAll();
        renderBlogs(data);
    } catch (errors) {
        console.log('get all failed', errors);
    }
})()