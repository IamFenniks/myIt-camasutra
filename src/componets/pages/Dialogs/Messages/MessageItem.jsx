import React from 'react';
import s from './MessageItem.module.css';

const MessageItem = (props) => {
    return (
        <div className={s.messageItem}>
            <h4>{props.title}</h4>
            <p>{props.message}</p>
        </div>
    );
}

export default MessageItem;