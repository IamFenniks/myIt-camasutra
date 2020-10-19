import React from 'react';
import Friend from './Friend';
import s from './Friends.module.css';

const Friends = (props) => {
    let friendData = props.friends.map( f => <Friend img={f.img} name={ f.fName } key={f.id} />);
    return (
        <div  className={s.friends}>
            { friendData }
        </div>

    );
}

export default Friends;