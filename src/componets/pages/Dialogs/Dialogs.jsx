import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import UserDialog from './UserDialog/UserDialog';
import MessageItem from './Messages/MessageItem';

const Dialogs = (props) => {
  // let dialogsItem = [
  //   <UserDialog userName={dialogsData[0].name} id={dialogsData[0].id} />,
  //   <UserDialog userName={dialogsData[1].name} id={dialogsData[1].id} />,
  //   <UserDialog userName={dialogsData[2].name} id={dialogsData[2].id} />,
  //   <UserDialog userName={dialogsData[3].name} id={dialogsData[3].id} />,
  //   <UserDialog userName={dialogsData[4].name} id={dialogsData[4].id} />,
  //   <UserDialog userName={dialogsData[5].name} id={dialogsData[5].id} />,
  //   <UserDialog userName={dialogsData[6].name} id={dialogsData[6].id} />
  // ];

  /* {Здесь оставлю для наглядности неоптимизированный код} */
  let messageData = [
    { id: 0, title: 'Nick`s message 1', mess: 'Lorem 1 ipsum dolor sit amet consectetur adipisicing elit. Accusantium...' },
    { id: 1, title: 'Anna message 1', mess: 'Lorem 2 ipsum dolor sit amet consectetur adipisicing elit. Accusantium...' },
    { id: 2, title: 'Anna message 2', mess: 'Lorem 3 ipsum dolor sit amet consectetur adipisicing elit. Accusantium...' },
    { id: 3, title: 'John message 1', mess: 'Lorem 4 ipsum dolor sit amet consectetur adipisicing elit. Accusantium...' },
    { id: 4, title: 'Nick`s message 2', mess: 'Lorem 5 ipsum dolor sit amet consectetur adipisicing elit. Accusantium...' }
  ];
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__users}>
        <h1>Dialogs</h1>
        {props.dialogsData}
      </div>

      <div className={s.dialogs__messages}>
        {/* {Здесь оставлю для наглядности неоптимизированный код} */}
        <MessageItem id={messageData[0].id} title={messageData[0].title} message={messageData[0].mess} />
        <MessageItem id={messageData[1].id} title={messageData[1].title} message={messageData[1].mess} />
        <MessageItem id={messageData[2].id} title={messageData[2].title} message={messageData[2].mess} />
        <MessageItem id={messageData[3].id} title={messageData[3].title} message={messageData[3].mess} />
        <MessageItem id={messageData[4].id} title={messageData[4].title} message={messageData[4].mess} />
      </div>
    </div>
  );
}

export default Dialogs;