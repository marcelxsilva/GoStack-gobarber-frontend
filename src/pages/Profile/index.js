import React from 'react';

import { Container } from './styles';
import { Form, Input } from '@rocketseat/unform';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfileRequest } from '~/store/modules/user/actions';
import AvatarInput from './AvatarInput';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);


  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={e => handleSubmit(e)}>
        <AvatarInput name='avatar_id' />
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
