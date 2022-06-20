import React from "react";
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator }
  from "../../../redux/profile-reducer";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {

  return (
    <StoreContext.Consumer>
      {store => {
        let createNewPost = () => {
          store.dispatch(addPostActionCreator());
        };

        let updateNewPostText = (text) => {
          let action = updateNewPostTextActionCreator(text);
          store.dispatch(action);
        };

        return <MyPosts createNewPost={createNewPost}
          updateNewPostText={updateNewPostText}
          profilePage={store.getState().profilePage}
        />
      }}
    </StoreContext.Consumer>
  );
}

export default MyPostsContainer;
