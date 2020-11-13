import axios from 'axios';
import React from 'react';
import Header from './Header';
import { setUserAuthData, getAuth } from '../../redux/authReduser'
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {
    debugger;
    componentDidMount() {
        this.props.getAuth();
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

export default connect(mapStateToProps, 
    { setUserAuthData, getAuth }
)(HeaderContainer);
