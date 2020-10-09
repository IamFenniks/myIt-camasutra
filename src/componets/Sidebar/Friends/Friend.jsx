import React from 'react';
import s from './Friends.module.css';

const Friend = (props) => {
    return (
        <div>
            <img src={props.img} alt="friend_sAvatar" />

            {props.name}
        </div>

    );
}

export default Friend;