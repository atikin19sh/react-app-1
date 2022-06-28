import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Users from './Users';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC, setPageSizeAC } from '../../redux/users-reducer';

class UsersContainer extends React.Component {
  componentDidMount() {
    axios.get(`users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  };

  onPageButtonClick = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  };

  onPageSizeChange = (pageSize) => {
    debugger
    this.props.setPageSize(pageSize);
    debugger
    axios.get(`users?page=${this.props.currentPage}&count=${pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return <Users
      onPageButtonClick={this.onPageButtonClick}
      onPageSizeChange={this.onPageSizeChange}
      users={this.props.users}
      currentPage={this.props.currentPage}
      totalUsersCount={this.props.totalUsersCount}
      pageSize={this.props.pageSize}
      follow={this.props.follow}
      unfollow={this.props.unfollow}
    />
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalUsersCount: (count) => {
      dispatch(setTotalUsersCountAC(count));
    },
    setPageSize: (pageSize) => {
      dispatch(setPageSizeAC(pageSize));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);