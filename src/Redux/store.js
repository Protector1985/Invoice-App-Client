import { configureStore } from '@reduxjs/toolkit'
import invoiceDataSlice from './invoiceDataSlice'
import drawerSlice from './drawerSlice'

export default configureStore({
  reducer: {
    invoiceData: invoiceDataSlice,
    drawerOpen: drawerSlice,
    
  },
})