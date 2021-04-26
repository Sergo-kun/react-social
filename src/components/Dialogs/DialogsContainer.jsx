import React from 'react';
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem";
import MessagesItem from "./MessagesItem";
import {sendMessage, updateNewMessageText} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class DialogsContainer extends React.Component{


render() {

    if (!this.props.isAuth) return <Redirect to={'/login'}/>;

    return(
        <Dialogs {...this.props}/>
    )
}


}

let mapStore = (store) => {
    return {
        dialog: store.dialogPage.dialogs,
        message: store.dialogPage.messages,
        newMessageText: store.dialogPage.newMessageText,
        isAuth: store.auth.isAuth
    }
}

export default compose( connect(mapStore,{sendMessage, updateNewMessageText}),
    withAuthRedirect)
(DialogsContainer)

