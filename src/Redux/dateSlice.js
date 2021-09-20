import {createSlice} from '@reduxjs/toolkit'

const dateSlice = createSlice ({
    name:"Date Data",
    initialState: {
        invoiceDateMonth: null,
        invoiceDateDay: null,
        invoiceDateYear: null,
        dueIn: null,
        ISO: null,
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
            state.dueIn = null;
            state.ISO= null;
        }
    }
})

export const {setDate, setDueIn, resetDateState} = dateSlice.actions
export default dateSlice.reducer