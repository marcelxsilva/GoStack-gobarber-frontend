import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as yup from 'yup';

import logo from '~/assets/logo.svg';
// import { Container } from './styles';
const schema = yup.object().shape({
  email: yup.string()
    .email('Tipo de E-mail Inválido')
    .required('E-mail obrigatório'),
  password: yup.string().required('Senha Obrigatória')
});

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data)
  }
  return (
    <>
      <img src={logo} alt='logo' />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name='email' type='email' placeholder='E-mail' />
        <Input name='password' type='password' placeholder='Senha' />
        <button type='submit'>Acessar</button>
        <Link to='/register'>Criar Conta</Link>
      </Form>
    </>
  );
}
