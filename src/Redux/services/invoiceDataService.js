import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const invoiceDataService = createApi({
    baseQuery: fetchBaseQuery({baseUrl:"https://execudevserv.xyz/"}),
    endpoints: (builder) => ({
        getAllInvoices: builder.query({
            query: (request) => ({
                url:`invoice/${request}`,
                method: "GET",
                mode: "cors",
            }),
            
            
        }),

        submitData: builder.mutation({
            query: (body) => ({
                url: "invoice/submitData",
                method: "POST",
                mode: "cors",
                body  
            })
        }),

        getOneInvoice: builder.query({
            query: (invoiceNumber) => ({
                url:`invoice/${invoiceNumber}`,
                method: "GET",
                mode: "cors",
            })
            
        }),

        updateCommand: builder.mutation({
            query (body){
            return {
                url:`invoice/${body.invoiceNumber}/command`,
                method: "POST",
                mode: "cors",
                keepalive: false,
                body  
            }}
        }),
    })
})

export const {useGetAllInvoicesQuery, useSubmitDataMutation, useGetOneInvoiceQuery, useUpdateCommandMutation, useDeleteInvoiceMutation} = invoiceDataService