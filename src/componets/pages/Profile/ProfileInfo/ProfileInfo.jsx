import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  }

  return (
    <div className={s.describe}>
      <img src="https://cdn.pixabay.com/photo/2016/06/14/09/33/bulldog-1456110__340.png" alt="Image" />

      <div><textarea ref={ newPostElement } cols="30" rows="10"></textarea></div>

      <div><button onClick={ addPost }>New post</button></div>
    </div>
  );
}

export default ProfileInfo;