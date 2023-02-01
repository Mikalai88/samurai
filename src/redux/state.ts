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

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    getState: () => RootStateType
    subscribe: (observer: () => void) => void
    // addPost: (postMessage: string) => void
    // changePostTextarea: (newPostText: string) => void
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes = ReturnType<typeof addPostActionCreator> | ReturnType<typeof changePostTextareaActionCreator>

export const addPostActionCreator = (postMessage: string) => {
    return {
        type: "ADD-POST",
        postMessage: postMessage
    } as const
}
export const changePostTextareaActionCreator = (newPostText: string) => {
    return {
        type: "CHANGE-POST-TEXTAREA",
        newPostText: newPostText
    } as const
}

const store: StoreType = {
    _state: {
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
        if (action.type === "ADD-POST") {
            const newPost: PostType = {
                id: (this._state.profilePage.posts.length + 1),
                // message: this._state.profilePage.newPostText,
                message: action.postMessage,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            // this.changePostTextarea("");
            this._callSubscriber();
        } else if (action.type === "CHANGE-POST-TEXTAREA") {
            this._state.profilePage.newPostText = action.newPostText;
            this._callSubscriber();
        }
    }
}

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

export default store;