import { createApi } from "@reduxjs/toolkit/query/react";

import { axiosBaseQuery } from "@/lib/axios/axios-base-query";

export const messageApi = createApi({
  reducerPath: "messageApi",
  tagTypes: ["message"],
  baseQuery: axiosBaseQuery(),

  endpoints: (build) => ({
    getGuestByUniqueId: build.query({
      query: (uniqueId) => {
        return {
          url: `/guest?to=${uniqueId}`,
          method: "GET",
        };
      },
      providesTags: ["message"],
    }),

    getAllInvitationMessage: build.query({
      query: (id) => {
        return {
          url: `/messages/get-reception-messages/${id}`,
          method: "GET",
        };
      },
      providesTags: ["message"],
    }),
    addGuestMessage: build.mutation({
      query: (data) => {
        return {
          url: `/messages/create/${data.guestUniqueId}`,
          method: "POST",
          data: { message: data.message, status: data.status, name: data.name },
        };
      },
      invalidatesTags: ["message"],
    }),
  }),
});

export const {
  useGetGuestByUniqueIdQuery,
  useGetAllInvitationMessageQuery,
  useAddGuestMessageMutation,
} = messageApi;
