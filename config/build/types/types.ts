export interface BuildPaths {
  entry: string;
  html: string;
  output: string;
  src: string;
}

export type BuildMode = "production" | "development";

export interface BuildOptions {
  port: number;
  paths: BuildPaths;
  mode: BuildMode;
  filename: string;
  analyzer?: boolean;
}

export interface EnvVariables {
  mode: BuildMode;
  port: number;
  analyzer?: boolean;
}
