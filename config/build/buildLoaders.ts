import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshTypeScript from "react-refresh-typescript";
import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";

export function buildLoaders({ mode }: BuildOptions): ModuleOptions["rules"] {
  // Тут можно задать формат наименования стилей в бэм с хэшем или как угодно
  // https://webpack.js.org/loaders/css-loader/#localidentname - документация
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

  // Для импортирования Svg как React компонента и прокидывания туда стилей
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
    exclude: /node_modules/,
    use: {
      loader: "ts-loader",
      options: {
        // transpileOnly: true - будет быстрее сборка, но не будет проверки типов при сборке
        // Плагин ForkTsCheckerWebpackPlugin сделает проверку отдельным процессом
        transpileOnly: true,
        getCustomTransformers: () => ({
          before: [mode === "development" && ReactRefreshTypeScript()].filter(
            Boolean
          ),
        }),
      },
    },
  };

  return [assetLoader, scssLoader, typescriptLoader, svgrLoader];
}
