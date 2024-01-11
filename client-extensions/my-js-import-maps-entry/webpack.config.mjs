import path from "node:path";
import { fileURLToPath } from "node:url";

import { glob } from "glob";

// ES Module generation by webpack is still an experimental feature:
// https://bundlers.tooling.report/output-module-formats/es-modules/
// https://webpack.js.org/configuration/output/#module-definition-systems

/** @type { import('webpack').Configuration } */
const config = {
  entry: Object.fromEntries(
    glob
      .sync("lib/**/*.ts")
      .map((file) => [
        path.relative(
          "lib",
          file.slice(0, file.length - path.extname(file).length)
        ),

        fileURLToPath(new URL(file, import.meta.url)),
      ])
  ),

  experiments: {
    outputModule: true,
  },
  output: {
    path: fileURLToPath(new URL("./vite-build", import.meta.url)),

    filename: "[name].js",
    environment: {
      module: true,
    },
    library: {
      type: "module",
    },

    chunkFormat: "module",
    chunkFilename: "[name].js",
  },

  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        loader: "ts-loader",
        options: {
          compilerOptions: {
            noEmit: false,
            allowImportingTsExtensions: false,
          },
        },
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: [".ts", ".js"],
  },
};

export default config;
