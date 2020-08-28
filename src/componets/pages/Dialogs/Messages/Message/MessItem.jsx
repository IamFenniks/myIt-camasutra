import React from 'react';
import s from './MessItem.module.css';

const MessItem = (props) => {
    return (
        <div className={s.messageItem}>
            <h4>{props.messTitle}</h4>
            <p>{props.mess}</p>
        </div>
    );

}

export default MessItem;