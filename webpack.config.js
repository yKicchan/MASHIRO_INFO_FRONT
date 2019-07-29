const path = require('path')
const mode = 'development'
const enabledSourceMap = mode === 'development'
const HtmlWebpackPlugin = require('html-webpack-plugin')

function src(subdir) {
  return path.join(__dirname, "src", subdir)
}

module.exports = {
  mode: mode,
  entry: './src/index.tsx',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[name]-[local]-[hash:base64:5]"
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')({grid: true})
              ]
            },
          },
          {
            loader: "sass-loader",
            options: {
              data: "@import '__imports.scss';",
              includePaths: [path.resolve(__dirname, 'src/styles/')]
            }
          }
        ]
      },
      {
        test: /\.(gif|png|jpg|svg)$/,
        loader: 'url-loader'
      }
    ]
  },
  devServer: {
    contentBase: './dist', 
    inline: true,
    host: 'localhost',
    port: 8080,
    historyApiFallback: true
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', 'json' ],
    alias: {
      assets: src('../assets'),
      components: src('components'),
      pages: src('pages')
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: src('/index.html'),
      filename: 'index.html'
    })
  ]
}
