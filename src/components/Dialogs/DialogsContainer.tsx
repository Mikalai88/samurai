import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {DialogItem, DialogItemPropsType} from "./DialogItem/DialogItem";
import {Message, MessagePropsType} from "./Message/Message";
import {addMessageActionCreator, changeMessageTextareaActionCreator} from "../../redux/dialogsReducer";
import {ActionsTypes, StoreType} from "../../redux/reduxStore";
import {Dialogs} from "./Dialogs";

type DialogsPropsType = {
 store: StoreType
}

export const DialogsContainer: React.FC<DialogsPropsType> = (props) => {
    let state = props.store.getState();

    const addMessageOnClickHandler = (newMessageText: string) => {
            props.store.dispatch(addMessageActionCreator(newMessageText));
            props.store.dispatch(changeMessageTextareaActionCreator(""));
    }

    const onChangeMessageHandler = (changedMessageText: string) => {
        props.store.dispatch(changeMessageTextareaActionCreator(changedMessageText));
    }

    return (
        <Dialogs dialogs={state.dialogsPage.dialogs}
                 messages={state.dialogsPage.messages}
                 newMessageText={state.dialogsPage.newMessageText}
                 addMessageOnClickHandler={addMessageOnClickHandler}
                 onChangeMessageHandler={onChangeMessageHandler}
        />
    );
};
