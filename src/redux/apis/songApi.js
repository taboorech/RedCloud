import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../api/axiosBaseQuery";

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
      })
    }
  }
})

export const { useFetchSongQuery } = songApi;
export { songApi };