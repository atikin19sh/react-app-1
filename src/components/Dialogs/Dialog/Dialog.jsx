import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={'/dialogs/' + props.userId}>
        {props.userName}
      </NavLink>
    </div>
  );
};

export default Dialog;
