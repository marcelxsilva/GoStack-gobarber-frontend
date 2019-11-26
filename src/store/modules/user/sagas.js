import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from '~/services/api';
import { toast } from 'react-toastify';
import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {

  try {
    const { name, email, ...rest } = payload.data;

    const profile = Object.assign({ name, email }, rest.oldPassword ? rest : {})
    const response = yield call(api.put, 'users', profile)

    toast.success('atualizado com sucesso');
    yield put(updateProfileSuccess(response.data))

  } catch (error) {

    toast.error('Erro ao atualizar perfil')
    yield put(updateProfileFailure())

  }
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)
])
