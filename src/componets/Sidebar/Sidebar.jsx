import React from 'react';
import s from './Sidebar.module.css';
import Navbar from './Navbar/Navbar';
import FriendsContainer from './Friends/FriendsContainer';

const Sidebar = () => {
    return (
        <section className="sidebar">
            <Navbar />

            <div className={s.friends}>
                <br/>
                <h2>Friends</h2>

                <div className={s.sidebar__friends}>
                    <FriendsContainer />
                </div>
            </div>
        </section>
    );
}

export default Sidebar;