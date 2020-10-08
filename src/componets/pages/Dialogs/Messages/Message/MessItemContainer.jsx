import React from 'react';
import { connect } from 'react-redux';
import MessItem from './MessItem';
import s from './MessItem.module.css';

let mapStateToProps = (state) => {
    return {
        messTitle: state.messTitle,
        state: state.mess
    }
}

const MessItemContainer = connect(mapStateToProps)(MessItem);

export default MessItemContainer;