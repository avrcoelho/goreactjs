// all: é como se fosse o cobine sagas do combine reducers do redux
import { all, takeLatest } from 'redux-saga/effects';

import { Types as PlaylistsTypes } from '../ducks/playlists';
import { getPlaylists } from './playlists';

export default function* rootSaga() {
  yield all([
    // toda vez que o action GET_REQUEST for chamado, vai disparar o getPlaylists
    // takelatest: só pega uma chamada a API
    takeLatest(PlaylistsTypes.GET_REQUEST, getPlaylists),
  ]);
}
