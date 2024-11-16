import { createApi } from "@reduxjs/toolkit/query/react";

import { axiosBaseQuery } from "@/lib/axios/axios-base-query";

export const guestApi = createApi({
    reducerPath: "guestApi",
    tagTypes: ["GuestTypes"],
    baseQuery: axiosBaseQuery(),

    endpoints: (build) => ({
        getGuestByUniqueId: build.query({
            query: (uniqueId) => {
                return {
                    url: `/guest/${uniqueId}`,
                    method: "GET",
                };
            },
        }),
        addGuest: build.mutation({
            query: (data) => {
                return {
                    url: "/guest/create",
                    method: "POST",
                    data: data,
                };
            },
            invalidatesTags: ["GuestTypes"],
        }),
        getGuestById: build.query({
            query: ({ uniqueId, id }) => {
                return {
                    url: `/guest/${uniqueId}?to=${id}`,
                    method: "GET",
                };
            },
        }),
        updateGuest: build.mutation({
            query: (data) => {
                return {
                    url: `/guest/update/${data.unique_id}`,
                    method: "PATCH",
                    data: data,
                };
            },
        }),
    }),
});

export const { 
    useGetGuestByUniqueIdQuery,
    useGetGuestByIdQuery,
    useAddGuestMutation, 
    useUpdateGuestMutation    
} = guestApi;