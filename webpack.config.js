var webpack = require("webpack")
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: __dirname,
    entry: {
        index: "./src/index.tsx",
        app: "./src/app.tsx"
    },
    output: {
        path: "public/dist",
        filename: "[name].js",
        publicPath: "/dist/",
        sourceMapFilename: '[name].js.map'
    },

    devtool: "cheap-module-source-map",

    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader") }
        ],

        preLoaders: [
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    plugins: [
        new ExtractTextPlugin("[name].css"),

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        }),
    ],


    node: {
        fs: "empty"
    },
    browser: {
        net: false,
        tls: false
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
    },
};