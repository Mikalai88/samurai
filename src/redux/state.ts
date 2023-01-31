import {renderEntireTree} from "../render";

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

type ProfilePageType = {
    posts: PostDataType
    newPostText: string
}
type DialogsPageType = {
    dialogs: DialogsDataType
    messages: MessagesDataType
}

type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: "It's my first post.", likesCount: 12},
            {id: 2, message: "Hello, how are you?", likesCount: 11}
        ],
        newPostText: "it"
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
        ]
    }
}

export const addPost = (postMessage: string) => {
    let newPost: PostType = {
        id: (state.profilePage.posts.length + 1),
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);

    renderEntireTree();
}

export const changePostTextarea = (newPostText: string) => {
    state.profilePage.newPostText = newPostText;
    renderEntireTree();
}

export default state;