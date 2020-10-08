import React from 'react';
import s from './MessageItems.module.css';
import { Route, BrowserRouter } from 'react-router-dom';
import MessItemContainer from './Message/MessItemContainer';

const MessageItems = () => {
  return (
        <Route path='/dialogs/message'
            render={() =>
                <div>
                   <MessItemContainer />
                </div>
            }
        />
    );
}

export default MessageItems;