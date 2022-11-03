import {createSlice} from "@reduxjs/toolkit";

const UserReducer = createSlice({
    name : "sender",
    initialState : {
        sender : []
    },
    reducers : {
        addSenderDetails : (state, action) =>
        {
            state.sender = action.payload;
        },
        removeSenderDetails : (state) =>
        {
            state.sender = [];
        }
    }
})

export const {addSenderDetails, removeSenderDetails} = UserReducer.actions;
export default UserReducer.reducer;