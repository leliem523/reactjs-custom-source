import { configureStore } from '@reduxjs/toolkit'
import HomeStore from '../modules/home/store'

export const store = configureStore({
  reducer: {
    ...HomeStore,
  },
})