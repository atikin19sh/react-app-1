import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './redux/redux-store';
import App from './App';
import StoreContext from './StoreContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
  root.render(
    <StoreContext.Provider value={store}>
      <App state={state} />
    </StoreContext.Provider>
  );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
  rerenderEntireTree(store.getState());
});
