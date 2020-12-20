import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Input } from '../../common/FormsControls/FormsControls';
import { login } from '../../../redux/authReduser'
import { Redirect } from 'react-router-dom';

let maxLength32 = maxLengthCreator(32);

const LoginForm = (props) => {
 return (
    <form onSubmit={props.handleSubmit}>
        <div><Field component={ Input } validate={ [required, maxLength32] } name={"email"}    type={"email"}    placeholder={ 'email' } /></div>
        <div><Field component={ Input } validate={ [required, maxLength32] } name={"password"} type={"password"} placeholder={ 'password' } /></div>
        <div><Field component={ "input" } name={"rememberMe"} type={ 'checkbox' } /> remember me</div>
        <div><button>Login</button></div>
    </form>
 )
}

const ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm);



const Login = (props) => {
    let onSubmit = (formData) => {
//           callback
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if(props.isAuth) {
        return <Redirect to={ '/profile' } />
    }

    return (
        <dib className="loginPage">
            <h1>Login Page</h1>
            <ReduxLoginForm onSubmit={onSubmit} />
        </dib>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

//                          TunkCreator
export default connect(mapStateToProps, { login })(Login);
