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
    modulesDirectories: [ 'node_modules', 'bower_components' ],
    module: {
        loaders: [
            //{
            //    test: require.resolve('react'),
            //    loader: 'expose?React'
            //},
            {
                test: /\.jsx?$/,
                exclude: /(?:node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.s?css$/,
                loader: 'style-loader!css-loader?minimize&-sourceMap!sass-loader'
            },
            //{ test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
            //{ test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
            //{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
            //{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
            //{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
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
    }/*,
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }*/
};
