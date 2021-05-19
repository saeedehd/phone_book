import { resolve } from "path";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import HtmlMinimizerPlugin from "html-minimizer-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";

export default {
    entry: {
        app: "./app/app.jsx",
    },
    output: {
        path: resolve(__dirname, "build"),
        filename: "[chunkhash].js",
    },
    resolve: {
        alias: {
            "@app": resolve(__dirname, "app"),
            "@assets": resolve(__dirname, "assets"),
        },
        extensions: [".js", ".jsx", ".json"],
    },
    optimization: {
        usedExports: true,
        minimizer: [new TerserPlugin(), new CssMinimizerPlugin(), new HtmlMinimizerPlugin()],
        splitChunks: {
            chunks: "async",
            minSize: 0,
            minRemainingSize: 0,
            maxSize: 50000,
            minChunks: Infinity,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            enforceSizeThreshold: 50000,
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    reuseExistingChunk: true,
                },
                default: {
                    minChunks: 1,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        },
    },
    stats: "minimal",
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: "@svgr/webpack",
                        options: {
                            svgoConfig: {
                                plugins: {
                                    removeViewBox: false,
                                    convertColors: {
                                        currentColor: true,
                                    },
                                    removeDimensions: true,
                                },
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                    },
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            base: "/",
            chunks: ["app"],
            filename: "index.html",
            template: "index.html",
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "assets",
                    to: "assets",
                },
            ]
        }),
    ],
    devServer: {
        host: "0.0.0.0",
        // useLocalIp: true,
        compress: true,
        overlay: {
            warnings: true,
            errors: true,
        },
        hot: true,
        port: 8080,
        open: {
            app: ["Google Chrome"],
        },
        historyApiFallback: true,
    },
};