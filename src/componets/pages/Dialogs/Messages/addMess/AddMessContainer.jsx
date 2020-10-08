import React from 'react';
import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../../../redux/dialogsReduser';
import AddMess from './AddMess';

// props - --- newMessage={ props.newMessageBody } ---   dispatch={props.dispatch}

let mapStateToProps = (state) => {
    return {
        newMessage: state.newMessage
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        updateNewMessageBodyCreator: (body) => {
            dispatch(updateNewMessageBodyCreator(body));},
        sendMessageCreator: () => {dispatch(sendMessageCreator());}
    }
}

const AddMessContainer = connect(mapStateToProps, mapDispatchToProps)(AddMess);

export default AddMessContainer;
