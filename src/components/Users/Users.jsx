import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Users.module.css';
import userPhoto from './../../assets/images/userPhotoMock.png';

const Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let CP = props.currentPage;

  let pages = [];
  pages.push(1);

  switch (CP) {
    case 1:
      pages.push(CP + 1, CP + 2, '...');
      break;
    case 2:
      pages.push(CP, CP + 1, CP + 2, '...');
      break;
    case 3:
      pages.push(CP - 1, CP, CP + 1, CP + 2, '...');
      break;
    case 4:
      pages.push(CP - 2, CP - 1, CP, CP + 1, CP + 2, '...');
      break;
    case pagesCount - 3:
      pages.push('...', CP - 2, CP - 1, CP, CP + 1, CP + 2);
      break;
    case pagesCount - 2:
      pages.push('...', CP - 2, CP - 1, CP, CP + 1);
      break;
    case pagesCount - 1:
      pages.push('...', CP - 2, CP - 1, CP);
      break;
    case pagesCount:
      pages.push('...', CP - 2, CP - 1);
      break;
    default:
      pages.push('...', CP - 2, CP - 1, CP, CP + 1, CP + 2, '...');
      break;
  }
  pages.push(pagesCount);

  let createPageButton = (pageNumber) => {
    return <span onClick={() => { props.onPageButtonClick(pageNumber) }} className={props.currentPage === pageNumber ? styles.selectedPage : ''}>{pageNumber}</span>
  };

  return <div>

    <div className={styles.pageButtons}>
      {pages.map(p => createPageButton(p))}
    </div>

    <div className={styles.pageSizeSelection}>
      View:
      <span onClick={() => props.onPageSizeChange(5)}
        className={props.pageSize === 5 && styles.selectedPageSize}>5</span>
      <span onClick={() => props.onPageSizeChange(10)}
        className={props.pageSize === 10 && styles.selectedPageSize}>10</span>
      <span onClick={() => props.onPageSizeChange(50)}
        className={props.pageSize === 50 && styles.selectedPageSize}>50</span>
    </div>

    {
      props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <NavLink to={`/profile/${u.id}`}>
              <img src={u.photos.small != null ? u.photos.small : userPhoto}
                className={styles.photo}
                alt='img' />
            </NavLink>
          </div>
          <div>
            {u.followed
              ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
              : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
          </div>
        </span>
        <span>
          <div>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>u.location.country</div>
              <div>u.location.city</div>
            </span>
          </div>
        </span>
      </div>
      )
    }
  </div>
}

export default Users;