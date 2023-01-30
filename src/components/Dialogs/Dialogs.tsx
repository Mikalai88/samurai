import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {DialogItem, DialogItemPropsType} from "./DialogItem/DialogItem";
import {Message, MessagePropsType} from "./Message/Message";

type DialogsDataType = Array<DialogItemPropsType>

type MessagesDataType = Array<MessagePropsType>

export const Dialogs = () => {

    let dialogsData: DialogsDataType = [
        {id: 1, name: "Mikalai"},
        {id: 2, name: "Alex"},
        {id: 3, name: "Igor"},
        {id: 4, name: "Vlad"},
        {id: 5, name: "Matt"},
        {id: 6, name: "Nils"},
        {id: 7, name: "Egor"}
    ];

    let messagesData: MessagesDataType = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "How is your expirience?"}
    ]

    return (
        <div className={classes.dialogs}>
            <div>

                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />

            </div>
            <div className={classes.messages}>
                <Message message={messagesData[0].message} id={messagesData[0].id}/>

            </div>
        </div>
    );
};
