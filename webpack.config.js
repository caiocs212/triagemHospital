const path = require('path')

module.exports = {
  // Arquivo principal de entrada
  entry: './index.js', 
  output: {
    // Arquivo de saÃ­da final que o navegador vai ler
    filename: 'bundle.js', 
    // O Webpack vai salvar dentro de uma pasta chamada "dist" na raiz do projeto
    path: path.resolve(__dirname, 'public'), 
  },
  // MantÃ©m o cÃ³digo legÃ­vel no bundle.js facilitando a depuraÃ§Ã£o
  mode: 'development' 
}