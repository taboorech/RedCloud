import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../api/axiosBaseQuery";

const userApi = createApi({
  reducerPath: "user",
  baseQuery: axiosBaseQuery({ baseUrl: "" }),
  endpoints: builder => {
    return {
      fetchUserInfo: builder.query({
        query: () => {
          return {
            url: '/user/info',
            method: "GET",
          }
        }
      }),
      fetchProfileInfo: builder.query({
        query: () => {
          return {
            url: '/user/profile-info',
            method: "GET"
          }
        }
      })
    }
  }
})

export const { useFetchUserInfoQuery, useFetchProfileInfoQuery } = userApi;
export { userApi };