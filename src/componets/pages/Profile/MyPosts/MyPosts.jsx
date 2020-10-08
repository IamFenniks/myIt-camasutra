import React from 'react';
import s from './MyPosts.module.css';
import PostContainer from './PostContainer';

const MyPosts = (props) => {
   return (
    <div className={s.myPosts}>
      <h2>My posts</h2>
      <div className={s.posts}>
        <PostContainer /> 
      </div>
    </div>
  );
}

export default MyPosts;