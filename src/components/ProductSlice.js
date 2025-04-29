import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react'

const initialState = {
  cartItem: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')):[],
}

export const ProductSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let findProduct = state.cartItem.findIndex((item)=> item.id == action.payload.id)
      if(findProduct !== -1) {
        state.cartItem[findProduct].qun +=1
      } else{
        state.cartItem = [...state.cartItem, action.payload]
        localStorage.setItem('cart', JSON.stringify(state.cartItem))

      }
    },

    productRemove: (state, action) => {
      state.cartItem.splice(action.payload, 1)
      localStorage.setItem('cart', JSON.stringify(state.cartItem))
    },

    increment: (state, action) => {
      if(state.cartItem[action.payload].qun < 10) {
        state.cartItem[action.payload].qun += 1
        localStorage.setItem('cart', JSON.stringify(state.cartItem))
      }
    },

    decrement: (state, action) => {
      if (state.cartItem[action.payload].qun > 1) {
        state.cartItem[action.payload].qun -= 1

      }
    }

  },
})

// Action creators are generated for each case reducer function
export const { addToCart, productRemove, increment, decrement } = ProductSlice.actions

export default ProductSlice.reducer