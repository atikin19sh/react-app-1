import React from "react";
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={`${s.item} ${s.active}`}>
      <img src="https://miro.medium.com/max/2400/1*fJX2JDYTLZf2Z5EFYUP6eA.jpeg" alt=''></img>
      {props.text}
      <div>
        <span>Like</span> | <span>{props.likesCount} likes</span>
      </div>
    </div>
  );
}

export default Post;
