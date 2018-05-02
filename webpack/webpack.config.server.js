const nodeExternals = require('webpack-node-externals')
    path = require('path'),
    srcPath = path.resolve(__dirname, '../'),
    distPath = path.resolve(__dirname, '../dist');

module.exports = {
    context: srcPath,
    entry: ['babel-polyfill','./app/server/server.js'],
    output: {
        path: distPath,
        filename: 'server.js'
    },
    target: 'node',
    node: {
        __dirname: false,
        __filename: false
    },
    mode : 'production',
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
                use: "css-loader"
              }            
        ]
    },
    externals: nodeExternals(),
    devtool: 'source-map'
};