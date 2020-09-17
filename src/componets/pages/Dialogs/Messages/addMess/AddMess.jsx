import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../../../redux/dialogsReduser copy';
import s from './AddMess.module.css';

// props - --- newMessage={ props.newMessageBody } ---   dispatch={props.dispatch}
const AddMess = (props) => {
    let newMessageBody = props.newMessage;
    let onNewMessageChanged = (e) => {
        let body = e.value;
        props.dispatch(updateNewMessageBodyCreator(body));
    }

    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator());
    }

    return(
        <form action="">
            <div><label htmlFor="text"><b>Input Your new message, please.</b></label></div>
            <div><textarea placeholder="Enter Your message" value={ newMessageBody } onChange={ onNewMessageChanged }></textarea></div>
            <div><button onClick={ onSendMessageClick }>Submit</button></div>
        </form>
    );
}

export default AddMess;
