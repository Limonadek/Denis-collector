const path = require("path");

const config = {
    output: {
      path: path.join(__dirname, "/dist"),
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)$/,
          loader: "url-loader",
          options: { limit: false },
        },
      ],
    },
  };
  
  module.exports = config;