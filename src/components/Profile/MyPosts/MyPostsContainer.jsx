import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator }
  from "../../../redux/profile-reducer";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNewPost: () => {
      dispatch(addPostActionCreator());
    },

    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    }
  }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
