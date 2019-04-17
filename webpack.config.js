const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.hbs$/,
                exclude: /node_modules/,
                use: "handlebars-loader" },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'images/[name].[ext]'
                    }
                }]
            }
        ],

    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'styles.css',
        }),
        new HtmlWebpackPlugin({
            inject: true,
            hash: true,
            template: './src/index.html',
        }),
        new CopyPlugin([
            { from: 'src/frames/15Game', to: 'frames/15Game' },
            { from: 'src/frames/Maze', to: 'frames/Maze' },
            { from: 'src/frames/Solitaire', to: 'frames/Solitaire' },
        ]),
    ],
    devServer:{
        publicPath: '/',
        historyApiFallback: true,
        noInfo: false,
        quiet: false,
        stats: 'errors-only',
        clientLogLevel: 'warning',
        compress: true,
        port: 4000,
    }
};


