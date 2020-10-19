import React from 'react';
import s from './Friend.module.css';

const Friend = (props) => {
    return (
        <div className={s.item}>
            <img src={props.img} alt="friend_sAvatar" />

            {props.name}
        </div>

    );
}

export default Friend;