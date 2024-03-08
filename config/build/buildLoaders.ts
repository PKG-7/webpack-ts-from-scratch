import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";

export function buildLoaders({ mode }: BuildOptions): ModuleOptions["rules"] {
  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates 'style' nodes from JS strings
      mode === "development" ? "style-loader" : MiniCssExtractPlugin.loader,
      //Translates CSS in common JS
      "css-loader",
      // Compiles Sass to CSS
      "sass-loader",
      ,
    ],
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [scssLoader, typescriptLoader];
}
