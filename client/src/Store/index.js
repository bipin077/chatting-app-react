import {configureStore} from "@reduxjs/toolkit";
import UserServices from "./Services/UserServices";
import AuthReducer from "./Reducers/AuthReducer";
import UserReducer from "./Reducers/UserReducer";
import ChatServices from "./Services/ChatServices";

const Store = configureStore({
    reducer : {
        [UserServices.reducerPath] : UserServices.reducer,
        "authReducer" : AuthReducer,
        "sender" : UserReducer,
        [ChatServices.reducerPath] : ChatServices.reducer
    }
})

export default Store;