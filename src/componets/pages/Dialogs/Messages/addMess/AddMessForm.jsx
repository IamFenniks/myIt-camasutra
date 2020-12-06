import React from 'react';
import { Field, reduxForm } from 'redux-form';

import s from './AddMess.module.css';

// props - --- newMessage={ props.newMessageBody } ---   dispatch={props.dispatch}
const AddMessForm = (props) => {
    return(
        <form onSubmit={ props.handleSubmit }>
            <div><label htmlFor="text"><b>Input Your new message, please.</b></label></div>
            <div><Field placeholder="Enter Your message" component={ 'textarea' } value={props.newMessage} name={ 'mess' } /></div>
            <div><button>Add</button></div>
        </form>
    );
}

const AddMessReduxForm = reduxForm({ form: 'addMess' })(AddMessForm);

export default AddMessReduxForm;
