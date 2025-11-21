const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        entry: './src/index.js',
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        output: {
            filename: isProduction ? '[name].[contenthash].js' : 'main.js',
            path: path.resolve(__dirname, 'dist'),
            clean: true,
            publicPath: '/'
        },
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'images/[name][ext]'
                    }
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'fonts/[name][ext]'
                    }
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './dist/index.html',
                title: "Sonia's Restaurant",
                meta: {
                    viewport: 'width=device-width, initial-scale=1',
                    description: 'Experience the extraordinary fusion of Italian and Indian cuisine at Sonia\'s. Est. 1946 in Mumbai.'
                }
            }),
        ],
        devServer: {
            static: {
                directory: path.join(__dirname, 'dist'),
            },
            compress: true,
            port: 8080,
            hot: true,
            open: true,
            historyApiFallback: true,
        },
        optimization: {
            splitChunks: {
                chunks: 'all',
            },
        },
    };
};