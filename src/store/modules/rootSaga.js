import { all } from 'redux-saga/effects';

// all sagas
import auth from './auth/sagas';
import user from './user/sagas';

export default function* rootSaga() {
  return yield all(
    [
      auth,
      user,
    ]
  )
}