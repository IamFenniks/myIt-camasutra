import { connect } from 'react-redux';
import UserDialog from './UserDialog';

let mapStateToProps = (state) => {
  return {
    userName: state.dialogsPage.dialogs
  }
}  

const UserDialogContainer = connect(mapStateToProps)(UserDialog);

export default UserDialogContainer;