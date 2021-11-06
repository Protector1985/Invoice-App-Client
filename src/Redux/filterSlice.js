import {createSlice} from '@reduxjs/toolkit'
import drawerSlice from './drawerSlice'

export const filterSlice = createSlice({
    name: "Filter State",
    initialState:  {
        value: "ALL"
    },

    reducers: {
        changeFilter: (state, action) => {
            state.value = action.payload.value
            }
    }
})

export const {changeFilter} = filterSlice.actions
export default filterSlice.reducer;