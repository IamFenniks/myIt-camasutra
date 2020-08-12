import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>

      <div className={s.describe}>
        <img src="https://cdn.pixabay.com/photo/2016/06/14/09/33/bulldog-1456110__340.png" alt="Image" />
        
      </div>
    </div>
  );
}

export default Dialogs;