import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@/lib/axios/axios-base-query";

export const getUserProfileApi = createApi({
    reducerPath: "getUserProfileApi",
    tagTypes: ["UserProfileTypes"],
    baseQuery: axiosBaseQuery(),
    endpoints: (build) => ({
        getUserProfile: build.mutation({
            query: (id) => {
                return {
                    url: `/user/${id}`,
                    method: "GET",
                };
            },
        }),
    }),
});

export const { useGetUserProfileMutation } = getUserProfileApi;

export const userProfileApi = createApi({
    reducerPath: "userProfileApi",
    tagTypes: ["UserProfileTypes"],
    baseQuery: axiosBaseQuery(),
    endpoints: (build) => ({
        editProfile: build.mutation({
            query: ({ id, data }: { id: string; data: any }) => ({
                url: `/user/${id}`,
                method: "PATCH",
                data: data,
            }),
        }),
    }),
});

export const { useEditProfileMutation } = userProfileApi;