import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profileReduser';
import ProfileInfo from './ProfileInfo';

const ProfileInfoContainer = (props) => {
  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  }

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  return (
    <ProfileInfo updateNewPostTextActionCreator={ onPostChange } addPost={ addPost } />
  );
}

export default ProfileInfoContainer;