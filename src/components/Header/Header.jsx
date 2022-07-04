import React from "react";
import styles from './Header.module.css';
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img src="https://i.ibb.co/CVL1Ty6/logo.png" alt="logo" />
      <div className={styles.loginBlock}>
        {!props.isAuth
          ? <NavLink to={'login/'}>Login</NavLink>
          : props.login
        }
      </div>
    </header>
  );
}

export default Header;