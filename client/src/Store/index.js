import {configureStore} from "@reduxjs/toolkit";
import UserServices from "./Services/UserServices";
import AuthReducer from "./Reducers/AuthReducer";
import UserReducer from "./Reducers/UserReducer";

const Store = configureStore({
    reducer : {
        [UserServices.reducerPath] : UserServices.reducer,
        "authReducer" : AuthReducer,
        "sender" : UserReducer
    }
})

export default Store;