import { createSlice } from '@reduxjs/toolkit'


export const inputFieldsSlice = createSlice({
    name: "Input Fields",
    initialState: {
        fromStreet: "",
        fromCity: "",
        fromZip:"",
        fromCountry:"",
        toName:"",
        toEmail:"",
        toStreet: "",
        toCity: "",
        toZip: "",
        toCountry: "", 
        toProject: "",
    },

    reducers: {
        setFromStreet: (state, action) => {
            state.fromStreet = action.payload.fromStreet
        },
        setFromCity: (state, action) => {
            state.fromCity = action.payload.fromCity
        },
        setFromZip: (state, action) => {
            state.fromZip = action.payload.fromZip      
        },
        setFromCountry: (state, action) => {
            state.fromCountry = action.payload.fromCountry     
        },
        setToName: (state, action) => {
            state.toName = action.payload.toName      
        },
        setToEmail: (state, action) => {
            state.toEmail = action.payload.toEmail     
        },
        setToStreet: (state, action) => {
            state.toStreet = action.payload.toStreet
        },
        setToCity: (state, action) => {
            state.toCity = action.payload.toCity
        },
        setToZip: (state, action) => {
            state.toZip = action.payload.toZip
        },
        setToCountry: (state, action) => {
            state.toCountry = action.payload.toCountry  
        },
        setProjectDesc: (state, action) => {
            state.toProject = action.payload.toProject
        },
        resetDataState: (state) => {
            console.log("Resetting Data State!!!")
            state.fromStreet = "";
            state.fromCity= "";
            state.fromZip = "";
            state.fromCountry ="";
            state.toName = "";
            state.toEmail ="";
            state.toStreet = "";
            state.toCity = "";
            state.toZip = "";
            state.toCountry = "";
            state.toProject = "";
        }

    }

})

export const {resetDataState, setFromStreet, setFromCity, setFromZip, setFromCountry, setToName, setToEmail, setToStreet, setToCity, setToZip, setToCountry, setProjectDesc} = inputFieldsSlice.actions
export default inputFieldsSlice.reducer