import { createApi } from "@reduxjs/toolkit/query/react";

import { axiosBaseQuery } from "@/lib/axios/axios-base-query";

export const weddingReceptionApi = createApi({
  reducerPath: "weddingReceptionApi",
  tagTypes: ["CreateInvitationTypes"],
  baseQuery: axiosBaseQuery(),
  endpoints: (build) => ({
    addInvitation: build.mutation({
      query: (data) => {
        console.log("data in rtk query", data);

        return {
          url: "/receptions/create",
          method: "POST",
          data: data,
        };
      },
    }),
  }),
});

export const { useAddInvitationMutation } = weddingReceptionApi;
