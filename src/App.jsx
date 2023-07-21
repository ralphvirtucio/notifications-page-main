import { Fragment, useState } from 'react';
import './App.scss';
import data from './data.json';
import { Notifications } from './components/Notifications/Notifications';

const App = () => {
  const [userData, setUserData] = useState(data);

  const unreadMessage = () => {
    const unreadMessages = userData.filter((value) => value.unread);

    return unreadMessages;
  };

  const markUnreadMessage = () => {
    console.log('click');

    setUserData((prevState) =>
      prevState.map((data) => {
        if (data.unread) {
          return { ...data, unread: !data.unread };
        } else {
          return data;
        }
      })
    );
  };

  return (
    <Fragment>
      <header className='header'>
        <div className='main-heading__container'>
          <h1>Notifications</h1>{' '}
          <span className='notification__badge'>{unreadMessage().length}</span>
        </div>

        <div className='mark-all-read__container'>
          <button onClick={markUnreadMessage}>Mark All as read</button>
        </div>
      </header>

      <main className='notifications'>
        <Notifications data={userData} />
      </main>
    </Fragment>
  );
};

export default App;
