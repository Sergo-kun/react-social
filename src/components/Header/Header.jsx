import React from 'react';
import classes from './Header.module.css'
import {NavLink, Redirect} from "react-router-dom";



const Header = (props) => {




    return(
        <header className={classes.header}>
            <img src="https://support-tools.storage.googleapis.com/Snapchat-Ghost-logo-347777501.png"/>
            <div className={classes.loginBlock}>

                {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>  : <NavLink to={'/login'}>Login</NavLink>  }


            </div>
        </header>
    );

}

export default Header;