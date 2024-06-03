import { configureStore } from "@reduxjs/toolkit";
import { searchBarReducer } from "./slices/searchBarSlice";
import { searchFiltersReducer } from "./slices/searchFiltersSlice";
import { authApi } from "./apis/authApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { playlistApi } from "./apis/playlistApi";

export const store = configureStore({
  reducer: {
    searchBar: searchBarReducer,
    searchFilter: searchFiltersReducer,
    [authApi.reducerPath]: authApi.reducer,
    [playlistApi.reducerPath]: playlistApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(playlistApi.middleware)
  },
});

setupListeners(store.dispatch);

export { changeValue as changeSearchBarValue } from "./slices/searchBarSlice";
export { setActiveFilter } from "./slices/searchFiltersSlice";
export { useAuthMutation, useRegistrationMutation, useFetchUserInfoQuery } from "./apis/authApi";
export { useFetchPlaylistsQuery } from "./apis/playlistApi";