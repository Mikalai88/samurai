import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {NavLink, Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import state, {addPost} from "./redux/state";

function App() {

    let postData = state.profilePage.posts
    let dialogs = state.dialogsPage.dialogs
    let messages = state.dialogsPage.messages

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path={'/profile'} element={<Profile postData={postData} addPost={addPost} />} />
                    <Route path={'/dialogs/*'} element={<Dialogs dialogs={dialogs} messages={messages} />} />
                    <Route path={'/news'} element={<News />} />
                    <Route path={'/music'} element={<Music />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
