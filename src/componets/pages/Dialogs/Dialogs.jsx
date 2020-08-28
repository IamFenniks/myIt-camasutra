import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import UserDialog from './UserDialog/UserDialog';
import MessageItem from './Messages/MessageItem';

debugger;


const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map(d => <UserDialog userName={d.name} id={d.id} />);
  let messageElements = props.state.messages.map(m => <MessageItem messTitle={m.title} mess={m.mess} />);
  
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__users}>
        <h1>Dialogs</h1>
        { dialogsElements }
      </div>

      <div className={s.dialogs__messages}>
        { messageElements }
      </div>
    </div>
  );
}

export default Dialogs;