import React from 'react';

import { Container } from './styles';
import { Form, Input } from '@rocketseat/unform';
import { useSelector } from 'react-redux';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  console.log(profile)

  function handleSubmit(){

  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name='name' placeholder='Nome Completo' />
        <Input name='email' placeholder='E-Mail' />
        <hr />
        <Input type='password' name='oldPassword' placeholder='Senha Atual' />
        <Input type='password' name='password' placeholder='Nova Senha' />
        <Input type='password' name='confirmPassword' placeholder='Confirmar Senha' />
        <button type='submit'>Atualizar Perfil</button>
      </Form>
      <button type='submit'>Sair do GoBarber</button>
    </Container>
  );
}
