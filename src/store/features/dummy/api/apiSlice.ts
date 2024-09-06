import { DummyUser } from "@/types/dummy-user";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),
  endpoints: (builder) => ({
    getUser: builder.query<DummyUser, string>({
      query: (id) => `/users/${id}`,
    }),
  }),
});

export const { useGetUserQuery } = userApi;
