import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profileReduser';
import ProfileInfo from './ProfileInfo';

const ProfileInfoContainer = (props) => {
  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  }

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  return (
    <ProfileInfo updateNewPostTextActionCreator={ onPostChange } addPost={ addPost } newPostText={ props.newPostText } />
  );
}

export default ProfileInfoContainer;