import React from 'react';
import styles from './Users.module.css';
import axios from 'axios';
import Pagination from '../Pagination/Pagination';
import userPhoto from './../../assets/images/userPhotoMock.png';

class Users extends React.Component {
  componentDidMount() {
    axios.get(`users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  };

  render() {
    return <div>
      <Pagination
        AxiosURL={`users`}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        totalItemsCount={this.props.totalUsersCount}
        setPageSize={this.props.setPageSize}
        setItems={this.props.setUsers}
        setCurrentPage={this.props.setCurrentPage}
        setTotalItemsCount={this.props.setTotalUsersCount}
      />
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
    </div>
  }
}

export default Users;