const path = require("path");
const baseConfig = require("./webpack.config.base");

module.exports = {
	...baseConfig,
	entry: path.join(__dirname, "src/index.js"),
	output: {
		libraryTarget: "commonjs2"
	},
	// externals: {
	// 	react: "commonjs react"
	// }
};
