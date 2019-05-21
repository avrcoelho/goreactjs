import React, { Fragment } from 'react';

import GlobalStyle from './styles/styles';
import { Wrapper, Container } from './styles/components';

import Sidebar from './components/Sidebar';
import Player from './components/Player';

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Wrapper>
      <Container>
        <Sidebar />
      </Container>
      <Player />
    </Wrapper>
  </Fragment>
);

export default App;
