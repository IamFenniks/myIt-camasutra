import React from 'react';
import s from './Dialogs.module.css';
import UserDialog from './UserDialog/UserDialog';
import MessageItems from './Messages/MessageItems';
import AddMessContainer from './Messages/addMess/AddMessContainer';

// props - --- state={props.state.dialogsPage}   ---   dispatch={props.dispatch}
const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__users}>
        <h1>Dialogs</h1>
       <MessageItems />
      </div>

      <div className={s.dialogs__messages}>
        <div className={s.mess}>
          <h1>Messages</h1>
          <UserDialog />
        </div>

        <div className={s.addMess}>
          <h1>Add message</h1>
          <AddMessContainer />
        </div>
      </div>
    </div>
  );
}

export default Dialogs;