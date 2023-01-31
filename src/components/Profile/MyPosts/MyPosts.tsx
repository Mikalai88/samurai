import React from 'react';
import classes from './MyPosts.module.css';
import {Post, PostType} from "./Post/Post";
import {changePostTextarea} from "../../../redux/state";

type MyPostsPropsType = {
    postData: Array<PostType>
    addPost: (message: string) => void
    changePostTextarea: (newPostText: string) => void
    newPostText: string
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postElements = props.postData.map(post => (<Post message={post.message} id={post.id} likesCount={post.likesCount}/>));

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPostOnClickHandler = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value);
            newPostElement.current.value = "";
            props.changePostTextarea("");
        }
    }

    const onChangePostHandler = () => {
        if (newPostElement.current) {
            props.changePostTextarea(newPostElement.current.value);
        }
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
