import React from "react";
import s from './Friend.module.css';

const Friend = (props) => {
  return (
    <div className={s.friendItem}>
      <img src={props.ava} alt=''></img>
      {props.name}
    </div>
  );
}

export default Friend;