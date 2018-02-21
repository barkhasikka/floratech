var webpack = require("webpack");
var path = require("path");
var BUILD_DIR = path.resolve(__dirname, ".");
var APP_DIR = path.resolve(__dirname, ".");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
var config = {
    entry: {
        "floratechno":APP_DIR + "/public/js/components/index.jsx",
    },
    module : {

        loaders : [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : "babel-loader"
            },
            {
                test: /\.css/,
                use: ExtractTextPlugin.extract({
                    use: "css-loader",
                    fallback: "style-loader"
                })
            },{
                test: /\.svg$/,
                use: [
                    {
                        loader: "babel-loader"
                    },
                    {
                        loader: "react-svg-loader",
                        options: {
                            jsx: true // true outputs JSX tags
                        }
                    }
                ]
            }

        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename:"master.css"
        }),
        new UglifyJsPlugin({
            sourceMap: true
        })
    ],
    output: {
        path: BUILD_DIR+"/public/js/build",
        filename: "[name].js"
    }

};

module.exports = config;