import axios from 'axios';
import React from 'react';
import Header from './Header';
import { setUserAuthData } from '../../redux/authReduser'
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {
    debugger;
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
            .then(response => { 
                //debugger;
                if(response.data.resultCode === 0){
                   let {id, email, login} = response.data.data;
                   this.props.setUserAuthData(id, email, login);
                }
        })
    }

    render() {
        return (
            <Header { ...this.props } />
        );
    }
}

let mapStateToProps = (state) => ({ 
    login: state.auth.login,
    isAuth: state.auth.isAuth
 });

export default connect(mapStateToProps, { setUserAuthData })(HeaderContainer);
