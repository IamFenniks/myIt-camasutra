import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__users}>
        <h1>Dialogs</h1>

        <div className={s.user}>Nick</div>
        <div className={s.user + ' ' + s.active}>Nick</div>
        <div className={s.user}>Nick</div>
        <div className={s.user}>Nick</div>
        <div className={s.user}>Nick</div>
        <div className={s.user}>Nick</div>
        <div className={s.user}>Nick</div>
      </div>

      <div className={s.dialogs__messages}>
        <div className={s.messageItem}>
          <h4>ItemTitle</h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto adipisci molestias reprehenderit!</p>
        </div>
        
        <div className={s.messageItem}>
          <h4>ItemTitle</h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto adipisci molestias reprehenderit!</p>
        </div>

        <div className={s.messageItem}>
          <h4>ItemTitle</h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto adipisci molestias reprehenderit!</p>
        </div>

        <div className={s.messageItem}>
          <h4>ItemTitle</h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto adipisci molestias reprehenderit!</p>
        </div>

        <div className={s.messageItem}>
          <h4>ItemTitle</h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto adipisci molestias reprehenderit!</p>
        </div>

        <div className={s.messageItem}>
          <h4>ItemTitle</h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto adipisci molestias reprehenderit!</p>
        </div>

        <div className={s.messageItem}>
          <h4>ItemTitle</h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto adipisci molestias reprehenderit!</p>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;