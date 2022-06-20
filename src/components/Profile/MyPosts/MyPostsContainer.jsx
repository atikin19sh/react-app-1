import React from "react";
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator }
  from "../../../redux/profile-reducer";

const MyPostsContainer = (props) => {

  let state = props.store.getState().profilePage;

  let createNewPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let updateNewPostText = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <MyPosts createNewPost={createNewPost}
      updateNewPostText={updateNewPostText}
      posts={state.posts}
      newPostText={state.newPostText}
    />
  );
}

export default MyPostsContainer;
