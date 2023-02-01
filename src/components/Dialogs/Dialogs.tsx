import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {DialogItem, DialogItemPropsType} from "./DialogItem/DialogItem";
import {Message, MessagePropsType} from "./Message/Message";
import {ActionsTypes} from "../../redux/state";
import {addMessageActionCreator, changeMessageTextareaActionCreator} from "../../redux/dialogsReducer";

type DialogsPropsType = {
    dialogs: Array<DialogItemPropsType>
    messages: Array<MessagePropsType>
    dispatch: (action: ActionsTypes) => void
    newMessageText: string
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.dialogs.map(el => (<DialogItem name={el.name} id={el.id} />));

    let messagesElements = props.messages.map(m => (<Message message={m.message} />));

    const newMessageElement = React.createRef<HTMLTextAreaElement>();

    const addMessageOnClickHandler = () => {
        if (newMessageElement.current) {
            // props.addPost(newPostElement.current.value);
            props.dispatch(addMessageActionCreator(newMessageElement.current.value));
            props.dispatch(changeMessageTextareaActionCreator(""));
        }
    }

    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // props.changePostTextarea(e.currentTarget.value);
        props.dispatch(changeMessageTextareaActionCreator(e.currentTarget.value));
    }

    return (
        <div className={classes.dialogs}>
            <div>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <div>
                <div>
                    <textarea
                        ref={newMessageElement}
                        value={props.newMessageText}
                        onChange={onChangeMessageHandler} />
                </div>
                <div><button onClick={addMessageOnClickHandler}>Add message</button></div>
            </div>
        </div>
    );
};
