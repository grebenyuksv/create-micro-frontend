const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const baseConfig = require('./webpack.config.base');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
	template: path.join(__dirname, 'examples/web/index.html'),
	filename: './index.html',
});
module.exports = {
	...baseConfig,
	entry: {
		web: path.join(__dirname, 'examples/web/index.js'),
	},
	plugins: [
		htmlWebpackPlugin,
		new WriteFilePlugin(),
		new CopyWebpackPlugin([{ from: 'src', to: '../examples/mobile/dist' }]),
	],
	devServer: {
		port: 3001,
	},
};
