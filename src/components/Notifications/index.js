import React, { useState, useEffect, useMemo } from 'react';

import { Container, Badge, NotificationList, Notification, Scroll } from './styles';
import { MdNotifications } from 'react-icons/md';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

export default function Notifications() {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const hasUnread = useMemo(
    () => !!notifications.find(notification => notification.read === false),
    [notifications]
  )

  useEffect(() => {
    async function loadNotifications() {
      const response = await api.get('/notifications')

      const data = response.data.map(notification => ({
        ...notification,
        timeDistance: formatDistance(
          parseISO(notification.createdAt),
          new Date(),
          {
            addSuffix: true, // adicionando sufix "há" N dias atrás
            locale: pt
          })
      }))

      setNotifications(data)
    }
    loadNotifications()
  }, [])

  function handleToggleVisible() {
    setVisible(!visible)
  }

  async function handleMarkHasRead(id) {
    await api.put(`/notifications/${id}`);

    setNotifications(
      notifications.map(notification =>
        notification._id === id ? { ...notification, read: true } : notification
      )
    )
  }

  return (
    <Container>
      <Badge hasUnRead={hasUnread} onClick={handleToggleVisible}>
        <MdNotifications color='#7159c1' size={25} />
      </Badge>
      <NotificationList visible={visible}>
        <Scroll>

          {
            notifications.map(notification => (
              <Notification key={notification._id} unRead={!notification.read}>
                <p>{notification.content}</p>
                <time>{notification.timeDistance}</time>
                {
                  !notification.read && (
                    <button
                      onClick={() => handleMarkHasRead(notification._id)}
                      type='button'
                    >
                      Marcar como Lida
                  </button>
                  )
                }
              </Notification>
            ))
          }

        </Scroll>
      </NotificationList>
    </Container>
  );
}
