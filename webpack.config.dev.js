const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const baseConfig = require("./webpack.config.base");

const htmlWebpackPlugin = new HtmlWebpackPlugin({
	template: path.join(__dirname, "examples/src/index.html"),
	filename: "./index.html"
});
module.exports = {
	...baseConfig,
	entry: path.join(__dirname, "examples/src/index.js"),
	plugins: [htmlWebpackPlugin],
	devServer: {
		port: 3001
	}
};
