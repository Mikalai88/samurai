import {MessageType} from "antd/es/message";
import {DialogsPageType} from "./state";

const ADD_MESSAGE = "ADD-MESSAGE";
const CHANGE_MESSAGE_TEXTAREA = "CHANGE-MESSAGE-TEXTAREA";

const dialogsReducer = (state: DialogsPageType, action: any) => {
    switch(action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: (state.messages.length + 1),
                message: action.dialogMessage
            };
            state.messages.push(newMessage);
            return state;
        case CHANGE_MESSAGE_TEXTAREA:
            state.newMessageText = action.newMessageText;
            return state;
        default:
            return state;
    }

    // if (action.type === ADD_MESSAGE) {
    //     const newMessage = {
    //         id: (state.messages.length + 1),
    //         message: action.dialogMessage
    //     };
    //     state.messages.push(newMessage);
    // } else if (action.type === CHANGE_MESSAGE_TEXTAREA) {
    //     state.newMessageText = action.newMessageText;
    // }
    //
    // return state;
};

export default dialogsReducer;
