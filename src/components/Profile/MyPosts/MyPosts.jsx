import React from "react";
import Post from './Post/Post';
import s from './MyPosts.module.css';
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";

const MyPosts = (props) => {

  let postsElements = props.posts.map(p => (<Post text={p.text} likesCount={p.likesCount} />));

  let newPostElement = React.createRef();

  let createNewPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <div className={s.posts}>
      <div>
        <h3>My posts</h3>
      </div>
      <div>
        <textarea placeholder='Enter new post' ref={newPostElement} value={props.newPostText} onChange={onPostChange} />
      </div>
      <button onClick={createNewPost}>Add post</button>
      {postsElements}
    </div>
  );
}

export default MyPosts;
