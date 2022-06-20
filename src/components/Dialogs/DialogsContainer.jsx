import React from 'react';
import Dialogs from './Dialogs';
import { sendMessageActionCreator, updateNewMessageTextActionCreator }
  from '../../redux/dialogs-reducer';
import StoreContext from '../../StoreContext';

const DialogsContainer = (props) => {

  return (
    <StoreContext.Consumer>
      {store => {
        let sendMessage = () => {
          store.dispatch(sendMessageActionCreator());
        };

        let updateNewMessageText = (text) => {
          let action = updateNewMessageTextActionCreator(text);
          store.dispatch(action);
        };

        return <Dialogs sendMessage={sendMessage}
          updateNewMessageText={updateNewMessageText}
          dialogsPage={store.getState().dialogsPage}
        />
      }}
    </StoreContext.Consumer>
  );
}

export default DialogsContainer;