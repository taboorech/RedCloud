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
      }),
      fetchOnePlaylist: builder.query({
        query: (id) => {
          return {
            url: `/playlist/${id}`,
            method: "GET"
          }
        }
      }),
      createPlaylist: builder.mutation({
        query: (title) => {
          return {
            url: `/playlist/create`,
            data: {
              title
            },
            method: "PUT"
          }
        }
      })
    }
  }
})

export const { useFetchPlaylistsQuery, useFetchOnePlaylistQuery, useCreatePlaylistMutation } = playlistApi;
export { playlistApi };