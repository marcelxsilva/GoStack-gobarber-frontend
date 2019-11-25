import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, Profile } from './styles';
import logo from '~/assets/logo2.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
        <img src={logo} alt='user' />

          <Link to='/dashboard'>DASHBOARD</Link>
          </nav>

        <aside>
          <Profile>
            <div>
              <strong>Name User</strong>
              <Link to='/profile'>Meu Perfil</Link>
            </div>
            <img src='https://api.adorable.io/avatars/50/abott@adorable.png' alt='user' />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}