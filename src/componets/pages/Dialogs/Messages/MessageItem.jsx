import React from 'react';
import s from './MessageItem.module.css';

const MessageItem = (props) => {
    return (
        <div className={s.messageItem}>
            <h4>{props.messTitle}</h4>
            <p>{props.mess}</p>
        </div>
    );
}

export default MessageItem;