import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg'
// import { Container } from './styles';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt='logo' />
      <form>
        <input placeholder='Nome Completo' />
        <input type='email' placeholder='E-mail' />
        <input type='password' placeholder='Senha' />
        <button type='submit'>Acessar</button>
        <Link to='/'>Acessar Minha Conta</Link>
      </form>
    </>
  );
}
