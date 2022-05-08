//Ao realizar o deploy da aplicação caso ela não seja servida a partir da raiz, temos que realizar o build passando esse caminho no qual a aplicação estara sendo servida.
//ng build --prod --bh=/meat/

export const environment = {
  production: true,
  api: 'https://localhost'
};
