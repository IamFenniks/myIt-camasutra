import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPostsForm = (props) => {
  let newPostElement = React.createRef();
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  let onAddPost = () => {
    props.addPost();
  }
  
  return (
    <div>
        <div className={s.addPost}><textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange} cols="30" rows="5" /></div>

        <div><button onClick={onAddPost}>New post</button></div>
    </div>

  );
}

export default MyPostsForm;