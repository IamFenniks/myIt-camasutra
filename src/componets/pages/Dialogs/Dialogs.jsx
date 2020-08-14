import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import UserDialog from './UserDialog/UserDialog';
import MessageItem from './Messages/MessageItem';

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__users}>
        <h1>Dialogs</h1>

        <UserDialog userName="Nick" id="0" />
        <UserDialog userName="Mishele" id="1" />
        <UserDialog userName="Victor" id="2" />
        <UserDialog userName="Andrey" id="3" />
        <UserDialog userName="John" id="4" />
        <UserDialog userName="Tom" id="5" />
        <UserDialog userName="Anna" id="6" />
      </div>

      <div className={s.dialogs__messages}>
        <MessageItem title='Nick`s message 1' message=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, rem modi! Tempore delectus explicabo possimus earum esse, iste asperiores rerum assumenda molestias, sunt perspiciatis numquam quod eos.' />
      </div>
    </div>
  );
}

export default Dialogs;