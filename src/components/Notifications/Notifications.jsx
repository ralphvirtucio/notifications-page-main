import React from 'react';
import { NotificationItem } from './NotificationItem';
import './Notifications.scss';

export const Notifications = ({ data }) => {
  const mappedData = data.map((userData) => (
    <NotificationItem
      key={userData.id}
      url={userData.img_url}
      username={userData.username}
      message={userData.message}
      activity={userData.activity}
      status={userData.status}
      isUnread={userData.unread}
    />
  ));

  return <ul className='notifications__list'>{mappedData}</ul>;
};
