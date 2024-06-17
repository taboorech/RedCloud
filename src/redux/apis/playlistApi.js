import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../api/axiosBaseQuery";

const playlistApi = createApi({
  reducerPath: 'playlist',
  baseQuery: axiosBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => {
    return {
      fetchPlaylists: builder.query({
        providesTags: ["updatePlaylist", "createPlaylist"],
        query: () => {
          return {
            url: "/playlist",
            method: "GET"
          }
        }
      }),
      fetchOnePlaylist: builder.query({
        providesTags: ["updatePlaylist"],
        query: (id) => {
          return {
            url: `/playlist/${id}`,
            method: "GET"
          }
        }
      }),
      createPlaylist: builder.mutation({
        providesTags: ["createPlaylist"],
        query: (title) => {
          return {
            url: `/playlist/create`,
            data: {
              title
            },
            method: "PUT"
          }
        }
      }),
      updatePlaylist: builder.mutation({
        invalidatesTags: ["updatePlaylist"],
        query: (data) => {
          return {
            url: `/playlist/${data.id}/update`,
            data: data.form,
            method: "PATCH",
            headers: { "content-type": "multipart/form-data" }
          }
        }
      })
    }
  }
})

export const { useFetchPlaylistsQuery, useFetchOnePlaylistQuery, useCreatePlaylistMutation, useUpdatePlaylistMutation } = playlistApi;
export { playlistApi };