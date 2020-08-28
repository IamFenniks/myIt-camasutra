import React from 'react';
import s from './Friends.module.css';

const Friends = (props) => {
    return (
        <div className={s.item}>
            <img src={props.img} alt="friend_sAvatar" />

            {props.name}
        </div>

    );
}

export default Friends;