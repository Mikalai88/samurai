import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/state";

const renderEntireTree = () => {
    return (
        ReactDOM.render(
            <BrowserRouter>
                <App store={store} dispatch={store.dispatch.bind(store)} />
                {/*<App state={store.getState()} addPost={store.addPost} changePostTextarea={store.changePostTextarea} />*/}
            </BrowserRouter>,
            document.getElementById('root')
        ));
};
renderEntireTree();

store.subscribe(renderEntireTree);