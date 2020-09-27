import React from 'react';
import s from './Sidebar.module.css';
import Navbar from './Navbar/Navbar';
import Friends from './Friends/Friends';

const Sidebar = (props) => {
    debugger;
    let friends = props.state.sideBar.friends.map(f => <Friends img={f.img} name={f.fName} />);

    return (
        <section className="sidebar">
            <Navbar />

            <div className={s.friends}>
                <br/>
                <h2>Friends</h2>

                <div className={s.sidebar__friends}>
                    {friends}
                </div>
            </div>
        </section>
    );
}

export default Sidebar;