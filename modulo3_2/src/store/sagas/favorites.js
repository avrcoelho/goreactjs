// select procura dados no reducer
import { call, put, select } from 'redux-saga/effects';

import api from '../../services/api';
import { Creators as FavoriteActions } from '../ducks/favorites';
// função generator
// o action que é recebido são os dados vindo da action os payload
export function* addFavorite(action) {
  try {
    // call:  utilizado para liar com promisse
    const { data } = yield call(api.get, `repos/${action.payload.repository}`);

    // aqui tem acesso ao state
    const isDuplicated = yield select(state => state.favorites.data.find(favorite => favorite.id === data.id));

    if (isDuplicated) {
      yield put(FavoriteActions.addFavoriteFailued('Repositório já adicionado'));
    } else {
      const repositoryData = {
        id: data.id,
        name: data.full_name,
        description: data.description,
        url: data.html_url,
      };

      // put faz o papel de enviar a action para os reducers da aplicação e fazer as ações necessarias em cada reducer
      yield put(FavoriteActions.addFavoriteSuccess(repositoryData));
    }
  } catch (err) {
    yield put(FavoriteActions.addFavoriteFailued('Erro ao adicionar repositório'));
  }
}
