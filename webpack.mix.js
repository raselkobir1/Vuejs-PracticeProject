let mix = require('laravel-mix');
const webpack = require("./webpack.config.js");


mix
.js('./Scripts/Application.js', './Output/Scripts')
.sass('./Styles/Application.scss', './Output/Styles')
.options({
    processCssUrls: false,
})
.sourceMaps()
.copyDirectory("./Assets/Images", "./Output/Assets/Images")
.copyDirectory("./node_modules/font-awesome/fonts", "./Output/Assets/Fonts/FontAwesome")
.webpackConfig(Object.assign(webpack));
