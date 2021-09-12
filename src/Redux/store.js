import { configureStore } from '@reduxjs/toolkit'
import invoiceDataSlice from './invoiceDataSlice'
import drawerSlice from './drawerSlice'
import inputFieldsSlice from './inputFieldsSlice'
import itemListSlice from './itemListSlice'
import dateSlice from './dateSlice'

export default configureStore({
  reducer: {
    invoiceData: invoiceDataSlice,
    drawerOpen: drawerSlice,
    inputFieldsSlice: inputFieldsSlice,  
    itemListSlice: itemListSlice,
    dateSlice: dateSlice
  },
})
