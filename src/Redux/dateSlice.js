import {createSlice} from '@reduxjs/toolkit'

const dateSlice = createSlice ({
    name:"Date Data",
    initialState: {
        invoiceDateMonth: null,
        invoiceDateDay: null,
        invoiceDateYear: null,
        dueIn: 1,
        ISO: new Date().toISOString(),
    },

    reducers: {
        setDate: (state, action) => {
            state.invoiceDateMonth = action.payload.month
            state.invoiceDateDay = action.payload.day
            state.invoiceDateYear = action.payload.year
            state.ISO = action.payload.ISO
        },
        setDueIn: (state, action) => {
            console.log(action.payload)
            state.dueIn = action.payload.value
        },
        resetDateState: (state) => {
            state.invoiceDateMonth= null;
            state.invoiceDateDay = null;
            state.invoiceDateYear = null;
            state.dueIn = 1;
            state.ISO= null;
        },
        editDate: (state, action) => {
            state.invoiceDateMonth= action.payload.invoiceDateMonth;
            state.invoiceDateDay = action.payload.invoiceDateDay;
            state.invoiceDateYear = action.payload.invoicedateYear;
            state.dueIn = action.payload.dueIn;
            state.ISO = `${action.payload.invoiceDateYear}-${action.payload.invoiceDateMonth}-${action.payload.invoiceDateDay}`
        }
    }
})

export const {setDate, setDueIn, resetDateState, editDate} = dateSlice.actions
export default dateSlice.reducer