const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, "dist"),
    },
    target: 'web',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new LiveReloadPlugin()
    ],
    watchOptions: {
        ignored: /node_modules/,
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        hot: false, // optional, but you must not set both hot and liveReload to true
        liveReload: true,
        compress: true,
        port: 9000,
    },
}
