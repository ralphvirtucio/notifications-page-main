import React from 'react';

export const NotificationItem = ({
  url,
  username,
  message,
  activity,
  status,
  isUnread,
}) => {
  const notificationBGUnread = isUnread
    ? 'notifications__list-item unread'
    : 'notifications__list-item';

  const notificationUnread = isUnread
    ? 'notifications__unread'
    : 'notifications__read';

  return (
    <li className={notificationBGUnread}>
      <div className='user__photo'>
        <img src={url} alt={username} />
      </div>

      <div className='notifications__content'>
        <p className='notifications__feed'>
          <strong className='notifications__username'>{username}</strong>
          <span className='notifications__activity'>{activity}</span>
          <span className='notifications__message'>{message}</span>
          <span className={notificationUnread}></span>
        </p>
        <p className='notifications__status'>{status} ago</p>
      </div>
    </li>
  );
};
