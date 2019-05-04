import React from 'react';
import { Provider } from 'react-redux';
// ele deve ser acima do store
import './config/ReactotronConfig';
import store from './store';

import Routes from './routes';

console.tron.log('Testando');

const App = () => (
  // provider da acesso aos stores contidos na aplicação
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
