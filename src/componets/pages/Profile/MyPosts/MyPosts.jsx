import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let newPostElement = React.createRef();
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  let onAddPost = () => {
    props.addPost();
  }
  
  let profilePosts = props.posts.map(p => <Post title={p.title} message={p.message} key={p.id} like={p.like} />);
  return (
    <div>
      <div>
        <div className={s.addPost}><textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange} cols="30" rows="5" /></div>

        <div><button onClick={onAddPost}>New post</button></div>
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