import React from 'react';
import { NavLink } from 'react-router-dom';
import User from './User';

const UserDialog = (props) => {
    let userData = props.userName.map( u => <User userName={ u.name } key={ u.id } /> );
    
    return (
      <div>
        { userData }
      </div>
    )
  }

export default UserDialog;