import React from 'react';
import s from './Header.module.css';

const Header = () =>{
    return(
        <header className={s.header}>
            <img src="https://www.flaticon.com/premium-icon/icons/svg/2549/2549323.svg" alt="Logo" />
        </header>
    );
}

export default Header;