import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../api/axiosBaseQuery";

const recomendationsApi = createApi({
  reducerPath: "recommendations",
  baseQuery: axiosBaseQuery({ baseUrl: "" }),
  endpoints: builder => {
    return {
      fetchRecommendations: builder.query({
        query: () => {
          return {
            url: "/recommendations",
            method: "GET"
          }
        }
      })
    }
  }
})

export const { useFetchRecommendationsQuery } = recomendationsApi;
export { recomendationsApi };