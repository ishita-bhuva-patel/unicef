let mix = require("laravel-mix");
let HtmlWebpackPlugin = require("html-webpack-plugin");
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("src/js/app.js", "dist/js");

mix.combine(
    [
        "src/vendor/swiper/swiper.js",
        "src/vendor/aos/aos.js",
        "src/js/common.js",
    ],
    "dist/js/vendor.js"
);

mix.combine(
    [
        "src/vendor/font-awesome/css/font-awesome.min.css",
        "src/vendor/swiper/swiper.css",
        "src/vendor/aos/aos.css",
    ],
    "dist/css/vendor.css"
).options({
    processCssUrls: false
});

mix.sass("src/sass/app.scss", "dist/css");

mix.copyDirectory("src/vendor/font-awesome/fonts", "dist/fonts");
mix.copyDirectory("src/fonts/", "dist/fonts");

// mix.sourceMaps();
mix.setPublicPath("dist");
mix.copyDirectory("src/images", "dist/images");

mix.disableNotifications();

mix.webpackConfig({
    output: {
        // path: path.join(__dirname, 'dist'),
        publicPath: ""
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "ejs-compiled-loader!./src/index.ejs",
            filename: "index.html",
            inject: false
        }),
    ],
    devServer: {
        //hot: true, inline: true, contentBase: __dirname
        disableHostCheck: false,
        watchContentBase: true,
        host: "127.0.0.1",
        open: true
        //port: 8082,
    }
});
