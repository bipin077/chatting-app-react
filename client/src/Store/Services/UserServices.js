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
            }),
            updatePassword : builder.mutation({
                query : (data) =>
                {
                    return {
                        method : "PUT",
                        url : "changePassword",
                        body : data
                    }
                }, invalidatesTags : ['users']
            }),
            updateDetails : builder.mutation({
                query : (data) =>
                {
                    return {
                        method : "PUT",
                        url : "updateUserDetail",
                        body : data
                    }
                }, invalidatesTags : ['users']
            })
        }
    }
})

export const { useUpdateDetailsMutation, useRegisterUserMutation, useLoginUserMutation, useGetAllUsersQuery, useGetSingleUserQuery, useUpdatePasswordMutation} = UserServices;
export default UserServices;