module.exports = [{
  context: __dirname,
  entry: './src/resume-app.jsx',
  output: {
    path: __dirname + '/public',
    filename: 'resume-app.js',
  },
  module: {
    loaders: [{
      test: /\.(js|jsx|es6)$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react'],
      },
    },
    {
      test: /\.scss$/,
      loader: 'style!css!sass',
    }],
    preLoaders: [{
      test: /\.(js|jsx|es6)$/,
      loader: 'eslint-loader',
      exclude: /node_modules/,
    }],
  },
}];
