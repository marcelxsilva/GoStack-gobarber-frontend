import React from 'react';

import { Container, Badge, NotificationList, Notification } from './styles';
import { MdNotifications } from 'react-icons/md'
export default function Notifications() {
  return (
    <Container>
      <Badge hasUnRead >
        <MdNotifications color='#7159c1' size={25} />
      </Badge>
      <NotificationList>

        <Notification unRead>
          <p>Agendamento</p>
          <time>há 2 dias</time>
          <button type='button'>Lida</button>
        </Notification>

        <Notification>
          <p>Agendamento</p>
          <time>há 2 dias</time>
          <button type='button'>Lida</button>
        </Notification>

        <Notification>
          <p>Agendamento</p>
          <time>há 2 dias</time>
          <button type='button'>Lida</button>
        </Notification>

      </NotificationList>
    </Container>
  );
}
