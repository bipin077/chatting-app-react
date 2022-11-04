import {createSlice} from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

const admintoken = localStorage.getItem("admin-token");
const verifyToken = () =>
{
    if(admintoken)
    {
        const decodeToken = jwtDecode(admintoken);
        const expiredIn = new Date(decodeToken.exp * 1000);
        if(new Date() > expiredIn)
        {
            return null;
        }
        else
        {
            return admintoken;
        }
    }
    else
    {
        return null;
    }
}

const AuthReducer = createSlice({
    name : "authReducer",
    initialState : {
        adminToken : verifyToken()
    },
    reducers : {
        setAdminToken : (state, action) =>
        {
            state.adminToken = action.payload;
        },
        logout : (state) =>
        {
            localStorage.removeItem("admin-token");
            state.adminToken = null;
        }
    }
})

export const {setAdminToken, logout } = AuthReducer.actions;
export default AuthReducer.reducer;