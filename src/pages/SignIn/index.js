import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg'
// import { Container } from './styles';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt='logo' />
      <form>
        <input type='email' placeholder='E-mail' />
        <input type='password' placeholder='Senha' />
        <button type='submit'>Acessar</button>
        <Link to='/register'>Criar Conta</Link>
      </form>
    </>
  );
}
