const nodeEnv = process.env.NODE_ENV || 'development'

module.exports = {
  devtool: (nodeEnv === 'development' ? 'eval' : 'source-map'),
  entry: './app/App.jsx',
  output: {
    filename: 'public/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
