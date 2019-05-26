import React from 'react';
// ele deve ser acima do store
import './config/ReactotronConfig';

import { Provider } from 'react-redux';

import store from './store';

import TodoList from './TodoList';

console.tron.log('Testando');

const App = () => (
  // provider da acesso aos stores contidos na aplicação
  <Provider store={store}>
    <TodoList />
  </Provider>
);

export default App;
