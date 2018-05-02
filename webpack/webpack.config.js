const path = require('path'),
      MiniCssExtractPlugin = require("mini-css-extract-plugin"),
      webpack = require('webpack');

const parentDir = path.resolve(__dirname, '../app')

module.exports = {
    context: parentDir,
    devtool: 'source-map',
    entry: {
        app: './client/app.js',
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(parentDir, '../dist/public'),
        publicPath: '/public',
    },
    mode : "production",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "env",
                            "react",
                            "stage-0"
                        ],
                        plugins: [
                            'transform-object-rest-spread'
                        ] 
                    }
                }],
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                  ]
              }
        ]
    },
    optimization: {
        splitChunks: {
          cacheGroups: {
            styles: {
              name: 'styles',
              test: /\.css$/,
              chunks: 'all',
              enforce: true
            }
          }
        }
      },
      plugins: [
        new MiniCssExtractPlugin({
          filename: "[name].css",
        })
      ]
}