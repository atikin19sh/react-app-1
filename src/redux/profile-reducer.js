const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
  posts: [
    { id: 2, text: 'Hi! How are you?', likesCount: 15 },
    { id: 1, text: 'It\'s my first post!', likesCount: 20 },
  ],
  newPostText: 'All right!',
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
        newPostText: action.newText
      };

    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return { type: ADD_POST };
};

export const updateNewPostTextActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};

export default profileReducer;