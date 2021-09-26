import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const invoiceDataService = createApi({
    baseQuery: fetchBaseQuery({baseUrl:"http://localhost:5000/"}),
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

        updatePayment: builder.mutation({
            query (body){
            return {
                url:`invoice/${body.invoiceNumber}/updatePayment`,
                method: "POST",
                mode: "cors",
                body  
            }}
        })
    })
})

export const {useGetAllInvoicesQuery, useSubmitDataMutation, useGetOneInvoiceQuery, useUpdatePaymentMutation} = invoiceDataService