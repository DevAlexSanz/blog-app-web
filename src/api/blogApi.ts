import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { config } from "@config/config";

const { apiUrl } = config;

const BlogApi = createApi({
  reducerPath: "BlogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl,
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query: (credentials) => ({
        url: "/auth/register",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export default BlogApi;
