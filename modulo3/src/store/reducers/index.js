// registrar reducer dentro do store
import { combineReducers } from 'redux';
// combineReducers: combina todos os reducers em um grande reducer

import todos from './todos';

export default combineReducers({
  todos,
});
