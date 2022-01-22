const { resolve } = require("path");
const { defineConfig } = require("vite");
module.exports = defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                blogDetails: resolve(__dirname, "blog-details.html"),
            }
        }
    }
})