var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/aeternote.jsx",
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js"
  },

  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react', 'es2015']
        }
      }, {
        test: /\.ts$/,
        use: [{
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                declaration: false,
                target: 'es5',
                module: 'commonjs'
              },
              transpileOnly: true
            }
          }]
      }, {
        test: /\.svg$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }]
      }]
    },

  devtool: 'source-map',
  resolve: {

    extensions: [".ts", ".js", ".jsx", ".svg", "*"]
  }
};
