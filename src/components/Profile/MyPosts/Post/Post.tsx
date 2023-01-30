import React from 'react';
import classes from "./Post.module.css";

export type PostType = {
    message: string
    id: number
    likesCount: number
}

export const Post = (props: PostType) => {
    return (
        <div className={classes.item}>
            <img className={classes.ava} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcq6DZYSEnXBlNF4GVdo6lQThmXgzNm3oiDZOthpsLtE6VPysCmJKJBEm4Je7AQm_qL6A&usqp=CAU"/>
            {props.message}
            <div>Like {props.likesCount}</div>
        </div>
    );
};
