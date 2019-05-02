import React, { Fragment } from 'react';

import GlobalStyle from './styles/global';

// Fragment permite coloca tipo uma div invisivel
const App = () => (
  <Fragment>
    <GlobalStyle />
    <div className="App" />
  </Fragment>
);

export default App;
