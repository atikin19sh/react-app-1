import React from "react";
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div>
      <img src="https://sppumoodle.unipune.ac.in/pluginfile.php/74872/course/overviewfiles/Front%20Page%202.jpg" alt="" />
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
}

export default Profile;
