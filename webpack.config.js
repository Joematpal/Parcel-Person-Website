const webpack = require('webpack');

module.exports = {
  entry: [
      './src/app.js'
  ],
  output: {
    path: __dirname+ '/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/
        // , exclude: /(node_modules|bower_components)/
        , loader: 'babel' },
      { test: /\.html$/, loader: "html-loader"},
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.scss$/, loader:['style', 'css', 'scss']},
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" },
      { test: /\.(png|jpg)$/, loader: "url-loader?limit=8192" }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
}
