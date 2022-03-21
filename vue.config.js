// vue.config.js
var HtmlWebpackPlugin = require('html-webpack-plugin');

const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

const path = require("path");

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    css: {
        loaderOptions: {
            // 给 sass-loader 传递选项
            // sass: {
            //     // @/ 是 src/ 的别名
            //     // 所以这里假设你有 `src/variables.sass` 这个文件
            //     // 注意：在 sass-loader v8 中，这个选项名是 "prependData"
            //     additionalData: `@import "~@/variables.sass"`
            // },
            // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
            // 因为 `scss` 语法在内部也是由 sass-loader 处理的
            // 但是在配置 `prependData` 选项的时候
            // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
            // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
            scss: {
                data: `@import "@/styles/variables.scss";`
            },
        }
    },
    configureWebpack: {
        plugins: [
            new HtmlWebpackPlugin({
                title: 'vue3-admin-template',
                favicon: 'public/favicon.ico',
                hash: true,
                template: 'public/index.html'
            }),
            AutoImport({
                resolvers: [ElementPlusResolver()],
            }),
            Components({
                resolvers: [ElementPlusResolver()],
            }),
        ],
        devServer: {
            open: true,//设置浏览器自动打开
            port: 8090,//设置端口
            // proxy: {
            //     //设置代理
            //     '/axios': {
            //         target: 'http://101.15.22.98',
            //         changeOrigin: true,
            //         secure: false, //如果是http接口，需要配置该参数
            //         pathRewrite: {
            //             '^/axios': ''
            //         }
            //     }

            // }
        },

    },
}