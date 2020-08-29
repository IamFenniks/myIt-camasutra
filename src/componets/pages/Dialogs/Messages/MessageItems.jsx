import React from 'react';
import s from './MessageItems.module.css';
import { Route, BrowserRouter } from 'react-router-dom';
import MessItem from './Message/MessItem';

const MessageItems = (props) => {

    let messElement = props.state.messages.map(m => <MessItem dialogsId={m.dialogs_id} messTitle={m.title} mess={m.mess} />);
    return (
            <Route path='/dialogs/message'
                render={() =>
                    <div>
                        { messElement }
                    </div>
                }
            />
    );
}

export default MessageItems;