import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../api/axiosBaseQuery";

const searchApi = createApi({
  reducerPath: 'search',
  baseQuery: axiosBaseQuery({ baseUrl: "" }),
  endpoints: builder => {
    return {
      fetchDataByRequest: builder.mutation({
        query: (request) => {
          return {
            url: "/search",
            data: { request },
            method: "POST"
          }
        }
      })
    }
  }
})

export const { useFetchDataByRequestMutation } = searchApi;
export { searchApi };