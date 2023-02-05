import React, {ChangeEvent} from 'react';
import classes from './MyPosts.module.css';
import {Post, PostType} from "./Post/Post";
import {addPostActionCreator, changePostTextareaActionCreator} from "../../../redux/profileReducer";
import {ActionsTypes} from "../../../redux/reduxStore";

type MyPostsPropsType = {
    postData: Array<PostType>
    dispatch: (action: ActionsTypes) => void
    newPostText: string
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postElements = props.postData.map(post => (<Post message={post.message} id={post.id} likesCount={post.likesCount}/>));

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPostOnClickHandler = () => {
        if (newPostElement.current) {
            // props.addPost(newPostElement.current.value);
            props.dispatch(addPostActionCreator(newPostElement.current.value));
            props.dispatch(changePostTextareaActionCreator(""));
        }
    }

    const onChangePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
            // props.changePostTextarea(e.currentTarget.value);
        props.dispatch(changePostTextareaActionCreator(e.currentTarget.value));
    }

    return (
        <div className={classes.myPosts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        ref={newPostElement}
                        value={props.newPostText}
                        onChange={onChangePostHandler} />
                    </div>
                <div><button onClick={addPostOnClickHandler}>Add post</button></div>
            </div>
            <div className={classes.postItems}>
                {postElements}
            </div>
        </div>
    );
};
