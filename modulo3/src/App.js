import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import TodoList from './TodoList';

const App = () => (
  // provider da acesso aos stores contidos na aplicação
  <Provider store={store}>
    <TodoList />
  </Provider>
);

export default App;
