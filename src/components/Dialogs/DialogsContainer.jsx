import { connect } from 'react-redux';
import { compose } from 'redux';
import Dialogs from './Dialogs';
import { sendMessageActionCreator, updateNewMessageTextActionCreator }
  from '../../redux/dialogs-reducer';
import withAuthRedirect from '../HOC/withAuthRedirect';

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },

    updateNewMessageText: (text) => {
      let action = updateNewMessageTextActionCreator(text);
      dispatch(action);
    }
  }
};

const DialogsContainer = compose(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);

export default DialogsContainer;