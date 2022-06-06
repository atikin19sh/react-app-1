import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div>
      <img
        src="https://sppumoodle.unipune.ac.in/pluginfile.php/74872/course/overviewfiles/Front%20Page%202.jpg" alt="" />
      <div className={s.userInfo}>
        ava + description
      </div>
    </div>
  );
}


export default ProfileInfo;
