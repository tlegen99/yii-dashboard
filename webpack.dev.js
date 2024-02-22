const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
console.log('test')
module.exports = merge(common, {
    mode: 'development',
    watch: true,
    watchOptions: {
        ignored: ['vendor/**', 'frontend/web/**', 'node_modules/**']
    },
    devtool: "source-map",
});