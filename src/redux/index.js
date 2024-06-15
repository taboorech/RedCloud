import { configureStore } from "@reduxjs/toolkit";
import { searchBarReducer } from "./slices/searchBarSlice";
import { searchFiltersReducer } from "./slices/searchFiltersSlice";
import { authApi } from "./apis/authApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { playlistApi } from "./apis/playlistApi";
import { songApi } from "./apis/songApi";
import { userApi } from "./apis/userApi";
import { searchApi } from "./apis/searchApi";
import { recomendationsApi } from "./apis/recommendationsApi";

export const store = configureStore({
  reducer: {
    searchBar: searchBarReducer,
    searchFilter: searchFiltersReducer,
    [authApi.reducerPath]: authApi.reducer,
    [playlistApi.reducerPath]: playlistApi.reducer,
    [songApi.reducerPath]: songApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [searchApi.reducerPath]: searchApi.reducer,
    [recomendationsApi.reducerPath]: recomendationsApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(playlistApi.middleware)
      .concat(songApi.middleware)
      .concat(userApi.middleware)
      .concat(searchApi.middleware)
      .concat(recomendationsApi.middleware)
  },
});

setupListeners(store.dispatch);

export { changeValue as changeSearchBarValue } from "./slices/searchBarSlice";
export { setActiveFilter } from "./slices/searchFiltersSlice";
export { useAuthMutation, useRegistrationMutation, useLogoutMutation } from "./apis/authApi";
export { useFetchPlaylistsQuery, useFetchOnePlaylistQuery, useCreatePlaylistMutation, useUpdatePlaylistMutation } from "./apis/playlistApi";
export { useFetchSongQuery, useCreateSongMutation } from "./apis/songApi";
export { useFetchUserInfoQuery, useFetchProfileInfoQuery, useUpdateInfoMutation, useUpdateAvatarMutation, useFetchFriendsQuery, useAddFriendMutation } from "./apis/userApi";
export { useFetchDataByRequestMutation } from "./apis/searchApi";
export { useFetchRecommendationsQuery } from "./apis/recommendationsApi";