import React from 'react';

import { Container, Badge, NotificationList, Notification, Scroll } from './styles';
import { MdNotifications } from 'react-icons/md'
export default function Notifications() {
  return (
    <Container>
      <Badge hasUnRead >
        <MdNotifications color='#7159c1' size={25} />
      </Badge>
      <NotificationList>
        <Scroll>
          <Notification unRead>
            <p>Voce Possui Um novo Agendamento</p>
            <time>há 2 dias</time>
            <button type='button'>Marcar como Lida</button>
          </Notification>

          <Notification>
            <p>Voce Possui Um novo Agendamento</p>
            <time>há 2 dias</time>
            <button type='button'>Marcar como Lida</button>
          </Notification>

          <Notification>
            <p>Voce Possui Um novo Agendamento</p>
            <time>há 2 dias</time>
            <button type='button'>Marcar como Lida</button>
          </Notification>

          <Notification>
            <p>Voce Possui Um novo Agendamento</p>
            <time>há 2 dias</time>
            <button type='button'>Marcar como Lida</button>
          </Notification>


          <Notification>
            <p>Voce Possui Um novo Agendamento</p>
            <time>há 2 dias</time>
            <button type='button'>Marcar como Lida</button>
          </Notification>


          <Notification>
            <p>Voce Possui Um novo Agendamento</p>
            <time>há 2 dias</time>
            <button type='button'>Marcar como Lida</button>
          </Notification>

          <Notification>
            <p>Voce Possui Um novo Agendamento</p>
            <time>há 2 dias</time>
            <button type='button'>Marcar como Lida</button>
          </Notification>
        </Scroll>
      </NotificationList>
    </Container>
  );
}
