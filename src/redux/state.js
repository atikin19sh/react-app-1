let state = {
  profilePage: {
    posts: [
      { id: 1, text: 'Hi! How are you?', likesCount: 15 },
      { id: 1, text: 'It\'s my first post!', likesCount: 20 },
    ]
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: 'Nikita' },
      { id: 2, name: 'Mariya' },
      { id: 3, name: 'Vitya' },
      { id: 4, name: 'Anya' },
      { id: 5, name: 'Ruslan' },
    ],
    messages: [
      { id: 1, text: 'Hi!' },
      { id: 2, text: 'How are you today?' },
      { id: 3, text: 'I am learning React JS now!' },
    ]
  },
  sidebar: {
    friends: [
      { id: 1, name: 'Mariya', ava: 'https://www.filepicker.io/api/file/JfhRa0RRAa11rQgCjRbu' },
      { id: 2, name: 'Anya', ava: 'https://cdn4.iconfinder.com/data/icons/avatarcon-avatar-and-profile/512/avatarcon_-_business_woman-256.png' },
      { id: 3, name: 'Ruslan', ava: 'https://www.kampfsportkaarst.de/wp-content/uploads/2018/06/team1-300x300.png' },
    ]
  }
}

export default state;