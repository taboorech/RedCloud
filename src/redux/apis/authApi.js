import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../api/axiosBaseQuery";

const authApi = createApi({
  reducerPath: "auth",
  baseQuery: axiosBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => {
    return {
      auth: builder.mutation({
        query: (data) => {
          return {
            url: '/auth/signin',
            data: {
              email: data.email,
              password: data.password
            },
            method: "POST"
          }
        }
      }),
      registration: builder.mutation({
        query: ({ email, login, name, surname, password }) => {
          return {
            url: '/auth/signup',
            method: "PUT",
            data: {
              email,
              login,
              name,
              surname,
              password
            }
          }
        }
      }),
      logout: builder.mutation({
        query: () => {
          return {
            url: '/auth/logout',
            method: "GET"
          }
        }
      })
    }
  }
})

export const {
  useAuthMutation,
  useRegistrationMutation,
  useLogoutMutation
} = authApi;
export { authApi };