import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div className={s.describe}>
      <img src="https://cdn.pixabay.com/photo/2016/06/14/09/33/bulldog-1456110__340.png" alt="Image" />

      <div><textarea name="" id="" cols="30" rows="10"></textarea></div>

      <div><button>New post</button></div>
    </div>
  );
}

export default ProfileInfo;