import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../api/axiosBaseQuery";
import { userApi } from "./userApi";

const songApi = createApi({
  reducerPath: "song",
  baseQuery: axiosBaseQuery({ baseUrl: "" }),
  endpoints: builder => {
    return {
      fetchSong: builder.query({
        query: (id) => {
          return {
            url: `/song/${id}`,
            method: "GET"
          }
        }
      }),
      createSong: builder.mutation({
        query: (data) => {
          return {
            url: `/song/create`,
            data,
            method: "PUT",
            headers: { "content-type": "multipart/form-data" }
          }
        },
        async onQueryStarted(arg, { dispatch, queryFulfilled }) {
          try {
            await queryFulfilled;
            dispatch(userApi.util.resetApiState());
          } catch (error) {
            console.log(error);
          }
        }
      })
    }
  }
})

export const { useFetchSongQuery, useCreateSongMutation } = songApi;
export { songApi };