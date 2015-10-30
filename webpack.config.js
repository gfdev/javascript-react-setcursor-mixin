var path = require('path')
    , webpack = require('webpack')
    , pkg = require('./package.json')
    , HtmlWebpackPlugin = require('html-webpack-plugin')
;

module.exports = {
    context: __dirname,
    entry: {
        index: './src/demo/index'
    },
    output: {
        path: path.join(__dirname, 'demo'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            { test: require.resolve('react'), loader: 'expose?React' },
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.s?css$/, loader: 'style-loader!css-loader?minimize&-sourceMap!sass-loader' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Demo: ' + pkg.name + ' v' + pkg.version,
            filename: 'index.html',
            template: 'src/demo/index.html',
            inject: 'body'
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    externals: {
        "react": "React"
    }
};
