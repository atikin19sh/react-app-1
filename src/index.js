import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './redux/redux-store';
import App from './App';
import StoreContext from './StoreContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = () => {
  root.render(
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  );
};

rerenderEntireTree();

store.subscribe(() => {
  rerenderEntireTree();
});
