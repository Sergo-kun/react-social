import React from 'react';
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem";
import MessagesItem from "./MessagesItem";



const Dialogs = (props) => {

    let dialogMap = props.dialog.map(d => <DialogItem id={d.id} name={d.name}/>);
    let messageMap = props.message.map(m => <MessagesItem message={m.message}/>);



    let buttonSend = () => {
        props.sendMessage();


    }
    let textingUpdate = (event) => { //event - событие которое произошло с texteria
        let text = event.target.value; // target - с помощу него мі достучимся к елемента event
        props.updateNewMessageText(text);

    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItem}>
                {dialogMap}
                </div>
            <div className={classes.messages}>
                {messageMap}
            </div>
            <div className={classes.textSend}><textarea onChange={textingUpdate}  value={props.newMessageText}/></div>
            <div><button onClick={buttonSend}>Send</button></div>
        </div>
    );
}

export default Dialogs;