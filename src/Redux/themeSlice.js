import {createSlice} from '@reduxjs/toolkit'


export const themeSlice = createSlice({
    name: "Theme State",
    initialState:  {
        darkMode: false
    },

    reducers: {
        changeTheme: (state, action) => {
            state.darkMode = !state.darkMode
            }
    }
})

export const {changeTheme} = themeSlice.actions
export default themeSlice.reducer;