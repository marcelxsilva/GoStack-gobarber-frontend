import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';
import { signInRequest } from '~/store/modules/auth/actions';
import * as yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = yup.object().shape({
  email: yup.string()
    .email('Tipo de E-mail Inválido')
    .required('E-mail obrigatório'),
  password: yup.string().required('Senha Obrigatória')
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading)

  function handleSubmit({ email, password }) {
    dispatch(signInRequest({ email, password }));

  }
  return (
    <>
      <img src={logo} alt='logo' />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name='email' type='email' placeholder='E-mail' />
        <Input name='password' type='password' placeholder='Senha' />
        <button type='submit'>{loading ? 'Carregando ..' : 'Acessar'}</button>
        <Link to='/register'>Criar Conta</Link>
      </Form>
    </>
  );
}
