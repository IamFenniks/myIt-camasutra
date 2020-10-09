import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import UserDialog from './UserDialog';
import s from './UserDialog.module.css';

let mapStateToProps = (state) => {
  return {
    userName: state.dialogsPage.dialogs
  }
}  

const UserDialogContainer = connect(mapStateToProps)(UserDialog);

export default UserDialogContainer;