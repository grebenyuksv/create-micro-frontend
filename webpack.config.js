const path = require('path');
const WriteFilePlugin = require('write-file-webpack-plugin');
const baseConfig = require('./webpack.config.base');

module.exports = {
	...baseConfig,
	entry: path.join(__dirname, 'src/index.js'),
	output: {
		libraryTarget: 'commonjs2',
	},
	externals: {
		react: 'commonjs react',
		'react-dom': 'commonjs react-dom',
		'react-native': 'commonjs react-native',
		'react-art': 'commonjs react-art',
	},
};
