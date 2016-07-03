var debug = process.env.NODE_ENV !== 'production',
    webpack = require('webpack');

module.exports = {
    context: __dirname,
    devtool: debug ? 'inline-sourcemap' : null,
    entry: './src/index.js',
    output: {
        path: __dirname + '/lib',
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
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ]
};
