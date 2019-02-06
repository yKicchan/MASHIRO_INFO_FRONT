const path = require('path');
const mode = 'development';
const enabledSourceMap = mode === 'development'

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
              localIdentName: "[name]-[local]-[hash:base64:5]",
              sourceMap: enabledSourceMap
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: enabledSourceMap,
              plugins: [
                require('autoprefixer')({grid: true})
              ]
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: enabledSourceMap,
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
    port: 8080
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', 'json' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
