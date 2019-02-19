const path = require('path');
const WriteFilePlugin = require('write-file-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const nodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.config.base');

module.exports = {
    ...baseConfig,
    entry: path.join(__dirname, 'src'),
    output: {
        libraryTarget: 'commonjs2',
        filename: 'index.js',
    },
    devtool: 'source-map', // not eval-source-map: https://stackoverflow.com/questions/39163748/why-is-webpack-creating-output-js-in-form-of-string-and-using-eval-function-to-d
    externals: {
        react: 'commonjs react',
        'react-dom': 'commonjs react-dom',
        'react-native': 'commonjs react-native',
        'react-art': 'commonjs react-art',
    },
    plugins: [
        new WriteFilePlugin(),
        new CopyWebpackPlugin([
            { from: 'src', to: '../examples/mobile/dist' },
            { from: 'src', to: '../examples/web/dist' },
        ]),
    ],
};
