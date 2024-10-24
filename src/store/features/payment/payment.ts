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
        paymentGateway: build.query({
            query: (id) => ({
                url: `https://api.xendit.co/v2/payment_methods/${id}`,
                method: "POST",
            }),
        }),
    }),
});

export const { useGetPaymentInfoQuery, useCreatePaymentMutation, usePaymentGatewayQuery } = paymentApi;