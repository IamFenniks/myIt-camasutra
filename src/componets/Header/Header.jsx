import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) =>{
    return(
        <header className={s.header}>
            <img src="https://www.flaticon.com/premium-icon/icons/svg/2549/2549323.svg" alt="Logo" />

            <div></div>

            <div className={s.loginBlock}>
                { props.isAuth 
                    ? <NavLink to={ '/login/' + props.login }> Profile - { props.login } </NavLink> 
                    : <NavLink to={ '/login' }>Login</NavLink>
                }
                
            </div>
        </header>
    );
}

export default Header;