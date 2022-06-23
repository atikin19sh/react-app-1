import React from 'react';
import styles from './Users.module.css';

const Users = (props) => {
  debugger;
  if (props.users.length === 0) {
    props.setUsers(
      [
        {
          id: 1, userPhoto: 'https://toppng.com/uploads/preview/hacker-avatar-11556286068ziooyvonc2.png',
          fullName: 'Kolya', followed: true, status: 'Low Kick!', location: { countryName: 'Russia', cityName: 'Moscow' }
        },
        {
          id: 2, userPhoto: 'https://toppng.com/uploads/preview/hacker-avatar-11556286068ziooyvonc2.png',
          fullName: 'Petr', followed: false, status: 'High Punch!', location: { countryName: 'Belarus', cityName: 'Minsk' }
        },
        {
          id: 3, userPhoto: 'https://toppng.com/uploads/preview/hacker-avatar-11556286068ziooyvonc2.png',
          fullName: 'Zhenya', followed: false, status: 'Combo!', location: { countryName: 'Ukraine', cityName: 'Kiev' }
        },
        {
          id: 4, userPhoto: 'https://toppng.com/uploads/preview/hacker-avatar-11556286068ziooyvonc2.png',
          fullName: 'Sveta', followed: true, status: 'Fatality!!!', location: { countryName: 'Kazakhstan', cityName: 'Nur-Sultan' }
        }
      ]
    );
  }

  return <div>
    {
      props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <img src={u.userPhoto} className={styles.photo} alt='user_photo' />
          </div>
          <div>
            {u.followed
              ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
              : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
          </div>
        </span>
        <span>
          <span>
            <div>{u.fullName}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
          </span>
        </span>
      </div>
      )
    }
  </div>
}
export default Users;