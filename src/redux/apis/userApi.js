import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../api/axiosBaseQuery";

const userApi = createApi({
  reducerPath: "user",
  baseQuery: axiosBaseQuery({ baseUrl: "" }),
  endpoints: builder => {
    return {
      fetchUserInfo: builder.query({
        providesTags: ["changeAvatar"],
        query: () => {
          return {
            url: '/user/info',
            method: "GET",
          }
        }
      }),
      fetchProfileInfo: builder.query({
        providesTags: ["fetchProfile", "changeAvatar"],
        query: (id) => {
          return {
            url: `/user/profile-info/${id}`,
            method: "GET"
          }
        }
      }),
      updateInfo: builder.mutation({
        invalidatesTags: ["fetchProfile"],
        query: (data) => {
          return {
            url: '/user',
            data,
            method: "PATCH",
            headers: { "content-type": "multipart/form-data" }
          }
        }
      }),
      updateAvatar: builder.mutation({
        invalidatesTags: ["changeAvatar"],
        query: (data) => {
          return {
            url: '/user/avatar',
            data,
            method: "PATCH",
            headers: { "content-type": "multipart/form-data" }
          }
        }
      }),
      fetchFriends: builder.query({
        providesTags: ["addFriend"],
        query: () => {
          return {
            url: '/user/friends',
            method: "GET"
          }
        }
      }),
      addFriend: builder.mutation({
        invalidatesTags: ["addFriend"],
        query: (id) => {
          return {
            url: `/user/friend-add/${id}`,
            method: "PATCH"
          }
        }
      })
    }
  }
})

export const { useFetchUserInfoQuery, useFetchProfileInfoQuery, useUpdateInfoMutation, useUpdateAvatarMutation, useFetchFriendsQuery, useAddFriendMutation } = userApi;
export { userApi };