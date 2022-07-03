import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './redux/redux-store';
import App from './App';
import { Provider } from 'react-redux';
import axios from 'axios';

axios.defaults.baseURL = 'https://social-network.samuraijs.com/api/1.0/';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = () => {
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
};

rerenderEntireTree();

store.subscribe(() => {
  rerenderEntireTree();
});

window.store = store;
