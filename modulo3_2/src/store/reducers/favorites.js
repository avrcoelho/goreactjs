const INITIAL_STATE = [];

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [
        ...state,
        {
          id: Math.random(),
          name: 'Fcebook/react',
          description: 'Teste',
          url: 'https://github.com/facebook/react',
        },
      ];
    default:
      return state;
  }
}
