import React from "react";
import Post from './Post/Post';
import s from './MyPosts.module.css';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from "../../common/FormsControls/FormsControls";
import { maxLength50, required } from "../../../utils/validators/validators";

const AddPostForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <div>
      <Field
        component={Textarea}
        name='newPostText'
        placeholder='Enter new post'
        validate={[required, maxLength50]}
      />
    </div>
    <button>Add post</button>
  </form>
}

const AddPostReduxForm = reduxForm({ form: 'post' })(AddPostForm);

const MyPosts = (props) => {

  let postsElements = props.profilePage.posts.map(p => (<Post text={p.text} likesCount={p.likesCount} key={p.id} />));

  let createPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={s.posts}>
      <div>
        <h3>My posts</h3>
      </div>
      <AddPostReduxForm onSubmit={createPost} />
      {postsElements}
    </div>
  );
}

export default MyPosts;
