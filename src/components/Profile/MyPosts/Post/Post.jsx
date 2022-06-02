import React from "react";
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={`${s.item} ${s.active}`}>
      <img src="https://miro.medium.com/max/2400/1*fJX2JDYTLZf2Z5EFYUP6eA.jpeg"></img>
      {props.message}
      <div>
        <span>Like</span> | <span>{props.likeCount} likes</span>
      </div>
    </div>
  );
}

export default Post;
