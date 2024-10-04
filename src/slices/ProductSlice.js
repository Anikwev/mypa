import { createSlice } from '@reduxjs/toolkit'

export const PropertySlice = createSlice({
  name: 'counterProperty',
  initialState: {
    value: JSON.parse(localStorage.getItem('propertyDetailsData'))? JSON.parse(localStorage.getItem('propertyDetailsData')): null,
  },
  reducers: {
    productData: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { productData } = PropertySlice.actions

export default PropertySlice.reducer