module.exports = {
	/*entry:{
		main:'./index.js'
	},*/
	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel?presets[]=es2015'
			}
		]
	},
	/*output:{
		filename:'bundle2.js'
	}*/
}
