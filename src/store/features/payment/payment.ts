import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@/lib/axios/axios-base-query";

export const paymentApi = createApi({
    reducerPath: "paymentApi",
    tagTypes: ["Payment"],
    baseQuery: axiosBaseQuery(),
    endpoints: (build) => ({
        getPaymentInfo: build.query({
            query: (id) => ({
                url: `/payment/info/${id}`,
                method: "GET",
            }),
        }),
        createPayment: build.mutation({
            query: (data) => ({
                url: `/payment/create`,
                method: "POST",
                data: data,
            }),
        }),
        getPaymentStatus: build.query({
            query: (id) => ({
                url: `/payment/status/${id}`,
                method: "GET",
            }),
        }),
    }),
});

export const { useGetPaymentInfoQuery, useCreatePaymentMutation, useGetPaymentStatusQuery } = paymentApi;