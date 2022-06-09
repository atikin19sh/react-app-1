import React from "react";
import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = (props) => {

  let postsElements = props.posts.map(p => (<Post text={p.text} likesCount={p.likesCount} />));

  let newPostElement = React.createRef();

  let createNewPost = () => {
    let text = newPostElement.current.value;
    if (text === '') {
      alert('Поле не должно быть пустым');
      return;
    };
    props.addPost(text);
    props.updateNewPostText('');
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.posts}>
      <div>
        <h3>My posts</h3>
      </div>
      <div>
        <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange} />
      </div>
      <button onClick={createNewPost}>Add post</button>
      {postsElements}
    </div>
  );
}

export default MyPosts;
