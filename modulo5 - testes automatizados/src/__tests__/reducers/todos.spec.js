import todosReducer, { Creators as TodosActions } from "../../store/ducks/todo";

describe("Todos reducer", () => {
  it("should be able to add todos", () => {
    const state = todosReducer({ data: [] }, TodosActions.addTodo("Novo todo"));

    expect(state.data[0]).toBe("Novo todo");
  });

  it("Should be able to complete todos", () => {
    const todos = ["Fazer café"];

    const state = todosReducer(
      { data: todos },
      TodosActions.completeTodo("Fazer café")
    );

    expect(state.data.length).toBe(0);
  });
});
