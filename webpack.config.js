var path = require('path')
    , webpack = require('webpack')
    , HtmlWebpackPlugin = require('html-webpack-plugin')
    , minimize = process.argv.indexOf('--no-minimize') === -1 ? true : false
    , plugins = []
;

minimize && plugins.push(new webpack.optimize.UglifyJsPlugin());

//plugins.push(new HtmlWebpackPlugin({
//    title: 'Demo',
//    filename: 'demo/index.html',
//    template: 'src/demo/index.html'
//}));

module.exports = {
    context: __dirname,
    entry: {
        'setCursorMixin': './src/setCursorMixin.jsx'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name]' + (minimize ? '.min.' : '.') + 'js',
        libraryTarget: "umd"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    },
    plugins: plugins,
    externals: {
        "react": "React"
    }
};
