import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {createWrapper} from "next-redux-wrapper";
import {AppStoreType} from "@core/models/types";
import MainReducer from "@store/reducers/MainReducer";

export const rootReducer = combineReducers({
    main: MainReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export const wrapper = createWrapper<AppStoreType>(setupStore);