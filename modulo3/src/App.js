import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

const App = () => (
  // provider da acesso aos stores contidos na aplicação
  <Provider store={store}>
    <h1>Hello Wolrd</h1>
  </Provider>
);

export default App;
