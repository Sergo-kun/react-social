import React from 'react';
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";


function DialogItem({id, name}) {
    return (
        <div className={classes.dialog}><NavLink to={'/messages/' + id} activeClassName={classes.active}>{name}</NavLink></div>
    );
}

export default DialogItem;