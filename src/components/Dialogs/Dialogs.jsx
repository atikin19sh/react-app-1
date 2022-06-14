import React from 'react';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import s from './Dialogs.module.css';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';

const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map(
    d => (<Dialog userName={d.name} userId={d.id} userAva={d.ava} />)
  );
  let messagesElements = props.state.messages.map(
    m => (<Message text={m.text} userAva={m.userAva} userRole={m.userRole} />)
  );

  let newMessageElement = React.createRef();

  let sendMessage = () => {
    props.dispatch(sendMessageActionCreator());
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <div className={s.newMessage}>
          <textarea placeholder='Enter your message' ref={newMessageElement} value={props.state.newMessageText} onChange={onMessageChange}></textarea>
          <button onClick={sendMessage}>Send message</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;