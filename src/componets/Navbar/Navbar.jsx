import React from 'react';
import s from './Navbar.module.css';

const Navbar = () =>{
    return(
        <div>
          <div><a className={s.item} href="#">                  Profile </a></div>
          <div><a className={`${s.item} ${s.active}`} href="#"> Messages</a></div>
          <div><a className={s.item} href="#">                  News    </a></div>
          <div><a className={s.item} href="#">                  Music   </a></div>
          <div><a className={s.item} href="#">                  Settings</a></div>
        </div>
    );
}

export default Navbar;