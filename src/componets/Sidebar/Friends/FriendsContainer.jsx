import React from 'react';
import { connect } from 'react-redux';
import Friends from './Friends';

let mapStateToProps = (state) => {
    return {
        img: state.sideBar.friends.img,
        name: state.sideBar.friends.name
    }
}

const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;