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
        query: () => {
          return {
            url: '/user/profile-info',
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
      })
    }
  }
})

export const { useFetchUserInfoQuery, useFetchProfileInfoQuery, useUpdateInfoMutation, useUpdateAvatarMutation } = userApi;
export { userApi };