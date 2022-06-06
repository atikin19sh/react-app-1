import React from 'react';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import s from './Dialogs.module.css';

const Dialogs = (props) => {

  let dialogsElements = props.dialogs.map(d => (<Dialog userName={d.name} userId={d.id} />));
  let messagesElements = props.messages.map(m => (<Message text={m.text} />));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div >
  );
}

export default Dialogs;