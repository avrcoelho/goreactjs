import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as TodosActions } from "./store/ducks/todo";

class Todo extends Component {
  state = {
    newTodo: ""
  };

  handleInputChange = e => {
    this.setState({ newTodo: e.target.value });
  };

  handleAddTodo = () => {
    this.props.addTodo(this.state.newTodo);
    /* () => {

    } executa quando o setState termina */
    // this.setState(
    //   {
    //     todos: [...this.state.todos, this.state.newTodo],
    //     newTodo: ""
    //   },
    //   () => {
    //     localStorage.setItem("todos", JSON.stringify(this.state.todos));
    //   }
    // );
  };

  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map(todo => (
            <li key={todo}>{todo}</li>
          ))}
        </ul>
        <input
          onChange={this.handleInputChange}
          value={this.state.newTodo}
          type="text"
          name="novoTodo"
        />
        <button onClick={this.handleAddTodo}>Adicionar</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos.data
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodosActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
