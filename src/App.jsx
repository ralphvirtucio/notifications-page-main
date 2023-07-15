import { Fragment } from 'react';
import './App.scss';
import mark_photo from './assets/images/avatar-mark-webber.webp';

//! Notification Badge will be a state of how many unread message on the notifications

const App = () => {
  return (
    <Fragment>
      <header className='header'>
        <div className='main-heading__container'>
          <h1>Notifications</h1> <span className='notification__badge'>3</span>
        </div>

        <div className='mark-all-read__container'>
          <button>Mark All as read</button>
        </div>
      </header>

      <main>
        <ul className='notifications__list'>
          <li className='notification__list-item'>
            <div className='user__photo'>
              <img src={mark_photo} alt='Mark Webber' />
            </div>

            <div className='notification__content'>
              <p className='notifcation__feed'>
                <strong>Mark Webber</strong> reacted to your recent post{' '}
                <em>My first tournament!</em>{' '}
                <span className='notification__status'>unread</span>
              </p>
              <p className='notification__activity'>1m ago</p>
            </div>
          </li>
        </ul>
      </main>
    </Fragment>
  );
};

export default App;
