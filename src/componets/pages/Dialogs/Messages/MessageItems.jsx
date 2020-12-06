import React from 'react';
import s from './MessageItems.module.css';
import { Route, BrowserRouter } from 'react-router-dom';
import MessItem from './Message/MessItem';

const MessageItems = (props) => {
    //debugger;
    let messData = props.messages.map(m => <MessItem messTitle={m.title} mess={m.mess} />);
    return (
        <div>
            { messData}
        </div>
    );
}

export default MessageItems;

// {<Route path='/dialogs/message'
// render={() =>
//     <div>
//         { messData }
//     </div>
// }
// />}