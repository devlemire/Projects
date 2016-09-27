module.exports = {
	entry: {
		main: './app/app.js'
	},
	output: {
		filename: 'bundle.js',
		path: './dist'
	},
	devtool: 'sourcemap',
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel'
			},
			{
				test: /\.(css|scss)$/,
				exclude: /node_modules/,
				loaders: ["style", "css", "sass"]
			}
		]
	}
};
