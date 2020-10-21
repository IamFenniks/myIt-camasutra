import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  let newPostElement = React.createRef();
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  let onAddPost = () => {
    props.addPost();
  }

  return (
    <div className={s.describe}>
      <img src="https://cdn.pixabay.com/photo/2016/06/14/09/33/bulldog-1456110__340.png" alt="Image" />

      <div><textarea ref={ newPostElement } value={props.newPostText} onChange={ onPostChange } cols="30" rows="5" /></div>

      <div><button onClick={ onAddPost }>New post</button></div>
    </div>
  );
}

export default ProfileInfo;