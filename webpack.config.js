module.exports = {
    mode: 'production',
    entry: './index.js',
    devServer: {
      contentBase: "./public"
    },   
    output: {
      filename: 'main.js',
      publicPath: 'dist'
    }
  };
  