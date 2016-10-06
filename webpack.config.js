var path = require('path');
var webpack = require('webpack');

var SRC_DIR = path.resolve(__dirname, 'src');
var DIST_DIR = path.resolve(__dirname, 'dist');

var mode = process.env.WEBPACK_CONFIG;

module.exports = {
    resolve: {
        // Where webpack should take a look to find modules to 'import x fom './y'
        // And what files to look for (y, y.js, y.jsx)
        modulesDirectories: ['node_modules', 'src'],
        extensions: ['', '.js', '.jsx']
    },
	entry: mode === 'build' ? SRC_DIR + '/main.js' : [
        /* TODO add react-hot-loader*/
	    SRC_DIR + '/main.js'
    ],
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
				exclude: /node_modules/
			},
            {
                test: /\.css$/,
                loader: 'style!css'
            }
		]
	},
    plugins: [
        // Set process.env.BROWSER to be able to include stylesheets in components
        // Example Greeting.js and Greeting.css
        new webpack.DefinePlugin({
            "process.env": {
                BROWSER: JSON.stringify(true)
            }
        })
    ],
	devtool: 'source-map',
	devServer: {
		inline: true,
        hot: true,
        contentBase: DIST_DIR,
        stats: 'errors-only'
	}
};
