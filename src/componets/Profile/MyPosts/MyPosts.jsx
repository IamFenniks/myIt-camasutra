import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      <h1>All posts</h1>
      <div className={s.posts}>
        <Post title="Post 1" like="23" />
        <Post title="Post 2" like="432" />
        <Post title="Post 3" like="54" />
        <Post title="Post 4" like="0" />
        <Post title="Post 5" like="34567" />
      </div>
    </div>
  );
}

export default MyPosts;