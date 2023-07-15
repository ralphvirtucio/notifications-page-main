import React from 'react';

export const NotificationItem = ({
  url,
  username,
  message,
  activity,
  status,
}) => {
  return (
    <li className='notifications__list-item'>
      <div className='user__photo'>
        <img src={url} alt={username} />
      </div>

      <div className='notifications__content'>
        <p className='notifcations__feed'>
          <strong className='notifications__username'>{username}</strong>
          <span className='notifications__activity'>{activity}</span>
          <span className='notifications__message'>{message}</span>
        </p>
        <p className='notifications__status'>{status} ago</p>
      </div>
    </li>
  );
};
