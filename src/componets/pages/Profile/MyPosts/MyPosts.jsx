import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postData = props.state.posts.map(p => <Post title={p.title} message={p.message} like={p.like} />);
  
   return (
    <div className={s.myPosts}>
      <h2>My posts</h2>
      <div className={s.posts}>
        { postData }
      </div>
    </div>
  );
}

export default MyPosts;