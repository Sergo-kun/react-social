const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
    dialogs: [
        {id: 1, name: "Саня"},
        {id: 2, name: "Катя"},
        {id: 3, name: "Коля"},
        {id: 4, name: "Маша"},
        {id: 5, name: "Іван"}
    ],
    newMessageText : '',
    messages: [
        {message: "Нюхай бебру"},
        {message: "Нюхай бебру"},
        {message: "Нюхай бебру"},
    ],}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case  UPDATE_NEW_MESSAGE_TEXT :
          return {...state,
          newMessageText: action.newMessage
          }

        case  SEND_MESSAGE:
            let messageSpace = state.newMessageText
            return {...state,
                newMessageText: "",
                messages: [...state.messages, {message : messageSpace}]

            }

        default:
            return state;

    }

}

export let updateNewMessageText = (text) => ({type : UPDATE_NEW_MESSAGE_TEXT, newMessage : text});
export let sendMessage = () =>
    ({type : SEND_MESSAGE});
export default dialogReducer;