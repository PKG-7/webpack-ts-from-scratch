import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { Configuration } from "webpack";
import { BuildOptions } from "./types/types";

export function buildPlugins({
  mode,
  paths,
  filename,
}: BuildOptions): Configuration["plugins"] {
  // Плагины, которые используются всегда по умолчанию
  const plugins: Configuration["plugins"] = [
    new HtmlWebpackPlugin({
      template: paths.html,
      filename: `${filename}.html`,
    }),
  ];

  // Плагины только для режима Development
  if (mode === "development") {
  }

  // Плагины только для Production build
  if (mode === "production") {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: `${filename}.css`,
      })
    );
  }

  return plugins;
}
