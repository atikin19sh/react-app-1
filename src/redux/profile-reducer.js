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
  let stateCopy = { ...state };
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 3,
        text: stateCopy.newPostText,
        likesCount: 0
      };
      if (newPost.text === '') {
        alert('Поле не должно быть пустым');
      } else {
        stateCopy.posts = [...state.posts];
        stateCopy.posts.push(newPost);
        stateCopy.newPostText = '';
      };
      return stateCopy;
    case UPDATE_NEW_POST_TEXT:
      stateCopy.newPostText = action.newText;
      return stateCopy;
    default:
      return stateCopy;
  };
};

export const addPostActionCreator = () => {
  return { type: ADD_POST };
};

export const updateNewPostTextActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};

export default profileReducer;