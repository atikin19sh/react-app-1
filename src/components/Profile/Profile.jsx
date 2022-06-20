import React from "react";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
// import s from './Profile.module.css';

const Profile = (props) => {
  let state = props.store.getState().profilePage;
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={state.posts}
        newPostText={state.newPostText}
        dispatch={props.store.dispatch} />
    </div>
  );
}

export default Profile;
