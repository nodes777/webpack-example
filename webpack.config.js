module.exports = {
	// absolute path to the project
	context: __dirname + "/",

	// file where we start bundling, usually contains inital ReactDOM.render call
	entry: "./main.js",

	mode: "development",

	// where we put compiled bundle, where script tag links
	output: {
		// where does it go?
		path: __dirname + "/",
		// what is it called?
		filename: "bundle.js"
	},

	// how do we debug? for production use 'source-map'
	devtool: "eval",
	module: {
		rules: [
		      {
		        //Check for all js and jsx files
		        test: /\.jsx?$/,
		        // Don't include node_modules directory in the search for js files
		        exclude: /node_modules/,
		        // Use the babel-loader plugin to transpile the javascript
		        use: [
		          {
		            loader: "babel-loader",
		            options: { presets: ["es2015"] }
		          }
		        ]
		    }
		]
	}
}