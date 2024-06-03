import mainInstance from "./mainInstance";

export const axiosBaseQuery = 
  ({ baseUrl } = { baseUrl: mainInstance.baseURL }) => 
  async ({ url, method, data, params }) => {
    try {
      const result = await mainInstance({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: { status: err.response?.status, data: err.response?.data || err.message },
      };
    }
  };