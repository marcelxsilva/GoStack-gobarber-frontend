import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Form } from '@rocketseat/unform';
import logo from '~/assets/logo.svg';
// import { Container } from './styles';

export default function SignUp() {

  function handleSubmit(data){
    console.tron.log(data)
  }
  return (
    <>
      <img src={logo} alt='logo' />
      <Form onSubmit={handleSubmit}>
        <Input name='name' placeholder='Nome Completo' />
        <Input name='email' type='email' placeholder='E-mail' />
        <Input name='password' type='password' placeholder='Senha' />
        <button type='submit'>Acessar</button>
        <Link to='/'>Acessar Minha Conta</Link>
      </Form>
    </>
  );
}
