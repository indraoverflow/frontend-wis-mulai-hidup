import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@/lib/axios/axios-base-query";
import { useSession } from "next-auth/react";

export const userPasswordApi = createApi({
    reducerPath: "userPasswordApi",
    baseQuery: axiosBaseQuery(),
    tagTypes: ["UserPassword"],
    endpoints: (build) => ({
        editPassword: build.mutation({
            query: ({token, data}: {token: string, data: any}) => ({
                url: `/auth/changepassword?token=${token}`,
                method: "POST",
                data: data,
            }),
        }),
    }),
});

export const { useEditPasswordMutation } = userPasswordApi;