let mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/scss/app.scss', 'public/css')
   .setPublicPath('public')
;
mix.webpackConfig({
    devServer: {
        host: '0.0.0.0',
        disableHostCheck: true,
        useLocalIp: true
    }
});
