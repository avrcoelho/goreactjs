import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// importa o reactotron para poder usar ele
import './config/reactotron';
import GlobalStyle from './styles/styles';
import { Wrapper, Container, Content } from './styles/components';

import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Header from './components/Header';
import ErrorBox from './components/ErrorBox';

import Routes from './routes';
import store from './store';

// se colocasse o BrowserRouter apenas no arquivo de rotas, as informações, como paraemtros, só
// estaria disponivel para os routes. Dessa forma colocando o BrowserRouter por fora, todos os
// componentes tem acesso as informações da URl
const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Fragment>
        <GlobalStyle />
        <Wrapper>
          <Container>
            <Sidebar />
            <Content>
              <ErrorBox />
              <Header />
              <Routes />
            </Content>
          </Container>
          <Player />
        </Wrapper>
      </Fragment>
    </BrowserRouter>
  </Provider>
);

export default App;
