import React from 'react';
import classes from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
            <div>
                <div><img className={classes.bgImg} src='https://www.ferienhaus.de/uploads/sf-header.jpg'/></div>
                <div>ava + description</div>
                <MyPosts />
            </div>
    );
};
