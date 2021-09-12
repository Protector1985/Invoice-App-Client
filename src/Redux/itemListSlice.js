import {createSlice} from '@reduxjs/toolkit'

const itemListSlice = createSlice({
    name: "Item List Rows",
    initialState:{
        rows: 0
    },

    reducers: {
        addRow: (state, action) => {
            state.rows += 1
        }
    }

})

export const {addRow} = itemListSlice.actions
export default itemListSlice.reducer