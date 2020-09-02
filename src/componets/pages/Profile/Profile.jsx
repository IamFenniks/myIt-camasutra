import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Post from './MyPosts/Post/Post';

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <div className={s.banner}>
        <img src="https://cdn.pixabay.com/photo/2015/11/19/08/52/banner-1050629_960_720.jpg" alt="Banner" />
      </div>

      <h1>Profile</h1>
      <hr/>

      <ProfileInfo addPost={props.addPost} 
        newPostText={ props.profilePage.newPostText } 
        updateNewPostText={props.updateNewPostText} />

      <MyPosts profilePage={props.profilePage} />
    </div>
  );
}

export default Profile;