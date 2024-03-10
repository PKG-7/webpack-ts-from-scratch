import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";

export function buildLoaders({ mode }: BuildOptions): ModuleOptions["rules"] {
  //Тут можно задать формат стилей
  //https://webpack.js.org/loaders/css-loader/#localidentname
  const scssLoaderWithModules = {
    loader: "css-loader",
    options: {
      modules: {
        localIdentName: "[local]__[hash:base64:5]",
      },
    },
  };

  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: "asset/resource",
  };

  const svgrLoader = {
    test: /\.svg$/i,
    use: [
      {
        loader: "@svgr/webpack",
        options: {
          icon: true,
          svgoConfig: {
            plugins: [
              {
                name: "convertColors",
                params: {
                  currentColor: true,
                },
              },
            ],
          },
        },
      },
    ],
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates 'style' nodes from JS strings
      mode === "development" ? "style-loader" : MiniCssExtractPlugin.loader,
      //Translates CSS in common JS
      scssLoaderWithModules,
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

  return [assetLoader, scssLoader, typescriptLoader, svgrLoader];
}
