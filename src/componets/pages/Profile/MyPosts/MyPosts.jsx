import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  let postsData = [
    {id: 0, title: 'Post 1', like: 23},
    {id: 1, title: 'Post 2', like: 432},
    {id: 2, title: 'Post 3', like: 54},
    {id: 3, title: 'Post 4', like: 0},
    {id: 4, title: 'Post 5', like: 34567},
  ];

  return (
    <div>
      <h2>My posts</h2>
      <div className={s.posts}>
        <Post title={postsData[0].title} like={postsData[0].like} />
        <Post title={postsData[1].title} like={postsData[1].like} />
        <Post title={postsData[2].title} like={postsData[2].like} />
        <Post title={postsData[3].title} like={postsData[3].like} />
        <Post title={postsData[4].title} like={postsData[4].like} />
      </div>
    </div>
  );
}

export default MyPosts;