import { createSlice } from '@reduxjs/toolkit'

export const WishListSlice = createSlice({
  name: 'counterWishList',
  initialState: {
    wishValue:  JSON.parse(localStorage.getItem('wishListData')) || [],
  },
  reducers: {

     addWishData: (state, action) => {
       // Check if wishValue is an array before adding
       if (Array.isArray(state.wishValue)) {
         state.wishValue.push(action.payload); // Add new item to the array
       } else {
         state.wishValue = [action.payload]; // If not an array, initialize as array
       }
     },
     removeWishData: (state, action) => {
       // Remove the item from the wishValue array
       state.wishValue = state.wishValue.filter(item => item.id !== action.payload);
     },
     },
     });

export const { addWishData, removeWishData } = WishListSlice.actions;




export default WishListSlice.reducer