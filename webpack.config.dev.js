const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');
const path = require('path');

module.exports = merge(baseConfig,{
    mode: 'development',
    devServer: {
        port: 8003,
        hot: true,
        open: 'Google Chrome',
        historyApiFallback: {
            rewrites: [
                { from: /^\/$/, to: '/view/index.html' },
            ]
        },
    },
    devtool: 'inline-source-map',
    output: {
        filename: 'js/[name].[hash].bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/'
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
});