import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../api/axiosBaseQuery";

const playlistApi = createApi({
  reducerPath: 'playlist',
  baseQuery: axiosBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => {
    return {
      fetchPlaylists: builder.query({
        query: () => {
          return {
            url: "/playlist",
            method: "GET"
          }
        }
      })
    }
  }
})

export const { useFetchPlaylistsQuery } = playlistApi;
export { playlistApi };