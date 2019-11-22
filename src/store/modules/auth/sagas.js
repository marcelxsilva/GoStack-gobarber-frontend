import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '~/services/api';

import history from '~/services/history';
import { signInSuccess, signFailure } from './actions';

import { toast } from 'react-toastify'
export function* signIn({ payload }) {

  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password
    });

    const { token, user } = response.data;
    if (!user.provider) {
      toast.error('user not provider')
      return;
    }

    yield put(signInSuccess({ token, user }));

    history.push('/dashboard')
  } catch (error) {
    toast.error('Falha na autenticação, verifique seus dados')
    yield put(signFailure())
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);