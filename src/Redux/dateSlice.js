import {createSlice} from '@reduxjs/toolkit'

const dateSlice = createSlice ({
    name:"Date Data",
    initialState: {
        invoiceDateMonth: null,
        invoiceDateDay: null,
        invoiceDateYear: null,
        dueIn: null,
    },

    reducers: {
        setDate: (state, action) => {
            state.invoiceDateMonth = action.payload.month
            state.invoiceDateDay = action.payload.day
            state.invoiceDateYear = action.payload.year
        },
        setDueIn: (state, action) => {
            console.log(action.payload)
            state.dueIn = action.payload.value
        }
    }
})

export const {setDate, setDueIn} = dateSlice.actions
export default dateSlice.reducer