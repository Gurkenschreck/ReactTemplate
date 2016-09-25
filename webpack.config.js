var path = require('path');
var webpack = require('webpack');

var SRC_DIR = path.resolve(__dirname, 'src');
var DIST_DIR = path.resolve(__dirname, 'dist');

module.exports = {
	entry: [SRC_DIR + '/main.js'],
	output: { 
		path: DIST_DIR + '/js',
		filename: 'bundle.js',
		publicPath: '/js/'
	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react', 'stage-2']
				}
			}
		]
	},
	devtool: 'source-map',
	devServer: {
		contentBase: DIST_DIR,
		inline: true,
		stats: 'errors-only'
	}
};
