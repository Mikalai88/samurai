import React from 'react';
import {addPostActionCreator, changePostTextareaActionCreator} from "../../../redux/profileReducer";
import {StoreType} from "../../../redux/reduxStore";
import {MyPosts} from "./MyPosts";

type MyPostsPropsType = {
    store: StoreType
}

export const MyPostsContainer: React.FC<MyPostsPropsType> = (props) => {
    let state = props.store.getState()

    const addPostOnClickHandler = (newPost: string) => {
            props.store.dispatch(addPostActionCreator(newPost));
            props.store.dispatch(changePostTextareaActionCreator(""));
    }

    const onChangePostHandler = (newPostText: string) => {
        props.store.dispatch(changePostTextareaActionCreator(newPostText));
    }

    return (
        <MyPosts onChangePostHandler={onChangePostHandler}
                 addPostOnClickHandler={addPostOnClickHandler}
                 postData={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}/>
    );
};
