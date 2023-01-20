const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
    const isProd = env === 'production';

    return {
        entry: './src/App.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js',
            publicPath: '/dist/'
        },
        mode: 'development',
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: [miniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            }]
        },
        plugins: [
            new miniCssExtractPlugin()
        ],
        devtool: isProd ? 'source-map' : 'inline-source-map',
        devServer: {
            static: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    };
};