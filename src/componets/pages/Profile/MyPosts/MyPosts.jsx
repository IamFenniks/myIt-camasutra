import React from 'react';
import s from './MyPosts.module.css';
import MyPostsForm from './MyPostsForm';
import Post from './Post/Post';

const MyPosts = (props) => {

  let profilePosts = props.posts.map(p => <Post title={p.title} message={p.message} key={p.id} like={p.like} />);
 
  return (
    <div>
      <div>
        <MyPostsForm updateNewPostText={ props.updateNewPostText } addPost={ props.addPost } />
      </div>

      <div className={s.myPosts}>
        <h2>My posts</h2>
        <div className={s.posts}>
          {profilePosts}
        </div>
      </div>
    </div>

  );
}

export default MyPosts;