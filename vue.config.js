const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
	// devServer: {
	// 	proxy: 'http://localhost:3000'
	// },
	configureWebpack: {
		devtool: 'source-map',
		plugins: [
			new BundleAnalyzerPlugin()
		],
		optimization: {
			minimizer: [
				new UglifyJsPlugin({
					parallel: true
				}),
			]
		}
	}
}