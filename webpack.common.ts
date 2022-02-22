import { Configuration } from "webpack";

const commonConfig: Configuration = {
  entry: {
    main: "./src/index.ts",
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(jsx?|tsx?)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/,
        type: "asset/resource",
        generator: {
          filename: "images/[name].[hash][ext]",
        },
      },
    ],
  },
};

export default commonConfig;
