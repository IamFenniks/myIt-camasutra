import React from 'react';
import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../../../redux/dialogsReduser';
import AddMessReduxForm from './AddMessForm';
import AddMessForm from './AddMessForm';

let mapStateToProps = (state) => {
    return {
        newMessage: state.newMessage
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        updateNewMessageBodyCreator: (body) => {dispatch(updateNewMessageBodyCreator(body));},
        sendMessageCreator: (mess) => {dispatch(sendMessageCreator(mess));}
    }
}
const AddMess = (props) => {

    let onSubmit = (formData) => {
        props.sendMessageCreator(formData.mess);
    }
    
    return <AddMessReduxForm onSubmit={ onSubmit } />
}

const AddMessContainer = connect(mapStateToProps, mapDispatchToProps)(AddMess);

export default AddMessContainer;
