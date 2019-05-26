export const addTodo = text => ({
  // type: é um propriedae obrigatória dentro de cada action. é aquilo que vai determinar qual ação esta sendo feita
  // é obrigação parsar toda informação dentro do payload
  type: 'ADD_TODO',
  payload: { text },
});

export const removeTodo = id => ({
  type: 'REMOVE_TODO',
  payload: { id },
});
