// all: é como se fosse o cobine sagas do combine reducers do redux
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([]);
}
