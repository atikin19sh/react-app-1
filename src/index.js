import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './redux/state';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>
  );
};

window.state = store.getState();

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
