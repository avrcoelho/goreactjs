// esse é o arquivo inicial de configuração do redux
import { createStore } from 'redux';

import reducers from './reducers';

// aqui dentro vai passar os reducers
// inicializa o redux na aplicação
const store = createStore(reducers);

export default store;
