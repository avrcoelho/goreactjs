const path = require('path');

module.exports = {
  // arquivo incial da palicação
  entry: path.resolve(__dirname, 'src', 'index.js'),
  // onde vai o codigo tranpilado
  output: {
    path: path.resolve(__dirname, 'public'),
    // nome do arquivo que vai ser gerado
    filename: 'bundle.js'
  },
  // monitora a pasta para ficar atualizando sem chamar o comando do webpack
  devServer: {
    contentBase: path.join(__dirname, 'public')
  },
  module: {
    // regras
    rules: [{
      // todos os arquivos termianndo com .js vão cair nessa regra
      test: /\.js$/,
      // não vai pegar a pasta node_modules
      exclude: /node_modules/,
      // vai utilizar o babel loader para fazer a tranpilação
      use: {
        loader: 'babel-loader'
      }
    },
    {
      test: /\.scss$/,
      use: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader'
        },
        {
          loader: 'sass-loader'
        }
      ]
    }]
  }
};
