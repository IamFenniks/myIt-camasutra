import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <div className={s.banner}>
        <img src="https://cdn.pixabay.com/photo/2015/11/19/08/52/banner-1050629_960_720.jpg" alt="Banner" />
      </div>

      <h1>Profile</h1>
      <hr/>

      <ProfileInfo />

      <MyPosts />
    </div>
  );
}

export default Profile;