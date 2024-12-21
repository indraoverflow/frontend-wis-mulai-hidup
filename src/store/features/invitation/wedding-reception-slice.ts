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
        // console.log("rtk ", data);

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
    getInvitationByUniqueId: build.query({
      query: (uniqueId) => {
        return {
          url: `/receptions/get_by_unique_id/${uniqueId}`,
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
    updateInvitation: build.mutation({
      query: ({ data, uniqueId}) => {
        console.log("rtk ", data);
    
        return {
          url: `/receptions/${uniqueId}`,
          method: "PATCH",
          data: data,
        };
      },
      invalidatesTags: ["CreateInvitationTypes"],
    }),
    editInvitationMedia: build.mutation({
      query: (data) => {
        return {
          url: `/receptions/update_media/${data.receptionId}`,
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
  useGetInvitationByUniqueIdQuery,
  useAddInvitationMediaMutation,
  useUpdateInvitationMutation,
  useEditInvitationMediaMutation,
  
} = weddingReceptionApi;
