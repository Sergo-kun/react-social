import React from 'react';
import classes from "./Dialogs.module.css";

const MessagesItem = ({message}) => {
    return (
        <div className={classes.dialog}>{message}</div>
    );
}
export default MessagesItem;