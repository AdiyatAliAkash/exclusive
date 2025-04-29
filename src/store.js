import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from './components/ProductSlice'
import checkOutSlice from './components/checkOute'

export default configureStore({
  reducer: {
    Product: ProductSlice,
    buyProduct: checkOutSlice
  },
})