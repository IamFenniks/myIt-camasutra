import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Input } from '../../common/FormsControls/FormsControls';

let maxLength32 = maxLengthCreator(32);

const LoginForm = (props) => {
 return (
    <form onSubmit={props.handleSubmit}>
        <div><Field component={ Input } validate={ [required, maxLength32] } name={"login"} laceholder={ 'login' } /></div>
        <div><Field component={ Input } validate={ [required, maxLength32] } name={"password"} type={"password"} placeholder={ 'password' } /></div>
        <div><Field component={ "input" } name={"rememberMe"} type={ 'checkbox' } /> remember me</div>
        <div><button>Login</button></div>
    </form>
 )
}

const ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm);

let onSubmit = (formData) => {
    console.log(formData);
}

const Login = (props) => {
    return (
        <dib className="loginPage">
            <h1>Login Page</h1>
            <ReduxLoginForm onSubmit={onSubmit} />
        </dib>
    )
}

export default Login;
