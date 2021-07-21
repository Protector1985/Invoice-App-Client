import { configureStore } from '@reduxjs/toolkit'
import invoiceDataSlice from './invoiceDataSlice'

export default configureStore({
  reducer: {
    invoiceData: invoiceDataSlice
  },
})