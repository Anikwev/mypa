import { configureStore } from '@reduxjs/toolkit'
import UserSlice from './slices/UserSlice'
import ProductSlice from './slices/ProductSlice'
import WishListSlice from './slices/WishListSlice'

export default configureStore({
  reducer: {
    counter: UserSlice,
    counterProperty : ProductSlice,
    counterWishList : WishListSlice,
  },
})