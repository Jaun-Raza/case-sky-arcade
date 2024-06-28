import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const Api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:1024/',
        prepareHeaders: (headers, { pageParam }) => {
            if (pageParam) {
              headers.set('page', String(pageParam));
            }
            return headers;
        }
    }),
    endpoints: (builder) => ({
        // Get Requests
        getAnnouncement: builder.query({ query: () => 'announcement/get-admin-announcement' }),

        // Posts Requests
        addAnnouncement: builder.mutation({
            query: (data) => ({
                url: 'announcement/add-announcement',
                method: 'POST',
                body: data
            })
        }),
        deleteAnnouncement: builder.mutation({
            query: (data) => ({
                url: 'announcement/delete-announcement',
                method: 'POST',
                body: data
            })
        })
    })
})

export const { useGetAnnouncementQuery, useAddAnnouncementMutation, useDeleteAnnouncementMutation } = Api
