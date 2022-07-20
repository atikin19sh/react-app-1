import { usersAPI } from '../components/api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_PAGE_SIZE = 'SET_PAGE_SIZE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';

const initialState = {
  users: [],
  currentPage: 1,
  totalUsersCount: 0,
  pageSize: 5,
  isFetching: false,
  followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        })
      }
    case SET_USERS:
      return {
        ...state,
        users: action.users
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.pageNumber
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.count
      };
    case SET_PAGE_SIZE:
      return {
        ...state,
        pageSize: action.pageSize
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case TOGGLE_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      }
    default:
      return state;
  }
}
// Action Creators
const followSuccess = (userId) => ({ type: FOLLOW, userId });
const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (pageNumber) => ({ type: SET_CURRENT_PAGE, pageNumber });
export const setTotalUsersCount = (count) => ({ type: SET_TOTAL_USERS_COUNT, count });
export const setPageSize = (pageSize) => ({ type: SET_PAGE_SIZE, pageSize });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (userId, isFetching) => ({ type: TOGGLE_FOLLOWING_PROGRESS, userId, isFetching });
// Thunk Creators
export const requestUsers = (currentPage, pageSize) => {
  return dispatch => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize)
      .then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
      });
  }
};
export const follow = (userId) => {
  return dispatch => {
    dispatch(toggleFollowingProgress(userId, true));
    usersAPI.followUser(userId)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(followSuccess(userId))
        };
        dispatch(toggleFollowingProgress(userId, false));
      });
  }
};
export const unfollow = (userId) => {
  return dispatch => {
    dispatch(toggleFollowingProgress(userId, true));
    usersAPI.unfollowUser(userId)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(unfollowSuccess(userId))
        };
        dispatch(toggleFollowingProgress(userId, false));
      });
  }
};


export default usersReducer;