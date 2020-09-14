import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  debugger;
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({ type: 'ADD-POST' });
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text });
  }

  return (
    <div className={s.describe}>
      <img src="https://cdn.pixabay.com/photo/2016/06/14/09/33/bulldog-1456110__340.png" alt="Image" />

      <div><textarea ref={ newPostElement } value={props.newPostText} onChange={ onPostChange } cols="30" rows="5" /></div>

      <div><button onClick={ addPost }>New post</button></div>
    </div>
  );
}

export default ProfileInfo;