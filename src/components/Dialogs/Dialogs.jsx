import React from 'react';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import s from './Dialogs.module.css';
import { Field, reduxForm } from 'redux-form';

const AddMessageForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <div className={s.newMessage}>
      <Field component='textarea' 
      placeholder='Enter your message'
      name='newMessageText'
      />
    </div>
    <button>Send message</button>
  </form>
}

const AddMessageReduxForm = reduxForm({form: 'message'})(AddMessageForm);

const Dialogs = (props) => {

  let dialogsElements = props.dialogsPage.dialogs.map(
    d => (<Dialog userName={d.name} userId={d.id} userAva={d.ava} key={d.id} />)
  );
  let messagesElements = props.dialogsPage.messages.map(
    m => (<Message text={m.text} userAva={m.userAva} userRole={m.userRole} key={m.id} />)
  );

  let sendMessage = (values) => {
    props.sendMessage(values.newMessageText);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <AddMessageReduxForm onSubmit={sendMessage}/>
      </div>
    </div>
  )
}

export default Dialogs;