
const path = require('path');
const BUILD_DEV = "build/dev";
const BUILD_PRODUCTION = 'build/production';


const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = (env, argv) => {

  const production = !!(argv.mode == "production");
  const BUILD_PATH = production ? __dirname + `/${BUILD_PRODUCTION}` : __dirname + `/${BUILD_DEV}`;


  var config = {
    mode: production ? "production" : "development",

    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
      minimizer: [new UglifyJsPlugin()],
    },
    watch: true,
    watchOptions: {
      ignored: /node_modules/,
      aggregateTimeout: 300,
      poll: 1000
    }
  }

  return config;


};