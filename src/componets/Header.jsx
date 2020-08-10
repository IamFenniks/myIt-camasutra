import React from 'react';
import s from './Header.module.css';

const Header = () =>{
    return(
        <header className={s.header}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-Ur5t_tg3BxCzyZ4HWJNv_Du4pr_nzqHn-Q&usqp=CAU" alt="Logo" />
        </header>
    );
}

export default Header;