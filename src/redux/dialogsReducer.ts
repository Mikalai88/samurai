
const ADD_MESSAGE = "ADD-MESSAGE";
const CHANGE_MESSAGE_TEXTAREA = "CHANGE-MESSAGE-TEXTAREA";

type MessageType = {
    id: number
    message: string
}

type DialogItemType = {
    name: string
    id: number
}

type DialogsDataType = Array<DialogItemType>
type MessagesDataType = Array<MessageType>

export type DialogsPageType = {
    dialogs: DialogsDataType
    messages: MessagesDataType
    newMessageText: string
}

let initialState: DialogsPageType = {
    dialogs: [
        {id: 1, name: "Mikalai"},
        {id: 2, name: "Alex"},
        {id: 3, name: "Igor"},
        {id: 4, name: "Vlad"},
        {id: 5, name: "Matt"},
        {id: 6, name: "Nils"},
        {id: 7, name: "Egor"}
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "How is your expirience?"}
    ],
    newMessageText: ""
}

const dialogsReducer = (state: DialogsPageType = initialState, action: any): DialogsPageType => {
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
};

export const addMessageActionCreator = (dialogMessage: string) => {
    return {
        type: ADD_MESSAGE,
        dialogMessage: dialogMessage
    } as const
}
export const changeMessageTextareaActionCreator = (newMessageText: string) => {
    return {
        type: CHANGE_MESSAGE_TEXTAREA,
        newMessageText: newMessageText
    } as const
};

export default dialogsReducer;
