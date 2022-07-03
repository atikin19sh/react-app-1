import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import styles from './ProfileInfo.module.css';

const ProfileInfo = (props) => {

  const fixURLString = (url) => (url.slice(0, 4) !== 'http') ? 'https://' + url : url;

  return ((!props.profile) ? <Preloader /> :
    <div>
      <img
        src="https://sppumoodle.unipune.ac.in/pluginfile.php/74872/course/overviewfiles/Front%20Page%202.jpg"
        alt="User Profile Banner"
      />
      <div className={styles.userInfoContainer}>
        <div className={`${styles.userInfoBlock} ${styles.userInfoAvatar}`}>
          <img
            className={styles.avatarImage}
            src={props.profile.photos.large}
            alt="User Avatar"
          />
        </div>
        <div className={`${styles.userInfoBlock} ${styles.userInfoAbout}`}>
          <div className={styles.userName}>{props.profile.fullName}</div>
          <div>About Me: {props.profile.aboutMe}</div>
        </div>
        <div className={`${styles.userInfoBlock} ${styles.userInfoContacts}`}>
          Contacts:
          <div>
            <div>{props.profile.contacts.website && <a href={fixURLString(props.profile.contacts.website)}>My Website</a>}</div>
            <div>{props.profile.contacts.github && <a href={fixURLString(props.profile.contacts.github)}>GitHub</a>}</div>
            <div>{props.profile.contacts.vk && <a href={fixURLString(props.profile.contacts.vk)}>VKontakte</a>}</div>
            <div>{props.profile.contacts.facebook && <a href={fixURLString(props.profile.contacts.facebook)}>Facebook</a>}</div>
            <div>{props.profile.contacts.instagram && <a href={fixURLString(props.profile.contacts.instagram)}>Instagram</a>}</div>
            <div>{props.profile.contacts.twitter && <a href={fixURLString(props.profile.contacts.twitter)}>Twitter</a>}</div>
            <div>{props.profile.contacts.youtube && <a href={fixURLString(props.profile.contacts.youtube)}>YouTube</a>}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
