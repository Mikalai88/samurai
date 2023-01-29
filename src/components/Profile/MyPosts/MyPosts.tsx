import React from 'react';
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                New post
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
            </div>
            <Post message={"It's my first post."}/>
            <Post message={"Hello, how are you?"}/>
        </div>
    );
};
