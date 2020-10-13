import React from 'react';
import s from './Users.module.css'

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 0,
                fullName: 'Alex',
                img: 'https://lh3.googleusercontent.com/proxy/j7rFxSVt28RBisyXQc6H9Mtf4yvvj2t_pldL2r-wOvw6OVwhkNkpz34PfMl59K0zM1jQNp_VEMZmscQyadcdioTAUpR9VIEdnQrFRRxcOvVDkOaY_C_k5y2TsTdavlyZhbMVG-Mdoc1kBNniUI4WflGHiGrmJri-4iyFWyMjeVBtBKpXhy7wtv7xLCZFI7NL_-2QTA',
                status: 'UI-dizigner',
                location: { country: 'Ukraine', city: 'Kiev' },
                followed: false
            },
            {
                id: 1,
                fullName: 'Nick',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgYRMVOE5fjXCzGe6z3pj0EZmDegpQlTUZMg&usqp=CAU',
                status: 'Diveloper',
                location: { country: 'Ukraine', city: 'Mariupol' },
                followed: true
            },
            {
                id: 2,
                fullName: 'Alice',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEnrk178MmCXyt0_HvDfNpJoivMi02DJa3mg&usqp=CAU',
                status: 'First manager',
                location: { country: 'Russia', city: 'Rostov' },
                followed: false
            },
            {
                id: 3,
                fullName: 'Andre',
                img: 'https://proslang.ru/wp-content/uploads/2019/03/avatarka_1-300x300.jpg',
                status: 'Boss',
                location: { country: 'Ukraine', city: 'Mariupol' },
                followed: true
            }
        ])
    }

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
                                ? <button className={s.follow} onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                : <button className={s.follow} onClick={() => { props.follow(u.id) }}>Follow</button>
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