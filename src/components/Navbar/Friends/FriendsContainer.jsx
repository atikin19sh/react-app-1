import Friends from './Friends';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    sidebar: state.sidebar
  };
};

const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;