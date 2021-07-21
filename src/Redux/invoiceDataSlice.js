import { createSlice } from '@reduxjs/toolkit'
import invoiceData from './invoiceData'

export const invoiceDataSlice = createSlice({
    name: 'Invoice Data',
    initialState: {
        invoiceData: invoiceData
    },
    reducers: {
      
    },
  })
  
  // Action creators are generated for each case reducer function
  // export const { increment, decrement, incrementByAmount } = counterSlice.actions
  
  export default invoiceDataSlice.reducer