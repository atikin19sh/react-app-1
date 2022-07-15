import { profileAPI } from '../components/api/api';

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  posts: [
    { id: 2, text: 'Hi! How are you?', likesCount: 15 },
    { id: 1, text: 'It\'s my first post!', likesCount: 20 },
  ],
  newPostText: 'All right!',
  profile: null,
  status: ''
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_POST:

      let newPost = {
        id: (state.posts.at(0).id + 1),
        text: action.newPostText,
        likesCount: 0
      };

      return {
        ...state,
        posts: [newPost, ...state.posts]
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      };

    case SET_STATUS:
      return {
        ...state,
        status: action.status
      };

    default:
      return state;
  }
};

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });
const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
const setStatus = (status) => ({ type: SET_STATUS, status });

export const getUserProfile = (userId) => {
  return dispatch => {
    profileAPI.getProfile(userId)
      .then(data => {
        dispatch(setUserProfile(data));
      })
  }
}
export const getStatus = (userId) => {
  return dispatch => {
    profileAPI.getStatus(userId)
      .then(data => {
        dispatch(setStatus(data));
      })
  }
}
export const updateStatus = (status) => {
  return dispatch => {
    profileAPI.updateStatus(status)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(setStatus(status))
        }
      })
  }
}

export default profileReducer;