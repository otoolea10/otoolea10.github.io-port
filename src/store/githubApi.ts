// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//Typed interfaces for the auth response
export interface AuthResponse {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  repos_url: string;
}

// Define a service using a base URL and expected endpoints
export const githubApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com" }),
  serializeQueryArgs: () => "user",
  endpoints: (builder) => ({
    user: builder.query<AuthResponse, string>({
      query: (queries) => ({
        url: `/users/${queries}`,
        method: "GET"
      })
    })
  })
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useUserQuery } = githubApi;
