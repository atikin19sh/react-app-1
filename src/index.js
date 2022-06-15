import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './redux/redux-store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) => {
  root.render(<App state={state} />);
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
