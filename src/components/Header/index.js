import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, Profile } from './styles';
import logo from '~/assets/logo2.svg';
import { useSelector } from 'react-redux';
import Notifications from '../Notifications';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt='user' />

          <Link to='/dashboard'>DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to='/profile'>Meu Perfil</Link>
            </div>
            <img src={profile.avatar ? profile.avatar.url : 'https://api.adorable.io/avatars/50/abott@adorable.png'} alt='user' />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
