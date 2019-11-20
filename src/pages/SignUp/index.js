import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Form } from '@rocketseat/unform';
import * as yup from 'yup';
import logo from '~/assets/logo.svg';
// import { Container } from './styles';

const schema = yup.object().shape({
  name: yup.string()
    .required('Nome obrigatório'),
  email: yup.string().required('Email obrigatório'),
  password: yup.string()
  .min(6, 'Senha deve ser maior que 6 caracteres')
  .required('Senha obrigatória'),
})

export default function SignUp() {

  function handleSubmit(data) {
    console.tron.log(data)
  }
  return (
    <>
      <img src={logo} alt='logo' />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name='name' placeholder='Nome Completo' />
        <Input name='email' type='email' placeholder='E-mail' />
        <Input name='password' type='password' placeholder='Senha' />
        <button type='submit'>Acessar</button>
        <Link to='/'>Acessar Minha Conta</Link>
      </Form>
    </>
  );
}
