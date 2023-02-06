import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {DialogItem, DialogItemPropsType} from "./DialogItem/DialogItem";
import {Message, MessagePropsType} from "./Message/Message";

type DialogsPropsType = {
    dialogs: Array<DialogItemPropsType>
    messages: Array<MessagePropsType>
    newMessageText: string
    addMessageOnClickHandler: (newMessageText: string) => void
    onChangeMessageHandler: (changedMessageText: string) => void
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.dialogs.map(el => (<DialogItem name={el.name} id={el.id} />));
    let messagesElements = props.messages.map(m => (<Message message={m.message} />));
    const newMessageElement = React.createRef<HTMLTextAreaElement>();

    const onAddMessageOnClickHandler = () => {
        if (newMessageElement.current) {
            let newMessage = newMessageElement.current.value
            props.addMessageOnClickHandler(newMessage)
        }
    }

    const onOnChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.onChangeMessageHandler(text)
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
                        onChange={onOnChangeMessageHandler} />
                </div>
                <div><button onClick={onAddMessageOnClickHandler}>Add message</button></div>
            </div>
        </div>
    );
};
