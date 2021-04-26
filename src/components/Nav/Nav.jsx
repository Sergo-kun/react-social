import React from 'react';
import classes from './Nav.module.css';
import {NavLink} from 'react-router-dom';


const Nav = (props) => {
    return (
        <nav className={classes.nav}>
            <div className={classes.ollItem}>
                <div className={classes.item}><NavLink to={"/profile"} activeClassName={classes.active}>Profile</NavLink></div>
                <div className={classes.item}><NavLink to="/friends" activeClassName={classes.active}>Friends</NavLink></div>
                {/*activeClassName={classes.active} коли силка активна їй буде надаватися стиль*/}
                <div className={classes.item}><NavLink to="/messages" activeClassName={classes.active}>Messages</NavLink></div>
                <div className={`${classes.item}`}><NavLink to="/news" activeClassName={classes.active}>News</NavLink></div>
                <div className={classes.item}><NavLink to="/music" activeClassName={classes.active}>Music</NavLink></div>
                <div className={classes.item}><NavLink to="/users" activeClassName={classes.active}>Users</NavLink></div>
                <div className={classes.item}><NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink></div>

            </div>
        </nav>
    );
}

export default Nav



