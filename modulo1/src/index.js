import React, {
  Component,
  Fragment
} from 'react'
import {
  render
} from 'react-dom'
import PropTypes from 'prop-types'

class Button extends Component {
  render(){
    // children replica tudo o que tem dentro do component
    return <a onClick={this.props.onClick}>{this.props.children}</a>
  }
}

Button.defaultProps = {
  // quando não passar o children, ele vai ser salvar
  children: 'Salvar'
}

Button.propTypes = {
  // ela é uma função e obrigaroioa
  onClick: PropTypes.func.isRequired,
  // ela é uma string
  children: PropTypes.string
} 

class App extends Component {
  handleClick(){
    alert('Botão clicado');
  }

  render() {
    return (
      <Fragment>
        <h1>Heloo</h1>
        <Button onClick={() => { alert('Bt1') }} />
        <Button onClick={this.handleClick}>Enviado</Button>
      </Fragment>
    )
  }
}



render(<App /> , document.querySelector('#app'))