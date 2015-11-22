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
    resolve: {
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: [ 'node_modules' ]
    },
    //externals: {
    //    'react': 'React',
    //    'react-dom': 'ReactDOM'
    //},
    //stats: {
    //    colors: true,
    //    modules: true,
    //    reasons: true
    //},
    //progress: true,
    //keepalive: true,
    module: {
        loaders: [
            //{ test: require.resolve('react'), loader: 'expose?React' },
            //{ test: require.resolve('react-dom'), loader: 'expose?ReactDOM' },
            {
                test: /\.jsx?$/,
                include: [ path.resolve(__dirname, 'src') ],
                //exclude: /(?:node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    //plugins: ['transform-runtime'],
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.s?css$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.woff\d?$/,
                loader: 'url?limit=10240&mimetype=application/font-woff'
            },
            {
                test: /\.ttf$/
                , loader: 'url?limit=10240&mimetype=application/octet-stream'
            },
            {
                test: /\.eot$/,
                loader: 'file'
            },
            {
                test: /\.svg$/,
                loader: 'url?limit=10240&mimetype=image/svg+xml'
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom'
        }),
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: '"production"' }
        }),
        new HtmlWebpackPlugin({
            title: 'Demo: ' + pkg.name + ' v' + pkg.version,
            filename: 'index.html',
            template: 'src/demo/index.html',
            inject: 'body'
        })
    ]
};
