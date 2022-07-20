import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import styles from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

const ProfileInfo = (props) => {

  const fixURLString = (url) => (url.slice(0, 4) !== 'http') ? 'https://' + url : url;

  return ((!props.profile) ? <Preloader /> :
    <div>
      <img
        className={styles.bannerImage}
        src="https://i.pinimg.com/originals/d0/83/10/d083104dd0c567eb047ed93e92fa88bd.jpg"
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
          <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
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
