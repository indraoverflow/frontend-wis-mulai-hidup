import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@/lib/axios/axios-base-query";

export const userProfileApi = createApi({
    reducerPath: "userProfileApi",
    tagTypes: ["UserProfileTypes"],
    baseQuery: axiosBaseQuery(),
    endpoints: (build) => ({
        getUserProfile: build.query({
            query: (id) => ({
                url: `/user/${id}`,
                method: "GET",
            }),
        }),
        editProfile: build.mutation({
            query: ({ id, data }: { id: string; data: any }) => ({
                url: `/user/${id}`,
                method: "PATCH",
                data: data,
            }),
        }),
    }),
});

export const { useGetUserProfileQuery, useEditProfileMutation } = userProfileApi;