import React from 'react';
import classes from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "./MyPosts/Post/Post";
import {ActionsTypes, StoreType} from "../../redux/reduxStore";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    // postData: Array<PostType>
    // dispatch: (action: ActionsTypes) => void
    // newPostText: string
    store: StoreType
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
            <div>
                <ProfileInfo />
                <MyPostsContainer store={props.store} />
            </div>
    );
};
