import React from 'react';
import classes from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "./MyPosts/Post/Post";
import {ActionsTypes} from "../../redux/reduxStore";

type ProfilePropsType = {
    postData: Array<PostType>
    dispatch: (action: ActionsTypes) => void
    newPostText: string
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
            <div>
                <ProfileInfo />
                <MyPosts postData={props.postData} dispatch={props.dispatch} newPostText={props.newPostText} />
            </div>
    );
};
