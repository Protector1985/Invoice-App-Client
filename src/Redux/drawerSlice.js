import { createSlice } from '@reduxjs/toolkit'

export const drawerSlice = createSlice({
    name: "Drawer State",
    initialState: {
        drawerOpen: false,
        modType: "",
        invoiceNumber: "",
    },
    reducers: {
        toggleOpen: (state, action) => {
            console.log(action.payload.invoice)
            state.drawerOpen = true;
            state.modType = action.payload.type;
            state.invoiceNumber = action.payload.invoice;
        },
        toggleClose: (state) => {
            state.drawerOpen = false;
        },
        
    },
})

export const {toggleOpen, toggleClose} = drawerSlice.actions
export default drawerSlice.reducer;