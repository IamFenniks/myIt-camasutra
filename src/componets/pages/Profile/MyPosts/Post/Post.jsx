import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <hr/>
      <h2>{props.title}</h2>
      
      <img src="https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-3-avatar-2754579_120516.png" alt="postAvatar" />
  <p>Like<span> {props.like}</span></p>
    </div>
  );
}

export default Post;