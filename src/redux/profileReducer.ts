
const ADD_POST = "ADD-POST";
const CHANGE_POST_TEXTAREA = "CHANGE-POST-TEXTAREA";

type PostType = {
    message: string
    id: number
    likesCount: number
}

type PostDataType = Array<PostType>

export type ProfilePageType = {
    posts: PostDataType
    newPostText: string
}

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: "It's my first post.", likesCount: 12},
        {id: 2, message: "Hello, how are you?", likesCount: 11}
    ],
    newPostText: ""
}

const profileReducer = (state: ProfilePageType = initialState, action: any): ProfilePageType => {
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
};

type AddPostActionCreatorType = {
    type: typeof ADD_POST
    postMessage: string
}

type ChangePostTextareaActionCreatorType = {
    type: typeof CHANGE_POST_TEXTAREA
    newPostText: string
}
export const addPostActionCreator = (postMessage: string): AddPostActionCreatorType => {
    return {
        type: ADD_POST,
        postMessage: postMessage
    }
};
export const changePostTextareaActionCreator = (newPostText: string): ChangePostTextareaActionCreatorType => {
    return {
        type: CHANGE_POST_TEXTAREA,
        newPostText: newPostText
    }
};

export default profileReducer;