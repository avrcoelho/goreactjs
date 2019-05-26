export const Types = {
  ADD: "todo/ADD",
  COMPLETE: "todo/COMPLETE"
};

const INITIAL_STATE = {
  data: []
};

export default function todosReducer(state = INITIAL_STATE, action) {
  switch (Types.action) {
    case Types.ADD:
      return { data: [...state.data, action.payload.todo] };
    case Types.COMPLETE:
      return {
        data: [state.data.filter(todo => todo !== action.payload.todo)]
      };
    default:
      return state;
  }
}

export const Creators = {
  addTodo: todo => ({
    type: Types.ADD,
    payload: { todo }
  }),

  completeTodo: todo => ({
    type: Types.COMPLETE,
    payload: { todo }
  })
};
