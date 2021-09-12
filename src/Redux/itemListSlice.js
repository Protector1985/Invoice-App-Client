import {createSlice} from '@reduxjs/toolkit'

const itemListSlice = createSlice({
    name: "Item List Rows",
    initialState:{
        rows: 1,
        items: [
            {description:"", qty: null, pricePerItem: null, total: null},
        ]
    },

    reducers: {
        addRow: (state, action) => {
            state.rows += 1
            state.items = [...state.items, {description:"", qty: null, pricePerItem: null, total: null}]
        },

        editRow: (state, action) => {
            const index = action.payload.index
            const key = action.payload.type
            state.items[index][key] = action.payload.value 
            state.items[index]["total"] = state.items[index]['qty'] * state.items[index]['pricePerItem']
        }
    }

})

export const {addRow, editRow} = itemListSlice.actions
export default itemListSlice.reducer