const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
  ]
};

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {

    case SEND_MESSAGE:

      let newMessage = {
        id: (state.messages.at(-1).id + 1),
        text: action.newMessageText,
        userRole: 'you',
        userAva: "https://miro.medium.com/max/2400/1*fJX2JDYTLZf2Z5EFYUP6eA.jpeg",
      };

      return {
        ...state,
        messages: [...state.messages, newMessage]
      };

    default:
      return state;
  }
};

export const sendMessage = (newMessageText) => {
  return { type: SEND_MESSAGE, newMessageText };
};

export default dialogsReducer;