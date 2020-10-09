import React from 'react';
import { connect } from 'react-redux';
import MessageItems from '../MessageItems';

let mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages
    }
}

const MessItemContainer = connect(mapStateToProps)(MessageItems);

export default MessItemContainer;