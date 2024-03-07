import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

interface EnvVariables {
  mode: "development" | "production";
  port: number;
}

export default (env: EnvVariables) => {
  const isDev = env.mode === "development";

  const config: webpack.Configuration = {
    mode: env.mode ?? "development",
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "[name].[contenthash].js",
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
            ,
          ],
        },
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
        // filename: `[name].[contenthash].html`,
      }),
      new MiniCssExtractPlugin({
        filename: `[name].[contenthash].css`,
      }),
    ],
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    devtool: isDev && "inline-source-map",
    devServer: isDev
      ? {
          port: env.port ?? 3000,
          open: true,
        }
      : undefined,
  };
  return config as webpack.Configuration & {
    devServer: DevServerConfiguration | undefined;
  };
};
