const path = require("path");

module.exports = {
  // モード
  mode: "development",

  // エントリーポイント
  entry: "./src/app.ts",

  // ファイル出力先
  output: {
    // 出力先ディレクトリ
    path: path.join(__dirname, "../app/static/app/webpack/"),
    // 出力ファイル名
    filename: "bundle.js",
  },

  // ローダー
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },

  // モジュール解決
  resolve: {
    extensions: [".ts", ".js"],
  },
};
