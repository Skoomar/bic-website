const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
    const isProd = env === 'production';

    return {
        entry: './src/App.tsx',
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js',
            publicPath: '/dist/'
        },
        mode: 'development',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    loader: 'babel-loader',
                    test: /\.js$/,
                    exclude: /node_modules/
                },
                {
                    test: /\.s?css$/,
                    use: [miniCssExtractPlugin.loader, "css-loader", "sass-loader"]
                },
                {
                    test: /\.(gif|png|jpe?g|svg)$/i,
                    use: [
                        'file-loader',
                        {
                            loader: 'image-webpack-loader',
                            options: {
                                bypassOnDebug: true, // webpack@1.x
                                disable: true, // webpack@2.x and newer
                            },
                        },
                    ],
                }
            ]
        },
        resolve: {
           extensions: ['.tsx', '.ts', '.js'],
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