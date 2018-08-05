const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CrittersPlugin = require('critters-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: './src/js/main.js'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },

    module: {
        rules: [{
            test: /\.(sass|scss|css)$/i,
            use: [{
                loader: MiniCssExtractPlugin.loader
            }, {
                loader: 'css-loader',
            }, {
                loader: 'sass-loader',
                options: {
                    includePaths: ['node_modules']
                }
            }]
        }]
    },

    plugins: [
        new CleanWebpackPlugin('dist'),

        new HtmlWebpackPlugin({
            template: './src/index.html',
            chunks: ['main'],
            minify: {
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true
            }
        }),

        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
            chunkFilename: "[id].[contenthash].css",
        }),

        new CrittersPlugin()
    ]
};