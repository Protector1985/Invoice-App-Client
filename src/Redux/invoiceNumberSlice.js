import {createSlice} from "@reduxjs/toolkit"

const invoiceNumberSlice = createSlice({
    name: "Invoice Number",
    initialState: {
        invoiceNumber: ""
    },

    reducers: {
        setInvoiceNumber: (state, action) => {
            state.invoiceNumber = action.payload.invoiceNumber
        }
    }
})

export const {setInvoiceNumber} = invoiceNumberSlice.actions
export default invoiceNumberSlice.reducer