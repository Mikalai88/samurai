import React, {ChangeEvent} from 'react';
import classes from './MyPosts.module.css';
import {Post, PostType} from "./Post/Post";

type MyPostsPropsType = {
    postData: Array<PostType>
    newPostText: string
    onChangePostHandler: (text: string) => void
    addPostOnClickHandler: (newPost: string) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postElements = props.postData.map(post => (
        <Post message={post.message} id={post.id} likesCount={post.likesCount}/>
    ));

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const onAddPostOnClickHandler = () => {
        if (newPostElement.current) {
            let newPost = newPostElement.current.value
            props.addPostOnClickHandler(newPost)
        }
    }

    const onOnChangePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        props.onChangePostHandler(text)
    }

    return (
        <div className={classes.myPosts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        ref={newPostElement}
                        value={props.newPostText}
                        onChange={onOnChangePostHandler} />
                    </div>
                <div><button onClick={onAddPostOnClickHandler}>Add post</button></div>
            </div>
            <div className={classes.postItems}>
                {postElements}
            </div>
        </div>
    );
};
