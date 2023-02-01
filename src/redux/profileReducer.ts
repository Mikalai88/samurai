import {ProfilePageType} from "./state";

const ADD_POST = "ADD-POST";
const CHANGE_POST_TEXTAREA = "CHANGE-POST-TEXTAREA";

const profileReducer = (state: ProfilePageType, action: any) => {
    switch(action.type) {
        case ADD_POST:
            const newPost = {
                id: (state.posts.length + 1),
                message: action.postMessage,
                likesCount: 0
            };
            state.posts.push(newPost);
            return state;
        case CHANGE_POST_TEXTAREA:
            state.newPostText = action.newPostText;
            return state;
        default:
            return state;
    }
}

export default profileReducer;