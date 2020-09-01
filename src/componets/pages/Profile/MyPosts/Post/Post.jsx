import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <hr />
      <h2>{props.title}</h2>

      <p>
        <img src="https://img1.freepng.ru/20180701/btv/kisspng-computer-icons-avatar-user-profile-man-avatars-5b38adb9f113b0.3674732815304411459875.jpg" alt="postAvatar" />
        {props.message}
      </p>
      <p>Like<span> {props.like}</span></p>
    </div>
  );
}

export default Post;