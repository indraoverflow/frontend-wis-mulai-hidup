import { createApi } from "@reduxjs/toolkit/query/react";

import { axiosBaseQuery } from "@/lib/axios/axios-base-query";
import { CreateInvitationRequest } from "@/types/invitation-types";

export const weddingReceptionApi = createApi({
  reducerPath: "weddingReceptionApi",
  tagTypes: ["CreateInvitationTypes"],
  baseQuery: axiosBaseQuery(),
  endpoints: (build) => ({
    addInvitation: build.mutation({
      query: (data) => {
        return {
          url: "/receptions/create",
          method: "POST",
          data: data,
        };
      },
    }),
    getInvitationByUserId: build.query({
      query: (id) => {
        return {
          url: `/receptions/user/${id}`,
          method: "GET",
        };
      },
    }),
    getInvitationById: build.query({
      query: (id) => {
        return {
          url: `/receptions/${id}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useAddInvitationMutation,
  useGetInvitationByUserIdQuery,
  useGetInvitationByIdQuery,
} = weddingReceptionApi;
