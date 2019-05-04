// o reducer sempre vai ser uma função
// action: é o que o component dispara
// state: é como o estado esta ante da alteração
// sempre inicie o reducer com um valor

const INITIAL_STATE = [
  {
    id: 1,
    text: 'Fazer cfé',
  },
  {
    id: 2,
    text: 'Estudar react',
  },
];

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TODO':
      // como o id não vem do front, vamos gerar um qualquer
      // aqui o state é alterado
      return [...state, { id: Math.random(), text: action.payload.text }];
    default:
      // caso nada for alterado retorna isso
      return state;
  }
}
