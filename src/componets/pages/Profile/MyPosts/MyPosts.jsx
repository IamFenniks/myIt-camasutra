import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let posts = [
    {id: 0, title: 'Post 1', like: 23},
    {id: 1, title: 'Post 2', like: 432},
    {id: 2, title: 'Post 3', like: 54},
    {id: 3, title: 'Post 4', like: 0},
    {id: 4, title: 'Post 5', like: 34567},
  ];
  let postsData = posts
    .map(p => <Post title={p.title} like={p.like} />);
  

   return (
    <div>
      <h2>My posts</h2>
      <div className={s.posts}>
        {props.postsData}
      </div>
    </div>
  );
}

export default MyPosts;