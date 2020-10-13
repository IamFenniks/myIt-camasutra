import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () =>{
    return(
         <nav className={s.appWrapper__nav}>
          <div>
            <NavLink className={s.item} activeClassName={s.active} to="/profile">Profile </NavLink>
          </div>

          <div>
            <NavLink className={s.item} activeClassName={s.active} to="/dialogs"> Dialogs</NavLink>
          </div>

          <div>
            <NavLink className={s.item} activeClassName={s.active} to="/news">News</NavLink>
          </div>

          <div>
            <NavLink className={s.item} activeClassName={s.active} to="/music">Music</NavLink>
          </div>
          <hr />

          <div>
            <NavLink className={s.item} activeClassName={s.active} to="/users">Search users</NavLink>
          </div>
          <hr />
          
          <div>
            <NavLink className={s.item} activeClassName={s.active} to="/settings">Settings</NavLink>
          </div>
       </nav>
    );
}

export default Navbar;