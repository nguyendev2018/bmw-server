import { renderBlogs } from './utils';
(async() => {
    try {
        renderBlogs(data)
    } catch (errors) {
        console.log('get all failed', errors);
    }
})()