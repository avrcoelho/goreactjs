import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import createStore from "redux-mock-store";

import TodoList from "../../TodoList";
import { Creators as TodoActions } from "../../store/ducks/todo";

const mockStore = createStore();

const INITIAL_STATE = {
  todos: {
    data: ["Faezr café", "Estudar react"]
  }
};

const store = mockStore(INITIAL_STATE);

it("should render the list", () => {
  const wrapper = mount(
    <Provider store={store}>
      <TodoList />
    </Provider>
  );

  expect(wrapper.find("li").length).toBe(2);
});

it("should be able to add new todo", () => {
  const wrapper = mount(
    <Provider store={store}>
      <TodoList />
    </Provider>
  );

  wrapper.find("TodoList").setState({ newTodo: "Novo todo" });
  wrapper.find("button").simulate("click");

  expect(store.getActions()).toContainEqual(TodoActions.addTodo("Novo todo"));
});

// it("should render the list", () => {
//   const wrapper = mount(<TodoList />);

//   expect(wrapper.find("ul").exists()).toBe(true);
//   expect(wrapper.find("button").exists()).toBe(true);
//   expect(wrapper.find("input[name='novoTodo']").exists()).toBe(true);
// });

// it("shhould be able to add new todo", () => {
//   const wrapper = mount(<TodoList />);

//   wrapper.find('input[name="novoTodo"]').simulate("change", {
//     target: { value: "Novo todo" }
//   });

//   wrapper.find("button").simulate("click");

//   expect(wrapper.find("ul").contains(<li>Novo todo</li>)).toBe(true);
// });

// it("should add new todos to local storage", () => {
//   // função vazia que armazena quantas vezes ela foi chamada, numero de arametros e etc
//   const setItemMock = jest.fn();

//   global.localStorage.__proto__.getItem = jest.fn().mockReturnValue("[]");
//   global.localStorage.__proto__.setItem = setItemMock;

//   const wrapper = mount(<TodoList />);

//   wrapper.setState({ newTodo: "novo todo" });
//   wrapper.instance().handleAddTodo();

//   expect(setItemMock).toHaveBeenLastCalledWith(
//     "todos",
//     JSON.stringify(["novo todo"])
//   );
// });

// it("should load todos in componentDidMount", () => {
//   const getItemMock = jest.fn().mockReturnValue(JSON.stringify(["Fazer café"]));

//   global.localStorage.__proto__.getItem = getItemMock;

//   const wrapper = mount(<TodoList />);

//   expect(wrapper.state("todos")).toEqual(["Fazer café"]);
// });
