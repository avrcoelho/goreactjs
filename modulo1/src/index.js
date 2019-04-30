import React, {
  Component,
  Fragment
} from 'react'
import {
  render
} from 'react-dom'

import Button from './Button'

class App extends Component {
  state = {
    counter: 0
  }

  // executa imadiatamente na execução do componente
  componentDidMount(){

  }

  // é o contratio do didiMount
  componentWillUnmount(){

  }

  //pode vetar atualização do render
  // antes de executar o metodo render
  // retirna true ou false
  // continua atualizando o estado, mas não renderiza
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.counter < 10
  }

  // ;executado depois de fazer uma atualização
  componentDidUpdate(prevProps, preState){

  }

  handleClick = () => {
    this.setState({
      counter: this.state.counter+1
    })
  }

  render() {
    return (
      <Fragment>
        <h1>Heloo</h1>
        <h2>{this.state.counter}</h2>
        <Button onClick={this.handleClick}>Enviado</Button>
      </Fragment>
    )
  }
}



render(<App /> , document.querySelector('#app'))