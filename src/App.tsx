import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {NavLink, Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {ActionsTypes, StoreType} from "./redux/reduxStore";


type AppPropsType = {
    dispatch: (action: ActionsTypes) => void
    store: StoreType
}

function App(props: AppPropsType) {

    let postData = props.store.getState().profilePage.posts
    let dialogs = props.store.getState().dialogsPage.dialogs
    let messages = props.store.getState().dialogsPage.messages
    let newPostText = props.store.getState().profilePage.newPostText
    let newMessageText = props.store.getState().dialogsPage.newMessageText

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path={'/profile'} element={<Profile postData={postData} dispatch={props.dispatch} newPostText={newPostText} />} />
                    <Route path={'/dialogs/*'} element={<Dialogs dialogs={dialogs} dispatch={props.dispatch} newMessageText={newMessageText} messages={messages} />} />
                    <Route path={'/news'} element={<News />} />
                    <Route path={'/music'} element={<Music />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
