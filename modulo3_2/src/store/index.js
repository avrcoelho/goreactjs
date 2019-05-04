// esse é o arquivo inicial de configuração do redux
import { createStore, compose, applyMiddleware } from 'redux';

import reducers from './reducers';

const composer = process.env.NODE_ENV === 'development'
  ? compose(
    applyMiddleware(...[]),
    console.tron.createEnhancer(),
  )
  : applyMiddleware(...[]);

// se tiver me produção não vai precisar do compose

// aqui dentro vai passar os reducers
// inicializa o redux na aplicação
const store = createStore(reducers, composer);

export default store;
