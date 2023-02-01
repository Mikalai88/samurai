import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {NavLink, Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {StoreType} from "./redux/state";

type AppPropsType = {
    addPost: (postMessage: string) => void
    changePostTextarea: (newPostText: string) => void
    store: StoreType
}

function App(props: AppPropsType) {

    let postData = props.store.getState().profilePage.posts
    let dialogs = props.store.getState().dialogsPage.dialogs
    let messages = props.store.getState().dialogsPage.messages
    let newPostText = props.store.getState().profilePage.newPostText

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path={'/profile'} element={<Profile postData={postData} addPost={props.addPost} changePostTextarea={props.changePostTextarea} newPostText={newPostText} />} />
                    <Route path={'/dialogs/*'} element={<Dialogs dialogs={dialogs} messages={messages} />} />
                    <Route path={'/news'} element={<News />} />
                    <Route path={'/music'} element={<Music />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
