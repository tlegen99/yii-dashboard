let mix = require('laravel-mix');

mix.browserSync({
    host: "0.0.0.0",
    port: "1010",
    proxy: "http://127.0.0.1:1010",
    logConnections: false,
    notify: false
}).js('assets/src/js/app.js', 'web/build')
    .sass('assets/src/scss/app.scss', 'web/build')
    .disableSuccessNotifications();