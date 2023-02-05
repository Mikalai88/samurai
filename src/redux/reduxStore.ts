import {combineReducers, createStore} from "redux";
import profileReducer, {addPostActionCreator, changePostTextareaActionCreator, ProfilePageType} from "./profileReducer";
import dialogsReducer, {
    addMessageActionCreator,
    changeMessageTextareaActionCreator,
    DialogsPageType
} from "./dialogsReducer";

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

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
});

export let store: StoreType = createStore(reducers);