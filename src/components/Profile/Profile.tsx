import React from 'react';
import classes from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "./MyPosts/Post/Post";
import {changePostTextarea} from "../../redux/state";

type ProfilePropsType = {
    postData: Array<PostType>
    addPost: (message: string) => void
    changePostTextarea: (newPostText: string) => void
    newPostText: string
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
            <div>
                <ProfileInfo />
                <MyPosts postData={props.postData} addPost={props.addPost} changePostTextarea={props.changePostTextarea} newPostText={props.newPostText} />
            </div>
    );
};
