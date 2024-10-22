import { createApi } from "@reduxjs/toolkit/query/react";

import { axiosBaseQuery } from "@/lib/axios/axios-base-query";

export const weddingReceptionApi = createApi({
  reducerPath: "weddingReceptionApi",
  tagTypes: ["CreateInvitationTypes"],
  baseQuery: axiosBaseQuery(),
  endpoints: (build) => ({
    addInvitation: build.mutation({
      query: (data) => {
        console.log("rtk ", data);

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
    addInvitationMedia: build.mutation({
      query: (data) => {
        return {
          url: `/receptions/upload_media/${data.receptionId}`,
          method: "POST",
          headers: {
            "Content-Type": "multipart/form-data",
            Accept: "multipart/form-data",
          },
          data: data.media,
        };
      },
    }),
  }),
});

export const {
  useAddInvitationMutation,
  useGetInvitationByUserIdQuery,
  useGetInvitationByIdQuery,
  useAddInvitationMediaMutation,
} = weddingReceptionApi;
