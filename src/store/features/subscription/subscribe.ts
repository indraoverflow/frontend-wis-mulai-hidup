import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@/lib/axios/axios-base-query";

export const subscribeApi = createApi({
    reducerPath: "subscribeApi",
    baseQuery: axiosBaseQuery(),
    tagTypes: ["Subscribe"],
    endpoints: (build) => ({
        getSubscribe: build.query({
            query: () => ({
                url: `/subscription/type`,
                method: "GET",
            }),
        }),
    }),
});

export const { useGetSubscribeQuery } = subscribeApi;