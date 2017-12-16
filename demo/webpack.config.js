const {resolve} = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('webpack-html-plugin');

module.exports = {
    entry: './src/main.ts',
    output: {
        filename: 'bundle.js',
        path: resolve('./dist'),
        publicPath: ''
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/i,
                use: [
                    'awesome-typescript-loader',
                    'angular2-template-loader'
                ]
            },
            {test: /\.html$/i, loader: 'html-loader'},
            {test: /\.scss$/i, use: ['raw-loader', 'css-loader', 'sass-loader']}
        ]
    },

    plugins: [
        new webpack.ContextReplacementPlugin(
            /(.+)?angular([\\/])core(.+)?/,
            './src'
        ),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body'
        })
    ]
};