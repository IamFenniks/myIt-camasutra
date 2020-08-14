import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './UserDialog.module.css';


const UserDialog = (props) => {
    let path = "/dialogs/" + props.id;
    
    return (
      <div className={s.user}>
        <NavLink to={path}>{props.userName} {props.id}</NavLink>
      </div>
    )
  }

export default UserDialog;