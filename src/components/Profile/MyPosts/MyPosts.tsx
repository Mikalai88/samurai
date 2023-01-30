import React from 'react';
import classes from './MyPosts.module.css';
import {Post, PostType} from "./Post/Post";

type PostDataType = Array<PostType>

export const MyPosts = () => {

    let postData: PostDataType = [
        {id: 1, message: "It's my first post.", likesCount: 12},
        {id: 2, message: "Hello, how are you?", likesCount: 11},
    ]

    return (
        <div className={classes.myPosts}>
            <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div><button>Add post</button></div>
            </div>
            <div className={classes.postItems}>
                <Post message={postData[0].message} id={postData[0].id} likesCount={postData[0].likesCount}/>
                <Post message={postData[1].message} id={postData[1].id} likesCount={postData[1].likesCount}/>
            </div>
        </div>
    );
};
