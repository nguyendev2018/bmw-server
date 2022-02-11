const { resolve } = require("path");
const { defineConfig } = require("vite");
module.exports = defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                // blogDetails: resolve(__dirname, "blog-details.html"),
                // register: resolve(__dirname, "register.html"),
                // login: resolve(__dirname, "login.html")
            }
        }
    }
})