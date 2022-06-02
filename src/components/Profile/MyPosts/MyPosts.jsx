import React from "react";
import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = () => {
  return (
    <div>
      <div>
        My posts
      </div>
      <textarea>Enter text here</textarea>
      <button>Add post</button>
      <Post message='Hi! How are you?' likeCount='15' />
      <Post message="It's my first post!" likeCount='20' />
    </div>
  );
}

export default MyPosts;
