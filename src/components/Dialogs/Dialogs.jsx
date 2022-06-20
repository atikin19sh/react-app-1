import React from 'react';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import s from './Dialogs.module.css';

const Dialogs = (props) => {

  let dialogsElements = props.dialogs.map(
    d => (<Dialog userName={d.name} userId={d.id} userAva={d.ava} />)
  );
  let messagesElements = props.messages.map(
    m => (<Message text={m.text} userAva={m.userAva} userRole={m.userRole} />)
  );

  let newMessageElement = React.createRef();

  /*  let sendMessage = () => {
      props.sendMessage();
    };
  */

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <div className={s.newMessage}>
          <textarea placeholder='Enter your message'
            ref={newMessageElement}
            value={props.newMessageText}
            onChange={onMessageChange}
          />
          <button onClick={props.sendMessage}>Send message</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;