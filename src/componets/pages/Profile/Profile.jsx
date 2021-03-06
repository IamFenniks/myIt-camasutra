import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <div className={s.banner}>
        <img src="https://cdn.pixabay.com/photo/2015/11/19/08/52/banner-1050629_960_720.jpg" alt="Banner" />
      </div>

      <h1>Profile</h1>
      <hr/>
      
      <ProfileInfo 
        profile={ props.profile } 
        isAuth={ props.isAuth }
        status={ props.status }
        updateStatus={ props.updateStatus }
      />

      <MyPosts 
        newPostText={props.newPostText} 
        updateNewPostText={ props.updateNewPostText } 
        addPost={ props.addPost }
        posts={ props.posts } 
      />
    </div>
  );
}

export default Profile;