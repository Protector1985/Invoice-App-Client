import {createSlice} from "@reduxjs/toolkit";

const fieldErrorSlice = createSlice({
    name: "Field Errors",
    initialState: {
        fromStreet: "NO_ERROR",
        fromCity: "NO_ERROR",
        fromZip: "NO_ERROR",
        fromCountry: "NO_ERROR",
        toName:"NO_ERROR" ,
        toEmail: "NO_ERROR",
        toStreet: "NO_ERROR",
        toCity: "NO_ERROR",
        toZip: "NO_ERROR",
        toCountry: "NO_ERROR", 
        toProject: "NO_ERROR",
        isoDate: "NO_ERROR",
        itemArrayIndexErrors: []
    },
    reducers: {
        setInputErrors: (state, action) => {
            state.itemArrayIndexErrors = action.payload.itemArrayIndexErrors
            state.fromStreet = action.payload.emptyFieldErrors.fromStreet,
            state.fromCity = action.payload.emptyFieldErrors.fromCity,
            state.fromZip= action.payload.emptyFieldErrors.fromZip,
            state.fromCountry= action.payload.emptyFieldErrors.fromCountry,
            state.toName= action.payload.emptyFieldErrors.toName,
            state.toEmail= action.payload.emptyFieldErrors.toEmail,
            state.toStreet= action.payload.emptyFieldErrors.toStreet,
            state.toCity= action.payload.emptyFieldErrors.toCity,
            state.toZip= action.payload.emptyFieldErrors.toZip,
            state.toCountry= action.payload.emptyFieldErrors.toCountry, 
            state.toProject= action.payload.emptyFieldErrors.toProject,
            state.isoDate= action.payload.emptyFieldErrors.isoDate
        },

        resetInputErrors: (state) => {
            state.fromStreet = "NO_ERROR",
            state.fromCity = "NO_ERROR",
            state.fromZip = "NO_ERROR",
            state.fromCountry = "NO_ERROR",
            state.toName ="NO_ERROR" ,
            state.toEmail = "NO_ERROR",
            state.toStreet = "NO_ERROR",
            state.toCity = "NO_ERROR",
            state.toZip = "NO_ERROR",
            state.toCountry = "NO_ERROR", 
            state.toProject = "NO_ERROR",
            state.isoDate = "NO_ERROR",
            state.itemArrayIndexErrors = []
        }
    }
})

export const {setInputErrors, resetInputErrors} = fieldErrorSlice.actions;
export default fieldErrorSlice.reducer;