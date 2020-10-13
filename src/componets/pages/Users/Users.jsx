import * as axios from 'axios';
import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../../../src/assets/img/woman1.png';

const Users = (props) => {

    if(props.users.length === 0){
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then( response => 
                { props.setUsers( response.data.items ) }     
            );    
    }
    

    return (
        <div className={s.users}>
            <h1>Users</h1>
            <hr />
            {
                props.users.map(u =>
                    <div className={s.userGrid} key={u.id}>
                        <div className={s.userGrid_left}>
                            <img src={ u.photos.small != null? u.photos.small : userPhoto } alt="avatar" />
                            {u.followed
                                ? <button className={s.follow} onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                : <button className={s.follow} onClick={() => { props.follow(u.id) }}>Follow</button>
                            }
                        </div>

                        <div className={s.userGrid_right}>
                            <span> {u.name} </span>
                            <span> {"u.location.country"} </span>
                            <span> {u.status} </span>
                            <span> {"u.location.city"} </span>
                        </div>
                    </div>
                )
            }

        </div>
    );
}

export default Users;