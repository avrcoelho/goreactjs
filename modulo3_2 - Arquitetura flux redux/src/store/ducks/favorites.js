/* types - inicio */

export const Types = {
  // nome do reducer/ação quequer realizar
  ADD_REQUEST: 'favorites/ADD_REQUEST',
  ADD_SUCCESS: 'favorites/ADD_SUCCESS',
  ADD_FAILUED: 'favorites/ADD_FAILUED',
};

/* types - fim */

/* Reducers - inicio */

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null,
};

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: [...state.data, action.payload.data],
      };
    case Types.ADD_FAILUED:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

/* Reducers - fim */

/* Actions - inicio */

export const Creators = {
  // request que vai ser chamada
  // quem vai ouvir essa função vai er o saga, pois ela não esta completa para
  // ser enviada para o reducer
  addFavoriteRequest: repository => ({
    type: Types.ADD_REQUEST,
    payload: { repository },
  }),
  // recebe os dados do repositório e envia para o reducer
  addFavoriteSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),

  addFavoriteFailued: error => ({
    type: Types.ADD_FAILUED,
    payload: { error },
  }),
};
/* actions - fim */
