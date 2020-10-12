import React from 'react';
import s from './Users.module.css'

const Users = (props) => {
    debugger;
    return (
        <div className={s.users}>
            <h1>Users</h1>
            <hr />
            {
                props.users.map(u =>
                    <div className={s.userGrid} key={u.id}>
                        <div className={s.userGrid_left}>
                            <img src={u.img} alt="avatar" />
                            {u.followed
                                ? <button className={s.follow} onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                                : <button className={s.follow} onClick={() => {props.follow(u.id)}}>Follow</button>
                            }
                        </div>

                        <div className={s.userGrid_right}>
                            <span> {u.fullName} </span>
                            <span> {u.location.country} </span>
                            <span> {u.status} </span>
                            <span> {u.location.city} </span>
                        </div>
                    </div>
                )
            }

        </div>
    );
}

export default Users;