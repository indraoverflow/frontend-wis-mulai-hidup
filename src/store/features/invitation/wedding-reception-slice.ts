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
      invalidatesTags: ["CreateInvitationTypes"],
    }),
    getInvitationByUserId: build.query({
      query: (id) => {
        return {
          url: `/receptions/user/${id}`,
          method: "GET",
        };
      },
      providesTags: ["CreateInvitationTypes"],
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

// export const updateInvitationById = (id: string) =>
//   weddingReceptionApi.util.updateQueryData(
//     "getInvitationByUserId",
//     id
//     // (invitation) => invitation
//   );

export const {
  useAddInvitationMutation,
  useGetInvitationByUserIdQuery,
  useGetInvitationByIdQuery,
  useAddInvitationMediaMutation,
} = weddingReceptionApi;
