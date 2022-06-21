import React from "react";
// import s from './Friends.module.css';
import Friend from './Friend/Friend';

const Friends = (props) => {
  let friendsElements = props.sidebar.friends.map(f => <Friend name={f.name} ava={f.ava} />);

  return (
    <div>
      <h3>Friends</h3>
      {friendsElements}
    </div>
  );
}

export default Friends;