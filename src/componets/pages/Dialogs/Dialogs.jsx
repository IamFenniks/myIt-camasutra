import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import UserDialog from './UserDialog/UserDialog';
import MessageItems from './Messages/MessageItems';
import AddMess from './Messages/addMess/AddMess';

// props - --- state={props.state.dialogsPage}   ---   dispatch={props.dispatch}
const Dialogs = (props) => {
  let state =  props.store.getState();
  let dialogsElements = state.dialogsPage.dialogs.map(d => <UserDialog userName={d.name} id={d.id} />);
  let messageElements = <MessageItems state={state} />;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__users}>
        <h1>Dialogs</h1>
        {dialogsElements}
      </div>

      <div className={s.dialogs__messages}>
        <div className={s.mess}>
          <h1>Messages</h1>
          {messageElements}
        </div>

        <div className={s.addMess}>
          <h1>Add message</h1>
          <AddMess newMessage={ props.newMessageBody } dispatch={props.dispatch} />
        </div>
      </div>
    </div>
  );
}

export default Dialogs;