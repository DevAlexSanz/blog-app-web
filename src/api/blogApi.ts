import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { config } from "@config/config";

const { apiUrl } = config;

const BlogApi = createApi({
  reducerPath: "BlogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl,
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    register: builder.mutation({
      query: ({ username, email, password }) => ({
        url: "/auth/register",
        method: "POST",
        body: {
          username,
          email,
          password,
        },
      }),
    }),
  }),
});

export default BlogApi;
