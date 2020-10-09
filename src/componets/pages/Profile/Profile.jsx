import React from 'react';
import s from './Profile.module.css';
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer';
import PostsContainer from './MyPosts/PostsContainer';

const Profile = () => {
  return (
    <div className={s.profile}>
      <div className={s.banner}>
        <img src="https://cdn.pixabay.com/photo/2015/11/19/08/52/banner-1050629_960_720.jpg" alt="Banner" />
      </div>

      <h1>Profile</h1>
      <hr/>

      <ProfileInfoContainer />

      <PostsContainer />
    </div>
  );
}

export default Profile;