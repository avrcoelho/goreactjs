import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

// verifica se esta em ambiente de dev para inciar o reactotorn
if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect();

  // para limpar o historico do reactotron toda vez que inicia a palicação
  tron.clear();

  // coloca o reactotron dentro do console para ele ficar disponivel em toda a aplicação
  console.tron = tron;
}
