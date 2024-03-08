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
  const plugins: Configuration["plugins"] = [];

  // Плагины только для режима Development
  if (mode === "development") {
    plugins.push(
      new HtmlWebpackPlugin({
        templateContent: htmlTemplate(),
      })
    );
  }

  // Плагины только для Production build
  if (mode === "production") {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: `${filename}.css`,
      }),

      new HtmlWebpackPlugin({
        templateContent: htmlTemplate(),
        filename: `${filename}.html`,
      })
    );
  }

  return plugins;
}

const htmlTemplate = (title = "Application") => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
  </html>
  `;
