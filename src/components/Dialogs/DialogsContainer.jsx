import { connect } from 'react-redux';
import { compose } from 'redux';
import Dialogs from './Dialogs';
import { sendMessage }
  from '../../redux/dialogs-reducer';
import withAuthRedirect from '../HOC/withAuthRedirect';

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  };
};

const DialogsContainer = compose(
  withAuthRedirect,
  connect(mapStateToProps, {sendMessage})
)(Dialogs);

export default DialogsContainer;