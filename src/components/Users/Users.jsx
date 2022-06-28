import React from 'react';
import styles from './Users.module.css';
import axios from 'axios';
import userPhoto from './../../assets/images/userPhotoMock.png';

class Users extends React.Component {
  componentDidMount() {
    axios.get(`users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  };

  onPageButtonClick(pageNumber) {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  }

  onPageSizeChange(pageSize) {
    this.props.setPageSize(pageSize);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {

    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

    let CP = this.props.currentPage;

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
      return <span onClick={() => { this.onPageButtonClick(pageNumber) }} className={this.props.currentPage === pageNumber ? styles.selectedPage : ''}>{pageNumber}</span>
    };

    return <div>

      <div className={styles.pageButtons}>
        {
          pages.map(p => createPageButton(p))
        }
      </div>

      <div className={styles.pageSizeSelection}>
        View:
        <span onClick={() => this.onPageSizeChange(5)}
          className={this.props.pageSize === 5 && styles.selectedPageSize}>5</span>
        <span onClick={() => this.onPageSizeChange(10)}
          className={this.props.pageSize === 10 && styles.selectedPageSize}>10</span>
        <span onClick={() => this.onPageSizeChange(50)}
          className={this.props.pageSize === 50 && styles.selectedPageSize}>50</span>
      </div>

      {
        this.props.users.map(u => <div key={u.id}>
          <span>
            <div>
              <img src={u.photos.small != null ? u.photos.small : userPhoto}
                className={styles.photo} alt='img' />
            </div>
            <div>
              {u.followed
                ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
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
    </div >
  }
}

export default Users;