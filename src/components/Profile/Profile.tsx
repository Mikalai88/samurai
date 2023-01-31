import React from 'react';
import classes from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "./MyPosts/Post/Post";

type ProfilePropsType = {
    postData: Array<PostType>
    addPost: (message: string) => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
            <div>
                <ProfileInfo />
                <MyPosts postData={props.postData} addPost={props.addPost} />
            </div>
    );
};
