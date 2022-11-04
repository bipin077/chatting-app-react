import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const UserServices = createApi({
    reducerPath : "users",
    baseQuery : fetchBaseQuery({
        baseUrl : "http://localhost:5000/api/",
    }),
    tagTypes : ["users"],
    endpoints : (builder) =>
    {
       return {
            registerUser : builder.mutation({
                query : (data) =>
                {
                    return {
                        method : "POST",
                        url : 'register',
                        body : data
                    }
                }, invalidatesTags : ['users']
            }),
            loginUser : builder.mutation({
                query : (data) =>
                {
                    return {
                        method : "POST",
                        url : 'login',
                        body : data
                    }
                }, invalidatesTags : ['users']
            }),
            getAllUsers : builder.query({
                query : (id) =>
                {
                    return {
                        method : "GET",
                        url : `users/${id}`,
                    }
                }, providesTags : ['users']
            }),
            getSingleUser : builder.query({
                query : (id) =>
                {
                    return {
                        method : "GET",
                        url : `user/${id}`,
                    }
                }, providesTags : ['users']
            })
        }
    }
})

export const {useRegisterUserMutation, useLoginUserMutation, useGetAllUsersQuery, useGetSingleUserQuery} = UserServices;
export default UserServices;