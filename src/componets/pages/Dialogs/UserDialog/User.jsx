import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './UserDialog.module.css';

const User = (props) => {
    let path = "/dialogs/message";
    
    //<NavLink to={path}>{props.userName}</NavLink>
    return (
      <div className={s.user}>
        {props.userName}
        
        <img src=" https://img1.freepng.ru/20180701/btv/kisspng-computer-icons-avatar-user-profile-man-avatars-5b38adb9f113b0.3674732815304411459875.jpg " alt="dialogsAvatar"/>
      </div>
    )
  }

export default User;