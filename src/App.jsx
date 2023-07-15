import { Fragment, useState } from 'react';
import './App.scss';
import data from './data.json';
import { Notifications } from './components/Notifications/Notifications';
//! Notification Badge will be a state of how many unread message on the notifications

const App = () => {
  const [userData, setUserData] = useState(data);

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

      <main className='notifications'>
        <Notifications data={userData} />
      </main>
    </Fragment>
  );
};

export default App;
