import React from "react";
import s from './../Dialogs.module.css';

const Message = (props) => {
  return (
    <div className={s.message + ' ' + s[props.userRole]}>
      <div>
        <img src={props.userAva} alt='avatar'></img>
      </div>
      <div>
        {props.text}
      </div>
    </div>
  );
};

export default Message;