import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { follow, 
  unfollow, 
  setUsers, 
  setCurrentPage, 
  setTotalUsersCount, 
  setPageSize, 
  toggleIsFetching, 
  toggleFollowingProgress } from '../../redux/users-reducer';
import { usersAPI } from '../api/api';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
  };

  onPageButtonClick = (pageNumber) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
      });
  };

  onPageSizeChange = (pageSize) => {
    this.props.toggleIsFetching(true);
    this.props.setPageSize(pageSize);
    usersAPI.getUsers(this.props.currentPage, pageSize).then(data => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
      });
  };

  onFollowClick = (userId) => {
    this.props.toggleFollowingProgress(userId, true);
    usersAPI.followUser(userId).then(data => {
      if (data.resultCode === 0) {
        this.props.follow(userId)
      };
      this.props.toggleFollowingProgress(userId, false);
    });
  };

  onUnfollowClick = (userId) => {
    this.props.toggleFollowingProgress(userId, true);
    usersAPI.unfollowUser(userId).then(data => {
      if (data.resultCode === 0) {
        this.props.unfollow(userId)
      };
      this.props.toggleFollowingProgress(userId, false);
    });
  };

  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users
        onPageButtonClick={this.onPageButtonClick}
        onPageSizeChange={this.onPageSizeChange}
        onFollowClick={this.onFollowClick}
        onUnfollowClick={this.onUnfollowClick}
        users={this.props.users}
        currentPage={this.props.currentPage}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        followingInProgress={this.props.followingInProgress}
      />
    </>

  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  };
};

export default connect(
  mapStateToProps,
  {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setPageSize,
    toggleIsFetching,
    toggleFollowingProgress
  })(UsersContainer);