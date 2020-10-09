import React from 'react';
import Friend from './Friend';
import s from './Friends.module.css';

const Friends = (props) => {
    let friendData = props.friends.map( f => <Friend img={f.img} name={ f.fName } />);
    return (
        <div className={s.item}>
            { friendData }
        </div>

    );
}

export default Friends;