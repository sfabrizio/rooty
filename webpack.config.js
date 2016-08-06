const debug = process.env.NODE_ENV !== 'production', //process.env.npm_lifecycle_event
    webpack = require('webpack'),
    path = require('path'),
    plugins = [];

if (!debug) {
    plugins.concat([
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
    ]);
}

module.exports = {
    context: __dirname,
    devtool: debug ? 'inline-sourcemap' : null,
    entry: [path.join(__dirname, 'src', 'client','index.js')],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'scripts.min.js'
    },
    module: {
        loaders: [
            {
                test: /(\.jsx|\.js)$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /(\.jsx|\.js)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins
};
