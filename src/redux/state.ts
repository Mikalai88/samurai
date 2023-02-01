// Types
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

type MessageType = {
    id: number
    message: string
}
type DialogItemType = {
    name: string
    id: number
}
type PostType = {
    message: string
    id: number
    likesCount: number
}

type PostDataType = Array<PostType>
type DialogsDataType = Array<DialogItemType>
type MessagesDataType = Array<MessageType>

export type ProfilePageType = {
    posts: PostDataType
    newPostText: string
}
export type DialogsPageType = {
    dialogs: DialogsDataType
    messages: MessagesDataType
    newMessageText: string
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    getState: () => RootStateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof changePostTextareaActionCreator>
    | ReturnType<typeof addMessageActionCreator>
    | ReturnType<typeof changeMessageTextareaActionCreator>


// Action creators types
const ADD_POST = "ADD-POST";
const CHANGE_POST_TEXTAREA = "CHANGE-POST-TEXTAREA";
const ADD_MESSAGE = "ADD-MESSAGE";
const CHANGE_MESSAGE_TEXTAREA = "CHANGE-MESSAGE-TEXTAREA";

// Action creators
export const addPostActionCreator = (postMessage: string) => {
    return {
        type: ADD_POST,
        postMessage: postMessage
    } as const
}
export const changePostTextareaActionCreator = (newPostText: string) => {
    return {
        type: CHANGE_POST_TEXTAREA,
        newPostText: newPostText
    } as const
}

export const addMessageActionCreator = (dialogMessage: string) => {
    return {
        type: ADD_MESSAGE,
        dialogMessage: dialogMessage
    } as const
}
export const changeMessageTextareaActionCreator = (newMessageText: string) => {
    return {
        type: CHANGE_MESSAGE_TEXTAREA,
        newMessageText: newMessageText
    } as const
}


// Store
const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "It's my first post.", likesCount: 12},
                {id: 2, message: "Hello, how are you?", likesCount: 11}
            ],
            newPostText: ""
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Mikalai"},
                {id: 2, name: "Alex"},
                {id: 3, name: "Igor"},
                {id: 4, name: "Vlad"},
                {id: 5, name: "Matt"},
                {id: 6, name: "Nils"},
                {id: 7, name: "Egor"}
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "How is your expirience?"}
            ],
            newMessageText: ""
        }
    },
    _callSubscriber() {
        console.log("State changed");
    },

    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer;
    },

    // addPost(postMessage: string) {
    //     let newPost: PostType = {
    //         id: (this._state.profilePage.posts.length + 1),
    //         message: postMessage,
    //         likesCount: 0
    //     };
    //     this._state.profilePage.posts.push(newPost);
    //     this.changePostTextarea("");
    //     this._callSubscriber();
    // },
    // changePostTextarea(newPostText: string) {
    //     this._state.profilePage.newPostText = newPostText;
    //     this._callSubscriber();
    // },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber();
        // if (action.type === ADD_POST) {
        //     const newPost: PostType = {
        //         id: (this._state.profilePage.posts.length + 1),
        //         message: action.postMessage,
        //         likesCount: 0
        //     };
        //     this._state.profilePage.posts.push(newPost);
        //     // this.changePostTextarea("");
        //     this._callSubscriber();
        // } else if (action.type === CHANGE_POST_TEXTAREA) {
        //     this._state.profilePage.newPostText = action.newPostText;
        //     this._callSubscriber();
        // } else if (action.type === ADD_MESSAGE) {
        //     const newMessage: MessageType = {
        //         id: (this._state.dialogsPage.messages.length + 1),
        //         message: action.dialogMessage
        //     };
        //     this._state.dialogsPage.messages.push(newMessage);
        // } else if (action.type === CHANGE_MESSAGE_TEXTAREA) {
        //     this._state.dialogsPage.newMessageText = action.newMessageText;
        //     this._callSubscriber();
        // }
    }
}

export default store;

// State
// let renderEntireTree = () => {
//     console.log("State changed");
// }
// export const subscribe = (observer: () => void) => {
//     renderEntireTree = observer;
// }
// let state: RootStateType = {
//     profilePage: {
//         posts: [
//             {id: 1, message: "It's my first post.", likesCount: 12},
//             {id: 2, message: "Hello, how are you?", likesCount: 11}
//         ],
//         newPostText: "it"
//     },
//     dialogsPage: {
//         dialogs: [
//             {id: 1, name: "Mikalai"},
//             {id: 2, name: "Alex"},
//             {id: 3, name: "Igor"},
//             {id: 4, name: "Vlad"},
//             {id: 5, name: "Matt"},
//             {id: 6, name: "Nils"},
//             {id: 7, name: "Egor"}
//         ],
//         messages: [
//             {id: 1, message: "Hi"},
//             {id: 2, message: "How are you?"},
//             {id: 3, message: "How is your expirience?"}
//         ]
//     }
// }
// export const addPost = (postMessage: string) => {
//     let newPost: PostType = {
//         id: (state.profilePage.posts.length + 1),
//         message: postMessage,
//         likesCount: 0
//     };
//     state.profilePage.posts.push(newPost);
//     changePostTextarea("");
//
//     renderEntireTree();
// }
// export const changePostTextarea = (newPostText: string) => {
//     state.profilePage.newPostText = newPostText;
//     renderEntireTree();
// }