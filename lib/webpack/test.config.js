"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const context_1 = require("../update/context");
const common_config_1 = require("./common.config");
const context = new context_1.default();
const weexboxConfig = require(context.weexboxConfigPath);
class TestConfig {
    constructor() {
        this.weexConfig = {
            module: {
                rules: [
                    {
                        test: /\.(png|jpg|gif)$/,
                        use: [
                            {
                                loader: 'file-loader',
                                options: {
                                    publicPath: weexboxConfig.test.imagePublicPath + '/static/',
                                    name: '[name]_[hash].[ext]',
                                    outputPath: context.staticDir,
                                },
                            },
                        ],
                    },
                ],
            },
            plugins: [
                new webpack.BannerPlugin({
                    banner: '// { "framework": "Vue"} \n',
                    raw: true,
                    exclude: 'Vue',
                }),
            ],
        };
        this.weexConfig = webpackMerge(this.weexConfig, new common_config_1.default().weexConfig);
    }
}
exports.default = TestConfig;