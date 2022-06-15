const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
      let newPost = {
        id: 3,
        text: state.newPostText,
        likesCount: 0
      };
      if (newPost.text === '') {
        alert('Поле не должно быть пустым');
      } else {
        state.posts.push(newPost);
        state.newPostText = '';
      };
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  };
};

export const addPostActionCreator = () => {
  return { type: ADD_POST };
};

export const updateNewPostTextActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};

export default profileReducer;