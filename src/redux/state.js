const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 2, text: 'Hi! How are you?', likesCount: 15 },
        { id: 1, text: 'It\'s my first post!', likesCount: 20 },
      ],
      newPostText: 'All right!',
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Nikita', ava: "https://miro.medium.com/max/2400/1*fJX2JDYTLZf2Z5EFYUP6eA.jpeg" },
        { id: 2, name: 'Mariya', ava: 'https://www.filepicker.io/api/file/JfhRa0RRAa11rQgCjRbu' },
        { id: 3, name: 'Vitya', ava: 'https://miro.medium.com/fit/c/1360/1360/2*S4BvCsc_o_KwFCx-gmVTlg.png' },
        { id: 4, name: 'Anya', ava: 'https://cdn4.iconfinder.com/data/icons/avatarcon-avatar-and-profile/512/avatarcon_-_business_woman-256.png' },
        { id: 5, name: 'Ruslan', ava: 'https://www.kampfsportkaarst.de/wp-content/uploads/2018/06/team1-300x300.png' },
      ],
      messages: [
        { id: 1, userRole: 'you', text: 'Hello!', userAva: "https://miro.medium.com/max/2400/1*fJX2JDYTLZf2Z5EFYUP6eA.jpeg" },
        { id: 2, userRole: 'talker', text: 'Hi! How are you today?', userAva: 'https://miro.medium.com/fit/c/1360/1360/2*S4BvCsc_o_KwFCx-gmVTlg.png' },
        { id: 3, userRole: 'you', text: 'I am fine!', userAva: "https://miro.medium.com/max/2400/1*fJX2JDYTLZf2Z5EFYUP6eA.jpeg" },
        { id: 4, userRole: 'you', text: 'I am learning React JS now!', userAva: "https://miro.medium.com/max/2400/1*fJX2JDYTLZf2Z5EFYUP6eA.jpeg" },
        { id: 5, userRole: 'talker', text: 'Wow! Good luck!', userAva: 'https://miro.medium.com/fit/c/1360/1360/2*S4BvCsc_o_KwFCx-gmVTlg.png' },
      ],
      newMessageText: 'Thanks!',
    },
    sidebar: {
      friends: [
        { id: 1, name: 'Mariya', ava: 'https://www.filepicker.io/api/file/JfhRa0RRAa11rQgCjRbu' },
        { id: 2, name: 'Anya', ava: 'https://cdn4.iconfinder.com/data/icons/avatarcon-avatar-and-profile/512/avatarcon_-_business_woman-256.png' },
        { id: 3, name: 'Ruslan', ava: 'https://www.kampfsportkaarst.de/wp-content/uploads/2018/06/team1-300x300.png' },
      ],
    }
  },
  _callSubscriber(state) {
    console.log('State changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 3,
        text: this._state.profilePage.newPostText,
        likesCount: 0
      };
      if (newPost.text === '') {
        alert('Поле не должно быть пустым');
        return;
      } else {
        this._state.profilePage.posts.push(newPost);
        this._callSubscriber(this._state);
        this._state.profilePage.newPostText = '';
      };
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let newMessage = {
        id: 6,
        text: this._state.dialogsPage.newMessageText,
        userRole: 'you',
        userAva: "https://miro.medium.com/max/2400/1*fJX2JDYTLZf2Z5EFYUP6eA.jpeg",
      };
      if (newMessage.text === '') {
        alert('Поле не должно быть пустым');
        return;
      } else {
        this._state.dialogsPage.messages.push(newMessage);
        this._callSubscriber(this._state);
        this._state.dialogsPage.newMessageText = '';
      };
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.newText;
      this._callSubscriber(this._state);
    };
  },
};

export const addPostActionCreator = () => {
  return { type: ADD_POST };
};

export const updateNewPostTextActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};

export const sendMessageActionCreator = () => {
  return { type: SEND_MESSAGE };
};

export const updateNewMessageTextActionCreator = (text) => {
  return { type: UPDATE_NEW_MESSAGE_TEXT, newText: text };
};

export default store;

window.store = store;