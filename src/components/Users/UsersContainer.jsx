import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Users from './Users';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setPageSize, toggleIsFetching } from '../../redux/users-reducer';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios.get(`users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  };

  onPageButtonClick = (pageNumber) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    axios.get(`users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
      });
  };

  onPageSizeChange = (pageSize) => {
    this.props.toggleIsFetching(true);
    this.props.setPageSize(pageSize);
    axios.get(`users?page=${this.props.currentPage}&count=${pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users
        onPageButtonClick={this.onPageButtonClick}
        onPageSizeChange={this.onPageSizeChange}
        users={this.props.users}
        currentPage={this.props.currentPage}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
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
    isFetching: state.usersPage.isFetching
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
    toggleIsFetching
  })(UsersContainer);