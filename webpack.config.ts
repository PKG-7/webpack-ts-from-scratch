import path from "path";
import webpack from "webpack";
import { bildWebpack } from "./config/build/buildWebpack";
import { BuildPaths, EnvVariables } from "./config/build/types/types";

export default (env: EnvVariables) => {
  // Имя, которое будет у трех файлов css, js, html в build папке
  const filename = "component.[contenthash]";

  const paths: BuildPaths = {
    // Путь к папке в которую сохранится наш build
    output: path.resolve(__dirname, "build"),

    // Путь к файлу, который является точкой входа для приложения
    entry: path.resolve(__dirname, "src", "index.tsx"),

    // Путь к Html шаблону по которому будет собираться итоговый html файл в build
    html: path.resolve(__dirname, "public", "index.html"),
  };

  const config: webpack.Configuration = bildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? "development",
    paths,
    filename,
  });

  return config;
};
