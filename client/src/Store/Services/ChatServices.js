import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const ChatServices = createApi({
    reducerPath : 'chats',
    baseQuery : fetchBaseQuery({
        baseUrl : "http://localhost:5000/api/"
    }),
    tagTypes : ['chats'],
    endpoints : (builder) =>
    {
        return {
            getUserChat : builder.query({
                 query : (data) =>
                 {
                    return {
                        method : "GET",
                        url : `chats/${data.sender}/${data.receiver}`
                    }
                 }, providesTags : ['chats']
            }),
            sendNewMessage : builder.mutation({
                query : (data) => {
                    return {
                        method : "POST",
                        url : 'chats',
                        body : data
                    }
                }, invalidatesTags : ['chats']
            })
        }
    }
})

export const {useGetUserChatQuery, useSendNewMessageMutation} = ChatServices;
export default ChatServices;