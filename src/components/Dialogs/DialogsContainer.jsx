import React from 'react';
import Dialogs from './Dialogs';
import { sendMessageActionCreator, updateNewMessageTextActionCreator }
  from '../../redux/dialogs-reducer';

const DialogsContainer = (props) => {

  let state = props.store.getState().dialogsPage;

  let sendMessage = () => {
    props.store.dispatch(sendMessageActionCreator());
  };

  let updateNewMessageText = (text) => {
    let action = updateNewMessageTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <Dialogs sendMessage={sendMessage}
      updateNewMessageText={updateNewMessageText}
      newMessageText={state.newMessageText}
      dialogs={state.dialogs}
      messages={state.messages}
    />
  );
}

export default DialogsContainer;