import {createSlice} from '@reduxjs/toolkit'

const itemListSlice = createSlice({
    name: "Item List Rows",
    initialState:{
        rows: 1,
        items: [
            {description:"", qty: null, pricePerItem: null, total: null},
        ],
        destroy: []

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
        },
        deleteRow: (state, action) => {
            const index = action.payload.index;
            if(state.items.length >= 1) {
                state.destroy.push(state.items[index].id)
                state.items.splice(index, 1)
            }  
        },
        resetItemState: (state) => {
            state.rows = 1;
            state.items= [
                {description:"", qty: "", pricePerItem: "", total: ""},
            ]
            state.destroy = []
        },

        editItems: (state, action) => {
            state.items = action.payload.items
        }
    }

})

export const {addRow, editRow, deleteRow, resetItemState, editItems} = itemListSlice.actions
export default itemListSlice.reducer