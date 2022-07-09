import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {
  follow,
  unfollow,
  setCurrentPage,
  setPageSize,
  getUsers
} from '../../redux/users-reducer';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  };

  onPageButtonClick = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  onPageSizeChange = (pageSize) => {
    this.props.setPageSize(pageSize);
    this.props.getUsers(this.props.currentPage, pageSize);
  };

  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users
        onPageButtonClick={this.onPageButtonClick}
        onPageSizeChange={this.onPageSizeChange}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
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
    setCurrentPage,
    setPageSize,
    getUsers
  })(UsersContainer);
