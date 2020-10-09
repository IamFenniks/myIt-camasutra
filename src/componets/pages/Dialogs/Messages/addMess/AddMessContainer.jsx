import React from 'react';
import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../../../redux/dialogsReduser';
import AddMess from './AddMess';

let mapStateToProps = (state) => {
    return {
        newMessage: state.newMessage
    }
}

let mapDispatchToProps = (dispatch) => {
    debugger;
    return{
        updateNewMessageBodyCreator: (body) => {dispatch(updateNewMessageBodyCreator(body));},
        sendMessageCreator: () => {dispatch(sendMessageCreator());}
    }
}

const AddMessContainer = connect(mapStateToProps, mapDispatchToProps)(AddMess);

export default AddMessContainer;
