import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postData = props.profilePage.posts.map(p => <Post title={p.title} 
    message={p.message} 
    like={p.like} />);
  let reversedPostData = postData.reverse();
  
   return (
    <div className={s.myPosts}>
      <h2>My posts</h2>
      <div className={s.posts}>
        { reversedPostData }
      </div>
    </div>
  );
}

export default MyPosts;