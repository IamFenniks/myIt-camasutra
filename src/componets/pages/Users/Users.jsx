import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../../../src/assets/img/woman1.png';
import Preloader from '../../common/Preloader';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';
import { followAPI } from '../../../api/api';

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= 15; i++) {
        pages.push(i);
    }

    return (
        <div className={s.users}>
            <h1>Users</h1>
            <hr />

            <div className={s.pagination}>
                {pages.map(p =>
                    <span key={p.id} className={props.currentPage === p && s.active}
                        onClick={() => { props.onPageChanged(p) }} >{p}</span>

                )}
            </div>
            <hr />

            {
                props.isFetched
                    ? <Preloader />
                    : props.users.map(u =>
                        <div className={s.userGrid} key={u.id}>
                            <div className={s.userGrid_left}>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="avatar" />
                                </NavLink>

                                {u.followed
                                    ? <button className={s.follow} onClick={() => {
                                        followAPI.unFollow(u.id)
                                            .then(data => {
                                                if(data.resultCode == 0){
                                                    props.unfollow(u.id)
                                                }
                                            }
                                        );
                                        
                                    }}>Unfollow</button>
                                    : <button className={s.follow} onClick={() => {

                                        followAPI.follow(u.id)
                                            .then(data   => {
                                                if(data.resultCode == 0){
                                                    props.follow(u.id)
                                                }
                                            }
                                        );

                                    }}>Follow</button>
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