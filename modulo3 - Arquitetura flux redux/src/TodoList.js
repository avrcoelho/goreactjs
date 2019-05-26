import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// connect vai conectar o componente com informação do estado do redux
import { connect } from 'react-redux';
// bindActionCreators: ele vai aplicar o dispach em cada uma das funções do actions
import { bindActionCreators } from 'redux';

import * as TodoActions from './store/actions/todos';

// passou as props por desentruturação
const TodoList = ({ todos, addTodo, removeTodo }) => (
  <Fragment>
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          {' '}
          <button type="button" onClick={() => removeTodo(todo.id)}>
            Remover
          </button>
        </li>
      ))}
    </ul>
    <button type="button" onClick={() => addTodo('Bora codar')}>
      Add
    </button>
  </Fragment>
);

TodoList.propTypes = {
  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
    }),
  ).isRequired,
};

// mapear o estado empropriedades
// ele vai tranformar informações do redux em propriedades para o componente
const mapStateToProps = state => ({
  // state representa todas as informações contidas no reducer
  // todos é o reducer de todos que foi criado
  todos: state.todos,
});

// é como se fosse a action
// tranforma a action em propriedades do component
// recebe o texto e retorna os dados para a aplicação, os reducers
// tudo o que tiver dento da função "dispatch" é o que o reducers vão ouvir
const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch);

// Higher-Order Components
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

/*  o retorno do connect é passado para o TodoList, ou seja os dois paramentros
assim consigo chamar os parametros na função TodoList

*/
