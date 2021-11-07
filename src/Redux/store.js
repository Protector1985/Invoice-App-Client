import { configureStore } from '@reduxjs/toolkit'
import invoiceDataSlice from './invoiceDataSlice'
import drawerSlice from './drawerSlice'
import inputFieldsSlice from './inputFieldsSlice'
import itemListSlice from './itemListSlice'
import dateSlice from './dateSlice'
import invoiceNumberSlice from './invoiceNumberSlice'
import filterSlice from './filterSlice'
import {invoiceDataService} from './services/invoiceDataService'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import themeSlice from './themeSlice'

const store = configureStore({
  reducer: {
    [invoiceDataService.reducerPath]:invoiceDataService.reducer,
    invoiceData: invoiceDataSlice,
    drawerOpen: drawerSlice,
    inputFieldsSlice: inputFieldsSlice,  
    itemListSlice: itemListSlice,
    dateSlice: dateSlice,
    invoiceNumberSlice: invoiceNumberSlice,
    themeSlice: themeSlice,
    filterSlice: filterSlice,
  },

  
})

setupListeners(store.dispatch)

export default store