// Types
import profileReducer, {addPostActionCreator, changePostTextareaActionCreator} from "./profileReducer";
import dialogsReducer, {addMessageActionCreator, changeMessageTextareaActionCreator} from "./dialogsReducer";

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

// Action creators





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

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber();
    }
}

export default store;
