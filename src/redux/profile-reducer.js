const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  posts: [
    { id: 2, text: 'Hi! How are you?', likesCount: 15 },
    { id: 1, text: 'It\'s my first post!', likesCount: 20 },
  ],
  newPostText: 'All right!',
  profile: null
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_POST:

      if (state.newPostText === '') {
        alert('Поле не должно быть пустым');
        return state;
      };

      let newPost = {
        id: (state.posts.at(0).id + 1),
        text: state.newPostText,
        likesCount: 0
      };

      return {
        ...state,
        posts: [newPost, ...state.posts],
        newPostText: ''
      };

    case UPDATE_NEW_POST_TEXT:

      return {
        ...state,
        newPostText: action.text
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      };

    default:
      return state;
  }
};

export const addPost = () => ({ type: ADD_POST });
export const updateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, text });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export default profileReducer;