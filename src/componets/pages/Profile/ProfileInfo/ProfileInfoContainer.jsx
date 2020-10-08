import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profileReduser';
import ProfileInfo from './ProfileInfo';

let mapStateToProps =(state) => {
  return {
    newPostText: state.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostTextActionCreator: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);},
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  }
}

const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);

export default ProfileInfoContainer;