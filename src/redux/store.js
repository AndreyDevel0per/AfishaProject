import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './categorySlice'
import eventSlice from './eventSlice'
import tokenSlice from './tokenSlice'
import searchSlice from './searchSlice'
import formSlice from './formSlice'

export const store = configureStore({
  reducer: {
    categories: categorySlice,
    events: eventSlice,
    token: tokenSlice,
    search: searchSlice,
    formValue: formSlice
  },
})