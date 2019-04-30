import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => (
    <button onClick={props.onClick}>{props.children}</button>
);

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
  
export default Button