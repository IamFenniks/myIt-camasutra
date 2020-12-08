import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../../../utils/validators/validators';
import { Textarea } from '../../../../common/FormsControls/FormsControls';

let maxLength50 = maxLengthCreator(50);

// props - --- newMessage={ props.newMessageBody } ---   dispatch={props.dispatch}
const AddMessForm = (props) => {
    return(
        <form onSubmit={ props.handleSubmit }>
            <div><label htmlFor="text"><b>Input Your new message, please.</b></label></div>
            
            <div>
                <Field 
                    placeholder="Enter Your message" 
                    component={ Textarea }
                    validate={ [required, maxLength50] }
                    value={props.newMessage} 
                    name={ 'mess' } 
                />
            </div>

            <div><button>Add</button></div>
        </form>
    );
}

const AddMessReduxForm = reduxForm({ form: 'addMess' })(AddMessForm);

export default AddMessReduxForm;
