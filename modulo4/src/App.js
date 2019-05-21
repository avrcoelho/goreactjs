import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/styles';
import { Wrapper, Container, Content } from './styles/components';

import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Header from './components/Header';

import Routes from './routes';

// se colocasse o BrowserRouter apenas no arquivo de rotas, as informações, como paraemtros, só
// estaria disponivel para os routes. Dessa forma colocando o BrowserRouter por fora, todos os
// componentes tem acesso as informações da URl
const App = () => (
  <BrowserRouter>
    <Fragment>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <Sidebar />
          <Content>
            <Header />
            <Routes />
          </Content>
        </Container>
        <Player />
      </Wrapper>
    </Fragment>
  </BrowserRouter>
);

export default App;
