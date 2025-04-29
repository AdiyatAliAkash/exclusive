import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react'

const initialState = {
  sellItem: localStorage.getItem('sell') ? JSON.parse(localStorage.getItem('sell')):[],
}

export const checkOutSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    checkOut: (state, action) => {
        let checkOutItem = state.sellItem.findIndex((item)=> item.id == action.payload.id)
        if(checkOutItem !== -1) {
            state.sellItem[checkOutItem].qun +=1
        } else{
            state.sellItem = [...state.sellItem, action.payload]
            localStorage.setItem('sell', JSON.stringify(state.sellItem))
        }
    }
  },
})

// Action creators are generated for each case reducer function
export const { checkOut } = checkOutSlice.actions

export default checkOutSlice.reducer