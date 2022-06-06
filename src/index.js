import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, text: 'Hi! How are you?', likesCount: 15 },
  { id: 1, text: 'It\'s my first post!', likesCount: 15 },
];

let dialogs = [
  { id: 1, name: 'Nikita' },
  { id: 2, name: 'Mariya' },
  { id: 3, name: 'Vitya' },
  { id: 4, name: 'Anna' },
  { id: 5, name: 'Ruslan' },
];

let messages = [
  { id: 1, text: 'Hi!' },
  { id: 2, text: 'How are you today?' },
  { id: 3, text: 'I am learning React JS now!' },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
