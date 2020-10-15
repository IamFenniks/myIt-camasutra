import * as axios from 'axios';
import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../../../src/assets/img/woman1.png';

class Users extends React.Component {

    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => { this.props.setUsers(response.data.items) }
            );
    }


    render() {
        return (
            <div className={s.users}>
                <h1>Users</h1>
                <hr />
                {
                    this.props.users.map(u =>
                        <div className={s.userGrid} key={u.id}>
                            <div className={s.userGrid_left}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="avatar" />
                                {u.followed
                                    ? <button className={s.follow} onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                                    : <button className={s.follow} onClick={() => { this.props.follow(u.id) }}>Follow</button>
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
}

export default Users;