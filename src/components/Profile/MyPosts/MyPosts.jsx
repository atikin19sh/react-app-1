import React from "react";
import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = (props) => {

  let postsElements = props.posts.map(p => (<Post text={p.text} likesCount={p.likesCount} />));

  return (
    <div className={s.posts}>
      <div>
        <h3>My posts</h3>
      </div>
      <div>
        <textarea></textarea>
      </div>
      <button>Add post</button>
      {postsElements}
    </div>
  );
}

export default MyPosts;
