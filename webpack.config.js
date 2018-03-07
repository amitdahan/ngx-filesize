const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const angularExternals = require('webpack-angular-externals');
const rxjsExternals = require('webpack-rxjs-externals');

module.exports = {
    entry: {
        'index.umd': './src/index.ts',
        'index.umd.min': './src/index.ts',
    },

    output: {
        path: path.resolve('./dist'),
        libraryTarget: 'umd',
        library: 'ngxFilesize'
    },

    resolve: {
        extensions: ['.ts', '.js', '.json']
    },

    externals: [
        angularExternals(),
        rxjsExternals()
    ],

    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
                include: [path.resolve('./src')]
            }
        ]
    },

    optimization: {
        minimizer: [new UglifyJsPlugin({
            include: /\.min/
        })]
    }
};