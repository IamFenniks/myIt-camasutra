import React from 'react';
import s from './MyPosts.module.css';
import { MyPostsReduxForm } from './MyPostsForm';

import Post from './Post/Post';

const MyPosts = (props) => {
  let onSubmit = (formDadta) => {
    props.updateNewPostText(formDadta.message);
    props.addPost();
  }

  let profilePosts = props.posts.map(p => <Post title={p.title} message={p.message} key={p.id} like={p.like} />);
 //<MyPostsReduxForm updateNewPostText={ props.updateNewPostText } addPost={ props.addPost } />
  return (
    <div>
      <div>
        <MyPostsReduxForm onSubmit={ onSubmit } />
        
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