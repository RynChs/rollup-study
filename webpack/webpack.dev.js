const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: path.resolve(__dirname, '../src/index.tsx')
    },
    output: {
        path: path.resolve(__dirname, '../dist')
    },
    devtool: "eval-source-map",
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        hot: true,
        open: true,
        port: 9200
    },
    resolve: {
        modules:  [
            path.resolve(__dirname, '../src'),
			'node_modules'
        ],
        extensions: ['.html', '.ts', '.tsx', '.js', '.jsx', '.json']
    },
    module: {
        rules: [{
            test: /\.(ts|tsx)/,
            use: 'ts-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html')
        })
    ]
}